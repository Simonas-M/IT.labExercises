## Rasti pavadinimus knygų, kurias parašė knygos su ISBN = 12345 pirmasis autorius

Atsakymas:
```xpath
//knyga/autorius[@ref = //knyga[@isbn = '12345']/autorius[1]/@ref]/../pavadinimas/text()
```
or
```xpath
//pavadinimas/../autorius[@ref = //knyga[@isbn = '12345']/autorius[1]/@ref]/../pavadinimas/text()
```