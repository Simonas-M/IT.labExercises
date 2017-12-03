# JavaScript

### Reikia sukurti HTML puslapį, kuriame būtų bent viena duomenų įvedimo forma ir bent viena lentelė. Tuomet atskirame JavaScript faile reikia parašyti skriptus, kuriuose būtų realizuotas:

* __Formos laukų validavimas:__
    * Įvedimo laukas, kuriame kažkas turi būti įvesta (kuris negali būti paliktas tuščias)
    * Įvedimo laukas, kuriame turi būti įvestas sveikas teigiamas skaičius
    * Įvedimo laukas (-ai), kuriame (-iuose) turi būti įvesta teisinga data (metai, mėnuo, diena) (pvz. vasaris negali turėti 30 dienų); būtina naudoti Date objektą
* __HTML puslapio elementų paslėpimas/parodymas (ne išmetimas)__ panaudojant CSS savybę display, priklausomai nuo to, kas įvesta kokiame nors formos lauke (būtina naudoti jQuery biblioteką);
* __HTML puslapio dinaminis turinio modifikavimas__ (būtina naudoti jQuery biblioteką):
    * Egzistuojančių HTML dokumento žymių tekstinio turinio pakeitimas (pvz. paragrafo teksto pakeitimas)
    * Egzistuojančių žymių stiliaus pakeitimas (atributui style priskiriant naują reikšmę)
    * Egzistuojančių žymių išmetimas (pvz. ištrinti įvedimo lauke numeriu nurodytą paragrafą)
    * Naujų žymių įterpimas (pvz. teksto gale pridėti paragrafą su tekstu, įvestu įvedimo lauke)
* __Asinchroninis komunikavimas su nutolusiu serveriu:__
    * Įvedimo formoje pateiktų duomenų serializavimas JSON formatu ir patalpinimas vienoje iš šių sistemų (naudojantis pateikiamu API):
        * http://myjson.com/api
        * https://jsonblob.com/api
    * Duomenų (JSON formatu) išsitraukimas iš aukščiau nurodytų sistemų
    * Gautų duomenų atvaizdavimas HTML puslapio lentelėje

## Projekto paleidimas:

1. install node.js and npm
2. `npm install json-server http-server`
3. run `$ json-server -w tasks.json`
4. run `$ http-server ./` in the projects folder
5. open _localhost:8080_ in the browser