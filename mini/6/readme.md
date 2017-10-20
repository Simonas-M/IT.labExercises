# Parašyti XML schemą kuri validuotų, kad knygos `ref` atributas referuotų į autorių, kuris yra XML dokumente


### Toks XML dokumentas - validus
```xml
<books>
  <autorius id='1'/>
  <autorius id='2'/>
  <autorius id='3'/>
  <knyga ref='1'/>
  <knyga ref='2'/>
  <knyga ref='3'/>
</books>
```

### Toks XML dokumentas - nevalidus
```xml
<books>
  <autorius id='1'/>
  <autorius id='2'/>
  <autorius id='3'/>
  <knyga ref='1'/>
  <knyga ref='2'/>
  <knyga ref='5'/>
</books
```

## Atsakymas:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="books">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="autorius" maxOccurs="unbounded" minOccurs="0">
          <xs:complexType>
            <xs:simpleContent>
              <xs:extension base="xs:string">
                <xs:attribute type="xs:integer" name="id" use="required"/>
              </xs:extension>
            </xs:simpleContent>
          </xs:complexType>
        </xs:element>
        <xs:element name="knyga" maxOccurs="unbounded" minOccurs="0">
          <xs:complexType>
            <xs:simpleContent>
              <xs:extension base="xs:string">
                <xs:attribute type="xs:integer" name="ref" use="required"/>
              </xs:extension>
            </xs:simpleContent>
          </xs:complexType>
        </xs:element>
      </xs:sequence>        
    </xs:complexType>
    <xs:key name="autoriausID">
      <xs:selector xpath="autorius"/>
      <xs:field xpath="@id"/>
    </xs:key>
    <xs:keyref name="NuorodaĮKnygą" refer="autoriausID">
      <xs:selector xpath="knyga"/>
      <xs:field xpath="@ref"/>
    </xs:keyref>
  </xs:element>
</xs:schema>
```