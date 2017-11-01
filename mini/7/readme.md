# Parašyti JSON failą ir jam schemą grafui aprašyti:

JSON failas:
```json
{
  "points": [
    {
      "name": "A",
      "weigth":3
    }, {
      "name": "B",
      "weigth":7
    }, {
      "name": "C",
      "weigth":5
    }, {
      "name": "D",
      "weigth":10
    }
  ],
  "links": [
    {
      "from": "A",
      "to": "B"
    }, {
      "from": "B",
      "to": "C"
    }, {
      "from": "C",
      "to": "D"
    }, {
      "from": "A",
      "to": "D"
    }, {
      "from": "B",
      "to": "D"
    }
  ]
}
```

JSON schema:
```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "type": "object",
  "properties": {
    "points": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {"type": "string"},
          "weigth": {"type": "number"} 
        }
      }
    },
    "links": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "from": {"type": "string"},
          "to": {"type": "string"} 
        }
      }
    }
  }
}
```