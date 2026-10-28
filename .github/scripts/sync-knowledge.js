const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const API_URL = process.env.ORCHESTRATOR_URL || 'https://your-orchestrator.example.com';
const API_KEY = process.env.HOLOSCRIPT_API_KEY;
const WORKSPACE_ID = process.env.WORKSPACE_ID;
const BATCH_SIZE = 20;

if (!API_KEY) {
  console.error('HOLOSCRIPT_API_KEY secret not set');
  process.exit(1);
}
if (!WORKSPACE_ID) {
  console.error('WORKSPACE_ID secret not set');
  process.exit(1);
}

const KNOWLEDGE_DIRS = ['knowledge/wisdom', 'knowledge/patterns', 'knowledge/gotchas'];

function collectEntries() {
  const entries = [];

  for (const dir of KNOWLEDGE_DIRS) {
    if (!fs.existsSync(dir)) continue;

    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.md') || file === 'README.md' || file.startsWith('_')) continue;

      const filePath = path.join(dir, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data: fm, content: body } = matter(raw);

      if (!fm.id || !fm.type) {
        console.warn(`Skipping ${filePath}: missing id or type in frontmatter`);
        continue;
      }

      entries.push({
        id: fm.id,
        workspace_id: WORKSPACE_ID,
        type: fm.type,
        content: body.trim(),
        metadata: {
          confidence: fm.confidence || 0.8,
          domain: fm.domain || 'general',
          source: fm.source || filePath,
          tags: fm.tags || [],
        },
      });
    }
  }

  return entries;
}

async function syncBatch(entries) {
  const resp = await fetch(`${API_URL}/knowledge/sync`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-mcp-api-key': API_KEY,
      'x-workspace-id': WORKSPACE_ID,
    },
    body: JSON.stringify({ workspace_id: WORKSPACE_ID, entries }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Sync failed (${resp.status}): ${text}`);
  }

  return resp.json();
}

async function main() {
  const entries = collectEntries();
  console.log(`Found ${entries.length} knowledge entries`);

  if (entries.length === 0) {
    console.log('Nothing to sync');
    return;
  }

  let totalSynced = 0;

  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);
    const result = await syncBatch(batch);
    totalSynced += result.synced ?? batch.length;
    console.log(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: synced ${batch.length} entries (${result.total_entries} total in store)`);
  }

  console.log(`Knowledge sync complete: ${totalSynced} entries synced`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
