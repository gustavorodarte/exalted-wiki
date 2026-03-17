---
tags:
  - type/moc
aliases:
  - Índice do Mundo
---

# Mundo — Índice Geral

Navegue por categoria:

- [[MOC Pessoas]] — NPCs, facções, criaturas, deuses
- [[MOC Locais]] — Vilas, cidades, regiões
- [[MOC História]] — Eventos, cartas, profecias
- [[MOC Artefatos]] — Itens mágicos, manses, armas

---

## Tudo por origem (prelúdio do personagem)

### Extraído dos Prelúdios
```dataview
TABLE file.folder AS "Pasta", tags AS "Tags"
FROM "World"
WHERE contains(tags, "source/prelude")
SORT file.folder ASC, file.name ASC
```

### Ainda sem tag de origem
```dataview
LIST
FROM "World"
WHERE !contains(tags, "source/prelude") AND !contains(tags, "type/moc")
SORT file.folder ASC, file.name ASC
```
