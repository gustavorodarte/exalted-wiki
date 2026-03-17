# Exalted: A Era da Ascensão — Wiki

Wiki de lore para a campanha de Exalted 2nd Edition "A Era da Ascensão".

Acesse em: **https://gustavorodarte.github.io/exalted-wiki/**

## Stack

- **Obsidian** — editor de notas em Markdown com wiki-links e grafo visual
- **Quartz 4** — gerador de site estático que renderiza o vault do Obsidian (grafo, backlinks, busca)
- **GitHub Pages** — hospedagem gratuita, deploy automático via GitHub Actions

## Estrutura

```
exalted-wiki/
├── vault/                ← Obsidian abre esta pasta como vault
│   ├── .obsidian/        ← configurações e plugins do Obsidian
│   ├── World/
│   │   ├── People/       ← NPCs, facções, deuses, criaturas
│   │   ├── Locations/    ← Vilas, geografia, mapas
│   │   ├── History/      ← Textos fonte (cartas, narrativas, capítulos)
│   │   └── Items/        ← Artefatos
│   ├── Campaigns/        ← PCs, prelúdios, interlúdios, sessões
│   └── Attachments/      ← Imagens (portraits, mapas, sessões)
├── quartz/               ← Engine do Quartz
├── quartz.config.ts      ← Configuração do site
└── .github/workflows/    ← Deploy automático
```

## Workflow

1. Escreva lore no Obsidian (interlúdios, diários, cartas)
2. O plugin Obsidian Git faz commit e push automaticamente
3. GitHub Actions builda o Quartz e deploya no GitHub Pages

## Desenvolvimento local

```bash
npm i
npx quartz build -d vault --serve   # preview em localhost:8080
```
