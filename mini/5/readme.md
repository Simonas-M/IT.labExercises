## Parašyti XML Schema duotam XML:

```xml
<tekstas>
  Ant
  <i>kalno</i>
  <b>
    <i>mūrai</i>, joja
  </b>
  lietuviai
</tekstas>
```

Atsakymas(netikslus):
```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="tekstas" type="tekstoLaukas" />
  <xs:complexType name="tekstoLaukas" mixed="true"><!-- mixed tipo nes gali būti viduje ir <b/> ir <i/> ir teksto žymės -->
    <xs:choice>
      <xs:element name="b" type="bold" minOccurs="0"/>
      <xs:element name="i" type="italics" minOccurs="0"/>
    </xs:choice>
  </xs:complexType>
  <xs:complexType name="bold" mixed="true"> <!-- mixed tipo nes gali viduje būti <i/> ir teksto žymės-->
    <xs:sequence>
      <xs:element name="i" type="italics" minOccurs="0"/>    
    </xs:sequence>
  </xs:complexType>
  <xs:complexType name="italics" mixed="true"> <!-- mixed tipo nes gali viduje buti <b/> ir teksto žymės -->
    <xs:sequence>
      <xs:element name="b" type="bold" minOccurs="0"/>    
    </xs:sequence>
  </xs:complexType>
</xs:schema>
```