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

_grazina visus protevius pasirinkto elemento:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]/ancestor::*
```

_grazina visus anukus ir proanukius pasirinkto elemento:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]/dencendant::*
```

_grazina visus po pasirinkto elemento einancius tame paciame bloke esancius elementus:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]/following-sibling::*
```

_grazina visus pries pasirinkto elemento einancius tame paciame bloke esancius elementus:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]/preceding-sibling::*
```

_grazina visus po pasirinktos elemento einancius elementus:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]/following::*
```

_grazina visus pries pasirinkta zyme einancius elementus:_
```xpath
//shop/section[@name="diary"]/category[@name="milk"]/preceding::*
```

__2.Parašyti XPath kelią su predikatu, kurio viduje yra panaudotas XPath kelias (pvz.: rasti visas žymes A, kurių atributas x turi tokią pačią reikšmę kaip penktos dokumente žymės B atributas y; čia A, B, x, y pakeiskite į savo dokumento žymes/atributus), paaiškinti predikato veikimo principą__

