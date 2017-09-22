__1.Pasirinkti savo XML dokumente vieną žymę (turinčią bent vieną protėvį, ir bent vieną anūką),parašyti XPath kelią, unikaliai nueinantį prie tos žymės, ir prie to kelio prirašyti dar vieną žingsnį,naudojant šias ašis:__

* ancestor, descendant,
* following-sibling, preceding-sibling,
* following, preceding,
* attribute

__(po vieną pavyzdį kiekvienai ašiai), mokėti paaiškinti rezultatą__

---

_pradinis elementas:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]
```

_gražina visus pasirinkto elemento protėvius:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]/ancestor::*
```

_gražina visus pasirinkto elemento anukus ir proanukius:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]/descendant::*
```

_gražina visus po pasirinkto elemento einančius tame pačiame bloke esančius elementus:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]/following-sibling::*
```

_gražina visus prieš pasirinktą elementą einančius tame pačiame bloke esančius elementus:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]/preceding-sibling::*
```

_gražina visus po pasirinktos elemento einančius elementus:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]/following::*
```

_gražina visus prieš pasirinktą elementą einančius elementus:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]/preceding::*
```

---

__2.Parašyti XPath kelią su predikatu, kurio viduje yra panaudotas XPath kelias (pvz.: rasti visas žymes A, kurių atributas x turi tokią pačią reikšmę kaip penktos dokumente žymės B atributas y; čia A, B, x, y pakeiskite į savo dokumento žymes/atributus), paaiškinti predikato veikimo principą__

---

_išraiška gražinanti visas prekes, kurių atsargų atnaujinimo data lygi pirmos prekės iš pieno skyriaus atsargų atnaujinimo datai_
```xpath
//item[restockDate = //category[@name='milk']/item[1]/restockDate]
```

---

__3.Funkcijas count() ir sum() (pvz., suskaičiuoti, kiek yra tam tikrų žymių/atributų, susumuoti tam tikrų žymių turinį), gebėti paaiškinti, ką ir kodėl grąžina išraiška sum(//*)šiam XML dokumentui: <a><b>2</b><c>3</c></a> (dėstytojas pakeis XML dokumentą)__

---

_suskaičiuoja kiek prekės žymių yra XML dokumente:_
```xpath
count(//item)
// => 7.0
```

_suskaičiuoja kiek yra prekės elementų, kurių kiekis didesnis už 7:_
```xpath
count(//item/quantity[text()>'7'])
// => 3.0
```

_suskaičiuoja koks iš viso yra prekių kiekis bendrai sudėjus:_
```xpath
sum(//item/quantity)
// => 49.0
```

---

__4.Operacijas <, =, + su skirtingų tipų operandais, ir paaiškinti, kaip apliekamas automatinis tipų konvertavimas (pvz. mokėti paaiškinti, kaip apskaičiuojamas išraiškos 5 < "kuku" rezultatas).__

---

_gražina visus prekės elementus kurių kaina yra didesnė už 0.9_
```xpath
//item[price > 0.9]
```

_gražina visus prekės elementus kurių kaina yra lygi 0.9_
```xpath
//item[price = 0.9]
```

_gražina visus prekės elementus kurių kaina yra mažesnė už 0.9 ir valiuta yra €_
```xpath
//item/price[@currency = '€'][text() > 0.9]/parent::item
```

---

__5.Reikia parašyti trijų žingsnių XPath išraišką (turi būti naudojamas bent vienas predikatas ir dvi skirtingos ašys) ir į atsiskaitymą atsinešti nupieštas aibes, kurios sukuriamos kiekvieno žingsnio apdorojimo rezultate__

---

_gražina visus prekės elementus, kurių __kiekio__ elementas neturi __matavimo__ atributo_
```xpath
/descendant-or-self::item/child::units[not(@measurement)]
```

---

__6.Parašyti išraišką, su operatoriumi = arba != lyginančią:__
* aibę ir skaičių,
* aibę ir eilutę,
* aibę ir loginę reikšmę,
* dvi aibes
__bei mokėti paaiškinti visais atvejais atliekamus tipų konvertavimus__

[Plačiau](https://www.stylusstudio.com/docs/v2009/d_xpath57.html)

---

### __Aibė ir skaičius__

XPath procesorius ieško elemento elementų aibėje, kuris gražintų `true` reikšmę duotai išraiškai, jei reikia panaudoja funkciją `number()` norint paversti reikšmę į skaitinę. Ir tada ir tik tada jeigu randama tokia reikšmė, gražinamas `true` rezultatas

_išraiška, kurioje lyginama aibė su skaičiumi:_
```xpath
//category[@name='milk']/item/quantity = 15
// => true
```

### __Aibė ir eilutė__

XPath procesorius ieško elemento elementų aibėje, kuris gražintų `true` reikšmę duotai išraiškai, jei reikia panaudoja funkciją `string()` norint paversti reikšmę į eilutę. Ir tada ir tik tada jeigu randama tokia reikšmė, gražinamas `true` rezultatas

_išraiška, kurioje lyginama aibė su eilute:_
```xpath
//category[@name='eggs']/item/price/@currency = '$'
// => false
```

### __Aibė ir loginė reikšmė__

rezultatas bus `true` jei elementas egzistuos, kitu atveju rezultatas - `false`

_išraiška, kurioje lyginama aibė su loginė reikšmė:_
```xpath
//category[@name='wood'] != true()
// => false
```

### __Dvi aibės__

rezultatas bus `true` tada ir tik tada, kai kiekvienam aibių elementui yra kitoje aibėje esantis elementas, kurių loginio palyginimo rezultatas yra `true`

_išraiška, kurioje lyginamos dvi aibės:_
```xpath
//category[@name='milk'] != //category[@name='eggs']
// => false
```

---

__7.Parašyti išraišką, su operatoriais <, > lyginančią dvi aibes ir mokėti paaiškinti atliekamus automatinius tipų konvertavimus__

---

rezultatas bus `true` tada ir tik tada, kai kiekvienam aibių elementui kitoje aibėje yra elementas, kurių loginio palyginimo rezultatas yra `true`. Jeigu aibėje yra eilutės tas aibes galima palyginti tik `=` ir `!=`. Jei aibėse nėra eilučių, o tik skaitinės reikšmės, tada aibes galima palyginti ir `<`, `>`, `<=`, `>=`, `=` bei `!=`.

_išraiška, kurioje lyginamos dvi aibės:_
```xpath
//category[@name='milk'] < //category[@name='eggs']
// => false, nes aibėje yra eilučių, kurių negalima įvertinti `<` loginiu palyginimu
```