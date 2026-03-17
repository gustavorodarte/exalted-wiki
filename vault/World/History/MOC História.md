---
tags:
  - type/moc
aliases:
  - Índice de História
---

# História, Eventos e Documentos

## Textos Fonte — Narrativas
```dataview
LIST
FROM "World/History"
WHERE contains(tags, "source-format/narrative")
SORT file.name ASC
```

## Textos Fonte — Capítulos (Bodhisattva Vinayaka)
```dataview
LIST
FROM "World/History"
WHERE contains(tags, "source-format/chapter")
SORT file.name ASC
```

## Textos Fonte — Cartas e Testamentos
```dataview
LIST
FROM "World/History"
WHERE contains(tags, "source-format/letter")
SORT file.name ASC
```

## Textos Fonte — Documentos
```dataview
LIST
FROM "World/History"
WHERE contains(tags, "source-format/document")
SORT file.name ASC
```

## Textos Fonte — Diálogos
```dataview
LIST
FROM "World/History"
WHERE contains(tags, "source-format/dialogue")
SORT file.name ASC
```

## Eventos Atômicos
```dataview
TABLE aliases AS "Também conhecido como"
FROM "World/History"
WHERE contains(tags, "type/event")
SORT file.name ASC
```

## Sem tag (precisam revisão)
```dataview
LIST
FROM "World/History"
WHERE !contains(tags, "type/source") AND !contains(tags, "type/event") AND !contains(tags, "type/moc")
SORT file.name ASC
```
