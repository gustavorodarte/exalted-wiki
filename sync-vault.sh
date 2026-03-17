#!/bin/bash
# Syncs the Obsidian vault content into the Quartz content/ folder.
# Usage: ./sync-vault.sh

VAULT_DIR="../Exalted: A era da Ascensão"
CONTENT_DIR="./content"

if [ ! -d "$VAULT_DIR" ]; then
  echo "Vault not found at: $VAULT_DIR"
  exit 1
fi

echo "Syncing vault → content/"

rsync -av --delete \
  --exclude='.obsidian/' \
  --exclude='.DS_Store' \
  --exclude='Inbox/' \
  --exclude='Templates/' \
  --exclude='CLAUDE.md' \
  --exclude='.claude/' \
  --exclude='.gitignore' \
  --exclude='.git/' \
  "$VAULT_DIR/" "$CONTENT_DIR/"

# Preserve the landing page (not part of the vault)
if [ ! -f "$CONTENT_DIR/index.md" ]; then
  echo "Warning: index.md was deleted by sync. Restoring from git..."
  git checkout -- "$CONTENT_DIR/index.md" 2>/dev/null
fi

echo "Done. $(find "$CONTENT_DIR" -name '*.md' | wc -l | tr -d ' ') markdown files synced."
