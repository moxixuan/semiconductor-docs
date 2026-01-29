---
title: "T14-1104 - © SEMI 2004 1..."
description: "SEMI标准文档"
sidebar_label: "T14-1104 - © SEMI 2004 1..."
sidebar_position: 1590
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-159.pdf'
  chapter: 159
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/159.pdf"
  pdfSize="0.95MB"
  title="T14-1104 - © SEMI 2004 1..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI T13.2-1104 © SEMI 2004 21
<xsd:complexType name="NamedValueType">
<xsd:sequence>
<xsd:element name="Name" type="xsd:string"/>
<xsd:element name="Value" type="xsd:anyType"/>
</xsd:sequence>
</xsd:complexType>

<!-- Service Status Type - - - - -   Service Status Type - - -->
<xsd:complexType name="ServiceStatusType">
<xsd:sequence>
<xsd:element name="SvcAck" type="jit:SvcAckType"/>
<xsd:element name="SvcErr" type="SvcErrType" minOccurs="0" maxOccurs="unbounded"/>
</xsd:sequence>
</xsd:complexType>

<xsd:simpleType name="SvcAckType">
<xsd:restriction base="xsd:string">
<xsd:enumeration value="Successful"/>
<xsd:enumeration value="Wrong Service"/>
<xsd:enumeration value="Refused"/>
<xsd:enumeration value="Invalid Parameter"/>
<xsd:enumeration value="Has started"/>
<xsd:enumeration value="Unsuccessful"/>
<xsd:enumeration value="Wrong object"/>
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
<xsd:enumeration value="GRANTED"/>
<xsd:enumeration value="REFUSED"/>
</xsd:restriction>
</xsd:simpleType>

</xsd:schema>



SEMI T13.2-1104 © SEMI 2004 22
RELATED INFORMATION 1
IPC MESSAGING MECHANISM AND STRUCTURE
NOTICE:    This  related  information  is  not  an  official  part  of  SEMI  T13.2  and  was  derived  from  the  Japanese
Traceability  Committee.    This  related  information  was  approved  for  publication  by  full  letter  ballot  on  July  23,

# 2004

2004.
R1-1  HTTP and SOAP Envelope
R1-1.1  The  following  diagram  illustrates  HTTP  message  border  and  SOAP  Envelope  structure.  SOAP  Header
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



SEMI T13.2-1104 © SEMI 2004 23
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
HTTP  P OST  A ckn owled ge
HTTP 200 empty
Message fr om Client to B roker
Message from Broker to Client
No Message from Broker to Client
Mess a
ge between Clients


Figure R1-2
Communication with Message Broker


NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer's  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature,  respecting  any  materials  or  equipment  mentioned  herein.  These  standards  are  subject  to  change  without
notice.
By  publication  of  this  standard,  Semiconductor  Equipment  and  Materials  International  (SEMI)  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  items  mentioned  in  this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights are entirely their own responsibility.


Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction of
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI T14-1104 © SEMI 2004 1
SEMI T14-0705
SPECIFICATION FOR MICRO ID ON 300 mm SILICON WAFERS
This  specification  was  technically  approved  by  the  Global  Traceability  Committee  and  is  the  direct
responsibility  of  the  Japanese  Traceability  Committee.  Current  edition  approved  by  the  Japanese  Regional
Standards Committee on July 23, 2004.  Initially available at www.semi.org September 2004; to be published
November 2004.
NOTICE: The designation number of T14 was updated during the 0705 cycle to reflect the creation of T14.1
1  Purpose
1. 1  The purpose of this document is to specify a new means of identification with the Micro ID on 300mm polished
monocrystalline Silicon wafer with polished edge for process control.
1. 2  The objective of the Micro ID is to keep unique information to be assigned in the device manufacturing process
on the location defined on the wafer bevel.
2  Scope
2. 1  This document assumes that the Micro ID is implemented under the responsibility of Device Manufacturers.
2. 2  A two-dimensional data matrix code symbol consists of the microdots marked on the bevel of a semiconductor
wafer.
2. 3  Although  this  specification  does  not  specify  the  marking  techniques  that  may  be  employed  when  complying
with its requirements, it is assumed that the microdots will be obtained by laser irradiated individual dots.
2. 4  The data matrix code symbol is applicable to a broad range of wafer products (un-patterned or patterned wafers)
with mirror polished
bevel surface.
2. 5  The  format  and  algorithms  of  this  code  are  based  on  two-dimensional  symbology  specified  in  ISO/IEC  ISS

# 16022

16022.
NOTICE: This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.  It  is  the
responsibility  of  the  users  of  this  standard  to  establish  appropriate  safety  health  practices  and  determine  the
applicability or regulatory limitations prior to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI AUX001 — List of Vendor Identification Codes
SEMI M1 ― Specifications of Polished Monocrystalline Silicon Wafers
SEMI M1.15 — Standard for 300 mm Polished Monocrystalline Silicon Wafers (Notched)
SEMI T1 — Specifications for Back Surface Bar Cord Marking of Silicon Wafers
SEMI  T7  —  Specification  for  Back  Surface  Marking  of  Double-Side  Polished  Wafers  with  a  Two-Dimensional
Matrix Code Symbol
3. 2  ISO
1
/IEC
2
Standard
ISO/IEC ISS 16022 — Information Technology – International Symbology Specification – Data Matrix
NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.


1 International Organization for Standardization, ISO Central Secretariat, 1, rue de Varembé, Case postale 56, CH-1211 Geneva 20, Switzerland.
Telephone: 41.22.749.01.11; Fax: 41.22.733.34.30, Website: /www.iso.ch
2 International Electrotechnical Commission, 3, rue de Varembé, Case Postale 131, CH-1211 Geneva 20, Switzerland. Telephone:
41. 22.919.02.11; Fax: 41.22.919.03.00, Website: www.iec.ch


SEMI T14-1104 © SEMI 2004 2
4  Terminology
4. 1  Definitions
4. 1.1  alignment  bar,  of a data  matrix  code  symbol  —  a  solid  line  of  contiguous  filled  cells  abutting  a  line  of
alternately filled and empty cells [ISO/IEC ISS 16022].
4. 1.2  binary values — a protrusion dot in the wafer surface indicates the binary value 1. The absence of a dot, or a
smooth surface surrounding a cell center point indicates the binary value 0.
4. 1.3  border column — the outermost column of a data matrix code symbol. This column is a portion of the finder
pattern.
4. 1.4  border row — the outermost row of a data matrix code symbol. This row is a portion of the finder pattern.
4. 1.5  cell  center  point,  of  an  array  —  the  point  at  which  the  centerline  of  a  row  intersects  the  centerline  of  a
column.
4. 1.6  cell, of a data matrix code symbol — the area within which a dot may be placed to indicate a binary value.
4. 1.7  cell  spacing,  of  an  array  —  the  (equal)  vertical  or  horizontal  distance  between  the  cell  center  points  of
contiguous cells.
4. 1.8  center line, of a row or column — the line positioned parallel to, and spaced equally between, the boundary
lines of the row or column.
4. 1.9  central area, of a cell — the area enclosed by a circle centered at the cell center point; used by code readers to
sense the binary value of the cell.
4. 1.10  data  matrix  code  symbol  —  a  two-dimensional  array  of  square  cells  arranged  in  contiguous  rows  and
columns.  In  certain  ECC200  symbols,  data  regions  are  separated  by  alignment  patterns.  The  data  region  is
surrounded by a finder pattern [ISO/IEC ISS 16022].
4. 1.11  finder  pattern,  of  a  data  matrix  code  symbol  —  a  perimeter  to  the  data  region.  Two  adjacent  sides  contain
dots  in  every  cell;  these  are  used  primarily  to  define  physical  size,  orientation  and  symbol  distortion.  The  two
opposite sides are made up of cells containing dots in alternate cells [ISO/IEC ISS 16022].
4. 1.12  Micro ID — Micro ID consists of the data matrix code symbol, which is formed with some protruding marks
on the silicon wafers.

4. 1.13
protrusion dot — a locally protruded region with a reflectance which differs from that of the surrounding
surface.

NOTE 1:  To  assure  reading  efficiency,  a  minimum  contrast  of  30%  is  required  between  the  reflectance  value  of  a  dot  and  the
surrounding wafer surface. Various densitometers can provide such measurements nondestructively.
4. 1.14  protrusion dot misalignment, within a cell — the distance between the physical center point of a protrusion
dot and the cell center point.
5  Requirements
5. 1  Shape and Size of the Data Matrix Code Symbol
5. 1.1  Each square data matrix code symbol shall be composed of an array of 16 rows and 16 columns as defined in
ISO/IEC ISS 16022. (As shown in Figure 1.)
5. 1.2  Cell spacing shall be 6.25 μm, center to center. (As shown in Figure 2.)
5. 2  Shape and Size of the Microdot Mark
5. 2.1  A  microdot  mark  is  formed  by  laser  irradiation  and  consists  of  a  single  dot  mark  on  each  laser-irradiated
point.
5. 2.2  The mark has a single protrusion, which includes a concave portion provided around the protrusion and lower
than  a  surface  of  the  wafer  and  whose  center  potion  protrudes  upward  so  as  to  be  higher  than  the  surface  of  the
wafer.


SEMI T14-1104 © SEMI 2004 3
5. 2.3  The length of each dot mark along the surface of the article to be marked should be 6.0 μm + 10% – 20%. (As
shown in Figure 3.)
5. 3  Border Rows and Columns
5. 3.1  One  border  row  and  one  border  column  shall  contain  a  dot  in  each  cell.  These  are  identified  as  the  primary
border  row  and  the  primary  border  column.  They  are  used  by  the  code  reader  to  determine  the  orientation  of  the
matrix.
5. 3.2  The opposing (secondary) border row and column shall contain dots in alternating cells.
5. 3.3  The  reference  point  shall  be  the  physical  center  point  of  corner  cell  common  to  the  primary  border  row  and
the primary border column. (As shown in Figure 4.)
5. 3.4  The maximum dot misalignment within a cell is 1.4 μm. This ensures that a minimum size dot covers a cell
central area of radius 1 μm.
5. 4  Content of the Data Matrix Code Symbol
5. 4.1  Each  square  data  matrix  code  symbol  shall  contain  16  message  characters,  together  with  the  error  checking
and correcting (ECC200) code characters, encoded in accordance with ISO/IEC ISS 16022.
5. 4.2  The message characters shall include the following: A–Z, 0–9, and dash (–).
5. 5  Location of the Data Matrix Code Symbol
5. 5.1  With  the  wafer  positioned  front  surface  up  and  with  the  primary  fiducial  (notch)  toward  the  operator,  the
origin of the data matrix code symbol shall be located as specified below. (As shown in Figure 5.)
5. 5.1.1  Circular position — the reference point shall be located along the perimeter by 3.0 ± 0.1° counterclockwise
from the axis of the notch fiducial bisector. (As shown in Figure 5.)
5. 5.1.2  Radial position — the mark position of Micro ID is decided by the responsibility of Device Manufacturers
on the bevel area where the Micro ID is survived even after the CMP processing and the backside grind.  (Related
Information in Figure R1-2.)
5. 5.2  The  primary  border  row  of  the  data  matrix  code  symbol  shall  be  placed  toward  the  periphery  of  the  wafers,
and  the  primary  border  column  of  the  data  matrix  code  symbol  shall  be  placed  toward  the  center  of  the  wafers,
originating from the reference point.


SEMI T14-1104 © SEMI 2004 4



Nominal Dimensions (μm)
R1 = 92.00 ± 6%
C2 = 98.00 ± 6% R2 = 98.00 ± 6%
C1 = 92.00 ± 6%
16

cells per row

C1


C2


R1

R2

16


cells per

column

C


L


C


L


C


L


C


L


16

cells per row

C1


C2


R1

R2

16


cells per

column

C


L


C


L


C


L


C


L


C


L


C


L


C


L


C


L




Figure 1
Data Matrix Field Dimensions
ECC200 - 16 rows × 16 columns


6. 25μm6.25
μ
m


Figure 2
Cell Spacing


SEMI T14-1104 © SEMI 2004 5


6. 0 μm
+10%
-20%
+10%
-20%


Figure 3
Dot Shape Circle (Projected Sectional Area)


To Wafer Center
Reference Point
The Primary Border Row

The Primary Border Column


Figure 4
Data Matrix Code Fields
ECC200 - 16 rows × 16 columns




SEMI T14-1104 © SEMI 2004 6
Orientation  Fiducial Axis
[011]
Notch
WAFER SURFACE
3. 0            from
Orientation  Fiducial  Axis
Outer periphery of  FQA
Edge Exclusive Area
Edge Profile region
Wafer Periphery
Orientation  Fiducial Axis
[011] ± 1.0°
Notch
WAFER SURFACE
3. 0 ± 0.1° from
Orientation  Fiducial  Axis
Outer periphery of  FQA
Edge Exclusive Area
Edge Profile region
Wafer Periphery
R
e
f
e
r
e
n
c
e

P
o
i
n
t
ID Mark Area

NOTE: Figure 5 is not to scale.
Figure 5
Data Matrix Code Location on Front Bevel Surface of Notched 300 mm Diameter Wafer
Top View


SEMI T14-1104 © SEMI 2004 7
RELATED INFORMATION 1
APPLICATION NOTES
NOTICE:    This  related  information  is  not  an  official  part  of  SEMI  (doc#)  and  was  derived  from  the  Japanese
Traceability committee.  This related information was approved for publication by full letter ballot on July 23, 2004.

R1-1  Shape and Size of the Protrusion Dot Mark
R1-1.1  A  microdot  mark  is  formed  by  laser  irradiation  and  consists  of  a  single  dot  mark  on  each  laser-irradiated
point. The mark has a single protrusion, which includes a concave portion provided around the protrusion and lower
than  a  surface  of  the  wafer  and  whose  center  potion  protrudes  upward  so  as  to  be  higher  than  the  surface  of  the
wafer. The length of each dot mark along the surface of the article to be marked should be 6.0 μm + 10% – 20%.
The protrusion height is more than 300 nanometers, formed on each laser irradiate point. (As shown in below Figure
R1-1.)

+10%
- 20%
A

A

A-A
H   300 nm
>

=

6. 0 μm
H



NOTE: Figure R1-1 is not to scale.
Figure R1-1
Dot Height & Vertical Cross Section

R1-2  Location of Data Matrix Code Symbol
R1-2.1  Data  matrix code  location  is  defined  on  the  front  bevel  of  a  300  mm  diameter  notched  wafer,  whose  side
view is referred from SEMI M1.
Back Grinded area
Polished Area by
Chemical Mechanical Polishing (CMP)
Remaining area for Micro ID
R
e
f
e
r
e
n
c
e

P
o
i
n
t

NOTE: Figure R1-2 is not to scale.
Figure R1-2
Data Matrix Code Location on Front Bevel Surface of 300 mm Diameter Wafer
Side View


SEMI T14-1104 © SEMI 2004 8
RELATED INFORMATION 2
APPLICATION NOTES
NOTICE:    This  related  information  is  not  an  official  part  of  SEMI  (doc#)  and  was  derived  from  the  Japanese
Traceability  Committee.    This  related  information  was  approved  for  publication  by  full  letter  ballot  on  July  23,
2004.

R2-1  References
R2-1.1  The following papers may be referred to understand Micro ID technology presented in this document.
1) Improvement in Reading Precision of Micro-ID Engraved on Wafer, ISSM2003, 2003/09/30
2) Micro-ID Technology for Single Wafer Management, ISSM2002, 2002/10/17
3)  New  Identification  System  for  Individual  Wafer  Management,  ISSM2000;  Session  II-6  (2000)  Page  33,
2000/9/26
R2-2  SEMI Activities
R2-2.1  Additional  information  is  gathered  at  2
nd
round  robin  of  the  Micro  ID  Task  Force.    Many  of  such
information turned out to be excellent and valuable in reading the Micro ID.

NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer's  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature,  respecting  any  materials  or  equipment  mentioned  herein.  These  standards  are  subject  to  change  without
notice.
The  user’s  attention  is  called  to  the  possibility  that  compliance  with  this  standard  may  require  use  of  copyrighted
material or of an invention covered by patent rights.  Komatsu Ltd. and Toshiba Corp. have filed a statement with
SEMI  asserting  that  licenses  will  be  made  available  to  applicants  throughout  the  world  for  the  purpose  of
implementing  this  standard  without  unfair  discrimination.    Attention  is  also  drawn  to  the  possibility  that  some
elements  of  this  standard  may  be  subject  to  patented  technology  or  copyrighted  items  other  than  those  identified
above.  Semiconductor Equipment and Materials International (SEMI) shall not be held responsible for identifying
any or all such patented technology or copyrighted items.  By publication of this standard, SEMI takes no position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  item  mentioned  in  this
standard.  Users of this standard are expressly advised that determination of any such patent rights or copyrights and
the risk of infringement of such rights are entirely their own responsibility.

Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction of
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI T14.1-0705 © SEMI 2005 1
SEMI T14.1-0705
SPECIFICATION FOR THE MICRO ID OF SHORT VERTICAL
DIMENSION ON 300 mm WAFERS
This  specification  was  technically  approved  by  the  global  Traceability  Committee.    This  edition  was
approved for publication by the global Audits and Reviews Subcommittee on May 20, 2005.  It was available
at www.semi.org in June 2005 and on CD-ROM in July 2005.
1  Purpose
1. 1  The  purpose  of  this  document  is  to  specify  a  new  means  of  identification  with  the  Micro  ID  on  300  mm
polished monocrystalline Silicon wafer with polished edge for process control.
1. 2  The objective of the Micro ID is to keep unique information to be assigned in the device manufacturing process
on the location defined on the wafer bevel.
1. 3  This  sub-document  to  SEMI  T14  is  intoned  that  Micro  ID  technology  should  be  enhanced  further  to  apply  on
more precipitous edge profile 300 mm polished wafers.
2  Scope
2. 1  This document assumes that the Micro ID is implemented under the responsibility of Device Manufacturers.
2. 2  A two-dimensional data matrix code symbol consists of the microdots marked on the bevel of a semiconductor
wafer.
2. 3  Although  this  specification  does  not  specify  the  marking  techniques  that  may  be  employed  when  complying
with its requirements, it is assumed that the microdots will be obtained by laser irradiated individual dots.
2. 4  The data matrix code symbol is applicable to a broad range of wafer products (un-patterned or patterned wafers)
with mirror polished
bevel surface.
2. 5  The  format  and  algorithms  of  this  code  are  based  on  two-dimensional  symbology  specified  in  ISO
1
/IEC
2
ISS
16022.
NOTICE: This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.  It  is  the
responsibility  of  the  users  of  this  standard  to  establish  appropriate  safety  health  practices  and  determine  the
applicability or regulatory limitations prior to use.
3  Referenced Standards and Documents
3. 1  SEMI Standards
SEMI M1 — Specifications of Polished Monocrystalline Silicon Wafers
SEMI T14 — Specification for Micro ID on 300mm Silicon Wafers
3. 2  ISO/IEC Standard
ISO/IEC ISS 16022 — International Symbology Specification – Data Matrix
NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.
4  Terminology
4. 1  Definitions
4. 1.1  binary values — a protrusion dot in the wafer surface indicates the binary value 1. The absence of a dot or a
smooth surface surrounding a cell center point indicates the binary value 0.


1 International Organization for Standardization, ISO Central Secretariat, 1, rue de Varembé, Case postale 56, CH-1211 Geneva 20, Switzerland.
Telephone: 41.22.749.01.11; Fax: 41.22.733.34.30 Website: http://www.iso.ch
2 International Electrotechnical Commission, 3, rue de Varembé, Case Postale 131, CH-1211 Geneva 20, Switzerland. Telephone:
41. 22.919.02.11; Fax: 41.22.919.03.00 Website: http://www.iec.ch


SEMI T14.1-0705 © SEMI 2005 2
4. 1.2  border column — the outermost column of a data matrix code symbol. This column is a portion of the finder
pattern.
4. 1.3  border row — the outermost row of a data matrix code symbol. This row is a portion of the finder pattern.
4. 1.4  cell  center  point,  of  an  array  —  the  point  at  which  the  centerline  of  a  row  intersects  the  centerline  of  a
column.
4. 1.5  cell, of a data matrix code symbol — the area within which a dot may be placed to indicate a binary value.
4. 1.6  cell  spacing,  of  an  array  —  the  (equal)  vertical  or  horizontal  distance  between  the  cell  center  points  of
contiguous cells.
4. 1.7  center line, of a row or column — the line positioned parallel to, and spaced equally between, the boundary
lines of the row or column.
4. 1.8  central area, of a cell — the area enclosed by a circle centered at the cell center point; used by code readers to
sense the binary value of the cell.
4. 1.9  data  matrix  code  symbol  —  a  two-dimensional  array  of  square  cells  arranged  in  contiguous  rows  and
columns.  In  certain  ECC200  symbols,  data  regions  are  separated  by  alignment  patterns.  The  data  region  is
surrounded by a finder pattern [ISO/IEC ISS 16022].
4. 1.10  finder  pattern,  of  a  data  matrix  code  symbol  —  a  perimeter  to  the  data  region.  Two  adjacent  sides  contain
dots  in  every  cell;  these  are  used  primarily  to  define  physical  size,  orientation  and  symbol  distortion.  The  two
opposite sides are made up of cells containing dots in alternate cells [ISO/IEC ISS 16022].
4. 1.11  Micro ID — Micro ID consists of the data matrix code symbol, which is formed with some protruding marks
on the silicon wafers.

4. 1.12
protrusion dot — a locally protruded region with a reflectance which differs from that of the surrounding
surface.

4. 1.13  NOTE 1: To assure reading efficiency, a minimum contrast of 30% is required between the reflectance value of a dot and
the surrounding wafer surface. Various densitometers can provide such measurements nondestructively.
4. 1.14  protrusion dot misalignment, within a cell — the distance between the physical center point of a protrusion
dot and the cell center point.
5  Requirements
5. 1  Shape and Size of the Data Matrix Code Symbol
5. 1.1  Each rectangle data matrix code symbol shall be composed of an array of 12 rows and 26 columns as defined
in ISO/IEC ISS 16022, as shown in Figure 1.
5. 1.2  Cell spacing shall be 4.17μm, center to center, as shown in Figure 2.
5. 2  Shape and Size of the Microdot Mark
5. 2.1  A  microdot  mark  is  formed  by  laser  irradiation  and  consists  of  a  single  dot  mark  on  each  laser-irradiated
point.
5. 2.2  The mark has a single protrusion, which includes a concave portion provided around the protrusion and lower
than  a  surface  of  the  wafer  and  whose  center  portion  protrudes  upward  so  as  to  be  higher  than  the  surface  of  the
wafer.
5. 2.3   The nominal shape of the dot produced in the matrix may be circular or square. It’s diameter or edge length
shall be 4.0 μm + 10% – 20%, Figure 3 shows one of the examples.
5. 3  Border Rows and Columns
5. 3.1  One  border  row  and  one  border  column  shall  contain  a  dot  in  each  cell.  These  are  identified  as  the  primary
border  row  and  the  primary  border  column.  They  are  used  by  the  code  reader  to  determine  the  orientation  of  the
matrix.
5. 3.2  The opposing (secondary) border row and column shall contain dots in alternating cells.


SEMI T14.1-0705 © SEMI 2005 3
5. 3.3  The  reference  point  shall  be  the  physical  center  point  of  corner  cell  common  to  the  primary  border  row  and
the primary border column, as shown in Figure 4.
5. 3.4  The maximum dot misalignment within a cell is 0.93 μm. This ensures that a minimum size dot covers a cell
central area of radius 0.67 μm.
5. 4  Content of the Data Matrix Code Symbol
5. 4.1  Each rectangle data matrix code symbol shall contain 22 message characters, together with the error checking
and correcting (ECC200) code characters, encoded in accordance with ISO/IEC ISS 16022.
5. 4.2  The message characters shall include the following: A–Z, 0–9, and dash (–).
5. 5  Location of the Data Matrix Code Symbol
5. 5.1  With  the  wafer  positioned  front  surface  up  and  with  the  primary  fiducial  (notch)  toward  the  operator,  the
origin of the data matrix code symbol shall be located as specified below.
5. 5.1.1  Circular   Position   —   The   reference   point   shall   be   located   along   the   perimeter   by   3.0   ±   0.1°
counterclockwise from the axis of the notch fiducial bisector, as shown in Figure 5.
5. 5.1.2  Radial Position  — The mark position of Micro ID is decided by the responsibility of Device Manufacturers
on  the  bevel  area  where  the  Micro  ID  is  survived  even  after  the  CMP  processing  and  the  backside  grind.  Refer  to
Related Information in Figure R1-2, for example.
5. 5.2  The  primary  border  row  of  the  data  matrix  code  symbol  shall  be  placed  toward  the  periphery  of  the  wafers,
and  the  primary  border  column  of  the  data  matrix  code  symbol  shall  be  placed  toward  the  center  of  the  wafers,
originating from the reference point.


26 Cells Per Row
C1C2
R1
R2
12 Cells Per
Column
C
L
C
L
C
L
C
L
C
L
C
L
C
L
C
L
26 Cells Per Row
C1C2
R1
R2
12 Cells Per
Column
C
L
C
L
C
L
C
L
C
L
C
L
C
L
C
L
Nominal Dimensions
(
μ m)
R1 = 104.25
±
6%
C2 = 50.67
±
6% R2 = 109.05
±
6%
C1 = 45.87
±

6%

Figure1
Data Matrix Field Dimension
ECC200 – 12 Rows × 26 Columns




SEMI T14.1-0705 © SEMI 2005 4


4. 17μ m
μ
m
μ m
+ 10%
-
20%
μ m
+ 10%
-
20%
μ m
+ 10%
-
20%
μ m
+ 10%
-
20%
+ 10%
-
20%
4. 0
4. 0
NOTE: Example of circular dots
Figure 2
Cell Spacing
NOTE: Example of circular dot
Figure 3
Dot shape Circle (Projected sectional area)




To Wafer Center
The Primary Border Row
Reference Point
The Primary Border Column
To Wafer Center
The Primary Border Row
Reference Point
The Primary Border Column
To Wafer Center
The Primary Border Row
Reference Point
The Primary Border Column
To Wafer Center
The Primary Border Row
Reference Point
The Primary Border Column

NOTE: Example of circular dots
Figure4
Data Matrix Code Fields
ECC200 – 12 Rows × 26 Columns




SEMI T14.1-0705 © SEMI 2005 5

Orientation Fiducial Axis
[011]
Notch
WAFER SURFACE
3. 0            from
Orientation Fiducial Axis
Outer periphery of  FQA
Edge Exclusive Area
Edge Profile region
Wafer Periphery
Orientation Fiducial Axis
[011]
±
1. 0
º
Notch
WAFER SURFACE
3. 0
±
0. 1
º
from
Orientation Fiducial Axis
Outer periphery of  FQA
Edge Exclusive Area
Edge Profile region
Wafer Periphery
ID Mark Area
R
ef
er
en
ce

P
o
i
n
t
Orientation Fiducial Axis
[011]
Notch
WAFER SURFACE
3. 0            from
Orientation Fiducial Axis
Outer periphery of  FQA
Edge Exclusive Area
Edge Profile region
Wafer Periphery
Orientation Fiducial Axis
[011]
Notch
WAFER SURFACE
3. 0
±
0. 1  from
Orientation Fiducial Axis
Outer periphery of  FQA
Edge Exclusive Area
Edge Profile region
Wafer Periphery
ID Mark Area
R
ef
er
en
ce

P
o
i
n
t
Orientation Fiducial Axis
[011]
Notch
WAFER SURFACE
3. 0            from
Orientation Fiducial Axis
Outer periphery of  FQA
Edge Exclusive Area
Edge Profile region
Wafer Periphery
Orientation Fiducial Axis
[011]
±
1. 0
º
Notch
WAFER SURFACE
3. 0
±
0. 1
º
from
Orientation Fiducial Axis
Outer periphery of  FQA
Edge Exclusive Area
Edge Profile region
Wafer Periphery
ID Mark Area
R
ef
er
en
ce

P
o
i
n
t
Orientation Fiducial Axis
[011]
Notch
WAFER SURFACE
3. 0            from
Orientation Fiducial Axis
Outer periphery of  FQA
Edge Exclusive Area
Edge Profile region
Wafer Periphery
Orientation Fiducial Axis
[011]
Notch
WAFER SURFACE
3. 0
±
0. 1  from
Orientation Fiducial Axis
Outer periphery of  FQA
Edge Exclusive Area
Edge Profile region
Wafer Periphery
ID Mark Area
R
ef
er
en
ce

P
o
i
n
t

NOTE: Figure 5 is not to scale.
Figure5 (Top view)
Data Matrix Code Location on Front Bevel Surface of Notched 300 mm Diameter Wafer



SEMI T14.1-0705 © SEMI 2005 6
RELATED INFORMATION 1
APPLICATION NOTES
NOTICE:    This  related  information  is  not  an  official  part  of  SEMI  T14.1  and  was  derived  from  full  letter  ballot
procedures on May 20, 2005.
R1-1 Shape and Size of the Protrusion Dot Mark
R1-1.1  A  microdot  mark  is  formed  by  laser  irradiation  and  consists  of  a  single  dot  mark  on  each  laser-irradiated
point. The mark has a single protrusion, which includes a concave portion provided around the protrusion and lower
than  a  surface  of  the  wafer  and  whose  center  portion  protrudes  upward  so  as  to  be  higher  than  the  surface  of  the
wafer. The nominal shape of the dot produced in the matrix may be circular or square. Its diameter or edge length
shall be 4.0 μm + 10% – 20%. The protrusion height is more than 200 nanometers, formed on each laser irradiate
point, as shown in below Figure.

+10%
- 20%
A
4. 0    m
H
+10%
- 20%
A
A
>
=
4. 0    m
H
+10%
- 20%
A
4. 0    m
H
+10%
- 20%
A
H   200nm
4. 0
μ
m
H
+10%
- 20%
A
4. 0    m
H
+10%
- 20%
A
>
=
4. 0    m
H
+10%
- 20%
A
4. 0    m
H
+10%
- 20%
A
H   200nm
4. 0    m
H
+10%
- 20%
A
4. 0    m
H
+10%
- 20%
A
A
>
=
4. 0    m
H
+10%
- 20%
A
4. 0    m
H
+10%
- 20%
A
H   200nm
4. 0
μ
m
H
+10%
- 20%
A
4. 0    m
H
+10%
- 20%
A
>
=
4. 0    m
H
+10%
- 20%
A
4. 0    m
H
+10%
- 20%
A
H   200nm
4. 0    m
H

NOTE: Figure R1-1 is not to scale.
Example of circular dot
Figure R1-1
Dot Height & Vertical Cross Section

R1-2  Location of Data Matrix Code Symbol
R1-1.2  Data  matrix code  location  is  defined  on  the  front  bevel  of  a  300  mm  diameter  notched  wafer,  whose  side
view is referred from SEMI M1.


SEMI T14.1-0705 © SEMI 2005 7

Back Grinded area
Polished Area by
Chemical Mechanical Polishing (CMP)
Remaining area for Micro ID
R
e
f
e
r
e
n
c
e
P
oi
n
t
Back Grinded area
Polished Area by
Chemical Mechanical Polishing (CMP)
Remaining area for Micro ID
R
e
f
e
r
e
n
c
e
P
oi
n
t
R
e
f
e
r
e
n
c
e
P
oi
n
t

NOTE: Figure R1-2 is not to scale.
Figure R1-2 (Side view)
Data Matrix Code Location on Front Bevel Surface of 300 mm Diameter Wafer



SEMI T14.1-0705 © SEMI 2005 8
RELATED INFORMATION 2
APPLICATION NOTES
NOTICE:    This  related  information  is  not  an  official  part  of  SEMI  T14.1  and  was  derived  from  full  letter  ballot
procedures on May 20, 2005.
R1-2  References
R1-2.1  The following papers may be referred to understand Micro ID technology presented in this document.
• Improvement in Reading Precision of Micro-ID Engraved on Wafer, ISSM2003, 2003/09/30
• Micro-ID Technology for Single Wafer Management, ISSM2002, 2002/10/17
• New  Identification  System  for  Individual  Wafer  Management,  ISSM2000;  Session  II-6  (2000)  Page33,
2000/9/26
R1-3  R2-2 SEMI Activities
R1-3.1  Additional information is gathered at the second round robin of the Micro ID Task Force.
R1-3.2  Many of such information turned out to be excellent and valuable in reading the Micro ID.


NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer's  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature,  respecting  any  materials  or  equipment  mentioned  herein.  These  standards  are  subject  to  change  without
notice.
The  user’s  attention  is  called  to  the  possibility  that  compliance  with  this  standard  may  require  use  of  copyrighted
material or of an invention covered by patent rights.  Komatsu Ltd. and Toshiba Corp. have filed a statement with
SEMI  asserting  that  licenses  will  be  made  available  to  applicants  throughout  the  world  for  the  purpose  of
implementing  this  standard  without  unfair  discrimination.    Attention  is  also  drawn  to  the  possibility  that  some
elements  of  this  standard  may  be  subject  to  patented  technology  or  copyrighted  items  other  than  those  identified
above.  Semiconductor Equipment and Materials International (SEMI) shall not be held responsible for identifying
any or all such patented technology or copyrighted items.  By publication of this standard, SEMI takes no position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  item  mentioned  in  this
standard.  Users of this standard are expressly advised that determination of any such patent rights or copyrights and
the risk of infringement of such rights are entirely their own responsibility.

Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction of
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI T15-0705 © SEMI 2005 1
SEMI T15-0705
GENERAL SPECIFICATION OF JIG ID: CONCEPT
This standard was technically approved by the global Traceability Committee.  This edition was approved for
publication  by  the  global  Audits  and  Reviews  Subcommittee  on  May  20,  2005.    It  was  available  at
www.semi.org in June 2005 and on CD-ROM in July 2005.
1  Purpose
1. 1  The purpose of this standard is to establish generic Jig ID to identify individual jigs uniquely, mounted on the
jig to process semiconductor devices.
2  Scope
2. 1  This  Standard  specify  the  following  contents  of  IDs  to  be  installed  onto  the  jigs  used  in  the  process  of
semiconductor manufacturing.
• Types of IDs
• Data format
NOTICE:  This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory or other limitations prior to use.
3  Limitation
3. 1  This Standard does not restrict the communication protocol for communicating data of Jig ID.
3. 2  This Standard does not provide the shape of tags in which the information of Jig ID is written.
3. 3  This Standard does not specify the physical interfaces, such as the installation positions of Jig ID and reader or
reader/writer.
4  Referenced Standards and Documents
4. 1  SEMI Standard
SEMI T12 — Specification of Tracing Jigs and Implements
4. 2  Other Standard
ISO/IEC ISS 16022 — Information Technology - International Symbology Specification - Data Matrix
NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.
5  Terminology
5. 1  Definition
5. 1.1  Jig  —  a  kind  of  attachment  used  to  support  measurement  or  production  for  material  on  one  or  more
equipment, as defined in SEMI T12.
5. 1.2  Jig ID — an identifier installed onto a Jig, which is recognized to identify the individual piece.
5. 2  Abbreviations and Acronyms
5. 2.1  RFID — Radio Frequency Identification
6  Types of IDs
6. 1  This Standard describes identification mechanism to allow automatic reading or writing as shown below.
• Barcodes


SEMI T15-0705 © SEMI 2005 2
• 2D Codes — Data Matrix (ECC200)
• RFIDs
7  Data Format
7. 1  Both of the following ID part and DATA part shall be contained in the JIG ID Tag. They shall exist on the same
tag.
7. 1.1  ID part — The ID part within the JIG ID is a part describing  consolidated  identification  data  to  identify  the
jigs. The requirements of the ID part are specified as following.
7. 1.1.1  The ID part exists on any JIG IDs.
7. 1.1.2  Number of digits – The number of digits contained in the ID part shall be fixed to 16 digits.
7. 1.1.3  Attribute — Information on the ID part shall be represented in Visible ASCII Characters (20
16
-7E
16
).
7. 1.1.4  Information alteration – No alternation to information on the ID part shall be allowed.
7. 1.1.5  Format  —  Information  on  the  ID  part  consists  of  Supplier  Code,  year  and  month  of  manufacturing  and  a
serial number.
7. 1.1.5.1  Supplier Codes
1
— A series of Visible ASCII Characters (20
16
-7E
16
) to identify supplier with 3-character.
NOTE 1:  List of  Suppliers Codes is to be provided by the separated Auxiliary Document.
7. 1.1.5.2  Year and month of manufacturing — The year and month of manufacturing shall be expressed in a four-
digit number as shown below.
YYMM
7. 1.1.5.2.1  YY shall be the last two digits of the year. MM shall be two digits month of year. For example, January
shall be designated as 01 and October shall be designated as 10.
7. 1.1.5.3  Serial  Number  —  The  serial  numbers  shall  be  expressed  in  nine-digit  of  alpha-numerical  codes.  Space
codes  or  Null  codes  shall  not  be  allowed.  Duplicated  serial  numbers  shall  not  be  used  if  ‘year  and  month  of
manufacturing’ is equivalent.
7. 1.2  DATA Part
7. 1.2.1  The  DATA  part  is  the  optional  information  for  the  JIG  ID.  The  DATA  part  contained  in  JIG  ID  shall  be
used  for  such  supplemental  information  as  notes  of  the  requirements,  conditions  and  history  of  the  JIG.  The
specification of the DATA part is as below.
7. 1.2.2  Number  of  Digits  —  Although  the  number  of  digits  of  the  DATA  part  is  not  stipulated  in  particular,  the
number shall be the minimum necessary to achieve the purpose abovementioned. The following example may help
understanding: Even though there is a case where approximately. 256 byte letters are used for the primary memory
to describe the number of shots and the history of errors, the limitation on the number of digits for the DATA part
depends on the amount of memory held by the RFID tag.
7. 1.2.3  Attribute — Information on the DATA part shall be represented in Visible ASCII Characters (20
16
-7E
16
).
7. 1.2.4  Information Alteration — No considerations are given to whether or not information on the DATA part is
available for alteration. This information is available to read only, record, or read and write data.


ID part DATA part

Figure 1
Data format of JIG ID


SEMI T15-0705 © SEMI 2005 3

A      A      A      Y      Y      M      M      S      S      S      S      S      S      S      S      S
NOTE 1: A stands for the codes for suppliers.
NOTE 2: YY stands for the year of manufacture and MM stands for the month of manufacture.
NOTE 3: S stands for the serial numbers.
Figure 2
ID part


NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer’s  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature,  respecting  any  materials  or  equipment  mentioned  herein.  These  standards  are  subject  to  change  without
notice.
By  publication  of  this  standard,  Semiconductor  Equipment  and  Materials  International  (SEMI)  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  items  mentioned  in  this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights are entirely their own responsibility.



Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction of
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


CONTENTS BY TOPIC

300 mm Carriers and
Physical Interfaces
300 mm Packaging
Automated Material
Handling Systems
Automated Test Equipment
Ball Grid Arrays
Chemical and Gas
Distribution Systems
Chemical and Gas General
Specifications
Chemical and Gas Testing
Chemical Hazards
Chip Carriers
CIM Framework
Cluster Tools
Device Tracking
Electromagnetic
Compatibility
Electronic Data Interchange
Equipment
Communications
Equipment Metrics
Equipment Models
Equipment - Facilities
Interface
Facilities - Electrical
Fire Safety
Fluorocarbon Components
FPD Color Filters
FPD Masks
FPD Polarizing Films
FPD Substrates
Gallium Arsenide
Gas Particle Specifications
Gas Source Equipment
Gases - Atmospheric
Gases - Noble
Gases - Process
Gases - Specialty
High Purity Piping Systems
Human-Machine Interfaces
Indium Phosphide
LCD Backlight Unit
Lead Finishes
Leadframes
Mask and Mask Equipment
Mass Flow Controllers
Minienvironments
Molding Compounds
Package and Chip Carrier
Tooling
Package Specifications
Package Test Methods
Photolithography Metrology
Photoresist
Physical Interfaces
Process Chemicals - Acids
Process Chemicals - Bases
Process Chemicals -
Miscellaneous
Process Chemicals -
Solvents
Reticle Data Management
Safety Guidelines
Scanning Surface
Inspection Systems
Sensor Actuator Network
Silicon
Silicon Materials & Process
Control
Silicon on Insulator
Specialty Gases
Stainless Steel Components
Statistical Control
Substrate Carriers and
Pods
Surface Mount Gas
Distribution Systems
Terminology
Tubing, Fittings, and Valves
Wafer Marking
Wafer Probers
Wafer Shipping System
XML (Extensible Markup
Language)
Unclassified

Semiconductor Equipment and Materials International
