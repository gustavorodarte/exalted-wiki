---
tags:
  - type/moc
aliases:
  - Índice de Locais
---

# Locais

## Todos os Locais
```dataview
TABLE aliases AS "Também conhecido como"
FROM "World/Locations"
WHERE contains(tags, "type/location")
SORT file.name ASC
```

## Sem tag (precisam revisão)
```dataview
LIST
FROM "World/Locations"
WHERE !contains(tags, "type/location") AND !contains(tags, "type/moc")
SORT file.name ASC
```
