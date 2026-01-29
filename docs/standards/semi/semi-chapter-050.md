---
title: "E87-0705 - © SEMI 1999, 2005..."
description: "SEMI标准文档"
sidebar_label: "E87-0705 - © SEMI 1999, 2005..."
sidebar_position: 500
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-050.pdf'
  chapter: 50
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/050.pdf"
  pdfSize="0.39MB"
  title="E87-0705 - © SEMI 1999, 2005..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI E87-0705 © SEMI 1999, 2005 20
Table 8  Carrier Transfer Boundaries
Transfer Type Transfer Method Starting Boundary Ending Boundary
MANUAL This starting boundary is specified by the
user.  Known examples of the starting
boundary include but are not limited to; the
presence sensor detecting a carrier, a load
port door opening, input to the equipment by
the operator through a switch at the load port
or the equipment console.
This ending boundary is specified by the
user.  Known examples of the ending
boundary include but are not limited to; a
preset configurable time following presence
and placement sensor detecting a carrier, a
load port door closing, or input to the
equipment by the operator through a switch
at the load port or the equipment console or
a service message.
LOAD
AUTO The PIO signal “READY” is active for load.
See SEMI E84.
PIO signals a transfer complete signal
“COMPT”. See SEMI E84.
MANUAL This starting boundary is specified by the
user.  Examples of the starting boundary
include but are not limited to presence and
placement sensor no longer detecting a
carrier, a load port door opening, or input to
the equipment by the operator through a
switch at the load port or the equipment
console or a service message.
This ending boundary is specified by the
user.  Examples of the ending boundary
include but are not limited to a preset
configurable time following presence and
placement sensor no longer detecting a
carrier, a load port door closing, or input to
the equipment by the operator through a
switch at the load port or the equipment
console, or a service message.
UNLOAD
AUTO The PIO signal “READY” is active for
unload. See SEMI E84.
PIO signals a transfer complete signal
“COMPT”. See SEMI E84.

11. 2  Manual Carrier Transfer Confirmation Trigger
11. 2.1  For  a  manual  transfer  completion  confirmation,  the  production  equipment  supplier  must  implement  a
software or hardware mechanism for an operator to inform the equipment that the carrier transfer is complete.
11. 3  Access Mode Initial Value
11. 3.1  Also,  when  equipment  re-initialization  occurs,  the  access  mode(s)  must  be  remembered,  and  used  as  the
initial value when initializing. Since the access mode is remembered through re-initializations, the initial value that
is  used  the  very  first  time  the  software  is  ever  loaded  is  not  important.  The  equipment  supplier  is  free  to  set  this
default value.
11. 3.2  Access Mode State Model Diagram
ACCESS MODE
MANUAL
AUTO
1
23
H

Figure 4
Access Mode State Model Diagram



SEMI E87-0705 © SEMI 1999, 2005 21
11. 3.3  Access Mode State Definitions
11. 3.3.1  ACCESS MODE — The parent state for the MANUAL and AUTO sub-states.
11. 3.3.2  MANUAL — A sub-state of ACCESS MODE. When the production equipment or specified load port is in
this  mode,  only  manual  (non-AMHS)  carrier  transfers  are  allowed.  The  production  equipment  shall  have  the
capability  of  generating  an  alarm  if  an  automated  (AMHS)  delivery  is  attempted.    If  a  ChangeAccess  service  with
the value of MANUAL is received in this state, the equipment shall accept the service and no event is sent for this
action.
11. 3.3.3  AUTO — A sub-state of ACCESS MODE. When the production equipment or specified load ports are in
this  mode,  only  automated  (AMHS)  carrier  transfers  are  allowed.  The  production  equipment  shall  have  the
capability  of  generating  an  alarm  if  a  manual  delivery  is  attempted.    If  a  ChangeAccess  service  with  the  value  of
AUTO is received in this state, the equipment shall accept the service and no event is sent for this action.
11. 3.4  Access Mode State Transition Table
11. 3.4.1  Table 9 defines the transitions for the Access Mode State Model.
Table 9  Access Mode State Transition Definitions

# #

#     Previous     State     Trigger     New state Actions Comments
1    (no state) System restart. MANUAL
or
AUTO
(History)
The access mode
returns to the
mode it was
previous to the
system reset.
Data required to be available for this event
report:
PortID
AccessMode
2    MANUAL The host or operator has
executed a ChangeAccess
service with the value of
AUTO. This trigger can
happen at anytime, except
during a carrier transfer.
AUTO  Manual deliveries are not allowed after this
state transition. The operator may also trigger
this transaction from the production
equipment console.
Data required to be available for this event
report:
PortID
AccessMode
3    AUTO The host or operator has
executed a ChangeAccess
service with the value of
MANUAL. This trigger
can happen at anytime,
except during carrier
transfer.
MANUAL      The operator may also trigger this transaction
from the production equipment console or a
manual switch at the load port. Automated
transfers are not allowed after this state
transition.
Data required to be available for this event
report:
PortID
AccessMode

12  Reservation State Model
12. 1  The purpose of the Reservation State Model is to define the host view of future activity at a specific load port.
12. 1.1  In  the  Reservation  State  Model,  the  ReserveAtPort  and  CancelReservationAtPort  services  enable  the
following items:

# 1

1. They enable the host to inform the equipment of a future carrier delivery without specifying the carrier ID and
at  the  same  time  allow  host  based  verification.  (Equipment  based  verification  is  enabled  via  the  Load
Port/Carrier  Association  State  Model,  the  Bind  service,  and  the  Carrier  Notification  service  detailed  in  §13,
¶15.4.2 and ¶15.4.11 of SEMI E87.)

# 2

2. They  enable  the  equipment  to  send  a  state  change  event  to  the  host  if  the  operator  (either  local  or  remote)
informs  the  equipment  of  a  future  carrier  delivery  to  a  port  without  specifying  the  carrier  ID.  Thus  the  host


SEMI E87-0705 © SEMI 1999, 2005 22
knows  that  the  operator  expects  to  use  that  port  for  something  the  host  did  not  request  for  AMHS  based
delivery.

# 3

3. They  enable  internal  buffer  equipment  to  inform  the  host  that  it  is  physically  initiating  a  carrier  out  operation
(this carrier has a known or specified ID) and that no AMHS delivery should be scheduled.

# 4

4. The Bind and CancelBind services also trigger changes in the Load Port Reservation State Model.  If the Load
Port  Reservation  state  model  is  in  the  NOT  RESERVED  state,  the  Bind  service  triggers  a  transition  to  the
RESERVED state.  If the Load Port Reservation is in the RESERVED State, the CancelBind service triggers a
transition to NOT RESERVED.
12. 1.2  For    internal    buffer    equipment,    the    Reservation    State    Model,    the    ReserveAtPort    service,    the
CancelReservationAtPort service, and all other associated functionality are necessary for fundamental compliance to
this standard.
12. 1.3  For    fixed    buffer    equipment,    the    Reservation    State    Model,    the    ReserveAtPort    service,    the
CancelReserveAtPort  service,  and  all  other  associated  functionality  is  a  user  option  and  not  necessary  for
fundamental compliance.
12. 1.4  For equipment implementing the reservation state model, the equipment shall provide a load port reservation
state model for each load port.
12. 2  Reservation Visible Signal
12. 2.1  When  a  port  reservation  has  taken  place,  the  equipment  shall  display  a  visible  signal  indicating  that  the
designated load port is in the Reserved State.  Examples of visible signals for the associated load port are: Blinking
LEDs, flags, color indicators, or other methods that allow easy recognition that the load port is reserved; proximity
to or location on the load port is recommended.  The visible signal shall remain present as long as the load port state
remains  RESERVED.    When  the  state  changes  to  NOT  RESERVED  the  visible  indicator  shall  cease.    This
capability is not required for fundamental compliance to CMS.
12. 3  Reservation State Model Diagram
NOT
RESERVED
RESERVED
23
1
Load Port
Reservation

Figure 5
Reservation State Model Diagram



SEMI E87-0705 © SEMI 1999, 2005 23
12. 4  Load Port Reservation State Definitions
12. 4.1  LOAD PORT RESERVATION — The super state of the substates NOT RESERVED and RESERVED.
12. 4.2  NOT  RESERVED  —  A  substate  of  LOAD  PORT  RESERVATION,  this  state  is  active  when  there  is  no
reservation existing at the load port.
12. 4.3  RESERVED — A substate of LOADPORT RESERVATION, this state is active when there is a reservation
for future activity at the load port. When in this state, the access mode for a load port may not be changed.
12. 5  Load Port Reservation State Transition Table
Table 10  Load Port Reservation State Transition Table
#     Previous     State     Trigger     New State Actions Comments
1    (no state) System reset. NOT
RESERVED
No event report is required
for this transition.
2    NOT
RESERVED
Service:  If reserved by service,
the host or operator sends a
ReserveAtPort or a Bind service
to the production equipment.
CarrierOut:  This happens when
the equipment physically initiates
a CarrierOut operation.
RESERVED     If the user has configured
the equipment to use the
reservation visible signal
indicator, it is activated for
this load port.
Data required to be
available for this event
report:
PortID
LoadPortReservationState
CarrierID may be included
when a carrier out or a
bind service triggers this
transition.
3    RESERVED    Service:  If a reservation is
cancelled by service, the host or
operator sends a CancelBind or a
CancelReservationAtPort.
Carrier arrival:  A carrier arrives
at the reserved port.
NOT
RESERVED
If the user has configured
the equipment to use the
reservation visible signal,
the indicator is deactivated
for this load port.
Data required to be
available for this event
report:
PortID
LoadPortReservationState

12. 6  Relation of Reservation to Association
12. 6.1  The following figure indicates the relationship of Association to Reservation.
Reservation / Association
ASSOCIATED
ID  Read
Unload  or
carrier in
Complete
Load
Complete
ASSOCIAT ED
RESERVED
Bind
Carrier Presence
Load
w/o Bind
w/o Reser ve
Load
w/ Bind
If fails, then  PWC/CC
is received
RESERVED
Reserve
Load
w/ Rese r ve
ASSOCIAT ED
Visible Signal
Carrier Out
Complete
Unload
Complete
Carrier Out
St a rt
RESERVED
ASSOCIAT ED
Carrier Out

Figure 6
Relation of Reservation to Association



SEMI E87-0705 © SEMI 1999, 2005 24
13  Load Port/Carrier Association State Model
13. 1  The purpose of the Carrier Association State Model is to define the host view of carrier to load port association
of the production equipment, as well as the host interactions with the production equipment necessary to associate a
carrier  to  load  port,  and  to  perform  equipment  based  carrier  verification.  Each  load  port  shall  maintain  an
independent  instance  of  the  Carrier  Association  State  Model.  Each  instance  of  this  state  model  must  not  influence
the state of the same state model for a different load port.
13. 1.1  This  state  model  provides  the  ability  to  perform  carrierID  verification  with  two  different  methods.  If  the
CarrierID is provided before the equipment reads the CarrierID, the CarrierID that becomes associated with the load
port can be used later for equipment based carrier verification. If the association happens by CarrierID read (not by a
service execution), then the production equipment shall report the CarrierID information in a data collection event.
13. 2  Load Port/Carrier Association State Model Diagram
NOT
ASSOCIATED
ASSOCIATED
23
1
LOAD PORT/CARRIER
ASSOCIATION
4

Figure 6
Load Port/Carrier Association State Model Diagram

13. 2.1  Load Port/Carrier Association State Definitions
13. 2.1.1  LOAD   PORT/CARRIER   ASSOCIATION   —   The   parent   state   of   the   NOT   ASSOCIATED   and
ASSOCIATED sub-states.
13. 2.1.2  NOT  ASSOCIATED  —  A  sub-state  of  LOAD  PORT/CARRIER  ASSOCIATION.  There  is  no  carrier
association present for this load port.
13. 2.1.3  ASSOCIATED  —  A  sub-state  of  LOAD  PORT/CARRIER  ASSOCIATION.  A  CarrierID  has  been
associated with this load port. The load port is not available for a new carrier association.
13. 2.2  Load Port/Carrier Association State Transition Table
13. 2.2.1  Table 11 defines the transitions of the Load Port/Carrier Association State Model.


SEMI E87-0705 © SEMI 1999, 2005 25
Table 11  Load Port/Carrier Association State Transition Definitions
#       Previous       State       Trigger       New State Actions Comments
1    (no state) System reset. NOT
ASSOCIATED
No event report is required
for this transition
2    NOT
ASSOCIATED
Service Normal: If associated
by service in the noraml
situation, the host sends a
Bind service to the
production equipment when
the port is unoccupied.
Service Abnormal: If
associated with a service in
an abnormal situation, the
host sends a
ProceedWithCarrierService
to the production equipment
when the load port is
ocuupied.
CarrierID Read: If
associated by a CarrierID
read, the production
equipment creates the
association at the time the
CarrierID read is performed.
Known Carrier: A carrier
already known to the
production equipment is
being loaded onto the load
port. This happens when the
CarrierOut service is
initiated.
ASSOCIATED  Once the CarrierID to load
port association is complete,
the load port is not available
for association until the state
returns to NOT
ASSOCIATED again.
Data required to be
available for this event
report:
PortID
CarrierID
PortAssociationState
3    ASSOCIATED    Service: If cancellation of a
load port association is
required; then, this can be
accomplished by sending a
CancelBind service to the
production equipment before
the carrier arrives to the
loadport or before a transfer
sequence has started.
Carrier Unload: An
association cancellation may
also be performed by
removing the carrier from the
load port or by the production
equipment moving a carrier
to an internal buffer position.
NOT
ASSOCIATED
A carrier unload, may
happen before or after
processing occurs. The load
port is available for another
association once the carrier
is removed.
Data required to be
available for this event
report:
PortID
PortAssociationState


SEMI E87-0705 © SEMI 1999, 2005 26
#       Previous       State       Trigger       New State Actions Comments
4    ASSOCIATED       Production    equipment    based
carrier verification fails, and
the carrier assumes the ID
value from the carrier that is
on the load port.
Internal buffer:
A carrier is unloaded and a
queued CarrierOut service
starts.
ASSOCIATED       The       existing       carrierID
that was associated by
a Bind service is
unassociated by the
production equipment
and the new carrierID
is now associated to
the Load Port. The
production equipment
shall delay further
action until receiving
either a CancelCarrier
or a
ProceedWithCarrier
command from the
host.
This transition only occurs
when the Bind command
has been used.
Data required to be
available for this event
report:
PortID
CarrierID
PortAssociateState

14  Verification
14. 1  Verification  is  the  operation  of  comparing  an  actual  value  with  an  expected  value.  Verification  may  be
performed by either the host or the equipment, depending upon whether the host is using the Bind service or not.
14. 1.1  If the host provides the expected value before the actual value is obtained by the production equipment, then
the production equipment shall perform the verification.
14. 1.2  If the host does not provide the expected value, using the Bind service, before the actual value is read, then
the production equipment shall provide to the host, the information necessary for host based verification.
14. 1.3  There are two values that are defined by Carrier Management that require verification: Carrier ID and Carrier
Slot Map.
14. 2  CarrierID Verification
14. 2.1  Table 12 defines the methods for verifying the Carrier ID.
Table 12  Carrier ID Verification Methods
Verification
Method Desired
Host Actions before
Load
Equipment Action When Carrier Is Loaded Host Actions after Load
Production
Equipment Based
Bind Service: The host
executes the Bind
service to associate a
load port and a
CarrierID.
Bind Service: The production equipment
reads the Carrier ID from the carrier,
compares it to the CarrierID supplied with the
Bind service.

Verification                                       Passed:                                       Transition 6 of the
Carrier State Model occurs.  The production
equipment proceeds with processing.
Verification Passed: None.
Verification                                       Failed:                                       The equipment initiates
by itself a CancelBind and destroys the
carrier created with the “Bind” service and
instantiates a new carrier with the newly read
CarrierID. The carrier shall not be opened or
moved to an internal buffer in the production
equipment until and unless the
ProceedWithCarrier service is received from
the host.
Verification Failed: The host uses
either the CancelCarrier service to
force the carrier to the unload
position, or indicates to the
production equipment that it may
proceed with the unexpected carrier,
by sending the ProceedWithCarrier
service.  In both cases the carrierID
specified in the service is equal to
the one determined by the carrierID
read.


SEMI E87-0705 © SEMI 1999, 2005 27
Verification
Method Desired
Host Actions before
Load
Equipment Action When Carrier Is Loaded Host Actions after Load
Carrier Notification
Service: The host
executes the
CarrierNotification
service to inform the
equipment of the
future arrival of a
carrier to an
unspecified port.
Carrier Notification Service: The production
equipment reads the Carrier ID from the
carrier, compares it to the CarrierID supplied
with a CarrierNotification service.

Verification Passed: Transition 6 of the
Carrier State Model occurs.  The production
equipment proceeds with processing.
Verification Passed: None.
Verification Failed: Not Applicable; because
there is no association between a load port
and a carrier, equipment based verification
failure is not possible.  If a carrier that has not
been instantiated arrives at a load port, the
equipment shall consider this as host based
verification.
Verification Failed: Not Applicable,
because there is no association
between a load port and a carrier,
equipment based verification failed
is not possible.  If a carrier that has
not been instantiated arrives at a load
port, the equipment shall consider
this as host based verification.”  The
host will respond with either a
ProceedWithCarrier or a
CancelCarrier Service.  (See Host
Based verification method).
Host Based None required, the
host may issue a
ReserveAtPort service.
The production equipment reads the
CarrierID and reports it to the host in an event
report.  Following carrierID read the
equipment initiates Transition 3 of the Carrier
State Model and a carrier object with the
carrierID equal to the one determined by the
carrierID read is instantiated. The carrier shall
not be opened or moved to an internal buffer
in the production equipment until and unless
the ProceedWithCarrier service is received
from the host.
Verification Passed: The host sends
a ProceedWithCarrier service
indicating the verification passed.
Verification Failed: The host uses
the CancelCarrier or
CancelCarrierAtPort service to force
the carrier to the unload position.

14. 3  Slot Map Verification
14. 3.1  Table  13  defines  the  methods  for  verification  of  the  Carrier  Slot  Map.  Some  user’s  factory  operations  may
not require strict management of the slot map. In this case the user may use the host based verification method.
Table 13  Slot Map Verification Methods
Verification
Method Desired
Host Actions Before
Verification
Equipment Action When
Carrier is Loaded
Host Actions After Load
Production
Equipment Based
The host provides a
Slot Map with the
Bind service or the
ProceedWithCarrier
service.
The production equipment
checks the carrier slot map
and compares it to the slot
map supplied by the host.
Either transition 13 or 14 of
the Carrier State Model
occurs.
Verification Passed: None, the production equipment
proceeds with the carrier.
Verification Failed: If the host decides to cancel
processing, the host issues the CancelCarrier service. If
the host decides to continue processing, the host issues
the ProceedWithCarrier service.


SEMI E87-0705 © SEMI 1999, 2005 28
Verification
Method Desired
Host Actions Before
Verification
Equipment Action When
Carrier is Loaded
Host Actions After Load
Host Based None. The production equipment
checks the carrier slot map
and reports it to the host in
an event report. The host has
the responsibility for
verifying the slot map.
Verification Passed: The host sends a
ProceedWithCarrier indicating the verification passed.
Verification Failed: If the host decides to cancel
processing, the host issues the CancelCarrier service. If
the host decides to continue processing, the host issues
the ProceedWithCarrier service.

14. 4  This table clarifies the relation of the reservation and verification to the related services.
Table 14  Reservation and Verification Relation to Service
Information Provided with Service  Reser-
vation
CarrierID
Verification
Carrier SlotMap
Verification
Service Used
Port ID Carrier IDCarrier
SlotMap
1   Yes   Equipment   based       Equipment based Bind Yes Yes Yes
2   Yes   Equipment   based       Host based Bind Yes Yes No
3   Yes Host based Host based ReserveAtPort Yes No No
ProceedWithCarrier (following ID
read and host verification).
No               Yes               No
4   Yes Host based Equipment based      ReserveAtPort      Yes      No      No
ProceedWithCarrier    to    provide
slotmap (following ID read and
host verification).
No               Yes               Yes
5   No Equipment based Equipment based      CarrierNotification                                  No                                  Yes                                  Yes
6   No Equipment based Host based                CarrierNotification                No                Yes                No
7   No Host based Equipment based ProceedWithCarrier to provide
slotmap (following ID read and
host verification).
No               Yes               Yes
8   No Host based Host based ProceedWithCarrier (following ID
read and host verification).
No               Yes               No

15  Carrier Release Control
15. 1  For both fixed buffer and internal buffer equipment, where Carrier Read/Write technology is used, the carrier
must remain at the write position where the tag may be accurately written on until the Host has completed all of its
read and write operations.  For this purpose, a variable that affects the equipment releasing a carrier is defined.
15. 2  Carrier  Hold  Trigger  —  Both  fixed  buffer  equipment  and  internal  buffer  equipment  shall  allow  the  user  to
select a trigger to release the carrier when reading/writing is complete.  Carrier release does not mean the equipment
must move the carrier from the location it currently occupies, only that it is permissible to do so.
15. 2.1  CarrierHold  Trigger  set  to  Host  Release  —  If  the  Carrier  Hold  trigger  is  set  to  Host  Release,  both  fixed
buffer  and  internal  buffer  equipment  shall  hold  the  carrier  at  the  write  position  until  the  CarrierRelease  service  is
received.
15. 2.2  CarrierHold Trigger set to Equipment Release — If the Carrier Hold trigger is set to Equipment Release, the
equipment shall release the carrier based on the Carrier Object state model transition to CARRIER COMPLETE or
CARRIER STOPPED.
15. 3  For  fixed  load  port  equipment  in  AUTO  access  mode,  it  may  be  desirable  to  leave  a  completed  carrier
clamped,  locked,  or  at  the  docked  position  until  the  AMHS  arrives  to  pick  it  up.    This  reduces  the  chance  that  an
operator may remove it.  For this purpose, a variable that affects UnClamp Control is provided to allow the user to
select  the  desired  behavior.    When  the  equipment  finishes  with  a  carrier,  the  Carrier  State  transitions  from
ACCESSING  to  CARRIER  COMPLETE  (normal)  or  CARRIER  STOPPED  (abnormal)  and  the  equipment  sends


SEMI E87-0705 © SEMI 1999, 2005 29
either  the  CarrierComplete  event  (normal)  or  the  CarrierStopped  event  (abnormal).    If  the  carrier  has  a  door,  the
door shall be closed by this point.
15. 4  Fixed buffer equipment shall allow the user to select a trigger to unclamp the carrier based on AMHS arrival at
the equipment. If the access mode is MANUAL, the unclamp control trigger has no effect.
15. 4.1  UnclampControl  trigger  set  to  CARRIERCOMPLETE/CARRIERSTOPPED  Triggered  Unclamp
—  The
equipment  automatically  unclamps  the  carrier  when  the  Carrier  Status  transitions  to  CARRIERCOMPLETE  or
CARRIERSTOPPED.
15. 4.2  UnclampControl  trigger  set  to  AMHS  Triggered  Unclamp
—  The  equipment  behavior  depends  upon  the
Load  Port  Access  State.  If  the  Loadport  Access  State  is  AUTO,  the  carrier  remains  clamped,  locked,  or  at  the
docked  position  (it  will  remain  at  the  docked  position  only  if  that  is  the  only  position  on  which  the  carrier  can  be
clamped) until AMHS has arrived.  The AMHS arrives and begins a PIO unload sequence.  The carrier must be at or
moved to the pickup position and any additional clamp mechanisms must be released by the appropriate point of the
sequence.
NOTE 2:  It may be necessary to adjust timeouts for the AMHS to allow a few more seconds to move the carrier into the pickup
position.
16  Services
16. 1  The purpose of this section is to define the message services required to support CMS functionality.
16. 1.1  This message service definition has four parts:
• A service description table.
• A service parameter table.
• A service parameter value table that specifies the type and range of the parameters.
• A service state mapping table that defines the states in which each service is valid.
16. 2  Service Message Description
16. 2.1  There are two types of services:
• An initial message and response between the service user and the service provider.
• A notification message from the service provider to the service user that does not require a response.
16. 2.2  The  “TYPE”  column  in  the  following  table  is  used  to  indicate  whether  the  service  consists  of  a
request/response message pair, “R”, or a single notification message, “N”.
Table 15  Service Message Description
Service Name Type Description
Bind R This service shall associate a CarrierID to a load port and shall cause the load port to
transition to the RESERVED state.
CancelAllCarrierOut R This service shall cause all CarrierOut services to be removed from the queue.
CancelBind R This service cancels a CarrierID to load port association and shall cause the load port to
transition to the NOT RESERVED state.
CancelCarrier R This service shall Cancel the current carrier related action, and the production equipment
shall return the carrier to the unload position of the load port, or an internal buffer position,
depending on the carrier’s position in the production equipment.
CancelCarrierAtPort R This service shall Cancel the current carrier related action, and the production equipment
shall return the carrier to the unload position of the load port.
CancelCarrierNotification R This service shall cause the equipment to destroy a carrier object instantiated through a prior
CarrierNotification.
CancelCarrierOut R This service shall cause a specified CarrierOut service to be removed from the queue by the
production equipment.


SEMI E87-0705 © SEMI 1999, 2005 30
Service Name Type Description
CancelReservationAtPort R This service shall cause the equipment to remove the reservation at the specified Port and to
deactivate the visible signal.
CarrierIn R This service shall cause a carrier to be moved from a load port to an internal buffer location.
Used in anomaly situations.
CarrierNotification R This service shall cause the equipment to instantiate a carrier object.
CarrierOut R This service shall cause a carrier to be moved from the internal buffer to a load port. This
service can be queued by the production equipment.
CarrierReCreate R This service shall cause the carrier object (and consequently, associated state models of the
object) specified by the service to be recreated.  This service shall be accepted only if the
load port is in the “Ready to Unload” state.
CarrierRelease R Release the carrier from Carrier Hold
CarrierTagReadData R Read data from carrier ID tag.
CarrierTagWriteData R Write data to the carrier ID tag.
ChangeAccess R This service shall change the access mode of the specified Ports at the production
equipment.  If the equipment is unable to change one or more of the specified port(s) to the
specified Access Mode, then the equipment shall accept the command (with appropriate
response acknowledgement), and shall change only the Access Mode of those Port(s)
allowed by the equipment, supplying host with an indication that not all ports were
successfully changed.
ChangeServiceStatus R This service shall change the transfer status of a specified load port at the production
equipment.
ProceedWithCarrier R This service shall instruct the production equipment to proceed with using the specified
carrier.
ReserveAtPort R This service shall cause the equipment to reserve the specified Port and activate a visible
signal.   This service is a Transfer boundary.

16. 3  Service Message Parameter Definition
16. 3.1  The following is a list of required parameters used in conjunction with service messages.
Table 16  Service Message Parameter Definition
Parameter Name Form Description
AccessMode                 Enumerated
AUTO,
MANUAL.
The desired access mode of the ports specified.
AttributeData Could be several different data types. The data value associated with AttributeID.
AttributeID                   Text
1 to 40 characters.
Identifier of the object attribute in the PropertiesList.
CarrierID                      Text
Conforms to ObjID as defined in SEMI E39.
Identifier of a carrier.


SEMI E87-0705 © SEMI 1999, 2005 31
Parameter Name Form Description
CMAcknowledge         Enumerated:
• Acknowledge, command has been
performed
• Invalid command
• Cannot perform now
• Invalid data or argument
• Acknowledge, request will be performed
with completion signaled later by an event
• Rejected, invalid state
Acknowledgement of request.
Some services are commanding a certain task to be
performed. This task is only completed if the
expected end-condition is reached or has failed.  A
number of services only have effect on a ‘logical’
level (e.g. Bind, CancelReservationAtPort). Those
services in general can be acknowledged right away
after having performed the task.  Other services that
include triggering of physical movements (e.g.
CarrierOut, CancelCarrier) most likely will be
interpreted as “request action to be initiated” rather
than “do action”. The equipment will reply in those
cases the command “is going to be performed”. This
alleviates transaction timeouts for these services that
may take a long time to perform. It is however up to
the supplier to decide if this is applicable.  The
completion of the task initiated by the services
commanding some task to be performed (either
acknowledged or going to be performed) must result
in either a state transition or other action that
generates a collection event upon normal / abnormal
completion.
CMStatus A structure consisting of CMAcknowledge and
Status.
Return information for a service.
Data                              Text.                              User                              data.
DataSeg                        Protocol-specific. Indicates specific section of data to read or write.
DataSize                       Unsigned                       integer. Indicates the number of bytes of data to read or write.


SEMI E87-0705 © SEMI 1999, 2005 32
Parameter Name Form Description
ErrorCode                     Enumerated:
Valid for all services listed below
Unsupported option [service] requested
Command not valid for current state
Insufficient parameters specified
Parameters improperly specified
Bind
Load port does not exist
Load port already in use
Object identifier in use, Duplicate CarrierID
Invalid attribute value
Unknown attribute name
CancelAllCarrierOut
(none)
CancelBind
Load port does not exist
Unknown object instance – Unknown CarrierID
CancelCarrier
Load port does not exist
Unknown object instance – Unknown CarrierID
Missing Carrier
CancelCarrierAtPort
Load port does not exist
CancelCarrierNotification
Unknown object instance – Unknown CarrierID
CancelCarrierOut
Unknown object instance – Unknown CarrierID
CancelReservationAtPort
Load port does not exist
CarrierIn
Unknown object instance – Unknown CarrierID
CarrierNotification
Object identifier in use, Duplicate CarrierID
Invalid attribute value
Unknown attribute name
CarrierOut
Load port does not exist
Unknown object instance – Unknown CarrierID
CarrierReCreate
Unknown object instance – Unkown CarrierID
Invalid attribute value
Unknown attribute name
Command not valid for current state
ChangeAccess
Load port does not exist
ChangeServiceStatus
Load port does not exist
ProceedWithCarrier
Load port does not exist
Unknown object instance – Unknown CarrierID
Invalid attribute value
Unknown attribute name
ReserveAtPort
Load port does not exist
Load port already in use
Contains the code for the specific error found.
ErrorText Text Text in support of the error code.


SEMI E87-0705 © SEMI 1999, 2005 33
Parameter Name Form Description
PortID                           Integer
1 to n.
ID number of a load port. The PortID number should
be the same as the load port number.
PortList                         List
1 to n items.
List of n items
PortID
1
.
.
n  PortID
n

PropertiesList               List
1 to n name/value pairs.
List of n items
1. AttributeID
1
AttributeData
1
.
.
n. AttributeID
n
AttributeData
n

ServiceStatus                Enumerated:
IN SERVICE,
or OUT OF SERVICE.
The desired transfer service status of the specified list
of load ports.
Status A list of ErrorCode/ErrorText pairs. Reports any errors found.

16. 3.2  The  “Acknowledge,  request  will  be  performed  with  completion  signaled  by  a  later  event”  response  to  a
service, may apply to services listed in the table below.  If this does apply, the supplier must document the event that
signals  completion.    Any  service  not  included  in  Table  17  shall  respond  with  “Acknowledge,  command  has  been
performed.”
16. 3.2.1  Events that may signal completion are listed in Table 17.
Table 17  Deferred Completion Events
Service Events that may signal completion
CarrierOut CarrierLocation Changed Event
Load Port State Change Event (transition 9)
CarrierIn CarrierLocation Change Event
Load Port State Change Event (transition 8)
CancelCarrier CarrierLocation Changed Event
Load Port State Change Event (transition 9)
CancelCarrierAtPort CarrierLocation Changed Event
Load Port State Change Event (transition 9)
ChangeService                                LoadPortTransferState                                Change Event (transition 2 and 3)
ChangeAccess Load Port Access Mode State Change Event (transition 2 and 3)

16. 4  Service Message Definitions
16. 4.1  The  following  tables  specify  the  allowable/required  parameters  for  each  service.  The  column  marked
“REQ/IND” specifies which parameters are required to be supported for CMS compliance (see ¶7.3.4.3).
16. 4.2  Bind
16. 4.2.1  The Bind service is used to associate a CarrierID with a load port. The Bind can contain a PropertiesList of
carrier  object  attributes  that  are  supplied  by  the  host.  A  carrier  object  is  instantiated  when  this  service  is  used
successfully.  The Bind service will be rejected if the carrier specified has already been instantiated through the Bind
or  CarrierNotification  service,  or  a  carrierID  read.  The  Bind  service  also  triggers  a  transition  in  the  Load  Port
Reservation state model from NOT RESERVED to RESERVED.


SEMI E87-0705 © SEMI 1999, 2005 34
Table 18  Bind Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                             Description
PortID M — The PortID where a carrier is expected.
CarrierID                                                    M                                                    —                                                    The                                                    expected                                                    CarrierID.
PropertiesList  C — A list of name value pairs providing attributes for the
carrier object being instantiated with the Bind service.
CMStatus                                                   —                                                   M                                                   Information                                                   concerning the result of the service.

16. 4.3  CancelAllCarrierOut
16. 4.3.1  The  CancelAllCarrierOut  service  is  sent  to  internal  buffer  production  equipment  to  cancel  all  CarrierOut
services in queue.
Table 19  CancelAllCarrierOut Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                         Description
CMStatus                              —                              M                              Information                              concerning the result of the service.

16. 4.4  CancelBind
16. 4.4.1  The  CancelBind  request  is  used  to  cancel  the  association  between  a  port  and  a  Carrier  ID.  The  carrier
object  is  destroyed  when  this  service  is  used  successfully.  The  CancelBind  service  also  triggers  a  transition  in  the
Load Port Reservation state model from RESERVED to NOT RESERVED.
Table 20  CancelBind Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                    Description
PortID C — The PortID for which to cancel the load port to carrier association.
Either PortID or CarrierID must be specified.
CarrierID C — The CarrierID for which to cancel the load port to carrier association.
Either PortID or CarrierID must be specified.
CMStatus                                         —                                         M                                         Information                                         concerning the result of the service.

16. 4.5  CancelCarrier
16. 4.5.1  The CancelCarrier request is used to stop a carrier. If the carrier is at a load port, then it shall be returned to
the load/unload location of the load port and made ready for unload. If the carrier is at an internal location the carrier
will return to an internal buffer location. A subsequent CarrierOut request is required for the production equipment
to  move  the  carrier  to  the  external  load  port.  The  production  equipment  shall  reject  this  service  if  issued  after
substrates have been removed for processing.
Table 21  CancelCarrier Service Parameters
Parameter Name Req/Ind Rsp/Conf                                            Description
CarrierID M — The carrierID to cancel.
CMStatus                                                    —                                                    M                                                    Information                                                    concerning the result of the service.
PortID C — The PortID where the carrier object is located.  This
parameter is not required if the carrier object has been
previously instantiated.



SEMI E87-0705 © SEMI 1999, 2005 35
16. 4.6  CancelCarrierAtPort
16. 4.6.1  CancelCarrierAtPort  is  used  to  abort  any  carrier  at  a  designated  port.  This  service  can  be  used  when  the
carrierID of the carrier at the designated port is unknown.
Table 22  CancelCarrierAtPort Service Parameters
Parameter Name Req/Ind Rsp/Conf                                                Description
PortID M — Any carrier that exist on the load port specified shall be
made ready for unloading.
CMStatus                                             —                                             M                                             Information                                             concerning the result of the service.

16. 4.7  CancelCarrierNotification
16. 4.7.1  The   CancelCarrierNotification   is   used   by   the   host   to   request   the   equipment   cancel   a   previous
CarrierNotification service.  This service shall cause the equipment to destroy the carrier object specified.
Table 23  CancelCarrierNotification Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                               Description
CarrierID M — The CarrierID of the carrier object to destroy.
CMStatus                                             —                                             M                                             Information                                             concerning the result of the service.

16. 4.8  CancelCarrierOut
16. 4.8.1  The  CancelCarrierOut  service  is  sent  to  internal  buffer  production  equipment  to  cancel  a  queued
CarrierOut.
Table 24  CancelCarrierOut Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                          Description
CarrierID M — CarrierID for the CarrierOut service that is being cancelled.
CMStatus                            —                            M                            Information                            concerning the result of the service.

16. 4.9  CancelReservationAtPort
16. 4.9.1  The CancelReservationAtPort service is sent by the host to cancel a reservation at the load port.  The load
port will enter the UNRESERVED State after receiving this service.  A Port reserved by the physical initiation of a
carrier out operation may not be cancelled by this service.
Table 25  CancelReservationAtPort Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                Description
PortID M — The Port ID to reserve
CMStatus                                             —                                             M                                             Information                                             concerning the result of the service.

16. 4.10  CarrierIn
16. 4.10.1  The  CarrierIn  service  is  only  used  to  request  the  internal  buffer  equipment  internalize  a  carrier  that  has
been moved to the load port via a previous CarrierOut service. When using host based verification, the production
equipment  shall  move  the  carrier  in  to  the  internal  buffer  for  the  first  time  after  receiving  the  ProceedWithCarrier
request.  If  the  CarrierIn  service  is  received  by  the  production  equipment  without  previously  having  received  a
CarrierOut service for the carrier, the service will be refused.


SEMI E87-0705 © SEMI 1999, 2005 36
Table 26  CarrierIn Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                           Description
CarrierID M — The CarrierID for the carrier to internalize.
CMStatus                                                    —                                                    M                                                    Information                                                    concerning the result of the service.

16. 4.11  CarrierNotification
16. 4.11.1  The  Carrier  Notification  service  is  used  by  the  host  to  inform  the  equipment  that  a  Carrier  with  the  ID
specified  will  be  arriving  at  the  equipment.    The  load  port  is  not  specified;  therefore  no  carrier  to  load  port
association takes place.  A carrier object with the ObjID equal to the carrierID specified in the service is instantiated.
“The  CarrierNotification  service  will  be  rejected  if  the  carrier  specified  has  already  been  instantiated  through  the
Bind or CarrierNotification service, or a carrierID read.
Table 27  CarrierNotification Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                             Description
CarrierID M — The CarrierID of the carrier object to instantiate.
PropertiesList C  The PropertiesList of the carrier to instantiate.
CMStatus                                                  —                                                  M                                                  Information                                                  concerning the result of the service.

16. 4.12  CarrierOut
16. 4.12.1  The  CarrierOut  service  is  sent  to  internal  buffer  production  equipment,  to  request  that  the  equipment
move the specified carrier to a load port, as soon as the carrier is completed. When the CarrierOut service is started,
the  destination  load  port  state  becomes  TRANSFER  BLOCKED,  and  the  load  port’s  association  state  becomes
ASSOCIATED.
16. 4.12.2  CarrierOut Queuing
16. 4.12.2.1  This service request can be queued by the production equipment. The production equipment is required
to support a queue of n size, where n is equal to the sum of the number of internal buffer locations and the number of
internal  FIMS  ports.  The  order  of  the  queue  is  FIFO  for  each  load  port.  If  the  load  port  is  not  specified  in  service
request, the equipment chooses which load port queue to place the CarrierOut service. The queued service does not
take effect until the current substrate handling action is complete (i.e., filling, emptying of the carrier) and the load
port  is  in  the  NOT  ASSOCIATED  state.  When  a  CarrierOut  service  is  queued  and  the  production  equipment  load
port  is  currently  in  the  TRANSFER  BLOCKED  state,  the  production  equipment  shall  keep  the  load  port  in  the
TRANSFER BLOCKED state. Then, after the port is cleared, the CarrierOut service shall begin.
Table 28  CarrierOut Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                          Description
CarrierID M — CarrierID for the carrier to be moved out.
PortID C — If omitted, the production equipment shall select an appropriate port at the
time the carrier is ready to be moved.
CMStatus                           —                           M                           Information                           concerning the result of the service.

16. 4.13  CarrierRelease
16. 4.13.1  CarrierRelease request is used to tell the equipment that the carrier is ready to be moved away from the
read or write position.  Equipment shall deny the request if PortID and CarrierID are mismatched.


SEMI E87-0705 © SEMI 1999, 2005 37
Table 29  CarrierRelease Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                           Description
PortID C — The ID for the location of the carrier. Either PortID or CarrierID must be
used. For internal buffer equipment when the service is used at an internal
location, only the carrierID is required.
CarrierID C — The CarrierID of the carrier.  Either LocationID or CarrierID must be used.
CMStatus                            —                            M                            Information                            concerning the result of the service.

16. 4.14  CarrierReCreate
16. 4.14.1  CarrierReCreate request is used to re-create the carrier object specified by the service.  This will allow a
repeated introduction of the same carrier on the loadport.  After the service is issued, the equipment shall treat the
carrier occupying the respective loadport identically to one that was physically removed and replaced, deleting the
original  carrier  and  then  re-instantiating  it.    If  no  PropertiesList  is  provided  with  the  service,  then  the  host
verification scenarios for re-instantiating the carrier object shall be followed.  For example, the carrier ID would be
re-read (at which point Carrier State transition #3, (no state) to Waiting for Host occurs) and subsequently verified
by host, followed by slot map re-read and verification by host.  Alternatively, if PropertiesList is provided with this
service, then the equipment shall follow the equipment based verification steps. For example, the carrier object is re-
instantiated  with  the  CarrierID  (and  possibly  content/slot  map)  information  provided  within  the  CarrierReCreate
Service. In this equipment based verification scenario, the equipment is responsible for verifying the contents of the
carrier against the received information. If the equipment supports other SEMI standards (i.e.- SEMI E40/E90/E94),
then from the perspective of those standards, when CarrierReCreate service is received, the scenario would resemble
that of a carrier being removed and a new carrier placed.  The service shall be accepted only if the load port is in the
“Ready to Unload” state.
Table 30  CarrierReCreate Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                          Description
CarrierID M — Carrier ID for the carrier object the service is to be performed upon
PropertiesList C — If sent by the host, then equipment based verification scenario. If not, then
host based verification scenario.
CMStatus — M Information concerning the result of the service

16. 4.15  CarrierTagReadData
16. 4.15.1  CarrierTagReadData is used to request a block of data from the carrier ID tag.  Equipment shall deny the
request if LocationID and CarrierID are mismatched.
Table 31  CarrierTagReadData Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                          Description
LocationID C — The ID for the location of the carrier.  Either LocationID or CarrierID must
be used.
CarrierID C — The CarrierID of the carrier.  Either LocationID or CarrierID must be used.
DataSeg C — Indicates a specific section of data.
DataSize C — Indicates the number of bytes to read.
Data — C Data from the carrier ID tag. May be NULL if no data exists for the given
section.
CMStatus                             —                             M                             Information                             concerning the result of the service.

16. 4.16  CarrierTagWriteData
16. 4.16.1  CarrierTagWriteData is used to request that a block of data be written to the carrier ID tag.  Equipment
shall deny the request if LocationID and CarrierID are mismatched.


SEMI E87-0705 © SEMI 1999, 2005 38
Table 32  CarrierTagWriteData Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                          Description
LocationID C — The ID for the location of the carrier.  Either LocationID or CarrierID must
be used.
CarrierID C — The CarrierID of the carrier.  Either LocationID or CarrierID must be used.
DataSeg C — Indicates a specific section of data.
DataSize C — Indicates the number of bytes to read.
Data M — Data from the carrier ID tag. May be NULL if no data exists for the given
section.
CMStatus                           —                           M                           Information                           concerning the result of the service.

16. 4.17  ChangeAccess
16. 4.17.1  The ChangeAccess message requests a change of access mode for the load ports specified in the PortList.
Table 33  ChangeAccess Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                       Description
AccessMode M — The new desired access mode.
PortList M — The list of ports to use the new access mode.
CMStatus                                 —                                 M                                 Information                                 concerning the result of the service.

16. 4.18  ChangeServiceStatus
16. 4.18.1  The ChangeServiceStatus service is used to request the production equipment change a load port service
state.
Table 34  ChangeServiceStatus Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                        Description
PortID M — PortID to designate the new service status.
ServiceStatus M — The new service state.
CMStatus                              —                              M                              Information                              concerning the result of the service.

16. 4.19  ProceedWithCarrier
16. 4.19.1  The  ProceedWithCarrier  service  is  sent  by  the  host  to  indicate  that  the  carrier  operations  may  continue.
When using host based verification it is used by the host to indicate to the production equipment that the verification
of  Carrier  ID  and/or  the  Carrier  Slot  Map  is  correct.  For  successful  production  equipment  based  verification  the
production  equipment  shall  not  require  this  message  before  proceeding  with  the  carrier.  For  failed  production
equipment  based  verification  the  production  equipment  shall  require  either  a  CancelCarrier  or  ProceedWithCarrier
service.
16. 4.19.2  Using  Table  34,  for  the  Host  based  CarrierID  verification  case,  the  ProceedWithCarrier  service  sent  by
the host after the first carrier ID read is referred to as ProceedWithCarrier #1, the ProceedWithCarrier service sent
after slot map read is referred to as ProceedWithCarrier #2.
Table 35  ProceedWithCarrier Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                       Description
PortID C — The PortID for which processing may proceed.
CarrierID M — The CarrierID for which processing may proceed.
PropertiesList C — A list of name value pairs providing attributes for the carrier object.
CMStatus                               —                               M                               Information                               concerning the result of the service.



SEMI E87-0705 © SEMI 1999, 2005 39
16. 4.20  ReserveAtPort
16. 4.20.1  The ReserveAtPort service is sent by the host to indicate future activity at the load port.  This allows for
reserving  the  port  but  doing  host  based  ID  verification.    The  load  port  will  enter  the  RESERVED  State  after
receiving this service.  The equipment shall move a carrier to a reserved load port.
Table 36  ReserveAtPort Service Parameter Definitions
Parameter Name Req/Ind Rsp/Conf                                                       Description
PortID M — The Port ID to reserve
CMStatus                                —                                M                                Information                                concerning the result of the service.

17  Carrier Tag Read/Write
17. 1  Some  technologies  allow  data  to  be  stored  on  a  carrier  ID  tag  where  it  can  be  subsequently  read  and/or
modified.  In this case, it is the host that specifies when this data is written and read, because the equipment has no
knowledge  of  the  contents  of  the  data.  The read operations shall be performed only when the carrier is at the read
position.    The  write  operations  shall  be  performed  only  when  the  carrier  is  at  the  write  position.  NOTE:  The  read
and write positions may be the same position.  The host shall be able to both read and write whenever CarrierHold
switch is set to Host Release and the carrier is at the respective read or write position.  Once the host has completed
all of its read and write operations for that carrier, then the host sends the CarrierRelease request to the equipment.
In all cases, the CarrierAccessingStatus state shall be set to either CARRIER COMPLETE or CARRIER STOPPED
before the carrier may be undocked.  The CarrierRelease service  informs  the  equipment  that carrier read or carrier
write is complete.  For internal buffer equipment the CarrierRelease service shall allow the equipment to move the
carrier away from the read or write position.
Figure  7The  CarrierRelease  service  has  a  different  purpose  from  the  CarrierOut  service.    The  intent  of  the  CarrierOut  service
request is to move the carrier to a loadport, while the intent of the CarrierRelease service request is to inform equipment that it
may  move  the  carrier  away  from  the  read  or  write  position.    Therefore,  CarrierOut  may  also  be  used  with  the  CarrierRelease
command.  If  CarrierHold  is  Host  Release,  then  the  carrier  shall  be  kept  at  the  write  position  until  an  CarrierRelease  service
request is received, regardless of when a CarrierOut is sent.  If CarrierHold is set to Equipment Release, then the CarrierRelease
request has no effect.
18  Additional Events
18. 1  This section identifies data collection events that are not related to State transitions for variable data items. The
intent of this section is to ensure certain data is available for specific events that are not related to state transitions,
not  to  define  all  the  additional  collection  events  for  CMS.  Also,  all  state  transitions  in  CMS  state  models  are
required to have associated event reports.
18. 2  Buffer Capacity Changed Event
18. 2.1  An  event  shall  be  generated  whenever  Buffer  Capacity  changes.  This  applies  to  all  internal  buffers  and
internal buffer partitions.
18. 2.2  Data required to be available for this event report:
• BufferPartitionInfo.
18. 3  Carrier Approaching Complete Event
18. 3.1  In some cases, for carrier transfer efficiency, the host needs to know carrier completion timing a little faster
than actual. For example:
• If the equipment is internal buffer type, QTAT carriers need to be moved out directly from internal FIMS to a
load port to shorten moving out time.
• If  the  equipment  uses  non-product  carriers,  such  as  dummy,  they  need  to  be  changed  before  it  becomes  not
reusable to prevent stopping the equipment operation.
• If  the  equipment  uses  non-product  carriers,  such  as  test,  reject,  they  need  to  be  changed  before  it  becomes
empty or full to prevent stopping the equipment operation.


SEMI E87-0705 © SEMI 1999, 2005 40
18. 3.2  This event shall be generated when the access by the equipment to the carrier is approaching complete. How
the timing of the event is determined shall be configurable.
18. 3.3  Detailed  definition  of  the  event  timing  depends  upon  the  type  of  usage  of  the  carrier.    Some  examples  of
event timing for different types of usage are shown below.
18. 3.3.1  PRODUCT — When remaining time until the carrier starts moving from internal FIMS to internal buffer
reaches the configurable variable time (internal buffer equipment only).
18. 3.3.2  DUMMY  —  When  remaining  times  until  substrates  of  the  carrier  becomes  not  reusable  reaches  the
configurable variable times.
18. 3.3.3  TEST  —  When  remaining  substrates  until  the  carrier  becomes  empty  reaches  the  configurable  variable
number.
18. 3.3.4  REJECT — When remaining slots until the carrier becomes full reaches the configurable variable number.
18. 3.4  Suppliers  shall  document  the  interpretation  and  the  configurable  variable(s)  in  the  equipment  specification
document.
18. 3.5  Data required to be available for this event report:
• CarrierID
18. 4  Carrier Clamped Event
18. 4.1  An  event  shall  be  generated  whenever  a  carrier  is  clamped.    Clamped  means  the  load  port  has  engaged  a
device  that  would  inhibit  removal  or  movement  of  the  carrier  by  any  entity  external  to  the  load  port.    Some  load
ports may include more than one clamping device.  This event should be generated only when the first clamping is
engaged.  This applies to all load ports.
18. 4.2  There  is  no  standard  for  when  load  ports  clamp  a  carrier.    Therefore  the  IC  makers  host  systems  and
personnel will need some signal from the equipment to know if a carrier is clamped.  This event provides that signal.
This applies to all load ports that provide clamping.  If a load ports does not clamp the carrier no event is required.
18. 4.3  Data required to be available for this event report:
• Port ID,
• Carrier ID (if available), and
• Location ID.
18. 5  Carrier Closed Event
18. 5.1  If the carrier is equipped with a door, an event shall be generated when a carrier door has been closed.
18. 5.2  Data required to be available for this event report:
• CarrierID,
• LocationID, and
• PortID (if valid).
18. 6  Carrier Location Change Event
18. 6.1  An  event  shall  be  generated  whenever  a  carrier  has  changed  location.  This  applies  to  both  load  ports,
substrate ports, and internal buffer locations.
18. 6.2  Data required to be available for this event report:
• CarrierID,
• LocationID (new destination location), and
• CarrierLocationMatrix.


SEMI E87-0705 © SEMI 1999, 2005 41
18. 7  Carrier Opened Event
18. 7.1  If the carrier is equipped with a door, an event shall be generated when a carrier door has been opened.
18. 7.2  Data required to be available for this event report:
• CarrierID,
• LocationID, and
• PortID (if valid).
18. 8  Carrier Unclamped Event
18. 8.1  An  event  shall  be  generated  whenever  a  carrier  is  unclamped.    Unclamped  means  that  the  load  port  has
disengaged  any  devices  that  would  inhibit  removal  or  movement  of  the  carrier  by  any  entity  external  to  the  load
port.  Some load ports may include more than one clamping device.  This event should be generated only when all
clamping or locking devices are disengaged.
18. 8.2  There  is  no  standard  for  when  load  ports  unclamp  a  carrier.    Therefore  the  IC  makers  host  systems  and
personnel  will  need  some  signal  from  the  equipment  to  know  if  a  carrier  is  unclamped.      This  event  provides  that
signal.    This  applies  to  all  load  ports  that  provide  clamping  and  unclamping.    If  a  load  ports  does  not  clamp  and
unclamp the carrier no event is required.
18. 8.3  Data required to be available for this event report:
• Port ID,
• Carrier ID (if available), and
• Location ID.
18. 9  CarrierID Read Fail Event
18. 9.1  An event shall be generated when the equipment attempts to read a carrierID and fails at a port in the NOT
ASSOCIATED STATE.
18. 9.2  Data required to be available for this event report:
• PortID
18. 10  ID Reader Available Event
18. 10.1  An event shall be generated whenever an id reader becomes available.  This applies to all load ports.
18. 10.2  Data required to be available for this event report:
• Port ID
18. 11  ID Reader Unavailable Event
18. 11.1  An event shall be generated whenever an id reader becomes unavailable for any reason.  This applies to all
load ports.
18. 11.2  Data required to be available for this event report:
• Port ID
18. 12  UnknownCarrierID Event
18. 12.1
An  event  shall  be  generated  when  a  carrier  arrives  at  a  “NOT  ASSOCIATED”  load  port  where  the
CarrierID reader is unavailable.
18. 12.2  Data required for this event report:
• Port ID
18. 12.3  Equipment shall wait for a “ProceedWithCarrier” or “CancelCarrier” service before initiating any action.


SEMI E87-0705 © SEMI 1999, 2005 42
18. 12.4  If a ProceedWithCarrier service is received from the host by the equipment the carrier object is instantiated
via transition 4 in the Carrier State Model.
18. 12.5  If  a  CancelCarrier  service  is  received,  the  equipment  uses  the  host  provided  CarrierID  to  instantiate  the
carrier object via transition 5, associates the carrier to the load port and prepares carrier for unload.
19  Variable Data
19. 1  The  purpose  of  this  section  is  to  define  the  list  of  variable  data  requirements  for  CMS  equipment.  Values  of
these variables are available to the host via collection event reports and host status queries. Some of the data items
listed are valid for internal buffer production equipment only, and are marked as such.
19. 2  Variable Data Definitions
19. 2.1  The following table defines variable data that shall be provided by the production equipment. Also, for the
objects defined by Carrier Management, the identifier of that object and all of the attributes of that object shall be
available  for  inclusion  in  event  reports  associated  with  that  object.  Subscripted  variables  are  used  either  as  items
within a list or to differentiate data representing different entities. Subscripted variables are always valid.
Table 37  Variable Data Definitions
Variable Name Description                                        Type                                        Acc
ess
Comment
AccessMode The access mode of the loadport. Enumerated:
MANUAL, AUTO
RO
AccessMode
i
The access mode for the i
th
load
port.
Enumerated:
MANUAL,
AUTO
RO
AvailPartitionCapacity The current available buffer
capacity for a logical partition
inside internal buffer equipment
(PartitionCapacity - # of carriers
in partition).
Non-negative integer ROOnly applicable to internal
buffer production equipment.
AvailPartitionCapacity
i
The AvailPartitionCapacity for the
i
th
PartitionID within the internal
buffer.
Non-negative integer ROOnly applicable to internal
buffer production equipment.
BufferCapacityList The current PartitionType,
AvailPartitionCapacity, and
PartitionCapacity for all logical
buffer partitions.
List of n groups of items
1. BufferPartitionInfo
1

.
.
n. BufferPartitionInfo
n

ROOnly applicable to internal
buffer production equipment.
BufferPartitionInfo The related information for a
logical buffer partition.
Structure of 5 items
PartitionID
PartitionType
AvailPartitionCapacity
PartitionCapacity
UnallocatedPartitionCapacity
ROOnly applicable to internal
buffer production equipment.
BufferPartitionInfo
i
The related information for the i
th

buffer partition.
Structure of 5 items
PartitionID
i

PartitionType
i

AvailPartitionCapacity
i

PartitionCapacity
i

UnallocatedPartitionCapacity
i

ROOnly applicable to internal
buffer production equipment.
BypassReadID Enables or disables automatic ID
acceptance when the carrier ID
reader is unavailable.
Boolean. RWIf TRUE, the ID provided
with Bind is used
automatically.


SEMI E87-0705 © SEMI 1999, 2005 43
Variable Name Description                                        Type                                        Acc
ess
Comment
CarrierAccessingStatus The state of the carrier accessing
status.
Enumerated:
NOT ACCESSED,
IN ACCESS,
CARRIER COMPLETE,
CARRIER STOPPED
RO
CarrierID The ID of the carrier. Text RO
CarrierID
i
The CarrierID at the i
th
locationID.Text RO
CarrierIDStatus State of the carrier ID status. Enumerated:
ID NOT READ,
[ID]WAITING FOR HOST,
ID VERIFICATION OK,
ID VERIFICATION
FAILED
RO
CarrierLocationMatrix A list all the carriers at/in the
equipment. Both internal to the
equipment, and on equipment load
ports.
List of n pairs of items
1. LocationID
1
CarrierID
1

.
.
n. LocationID
n
CarrierID
n

ROThe CarrierID
i
shall be null if
there is no carrier at the
locationID
i
. If a carrier is at
LocationID
i
, but the
CarrierID
i
is not known, the
value of CarrierID
i
shall be
“UNKNOWN”.
LocationID The ID of a carrier location. Text ROCarrier locations are any
location at/in the production
equipment where a carrier
may rest.
LocationID
i
The LocationID

of the i
th
carrier
location.
Text ROCarrier locations are any
location at/in the production
equipment where a carrier
may rest.
LoadPortReservation-
State
The reservation state of a Load
Port.
Enumerated:
NOT RESERVED,
RESERVED
RO
LoadPortReservation-
State
I
The reservation state of the i
th

Load Port.
Enumerated:
NOT RESERVED,
RESERVED
RO
LoadPortReservation-
StateList
The current reservation state of all
the load ports.
A list of n items
1. LoadPortReservationState
1
.
.
n.LoadPortReservationState
n
ROThis can be used to
resynchronize the host.
PartitionCapacity The total PartitionCapacity for a
logical internal buffer partition.
Non-negative integer ROOnly applicable to internal
buffer production equipment.
PartitionCapacity
i
The PartitionCapacity for the i
th
PartitionID of the internal buffer.
Non-negative integer ROOnly applicable to internal
buffer production equipment.
PartitionID The ID of a logical internal buffer
partition.
Text ROUsed to identify separate
material types in an internal
buffer.
PartitionID
i
The ID of the i
th
logical partition
of the internal buffer.
Text ROUsed to identify separate
material types in an internal
buffer.


SEMI E87-0705 © SEMI 1999, 2005 44
Variable Name Description                                        Type                                        Acc
ess
Comment
PartitionType The type of a logical partition
within an internal buffer.
Text ROOnly applicable to internal
buffer production equipment.
Some examples of logical
buffer PartitionType are
Product, Dummy, Substrate,
and Seed.
PartitionType
i
The PartitionType corresponding
with the i
th
PartitionID.
Text ROOnly applicable to internal
buffer production equipment.
Some examples of logical
buffer PartitionType are
Product, Dummy, Substrate,
and Seed.
PortAssociationState The association state of a load
port.
Enumerated:
ASSOCIATED,
NOT ASSOCIATED
RO
PortAssociationState
i
The association state of the i
th
load
port.
Enumerated:
ASSOCIATED,
NOT ASSOCIATED
RO
PortAssociationState-
List
The current association state for
all load ports.
A list of n items
1. PortAssociationState
1
.
.
n. PortAssociationState
n

ROThis can be used to re-
synchronize the host.
PortID ID of a load port. Positive integer RO
PortID
i
ID of the load port where the
carrier transfer is taking place.
One PortID exists for each load
port.
Positive integer RO
PortStateInfo The PortAssociationState
combined with the
PortTransferState.
List of 2 items
PortAssociationState
PortTransferState
ROA combination of both port
states.
PortStateInfo
i
The PortAssociationState
combined with the
PortTransferState for the i
th
load
port.
List of 2 items
PortAssociationState
i

PortTransferState
i

ROA combination of both port
states.
PortStateInfoList List of PortStateInfo for all load
ports.
List of n items
1. PortStateInfo
1

.
.
n  PortStateInfo
n

ROA list of all the port states for
all the ports.
PortTransferState The current transfer state of a load
port.
Enumerated:
OUT OF SERVICE,
TRANSFER BLOCKED,
READY TO LOAD,
READY TO UNLOAD
ROSuper states are not included,
only sub states.
PortTransferState
i
The current transfer state of the i
th

load port.
Enumerated:
OUT OF SERVICE,
TRANSFER BLOCKED,
READY TO LOAD,
READY TO UNLOAD
ROSuper states are not included,
only sub states.
PortTransferStateList The current Load Port Transfer
State for all load ports.
A list of n items
1. PortTransferState
1
.
.
n. PortTransferState
n

ROThis can be used to re-
synchronize the host.


SEMI E87-0705 © SEMI 1999, 2005 45
Variable Name Description                                        Type                                        Acc
ess
Comment
Reason The reason for transition 14,
SLOT MAP NOT READ to
WAITING FOR HOST.
Enumerated:
VERIFICATION NEEDED,
VERIFICATION BY
EQUIPMENT
UNSUCCESSFUL,
READ FAIL,
IMPROPER SUBSTRATE
POSITION
ROInformation to aid host in
deciding appropriate action.
SlotMapStatus State of the carrier slot map status.Enumerated:
SLOT MAP NOT READ,
[SLOT]WAITING FOR
HOST,
SLOT MAP
VERIFICATION OK,
SLOT MAP
VERIFICATION FAILED
RO
UnAllocatedPartition-
Capacity
The current unallocated capacity
for a logical partition inside
internal buffer equipment,
(PartitionCapacity - # of carriers
in partition - # of carriers allocated
for the partition (via reception of a
Bind, CarrierIn,
CarrierNotification,
ReserveAtPort, or
ProceedWithCarrier service).  Any
carriers allocated for a partition
will be de-allocated if the
corresponding Cancel service is
received (for example Bind-
CancelBind, CarrierNotification –
CancelCarrierNotification,
ReserveAtPort –
CancelReservationAtPort,
ProceedWithCarrier –
CancelCarrier).
Non-negative integer ROOnly applicable to internal
buffer equipment.
UnAllocatedPartition-
Capacity
i
The UnallocatedPartitionCapacity
for the i
th
Partition ID within the
internal buffer
Non-negative integer ROOnly applicable to internal
buffer equipment.

20  Alarms
20. 1  This section includes specific alarms that are required to be implemented by CMS compliant equipment.
20. 2  Alarm List Table
20. 2.1  Table 38 is a listing of required alarms for both fixed buffer and internal buffer equipment. This list is only a
subset of the carrier transfer alarms. There may be more carrier transfer related alarms that are not listed here.
Table 38  Alarm List
Equipment                                                                                            Danger                                              Affected
Configuration                                   Alarm                                   Text                                   PotentialImminentOperator    EquipmentMaterial
Fixed & Internal
Buffer Equipment
PIO Failure X  X X X
Access Mode Violation X  X X X


SEMI E87-0705 © SEMI 1999, 2005 46
Equipment                                                                                            Danger                                              Affected
Configuration                                   Alarm                                   Text                                   PotentialImminentOperator    EquipmentMaterial
Carrier Verification Failure X    X
Slot Map Read Failed X  X X X
Slot Map Verification Failed X   X X
Attempt To Use Out Of Service Load Port X   X X
Carrier Presence Error X  X X X
Carrier Placement Error X  X X X
Carrier Dock/UnDock Failure X   X X
Carrier Open/Close Failure X   X X
Fixed and Internal
Buffer
Duplicate CarrierID X    X
Internal Buffer
Equipment Only
Internal Buffer Carrier Move Failure X   X X
Fixed & Internal
Buffer Equipment
Carrier Removal Error X  X X X

20. 3  Duplicate CarrierID
20. 3.1  If the equipment receives a carrier with a CarrierID that is the same as that of another carrier present at the
equipment, the following rules shall apply:
1. The second carrier with a CarrierID shall not be processed.
2. If processing on the first carrier with the CarrierID has not begun, it should not be processed.
3. If processing on the first carrier has begun a Duplicate Carrier ID In Process event shall be issued to notify the
host.
21  Requirements for Compliance
21. 1  Table 39 provides a checklist for CMS compliance.
Table 39  CMS Compliance Statement
Fundamental CMS Requirements CMS Section             Implemented              CMS             Compliant
Load Port Numbering 9.1  Yes  No  Yes  No
Carrier Slot Numbering 9.2  Yes  No  Yes  No
Load Port Transfer State Model 9.3–9.4.3  Yes  No  Yes  No
Carrier Object Implementation 10  Yes  No  Yes  No
Load Port Reservation State Model
(internal buffer equipment)
12  Yes  No  Yes  No
Load Port/Carrier Association State Model 13  Yes  No  Yes  No
CarrierID Verification Support 14.2  Yes  No  Yes  No
Slot Map Verification Support 14.3  Yes  No  Yes  No
Services Implementation 16  Yes  No  Yes  No
Additional Events Implementation 18  Yes  No  Yes  No
Variable Data Definitions 19  Yes  No  Yes  No
Alarms Implementation 20  Yes  No  Yes  No
Additional CMS Capabilities CMS Section Implemented CMS Compliant
Load Port Reservation State Model
(fixed buffer equipment)
12  Yes  No  Yes  No
Reservation Visible Signal 12.2  Yes  No  Yes  No



SEMI E87-0705 © SEMI 1999, 2005 47
RELATED INFORMATION 1
CARRIER OBJECT ID
NOTICE: This related information is not an official part of SEMI E87, but was approved for publication by full
letter ballot procedures on December 15, 1999.
R1-1  Carrier Object ID
R1-1.1  The Carrier Object ID is derived as stated in the Table R1-1 Carrier ID derivation.
Table R1-1  CarrierID Derivation
Method of Original
Instantiation
CarrierID
Read
ID
Verifi-cation
Following Actions  CarrierID =     Parameter Required
by Service
1    Bind    Successful    Successful
and
equipment
based
Production equipment continues
with the carrier.
CarrierID in
Bind service.
Bind: CarrierID,
PortID, and
PropertiesList
2    Bind Successful   Fails  The carrier object instantiated via
the Bind message is destroyed and a
new carrier object with the
carrierID equal to the one
determined by the carrierID is
instantiated.
ProceedWithCarrier service is
received.
CarrierID
provided by
the CarrierID
read.
ProceedWith-Carrier:
CarrierID,
PropertiesList
3    Bind Successful   Fails The carrier object instantiated via
the Bind message is destroyed and a
new carrier object with the
carrierID equal to the one
determined by the carrierID is
instantiated. CancelCarrier service
is received.
CarrierID
provided by
the CarrierID
read.
CancelCarrier:
CarrierID
4    Bind Fails NA ProceedWithCarrier service is
received and the carrierID matches
the carrierID provided by the Bind
service.
CarrierID
provided by
the Bind
service.
ProceedWith-Carrier:
CarrierID
5    Bind Fails NA CancelCarrier service is received
and the carrierID matches the
carrierID provided by the Bind
service.
CarrierID
provided by
the Bind
service.
CancelCarrier:
CarrierID
6    Carrier-Notification    Successful    Successful
and
equipment
based
Production equipment continues
with the carrier.
CarrierID in
Carrier-
Notification.
Carrier-Notification:
CarrierID and
PropertiesList
7    Carrier ID read Successful   Successful
and Host
based
ProceedWithCarrier service is
received and the carrierID matches
the carrierID read by the
production
equipment.
CarrierID
read by
production
equipment.
ProceedWith-Carrier:
CarrierID and
PropertiesList, PortID
may be included.
8    CarrierID    read    Successful    Fails    and
Host based
A CancelCarrier service is received
and the carrierID  matches the
carrierID read by the production
equipment.
CarrierID
read by
production
equipment.
CancelCarrier:
CarrierID


SEMI E87-0705 © SEMI 1999, 2005 48
Method of Original
Instantiation
CarrierID
Read
ID
Verifi-cation
Following Actions  CarrierID =     Parameter Required
by Service
9    The method of
original
instantiation is
defined following
the carrierID read
fail and is described
in column titled
following actions.
Fails NA A ProceedWithCarrier service is
received and the carrierID is
provided in the service.
CarrierID
provided by
the Proceed-
WithCarrier
service.
ProceedWith-Carrier
: CarrierID, PortID,
PropertiesList
10   The method of
original
instantiation is
defined following
the carrierID read
fail and is described
in the column titled
Following Actions.
A CancelCarrier service is received
and the carrierID is the one
provided by the CancelCarrier.
CarrierID
provided by
the Cancel-
Carrier
service.
CancelCarrier:
CarrierID, PortID

R1-2  Scenarios
R1-2.1    The  scenarios  listed  here  are  not  a  requirement  of  this  standard.  They  are  provided  to  aid  in  the
understanding  of  the  document.  These  scenarios  are  not  an  exhaustive  set  of  all  possible  scenarios.  The  scenarios
presented are typical or common scenarios encountered when using this standard.
R1-2.2  Normal Roundtrip 1
R1-2.2.1  Assumptions: Fixed buffer production equipment, FOUP, Host based verification
R1-2.2.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LCAS  =  Load  Port/Carrier  Association  State,  CIDS  =
Carrier ID Status, CSMS = Carrier Slot Map Status
Table R1-2  Normal Roundtrip 1
#                                     Comment                                     Dir                                     Message                                     LTS                                     LCAS                                     CIDS                                     CSMS
0     Initial     condition.                  RTL
1 Loading transfer starts. H<-E    TransferBlocked
2 Loading transfer completes.
NA           (T)            (T)
3     CarrierID     is     read.     H<-E     WaitingForHost
4 CarrierID is verified by host, and result is OK.
WFH
5 Host commands to proceed. H->E    ProceedWithCarrier
6 Carrier is docked.
SNR
7 Slot map is read. H<-E    WaitingForHost
8 Slot map is verified by host, and result is OK.
WFH
9 Host commands to proceed. H->E    ProceedWithCarrier
10    Process    starts.
11    Process    completes.
TB
12    Carrier is undocked. H<-E    ReadyToUnload RTU
13    Unloading    transfer    starts.    H<-E    TransferBlocked    TB
A
IVO
SVO
14    Unloading    transfer    completes.    H<-E    ReadyToLoad    RTL    NA    (T)    (T)

R1-2.3  Normal Roundtrip 2
R1-2.3.1  Assumptions: Fixed buffer production equipment, FOUP, Production equipment based verification, Bind
Service received


SEMI E87-0705 © SEMI 1999, 2005 49
R1-2.3.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State  LCAS  =  Load
Port/Carrier Association State, CIDS = Carrier ID Status, CSMS = Carrier Slot Map Status
Table R1-3  Normal Roundtrip 2
#                            Comment                             Dir                            Message                            LTS                            LRS                            LCAS                            CIDS                            CSMS
0     Initial     condition.                  NR     NA     (T)     (T)
1 Load port is associated with
specified carrierID, and reserved for
loading.
H->E    Bind
RTL
2 Loading transfer starts. H<-E    TransferBlocked
R
3 Loading transfer completes.
4     CarrierID     is     read.
INR
5 CarrierID is verified by production
equipment, and result is OK.
H<-E    IDVerificationOK
6 Carrier is docked.
7 Slot map is read.
SNR
8 Slot map is verified by production
equipment, and result is OK.
H<-E    SlotMapVerificationOK
9     Process     starts.
10    Process    completes.
TB
11    Carrier is undocked. H<-E    ReadyToUnload RTU
12    Unloading    transfer    starts.    H<-E    TransferBlocked    TB
A
IVO
SVO
13    Unloading    transfer    completes.    H<-E    ReadyToLoad    RTL
NR
NA          (T)           (T)

R1-2.4  Normal Roundtrip 3
R1-2.4.1  Internal buffer production equipment, FOUP, Host based verification
R1-2.4.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  CIDS  =  Carrier  ID  Status,  CSMS  =  Carrier  Slot  Map
Status, LCAS = Load Port/Carrier Association State.
Table R1-4  Normal Roundtrip 3
#                                    Comment                                     Dir                                    Message                                    LTS                                    LCAS                                    CIDS                                    CSMS
0     Initial     condition.                  RTL
1 Loading transfer starts. H<-E    TransferBlocked
2 Loading transfer completes.
NA          (T)          (T)
3     CarrierID     is     read.     H<-E     WaitingForHost
4 CarrierID is verified by host, and result is OK.
WFH
5 Host commands to proceed. H->E    ProceedWithCarrier
6     Carrier-in     starts.     H<-E    BufferCapacityChange
TB
A
7     Carrier-in     completes.
8     Process     starts.
SNR
9 Slot map is read at FIMS port. H<-E    WaitingForHost
10    Slot map is verified by host, and result is OK.
WFH
11    Host commands to proceed. H->E    ProceedWithCarrier
12    Process    completes.
13    Carrier    completes.    H<-E    CarrierComplete
NA
14    Host commands to carrier-out. H->E    CarrierOut
RTL
15    Carrier-out    starts.    H<-E    TransferBlocked    TB
16    Carrier-out    completes.    H<-E
H<-E
ReadyToUnload
BufferCapacityChange
RTU
A
IVO
SVO


SEMI E87-0705 © SEMI 1999, 2005 50
#                                    Comment                                     Dir                                    Message                                    LTS                                    LCAS                                    CIDS                                    CSMS
17    Unloading    transfer    starts.    H<-E    TransferBlocked    TB
18    Unloading    transfer    completes.    H<-E    ReadyToLoad    RTL    NA    (T)    (T)

R1-2.5  Normal Roundtrip 4
R1-2.5.1    Internal  buffer  production  equipment,  FOUP,  Production  equipment  based  verification,  Bind  service
received
R1-2.5.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State,  LCAS  =  Load
Port/Carrier Association State, CIDS = Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-5  Normal Roundtrip 4
#                           Comment                            Dir                           Message                           LTS                           LRS                           LCAS                           CIDS                           CSMS
0     Initial     condition.                   NR     NA     (T)     (T)
1     Load port is associated with
specified carrierID, and reserved for
loading.
H->E     Bind
RTL
2     Loading transfer starts. H<-E    TransferBlocked
R
3     Loading transfer completes.
4     CarrierID     is     read.
INR
5     CarrierID is verified by equipment,
and result is OK.
H<-E     IDVerificationOK
6     Carrier-in     starts.     H<-E     BufferCapacityChange
TB
A
7     Carrier-in     completes.
8     Process     starts.
9     Slot map is read at FIMS port.
SNR
10    Slot map is verified by equipment,
and result is OK.
H<-E     SlotMapVerificationOK
11    Process    completes.
12    Carrier    completes.    H<-E     CarrierComplete
13    Host commands to carrier-out. H->E    CarrierOut
RTL
NR
NA
14    Carrier-out    starts.    H<-E     TransferBlocked    TB    R
15    Carrier-out    completes.    H<-E
H<-E
ReadyToUnload
BufferCapacityChange
RTU
16    Unloading    transfer    starts.    H<-E     TransferBlocked    TB
A
IVO
SVO
17    Unloading    transfer    completes.    H<-E     ReadyToLoad    RTL
NR
NA          (T)           (T)

R1-2.6  Normal Roundtrip 5
R1-2.6.1    Assumptions:  Fixed  buffer  production  equipment,  FOUP,  Production  equipment  based  verification,
Carrier Notification service received
R1-2.6.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State  LCAS  =  Load
Port/Carrier Association State, CIDS = Carrier ID Status, CSMS = Carrier Slot Map Status
Table R1-6  Normal Roundtrip 5
#                            Comment                             Dir                            Message                            LTS                            LRS                            LCAS                            CIDS                            CSMS
0     Initial     condition.                  (T)     (T)
1 Equipment is notified of future
Carrier arrival.
H->E    CarrierNotification
RTL
2 Loading transfer starts. H<-E    TransferBlocked TB
NR         NA
INR        SNR


SEMI E87-0705 © SEMI 1999, 2005 51
#                            Comment                             Dir                            Message                            LTS                            LRS                            LCAS                            CIDS                            CSMS
3 Loading transfer completes.
4     CarrierID     is     read.

5 CarrierID is verified by production
equipment, and result is OK.
H<-E    IDVerificationOK
6 Carrier is docked.
7 Slot map is read.

8 Slot map is verified by production
equipment, and result is OK.
H<-E    SlotMapVerificationOK
9     Process     starts.
10    Process    completes.

11    Carrier is undocked. H<-E    ReadyToUnload RTU
12    Unloading    transfer    starts.    H<-E    TransferBlocked    TB
A
IVO
SVO
13    Unloading    transfer    completes.    H<-E    ReadyToLoad    RTL

NA          (T)           (T)

R1-2.7  Normal Roundtrip 6
R1-2.7.1 Internal buffer production equipment, FOUP, Production equipment based verification, CarrierNotification
service received.
R1-2.7.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State,  LCAS  =  Load
Port/Carrier Association State, CIDS = Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-7  Normal Roundtrip 6
#                            Comment                             Dir                            Message                            LTS                            LRS                            LCAS                            CIDS                            CSMS
0     Initial     condition.               (T)     (T)
1     Load port notified of future carrier
arrival.
H->E     CarrierNotification
RTL
2     Loading transfer starts. H<-E    TransferBlocked
3     Loading transfer completes.
NA
4     CarrierID     is     read.
INR
5     CarrierID is verified by equipment,
and result is OK.
H<-E     IDVerificationOK
6     Carrier-in     starts.     H<-E     BufferCapacityChange
TB
A
7     Carrier-in     completes.
8     Process     starts.
9     Slot map is read at FIMS port.
SNR
10    Slot map is verified by equipment,
and result is OK.
H<-E     SlotMapVerificationOK
11    Process    completes.
12    Carrier    completes.    H<-E     CarrierComplete
13    Host commands to carrier-out. H->E    CarrierOut
RTL
NR
NA
14    Carrier-out    starts.    H<-E     TransferBlocked    TB    R
15    Carrier-out    completes.    H<-E
H<-E
ReadyToUnload
BufferCapacityChange
RTU
16    Unloading    transfer    starts.    H<-E     TransferBlocked    TB
A
IVO
SVO
17    Unloading    transfer    completes.    H<-E     ReadyToLoad    RTL
NR
NA          (T)           (T)



SEMI E87-0705 © SEMI 1999, 2005 52
R1-2.8  Normal Roundtrip 7
R1-2.8.1  Assumptions: Fixed buffer production equipment, FOUP, Host based verification, ReserveAtPort service
received.
R1-2.8.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS=  Load  Port  Reserve  State,  LCAS  =  Load
Port/Carrier State  Association State, CIDS = Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-8  Normal Roundtrip 7
#                              Comment                               Dir                              Message                              LTS                              LRS                              LCAS                              CIDS                              CSMS
0     Initial     condition.                   NR
1 Reserve a port for future activity. H->E    ReserveAtPort
RTL
2 Loading transfer starts. H<-E    TransferBlocked
R
3 Loading transfer completes.
NA          (T)           (T)
4     CarrierID     is     read.     H<-E     WaitingForHost
5 CarrierID is verified by host, and result
is OK.

WFH
6 Host commands to proceed. H->E    ProceedWithCarrier
7 Carrier is docked.
SNR
8 Slot map is read. H<-E    WaitingForHost
9 Slot map is verified by host, and result is
OK.

WFH
10    Host commands to proceed. H->E    ProceedWithCarrier
11    Process    starts.
12    Process    completes.
TB
13    Carrier is undocked. H<-E    ReadyToUnload RTU
14    Unloading    transfer    starts.    H<-E     TransferBlocked    TB
A
IVO
SVO
15    Unloading    transfer    completes.    H<-E     ReadyToLoad    RTL
NR
NA          (T)           (T)

R1-2.9  Normal Roundtrip 8
R1-2.9.1  Internal buffer production equipment, FOUP, Host based verification, ReserveAtPort service received.
R1-2.9.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State,  LCAS  =  Load
Port/Carrier  Association  State,  CIDS  =  Carrier  ID  Status,  CSMS  =  Carrier  Slot  Map  Status,  CPS  =  Carrier
Processing Status.
Table R1-9  Normal Roundtrip 8
#                             Comment                              Dir                             Message                             LTS                             LRS                             LCAS                             CIDS                             CSMS
0     Initial     condition.                   NR
1     Reserve Port for future activity.                H->E                ReserveAtPort
RTL
2     Loading transfer starts. H<-E    TransferBlocked
R
3     Loading transfer completes.
NA          (T)           (T)
4     CarrierID     is     read.     H<-E     WaitingForHost
5     CarrierID is verified by host, and
result is OK.

WFH
6     Host commands to proceed. H->E    ProceedWithCarrier
7     Carrier-in     starts.     H<-E     BufferCapacityChange
TB
A
8     Carrier-in     completes.
9     Process     starts.
SNR
10    Slot map is read at FIMS port. H<-E    WaitingForHost
RTL
NR
NA
IVO
WFH


SEMI E87-0705 © SEMI 1999, 2005 53
#                             Comment                              Dir                             Message                             LTS                             LRS                             LCAS                             CIDS                             CSMS
11    Slot map is verified by host, and result
is OK.

12    Host commands to proceed. H->E    ProceedWithCarrier
13    Process    completes.
14    Carrier    completes.    H<-E     CarrierComplete

15    Host commands to carrier-out. H->E    CarrierOut

16    Carrier-out    starts.    H<-E     TransferBlocked    TB    R
17    Carrier-out    completes.    H<-E
H<-E
ReadyToUnload
BufferCapacityChange
RTU
18    Unloading    transfer    starts.    H<-E     TransferBlocked    TB
A

SVO
19    Unloading    transfer    completes.    H<-E     ReadyToLoad    RTL
NR
NA          (T)           (T)

R1-2.10  Abnormal CarrierID Verification 1
R1-2.10.1  Host based verification, CancelCarrier
R1-2.10.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LAS  =  Load  Port/Carrier  Association  State,  CIDS  =
Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-10  Abnormal CarrierID Verification 1
#                                        Comment                                        Dir                                        Message                                        LTS                                        LCAS                                        CIDS                                        CSMS
0      Initial      condition.                     RTL
1 Loading transfer starts. H<-E     TransferBlocked
2 Loading transfer completes.
NA          (T)           (T)
3      CarrierID      is      read.      H<-E      WaitingForHost
4 CarrierID is verified by host, and result is Failed.
WFH
5 Host commands to return. H->E     CancelCarrier
TB
6 Carrier is made ready to unload. H<-E     ReadyToUnload RTU
A
IVF
SNR

R1-2.11  Abnormal CarrierID Verification 2
R1-2.11.1  Production equipment based verification, Bind service received, CancelCarrier
R1-2.11.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State,  LCAS  =  Load
Port/Carrier Association State, CIDS = Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-11  Abnormal CarrierID Verification 2
#                                 Comment                                  Dir                                 Message                                 LTS                                 LRS                                 LCAS                                 CIDS                                 CSMS
0      Initial      condition.                     NR         NA          (T)          (T)
1 Load port is associated with specified
carrierID, and reserved for loading.
H->E     Bind
RTL
2 Loading transfer starts. H<-E     TransferBlocked
R
3 Loading transfer completes.
4      CarrierID      is      read.
INR        SNR
5 CarrierID is verified by production
equipment, and result is Failed. The carrier
object created by the Bind service is
destroyed.  A carrier object with the id
determined by read is created.
H<-E          WaitingForHost     (T)
/
WFH
5 Host commands to return. H->E     CancelCarrier
TB
6 Carrier is made ready to unload. H<-E     ReadyToUnload RTU
NR
A
IVF
(T)
/
SNR


SEMI E87-0705 © SEMI 1999, 2005 54

R1-2.12  Abnormal CarrierID Verification 3
R1-2.12.1  Production equipment based verification, Bind Service received, ProceedWithCarrier
R1-2.12.2  Production equipment based verification, ProceedWithCarrier
R1-2.12.3    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State,  LCAS  =  Load
Port/Carrier Association State, CIDS = Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-12  Abnormal CarrierID Verification 3
#                               Comment                               Dir                               Message                               LTS                               LRS                               LCAS                               CIDS                               CSMS
0      Initial      condition.                     NR         NA          (T)          (T)
1 Load port is associated with specified
carrierID, and reserved for loading.
H->E     Bind
RTL
2 Loading transfer starts. H<-E    TransferBlocked
R
3 Loading transfer completes.
4      CarrierID      is      read.
INR        SNR
5 CarrierID is verified by production
equipment, and result is Failed.
H<-E     WaitingForHost     (T)
/
WFH
6 Host commands to proceed. H->E    ProceedWithCarrier
7 (Go to next step.)
TB
NR
A
IVO
(T)
/
SNR

R1-2.13  Abnormal Slot Map Verification 1
R1-2.13.1  Fixed buffer production equipment, FOUP, Host based verification, CancelCarrier
R1-2.13.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State,  LAS  =  Load
Port/Carrier Association State, CIDS = Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-13  Abnormal Slot Map Verification 1
#                               Comment                               Dir                               Message                               LTS                               LRS                               LCAS                               CIDS                               CSMS
0      Initial      condition.                     RTL
1 Loading transfer starts. H<-E    TransferBlocked
2 Loading transfer completes.
NA          (T)           (T)
3      CarrierID      is      read.      H<-E      WaitingForHost
4 CarrierID is verified by host, and result
is OK.

WFH
5 Host commands to proceed. H->E    ProceedWithCarrier
6 Carrier is docked.
SNR
7 Slot map is read. H<-E    WaitingForHost
8 Slot map is verified by host, and result
is Failed.

WFH
9 Host commands to return. H->E    CancelCarrier
TB
10     Carrier is made ready to unload.  ReadyToUnload RTU
NR
A
IVO
SVF

R1-2.14  Abnormal Slot Map Verification 2
R1-2.14.1  Internal buffer production equipment, FOUP, Production equipment based verification, CancelCarrier
R1-2.14.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Reservation  State,  LCAS  =  Load
Port/Carrier Association State, CIDS = Carrier ID Status, CSMS = Carrier Slot Map Status.


SEMI E87-0705 © SEMI 1999, 2005 55
Table R1-14  Abnormal Slot Map Verification 2
#                             Comment                              Dir                             Message                             LTS                             LRS                             LCAS                             CIDS                             CSMS
0     Initial     condition.                   NR     NA     (T)     (T)
1 Load port is associated with specified
carrierID, and reserved for loading.
H->E     Bind
RTL
2 Loading transfer starts. H<-E    TransferBlocked
R
3 Loading transfer completes.
4     CarrierID     is     read.
INR
5 CarrierID is verified by equipment,
and result is OK.
H<-E     IDVerificationOK
6     Carrier-in     starts.     H<-E     BufferCapacityChange
TB
A
7     Carrier-in     completes.
8     Process     starts.
9 Slot map is read at FIMS port.
SNR
10    Slot map is verified by production
equipment, and result is Failed.
H<-E     WaitingForHost     WFH
11    Host commands to return. H->E    CancelCarrier
12    Carrier returns to internal buffer.
RTL
NR
NA
IVO
SVF

R1-2.15  Carrier-Out Queuing
R1-2.15.1  Internal Buffer Equipment
R1-2.15.2  Initial condition: Two more carriers are within the production equipment
R1-2.15.3    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State,  LCAS  =  Load
Port/Carrier Association State
R1-15  Carrier-Out Queuing
#                                           Comment                                           Dir                                           Message                                           LTS                                           LRS                                           LCAS
0      Initial      condition.
1 Host commands to carrier-out #1. H->E    CarrierOut
RTL        NR         NA
2 Carrier-out #1 starts. H<-E    TransferBlocked
3 Host commands to carrier-out #2 (Queued). H->E    CarrierOut
TB           R
4 Carrier-out #1 completes. H<-E
H<-E
ReadyToUnload
BufferCapacityChange
RTU
5 Unloading transfer #1 starts. H<-E    TransferBlocked
6 Unloading transfer #1 completes.
NR
7 Carrier-out #2 starts.
TB
R
8 Carrier-out #2 completes. H<-E
H<-E
ReadyToUnload
BufferCapacityChange
RTU
9 Unloading transfer #2 starts. H<-E    TransferBlocked TB
A
10     Unloading transfer #2 completes. H<-E     ReadyToLoad RTL
NR
NA

R1-2.16  Carrier-Out Dequeuing (Cancellation)
R1-2.16.1  Internal Buffer Production equipment
R1-2.16.2  Initial condition: One more carrier-out services are queued, One carrier-out service is active
R1-2.16.3    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State,  LCAS  =  Load
Port/Carrier Association State.


SEMI E87-0705 © SEMI 1999, 2005 56
Table R1-16  Carrier-Out Dequeuing (Cancellation)
#                                            Comment                                              Dir                                            Message                                            LTS                                            LRS                                            LCAS
0   Initial   condition.
1   Host commands to cancel all carrier-out services from
queue.
H->E    CancelAllCarrierOut
2   All carrier-out services are canceled from queue.
TB           R
3   Current   carrier-out   service completes. H<-E
H<-E
ReadyToUnload
BufferCapacityChange
RTU
4   Unloading   transfer   starts.   H<-E    TransferBlocked   TB
A
5   Unloading   transfer   completes.   H<-E    ReadyToLoad   RTL
NR
NA

R1-2.17  Carrier Association Cancellation
R1-2.17.1  Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State,  LCAS  =  Load
Port/Carrier Association State, CIDS = Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-17  Carrier Association Cancellation
#                                    Comment                                      Dir                                    Message                                    LTS                                    LRS                                    LCAS                                    CIDS                                    CSMS
0    Initial    condition.            NR    NA    (T)    (T)
1    Load port is associated with specified carrierID,
and reserved for loading.
H->E
H<-E
Bind
Associated
2    Host decides to cancel current carrier delivery.
R            A            INR            SNR
3    Host commands to cancel association. H->E
H<-E
CancelBind
NotAssociated
RTL
NR         NA         (T)          (T)

R1-2.18  Access Mode Change
R1-2.18.1  Initial condition: Access mode = AUTO
R1-2.18.2  Indicated states: AMS = Access Mode State
Table R1-18  Access Mode Change
#                                                          Comment                                                            Dir                                                          Message                                                          AMS
0    Initial    condition.            A
1    Host commands to change access mode to MANUAL. H->E    ChangeAccess    M
2    Access mode is changed to MANUAL. H<-E    Manual

R1-2.19  Load Port Service Status Change
R1-2.19.1  Initial condition: Load port service status = IN SERVICE
R1-2.19.2  Indicated states: LTS = Load Port Transfer State
Table R1-19  Load Port Service Status Change
#                                                          Comment                                                            Dir                                                          Message                                                          LTS
0    Initial    condition.            IS
1    Host commands to change service status to OUT OF SERVICE. H->E    ChangeServiceStatus OS
2    Service status is changed to OUT OF SERVICE. H<-E    OutofService



SEMI E87-0705 © SEMI 1999, 2005 57
R1-2.201  Correct Carrier Delivery to Wrong Port 1 Scenario
R1-2.20.1  Assumptions: Fixed Load Port Equipment based verification.
R1-2.20.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State,  LCAS  =  Load
Port/Carrier Association State, CIDS = Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-20  Correct Carrier Delivery to Wrong Port 1 Scenario
#             Comment               Dir             Message             LTS1             LRS2             LCAS3LTS2      LRS2      LCAS2      CIDS      CSMS
0   Initial   condition.         NR   NA   (T)   (T)
1   Load port 1 is
associated with
specified carrierID,
and reserved for
loading.
H->E
H<-E
Bind (lp1)
LP1 Associated
RTL
2   Transfer starts at load
port 2.
H<-E    LP2    TRANSFER
BLOCKED
3   Transfer   Completes
at load port2.
H<-E    Transfer
Complete
R            A
NA
INR
4   CarrierID read at load
port 2
Equipment based
verification indicates
the carrier is at the
correct equipment.
H<-E

H<-E

H<-E
LP1 NOT
ASSOCIATED
LP2
ASSOCIATED
IV0
RTL
NR         NA
TB
NR
A         WFH
SNR

R1-2.21  Correct Carrier Delivery to Wrong Port 2 Scenario
R1-2.21.1  Assumptions: Fixed Load Port Equipment based verification.
R1-21.2    Indicated  states:  LTS  =  Load  Port  Transfer  State,  LRS  =  Load  Port  Reservation  State,  LCAS  =  Load
Port/Carrier Association State, CIDS = Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-21  Correct Carrier Delivery to Wrong Port 2 Scenario
#         Comment           Dir         Message         LTS1         LRS2         LCAS3   LTS2     LRS2     LCAS2  CIDSA     CSMS
A
CIDS
B
CSMS
B
0   Initial   condition.         NR   NA   (T)   (T)
1   Load port 1 is
associated with
specified
carrierID A, and
reserved for
loading.
H->E
H<-E
Bind (CA,
LP1)
Lp1
Associated
NR        NA        (T)         (T)
2   Load port 2 is
associated with
specified
carrierID B, and
reserved for
loading.
H->E
H<-E
Bind (CB,
LP2)
Lp2
Associated
RTL
2   Carrier   A
Transfer starts at
load port 2.
H<-E   LP2
TRANSFER
BLOCKED
R
3   Transfer
Completes at
load port2.
H<-E   Transfer
Complete
RTL
R           A
TB
NR
A
INR      SNR
INR      SNR


SEMI E87-0705 © SEMI 1999, 2005 58
#         Comment           Dir         Message         LTS1         LRS2         LCAS3   LTS2     LRS2     LCAS2  CIDSA     CSMS
A
CIDS
B
CSMS
B
4   CarrierID   read   at
load port 2,
Equipment based
verification
indicates that a
correct carrier
was delivered to
the wrong load
port.
H<-E


H<-E


H<-E
LP1 NOT
ASSOCI-
ATED
Carrier B
object
destroyed
Alarm LP2
verification
failed
WFH
5   Host   oks
processing.
H->    ProceedWith
Carrier
NR          NA
IVO
(T)           (T)

R1-2.22  CarrierID Read Fail Scenario 1
R1-2.22.1  Assumptions: Fixed buffer Equipment, Equipment based Verification, Bind service has been received.
R1-2.22.2  Indicated states: LTS = Load Port Transfer State, LCAS = Load Port/Carrier Association State, CIDS =
Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-22  CarrierID Read Fail Scenario 1
#                            Comment                             Dir                             Message                            LTS                            LCAS                            CIDS                            CSMS
0     Initial     condition.                  RTL     A     INR        SNR
1     Carrier Arrives. E>H    Transfer Blocked TB A INR SNR
2     ID read attempt fails. E>H    State change to Waiting For Host
3     Decision to continue is made.
TB           A           WFH           SNR
4     Host sends ProceedWithCarrier
service.
H>E
E>H
ProceedWithCarrier
State change to Id Verification OK
TB           A           IVO           SNR

R1-2.23  CarrierID Read Fail Scenario 2
R1-2.23.1  Assumptions: Fixed buffer Equipment, Equipment based Verification, Bind service has been received.
R1-2.23.2  Indicated states: LTS = Load Port Transfer State, LCAS = Load Port/Carrier Association State, CIDS =
Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-23  CarrierID Read Fail Scenario 2
#                         Comment                          Dir                         Message                         LTS                         LCAS                         CIDS                         CSMS
0    Initial    condition.                RTL
1    Carrier Arrives. E>H    Transfer Blocked TB
INR
2    ID read attempt fails. E>H    State change to Waiting For Host
3    Decision to stop is made.
TB                       WFH
4    Host sends CancelCarrier service. H>E
E>H
CancelCarrier
State change to Id Verification Failed
TB
A
IVF
SNR

R1-2.24  CarrierID Read Fail Scenario 3
R1-2.24.1  Assumptions: Fixed buffer Equipment, Host based Verification.
R1-2.24.2  Indicated states: LTS = Load Port Transfer State, LCAS = Load Port/Carrier Association State, CIDS =
Carrier ID Status, CSMS = Carrier Slot Map Status.


SEMI E87-0705 © SEMI 1999, 2005 59
Table R1-24  CarrierID Read Fail Scenario 3
#                         Comment                          Dir                         Message                         LTS                         LCAS                         CIDS                         CSMS
0     Initial     condition.               RTL
1     Carrier Arrives. E>H Transfer Blocked
2     ID read attempt fails. E>H ID read fail event
3 Decision to continue is made. H>E
NA          (T)           (T)
4     Host sends ProceedWithCarrier
service.
H>E
E>H
E>H
ProceedWithCarrier
State change to Id Verification OK
State change to Load Port Associated
TB
A          IVO          SNR

R1-2.25  CarrierID Read Fail Scenario 4
R1-2.25.1  Assumptions: Fixed buffer Equipment, Host based Verification.
R1-2.25.2  Indicated states: LTS = Load Port Transfer State, LCAS = Load Port/Carrier Association State, CIDS =
Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-25  CarrierID Read Fail Scenario 4
#                       Comment                        Dir                       Message                       LTS                       LCAS                       CIDS                       CSMS
0      Initial      condition.                     RTL
1 Carrier Arrives. E>H Transfer Blocked
2 ID read attempt fails. E>H ID read fail event
3 Decision to stop is made. H>E
NA          (T)           (T)
4 Host sends CancelCarrier. H>E
E>H
E>H
CancelCarrier
State change to Id Verification Failed
State change to Load Port Associated
TB
A          IVF          SNR

R1-2.26  CarrierID Read Fail Scenario 5
R1-2.26.1  Assumptions: Fixed buffer Equipment, Host based Verification.
R1-2.26.2  Indicated states: LTS = Load Port Transfer State, LCAS = Load Port/Carrier Association State, CIDS =
Carrier ID Status, CSMS = Carrier Slot Map Status.
Table R1-26  CarrierID Read Fail Scenario 5
#                                   Comment                                     Dir                                   Message                                   LTS                                   LCAS                                   CIDS                                   CSMS
0      Initial      condition.                  RTL
1 Carrier Arrives. E>H Transfer Blocked
2 ID read attempt fails. E>H ID read fail event
3 Decision to stop is made. H>E
4 Host sends CancelCarrierAtPort.                            H>E                            CancelCarrierAtPort
TB
NA          (T)           (T)

R1-3  Example Equipment Logic for Carrier Delivery
R1-3.1    To  summarize  the  CMS  carrier  object  behavior,  following  flow-charts  are  provided.  The  charts  show  the
example of an equipment logic for the CMS definitions.


SEMI E87-0705 © SEMI 1999, 2005 60
R1-3.2  Bind and Notify
BIND
Error
Has  the loadport
been associated?
Has  the object
been registered?
Create the carrier object
Carrier ID Not Read
Slot Map Not Read
Not Processed
Associate
Associate the object with
the loadport of carrier
delivered
YES
NO
YES
NO
NOTIFY
Error
Has  the object
been  registered?
Create the carrier object
Carrier ID Not Read
Slot Map Not Read
Not Processed
YES
NO

R1-3.2.1  Bind Service Request From the Host
R1-3.2.1.1  Verify no object has been associated with designated loadport. If it is associated the Bind service shall
be failed.
R1-3.2.1.2  Verify no object having the same ID specified in Bind service has been registered.
R1-3.2.1.2.1    If  it  is  registered,  the  Bind  service  shall  associate  the  object  that  is  already  registered  with  the
designated loadport.
R1-3.2.1.2.2    If  it  is  not  registered,  then  create  the  object  and  associate  it  to  the  loadport.  The  initial  states  of  the
object are Carrier ID Not Read, Carrier Slot Map Not Read, Carrier Not Processed and Associated to the loadport.
R1-3.2.2  Notify service request from the host.
R1-3.2.2.1  Verify no object having the same ID specified in Notify service has been registered.
R1-3.2.2.1.1  If it is registered, the Notify service shall be failed.
R1-3.2.2.1.2  If it is not registered, then create the carrier object. The initial states of the object are Carrier ID Not
Read, Carrier Slot Map Not Read, Carrier Not Processed and Not Associated.


SEMI E87-0705 © SEMI 1999, 2005 61
R1-3.3  Carrier ID Read
ID READ
ID read successful?
READ FAIL EVENT
Report  the event and wait
the host instruction.
YES
NO
ProceedWithCarrier <?
READ FAIL ON OBJECT
ID read failed on
associated object, then
Carrier ID Waiting Host
NO
VERIFICATION
YES
Create and Associate
the object
Carrier ID Verification OK
Slot Map Not Read
Associated
Carrier ID Verified
Carrier ID Verification OK
Slot Map Not Read
Associated
Has the port
been associated?
ProceedWithCarrier <?
CANCEL
CancelCarreri or
CancelCarrierAtPort
NONO
YESYES

R1-3.3.1  Carrier ID Read Event
R1-3.3.1.1  If carrier ID has been read successfully then ID DETERMINATION (ID DET) is executed.
R1-3.3.1.2  If carrier ID has been failed to be read and the port is not associated with any object;
R1-3.3.1.2.1  Report the host the event to inform Carrier ID read fail when the loadport has no Bind.
R1-3.3.1.2.2    If  the  host  requests  ProceedWithCarrier  service,  then  create  the  object  and  associate  it  with  the
loadport. Carrier ID state shall be changed to Carrier ID Verification OK.
R1-3.3.1.2.3    If  the  host  requests  CancelCarrierservice,  then  create  the  object  and  associate  it  with  the  loadport.
Carrier ID state shall be changed to Carrier ID Verification Fail. Take the carrier to Ready to Unload.
R1-3.3.1.2.4    If  the  host  requests  CancelCarrierAtPort  service,  no  objet  is  created.  Take  the  carrier  to  Ready  to
Unload.
R1-3.3.1.3  If carrier ID has been failed to be read and the port is associated with any object;
R1-3.3.1.3.1  Change the Carrier ID status of the associated object to Waiting for Host. The event shall be reported
to indicate carrier ID read for associated object has been failed.
R1-3.3.1.3.2    If  the  host  requests  ProceedWithCarrier  service,  then  change  the  Carrie  ID  status  of  the  associated
object to Carrier ID Verification OK.
R1-3.3.1.3.3  If the host requests CancelCarrier service, then change the Carrie ID status of the associated object to
Carrier ID Verification Fail. Take the carrier to Ready to Unload.


SEMI E87-0705 © SEMI 1999, 2005 62
R1-3.4  BypassReadID
ID READ
ID read successful?
READ FAIL EVENT
Report  the event and wait
the host instruction.
YES
NO
ProceedWithCarrier <?
READ FAIL ON OBJECT
ID read failed on
associated object, then
Carrier ID Waiting Host
NO
VERIFICATION
YES
Create and Associate
the object
Carrier ID Verification OK
Slot Map Not Read
Associated
Carrier ID Verified
Carrier ID Verification OK
Slot Map Not Read
Associated
Has the port
been associated?
ProceedWithCarrier <?
CANCEL
CancelCarreri or
CancelCarrierAtPort
NONO
YESYES
BypasRewadID true?
YES
NO
VERIFICATION

R1-3.4.1  BypassReadID
R1-3.4.1.1  If Bind has been received, then decision should be made if ID read is necessary.
R1-3.4.1.2  If BypassReadID is equal to True.
R1-3.4.1.2.1  No ID read is required and carrier object enters ID Verification OK state.
R1-3.4.1.3  If BypassReadID is equal to False.
R1-3.4.1.3.1  ID Read is required.


SEMI E87-0705 © SEMI 1999, 2005 63
R1-3.5  Carrier Object Verification
Has the object already
been registered?
Create the carrier object
Carrier ID Waiting Host
Slot Map Not Read
Not Processed
YES
NO
Has the port associated
with another object?
Delete Associated Object
Delete the object which has
been associated with the
loadport.
VERIFICATION
STORED
NO
YES
CREATED

R1-3.5.1  If the object having the ID read from the carrier has been registered, then STORED object logic shall be
executed.
R1-3.5.2  If no object having the ID read from the carrier has been registered;
R1-3.5.2.1  Create the object.
R1-3.5.2.2  If an object has been associated with the loadport on which the carrier is delivered, the event means the
carrier  delivered  is  not  expected  by  the  associated  object.  That  is  Carrier  ID  verification  fail.  Then,  delete  the
asoociated object.
R1-3.5.2.3  CREATED logic shall be executed.


SEMI E87-0705 © SEMI 1999, 2005 64
R1-3.6  CREATED
ProceedWithCarrier?
NO
Cancel Carrier
Carrier ID Verification Fail
Ready to Unload
CREATED
YES
PORT ASSOCIATION
Associate created object
with the port on which
the carrier is delivered
Carrier ID Verified
Carrier ID Verification OK
WAIT FOR HOST
Report the carrier ID
and wait for host instruction

R1-3.6.1  Associate the object just created with the loadport on which the carrier is delivered.
R1-3.6.2  Report the carrier ID and wait for host instruction.
R1-3.6.3    If  the  host  requests  ProceedWithCarrier  service,  change  the  Carrier  ID  Status  to  Carrier  ID  Verification
OK.
R1-3.6.4  If the host requests CancelCarrier service, change the Carrier ID Status to Carrier ID Verification Fail. The
carrier shall be taken to Ready to Unload.
R1-3.7  STORED
Carrier ID Verified
Carrier ID Verification OK
Cancel Carrier
Carrier ID Verification Fail
NO
STORED
YES
YES
YES
NO
NO
ProceedWithCarrier?
Has the loadport
been associated with
another object?
Has the object
been associated with
current port <?
PORT ASSOCIATION
Associate the object
with the port
Cancel the association
Has the object
been associated with
another loadport?
NO
YES
Delete Associated Object
Cancel the association and
delete the associated object
then WAIT FOR HOST



SEMI E87-0705 © SEMI 1999, 2005 65
R1-3.7.1  If the object has been already associated with the loadport other than the carrier is delivered;
R1-3.7.1.1  This is the case for misloading to a wrong loadport.
R1-3.7.1.2  Cancel the association.
R1-3.7.2  And If the loadport on which the carrier has been delivered is associated to another object, then delete the
object associated with the port on which the carrier is delivered.
R1-3.7.2.1  This is the case for equipment base ID VERIFICATION FAIL.
R1-3.7.2.2  Associate the object with the loadport on which the carrier has been delivered.
R1-3.7.2.3  Then enter WAITING FOR HOST.
R1-3.7.2.4  If ProceedWithCarrier is given, then the carrier is verified.
R1-3.7.2.5  If CancelCarrier is given, then the carrier verification is failed.
R1-3.7.3  If the object has been associated with the loadport on which the carrier is delivered, the carrier is verified.
Change the Carrier ID status to Carrier ID Verified.
R1-3.7.4    If  no  object  has  been  associated  with  the  loadport  on  which  the  carrier  is  delivered,  associate  the  object
with the loadport. This is the case for associating object created by Notify.

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


SEMI E87.1-0702 © SEMI 2000, 2002 1
SEMI E87.1-0702
PROVISIONAL SPECIFICATION FOR SECS-II PROTOCOL FOR
CARRIER MANAGEMENT (CMS)
This  provisional  specification  was  technically  approved  by  the  Global  Information  and  Control  Committee
and  is  the  direct  responsibility  of  the  North  American  Information  and  Control  Committee.  Current  edition
approved  by  the  North  American  Regional  Standards  Committee  on  April  30  2002.    Initially  available  at
www.semi.org  June  2002;  to  be  published  July  2002.  Originally  published  February  2000;  previously
published March 2002.
1  Purpose
1. 1  This document maps the services and data of SEMI
E87   to   SECS-II   streams   and   functions,   and   data
definitions.
2  Scope
2. 1        This    is    a    provisional    specification    covering
equipment  supporting  automated  access  to  load  ports
from  the  host  point-of-view.    The  provisional  status  is
required  because  of  the  immaturity  of  implementations
of  integrated  equipment  with  AMHS,  and  additional
specifications   may   yet   be   defined.      Also,   further
exception handling and error recovery scenarios need to
be defined.
2. 2    This  document  applies  to  all  implementations  of
SEMI  E87  that  use  the  SECS-II  message  protocol
(SEMI   E5).      Compliance   to   this   standard   requires
compliance to both SEMI E87 and SEMI E5.
2. 3    This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.      It   is   the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1        This    specification    applies    to    semiconductor
equipment  with  SEMI  E15.1  compliant  load  ports.    It
may  also  be  applied  to  other  manufacturing  equipment
that supports automated carrier transfer and or contains
an internal buffer.
3. 2    This  is  a  provisional  specification.    The  following
areas must be completed before the provisional status is
removed:
1)    Any  additional  services,  or  changes  to  existing
services,  in  Carrier  Management  must  be  mapped
to SECS-II messages.
4  Referenced Standards
4. 1  SEMI Standards
SEMI   E5   —   SEMI   Equipment   Communications
Standard 2 Message Content (SECS-II)
SEMI  15.1  —  Provisional  Specification  for  300  mm
Tool Load Port
SEMI  E39.1  —  SECS-II  Protocol  for  Object  Services
Standard (OSS)
SEMI  E87  —  Specification  for  Carrier  Management
(CMS)
NOTE 1: Unless   otherwise   indicated,   all   documents   cited
shall be the latest published versions.
5  Services Mapping
5. 1    This  section  shows  the  specific  SECS-II  streams
and  functions  that  shall  be  used  for  SECS-II  imple-
mentation of the services defined in SEMI E87, as well
as the parameter mapping for data attached to services.
5. 2  Services Message Mapping
5. 2.1    Table  1  defines  the  relationships  between  SEMI
E87 services and SECS-II messages.



SEMI E87.1-0702 © SEMI 2000, 2002 2
Table 1  Services Message Mapping Table
Service Name Stream, Function SECS-II Message Name
Bind S3,F17/18 Carrier Action Request/Acknowledge
CancelBind S3,F17/18 Carrier Action Request/Acknowledge
CancelAllCarrierOut              S3,F19/20              Cancel              All Carrier Out Request/Acknowledge
CancelCarrier                          S3,F17/18                          Carrier Action Request/Acknowledge
CancelCarrierAtPort               S3,F17/18               Carrier Action Request/Acknowledge
CancelCarrierNotification      S3,F17/18      Carrier Action Request/Acknowledge
CancelCarrierOut                    S3,F17/18                      Carrier Action Request/Acknowledge
CancelReservationAtPort       S3,F25/26       Port Action Request/Acknowledge
CarrierIn                                 S3,F17/18                                 Carrier                                 Action Request/Acknowledge
CarrierNotification                 S3,F17/18                 Carrier Action Request/Acknowledge
CarrierOut S3,F17/18 Carrier Action Request/Acknowledge
CarrierReCreate                      S3,F17/18                      CarrierReCreate Rquest/Acknowledge
CarrierRelease                        S3,F17/18                        Carrier Action Request/Acknowledge
CarrierTagReadData               S3,F29/30               Carrier               Tag Read Data Request/Acknowledge
CarrierTagWriteData              S3,F31/32              Carrier              Tag Write Data Request/Acknowledge
ChangeAccess                        S3,F27/28                     ChangeAccess
ChangeServiceStatus              S3,F25/26              Port Action Request/Acknowledge
ProceedWithCarrier S3,F17/18 Carrier Action Request/Acknowledge
ReserveAtPort                        S3,F25/26                        Port Action Request/Acknowledge

5. 3  Services Parameter Mapping
5. 3.1  Table 2 maps the SEMI E87 service parameters to SECS-II Data Items.
NOTE  2:  Use  of  parameters  not  specified  for  a  given  message  in  SEMI  E87  is  prohibited.    SECS-II  data  items  not  used  for  a
given message shall be sent as zero-length items.
Table 2  Service Parameters to SECS-II Data Items Mapping
Parameter Name Range SECS-II Data Item
AccessMode                         Enumerated:
MANUAL, AUTO
PORTACCESS
AttributeData                        Any                        CATTRDATA
AttributeID Text format restrictions per SEMI E39.1, Section 6. CATTRID
CarrierID 1 to 80 characters CARRIERID
CMAcknowledge                  Enumerated                  CAACK
CMStatus                              Structure                              L,2
1. CAACK
2. Status
Data                                      ASCII                                      (20)                                      DATA
DataLength                           Integer                           (Un or Sn) DATALENGTH
DataSeg                                ASCII                                (20)                                DATASEG
ErrorCode                             Enumerated                             ERRCODE
ErrorText 1 to 80 characters ERRTEXT
LocationID                            ASCII                            (20)                            LOCID
PropertiesList                        Non-identifier                        properties                        L,n
1. L,2
1. CATTRID
1

2. CATTRDATA
1



SEMI E87.1-0702 © SEMI 2000, 2002 3
Parameter Name Range SECS-II Data Item
.
.
n. L,2
1. < CATTRID
n
>
2. CATTRDATA
n

PortID                                   U1                                   (1–255)                                   PTN
ServiceStatus                        Enumerated:
IN SERVICE, OUT OF SERVICE
U1
0 = OUT OF SERVICE
1 = IN SERVICE
Status                                    n                                    errors                                    L,n
1. L,2
1. ERRCODE
1

2. < ERRTEXT
1
>
.
.
n.
1. < ERRCODE
n
>
2. ERRTEXT
n


5. 4  SECS-II Data Items Without Corresponding SEMI E87 Parameters
5. 4.1  Table 3 contains the SECS-II data items that do not correspond to SEMI E87’s service parameter.
Table 3  Additional Data Item Requirements Table
Function SECS-II Data Item
Used by S3,F17 to differentiate between Bind, CancelCarrierOut,
CancelCarrierAtPort, CancelBind, CarrierIn, ProceedWithCarrier,
CancelCarrierNotification  CarrierNotification services, and CarrierReCreate.
CARRIERACTION
Used to satisfy SECS-II conventions for linking a multi-block inquiry with a
subsequent multi-block message.  Neither required nor specified by CMS.
DATAID
Used to inform receiver of total message length size for SECS-II multi-block
conventions.  May also be used to indicate the length of a section of data being
transmitted to or from a carrier tag.
DATALENGTH
Used to satisfy SECS-II multi-block requirements.  Neither required nor specified by
SEMI E87.
GRANT
Used by S3,F25 to differentiate between port related, CancelReservationAtPort, and
ReserveAtPort services.
PORTACTION
Used by S3F27 to specify desired Port Access Mode. ACCESSMODE



SEMI E87.1-0702 © SEMI 2000, 2002 4
6  Variable Data Item Mapping
6. 1    This  section  shows  the  specific  SECS-II  data  classes,  and  formats  needed  for  SECS-II  implementations  of
SEMI E87 variable data items.
Table 4  Variable Data Item Mapping Table
Variable Name Class Format
AccessMode                                   DVVAL                                   51                                   (U1)
Enumerated:
0 = MANUAL
1 = AUTO
AccessMode
i
SV                                   51                                   (U1)
Enumerated:
0 = MANUAL
1 = AUTO
AvailPartitionCapacity                   DVVAL                   51
AvailPartitionCapacity
i
SV                  51
BufferCapacityList                         SV                         L,n
1. BufferPartitionInfo
1

.
.
n.  BufferPartitionInfo
n

BufferPartitionInfo                         DVVAL                         L,4
1. PartitionID
2. PartitionType
3. AvailPartitionCapacity
4. PartitionCapacity
BufferPartitionInfo
i
SV                        L,4
1. PartitionID
i

2. PartitionType
i

3. AvailPartitionCapacity
i

4. PartitionCapacity
i

CarrierAccessingStatus                  DVVAL                  51                  (U1)
Enumerated as:
0 = NOT ACCESSED
1 = IN ACCESS
2 = CARRIER COMPLETE
3 = CARRIER STOPPED
CarrierID DVVAL A[1-80]  (Conforms to restrictions of ObjID as specified in SEMI E39.1,
Section 6.)
CarrierID
i
SV A[1-80]  (Conforms to restrictions of ObjID as specified in SEMI E39.1,
Section 6.)
CarrierIDStatus                               DVVAL                               51                               (U1)
Enumerated as:
0 = ID NOT READ
1 = [ID] WAITING FOR HOST
2 = ID VERIFICATION OK
3 = ID VERIFICATION FAILED
