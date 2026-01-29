---
title: "D26-1000 - © SEMI 200010 9...."
description: "SEMI标准文档"
sidebar_label: "D26-1000 - © SEMI 200010 9...."
sidebar_position: 920
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-092.pdf'
  chapter: 92
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/092.pdf"
  pdfSize="1.48MB"
  title="D26-1000 - © SEMI 200010 9...."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI D26-1000 © SEMI 200010
9. 5  Content of the Data Matrix Co de Symbol
9. 5.1    Each   rectangular   matrix   code   s ymbol   shall
contain  between  46  message  characters  (for  16  rows  ×
36 columns) and 72 message characters (for 16 rows ×
48   columns),   encoded   in   accordance   with   AIM
International Symbology Specification – Data Matrix.
9. 5.2   The  message  characters  may  in clude  any  of
those  designated  as  “mostly  upper  case”  Annex  K  of
AIM   International   Symbology   Specification   –   Data
Matrix.  8-bit  characters  may  also  be  encoded  with
reduced  field  capacity.  The  first  20  characters  shall
contain two elements:
a. a vendor-assigned 15-character mask identification
code, followed
by
b. a 1-character field concatenation symbol (+) and 2-
character field ID (per ANSI MH 10.8)
9. 5.3   The  next  26  message  character s  shall  contain
two elements:
a. a  customer-assigned  13-character  part  #,  followed
by
b. a   1-character   field   concatenation   symbol   (+)
followed by a 2-character field ID and
c. a   12-character   customer-assigned   part   revision
number.
9. 5.4 The  remaining  message  charac ters,  if  any,  shall
contain  information  as  agreed  between  the  vendor  and
the  user.  This  may  require  field  identifiers  and  field
concatenation.
9. 5.4.1   Field  identifiers  listed  in  ANS I  MH  10.8.2
include:
a. Customer part number revision: 2P
b. Customer specification number: 20P
c. Customer specification revision: 21P
d. Customer drawing number: 12P
e. Customer drawing number revision: 22P
9. 5.5  Location of the Data Matrix C ode Symbol
9. 5.5.1   With  the  substrate  positioned  f ront  surface  up
and with the orientation corner toward the operator and
to  the  operator’s  left,  the  reference  point  of  the  data
matrix   code   symbol   shall   be   placed   toward   the
orientation corner and
8 ± 1 mm from the substrate’s y-edge; this provides
clearance for corner cuts or other elements adjacent
to the corner, and
3   ±   1   mm   from   the   substrate’s   x-edge;   this
approximately centers the field between the x-edge
and the FQA boundary.
Figure 7
Data Matrix Field

SEMI D26-1000 © SEMI 200011
Figure 8
Data Matrix Cell Dimensions
Figure 9
Border Rows and Columns

SEMI D26-1000 © SEMI 200012
Figure 10
Data Matrix Code Field in Edge Exclusion Area
NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer’s  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature respecting any materials mentioned herein. These standards are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that  compliance  with  this  standard  may  require  use  of  copyrighted
material  or  of  an  invention  covered  by  patent  rights.  By  publication  of  this  standard,  SEMI  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  item  mentioned  in  this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights, are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International),3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI D27-1000 © SEMI 20001
SEMI D27-1000
GUIDE FOR FLAT PANEL DISPLAY EQUIPMENT COMMUNICATION
INTERFACES
This  guide  was  technically  approved  by  the  Global  Flat  Panel  Display  Committee  and  is  the  direct
responsibility  of  the  North  American  Flat  Panel  Display  Committee.  Current  edition  approved  by  the  North
American  Regional  Standards  Committee  on  August  28,  2000.    Initially  available  at  www.semi.org  August
2000; to be published October 2000.
1  Purpose
1. 1    This   is   a   guide   for   implementi ng   equipment
communication  features  for  successful  integration  and
automation   in   a   flat   panel   display   manufacturing
facility.
2  Scope
2. 1   This  guide  includes  references   to  other  SEMI
standards.  It  also  includes  definitions  and  explanations
specific to FPD equipment automation.
2. 2   The  scope  of  this  guide  is  limi ted  to  equipment
communication   features   that   interface   with   factory
automation systems.
2. 3  This guide does not reference  physical or electrical
interfaces,  except  to  the  extent  necessary  to  implement
the features described. For example, a serial data cable
connector could be specified to have 9 pins or 25 pins.
2. 4   This  guide  may  not  be  applica ble  to  all  types  of
FPD  equipment.    It  only  applies  to  those  for  which  a
direct     data     communication     interface     will     be
implemented  between  the  equipment  and  the  factory
automation systems.
2. 5  This guide does not address al l software standards
that  may  be  applicable,  but  addresses  a  subset  that  is
necessary for effective integration and automation.
2. 6   This  standard  does  not  purport   to  address  safety
issues,   if   any,   associated   with   its   use.   It   is   the
responsibility  of  the  user  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1   The  other  SEMI  standards  refe rred  to  in  this
document     have     been     carefully     reviewed     for
applicability  to  FPD  manufacturing.  However,  when
referring   to   other   SEMI   standards   used   in   this
specification, the reader should allow for some editorial
exceptions  in  order  to  apply  the  specification  to  FPD
equipment. For example, if another SEMI specification
referenced  here  uses  the  term  “wafer”,  the  reader  can
assume  that  this  also  applies  to  FPD  substrates,  and
likewise   with   “silicon”   and   glass   or   plastic.   These
minor differences in no way impact the interpretation or
implementation      of      those      standards      in      FPD
manufacturing equipment and factory systems.
3. 2  This guide is not an all-inclusi ve list of applicable
standards,    but    is    a    starting    point    for    defining
requirements  of  these  equipment  automation  functions,
and a guideline for implementation.
4  Referenced Standards
NOTE 1: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
4. 1  SEMI Standards
SEMI    E4    —    SEMI    Equipment    Communications
Standard 1 Message Transfer (SECS-I)
SEMI    E5    —    SEMI    Equipment    Communications
Standard 2 Message Content (SECS-II)
SEMI   E23   —   Specification   for   Cassette   Transfer
Parallel I/O Interface
SEMI E30 — Generic Model for Communications and
Control of SEMI Equipment (GEM)
SEMI  E37  —  High-Speed  SECS  Message  Services
(HSMS), Generic Services
SEMI  E37.1  —  High-Speed  SECS  Message  Services,
Single-Session Mode (HSMS-SS)
SEMI   E84   —   Specification   for   Enhanced   Carrier
Handoff Parallel I/O
5  Terminology
5. 1   The  following  define  some  des criptive  terms  that
can   be   used   to   refer   to   systems   that   meet   the
requirements of the standards referenced herein.
5. 1.1  SECS  Compliant — This  term   is  often  used  to
describe  systems  which  comply  completely  with  both
the   SEMI   E4   (SECS-I)   and   SEMI   E5   (SECS-II)
standards.    However,  it  is  more  appropriate  to  identify
the  system  as  “SECS-I  Compliant”  and/or  “SECS-II”
compliant.  This distinction is important because SECS-
II can be implemented independently from SECS-I. The
term  “SECS  Compliant”  is  ambiguous,  but  commonly
used.    It  is  suggested  that  the  following  terms  be  used

SEMI D27-1000 © SEMI 20002
instead     to     describe     the     equipment     and     host
communication interface.
5. 1.2   SECS-I  Compliant   —   This   term    is   used   to
identify  a  system  that  complies  completely  with  SEMI
E4.
5. 1.3   SECS-II  Compliant  —  This  ter m  is  used  to
identify  a  system  that  complies  completely  with  SEMI
E5.
5. 1.4    HSMS   Compliant   —   This   term    is   used   to
describe   systems   which   comply   with   SEMI   E37
(HSMS)  and  either  SEMI  E37.1  (HSMS-SS)  or  SEMI
E37.2   (HSMS-GS)   or   both.      However,   it   is   more
appropriate  to  identify  the  system  as  either  “HSMS-SS
Compliant” or “HSMS-GS Compliant”, since they both
imply  compliance  with  SEMI  E37,  and  the  user  must
know exactly which of the two is supported.  The term
“HSMS Compliant” is ambiguous, but commonly used.
5. 1.5   HSMS-SS  Compliant — This term is used to
identify  a  system  that  complies  completely  with  SEMI
E37 and SEMI E37.1.  This protocol has been adopted
for use in FPD.
5. 1.6   HSMS-GS  Compliant — This   term  is  used  to
identify  a  system  that  complies  completely  with  SEMI
E37 and SEMI E37.2.
5. 1.7  GEM — Generic Equipment M odel as defined in
SEMI E30.
5. 1.8   GEM  Compliant  —  This  term   is  defined  in
SEMI E30.
5. 1.9   Fully  GEM  Capable  —  This  te r m  is  defined  in
SEMI E30.
5. 1.10   System  —  Either  manufacturin g  equipment  or
factory host.
6  Data Transfer
6. 1  For optimum compatibility, sy stems supporting the
automation capabilities described herein should support
all   requirements   defined   for   at   least   one   of   the
following SEMI protocol standards:
6. 1.1  SEMI E4 (SECS-I)
6. 1.2  SEMI E37.1 (HSMS-SS). Not e that this requires
implementation of SEMI E37.
6. 1.2.1   HSMS-SS  compliant  interface s  are  preferred
for FPD manufacturing because of its performance and
logistical   advantages,   and   because   it   allows   other
protocols    to    operate    on    the    same    connection
simultaneously.
6. 1.2.2   However,  SECS-I  interfaces  a re  acceptable  in
systems  where  the  performance  of  a  serial  interface  is
sufficient.     Since     many     off-the-shelf     component
software  implementations  support  both  protocols,  it  is
relatively   easy   to   design   systems   which   can   be
configured to support either.
7  Data Format
7. 1     The    system    should    support    all     minimum
requirements  of  SEMI  E5  (SECS-II).    Although  more
modern     data     communication     specifications     are
available  (e.g.  HTML),  SECS-II  has  unique  aspects
which  are  valuable  in  microelectronics  manufacturing.
Also,  there  are  many  available  “off-the-shelf”  software
packages which provide the SECS-II feature set.
7. 2    Furthermore,   for   maximum   co mpatibility   and
reliability, the implementation of any optional SEMI E5
objects  (data  items,  variable  items,  messages,  etc.)  on
the  system  should  meet  the  requirements  of  SEMI  E5.
For  example,  if  an  FPD  system  implements  the  S7,F3
message, it must do so in compliance with SEMI E5 to
be  considered  “SECS-II  Compliant”.    It  is  possible  to
implement  “user-defined”  SECS-II  messages,  and  it  is
allowed by SEMI E5.
7. 3   However,  it  is  usually  unneces sary  to  use  such
custom SECS-II messages.  Complicated scenarios such
as   production   sequence   control,   inline   production,
consumable management, and material handling can all
be   implemented   using   standard   SECS-II   messages.
Many   SECS-II   messages   are   designed   to   be   very
generic and very flexible such as the Remote Command
message  (S2F41  or  S2F49)  which  can  contain  any
number of parameters of any type in any format.  Many
of  the  basic  SECS-II  data  items  such  as  variables  can
also take on any type of value in any format.
7. 4   User-defined  data  items  and  m essages  are  more
difficult   to   integrate   into   FPD   factory   automation
systems and should be avoided.
8  GEM and SEM
8. 1  Generic Equipment Model (GE M)
8. 1.1   Any  reference  to  the  term  “GE M”  (Generic
Equipment  Model)  with  respect  to  FPD  manufacturing
equipment  will  be  construed  as  a  reference  to  SEMI
E30.    The  system  provider  should  ensure  that  this  term
is  used  only  for  those  systems  which  rigidly  adhere  to
SEMI  E30.    End-users  will  make  certain  assumptions
about  the  capabilities  of  “GEM”  systems  based  on  the
requirements of SEMI E30.
8. 1.2   SEMI  E30  is  applicable  to  FPD   manufacturing
equipment.  FPD  equipment  suppliers  may  choose  to
implement  GEM.  In  order  for  FPD  equipment  to  be
“GEM  Compliant”  or  “Fully  GEM  Capable”,  it  must
meet the requirements of SEMI E30 without exception.
However, it may not be necessary to implement certain

SEMI D27-1000 © SEMI 20003
optional     GEM     capabilities     for     effective     FPD
automation.
8. 1.3    The   implementation   of   SEMI    E30,   or   lack
thereof, is usually a point of much negotiation between
equipment supplier and end-user. SEMI E30 provides a
useful template for identifying which capabilities are to
be provided and which are not.  The “GEM Compliance
Statement”   document   should   be   provided   by   the
equipment  supplier  to  describe  the  capabilities  of  the
interface, whether or not the system is GEM Compliant.
8. 1.4   GEM  is  not  applicable  to  host   systems,  but  host
systems must implement a compatible set of features to
work effectively with GEM equipment.
8. 2  Specific Equipment Model (SE M)
8. 2.1   The  concept  of  a  Specific  Equ ipment  Model,
which  requires  compliance  with  SEMI  E30  (GEM),
could  be  applied  to  FPD  equipment  as  well.    This
document does not address SEMs.  The user may wish
to  review  the  published  SEM  standards  and  determine
their applicability in an FPD implementation.
9  Interfaces to Material Tran sfer Systems
9. 1  Carrier Transfer Parallel I/O  Interfaces
9. 1.1   Material  handling  systems  are   critical  for  many
FPD manufacturing operations.  But, not all equipment
support  the  automated  transfer  of  material  to  and  from
the  equipment.    This  section  only  applies  to  systems,
which support automated carrier transfer.
9. 1.2  For compatibility with many a utomated material
handling  systems  on  the  factory  floor,  FPD  equipment
should  support  all  requirements  for  at  least  one  of  the
following SEMI carrier transfer parallel I/O standards:
9. 1.2.1  SEMI  E23  (Cassette  Transfer   Parallel  I/O
Interface)  —  Note  that  the  diagram  in  SEMI  E23
showing  placement  of  the  photo-coupled  I/O  interface
with respect to the carrier stage (CS) shows specific CS
size  measurements.  However,  this  is  just  an  example
and not a requirement of SEMI E23. The requirement is
that  the  photo  sensor  must  be  on  the  front  edge  of  the
CS and its center aligned with the center of the CS. This
applies to a CS of any size.
9. 1.2.2  SEMI    E84    (Enhanced    Carrier     Handoff
Parallel   I/O   Interface)   —   Note   that   SEMI   E84
references SEMI E1.9, SEMI E15, SEMI E15.1, SEMI
E47.1, and SEMI E64 which are semiconductor specific
standards and not applicable to FPD. However, none of
the  requirements  in  these  documents  are  prerequisites
for  implementing  SEMI  E84.  SEMI  E84  is  applicable
to FPD and can be implemented independently.
NOTICE:      SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standard  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer’s   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature
respecting   any   materials   mentioned   herein.   These
standards are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that
compliance   with   this   standard   may   require   use   of
copyrighted  material  or  of  an  invention  covered  by
patent  rights.  By  publication  of  this  standard,  SEMI
takes  no  position  respecting  the  validity  of  any  patent
rights  or  copyrights  asserted  in  connection  with  any
item  mentioned  in  this  standard.  Users  of  this  standard
are  expressly  advised  that  determination  of  any  such
patent rights or copyrights, and the risk of infringement
of such rights, are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI D28-1101 © SEMI 20011
SEMI D28-1101
SPECIFICATION FOR MECHANICAL INTERFACE BETWEEN FLAT
PANEL DISPLAY MATERIAL HANDLING EQUIPMENT AND TOOL
PORT, USING AUTOMATED GUIDED VEHICLE (AGV), RAIL GUIDED
VEHICLE (RGV), AND MANUAL GUIDED VEHICLE (MGV)
This specification was technically approved by the Global Flat Panel Display Material Handling Committee
and  is  the  direct  responsibility  of  the  Japanese  Flat  Panel  Display  Material  Handling  Committee.  Current
edition  approved  by  the  Japanese  Regional  Standards  Committee  on  August  3,  2001.    Initially  available  at
www.semi.org September 2001; to be published November 2001.
1  Purpose
1. 1  This  specification  defines  a  common  set  of  feature
requirements  on  and  about  tool  ports  of  process  tools
used  in  manufacturing  of  flat  panel  displays.  These
standardized   feature   requirements   are   intended   to
facilitate  the  interfacing  of  AGV,  RGV,  and  MGV
equipment   to   the   process   tool.   Such   standards   are
intended  to  promote  cost-effective  interfacing  while
preserving   freedom   of   choice   in   material   handling
equipment, using AGV, RGV, and MGV.
2  Scope
2. 1  This  specification  defines  mechanical  features  on
or about the tool port, and in front of or on the tool face.
Although   these   features   are   intended   for   specific
functions   of   AGV,   RGV,   and   MGV,   the   interface
requirements  are  meant  to  avoid  the  promotion  of  any
particular form of transport.
2. 2  This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.   It   is   the
responsibility of the user of these standards to establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1  Current   display   manufacturing   utilizes   several
substrate  sizes,  many  of  them  “non-standard.”  This
specification includes dimensions for the substrate sizes
of 550 × 650 mm, 600 × 720 mm, 680 × 880 mm, 730 ×
920   mm,   and   800   ×   950   mm   and   anticipates   the
establishment of standard dimensions in future substrate
sizes.
4  Referenced Standards
4. 1  None.
5  Ordering Information
5. 1  Since  this  document  is  not  a  product  specification
but  an  interface  specification,  ordering  information  is
not applicable.
6  Terminology
6. 1  Definitions
6. 1.1  cassette   loading   position   —   center   point   at
under-surface  of  a  cassette  after  loading  by  transport
equipment.
6. 1.2  facial  datum  plane  —  a  plane  that  is  parallel  to
the tool face and vertical to both vertical and horizontal
datum planes at the cassette loading position.
6. 1.3  horizontal datum plane — a plane that is parallel
to the floor surface at the cassette loading position.
6. 1.4  vertical datum plane — a plane that is vertical to
both  facial  and  horizontal  datum  planes  at  the  cassette
loading position.
6. 2  Dimensional Functions
6. 2.1  X1  —  width  of  the  exclusion  zone  above  the
horizontal   datum   plane,   which   is   needed   by   the
transport equipment in loading cassettes.
6. 2.2  X2 — width of the exclusion fork zone below the
horizontal   datum   plane,   which   is   needed   by   the
transport equipment in loading cassettes.
6. 2.3  X3  —  width  of  the  exclusion  zone  required  for
MGV cart alignment equipment.
6. 2.4  Y1  —  dimension  between  the  facial  datum  plane
and the front of the tool port.
6. 2.5  Y2  —  dimension  between  the  facial  datum  plane
and  the  tool  face,  which  is  the  exclusion  zone  needed
by the transport equipment in loading cassettes.
6. 2.6  Y3 — depth of exclusion zone required for MGV
cart alignment equipment.
6. 2.7  Z1 — height between the horizontal datum plane
and the floor surface.
6. 2.8  Z2   —   height   of   exclusion   zone   above   the
horizontal   datum   plane,   which   is   needed   by   the
transport equipment in loading cassettes.

SEMI D28-1101 © SEMI 20012
6. 2.9  Z4 — height of exclusion zone required for MGV
cart alignment equipment.
6. 2.10  Z5  —  height  of  exclusion  fork  zone  below  the
horizontal   datum   plane,   which   is   needed   by   the
transport equipment in loading cassettes.
7  Requirements
7. 1  Dimensions    and    tolerances    of    the    required
characteristics  are  shown  in  Table  1  as  well  as  Figures
1A and 1B.
7. 2  The  cassette  is  stored  horizontally  with  the  shorter
side  parallel  to  the  tool    face  and  horizontal  datum
plane.
Z5
Y3
Z4
Tool
Tool face
(Equipment
Boundary)
Horizontal Datum Plane
Y2Y1
Facial datum plane
(cassette centroid)
Figure 1A
(Arrow ’A’ View)
Side View of Tool port

SEMI D28-1101 © SEMI 20013
X1
Z1
Z4
X2
Z5
Exclusion
Zone
Vertical
Datum Plane
Z2
A
X3
Figure 1B
Front View of Tool port

SEMI D28-1101 © SEMI 20014
Table 1  Substrate Edge Length, Interface Dimensions, and Tolerances
Interface Dimensions and Tolerances[mm]
Substrate Edge
Length [mm]
X1
max.
X2
max.
X3
max.
Y1
max.
Y2
max.
Y3
max.
Z1
± 2 mm
Z2
max.
Z4
max.
Z5
max.
550 × 650
925450600500440130900, 9501000150250
600 × 720
980500600535475130900, 10001000150250
680 × 880
1100560600615565130
1000,
1100
1000150300
730 × 920
1150600600630590130
1000,
1100
1000150300
800 × 950
1200660600650605130
1000,
1100
1000150300
NOTE 1: Two values are specified for Z1, either value can be chosen.
8  Related Documents
8. 1  SEMI Standards
SEMI  D5  —  Standard  Size  for  Flat  Panel  Display
Substrates
SEMI  D11  —  Specification  for  Flat  Panel  Display
Glass Substrate Cassettes
SEMI  D16  —  Specification  for  Mechanical  Interface
Between  Flat  Panel  Display  Material  Handling  System
and Tool Port
8. 2  Semiconductor  Equipment  Association  of  Japan
(SEAJ)
Semiconductor Equipment Association of Japan (SEAJ)
Liquid    Crystal    Display    Manufacturing    Equipment
Standardization  Guideline  –  for  Glass  Substrate  Size
800 × 950 (SEAJ/P-S3005-98, SEAJ/P-S3006-98), June
1998
1
8. 3  SEMI PCS-FPD
SEMI   PCS-FPD   —   Production   Cost   Saving   (PCS)
Forum – FPD Phase III Report, June 1999
2
NOTICE:          SEMI     makes     no     warranties     or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer’s   instructions,   product   labels,

1  Semiconductor Equipment Association of Japan, 7-10, Shinjuku 1-
chome, Shunjuku-ku, Tokyo, 160-0022 Japan, tel:+81-3-3353-7589,
fax:+81-3-3353-7970, http://www.seaj.or.jp
2  SEMI PCS-FPD  Production Cost Saving (PCS) Forum – FPD
Phase III Report, June 1999,  Semiconductor Equipment and
Materials International, 3081 Zanker Road , San Jose, CA 95134-
2127 U.S.A.tel.+1-408-943-6900 fax:+1-408-428-9600
http://www.semi.org
product  data  sheets,  and  other  relevant  literature  with
respect   to   any   materials   mentioned   herein.   These
standards are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that
compliance   with   this   standard   may   require   use   of
copyright material or of an invention covered by patent
rights. With publication of this standard, SEMI takes no
position in respect to the validity of any patent rights or
copyrights   asserted   in   connection   with   any   item
mentioned  in  this  standard.  Users  of  this  standard  are
expressly advised that determination of any such patent
rights  or  copyrights,  and  the  risk  or  infringement  of
such rights, are entirely their own responsibility.

SEMI D28-1101 © SEMI 20015
RELATED INFORMATION 1
ASSUMED DIMENSIONS FOR SUBSTRATE EDGE AND CASSETTE
SIZE
NOTE:  This related information is not an official part of SEMI D28 and was derived from work of the originating
committee.    This  related  information  was  approved  for  publication  by  full  letter  ballot  procedures  on  August  3,

# 2001

2001.
Table R1-1  Cassette Size
Substrate Edge
length [mm]
Cassette size [mm]
Width×Length×Height
550 × 650
600 × 720
680 × 880
730 × 920
800 × 950
591 × 682 × 524
642 × 755 × 695
736 × 923 × 706
792 × 978 × 770
870 × 1010 × 810
NOTE  1:  550  × 650, 600 × 720, 680 ×  880,  and  730  ×  920    are  the
sizes  which  are  actually  adopted  at  the  manufacturing  sites.  As  for
800 × 950, please refer to SEMI PCS-FPD-Phase III Report.
NOTE 2: Cassette sizes in Table R1-1 were used only hypothetically
as assumption to prescribe dimensions in Table 1.
NOTICE: SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer's   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature,
respecting   any   materials   or   equipment   mentioned
herein.  These  standards  are  subject  to  change  without
notice.
By    publication    of    this    standard,    Semiconductor
Equipment and Materials International (SEMI) takes no
position  respecting  the  validity  of  any  patent  rights  or
copyrights   asserted   in   connection   with   any   items
mentioned  in  this  standard.  Users  of  this  standard  are
expressly advised that determination of any such patent
rights  or  copyrights,  and  the  risk  of  infringement  of
such rights are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI D29-1101 © SEMI 20011
SEMI D29-1101
TEST METHOD FOR HEAT RESISTANCE IN FLAT PANEL DISPLAY
(FPD) COLOR FILTERS
This  test  method  was  technically  approved  by  the  Global  Flat  Panel  Display  Materials  and  Components
Committee  and  is  the  direct  responsibility  of  the  Japanese  Flat  Panel  Display  Materials  and  Components
Committee.  Current  edition  approved  by  the  Japanese  Regional  Standards  Committee  on  August  3,  2001.
Initially available at www.semi.org September 2001; to be published November 2001.
1  Purpose
1. 1  The purpose of this document is to standardize the
method  for  measurement  of  heat  resistance  in  color
filters used for flat panel displays (FPD).
2  Scope
2. 1  This method is to be used by suppliers and users of
FPD color filters to measure quality in products as well
as items under development.
2. 2  This  method  is  used  in  general  FPD  production  to
test the resistance of color filters to heat.
2. 3  This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.   It   is   the
responsibility of the user of these standards to establish
appropriate  safety  and  health  practices  and  determines
the applicability of regulatory limitations prior to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI  D19 —  Test  Method  for  the  Determination  of
Chemical Resistance of Flat Panel Display Color Filter
SEMI  D22  —  Test  Method  for  the  Determination  of
Color, Transmittance of Flat Panel Display Color Filter
Assemblies
3. 2  ISO Standards
1
ISO 7724
2
,
3
— Paints and varnishes -- Colorimetry
NOTE 1: Unless   otherwise   indicated,   all   documents   cited
shall be the latest published versions.

1  International Organization for Standards(ISO), 1, rue de Varembe,
Case, postale 56 CH-1211 Geneva 20, Switzerland. Tel: +41-22-749-
01-11, E-mail: central@iso.ch,  http://www.iso.ch
2  Available in Japanese as JIS Z8730 — Method for Specification of
Color Differences for Opaque Material. Japanese Standards
Association, 1-24, Akasaka 4 Chome, Minato-ku, Tokyo, 107-8440
Japan.  Tel: +81-3-3583-8000, E-mail: webmaster@jsa.or.jp,
http://www.jsa.or.jp
3  The expression method of its color differences is equal to the
method defined in Publication of CIE No. 87 (1990) Parametric
Effects in Color – Difference Evaluation. Commission Internationale
de l’Eclairage, Kegelgasse 27, A-1030 Vienna, Austria. Tel: +43-1-
714-31-87-0
4  Terminology
4. 1  atomic force microscope (AFM) — a device which
precisely   measures   surface   shape   by   gauging   the
reciprocal active force between atoms through use of a
probe.
4. 2  clean  oven  —  a  device  that  heats  a  specimen
through circulation of heated air through an air filter.
4. 3  confocal     scanning     laser     microscope     —     a
microscope which is able to create an image of just the
focal point by concentrating light on a specimen using a
confocal  laser.    This  device  can  also  measure  surface
shape  by  recording  height  information,  which  matches
the focal point of each scans line image.
5  Summary of Method
5. 1  Measure  spectral  transmittance,  chromaticity,  and
surface shape of specimen.
5. 2  Place  specimen  in  heating  device  and  leave  at
specified temperature for specified length of time.
5. 3  Remove  specimen  from  heating  device  and  cool
them.
5. 4  Observe  visually  and  by  microscope  to  see  if  any
exterior changes have occurred in the specimen.
5. 5  Measure  spectral  transmittance,  chromaticity,  and
surface shape of specimen.
6  Apparatus
6. 1  Heating Device and Holders
6. 1.1  Heating   Device   —   Use   a   clean   oven.      The
heating  device  being  used  must  have  the  accuracy  of
temperature  verified.    Also,  the  device  should  have
enough capacity to be able to heat the specimen evenly
to the target temperature promptly.  For example, there
are devices where it is necessary to place a metal block
inside to increase the heating capacity to the specimen.
6. 1.2  Holder — First the holder should be raised to the
specified  temperature  and  then  the  specimen  should  be
set in the holder.

SEMI D29-1101 © SEMI 20012
6. 2  Measurement Devices
6. 2.1  3-dimensional  Profile  Measurement  Device —
Use   a   Stylus   type   surface   roughness   measurement
device, AFM or laser microscope.
6. 2.2  Color Illuminator — See SEMI D19.
6. 2.3  Floodlight — See SEMI D19.
6. 2.4  Microscope — See SEMI D19.
6. 2.5  Spectrophotometer     —     Use     a     device     in
conformance with SEMI D22.
7  Test Conditions
7. 1  As  long  as  the  test  condition  should  be  written  in
the  test  result,  any  combination  of  temperature  and
heating  time  can  be  acceptable  in  the  conditions.    The
test  conditions  used  should  reflect  actual  conditions  in
the manufacturing process of flat panel displays.  Table
1  contains  a  reference  for  test  temperature,  maintain
time and atmosphere.
Table 1  Test Conditions
Item  Device Condition  Test TemperatureMaintain time
1Room Air
180°C  (± 2°C)
200°C (± 2°C)
230°C (± 2°C)
1 hour (± 5%)
2Nitrogen Gas
180°C (± 2°C)
200°C (± 2°C)
230°C (± 2°C)
1 hour (± 5%)
8  Test Specimen
8. 1  Use  FPD  color  filters  for  specimens.    In  the  test
report,    note    the    existence    or    non-existence    of
Transparent Conductive Film (ITO etc.).
9  Procedure
9. 1  Adjust  the  temperature  on  the  heating  device  and
make sure of the furnace temperature.
9. 2  Measure  the  spectral  transmittance,  chromaticity.
Observe the surface of each color layer of the specimen.
(The  measurement  method  is  described  in  Sections  9.6
and 9.7.)
9. 3  Mount the specimen in the heating device.
9. 4  After   the   temperature   returns   to   the   specified
temperature,   keep   the   specimen   for   the   prescribed
length of time.
9. 5  Remove the specimen from the heating device and
cool them to room temperature.
9. 6  Inspect change of the outlook and the profile of the
specimen according to the following procedures.
9. 6.1  Observe  the  existence  of  peculiar  changes  in
exterior  appearance  before  and  after  each  test  (e.g.
wrinkles,  cracks,  color  “mura”  etc.).    It  is  possible  for
the  users  of  this  standard  to  use  various  appropriate
methods of observation.
9. 6.2  Visual   observation   by   color   illuminator   from
backside.
9. 6.2.1  Visual  observation  by  a  floodlight  from  front
side.
9. 6.2.2  Microscope     observation     with     transmitted
illumination.
9. 6.2.3  Microscope      observation      with      reflected
illumination.
9. 6.2.4  Surface roughness measurement using a stylus-
type  surface  roughness  measurement  device,  AFM  or
laser microscope.
9. 7  Measure   the   color   changes   according   to   the
following procedures.
9. 7.1  Measure     the     spectral     transmittance     and
chromaticity of each color layer after heating using the
method  described  in  SEMI  D22.    (Measurements  must
be taken at the same location as before heating.)
9. 7.2  Before  and  after  the  test,  calculate  the  color
difference
∆Ε*ab or ∆Ε*uv, in   each   color   layer,
according  to  ISO  7724,  from  the  chromaticity  of  each
color layer.
10  Reporting Results
10. 1  Report the following items:
10. 1.1  report date,
10. 1.2  test date,
10. 1.3  heating device type and conditions of use,
10. 1.4  condition        of        specimen        (with/without
Transparent Conductive Film (ITO etc.), size, etc.),
10. 1.5  conditions of test (temperature, length of time),
10. 1.6  existence of change in outward appearance,
10. 1.7  chromaticity,   spectral   transmittance   of   each
color  layer  before  and  after  thermal  treatment  (number
of measuring points, position),
10. 1.8  color  difference  of  each  color  layer  before  and
after thermal treatment, and
10. 1.9  change  in  spectral  transmittance  at  specified
wavelength (e.g. back-light peak wavelength, etc.).

SEMI D29-1101 © SEMI 20013
11  Related Documents
11. 1  SEMI Standards
SEMI   D13   —   Terminology   for   FPD   Color   Filter
Assemblies
NOTICE:          SEMI     makes     no     warranties     or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer’s   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature
respecting   any   materials   mentioned   herein.   These
standards are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that
compliance   with   this   standard   may   require   use   of
copyrighted  material  or  of  an  invention  covered  by
patent  rights.  By  publication  of  this  standard,  SEMI
takes  no  position  respecting  the  validity  of  any  patent
rights  or  copyrights  asserted  in  connection  with  any
item  mentioned  in  this  standard.  Users  of  this  standard
are  expressly  advised  that  determination  of  any  such
patent rights or copyrights, and the risk of infringement
of such rights, are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI D30-1101 © SEMI 20011
SEMI D30-1101
TEST METHOD FOR LIGHT RESISTANCE IN FLAT PANEL DISPLAY
(FPD) COLOR FILTERS
This  test  method  was  technically  approved  by  the  Global  Flat  Panel  Display  Materials  and  Components
Committee  and  is  the  direct  responsibility  of  the  Japanese  Flat  Panel  Display  Materials  and  Components
Committee.  Current  edition  approved  by  the  Japanese  Regional  Standards  Committee  on  August  3,  2001.
Initially available at www.semi.org September 2001; to be published November 2001.
1  Purpose
1. 1  The purpose of this document is to standardize the
method  for  measurement  of  light  resistance  in  color
filters used for flat panel displays (FPD).
2  Scope
2. 1  This method is to be used by suppliers and users of
FPD color filters to measure quality in products as well
as items under development.
2. 2  This   method   shall   be   used   in   general   FPD
production to test the resistance of color filters to light.
2. 3  This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.   It   is   the
responsibility  of  the  user  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determines
the applicability of regulatory limitations prior to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI D19 — Test Method for Chemical Resistance of
FPD Color Filter
SEMI  D22 —  Test  Method  for  the  Determination  of
Color, Transmittance of FPD Color Filter Assemblies
3. 2  JIS Standards (available in Japanese only)
1
JIS   B7751   —   Light-exposure   and   light-and-water-
exposure apparatus (Enclosed carbon-arc type)
3. 3  ISO Standards
2
ISO  4892  —  Methods  of  exposure  to  laboratory  light
sources
ISO 7724
3
,
4
— Paints and varnishes -- Colorimetry

1  Japanese Standards Association, 1-24, Akasaka 4 Chome, Minato-
ku, Tokyo, 107-8440 Japan.  Tel: +81-3-3583-8000, E-mail:
webmaster@jsa.or.jp,  http://www.jsa.or.jp
2  International Organization for Standards(ISO), 1, rue de Varembe,
Case, postale 56 CH-1211 Geneva 20, Switzerland. Tel: +41-22-749-
01-11, E-mail: central@iso.ch,  http://www.iso.ch
3  Available in Japanese as JIS Z8730 — Method for Specification of
Color Differences for Opaque Material.
4  The expression method of its colour differences is equal to the
method defined in Publication of CIE No. 87 (1990) Parametric
NOTE 1: Unless   otherwise   indicated,   all   documents   cited
shall be the latest published versions.
4  Terminology
4. 1  atomic force microscope (AFM) — a device which
precisely   measures   surface   shape   by   gauging   the
reciprocal active force between atoms through use of a
probe.
4. 2  fade meter — a device which tests for the existence
of  external  change  or  characteristics  in  materials  by
long   term   irradiation   using   fixed   brilliance   from   a
prescribed light source.
5  Summary of Method
5. 1  Measure  spectral  transmittance,  chromaticity,  and
surface shape of specimen.
5. 2  Place  specimen  in  light  exposure  apparatus  and
irradiate for specified length of time.
5. 3  Remove specimen from light exposure apparatus.
5. 4  Observe  visually  and  by  microscope  to  see  if  any
exterior changes have occurred in the specimen.
5. 5  Measure  spectral  transmittance,  chromaticity,  and
surface shape of specimen.
6  Apparatus
6. 1  Light Exposure Apparatus — Choose a test device
to  use  from  the  following  devices  and  specify  which
device was used in the report.
6. 1.1  Carbon-arc Fade Meter
6. 1.2  Sunshine Carbon-arc Fade Meter
6. 1.3  Xenon-arc Fade Meter

Effects in Color – Difference Evaluation. Commission Internationale
de l’Eclairage, Kegelgasse 27, A-1030 Vienna, Austria. Tel: +43-1-
714-31-87-0

SEMI D30-1101 © SEMI 20012
6. 2  Measuring and Inspection Devices
6. 2.1  Color  Illuminator  —  This  light  source  shall  have  chromaticity,  color  rendering,  luminance  and  intensity
uniformity, diffusion, and a sufficient illumination area for observation of the specimen to be measured (See SEMI
D19).
6. 2.2  Floodlight — This light shall have luminance uniformity and an illumination area sufficient for the specimens
to be measured (See SEMI D19).
6. 2.3  Microscope — Use a microscope which has either transmitted illumination or reflected illumination, or both,
and has a sufficient magnification ratio (See SEMI D19).
6. 2.4  Spectrophotometer — The spectrophotometer shall be in conformance with SEMI D22.
6. 2.5  Surface  Shape  Measurement  Device  —  Use  a  Stylus-type  surface  roughness  measurement  (film  thickness
measurement) device, AFM or laser microscope.
7  Test Conditions
7. 1  The principle test conditions are described in Table 1. In the case where tests are performed under conditions in
addition to these, clearly state those conditions.
Table 1  Test Conditions
ItemDeviceTest IntervalColor Filter
Condition
Evaluation ItemReference
Standard
1Carbon-arc Fade Meter
100 hrs.
± 5%
2Sunshine Carbon-arc Fade Meter
100 hrs.
± 5%
3Xenon-arc Fade Meter
500 hrs.
± 5%
With/Without
ITO
Glass Surface
Irradiation
With UV-cut
Filter

# 1

1. External Change

# 2

2. Color Difference
∆E*ab or ∆E*uv
3. Transmittance
Change
JIS B7751
ISO 4892
ISO 7724
8  Test Specimen
8. 1  Use  FPD  color  filters  for  specimens.    In  the  test  results,  note  the  existence  or  non-existence  of  Transparent
Conductive Film (ITO etc.). Specimen used in the test are cut to an appropriate size for the specified holder of the
equipment  above,  and  fastened  at  the  specified  distance  from  the  light  source.  At  this  time,  in  order  to  test  in
conditions  close  to  actual  use,  an  UV-cut  filter  is  attached  to  the  glass  surface,  and  light  is  radiated  from  UV-cut
filter side.
9  Procedure
9. 1  Turn on the light source of the light exposure apparatus and stabilize it.
9. 2  Measure the spectral transmittance, chromaticity, and surface shape of each color layer of the specimen.  (The
measurement method is described in Sections 9.6 and 9.7.)
9. 3  Mount the specimen in the light expose apparatus.
9. 4  Radiate light on the specimen for the prescribed length of time. In order to keep the brilliance of the light source
uniform over this period of time, control the light source according to the procedures accompanying your inspection
device.
9. 5  Remove the specimen from the light exposure device.
9. 6  Inspect the change of the outlook and the profile of the specimen according to the following procedures.
9. 6.1  Observe  the  existence  of  peculiar  changes  in  exterior  appearance  before  and  after  each  test  (e.g.  wrinkles,
cracks, color “mura” etc.).
9. 6.1.1  Visual observation by a color illuminator from backside.

SEMI D30-1101 © SEMI 20013
9. 6.1.2  Visual  observation  by  a  floodlight  from  front
side.
9. 6.1.3  Microscope   observation   of   color   filter   with
transmitted illumination.
9. 6.1.4  Microscope   observation   of   color   filter   with
reflected illumination.
9. 6.1.5  Surface roughness measurement using a stylus-
type  surface  roughness  measurement  device,  AFM  or
laser microscope.
9. 7  Measure   the   color   changes   according   to   the
following procedures.
9. 7.1  Measure     the     spectral     transmittance     and
chromaticity   of   each   color   layer   after   the   light
resistance  test  using  the  method  described  in  SEMI
D22.      (Measurements   must   be   taken   at   the   same
location as before the test.)
9. 7.2  Before  and  after  the  test,  calculate  the  color
difference ∆E*ab   or   ∆E*uv,   in   each   color   layer,
according  to  ISO  7724,  from  the  chromaticity  of  each
color layer.
10  Reporting Results
10. 1  Report the following items:
10. 1.1  report date,
10. 1.2  test date,
10. 1.3  light  exposure  apparatus  type  and  conditions  of
use,
10. 1.4  condition       of       specimens       (with/without
Transparent Conductive Film (ITO etc.), size, etc.),
10. 1.5  conditions of test (light source, brilliance, length
of time, etc.),
10. 1.6  existence of change in outward appearance,
10. 1.7  chromaticity of each color layer before and after
thermal treatment (number of measuring points),
10. 1.8  color  difference  of  each  color  layer  before  and
after thermal treatment, and
10. 1.9  change  in  spectral  transmittance  at  specified
wavelength (e.g. back-light peak wavelength, etc.).
11  Related Documents
11. 1  SEMI Standards
SEMI   D13   —   Terminology   for   FPD   Color   Filter
Assemblies
NOTICE: SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer's   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature,
respecting   any   materials   or   equipment   mentioned
herein.  These  standards  are  subject  to  change  without
notice.
By    publication    of    this    standard,    Semiconductor
Equipment and Materials International (SEMI) takes no
position  respecting  the  validity  of  any  patent  rights  or
copyrights   asserted   in   connection   with   any   items
mentioned  in  this  standard.  Users  of  this  standard  are
expressly advised that determination of any such patent
rights  or  copyrights,  and  the  risk  of  infringement  of
such rights are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI D31-1102 © SEMI 2002 1
SEMI D31-1102
DEFINITION OF MEASUREMENT INDEX (SEMU) FOR LUMINANCE
MURA IN FPD IMAGE QUALITY INSPECTION
This  definition  was  technically  approved  by  the  Global  Flat  Panel  Display  Committee  and  is  the  direct
responsibility  of  the  Japan  Flat  Panel  Display  Committee.  Current  edition  approved  by  the  Japan  Regional
Standards  Committee  on  July  19,  2002.    Initially  available  at  www.semi.org  October  2002;  to  be  published
November 2002.
1  Purpose
1. 1  This standard will define the index of measurement
for mura in FPD image quality inspection.
1. 2    Conventionally,  inspection  of  FPD  image  quality
has been sensory, mainly conducted via the human eye,
and   among   the   items   detected,   there   has   been   no
common   standard   for   mura   and   other   associated
defects.    For  this  reason,  when  panel  makers  and  their
users  who  conduct  business  with  a  fixed  quality  level
set  a  mura  acceptance  level,  limit  samples  are  used  as
necessary.
1. 3  Operational problems with limit samples include:
• Level   of   mura   cannot   be   determined   without
viewing the sample.  Due to this, it is not possible
to  express  the  level  via  written  documentation  or
telephone.
• The sample settings are subjectively decided by the
setter, and lack objectivity.
• It  is  difficult  to  setup  and  maintain  a  consistent
sample level at multiple locations.
1. 4  Etc.  —  Above  all,  in  a  market  complicated  by
multiple   panel   makers   and   multiple   users,   where
presently there is no fixed standard for expressing mura
level,  we  have  to  say  that  it  is  extremely  difficult  to
ensure a fixed level for panel quality.
1. 5    In  this  standard,  using  ergonomics  approach,  we
will  investigate  the  human  eye’s  sensitivity  regarding
mura, and by expressing the relation between mura area
and  contrast,  propose  an  index  to  express  the  level  of
mura.
2  Scope
2. 1    This  standard  is  applicable  to  FPD  (Flat  Panel
Displays)   excluding   CRT   and   HMD   (Head   Mount
Displays).  The display sizes targeted are typically from
Type  8  (8"  (20.3  cm)  diagonal)  to  Type  30  (30"  (76.2
cm) diagonal).
2. 2    This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.      It   is   the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  health  practices  and  determine  the
applicability or regulatory limitations prior to use.
3  Limitations
3. 1    In  the  first  edition  of  this  standard,  the  target  of
measurement, mura, is limited as below.
3. 1.1  Line defects narrower than 300 μm and pixel dot
defects are not the subject of this standard.
3. 1.2          Mura     background     display     is     limited     to
monochrome   displays/intermediate   gray   scale   level;
RGB,  etc.  color  background  and  L0/L63  background
are not the subject of this standard.
4  Referenced Standards
None.
5  Terminology
5. 1  Definitions
5. 1.1  Gray  Scale  —  Gray  scale  on  image  display.    In
this  standard,  indicates  level  32  out  of  64  level  gray
scale.
5. 1.2  L0  Display  —  Gradation  0  out  of  64.    (Pitch
Black)
5. 1.3  L63    Display    —    Gradation    63    out    of    64
(Completely white)
5. 2  Abbreviations and Acronyms
5. 2.1  JND    —    Abbreviation    for    Just    Noticeable
Difference.    Used  in  the  field  of  Psychophysics;  for  a
certain   stimulus,   the   smallest   change   in   stimulus
(luminance,  for  example)  where  a  difference  can  be
perceived.  Specifically,  it  is  often  used  to  indicate  a
statistical  value  where  the  probability  of  the  difference
being  “perceptible”  is  50%  and  the  probability  of  the
difference   “not   being   perceptible”   is   50%.      Also
expressed using lower case letters, j.n.d.
5. 2.2  Semu  —  Semi  Mura,    Measurement  index  for
mura, defined in this standard.


SEMI D31-1102 © SEMI 2002 2
6  Semu Definition
6. 1    Under  specific  conditions,  the  below  regressive
relationship  can  be  seen  between  area  and  contrast  for
Human Mura JND.   (Refer to Related Information.)
Cjnd    = F(Sjnd)
= 1.97/Sjnd
0. 33
+ 0.72
Cjnd:  Contrast of mura at JND (Unit:  % relative to
background = 100%)
Sjnd:  Area of mura at above contrast (Units:  mm
2
)
6. 1.1      In   the   above   equation,   contrast   at   JND   is
inversely proportional to area raised to the 0.33 power.
In short, it indicates that as mura area gets smaller, only
darker muras can be sensed.
6. 2  For the subject mura, the mura level, Semu, can be
calculated using the below formula.
Semu   = |Cx| / Cjnd
= |Cx| / F(Sx)
= |Cx| /(1.97/Sx
0. 33
+ 0.72)
Cx:  Average contrast of mura being measured
(Unit:  % relative to background = 100%)
Sx:  Surface area of mura being measured (Units:
mm
2
)
7  Notation
7. 1  Semu is a comparison ratio between contrast of the
measurement target and contrast in a JND, and thus has
no unit.
7. 2      It   is   recommended   that   significant   digits   be
displayed to one decimal place.
NOTE 1: Notation  uses  this following  methodology.Notation
Example  1:    The  level  of  JND  mura  in  this  study  is  Semu  =
1. 0. Notation Example 2: The level of this mura is Semu 2.5.
8  Test Methods
8. 1  Comparative        Measurement        and        Direct
Measurement  —  The  two  methods  for  determining
Semu  levels  on  panels  are  comparative  measurement
and direct measurement.
8. 1.1  Comparative Measurement
8. 1.1.1  The comparative measurement method involves
a panel and software which can simulate Semu level, to
which  a  person  compares  a  mura  on  an  actual  panel,
making adjustments, until a level which appears similar
is determined.  This is a method that can be used in the
actual production site easily using the Semu simulation
panel as the variable level limit sample.
8. 1.2  Direct Measurement
8. 1.2.1    The  direct  measurement  method  captures  the
actual  panel  with  a  CCD  camera,  or  the  like,  and  is  a
method  of  measuring  the  Semu  level  of  the  mura
section,  making  it  possible  to  directly  determine  the
Semu  from  the  area  and  contrast  of  the  mura  section
that is captured.
8. 2  Measurement Equipment
8. 2.1    Semu  measurement  consists  of  measurement  of
the  area  of  mura  on  the  display  surface  and  contrast
measurement, and needs to be appropriately calibrated.
8. 3  Measurement Environment
8. 3.1      Semu   measurement   will   be   conducted   in   a
darkroom environment.
8. 4  Display Conditions
8. 4.1    Background  luminance  for  Semu  measurement
shall be 50 ± 10 cd/m
2
.
8. 5  Contrast Measurement
8. 5.1  The average contrast of the mura section shall be
measured, and the contrast ratio of the mura section will
expressed  as  a  percentage,  for  when  the  background  =
100%.
9  Related Documents
9. 1            Experiment      Overview      for      Calculation      of
Measurement  Index  for  Mura  in  FPD  Image  Quality
Inspection.  R. Yositake  IBM Japan, T.Tamura Tokyo
Institute of Polytechnics Oct. 23/2001

NOTICE:      SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer's   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature
respecting   any   materials   or   equipment   mentioned
herein.  These  standards  are  subject  to  change  without
notice.
The  user's  attention  is  called  to  the  possibility  that
compliance   with   this   standard   may   require   use   of
copyrighted  material  or  of  an  invention  covered  by
patent  rights.    By  publication  of  this  standard,  SEMI
takes  no  position  respecting  the  validity  of  any  patent
rights  or  copyrights  asserted  in  connection  with  any
item mentioned in this standard.  Users of this standard
are  expressly  advised  that  determination  of  any  such
patent rights or copyrights and the risk of infringement
of such rights are entirely their own responsibility


SEMI D31-1102 © SEMI 2002 3
RELATED INFORMATION 1
EXPERIMENT OUTLINE FOR CALCULATION OF MEASUREMENT
INDEX FOR LUMINANCE MURA IN FPD IMAGE QUALITY INSPECTION
NOTE:    This  related  information  is  not  an  official  part  of  SEMI  D31.    This  related  information  was  approved  for
publication by full letter ballot procedures on July 19, 2002.
R1-1  Purpose
R1-1.1    It  has  been  reported  that  under  the  range  of
certain  conditions,  a  basic  expression  of  FPD  mura
quality   level   can   be   made,   using   their   size   and
contrast
[1]
.    Here,  recreating  those  experiments,  we
verified      their      reproducibility,      conducting      the
experiment  with  a  goal  of  calculating  a  measurement
index for luminance mura for standardization.
R1-2  Experiment Method
R1-2.1  Experiment Equipment
R1-2.1.1    The  experiment  utilized  a  14.1  inch,  1024  X
768  pixel  backlit  TFT/LCD.    As  there  was  a  need  to
display low contrast luminance muras, it was reworked
to  display  256  gradations  in  a  43  cd/m
2
~  54  cd/m
2

range.    A  program  capable  of  displaying  rectangular
and round muras as desired was created, and the muras
were displayed in the center of the prepared LCD.  The
subjects   could   freely   adjust   the   luminance   of   the
displayed  luminance  muras  using  a  handheld  ten-key
pad.
R1-2.2  Experiment Conditions
R1-2.2.1    21  types  of  muras  were  used.    These  were
four round types (diameter:7, 25, 55, 305 pixels) and 17
rectangular  types  (31×1,  153×1,  240×1,  480×1,  31×2,
153×2,  240×2,  31×3,  153×3,  240×3,  31×16,  69×35,
140×17,  240×10,  1×31,  1×153,  1×240).    Observation
conditions  were  a  viewing  distance  of  500  mm,  and
view  angle  normal  to  the  center  of  the  LCD.    The
experiment  room  was  a  darkroom,  and  the  background
luminance of the luminance mura was 48 cd/m
2
.
R1-2.3  Subjects/Experiment Procedure
R1-2.3.1  The   subjects   for the   experiment   were   16
adults,   with   no   eye   disease   and   with   near   vision
strength (50 cm) of 1.2 or greater for both eyes.  Of the
16  subjects,  there  was  an  Expert  group  of  8  (7  male,  1
female,  average  age  40  years),  consisting  of  engineers
from   LCD   makers,   who   regularly   conduct   mura
inspections  and  analysis.    The  remaining  8  subjects  (6
males,   2   females,   average   age   21)   were   college
students,   a   Novice   group   who   were   conducting
luminance mura evaluation for the first time.  Using the
ten-key  pad,  the  subjects  adjusted  the  luminance  of
mura,  to  a  point  “where  mura  can  just  no  longer  be
detected”    (referred    to    as    “jnd”:    just    noticeable
difference  below)  and  to  a  “point  where  mura  can
clearly  be  detected”  (referred  to  as  “distinct”  below),
recording  the  contrasts  at  these  times.    Muras  brighter
than  the  background  and  lighter  than  the  background
were both targeted.
R1-3  Experiment Results
R1-3.1  The  following  matters  became  clear  from  the
experiment.
• The  larger  the  area  of  the  mura,  the  smaller  jnd
contrast  (C  jnd)  became.    (Muras  are  more  visible
as area becomes larger)
• Muras with a width of one pixel, compared to other
muras,  require  nearly  1.5  to  2  times  the  contrast.
(Muras  with  a  width  of  one  pixel  are  difficult  to
detect)
• Comparing  the  distribution  between  the  subjects,
there  was  no  difference  between  the  Expert  and
Novice groups for jnd contrast (C jnd)
• Compared  to  the  Expert  group,  the  Novice  group
had a larger distribution for distinct contrast.
R1-3.2      The   relation   between   mura   area   and   jnd
contrast showed the same trend as in past experience
[1]
,
and   the   quality   of   reproducibility   was   confirmed.
Therefore  at  this  point,  for  the  sake  of  standardization,
we  examined  the  function  for  mura  area,  and  tried
linear  regression  for  it  with  jnd  contrast.    Figure  1
shows  the  results.    When  the  horizontal  axis  is
33. 0
1
S

(S is mura area in mm
2
units), and the vertical axis is at
contrast,   the   bold   line   shows   a   strong   correlation
coefficient, understood through linear regression.
R1-3.3  This bold line shows the relation between mura
area  and  contrast  at  the  point  where  the  mura  becomes
just not detectable (jnd), and if area is determined, then
jnd contrast (C jnd) can be figured out.  In Figure 1, ○
is  a  mura  with  a  width  of  one  pixel,  and  ●  represents
other    muras    (not    one    pixel    wide)    respectively
representing  the  averages  of  the  16  subjects.    As  noted
above  in  2),  a  mura  with  a  width  of  one  pixel  tends  to
be  slightly  different,  which  is  why  they  were  handled
separately.    Also  considering  past  experiment  results,
when  viewing  distance  is  500mm,  the  0.3mm  level


SEMI D31-1102 © SEMI 2002 4
seems to be the boundary.  Here we propose Equation 1
which  regressively  analyzes  the  ● in Figure 1 as
criteria for standardization.
72. 0
1
97. 1
33. 0
+






=
S
Cjnd
..... Equation 1
R1-3.4  The    criteria for    standardization,    jnd,    is
determined  by  the  C  jnd  straight  line,  but  we  also
propose,  based  on  this  criteria,  quality  levels  for  other
visible muras.  Figure 1 shows straight lines made up of
2. 0 jnd  and  3.0  jnd.    ×  is  distinct  contrast  for  the
Expert  group,  but  in  cases  besides  1-pixel  wide  muras,
it can be understood to be distributed slightly above the
2. 0 jnd straight line.
R1-3.5    This  indicates  that  the  straight-line  relationship
of  Figure  1  is  not  only  jnd  level,  but  also  consists  of
visible  contrast  level.    Accordingly,  with  the  bold  line
jnd as  a  standard,  mura  quality  level  can  be  expressed
by n in n x jnd.  From the experiment results this time,
from  3.0  being  a  level  slightly  above  distinct,  it  can  be
thought  that  it  is  desirable  to  operate  using  a  range  of
levels 1.0 to 3.0.
R1-4  Summary
R1-4.1          A     proposal     was     made     regarding     the
quantization of FPD luminance mura.  The quality level
of a mura can be expressed as a function between mura
area  and  contrast,  using  the  contrast  at  the  jnd  point  as
criteria.    By  using  this  method,  even  if  mura  area,
shape,  or  contrast  is  different,  we  can  now  calculate
similar quality level jnd.
C jnd = 1.97 (1/f(S)) + 0.72
R
2
= 0.87
0
1
2
3
4
5
6
7
0. 00.10.20.30.40.50.60.70.8
1/f(S)
Contrast
(%)
3. 0 jnd
2. 0 jnd
1 pixel-width Mura
f(S) = S
0. 33
S:unit (mm
2
)

Figure R1-1
Relation between luminance mura area and jnd contrast (C jnd)
(●: jnd contrast of mura not 1 pixel wide,   ○:jnd contrast of mura 1 pixel wide,
×: Distinct contrast of all muras (Average of Expert group only))

Prepared by R. Yoshitake and T. Tamura



SEMI D31-1102 © SEMI 2002 5
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
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI D32-0303 © SEMI 2003 1
SEMI D32-0303
SPECIFICATION FOR IMPROVED INFORMATION MANAGEMENT FOR
GLASS FPD SUBSTRATES THROUGH ORIENTATION CORNER
UNIFICATION
This specification was technically approved by the Global FPD Materials and Components Committee and is
the  direct  responsibility  of  the  Japanese  FPD  Materials  and  Components  Committee.    Current  edition
approved  by  the  Japanese  Regional  Standards  Committee  on  January  10,  2003.    Initially  available  at
www.semi.org January 2003; to be published March 2003.
1  Purpose
1. 1            This      specification      provides      the      location,
dimensions,  and  message  size  of  the  marking  symbol
that  consists  of  a  two-dimensional  code  symbol  and
related alpha numeric characters (capable of being read
visually  through  the  reader  camera  and  display)  and  is
located  outside  of  the  quality  area  of  glass  flat  panel
display (FPD) substrate.
1. 2  The marking symbol in this specification allows the
inclusion    of    identification    information    for    each
individual    substrate    together    with    the    additional
information  previously  provided  by  various  orientation
corner (OC) cut shapes.
1. 3    Thus,  this  specification  allows  suppliers  of  glass
substrates  for  FPDs  to  simplify  substrate  information
management   by   marking   such   information   in   one
location   around   the   OC   on   the   substrate,   before
shipping.    In  addition,  use  of  this  marking  symbol  will
facilitate  the  future  elimination  of  the  numerous  types
of OC cut shapes presently in use.
1. 4    The  marking  symbol  covered  by  this  specification
is intended for use by suppliers and purchasers of glass
substrates for FPDs.
2  Scope
2. 1  This  specification  provides  for  a  standardized  OC
location  in  support  of  future  unification  of  the  OC  cut
shape  as  well  as  location.    When  this  is  done,  the
provisional nature of the specification can be removed.
2. 2    This  specification  covers  the  content,  dimensions,
and  surface  positioning  of  the  marking  symbol  located
outside  of  the  quality  area  of  glass  substrates  for  FPD
use.
2. 2.1  This marking symbol is marked in a manner and
location to avoid affecting the user patterning process.
2. 2.2    Although  this  specification  does  not  specify  the
marking  technique  to  be  employed  when  complying
with  its  requirements,  it  is  assumed  that  the  marking
symbol  will  be  obtained  by  laser  marking  individual
dots.
2. 3  Marking symbols are applicable across all stages of
FPD   processing,   from   virgin   substrates   to   fully
patterned  substrates.    The  format  and  algorithm  for  the
Data    Matrix    code    is    based    on    two-dimensional
symbology specified in ISO/IEC 16022.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Limitations
3. 1    Since  the  symbol  is  marked  in  a  region  of  the
substrate  outside  of  the  quality  area,  it  is  not  available
for use after this area is cut off.
3. 2    Since  only  a  single  symbol  is  marked  on  each
substrate, the marking symbol is not directly applicable
for  management  of  individual  panels  in  multi-panel
displays.
4  Referenced Standards
4. 1  ISO/IEC Standard
1

ISO/IEC  16022  —  International  Symbology  Specifica-
tion – Data Matrix
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
5  Terminology
5. 1    Terms  relating  to  the  Data  Matrix  code  symbol
characteristics are defined in ISO/IEC 16022.
5. 2      Definitions   of   terms   relating   to   alphanumeric
characters are as follows:
5. 2.1  character  separation  —  the  horizontal  distance
between  the  adjacent  boundaries  of  any  two  adjacent
characters.


1  International Organization for Standardization, ISO Central
Secretariat, 1, rue de Varembé, Case postale 56, CH-1211 Geneva 20,
Switzerland. Telephone: 41.22.749.01.11; Fax: 41.22.733.34.30
Website: http://www.iso.ch


SEMI D32-0303 © SEMI 2003 2
5. 2.2  character   separation,   vertical   —   the   vertical
distance  between  the  adjacent  boundaries  of  any  two
adjacent characters.
5. 2.3  character   spacing   —   the   horizontal   distance
between   the   character   centerlines   of   two   adjacent
characters.
5. 3    Definitions  of  terms  relating  to  the  marking  area
are as follows:
5. 3.1  mark  area  —  a  rectangular  area  containing  the
mark field(s) and the surrounding quiet zone.
5. 3.2  mark field — an area within which all mark dots
occur.
5. 3.3  quiet zone — an unpatterned, unmarked area that
surrounds a mark field.
5. 3.4  TIR  —  total  indicator  reading,  the  difference
between the maximum and minimum distances of a line
from a reference line.
6  Ordering Information
6. 1  Content information of mark, as agreed to between
purchaser and supplier
6. 2    Number  of  message  characters  (up  to  a  maximum
of   20,   see   Section   7.7.1),   as   agreed   to   between
purchaser and supplier.
7  Requirements
7. 1  Orientation  Corner  —  The  OC  location  shall  be
the  lower  left  corner  of  the  substrate  with  the  pattern
surface  up  and  the  long  edge  at  the  bottom.    Since  the
necessary  information  is  encoded  in  the  identification
marks,  it  is  not  necessary  to  distinguish  the  shapes  of
the other corners of the substrate.  OC cut shape is not
specified at this time, but it is expected that in the future
a   single   shape   will   be   established   for   the   next
generation of substrates.
7. 2  Shape, Size, and Location of Marking Symbols
7. 2.1    The  location  of  the  mark  field  relative  to  the
orientation  corner  and  the  adjacent  edges  of  the  sub-
strate  shall  be  as  shown  in  Figure  1.    The  reference
point  of  the  two-dimensional  code  symbol,  together
with  a  parallelism  requirement,  locates  the  entire  mark
field.
7. 2.2      The   mark   field   dimensions   and   the   symbols
within the mark field shall be as shown in Figure 2.
7. 2.3    Overall  mark  area  dimensions  shall  be  as  shown
in Figure 3.
7. 2.4  The values of the dimensions shall be as defined
in Tables 1 and 2.
7. 3  Data Matrix Code Symbol Dimensions
7. 3.1    Each  rectangular  Data  Matrix  code  symbol  shall
be composed of an array of 18 rows and 18 columns, as
shown schematically in Figure 4.
7. 3.2  Cell spacing shall be 80 μm, center to center.
7. 3.3        The    Data    Matrix    code    symbol    shall    be
constructed  such  that  it  can  be read in accordance with
ISO/IEC 16022.
7. 4  Alphanumeric Symbol Dimensions
7. 4.1  Use of the modified SEMI OCR Character Set as
defined in Table 3 is recommended.
7. 4.2      Characters   shall   be   marked   in   a   dot   matrix
format,  contained  within  a  character  window  0.72  mm
high × 0.40 mm high.
7. 4.3    Character  window  separation  shall  be  0.24  mm
horizontally and 0.16 mm vertically.
7. 5  Reference  Point  for  all  symbols  shall  be  the  center
point of the cell common to the primary border row and
primary   border   column   of   the   Data   Matrix   code
symbol.
7. 6  Mark Field Dimensions shall be in accordance with
the  dimensions  D  and  F given  in  Table  2.    Parallelism
(T)  of  the  top  of  the  mark  field  within  dimension  L,
relative to the nearest edge, shall be ≤ 1.0 mm TIR.
7. 7  Message Characters
7. 7.1  Up to 20 alphanumeric characters in the character
set  listed  in  Table  3  shall  be  encoded  in  the  two-
dimensional code symbol, and alphanumeric characters
with  the  same  content  shall  be  placed  symmetrically
around  the  two-dimensional  code  symbol  as  shown  in
Figure  2.    The  message  content  is  not  defined,  but  it
does  not  include  any  check  sum  characters.    It  may
include  information  provided  by  the  glass  substrate
supplier,  and  the  remainder  of  the  message  characters,
if  any,  can  be  used  to  insert  information  agreed  on
between   supplier   and   purchaser.      If   the   message
contains  less  than  20  characters,  a  dash  (–)  may  be
inserted  for  the  unused  characters,  at  the  supplier’s
discretion.
7. 7.2    The  Data  Matrix  code  symbol  shall  be  encoded
with   error   checking   and   correcting   characters   in
accordance  with  ECC 200  in  accordance  with  ISO/IEC

# 16022

16022.
7. 7.3  Alphanumeric characters shall:
7. 7.3.1    Be  positioned  such  that  their  lower  part  faces
toward the nearest edge of the glass substrate.
7. 7.3.2    Contain  message  characters  identical  to  those
encoded in the Data Matrix code field.


SEMI D32-0303 © SEMI 2003 3
7. 7.3.3  Consist of two sets of two-line strings as shown
in Figure 2.
7. 7.4  The order of the alphanumeric characters shall be
as agreed upon between supplier and user.
NOTE  1:    A  typical  sequence  could  be:  The  message  begins
at  the  upper  leftmost  window,  progresses  horizontally  to  the
upper  rightmost  window,  continues  at  the  lower  leftmost
window and ends at the lower rightmost window.
7. 8  Quiet Zones
7. 8.1  The space between the Data Matrix code symbol
and adjacent alphanumeric symbols shall be 0.48 mm.
7. 8.2    A  0.50  mm  wide  quiet  zone  surrounds  the  entire
mark field.
Table 1  Mark Location Dimensions (see Figure 1)
Letter Symbol Name of Dimension Nominal Value, mm     Tolerance, mm
A Edge to Mark Reference Point 15.0 ±0.5
B Nearest Edge to Mark Reference Point 2.5                           ±0.5
E             Edge             to             Quality             Area             5.0
Reference
(See Note 1.)
– S – Reference Line parallel with substrate edge Reference (See Note 2.)
T
Top of Mark Field to Reference Line Parallelism across Mark Area
Width (L) (see Table 2 and Figure 3)

≤1.0 TIR
NOTE 1:  This is a reference dimension.
NOTE 2:  This line is a virtual reference line.

Table 2  Mark Field Dimensions (see Figures 2 and 3)
Letter Symbol Name of Dimension Nominal Value, mm
Tolerance, mm
(See Note 1.)
C
2
Data Matrix Field Width 1.44
D Mark Field Width 8.32
F Mark Field Height  1.60
G Bottom of Mark to Mark Reference Point 0.20
H Alphanumeric Character Window Height 0.72
I Alphanumeric Character Window Width 0.40
J Alphanumeric Character Window Horizontal Separation 0.24
K Alphanumeric Character Window Vertical Separation 0.16
L Mark Area Width  9.32
M Mark Area Height  2.60
Q
1
Data Matrix Quiet Zone, Horizontal  0.48
Q
2
Mark Area Quiet Zone, Width and Height  0.50
R
2
Data Matrix Field Height 1.44
NOTE 1:  The laser marker can control these field dimensions to much tighter tolerances than it can control the field location.  For that reason it
is not necessary to apply tolerances to these values and it is appropriate to define these dimensions with two decimal places.

Table 3  Modified SEMI OCR Character Set
A            B            C            D            E             F            G            H             I             J             K            L            M
N            O            P            Q            R            S            T            U            V            W            X            Y            Z
1            2            3            4            5            6            7            8            9            0            –




SEMI D32-0303 © SEMI 2003 4
A
24301
7
9
568
B
A
Data Matrix Field
Short Edge
Long (Nearest) Edge
Quality Area
E
E
Orientation
Corner
Mark Reference Point
BCDE
FGH I J
T-S-
-S-
A
24301
7
9
568
B
A
Data Matrix Field
Short Edge
Long (Nearest) Edge
Quality Area
E
E
Orientation
Corner
Mark Reference Point
A
24301
7
9
568
B
A
Data Matrix Field
Short Edge
Long (Nearest) Edge
Quality Area
E
E
Orientation
Corner
Mark Reference Point
BCDE
FGH I J
T-S-
-S-

Figure 1
Data Matrix Field Location
H
K
A/N Character Window
I
Mark Reference Point
Data Matrix Field
G
J
R
2
C
2
Q
1
F
D
Q
1
H
K
A/N Character Window
I
Mark Reference Point
Data Matrix Field
G
J
R
2
C
2
Q
1
F
D
Q
1

Figure 2
Mark Field Dimensions



SEMI D32-0303 © SEMI 2003 5
D
L
M
Mark Reference
Point
F
Q
2
Q
2
Q
2
Q
2
D
L
M
Mark Reference
Point
F
Q
2
Q
2
Q
2
Q
2
D
L
M
Mark Reference
Point
F
Q
2
Q
2
Q
2
Q
2
D
L
M
Mark Reference
Point
F
Q
2
Q
2
Q
2
Q
2

Figure 3
Mark Area Dimensions

Figure 4
Data Matrix Field



SEMI D32-0303 © SEMI 2003 6
NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.    The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer's  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature, respecting any materials or equipment mentioned herein.  These standards are subject to change without
notice.
By  publication  of  this  standard,  Semiconductor  Equipment  and  Materials  International  (SEMI)  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  items  mentioned  in  this
standard.  Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights are entirely their own responsibility.

Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.



SEMI D33-0703 © SEMI 2003 1
SEMI D33-0703
MEASURING METHOD OF OPTICAL CHARACTERISTICS FOR
BACKLIGHT UNIT
This  method  was  technically  approved  by  the  Global  Flat  Panel  Display  Committee  and  is  the  direct
responsibility  of  the  Japanese  FPD  Materials  and  Components  Committee.  Current  edition  approved  by  the
Japanese Regional Standards Committee on April 28, 2003.  Initially available at www.semi.org May 2003;
to be published July 2003.
1  Purpose
1. 1  The electro optical characteristics of backlight unit
(BLU)  have  a  great  influence  on  the  characteristics  of
LCD  like  uniformity,  luminance  and  chromaticity  etc.
There  are  many  measurement  methods  for  BLU  of
electro optical characteristics.  It is so different that the
measurement  method  for  BLU  in  each  company  (e.g.:
the  testing  position,  test  condition,  equipment  concept
etc.).  Therefore,  this  standard  will  present  the  general
measurement method.
2  Scope
2. 1    This  standard  is  applicable  to  BLU  for  Liquid
Crystal  Display  (LCD)  and  the  measurement  includes
only   the   optical   area.   The   other   areas   (Electric
characteristics,  Reliability,  and  so  forth)  are  dealt  with
by other SEMI standards.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Limitations
3. 1  This standard does not include the test of each BLU
component such as: light guide panel, optical film, Cold
Cathode       Fluorescent       Lamp       (CCFL),       film
characteristics, and etc.
4  Referenced Standards
4. 1  Other Standards
Flat   Panel   Display   Measurement   Standard,   VESA
FPDM 2.0, June 2001.
Commission    Internationale    de    líEclairage    (CIE),
ìColorimetry        of        Self-Luminous        Displays-A
Bibliography,î CIE Publication No. 87, 1990.
Commission    Internationale    de    líEclairage    (CIE),
ìColorimetry,î CIE Publication No. 15.2, 1986.
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
5  Terminology
None.
6  The Optical Measurement Method
6. 1    The  test  result  of  BLU  can  vary  because  of  the
environment  and  measurement  conditions.    Therefore,
the  measurement  environment  and  conditions  need  to
be determined.
6. 2  Measurement Setup
6. 2.1  Environment conditions:
• Temperature: 25 ± 2∞C
• Humidity: 65 ± 20% RH
• Illumination  of  surrounding:  dark  room  below  10
lux
• Air flow: no wind
6. 2.2  Measurement Conditions
6. 2.2.1        The    measuring    distance    is    suitable    for
500   ±   50   mm   at   field   aperture   1∞   and   the   viewing
direction  of  all  tests  are  90∞  ±  1∞.    This  distance  is
applied for all measurements in this standard.

90∫±1∫
500±50mm
Backlight Unit
LMD

Figure 1
The Measuring Configuration for Measuring
Optical Characteristics of BLU

6. 2.2.2    Electrical  conditions  for  driving  are  the  typical
lamp   current   and   typical   operating   frequency.   A
nonconductor  for  jig  of  BLU  is  needed  and  it  must  be
ground treated to reduce each noise signal.



SEMI D33-0703 © SEMI 2003 2
6. 2.3  Measuring Equipment
6. 2.3.1  Instrument for Driving of BLU
6. 2.3.1.1  In this standard a DC power supply is needed
and  an  inverter  for  BLU  driving  of  electro-optical  test.
It is required that the DC-power supply has the range of
the output voltage between 0 to 30V and has the range
of the output current between 0 to 8A.
6. 2.3.2  Instrument For Optical Measurement
6. 2.3.2.1    In  this  standard,  spectroradiometer  is  needed
for  optical  test.    Spectroradiometer  is  more  adequate
than  a  filter  photometer  for  BLU  color  measurement
and  it  can  use  filter  photometer  and  spectroradiometer
for luminance measurement.
6. 2.4  Warm-Up Time
6. 2.4.1    Warm-up  time  is  the  period  from  power-on  to
saturation    of    the    light    intensity.        The    optical
measurement   needs   15   to   30   minutes   for   a   more
accurate   measurement   in   case   of   luminance   and
luminance uniformity.


Figure 2
The Warm-Up Time of BLU

6. 2.5  Others
6. 2.5.1    It  is  recommended  that  the  user  record  the
environment   and   condition   such   as:   temperature,
humidity,  illumination  of  surrounding,  testing  distance,
warm-up time, lamp current, etc.
6. 3  Measurement Items
6. 3.1            The      following      measurement      items      are
recommended for BLU, but these items depend on user
requirements if they are specified.
6. 3.2  Luminance
6. 3.2.1  It is the surface luminance that is detected in all
test  areas.    Luminance  should  be  expressed  in  a  unit
such  as  candelas  per  meter  squared  [cd/m
2
].    This
luminance  is  the  value  measured at one center point or
average  value  at  several  testing  points.  Generally,  the
lamp  current  of  BLU  should  be  set  to  typical  lamp
current.  If the lamp current value has fluctuation state,
the user should wait by stable state.  The measurements
are   performed   in   the   dark   room   under   standard
measuring conditions and design viewing direction.
6. 3.3  Luminance Uniformity
6. 3.3.1  Luminance uniformity is a measure of how well
the  luminance  remains  constant  over  the  surface  of  the
active  area  and  it  is  a  closely  related  measurement  to
luminance  itself.    Backlights  are  particularly  liable  to
have the non-uniformity characteristics.  The measuring
method  is  similar  to  the  luminance  measuring  method.
In  this  measurement,  it  is  important  to  determine  the
testing   position.   The   determination   of   the   testing
position  occur  some  different  testing  result.    In  this
standard,  we  calculate  the  uniformity  with  the  ratio  of
max  luminance  and  min  luminance  level.  The  simple
formulas   are   below.   There   are   two   formulas   for
uniformity.  These formulas explain the non-uniformity
concept, but they very popular with related industry.

Measuring position in luminance uniformity formula:

100)((%)
max
minmax
×
−
=
L
LL
Uniformity
L
L
ratioUniformity
min
max
)(=

NOTE   1:      For   example,   if   the   maximum   luminance   is
100 cd/m
2
and  the  minimum  luminance  is  80  cd/m
2
the
Uniformity (%) is 20%. And the uniformity (ratio) is 1.25.

Comparison Case A Case B Case C
Max.         200         200             200
Luminance
Min.          140              160              180
Uniformity (%) 30% 20% 10%
Uniformity (ratio) 1.43 1.25 1.11

6. 3.3.2  For this calculation, there are some positioning
methods  and  the  each  user  can  select  the  test  point
option (the testing number is 5/9/13/25 point).
6. 3.3.3    Figures  3a  to  3d  show  each  test  position  and
test number.



SEMI D33-0703 © SEMI 2003 3

Figure 3b
13 measuring points
Figure 3a
25 measuring points
Figure 3c
9 measuring points
Figure 3d
5 measuring points

6. 3.4  Color
6. 3.4.1    In  this  standard,  color  coordinate  systems  are
the 1931 or 1976 CIE systems. CIE1931 use the ëxí and
ëyí    coordination    and    CIE1976    use    uí    and    ví
coordination.    The    relation    between    CIE1931    to
CIE1976 is below:
36'48'18
'12
36'48'18
'27
3122
9
315
9
'
3122
4
315
4
'
+−
=
+−
=
++−
=
++
=
++−
=
++
=
vu
v
y
vu
u
x
yx
y
ZYX
Y
v
yx
x
ZYX
X
u


6. 3.4.2  Generally, because the light source of BLU is a
discontinue  wavelength,  color  should  be  measured  by
spectroradiometer.   It   is   more   accurate   than   filter
colorimeter  for  color  measuring.    In  this  standard,  the
measuring  distance  and  viewing  direction  are  the  same
with the luminance testing method.
6. 3.5  Color Uniformity
6. 3.5.1    Color  Uniformity  is  a  same  meaning  with  the
Color  difference  in  this  standard.  It  means  how  the
displays have the consistent chromaticity. In case of the
color uniformity, we use the uí and ví coordinates from
CIE1976.  The  reference  point  is  center  position.  It  is
referenced the ∆uíví formula.
The formula is below:

)()(
'
2
'
1
'
2
'
1
''
22
vvuu
vu
−−
+=∆

6. 3.5.2    There  are  some  positioning  methods  for  color
uniformity  test.    It  is  the  same  point  with  luminance



SEMI D33-0703 © SEMI 2003 4
uniformity,   but   in   this   standard,   five   point   color
uniformity is recommended.  (Confer with Figure 3d.)

Figure 4
The 1931 CIE Coordinates (x,y)



Figure 5
The 1976 CIE Coordinates (u’,v’)

NOTICE: SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer's   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature,
respecting   any   materials   or   equipment   mentioned
herein.  These  standards  are  subject  to  change  without
notice.
By    publication    of    this    standard,    Semiconductor
Equipment and Materials International (SEMI) takes no
position  respecting  the  validity  of  any  patent  rights  or
copyrights   asserted   in   connection   with   any   items
mentioned  in  this  standard.  Users  of  this  standard  are
expressly advised that determination of any such patent
rights  or  copyrights,  and  the  risk  of  infringement  of
such rights are entirely their own responsibility.

Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI D34-0703 © SEMI 2003 1
SEMI D34-0703
TEST METHOD FOR MEASUREMENT OF FPD POLARIZING FILMS
This  test  method  was  technically  approved  by  the  Global  Flat  Panel  Display  Committee  and  is  the  direct
responsibility  of  the  Japanese  FPD  Materials  and  Components  Committee.  Current  edition  approved  by  the
Japanese Regional Standards Committee on April 28, 2003.  Initially available at www.semi.org May 2003;
to be published July 2003.
1  Purpose
1. 1              This       standard       establishes       implementation
guidelines  for  the  measurement  of  visual  appearance,
thickness, and optical characteristics of FPD Polarizing
Films.  These methods can be applied in manufacturing,
quality control, and research and development.
2  Scope
2. 1  This document specifies measurement methods.
2. 2  Specifies     measurement     methods     for     visual
appearance  (dot  defects,  line  defects,  visual  exclusion
area),     thickness,     optical     characteristics     (single
transmittance,        parallel        transmittance,        cross
transmittance,    UV    cut    performance,    polarization
efficiency,  hue  a,  b  and  hue  a*,  b*  and  haze)  of
polarizing films.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  Japan Industry Standards (JIS)
1

JIS     K7105
2
ó     Testing     methods     for     optical
characteristics of plastics
JIS  Z8701
3
ó  Colour  specification  --  The  CIE  1931
standard   colorimetric   system   and   the   CIE   1964
supplementary standard colorimetric system
JIS  Z8720
4
ó  Standard  Illuminants  and  sources  for
colorimetry


1  Japan Standards Association(JSA)  4-1-24 Akasaka, Minato-ku,
Tokyo, 107-8440 Japan. Tel: +81-3-3583-8000, E-mail:
webmaster@jsa.or.jp,  http://www.jsa.or.jp
2 English version available.
3 Related International Standards: CIE 15.2, ISO/CIE 10526: CIE
standard colorimetric illuminants, ISO/CIE 10527: CIE standard
colorimetric observers; Commission Internationale de líEclairage,
Kegelgasse 27, A-1030 Vienna, Austria. Tel: +43-1-714-31-87-0;
International Organization for Standards(ISO), 1, rue de Varembe,
Case, postale 56 CH-1211 Geneva 20, Switzerland. Tel: +41-22-749-
01-11, E-mail: central@iso.ch,  http://www.iso.ch
JIS   Z8723
5
ó   Methods   for   visual   comparison   of
surface colours
JIS  Z8729
6
ó  Colour  specification  --  CIE  LAB  and
CIE LUV colour spaces
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Terminology
None.
5  Definitions of Measured Object and
Summary of Measurement Methods
5. 1  Visual Appearance of Polarizing Film (Dot
Defects)
5. 1.1  Definition of Defect Size
5. 1.1.1  Non-White  Spot  ó  Points  that  can  be  verified
visually  during  reflection  inspection  and  transmission
inspection.    Size  is  defined  by  measuring  the  long  side
and short side of the core section and taking their mean
value (Φ).
5. 1.1.2  White Spot   ó   Points   that   can   be   verified
visually  during  Cross-Nicol  transmission  inspection.
Size  is  defined  by  measuring  the  long  side  and  short
side  of  the  core  section  and  taking  their  mean  value
(Ф).


Ａ




Ｂ


φ

＝

（

Ａ＋

Ｂ

）／２


Figure 1
Definition of Defect Size (Dot Defect)



4 Related International Standards: ISO/CIE 10526: CIE standard
colorimetric illuminants
5 Related International Standards: ISO/DIS 3668: Paints and
varnishes ñ Visual comparison of the colour of paints
6 Related International Standards: Not Applicable; English version
not available.


SEMI D34-0703 © SEMI 2003 2
5. 1.2  Defect Measurement (Inspection) Method   ó
Observe defects under fluorescent light (600ñ1600 lux),
using  either  reflection,  transmission,  or  Cross-Nicol
transmission inspection, or a combination of the above,
at approximately 30 cm from the sample.
5. 1.2.1            Reflection      Inspection:      Conduct      on      a
blackboard, using fluorescent light.
5. 1.2.2        Transmission    Inspection:        Conduct    on    a
backlight
5. 1.2.3    Cross-Nicol:  Place  a  reference  polarizing  film
on  a  backlight,  and  conduct  transmission  inspection  in
transmission inspection Cross-Nicol state.
5. 2  Polarizing Film Visual Appearance (Line Defects)
5. 2.1  Defect Size Definition
5. 2.1.1  Line defects visually detected during reflection,
transmission, or Cross-Nicol inspection.  Size is defined
by measuring the length of the long side and short side.

Ｗ
L

Figure 2
Definition of Defect Size (Line Defect)

5. 2.2  Defect Measurement (Inspection)   Method   ó
Observe  defects  under  fluorescent  light,  using  either
reflection,  transmission,  or  Cross-Nicol  transmission
inspection,    or    a    combination    of    the    above,    at
approximately 30 cm from the sample.
5. 2.2.1            Reflection      Inspection:      Conduct      on      a
blackboard, using fluorescent light.
5. 2.2.2        Transmission    Inspection:        Conduct    on    a
backlight
5. 2.2.3    Cross-Nicol:  Place  a  reference  polarizing  film
on  a  backlight,  and  conduct  transmission  inspection  in
transmission inspection Cross-Nicol state.
5. 3  Polarizing Film Visual Appearance    (Visual
Exclusion Area)
5. 3.1  Definition
5. 3.1.1      L   of   the   Visual   Exclusion   Area   is   the
measurement  of  the  distance  from  each  side  of  the
polarizing film.






Ｌ




Figure 3
Definition of Visual Exclusion Area

5. 4  Polarizing Film Thickness
5. 4.1  Thickness Definition
5. 4.1.1          Thickness,     excluding     the     thickness     of
protective film and separate film.
5. 4.2  Thickness Measurement Method
5. 4.2.1    Measured  using  a  thickness  gauge  that  can
measure to 0.001 mm.
5. 5  Polarizing Film Optical Characteristics
5. 5.1  Definition of Single   Transmittance   (Ty)   and
Measurement Method
5. 5.1.1    Value  of  Transmittance  of  1  polarizing  film,
visibility   corrected   (JIS   Z8701)   by   supplementary
standard illuminant C (JIS Z8720)
7
, 2° range of view.
5. 5.1.2  Measurement Conditions
5. 5.1.2.1  Equipment: Spectrophotometer
5. 5.1.2.2        Measurement    Wavelength:    400ñ700    nm
(10 nm intervals)
5. 5.2  Definition and Measurement Method of Parallel
Transmittance (T
//
)
5. 5.2.1    Value  of  Transmittance  of  2  polarizing  films
placed  parallel  Nicol,  visibility  corrected  (JIS  Z8701)
by  supplementary  standard  illuminant  C  (JIS  Z8720),
2° range of view.
5. 5.2.2  Measurement Conditions
5. 5.2.2.1  Equipment: Spectrophotometer
5. 5.2.2.2        Measurement    Wavelength:    400ñ700    nm
(10 nm intervals)
5. 5.3  Definition and  Measurement  Method  for  Cross
Transmittance (T
⊥
)
5. 5.3.1    Value  of  Transmittance  of  2  polarizing  films
placed crossed Nicol, visually corrected (JIS Z8701) by
supplementary  standard  illuminant  C  (JIS  Z8720),  2°
range of view.


7 Commonly known as ìLight Source Cî. Abbreviated to ìIll.Cî.


SEMI D34-0703 © SEMI 2003 3
5. 5.3.2  Measurement Conditions
5. 5.3.2.1  Equipment: Spectrophotometer
5. 5.3.2.2        Measurement    Wavelength:    400ñ700    nm
(10 nm intervals)
5. 5.4  Definition and     Measurement     Method     for
Transmittance of each Wavelength
5. 5.4.1  Measured value of 1 polarizing film at specific
wavelengths (440 nm, 550 nm, 610 nm)
5. 5.4.2  Measurement Conditions
5. 5.4.2.1  Equipment: Spectrophotometer
5. 5.4.2.2    Measurement  Wavelength:  440  nm,  550  nm,
610 nm
5. 5.5  Definition and  Measurement  Method  of  UV  Cut
Performance
5. 5.5.1  Transmittance of 1 polarizing film, measured at
380 nm, is defined as UV cut performance.
5. 5.5.2  Measurement Conditions
5. 5.5.2.1  Equipment: Spectrophotometer
5. 5.5.2.2  Measurement Wavelength: 380 nm
5. 5.6  Definition and     Measurement     Method     of
Polarization Efficiency (Py)
5. 5.6.1    Expressed  using  the  following  formula,  where
T
A
is   transmittance   (visibility   corrected)   on   the
absorption   axis,   and   T
B
is   transmittance   (visibility
corrected) on the transmittance axis.
AB
AB
TT
TT
Py
+
−
=
×100 (%)
5. 5.6.2    The  same  value  from  the  above  equation  can
also  be  calculated  using  the  below  equation,  where  T
//

is parallel transmittance and T
⊥

is cross transmittance.
⊥
⊥
+
−
=
TT
TT
Py
//
//
×100 (%)
5. 5.6.3  Measurement Conditions
5. 5.6.3.1  Equipment: Spectrophotometer
5. 5.6.3.2        Measurement    Wavelength:    400ñ700    nm
(10 nm intervals)
5. 5.7  Definition and Measurement Method for Hue a*,
b*
5. 5.7.1    Polarizing  film  transmittance  value  calculated
in accordance with JIS Z8729.
5. 5.7.2  Measurement Conditions
5. 5.7.2.1  Equipment: Spectrophotometer
5. 5.7.2.2    Measurement  Wavelength:  400~700  nm  (10
nm intervals)
5. 5.8  Definition and Measurement Method for Hue a, b
5. 5.8.1      Visibility   corrected   (JIS   Z8701)   value   by
supplementary  standard  illuminant  C  (JIS  Z8720),  2°
range  of  view,  calculated  using  the  tristimulus  values
(X, Y, Z) from the below formula.

()
Y
YX02.15.17
a
−
=


()
Y
Z847.0Y0.7
b
−
=
5. 5.8.2  Measurement Conditions
5. 5.8.2.1  Equipment: Spectrophotometer
5. 5.8.2.2        Measurement    Wavelength:    400ñ700    nm
(10 nm intervals)
5. 5.9  Definition and Measurement Method for Haze
5. 5.9.1            Scattered      transmittance      and      all      line
transmittance,  measured  using  integrated  sphere  light
transmittance  measurement  equipment,  expressed  as  a
ratio.
H =
t
d
T
T
×100 (%)
T
d
: Scattered Transmittance（%）
T
t
: All line transmittance（%）
To be measured in accordance with JIS K7105.
6  Equipment
6. 1      Spectrophotometer   with   the   below   performance
shall be used.
6. 1.1        Optical    Wavelength:    Sub    10    nm    analysis
capability, adjustable between 380ñ780 mm.
7  Equipment Calibration
7. 1    Equipment  shall  be  calibrated  in  accordance  with
the manufacturerís manual.
7. 2      When,  due  to  calibration,  there  is  a  change  in  the
equipmentís performance, for example, linearity, phase
deviation, etc., a record shall be kept.
8  Related Document
8. 1  Measurement Method for Optical Characteristics of
Polarizing Films Using Crystal Rotation Method


SEMI D34-0703 © SEMI 2003 4
NOTICE: SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer's   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature,
respecting   any   materials   or   equipment   mentioned
herein.  These  standards  are  subject  to  change  without
notice.
By    publication    of    this    standard,    Semiconductor
Equipment and Materials International (SEMI) takes no
position  respecting  the  validity  of  any  patent  rights  or
copyrights   asserted   in   connection   with   any   items
mentioned  in  this  standard.  Users  of  this  standard  are
expressly advised that determination of any such patent
rights  or  copyrights,  and  the  risk  of  infringement  of
such rights are entirely their own responsibility.



SEMI D34-0703 © SEMI 2003 5
RELATED INFORMATION 1
MEASUREMENT METHOD FOR OPTICAL CHARACTERISTICS OF
POLARIZING FILMS USING CRYSTAL ROTATION METHOD
NOTICE:  This related information is not an official part of SEMI D34 and was derived from Otsuka Electronics
Co., Ltd.  This related information was approved for publication by full letter ballot procedures.
R1-1  Outline
R1-1.1  This method is not to use two polarizing film in normal, but to use polarizing prism and one polarizing film,
which  can  be  used  for  measurement  of  Single  transmittance  (Ty),  Parallel  transmittance  (T
//
),  Cross  transmittance
(T
⊥
), Transmittance of each wavelength, UV cut performance, Polarizing Efficiency (Py) and Hue a, b.
R1-1.2  Equipments are shown below. Measurement condition is same as standard method.
R1-2  Measurement Equipment

Light Source Lens Polarizing prism   Polarizing film   Spectrophotometer

R1-3  Formula
R1-3.1  K
A
(λ) is measured on condition of polarizing prism and polarizing film placed perpendicularly and K
B
(λ) is
measured on condition of polarizing prism and polarizing film placed parallel, where K
A
(λ) is transmittance light on
the absorption axis and K
B
(λ) is transmittance light on the transmittance axis.

K
A
(λ) = S
//
(λ) / R
//
(λ)
K
B
(λ) =S
⊥
(λ) / R
⊥
(λ)

S
//
(λ): Light intensity of transmittance on condition of polarizing film and polarizing prism placed parallel with
polarizing film.
R
//
(λ): Light intensity of transmittance without polarizing film on same condition of S
//
(λ).
S
⊥
(λ): Light intensity of transmittance on condition of polarizing film and polarizing prism placed perpendicularly
with polarizing film.
R
⊥
(λ): Light intensity of transmittance without polarizing film on same condition  of  S
⊥
(λ).

R1-3.2  Definition for Single Transmittance (Ty)
Single transmittance light Ts(λ):
Single transmittance Ty: Value of Ts(λ) visibility corrected (JIS Z8701).

2
)(K)(K
)(
BA
λλ
λ
+
=Ts



SEMI D34-0703 © SEMI 2003 6
R1-3.3  Definition for Parallel Transmittance (T
//
)
Parallel transmittance light Tp (λ):

2
)(K)(K
)(
2
B
2
A
λλ
λ
+
=Tp


Parallel transmittance T
//
: Value of Tp (λ) visibility
corrected (JIS Z8701).
R1-3.4  Definition of Cross Transmittance (T
⊥
)
Cross transmittance light Tc (λ): Tc (λ) = K
A
(λ) × K
B
(λ)
Cross transmittance T
⊥
:
Value of Tc (λ) visibility
corrected (JIS Z8701).
R1-3.5  Definition for     Transmittance     of     Each
Wavelength
Value of Single Transmittance Ts (λ) at the wavelength
of 440 nm, 550 nm and 610 nm.
R1-3.6  UV Cut Performance
Value of Single Transmittance Ts (λ) at the wavelength
of 380 nm.
R1-3.7  Definition for Polarizing Efficiency (Py)
R1-3.7.1      Value   calculated   from   following   formula
same    as    standard    method,    where    the    value    of
transmittance  light  K
A
(λ)  (visibility  corrected)  on  the
absorption  axis  is  transmittance  T
A
on  the  absorption
axis, and transmittance light K
B
(λ) (visibility corrected)
on  the  transmittance  axis  is  transmittance  T
B
on  the
transmittance axis.
(%)　100×
+
−
=
AB
AB
TT
TT
Py

R1-3.7.2  Same as the standard method, Py is calculated
from    the    Parallel    transmittance    (T
//
)    and    Cross
transmittance  (T
⊥
)  using  the  latter  formula  which  is
equivalent with the former formula.
(%)　100
//
//
×
+
−
=
⊥
⊥
TT
TT
Py

R1-3.8  Definition for Hue a. b.
R1-3.8.1    Value  calculated  from  below  formulas  same
as  standard  method  using  the  tristimulus  values  (X,  Y,
Z)  obtained  from  Single  spectra-transmittance  Ts  (λ)
visibility corrected (JIS Z8701) by light source C at 2∞
range of view.
Y
YX
a
)02.1(5.17−
=

Y
ZY
b
)847.0(0.7−
=
R1-4  Related Documents
The Kogyo Zairyo Vol. 28 ñ7 P.37~P.45
NOTICE:      SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturerís   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature
respecting   any   materials   mentioned   herein.   These
standards are subject to change without notice.
The  userís  attention  is  called  to  the  possibility  that
compliance   with   this   standard   may   require   use   of
copyrighted  material  or  of  an  invention  covered  by
patent  rights.  By  publication  of  this  standard,  SEMI
takes  no  position  respecting  the  validity  of  any  patent
rights  or  copyrights  asserted  in  connection  with  any
item  mentioned  in  this  standard.  Users  of  this  standard
are  expressly  advised  that  determination  of  any  such
patent rights or copyrights, and the risk of infringement
of such rights, are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI D35-1103
E
© SEMI 2003 1
SEMI D35-1103
E

TEST METHOD FOR MEASUREMENT OF COLD CATHODE
FLUORESCENT LAMP (CCFL) CHARACTERISTICS
This  test  method  was  technically  approved  by  the  Global  Flat  Panel  Display  Committee  and  is  the  direct
responsibility  of  the  Japanese  Flat  Panel  Display  Committee.  Current  edition  approved  by  the  Japanese
Regional Standards Committee on August 8, 2003.  Initially available at www.semi.org October 2003; to be
published November 2003.
E
This standard was editorially modified in November 2004 to correct editorial errors. Changes were made to
multiple sections, figures, and tables.
1  Purpose
1. 1  The purpose of this document is to standardize the
method   for   measurement   of   electrical   and   optical
characteristics    of    cold    cathode    fluorescent    lamp
(CCFL).
2  Scope
2. 1  This  method  is  to  be  used  by  CCFL  suppliers  and
users  to  evaluate  quality  of  products  as  well  as  items
under development.
2. 2  This  method  shall  be  used  in  general  for  CCFL  to
measure   the   initial   characteristics   of   CCFL   (single
item)  and  its  reliability  after  tests,  and  to  carry  out
quality inspection for incoming and outgoing CCFLs.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  JIS Standards
1

JIS Z 8113 — Lighting vocabulary
3. 2  IEC Standards
2

IEC  60050  (845)  —  Lighting,  Section  1:  Radiation,
Quantities and Units, 3: Colorimetry
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.


1  Japanese Standards Association, 1-24, Akasaka 4 Chome, Minato-
Ku, Tokyo, 107-8840 Japan.  Tel: +81-3-3583-8000, E-mail:
webmaster@jsa.or.jp,  http://www.jsa.or.jp
2  International Electrotechnical Commision(IEC), 3, rue de
Varembé  , P.O. Box131 CH-1211 Geneva 20, Switzerland. Tel: +41-
22-919-02-11, E-mail: iec@iec.ch,  http://www.iec.ch
4  Terminology
4. 1  Abbreviations and Acronyms
4. 1.1  CCFL — Cold Cathode Fluorescent Lamp
4. 2  Definitions
4. 2.1  effective  emission  area  —  an  area  (length)  in
which  a  certain  percentage  of  luminance  against  the
luminance  of  a  central  part  is  maintained  with  almost
even luminance distribution (LE[mm]).
4. 2.2  lamp current — effective current inside the lamp
(IL[mArms]).  (The GND side shall be measured.)
4. 2.3  lamp  voltage  —  effective  voltage  across  both
ends  (between  two  electrodes)  of  a  lamp  at  rated  lamp
current (VL[Vrms]).
4. 2.4  lamp  wattage  —  a  product  of  the  lamp  current,
lamp  voltage  and  a  power  factor.  A  reference  value
(W[Wrms]).
4. 2.5  luminance stabilization time — the time to reach
a  certain  percentage  of  the  luminance  of  a  central  part
(Ts[min.]).
4. 2.6  stable  discharge  voltage  —  effective  voltage  at
lamp   ends   (between   two   electrodes)   when   a   main
discharge starts (Es[Vrms]).
5  Summary of Method
5. 1  Warm  up  the  measuring  equipment  for  a  specified
period  of  time  to  stabilize  (according  to  the  instruction
manual of measuring equipment).
5. 2  Keep the lamp wall temperature of a CCFL and the
ambient   temperature   in   equilibrium.   The   ambient
temperature shall be stable.
5. 3  Set the CCFL on the measuring equipment.
5. 4  Adjust  the  point  of  measurement  (viewing  angle),
focus and distance.
5. 5  Measure the stable discharge voltage.
5. 6  Turn on the CCFL by applying a rated current and
measure the lamp current when it is stable.


SEMI D35-1103
E
© SEMI 2003 2
5. 7  Measure  the  lamp  voltage  when  the  rated  lamp
current is stable.
5. 8  Measure  the  luminance  and  chromaticity  when  the
rated lamp current is stable.
5. 9  Turn   off   the   CCFL   and   remove   it   from   the
measuring equipment.
5. 10  Refer   to   Sections   9.3   and   9.4   regarding   the
measurement   of   the   effective   emission   area   and
luminance stabilization time.
6  Apparatus
6. 1  Electrical    Apparatus    —    Choose    measuring
equipment   to   use   from   the   following   devices   and
specify  which  devices  were  used,  and  also  specify  a
measuring    circuit,    lighting    frequency,    rating    of
electrical   wire   and   its   length   in   the   report.      The
electrical  (and  optical)  characteristics  of  CCFL  depend
on the frequency of the lighting circuit.
6. 1.1  Power Supply — For the lighting of CCFL, use a
power    supply    unit    that    provides    the    substantial
sinusoidal  waveform  and  frequency  of  50–60  kHz.
Also,  use  the  combination  of  a  Stabilized  DC  power
supply  unit  and  an  inverter,  or  a  power  supply  unit
designed   specially   as   an   integrated   type   (special
purpose).   The   output   voltage   of   either   of   them   is
variable   but   the   variability   shall   not   affect   the
measurement.
6. 1.2  Meter  —  Use  a  meter  that  indicates  true  AC
voltage  values  for  measurement.  The  meter  built  in  a
special  purpose  power  supply  unit  shall  indicate  true
values as well.
6. 1.3  Circuit   —   The   circuit   to   measure   electrical
characteristics shall conform to Figure 1 or Figure 2.
6. 1.4  Specify the ratings and lengths of electrical wires
that  connect  each  meter  and  lamp.    Since  the  wires
produce  leakage  current  due  to  stray  capacitance  and
the  amount  differs  according  to  the  lengths,  set  the
wires as short as possible and do not bundle them.
6. 2  Optical    Measuring    Equipment    —    Choose    a
measuring equipment to use from the following devices
and  specify  which  devices  were  used,  and  also  specify
the  measuring  distance,  viewing  angle,  and  ambient
temperature  in  the  report.  The  optical  (and  electrical)
characteristics  of  CCFL  depend  on  the  ambient  (lamp
wall) temperature.
6. 2.1  Black  Box  for  Measurement  —  The  black  box
used  to  measure  shall  be  so  designed  that  the  lamp
surface  may  not  be  affected  by  wind.  The  delustered
black paint shall be applied on the inside of the box so
that  it  may  not  be  affected  by  the  background  color  or
reflected  light  when  the  luminance  is  measured.  In
addition,   in   order   not   to   be   affected   by   stray
capacitance,  non-conductive  materials  shall  be  used.
For  the  installation  of  a  CCFL  in  the  box,  a  fixing
method  shall  be  employed  for  avoiding  the  impact  to
the lamp wall temperature distribution at lighting.
mA
+
GND
±
Inverter
mA
CCFL
V
mA
V
Themocouple ammeter
True value voltmeter
High-voltage prove

Figure 1
Combination of Stabilized DC Power Source and Inverter



SEMI D35-1103
E
© SEMI 2003 3
mA
～
V
～
CCFL
Exclusive power supply
12pF
mA
～
V
～
Themocouple ammeter
True value voltmeter

Figure 2
Exclusive Power Supply
6. 2.2  Meter — Use a spectroradiometer or colorimeter
to  measure  the  luminance  and  chromaticity.  Keep  the
spectroradiometer  under  control  of  calibration  system
with  the  meter  of  national  standard  and  traceability.
Calibrate  the  colorimeter  in  such  a  way  that  it  can
reproduce   the   luminance   value   of   a   master   CCFL
obtained  by  a  calibrated  spectroradiometer.  Since  each
colorimeter has the instrumental error and changes with
the  passage  of  time,  the  calibration  is  necessary  for
daily  use.  For  the  calibration,  a  master  CCFL,  which
has  the  emission  spectrum  value  close  to  that  of  a
CCFL to be measured, shall be used.
6. 2.3  Diagram  for  Measurement  —  The  diagram  for
optical measurement shall conform to Figure 3.
7  Measurement Conditions
7. 1  The   place   for   measurement   shall   be   kept   at
25 ± 2°C for ambient temperature and 30–85%RH.  The
temperature  fluctuation  shall  be  within  1°C  and  if  the
temperature   is   specified,   the   measurement   shall   be
carried out at such temperature. There shall be no wind
or vibration that may affect the measurement.
7. 2  For     the     measurement     of     luminance     and
chromaticity,   arrange   the   situation   where   ambient
reflected light may not affect it or such can be ignored.
7. 3  For   the   measurement   of   voltage,   points   to   be
measured   shall   be   specified   in   circuit   diagrams.
Measured  values  may  vary  by  the  impact  of  ballast
capacitor   or   probe   based   upon   whether   the   points
measured  are  located  at  an  inverter  transformer  side  or
a  lamp  side  (or  located  at  front  or  rear  side  of  ballast
capacitor).
7. 4  The  electrostatic  capacity  of  a  high  voltage  probe
used  to  measure  a  voltage  shall  be  so  small  that  the
impact to the probe by leakage current may be less and
it shall be specified.
8  Test Specimen
8. 1  Use  a  CCFL  in  which  the  wall  temperature  and
ambient  temperature  are  kept  in  equilibrium  before
lighting.    Especially    when    measuring    the    stable
discharge  voltage  again  after  the  first  measurement,
carry out after the lamp has been in equilibrium on both
temperatures,  the  lamp  wall  temperature  and  ambient
temperature.
8. 2  Fix a CCFL horizontally along its long side on the
jig  of  the  above-mentioned  equipment  and  this  method
shall not affect the temperature distribution on the wall.
The measured point shall be measured in the air.


SEMI D35-1103
E
© SEMI 2003 4
Distance of
measurement
Windle ss st at e
Spectroradiometer

or Colorimeter
Distance of measurement
CCFL
Spectroradiometer

or Colorimeter

Figure 3
Optical Characteristics Measurement

9  Procedure
9. 1  Measurement of Electrical Characteristics
9. 1.1  Measurement  of  Stable  Discharge  Voltage  —
Apply  zero  or  very  low  voltage  to  the  both  ends  of  a
lamp (between two electrodes) and increase the voltage
gradually  (slide-up).  The  lamp  starts  to  discharge  after
the   voltage   reaches   a   certain   value.      Furthermore,
increase  the  voltage  gradually  (slide-up)  and  measure
the    potential    difference    between    the    lamp    ends
(electrodes)  as  a  stable  discharge  voltage  when  a  main
discharge starts.
9. 1.2  Measurement  of  Lamp  Current  —  Adjust  the
output voltage of power supply unit to gain a specified
lamp   current.   Measure   the   lamp   current   at   GND
terminal  when  it  becomes  stable  at  a  specified  value.
Record  the  preset  voltage  of  the  power  supply  as  well.
(Refer to Figure 1 or Figure 2.)
9. 1.3  Measurement  of  Lamp  Voltage  —  Measure  the
potential difference between both ends (electrodes) of a
lamp as a lamp voltage when the lamp current becomes
stable at a specified lamp current.  If the lamp current is
affected  when  a  probe  is  connected,  adjust  the  lamp
current  to  make  it  a  specified  lamp  current.    Measure
the lamp current after it becomes stable.
9. 1.4  Lamp  Wattage  —  It  is  defined  as  a  product  of
lamp    current,    lamp    voltage    and    power    factor
(W = VL × IL × cosθ)   and   expressed   as   a   reference
value.  When  the  phase  difference  between  the  lamp
current  and  lamp  voltage  can  be  ignored  and  if  such
situation  is  specified,  the  product  of  the  lamp  current
and lamp voltage (W = VL × IL) may be expressed as a
reference value.
9. 2  Measurement of Optical Characteristics
9. 2.1  Point  of  Measurement  —  The  point  is  the  side
surface of a lamp, which is within the range of viewing
angle (black circle) of a measuring instrument. The area
of  measurement  is  the  central  part  of  the  lamp.  The
point of measurement shall be so small relatively to the
inner  diameter  of  the  lamp  that  the  dislocation  of  the
point  may  not  vary  the  luminance  and  chromaticity.
The point of measurement is a cylindrical surface but it
could   be   regarded   as   a   plain   surface   due   to   the
smallness.    (See  Figure  5.)  The  dispersion  due  to
dislocation of a point of measurement is smaller within
the  range  that  is  less  than  or  equal  to  50%  of  the  inner
diameter. The luminance decreases in the other range.
9. 2.2  Distance  of  Measurement  —  The  distance  shall
be  from  a  lamp  surface  to  be  measured  to  a  light-
receiving  lens  surface  of  a  measuring  instrument.  The
size of viewing angle varies according to adjustment by
luminance  meter  and  the  distance  of  measurement,  set
the  distance  to  match  the  inner  diameter  mentioned
above.  When  measuring,  the  inner  surface  of  the  lamp
and the focal point shall be well matched (Figure 5). (If
the focal point of the luminance meter is displaced, the
luminance and chromaticity values will not be indicated
correctly.)
9. 2.3  Timing  of  Measurement  —  Measure  after  the
luminance  seems  stable  at  a  specified  lamp  current
(where  the  luminance  fluctuation  difference  is  within
± 3% of the stable luminance, for example). (See Figure
4. )


SEMI D35-1103
E
© SEMI 2003 5
M e asur e me nt  St ar t e d
±3%
Overcurrent
Lum inanc e
100%
0
S

Figure 4
Measuring Time of Optical Characteristics

Commentary  on  Figure  4:  The  CCFL  luminance  has  a  special  rising  property.    The  highest  luminance  and  stable
luminance vary by the combination of ambient temperature and lamp current and the transitions vary as well. This is
based upon the fact that the CCFL luminance depends on temperature and the generated heat by lighting affects it.
For this reason, the luminance varies until the lamp wall temperature becomes stable. Before the measurement, grasp
the special rising property of luminance and set the timing of measurement of the stable luminance.
9. 2.4  Measurement of Luminance — Set a spectroradiometer or a colorimeter vertical to a side to be measured and
measure  according  to  the  above-mentioned  instruction  of  measurement.  Avoid  shades  of  mercury  particles  in  the
lamp. (See Figure 5.)
Station Diame
t
Lamp insi
d
diamete
Lamp outsi
d
diamete
M ercury Grain
(Within 50%
inner diame
t
Station Diameter
(Within 50% of inner diameter)
Lamp inner
diameter
Lamp outer
diameter

Figure 5
Measuring Spot (Diameter) for Optical Characteristics

9. 2.5  Measurement  of  Chromaticity  —  Measure  in  the  same  manner  and  at  the  same  time  of  the  measurement  of
luminance.
9. 3  Measurement of Effective Length of Luminous Part — Measure when the luminance is fully stable at a specified
lamp  current  according  to  the  measuring  conditions  mentioned  above.  The  luminance  varies  greatly  around
electrodes  since  the  temperature  variation  is  big  among  points  of  measurement  due  to  high  temperature  of  a  lamp
wall. Sufficient aging shall be performed before measurement to avoid impacts of the change of passage of time to


SEMI D35-1103
E
© SEMI 2003 6
each point to be measured.  Fix the lamp and move the spectroradiometer or the colorimeter for better measurement
since the lamp wall temperature does not vary and so the luminance becomes stable in this way. (See Figure 6.)
100%
0
mm
Lum inanc e
Effective length of luminous part
70%

Figure 6
Measurement of Effective Length of Luminous Part

9. 4  Measurement  of  Luminance  Stabilization  Time  —
Use a CCFL in which the wall temperature and ambient
temperature  are  kept  in  equilibrium  before  lighting.
From  just  after  a  CCFL  is  turned  on  by  specified  lamp
current,  measure  the  luminance  changes  until  it  seems
stable  (where  the  luminance  fluctuation  difference  is
within ± 3% of the stable luminance, for example).
10  Reporting Results
10. 1  Report the following items:
10. 1.1  report date,
10. 1.2  test date,
10. 1.3  measuring  equipment  types,  and  conditions  of
use  (lighting  frequency,  rated  length  of  connecting
wire, distance of measurement, viewing angle, etc.),
10. 1.4  conditions    of    test    specimen    (size,    other
specifications, etc.),
10. 1.5  to  specify  item  names  and  necessary  entries  for
the  CCFL  outer  and  inner  diameters,  lamp  length  and
necessary specifications,
10. 1.6  conditions       of       measurement       (ambient
temperature, aging time, etc.),
10. 1.7  measurement   results   (electrical   and   optical
characteristics), and
10. 1.8  remarks (other notes).
11  Related Documents
Related   Information   1:   documents   regarding   main
discharge,
Related Information 2: dark characteristics, and
Related   Information   3:   precautions   for   measuring
method   (leakage   current,   lamp   wall   temperature,
temperature slide-up speed for master CCFL, etc.).
NOTICE: SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer's   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature,
respecting   any   materials   or   equipment   mentioned
herein.  These  standards  are  subject  to  change  without
notice.
By    publication    of    this    standard,    Semiconductor
Equipment and Materials International (SEMI) takes no
position  respecting  the  validity  of  any  patent  rights  or
copyrights   asserted   in   connection   with   any   items
mentioned  in  this  standard.  Users  of  this  standard  are
expressly advised that determination of any such patent
rights  or  copyrights,  and  the  risk  of  infringement  of
such rights are entirely their own responsibility.


SEMI D35-1103
E
© SEMI 2003 7
RELATED INFORMATION 1
STARTING VOLTAGE OF COLD CATHODE FLUORESCENT LAMP
(CCFL)
NOTICE: This related information is not an official part of SEMI D35 and was derived from Japan Backlight TF.
R1-1  Phenomenon of CCFL Discharge
Starting
R1-1.1  Although  the  phenomenon  of  CCFL  discharge
starting shows the similarity to that of low gas pressure
discharge  starting,  a  high  frequency  lighting  circuit
(inverter)  with  approximately  30–100  kHz  is  mostly
used   to   discharge   and   so   it   is   affected   by   stray
capacitance.
R1-1.2  When   the   secondary   voltage   of   inverter   is
stepping  up  from  a  sufficiently  low  voltage  gradually,
an  emission  area  appears  near  the  electrode  connected
to  higher  voltage  side.    (See  Figure  R1-1  1
st
Phase).
This   means   that   the   discharge   starts   between   the
electrode and ground level of discharge circuit through
the  stray  capacitance,  and  a  spark  after  dark  current
takes  place  in  the  discharge  space  in  the  tube.    In  the
discharge, the other electrode is the tube wall (glass or
fluorescent   substance);   the   formation   of   dielectric
barrier  discharge  and  the  existence  of  the  secondary
electron  supply  system  to  the  discharge  space  can  be
considered  and  thus  the  discharge  seems  sustainable.
Therefore,  the  emission  around  the  electrode  is  judged
to  be  the  emission  mainly  by  negative  glow  of  glow
discharge.
R1-2  From Discharge Starting to Stable
Lighting Mode
R1-2.1  After   the   discharge   takes   place   near   the
electrode  and  the  secondary  voltage  of  the  inverter
increases   gradually,   the   emission   area   near   the
electrode  grows  longer  accordingly.    (See  Figure  R1-
2. )  This means that a positive column is generated by
applied voltage to have such the length as corresponds
to the value of resistance based on the applied voltage.
When  the  voltage  is  applied  furthermore,  the  emission
area  (i.e.  positive  column)  between  two  electrodes  is
generated   finally.      (See   Figure   R1-3   2
nd
Phase.)
However,  if  the  tube  is  thin  and  long  and  the  stray
capacitance is relatively greater to the discharge circuit,
the   ratio   of   current   that   flows   through   the   stray
capacitance  is  still  large  at  this  phase.    With  the
increase  of  the  inverter  secondary  voltage,  the  ratio  of
current that flows in the tube also increases and most of
the current flows in the tube because the impedance of
discharge   path   decreases   on   the   contrary   due   to
negative characteristics of discharge.  (See Figure R1-4
3
rd
Phase.)
R1-2.2  Each voltage applied at these three phases may
be  called  starting  voltage  at  the  first  phase,  or  stable
discharge voltage or tube current at the third phase, for
example.  Sometimes it could be hard to distinguish the
second  phase  from  the  third  phase.    In  addition,  since
the second phase is hardly observed by the tube designs
(for the tube length, outer and inner diameters of tube,
pressure  and  composition  of  filler  gas,  and  peripheral
members of tube), it looks as if the first phase shifted to
the  third  phase  suddenly.    This  is  because  the  stray
capacitance  is  so  big  that  the  current  cannot  flow  into
the  tube,  the  discharge  surges  immediately  after  the
current  flows  into  the  tube,  the  impedance  of  the
discharge    path    decreases    due    to    the    negative
characteristics  and  a  large  amount  of  current  flows  in
the tube all of a sudden.
R1-2.3  From the viewpoint of discharge phenomenon,
the  voltages  applied  to  the  tube  at  the  first  and  third
phases are important.  Especially the voltage applied at
the  third  phase  should  be  noted  practically.    (The
voltage applied at the second phase may be noted also.)
R1-3  Cautions at Discharge Starting
R1-3.1  At   the   discharge   starting,   α   coefficient   of
discharge   gas   and   γ   coefficient   of   electrode   are
involved.    These  coefficients  contain  the  pressure  of
discharge   gas   (particle   density)   as   a   parameter.
Especially when the mercury is filled in, the control of
ambient  temperature  becomes  very  important  because
the  mercury  vapor  (particle  density)  pressure  changes
sensitively to the ambient temperature.
R1-3.2  In  addition,  the  lighting  circuit  is  usually  built
for AC, the reduction of unnecessary stray capacitance
base on frequency shall be required.  As the impact of
stray  capacitance  becomes  greater  especially  when  the
tube  is  thin  and  long,  sufficient  consideration  shall  be
given.



SEMI D35-1103
E
© SEMI 2003 8
~
Inverter
High voltage side
Ground
Electrode
Minimal discharge
Stray capacitance
~
Inverter
High voltage side
Ground
Electrode
Minimal discharge
Stray capacitance
~
Inverter
High voltage side
Ground
Electrode
Minimal discharge
Stray capacitance
~
Inverter
High voltage side
Ground
Electrode
Minimal discharge
Stray capacitance

Figure R1-1
1
st
Phase of CCFL Discharge Starting

~
Positive column
~
Positive column
~
Positive column

Figure R1-2
From 1
st
Phase to 2
nd
Phase of CCFL Discharge Starting

~~~~

Figure R1-3
2
nd
Phase of CCFL Discharge Starting

~~~

Figure R1-4
3
rd
Phase of CCFL Discharge Starting


SEMI D35-1103
E
© SEMI 2003 9
RELATED INFORMATION 2
DARK CHARACTERISTICS OF DISCHARGE LAMP
NOTICE:  This related information is not an official part of SEMI D35 and was derived from Japan Backlight TF.
R2-1  Start of Discharge Lamp
R2-1.1  When a discharge lamp is activated, there must
be  electrons  (initial  electrons)  in  the  discharge  space
generally.    In  order  to  start  up,  it  is  necessary  to  apply
an  electric  field,  accelerate  the  initial  electrons,  excite
and  ionize  gaseous  particles,  and  establish  discharges
(keep  up  discharges)  in  the  discharge  space.    At  that
moment, the initial electrons are said to have relation to
the   continuity   of   discharges   at   random,   and   the
combinations    of    the    status    of    a    lamp    when
manufactured,  history  of  on/off  of  lighting,  various
factors  of  a  discharge  lamp,  and  lighting  circuits  are
involved.
R2-1.2  For  these  reasons,  in  terms  of  the  start-up  of  a
discharge  lamp,  initial  electrons  are  required  and  there
are  probability  factors  to  be  considered,  and  so  the
discharge   start-up   time   delay   should   be   observed
statistically.
R2-2  Dark Characteristics of Discharge Lamp
and Remedy
R2-2.1  A  discharge  lamp  usually  starts  up  in  a  bright
place  even  when  the  initial  electron  source  is  not
provided especially.  It is considered that this is because
the   external   light   gives   energy   to   materials   (gas,
electrode,   etc.)   inside   the   discharge   space   to   emit
electrons    (photoelectrons)    as    an    initial    electron.
However,  in  order  to  activate  the  discharge  lamp  in  a
dark place, the photoelectron cannot be used.  There are
electron  sources  such  as  natural  radiation  as  the  other
initial electrons (cosmic rays and radian from the earth)
but  these  are  not  enough  to  get  initial  electrons  at
present.
R2-2.1.1  Since  the  initial  electrons  in  the  discharge
space  in  the  darkness  decrease  greatly,  the  discharge
start-up  time  delay,  which  is  from  the  voltage-applied
time  to  the  start-up  time,  tends  to  be  salient.    This  is
defined as dark characteristics.
R2-2.2  In  order  to  start  up  a  discharge  lamp  within  a
limited  time,  the  method  to  supply  positively  initial
electrons in a discharge space is needed.  For example,
regarding   a   fluorescent   lamp   for   ordinary   lighting
purpose,  its  negative  electrode  is  preheated  before  the
start-up. As a result, thermoelectrons, which are emitted
from  the  emitter  applied  to  the  negative  electrode,  are
used   as   an   initial   electron.   For   a   glow   starter,
bremesstrahlung  electrons  by  radioisotope  (RI)  built  in
the  electrodes  are  employed.    In  addition,  there  are
other  methods  such  as  applying  high-voltage  to  supply
electrons   from   the   electrodes   (field   emission)   and
supplying  photoelectrons  by  turning  on  another  light
source  (light  bulb)  located  nearby  a  discharge  lamp
before its start-up.
R2-2.3  In  terms  of  a  discharge  lamp  used  as  an  LCD
backlight,  the  conventional  remedies  have  not  been
utilized    because    it    must    have    compact    cathode
electrodes,    the    RI    is    hardly    used    from    the
environmental  view  point,  the  output  voltage  for  an
inverter  of  high-frequency  lighting  circuit  is  limited,
and  the  space  is  too  small  to  built  another  light  source
in   it.      Thus,   unique   methods   have   been   studied.
Nowadays,  the  followings,  such  as  exposing  a  metal
oxide  that  emits  exoelectrons
*1
in  the  discharge  space,
forming  spattering  layers
*2
on  the  wall  near  cathode
electrodes  by  lighting  a  discharge  lamp  for  a  certain
time,  and  making  a  compound  of  materials  with  low
work   function
*3
into   electrodes   or   placing   it   near
electrodes, are performed.
R2-3  Theory on Discharge Start-up Time Delay
R2-3.1  The  equation  on  the  discharge  start-up  time
delay is as follows.

τ = 1/(P·Q)   -----------------------------   (1)

where
τ: average discharge start-up time delay (sec)
P: percentage of one electron that discharges ( /particle)
Q: number of initial electrons (particle/sec)

R2-3.2  In  Q  factors  mentioned  before,  such  as  the
photoelectrons
*4
,   thermoelectrons   by   external   light,
electrons emitted by field emission, electrons by natural
radiation,  electrons  by  RI,  and  exoelectrons,  and  in  P
factors, such as the voltage applied to a discharge lamp,
filler  gas  pressure,  kind  of  gases,  electrode  materials,
impact  of  residual  impure  gases  and  concessionary
shape of electrode, are involved.
R2-3.3  Here,  if  a  maximum  value  “1”  is  set  to  P  by
adjusting a discharge lamp and lighting circuit and if at
least  one  particle  of  electron  per  second  exists  in  a
discharge  space,  τ  will  be  1  second.    Usually  P  is
considered  to  be  the  order  of  10
-3.
If τ  becomes
approximately 1 second, the initial electrons with order
of 10
3
particles per second will be required, and for 0.1


SEMI D35-1103
E
© SEMI 2003 10
second, approximately initial electrons with the order of
10
4
particles per second will be required.
R2-3.4  Measuring τ  under  various  conditions  helps  us
to  understand  the  dark  characteristics  and  improve  the
remedies.
*1:  When  a  material  emits  electrons,  the  energy
greater  than  work  function  must  be  given  to
electrons  in  the  material  but  here  the  electrons
are such energies emitted as low heat and light.
The  alpha  alumina  is  said  to  emit  exoelectrons
and  it  is  actually  used  as  an  initial  electron
source  for  a  cold  cathode  lamp.    However,  the
details are still unknown.
*2:       The    mercury    seems    to    interact    with    the
spattering   layer   to   create   the   exoelectrons
source.
*3:  The  cesium  (Cs)  and  the  like  with  low  work
function   applied   to   an   electrode   is   used   as
compound.
*4:  The  question  still  remains  if  photoelectrons  can
be   supplied   when   energy   more   than   work
function  is  given  to  a  discharge  lamp  material
by external light (visible light).  The electron by
external  light  may  be  also  considered  as  an
exoelectron.


SEMI D35-1103
E
© SEMI 2003 11
RELATED INFORMATION 3
PRECAUTIONS AGAINST MEASURING METHOD OF COLD
FLUORESCENT LAMP
NOTICE:  This related information is not an official part of SEMI D35 and was derived from Japan Backlight TF.
R3-1  Introduction
R3-1.1  The cold fluorescent lamp (CCFL) is turned on
usually  by  using  a  compact  DC/AC  convertible  power
supply  called  inverter.    The  CCFL  has  been  developed
with  top  priorities  such  as  a  narrow  diameter,  space-
saving shape and high brightness for its application and
so the inverter has been requested to have a low profile
space-saving shape with high efficiency as well.
R3-1.2  Understanding  these  requirements  are  satisfied
and   the   characteristics   such   as   high   voltage,   high
frequency  and  micro  current  are  compassable  as  trade-
off in the CCFL, we should handle it with care.

R3-2  Stray Capacitance and Leakage Current
R3-2.1  Stray Capacitance
R3-2.1.1  The    stray    capacitance    is    defined    as    a
characteristic  that  behaves  as  if  it  had  the  electrostatic
capacity that system does not provide and its volume is
too     unstable     to     be     measured     quantitatively
(unintentional   electrostatic   capacity   element).      If   a
formula  for  electrostatic  capacity  between  two  parallel
copper  wires  is  put  into  an  equation,  it  will  be  nearly
expressed as follows;

C = Q/V = (πε0)/(log ((d−a)/a) ------ (1)
where
C: electrostatic capacity (stray capacitance)
d: distance between wires
a: diameter of wire

R3-2.1.2  According  to  the  above-mentioned  equation
(1),  it  is  understood  that  the  stray  capacitance  does  not
affect  the  frequency  but  is  inversely  proportional  to
logarithm  of  the  distance  between  wires.    (This  means
that  the  closer  the  distance  between  high  potentials
becomes, the more the stray capacitance increases, and
the  longer  the  wire  becomes,  the  stray  capacitance
increases as well.)
R3-2.2  Leakage Current
R3-2.2.1  The  leakage  current  is  the  inverter  secondary
current   that   flows   to   the   above-mentioned   stray
capacitance.  (It equal to the inverter secondary current
except  for  that  of  CCFL.)    Suppose  “C”  is  the  stray
capacitance  around  CCFL  and  “I”  is  the  current  that
flows  to  “C”  and  sinusoidal  AC  voltage  is  applied,  the
bellow-equation is obtained.

I = ω·C·V = 2πf·C·V ------ (2)
where
I: leakage current (true AC current)
f: AC frequency
C: stray capacitance (electrostatic capacity)
V: tube voltage (true AC voltage)

R3-2.2.2  According  to  the  above-mentioned  equation
(2),  the  leakage  current  increases  proportionally  to  the
increase   of   the   frequency,   stray   capacitance,   or
potential difference.
R3-2.2.3  Since   the   stray   capacitance   and   leakage
current  increase  or  decrease  by  each  parameter  such  as
the  length  of  high  voltage  wire,  distance  between  the
wire  and  the  conductor  of  ground,  lighting  frequency
and   potential   difference,   it   is   recommended   that
measuring    conditions    should    be    specified    and
standardized as much as possible.
R3-3  Temperature Characteristics
R3-3.1  The   CCFL   is   quite   sensitive   to   mercury
temperature   characteristics   because   its   fluorescent
substance  emits  light  receiving  ultraviolet  rays  from
mercury particles as activation energy.
R3-3.2  If   the   temperature   of   mercury   particles   is
regarded  as  the  same  as  the  CCFL  wall  temperature
when  lighting,  and  suppose  the  tube  temperature  is
25°C   at   0°C   of   ambient   temperature   against   wall
temperature  at  50°C,  approximately  1/10  of  saturated
steam  pressure  difference  will  take  place  and  actual
luminance  of  the  tube  will  be  approximately  1/2.    On
the  contrary  for  the  high  temperature  side,  suppose  the
wall    temperature    is    100°C    against    the    ambient
temperature  70°C  the  steam  pressure  difference  which
is greater by 20 times will take place and the actual tube
luminance is approximately 2/3.
R3-3.3  In   this   manner,   the   temperature   and   tube
luminance  have  peak  characteristics  within  a  certain
temperature  range  because  the  partial  pressures  of  Ar,
Ne  and  Hg  have  the  optimum  density  against  the
lighting tube current.  When the temperature is low, the
luminance decreases due to the lack of absolute amount
of   ultraviolet   rays   caused   by   insufficient   mercury
molecules.


SEMI D35-1103
E
© SEMI 2003 12
R3-3.4  On  the  other  hand,  when  the  temperature  is
high,    the    mercury    molecule    density    goes    up
dramatically,    reabsorption    of    ultraviolet    rays    by
mercury  itself  takes  place,  the  amount  of  ultraviolet
rays  that  reach  the  fluorescent  substance  decreases  and
so  the  luminance  decreases  accordingly.    The  further
attention necessary is that the mass (thickness) of glass
tube is made as thin as possible because the CCFL has
been  developed  with  such  top  priority  as  to  have  the
narrow    diameter,    space-saving    shape    and    high
luminance.    For  this  reason,  the  heat  capacity  is  very
small,   which   means   the   inside   mercury   molecule
temperature  will  be  affected  greatly  by  heat  transfer
caused  by  interference  with  surrounding  members  and
cooling effect of convective wind to the glass.
R3-3.5  Since the luminance varies due to the impact to
the  glass  temperature  by  each  parameter  such  as  the
interference  of  surrounding  members,  contact  of  other
materials  and  cooling  effect  of  convective  wind,  it  is
recommended   that   measuring   conditions   should   be
specified and standardized as much as possible.

Tem p. vs M ercury vapor
0. 0001
0. 001
0. 01
0. 1
1
10
100
1000
0       100      200      300      400
Te mp.   (
°C
)
Vaper pressure
（
mmHg
）
Ambient Tem p. v s L u m inance
0
20
40
60
80
100
120
-40   -20    0     20    40    60    80    100
Ambient Tem p. (°C)
Lum inance variation
(% )
Luminance(100% at 25
°C
）
Tem p. vs M ercury vapor
0. 0001
0. 001
0. 01
0. 1
1
10
100
1000
0       100      200      300      400
Te mp.   (
°C
)
Vaper pressure
（
mmHg
）
Ambient Tem p. v s L u m inance
0
20
40
60
80
100
120
-40   -20    0     20    40    60    80    100
Ambient Tem p. (°C)
Lum inance variation
(% )
Luminance(100% at 25
°C
）

R3-4  Slide-up Speed
R3-4.1  The  status  where  a  main  discharge  starts  is
measured   for   the   measurement   of   stable   discharge
voltage   sliding   gradually   the   voltage   up   from   the
sufficiently  low  value.  Since  the  starting  point  of  main
discharge  may  vary  by  the  slide-up  speed,  a  special
attention should be paid.
R3-4.2  When  the  slide-up  speed  is  so  slow  that  the
ratio  of  partial  pressure  of  Ar,  Ne  and  Hg  shifts  to  the
condition  where  lighting  is  easily  performed  because
the   mercury   vapor   pressure   increases   by   the   heat
generation  caused  by  half-lighting,  the  main  discharge
may  begin  easily  compared  to  the  condition  at  low
CCFL temperature.
R3-4.3  Therefore,  when  measuring  the  CCFL,  these
conditions   should   be   specified   and   standardized   as
much as possible.
R3-5  Use of Master CCFL
R3-5.1  When  interrelating  the  spectroradiometer  and
colorimeter,  an  actual  CCFL  is  used  often  as  a  master
CCFL.
Precautions for such cases are
1) the registration date, production history, lighting
history  and  expiring  date  of  the  master  CCFL
should be specified and attached to it, and
2) the master CCFL should be kept such that there
shall    be    no    impact    to    reproduction    of
measurement.
R3-5.2  Since  this  document  is  positioned  as  a  related
document  to  standardized  documents,  the  contents  are
treated as “just for information”.
NOTICE: SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer's   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature,
respecting   any   materials   or   equipment   mentioned
herein.  These  standards  are  subject  to  change  without
notice.
By    publication    of    this    standard,    Semiconductor
Equipment and Materials International (SEMI) takes no
position  respecting  the  validity  of  any  patent  rights  or
copyrights   asserted   in   connection   with   any   items
mentioned  in  this  standard.  Users  of  this  standard  are
expressly advised that determination of any such patent
rights  or  copyrights,  and  the  risk  of  infringement  of
such rights are entirely their own responsibility.

Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction of
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.
