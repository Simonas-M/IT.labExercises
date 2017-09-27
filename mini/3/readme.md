## Rasti kiek XML dokumente yra skaičiaus reikšmės elementų

Atsakymas:
```xpath
count(//node()[string(number(text())) != string(number(''))])
```