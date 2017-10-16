## Reikia parašyti XML Schema dokumentą, apibrėžiantį jūsų sukurto XML dokumento struktūrą, kuriame būtų jūsų pačių susikurti:

1. +__Paprastas__ tipas, apribojantis kokį nors Schema standartinį tipą
2. -Prasmingas __sąrašo__ tipas (`list type`). Neprasmingo sąrašo tipo pavyzdys: sąrašas iš `string` tipo elementų. Neprasmingas todėl, kad jį galima pakeisti vienu paprastu tipu: `string`.
3. Sudėtingi tipai su __paprastu__ turiniu:
    * -išvesti apribojimu (`restriction`) iš jūsų (ne XML Schema) bazinio tipo
    * +išvesti praplėtimu (`extension`) iš jūsų bazinio tipo
4. Sudėtingi tipai su __sudėtingu__ turiniu:
    * -išvesti apribojimu (`restriction`) iš jūsų bazinio tipo
    * -išvesti praplėtimu (`extension`) iš jūsų bazinio tipo
5. -Pademonstruoti __apribojimo__ principą - parodyti pavyzdį, kai apribojimo principas pažeistas, ir žinoti, kaip reikia pataisyti pavyzdį
6. -__Sudėtingas__ tipas su __mišriu__ turiniu
7. -`choice` valdymo struktūra
8. -Bent viena nuoroda (`keyref`) į unikalumo ribojimą (`unique`) arba raktą (`key`)
9. -Visi jūsų susikurti tipai __turi priklausyti__ jūsų vardų sričiai

## Reikia parašyti JSON Schema (`draft-wright-json-schema-01`) dokumentą, apibrėžiantį jūsų sukurto JSON dokumento struktūrą, kuriame būtų:

1. +Panaudoti bent __4 skirtingi__ duomenų tipai
2. +Panaudotas `enum` raktažodis
3. -Panaudoti bent 4 __validacijai__ skirti raktažodžiai
4. -Panaudotos bent 2 __reguliarios išraikos__
5. -Realizuotas schemų praplėtimas naudojantis `allOf`, `anyOf`, `oneOf` raktažodžiais
6. +Realizuotas schemų pakartotinis panaudojimas: `definitions` ir `$ref` raktažodžiai