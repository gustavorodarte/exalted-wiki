---
tags:
  - type/moc
aliases:
  - Índice de Artefatos
---

# Artefatos e Itens

```dataview
TABLE aliases AS "Também conhecido como"
FROM "World/Items"
WHERE contains(tags, "type/artifact")
SORT file.name ASC
```
