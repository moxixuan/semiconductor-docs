---
title: "T13-1104 - © SEMI 2004 1..."
description: "SEMI标准文档"
sidebar_label: "T13-1104 - © SEMI 2004 1..."
sidebar_position: 1570
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-157.pdf'
  chapter: 157
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/157.pdf"
  pdfSize="0.25MB"
  title="T13-1104 - © SEMI 2004 1..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI T12.2-0704 © SEMI 2004 30
targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Adopt Response - - - - - -  - - -->
<xsd:element name="AdoptResponse" type="AdoptResponseType"/>

<xsd:complexType name="AdoptResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12DisownRequestHdb.xsd      for HistoryDB Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Disown Request - - - - - -  - - -->
<xsd:element name="DisownRequest" type="DisownRequestType"/>

<xsd:complexType name="DisownRequestType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12DisownResponseHdb.xsd      for HistoryDB Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Disown Response - - - - - -  - - -->
<xsd:element name="DisownResponse" type="DisownResponseType"/>

<xsd:complexType name="DisownResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


SEMI T12.2-0704 © SEMI 2004 31


XML Message Schema Name:  T12ListRecordsRequestHdb.xsd      for HistoryDB Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   List Records Request - - - - - -  - - -->
<xsd:element name="ListRecordsRequest" type="ListRecordsRequestType"/>

<xsd:complexType name="ListRecordsRequestType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string" maxOccurs="unbounded"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ListRecordsResponseHdb.xsd      for HistoryDB Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   List Records Response - - - - - -  - - -->
<xsd:element name="ListRecordsResponse" type="ListRecordsResponseType"/>

<xsd:complexType name="ListRecordsResponseType">
<xsd:sequence>
<xsd:element name="History" type="HistoryType" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ResetRequestHdb.xsd      for HistoryDB Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Reset Request - - - - - -  - - -->
<xsd:element name="ResetRequest" type="ResetRequestType"/>



SEMI T12.2-0704 © SEMI 2004 32
<xsd:complexType name="ResetRequestType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="DataName" type="xsd:string"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ResetResponseHdb.xsd      for HistoryDB Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Rest Response - - - - - -  - - -->
<xsd:element name="ResetResponse" type="ResetResponseType"/>

<xsd:complexType name="ResetResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowHistoryRequestHdb.xsd      for HistoryDB Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show History Request - - - - - -  - - -->
<xsd:element name="ShowHistoryRequest" type="ShowHistoryRequestType"/>

<xsd:complexType name="ShowHistoryRequestType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="Items" type="xsd:string" minOccurs="0" maxOccurs="unbounded"/>>
<xsd:element name="Restriction" type="xsd:string" minOccurs="0"
maxOccurs="unbounded"/>>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowHistoryResponseHdb.xsd      for HistoryDB Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema



SEMI T12.2-0704 © SEMI 2004 33
xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show History Response - - - - - -  - - -->
<xsd:element name="ShowHistoryResponse" type="ShowHistoryResponseType"/>

<xsd:complexType name="ShowHistoryResponseType">
<xsd:sequence>
<xsd:element name="History" type="HistoryType" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12UpdateRequestHdb.xsd      for HistoryDB Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Update Request - - - - - -  - - -->
<xsd:element name="UpdateRequest" type="UpdateRequestType"/>

<xsd:complexType name="UpdateRequestType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string" maxOccurs="unbounded"/>
<xsd:element name="History" type="HistoryType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12UpdateResponseHdb.xsd      for HistoryDB Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Update Response - - - - - -  - - -->
<xsd:element name="UpdateResponse" type="UpdateResponseType"/>

<xsd:complexType name="UpdateResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>


SEMI T12.2-0704 © SEMI 2004 34
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12AddEventRequestHrd.xsd      for HistoryRecord Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Add Event Request - - - - - -  - - -->
<xsd:element name="AddEventRequest" type="AddEventRequestType"/>

<xsd:complexType name="AddEventRequestType">
<xsd:sequence>
<xsd:element name="History" type="HistoryType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12AddEventResponseHrd.xsd      for HistoryRecord Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Add Event Response - - - - - -  - - -->
<xsd:element name="AddEventResponse" type="AddEventResponseType"/>

<xsd:complexType name="AddEventResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12DestructRequestHrd.xsd      for HistoryRecord Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - Destruct Request - - - - - - - - - - -->


SEMI T12.2-0704 © SEMI 2004 35
<xsd:element name="DestructRequest" type="DestructRequestType"/>

<xsd:complexType name="DestructRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12DestructResponseHrd.xsd      for HistoryRecord Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

!-- - - - - - - - - - Destruct Response - - - - - - - - - - -->
<xsd:element name="DestructResponse" type="DestructResponseType"/>

<xsd:complexType name="DestructResponseType">
<xsd:sequence>
<xsd:element name="State" type="HistoryRecordStateType"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

<!-- - - - - - - $$$   State for HistoryRecord   $$$- - - - -   - - -->
<xsd:simpleType name="HistoryRecordStateType">
restriction base="xsd:string"
enumeration value="NO STATE"/
restriction
</xsd:simpleType>

</xsd:schema>


XML Message Schema Name:  T12FluctuateRequestHrd.xsd      for HistoryRecord Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - Fluctuate Request - - - - - - - - - - -->
<xsd:element name="FluctuateRequest" type="FluctuateRequestType"/>

<xsd:complexType name="FluctuateRequestType">
<xsd:sequence>
<xsd:element name="Name" type="xsd:string"/>
<xsd:element name="Value" type="xsd:anyType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>



SEMI T12.2-0704 © SEMI 2004 36

XML Message Schema Name:  T12FluctuateResponseHrd.xsd      for HistoryRecord Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - Fluctuate Response - - - - - - - - - - -->
<xsd:element name="FluctuateResponse" type="FluctuateResponseType"/>

<xsd:complexType name="FluctuateResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ListEventRequestHrd.xsd      for HistoryRecord Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - List Event Request - - - - - - - - - - -->
<xsd:element name="ListEventRequest" type="ListEventRequestType"/>

<xsd:complexType name="ListEventRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ListEventResponseHrd.xsd      for HistoryRecord Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - List Event Response - - - - - - - - - - -->
<xsd:element name="ListEventResponse" type="ListEventResponseType"/>

<xsd:complexType name="ListEventResponseType">
<xsd:sequence>
<xsd:element name="EventCaption" type="EventCaptionType" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>


SEMI T12.2-0704 © SEMI 2004 37
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowEventRequestHrd.xsd      for HistoryRecord Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - Show Event Request - - - - - - - - - - -->
<xsd:element name="ShowEventRequest" type="ShowEventRequestType"/>

<xsd:complexType name="ShowEventRequestType">
<xsd:sequence>
<xsd:element name="EventId" type="xsd:string"/>     <!-- * -->
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowEventResponseHrd.xsd      for HistoryRecord Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - Show Event Response - - - - - - - - - - -->
<xsd:element name="ShowEventResponse" type="ShowEventResponseType"/>

<xsd:complexType name="ShowEventResponseType">
<xsd:sequence>
<xsd:element name="History" type=" HistoryType"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowHistoryRequestHrd.xsd      for HistoryRecord Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>



SEMI T12.2-0704 © SEMI 2004 38
<!-- - - - - - - - - - Show History Request - - - - - - - - - - -->
<xsd:element name="ShowHistoryRequest" type="ShowHistoryRequestType"/>

<xsd:complexType name="ShowHistoryRequestType">
<xsd:sequence>
<xsd:element name="Items" type="xsd:string" minOccurs="0" maxOccurs="unbounded"/>
<xsd:element name="Restriction" type="xsd:steing" minOccurs="0"
maxOccurs="unbounded"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowHistoryResponseHrd.xsd      for HistoryRecord Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - Show History Response - - - - - - - - - - -->
<xsd:element name="ShowHistoryResponse" type="ShowHistoryResponseType"/>

<xsd:complexType name="ShowHistoryResponseType">
<xsd:sequence>
<xsd:element name="History" type=" HistoryTypeForHistoryRecord" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ChangeNamespaceRequestIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Change Namespace Request - - - - - -  - - -->
<xsd:element name="ChangeNamespaceRequest" type="ChangeNamespaceRequestType"/>

<xsd:complexType name="ChangeNamespaceRequestType">
<xsd:sequence>
<xsd:element name="Group" type="xsd:string"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>




SEMI T12.2-0704 © SEMI 2004 39
XML Message Schema Name:  T12ChangeNamespaceResponseIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Change Namespace Response - - - - - -  - - -->
<xsd:element name="ChangeNamespeceResponse" type="ChangeNamespeceResponseType"/>

<xsd:complexType name="ChangeNamespaceResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12InstallRequestIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Install Request - - - - - -  - - -->
<xsd:element name="InstallRequest" type="InstallRequestType"/>

<xsd:complexType name="InstallRequestType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="AttachmentName" type="xsd:string"/>
<xsd:element name="AttachmentType" type="xsd:string"/>
<xsd:element name="Location" type="xsd:string" minOccurs="0" maxOccurs="1"/>
<xsd:element name="History" type="HistoryType" minOccurs="0"
maxOccurs="unbounded"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12InstallResponseIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Install Response - - - - - -  - - -->
<xsd:element name="InstallResponse" type="InstallResponseType"/>


SEMI T12.2-0704 © SEMI 2004 40

<xsd:complexType name="InstallResponseType">
<xsd:sequence>
<xsd:element name="Handle" type="xsd:string" minOccurs="0" maxOccurs="1"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ListUpRequestIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   List Up Request - - - - - -  - - -->
<xsd:element name="ListUpRequest" type="ListUpRequestType"/>

<xsd:complexType name="ListUpRequestType">
<xsd:sequence>
<xsd:element name="Restriction" type="xsd:string" minOccurs="0"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ListUpResponseIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   List Up Response - - - - - -  - - -->
<xsd:element name="ListUpResponse" type="ListUpResponseType"/>

<xsd:complexType name="ListUpResponseType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType" minOccurs="0"
maxOccurs="unbounded"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowDataRequestIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema



SEMI T12.2-0704 © SEMI 2004 41
xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Data Request - - - - - -  - - -->
<xsd:element name="ShowDataRequest" type="ShowDataRequestType"/>

<xsd:complexType name="ShowDataRequestType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowDataResponseIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Data Response - - - - - -  - - -->
<xsd:element name="ShowDataResponse" type="ShowDataResponseType"/>

<xsd:complexType name="ShowDataResponseType">
<xsd:sequence>
<xsd:element name="AttachmentInfo" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowNamespaceRequestIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Namespace Request - - - - - -  - - -->
<xsd:element name="ShowNamespaceRequest" type="ShowNamespaceRequestType"/>

<xsd:complexType name="ShowNamespaceRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>



SEMI T12.2-0704 © SEMI 2004 42

XML Message Schema Name:  T12ShowNamespaceResponseIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Namespace Response - - - - - -  - - -->
<xsd:element name="ShowNamespeceResponse" type="ShowNamespeceResponseType"/>

<xsd:complexType name="ShowNamespaceResponseType">
<xsd:sequence>
<xsd:element name="Group" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12UninstallRequestIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Uninstall Request - - - - - -  - - -->
<xsd:element name="UninstallRequest" type="UninstallRequestType"/>

<xsd:complexType name="UninstallRequestType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12UninstallResponseIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Uninstall Response - - - - - -  - - -->
<xsd:element name="UninstallResponse" type="UninstallResponseType"/>

<xsd:complexType name="UninstallResponseType">
<xsd:sequence>


SEMI T12.2-0704 © SEMI 2004 43
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12UpdateRequestIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Update Request - - - - - -  - - -->
<xsd:element name="UpdateRequest" type="UpdateRequestType"/>

<xsd:complexType name="UpdateRequestType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="Operation" type="OperationType"/>
<xsd:element name="Location" type="xsd:string" minOccurs="0" maxOccurs="1"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

<!-- - - - - - - $$$   Operation on Inventory   $$$- - - - -   - - -->
<xsd:simpleType name="OperationType">
restriction base="xsd:string"
enumeration value="Deploy"/
enumeration value="Forward"/
enumeration value="Release"/
enumeration value="Storage"/
enumeration value="Withdraw"/
restriction
</xsd:simpleType>

</xsd:schema>


XML Message Schema Name:  T12UpdateResponseIvt.xsd      for Inventory Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Update Response - - - - - -  - - -->
<xsd:element name="UpdateResponse" type="UpdateResponseType"/>

<xsd:complexType name="UpdateResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>


SEMI T12.2-0704 © SEMI 2004 44

</xsd:schema>


XML Message Schema Name:  T12ShowAttachmentRequestIvc.xsd      for Invoice Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Attachment Request - - - - - -  - - -->
<xsd:element name="ShowAttachmentRequest" type="ShowAttachmentRequestType"/>

<xsd:complexType name="ShowAttachmentRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowAttachmentResponseIvc.xsd      for Invoice Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Attachment Response - - - - - -  - - -->
<xsd:element name="ShowAttachmentResponse" type="ShowAttachmentResponseType"/>

<xsd:complexType name="ShowAttachmentResponseType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowHistoryRequestIvc.xsd      for Invoice Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - Show History Request - - - - - - - - - - -->
<xsd:element name="ShowHistoryRequest" type="ShowHistoryRequestType"/>

<xsd:complexType name="ShowHistoryRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>


SEMI T12.2-0704 © SEMI 2004 45
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowHistoryResponseIvc.xsd      for Invoice Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - Show History Response - - - - - - - - - - -->
<xsd:element name="ShowHistoryResponse" type="ShowHistoryResponseType"/>

<xsd:complexType name="ShowHistoryResponseType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="History" type=" HistoryTypeForHistoryRecord" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowIdRequestIvc.xsd      for Invoice Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show ID Request - - - - - -  - - -->
<xsd:element name="ShowIdRequest" type="ShowIdRequestType"/>

<xsd:complexType name="ShowIdRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowIdResponseIvc.xsd      for Invoice Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show ID Response - - - - - -  - - -->
<xsd:element name="ShowIdResponse" type="ShowIdResponseType"/>


SEMI T12.2-0704 © SEMI 2004 46

<xsd:complexType name="ShowIdResponseType">
<xsd:sequence>
<xsd:element name="InvoiceId" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowLoadportsRequestIvc.xsd      for Invoice Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Loadports Request - - - - - -  - - -->
<xsd:element name="ShowLoadportsRequest" type="ShowLoadportsRequestType"/>

<xsd:complexType name="ShowLoadportsRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowLoadportsResponseIvc.xsd      for Invoice Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Loadports Response - - - - - -  - - -->
<xsd:element name="ShowLoadportsResponse" type="ShowLoadportsResponseType"/>

<xsd:complexType name="ShowLoadportsResponseType">
<xsd:sequence>
<xsd:element name="LoadortId" type="xsd:string" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowTypeRequestIvc.xsd      for Invoice Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">


SEMI T12.2-0704 © SEMI 2004 47

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Type Request - - - - - -  - - -->
<xsd:element name="ShowTypeRequest" type="ShowTypeRequestType"/>

<xsd:complexType name="ShowTypeRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowTypeResponseIvc.xsd      for Invoice Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Type Response - - - - - -  - - -->
<xsd:element name="ShowTypeResponse" type="ShowTypeResponseType"/>

<xsd:complexType name="ShowTypeResponseType">
<xsd:sequence>
<xsd:element name="AttachmentType" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ReceiveInvoiceRequestJim.xsd      for JitMachine Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Receive Invoice Request - - - - - -  - - -->
<xsd:element name="ReceiveInvoiceRequest" type=" ReceiveInvoiceRequestType"/>

<xsd:complexType name="ReceiveInvoiceRequestType">
<xsd:sequence>
<xsd:element name="InvoiceId" type="xsd:string"/>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="AttachmentType" type="xsd:string"/>
<xsd:element name="LoadportId" type="xsd:string" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="History" type="HistoryType" minOccurs="1"
maxOccurs="unbounded"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>


SEMI T12.2-0704 © SEMI 2004 48

</xsd:schema>


XML Message Schema Name:  T12ReceiveInvoiceResponseJim.xsd      for JitMachine Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Receive Invoice Response - - - - - -  - - -->
<xsd:element name=" ReceiveInvoiceResponse" type=" ReceiveInvoiceResponseType"/>

<xsd:complexType name=" ReceiveInvoiceResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowAttachmentsRequestJim.xsd      for JitMachine Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Attachments Request - - - - - -  - - -->
<xsd:element name="ShowAttachmentsRequest" type="ShowAttachmentsRequestType"/>

<xsd:complexType name="ShowAttachmentsRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowAttachmentsResponseJim.xsd      for JitMachine Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Attachments Response - - - - - -  - - -->
<xsd:element name="ShowAttachmentsResponse" type="ShowAttachmentsResponseType"/>

<xsd:complexType name="ShowAttachmentsResponseType">
<xsd:sequence>


SEMI T12.2-0704 © SEMI 2004 49
<xsd:element name="AttachmentId" type="xsd:string" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowExceptionsRequestJim.xsd      for JitMachine Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Exceptions Request - - - - - -  - - -->
<xsd:element name="ShowExceptionsRequest" type="ShowExceptionsRequestType"/>

<xsd:complexType name="ShowExceptionsRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowExceptionsResponseJim.xsd      for JitMachine Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Exceptions Response - - - - - -  - - -->
<xsd:element name="ShowExceptionsResponse" type="ShowExceptionsResponseType"/>

<xsd:complexType name="ShowExceptionsResponseType">
<xsd:sequence>
<xsd:element name="ExceptionId" type="xsd:string" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowIdRequestJim.xsd      for JitMachine Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include


SEMI T12.2-0704 © SEMI 2004 50
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show ID Request - - - - - -  - - -->
<xsd:element name="ShowIdRequest" type="ShowIdRequestType"/>

<xsd:complexType name="ShowIdRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowIdResponseJim.xsd      for JitMachine Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show ID Response - - - - - -  - - -->
<xsd:element name="ShowIdResponse" type="ShowIdResponseType"/>

<xsd:complexType name="ShowIdResponseType">
<xsd:sequence>
<xsd:element name="MachineId" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowNameRequestJim.xsd      for JitMachine Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Name Request - - - - - -  - - -->
<xsd:element name="ShowNameRequest" type="ShowNameRequestType"/>

<xsd:complexType name="ShowNameRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowNameResponseJim.xsd      for JitMachine Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">



SEMI T12.2-0704 © SEMI 2004 51
<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Name Response - - - - - -  - - -->
<xsd:element name="ShowNameResponse" type="ShowNameResponseType"/>

<xsd:complexType name="ShowNameResponseType">
<xsd:sequence>
<xsd:element name="MachineName" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowTypeRequestJim.xsd      for JitMachine Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Type Request - - - - - -  - - -->
<xsd:element name="ShowTypeRequest" type="ShowTypeRequestType"/>

<xsd:complexType name="ShowTypeRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowTypeResponseJim.xsd      for JitMachine Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Type Response - - - - - -  - - -->
<xsd:element name="ShowTypeResponse" type="ShowTypeResponseType"/>

<xsd:complexType name="ShowTypeResponseType">
<xsd:sequence>
<xsd:element name="MachineType" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ChangeNameRequestPlc.xsd      for Public Location Class



SEMI T12.2-0704 © SEMI 2004 52
<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Change Name Request - - - - - -  - - -->
<xsd:element name="ChangeNameRequest" type="ChangeNameRequestType"/>

<xsd:complexType name="ChangeNameRequestType">
<xsd:sequence>
<xsd:element name="LocationName" type="xsd:string"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ChangeNameResponsePlc.xsd      for Public Location Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Change Name Response - - - - - -  - - -->
<xsd:element name="ChangeNameResponse" type="ChangeNameResponseType"/>

<xsd:complexType name="ChangeNameResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowAttachmentsRequestPlc.xsd      for Public Location
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Attachments Request - - - - - -  - - -->
<xsd:element name="ShowAttachmentsRequest" type="ShowAttachmentsRequestType"/>

<xsd:complexType name="ShowAttachmentsRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


SEMI T12.2-0704 © SEMI 2004 53


XML Message Schema Name:  T12ShowAttachmentsResponsePlc.xsd      for Public Location
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Attachments Response - - - - - -  - - -->
<xsd:element name="ShowAttachmentsResponse" type="ShowAttachmentsResponseType"/>

<xsd:complexType name="ShowAttachmentsResponseType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowAvailableSpaceRequestPlc.xsd      for Public Location
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Available Space Request - - - - - -  - - -->
<xsd:element name="ShowAvailableSpaceRequest" type="ShowAvailableSpaceRequestType"/>

<xsd:complexType name="ShowAvailableSpaceRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowAvailableSpaceResponsePlc.xsd      for Public
Location Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Available Space Response - - - - - -  - - -->
<xsd:element name="ShowAvailableSpaceResponse" type="ShowAvailableSpaceResponseType"/>



SEMI T12.2-0704 © SEMI 2004 54
<xsd:complexType name="ShowAvailableSpaceResponseType">
<xsd:sequence>
<xsd:element name="Space" type="xsd:integer"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowCapacityRequestPlc.xsd      for Public Location Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Capacity Request - - - - - -  - - -->
<xsd:element name="ShowCapacityRequest" type="ShowCapacityRequestType"/>

<xsd:complexType name="ShowCapacityRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowCapacityResponsePlc.xsd      for Public Location
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Capacity Response - - - - - -  - - -->
<xsd:element name="ShowCapacityResponse" type="ShowCapacityResponseType"/>

<xsd:complexType name="ShowCapacityResponseType">
<xsd:sequence>
<xsd:element name="Capacity" type="xsd:unsignedInt"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowIdRequestPlc.xsd      for Public Location Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">



SEMI T12.2-0704 © SEMI 2004 55
<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show ID Request - - - - - -  - - -->
<xsd:element name="ShowIdRequest" type="ShowIdRequestType"/>

<xsd:complexType name="ShowIdRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowIdResponsePlc.xsd      for Public Location Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show ID Response - - - - - -  - - -->
<xsd:element name="ShowIdResponse" type="ShowIdResponseType"/>

<xsd:complexType name="ShowIdResponseType">
<xsd:sequence>
<xsd:element name="LocationId" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowLocationTypeRequestPlc.xsd      for Public Location
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show LocationType Request - - - - - -  - - -->
<xsd:element name="ShowLocationTypeRequest" type="ShowLocationTypeRequestType"/>

<xsd:complexType name="ShowLocationTypeRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowLocationTypeResponsePlc.xsd      for Public Location
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01



SEMI T12.2-0704 © SEMI 2004 56
targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Location Type Response - - - - - -  - - -->
<xsd:element name="ShowLocationTypeResponse" type="ShowLocationTypeResponseType"/>

<xsd:complexType name="ShowLocationTypeResponseType">
<xsd:sequence>
<xsd:element name="LocationType" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowNameRequestPlc.xsd      for Public Location Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Name Request - - - - - -  - - -->
<xsd:element name="ShowNameRequest" type="ShowNameRequestType"/>

<xsd:complexType name="ShowNameRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowNameResponsePlc.xsd      for Public Location Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Name Response - - - - - -  - - -->
<xsd:element name="ShowNameResponse" type="ShowNameResponseType"/>

<xsd:complexType name="ShowNameResponseType">
<xsd:sequence>
<xsd:element name="LocationName" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>



SEMI T12.2-0704 © SEMI 2004 57

XML Message Schema Name:  T12ShowPossibleTypeRequestPlc.xsd      for Public Location
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Possible Type Request - - - - - -  - - -->
<xsd:element name="ShowPossibleTypeRequest" type="ShowPossibleTypeRequestType"/>

<xsd:complexType name="ShowPossibleTypeRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowPossibleTypeResponsePlc.xsd      for Public Location
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Possible Type Response - - - - - -  - - -->
<xsd:element name="ShowPossibleTypeResponse" type="ShowPossibleTypeResponseType"/>

<xsd:complexType name="ShowPossibleTypeResponseType">
<xsd:sequence>
<xsd:element name="AttachmentType" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowStateRequestPlc.xsd      for Public Location Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show State Request - - - - - -  - - -->
<xsd:element name="ShowStateRequest" type="ShowStateRequestType"/>

<xsd:complexType name="ShowStateRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>


SEMI T12.2-0704 © SEMI 2004 58

</xsd:schema>


XML Message Schema Name:  T12ShowStateResponsePlc.xsd      for Public Location Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show State Response - - - - - -  - - -->
<xsd:element name="ShowStateResponse" type="ShowStateResponseType"/>

<xsd:complexType name="ShowStateResponseType">
<xsd:sequence>
<xsd:element name="State" type="PublicLocationStateType"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

<!-- - - - - - - - -$$$   State for Public Location   $$$- - - - - -  - - -->
<xsd:simpleType name="PublicLocationStateType">
restriction base="xsd:string"
enumeration value="FULL"/
enumeration value="VACANT"/
enumeration value="UNOCCUPIED"/
enumeration value="UNKNOWN"/
restriction
</xsd:simpleType>

</xsd:schema>


XML Message Schema Name:  T12UpdateOccupancyRequestPlc.xsd      for Public Location
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Update Occupancy Request - - - - - -  - - -->
<xsd:element name="UpdateOccupancyRequest" type="UpdateOccupancyRequestType"/>

<xsd:complexType name="UpdateOccupancyRequestType">
<xsd:sequence>
<xsd:element name="Occupancy" type="xsd:integer"/>>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>




SEMI T12.2-0704 © SEMI 2004 59
XML Message Schema Name:  T12UpdateOccupancyResponsePlc.xsd      for Public Location
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Update Occupancy Response - - - - - -  - - -->
<xsd:element name="UpdateOccupancyResponse" type="UpdateOccupancyResponseType"/>

<xsd:complexType name="UpdateOccupancyResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12UpdateStateRequestPlc.xsd      for Public Location Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Update State Request - - - - - -  - - -->
<xsd:element name="UpdateStateRequest" type="UpdateStateRequestType"/>

<xsd:complexType name="UpdateStateRequestType">
<xsd:sequence>
<xsd:element name="State" type="PublicLocationStateType"/>>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

<!-- - - - - - - - -$$$   State for Public Location   $$$- - - - - -  - - -->
<xsd:simpleType name="PublicLocationStateType">
restriction base="xsd:string"
enumeration value="FULL"/
enumeration value="VACANT"/
enumeration value="UNOCCUPIED"/
enumeration value="UNKNOWN"/
restriction
</xsd:simpleType>

</xsd:schema>


XML Message Schema Name:  T12UpdateStateResponsePlc.xsd      for Public Location Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">


SEMI T12.2-0704 © SEMI 2004 60

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Update State Response - - - - - -  - - -->
<xsd:element name="UpdateStateResponse" type="UpdateStateResponseType"/>

<xsd:complexType name="UpdateStateResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ChangeNameRequestSnd.xsd      for Secondment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Change Name Request - - - - - -  - - -->
<xsd:element name="ChangeNameRequest" type="ChangeNameRequestType"/>

<xsd:complexType name="ChangeNameRequestType">
<xsd:sequence>
<xsd:element name="AttachmentName" type="xsd:string"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ChangeNameResponseSnd.xsd      for Secondment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Change Name Response - - - - - -  - - -->
<xsd:element name="ChangeNameResponse" type="ChangeNameResponseType"/>

<xsd:complexType name="ChangeNameResponseType">
<xsd:sequence>
<xsd:element name="AttachmentName" type="xsd:string" minOccurs="0" maxOccurs="1"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>



SEMI T12.2-0704 © SEMI 2004 61

XML Message Schema Name:  T12DestructRequestSnd.xsd      for Secondment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - Destruct Request - - - - - - - - - - -->
<xsd:element name="DestructRequest" type="DestructRequestType"/>

<xsd:complexType name="DestructRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12DestructResponseSnd.xsd      for Secondment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - Destruct Response - - - - - - - - - - -->
<xsd:element name="DestructResponse" type="DestructResponseType"/>

<xsd:complexType name="DestructResponseType">
<xsd:sequence>
<xsd:element name="State" type="SecondmentType"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

<!-- - - - - - - - -$$$   State for Secondment   $$$- - - - - -  - - -->
<xsd:simpleType name="SecondmentStateType">
restriction base="xsd:string"
enumeration value="EFFECTIVE"/
enumeration value="EXPIRED"/
enumeration value="INUSE"/
enumeration value="NOTUSED"/
enumeration value="UNKNOWN"/
restriction
</xsd:simpleType>

</xsd:schema>


XML Message Schema Name:  T12ShowIdRequestSnd.xsd      for Secondment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">



SEMI T12.2-0704 © SEMI 2004 62
<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show ID Request - - - - - -  - - -->
<xsd:element name="ShowIdRequest" type="ShowIdRequestType"/>

<xsd:complexType name="ShowIdRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowIdResponseSnd.xsd      for Secondment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show ID Response - - - - - -  - - -->
<xsd:element name="ShowIdResponse" type="ShowIdResponseType"/>

<xsd:complexType name="ShowIdResponseType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowNameRequestSnd.xsd      for Secondment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Name Request - - - - - -  - - -->
<xsd:element name="ShowNameRequest" type="ShowNameRequestType"/>

<xsd:complexType name="ShowNameRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowNameResponseSnd.xsd      for Secondment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">


SEMI T12.2-0704 © SEMI 2004 63

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Name Response - - - - - -  - - -->
<xsd:element name="ShowNameResponse" type="ShowNameResponseType"/>

<xsd:complexType name="ShowNameResponseType">
<xsd:sequence>
<xsd:element name="AttachmentName" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowStateRequestSnd.xsd      for Secondment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show State Request - - - - - -  - - -->
<xsd:element name="ShowStateRequest" type="ShowStateRequestType"/>

<xsd:complexType name="ShowStateRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowStateResponseSnd.xsd      for Secondment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show State Response - - - - - -  - - -->
<xsd:element name="ShowStateResponse" type="ShowStateResponseType"/>

<xsd:complexType name="ShowStateResponseType">
<xsd:sequence>
<xsd:element name="State" type="SecondmentStateType" minOccurs="1" maxOccurs="2"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

<!-- - - - - - - - -$$$   State for Secondment   $$$- - - - - -  - - -->
<xsd:simpleType name="SecondmentStateType">
restriction base="xsd:string"
enumeration value="EFFECTIVE"/


SEMI T12.2-0704 © SEMI 2004 64
enumeration value="EXPIRED"/
enumeration value="INUSE"/
enumeration value="NOTUSED"/
enumeration value="UNKNOWN"/
restriction
</xsd:simpleType>

</xsd:schema>


XML Message Schema Name:  T12ShowTypeRequestSnd.xsd      for Secondment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Type Request - - - - - -  - - -->
<xsd:element name="ShowTypeRequest" type="ShowTypeRequestType"/>

<xsd:complexType name="ShowTypeRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowTypeResponseSnd.xsd      for Secondment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Type Response - - - - - -  - - -->
<xsd:element name="ShowTypeResponse" type="ShowTypeResponseType"/>

<xsd:complexType name="ShowTypeResponseType">
<xsd:sequence>
<xsd:element name="AttachmentType" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


<xsd:schema xmlns="http://www.w3.org/2001/XMLSchema"
xmlns="http:// www.semi.org/Traceability/T12.2-V01
"
targetNamespace="http://www.semi.org/Traceability/T12.2-V01"
elementFormDefault="qualified" attributeFormDefault="qualified">

<!-- =========##### Global Definitions #####============ - - -->
<!-- Event Caption Type - - - - Event Caption Type - - - - Event Caption Type - - -->
<xsd:complexType name="EventCaptionType">
<xsd:sequence>


SEMI T12.2-0704 © SEMI 2004 65
<xsd:element name="Id" type="xsd:string"/>
<xsd:element name="Code" type="EventClasstype"/>
<xsd:element name="TimeStamp" type="xsd:dateTime"/>
</xsd:sequence>
</xsd:complexType>

<!-- Event Type - - - - - - - Event Type - - - - - - - Event Type - - -->
<xsd:complexType name="EventType">
<xsd:sequence>
<xsd:element name="Id" type="xsd:string"/>
<xsd:element name="EventClass" type="EventClassType"/>
<xsd:element name="NamedValue" type="NamedValueType" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="Machine" type="xsd:string"/>
<xsd:element name="TimeStamp" type="xsd:dateTime"/>
</xsd:sequence>
</xsd:complexType>

<!-- Event Class Type - - - - Event Class Type - - - - Event Class Type - - -->
<xsd:simpleType name="EventClassType">
<xsd:restriction base="xsd:string"/>
</xsd:simpleType>

<!-- Event Type - - - - - - - Exception Type - - - - - - - Event Type - - -->
<xsd:complexType name="ExceptionType">
<xsd:sequence>
<xsd:element name="Id" type="xsd:string"/>
<xsd:element name="ExceptionClass" type="ExceptionClassType"/>
<xsd:element name="ExceptionLevel" type="ExceptionLevelType"/>
<xsd:element name="Description" type="xsd:string"/>
<xsd:element name="NamedValue" type="NamedValueType" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="Machine" type="xsd:string"/>
<xsd:element name="TimeStamp" type="xsd:dateTime"/>
</xsd:sequence>
</xsd:complexType>

<!-- - - - Exception Level Type - - - - - -  Exception Level Type - - - - -->
<xsd:simpleType name="ExceptionLevelType">
<xsd:restriction base="xsd:string">
<xsd:enumeration value="NOTIC"/>
<xsd:enumeration value="WARNING"/>
<xsd:enumeration value="ALART"/>
</xsd:restriction>
</xsd:simpleType>

<!-- - - - Exception Class Type - - - - - -  Exception Class Type - - - - -->
<xsd:simpleType name="ExceptionClassType">
<xsd:restriction base="xsd:string"/>
</xsd:simpleType>

<!-- History - - - - -   History - - - - - -  History - - -->
<xsd:complexType name="HistoryType">
<xsd:sequence>
<xsd:element name="HistoryIndex" type="HistoryIndexType"/>
<xsd:complexType>
<xsd:choice>
<xsd:element name="Event" type="EventType"/>
<xsd:element name="Exception" type="ExceptionType"/>
</xsd:choice>
</xsd:complexType>
</xsd:sequence>
</xsd:complexType>


SEMI T12.2-0704 © SEMI 2004 66

<xsd:complexType name="HistoryIndexType">
<xsd:sequence>
<xsd:element name="Id" type="xsd:string"/>
<xsd:element name="Type" type="xsd:string"/>
</xsd:sequence>
</xsd:complexType>

<!-- Genaric Types - - - -  Generic Types - - - -  Generic Types - - -->
<xsd:complexType name="NamedValueType">
<xsd:sequence>
<xsd:element name="Name" type="xsd:string"/>
<xsd:element name="Value" type="xsd:anyType"/>
</xsd:sequence>
</xsd:complexType>

<!-- Service Status Type - - - - -   Service Status Type - - -->
<xsd:complexType name="ServiceStatusType">
<xsd:sequence>
<xsd:element name="SvcAck" type="SvcAcktype"/>
<xsd:element name="SvcErr" type="SvcErrType" minOccurs="0" maxOccurs="unbounded"/>
</xsd:sequence>
</xsd:complexType>

<xsd:simpleType name="SvcAckTye">
<xsd:restriction base="xsd:string">
enumeration value="Successful"/
enumeration value="Wrong Service"/
enumeration value="Refused"/
enumeration value="Invalid Parameter"/
enumeration value="Has started"/
enumeration value="Unsuccessful"/
enumeration value="Wrong object"/
</xsd:restriction>
</xsd:simpleType>

<xsd:complexType name="SvcErrType">
<xsd:sequence>
<xsd:element name="SvcErrCode" type="xsd:integer"/>
<xsd:element name="SvcErrText" type="xsd:string"/>
</xsd:sequence>
</xsd:complexType>

<!-- Attributes - - - - -   Attributes - - - - - -  Attributes - - -->
<xsd:attributeGroup name="RegRequestAttr">
<xsd:attribute name="dateTime" type="xsd:dateTime" use="required"/>
<xsd:attribute name="sessionRef" type="xsd:string" use="required"/>
<xsd:attribute name="requestId" type="xsd:string" use="required"/>
</xsd:attributeGroup>

<xsd:attributeGroup name="RegResponseAttr">
<xsd:attribute name="dateTime" type="xsd:dateTime" use="required"/>
<xsd:attribute name="sessionRef" type="xsd:string" use="required"/>
<xsd:attribute name="requestRef" type="xsd:string" use="required"/>
<xsd:attribute name="status" type="RspStatus" use="required"/>
<xsd:attribute name="authority" type="xsd:string" use="optional"/>
<xsd:attribute name="linkId" type="xsd:string" use="optional"/>
<xsd:attribute name="linkCnt" type="xsd:integer" use="optional"/>
<xsd:attribute name="linkExp" type="xsd:duration" use="optional"/>
</xsd:attributeGroup>

<xsd:simpleType name="RspStatus">
<xsd:restriction base="xsd:string">


SEMI T12.2-0704 © SEMI 2004 67
enumeration value="GRANTED"/
enumeration valie="REFUSED"/
</xsd:restriction>
</xsd:simpleType>

</xsd:schema>



SEMI T12.2-0704 © SEMI 2004 68
RELATED INFORMATION 1
IPC MESSAGING MECHANISM and STRUCTURE
NOTICE:    This  related  information  is  not  an  official  part  of  SEMI  T12.2  and  was  derived  from  the  Japanese
Traceability  Committee.    This  related  information  was  approved  for  publication  by  full  letter  ballot  on  April  30,

# 2004

2004.
R1-1  HTTP and SOAP Envelope
R1-1.1    The  following  diagram  illustrates  HTTP  message  border  and  SOAP  Envelope  structure.  SOAP  Header
contains information of the message and SOAP body just contains SOAP Faults to make sure what happens when
something  wrong.  Intended  message  service  and  its  parameters  are  contained  in  second  MIME  Block  to  make  it
possible to allow mixture of non-XML data.
R1-2  Communication with Message Broker
R1-2.1  The following diagrams show client-server communications with Message Broker.

HTTP  1.1
SOAP with MIME Envelope
MIME B loc k
MIME Block
Mess ag e N ame a nd P ar ameters
SOAP Envelope
SOAP Body
SOAP Header
SOAP Fault s
Me s s a g e  I n f o r m a t i on

Figure R1-1
SOAP Envelope and MIME Blocks



SEMI T12.2-0704 © SEMI 2004 69

Client
(H TT P C lien t)
Bro ke r
(H TT P Se rver)
HTTP POST MessageC1
HTT P 200 Acknowledge
Client
(H TTP  C l ient)
Broker
(H TT P Serve r)
H TT P POST < getM essag e>
HTT P 200 MessageB1
Client
(HTTP Client)
Br ok e r
(H TTP  Serve r)
HTTP  POST g etMe ssage 
HTT P 200 empty
HTTP  POST A ck nowled ge 
HT TP 200 empty
Client
(H TT P C lien t)
Bro k er
(H TT P Serve r)
HTTP  POST M essa geC2
HTTP  200 A ckno wled ge
Client
(HTTP Client)
HTTP POST getMessage
HTTP  200  MessageC2
HTTP POST  Acknowledge
HTTP 200 empty
Message fr om Client to B roker
Message from Broker to Client
No Message from Broker to Client
Message between Clients


Figure R1-2
Communication with Message Broker



NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer's  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature,  respecting  any  materials  or  equipment  mentioned  herein.  These  standards  are  subject  to  change  without
notice.
By publication of this standard, Semiconductor Equipment and Materials International (SEMI) takes no position
respecting the validity of any patent rights or copyrights asserted in connection with any items mentioned in this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights are entirely their own responsibility.

Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI T13-1104 © SEMI 2004 1
SEMI T13-1104
SPECIFICATION FOR DEVICE TRACKING: CONCEPTS, BEHAVIOR
AND SERVICES
This  specification  was  technically  approved  by  the  Global  Traceability  Committee  and  is  the  direct
responsibility  of  the  Japanese  Traceability  Committee.  Current  edition  approved  by  the  Japanese  Regional
Standards Committee on April 30, 2004.  Initially available at www.semi.org June 2004; to be published June
2004.
NOTICE:    The  designation  of  SEMI  T13  was  updated  during  the  1104  publishing  cycle  to  reflect  the  creation  of
SEMI T13.1 and SEMI T13.2.
1  Purpose
1. 1  The purpose of this specification is to trace devices
for  the  sake  of  quality  control,  warranty,  security  or
any  other  reasons.  This  specification  makes  it  easy  to
transfer  information  required  for  realizing  tracing  in
such  semiconductor  products  as  dice  and  packaged
devices.
1. 2  Because modern market trend of consumer minds,
industries  and  governments  are  explicitly  or  implicitly
requiring    traceability    for    all    products    including
semiconductor devices. Implementing this specification
will  help  to  satisfy  both  direct  and  indirect  consumers
of semiconductor devices.
1. 3  The  other  purpose  of  this  document  is  to  clarify
means   to   define   coordinates   to   specify   physical
position   of   devices   on   substrates   which   the   other
standard  documents  don’t  address.  This  information  is
provided in Appendix sections.
2  Scope
2. 1  This     specification     is     intended     to     realize
semiconductor  device  tracking  rather  than  production
itself.  Even  if  some  operations  or  communications  for
tracing purpose may be related to factory automation or
production  including  measurement  and  maintenance,
they  are  not  in  the  scope  of  this  specification  but
references to work within a factory.
2. 2  Because    the    object    of    this    specification    is
traceability,  tracing  dice  is  not  bounded  on  packaging
process  of  semiconductor  devices.  For  example  bare
dice  may  be  mounted  on  Print  Circuit  Board  (PCB).
This  specification  describes  not  only  what  is  required
to  trace  dice  in  semiconductor  manufacturing  fab  but
also what could be shared in PCB assembly lines or set
makers.
2. 3  This   document   describes   device   tracking   data
transfer between entities in a fab. Some entities may be
physical  or  logical  depending  on  configuration  of  the
fab.  Sometimes  the  transfer  is  carried  out  between
entities      in      different      companies      over      such
communication   media   as   internet   or   VPN   (Virtual
Private  Network).  While  this  document  describes  the
transferring    interface,    it    doesn’t    define    security
specification    or    criteria    to    be    used    with    this
specification.
2. 4  This  document  describes  tracking  semiconductor
devices.  To  make  it  possible  to  track  final  assembled
products  of  semiconductor  devices  consistently,  this
document  describes  such  assembled  materials.  Also,
sometimes   a   semiconductor   device   may   consist   of
more  than  one  die.  To  track  the  smallest  unit  this
document  often  uses  “Die  Tracking”  or  “Die  Tracing”
rather than “Device Tracking.”
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Limitations
3. 1  While this specification could be effective in such
industry as PCB assembly, it is not required to comply
with     this     specification.     Semiconductor     device
producers  who  implement  this  specification  will  find
communicating    die    trace    information    with    later
assembly  manufacturers  easier  and  more  effective  if
they comply this specification. The reverse is also true.
3. 2  Because   this   specification   doesn’t   talk   about
security     considerations,     implementers     of     this
specification   are   required   realizing   security   data
transfer or connection with foreign computers. It is the
responsibility of the readers of this document to discuss
this issue between users and suppliers.
3. 3  This    document    specifies    logical    information
definitions and related message exchanges required for
die  trace  systems,  and  assumes  that  any  process  or
equipment  verifies  passed  material  or  product  by  any
means.  This  document  doesn’t  specify  how  it  is  done,
which  ID  tags  and  readers  are  recommended  or  where
and  when  it  must  be  done.  However  target  equipment
and   production   systems   have   to   make   sure   the


SEMI T13-1104 © SEMI 2004 2
verification     occurs.     Even     if     some     physical
identification   may   be   difficult   to   verify   because
something   is   hidden   by   the   other   material   or   no
physical  identification  tag  is  provided,  they  have  to
cover by some means.
3. 4  Tracking  die  coordinate  information  on  substrates
is  a  subset  of  full  device  tracking.  Readers  who  have
just  interested  in  die  coordinate  information  (narrow
Device   Tracking)   can   skip   most   sections   and   go
straight  to  Appendix  and  Related  Information  sections
to implement the specification.
4  Referenced Standards
4. 1  SEMI Standards
SEMI   E130 —   Specification   for   Prober   Specific
Equipment     Model     for     300     mm     Environment
(PSEM300)
SEMI G81 — Specification for Map Data Items
SEMI G84 — Specification for Strip Map Protocol
SEMI G85 — Specification for Map Data Format
SEMI M17 — Guide for Universal Wafer Grid
SEMI  M20  —  Specification  for  Establishing  a  Wafer
Coordinate System
SEMI  M21  —  Specification  for  Assigning  Addresses
to Rectangular Elements in a Cartesian Array
4. 2  The Internet Engineering Task Force
1

RFC2396   —   Uniform   Resource   Identifiers   (URI):
Generic Syntax
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
5  Terminology
5. 1  Abbreviations & Acronyms
5. 1.1  PCB — Print Circuit Board
5. 1.2  SMT — Surface Mount Technology
5. 1.3  SMTP — Simple Mail Transfer Protocol
5. 1.4  SIP — System In Package
5. 2  Definitions
5. 2.1  cabinet  —  a  kind  of  enclosure  for  electronics  to
keep      from      exposure      of      electrodes      and/or
subcomponents,  and/or  to  give  some  means  of  human
operation.
5. 2.2  cassette  —  a  kind  of  container  of  electronics
materials    or    parts    for    the    purpose    of    carrying


1 The Internet Engineering Task Force; www.ietf.org,
capability,    grouping    operation,    replaceability    at
inlet/outlet port or similar objectives.
5. 2.3  circuit module — an implemented electric circuit
with active/passive elements in a cell, on a substrate or
packaged together.
5. 2.4  device    —    a    concise    representation    of    a
semiconductor  device.  It  must  be  a  semiconductor  die
regardless  whether  it  is  on  the  way  of  fabrication  or
completed, whether it has been diced or not, whether it
is   installed/mounted   on   some   substrate   or   not,   or
whether  it  is  packaged  or  not.  If  it  is  packaged,  the
whole  package  is  assumed  as  a  device  and  a  device
may  have  more  than  one  dice.  In  some  specific  case  a
device may have some other active or passive elements
in the package.
5. 2.5  Device  Tracking  —  generic  term  of  Die  Trace
regardless of unit of tracing or category of information.
Following narrow sense is also applied in some specific
fields.   A   specific   case   of   tracking   especially   for
geometric     coordinates     information     on     holding
substrate.   Because   sometimes   this   specific   type   of
Device Tracing information is very convenient to such
end  user  industries  as  the  automobile  or  car  parts
industries,   this   is   defined   separately.   This   can   be
realized    with    limited    specification    presented    in
Appendix sections of this specification.
5. 2.6  dicing  frame  —  a  frame  with  sticky  plastic  film
to mount a semiconductor wafer for dicing.
5. 2.7  die   —   a   semiconductor   product   which   has
electric  elements  and  wiring.  Many  dice  are  usually
fabricated on a semiconductor substrate at a time which
is  often  referred  to  as  wafer  and  the  substrate  is  diced
for  dice  before  packaging  or  mounting  on  some  other
substrate. Some die may be fabricated on such isolator
as  thin  transparent  glass  plate.  Die  is  intended  as  it  is
just  one  piece  of  substrate  even  if  it  is  packaged  with
the other dice.
5. 2.8  Die   Trace   —   acquiring   die   information   for
tracing  the  die  and/or  processing  the  information  to
investigate    what    happens    on    the    die    during
manufacturing or to ensure such properties of the die as
producer   and   facilities.   The   information   for   such
aggregating entities as wafer and PCB may be included
depending  on  the  usefulness  of  the  information  for
tracing because they are produced with the die on them.
5. 2.9  glass plate — a rectangular thin insulator plate to
fabricate one or more electric elements on it. Often the
material  of  this  plate  is  transparent  glass  for  flat  panel
display,   sometimes   it   may   be   ceramic   for   passive
electric elements. The purpose of definition of this item
is  just  to  introduce  one  of  possible  examples  to  trace
and this document doesn’t specify details.


SEMI T13-1104 © SEMI 2004 3
5. 2.10  hybrid IC — a kind of Device which has one or more semiconductor dice and other active/passive elements
packaged together.
5. 2.11  reusable container — a container for electronics parts which is usually used more than once.
5. 2.12  packaged  device  —  a  Device  which  is  not  exposed  in  bared  shape  on  substrate  for  passivation,  physical
protection  and  manipulation  purposes.  It  is  often  independently  packaged  by  ceramic  base  or  plastic  molding  with
leads. Sometimes it has more than one dice and some separated electric elements packaged in a package.
5. 2.13  strip — rectangular shaped substrate or flexible tape to mount semiconductor devices. The purpose of use is
not only for products but also for carrier or some other purpose used during production of electronics products.
5. 2.14  substrate  —  base  on  which  electronics  elements,  especially  semiconductor  devices,  are  fabricated  or  on
which  electronics  parts  are  mounted.  Examples  are  silicon  wafers,  flat  panel  display  glass  substrates,  lead  frames,
print circuit boards and so on.
6  Convention
6. 1  This section defines the conventions followed by this document.
6. 2  Object Conventions  —  This  document  conforms  to  the  conventions  for  objects  established  by  SEMI  E39,
including object diagrams, object terminology, and requirements for standardized objects.  Accordingly, notation is
based on Unified Modeling Language (UML).
6. 2.1  Formal  Name  of  an  Object  —  The  text  capitalizes  formal  object  name  references.    Similar  to  the  way
capitalization  is  normally  used  when  discussing  entities.    When  describing  something  in  the  general  (like  cities)
lower case is used, but when a specific entity is of interest (New York City), then first letters are capitalized.
6. 2.2  Components of Complex Attributes — The names of object attributes defined in tables are left-justified.  The
individual elements of complex attributes are right-justified in order of appearance below the complex attribute.
6. 3  State Model Conventions
6. 3.1  This document uses the Harel state chart convention for describing dynamic operation of defined objects.  The
outline of this convention is described in an attachment of SEMI E30.  The official definition of this convention is
described in “State charts: A Visual Formalism for Complex Systems”
2
.
6. 3.2  The  Harel  convention  has  not  the  concept  of  state  models  of  “creation”  and  “extinction”  for  expressing  a
temporary entity.  The “job” described in this document is such an entity, and a copy of the same state model is used
for  an  independent  job  newly  created.    In  this  document,  a  circle  with  a  black  circle  inside  is  used  for  expressing
extinction of an entity.  A filled black circle denotes the entry to the state model (the entity creation).
6. 3.3  Transition tables are provided in conjunction with the state diagrams to explicitly describe the nature of each
state  transition.    A  transition  table  contains  columns  for  Transition  number,  Previous  State,  Trigger,  New  State,
Actions,  and  Comments.    The  “trigger”  (column  3)  for  the  transition  occurs  while  in  the  “previous”  state.    The
“actions” (column 5) includes a combination of:

# 1

1. Actions taken upon exit of the previous state.

# 2

2. Actions taken upon entry of the new state.

# 3

3. Actions taken which are most closely associated with the transition.

# 4

4. No differentiation is made between these cases.
Num Previous State Trigger New State Actions Comments


6. 4  Service Message  Representation  —  Services  are  functions  or  methods  that  may  be  provided  by  either  the
equipment or the host.  A service message may be either a request message, which always requires a response, or a
notification message, that does not require a response.


2 D. Harel, “State charts: A Visual Formalism for Complex Systems”, Science of Computer Programming 8, 1987.


SEMI T13-1104 © SEMI 2004 4
6. 4.1  Service Definition
6. 4.1.1  A service definition table defines the specific set of messages for a given service resource, as shown in the
following table:
Message Service Name                          Type                          Description


6. 4.1.2  Type can be either “N” = Notification or “R” = Request & Response.
6. 4.1.3  Notification type messages are initiated by the service provider (e.g., the equipment) and the provider does
not expect to get a response from the service user.  Request messages are initiated by a service user (e.g., the host).
Request  messages  ask  for  data  or  an  activity  from  the  provider.    Request  messages  expect  a  specific  response
message (no presumption on the message content).
6. 4.2  Service Parameter Dictionary
6. 4.2.1  A  service  parameter  dictionary  table  defines  the  description,  format  and  its  possible  value  for  parameters
used by services, as shown in the following table:
Parameter Name Description Format: Possible Value


6. 4.2.2  A row is provided in the table for each parameter of a service.
6. 4.3  Service Message Definition
6. 4.3.1  A service message definition table defines the parameters used in a service, as shown in the following table:
Parameter                                         Req/Ind                                         Res/Cnf                                         Comment


6. 4.3.2  The  columns  labeled  REQ/IND  and  RSP/CNF  link  the  parameters  to  the  direction  of  the  message.  The
message sent by the initiator is called the “Request”. The receiver terms this message the “Indication” or the request.
The receiver may then send a “Response” which the original sender terms the “Confirmation”.
6. 4.3.3  The  following  codes  appear  in  the  REQ/IND  and  RSP/CNF  columns  and  are  used  in  the  definition  of  the
parameters (eg., how each parameter is used in each direction):
M Mandatory Parameter — Must be given a valid value.
C Conditional Parameter — May be defined in some circumstances and undefined in others. Whether a value is
given may be completely optional or may depend on the value of the other parameter.
U           User-Defined           Parameter.
- The parameter is not used.
= (For response only.) Indicates that the value of this parameter in the response must match that in the primary (if
defined).

NOTE 1:  Concatenated  words  are  often  used  for  names  of  class,  attribute,  service  and  data.  However  they  are  official,
sometimes separated words may be preferred in figures and explanatory sentences for readability even they are no differences.
7  General Requirements
7. 1  Identification Means — Equipment and other computer or software have to have some means to identify entities
that appear in this document.
7. 2  Communication Means — Each entity on equipment and other computer or software has to have some electric
communication means to transact.


SEMI T13-1104 © SEMI 2004 5
8  Overview
8. 1  Die Trace Capability — Economic growth around the world makes it possible to get entered into semiconductor
manufacturing  business  and  advanced  electronics  business  which  uses  semiconductor  devices.  The  number  of
semiconductor  manufacturing  countries  and/or  companies  including  subsidiaries  and  branch  divisions  is  growing.
Procurement by e-commerce makes it easy to purchase semiconductor devices and electronics parts as application of
the devices from emerging companies in wide and distant areas. Suppliers of such devices and parts are required to
have device tracking facilities or die tracing capabilities to reduce security risks, perform quality assurance, improve
quality engineering and some other purpose depending on products.
8. 2  Wide   Area   Communication   —   Such   electronics   as   cell   phones   and   television   sets   consist   of   many
semiconductor  devices.  They  are  decomposed  into  circuit  boards,  display  module,  operation  panel  unit  and  so  on.
Most  of  such  subcomponents  also  consist  of  semiconductor  devices.  They  are  supplied  by  semiconductor
manufacturers,  set  makers  or  third  party  suppliers.  Tracking  semiconductor  devices  or  die  tracing  does  not  just
happen  in  semiconductor  manufacturing  fab.  Close  communication  with  assembly  works  including  print  circuit
board (PCB) suppliers and set makers is expected.
8. 3  Range  of  Die  Tracing  —  If  traceability  expectation  were  only  for  confirmation  of  producer  and  producing
country,  this  standard  would  address  backend  processes  and  PCB  assembly  line.  Industries  around  semiconductor
manufacturing, e.g. automobile and car electronics industries, anticipate more than secure components. To address
that,  this  document  extends  the  range  of  specification  not  only  for  assembly  but  also  for  wafer  processes.  Some
specific process data including metrology and inspection may be included in target data for die tracing.
8. 4  Die Trace Data — As described above, data traced for a die doesn’t come from just one specific process or a
piece  of  equipment.  Die  information  is  required  to  be  traced  on  each  key  equipment.  Otherwise  it  doesn’t  make
sense,  in  other  words,  tracing  system  doesn’t  work  as  a  whole.  Storage  for  Die  Trace  Data  may  or  may  not  be
distributed.
8. 5  Variety  of  Die  Trace  Data  —  Tracers  collect  various  kinds  of  data  for  die  tracing.  They  may  be  collation
information  of  pick  &  place  history  from  dicing  film  to  lead  frame,  electric  test  information  for  sorting  dice  or
metrology  data  on  the  wafer  to  which  a  die  belongs.  They  are  just  examples  of  variety  of  Die  Trace  Data.  Their
generic format can not be specified and unified central tracing system may not be realistic.


dice

Die Trace Data
Trace Data Storage
Equipment-P
Process-A
Material-X

dice
Die Trace Data
Trace Data Storage
Equipment-Q
Process-B
Material-X
dice
Die Trace Data
Trace Data Storage
Equipment-R
Process-C
Material-X
Same Material on Different Equipment types for Different Processes

Figure 1
Example of Die Trace Data on Key Equipment

8. 6  Data Source of Die Trace Data — Most Die Trace Data are reported by equipment because die tracing tracks
what  happens  on  a  die  for  process.  The  things  that  happen  are  not  for  equipment  control,  process  control  nor
performance tracking done with execution. But they are for logging to certify the pedigree of a product or to track
back when some serious problem is detected on a product or prevent further damage to application of the product. In
this sense, Die Trace Data may be a part of or summary of MES data, or some calculated data. Equipment may not
be the data source in these cases.
8. 7  Data  Taxonomy  —  Die  Trace  Data  can  be  categorized  in  various  ways:  by  data  source,  data  type,  data  form,
semantics  and  so  on.  The  other  classification  criteria  may  be  geometric  information,  deviation  of  process  settings,


SEMI T13-1104 © SEMI 2004 6
metrology data, inspection results, test results, and sorting information. If dice on such substrate as wafer and PCB
are processed, all dice share data for the substrate. This case a part of data for a die links to the substrate data. If a
group of dice or substrates which is referred to as a lot is processed at a time or in the same environment, die trace
data for one of the dice links to the lot.
8. 8  Die Trace System and its Clients — Die Trace System keeps collecting expected Die Trace Data on Equipment
or some other entities in a fab. A Client asks the system to make specific information for die tracing about one or
more dice. Client may give some fault information to the system to find out the cause of the fault. When the system
discovers a potential problem, it may notify an alert. Die Tracer is a closest entrance to Die Trace System.
8. 9  Tracer and Machine — To reduce ambiguity or burdensome discussion and to make a process conspicuous, this
document highlights die trace data of a process or on a piece of equipment from the ensemble of data. In this aspect
data tracking entity, or a snapshot of the system, is referred to as ‘Tracer’ and entity to execute the process is called
as ‘Machine’ to discriminate from physical equipment.


VIT
VIT
ask
Material /
Acceptance
Da tab ase
Die Trace
Data (DTD)
WIP
Computer
Machine
Die Trace Data
Tracer
Defect Analysis System
Inspection
Tool (VIT)
Review Tool
Tracer / Client
Supplier
Database

Tracer
Die Trace
Da ta  (D T D)
Di e  Tr ace
D ata  (D T D )

Figure 2
Example of Tracers with/without Machine

9  Basic Concepts
9. 1  Domain  Analysis  and  Object  Based  Modeling  —  To  model  and  design  complicated  system  or  to  have  shared
specification of a part of system which is used widely in deferent applications, some sophisticated methodologies are
required. Analyzing problem domain by object oriented paradigm is one of the best practices to be taken. Because
this technology is frequently used in many SEMI standards, there is no confusion if this document follows the way.


Client
collects
1. .*
1. .*
asks
Tracer
Machine
0. .*


Figure 3
Die Trace Cell Model



SEMI T13-1104 © SEMI 2004 7
9. 2  UML   representation   —   The   diagram   above   is
modeling   of   Tracing   Capability   for   Dice   in   UML
diagram. It is not required to make systems with object
oriented   programming   language   compliant   to   this
specification.  Even  if  UML  is  typical  object  oriented
representation,  object  oriented  implementation  may  be
expected but may not be mandatory.
9. 3  Ensemble  Modeling  —  Die  tracing  can  be  done  at
any  stage  of  process.  Collected  data  on  such  different
processes  for  a  specific  die  are  linked  together  and
accumulated   as   a   serialized   one   Die   Trace   Data.
Because  the  serialized  data  is  an  ensemble  of  snapshot
data  of  each  key  process  stage.  This  document  models
such snapshot of the ensemble as depicted above Figure
1.
9. 3.1  Die  Trace  Machine  Object  (Machine)  —  This  is
an instance of Die Trace Machine class (Machine). The
Machine  acquires  Die  Trace  Data  and  reports  the  data
to associated Tracer.
9. 3.1.1  Special   Machines   —   However   Die   Trace
Machines  are  often  physical  equipment,  they  may  be
sometimes   such   non-automated   entities   as   human
assisted    semi-automated    manufacturing    tools    and
handcraft processes. Die Trace Machine is any entity to
process  products  or  make  metrology  assistance  and
have  capability  to  report  Due  Trace  Data  on  the  shop
flower  of  semiconductor  device  manufacturing.  They
need  to  manufacture  exactly  and  input  at  the  terminal
by the process or record on work schedule pad for later
input in the office.
9. 3.2  Die Tracer Object (Tracer) — This is an instance
of  Die  Trace  class  (Tracer).  The  Tracer  collects  Die
Trace Data reported by Die Trace Machine below. The
Tracer  searches  Die  Trace  Data  as  requested  by  Die
Trace  Client.  Figure  3  is  a  class  model  of  a  cell  which
consists of a Tracer and its reporting Machines.
9. 3.2.1  Data  Searching  Chain  —  Because  the  Tracer
inherits Client class, the Tracer can ask the other Tracer
when it doesn’t have enough data to respond a request.
Because the Tracer knows very specific type of Tracer,
the  inquiring  chain  is  usually  restarted  at  the  specific
Tracer.
9. 3.2.2  Data  Source  of  Tracer  —  There  are  different
kinds of data source from the Machine. Sometimes such
entities as controlling computers, database systems and
their  software  processes  or  application  programs  could
be data source of Die Tracer. The controlling computers
may  be  called  as  Manufacturing  Execution  System
(MES),   Work   In   Process   (WIP)   computer,   Host
computer, Cell Controller and so on.
9. 3.3  Die  Trace  Client  Object  (Client)  —  This  is  an
instance  of  Die  Trace  Client  class  (Client).  Basically
the Client asks some Die Trace Data set, asks searching
Die  Trace  Data  or  sets  expecting  data  items  to  be
collected  next.  At  the  same  time  some  specific  Client
may be asked to register concerning phenomena happen
on  specific  product  or  specific  production  group,  or
notify  serious  problem  potentially  happens  on  specific
product  or  production  group  to  possible  customers  or
quality  assurance  database  computer  of  semiconductor
device manufacturer.
9. 4  Die  Trace  Data  Hierarchy  and  Linkage  —  As
described  very  briefly  in  Section  8.7  Data  Taxonomy,
whole  substrate  trace  data  may  complement  die  trace
data  on  the  substrate.  They  should  be  linked  by  some
means to keep the relation. Possible data hierarchy is as
below.
9. 4.1  Die  Trace  Data  (DTD)—  This  is  a  generic  class
of  any  kind  of  Die  Trace  Data.  This  class  represents
basic  concept  and  primitive  nature  of  data  acquired  for
Die  Tracing.  Any  objects  instanced  for  this  class  or  its
derived class have following responsibility.
9. 4.1.1  Die  Trace  Data  Class  Definition  —  Die  Trace
Data  must  have  such  attribute  as  ID,  Type  and  etc.  as
depicted   on   Figure   4.   These   attributes   cannot   be
changed  because  they  are  proper  for  a  specific  object.
Because this document doesn’t intend these attributes to
be  accessed  directly  but  just  for  reference  to  specify
services  to  access  or  make  use  of  these  attributes.  This
class is used to discuss and handle generic issues of any
subclasses.
9. 4.1.1.1  Target  Material  —  Die  Trace  Data  need  to
specify intended material. Die Trace Data must have an
attribute for the purpose and it shall provide a service to
identify the target material.
9. 4.1.1.2  Data  Representation  —  Actual  Data  may  be
contained in its object as an attribute if amount of data
is  relatively  small.  However  it  may  be  stored  in  such
independent  entity  as  files  or  database  and  referenced
with  an  attribute  of  this  class  if  the  data  is  relatively
large and the attribute for data value must be null. This
case  it  is  suggested  to  take  care  of  the  separated  data
value not to be removed. Storage system often may not
notify  or  ask  when  related  data  is  removed.  It  may  be
better   to   have   another   copy   of   the   important   data
somewhere  in  Die  Tracing  System.  It  is  recommended
to use any Universal Resource Identifier (URI) for data
value reference to access without confusion.
9. 4.1.2  Responsibility  of  Die  Trace  Data  —  Because
Die  Trace  Data  class  is  to  be  data  container  or  data
label, responsibility of this class is to play the role.
9. 4.1.3  Services of Die Trace Data — To complete the
responsibility, this class provides following services.



SEMI T13-1104 © SEMI 2004 8

DieTraceData
showProperty
showData
ID
Type
CircuitModule
DataReference
DataValue


Figure 4
Die Trace Data Class

9. 4.1.3.1  showProperty — This service returns all or a part of attributes of this object except actual Die Trace Data
value.
9. 4.1.3.2  showData  —  This  service  returns  actual  Die  Trace  Data  value  regardless  whether  it  is  contained  in  this
object or separated entity.
9. 4.1.4  Behavior  of  Die  Trace  Data  —  Behavior  is  defined  to  complete  responsibility  of  the  Die  Trace  Data.  The
behavior  is  often  specified  through  collaboration  with  outside  of  this  class  and  state  model.  Because  this  class  has
services  to  access  internal  attributes  including  referenced  data  value,  it  defines  no  collaboration.  Also  this  class
defines no state model for it is stateless.


Die-trace Map
Data (DMD)
Die-trace Die
Data (DDD)
Di e-trace Substrate
Data (DSD)
Die-trace Lot
Data (DLD)
Die-trace Batch
Data (DBD)
1. .*
Di e
Die Trace Data
(DTD)
complements
complem ents
com
plements
com
plements
c har ac terized
Substrate
ch ar ac terized
Lot
characterized
Batch
ch ar act erized
1. .*                                  1..*
1. .*
0. .*    0..*   0..1 0..1

Figure 5
Die Trace Data Hierarchy, Associations and Linkages





SEMI T13-1104 © SEMI 2004 9

Substrate
Die
0. .*
Batch Lot
0. .*
OR
1. .* 1..*
1. .*


Figure 6
Lot vs. Batch

9. 4.2  Die-trace  Die  Data  (DDD)  —  This  is  Die  Trace
Data  for  a  die  on  a  certain  process.  Examples  of  the
data  are  electric  test  classification  information  often
referred  to  as  BIN  code  and  wire  bonding  inspection
data for a die.
9. 4.3  Die-trace  Map  Data  (DMD)  —  Die-trace  Die
Data are often grouped together on the process which is
executed  on  a  mother  substrate.  The  grouped  data  is
referred  to  as  a  map  and  is  usually  two-dimensional
array or matrix. Examples are probing test data and die
ID  map  of  mounting/inserting  data  on  PCB  or  lead
frame strip.
9. 4.4  Die-trace  Substrate  Data  (DSD)  —  This  Die
Trace  Data  is  specific  for  a  substrate  on  a  certain
process. Examples of the substrate are wafer, glass plate
for flat panel display, such strip as PCB and so on. This
data has no special distribution on the substrate or may
have some distribution but may not be a Die-trace Map
Data.  Sometimes  this  data  has  very  strong  correlation
with most Die-trace Die Data on the substrate when, for
example,  this  data  shows  remarkable  deviation  from
normal  process  result.  So  the  Die-trace  Die  Data  need
to keep linkage with this data for complement.
9. 4.5  Die-trace  Lot  Data  (DLD)  —  This  Die  Trace
Data  is  specific  for  a  lot  on  a  certain  process.  Lot  is  a
group of material or products for the sake of expedient
to  produce  a  specific  product.  A  unit  of  a  lot  may  be
different  on  each  process  or  product.  The  lot  here
doesn’t  include  group  just  for  delivery.  Because  of
similar  linkage  as  Die-trace  Substrate  Data,  the  data
need to keep linkage with this data for complement.
9. 4.6  Die-trace  Batch  Data  (DBD)  —  This  Die  Trace
Data  is  specific  for  a  batch  on  a  certain  process.  Batch
is  a  group  of  material  or  products  for  the  sake  of
expedient  to  execute  a  process.  A  unit  of  a  batch  may
be  different  on  each  process  or  equipment.  Because  of
similar  linkage  as  Die-trace  Substrate  Data,  the  data
need to keep linkage with this data for complement.
9. 4.7  Lot  versus  Batch  —  Because  lot  and  batch  are
both a group of material or products, their unit sizes are
alternative. However sometimes the unit of a lot may be
smaller  than  that  of  a  batch  on  a  process,  the  relation
may  be  opposite  on  the  other  process  for  the  same
product,  as  illustrated  on  Figure  6.  Lot  is  more  related
to  production  plan,  production  strategy  or  sprit/merge
operation. While, batch is close to process or equipment
type, configuration and structure.
9. 5  Physical  Substrate  Model  —  Because  die  tracing
may  need  to  be  started  from  very  early  manufacturing
process  and  completed  at  the  such  final  product  as  cell
phone and Television set, there are many different types
of  substrates  appears  as  objects  of  tracing:  e.g.  wafer,
die   and   PCB.   While   their   appearances   are   fairly
different,   some   characteristics   are   common.   It   is
convenient  to  separate  the  common  nature  as  a  base
class  object,  as  illustrated  on  Figure  7.  Also  the  class
diagram  shows  which  will  be  physical  tracing  target
and  helps  understanding  which  target  make  which  Die
Trace  Data.  This  diagram  gives  just  taxonomy  of  die
trace target substrate in a sense.
9. 5.1  Circuit   Module   —   This   class   represents   any
modular  electric  circuit  and  is  the  common  part  of  any
substrate  appears  as  an  object  of  die  tracing.  Each
Circuit  Module  in  die  tracing  world  has  corresponding
Die  Trace  Data.  The  Die  Trace  Data  may  link  to  the
other subtype of Die Trace Data: e.g. as aggregation or
complement.  Circuit  Module  may  have  smaller  grain
Circuit  Modules  on  it  as  components.  For  example,
such a strip as PCB or linked lead frames has dice. This
class has subclasses: Die and Mother Substrate.



SEMI T13-1104 © SEMI 2004 10

Circuit Module
Die
Mother
Substrate
Dicing FrameWafer Lead Frame PCB Cabinet
0. .*
Glass Plate Tray Ta pe  Strip
Die Trace Data
(DTD)
characterizes
0. .*
refers
links
0. .*
Cassette
Reusable
Contai ner


Figure 7
Physical Substrate Model for Die Tracing

9. 5.1.1  Circuit   Module   Class   Definition   —   Circuit
Module  has  such  attribute  as  ID,  Type  and  etc.  as
depicted   on   Figure   8.   These   attributes   cannot   be
changed  because  they  are  proper  for  a  specific  Circuit
Module  and  not  all  attributes  are  illustrated  on  the
figure.  Because  this  document  doesn’t  intend  these
attributes  to  be  accessed  directly  but  just  for  reference
to  specify  services  to  access  or  make  use  of  these
attributes.  This  class  is  used  to  discuss  and  handle
generic issues of any subclasses.
9. 5.1.2  Responsibility  of  Circuit  Module  —  Because
Circuit  Module  class  is  to  be  material  label  or  material
property sheet, responsibility of this class is to play the
role.
9. 5.1.3  Services of Circuit Module — To complete the
responsibility,    this    class    provides    the    following
services.
9. 5.1.3.1  showProperty — This service returns all or a
part of attributes of this object.

CircuitModule
showProperty
showDaughter
ID
Type
ProductName
Manufacturer
Plant
Location
ProductionStage
LatestProcessTime
Lot
...  ...  ..


Figure 8
Circuit Module Class
9. 5.1.3.2  showDaughter   —   This   service   is   to   get
smaller   grain   Circuit   Modules   which   this   Circuit
Module has on it.
9. 5.1.4  Behavior  of  Circuit  Module  —  Behavior  is
defined   to   complete   responsibility   of   the   Circuit
Module.   The   behavior   is   often   specified   through
collaboration with outside of this class and state model.
Because   this   class   has   services   to   access   internal
attributes,  it  defines  no  collaboration.  Also  this  class
defines no state model for it is stateless.
9. 5.2  Die — This class represents a semiconductor die
fabricated on wafer. It doesn’t matter how it appears: on
the  way  of  fabrication  on  a  wafer,  diced  and  mounted
on  some  substrate  or  it  is  packaged.  As  long  as  it  is
fabricated through semiconductor process or equivalent
process, it must be a die regardless of base material. Die
doesn’t  aggregate  the  other  Circuit  Modules  and  it  is
not  aggregated  by  the  other  Die.  In  these  senses,  dice
for  gallium  arsenide  devices,  linear  image  sensors  and
flat  panel  display  (FPD)  devices  are  examples  of  the
die.
9. 5.2.1  Die  Class  Definition  —  Die  inherits  Circuit
Module.  Class  definition  of  the  Die  is  almost  same  as
one for Circuit Module except it may not have a service
showDaughter.  Even  if  the  service  is  implemented,  it
returns error or no daughter Circuit Modules.
9. 5.3  Mother   Substrate   —   This   class   is   a   Circuit
Module  which  may  consist  of  one  or  more  the  other
Circuit  Modules.  Silicon  wafers,  lead  flames,  IC  trays
and print circuit boards (PCBs) are examples of Mother
Substrate.  Because  it  is  a  derived  class  of  Circuit
Module to exclude the Die class, it must be the Mother
Substrate as long as it is used for the purpose, even if it
