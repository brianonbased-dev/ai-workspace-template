const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const KNOWLEDGE_DIRS = ['knowledge/wisdom', 'knowledge/patterns', 'knowledge/gotchas'];
const VALID_TYPES = ['wisdom', 'pattern', 'gotcha'];
const REQUIRED_FIELDS = ['id', 'type', 'domain', 'confidence', 'source', 'tags'];

const TYPE_FOR_DIR = {
  'knowledge/wisdom': 'wisdom',
  'knowledge/patterns': 'pattern',
  'knowledge/gotchas': 'gotcha',
};

const errors = [];
const seenIds = new Set();
let fileCount = 0;

for (const dir of KNOWLEDGE_DIRS) {
  if (!fs.existsSync(dir)) continue;

  const expectedType = TYPE_FOR_DIR[dir];

  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md') || file === 'README.md' || file.startsWith('_')) continue;

    fileCount++;
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data: fm, content: body } = matter(raw);

    // Required fields
    for (const field of REQUIRED_FIELDS) {
      if (fm[field] === undefined || fm[field] === null || fm[field] === '') {
        errors.push(`${filePath}: missing required field '${field}'`);
      }
    }

    // Type must be valid
    if (fm.type && !VALID_TYPES.includes(fm.type)) {
      errors.push(`${filePath}: invalid type '${fm.type}' (must be: ${VALID_TYPES.join(', ')})`);
    }

    // Type must match directory
    if (expectedType && fm.type && fm.type !== expectedType) {
      errors.push(`${filePath}: type '${fm.type}' does not match directory (expected '${expectedType}')`);
    }

    // Confidence range
    if (fm.confidence !== undefined && (typeof fm.confidence !== 'number' || fm.confidence < 0 || fm.confidence > 1)) {
      errors.push(`${filePath}: confidence must be a number between 0 and 1 (got ${fm.confidence})`);
    }

    // Tags must be array
    if (fm.tags !== undefined && !Array.isArray(fm.tags)) {
      errors.push(`${filePath}: tags must be an array`);
    }

    // Duplicate ID
    if (fm.id) {
      if (seenIds.has(fm.id)) {
        errors.push(`${filePath}: duplicate id '${fm.id}'`);
      }
      seenIds.add(fm.id);
    }

    // Non-empty body
    if (!body || body.trim().length === 0) {
      errors.push(`${filePath}: empty content body`);
    }

    // ID prefix matches type
    const expectedPrefix = fm.type === 'wisdom' ? 'W.' : fm.type === 'pattern' ? 'P.' : fm.type === 'gotcha' ? 'G.' : null;
    if (expectedPrefix && fm.id && !fm.id.startsWith(expectedPrefix)) {
      errors.push(`${filePath}: id '${fm.id}' should start with '${expectedPrefix}' for type '${fm.type}'`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Validation failed: ${errors.length} error(s) in ${fileCount} files\n`);
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log(`All entries valid: ${fileCount} files, ${seenIds.size} unique IDs, 0 errors`);
}
