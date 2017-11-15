# HTML/CSS
### Reikia parašyti __HTML__ puslapį, kuriame būtų naudojamos tik struktūrinės žymės (išvardintos __HTML5__ dokumente). Negalima naudoti puslapio stilių nusakančių žymių bei atributų (`color`, `font`, `size`, ir panašiai). Stiliaus aprašymui reikia sukurti stilių lentelę, aprašytą atskirame faile. Turi būti patenkinti šie reikalavimai:

* Dokumentas privalo būti validus __HTML5__ dokumentas. Validatoriai:
    * http://validator.nu
    * http://validator.w3.org

* +Elementų išdėstymas dokumente privalo būti sumodeliuotas naudojantis semantiniais __HTML5__ elementais (`header`, `nav`, `section`, `articile`, ...)
* Būtina pademonstruoti šių __HTML__ elementų panaudojimą:
    * __Skyrius__ ir __paragrafas__
    * +__Paveiksliukas__
    * +__Nuoroda__ į kitą puslapį
    * __Lentelė__ su prasmingais panaudotais __`colspan`__ ir __`rowspan`__ atributais
    * +__Numeruotas__ ir/ar __nenumeruotas sąrašas__
    * Duomenų įvedimo __forma__, kurioje prasmingai panaudoti bent 5 skirtingų tipų __įvedimo laukai__. Pademonstruoti __privalomų__ laukų validaciją.
    * +__Sąrašo__ (pasirinkimo) komponentas
* Reikia panaudoti šiuos __CSS__ selektorius (ir mokėti paaiškinti, kuo pirmas skiriasi nuo antro, bei ką jie visi reiškia):
    * Įpėdinio (`descendant`);
    * +Vaiko (`child`);
    * Atributo (`attribute`);
    * +Klasės (`class`);
    * ID (`id`)
* Sukurtoje stilių lentelėje turi būti savybių paveldėjimo pavyzdys, t.y., būtina prasmingai panaudoti raktinį žodį __`inherit`__ (ištrynus šį raktinį žodį, vaizdas ekrane turi pasikeisti) ir žinoti, ką jis reiškia
* Sukurtoje stilių lentelėje turi būti kaskadų mechanizmo pavyzdys, būtina prasmingai panaudoti raktinį žodį __`!important`__ (ištrynus šį raktinį žodį, vaizdas ekrane turi pasikeisti), bei žinoti, ką jis reiškia ir kas yra tas kaskadų mechanizmas
* Reikia panaudoti __`@media`__ taisyklę, kurios pagalba naršyklė atsižvelgtų į įrenginio, kuriame yra atvaizduojamas puslapis ekrano dydį ir atitinkimai pakeistų jo išdėstymą (Media Queries Level 3)