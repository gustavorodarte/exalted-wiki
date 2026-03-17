# Exalted: A Era da Ascensão — Wiki

Wiki de lore para a campanha de Exalted 2nd Edition "A Era da Ascensão".

Acesse em: **https://gustavorodarte.github.io/exalted-wiki/**

## Stack

- **Obsidian** — editor de notas em Markdown com wiki-links e grafo visual
- **Quartz 4** — gerador de site estático que renderiza o vault do Obsidian (grafo, backlinks, busca)
- **GitHub Pages** — hospedagem gratuita, deploy automático via GitHub Actions

## Estrutura do conteúdo

```
content/
├── World/
│   ├── People/        ← NPCs, facções, deuses, criaturas
│   ├── Locations/     ← Vilas, geografia, mapas
│   ├── History/       ← Textos fonte (cartas, narrativas, capítulos)
│   └── Items/         ← Artefatos
├── Campaigns/
│   ├── Era da Ascensão/Characters/   ← PCs, prelúdios, interlúdios
│   └── Sessions/                     ← Notas de sessão
└── Attachments/       ← Imagens (portraits, mapas, sessões)
```

## Workflow

1. Escreva lore no Obsidian (interlúdios, diários, cartas)
2. Sincronize para o Quartz: `./sync-vault.sh`
3. Commit e push — o deploy é automático

## Desenvolvimento local

```bash
npm i
npx quartz build --serve   # preview em localhost:8080
```

## Sync do vault

O script `sync-vault.sh` copia o conteúdo do vault Obsidian para `content/`, excluindo arquivos internos (.obsidian, Inbox, Templates).

```bash
./sync-vault.sh
```
