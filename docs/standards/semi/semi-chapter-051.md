---
title: "E88-1104 - ..."
description: "SEMI标准文档"
sidebar_label: "E88-1104 - ..."
sidebar_position: 510
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-051.pdf'
  chapter: 51
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/051.pdf"
  pdfSize="0.44MB"
  title="E88-1104 - ..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI E87.1-0702 © SEMI 2000, 2002 5
Variable Name Class Format
CarrierLocationMatrix                    SV                    L,n

# 1

1. L,2
1. LocationID
1


# 2

2. CarrierID
1

.
.
n. L,2
1. LocationID
n

2. CarrierID
n

LoadPortReservationState              DVVAL              51              (U1)
Enumerated as:
0 = NOT RESERVEED
1 = RESERVED
LoadPortReservationState
I
SV                 51             (U1)
Enumerated as:
0 = NOT RESERVED
1 = RESERVED
LoadPortReservationStateList        SV        L,n
1. LoadPortReservationState
1

.
.
n.LoadPortReservationState
N

LocationID DVVAL A[1-80]  (Conforms to restrictions of ObjID as specified in SEMI E39.1,
Section 6.)
LocationID
i
SV A[1-80]  (Conforms to restrictions of ObjID as specified in SEMI E39.1,
Section 6.)
PartitionCapacity                            DVVAL                            51
PartitionCapacity
i
SV                           51
PartitionID DVVAL A[1-80]  (Conforms to restrictions of ObjID as specified in SEMI E39.1,
Section 6.)
PartitionID
i
SV A[1-80]  (Conforms to restrictions of ObjID as specified in SEMI E39.1,
Section 6.)
PartitionType                                  DVVAL                                  A[1-64]
PartitionType
i
SV                                 A[1-64]
PortAssociationState                      DVVAL                      51                      (U1)
Enumerated as:
0 = NOT ASSOCIATED
1 = ASSOCIATED
PortAssociationState
i
SV                      51                      (U1)
Enumerated as:
0 = NOT ASSOCIATED
1 = ASSOCIATED
PortAssociationStateList                SV                 L,n
1.  PortAssociationState
1

.
.
n.  PortAssociationState
n

PortID                                             DVVAL                                             51
PortID
i
SV                                            51
PortStateInfo                                   DVVAL                                   L,2
1. PortAssociationState
2. PortTransferState


SEMI E87.1-0702 © SEMI 2000, 2002 6
Variable Name Class Format
PortStateInfo
i
SV                                  L,2
1. PortAssociationState
i

2. PortTransferState
i

PortStateInfoList                            SV                            L,n
1.  PortStateInfo
1

.
n.  PortStateInfo
n

PortTransferState                            DVVAL                            51                            (U1)
Enumerated as:
0 = OUT OF SERVICE
1 = TRANSFER BLOCKED
2 = READY TO LOAD
3 = READY TO UNLOAD
PortTransferState
i
SV                           51                           (U1)
Enumerated as:
0 = OUT OF SERVICE
1 = TRANSFER BLOCKED
2 = READY TO LOAD
3 = READY TO UNLOAD
PortTransferStateList                      SV                      L,n
1.    PortTransferState
1

.
.
n.    PortTransferState
n

Reason                                            DVVAL                                            51                                            (U1)
Enumerated as:
0 = VERIFICATION NEEDED
1 = VERIFICATION BY EQUIPMENT UNSUCCESSFUL
2 = READ FAIL
3 = IMPROPER SUBSTRATE POSITION
SlotMapStatus                                DVVAL                                51                                (U1)
Enumerated as:
0 = SLOT MAP NOT READ
1 = [SLOT] WAITING FOR HOST
2 = SLOT MAP VERIFICATION OK
3 = SLOT MAP VERIFICATION FAILED
SlotMap
DVVAL
L, n n= capacity (1...25)
1. Enumerated
2. Enumerated
3.
.
.
n
Each as
51 (U1)
Enumerated as:
0 = UNDEFINED
1 = EMPTY
2 = NOT EMPTY
3 = CORRECTLY OCCUPIED
4 = DOUBLE SLOTTED
5 = CROSS SLOTTED
UnAllocatedPartitionCapacity        DVVAL         51
UnAllocatedPartitionCapacity
i
SV       51


SEMI E87.1-0702 © SEMI 2000, 2002 7
7  SECS-II Attribute Definitions
7. 1  Carrier Object SECS-II Attributes Definitions
7. 1.1  The following are the SECS-II structure definitions for the E87 Carrier Object.
Table 5  Carrier Object Attribute Definitions
Attribute Name Attribute Data Form: SECS-II Structure
“ObjType”                                      1.                                      “Carrier”
“ObjID” 1. CARRIERID  (Conforms to the restrictions of ObjID as specified in SEMI E39.1,
Section 6.)
“Capacity” 51 (U1) Capacity
Capacity Range: 1..25
Capacity Examples: 1, 13, 25
“CarrierAccessingStatus”               51               (U1) CarrierAccessingStatus
CarrierAccessingStatus enumerated per Variable CarrierAccessingStatus
“CarrierIDStatus” 51 (U1) CarrierIDStatus
CarrierIDStatus enumerated per Variable CarrierIDStatus
“ContentMap” L, n             n=Capacity
1. L,2
1. 20 (A) LotID
2. 20 (A) SubstID
...
n. L,2
1. 20 (A) LotID
2. 20 (A) SubstID
SubstID conform to the restrictions of ObjID as specified in SEMI E39.1, Section 6.
“LocationID” 20 (A) LocationID
LocationID conforms to the restrictions of ObjID as specified in SEMI E39.1, Section 6.
“SlotMap” L, n           n=Capacity
1. 51 (U1) enumerated
...
n. 51 (U1) enumerated
enumerated per variable SlotMap
“SlotMapStatus” 51 (U1) SlotMapStatus
SlotMapStatus enumerated per Variable SlotMapStatus.
“SubstrateCount”                            51                            (U1) SubstrateCount
SubstrateCount Range: 0..25
SubstrateCount Examples: 1, 3, 21, 25
“Usage” 20 (A) Usage
Usage is equipment defined, examples: “TEST”, “DUMMY”, “PRODUCT”


NOTICE: SEMI makes no warranties or representations as to the suitability of the standard set forth herein for any
particular  application.    The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer’s  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature respecting any materials mentioned herein.  These standards are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that  compliance  with  this  standard  may  require  use  of  copy-righted
material  or  of  an  invention  covered  by  patent  rights.    By  publication  of  this  standard,  SEMI  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  item  mentioned  in  this
standard.  Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights, are entirely their own responsibility.

Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI E88-1104
E
© SEMI 1999, 2004 1
SEMI E88-1104
E

SPECIFICATION FOR AMHS STORAGE SEM (STOCKER SEM)
This specification was technically approved by the Global Information & Control Committee and is the direct
responsibility  of  the  North  American  Information  &  Control  Committee.  Current  edition  approved  by  the
North  American  Regional  Standards  Committee  on  July  11,  2004.    Initially  available  at  www.semi.org
September 2004; to be published November 2004.  Originally published September 1999; last published July

# 2004

2004.
E
This standard was editorially modified in September 2004 to correct a formatting error. Changes were made
to Table 6.
1  Purpose
1. 1  This  standard  establishes  a  Specific  Equipment
Model  (SEM)  for  AMHS  storage  equipment  (Stocker
SEM). The model consists of equipment characteristics
and behaviors that are to be implemented in addition to
the  SEMI  E30  fundamental  requirements  and  selected
additional capabilities.  The intent of this standard is to
facilitate  the  integration  of  Stocker  SEM  equipment
into  an  automated  (e.g.,  semiconductor  fabrication  and
flat panel display) factory. This document accomplishes
this by defining an operational model for Stocker SEM
equipment as viewed by a factory automation controller
(Host).   This   definition   provides   a   standard   host
interface   and   equipment   operational   behavior   (e.g.,
control,  state  models,  and  data  reports).  Several  topics
require  additional  activity  that  are  within  the  scope  of
this  standard:  queuing,  parallel  interface  for  carrier
transfer  (SEMI  E23),  stocker  controller  architecture,
and scheduling and transport of the transfer unit.
2  Scope
2. 1  The  scope  of  this  standard  is  limited  to  the  usage
and description of AMHS storage equipment (Stockers)
as  perceived  by  a  SEMI  Equipment  Communications
Standard 2 (SECS-II) host that complies with the GEM
model (as specified in Section 13).  It defines the view
of  the  equipment  through  the  SECS  communication
link.    It  does  not  define  the  internal  operation  of  the
equipment.    It  includes  a  specific  transfer  command
state  model  and  stocker  controller  state  model  as  the
basis for all equipment of this class.
2. 2  This document assumes that the GEM fundamental
requirements  and  selected  additional  capabilities  (as
specified in Section 13) have been implemented on the
Stocker SEM equipment.  It expands the GEM standard
requirements   and   capabilities   in   the   areas   of   state
models  (stocker  controller,  transfer  command,  carrier
and   stocker   crane   state   models),   collection   events,
alarm   documentation,   remote   commands,   data   item
variables, and material movement.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Limitations
3. 1  SEMI Standards Alignment
3. 1.1  The  GEM  (SEMI  E30)  model  was  used  as  the
basis   for   Stocker   SEM   requirements   definition   in
alignment with existing AMHS SEM Specifications.
3. 2  AMHS Storage Equipment Description
3. 2.1  This    standard    is    targeted    at    the    different
types/configurations    of    300    mm    AMHS    storage
equipment.  The term Stocker SEM equipment refers to
all   the   types   of   AMHS   storage   equipment.      The
equipment  types  may  have  fundamental  mechanical
differences.
3. 2.2  Stocker (configuration)
3. 2.2.1  A  Stocker  is  generally  an  AMHS  automated
storage  and  retrieval  device  used  to  provide  temporary
storage  of  carriers.    The  device  is  not  required  to
provide  temporary  storage  of  carriers  (for  example,
when  used  as  a  device  to  connect  multiple  IBSEM
devices  or  as  a  floor  to  floor  lifter).    Additionally,  any
number  of  physical  interfaces  may  exist  to  connect  the
stocker  with  external  devices  such  as:  Interbay  and/or
Intrabay  Transport  Systems,  Process  Equipment,  other
StockerSEM devices, Operator ports, etc.
4  Referenced Standards
4. 1  SEMI Standards
SEMI   E4   —   SEMI   Equipment   Communications
Standard 1 Message Transfer (SECS-I)
SEMI   E5   —   SEMI   Equipment   Communications
Standard 2 Message Content (SECS-II)
SEMI   E23   —   Specification   for   Cassette   Transfer
Parallel I/O Interface
SEMI E30 — Generic Model for Communications and
Control of Manufacturing Equipment (GEM)


SEMI E88-1104
E
© SEMI 1999, 2004 2
SEMI  E37  —  High-Speed  SECS  Message  Services
(HSMS) Generic Services
SEMI  E37.1  —  High-Speed  SECS  Message  Services
Single Selected-Session Mode (HSMS-SS)
SEMI   E84   —   Specification   for   Enhanced   Carrier
Handoff Parallel I/O Interface
4. 2  Other References
Harel,   D.,   “Statecharts:   A   Visual   Formalism   for
Complex Systems,” Science of Computer Programming
8  (1987) 231-274.
1

NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
5  Terminology
5. 1  Abbreviations and Acronyms
5. 1.1  AMHS — Automated Material Handling System
5. 1.2  BP — Buffer Port
5. 1.3  FOUP — Front Opening Unified Pod
5. 1.4  GEM — Generic Equipment Model
5. 1.5  IBSEM — InterBay/IntraBay Specific Equipment
Model
5. 1.6  ITS — Interbay or Intrabay Transport System
5. 1.7  LP — Loading Port
5. 1.8  OP — Output Port
5. 1.9  PGV — Person Guided Vehicle
5. 1.10  SC — Stocker Controller
5. 1.11  TCP/IP         —         Transmission         Control
Protocol/Internet Protocol
5. 1.12  TSC — Transport System Controller
5. 2  Definitions
5. 2.1  Automated   Material   Handling   System   —   an
automated   system   to   store   and   transport   materials
within the factory.
5. 2.2  automation    —    the    capability    of    managing
material and data within the factory.
5. 2.3  bidirectional  load  port  —  a  load  port  used  for
loading and unloading carriers.
5. 2.4  buffer  —  a  set  of  one  or  more  locations  for
holding carriers at the production equipment.
5. 2.5  buffer  port  —  special  buffer  port  location  on  a
stocker   output   shuttle.      Contains   carrier   presence


1  Elsevier Science, P.O. Box 945, New York, NY  10159-0945,
http://www.elsevier.nl/homepage/browse.htt

sensors so that the host can be notified when a carrier is
situated at this position.
5. 2.6  carrier —  a  container  with  one  or  more  fixed
positions  for  holding  substrates.  Examples  of  carriers
include FOUPs and open cassettes.
5. 2.7  carrier ID — a readable and unique identifier for
the carrier.
5. 2.8  FOUP—a closed carrier for holding wafers.
5. 2.9  host   —   the   factory   computer   system,   or   an
intermediate system, that represents the factory and the
user  to  the  equipment.    Refers  system  that  controls  or
supervises  the  Stocker  Controller  (SC)  throughout  this
document.
5. 2.10  independent  port  —  a  load  port  on  the  stocker
that is dedicated to input or output. It is considered that
the carriers can only be transferred in one direction.
5. 2.11  interbay  transport  system  —  a  transport  system
used   to   move   work-in-process   between   stockers   in
different parts of the factory.
5. 2.12  Intrabay   Transport   System   —   a   transport
system dedicated to one or more bays in the factory and
responsible   for   transferring   carriers   to   and   from
production  equipment.    ITS  consists  of  the  physical
units  of  the  system  (e.g.,  vehicles,  nodes,  docking
stations),  the  low-level  unit  controllers,  and  a  system-
level  controller.    ITS  excludes  factory  floor  storage
systems  (stockers), but includes any short-term storage
integral  to  the  system,  such  as  storage  locations  within
an  overhead  track  system  that  are  accessible  only  to
units of the particular ITS.
5. 2.13  load   port   —   the   interface   location   on   the
equipment where carriers are transferred.
5. 2.14  loading  port  —  user  or  vehicle  accessible  port
location  on  a  stocker  output  shuttle.    Contains  carrier
presence sensors so that the host can be notified when a
carrier is situated at this position.
5. 2.15  output  port  —port  location  on  a  stocker  output
shuttle,   typically   accessible   by   the   stocker   crane.
Contains carrier presence sensors so that the host can be
notified when a carrier is situated at this position.
5. 2.16  process  equipment  —  equipment  used  to  make
semiconductor  devices.    This  excludes  metrology  and
material handling equipment.
5. 2.17  production  equipment  —  equipment  used  to
produce    semiconductor    devices,    including    wafer
sorting,    process,    and    metrology    equipment    and
excluding material handling equipment.


SEMI E88-1104
E
© SEMI 1999, 2004 3
5. 2.18  Stocker    Controller    —    stocker    Equipment
Controller   that   communicates   with   the   host   and
represents the system as the equipment.
5. 2.19  stocker    crane    —    stocker    transfer    agent
specialized   for   the   movement   of   carriers   between
shelves and input and output port locations.
5. 2.20  stocker   equipment   —   an   individual   stocker
viewed as a single piece of equipment, with distributed
components  and  distributed  control,  as  illustrated  in
Figure 1.  The stocker controller communicates with the
host  using  HSMS  and  GEM  and  represents  the  system
as  an  equipment.  The  factory  may  require  more  than
one type of stocker.
5. 2.20.1  Communications     with     transport     system
equipment  may  require  a  low-level  handshake  with  a
transport   unit   directly   involved   in   the   transfer   of
material  (such  as  a  vehicle  or  a  docking  station  on  an
overhead track).
5. 2.20.2  Communications  between  the  various  stocker
units and controllers are proprietary to the supplier.
Stocker
Controller
internal proprietary
communications
Factory Host
Stocker
Equipment
host/equipment
communications
factory network
Stocker
Unit
Stocker
Unit

Figure 1
Example of Stocker Equipment

5. 2.21  stocker  shelf  —  locations  within  the  stocker
equipment  to  store  carriers.    These  locations  exclude
load ports.
5. 2.22  stocker  unit  —  a  physical  component  of  the
stocker  system,  such  as  a  stocker  crane,  ID  reader,
wafer sensor, shuttle port, etc.
5. 2.23  swapping  port  —  a  load  port  on  the  stocker
capable  of  handling  single  load  and  unload  of  carriers
or simultaneous replace of carriers.
5. 2.24  transfer  agent  —  a  component  of  equipment
specialized  to  the  movement  of  transfer  objects  from
place  to  place  within  a  factory.    May  be  of  different
types  with  widely-differing  characteristics.    Examples
are   fixed-arm   robots,   robot   arms   on   fixed   tracks,
overhead   gantries   or   even   systems   containing   a
heterogeneous   collection   of   other   transfer   agents.
Humans may also act as transfer agents.
5. 2.25  transfer  completed  port  —  the  destination  port
specified in a transfer command.
5. 2.26  transfer port — point on the transport system at
which  a  change  of  equipment  ownership  of  the  carrier
occurs.
5. 2.27  transfer   unit   —   the   element   of   movement
(assemblage  of  carriers)  of  the  ITS  that  consists  of  a
maximum  number  of  carriers  allowed  in  a  specific
transfer command:
• AA is the maximum number of carriers allowed for
acquire at the transfer source.
• BB is the maximum number of carriers allowed for
deposit at the transfer destination.
• CC is the maximum number of carriers allowed for
transfer in one transport vehicle.
5. 2.27.1  The  maximum  size  of  the  transfer  unit  is  the
minimum of AA, BB, and CC.
5. 2.27.2  For purposes of the Stocker SEM, the transfer
unit is limited to one carrier.
5. 2.28  transport  system  —  the  component  of  AMHS
that  moves  material  from  one  part  of  the  factory  to
another.
5. 2.29  transport  unit  —  a  physical  component  of  a
transport  system,  such  as  a  vehicle,  node,  or  docking
unit.
5. 2.30  zone — a logical assignment referencing a set of
one  or  more  locations.  A  stocker  can  have  several
logical   zone   assignments.   For   example,   a   specific
stocker may have 2 zones defined as LEFT_ZONE and
RIGHT_ZONE.  The  assignment  of  zones  is  specific  to
the  Stocker  SEM  equipment  supplier  and  it  may  be
desirable  for  the  supplier  to  remain  flexible  in  the
assignment  of  zones  so  that  it  could  be  configured  to
meet  the  specific  requirements  of  different  users.    A
specific zone may only contain shelf locations or ports,
but not both.  A location may be in at most one zone.
6  Overview and Assumptions
NOTE 1:  This   section   has   been   included   as   background
information to help clarify requirements.
6. 1  Destination Control (to Shelf or to Output Port)
6. 1.1  The  destination  is  controlled  by  Host  when  the
carrier is input to the stocker (i.e., the carrier enters the
stocker   domain).   The   destination   of   the   transfer
command is required.  It would be invalid for the Host
to   issue   a   transfer   command   to   the   SC   without
including a valid destination.


SEMI E88-1104
E
© SEMI 1999, 2004 4
6. 1.2  Output to the Interbay Output Port
6. 1.2.1  The   destination   for   a   transfer   command   to
move  a  carrier  to  an  interbay  output  port  must  be  a
loading  port.    It  is  the  responsibility  of  the  Host  to
ensure  that  sufficient  capacity  exists  in  the  destination
stocker  when  delivering  from  a  source  stocker  to  a
destination   stocker   (i.e.,   an   interbay   move).      For
example,  it  would  be  the  responsibility  of  the  Host  to
check the remaining capacity of the destination stocker
prior to issuing the transfer command to send the carrier
to the interbay output port of the source stocker.
6. 1.3  Output to the Intrabay Output Port
6. 1.3.1  The   destination   for   a   transfer   command   to
move  a  carrier  to  an  intrabay  output  port  must  be  a
loading port.
6. 1.4  Store to the Stocker Shelf
6. 1.4.1  The  specific  stocker  shelf  location  is  to  be
controlled  by  the  Stocker  Controller    (SC).    The  Host
does not specify a shelf ID in a transfer command.  The
Host sends the name of a zone as the destination in the
transfer command
6. 1.4.2  The   carrier   is   stored   to   a   stocker   shelf
temporarily   when   the   Host   requested   output   port
destination is occupied. This is the responsibility of the
Stocker  Controller.  The  carrier  count  of  the  stocker  is
incremented  due  to  this  temporary  storage  (i.e.,  the
current capacity decreases).
6. 1.4.3  For    multi-crane    stockers,    the    carrier    is
temporarily  stored  to  a  stocker  shelf  when  the  source
and  destination  is  not  accessible  by  the  same  stocker
crane.   This   is   the   responsibility   of   the   Stocker
Controller. The carrier count of the zone containing the
location   where   the   carrier   is   temporarily   stored   is
incremented  due  to  this  temporary  storage  (i.e.  the
current capacity decreases).
6. 2  Quantity    Control    in    the    Stocker    (Capacity
Planning)
6. 2.1  The   number   of   carriers   in   the   stocker   is
controlled by the Host.  A list of carrier database entries
in the specified stocker’s SC database will be available
to the Host upon request via a remote command.
6. 3  Number of Stocker Cranes
6. 3.1  No  Limitation.    May  be  zero  for  systems  that  do
not  include  a  crane.    Host  does  not  control  the  stocker
crane directly.
6. 4  Port Type
6. 4.1  The  independent  input  port  and  the  independent
output  port  are  required  for  the  Stocker  SEM.    The
swapping type is considered as an independent port.
6. 5  Plural Sets of Input/Output Ports
6. 5.1  Plural sets of Input/Output ports connected to the
interbay    or    intrabay    transport    system    must    be
considered.    (This  would  be  considered  a  Multi-loop
type  interface  connection  to  the  stocker.)  Examples  of
plural sets of interfaces are as follows:
• Main Loop/Sub Loop,
• Right-handed rotation/Left-handed rotation, and
•
Double Track (i.e., Stacked Track).
6. 6  Carrier ID Reader
• Manual    Input    Port:    Carrier    ID    Reader    is
mandatory.
• Automated  Input  Port:  Carrier  ID  Reader  is  a
customer option.
• Carrier  ID  Reader  at  any  output  port:  Carrier  ID
Reader is a customer option.
6. 6.1  The  intrabay  automated  input  port  is  sometimes
used  as  the  manual  Input  Port.    If  one  port  is  used  for
both an automated and a manual, the Carrier ID Reader
is  mandatory  for  this  port.    If  there  is  a  Carrier  ID
Reader,  the  scenario  for  a  stocker  transfer  without  a
Carrier ID Reader is not applicable.
6. 7  Tag
6. 7.1  Same assumptions as Carrier ID Reader.
6. 8  Carrier Exchanger/Gas Purger
6. 8.1  Out of scope of Stocker SEM.
6. 9  Robot Arm in the Passive Type Stocker
6. 9.1  No  assumption  is  made  regarding  the  passive
type stocker.
6. 10  Empty or Not Empty Carriers
6. 10.1  No assumption is made regarding empty and not
empty carriers.
6. 11  Monitor/Dummy
6. 11.1  No assumption.
6. 12  Operation Mode
6. 12.1  No assumption.


SEMI E88-1104
E
© SEMI 1999, 2004 5
6. 13  Transfer Completed Port
OP
LP2
LP1
BP
PGV, AGV, OHV Accessible
Stocker Crane Accessible
Stocker Inside
Stocker Outside
OP
LP
BP
Stocker Crane Accessible
Stocker Inside
Stocker Outside
PGV, AGV, OHV Accessible
OP - ouput port
BP - buffer port
LP1 - loading port 1
LP2 - loading port 2
OP - ouput port
BP - buffer port
LP - loading port
Case 3
Case 2
Case 1
Case 3
Case 2
Case 1

Figure 2
Output Shuttle Examples: L-Shaped Shuttle on Left, I-Shaped Shuttle on Right

6. 13.1  The Transfer Completed Port is always the LoadingPort (LP) specified in the transfer command.  If the end
user desires that the Host issue a transfer to the TSC prior to the carrier arriving at the LP, the states defined in the
Stocker Carrier State Model may be utilized.
7  Communication Requirements
7. 1  It  is  required  that  any  Stocker  SEM  compliant  equipment  follow  the  Communications  State  Model  in  SEMI
E30. In addition, Stocker SEM compliant equipment shall support either SEMI E37 and SEMI E37.1 or SEMI E4.
8  State Models
8. 1  State Model Requirements
8. 1.1  The  state  models  included  in  this  standard  are  a  requirement  for  Stocker  SEM  equipment.  This  standard
requires  implementation  of  all  SEMI  E30  state  models  (such  as  control,  communication,  on-line/off-line,  etc.
according to the GEM capabilities required per Section 13). A state model consists of a state model diagram, state
definitions,  and  a  state  transition  table.  All  state  transitions  in  this  standard,  unless  otherwise  specified,  shall
correspond to collection events.
8. 1.2  A  state  model  is  the  host’s  view  of  the  equipment,  and  does  not  necessarily  describe  the  internal  equipment
operation. All Stocker SEM state model transitions shall be mapped into the appropriate internal equipment events
that  satisfy  the  requirements  of  those  transitions.  In  certain  implementations,  the  equipment  may  enter  a  state  and
have already satisfied all of the conditions required by the Stocker SEM state model for transition to another state.
The equipment makes the required transition without any additional actions in this situation.
8. 1.3  Some  equipment  may  need  to  include  additional  substates  other  than  those  in  this  standard.  Additional
substates  may  be  added,  but  shall  not  change  the  Stocker  SEM  defined  state  transitions.  All  expected  transitions
between Stocker SEM states shall occur.
8. 2  SC State Model
8. 2.1  SC State Model Requirements
8. 2.1.1  The purpose of the SC state model is to provide information to the host regarding the overall status of the
stocker system. The SC state model is valid when the SEMI E30 (GEM) state is ON-LINE. The SC state model is
not valid  when  the  SEMI  E30  (GEM)  state  is  OFF-LINE.  Since  a  stocker  may  consist  of  many  components  (e.g.,


SEMI E88-1104
E
© SEMI 1999, 2004 6
stocker  crane,  conveyor,  ID  reader,  etc.),  it  may  be  possible  to  continue  ON-LINE  operation  when  the  operation
mode  of  some  stocker  components  (as  viewed  by  the  SC)  is  a  manual  state.  The  details  of  what  happens  when
individual  components  of  the  stocker  enter  a  manual  state  are  specific  to  the  Stocker  SEM  equipment  supplier.
When the SEMI E30 Control state changes from OFF-LINE to ON-LINE, the SC State Model is started from the SC
INIT state.
8. 2.2  SC State Model
PAUSED
PAUSING
AUTO
ALARMS
NO ALARMS
SC INIT
6
3
4
87
AVAILABILITY
SYSTEM
5
2
1
9
C

Figure 3
Generic Stocker SEM SC State Model Diagram

8. 2.3  SC State Definitions
8. 2.3.1  SC  INIT  —  SC  initialization  of  stocker  components  is  occurring.    This  is  a  non-operational  state.    No
commands from the host will be acknowledged, queued or processed.  The system will not move out of this state if
there  are  carriers  moving  on  any  of  the  stocker  units  controlled  by  the  SC.    Such  devices  must  be  manually  or
automatically recovered before transitioning to the next state.
8. 2.3.2  PAUSING  —  A  system  PAUSE  command  has  been  received  and  is  being  processed.    All  carriers  that  are
currently  moving  will  continue  until  their  physical  movement  stops  (their  transfer  command  may  still  be  active).
Carriers that are currently moving may continue to move but they must not begin another movement.  TRANSFER
commands are accepted and queued.  All status requests will be processed.  The RESUME, INSTALL, REMOVE,
and LOCATE commands will also be processed.
8. 2.3.3  PAUSED  —  No  carriers  are  in  the  process  of  moving  on  any  of  the  stocker  units  controlled  by  the  SC.
Carriers may be at any port position including the OP, BP, and LP positions.  TRANSFER commands are accepted
and queued.  All status requests will be processed.  The RESUME, INSTALL, REMOVE, and LOCATE commands
will also be processed.
8. 2.3.4  AUTO — Stocker is in the normal operational state.  Commands are actively processed.
8. 2.3.5  NO ALARMS — There are no alarms present in the system.
8. 2.3.6  ALARMS — There are one or more alarms present in the system.


SEMI E88-1104
E
© SEMI 1999, 2004 7
8. 2.4  SC State Transition Table
Table 1  SC State Transition Table
Transition

# #

#
Previous State Trigger New State Actions Comments
1 none SC Initiation. SC INIT S6F11
SCAutoInitiated
System runs through its startup
sequence.
2 SC INIT System started up
successfully.  All carrier
movement stopped.
PAUSED          S6F11
SCPaused
System ready.
3          PAUSED             RESUME          command.          AUTO              S6F11
SCAutoCompleted
System can now execute
remote commands based upon
other internal conditions
(Alarm, GEM ONLINE, etc).
4          AUTO          PAUSE          command.             PAUSING          S6F11
SCPauseInitiated
Carriers that are not moving
remain there.  Carriers that are
moving must stop at the next
logical stopping point.
5          PAUSING            RESUME          command.          AUTO              S6F11
SCAutoCompleted
System can now execute
remote commands based upon
other internal conditions
(Alarm, GEM ONLINE, etc).
6 PAUSING All carrier movement has
completed.
PAUSED          S6F11
SCPauseCompleted
System will accept and queue
new commands but will not
execute them.
No new movement will occur.
Outstanding Transfer
Commands will remain NOT
ACTIVE.
7 NO ALARMS Alarm Set. ALARMS S6F11
AlarmSet

8 ALARMS All Alarms cleared. NO
ALARMS
S6F11
AlarmCleared

9          ALARMS            Alarm          Set.          ALARMS          S6F11
AlarmSet
Alarm occurs when there is
already an outstanding alarm.

8. 3  TRANSFER Command State Model
8. 3.1  TRANSFER Command State Model Requirements
8. 3.1.1  The TRANSFER command state model serves as the SEMI E30 Processing State Model. The purpose of the
TRANSFER  command  state  model  is  to  provide  information  to  the  host  regarding  the  control  of  the  TRANSFER
command.  The TRANSFER command allows the host to manage carrier movement and scheduling. The control of
each TRANSFER command must independently support the TRANSFER command state model.
8. 3.2  TRANSFER Command State Model Diagram
8. 3.2.1  The TRANSFER command state model is detailed for Stocker SEM equipment in Figure 4.
8. 3.3  TRANSFER Command State Definitions
8. 3.3.1  QUEUED — SC has acknowledged and queued the TRANSFER command.  TRANSFER command has not
been initiated.
8. 3.3.2  ACTIVE — The carrier is involved in the physical aspect of the TRANSFER command.  It is denoted by the
time spanned by command initiation to command completion.
8. 3.3.3  TRANSFERRING (ACTIVE sub-state) — The transfer command is actively being executed by the stocker.


SEMI E88-1104
E
© SEMI 1999, 2004 8
8. 3.3.4  PAUSED (ACTIVE sub-state) — The Transfer command is not actively being executed by the stocker.  This
may   be   due   to   an   internal   equipment   error   that   does   not   immediately   terminate   the   Transfer   command
unsuccessfully.  This would allow the Host or Operator the opportunity to retry the transfer.
8. 3.3.5  CANCELING  —  The  TRANSFER  command  cancel  procedure  is  being  performed  to  terminate  a  transfer
command  which  never  entered  the  ACTIVE  state  (currently  QUEUED).    This  state  is  entered  via  a  CANCEL
remote command.
8. 3.3.6  ABORTING  —  The  TRANSFER  command  abort  procedure  is  being  performed  to  terminate  a  transfer
command  which  has  entered  the  ACTIVE  state.    This  state  can  only  be  entered  via  an  ABORT  remote  command.
An unsuccessful transfer command completion will ultimately result from this state.
CANCELING
ABORTING
ACTIVE
TRANSFERRING
PAUSED
TRANSFERRING
PAUSED
45
6
7
QUEUED
3
8
9
2
1
H*
10
11

Figure 4
Generic Stocker SEM TRANSFER Command State Model Diagram

8. 3.4  TRANSFER Command State Transition Table
Table 2  Transfer Command State Transition Table
Transition # Previous State Trigger New State Actions Comments
1            QUEUED            The            TRANSFER
command has been
initiated by the SC.
TRANSFER-
RING
S6F11
TransferInitiated

2 QUEUED Host sends CANCEL
command for a specified
TRANSFER command to
SC.
CANCELING     S6F11
TransferCancel-
Initiated
TRANSFER command is to
be removed from the
TRANSFER command queue.
3 CANCELING   The cancel procedure for
the TRANSFER command
has completed by the
stocker and the SC.
None                    S6F11
TransferCancel-
Completed
The carrier will still be
situated at the transfer source
location.  The carrier may
now be included in a future
transfer.


SEMI E88-1104
E
© SEMI 1999, 2004 9
Transition # Previous State Trigger New State Actions Comments
4            TRANSFER-
RING
The SC pauses execution
of the TRANSFER
command due to an
anomaly condition.
PAUSED             S6F11
TransferPaused for
a specific
CommandID
It is an important distinction
to make that the TRANSFER
command is paused and not
just the transfer agent.
The Stocker Controller state
will be ALARM.
5 PAUSED The SC resumes execution
of the TRANSFER
command since the
anomaly condition has
been cleared.
TRANSFER-
RING
S6F11
TransferResumed
for a specific
CommandID
If this was the only remaining
stocker alarm, the Stocker
Controller state will transition
to NO ALARMS.
6            ACTIVE            The            TRANSFER
command has completed
by the stocker and SC
(either successfully or
unsuccessfully).
None                    S6F11
TransferComplete
d sent to Host with
appropriate
ResultCode
ResultCode = 0 if
successful
ResultCode is
nonzero if
unsuccessful
Carrier(s) could be located at
any location or port located
along the path of the transfer,
if the TRANSFER command
completed unsuccessfully.
Supplier Option — The
location of the carrier(s)
associated with an
unsuccessful transfer
command must be a legal
SourcePort for a new
TRANSFER command.
7 ACTIVE Host sends ABORT
command for a specified
TRANSFER command to
SC.
ABORTING        S6F11
TransferAbort-
Initiated

8 ABORTING The abort procedure for
the TRANSFER command
has completed by the
stocker and SC.
None                    S6F11
TransferAbort-
Completed
Carrier could be located at
any location or port located
along the path of the ACTIVE
transfer.
Supplier Option — The
location of the carrier
associated with the aborted
transfer command must be a
legal SourcePort for issuing a
new TRANSFER command.
9            ABORTING            TRANSFER            command
cannot be aborted.
ACTIVE              S6F11
TransferAbort-
Failed
TRANSFER command could
not be aborted due to the
physical state of the
equipment.  Such conditions
must be documented by the
Stocker SEM equipment
Supplier.
10 CANCELING   Transport system is unable
to cancel the TRANSFER
command because the
transfer is now ACTIVE.
TRANSFER-
RING
S6F11
TransferInitiated

11 CANCELING   Transport system is unable
to cancel the TRANSFER
command and it is still
queued.
QUEUED
S6F11
TransferCancel-
Failed




SEMI E88-1104
E
© SEMI 1999, 2004 10
8. 4  Stocker Carrier State Model
8. 4.1  Stocker Carrier State Model Requirements
8. 4.1.1  The purpose of the stocker carrier state model is to provide information to the host regarding carrier tracking
(the Host will not control carriers) while the carrier is in the domain of the stocker.  The carrier is in the domain of
the stocker when it is in storage or transport internal to the stocker or on a stocker interface port (manual, interbay,
or intrabay). The equipment shall track each carrier in compliance with the Stocker Carrier State Model.
8. 4.2  Stocker Carrier State Model

INSTALLED

WAIT IN

WAIT OUT

STORED

COMPLETED

ALTERNATE

TRANSFERRING

11

WAIT IN

WAIT OUT

STORED

COMPLETED

ALTERNATE

TRANSFERRING

6

COMPLETED

ALTERNATE

4

9

2

3

5

8

1

10

7

C
12
13
14
16

15


Figure 5
Generic Stocker SEM Carrier State Model Diagram

8. 4.3  Stocker Carrier State Definitions
8. 4.3.1  INSTALLED — Carrier in stocker database.
8. 4.3.2  WAIT IN (INSTALLED sub-state) — Carrier at final internal port location of the stocker.  Carrier is ready to
be transferred to storage or output location and no further movement or action should be taken on this carrier prior to
transfer.
8. 4.3.3  WAIT OUT (INSTALLED sub-state) — Carrier is at an Output, Buffer, or Loading Port.
8. 4.3.4  TRANSFERRING  (INSTALLED  sub-state)  —  Carrier  ‘moving’  between  locations  in  the  stocker.    The
carrier  may  not  be  physically  moving  but  may  be  on  the  crane  (or  other  position)  waiting  for  a  new  TRANSFER
command as the result of an anomaly condition.
8. 4.3.5  STORED (INSTALLED sub-state) — Carrier is sitting at a storage location.
8. 4.3.6  COMPLETED  (STORED  sub-state)  —  The  carrier  is  stored  at  a  shelf  location  as  a  result  of  completing  a
transfer for which this shelf represents the destination of the transfer command.
8. 4.3.7  ALTERNATE  (STORED  sub-state)  —  The  carrier  is  temporarily  stored  at  a  shelf  location.  The  transfer
command completion is pending until the destination and the crane become available.


SEMI E88-1104
E
© SEMI 1999, 2004 11
8. 4.4  Stocker Carrier State Transition Table
Table 3  Stocker Carrier State Transition Table
Transition
#
Previous State Trigger New State Action Comments
1 none Carrier arrives at a
WaitIn position of the
stocker.
WAIT IN S6F11
CarrierWaitIn

2 WAIT IN Stocker is executing a
TRANSFER command
for the carrier.
TRANSFERRING        S6F11        Carrier-
Transferring

3 TRANSFERRING Completion of a
TRANSFER command
with a DEST of
internal stocker
storage.
COMPLETED S6F11
CarrierStored
Carrier is at an
internal storage
destination.
4 COMPLETED Stocker is executing a
TRANSFER command
for the carrier.
TRANSFERRING        S6F11        Carrier-
Transferring

5 TRANSFERRING Carrier has arrived at
the output port.
WAIT OUT S6F11
CarrierWaitOut

6 WAIT OUT Carrier has advanced
(automatically) on a
port beyond the output
port.
WAIT OUT S6F11
CarrierWaitOut

7 WAIT OUT Carrier is removed
from the stocker
domain (removed from
the output LP).
None                             S6F11
CarrierRemoved

8 TRANSFERRING The destination of the
move command is
occupied.
ALTERNATE              S6F11
CarrierStoredAlt
SC is waiting for the
Destination to become
available.
9 ALTERNATE The port becomes
available and transfer
command is first in
queue.
TRANSFERRING        S6F11
CarrierResumed
Carrier continues with
move to the
Destination.
10 None Carrier entry is created
or modified in the SC
database.
COMPLETED              S6F11
CarrierInstall-
Completed
Could be due to an
INSTALL remote
command or initiated
by the Stocker
Controller.
11 INSTALLED Carrier entry is
removed from the SC
database.
None                             S6F11
CarrierRemove-
Completed
Could be due to a
REMOVE remote
command.
12        ALTERNATE        Transfer        command        is
Aborted.
COMPLETED              S6F11
CarrierStored

13 WAIT OUT Carrier on a bi-
directional port is
ready to be moved to a
storage or output
location.
WAIT IN S6F11
CarrierWaitIn
Examples of a trigger
could be the operator
pressing a button or
the host issuing a
transfer command for
the carrier.
14 None The result of ID read at
an output port that did
not match the expected
ID.
WAITOUT                   S6F11
CarrierWaitOut



SEMI E88-1104
E
© SEMI 1999, 2004 12
Transition
#
Previous State Trigger New State Action Comments
15 None 1. Carrier created
directly on the crane
(as the result of
duplicate ID
recovery).
2. Transfer
Command received
from host with the
source being a port
with no SC
controlled sensors
(e.g.directly
connected process
equipment).
TRANSFERRING        S6F11        Carrier-
Transferring
It is also
permissible to use
state transitions #1
and #2 for the
scenario in trigger
#2 especially when
the transfer
command is
queued.  This
transition may not
be required in all
configurations.
16 TRANSFERRING Carrier has arrived at
an Output port and is
removed from the
stocker domain.
None                             S6F11
CarrierRemoved
This generally
occurs when
delivering directly
to process
equipment at a port
with no sensors
controlled by the
SC.

8. 5  Stocker Crane  State Model
8. 5.1  Stocker Crane State Model Requirements
8. 5.1.1  The purpose of the stocker crane state model is to provide information to the host for use of stocker crane
information and metric tracking (i.e., the Host will not control the stocker crane). If it is possible for the stocker to
continue  operation  while  the  stocker  crane  is  not  operational  then  the  Stocker  Crane  State  Model  will  retain  its
current state and the SC State Model will be ALARM. When the stocker crane becomes operational again, the state
of the Stocker Crane State Model will transition to the new state. Whether it is possible to continue operation while
the  stocker  crane  is  not  operational  is  specific  to  the  stocker  SEM  equipment  supplier.  If  a  single  stocker  contains
multiple  stocker  cranes,  each  stocker  crane  must  comply  with  the  stocker  crane  state  model.  Compliance  with  the
stocker crane state model is only required for devices that contain a crane. The Host should not be dependent on any
events from the stocker crane state model.
8. 5.2  Stocker Crane State Model
ACTIVEIDLE
1
2

Figure 6
Generic Stocker SEM Stocker Crane State Model Diagram

8. 5.3  Stocker Crane State Definitions
8. 5.3.1  IDLE — The stocker crane is not performing Host or SC initiated work.
8. 5.3.2  ACTIVE — The stocker crane is busy performing Host or SC initiated work.


SEMI E88-1104
E
© SEMI 1999, 2004 13
8. 5.4  Stocker Crane State Transition Table
Table 4  Stocker Crane State Transition Table
Transition # Previous State Trigger New State Actions Comments
1 IDLE Crane is requested to  perform
host or SC initiated work.
ACTIVE

S6F11
CraneActive

2           ACTIVE

Crane completes host or SC
initiated work.
IDLE                     S6F11
CraneIdle


8. 6  Port Transfer State Model
8. 6.1  Port Transfer State Model Requirements
8. 6.1.1  The  purpose  of  the  port  state  model  is  to  provided  information  to  the  host  for  the  use  in  accessing  ports.
This may permit the host and stocker to utilize ports that are in service while avoiding the use of ports that are not in
service.
8. 6.2  Port Transfer State Model

IN SERVICE
C
READY TO
LOAD
READY TO
UNLOAD
TRANSFER
BLOCKED
5

6
7

8
4
C
1
OUT OF
SERVICE
23

Figure 7
Port State Model Diagram
A-1.1.1.1


SEMI E88-1104
E
© SEMI 1999, 2004 14
8. 6.3  Port Transfer State Definitions
8. 6.3.1  OUT OF SERVICE — Transfer to/from this port is disabled and the port should not be used in any Transfer
command issued by the host.  If the SC State is “Alarm” and the port cannot be accessed normally, the port transfer
state shall be “Out Of Service”.  This includes situations where the “Alarm” may not be directly related to the port.
For  example,  the  alarm  may  be  associated  with  the  crane  and  since  the  crane  cannot  function,  the  port  cannot  be
serviced normally.  If any port on a multi-position conveyor with a single LP position is “Out Of Service”, then all
ports on the conveyor shall be “Out Of Service”.  If a command is issued by the host which uses this port, it will not
be rejected simply because the port is in this state.
8. 6.3.2  IN SERVICE — Transfer to/from this port is enabled.
8. 6.3.3  The  following  are  optional  sub-states  of  the  IN  SERVICE  state  to  provide  information  to  the  host  for  the
use in accessing ports.  The information is generally obtained by the SC via a low-level interface with the connected
equipment (generally inline process tools).  The connected equipment should generally, though not required, follow
the Load Port Transfer State Model defined in SEMI E87.  If these states are implemented, they are not required
for every port.
8. 6.3.3.1  TRANSFER BLOCKED — The state is neither READY TO LOAD nor READY TO UNLOAD.
8. 6.3.3.2  READY  TO  LOAD  —  The  port  is  able  to  accept  (be  loaded  with)  a  carrier  from  the  Stocker  SEM
equipment.
8. 6.3.3.3  READY  TO  UNLOAD  —  The  port  is  able  to  have  a  carrier  removed  (unloaded)  by  the  Stocker  SEM
equipment.
8. 6.3.4  Port Transfer State Transition Table
Table 5  Port Transfer State Transition Table
Transition # Previous State Trigger                        New                        State                        Action                         Comments
1 None System reset. OUT OF
SERVICE
Or
IN SERVICE
S6F11
PortOutOfService
Or
S6F11 PortInService
The new state is based
on the current status of
the port or the state
prior to system reset.
2             OUT             OF
SERVICE
The equipment has
determined that the port can
be utilized for transfers.
IN SERVICE S6F11 PortInService
3 IN SERVICE The equipment has
determined that the port
should not be used for
transfers.
OUT OF
SERVICE
S6F11
PortOutOfService
This could be the result
of an alarm condition

that affects only the
port, the entire device,
or a portion of the
device which includes
the port.
4             None             System             Reset.             TRANSFER
BLOCKED
READY TO
LOAD
READY TO
UNLOAD
S6F11
PortTransferBlocked
S6F11
PortReadyToLoad
S6F11
PortReadyToUnload
The new state is based
on the current status of
the port.
5             TRANSFER
BLOCKED
Port ready for carrier
delivery.
READY TO
LOAD
S6F11
PortReadyToLoad

6             TRANSFER
BLOCKED
Port ready for carrier
removal.
READY TO
UNLOAD
S6F11
PortReadyToUnload

7             READY             TO
LOAD
No carrier transfer allowed.    TRANSFER
BLOCKED
S6F11
PortTransferBlocked

8             READY             TO
UNLOAD
No carrier transfer allowed.    TRANSFER
BLOCKED
S6F11
PortTransferBlocked




SEMI E88-1104
E
© SEMI 1999, 2004 15
9  Collection Event List
9. 1  This section identifies data collection events and defines (Stream 6) reporting levels for variable data items. The
host  can  use  the  report  definition  scenario  defined  in  SEMI  E30  to  define  reports  at  Stocker  SEM  defined  levels.
The intent of this section is to demonstrate that certain suggested data is available at specific events.  The collection
events are grouped according to whether or not they are associated with a state change (according to the state models
defined within this document).
9. 2  Requirements
9. 2.1  This  standard  requires  all  collection  events  listed  in  the  SEMI  E30  standard  (according  to  the  GEM
capabilities required per Section 14). There are cases where specific collection event names are designated for GEM
defined collection events.  Such collection event names are denoted by “Y” in the GEM column.
9. 3  State Transition Collection Event Table
Table 6  State Transition Collection Event Table
Collection Event Name From State To State Required DVVALs GEM
SC STATE TRANSITION EVENTS
AlarmCleared ALARMS NO ALARMS CommandID
ErrorID
StockerUnitInfo
ErrorNumber
Y
AlarmSet NO ALARMS
ALARMS
ALARMS
ALARMS
CommandID
ErrorID
StockerUnitInfo
RecoveryOptions
ErrorNumber
Y
SCAutoCompleted PAUSED
PAUSING
AUTO
AUTO
N/A N
SCAutoInitiated None SC INIT N/A N
SCPauseCompleted PAUSING PAUSED N/A N
SCPaused SC INIT PAUSED N/A N
SCPauseInitiated AUTO PAUSING N/A N
TRANSFER COMMAND STATE TRANSITION EVENTS
TransferAbortCompleted ABORTING None CommandID
CarrierID
CarrierLoc
CarrierZoneName
N
TransferAbortFailed ABORTING ACTIVE CommandID
CarrierID
CarrierLoc
CarrierZoneName
N
TransferAbortInitiated ACTIVE ABORTING CommandID
CarrierID
CarrierLoc
CarrierZoneName
N
TransferCancelCompleted CANCELING None CommandID
CarrierID
CarrierLoc
CarrierZoneName
N


SEMI E88-1104
E
© SEMI 1999, 2004 16
Collection Event Name From State To State Required DVVALs GEM
TransferCancelFailed CANCELING QUEUED CommandID
CarrierID
CarrierLoc
CarrierZoneName
N
TransferCancelInitiated QUEUED CANCELING CommandID
CarrierID
CarrierLoc
CarrierZoneName
N
TransferCompleted ACTIVE None
This event will occur when the
carrier arrives at the transfer
completed port.
The TRANSFER command
DEST is an LP if transferring to
an output of the stocker.
CommandID
CarrierID
CarrierLoc
ResultCode
CarrierZoneName
N
TransferInitiated QUEUED
CANCELING
TRANSFERRING
TRANSFERRING
CommandID
CarrierID
CarrierLoc
CarrierZoneName
Dest
N
TransferPaused TRANSFERRING PAUSED CommandID
CarrierID
CarrierLoc
CarrierZoneName
N
TransferResumed PAUSED TRANSFERRING CommandID
CarrierID
CarrierLoc
CarrierZoneName
N
STOCKER CARRIER STATE TRANSITION EVENTS
CarrierInstallCompleted None COMPLETED CarrierID
CarrierLoc
CarrierZoneName
N
CarrierRemoveCompleted INSTALLED None CarrierID
CarrierLoc
CarrierZoneName
N
CarrierRemoved WAIT OUT
TRANSFERRING
None
None
CarrierID
HandoffType
N
CarrierResumed ALTERNATE TRANSFERRING CommandID
CarrierID
CarrierLoc
CarrierZoneName
Dest
StockerCraneID
N
CarrierStored TRANSFERRING COMPLETED CarrierID
CarrierLoc
CarrierZoneName
N


SEMI E88-1104
E
© SEMI 1999, 2004 17
Collection Event Name From State To State Required DVVALs GEM
CarrierStoredAlt TRANSFERRING ALTERNATE CommandID
CarrierID
CarrierLoc
CarrierZoneName
Dest
N
CarrierTransferring WAIT IN
COMPLETED
None
TRANSFERRING
TRANSFERRING
TRANSFERRING
CarrierID
CarrierLoc
CarrierZoneName
StockerCraneID
N
CarrierWaitIn None WAIT IN CarrierID
CarrierLoc
CarrierZoneName
N
CarrierWaitOut TRANSFERRING
WAIT OUT
None
WAIT OUT
WAIT OUT
WAIT OUT
CarrierID
CarrierLoc
CarrierZoneName
PortType
N
ZoneCapacityChange Any State or None Any State or None ZoneData N
STOCKER CRANE STATE TRANSITION EVENTS
CraneActive IDLE ACTIVE CommandID
StockerCraneID
N
CraneIdle ACTIVE IDLE CommandID
StockerCraneID
N
PORT TRANSFER STATE TRANSITION EVENTS
PortInService None
OUT OF SERVICE
IN SERVICE PortID
PortOutOfService None
IN SERVICE
OUT OF SERVICE PortID
PortTransferBlocked Any TRANSFER BLOCKED PortID
PortReadyToLoad Any READY TO LOAD PortID
PortReadyToUnload Any READY TO UNLOAD PortID

9. 4  Non-Transition Collection Event Table
Table 7  Non-Transition Collection Event Table
Collection Event Name Event Description Required DVVALs or
Reports
CarrierIDRead A carrier identification has been performed by the stocker system. For
reads that occur at an Input port, the event shall come prior to the
CarrierWaitIn event.  For reads that occur at CarrierWaitOut port
locations, the CarrierIDRead event and the CarrierWaitOut events for that
port shall be sent to the host in a consistent sequence (i.e. CarrierIDRead
shall always precede the CarrierWaitOut, or alternatively, the
CarrierWaitOut event shall always precede the CarrierIDRead event).
There are not dependencies with this event at any other location.
CarrierID
CarrierLoc
IDReadStatus
CarrierInstallFailed An INSTALL command has failed. CarrierID
FailureCode
CarrierLocateCompleted A LOCATE remote command has completed. CarrierLocations
CommandID
CarrierRemoveFailed A REMOVE command has failed. CarrierID
FailureCode


SEMI E88-1104
E
© SEMI 1999, 2004 18
Collection Event Name Event Description Required DVVALs or
Reports
IDReadError All carriers related to an ID error situation have been dispositioned. This
event occurs automatically when the stocker places the carrier that
experienced the ID error to the pickup port (See Section 13.3.3).
CarrierID
CarrierLoc
IDReadStatus
OperatorInitiatedAction The operator initiated an action from the Stocker Controller.
CommandID
CommandType
CarrierID
Source
Dest
Priority

10  Variable Data Items
10. 1  The purpose of this section is to define the list of variable data item requirements for Stocker SEM equipment.
Values of these variables will be available to the host via collection event reports and host status queries.
10. 2  Requirements
• All variable data items and data item restrictions defined in SEMI E30 are required on Stocker SEM equipment
(according to the GEM capabilities required per Section 13).
• All variable data items in the Stocker SEM Variable Data Item Dictionary for specific equipment classifications
are required for Stocker SEM equipment. The data item restrictions are also required.
• Some  SVs  in  the  Variable  Data  Item  Dictionary  are  referenced  by  an  “i”  subscript  (e.g.,  CarrierID
i
).  The  “i”
subscript denotes a specific instance of the SV. This is necessary since there is usually more than one instance
of such an SV active in the system at the same time (e.g., if there are 20 carriers active at the same time then “i”
could  range  from  1  to  20  for  CarrierID
i
).  Variable  Data  Items  containing  the  “i”  subscript  should  not  have
Variable IDs assigned to them.
• All variable data items with a format of ASCII (A) shall be limited to printable characters in the decimal range
of 32 to 126, with the exception of the following non-permitted characters: “*” (decimal 42), “\”(decimal 92).
10. 2.1  Variable data items are documented in the Stocker SEM Variable Data Item Dictionary using the following
format:
Variable Name Type Description Class Format Comments

Where:
Variable Name:   A unique name for the variable data item.
Type: CV – meaning common variables, variables that are general to all vehicles.
CSV – meaning configuration specific variables.
Description:    If  class  is  DVVAL,  then  the  description  shall  contain  a  statement  of  when  data  is  valid  in
terms of Stocker SEM events.
Class:  The data type of the item.
Format: SECS Message Language (SML) mnemonicacceptable formats are SEMI E5  lists, ASCII,
floating point, unsigned integer or signed integer. A description of “ANY”, indicates that only
the above formats are acceptable and is left to the supplier to decide.
Comments: Any additional information pertinent to the variable name.


SEMI E88-1104
E
© SEMI 1999, 2004 19
10. 3  Variable Data Item Types
10. 3.1  Equipment Constants (ECV) — The value can be changed by the host using S2F15. The operator may have
the ability to change some or all of the values. The value of an equipment constant may be queried at any time by
the host using the S2F13/14 transaction or Stream 6 reports.
10. 3.2  Status Variables (SV) — The values are valid at all times. A SV may not be changed by the host or operator,
but may be changed by the equipment. A host or operator command may change an equipment status thus changing
a SV. The value of status variables may be queried by the host at any time using the S1F3/4 or Stream 6 reports.
10. 3.3  Data Variables (DVVAL) — These are variables which are valid upon the occurrence of a specific collection
event, and may or may not be valid at other times depending upon the equipment. An attempt to read a variable data
item when it’s invalid will not result in an error, but the data reported may not have relevant meaning.
10. 3.4  Variable  Data  (V)  —  This  is  a  class  of  variable  data  which  includes  all  the  previously  defined  types  of
variables.
10. 4  Variable Data Item Dictionary
Table 8  Variable Data Item Dictionary
Variable Name Type Description Class Format Comments
ActiveCarriers CV List current status of all
carrier information in
the SC database.
SV L,n
1. CarrierInfo
1

.
.
n. CarrierInfo
n


ActiveTransfers CV List current status of all
ACTIVE TRANSFER
commands.
SV L,n
1. TransferCommand
1

.
.
n. TransferCommand
n


ActiveZones CV List current status
associated with all zones
being used by the SC.
SV L,n
1. ZoneData
1

.
.
n. ZoneData
n


CarrierID CV Unique ID of the carrier.DVVALA[1–64] If an Id is created by the
equipment (not obtained via an
id reader, the host interface, or
the user interface) it must be of
the following format:
UNKNOWNEqpNameSeq
Where:
UNKNOWN are the exact
characters “UNKNOWN”
EqpName is the value of the
EqpName ECV (truncated if
required)
Seq is a unique sequence
identifier determined by the
vendor.
CarrierID
i
CV Unique ID of the carrier.SV A[1–64] See comment for CarrierID.
CarrierInfo CV All database information
associated with a
particular carrier.
DVVALL,2
1. CarrierID
2. CarrierLoc



SEMI E88-1104
E
© SEMI 1999, 2004 20
Variable Name Type Description Class Format Comments
CarrierInfo
i
CV All database information
associated with a
particular carrier.
SV L,2
1. CarrierID
i

2. CarrierLoc
i


CarrierLoc CV Unique location of the
carrier within the
stocker as reported by
the SC.
DVVALA[1–64] It is important to note that this is
the unique location within the
stocker (i.e., 2 carriers cannot be
stored at the same CarrierLoc,
but 2 carriers can be stored at
the same ZoneName).
CarrierLoc
i
CV Unique location of the
carrier within the
stocker as reported by
the SC.
SV A[1–64] It is important to note that this is
the unique location within the
stocker (i.e., 2 carriers cannot be
stored at the same CarrierLoc,
but 2 carriers can be stored at
the same ZoneName).
CarrierLocationInfo
i
CV Carrier Location
Information
DVVALL,3
1. CarrierID
i

2. CarrierLoc
i


# 3

3. CarrierZoneName
i


CarrierLocations CV Carrier Location
Information for the
‘LOCATE’ host
command
DVVALL,n
1. CarrierLocationInfo
1

.
.
n. < CarrierLocationInfo
n
>
‘n’ number of carriers
CarrierState
i
CV The Carrier State SV U2 0 = None
1 = Wait In
2 = Transferring
3 = Completed
4 = Alternate
5 = Wait Out
CarrierZoneName CV The name of the zone
associated with the
carrier’s current
location.
DVVALA[0–64] A location may not be
associated with a particular
zone.  This would be the case if
ports are not assigned to a zone.
CarrierZoneName
i
CV The name of the zone
associated with the
carrier’s current
location.
SV A[0–64] A location may not be
associated with a particular
zone.  This would be the case if
ports are not assigned to a zone.
CommandName CV Name of Host issued
remote command.
DVVALA[1–20]
CommandID CV Remote Command ID DVVALA[1–64] Used to subsequently refer to a
specified remote command
(e.g., to cancel a remote
command).
If a command is generated by
the Stocker Controller, the
commandid must begin with the
string ‘MANUAL’ followed by
any arbitrary sequence
identifier.
CommandID
i
CV Remote Command ID SV A[1–64] Used to subsequently refer to a
specified remote command
(e.g., to cancel a remote
command).


SEMI E88-1104
E
© SEMI 1999, 2004 21
Variable Name Type Description Class Format Comments
CommandInfo CV Command information
associated with a
particular transfer
command.
DVVALL,2
1. CommandID
2. Priority

CommandInfo
i
CV Command information
associated with a
particular transfer
command.
SV L,2
1. CommandID
i

2. Priority
i


CommandType CV The type of Command
being initiated
DVVALA[1–20] Valid Values are
‘TRANSFER’
‘CANCEL’
‘ABORT’
CurrentPortStates CV Current State of all the
ports.
SV L,n
1. PortInfo
1


.

.

n. PortInfo
n


Dest CV Destination location
identifier.
DVVALA[1–64] Can either be a CarrierLoc or a
ZoneName.
Dest
i
CV Destination location
identifier.
SV A[1–64] Can either be a CarrierLoc or a
ZoneName.
EmptyCarrier CV Flag which denotes
whether the carrier is
empty or not empty.
DVVALU2 Empty = 0
Not Empty = 1
EnhancedCarriers CV List Current status of all
carrier information in
the SC database.
SV L,n
1. EnhancedCarrierInfo
1

.
.
n. EnhancedCarrierInfo
n

This includes carriers that are
on an Input conveyor prior to
the ‘WaitIn’ (inner) position of
the conveyor. These carriers are
reported with a CarrierState of

# 0

0.
EnhancedCarrierInfo
i
CV All database information
associated with a
particular carrier.
SV L,5
1. CarrierID
i

2. CarrierLoc
i

3. CarrierZoneName
i


# 4

4. InstallTime
i


# 5

5. CarrierState
i


EnhancedTransfers CV List current status of all
transfer commands.
SV L,n
1.
EnhancedTransferComma
nd
1

.
.
n.
EnhancedTransferComm
and
n


EnhancedTransfer-
Command
i

CV Information associated
with a particular
Transfer command.
SV L,3
1. TransferState
i

2. CommandInfo
i

3. TransferInfo
i


EnhancedActive-
Zones
CV List current status
associated with all
zoned being used by the
SC.
SV L,n
1. EnhancedZoneData
1

.
n. EnhancedZoneData
n




SEMI E88-1104
E
© SEMI 1999, 2004 22
Variable Name Type Description Class Format Comments
EnhancedZoneData
i
CV Information associated
with a particular zone.
SV L,4
1. ZoneName
i

2. ZoneCapacity
i

3. ZoneSize
i

4. ZoneType
i


EqpName CV Unique ID of the SC ECV A[1–32]
ErrorID CV The identification of the
error.
DVVALA[1–64] The following values are
required:
“DestOccupied” – Double Store
“SourceEmpty” – Empty
Retrieve
Other values may be used as
required.
ErrorNumber CV The unique id of an
error.
DVVALU4 Used to subsequently refer to a
specified stocker error (e.g. to
RETRY a stocker operation).
This value must be unique for
all current outstanding errors.
FailureCode CV The failure reason used
in the
CarrierInstallFailed and
CarrierRemoveFailed
events.
DVVALU2 1 = Undefined Failure
2 = Location Occupied (Install)
3 = Carrier Doesn’t Exist
(Remove)
4–63 = Reserved
HandoffType CV Denotes the type of
handoff that occurred at
the equipment
ownership transfer point
(e.g., from loading port
to vehicle).
DVVALU2 MANUAL = 1
means that no handoff
handshake occurs (e.g., PGV
handoff).
AUTOMATED = 2
means that a handshake occurs
(e.g., SEMI E84).
IDReadDuplicate-
Option
CV Indicates manner in
which Duplicate ID
reads must be processed.
ECV U1 0 = Reject
1 = HostControlled
See Carrier ID Error Scenarios
(Table 14) for detailed
information.
IDReadFailureOption CV Indicates manner in
which IDRead Failures
must be processed.
ECV U1 0 = Reject
1 = HostControlled
See Carrier ID Error Scenarios
(Table 14) for detailed
information.
IDReadMismatch-
Option
CV Indicated manner in
which Mismatch ID
reads must be processed.
ECV U1 0 = Reject
1 = HostControlled
See Carrier ID error Scenarios
(Table 14) for detailed
information.
IDReadStatus CV Result Code of an ID
read event.
DVVALU2 Success = 0
Failure = 1
Duplicate = 2
Mismatch = 3
InstallTime
i
CV Time the carrier was
created in the SC
database.
SV TIME (A16) yyyymmddhhmmsscc
PortID CV ID of the port. DVVALA[1–64]




SEMI E88-1104
E
© SEMI 1999, 2004 23
Variable Name Type Description Class Format Comments
PortID
i
CV ID of the port. SV A[1–64]


PortInfo
i
CV Port information
associated with a
particular port.
SV L,2
1. PortID
i


2. PortTransferState
i


PortTransferState
i
CV Port Transfer State. SV U2 1 – OutOfService
2 – InService
3 – TransferBlocked
4 – ReadyToLoad
5 – ReadyToUnload
PortType CV Definition of the type of
port associated with the
carrier’s current
location.
DVVALA[1–32] “OP” = output port
“BP” = buffer port
“LP” = loading port
Priority CV Remote command
priority.
DVVALU2 0 is not valid.
1 is the LOWEST priority, 99 is
the highest priority.
Priority
i
CV Remote command
priority.
SV U2 0 is not valid.
1 is the LOWEST priority, 99 is
the highest priority.
RecoveryOptions
(Supplier Option)
CV List of options that the
Host may use to try to
recover a specific
stocker error.
DVVALA[1–64]
blank
RETRY
ABORT
This variable will enumerate the
possible Host command
responses to the error associated
with the event.  If blank, Host
cannot do anything.  If there are
multiple otpions, they are
comma seperated.  For example:
“RETRY, ABORT”.
Whitespace is ignored.
ResultCode CV Result Code of a stocker
system command.
Associated with the
command completion
event.
DVVALU2 Values of ResultCode will
correspond to meaningful
completion results (0 always
signifies normal successful
completion).  The following
Result Codes are required:
0 = Success
1 = Other Error
2 = Shelf Zone is FULL
3 = Duplicate ID
4 = Mismatch ID
5 = Failure to Read ID
6–63 = Reserved
SCState CV SC State (SYSTEM). SV U2 1 = SC Init
2 = Paused
3 = Auto
4 = Pausing
Source CV Source location unique
identifier.
DVVALA[1–64]
Source
i
CV Source location unique
identifier.
SV A[1–64]


SEMI E88-1104
E
© SEMI 1999, 2004 24
Variable Name Type Description Class Format Comments
SpecVersion CV Version of SEMI E88 to
which the equipment is
compliant.
SV A[0–20] Example values are:
E88-0999, E88-0301.  If the
equipment is not compliant, a
zero length value may be
specified.
StockerCraneID CV The id of the stocker
crane.
DVVALA[1–64] Generally only used when there
are multiple cranes in a stocker.
StockerUnitID CV Unique identification of
a stocker unit (e.g., port,
crane, transfer agent,
etc.).
DVVALA[1–64] When applicable, this value
shall be the StockerCraneID,
PortID, etc.
StockerUnitID
i
CV Unique identification of
a stocker unit (e.g., port,
crane, transfer agent,
etc.).
SV A[1–64] When applicable, this value
shall be the StockerCraneID,
PortID, etc.
StockerUnitInfo CV Information associated
with a particular stocker
unit.
DVVALL,2
1. StockerUnitID
2. StockerUnitState

StockerUnitInfo
i
CV Information associated
with a particular stocker
unit.
SV L,2
1. StockerUnitID
i

2. StockerUnitState
i


StockerUnitState CV The state of the stocker
unit.
DVVALU2 The State of the component will
be specific to the stocker
configuration.
StockerUnitState
i
CV The state of the stocker
unit.
SV U2 The State of the component will
be specific to the stocker
configuration.
TransferCommand CV Information associated
with a particular
TRANSFER command.
DVVALL,2
1. CommandInfo
2. TransferInfo

TransferCommand
i
CV Information associated
with a particular
TRANSFER command.
SV L,n
1. CommandInfo
i

2. TransferInfo
i


TransferInfo CV Carrier information
associated with a
particular transfer
command.
DVVALL,3
1. CarrierID
2. CarrierLoc
3. Dest

TransferInfo
i
CV Carrier information
associated with a
particular transfer
command.
SV L,3
1. CarrierID
i

2. CarrierLoc
i

3. Dest
i


TransferState CV State of Transfer
Command.
SV U2 1. Queued
2. Transferring
3. Paused
4. Canceling
5. Aborting
ZoneCapacity CV Available capacity (in
carriers) of a particular
zone.
DVVALU2 Example:  If a stocker zone can
store 100 carriers and 25 of the
locations are currently occupied,
then the ZoneCapacity is 75.


SEMI E88-1104
E
© SEMI 1999, 2004 25
Variable Name Type Description Class Format Comments
ZoneCapacity
i
CV Available capacity (in
carriers) of a particular
zone.
SV U2 Example:  If a stocker zone can
store 100 carriers and 25 of the
locations are currently occupied,
then the ZoneCapacity is 75.
ZoneData CV Information associated
with a particular zone.
DVVALL,2
1. ZoneName
2. ZoneCapacity

ZoneData
i
CV Information associated
with a particular zone.
SV L,2
1. ZoneName
i

2. ZoneCapacity
i


ZoneName CV Alphanumeric name of a
particular zone.
DVVALA[1–64]
ZoneName
i
CV Alphanumeric name of a
particular zone.
SV A[1–64]
ZoneSize
i
CV Size (in carriers) of a
particular zone.
SV U2 The physical size of the zone.
ZoneType
i
CV Type of the Zone. SV U2 1: Shelf
2: Port
3: Other

11  Alarm List
11. 1  Since  each  model  of  Stocker  SEM  equipment  differs  in  configuration,  it  is  not  practical  to  provide  an
exhaustive list of all possible alarms.  Instead, the Stocker SEM is requiring the two tables provided as described in
SEMI E30 (Section 8.4).  Alarm List Table which is intended to provide for equipment configuration specific alarms
and Alarm ID, Alarm Set/Cleared Event Table.  Any alarm that is displayed locally at the equipment, if enabled, is
required to be sent to the host.  To be compliant, Tables 9 and 10 must be completed by the supplier, documenting
all alarms.
11. 2  Alarm List Table
11. 2.1  The alarm list table contains examples of alarms that pertain to various configuration aspects of equipment.
These  examples  are  intended  to  illustrate  that  alarms  pertain  to  situations  in  which  there  exists  a  potential  for
exceeding physical safety limits associated with people, equipment, and material being transported as per the SEMI
E30  definition  of  an  alarm.  See  SEMI  E30  for  further  reference.    The  supplier  is  responsible  for  supplying
documentation associated with these alarm definitions. Each alarm will have an associated alarm text (ALTX) and
alarm  identifier  (ALID).    Table  9  contains  an  example  of  alarm  list  information  that  is  intended  to  be  augmented
when the Stocker SEM equipment supplier documents their interface.  Examples highlighted by (*) are required by
Stocker SEM.
Table 9  Alarm List Table
Danger Affected
Equipment Cfg. Alarm Text ALID
Potential Imminent Operator Equipment Material
Stocker stocker unit error*  X   X X
handoff error*  X  X X X
database error*  X   X

11. 3  Alarm ID, Alarm Set/Cleared Event Table
11. 3.1  The Alarm ID, Alarm Set/Cleared Event table documents the association of each ALID to a set and cleared
event  as  required  by  SEMI  E30.  See  SEMI  E30  for  further  reference.    The  supplier  is  responsible  for  supplying
documentation  associated  with  these  alarm  definitions.    Each  alarm  will  have  associated  alarm  set  and  cleared
collection event identifiers (CEID
set
and CEID
clear
).


SEMI E88-1104
E
© SEMI 1999, 2004 26
Table 10  Alarm ID, Alarm Set/Cleared Event Table
Alarm ID (ALID) Alarm SET Event (CEID
set
) Alarm CLEARED Event (CEID
cleared
)





12  Remote Commands
12. 1  The  purpose  of  this  section  is  to  identify  remote
commands, command parameters, and valid commands
versus states pertinent to the Stocker SEM.
12. 2  A.  Requirements
• The   equipment   shall   support   the   SEMI   E30
(according  to  the  GEM  capabilities  required  per
Section 13) required remote commands.
• All the remote commands defined by Stocker SEM
are required to be implemented as specified.
• The alphanumeric strings defined by Stocker SEM
for RCMD and CPNAME are required.
• A completed table must be generated where an “X”
is  placed  in  the  table  for  each  state  that  a  given
command is valid.
• If  additional  remote  commands  are  supported  then
a  “remote  commands  versus  valid  states”  matrix
must be generated for these additional commands.
• For    additional    commands,    a    table    must    be
generated    similar    to    the    remote    command
descriptions summary.
12. 3  Remote Commands Description
12. 3.1  ABORT   —   This   command   terminates   the
activity  of  a  specific  TRANSFER  command  based  on
CommandID  while  the  command  is  in  the  ACTIVE
state.    This  command  might  not  be  accepted  due  to
mechanical  issues  if  the  stocker  is  in  a  specific  con-
dition  (e.g.,  moving  a  carrier).    The  exact  conditions
surrounding  when  the  ABORT  command  is  not  ac-
cepted  by  the  SC  must  be  documented  by  the  Stocker
SEM  equipment  supplier.    If  accepted,  this  command
shall clear any error condition that was generated by the
TRANSFER  command  being  aborted.    For  example,  if
a ‘DestOccupied’ or ‘SourceEmpty’ error had occurred,
the error shall be cleared.
12. 3.2  CANCEL   —   This   command   terminates   the
activity  of  a  specific  TRANSFER  command  based  on
CommandID  while  the  command  is  in  the  QUEUED
state.    This  command  must  always  be  accepted  by  the
SC when in the QUEUED state.
12. 3.3  INSTALL  —  This  is  used  to  update  the  SC
database  by  adding  a  specified  CarrierID  record  to  a
specified  CarrierLoc.    If  the  CarrierID  specified  by  the
Host  is  already  in  the  SC  database  then  the  additional
fields   will   be   updated   based   on   the   information
contained in this command.
12. 3.4  LOCATE — This command is used by the Host
to query the SC for database carrier information.
12. 3.5  PAUSE  —  This  command  puts  the  SC  in  the
PAUSING state.
12. 3.6  REMOVE  —  This  is  used  to  update  the  SC
database by deleting a specified carrier.  This command
would be used for database recovery.
12. 3.7  RESUME —  This  command  puts  the  SC  in  the
AUTO state.
12. 3.8  RETRY  (Supplier  Option)  —  This  command
may  be  used  by  the  Host  when  an  error  is  encountered
by  the  stocker.  The  Host  would  use  this  command  to
allow  the  stocker  to  retry  the  movement  which  gener-
ated the error condition.  This command shall clear the
error condition that is being addressed by the command.
12. 3.9  TRANSFER  —  This  is  a  SECS-II  Enhanced
Remote    Command    instead    of    a    SECS-II    Host
Command  Send  (S2,F49  instead  of  S2,F41).    See  the
examples in Section 15.1 for details.
12. 3.10  This  command  is  used  to  perform  the  entire
transfer   command   for   the   carrier   to   be   transferred
between  stocker  locations.    The  execution  of  this  com-
mand will include allocation of resources, acquiring the
carrier,  moving  the  carrier  to  the  destination,  queuing
the   carrier   at   an   alternate   destination   (if   needed),
depositing  the  carrier,  and  returning  the  resources  for
other  use.  The  number  of  carriers  in  the  TRANSFER
command  is  always  equal  to  one  (i.e.,  the  size  of  the
transfer unit is always equal to one carrier).
12. 3.11  INFOUPDATE  —  This  is  used  to  associate
information  with  a  carrier  while  in  the  SC  database.
This command is an optional feature and is not required
for compliance.  If this command is not supported, then
a  HCACK  of  ‘1’  (Command  does  not  exist  )  shall  be
returned.    If  the  carrier  does  not  exist  in  the  SC
database, then a HCACK of ‘3’ (At least one parameter
is invalid) shall be returned.


SEMI E88-1104
E
© SEMI 1999, 2004 27
12. 3.12  Remote Commands and Associated Host Command Parameters
12. 3.12.1  This  table  describes  the  allowable  command  parameters    (CPNAME)  for  each  remote  command
(RCMD).  Equipment  shall  support  all  parameters.  The  column  marked  Req/Opt,  specifies  which  parameters  are
required to be sent by the host and which parameters may be optionally sent by the host.
Table 11  Allowable Command Parameters
Parameters
Remote
Command
Cpname               Req/OptComment
ABORT “COMMANDID” R Must specify the commandID that was used for the TRANSFER command
that is being ABORT’ed.
CANCEL “COMMANDID” R Must specify the commandID that was used for the TRANSFER command
that is being CANCEL’ed.
INSTALL             “CARRIERID”
“CARRIERLOC”
R
R

“CARRIERID”
or
“ZONENAME”
or
“CARRIERLOC”
O

SC will check its database and return the carrier information to the Host
with a single ‘CarrierLocateCompleted’ event for all relevant carriers.  If
the Host issues the LOCATE command with CARRIERID then SC returns
information associated with the carrier specified by the Host.
If the Host issues the LOCATE command with ZONENAME or
CARRIERLOC, all carrier information in the specified area (ZONENAME
or CARRIERLOC) will be returned.
If the Host issues the LOCATE command without a Cpname, all carrier
information in the SC database will be returned.
LOCATE
“COMMANDID”                O

Unique Command Identifier for the LOCATE command.  It does not have
a relationship to the CommandId of a TRANSFER command.
PAUSE None N/A Once received by the SC, the SC will queue any TRANSFER commands
until the SC receives and successfully executes the RESUME command.
Once in the AUTO state the SC will process the TRANSFER commands in
its queue.
REMOVE             “CARRIERID”             R
RESUME None N/A Returns the PAUSEd SC to the AUTO state.
RETRY
Supplier Option
“ERRORNUMBER” R Since more than one error can occur for the same TRANSFER command,
an ERRORNUMBER must be used to identify the ERRORNUMBER to
which to apply the RETRY.
TRANSFER          “COMMANDINFO”
“TRANSFERINFO”
R
R

INFOUPDATE     “CARRIERID”
“hostDefined”
R
O
The “HostDefined” cpnames are used to indicate the name of the data that
is to be associated with a carrier. See Section 13 for example scenarios.
The data associated with a carrier is for display purposes only and
information such as the carrier’s current location and state cannot be
changed with this command.

12. 3.13  Host Command Parameters Name and Values
Table 12  Host Command Parameters CPNAMES
Parameter Value
Cpname
Description                                                               Range                                                               Format
CARRIERID Unique ID of the carrier.
A[1−64]
CARRIERLOC Unique carrier location within the stocker.
A[1−64]
COMMANDID Unique command identifier created by the Host.
A[1−64]


SEMI E88-1104
E
© SEMI 1999, 2004 28
Parameter Value
Cpname
Description                                                               Range                                                               Format
COMMANDINFO    L,2
COMMANDID
PRIORITY
L,2
DEST Destination location identifier. Must be a valid ZoneName.
Must be a loading port for a move to an
output shuttle (DEST = LP).
A[1−64]
ERRORNUMBER    Unique error identifier created by the stocker.
A[1−64]
PRIORITY Remote command priority. 0 is not valid.
1 is the LOWEST priority, 99 is the highest
priority.
U2
SOURCE Unique source location identifier. Stocker Robot/Crane is a valid SOURCE
(Supplier Option).
A[1−64]
TRANSFERINFO     L,3
CARRIERID
SOURCE
DEST
SOURCE may intentionally be left blank by
the Host.  If this is true, the stocker must
determine the carrier’s current location by
checking its database for the specified
CARRIERID.
L,3

12. 3.14  Remote Commands versus SC, Transfer Command and Stocker Carrier States
12. 3.14.1  The  following  table  indicates  SC,  TRANSFER  Command  and  Stocker  Carrier  States  where  the  remote
commands  are  allowed.  This  is  indicated  with  a  “X”  mark.    Remote  commands  act  independently  of  other  state
models  (e.g.,  Stocker  Crane  States  are  independent  from  the  Stocker  SEM  remote  commands).    “NA”  (Not
Applicable) means that States and Remote Commands have no direct relationship.
Table 13  Remote Commands versus SC and TRANSFER Command  States
COMMAND

TRANSFER
RETRY
RESUME
REMOVE
PAUSE
LOCATE
INSTALL CANCEL
ABORT
INFOUPDATE
SC STATE

AUTO       X       X                X       X       X       X       X       X       X
ALARMS       X       X       X       X       X       X       X       X       X       X
SC INIT
NO       ALARMS       X                X       X       X       X       X       X       X       X
PAUSED       X       X       X       X                X       X       X       X       X
PAUSING       X       X       X       X                X       X       X       X       X
TRANSFER COMMAND STATE

ACTIVE        (PAUSED)        NAX        NA        NAX                         X        NA
ACTIVE (QUEUED AT ALT.)       NA       NA       NAX                          X       NA
ACTIVE       (TRANSFERRING)       NA       NA       NAX                          X       NA
ABORTING       NA       NA       NAX                                   NA
CANCELING       NA       NA       NAX                                   NA


SEMI E88-1104
E
© SEMI 1999, 2004 29
QUEUED        NA        NA        NAX                X                NA
STOCKER CARRIER STATE

STORED       (ALTERNATE)              NA    NA       NAX               NA       X       X
STORED     (COMPLETED)     X     NA    NAX     NAX      X     NA              X
TRANSFERRING       X       NA    NA       NAX               NA       NA       X
WAIT     IN     X     NA    NAX     NAX      X     NA     NA     X
WAIT       OUT              NA    NAX       NAX       X       NA       NA       X

12. 4  Remote Command Relies
12. 4.1  For  a  TRANSFER  remote  command  the  HCACK  in  the  reply  message  must  return  an  error  6  (No  such
Object  Exists)  if  the  SOURCE  is  not  specified  and  the  CARRIERID  is  not  in  the  SC  database.  If  the  SOURCE  is
invalid  (i.e.  not  a  valid  CarrierLoc),  then  the  HCACK  in  the  reply  message  must  return  an  error  of  3  (Invalid
Parameter).
12. 4.2  For a LOCATE remote command the HCACK in the reply message must return an error 6 (No such Object
Exists) if value specified for the CARRIERID, ZONENAME, or CARRIERLOC does not exist in the SC database.
13  Scenarios
13. 1  The scenarios that follow represent Application Notes. In the scenarios, all unique Remote CommandIDs must
initially be created and sent by the Host.  Subsequent event reports sent from the equipment referring to the status of
a particular remote command must return the applicable CommandID.  All collection events identified in Table 6 are
assumed  to  be  enabled  (per  the  SEMI  E30  definition/scenario)  throughout  the  following  scenarios.    Variable  data
specified   in   the   Host   commands   has   been   chosen   arbitrarily   for   the   purpose   of   demonstrating   message
structure/content.    The  Collection  Event  Report  definitions  contained  in  the  scenarios  are  examples  that  could  be
defined by the host.


SEMI E88-1104
E
© SEMI 1999, 2004 30
Normal Operation
13. 1.1  Carrier Transfer from an Input to a Storage Location (No ID Reader at Input Port)
13. 1.1.1  The carrier is transferred from a stocker input port to a storage location.  The SC inserts the carrier into the
database  based  on  the  CarrierID  sent  by  the  Host  in  the  TRANSFER  command.    This  is  the  scenario  when  the
stocker does not have a carrier ID reader at the input port.  A good example of this would be for a interbay transport
input port.
STEP             COMMENTS               HOST             SC                COMMENTS
1.  Carrier 123456 enters the
domain of the stocker

2.  Since there is no ID reader,
the SC can choose any arbitrary
CarrierID to internally track
the carrier; However, the SC
must send the empty string as
the CarrierID to the Host so
that the Host can distinguish
this condition.  It is the Host
responsibility to recognize
that the empty string “” for
the CarrierID denotes that a
carrier ID reader does not
exist at this input port.

ÅS6,F11
Event Report Send  (ERS)
CarrierWaitIn
·     CarrierID = “” /* Empty
String */
·     CarrierLoc
·     CarrierZoneName
3.  Event Report Acknowledge (ERA)
S6,F12
Æ

4.
ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
5.  Event Report Acknowledge (ERA)
S6,F12Æ

# 6

6.  Enhanced Remote Command (ERC)
TRANSFER
·     COMMANDID
·     PRIORITY
·     TRANSFERINFO
1.  CARRIERID =  “123456”
2.  SOURCE = blank
3.  DEST = “STORAGE”
S2,F49
Æ
In this scenario SOURCE is the
name of an input port position
and DEST is the ZoneName
STORAGE which is a SC selected
shelf.  Both CARRIERID and
SOURCE must be included to do
an automatic install of the
carrier into the SC database.

# 7

7.
ÅS2,F50
Enhanced Remote Command
Acknowledge (ERCA)

# 8

8.
ÅS6,F11
Event Report Send (ERS)
TransferInitiated
·     CommandID     =
·     CarrierID = “123456”
·     CarrierLoc     =
·     CarrierZoneName     =
·     Dest = “STORAGE”

# 9

9.  Event Report Acknowledge (ERA)
S6,F12
Æ

# 10

10.
ÅS6,F11
Event Report Send (ERS)
CarrierTransferring
·     CarrierID = “123456”
·     CarrierLoc
·     CarrierZoneName

# 11

11.  Event Report Acknowledge (ERA)
S6,F12
Æ

# 12

12.
ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange

# 13

13.  Event Report Acknowledge (ERA)
S6,F12
Æ

# 14

14.
ÅS6,F11
Event Report Send (ERS)
CraneActive

# 15

15.  Event Report Acknowledge (ERA)
S6,F12Æ



SEMI E88-1104
E
© SEMI 1999, 2004 31
STEP             COMMENTS               HOST             SC                COMMENTS

# 16

16.
ÅS6,F11
Event Report Send (ERS)
TransferCompleted
·     CommandID
·     CarrierID = “123456”
·     CarrierLoc = “112”
·     ResultCode = 0
·     CarrierZoneName     =
“STORAGE”

# 17

17.  Event Report Acknowledge (ERA)
S6,F12Æ

# 18

18.
ÅS6,F11
Event Report Send (ERS)
CarrierStored
·     CarrierID = “123456”
·     CarrierLoc = “112”
·     CarrierZoneName     =
“STORAGE”

# 19

19.  Event Report Acknowledge (ERA)
S6,F12Æ

# 20

20.
ÅS6,F11
Event Report Send (ERS)
CraneIdle

# 21

21.  Event Report Acknowledge (ERA)
S6,F12
Æ


13. 1.2  Carrier Transfer from an Input to a Storage Location (ID Reader at Input Port)
13. 1.2.1  The  carrier  is  transferred  from  a  stocker  input  port  to  a  storage  location.    The  carrier  is  automatically
inserted into the SC database by the SC based on the carrier ID read which occurs on the stocker input port.
STEP             COMMENTS               HOST             SC                COMMENTS
1.
Carrier 123456 enters the
domain of the stocker

2.
ÅS6,F11
Event Report Send (ERS)
CarrierIDRead
·     CarrierID = “123456”
·     CarrierLoc = SOURCE
·     IDReadStatus = 0
3.
Event Report Acknowledge (ERA)
S6,F12
Æ

4.

ÅS6,F11
Event Report Send (ERS)
CarrierWaitIn
·     CarrierID = “123456”
·     CarrierLoc = SOURCE
5.
Event Report Acknowledge (ERA)
S6,F12
Æ

6.

ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
7.
Event Report Acknowledge (ERA)
S6,F12
Æ

8.
Enhanced Remote Command (ERC)
TRANSFER
·     COMMANDID
·     PRIORITY
·     TRANSFERINFO
1.  CARRIERID =  “123456”
2.  SOURCE
3.  DEST = “STORAGE”
S2,F49
Æ
In this scenario SOURCE is the
name of a input port position
and DEST is the ZoneName
STORAGE which is a SC selected
shelf.  SOURCE is optional
since the SC knows where the
CARRIERID is located.
9.

ÅS2,F50
Enhanced Remote Command
Acknowledge (ERCA)
10.

ÅS6,F11
Event Report Send (ERS)
TransferInitiated
·     CommandID
·     CarrierID = “123456”
·     CarrierLoc
·     CarrierZoneName
·     Dest = “STORAGE”
11.
Event Report Acknowledge (ERA)
S6,F12
Æ



SEMI E88-1104
E
© SEMI 1999, 2004 32
STEP             COMMENTS               HOST             SC                COMMENTS
12.

ÅS6,F11
Event Report Send (ERS)
CarrierTransferring
·     CarrierID = “123456”
·     CarrierLoc
·     CarrierZoneName
13.
Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12Æ

14.

ÅS6,F11
Event Report Send (ERS)
CraneActive
15.
Event Report Acknowledge (ERA)
S6,F12
Æ

16.

ÅS6,F11
Event Report Send (ERS)
TransferCompleted
·     CommandID
·     CarrierID = “123456”
·     CarrierLoc
·     ResultCode = “0”
·     CarrierZoneName
17.
Event Report Acknowledge (ERA)
S6,F12
Æ

18.

ÅS6,F11
Event Report Send (ERS)
CarrierStored
·     CarrierID
·     CarrierLoc = “112”
·     CarrierZoneName
19.
Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12
Æ

20.
ÅS6,F11
Event Report Send (ERS)
CraneIdle
21.
Event Report Acknowledge (ERA)
S6,F12
Æ


13. 1.3  Carrier Transfer to an Automated Stocker Output Port
13. 1.3.1  The carrier is transferred from a stocker location (storage location or input port) to an output port where it
is then automatically transferred (Carrier Handoff) to an automated vehicle such as an OHV or AGV.
STEP             COMMENTS               HOST             SC                COMMENTS
1.
Enhanced Remote Command (ERC)
TRANSFER
·     COMMANDID
·     PRIORITY
·     TRANSFERINFO
1.  CARRIERID
2.  SOURCE
3.  DEST = “LP1”
S2,F49
Æ
In this scenario SOURCE is the
name of a CarrierLoc or
ZoneName and DEST is the name
of a loading port.  Either
CARRIERID or SOURCE is
optional.
2.

ÅS2,F50
Enhanced Remote Command
Acknowledge (ERCA)
3.

ÅS6,F11
Event Report Send (ERS)
TransferInitiated
·     CommandID
·     CarrierID
·     CarrierLoc
·     CarrierZoneName
·     Dest = “LP1”
4.
Event Report Acknowledge (ERA)
S6,F12
Æ

5.

ÅS6,F11
Event Report Send (ERS)
CarrierTransferring
·     CarrierID
·     CarrierLoc
·     CarrierZoneName


SEMI E88-1104
E
© SEMI 1999, 2004 33
STEP             COMMENTS               HOST             SC                COMMENTS
6.
Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12
Æ

7.

ÅS6,F11
Event Report Send (ERS)
CraneActive
8.
Event Report Acknowledge (ERA)
S6,F12
Æ

9.

ÅS6,F11
Event Report Send (ERS)
CraneIdle
10.
Event Report Acknowledge (ERA)
S6,F12
Æ

11.
ÅS6,F11
Event Report Send (ERS)
TransferCompleted
·     CommandID
·     CarrierID
·     CarrierLoc
·     ResultCode = “0”
·     CarrierZoneName
12.
Event Report Acknowledge (ERA)
S6,F12
Æ

13.
ÅS6,F11
Event Report Send (ERS)
CarrierWaitOut
·     CarrierID
·     CarrierLoc = “LP1”
·     CarrierZoneName
·     PortType = “LP”
14.
Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12Æ

15.
Carrier leaves the domain of
the stocker as it is acquired
by the transport vehicle.

16.
ÅS6,F11
Event Report Send (ERS)
CarrierRemoved
·     CarrierID
·     HandoffType = AUTOMATED
17.
Event Report Acknowledge (ERA)
S6,F12
Æ

18.

ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
19.
Event Report Acknowledge (ERA)
S6,F12
Æ


13. 1.4  Carrier Transfer to a Stocker Output Port Requiring Intermediate Storage
13. 1.4.1  The  carrier  is  requested  by  the  Host  to  be  transferred  from  a  stocker  input  port  (with  an  ID  reader)  to  a
manual  output  port  but  requires  intermediate  storage  due  to  the  destination  output  port  being  fully  occupied  with
carriers.
STEP             COMMENTS               HOST             SC                COMMENTS
1.
Carrier 123456 is sitting at
the stocker crane accessible
input port position.

2.   Enhanced Remote Command (ERC)
TRANSFER
·     COMMANDID
·     PRIORITY
·     TRANSFERINFO
1.  CARRIERID
2.  SOURCE
3.  DEST = “LP”
S2,F49
Æ
In this scenario SOURCE is the
name of an in
put port position
and DEST is the name of a
loading port.  Either
CARRIERID or SOURCE is
optional.
3.

ÅS2,F50
Enhanced Remote Command
Acknowledge (ERCA)


SEMI E88-1104
E
© SEMI 1999, 2004 34
STEP             COMMENTS               HOST             SC                COMMENTS
4.

ÅS6,F11
Event Report Send (ERS)
TransferInitiated
·     CommandID
·     CarrierID
·     CarrierLoc
·     CarrierZoneName
·     Dest = “LP”
5.
Event Report Acknowledge (ERA)
S6,F12
Æ

6.

ÅS6,F11
Event Report Send (ERS)
CarrierTransferring
·     CarrierID
·     CarrierLoc
·     CarrierZoneName
7.
Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12
Æ

8.

ÅS6,F11
Event Report Send (ERS)
CraneActive
9.
Event Report Acknowledge (ERA)
S6,F12
Æ

10.

ÅS6,F11
Event Report Send (ERS)
CraneIdle
11.
Event Report Acknowledge (ERA)
S6,F12
Æ

12.

ÅS6,F11
Event Report Send (ERS)
CarrierStoredAlt
·     CommandID
·     CarrierID
·     CarrierLoc = “132”
·     Dest = “LP”
·     CarrierZoneName
13.
Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12Æ

14.

ÅS6,F11
Event Report Send (ERS)
CarrierResumed
·     CommandID
·     CarrierID
·     CarrierLoc = “132”
·     Dest = “LP”
·     CarrierZoneName
15.
Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12
Æ

16.

ÅS6,F11
Event Report Send (ERS)
CraneActive
17.
Event Report Acknowledge (ERA)
S6,F12
Æ

18.

ÅS6,F11
Event Report Send (ERS)
CraneIdle
19.
Event Report Acknowledge (ERA)
S6,F12
Æ

20.
ÅS6,F11
Event Report Send (ERS)
TransferCompleted
·     CommandID
·     CarrierID
·     CarrierLoc
·     ResultCode = “0”
·     CarrierZoneName
21.
Event Report Acknowledge (ERA)
S6,F12
Æ



SEMI E88-1104
E
© SEMI 1999, 2004 35
STEP             COMMENTS               HOST             SC                COMMENTS

# 22

22.

ÅS6,F11
Event Report Send (ERS)
CarrierWaitOut
·     CarrierID
·     CarrierLoc = “LP”
·     CarrierZoneName
·     PortType = “LP”

# 23

23.
Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12Æ

# 24

24.
Carrier leaves the domain of
the stocker as it is acquired
manually by a PGV.

# 25

25.

ÅS6,F11
Event Report Send (ERS)
CarrierRemoved
·     CarrierID
·     HandoffType = MANUAL

# 26

26.
Event Report Acknowledge (ERA)
S6,F12
Æ

# 27

27.

ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange

# 28

28.
Event Report Acknowledge (ERA)
S6,F12
Æ


13. 1.5  Carrier Transfer to an Automated Stocker Output with Multiple Loading Ports
13. 1.5.1  Three carriers are requested to the stocker output.  The output shuttle consists of multiple carrier positions
including  the  stocker  crane  set  down  port    (OP  –  location  03)  and  two  AGV  accessible  port  locations  (LPs  –
locations  05  and  06).    The  port  shuttle  also  has  a  BP  (location  04)  that  is  the  location  reached  by  a  carrier  before
reaching the LP positions.  The Host sends the three Transfer commands to the stocker and they are queued.  The
first two Transfer commands send carriers to LP locations 05 and 06 respectively.  These carriers are to be loaded by
the  same  AGV.    The  third  carrier  is  also  requested  to  LP  05.    Each  carrier  is  transferred  to  the  OP  where  it  then
automatically  travels  forward  on  the  shuttle  toward  the  BP  and  LPs  (see  figure  in  Section  6.16).    The  first  two
carriers  arrive  at  the  LPs.    The  vehicle  removes  the  two  carriers  from  the  LPs.    The  third  carrier  then  shuttles
forward to the LP location 05.

STEP             COMMENTS               HOST             SC                COMMENTS
1.  Enhanced Remote Command (ERC)
TRANSFER
·     COMMANDID = “060658”
·     PRIORITY = “20”
·     TRANSFERINFO
1.  CARRIERID = “11111”
2.  SOURCE
3.  DEST = “06”
S2,F49
Æ
In this scenario SOURCE is the
name of a CarrierLoc or
ZoneName and DEST is the name
of a “loading port.”  Either
CARRIERID or SOURCE may be
empty.
2.
ÅS2,F50
Enhanced Remote Command
Acknowledge (ERCA)
3.
ÅS6,F11
Event Report Send (ERS)
TransferInitiated
·     CommandID = “060658”
·     CarrierID = “11111”
·     CarrierLoc
·     CarrierZoneName
·     Dest = “06”
4.  Event Report Acknowledge (ERA)
S6,F12
Æ

5.
ÅS6,F11
Event Report Send (ERS)
CarrierTransferring
·     CarrierID = “11111”
·     CarrierLoc
·     CarrierZoneName
6.  Event Report Acknowledge (ERA)
S6,F12
Æ



SEMI E88-1104
E
© SEMI 1999, 2004 36
STEP             COMMENTS               HOST             SC                COMMENTS

ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12Æ

7.
ÅS6,F11
Event Report Send (ERS)
CraneActive
8.  Event Report Acknowledge (ERA)
S6,F12Æ

9.  The Host issues the other two
commands for carriers “22222”
and “33333.”
These commands are queued by
the stocker because it is
active performing the command
for carrier “11111.”

10.  Enhanced Remote Command (ERC)
TRANSFER
·     COMMANDID = “101883”
·     PRIORITY = “21”
·     TRANSFERINFO
1.  CARRIERID = “22222”
2.  SOURCE
3.  DEST = “05”
S2,F49Æ
In this scenario SOURCE is the
name of a CarrierLoc or
ZoneName and DEST is the name
of an “loading port.”  Either
CARRIERID or SOURCE may be
empty.
11.
ÅS2,F50
Enhanced Remote Command
Acknowledge (ERCA)
12.  Enhanced Remote Command (ERC)
TRANSFER
·     COMMANDID = “012155”
·     PRIORITY = “30”
·     TRANSFERINFO
1.  CARRIERID = “33333”
2.  SOURCE
3.  DEST = “05”
S2,F49
Æ
In this scenario SOURCE is the
name of a CarrierLoc or
ZoneName and DEST is the name
of an output port.  Either
CARRIERID or SOURCE may be
empty.
13.
ÅS2,F50
Enhanced Remote Command
Acknowledge (ERCA)
16.  The first carrier is set down
by the stocker on the output
port.

17.
ÅS6,F11
Event Report Send (ERS)
CraneIdle
18.  Event Report Acknowledge (ERA)
S6,F12
Æ

19.
ÅS6,F11
Event Report Send (ERS)
CarrierWaitOut
·     CarrierID = “11111”
·     CarrierLoc = “03”
·     CarrierZoneName
·     PortType = “OP”
20.  Event Report Acknowledge (ERA)
S6,F12
Æ

21.  Now that carrier “11111” has
left the “stocker set down”
position of the output port,
the stocker initiates the next
highest priority queued
command.

22.
ÅS6,F11
Event Report Send (ERS)
TransferInitiated
·     CommandID = “012155”
·     CarrierID = “33333”
·     CarrierLoc
·     CarrierZoneName
·     Dest = “05”
23.  Event Report Acknowledge (ERA)
S6,F12
Æ



SEMI E88-1104
E
© SEMI 1999, 2004 37
STEP             COMMENTS               HOST             SC                COMMENTS
24.
ÅS6,F11
Event Report Send (ERS)
CarrierTransferring
·     CarrierID = “33333”
·     CarrierLoc
·     CarrierZoneName
25.  Event Report Acknowledge (ERA)
S6,F12Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12Æ

26.
ÅS6,F11
Event Report Send (ERS)
CraneActive
27.  Event Report Acknowledge (ERA)
S6,F12
Æ

28.  Carrier “11111” arrives at the
buffer port.

# 29

29.
ÅS6,F11
Event Report Send (ERS)
CarrierWaitOut
·     CarrierID = “11111”
·     CarrierLoc = “04”
·     PortType = “BP”
·     CarrierZoneName

# 30

30.  Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12Æ

# 31

31.  Carrier “11111” arrives at the
first vehicle loading port.

# 32

32.
ÅS6,F11
Event Report Send (ERS)
CarrierWaitOut
·     CarrierID = “11111”
·     CarrierLoc = “05”
·     PortType = “LP”
·     CarrierZoneName

# 33

33.  Event Report Acknowledge (ERA)
S6,F12
Æ

# 34

34.  Carrier “11111” can cycle
forward one more port so it
does.

# 35

35.  Carrier “11111” arrives at the
vehicle loading “end” port
(“06”).

# 36

36.
ÅS6,F11
Event Report Send (ERS)
TransferCompleted
·     CommandID = “060658”
·     ResultCode = 0
·     CarrierID = “11111”
·     CarrierLoc = “06”
·     CarrierZoneName

# 37

37.  Event Report Acknowledge (ERA)
S6,F12
Æ

# 38

38.
ÅS6,F11
Event Report Send (ERS)
CarrierWaitOut
·     CarrierID = “11111”
·     CarrierLoc = “06”
·     PortType = “LP”
·     CarrierZoneName

# 39

39.  Event Report Acknowledge (ERA)
S6,F12
Æ

# 40

40.  The stocker sets down carrier
“33333” on the output port.

# 41

41.
ÅS6,F11
Event Report Send (ERS)
CraneIdle

# 42

42.  Event Report Acknowledge (ERA)
S6,F12Æ



SEMI E88-1104
E
© SEMI 1999, 2004 38
STEP             COMMENTS               HOST             SC                COMMENTS

# 43

43.
ÅS6,F11
Event Report Send (ERS)
CarrierWaitOut
·     CarrierID = “33333”
·     CarrierLoc = “03”
·     CarrierZoneName
·     PortType = “OP”

# 44

44.  Event Report Acknowledge (ERA)
S6,F12
Æ

# 45

45.  Now the stocker can initiate
the next transfer command.

# 46

46.
ÅS6,F11
Event Report Send (ERS)
TransferInitiated
·     CommandID = “101883”
·     CarrierID = “22222”
·     CarrierLoc
·     CarrierZoneName
·     Dest     “05”

# 47

47.  Event Report Acknowledge (ERA)
S6,F12
Æ

# 48

48.
ÅS6,F11
Event Report Send (ERS)
CarrierTransferring
·     CarrierID = “22222”
·     CarrierLoc
·     CarrierZoneName

# 49

49.  Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12
Æ

# 50

50.
ÅS6,F11
Event Report Send (ERS)
CraneActive

# 51

51.  Event Report Acknowledge (ERA)
S6,F12
Æ

# 52

52.  Carrier “33333” arrives at the
buffer port.

# 53

53.
ÅS6,F11
Event Report Send (ERS)
CarrierWaitOut
·     CarrierID = “33333”
·     CarrierLoc = “04”
·     PortType = “BP”
·     CarrierZoneName

# 54

54.  Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12
Æ

# 55

55.  At this point, the
CarrierWaitOut at BP event
could be o
ptionally used as an
advanced notification to the
Host to
go ahead and request a
vehicle to come and pick up
carriers “11111” and “33333”.

# 56

56.  Carrier “33333” arrives at the
first vehicle loading port
(its destination).

# 57

57.
ÅS6,F11
Event Report Send (ERS)
TransferCompleted
·     CommandID = “012155”
·     ResultCode = 0
·     CarrierID = “33333”
·     CarrierLoc = “05”
·     CarrierZoneName

# 58

58.  Event Report Acknowledge (ERA)
S6,F12
Æ



SEMI E88-1104
E
© SEMI 1999, 2004 39
STEP             COMMENTS               HOST             SC                COMMENTS

# 59

59.
ÅS6,F11
Event Report Send (ERS)
CarrierWaitOut
·     CarrierID = “33333”
·     CarrierLoc = “05”
·     PortType = “LP”
·     CarrierZoneName

# 60

60.  Event Report Acknowledge (ERA)
S6,F12Æ

# 61

61.  Now carriers “11111” and
“33333” are on the two vehicle
loading port locations of the
output port.

# 62

62.
ÅS6,F11
Event Report Send (ERS)
CraneIdle

# 63

63.  Event Report Acknowledge (ERA)
S6,F12
Æ

# 64

64.
ÅS6,F11
Event Report Send (ERS)
CarrierWaitOut
·     CarrierID = “22222”
·     CarrierLoc = “03”
·     CarrierZoneName
·     PortType = “OP”

# 65

65.  Event Report Acknowledge (ERA)
S6,F12
Æ

# 66

66.  Carrier “22222” arrives at the
buffer port.

# 67

67.
ÅS6,F11
Event Report Send (ERS)
CarrierWaitOut
·     CarrierID = “22222”
·     CarrierLoc = “04”
·     PortType = “BP”
·     CarrierZoneName

# 68

68.  Event Report Acknowledge (ERA)
S6,F12Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12Æ

# 69

69.  The vehicle arrives and
removes the two carriers from
the out
put port.  The carriers
leave the domain of the
stocker.

# 70

70.
ÅS6,F11
Event Report Send (ERS)
CarrierRemoved
·     CarrierID = “33333”
·     HandoffType = AUTOMATED

# 71

71.
ÅS6,F11
Event Report Send (ERS)
CarrierRemoved
·     CarrierID = “11111”
·     HandoffType = AUTOMATED

# 72

72.  Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12
Æ

# 73

73.  Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12Æ

# 74

74.  The third carrier is now able
to “cycle forward” on the
output port to a vehicle
loading port.



SEMI E88-1104
E
© SEMI 1999, 2004 40
STEP             COMMENTS               HOST             SC                COMMENTS

# 75

75.
ÅS6,F11
Event Report Send (ERS)
TransferCompleted
·     CommandID = “101883”
·     ResultCode = 0
·     CarrierID = “22222”
·     CarrierLoc = “05”
·     CarrierZoneName

# 76

76.  Event Report Acknowledge (ERA)
S6,F12Æ

# 77

77.
ÅS6,F11
Event Report Send (ERS)
CarrierWaitOut
·     CarrierID = “22222”
·     CarrierLoc = “05”
·     PortType = “LP”
·     CarrierZoneName

# 78

78.  Event Report Acknowledge (ERA)
S6,F12Æ

# 79

79.  No carrier is occupying the
“06” port location, however
because the requested
destination for “22222” was
“05” the carrier does not
cycle forward on the output
conveyor.  The carrier waits
at location “05” for its
vehicle.


13. 1.6  Database Operations (Install, Remove, Locate, and Update a Carrier Record)
STEP             COMMENTS               HOST             SC                COMMENTS
1.
The host desires to insert a SC
database entry for carrier
123456 at stocker storage
location 123

2.   Host Command Send (HCS)
INSTALL
·     CARRIERID = “123456”
·     CARRIERLOC = “123”
S2,F41
Æ

3.

ÅS2,F42
Host Command Acknowledge (HCA)
4.

ÅS6,F11
Event Report Send (ERS)
CarrierInstallCompleted
·     CarrierID = “123456”
·     CarrierLoc = “123”
·     CarrierZoneName
5.
Event Report Acknowledge (ERA)
S6,F12
Æ

6.

ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
7.
Event Report Acknowledge (ERA)
S6,F12
Æ


STEP             COMMENTS               HOST             SC                COMMENTS
1.
The host desires to remove the
SC database entry for carrier
123456 from the SC database.

2.
Host Command Send (HCS)
REMOVE
·     CARRIERID = “123456”
S2,F41
Æ

3.

ÅS2,F42
Host Command Acknowledge (HCA)
4.

ÅS6,F11
Event Report Send (ERS)
CarrierRemoveCompleted
·     CarrierID
·     CarrierLoc
·     CarrierZoneName
5.
Event Report Acknowledge (ERA)
S6,F12
Æ



SEMI E88-1104
E
© SEMI 1999, 2004 41
6.

ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
7.
Event Report Acknowledge (ERA)
S6,F12
Æ


STEP             COMMENTS               HOST             SC                COMMENTS
1.   The host desires to perform a
database lookup(locate) for
carrier 123456.

2.
Host Command Send (HCS)
LOCATE
·     CARRIERID = “123456”
S2,F41
Æ

3.

ÅS2,F42
Host Command Acknowledge (HCA)
4.
ÅS6,F11
Event Report Send (ERS)
CarrierLocateCompleted
·     CarrierID = “123456”
·     CarrierLoc = “123”
·     CarrierZoneName     =
“Zone1”
5.
Event Report Acknowledge (ERA)
S6,F12
Æ


STEP             COMMENTS               HOST             SC                COMMENTS
1.
The host desires to update the
SC database location of carrier
123456(currently thought to be
at stocker storage location
123).

2.   Host Command Send (HCS)
INSTALL
·     CARRIERID = “123456”
·     CARRIERLOC = “456”
S2,F41
Æ

3.

ÅS2,F42
Host Command Acknowledge (HCA)
4.

ÅS6,F11
Event Report Send (ERS)
CarrierInstallCompleted
·     CarrierID = “123456”
·     CarrierLoc = “456”
·     CarrierZoneName
The existin
g database entry for
carrier 123456 is updated with
the new CarrierLoc information.
5.   Event Report Acknowledge (ERA)
S6,F12
Æ


STEP             COMMENTS               HOST             SC                COMMENTS
1.  The host desires to update the
SC database with information
associated with carrier 123.

2.  Host Command Send (HCS)
INFOUPDATE
·     CARRIERID = “123”
·     LOTID = “LOT456”
·     Operation = “OP480”
S2,F41
Æ
The Lot and Operation
information associated with the
carrier are sent to the SC.
3.
ÅS2,F42
Host Command Acknowledge (HCA)

STEP             COMMENTS               HOST             SC                COMMENTS
1.  The host desires to remove the
LotId associated with carrier
123 from the SC database.

2.  Host Command Send (HCS)
INFOUPDATE
·     CARRIERID = “123”
·     LOTID = “”
S2,F41
Æ
The Lot and Operation
information associated with the
carrier are sent to the SC.
3.
ÅS2,F42
Host Command Acknowledge (HCA)


SEMI E88-1104
E
© SEMI 1999, 2004 42

13. 2  Anomaly Operation
13. 2.1  Source Location Empty during Transfer – Empty Retrieve
13. 2.1.1  The  Host  issues  a  TRANSFER  command  to  the  SC  to  transfer  a  carrier  from  an  input  port  to  a  storage
location.  When the stocker attempts to pick up the carrier at the input port, it finds that the source location is empty.
STEP             COMMENTS               HOST             SC               COMMENTS
1.
Carrier 123456 is sitting at
the stocker crane accessible
input port position.

2.
Enhanced Remote Command (ERC)
TRANSFER
·     COMMANDID
·     PRIORITY
·     TRANSFERINFO
1.  CARRIERID =  “123456”
2.  SOURCE
3.  DEST = “STORAGE”
S2,F49
Æ
In this scenario SOURCE is the
name of a input port position
and DEST is the ZoneName
STORAGE which is a SC selected
shelf.  SOURCE is optional
since the SC knows where the
CARRIERID is located.
3.

ÅS2,F50
Enhanced Remote Command
Acknowledge (ERCA)
4.

ÅS6,F11
Event Report Send (ERS)
TransferInitiated
·     CommandID
·     CarrierID = “123456”
·     CarrierLoc
·     CarrierZoneName
·     Dest = “STORAGE”
5.
Event Report Acknowledge (ERA)
S6,F12
Æ

6.

ÅS6,F11
Event Report Send (ERS)
CarrierTransferring
7.
Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12
Æ

8.

ÅS6,F11
Event Report Send (ERS)
CraneActive
9.
Event Report Acknowledge (ERA)
S6,F12
Æ

10.
The stocker attempts to pick
the carrier but finds the
position to be empty.
11.

ÅS5,F1
Alarm Report Send (ARS)
·     ALCD(Alarm     Set)
·     ALID
·     ALTX
12.
Alarm Report Acknowledge (ARA)
·     ACKC5
S5,F2
Æ

13.

ÅS6,F11
Event Report Send (ERS)
AlarmSetEvent
·     CommandID
·     ErrorID = SourceEmpty
·     StockerDeviceInfo
·     RecoveryOptions     =RETRY,
ABORT
14.
Event Report Acknowledge (ERA)
S6,F12
Æ

15.
The Host may choose to
disposition the error as
follows:
1. Retry the TRANSFER
·     The stocker attempts to
pick   the carrier from the
input port again




SEMI E88-1104
E
© SEMI 1999, 2004 43
13. 2.1.2  The  Host  issues  a  TRANSFER  command  to  the  SC  to  transfer  a  carrier  from  a  shelf  to  an  output  port.
When the stocker attempts to pick up the carrier at the shelf, it finds that the source location is empty.
STEP             COMMENTS              HOST             SC               COMMENTS
1.  Carrier 123456 is logically
sitting at a shelf location.

2.  Enhanced Remote Command (ERC)
TRANSFER
·     COMMANDID
·     PRIORITY
·     TRANSFERINFO
1.  CARRIERID =  “123456”
2.  SOURCE
3.  DEST = “LP1”
S2,F49
Æ
.
3.
ÅS2,F50
Enhanced Remote Command
Acknowledge (ERCA)
4.
ÅS6,F11
Event Report Send (ERS)
TransferInitiated
5.  Event Report Acknowledge (ERA)
S6,F12
Æ

6.
ÅS6,F11
Event Report Send (ERS)
CarrierTransferring
7.  Event Report Acknowledge (ERA)
S6,F12
Æ

8.
ÅS6,F11
Event Report Send (ERS)
CraneActive
9.  Event Report Acknowledge (ERA)
S6,F12Æ

10.                                                    The stocker attempts to pick
the carrier but finds the
position to be empty.
11.
ÅS5,F1
Alarm Report Send (ARS)
·     ALCD(Alarm     Set)
·     ALID
·     ALTX
12.  Alarm Report Acknowledge (ARA)
·     ACKC5
S5,F2
Æ

13.
ÅS6,F11
Event Report Send (ERS)
AlarmSetEvent
·     CommandID
·     ErrorID = SourceEmpty
·     StockerDeviceInfo
·     RecoveryOptions     =RETRY,
ABORT
14.  Event Report Acknowledge (ERA)
S6,F12
Æ

15.  The Host may choose to
disposition the error as
follows:
1. Retry the TRANSFER
·     The stocker attempts to
pick the carrier from the shelf
again


16.  The Host may choose to
disposition the error as
follows:
1. Abort the TRANSFER
The carrier is deleted from
the SC database and a
CarrierRemoveCompleted event
is generated as well as a
TransferAbortCompleted event
and a ZoneCapacityChange
event.



SEMI E88-1104
E
© SEMI 1999, 2004 44
13. 2.2  Dest Location Full during Transfer – Double Store
13. 2.2.1  The  Host  issues  a  TRANSFER  command  to  the  SC  to  transfer  a  carrier  from  an  input  port  to  a  storage
location.  When the stocker attempts to place the carrier to the storage location, it finds that the location is occupied.
STEP             COMMENTS               HOST             SC               COMMENTS
1.   Carrier 123456 is sitting at
the stocker crane accessible
input port position.

2.   Enhanced Remote Command (ERC)
TRANSFER
·     COMMANDID
·     PRIORITY
·     TRANSFERINFO
1.  CARRIERID =  “123456”
2.  SOURCE
3.  DEST = “STORAGE”
S2,F49
Æ
In this scenario SOURCE is the
name of a input port position
and DEST is the ZoneName
STORAGE which is a SC selected
shelf.  SOURCE is optional
since the SC knows where the
CARRIERID is located.
3.

ÅS2,F50
Enhanced Remote Command
Acknowledge (ERCA)
4.

ÅS6,F11
Event Report Send (ERS)
TransferInitiated
·     CommandID
·     CarrierID = “123456”
·     CarrierLoc
·     CarrierZoneName
·     Dest = “STORAGE”
5.
Event Report Acknowledge (ERA)
S6,F12
Æ

6.

ÅS6,F11
Event Report Send (ERS)
CarrierTransferring
·     CarrierID = “123456”
·     CarrierLoc
·     CarrierZoneName
7.
Event Report Acknowledge (ERA)
S6,F12
Æ


ÅS6,F11
Event Report Send (ERS)
ZoneCapacityChange
Event Report Acknowledge (ERA)
S6,F12
Æ

8.

ÅS6,F11
Event Report Send (ERS)
CraneActive
9.
Event Report Acknowledge (ERA)
S6,F12
Æ

10.
The stocker attempts to place
the carrier to the storage
location but finds the location
to be full.
11.

ÅS5,F1
Alarm Report Send (ARS)
·     ALCD(Alarm     Set)
·     ALID
·     ALTX
12.
Alarm Report Acknowledge (ARA)
·     ACKC5
S5,F2
Æ

13.

ÅS6,F11
Event Report Send (ERS)
AlarmSetEvent
·     CommandID
·     ErrorID = DestOccupied
·     StockerDeviceInfo
·     RecoveryOptions = RETRY,
ABORT /* Supplier Option */
14.
Event Report Acknowledge (ERA)
S6,F12
Æ

15.
Supplier  Option
The Host may choose to
disposition the error as
follows:
1. Retry the TRANSFER
·     The stocker attempts to
place the carrier to the dest
location again
This is a Supplier Option to
implement this Host initiated
recovery method.


SEMI E88-1104
E
© SEMI 1999, 2004 45
STEP             COMMENTS               HOST             SC               COMMENTS
16.
If the ABORT command is issued
by the Host, an unkown carrier
is created in the SC database
at the physical location
responsible for the error. This
generates a
CarrierInstalledCompleted event
for the newly created carrier.
The newly created carrier is
NOT automatically sent to the
LP of the manual output port.
The host can issue a new
TRANSFER command for the
carrier currently on the crane
as well as the recently created
unkown carrier.

17.   If the operator indicates, via
the stocker console (supplier
option), that the SC should
select another shelf location,
an unknown carrier is created
in the SC database at the
physical location responsible
for the error. This
generates a
CarrierInstalledCompleted event
for the newly created carrier.
The newly created carrier is
NOT automatically sent to the
LP of the manual output port.
The host can issue a new
Transfer command for the
recently created unknown
carrier. The original transfer
command for the carrier on the
crane completes with success at
the other shelf location.




SEMI E88-1104
E
© SEMI 1999, 2004 46
13. 2.3  Carrier ID Errors
13. 2.3.1  A carrier ID error occurred. See table below for possible Carrier ID errors and resolutions.
Table 14  Carrier ID Error Scenarios at Stocker Ports
ID Error Error Description Input Port Action Intrabay Output Port Action*
Failure ID read fails
Examples of reasons for failure are:
· Bad bar code reader
· Bad bar code label
· Obstruction of bar   code
read
·              Other
If IDReadFailureOption is ‘Reject’
Option 1.
1. CarrierIDRead event sent.
2. Carrier automatically sent to
LP of manual output port.
3. IDReadError event sent when
carrier arrives at LP of manual
output    port.
Option 2 - manual input port only.
1. CarrierIDRead event sent.
2. Stocker automatically sends
carrier back to operator      accessible
location of input     port(if necessary).
3. IDReadError event sent
Person picks up carrier from
input port with the PGV.

If IDReadFailureOption is
‘HostControlled’.
1. CarrierIDread event sent.
2. CarrierWaitIn event sent with
unkown carrier ID.
3. Host issues Transfer Command.
Either of the following scenarios are
acceptable based upon the supplier’s
option when moving carrier 456.
Option 1:
1. CarrierIDRead event sent.
2. Carrier continues as if there
was no reader and all events
(CarrierWaitOut,
TransferComplete, etc) will be
sent with the ID (456) of the
carrier as if there was no reader
at the port.
3. IDReadError event sent when
carrier arrives at LP of this
output    port.
Option 2:
1.
CarrierWaitOut event for 456.
2.
CarrierIDRead event for
Unknown carrier.
3. TransferComplete for 456 with
ID failure error.
4. SC automatically deletes carrier
456 from database and sends
CarrierRemoveCompleted event.
5.
SC automatically creates
Unknown carrier at the port and
sends event according to Carrier
State Model.
6.
Carrier continues to or remains at
LP of this output port with
CarrierWaitOut for created
Unknown carrier at each position.
7.
IDReadError event sent when
carrier arrives at LP of this output
port.


SEMI E88-1104
E
© SEMI 1999, 2004 47
ID Error Error Description Input Port Action Intrabay Output Port Action*
Duplicate    The carrier ID read results in an ID
that matches another entry already
in the SC database at a different
physical location.

Example at Input – Carrier 123
read at ID reader, but there is
already a database entry for  a
carrier with CarrierID 123.

Example at Output – Carrier 456
requested to ID reader but
CarrierIDRead result is 123, but
there is already a database entry for
a carrier with CarrierID 123.

DuplicateIDs are a subset of
unkownIDs with the following
format: UNKNOWNDUP-oldid-
Seq. Where Seq is a unique
sequence identifier.
1. CarrierIDRead event sent for
123.
2. If existing carrier 123 has a
TransferCommand,    send
TransferCompleted    with
‘Duplicate ID’ ResultCode.
3. SC automatically Deletes carrier
123 from SC database and sends
CarrierRemovedCompleted.
4. SC automatically creates a
DuplicateID carrier at previous
location and sends event according
to Carrier State Model.
5. CarrierWaitIn event for 123 at the
port.
If IDReadDuplicateOption is ‘Reject’
EITHER Option 1:
6a. Carrier 123 automatically sent
to LP of manual output port.
7a. IDReadError event sent for
123 when carrier arrives at LP
of manual output port.
8a. Host or manual maintenance
required to disposition the carrier
that SC thought was 123 that is
now a Duplicate.
OR Option 2 – manual input port
only:
6b. Stocker automatically sends
carrier back to operator
accessible location of input
port(if    necessary).
7b. IDReadError event sent.
8b. Person picks up carrier from
input port with the PGV.
9b. Host or manual maintenance
required to disposition the carrier
that SC thought was 123 that is
now a Duplicate.

If IDReadDuplicateOption is
‘HostControlled’:
6c. Host responsible for sending
appropriate Transfer Commands for
both    carriers.
If IfReadDuplicateOption is
‘Reject’ or ‘HostControlled’ and
carrier’s previous location is a shelf.
1. CarrierWaitOut event for 456.
2. CarrierIDRead 123 event sent.
3. If carrier ID has a
TransferCommand,    send
TransferCompleted    with
‘Duplicate ID’ ResultCode.
4. SC automatically deletes
carrier 123 from SC database
and sends
CarrierRemoveCompleted
event.
5. SC automaically creates a
DuplicateID carrier at previous
location and sends event
according to Carrier State
Model.
6. SC automatically deletes
carrier 456 from SC database
and    sends
CarrierRemoveCompleted
event.
7. TransferCompleted for 456
with    duplicate    ID
ResultCode.
8. SC automatically creates an
carrier123 at the port
location    and    sends
CarrierWaitOut    event.
9. Carrier continues to LP of this
output port.  (CarrierWaitOut
for 123 at each position.)
10. IDReadError event sent
when carrier arrives at the
LP of this output port.
11. Host or manual maintenance
required to disposition the
carrier that SC thought was
123 (now a duplicate).
Note: The TransferCompleted
events may come anywhere from
step 3 to step 8.
