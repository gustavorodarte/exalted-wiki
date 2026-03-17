---
tags:
  - type/moc
aliases:
  - Índice de Pessoas
---

# Pessoas, Facções e Criaturas

## Pessoas
```dataview
TABLE aliases AS "Também conhecido como"
FROM "World/People"
WHERE contains(tags, "type/person")
SORT file.name ASC
```

## Facções
```dataview
TABLE aliases AS "Também conhecido como"
FROM "World/People"
WHERE contains(tags, "type/faction")
SORT file.name ASC
```

## Criaturas
```dataview
TABLE aliases AS "Também conhecido como"
FROM "World/People"
WHERE contains(tags, "type/creature")
SORT file.name ASC
```

## Sem tag de tipo (precisam revisão)
```dataview
LIST
FROM "World/People"
WHERE !contains(tags, "type/person") AND !contains(tags, "type/faction") AND !contains(tags, "type/creature") AND !contains(tags, "type/moc")
SORT file.name ASC
```
