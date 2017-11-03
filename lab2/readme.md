## Reikia parašyti XML Schema dokumentą, apibrėžiantį jūsų sukurto XML dokumento struktūrą, kuriame būtų jūsų pačių susikurti:

1. __Paprastas__ tipas, apribojantis kokį nors Schema standartinį tipą
```xml
<xs:simpleType name="itemMeasurement">
    <xs:restriction base="xs:string">
        <xs:enumeration value="l" />
        <xs:enumeration value="g" />
    </xs:restriction>
</xs:simpleType>
```
2. Prasmingas __sąrašo__ tipas (`list type`). Neprasmingo sąrašo tipo pavyzdys: sąrašas iš `string` tipo elementų. Neprasmingas todėl, kad jį galima pakeisti vienu paprastu tipu: `string`.
```xml
<xs:simpleType name="dateList">
    <xs:list itemType="xs:date"/>
</xs:simpleType>
```
3. Sudėtingi tipai su __paprastu__ turiniu:
    * išvesti apribojimu (`restriction`) iš jūsų (ne XML Schema) bazinio tipo
    ```xml
    <xs:complexType name="shopFloatValue">
        <xs:simpleContent>
            <xs:restriction base="floatValue">
                <xs:maxInclusive value="1000"/>
                <xs:minInclusive value="0"/>
            </xs:restriction>
        </xs:simpleContent>
    </xs:complexType>
    ```
    * išvesti praplėtimu (`extension`) iš jūsų bazinio tipo
    ```xml
    <xs:complexType name="itemPrice">
        <xs:simpleContent>
            <xs:extension base="shopFloatValue">
                <xs:attribute name="currency" type="itemCurrency"/>    
            </xs:extension>
        </xs:simpleContent>
    </xs:complexType>
    ```
4. Sudėtingi tipai su __sudėtingu__ turiniu:
    * išvesti apribojimu (`restriction`) iš jūsų bazinio tipo
    ```xml
    <xs:complexType name="LTshopItem">
        <xs:complexContent>
            <xs:restriction base="shopItem">
                <xs:sequence>
                    <xs:element name="name" type="xs:string"/>
                    <xs:element name="price" type="itemPrice"/>
                    <xs:element name="units" type="itemUnits"/>
                    <xs:element name="quantity" type="xs:int"/>
                    <xs:element name="restockDates" type="dateList"/>
                </xs:sequence>
                <xs:attribute name="supplier" type="xs:string" use="required" fixed="LT"/>
            </xs:restriction>
        </xs:complexContent>
    </xs:complexType>
    ```
    * išvesti praplėtimu (`extension`) iš jūsų bazinio tipo
    ```xml
    <xs:complexType name="Shop">
        <xs:complexContent>
            <xs:extension base="shopInfo">
                <xs:sequence>
                    <xs:element name="section" type="shopSection" maxOccurs="unbounded"/>
                </xs:sequence>
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
    ```
5. Pademonstruoti __apribojimo__ principą - parodyti pavyzdį, kai apribojimo principas pažeistas, ir žinoti, kaip reikia pataisyti pavyzdį
6. __Sudėtingas__ tipas su __mišriu__ turiniu
7. `choice` valdymo struktūra
```xml
<xs:complexType name="shopSuppliers">
    <xs:sequence>
        <xs:element name="supplier" maxOccurs="unbounded">
            <xs:complexType mixed="true">
                <xs:choice minOccurs="3" maxOccurs="3">
                    <xs:element name="year" type="xs:int" minOccurs="1" maxOccurs="1"/>
                    <xs:element name="title" type="xs:string" minOccurs="1" maxOccurs="1"/>
                    <xs:element name="category" type="xs:string" minOccurs="1" maxOccurs="1"/>
                </xs:choice>
                <xs:attribute name="ID" type="xs:string" use="required"/>        
            </xs:complexType>
        </xs:element>
    </xs:sequence>
</xs:complexType>
```
8. Bent viena nuoroda (`keyref`) į unikalumo ribojimą (`unique`) arba raktą (`key`)
```xml
<xs:element name="shop" type="Shop">
    <xs:key name="supplierID">
        <xs:selector xpath="suppliers/supplier"/>
        <xs:field xpath="@ID"/>
    </xs:key>
    <xs:keyref name="referenceToSupplier" refer="supplierID">
        <xs:selector xpath="section/category/item"/>
        <xs:field xpath="@supplier"/>
    </xs:keyref>
</xs:element>
```
9. Visi jūsų susikurti tipai __turi priklausyti__ jūsų vardų sričiai

## Reikia parašyti JSON Schema (`draft-wright-json-schema-01`) dokumentą, apibrėžiantį jūsų sukurto JSON dokumento struktūrą, kuriame būtų:

1. Panaudoti bent __4 skirtingi__ duomenų tipai
2. Panaudotas `enum` raktažodis
3. Panaudoti bent 4 __validacijai__ skirti raktažodžiai
4. Panaudotos bent 2[1] __reguliarios išraikos__
5. Realizuotas schemų praplėtimas naudojantis `allOf`, `anyOf`, `oneOf` raktažodžiais
6. Realizuotas schemų pakartotinis panaudojimas: `definitions` ir `$ref` raktažodžiai