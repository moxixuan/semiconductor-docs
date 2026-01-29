---
title: "E109-0305 - © SEMI 2001, 2005..."
description: "SEMI标准文档"
sidebar_label: "E109-0305 - © SEMI 2001, 2005..."
sidebar_position: 590
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-059.pdf'
  chapter: 59
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/059.pdf"
  pdfSize="0.44MB"
  title="E109-0305 - © SEMI 2001, 2005..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI E109-0305 © SEMI 2001, 2005 11
10. 2.2  From  the  host  point  of  view,  an  object  is  instantiated  if  the  host  is  able  to  query  the  equipment  about  that
object,  its  current  state,  and  other  attributes.    Once  instantiated,  the  object  is  considered  destroyed  (no  longer
instantiated) if the response to such queries is “unknown object”.
10. 2.3  Summary of reticle pod object instantiation:

# 1

1. Bind, ReticleTransferJob, or PodNotification Service;

# 2

2. PodID read with no currently existing pod objects having the PodID just read; and

# 3

3. ProceedWithPod or CancelPod Service on an UNASSOCIATED port with a pod.
10. 2.4  Reticle Pod Object Identifier (ObjID)
10. 2.4.1  The  purpose  of  an  Object  Identifier  is  to  allow  references  to  an  object  within  the  system.    The  object
identifier is created when an object is instantiated and should be unchanged or persistent until the end of the object
lifecycle.    The  Object  Identifier  shall  be  unique  at  the  equipment  during  lifecycle  of  the  object.    The  PodID  is  the
Reticle  Pod  Object  Identifier.    The  equipment  is  responsible  for  ensuring  uniqueness  of  the  PodID  prior  to
instantiation by the bind, pod notification, or ReticleTransferJob service.
10. 2.5  Reticle Pod Object Destruction
10. 2.5.1  Normally, the Reticle Pod Object reaches the end of its lifecycle when the reticle pod is unloaded from the
equipment.      Abnormally,   the   Reticle   Pod   Object   reaches   the   end   of   it’s   lifecycle   when   a   CancelBind,
CancelReticleTransferJob,  or  CancelPodNotification  service  is  executed  prior  to  the  reticle  pod  being  loaded,  or
when an equipment based pod verification fails following pod instantiation by the bind service.
10. 2.5.2  Summary of reticle pod object destruction:
1. A reticle pod is unloaded from the equipment;
2. A CancelBind, CancelReticleTransferJob or CancelPodNotification service is received; and
3. An equipment based verification fails (after the object has been instantiated via the bind services).
10. 3  Reticle Pod Attribute Definitions
10. 3.1  The following table contains the attributes that are of importance to the host and/or the equipment in order to
manage the history and the reports about the reticle pod object.
10. 3.2  REQD Column
10. 3.2.1  All attributes in the following table are required to be associated with the reticle pod object.  However only
the  attributes  marked  with  a  “Y”  in  the  REQD  column  are  always  required  to  be  maintained  and  updated  by  the
equipment.  The attributes marked with an “N” in the REQD column are only required to be maintained if they are
provided by the host by either the Bind, PodNotification, ReticleTransferJob or ProceedWithPod Services or if the
equipment has means of determining the attribute values.  (For example, if the equipment has a ReticleID reader, the
equipment can determine the ContentMap).
10. 3.3  ACCESS Column
10. 3.3.1
Even though a value may be marked as RO (read only), the initial value for the attribute may be provided
by the host when attached to either the Bind, PodNotification, ReticleTransferJob or ProceedWithPod services.  The
only other time the PodCapacityStatus attributes are updated is at the first ProceedWithPod service.
10. 3.4  Pod Attribute Definition Table
Table 6  Pod Attribute Definition
Attribute Name Definition Access    ReqdForm
ObjType Object type. RO Y Text equal to “Reticle Pod”.
ObjID Object identifier. RO Y Text 1 to 80 characters equal to the PodID.
Capacity Maximum number of reticles in
pod.
RO Y Positive integer.  If a pod arrives at a load port
with no warning the default value is one.


SEMI E109-0305 © SEMI 2001, 2005 12
Attribute Name Definition Access    ReqdForm
PodIDStatus Current state of the PodID
verification.
RO          Y          Enumerated:
ID NOT READ, WAITING FOR HOST ON
ID STATUS, ID VERIFICATION OK, ID
VERIFICATION FAILED.
ReticlePodAccessing-
Status
The current accessing state of the
reticle pod by the equipment.  The
current substate of the
ReticlePodAccessingStatus state
model.
RO          Y          Enumerated:
NOT AVAILABLE, AVAILABLE, IN
ACCESS, COMPLETE.
ContentMap Ordered list of reticle identifiers
corresponding to slot 1,2,3......n.
RO Y Ordered list of n elements, where n is equal to
the value of “Capacity” above, and each
element consists of a ReticleID.
When a slot has no reticle, the ReticleID value
should be null.
ReticlePodLocationID Identifier of current location of the
reticle pod.
RO Y Text 1 to 80 characters.
ReticlePodLocking-
Status
The current state of pod locking by
the equipment.  The current
substate of the
ReticlePodLockingStatus.
RO          Y          Enumerated:
NOT LOCKED, RELEASED AND LOCKED,
HOLD.
SlotMap                            Ordered                            List                            of slot status as
provided by the host until a
successful slot map read, then as
read by the equipment.
RO Y Ordered List of n elements where n is equal to
the  value of “Capacity” above.
1.  Enumerated
1

.
n.  Enumerated
n

Enumerated:
UNDEFINED, EMPTY, CORRECTLY
OCCUPIED.  The number shown above is the
slot number.
SlotMapStatus                  Current                  state of slot map
verification.
RO          Y          Enumerated:
SLOT MAP NOT READ, WAITING FOR
HOST ON SLOT STATUS, SLOT MAP
VERIFICATION OK, SLOT MAP
VERIFICATION FAILED.

10. 3.5  Rules for Reticle Pod Attributes
• The  equipment  shall  change  object  attributes,  ContentMap  and  SlotMap,  provided  by  the  host.    All  other
attributes, such as LocationID, shall be set and maintained by the equipment.
• The   attributes,   Capacity,   ContentMap,   Reticle   count,   shall   be   provided   with   Bind,   PodNotification,
ReticleTransferJob, or ProceedWithPod service before or when SlotMap is provided.
• The  SlotMap  shall  be  provided  with  Bind,  PodNotification,  ReticleTransferJob  or  ProceedWithPod  to  verify
PodID,  when  the  SlotMap  verification  is  equipment  based.    And  it  shall  not  be  provided  when  the  SlotMap
verification is host based.
• Reticle  pod  properties  may  be  provided  before  the  reticle  pod  arrives  as  part  of  the  Bind,  PodNotification,  or
ReticleTransferJob  service  and  should  be  retained  until  either  a  CancelBind,  CancelPodNotification,  or
CancelReticleTransferJob service is received or the reticle pod is removed.
• Reticle pod properties may also be provided by the ProceedWithPod service.  The reticle pod properties that are
provided  by  the  ProceedWithPod  service  may  differ  based  whether  or  not  the  object  is  instantiated  by  the
service.


SEMI E109-0305 © SEMI 2001, 2005 13
• Reticle pod properties that are required shall be actively updated by the equipment.
10. 3.6  Reticle Pod Location
10. 3.6.1  A reticle pod location, signified by LocationID, is used for tracking.  A reticle pod location is any physical
area that is capable of holding a pod.  It is not intended to represent entire mechanisms, which may have a variety of
other properties of interest, but only that portion where a reticle pod may rest.
10. 3.7  Reticle Pod Location Examples
10. 3.7.1  Reticle  Pod  Locations  include  reticle  pod load  port  locations,  internal  pod  buffer  locations,  as  well  as
grippers, conveyors, and elevators that are used internally for moving the pod from one fixed location to another.
10. 3.8  Slot  Map  Relation  to  Content  Map ⎯  The  slot  map  attribute  and  content  map  attribute  hold  similar
information.      The  purpose  of  these  attributes  differs.    The  slot  map  is  provided  so  that  the  equipment  or  host  can
quickly verify that the pod has reticles correctly placed in the correct slot (as provided by the host).  This verification
is based on a slot map read.  The content map is provided so that the host can communicate the specific ReticleID in
a specific slot as delivered and that the equipment can communicate the specific ReticleID that it places in a specific
slot.
10. 3.9  Reticle  Pod  Location  Naming ⎯  All  locations  shall  be  assigned  a  unique  name.    Information  about  the
reticle  pod  location  can  be  obtained  by  querying  the  Pod  Object  for  the  ReticlePodLocationID  or  by  asking  the
equipment  for  the  PodLocationMatrix.    The  text  form  of  the  ReticlePodLocationID  shall  be  descriptive  of  the
location.
10. 3.10  Capacity
10. 3.10.1  The  Capacity  parameter  can  be  sent  to  the  equipment  by  the  host  in  the  PodNotification,  Bind,
ReticleTransferJob, or the ProceedWithPod service.  However the equipment shall update this
10. 3.10.2  Parameter  based  on  the  results  of  the  read  slot  map  operation.    Furthermore,  the  equipment  shall  update
the parameter based on it’s own actions.  If the equipment does not know the value of Capacity prior to instantiation,
the equipment shall instantiate the reticle pod object with the value of one for Capacity.
10. 3.11  The ReticlePodAccessing
10. 3.11.1  Status  is  used  by  the  host  to  know  whether  or  not  the  reticle  pod  owned  by  the  equipment  can  be
transferred from the equipment.
10. 3.11.2  Enumerated      values      of      ReticlePodAccessing-Status      correspond      to      the      substates      of
ReticlePodAccessingStatus (see Figure 2).
10. 4  Reticle Pod State Model
10. 4.1  The purpose of the Reticle Pod State Model is to define the host’s view of a reticle pod.  The equipment shall
maintain a separate and independent state model for each reticle pod in/at the equipment.
10. 4.2  Reticle Pod State Model Diagram
10. 4.3  Reticle Pod State Definitions
10. 4.3.1  RETICLE POD — The RETICLE POD state has four ANDed (orthogonal) substates: RETICLE POD ID
STATUS,  RETICLE  POD  SLOT  MAP  STATUS,  RETICLE  POD  ACCESSING  STATUS,  AND  RETICLE  POD
CLAMPING STATUS.
10. 4.3.1.1  RETICLE POD ACCESSING STATUS — This is a substate of RETICLE POD and indicates the current
accessing status of the pod.  It has three substates, NOT ACCESSED, IN ACCESS, and COMPLETE.  The initial
default entry substate is NOT ACCESSED.
10. 4.3.1.1.1  NOT ACCESSED — This is a substate of RETICLE POD ACCESSING STATUS and is active when
the reticle pod has not been opened.  It has two substates NOT AVAILABLE and AVAILABLE.
10. 4.3.1.1.1.1  NOT AVAILABLE  This is a substate of NOT ACCESSED and is active when the reticle pod has been
instantiated via service but has not been received by the equipment.


SEMI E109-0305 © SEMI 2001, 2005 14
10. 4.3.1.1.1.2  AVAILABLE — This is a substate of NOT ACCESSED and is active when the reticle pod has been
received by the equipment but not opened.
10. 4.3.1.1.2  IN ACCESS — This is a substate of RETICLE POD ACCESSING STATUS and is active when reticle
pod has been opened once, and the reticle pod should not be unloaded from the equipment.  In this state the slot map
is read and reticles may be moved in and out of the reticle pod.
10. 4.3.1.1.3  COMPLETE — This  is  a  substate  of  RETICLE  POD  ACCESSING  STATUS  and  is  active  when  all
known activity, as defined by the ReticleTransferJob service, for the reticle pod has completed, or the PodComplete
service  has  been  received,  and  the  reticle  pod  has  been  closed.    The  reticle  pod  may  be  unloaded  from  the
equipment.
RETICLE POD ID STATUS
ID NOT READ
WAITING FOR
HOST ON ID
STATUS
ID
VERIFICATION
OK
ID VERIFICATION
FAILED
2
7
6
8
9
12
3
RETICLE POD SLOT MAP
STATUS
SLOT MAP NOT
READ
WAITING FOR
HOST ON SLOT
MAP STATUS
SLOT MAP
VERIFICATION
OK
SLOT MAP
VERIFICATI
ON FAILED
13
15
14
16
RETICLE POD
ACCESSING STATUS
18
IN
ACCESS
NOT ACCESSED
17
RETICLE POD LOCKING
STATUS
NOT LOCKED
LOCKED
24
POD
1
4
5
29
C
10
11
NOT
AVAILABLE
AVAILABLE
20
c
19
COMPLETE
21
23
22
RELEASED
AND
LOCKED
HOLD
c
26
25
27
28
30

Figure 2
Reticle Pod State Model Diagram

10. 4.3.1.2  RETICLE  POD  LOCKING  STATUS  —  This  is  a  substate  of  RETICLE  POD  and  indicates  the  current
status of the pod with respect to removability.
10. 4.3.1.2.1  NOT LOCKED — This is a substate of RETICLE POD LOCKING STATUS and is active when there
are no physical or logical mechanisms that prevent removal of the reticle pod by an external entity.
10. 4.3.1.2.2  LOCKED  —  This  is  a  substate  of  RETICLE  POD  LOCKING  STATUS  and  is  active  when  there  are
physical mechanisms that prevent removal of the reticle pod by an external entity.  It has two substates RELEASED
AND LOCKED and HOLD.
10. 4.3.1.2.2.1  RELEASED  AND  LOCKED  —  This  is  a  substate  of  LOCKED  and  is  active  when  the  pod  may  be
released by the equipment.


SEMI E109-0305 © SEMI 2001, 2005 15
10. 4.3.1.2.2.2  HOLD — This is a substate of LOCKED and is active when there are physical or logical mechanisms
that prevent removal of the pod engaged and the pod release flag is set to host release and the PodRelease service
has not been received.
10. 4.3.1.3  RETICLE POD ID STATUS — This is a substate of RETICLE POD and indicates the current status of
the  pod  with  respect  to  its  identifier.    It  has  four  substates,  ID  NOT  READ,  WAITING  FOR  HOST  ON  ID
STATUS,  ID  VERIFICATION  FAILED,  ID  VERIFICATION  OK.    The  initial  substate  is  conditional  based  on
information the equipment has about the reticle pod.  When the PodID is provided by the Bind, ReticleTransferJob,
or the PodNotification service, the reticle pod object shall be instantiated in the ID NOT READ substate.  When the
PodID  is  provided  by  the  PodID  read,  the  reticle  pod  shall  be  instantiated  in  the  WAITING  FOR  HOST  ON  ID
STATUS  substate.    When  the  Reticle  Pod  is  instantiated  by  the  ProceedWithPod  service,  the  reticle  pod  shall  be
instantiated in the ID VERIFICATION OK substate.  Finally when the reticle pod is instantiated by the CancelPod
service, the pod will be instantiated in the ID VERIFICATION FAILED substate.
10. 4.3.1.3.1  ID NOT READ — This is a substate of RETICLE POD ID STATUS.  This state is active whenever the
PodID has not been read by the equipment.
10. 4.3.1.3.2  ID VERIFICATION FAILED — This is a substate of RETICLE POD ID STATUS and is active when
the PodID has verification by the host with the CancelPod service.  This is a final state.
10. 4.3.1.3.3  ID VERIFICATION OK — This is a substate of RETICLE POD ID STATUS and is active as soon as
the  PodID  has  been  accepted.    The  ID  is  determined  to  be  accepted  by  either  successful  verification  by  the
equipment  or  the  host,  or  by  bypassing  ID  read  because  a  PodID  reader  is  not  available  and  the  BypassReadID
variable is set to true.  This is a final state.
10. 4.3.1.3.4  WAITING  FOR  HOST  ON  ID  STATUS  —  This  is  a  substate  of  RETICLE  POD  ID  STATUS  and  is
active during the period of time when the PodID has been read by the equipment successfully or unsuccessfully and
has not yet been verified.
10. 4.3.1.4  RETICLE  POD  SLOT  MAP  STATUS  —  This  is  a  substate  of  RETICLE  POD  and  indicates  the  current
status  of  the  reticle  pod  with  respect  to  its  slot  map.    It  has  four  substates,  SLOT  MAP  NOT  READ,  WAITING
FOR HOST ON SLOT MAP STATUS, SLOT MAP VERIFICATION FAILED, SLOT MAP VERIFICATION OK.
The initial default entry sub-state is SLOT MAP NOT READ.
10. 4.3.1.4.1  SLOT  MAP  NOT  READ  —  This  is  a  substate  of  RETICLE  POD  SLOT  MAP  STATUS  and  is  the
default entry state.  It is active when the Reticle Pod is first loaded at the equipment until the Slot Map has been read
successfully by the equipment.
10. 4.3.1.4.2  SLOT MAP VERIFICATION FAIL — This is a substate of RETICLE POD SLOT MAP STATUS and
is active when the Slot Map has been read by the equipment and has failed verification by the host.  This is a final
state.
10. 4.3.1.4.3  SLOT MAP VERIFICATION OK — This is a substate of RETICLE POD SLOT MAP STATUS and is
active as soon as the slot map has been verified.  This is a final state.
10. 4.3.1.4.4  WAITING FOR HOST ON SLOT MAP STATUS — This is a substate of RETICLE POD SLOT MAP
STATUS and is active when the equipment is waiting for input from the host.


SEMI E109-0305 © SEMI 2001, 2005 16
10. 4.4  Reticle Pod State Transition Table
10. 4.4.1  Table 7 indicates the triggers and the expected behavior of the instantiated reticle pod object.
Table 7  Reticle Pod State Transition Definition

# #

# Previous State Trigger New State Actions Comment
1    (no state) A reticle pod is instantiated. RETICLE POD None. Data required to be available for
this event report:
PodID
2    (no    state)    Normal:  A Bind,
ReticleTransferJob or
PodNotification service is
received.
ID NOT READ None. Data required to be available for
this event report:
PodID
3    (no    state)    Normal:  A PodID not
currently existing at the
equipment is successfully
read.
Abnormal:  A PodID is read
successfully but an equipment
based verification failed.
WAITING FOR
HOST ON ID
STATUS
None. Data required to be available for
this event report:
PodID
PortID
Normally, this transition will
happen after a successful ID read
if a bind or ReticleTransferJob
service has not been issued (host
based verification) or abnormally
if a bind or ReticleTransferJob
service is followed by a
successful ID read and an
unsuccessful equipment based
verification.
4    (no    state)    ID Read fail: A
ProceedWithPod service is
received.
ID
VERIFICATION
OK
A reticle pod is
instantiated having
the PodID provided
by the
ProceedWithPod
service.
Data required to be available for
this event report:
PodID
This transition can happen only if
a bind or ReticleTransferJob,
service has not been received.
5    (no    state)    ID Read fail:  A CancelPod
service is received.
ID
VERIFICATION
FAIL
A reticle pod is
instantiated having
the PodID provided
by the Cancel Pod
service.
Data required to be available for
this event report:
PodID
This transition can happen only if
a bind or ReticleTransferJob
service has not been received.
6    ID NOT READ   PodID is read successfully and
the equipment has verified the
PodID successfully.
ID
VERIFICATION
OK
None. Data required to be available for
this event report:
PortID
PodID
7    ID NOT READ   PodID is read unsuccessfully.    WAITING FOR
HOST ON ID
STATUS
None. Data required to be available for
this event report:
PortID
PodID
8    WAITING
FOR HOST
ON ID
STATUS
A ProceedWithPod service is
received.
ID
VERIFICATION
OK
None. Data required to be available for
this event report:
PortID
PodID


SEMI E109-0305 © SEMI 2001, 2005 17
# Previous State Trigger New State Actions Comment
9    WAITING
FOR HOST
ON ID
STATUS
A Cancel Pod Service is
received.
ID
VERIFICATION
FAILED
None. Data required to be available for
this event report:
PortID
PodID
10   ID NOT READ   BypassReadID
i
variable is set
to FALSE, and a reticle pod is
received when the id reader is
not in service or not installed.
WAITING FOR
HOST ON ID
STATUS
Wait for
ProceedWithPod.
Data required to be available for
this event report:
PortID
PodID
11   ID NOT READ   BypassReadID
i
variable is set
to TRUE, and a reticle pod is
received when the id reader is
not in service or not installed.
ID
VERIFICATION
OK
None. Data required to be available for
this event report:
PortID
PodID
12    ID NOT READ   The equipment successfully
reads, but unsuccessfully
verifies a reticle PodID.
ID
VERIFICATION
FAILED
None.
This transition should be
followed by the equipment
performing a self initiated
CancelBind service (see transition
29)
Data required to be available for
this event report:

PodID (of the pod instantiated in
the Bind service)
Data required to be available for
this event report:
PortID
PodID
13   (no state) A reticle pod is instantiated. SLOT MAP
NOT READ
None. No event is required for this
transition.
14   SLOT   MAP
NOT READ
Slot Map is read and verified
successfully by the equipment.
SLOT MAP
VERIFICATION
OK
None. Data required to be available for
this event report:
PortID (if valid)
PodID
LocationID
15   SLOT   MAP
NOT READ
Normal host based
verification:  Slot Map is read
successfully and the
equipment is waiting for host
verification.
Equipment based verification:
Slot map is read successfully
but equipment based
verification has failed.
Slot map read fail: Slot Map
cannot be read.
WAITING FOR
HOST ON SLOT
MAP STATUS
Save new slot map
in the SlotMap
attribute.
Data required to be available for
this event report:
PortID (if valid)
PodID
LocationID
SlotMap (if valid)
Reason
16   WAITING
FOR HOST
A ProceedWithPod service is
received.
SLOT MAP
VERIFICATION
OK
Proceed with the
Reticle Pod as
instructed.
Data required to be available for
this event report:
PortID (if valid)
PodID
LocationID


SEMI E109-0305 © SEMI 2001, 2005 18
# Previous State Trigger New State Actions Comment
17   WAITING
FOR HOST
A CancelPod service is
received.
SLOT MAP
VERIFICATION
FAIL
Prepare the Reticle
Pod for Unload.
Data required to be available for
this event report:
PortID (if valid)
PodID
LocationID
18    (no state) A reticle pod object is
instantiated.
NOT
ACCESSED
None. Data required to be available for
this event report:
PodID
19    (no state) A reticle pod object is
instantiated.
NOT
AVAILABLE
or
AVAILABLE
None.                        This                        is                        the                        default entry into
NOT ACCESSED.  If the reticle
is instantiated by service, the
state is NOT AVAILABLE.  If
instantiated by PodID read the
state is AVAILALBLE.
Data required to be available for
this event report:
PodID
20    NOT
AVAILABLE
The reticle pod is received by
the equipment.
AVAILABLE        None.        Data        required to be available for
this event report:
PodID
PortID
21    AVAILABLE     The equipment opens the
reticle pod.
IN ACCESS   None. Data required to be available for
this event report:
PodID
22    IN    ACCESS    Normal with ReticleTransfer-
Job service for pod with
OutputPortID not equal to
zero: The actions defined in
the reticle transfer job have
completed and the equipment
closes the reticle pod.
PodComplete service:  The
host sends the PodComplete
service and the equipment
closes the reticle pod.
Internal Pod  Buffer: The
PodOut service has been
received.
Abnormal:  The pod has failed
slot map verification and/or a
CancelPod service is received
and the pod is ready for
unload.
COMPLETE None. Data required to be available for
this event report:
PodID
23    NOT
ACCESSED
Via ID verification failure:
The pod has failed ID
verification and the carrier is
ready for unload.
Via Service: A CancelBind,
CancelPodNotification,
CancelPod, or
CancelReticleTransferJob has
been received prior to pod
arrival.
COMPLETE None. Data required to be available for
this event report:
PodID


SEMI E109-0305 © SEMI 2001, 2005 19
# Previous State Trigger New State Actions Comment
24    (no state) A reticle pod is instantiated. NOT LOCKED None. Data required to be available for
this event report:
PodID
PortID
25    NOT LOCKED  A reticle pod is clamped or
otherwise physically
restrained from removal by an
entity external to equipment.
LOCKED None. Data required to be available for
this event report:
PortID
PodID
26    NOT LOCKED  A reticle pod is clamped or
otherwise physically
restrained from removal by an
entity external to equipment.
RELEASED
AND LOCKED
or
HOLD
None.                        This                        is                        the                        default entry into
LOCKED.  If the PodRelease
flag is set to Equipment Release
the state is RELEASED AND
LOCKED.  If the PodRelease
flag is set to Host Release the
state is HOLD.
Data required to be available for
this event report:
PortID
PodID
27    HOLD A PodRelease service has
been received by the
equipment.
RELEASED
AND LOCKED

28    RELEASED
AND LOCKED
MANUAL Access Mode: The
POD ACCESSING state
enters COMPLETE and a
reticle pod is unclamped or
has had any restraints
preventing removal by an
external entity removed.
AUTO Access Mode and
Unclamp control trigger set to
Pod Closed:  The POD
ACCESSING state enters
COMPLETE and a reticle pod
is unclamped or has had any
restraints preventing removal
by an external entity removed.
AUTO Access Mode and
Unclamp control trigger set to
AMHS Triggered Unclamp:
The POD ACCESSING state
is COMPLETE and the
AMHS arrives and starts a
PIO sequence.
NOT LOCKED None. Data required to be available for
this event report:
PortID
PodID


SEMI E109-0305 © SEMI 2001, 2005 20
# Previous State Trigger New State Actions Comment
29   POD   Normal: The reticle pod is
unloaded from the equipment.
Abnormal by service:
CancelBind,
CancelPodNotification, or
CancelReticleTransferJob
service is received prior to pod
load.
Abnormal by equipment:  An
equipment-based verification
fails and the equipment
performs a self-initiated
CancelBind service.
(no state) The equipment
destroys the
instance of this
reticle pod object.
Data required to be available for
this event report:
PodID
30   (no state) A Reticle Pod is loaded,
locked, and the id is read on a
load  port for which no
previous reticle pod has been
instantiated.
LOCKED  Data required to be available for
this event report:
PodID
PortID
#1
Only one collection event report is required when entering the Reticle Pod State Model (instantiating a reticle pod object).  This event report
shall include the entry state of the all the substates of Reticle Pod State Model, (including RETICLE POD ID STATUS substate, the RETICLE
POD SLOT MAP STATUS substate, the RETICLE POD ACCESSING STATUS, and the RETICLE POD LOCKING STATUS).

10. 4.5  Slot Map Read Details
10. 4.5.1  The Slot Map shall be read on all production equipment prior to removal of reticles from the reticle pod.
10. 4.6  Pod Read Failure — A pod read failure occurs when the PodID reader is present, in service, and reports that
it is unable to read the ID of a pod.  This represents a transient random failure rather than a steady condition.
10. 4.7  Bypass  Read  ID  —  A  PodID  reader  may  be  unavailable:  either  out  of  service,  not  installed,  or  otherwise
malfunctioning  and  unable  to  execute  a  read  operation.    This  represents  a  steady  condition  that  often  is  known  in
advance.    The  equipment  shall  provide  a  user-configurable  variable  BypassReadID  that  the  user  is  able  to  set  to
specify the action to take when a pod is received to an ASSOCIATED load port.  In this case, the reticle pod object
is instantiated in the ID NOT READ state, and when the reticle pod is received, the state model transitions to either
WAITING FOR HOST or ID VERIFICATION OK, depending upon whether BypassReadID is FALSE (the default
value)  or  TRUE.    When  TRUE,  then  the  PodID  received  in  the  Bind  is  used  automatically.    Otherwise,  the  pod
transitions to WAITING FOR HOST and waits for the host to send a ProceedWithPod.  The ID used will be the ID
included with the ProceedWithPod.
11  Access Mode
11. 1  Access Mode State Model
11. 1.1  The  Access  Mode  State  Model  defines  the  host  view  of  equipment  access  mode,  as  well  as  the  host
interactions  with  the  equipment  necessary  to  switch  the  access  mode.    Each  Reticle  Load  Port  has  its  own  Access
Mode State Model.  There are two access mode states.  These are defined in ¶11.3.3.
11. 1.2  The access mode for a reticle pod load port may be switched at anytime by the host or the operator, except
when the Reticle Load Port Reservation State Model for that Reticle Pod Load Port is in the RESERVED state or
during reticle pod transfer.  Reticle pod transfer boundaries, for determining when access mode may be changed, are
designated by Table 8, Reticle Pod Transfer Boundaries.


SEMI E109-0305 © SEMI 2001, 2005 21
Table 8  Reticle Pod Transfer Boundaries
Transfer Type Transfer Method Starting Boundary Ending Boundary
MANUAL This starting boundary is specified by the
user.  Known examples of the starting
boundary include but are not limited to the
placement sensor detecting a pod, a pod load
port operator access door opening, input to
the equipment by the operator through a
switch at the load port or the equipment
console.
This ending boundary is specified by the
user.  Known examples of the ending
boundary include but are not limited to a
preset configurable time following
placement sensor detecting a pod, a pod load
port operator access door closing, or input to
the equipment by the operator through a
switch at the load port or the equipment
console or a service message.
LOAD
AUTO The PIO Ready signal is active for load. The PIO signals a transfer complete.
MANUAL This starting boundary is specified by the
user.  Examples of the starting boundary
include but are not limited to placement
sensor no longer detecting a pod, a pod load
port operator access door opening, or input
to the equipment by the operator through a
switch at the load port or the equipment
console or a service message.
This ending boundary is specified by the
user.  Examples of the ending boundary
include but are not limited to a preset
configurable time following placement
sensor no longer detecting a pod, a pod load
port operator access door closing, or input to
the equipment by the operator through a
switch at the load port or the equipment
console or a service message.
UNLOAD
AUTO The PIO Ready signal is active for unload. The PIO signals a transfer complete.

11. 2  Manual Pod Transfer Confirmation Trigger
11. 2.1  For  a  manual  transfer  completion  confirmation,  the  production  equipment  supplier  must  implement  a
software or hardware mechanism for an operator to inform the equipment that the pod transfer is complete, but also
support methods such as timers that allow equipment to consider a manual transfer complete without operator input.
11. 3  Access Mode Initial Value
11. 3.1  Also,  when  equipment  re-initialization  occurs,  the  access  mode(s)  must  be  remembered,  and  used  as  the
initial value when initializing.  Since the access mode is remembered through re-initializations, the initial value that
is  used  the  very  first  time  the  software  is  ever  loaded  is  not  important.    The  equipment  supplier  is  free  to  set  this
default value.
11. 3.2  Access Mode State Model Diagram
ACCESS MODE
MANUAL
AUTO
1
23
H

Figure 3
Access Mode State Model Diagram



SEMI E109-0305 © SEMI 2001, 2005 22
11. 3.3  Access Mode State Definitions
11. 3.3.1  ACCESS MODE — The parent state for the MANUAL and AUTO sub-states.
11. 3.3.2  MANUAL  —  A  sub-state  of  ACCESS  MODE.    When  the  production  equipment  or  specified  reticle  pod
load port is in this mode, only manual (non-AMHS) pod transfers are allowed.  The production equipment shall have
the capability of generating an alarm if an automated (AMHS) delivery is attempted.
11. 3.3.3  AUTO — A sub-state of ACCESS MODE.  When the production equipment or specified reticle pod load
ports are in this mode, only automated (AMHS) pod transfers are allowed.  The production equipment shall have the
capability of generating an alarm if a manual delivery is attempted.
11. 3.4  Access Mode State Transition Table
11. 3.4.1  Table 9 defines the transitions for the Access Mode State Model.
Table 9  Access Mode State Transition Definitions
#       Previous       State       Trigger       New state Actions Comments
1 (no state) System restart. MANUAL
or
AUTO
(History)
The access mode
returns to the
mode it was
previous to the
system reset.
Data required to be available for this
event report:
PortID
2 MANUAL The host or operator has
executed a Change-
Access service with the
value of AUTO.  This
trigger can happen at
anytime, except during a
reticle pod transfer.
AUTO  Manual deliveries are not allowed after
this state transition.  The operator may
also trigger this transaction from the
production equipment console.
Data required to be available for this
event report:
PortID
3 AUTO The host or operator has
executed a
ChangeAccess service
with the value of
MANUAL.  This trigger
can happen at anytime,
except during pod
transfer.
MANUAL  The operator may also trigger this
transaction from the production
equipment console or a manual switch at
the reticle load port.  Automated transfers
are not allowed after this state transition.
Data required to be available for this
event report:
PortID

12  Reservation State Model
12. 1  The purpose of the Reticle Load Port Reservation State Model is to define the host view of future activity at a
specific reticle load port.
12. 1.1  The Reticle Load Port Reservation State Model, the ReserveAtPort service and CancelReserveAtPort enable
the following items:
1. They  enable  the  host  to  inform  the  equipment  of  a  future  reticle  pod  delivery  without  specifying  the  reticle
PodID  and  at  the  same  time  allow  host  based  verification.    (Equipment  based  verification  is  enabled  via  the
Load Port/Pod Association State Model, the Bind service, ReticleTransferJob, and the PodNotification service
detailed in §13, ¶¶18.4.2, 18.5.19, and 18.4.11.)
2. They  enable  the  equipment  to  send  a  state  change  event  to  the  host  if  the  operator  (either  local  or  remote)
informs the equipment of a future pod delivery to a reticle load port without specifying the reticle PodID.  Thus
the host knows that the operator expects to use that reticle load port for something the host did not request for
AMHS based delivery.


SEMI E109-0305 © SEMI 2001, 2005 23
3. The  Bind,  ReticleTransferJob,  and  CancelBind,  CancelReticleTransferJob  services  also  trigger  changes  in  the
Reticle  Load  Port  Reservation  State  Model.    If  the  Reticle  Load  Port  Reservation  State  Model  is  in  the  NOT
RESERVED state, the Bind or ReticleTransferJob service triggers a transition to the RESERVED state.  If the
Reticle Load Port Reservation is in the RESERVED State, the CancelBind or CancelReticleTranserJob service
triggers a transition to NOT RESERVED.
12. 1.2  For  Lithography,  reticle  inspection,  and  bare  reticle  stocker  equipment,  the  Reservation  State  Model,  the
ReserveAtPort service, the CancelReserveAtPort service, and all other associated functionality is a user option and
not necessary for fundamental compliance.
12. 1.3  For  equipment  implementing  the  reservation  state  model,  the  equipment  shall  provide  a  reticle load  port
reservation state model for each load port.
12. 2  Reservation Visible Signal
12. 2.1  When  a  port  reservation  has  taken  place,  the  equipment  shall  display  a  visible  signal  indicating  that  the
designated load port is in the Reserved State.  Examples of visible signals for the associated load port are: Blinking
LEDs, flags, color indicators, or other methods that allow easy recognition that the load port is reserved; proximity
to or location on the load port is recommended.  The visible signal shall remain present as long as the load port state
remains  RESERVED.    When  the  state  changes  to  NOT  RESERVED  the  visible  indicator  shall  cease.    This
capability is not required for fundamental compliance to RPMS.
12. 3  Load Port Reservation State Model Diagram

NOT
RESERVED

RESERVED

2

3

1

Reticle Load Port
Reservation



Figure 4
Reticle Load Port Reservation State Model Diagram

12. 4  Reticle Load Port Reservation State Definitions
12. 4.1  RETICLE  LOAD  PORT  RESERVATION  —  The  super  state  of  the  substates  NOT  RESERVED  and
RESERVED.
12. 4.2  NOT  RESERVED  —  A  substate  of  LOAD  PORT  RESERVATION,  this  state  is  active  when  there  is  no
reservation existing at the load port.
12. 4.3  RESERVED — A substate of LOADPORT RESERVATION, this state is active when there is a reservation
for future activity at the load port.  When in this state, the access mode for a load port may not be changed.


SEMI E109-0305 © SEMI 2001, 2005 24
12. 4.4  Reticle Load Port Reservation State Transition Table
Table 10  Reticle Load Port Reservation State Transition Table
#        Previous        State        Trigger        New State Actions Comments
1     (no state) System reset. NOT
RESERVED
No event report is
required for this
transition.
2     NOT     RESERVED     Service:  If reserved by
service, the host or operator
sends a ReserveAtPort,
ReticleTransferJob, or a Bind
service to the production
equipment.
PodOut:  This happens when
the equipment physically
initiates a PodOut operation.
RESERVED If the user has configured
the equipment to use the
reservation visible signal
indicator, it is activated
for this load port.
Data required to be
available for this event
report:
PortID
PodID may be included
when a pod out,
ReticleTransferJob or a
bind service triggers this
transition.
3     RESERVED     Service:  If a reservation is
cancelled by service, the host
or operator sends a
CancelBind,
CancelReticleTransferJob, or
a CancelReservationAtPort.
Pod arrival:
A pod arrives at the reserved
port.
NOT
RESERVED
If the user has configured
the equipment to use the
reservation visible signal,
the indicator is
deactivated for this load
port.
Data required to be
available for this event
report:
PortID

12. 5  Relation of Reservation to Association
12. 5.1  The following figure indicates the relationship of Association to Reservation.
Reservation / Association
ASSOCIAT ED
ID Read
Unload  or
carrier in
Complete
Load
Co mp lete
ASSOCIATED
RESERVED
Bin d
Carrie r Prese nce
Load
w/o Bind
w/o R eserve
Load
w/ Bind
If fails, then  PWC/CC
is received
RESERVED
Reserve
Load
w/ Rese rve
ASSOCIAT ED
Visible Signal
Carrier Out
Co mp lete
Unload
Complete
Carrier Out
St a rt
RESERVED
ASSOCIATED
Carrie r Out

Figure 5
Relation of Reservation to Association



SEMI E109-0305 © SEMI 2001, 2005 25
13  Reticle Pod Load Port/Pod Association State Model
13. 1  The purpose of the Reticle Pod Association State Model is to define the host view of pod to reticle load port
association of the production equipment, as well as the host interactions with the production equipment necessary to
associate a reticle pod to a reticle load port, and to perform equipment based pod verification.  Each reticle load port
shall maintain an independent instance of the Pod Association State Model.  Each instance of this state model must
not influence the state of the same state model for a different reticle load port.
13. 1.1  This state model provides the ability to perform PodID verification with two different methods.  If the PodID
is provided before the equipment reads the PodID, the PodID that becomes associated with the reticle load port can
be  used  later  for  equipment  based  pod  verification.    If  the  association  happens  by  PodID  read  (not  by  a  service
execution), then the production equipment shall report the PodID information in a data collection event.
13. 2  Reticle Pod Load Port/Pod Association State Model Diagram

NOT
ASSOCIATED
ASSOCIATED
2

3

1

RETICLE POD LOAD PORT
/ POD

ASSOCIATION
4


Figure 6
Reticle Pod Load Port/Pod Association State Model Diagram

13. 2.1  Reticle Pod Load Port/Pod Association State Definitions
13. 2.1.1  RETICLE  POD  LOAD  PORT/POD  ASSOCIATION  —  The  parent  state  of  the  NOT  ASSOCIATED  and
ASSOCIATED sub-states.
13. 2.1.2  NOT ASSOCIATED  —  A  sub-state  of  RETICLE  POD  LOAD  PORT/POD  ASSOCIATION.    There  is  no
pod association present for this load port.
13. 2.1.3  ASSOCIATED — A sub-state of RETICLE POD LOAD PORT/POD ASSOCIATION.  A PodID has been
associated with this reticle load port.  The reticle pod load port is not available for a new pod association.
13. 2.2  Reticle Pod Load Port/Pod Association State Transition Table
13. 2.2.1  Table 11 defines the transitions of the Reticle Pod Load Port/Pod Association State Model.
Table 11  Reticle Pod Load Port/Pod Association State Transition Definitions
#       Previous       State       Trigger       New State Actions Comments
1     (no state) System reset. NOT
ASSOCIATED
No pod associations exist for
reset/re-initialized
equipment.
Data required to be available
for this event report:
PortID.


SEMI E109-0305 © SEMI 2001, 2005 26
#       Previous       State       Trigger       New State Actions Comments
2     NOT
ASSOCIATED
Service: If associated by
service, the host sends a
Bind or
ReticleTransferJob
service to the production
equipment.
PodID Read: If associated
by a PodID read, the
production equipment
creates the association at
the time the PodID read is
performed.
ASSOCIATED      If the Bind or
ReticleTransferJob service is
performed before the PodID
is read by the production
equipment, the production
equipment can perform the
PodID verification.  Once
the PodID to reticle pod load
port association is complete,
the reticle pod load port is
not available for association
until the state returns to
NOT ASSOCIATED again.
Data required to be available
for this event report:
PortID
PodID
3     ASSOCIATED     Service: If an association
cancellation is desired,
this can be done by the
host sending a
CancelBind or
CancelReticleTransferJob
service to the production
equipment.
Reticle Pod Unload: An
association cancellation
may also be performed by
removing the reticle pod
from the reticle pod load
port.
NOT
ASSOCIATED
. A reticle pod unload may
happen before or after
processing occurs.  The
reticle pod load port is
available for another
association.
Data required to be available
for this event report:
PortID
4     ASSOCIATED     Production     equipment
based pod verification
fails, and the pod assumes
the ID value from the
reticle pod that is on the
reticle pod load port.
ASSOCIATED     The existing PodID that
was associated by a Bind or
ReticleTransferJob service
is unassociated by the
production equipment and
the new PodID is now
associated to the Reticle
Pod Load Port.  The
production equipment shall
delay further action until
receiving either a
CancelPod or a
ProceedWithPod command
from the host.
This transition only occurs
when the Bind  or
ReticleTransferJob
command has been used.
Data required to be available
for this event report:
PortID
PodID

14  Reticle Object
14. 1  Information about a reticle is encapsulated as an object.  This allows the host to exchange information with the
equipment  about  one  or  more  specific  reticle  using  services  defined  in  SEMI  E39,  Object  Services  Standard.    A
reticle has properties (attributes) that are defined in Table 12, Reticle Attribute Definition.
14. 2  Object Instantiation
14. 2.1  The reticle object is a software representation of the reticle in the equipment.  Under normal circumstances
this  object  is  instantiated  by  the  equipment  when  the  host  uses  the  Bind,  ReticleTransferJob,  PodNotification,
ProceedWithPod  service  (when  it  included  the  content  map  attribute),  MoveReticle  service,  when  the  equipment


SEMI E109-0305 © SEMI 2001, 2005 27
successfully  reads  the  ReticleID  from  the  reticle  pod  tag,  or  when  the  equipment  successfully  reads  the  ReticleID
from the reticle itself.  A reticle is instantiated by reticle pod tag read or ReticleID read only if there are no currently
existing objects with the ReticleID just read.  A reticle object can also be instantiated by either the ProceedWithPod
or  CancelPod  Services  when  these  services  contain  the  content  map.    A  Reticle  can  be  instantiated  by  the
MoveReticle Service if the ReticleID(s) provided by the service have not been previously instantiated.
14. 2.2  From  the  host  point  of  view,  an  object  is  instantiated  if  the  host  is  able  to  query  the  equipment  about  that
object,  it's  current  state,  and  other  attributes.    Once  instantiated,  the  object  is  considered  destroyed  (no  longer
instantiated) if the response to such queries is “unknown object”.
14. 2.3  Summary of possible reticle object instantiation methods:
1. Bind, ReticleTransferJob, or PodNotification Service that contains the content map attribute;
2. PodID tag read containing the content map with no currently existing reticle objects having the ReticleID just
read from the pod tag;
3. ReticleID read with no currently existing reticle objects having the ReticleID just read from the ReticleID read;

# 4

4. ProceedWithPod or CancelPod Service containing the content map attribute; and

# 5

5. MoveReticle Service when the reticle is not previously instantiated.
14. 2.4  Reticle Object Identifier (ObjID)
14. 2.4.1  The  purpose  of  an  Object  Identifier  is  to  allow  references  to  an  object  within  the  system.    The  object
identifier is created when an object is instantiated and should be unchanged or persistent until the end of the object
lifecycle.  The Object Identifier shall be unique at the equipment during lifecycle of the object.  The ReticleID is the
Reticle  Object  Identifier.    The  equipment  is  responsible  for  ensuring  uniqueness  of  the  ReticleID  prior  to
instantiation by the bind, PodNotification, ReticleTransferJob, or MoveReticle service.
14. 2.5  Reticle Object Destruction
14. 2.5.1  Normally, the Reticle Object reaches the end of its lifecycle when the reticle pod containing the reticle is
unloaded from the equipment.  Abnormally, the Reticle Object reaches the end of its lifecycle when a CancelBind,
CancelReticleTransferJob,   or CancelPodNotification   service   (if   the   original   Bind,   ReticleTransferJob,   or
PodNotification  service  contained  the  contentmap)  is  executed  prior  to  the  reticle pod  being  loaded,  when  a
CancelMoveReticle  service  is  executed  prior  to  reticle  removal  from  the  reticle  pod  (if  the  reticle  was  instantiated
using the MoveReticle command), when an equipment based pod verification fails following reticle pod and reticle
instantiation by the bind service, ReticleTransferJob, or reticle pod tag read.
14. 2.5.2  Summary of reticle object destruction:
1. A reticle pod is unloaded from the equipment;
2. A  CancelBind,  CancelReticleTransferJob,  or  CancelPodNotification  service  that  contained  the  content  map  is
received;
3. An  equipment  based  verification  fails  (after  the  object  has  been  instantiated  via  the  bind,  ReticleTransferJob
service, or reticle pod tag read);
4. A  CancelMoveReticle  service  is  executed  prior  to  reticle  removal  from  the  reticle  pod  (when  the  content  map
has not been provided by other service or reticle pod tag read); and
5.
Manual removal of the physical reticle.
14. 3  Reticle Attribute Definitions
14. 3.1  The following table contains the attributes that are of importance to the host and/or the equipment in order to
manage the history and the reports about the reticle object.
14. 3.2  REQD Column
14. 3.2.1  All attributes in the following table are required to be associated with the reticle object.  However only the
attributes  marked  with  a  “Y”  in  the  REQD  column  are  always  required  to  be  maintained  and  updated  by  the
equipment.  The attributes marked with an “N” in the REQD column are only required to be maintained if they are


SEMI E109-0305 © SEMI 2001, 2005 28
provided  by  the  host  by  either  the  Bind,  PodNotification,  ReticleTransferJob,  ProceedWithPod,  or MoveReticle
Services  or  if  the  equipment  has  means  of  determining  the  attribute  values.    (for  example,  if  the  equipment  has  a
ReticleID reader, the equipment can determine the ContentMap).
14. 3.3  ACCESS Column
14. 3.3.1  Even though a value may be marked as RO (read only), the initial value for the attribute may be provided
by the host when attached to either the Bind, PodNotification, ReticleTransferJob or ProceedWithPod services.  The
only other time the PodCapacityStatus attributes are updated is at the first ProceedWithPod service.
Table 12  Reticle Attribute Definition
Attribute Name Definition Access   ReqdForm
ObjType Object type. RO Y Text equal to “Reticle”.
ObjID Object identifier. RO Y Text 1 to 80 characters equal to the ReticleID.
# of Exposures Count of the number of exposures
since the reticle was loaded to the
equipment.
RO Y Non negative integer.
QualificationInterval-
Time
The amount of time (in minutes)
allowed between equipment
inspections of a reticle.  If this time
is exceeded, the reticle state must
transition to REJECTED.
RW        Y        52
Qualification-
TerminationTime
The actual time if when a qualified
reticle will expire and the reticle
state must transition to rejected.
RO         Y         20
ReticleStatus Current state of the Reticle. RO Y Enumerated:  RETICLE NOT PRESENT,
WAITING QUALIFICATION, READING
ID, QUALIFIED, IN USE, REJECTED,
RETICLE WAITING FOR HOST,
PARTICLE INSPECTION.
ReticleAllocationStatus    The current allocation state of the
reticle by the equipment.  The
current substate of the Reticle
Allocation state model.
RO         Y         Enumerated:
NOT ALLOCATED, ALLOCATED.
ReticleLocationID The specific location of the reticle. RO Y Enumerated:
Equipment dependent text.
Example locations: Inspection position,
ReticleID read position, storage location 1.
Reticle type The type of reticle. RO Y Enumerated:
Equipment dependent text.
Example subtypes: phase shift, binary.

14. 4  Reticle State Model
14. 4.1  The  purpose  of  the  Reticle  State  Model  is  to  define  the  host’s  view  of  a  reticle.    The  equipment  shall
maintain a separate and independent state model for each reticle.


SEMI E109-0305 © SEMI 2001, 2005 29
14. 4.2  Reticle State Model Diagram
RETICLE STATE
RETICLE AT
EQUIPMENT
RETICLE NOT PRESENT
3
UNQUALIFIED RETICLE
4
8
RETICLE  QUALIFICATION
QUALIFIED RETICLE
REJECTED
QUALIFIED
IN USE
20
22
1
2
13
WAITING
QUALIFICATION
1819
11
10
21
6
PARTICLE
INSPECTION
15
RETICLE ID VERIFICATION
9
14
7
5
READING ID
RETICLE
WAITING FOR
HOST
16
17

Figure 7
Reticle State Model Diagram
14. 4.3  Reticle State Definition
14. 4.3.1  RETICLE  NOT  PRESENT ⎯  This  is  a  subset  of  RETICLE  STATE  and  is  active  when  the  reticle  is  not
present  on  the  Equipment.    The  reticle  has  been  instantiated  with  a  Bind,  PodNotification,  ReticleTransferJob,  or
MoveReticle service.
14. 4.3.2  RETICLE  AT  EQUIPMENT ⎯  This  is  a  subset  of  RETICLE  STATE  and  is  active  when  the  reticle  is
present.    The  reticle  is  physically  present  on  the  Equipment.    There  are  two  substates,  UNQUALIFIED  RETICLE
and QUALIFIED RETICLE.
14. 4.3.2.1  UNQUALIFIED RETICLE
⎯  This is a substate of RETICLE AT EQUIPMENT and is active when the
reticle  is  physically  present  but  not  QUALIFIED.    There  are  three  substates,  WAITING  QUALIFICATION,
RETICLE QUALIFICATION, AND REJECTED.
14. 4.3.2.1.1  WAITING  QUALIFICATION ⎯  This  is  a  substate  of    UNQUALIFED  RETICLE  and  is  active  when
the reticle is waiting to be selected for qualification.  The physical ReticleID is not read in this state.
14. 4.3.2.1.2  REJECTED ⎯ This is a substate of UNQUALIFIED RETICLE and is active when the reticle did not
pass  the  qualification(s)  due  to  an  unexpected  ReticleID  or  poor  inspection  results.    The  operator  or  the  host
(depending  on  the  control  mode)  will  have  to  decide  if  the  reticle  must  be  re-qualified  or  removed  from  the
equipment.
14. 4.3.2.1.3  RETICLE  QUALIFICATION ⎯  This  is  a  substate  of  UNQUALIFIED  RETICLE  and  is  active  when
the  reticle  is  being  qualified  for  production.    The  ReticleID  is  being  read  from  the  ReticleID  and/or  a  reticle
inspection  for  particles  is  being  performed.    There  are  two  substates:  RETICLE  ID  VERIFICATION  and
PARTICLE INSPECTION.


SEMI E109-0305 © SEMI 2001, 2005 30
14. 4.3.2.1.3.1  RETICLE ID VERIFICATION  —  This  is  a  substate  of  RETICLE  QUALIFICATION  and  is  active
when the reticle ID has not been verified.  There are two substates, READING ID and RETICLE WAITING FOR
HOST.
14. 4.3.2.1.3.1.1  READING  ID  —  This  is  a  substate  of  RETICLE  ID  VERIFICATION  and  is  active  when  the
Reticle ID is being read.
14. 4.3.2.1.3.1.2  RETICLE  WAITING  FOR  HOST  —  This  is  a  substate  of  RETICLE  ID  VERIFICATION  and  is
active when the Reticle ID has been read successfully or unsuccessfully and has not yet been verified by the host.
14. 4.3.2.1.3.2  PARTICLE INSPECTION — This is a substate of RETICLE QUALIFICATION and is active when a
reticle is being evaluated for particles.
14. 4.3.2.2  QUALIFIED  RETICLE
⎯  This  is  a  substate  of  RETICLE  AT  EQUIPMENT  and  is  active  when  the
reticle may be used for production.  It has two substates QUALIFIED and IN USE.
14. 4.3.2.2.1  IN USE ⎯ This is a substate of QUALIFIED RETICLE and is active when any kind of processing on
the reticle is being done (i.e.  the reticle is not at an inventory position).
14. 4.3.2.2.2  QUALIFIED ⎯  This  is  a  substate  of  QUALIFIED  RETICLE  and  is  active  when  the  reticle  is  at  an
inventory position, including either the internal reticle buffer or a reticle pod.
14. 4.4  Reticle State Transition Table ⎯ Table 13 indicates the triggers and the expected behavior of the instantiated
reticle object.
Table 13  Reticle State Transition Definition
#              Current              State              Trigger              New              (Sub-)State         Action         Comment
1
This
transition
is not
currently
used.
-
2
This
transition
is not
currently
used.
-
3 (no state) A reticle is instantiated via the Bind,
PodNotification, or
ReticleTransferJob, message in
which the content map is provided,
or the reticle is instantiated via a
MoveReticle service for which the
Reticle Pod has not been received by
the equipment.
RETICLE NOT
PRESENT
Data required to be
available for this event
report:
PodID
4 (no state) A reticle is instantiated after placing
a reticle pod on a load port via a
reticle PodID tag read that provided
the content map or via a
MoveReticle service for which the
Reticle Pod has been received by the
equipment.
WAITING
QUALIFICATION
None. This transition happens
only if the content map
has not been provided
to the equipment prior
to reticle pod load port
receiving a reticle pod.
5 (no state) A reticle is instantiated via a
ReticleID read and a particle
inspection is still required.
PARTICLE
INSPECTION
Data required to be
available for this event
report:
ReticleLocationID


SEMI E109-0305 © SEMI 2001, 2005 31
#              Current              State              Trigger              New              (Sub-)State         Action         Comment
6 (no state) A reticle is instantiated via a
ReticleID read and no particle
inspection is required.
QUALIFIED   Data required to be
available for this event
report:
ReticleLocationID
7 (no state) A reticle is instantiated via a reticle
ID read and Host based ID
verification is required.
RETICLE
WAITING FOR
HOST
Data required to be
available for this event
report:
ReticleLocationID
8         RETICLE         NOT
PRESENT
A Reticle Pod load port receives a
previously instantiated reticle pod
for which the equipment holds the
content map attribute.
WAITING
QUALIFICATION

9         WAITING
QUALIFICATION
The equipment has begun to qualify
a previously instantiated reticle.
READING ID
10        RETICLE
QUALIFICATION
Equipment based: Equipment
decides based on preset criteria that
a reticle is suited for use.
Host based – The equipment
receives the ProceedWithReticle
Service.
QUALIFIED   Reticle qualification
includes both ID
verification and quality
verification.  Reticle is
able to be used.
11 QUALIFIED  Host based: The equipment receives
a Re-qualify service.
PARTICLE
INSPECTION
Start reticle
inspection.

12        RETICLE
QUALIFICATION
Equipment based – Equipment
determines that an incorrect reticle
has been delivered or that a reticle
inspection failed.
Host based – The equipment
receives a RejectReticle service from
the host.
Operator based –An operator issues
a RejectReticle command from the
equipment operator interface.
REJECTED   Data required to be
available for this event
report:
ReticleLocationID
Reject Reason
13        REJECTED                Host based – The equipment
receives a Re-qualify service.
Equipment based – A re-inspection
is automatically triggered by the
Equipment.
PARTICLE
INSPECTION
Start reticle
inspection.

14        QUALIFIED
RETICLE
Host based - The equipment receives
a RejectReticle service from the
host.
Equipment based -Inspection results
of the reticle are expired.
Operator based – An operator issues
a RejectReticle command from the
equipment operator interface.
REJECTED
15        RETICLE        ID
VERIFICATION
Equipment based – The reticle ID is
verified to be the correct one and a
particle inspection is required.
Host based – The equipment
receives a ProceedWithReticle
Service and a particle inspection is
required.
PARTICLE
INSPECTION
Comment – this
transition occurs when
particle inspection is
needed.


SEMI E109-0305 © SEMI 2001, 2005 32
#              Current              State              Trigger              New              (Sub-)State         Action         Comment
16        READING        ID        ID read fail – A reticle ID read fails
on a previously instantiated Reticle.
RETICLE
WAITING FOR
HOST

17        REJECTED        Host Based – The equipment
receives an OktoUseReticle service.
Operator based – An Operator
issues an OktoUseReticle service
from the equipment operator
interface.
QUALIFIED
18        QUALIFIED        For Exposure Equipment: An
exposure process has started.
For Reticle Inspection Equipment: A
Reticle Inspection has started.
For Bare Reticle Stockers: A reticle
kitting has started.
IN USE  This transition should
take place as soon as
the needed physical
movement of a reticle
for processing or
inspection has begun.
19        IN        USE        For Exposure Equipment: A reticle
exposure process has finished.
For Reticle Inspection Equipment:
An inspection process has finished.
For Bare Reticle Stockers — The
reticle has been deselected for kitting
or kitting has been completed.
QUALIFIED
20        RETICLE        AT
EQUIPMENT
Reticle pod containing the reticle is
removed from the machine.
-                                Delete
reticle
object.

21        RETICLE        AT
EQUIPMENT
Reticle has been manually removed
from the equipment.
-                                Delete
reticle
object.
Abnormal situation
22        RETICLE        AT
EQUIPMENT
Via service: Reticle object has been
destroyed via a CancelBind,
CancelReticleTransferJob,
CancelPodNotification, or
CancelMoveReticle service from the
host prior to the Reticle being
physically read.
Via equipment based verification
failure: A reticle instantiated via
Bind, ReticleTransferJob,
PodNotification, Pod Tag read (for a
pod tag that holds the contentmap
attribute of the pod) or MoveReticle
service failed equipment based
verification and the equipment
destroys the reticle object.
-                                Delete
reticle
object.
Abnormal situation



SEMI E109-0305 © SEMI 2001, 2005 33
14. 5  Reticle Allocation State Model
14. 5.1  The purpose of the Reticle Allocation State Model is to define the host’s view of a reticle’s allocation state.
14. 5.2  Reticle Allocation State Model Diagram
Reticle Allocation State
Not Allocated
Allocated
1
23
4


Figure 8
ReticleAllocation State Model Diagram

14. 5.3  Reticle Allocation State Definition
14. 5.3.1  RETICLE ALLOCATION STATE — The super state of NOT ALLOCATED and ALLOCATED.
14. 5.3.1.1  NOT ALLOCATED  —  A  substate  of  RETICLE  ALLOCATION  STATE,  this  state  is  active  when  the
reticle is not allocated to a lot in the queue or not selected for inspection.  For Bare Reticle Stockers – not kitted
and not currently selected for kitting.
14. 5.3.1.2  ALLOCATED — A substate of RETICLE ALLOCATION STATE, this state is active when the reticle is
allocated to one or more lots in the queue or selected for inspection.  For Bare Reticle Stockers – allocated includes
being selected for kitting or already kitted.
14. 5.4  Reticle Allocation State Transition Table — Table 14 indicates the triggers and the expected behavior of the
instantiated reticle in regards to the allocation state.
Table 14  Reticle Allocation State Transition Definition
#         Current         State         Trigger         New         (Sub-) State Action Comment
1     - A reticle is instantiated. NOT ALLOCATED
2     NOT
ALLOCATED
Production Equipment: The reticle becomes
allocated to a pre-processing or processing
lot.
Inspection Equipment: The reticle becomes
allocated to an inspection.
Bare Reticle Stocker:  The reticle is selected
for kitting.
ALLOCATED


SEMI E109-0305 © SEMI 2001, 2005 34
#         Current         State         Trigger         New         (Sub-) State Action Comment
3     ALLOCATED     Production Equipment: The last lot
allocation to the reticle by a preprocessing or
processing lot is removed because this lot
has been moved to another state OR the
equipment has been restarted.
Inspection Equipment: The inspection for
which the reticle was allocated has been
finished or has been cancelled.
Bare Reticle Stocker:  The reticle has been
deselected for kitting.
NOT ALLOCATED
4     RETICLE
ALLOCATION
STATE
The Reticle object has been destroyed. -

15  Verification
15. 1  Verification  is  the  operation  of  comparing  an  actual  value  with  an  expected  value.    Verification  may  be
performed   by   either   the   host   or   the   equipment,   depending   upon   whether   the   host   is   using   the   Bind,
ReticleTransferJob, or PodNotification service or not.
15. 1.1  If the host provides the expected value before the actual value is obtained by the production equipment, then
the production equipment shall perform the verification.
15. 1.2  If the host does not provide the expected value before the actual value is read, then the production equipment
shall provide to the host, the information necessary for host based verification.
15. 1.3  There are three values that are defined by Reticle and Pod Management that require verification: PodID, Pod
Slot Map, and ReticleID.
15. 2  PodID Verification
15. 2.1  Table 15 defines the methods for verifying the PodID.
Table 15  PodID Verification Methods
Verification
Method Desired
Host Actions before
Load
Equipment Action When Reticle Pod Is
Loaded
Host Actions after Load
Production
Equipment Based
Bind or
ReticleTransferJob
Service: The host
executes the Bind or
ReticleTransferJob
service to associate a
reticle pod load port
and a PodID.
Bind or ReticleTransferJob Service: The
production equipment reads the PodID from
the reticle pod, compares it to the podID
supplied with the Bind or ReticleTransferJob
service.

Verification                                       Passed:                                       Transition 6 of the
Reticle Pod State Model occurs.  The
production equipment proceeds with
processing.
Verification Passed: None.


SEMI E109-0305 © SEMI 2001, 2005 35
Verification
Method Desired
Host Actions before
Load
Equipment Action When Reticle Pod Is
Loaded
Host Actions after Load
Verification                                       Failed:                                       The equipment initiates
Transition 12 of the reticle pod state model
then Transition 29 and the reticle pod object
created via the bind or ReticleTransferJob
service is destroyed.  The equipment also
initiates Transition 3 of the reticle pod state
model and a reticle pod object with the PodID
equal to the one determined by the PodID
read is instantiated.  The reticle pod shall not
be opened by the equipment until and unless
the ProceedWithPod service is received from
the host.
Verification Failed: The host uses
either the CancelPod service to force
the reticle pod to be readied for
unload, or indicates to the production
equipment that it may proceed with
the unexpected reticle pod, by
sending the ProceedWithPod service.
In both cases the PodID specified in
the service is equal to the one
determined by the PodID read.
PodNotification
Service: The host
executes the
PodNotification
service to inform the
equipment of the
future arrival of a pod
to an unspecified
reticle pod load port.
PodNotification Service: The production
equipment reads the PodID from the reticle
pod, compares it to the PodID supplied with a
PodNotification service.

Verification Passed: Transition 6 of the
Reticle Pod State Model occurs.  The
production equipment proceeds with
processing.
Verification Passed: None.
Verification Failed: Not Applicable; because
there is no association between a reticle pod
load port and a reticle pod, equipment based
verification failure is not possible.  If a reticle
pod that has not been instantiated arrives at a
load port, the equipment shall consider this as
host based verification.
Verification Failed: Not Applicable,
because there is no association
between a reticle pod load port and a
reticle pod, equipment based
verification failed is not possible.  If
a reticle pod that has not been
instantiated arrives at a reticle pod
load port, the equipment shall
consider this as host based
verification.”  The host will respond
with either a ProceedWithPod or a
CancelPod Service.  (See Host Based
verification method).
Host Based None required, the
host may issue a
ReserveAtPort service.
The production equipment reads the PodID
and reports it to the host in an event report.
Following PodID read the equipment initiates
Transition 3 of the Reticle Pod State Model
and a reticle pod object with the PodID equal
to the one determined by the PodID read is
instantiated.  The reticle pod shall not be
opened the equipment until and unless the
ProceedWithPod service is received from the
host.
Verification Passed: The host sends
a ProceedWithPod service indicating
the verification passed.
Verification Failed: The host uses
the CancelPod or CancelPodAtPort
service to force the equipment to
prepare the pod for unload.



SEMI E109-0305 © SEMI 2001, 2005 36
15. 3  Slot Map Verification
15. 3.1  Table 16 defines the methods for verification of the Reticle Pod Slot Map.  Some user’s factory operations
may not require strict management of the slot map.  In this case the user may use the host based verification method.
Table 16  Slot Map Verification Methods
Verification
Method Desired
Host Actions Before
Verification
Equipment Action When Pod
is Loaded
Host Actions After Load
Production
Equipment
Based
The host provides a
Slot Map with the
Bind,
PodNotification,
ReticleTransferJob,
or the
ProceedWithPod
service.
The production equipment
checks the reticle pod slot
map and compares it to the
slot map supplied by the
host.  Either Transition 14, or
15 of the Pod State Model
occurs.
Verification Passed: None, the production equipment
proceeds with the pod.
Verification Failed: If the host decides to cancel
processing, the host issues the CancelPod service.  If the
host decides to continue processing, the host issues the
ProceedWithPod service.
Host Based None. The production equipment
checks the reticle pod slot
map and reports it to the host
in an event report.  The host
has the responsibility for
verifying the slot map.
Verification Passed: The host sends a ProceedWithPod
indicating the verification passed.
Verification Failed: If the host decides to cancel
processing, the host issues the CancelPod service.  If the
host decides to continue processing, the host issues the
ProceedWithPod service.

15. 4  ReticleID Verification
15. 4.1  Table 17 below defines the Optional methods for ReticleID verification.
Table 17  ReticleID Verification Methods
Verification
Method
Desired
Host Actions before
Load
Equipment Action When
Reticle Pod Is Loaded
Equipment Action when Reticle is
removed from cassette
Host Actions after Load
Production
Equipment
Based
Bind,
PodNotification,
ReticleTransferJob,
or MoveReticle
Service prior to Pod
Arrival: The host
executes a Bind,
PodNotification or
ReticleTransferJob
service that includes
the ContentMap and
the ReticleIDs.
Bind, PodNotification,
ReticleTransferJob
Service, or MoveReticle
Service prior to Pod
Arrival: Transition 8 of
the Reticle State Model
Occurs (from RETICLE
NOT PRESENT to
WAITING FOR
QUALIFICATION)
(E.Ch).  The equipment
must verify the ReticleID
successfully.
Transition 9 of the Reticle State
Model occurs.  The ReticleID is
read.

Verification                                    Passed:                                    The
equipment may proceed with
reticle qualification.
Verification Passed: None.


SEMI E109-0305 © SEMI 2001, 2005 37
Verification
Method
Desired
Host Actions before
Load
Equipment Action When
Reticle Pod Is Loaded
Equipment Action when Reticle is
removed from cassette
Host Actions after Load
Verification Failed: The
equipment initiates Transition
12, then Transition 22 of the
reticle state model the reticle
object created via the service is
destroyed.  For the reticle object
created via the reticle ID read
(the “unexpected reticle”) the
reticle is instantiated via
transition 7 into the RETICLE
WAITING FOR HOST state.
Verification Failed: The
host uses either the
RejectReticle service to
indicate that the equipment
should not use the reticle for
processing, or indicates to
the production equipment
that it may proceed with the
unexpected reticle, by
sending the
ProceedWithReticle service.
In both cases the ReticleID
specified in the service is
equal to the one determined
by the ReticleID read.
MoveReticle Service
after Pod Arrival
prior to reticle
instantiation:  The
host executes a
MoveReticle
service.
Transition 4 of the
Reticle State Model
Occurs (from no state to
WAITING
QUALIFICATION).
Transition 9 of the Reticle State
Model occurs.  The ReticleID is
read.

Verification                                    Passed:                                    The
equipment may proceed with
reticle qualification.
Verification Passed: None.
Verification                                    Failed:                                    The
equipment initiates Transition
12, then Transition 22 of the
reticle state model the reticle
object created via the service is
destroyed.  For the reticle object
created via the reticle ID read
(the “unexpected reticle”) the
reticle is instantiated via
Transition 7 into the RETICLE
WAITING FOR HOST state.
Verification Failed: The
host uses either the
RejectReticle service to
indicate that the equipment
should not use the reticle for
processing, or indicates to
the production equipment
that it may proceed with the
unexpected reticle, by
sending the
ProceedWithReticle service.
In both cases the ReticleID
specified in the service is
equal to the one determined
by the ReticleID read.
MoveReticle after
pod arrival and
reticle instantiation
via pod tag read:
None
Equipment reads the pod
tag and instantiates the
reticle object via
Transition 4.
Transition 9 of the Reticle State
Model occurs.  The ReticleID is
read.

Verification Passed: The
equipment may proceed with
reticle qualification.
Verification Passed: None.


SEMI E109-0305 © SEMI 2001, 2005 38
Verification
Method
Desired
Host Actions before
Load
Equipment Action When
Reticle Pod Is Loaded
Equipment Action when Reticle is
removed from cassette
Host Actions after Load
Verification Failed: The
equipment initiates Transition
12, the Transition 22 of the
reticle state model the reticle
object created via the service is
destroyed.  For the reticle object
created via the reticle ID read
(the “unexpected reticle”) the
reticle is instantiated via
Transition 7 into the RETICLE
WAITING FOR HOST state.
Verification Failed: The
host uses either the
RejectReticle service to
indicate that the equipment
should not use the reticle for
processing, or indicates to
the production equipment
that it may proceed with the
unexpected reticle, by
sending the
ProceedWithReticle service.
In both cases the ReticleID
specified in the service is
equal to the one determined
by the ReticleID read.
Host Based None required, the
host may issue a
ReserveAtPort
service.
The production
equipment reads the
PodID and reports it to
the host in an event
report.  Following PodID
read the equipment
initiates Transition 3 of
the Reticle Pod State
Model and a reticle pod
object with the PodID
equal to the one
determined by the PodID
read is instantiated.  The
reticle pod shall not be
opened by the equipment
until and unless the
ProceedWithPod service
is received from the host.
The production equipment reads
the ReticleID and reports it to
the host in an event report.
Following the ReticleID read the
equipment initiates Transition  5
(if a particle inspection is
required, but reticle ID
verification is not) or Transition
6 (if neither a reticle ID
verification nor a particle
inspection is required), or
Transition 7 (if an ID
verification is required) of the
Reticle State Model and a reticle
object determined by the
ReticleID read is instantiated.
Verification Passed: The
host sends a
ProceedWithReticle service
indicating the verification
passed.  The equipment may
proceed with reticle
qualification.
Verification                                                       Failed:                                                       The
host uses the RejectReticle
service to indicate that the
equipment should not use
the reticle for processing.
ProceedWithPod
after Pod arrival,
includes Content
Map:
None
Equipment Reads the
Pod, reports ID.  After
receiving
ProceedWithPod with a
ContentMap, the Reticle
is instantiated via
Transition 4.
Transition 9 of the Reticle State
model occurs.  The Reticle ID is
read.

Verification Passed:
The equipment may proceed
with reticle verification.
Verification Passed:
None


SEMI E109-0305 © SEMI 2001, 2005 39
Verification
Method
Desired
Host Actions before
Load
Equipment Action When
Reticle Pod Is Loaded
Equipment Action when Reticle is
removed from cassette
Host Actions after Load
Verification Failed:
The Equipment initiates
Transition 12, then Transition 22
of the reticle state model; the
reticle created via the service is
destroyed.  For the reticle
created via the ID Read (the
“unexpected reticle”), the reticle
is created via Transition 7 into
the RETICLE WAITING FOR
HOST state.
Verification Failed:
The host uses either the
RejectReticle service to
indicate that the equipment
should not use the reticle for
processing or indicates to
the equipment that it may
proceed with the unexpected
reticle, by sending the
ProceedWithReticle service.
In both cases the ReticleID
specified in the service is
equal to the one determined
by the ReticleID read.

15. 5  Table 18 clarifies the relation of the reservation and verification to the related services.
Table 18  Reservation and Verification Relation to Service
Information Provided with Service  Reser-
vation
PodID
Verification
Cassette
SlotMap
Verification
ReticleID
Verification
Service Used
Port ID PodI
D
SlotMa
p
Content
Map and
ReticleID
1    Yes    Equipment
based
Equipment
based
Equipment
based
Bind, or
ReticleTransferJob
Yes       Yes       Yes       Yes
2    Yes    Equipment
based
Host based Host based Bind  Yes Yes No No
3    Yes Host based Host based Host based ReserveAtPort Yes No No No
ProceedWithPod
(following ID read and
host verification)
No       Yes       No       No
4    Yes    Host    based       Equipment
based
Host based ReserveAtPort Yes No No No
ProceedWithPod     to
provide slotmap
(following ID read and
host verification)
No       Yes       Yes       No
5    No    Equipment
based
Equipment
based
Equipment
based
PodNotification                      No                      Yes                      Yes                      Yes
6    No    Equipment
based
Host based Host based PodNotification                      No                      Yes                      No                      No
7    No    Host    based       Equipment
based
Host based ProceedWithPod to
provide slotmap
(following ID read and
host verification)
No       Yes       Yes       No
8    No Host based Host based  ProceedWithPod
(following ID read and
host verification)
No       Yes       No



SEMI E109-0305 © SEMI 2001, 2005 40
16  Reticle Pod Release Control
16. 1  For  equipment,  where  Pod  Read/Write  technology  is  used  and  the  Host  initiates  writing,  the  reticle  pod  or
reticle  cassette  must  remain  at  the  write  position  where  the  tag  may  be  accurately  written  on  until  the  Host  has
completed  its  entire  read  and  write  operations.    For  this  purpose,  a  variable  that  affects  the  equipment  releasing  a
pod is defined.
16. 2  Pod  Hold  Trigger  —  Equipment  shall  allow  the  user  to  select  a  trigger  to  release  the  carrier  pod  when
reading/writing is complete.  Release does not mean the equipment must move the pod from the location it currently
occupies, only that it is permissible to do so.
16. 2.1  Pod Hold Trigger set to Host Release — If the Pod Hold trigger is set to Host Release, equipment shall hold
the pod at the write position until the PodRelease service is received.
16. 2.2  PodHold  Trigger  set  to  Equipment  Release  —  If  the  Pod  Hold  trigger  is  set  to  Equipment  Release,  the
equipment shall release the reticle pod based on the when the equipment has finished removing all reticles from the
pod, finished placing all reticles in the pod, and in the case where the equipment initiates writing until the equipment
has finished writing.
16. 3  Fixed  Buffer  Equipment  shall  allow  the  user  to  select  a  trigger  to  unclamp  the  reticle pod  based  on  AMHS
arrival at the equipment.  If the access mode is MANUAL, the unclamp control trigger has no effect.
16. 3.1  UnclampControl  trigger  set  to  PODCOMPLETE  Triggered  Unclamp
—  The  equipment  automatically
unclamps the reticle pod when the reticle pod status is COMPLETE.
16. 3.2  UnclampControl  trigger  set  to  AMHS  Triggered  Unclamp
—  The  equipment  behavior  depends  upon  the
Reticle  Load  Port  Access  State.    If  the  Reticle  Pod  Load  port  Access  State  is  AUTO,  the  reticle  pod  remains
clamped until AMHS has arrived.  The AMHS arrives and begins a PIO unload sequence.
17  Reticle Location Object Definition
17. 1  A  Reticle  Location  Object  (RLO)  provides  a  model  for  identifying  reticle  locations.    Each  RLO  on  an
equipment  is  assigned  a  reticle  location  ID  to  uniquely  identify  it.    The  assignment  shall  be  documented  by  the
equipment supplier.  There are two types of substrate locations: reticle pod reticle location, which is the location or
position  (e.g.,  slot)  in  the  reticle  pod,  and  equipment  reticle  location,  which  is  on  the  equipment  resource.    The
equipment reticle location is a persistent object, while the reticle pod reticle locations are dynamic objects that shall
be created or deleted by the placement or removal of reticle pods on the equipment.  The intent is to follow E90 in
regards to location object management.  The reticle location object is a subtype of the substrate location object.
17. 1.1  Source reticle locations and Destination reticle locations are the points at which reticles transfer to/from the
equipment’s internal reticle locations (often locations at which processing occurs).  A reticle pod reticle location is
the Source or Destination reticle location when a pod is used to transfer the reticle.  An equipment reticle location
can be the Source or Destination reticle location when the reticle is transferred directly (without a pod).
17. 2  Reticle Location State Model ⎯ Figure 9 below shows the dynamic behavior of the reticle location using the
Harel state chart representation.


©
UNOCCUPIEDOCCUPIED
RETICLE LOCATION
1
2

Figure 9
Reticle Location State Model Diagram



SEMI E109-0305 © SEMI 2001, 2005 41
17. 3  Reticle Location State Definitions
17. 3.1  RETICLE LOCATION — the superstate of UNOCCUPIED and OCCUPIED.
17. 3.2  UNOCCUPIED — the state in which the reticle location does not hold or have a reticle.
17. 3.3  OCCUPIED — the state in which the reticle location holds a reticle.
17. 4  Substrate Location State Transition
Table 19  Reticle Location State Model Transition Table
#         Current         State         Trigger         New State Action Comment
1     UNOCCUPIED       Reticle     moves onto the substrate
location.
OCCUPIED None. Data required to be
available for this event:
ReticleID
2     OCCUPIED Reticle moves off the location. UNOCCUPIED Update reticle
tracking history.
Data required to be
available for this event:
ReticleID

17. 5  Reticle Location Object Attributes
17. 5.1  Table  20  defines  attributes  for  Reticle  location  objects.    These  attributes  can  be  accessed  by  using  GetAttr
and SetAttr messages as defined in SEMI E39 (OSS).
Table 20  Reticle Location Object Attribute Table
Attribute Name Definition Access Reqmt Format
ObjID Object Identifier RO Y Text equal to the Reticle Location ID
ObjType Object type RO Y Text = “ReticleLoc”
ReticleID Reticle IDentifier relevant to the location RO Y Text
ReticleLocation-
State
Reticle Location state RO Y Enumerated:
UNOCCUPIED
OCCUPIED

18  Services
18. 1  The  purpose  of  this  section  is  to  define  the  message  services  required  to  support  Reticle  Management
functionality.
18. 1.1  This message service definition has four parts:
• A service description table.
• A service parameter table.
• A service parameter value table that specifies the type and range of the parameters.
• A service state mapping table that defines the states in which each service is valid.
18. 2  Service Message Description
18. 2.1  There are two types of services:
• An initial message and response between the service user and the service provider.
• A notification message from the service provider to the service user that does not require a response.
18. 2.2  The  “TYPE”  column  in  the  following  table  is  used  to  indicate  whether  the  service  consists  of  a
request/response message pair, “R”, or a single notification message, “N”.


SEMI E109-0305 © SEMI 2001, 2005 42
18. 2.3  The  “Requirement”  level  column  in  the  following  table  is  used  to  indicate  whether  the  service  is  a
fundamental requirement, “F”, or an additional capability “A” for RPMS.
Table 21  Service Message Description
Service Name Type     Requirement
level
Description
Bind R F This service shall associate a PodID to a load port and shall cause the load port
to transition to the RESERVED state.
CancelAllPodOut R A This service shall cause all PodOut services to be removed from the queue.
CancelBind R F This service cancels a PodID to load port association and shall cause the load
port to transition to the NOT RESERVED state.
CancelMoveReticle R A This service cancels a prior MoveReticle service provided that MoveReticle
service has not been started.
CancelPod R F This service shall Cancel the current pod related action, and the production
equipment shall return the pod to the unload position of the load port, or an
internal buffer position, depending on the pod’s position in the production
equipment.
CancelPodAtPort               R                F               This               service shall Cancel the current pod related action, and the production
equipment shall return the pod to the unload position of the load port.
CancelPodNotificatio
n
R F This service shall cause the equipment to destroy a pod object instantiated
through a prior PodNotification.
CancelPodOut R A This service shall cause a specified PodOut service to be removed from the
queue by the production equipment.
CancelReservation-
AtPort
R F This service shall cause the equipment to remove the reservation at the specified
Port and to deactivate the visible signal.
CancelReticle-
TransferJob
R A The service cancels a reticle PodID to load port associations and shall cause the
load port to transition to the NOT RESERVED state.  Also it shall cause the
equipment to refrain from removing the reticles from the reticle pod specified in
a previous ReticleTransferJob service.  Finally it shall cause the equipment to
refrain from removing the reticles from the equipment specified in the same
previous ReticleTransferJob service.
ChangeAccess R F This service shall change the access mode of the specified Ports at the
production equipment.    If a load port is dedicated to either Automated delivery
or Manual delivery, the access mode cannot be changed.
ChangeServiceStatus R F This service shall change the transfer status of a specified load port at the
production equipment.
Clamp R A This service shall cause the equipment to engage any clamping mechanisms that
are independent of opening the pod.
ClosePod R A This service shall cause the equipment to close the pod.
IndexDown R A This service shall cause the equipment to index the cassette down when it is safe
for equipment, operators, and reticles to do so.
IndexUp R A This service shall cause the equipment to index the cassette up when it is safe for
equipment, operators, and reticles to do so.
MoveReticle R A This service shall cause the equipment to move a reticle from one position to
another either internal to internal, internal to external, external to internal, or
external to external.
OktoUseReticle R F This service shall change the RETICLE AT EQUIPMENT status of the specified
reticle to QUALIFIED.
OpenPod R A This service shall cause the equipment to open the pod.
PodComplete R F This service shall change the reticle pod accessing status to COMPLETE.


SEMI E109-0305 © SEMI 2001, 2005 43
Service Name Type     Requirement
level
Description
PodIn R A This service shall cause a pod to be moved from a load port to an internal buffer
location.  Used in anomaly situations.
PodNotification R F This service shall cause the equipment to instantiate a pod object.
PodOut R A This service shall cause a pod to be moved from the internal buffer to a load
port.  This service can be queued by the production equipment.
PodRelease R A Release the pod from Pod Hold.
PodTagReadData R A Read data from PodID tag.
PodTagWriteData R A Write data to the PodID tag.
ProceedWithPod R F This service shall instruct the production equipment to proceed with using the
specified pod.
ProceedWithReticle R F This service is used to change the state of the reticle from RETICLE ID
VERIFICATION to PARTICLE INSPECTION when particle inspection is
required and from RETICLE ID VERIFICATION to QUALIFIED when particle
inspection is not required
#1
.
RejectReticle R F This service shall cause the equipment to change the RETICLE AT
EQUIPMENT state to REJECTED.
Re-qualifyReticle R A This service shall cause the equipment to reinspect the reticle.
ReserveAtPort R F This service shall cause the equipment to reserve the specified Port and activate
a visible signal.  This service is a possible transfer boundary.
ReticleTransferJob R A This service shall associate a PodID to a load port and shall cause the load port
to transition to the RESERVED state.  It will also cause the equipment to begin
removal, identification, and qualification of specific reticles in the pod as well as
placement of specific reticles into the pod upon pod arrival and verification.
SetQualification-
IntervalTime
R A This service shall set the maximum interval time between reticle inspections.
Unclamp R A This service This service shall cause the equipment to release any clamping
mechanisms that prevent removal of the pod.  The pod must be closed prior to
execution of this service.
#1
Normally this transition would be from the substate of RETICLE ID VERIFICATION, RETICLE WAITING FOR HOST.

18. 3  Service Message Parameter Definition
18. 3.1  The following is a list of required parameters used in conjunction with service messages.
Table 22  Service Message Parameter Definition
Parameter Name Form Description
AccessMode                Enumerated
AUTO,
MANUAL.
The desired access mode of the ports specified.


SEMI E109-0305 © SEMI 2001, 2005 44
Parameter Name Form Description
ArrivingReticleList     Ordered list of ReticleID,
ReticlePropertiesList, and removal
instructions corresponding to the slot
number.
Ordered List of n structures where n is equal to the value of the
pod attribute “Capacity,” and each structure consists of a
ReticleID, a ReticlePropertiesList, and an enumerated removal
instruction.
List of structure
ReticleID
ReticlePropertiesList
Enumerated
Enumerated:
REMOVE
PASS BY
AttributeData Could be several different data types.    The data value associated with AttributeID.
AttributeID                  Text
1–40 characters.
The ID of the object attribute in a PropertiesList.
PodID                          Text
1–64 characters.
ID number of a pod.
Qualification-
IntervalTime
U2. The time in minutes allowed between equipment inspections of a
reticle.
RPMAcknowledge      Enumerated:
• Acknowledge, service has been
performed
• Service does not exist
• Cannot perform now
• At least parameter is invalid
• Acknowledge, service will be
performed with completion
notified later with parameters
for response
• No such object exists
Acknowledgement of request.
RPMStatus A structure consisting of
RPMAcknowledge and Status.
Return information for a service.
Data                             Text.                             User                             data.
DataSeg                       Protocol-specific. Indicates specific section of data to read or write.
DataSize                      Unsigned                      integer. Indicates the number of bytes of data to read or write.
DepartingReticleList   Ordered list of ReticleID and
instructions to remove from the
equipment and place in the reticle
cassette corresponding to the slot
number of the cassette to which the
reticle will be placed.
Ordered List of n structures where n is equal to the value of the
pod attribute “Capacity,” and each structure consists of a
ReticleID and an enumerated instruction.
List of structure
ReticleID
Enumerated
Enumerated:
CURRENTLY OCCUPIED
PLACE
PASS BY
When no reticle is targeted to be placed in a slot, the ReticleID
should be null.  When the enumeration is equal to CURRENTLY
OCCUPIED or PASS BY the ReticleID should be null.
DestinationLocation    LocationID. The location for which a reticle is to be moved.


SEMI E109-0305 © SEMI 2001, 2005 45
Parameter Name Form Description
ErrorCode                    Enumerated:
Valid for all services listed below
Unsupported option [service]
requested
Command not valid for current state
Insufficient parameters specified
Parameters improperly specified
Bind
Load port does not exist
Object identifier already in use
Invalid attribute value
Unknown attribute name
CancelAllPodOut
(none)
CancelBind
Load port does not exist
Unknown object instance
CancelPod
Load port does not exist
Unknown object instance
CancelPodAtPort
Load port does not exist
CancelPodNotification
Unknown object instance
CancelPodOut
Unknown object instance
CancelReservationAtPort
Load port does not exist
PodIn
Unknown object instance
PodNotification
Object identifier already in use
Invalid attribute value
Unknown attribute name
PodOut
Load port does not exist
Unknown object instance
ChangeAccess
Load port does not exist
ChangeServiceStatus
Load port does not exist
ProceedWithPod
Load port does not exist
Unknown object instance
Invalid attribute value
Unknown attribute name
ReserveAtPort
Load port does not exist
Contains the code for the specific error found.
ErrorText Text. Text in support of the error code.
InputPortID                 Integer
0, 101–255.
ID number of the load port where the Pod will be delivered.  The
InputPortID number should be the same as the load port number.
When the value of the InputPortID = zero, the Pod will be picked
up from the internal buffer.


SEMI E109-0305 © SEMI 2001, 2005 46
Parameter Name Form Description
OutputPortID               Integer
0, 101 to 255.
ID number of a load port where the Pod will be presented for
removal.  The OutputPortID number should be the same as the
load port number.  When the value of the OutputPortID = zero,
the Pod will be delivered to the internal buffer.
PortID                          Integer
1-n.
ID number of a load port.  The PortID number should be the
same as the load port number.
PortList                        List
1-n items.
List of n items
PortID
1
.
.
n  PortID
n

PodPropertiesList        List
1-n name/value pairs.
List of n items
1.  AttributeID
1
AttributeData
1
.
.
n.  AttributeID
n
AttributeData
n

ReticlePlacement-
Instruction
Enumerated:
0 = PLACE
1 = PASS BY
2 = CURRENTLY OCCUPIED
The instructions for placing reticles in pod slot.
ReticlePropertiesList   List
1-n name/value pairs.
List of  n items
1.  AttributeID
1
AttributeData
1
.
.
n.  AttributeID
n
AttributeData
n

ReticleLocation-
PropertiesList
List
1-n name/value pairs.
List of  n items
1.  AttributeID
1
AttributeData
1
.
.
n.  AttributeID
n
AttributeData
n

ReticleRemoval-
Instruction
Enumerated:
0 = REMOVE
1 = PASS BY
The instructions for removing reticles from a pod slot.
ServiceStatus               Enumerated:
IN SERVICE,
or OUT OF SERVICE.
The desired transfer service status of the specified load port.
SourceLocation           LocationID.           The           source           location from which to move a reticle.
Status A list of ErrorCode/ErrorText pairs. Reports any errors found.

18. 4  Fundamental Service Message Definitions
18. 4.1  The  following  tables  specify  the  allowable/required  parameters  for  each  service.    The  column  marked
“REQ/OPT”,  specifies  which  parameters  are  required  to  be  supported  for  RPMS  compliance  (R  =  Required,  O  =
Optional).


SEMI E109-0305 © SEMI 2001, 2005 47
18. 4.2  Bind
18. 4.2.1  The Bind service is used to associate a PodID with a load port.  The Bind can contain a PropertiesList of
pod  object  attributes  that  are  supplied  by  the  host.    A  pod  object  is  instantiated  when  this  service  is  used
successfully.  The Bind service will be rejected if the pod specified has already been instantiated through the Bind or
PodNotification service, or a PodID read.  The Bind service also triggers a transition in the Load Port Reservation
state model from NOT RESERVED to RESERVED.
Table 23  Bind Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                             Description
PortID M — The PortID where a pod is expected.
PodID                                                         M                                                         —                                                         The                                                         expected                                                         PodID.
PodPropertiesList  C — A list of name value pairs providing attributes for the
pod object being instantiated with the Bind service.
CMStatus                                                   —                                                   M                                                   Information                                                   concerning the result of the service.

18. 4.3  CancelBind
18. 4.3.1  The CancelBind request is used to cancel the association between a port and a PodID.  The pod object is
destroyed when this service is used successfully.  The CancelBind service also triggers a transition in the Load Port
Reservation state model from RESERVED to NOT RESERVED.
Table 24  CancelBind Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                    Description
PortID C — The PortID for which to cancel the load port to pod association.
Either PortID or PodID must be specified.
PodID C — The PodID for which to cancel the load port to pod association.
Either PortID or PodID must be specified.
CMStatus                                         —                                         M                                         Information                                         concerning the result of the service.

18. 4.4  CancelPod
18. 4.4.1  The CancelPod request is used to stop a reticle pod.  If the reticle pod is at a reticle pod load port, then it
shall be made ready for unload.  The production equipment shall reject this service if issued after reticles have been
removed for processing.
Table 25  CancelPod Service Parameters
Parameter Name Req/Opt Rsp/Conf Description
PodID M — The PodID to cancel.
CMStatus                                        —                                        M                                        Information                                        concerning the result of the service.
PortID C — The PortID where the pod object is located.  This parameter is not
required if the pod object has been previously instantiated.

18. 4.5  CancelPodAtPort
18. 4.5.1  CancelPodAtPort is used to abort any pod at a designated port.  This service can be used when the podID
of the pod at the designated port is unknown.


SEMI E109-0305 © SEMI 2001, 2005 48
Table 26  CancelPodAtPort Service Parameters
Parameter Name Req/Ind Rsp/Conf                                                           Description
PortID M — Any pod that exists on the load port specified shall be made ready for
unloading.
CMStatus                           —                           M                           Information                           concerning the result of the service.

18. 4.6  CancelPodNotification
18. 4.6.1  The CancelPodNotification is used by the host to request the equipment cancel a previous PodNotification
service.  This service shall cause the equipment to destroy the pod object specified.
Table 27  CancelPodNotification Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                    Description
PodID M — The PodID of the pod object to destroy.
CMStatus                                      —                                      M                                      Information                                      concerning the result of the service.

18. 4.7  ChangeAccess
18. 4.7.1  The ChangeAccess message requests a change of access mode for the load ports specified in the PortList.
Table 28  ChangeAccess Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                       Description
AccessMode M — The new desired access mode.
PortList C — The list of ports to use the new access mode.
CMStatus                                 —                                 M                                 Information                                 concerning the result of the service.

18. 4.8  ChangeServiceStatus
18. 4.8.1  The  ChangeServiceStatus  service  is  used  to  request  the  production  equipment  change  a  load  port  service
state.
Table 29  ChangeServiceStatus Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                         Description
PortID M — PortID to designate the new service status.
ServiceStatus M — The new service state.
CMStatus                           —                           M                           Information                           concerning the result of the service.

18. 4.9  OktoUseReticle
18. 4.9.1  The OktoUseReticle service is sent by the host to indicate that the reticle may be used for processing.  The
equipment should change the reticle state model RETICLE AT EQUIPMENT status to QUALIFIED.
Table 30  OktoUseReticle Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                        Description
ReticleID M — ReticleID to designate the RETICLE AT EQUIPMENT status.
RPMStatus — M Information concerning the result of the service.



SEMI E109-0305 © SEMI 2001, 2005 49
18. 4.10  PodComplete
18. 4.10.1  The  PodComplete  service  is  used  by  the  host  to  inform  the  equipment  that  all  actions  for  transferring
reticles in and out of the pod are complete.  This service is used when the equipment has not previously received a
ReticleTransferJob service for the pod.  This service may also be used in the event of a Reticle Transfer Job that is
not completed successfully.
Table 31  PodComplete Parameters
Parameter Name Req/Ind Rsp/Conf                                                Description
PodID M — The PodID of the Pod that is complete.
PortID C — The Port ID the Pod currently occupies.
CMStatus                                             —                                             M                                             Information                                             concerning the result of the service.

18. 4.11  PodNotification
18. 4.11.1  The PodNotification service is used by the host to inform the equipment that a Pod with the ID specified
will  be  arriving  at  the  equipment.    The  load  port  is  not  specified;  therefore  no  pod  to  load  port  association  takes
place.  A pod object with the ObjID equal to the PodID specified in the service is instantiated.  The PodNotification
service  will  be  rejected  if  the  pod  specified  has  already  been  instantiated  through  the  Bind  or  PodNotification
service, or a PodID read.
Table 32  PodNotification Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                             Description
PodID M — The PodID of the pod object to instantiate.
PodPropertiesList C  The PropertiesList of the pod to instantiate.
CMStatus                                                    —                                                    M                                                    Information                                                    concerning the result of the service.

18. 4.12  ProceedWithPod
18. 4.12.1  The ProceedWithPod service is sent by the host to indicate that the pod operations may continue.  When
using  host  based  verification  it  is  used  by  the  host  to  indicate  to  the  production  equipment  that  the  verification  of
PodID  and/or  the  Cassette  Slot  Map  is  correct.    For  successful  production  equipment  based  verification  the
production  equipment  shall  not  require  this  message  before  proceeding  with  the  pod.    For  failed  production
equipment based verification the production equipment shall require either a CancelPod or ProceedWithPod service.
18. 4.12.2  Using Table 33, for the Host based PodID verification case, the ProceedWithPod service sent by the host
after the first PodID read is referred to as ProceedWithPod #1, the ProceedWithPod service sent after slot map read
is referred to as ProceedWithPod #2.
Table 33  ProceedWithPod Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                       Description
PortID C — The PortID for which processing may proceed.
PodID M — The PodID for which processing may proceed.
PodPropertiesList C — A list of name value pairs providing attributes for the pod object.
CMStatus                                —                                M                                Information                                concerning the result of the service.



SEMI E109-0305 © SEMI 2001, 2005 50
18. 4.13  ProceedWithReticle
18. 4.13.1  The  ProceedWithReticle  service  is  sent  by  the  host  to  indicate  that  reticle  operations  may  continue.    In
particular and in the normal case, this service is used to change a Reticle, in the RETICLE WAITING FOR HOST
state from RETICLE WAITING FOR HOST to PARTICLE INSPECTION when particle inspection is required, and
from RETICLE WAITING FOR HOST to QUALIFIED if particle inspection is not required.
Table 34  ProceedWithReticle Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                              Description
ReticleID M — The ID of the reticle for which to change the
UNQUALIFIED RETICLE status.
Reticle Location ID C — The location of the reticle.
RPMStatus — M Information concerning the result of the service.

18. 4.14  RejectReticle
18. 4.14.1  The  RejectReticle  service  is  sent  by  the  host  to  indicate  that  the  reticle  may  no  longer  be  used  for
processing, unless it is requalified.  The equipment shall change the reticle state model RETICLE AT EQUIPMENT
status to REJECTED.
Table 35  RejectReticle Service Parameter Definition
Parameter Name Req/Ind Rsp/Conf                                                       Description
ReticleID M — ReticleID to designate the RETICLE AT EQUIPMENT status.
RPMStatus — M Information concerning the result of the service.

18. 4.15  SetQualificationIntervalTime
18. 4.15.1  The SetQualifiactionIntervalTime service is sent by the host to change the time between inspection for a
specific or a list of specific reticles.  This service uses SETATTR as defined in SEMI E39.
18. 5  Additional Service Message Definitions
18. 5.1  CancelAllPodOut
18. 5.1.1  The CancelAllPodOut service is sent to internal buffer production equipment to cancel all PodOut services
in queue.
Table 36  CancelAllPodOut Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                        Description
CMStatus                              —                              M                              Information                              concerning the result of the service.

18. 5.2  CancelMoveReticle
18. 5.2.1  The CancelMoveReticle service is sent by the host to cancel a MoveReticle service.  The equipment shall
refrain from removing the reticle specified.  This shall apply on if the move has not been started.
Table 37  CancelMoveReticle
Parameter Name Req/Ind Rsp/Conf                                                       Description
ReticleID M — The ReticleID which should not be removed.
RPMStatus — M Information concerning the result of the service.



SEMI E109-0305 © SEMI 2001, 2005 51
18. 5.3  CancelPodOut
18. 5.3.1  The CancelPodOut service is sent to internal buffer production equipment to cancel a queued PodOut.
Table 38  CancelPodOut Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                        Description
PodID M — PodID for the PodOut service that is being cancelled.
CMStatus                               —                               M                               Information                               concerning the result of the service.

18. 5.4  CancelReservationAtPort
18. 5.4.1  The CancelReservationAtPort service is sent by the host to cancel a reservation at the load port.  The load
port will enter the UNRESERVED State after receiving this service.  A Port reserved by the physical initiation of a
pod out operation may not be cancelled by this service.
Table 39  CancelReservationAtPort Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                       Description
PortID M — The Port ID to reserve.
CMStatus                               —                               M                               Information                               concerning the result of the service.

18. 5.5  CancelReticleTransferJob
18. 5.5.1  The CancelReticleTransferJob is sent by the host to cancel a previous ReticleTransferJob service.
Table 40  CancelReticleTransferJob Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                       Description
PodID M — The PodID of the pod for which to cancel the load port to pod
association.
PortID M — The Port ID for which to cancel the load port to pod association.
OutputPortID M — The Port ID where the pod was to have been delivered after having
executed all reticle related actions.
RPMStatus — M Information concerning the result of the service.

18. 5.6  Clamp
18. 5.6.1  The Clamp service is used by the host if the equipment has separate mechanisms for clamping the carrier
that  are  independent  of  opening  the  carrier.    It  is  used  to  instruct  equipment  to  engage  the  independent  clamping
mechanism.    It  is  used  by  the  host  when  “macro”  instructions  such  as  provided  by  Bind,  PodNotification,
ProceedWithPod and ReticleTransferJob have not been provided.
Table 41  Clamp Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                         Description
PodID C — The PodID of the pod to clamp.  Either the PodID or the PortID must be
specified.
PortID C — The PortID for which to clamp a carrier.  Either the PodID or the PortID
must be specified.
CMStatus                             —                             M                             Information                             concerning the result of the service.



SEMI E109-0305 © SEMI 2001, 2005 52
18. 5.7  Close Pod
18. 5.7.1  The ClosePod service is used by the host to request the equipment close a pod.
Table 42  ClosePod Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                         Description
PortID C — The PortID where a pod is to be closed.  Either PortID or PodID must be
specified.
PodID C — The PodID for which the door should be closed.  Either PortID or PodID
must be specified.
CMStatus                            —                            M                            Information                            concerning the result of the service.

18. 5.8  IndexDown
18. 5.8.1  The IndexDown service is sent by the host to indicate that the equipment should index the reticle cassette
to the position where reticle may be removed from the cassette when it is safe for equipment, personnel, and reticles
to do so.
Table 43  IndexDown Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                         Description
PortID M — PortID to designate the new service status.
PodID C — The ID of the pod to index down.
CMStatus                            —                            M                            Information                            concerning the result of the service.

18. 5.9  IndexUp
18. 5.9.1  The IndexUp service is sent by the host to indicate that the equipment should index the reticle cassette to
the position where the reticle pod may be removed from the equipment when it is safe for equipment, personnel, and
reticles to do so.  This service is optional.
Table 44  IndexUp Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                         Description
PortID M — PortID to designate the new service status.
PodID C — The ID of the pod to index up.
CMStatus                            —                            M                            Information                            concerning the result of the service.

18. 5.10  MoveReticle
18. 5.10.1  The MoveReticle service is used to move reticles from one reticle location to another.  This can include
moving a reticle from a reticle pod location (external to a tool) to an internal reticle library, ReticleID read location,
process  location,  or  a  different  reticle  pod  location  or  from  an  internal  location  to  another  internal  location  or  to  a
reticle pod location.
Table 45  MoveReticle Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                         Description
PortID M — PortID to designate the new service status.
ReticleID C — The ID of the Reticle to move, either the ReticleID or the SourceLocation
must be used.


SEMI E109-0305 © SEMI 2001, 2005 53
Parameter Name Req/Ind Rsp/Conf                                                         Description
SourceLocation C — The ReticleLocationID of the location from which to move the reticle,
either the SourceLocation or the ReticleID must be used.
Destination-
Location
M — The ReticleLocationID of the location to which the reticle shall move.
RPMStatus — M Information concerning the result of the service.

18. 5.11  OpenPod
18. 5.11.1  The OpenPod service is used by the host to request the equipment open a pod
Table 46  OpenPod Service Parameter Definitions
Paramter Name Req/Ind Rsp/Conf Description
PortID C — The PortID where a pod is to be opened.  Either PortID or PodID must be
specified.
PodID C — The PodID for which the door should be opened.  Either PortID or PodID
must be specified.
CMStatus                            —                            M                            Information                            concerning the result of the service.
18. 5.12  PodIn
18. 5.12.1  The PodIn service is only used to request the internal buffer equipment internalize a carrier that has been
moved  to  the  load  port  via  a  previous  PodOut  service.    When  using  host  based  verification,  the  production
equipment shall move the pod in to the internal buffer for the first time after receiving the ProceedWithPod request.
If the PodIn service is received by the production equipment without previously having received a PodOut service
for the carrier, the service will be refused.
Table 47  PodIn Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                         Description
PodID M — The CarrierID for the carrier to internalize.
CMStatus                            —                            M                            Information                            concerning the result of the service.

18. 5.13  PodOut ⎯  The  PodOut  service  is  sent  to  internal  buffer  production  equipment,  to  request  that  the
equipment  move  the  specified  carrier  to  a  load  port,  as  soon  as  the  carrier  is  completed.    When  the  CarrierOut
service is started, the destination load port state becomes TRANSFER BLOCKED, and the load port’s association
state becomes ASSOCIATED.
18. 5.13.1  PodOut Queuing
18. 5.13.1.1  This service request can be queued by the production equipment.  The production equipment is required
to support a queue of n size, where n is equal to the sum of the number of internal buffer locations and the number of
internal FIMS ports.  The order of the queue is FIFO for each load port.  If the load port is not specified in service
request,  the  equipment  chooses  which  load  port  queue  to  place  the  PodOut  service.    The  queued  service  does  not
take effect until the current substrate handling action is complete (i.e., filling, emptying of the pod) and the load port
is  in  the  NOT  ASSOCIATED  state.    When  a  PodOut  service  is  queued  and  the  production  equipment  load  port  is
currently in the TRANSFER BLOCKED state, the production equipment shall keep the load port in the TRANSFER
BLOCKED state.  Then, after the port is cleared, the PodOut service shall begin.
Table 48  PodOut Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                         Description
PodID M — PodID for the carrier to be moved out.


SEMI E109-0305 © SEMI 2001, 2005 54
Parameter Name Req/Ind Rsp/Conf                                                         Description
PortID C — If omitted, the production equipment shall select an appropriate port at the
time the pod is ready to be moved.
CMStatus                            —                            M                            Information                            concerning the result of the service.

18. 5.14  PodRelease
18. 5.14.1  PodRelease request is used to tell the equipment that the pod is ready to be moved away from the read or
write position.  Equipment shall deny the request if LocationID and PodID are mismatched.  ReticlePodLocationID
is a ReticlePod attribute.
Table 49  PodRelease Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                           Description
ReticlePod-
LocationID
C — The ID for the location of the pod.  Either ReticlePodLocationID or PodID must
be used.
PodID C — The PodID of the pod.  Either ReticlePodLocationID or PodID must be used.
CMStatus                           —                           M                           Information                           concerning the result of the service.

18. 5.15  PodTagReadData
18. 5.15.1  PodTagReadData is used to request a block of data from the PodID tag.  Equipment shall deny the request
if LocationID and PodID are mismatched.
Table 50  PodTagReadData Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                           Description
LocationID C — The ID for the location of the pod.  Either LocationID or PodID must be used.
PodID C — The PodID of the pod.  Either LocationID or PodID must be used.
DataSeg C — Indicates a specific section of data.
DataSize C — Indicates the number of bytes to read.
Data — C Data from the PodID tag.  May be NULL if no data exists for the given section.
CMStatus                           —                           M                           Information                           concerning the result of the service.

18. 5.16  PodTagWriteData
18. 5.16.1  PodTagWriteData  is  used  to  request  that  a  block  of  data  be  written  to  the  PodID  tag.    Equipment  shall
deny the request if LocationID and PodID are mismatched.
Table 51  PodTagWriteData Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                        Description
LocationID C — The ID for the location of the pod.  Either LocationID or PodID must be
used.
PodID C — The PodID of the pod.  Either LocationID or PodID must be used.
DataSeg C — Indicates a specific section of data.
DataSize C — Indicates the number of bytes to read.
Data M — Data from the PodID tag.  May be NULL if no data exists for the given
section.


SEMI E109-0305 © SEMI 2001, 2005 55
Parameter Name Req/Ind Rsp/Conf                                                        Description
CMStatus                              —                              M                              Information                              concerning the result of the service.

18. 5.17  Re-QualifyReticle
18. 5.17.1  The Re-QualifyReticle service is sent by the host to indicate that a reticle should be re-qualified.
Table 52  Re-QualifyReticle Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                       Description
ReticleID M — ReticleID to remove from equipment.
RPMStatus — M Information concerning the result of the service.

18. 5.18  ReserveAtPort
18. 5.18.1  The ReserveAtPort service is sent by the host to indicate future activity at the load port.  This allows for
reserving  the  port  but  doing  host  based  ID  verification.    The  load  port  will  enter  the  RESERVED  State  after
receiving this service.
Table 53  ReserveAtPort Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                       Description
PortID M — The Port ID to reserve.
CMStatus                                —                                M                                Information                                concerning the result of the service.

18. 5.19  ReticleTransferJob
18. 5.19.1  The  ReticleTransferJob  service  is  sent  by  the  host  to  inform  the  equipment  of  the  expected  arrival  of  a
reticle pod to a reticle pod load port and/or the expected departure of a reticle pod.  The equipment should create an
association between the reticle pod and reticle load port.  The equipment should transition the load port reservation
state model to RESERVED.  The ReticleTransferJob service is also used by the host to inform the equipment which
reticles contained in the reticle pod should be removed and placed in the equipment.  Lastly the ReticleTransferJob
service  is  used  by  the  host  to  inform  the  equipment  which  reticles  contained  in  the  equipment  should  be  removed
from the equipment and placed in the reticle pod.  This service is optional.
Table 54  ReticleTransferJob Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                      Description
PodID M — The PodID of the pod which will delivered to the equipment.
InputPortID M — The Port ID where the pod will be received.
If zero: The pod must be picked from the tool’s internal buffer (for
internal buffer equipment only).
Either InputPortID or OutputPortID must be used (both may be specified
as well).
OutputPortID M — The Port ID to which the pod will be delivered after having executed all
related reticle actions.
If zero: The pod will remain in the tool’s internal buffer (for internal
buffer equipment only).
Either InputPortID or OutputPortID must be used (both may be specified
as well).
PodPropertiesList  C — A list of name value pairs providing attributes for the pod object being
instantiated with the ReticleTransferJob service.


SEMI E109-0305 © SEMI 2001, 2005 56
Parameter Name Req/Ind Rsp/Conf                                                      Description
ArrivingReticleList C — The list of reticles to remove from the reticle pod and place in the
equipment.  Either ArrivingReticleList or DepartingReticleList must be
used.
DepartingReticleList C — The list of reticle to remove from the equipment and place in the reticle
pod.  Either ArrivingReticleList or DepartingReticleList must be used.
RPMStatus — M Information concerning the result of the service.

18. 5.20  Unclamp
18. 5.20.1  The  Unclamp  service  is  used  by  the  host  if  the  equipment  has  separate  mechanisms  for  unclamping  the
carrier  that  are  independent  of  opening  the  carrier.    It  is  used  to  instruct  equipment  to  disengage  the  independent
clamping mechanism.  It is used by the host when “macro” instructions such as provided by Bind, PodNotification,
ProceedWithPod and ReticleTransferJob have not been provided by the host.
Table 55  Unclamp Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                       Description
PodID C — The PodID of the pod to unclamp.  Either the PodID or the PortID must
be specified.
PortID C — The PortID for which to unclamp a carrier.  Either the PodID or the
PortID must be specified.
CMStatus                               —                               M                               Information                               concerning the result of the service.

19  Pod Tag Read/Write
19. 1  Some technologies allow data to be stored on a PodID tag where it can be subsequently read and/or modified.
In one case the equipment can write information to the PodID tag.  For example, the equipment will have knowledge
of the ReticleID of a reticle placed in a pod.  At this time the equipment may write the ReticleID on the PodID tag.
In  another  case,  it  is  the  host  that  specifies  when  this  data  is  written  and  read,  because  the  equipment  has  no
knowledge  of  the  contents  of  the  data.    The  read  operations  shall  be  performed  only  when  the  pod  is  at  the  read
position.  The write operations shall be performed only when the pod is at the write position.
NOTE 2:  The  read  and  write  positions  may  be  the  same  position.    The  host  shall  be  able  to  both  read  and  write  whenever
PodHold switch is set to Host Release and the pod is at the respective read or write position.  Once the host has completed all of
its read and write operations for that pod, then the host sends the PodRelease request to the equipment.  The PodRelease service
informs the equipment that pod read or pod write is complete.  The PodRelease service has a different purpose from the PodOut
service.    The  intent  of  the  PodOut  service  request  is  to  move  the  pod  to  a  load  port,  while  the  intent  of  the  PodRelease  service
request is to inform equipment that it may move the pod away from the read or write position.  Therefore, PodOut may also be
used  with  the  PodRelease  command.    If  PodHold  is  Host  Release,  then  the  pod  shall  be  kept  at  the  write  position  until  an
PodRelease service request is received, regardless of when a PodOut is sent.  If PodHold is set to Equipment Release, then the
PodRelease request has no effect.
20  Additional Events
20. 1  This  section  identifies  data  collection  events  that  are  not  related  to  State  transitions  for  variable  data  items.
The  intent  of  this  section  is  to  ensure  certain  data  is  available  for  specific  events  that  are  not  related  to  state
transitions,  not  to  define  all  the  additional  collection  events  for  RPMS.    Also,  all  state  transitions  in  RPMS  state
models are required to have associated event reports.
20. 2  Buffer Capacity Changed Event
20. 2.1  An  event  shall  be  generated  whenever  Buffer  Capacity  changes.    This  applies  to  all  internal  buffers  and
internal buffer partitions.


SEMI E109-0305 © SEMI 2001, 2005 57
20. 2.2  Data required to be available for this event report:
• BufferPartitionInfo
20. 3  Pod Closed Event
20. 3.1  If the pod is equipped with a door, an event shall be generated when a pod door has been closed.
20. 3.2  Data required to be available for this event report:
• PodID,
• LocationID, and
• PortID (if valid).
20. 4  Pod Location Change Event
20. 4.1  An event shall be generated whenever a pod has changed location.  This applies to both load ports, substrate
ports, and internal buffer locations.
20. 4.2  Data required to be available for this event report:
• PodID,
• LocationID (new destination location), and
• PodLocationMatrix.
20. 5  Pod Opened Event
20. 5.1  If the pod is equipped with a door, an event shall be generated when a pod door has been opened.
20. 5.2  Data required to be available for this event report:
• PodID,
• LocationID, and
• PortID (if valid).
20. 6  PodID Read Fail Event
20. 6.1  An  event  shall  be  generated  when  the  equipment  attempts  to  read  a  PodID  and  fails  at  a  port  in  the  NOT
ASSOCIATED STATE.
20. 6.2  Data required to be available for this event report:
• PortID
20. 7  ID Reader Unavailable Event
20. 7.1  An event shall be generated whenever an id reader becomes unavailable for any reason.  This applies to all
load ports.
20. 7.2  Data required to be available for this event report:
• Port ID
20. 8  ID Reader Available Event
20. 8.1  An event shall be generated whenever an id reader becomes available.  This applies to all load ports.
20. 8.2
Data required to be available for this event report:
• Port ID
20. 9  Reticle Usage Warning Limit Event
20. 9.1  An Event shall be generated whenever a reticle is nearing the configurable limits of usage


SEMI E109-0305 © SEMI 2001, 2005 58
20. 9.2  Data required to be available for this event
• ReticleID
20. 10  ReticleTransferJob Complete Event
20. 10.1  An event shall be generated whenever a ReticleTransferJob completes.
20. 10.2  Data required to available for this event:
• PodID
21  Variable Data
21. 1  The purpose of this section is to define the list of variable data requirements for RPMS equipment.  Values of
these variables are available to the host via collection event reports and host status queries.  Some of the data items
listed are valid for internal buffer production equipment only, and are marked as such.
21. 2  Variable Data Definitions
21. 2.1  The following table defines variable data that shall be provided by the production equipment.  Also, for the
objects defined by Reticle and Pod Management, the identifier of that object and all of the attributes of that object
shall be available for inclusion in event reports associated with that object.  Subscripted variables are used either as
items within a list or to differentiate data representing different entities.  Subscripted variables are always valid.
Table 56  Variable Data Definitions
Variable Name Description                                     Type                                     AccessComment
AccessMode
i
The access mode for the i
th

load port.
Enumerated:
MANUAL,
AUTO
RO
AlarmInfo The number of the error
ocurring.
List of 2 items
1.  Alarm number
2.  Alarm description
RO The supplier is free to add
additional errors beyond what
is defined in the Alarm
Information table, but the
support for alarms defined in
that table are required
#1
.
AvailPartitionCapacity The current available buffer
capacity for a logical
partition inside internal
buffer equipment
(PartitionCapacity − # of
pods in partition).
Positive integer RO Only applicable to internal
buffer production equipment.
AvailPartitionCapacity
i
The AvailPartitionCapacity
for the i
th
PartitionID within
the internal buffer.
Positive integer RO Only applicable to internal
buffer production equipment.
BufferCapacityList The current PartitionType,
AvailPartitionCapacity, and
PartitionCapacity for all
logical buffer partitions.
List of n groups of items
1.  BufferPartitionInfo
1

.
.
n.  BufferPartitionInfo
n

RO Only applicable to internal
buffer production equipment.
BufferPartitionInfo The related information for a
logical buffer partition.
Structure of 4 items
PartitionID
PartitionType
AvailPartitionCapacity
PartitionCapacity
RO Only applicable to internal
buffer production equipment.


SEMI E109-0305 © SEMI 2001, 2005 59
Variable Name Description                                     Type                                     AccessComment
BufferPartitionInfo
i
The related information for
the i
th
buffer partition.
Structure of 4 items
PartitionID
i

PartitionType
i

AvailPartitionCapacity
i

PartitionCapacity
i

RO Only applicable to internal
buffer production equipment.
BypassReadID Enables or disables automatic
ID acceptance when the
PodID reader is unavailable.
Boolean RW If TRUE, the ID provided
with Bind is used
automatically.
PodID The ID of the pod. Text RO
PodID
I
The PodID at the i
th

locationID.
Text RO
PodLocationMatrix A list all the pods at/in the
equipment.  Both internal to
the equipment, and on
equipment load ports.
List of n pairs of items
1.  LocationID
1
PodID
1

.
.
n.  LocationID
n
PodID
n

RO The PodID
i
shall be null if
there is no pod at the
locationID
i
.  If a pod is at
LocationID
i
, but the PodID
i
is
not known, the value of
PodID
i
shall be
“UNKNOWN”.
LocationID The ID of a pod location. Text RO Pod locations are any location
at/in the production equipment
where a pod may rest.
LocationID
i
The LocationID

of the i
th
pod
location.
Text RO Pod locations are any location
at/in the production equipment
where a pod may rest.
PartitionCapacity The total PartitionCapacity
for a logical internal buffer
partition.
Positive integer RO Only applicable to internal
buffer production equipment.
PartitionCapacity
i
The PartitionCapacity for the
i
th
PartitionID of the internal
buffer.
Positive integer RO Only applicable to internal
buffer production equipment.
PartitionID The ID of a logical internal
buffer partition.
Text RO Used to identify separate
material types in an internal
buffer.
PartitionID
i
The ID of the i
th
logical
partition of the internal
buffer.
Text RO Used to identify separate
material types in an internal
buffer.
PartitionType The type of a logical partition
within an internal buffer.
Text RO Only applicable to internal
buffer production equipment.
Some examples of logical
buffer PartitionType are
Product, Dummy, Substrate,
and Seed.
PartitionType
i
The PartitionType
corresponding with the i
th

PartitionID.
Text RO Only applicable to internal
buffer production equipment.
Some examples of logical
buffer PartitionType are
Product, Dummy, Substrate,
and Seed.
PortAssociationState The association state of a
load port.
Enumerated:
ASSOCIATED,
NOT ASSOCIATED
RO


SEMI E109-0305 © SEMI 2001, 2005 60
Variable Name Description                                     Type                                     AccessComment
PortAssociationState
i
The association state of the i
th
load port.
Enumerated:
ASSOCIATED,
NOT ASSOCIATED
RO
PortAssociationState-
List
The current association state
for all load ports.
A list of n items
1.  PortAssociationState
1
.
.
n.  PortAssociationState
n

RO This can be used to re-
synchronize the host.
PortID ID of a load port. Positive integer RO
PortID
I
ID of the load port where the
pod transfer is taking place.
One PortID exists for each
load port.
Positive integer RO
PortStateInfo The PortAssociationState
combined with the
PortTransferState.
List of 2 items
PortAssociationState
PortTransferState
RO A combination of both port
states.
PortStateInfo
i
The PortAssociationState
combined with the
PortTransferState for the i
th

load port.
List of 2 items
PortAssociationState
i

PortTransferState
i

RO A combination of both port
states.
PortStateInfoList List of PortStateInfo for all
load ports.
List of n items
1.  PortStateInfo
1

.
.
n  PortStateInfo
n

RO A list of all the port states for
all the ports.
PortTransferState The current transfer state of a
load port.
Enumerated:
OUT OF SERVICE,
TRANSFER BLOCKED,
READY TO LOAD, READY
TO UNLOAD
RO Super states are not included,
only sub states.
PortTransferState
i
The current transfer state of
the i
th
load port.
Enumerated:
OUT OF SERVICE,
TRANSFER BLOCKED,
READY TO LOAD, READY
TO UNLOAD
RO Super states are not included,
only sub states.
PortTransferStateList The current Load Port
Transfer State for all load
ports.
A list of n items
1.  PortTransferState
1
.
.
n.  PortTransferState
n

RO This can be used to re-
synchronize the host.
Reason The reason for transition 15,
SLOT MAP NOT READ to
WAITING FOR HOST.
Enumerated:
VERIFICATION NEEDED,
VERIFICATION BY
EQUIPMENT
UNSUCCESSFUL,
READ FAIL,
IMPROPER WAFER
POSITION
RO Information to aid host in
deciding appropriate action.
