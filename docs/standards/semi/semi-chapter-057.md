---
title: "E102-0600 - © SEMI 20009 #Current..."
description: "SEMI标准文档"
sidebar_label: "E102-0600 - © SEMI 20009 #Current..."
sidebar_position: 570
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-057.pdf'
  chapter: 57
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/057.pdf"
  pdfSize="0.28MB"
  title="E102-0600 - © SEMI 20009 #Current..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI E102-0600 © SEMI 20009
#Current StateTriggerNext StateActionComment
by the instance of
MaterialContainer
transitions to Completed.
10InTransitmakeProcessing()ProcessingDurableLocation
ChangedEvent Published
by the instance of
MaterialContainer
Container has reached
destination at process
equipment. TransportJob
state transitions to
Completed.
11ProcessingmakeInTransit()InTransitDurableLocation
ChangedEvent Published
by the instance of
MaterialContainer
Container has left process
equipment. TransportJob
state transitions to
Executing.
12ProcessingmakeManual
Control()
ManualControlDurableLocation
ChangedEvent Published
by the instance of
MaterialContainer
Container has left control
of process equipment (not
via TransportJob).
13ManualControlmakeProcessing()ProcessingDurableLocation
ChangedEvent Published
by the instance of
MaterialContainer
Container has entered
control of process
equipment (not via
TransportJob).
14InTransitmakeManual
Control()
ManualControlDurableLocation
ChangedEvent Published
by the instance of
MaterialContainer
Container has left the
control of the
TransportJob via a
manual output port.
TransportJob state
transitions to Aborted.
15ManualControlmakeInTransit()InTransitDurableLocation
ChangedEvent Published
by the instance of
MaterialContainer
Container has entered the
AMHS via a manual
input port. TransportJob
state transitions to
Executing.
16ManualControlnoneN/AnoneMaterialContainer
instance has been
removed.
6. 2.4  Machine Abstract Interface Gr oup (subset)
This section includes only those interfaces and specific operations from the Machine Abstract Interface Group that
are referenced within this component specification. These interfaces are provided here for referential integrity of this
specification  and  are  not  intended  to  remain  as  part  of  this  component.  Further,  this  is  not  intended  to  be  a
comprehensive  treatment  of  the  required  interfaces,  but  only  the  subset  needed  for  reference  until  the  full
specification is adopted through a subsequent ballot. When that occurs, this specification can be updated to reference
the interfaces directly rather than replicate them here.

SEMI E102-0600 © SEMI 200010
Resource
(from Resource AIG)
MaterialTrackingLocation
(from Machine Abstract Interface Group)
Machine
(from Machine Abstract Interface Group)
1
unit
tracks material at
Port
(from Machine Abstract Interface Group)
0. .*
1
has
0. .*
1
MESFactory
(from Factory Component)
MachineRegister
0. .*
1
0. .*
1
registers
1
1
1
1
has
(from Factory Component)
NOTE: Unit is the qualifier for the
association. A Machine has
exactly one Material Tracking
Location for each unit it holds.
Each Material Tracking Location
is associated with one Machine
for a specific unit value.
1
Figure 6
Machine Abstract Interface Group (subset) Information Model
6. 2.4.1  Machine Interface (subset)
Module:MachineAIG
Interface:Machine
Inherited Interface:Resource
interfaceMachine: AbstractIF::Resource {
Description:This abstract interface representing the concept of a piece of equipment in the factory. A
Machine  establishes  the  identity  of  the  physical  equipment  existing  in  the  factory  for
reference     within     an     MES     context.     The     Machine     also     maintains     one
MaterialTrackingLocation for each Unit defined to classify the Material processed, used,
or stored by the Machine.
Type Definitions:
typedef sequence MachineMachineSequence;
typedef sequence MaterialTrackingLocationMaterialTrackingLocationSequence;

SEMI E102-0600 © SEMI 200011
typedef sequence PortPortSequence;
enum MachineType {
FixedBufferProductionMachine,
InternalBufferProductionMachine,
StorageMachine,
TransportMachine };
Exceptions:
/* Port indicated for receiving material was invalid. */
exceptionInvalidPortSignal{};
/* Material specified for unloading was invalid. */
exceptionInvalidMaterialSignal{};
Published Events:
/* An E10 State change has occurred in the Machine that the Factory needs to know. */
MachineResourceE10StateChangedEvent
Provided Services:
/* Set the MachineType for this machine. */
voidsetMachineType(
in MachineType aMachineType )
raises (Global::FrameworkErrorSignal);
/* Return the MachineType for this machine. */
MachineTypegetMachineType()
raises (Global::FrameworkErrorSignal);
/* Set up a MaterialTrackingLocation for this Machine to track a particular material Unit characterizing its contents.
A  Machine  may  have  more  than  one  MaterialTrackingLocation  as  long  as  each  is  tracking  a  different  Unit.  The
value  of  Unit  is  used  with  corresponding  attributes  of  the  material  to  allocate  the  tracked  material  to  the  correct
MaterialTrackingLocation for a Machine. */
voidsetMaterialTrackingLocation(
in MaterialTrackingLocation aMaterialTrackingLocation,
in string aUnitToTrack)
raises (Global::FrameworkErrorSignal);
/*  Get  all  MaterialTrackingLocations  for  this  Machine.  There  is  one  and  only  one  MaterialTrackingLocation  per
Unit used in the Machine. */
MaterialTrackingLocationSequencegetAllMaterialTrackingLocations()
raises (Global::FrameworkErrorSignal);
/* Get the MaterialTrackingLocation for the Unit specified. */
MaterialTrackingLocationgetMaterialTrackingLocation(
in string aUnit)
raises (Global::FrameworkErrorSignal);

SEMI E102-0600 © SEMI 200012
/* Request a Machine to reserve a port to load material. This may involve communication between the Port and the
Machine  Objects,  but  these  need  not  be  public  (or  may  involve  communication  between  the  Machine  and  the
Equipment).    If  requestedPort  parameter  left  null,  machine  chooses  the  requestedPort.    Returns  Null  if  Machine
cannot or refuses to comply. */
PortreservePortForTransferTo(
in DurablesManagement::MaterialContainer aContainer,
in Port requestedPort )
raises (Global::FrameworkErrorSignal,
InvalidPortSignal);
/*  Request  a  Machine  to  reserve  a  port  to  load  two  or  more  MaterialContainers.  All  MaterialContainers  in  the
sequence  must  be  loaded  before  the  Machine  can  accept  another  port  reservation  request.  The  MaterialContainers
specified  in  the  MaterialContainerSequence  may  be  loaded  in  any  order.  If  requestedPort  parameter  left  null,
machine chooses the requestedPort.  Returns Null if Machine cannot or refuses to comply. */
PortreservePortForBatchTransferTo(
in DurablesManagement::MaterialContainerSequence aContainerGroup,
in Port requestedPort )
raises (Global::FrameworkErrorSignal,
InvalidPortSignal);
/* Request a Machine to cancel a reservation previously established for a transfer to a port. */
voidcancelPortReservationForTransferTo(
in DurablesManagement::MaterialContainer aContainer,
in Port requestedPort )
raises (Global::FrameworkErrorSignal,
InvalidPortSignal);
/* Inform a Machine that a transfer to or from a port has been completed. This may involve communication between
the  Port  and  the  Machine  Objects,  but  these  need  not  be  public  (or  may  involve  communication  between  the
Machine and the Equipment). */
voidtransferComplete(in DurablesManagement::MaterialContainer aContainer,
in Port reservedPort )
raises (Global::FrameworkErrorSignal,
InvalidPortSignal);
/* Request a Machine to prepare to unload material. Returns the Port on which the material will be unloaded or Null
if the Machine cannot or refuses to comply. */
PortcontainerOut(
in DurablesManagement::MaterialContainer aContainer,
in Port requestedPort )
raises (Global::FrameworkErrorSignal,
InvalidMaterialSignal);
/* Returns a list of all Ports for the machine. */
PortSequenceallPorts()
raises (Global::FrameworkErrorSignal);
/* Returns the list of all Areas that this Machine is in. */
AreaSequenceallAreas()
raises (Global::FrameworkErrorSignal);
}; //Machine

SEMI E102-0600 © SEMI 200013
6. 2.4.2  MaterialTrackingLocation Inte rface
Module:MachineAIG
Interface:MaterialTrackingLocation
Inherited Interface:OwnedEntity
interfaceMaterialTrackingLocation: AbstractIF::OwnedEntity {
Description:A  MaterialTrackingLocation  is  a  place  where  Material  may  be  held.  The  “type”  of  the
location  is  based  on  the  classification  Unit  of  Material  that  the  location  can  hold  (e.g.,
locations to hold wafers have a “Wafer” Unit and can only hold this Material type). Each
machine     has     one     MaterialTrackingLocation     for     each     material     Unit.     The
MaterialTrackingLocation also maintains a capacity.
Exceptions:
/* Material specified in the call is not a valid Material for this MaterialTrackingLocation. */
exceptionInvalidMaterialSignal{};
/* Intent to assign more Material to the MaterialTrackingLocation failed because it is full. */
exceptionMaterialTrackingLocationFullSignal{};
/* Unit value is not valid for the MaterialTrackingLocation. */
exceptionInvalidUnitSignal{};
Published Events:
/* A Material Tracking Location has reached its capacity. */
MaterialTrackingLocationFullEvent
/* A Material Tracking Location that was previously Full now has available capacity. */
MaterialTrackingLocationNotFullEvent
Provided Services:
/* Return the Material at the MaterialTrackingLocation, return nil if the location is empty. */
AbstractIF::MaterialSequenceallMaterialHeld()
raises (Global::FrameworkErrorSignal);
/* Get and set the unique identifier for the MaterialTrackingLocation. */
stringgetIdentifier()
raises (Global::FrameworkErrorSignal);
voidsetIdentifier(
in string identifier)
raises (Global::FrameworkErrorSignal,
Global::SetValueOutOfRangeSignal,
Global::DuplicateIdentifierSignal);
/* Return the Machine that holds this MaterialTrackingLocation. */
MachinegetMachine()
raises (Global::FrameworkErrorSignal);

SEMI E102-0600 © SEMI 200014
/* Set the material Unit that can be held in the MaterialTrackingLocation. Example: If the MaterialTrackingLocation
is to hold wafers, the Unit could be “wafer”. If it was a particular size of Wafer the Unit could be “200mmWafer.” */
voidsetUnit(
in string aUnit)
raises (Global::FrameworkErrorSignal,
InvalidUnitSignal);
/* Get the Unit for the MaterialTrackingLocation. */
stringgetUnit()
raises (Global::FrameworkErrorSignal);
/* Add a Material to the MaterialTrackingLocation. */
voidaddMaterialToTrack(
in AbstractIF::Material aMaterial )
raises (Global::FrameworkErrorSignal,
InvalidMaterialSignal,
MaterialTrackingLocationFullSignal);
/* Remove a Material from the MaterialTrackingLocation. */
voidremoveMaterial(
in AbstractIF::Material aMaterial )
raises (Global::FrameworkErrorSignal,
InvalidMaterialSignal);
/*  Reserve  capacity  of  the  MaterialTrackingLocation.  If  accepted,  this  portion  of  the  MaterialTrackingLocation’s
capacity will be kept for the designated material. If the capacity is reserved the operation returns True. */
booleanreserveCapacity(
in AbstractIF::Material capacityToReserve)
raises (InvalidUnitSignal,
InvalidMaterialSignal,
MaterialTrackingLocationFullSignal,
Global::FrameworkErrorSignal);
/*    Release    reserved    capacity    of    the    MaterialTrackingLocation.    If    accepted,    this    portion    of    the
MaterialTrackingLocation’s capacity will be released for use by other material. */
booleanreleaseCapacity(
in AbstractIF::Material capacityToRelease)
raises (Global::FrameworkErrorSignal);
/* Get and set the Maximum Capacity for the MaterialTrackingLocation. */
voidsetMaximumCapacity(
in long maximum)
raises (Global::FrameworkErrorSignal,
Global::SetValueOutOfRangeSignal);
longgetMaximumCapacity()
raises (Global::FrameworkErrorSignal);
/*  Get  the  Available  Capacity  for  the  MaterialTrackingLocation.  Available  Capacity  is  the  difference  between
Maximum Capacity and the count of the sequence returned by AllMaterialHeld. */
longgetAvailableCapacity()
raises (Global::FrameworkErrorSignal);

SEMI E102-0600 © SEMI 200015
/*  Get  the  Reserved  Capacity  for  the  MaterialTrackingLocation.  Reserved  Capacity  is  the  portion  of  the
AvailableCapacity that has been set aside for known material that has not yet arrived. */
longgetReservedCapacity()
raises (Global::FrameworkErrorSignal);
/*   This   is   a   query   for   the   availability   status   of   the   MaterialTrackingLocation.   Available   means   the
MaterialTrackingLocation has available capacity in which more material could go. */
booleanhasAvailableCapacity()
raises (Global::FrameworkErrorSignal);
}; //MaterialTrackingLocation
6. 2.4.3  Port Interface (subset)
Module:MachineAIG
Interface:Port
Inherited Interface:Resource
interfacePort: AbstractIF::Resource {
Description:The Port represents the point at which a “change of ownership” occurs during a material
transfer. Each Port has at least one associated Machine and the Port may be thought of as
an “access point” to the Machine.
Exceptions:None.
Events:None.
Provided Services:
/* Returns the machine to which this port belongs. */
MachinegetMachine()
raises (Global::FrameworkErrorSignal);
}; //Port
6. 2.5  Factory Operations Componen t (subset) —  This section includes only those interfaces and specific operations
from the Factory Component that are referenced within this component specification. These interfaces are provided
here for referential integrity of this specification and are not intended to remain as part of this component. Further,
this  is  not  intended  to  be  a  comprehensive  treatment  of  the  required  interfaces,  but  only  the  subset  needed  for
reference  until  the  full  specification  is  adopted  through  a  subsequent  ballot  for  the  full  Factory  Operations
component.  When  that  occurs,  this  specification  can  be  updated  to  reference  the  interfaces  directly  rather  than
replicate them here.
6. 2.5.1  MachineRegister Interface
Module:FactoryOperations
Interface:                             MachineRegister
Inherited Interface: Resource
interfaceMachineRegister: AbstractIF::Resource {
Description:  The  MachineRegister  maintains  a  list  of  known  machines  for  the  factory  and  supplies
related information on demand. There is only one MachineRegister per factory.  NOTE:
this interface may eventually be replaced by the trader service.
Exceptions:

SEMI E102-0600 © SEMI 200016
/* An attempt was made to locate an unknown Machine. */
exceptionMachineNotFoundSignal{string machineName;};
exceptionMachineRemovalFailedSignal{};
Published Events:
/* Event indicating that a Machine has been added or removed from the Factory. */
MachineListChangedEvent
Provided Services:
/* Add a Machine to the set of machine(s) managed by the MachineRegister. */
voidaddMachine(in Machine aMachine)
raises (Global::FrameworkErrorSignal);
/* Remove a Machine from the set of machine(s) managed by the MachineRegister. */
voidremoveMachine(in Machine aMachine)
raises (Global::FrameworkErrorSignal,
MachineRemovalFailedSignal);
/* Return a sequence of all machines managed by the MachineRegister. */
MachineSequenceallMachines()
raises (Global::FrameworkErrorSignal);
/* Return the Machine corresponding to the given name. */
MachinefindMachineNamed(in string identifier)
raises (Global::FrameworkErrorSignal,
MachineNotFoundSignal) ;
Contracted Services: None.
Dynamic Model: None.
}; //MachineRegister
6. 3   Material  Transport  Abstract  In terfaces  —   The  Material  Transport  Abstract  Interfaces  are  defined  to  perform
material transport at the factory level. The TransportJobSupervisor interface must be specialized by the users of the
Material Transport Manager Interface. These interfaces provide a way to track the job through the factory.
6. 3.1  TransportJobSupervisor Interf ace
Module:MaterialTransport
Interface:TransportJobSupervisor
Inherited Interface: JobSupervisor
interfaceTransportJobSupervisor: AbstractIF::JobSupervisor {
Description:TransportJobSupervisor is an abstract interface which provides the operations needed by
clients to request, track, and control material transport within the domain of the specific
TransportJobSupervisor. Any entity which is responsible for moving material will inherit
and implement TransportJobSupervisor.
Type Definitions:
typedef sequence <Global::Properties>JobSpecSequence;

SEMI E102-0600 © SEMI 200017
Exceptions:
exceptionUnsupportedDestinationTypeSignal{};
Published Events:None.
Provided Services:
The Creation of TransportJobs is accomplished by use of the requestJob operation from the inherited JobSupervisor
interface.  The  “JobType”  property  specified  in  the  inherited  interface  should  be  set  to  “TransportJobType”  for  all
TransportJob  requests.  The  additional  Job  Specification  properties  required  for  the  creation  of  Transport  jobs  are
defined in Table 3.  The types of machines specified in the TransportJob are AMHS Storage Machines, Fixed Buffer
Production Equipment, or Internal Buffer Production Equipment.  Each machine type represents a separate case used
in defining the Job Specification for a Transport Job, and these cases are also defined in Table 3.
For  transportJobs,  the  inherited  ABORTING  and  ABORTED  states  may  not  always  result  in  an  immediate
termination  of  the  job  and  associated  activities.  For  example,  transportJobs  may  involve  autonomous  transport
equipment  that  operate  without  persistent  communication  links  to  the  TransportJob  and  TransportJobSupervisor
objects.  In these cases there may be a time delay before the results of a transportJob makeAborted request can be
enacted to allow the transport equipment to reach a known location. In other cases a movement activity must reach a
stable  condition  before  it  can  be  interrupted.  The  location  of  the  MaterialContainer  associated  with  the  aborted
TransportJob is the nearest location where movement can be safely and reliably interrupted.
By contrast, if a transportJob is transitioned to the inherited STOPPING state, the location of the MaterialContainer
associated with the stopped TransportJob must be a legal Source for issuing a new TransportJob.
Table 3  Additional Required Properties for Transport Jobs
NameValue TypeDescription
“Container”MaterialContainerContainer being transported.
“SourceMachine”MachineThe source production machine for the transport job.
AMHS Storage Equipment: SourceMachine is Optional.
Fixed Buffer Production Equipment: SourceMachine is Required.
Internal Buffer Production Equipment: SourceMachine is Required.
“SourcePort”PortThe source production machine port for the transport job.
AMHS Storage Equipment: SourcePort is Optional.
Fixed Buffer Production Equipment: SourcePort is Required.
Internal Buffer Production Equipment: SourcePort is optional. Port may be
obtained dynamically with the containerOut operation or it may be predefined
in the TransportJob specification.
“DestinationArea”AreaThe destination area for the transport job. DestinationArea shall contain only
StorageMachines. The implementation  shall determine the specific machine to
which the MaterialContainer is delivered.
AMHS Storage Equipment: DestinationArea is optional.
Fixed Buffer Production Equipment: DestinationArea is not allowed.
Internal Buffer Production Equipment: DestinationArea is not allowed.
“DestinationMachine”MachineThe destination machine for the transport job.
AMHS Storage Equipment: DestinationMachine is required if DestinationArea
is not specified.
Fixed Buffer Production Equipment: DestinationMachine is required.
Internal Buffer Production Equipment: DestinationMachine is required.

SEMI E102-0600 © SEMI 200018
NameValue TypeDescription
“DestinationPort”PortThe destination port for the transport job.
AMHS Storage Equipment: DestinationPort is required for Manual output port
destinations.
Fixed Buffer Production Equipment: DestinationPort is required.
Internal Buffer Production Equipment: DestinationPort is NULL.
/* The requestBatchTransportJob operation will provide two or more job specifications for transport jobs that share
a  dependency  on  completion.  All  job  specifications  must  have  the  same  priority.  In  the  normal  case,  the
TransportJobSupervisor will create simple transport jobs for each job specification and return the jobs as a sequence.
Subsequently,  if  one  of  the  simple  jobs  cannot  complete,  the  other  subordinate  jobs  must  be  reassessed  by  the
JobRequestor to determine the appropriate corrective action. In this case, the TransportJobSupervisor will notify the
JobRequestor of the job failure with the informJobTerminated message and pause the other jobs of the batch-job to
allow the JobRequestor to determine its response. Implementations may implement the TransportJobSupervisor with
more  complex  default  actions  in  response  to  a  partial  failure  of  a  batch-transport-job,  but  these  more  complex
scenarios are not part of the standard behavior for this operation. */
AbstractIF::JobSequencerequestBatchTransportJob(
in JobSpecSequence jobSpecs,
in AbstractIF::JobRequestor aJobRequestor)
raises (Global::FrameworkErrorSignal,
AbstractIF::JobSupervisor::JobRejectedSignal);
Contracted Services:None
Dynamic Model:None
}; //TransportJobSupervisor
6. 4  Material Transport and Storag e Component
6. 4.1   This  component  is  concerned  o nly  with  factory-wide  material  transport  and  not  the  movement  of  material
within  a  piece  of  equipment.  Also  note  that  material  can  be  either  product,  durables,  or  consumables.  The  CIM
Framework  recognizes  the  potential  for  multiple  AMHS’s  within  a  single  factory  (e.g.,  one  supplier  of  interbay
movement  and  another  supplier  of  intrabay  movement).  The  MES,  however,  wants  to  only  have  to  issue  a  move
request  (“move  this  material  from  here  to  there”)  without  regard  to  whether  that  transport  spans  one  or  more
AMHS’s. Therefore, the component supporting material transport requires a single entry point for initiating material
transport which will be through the Material Transport Manager (MTM).
6. 4.2  The Material Transport Manag er must be able manage transport jobs carried out by many different AMHS’s.
To  accomplish  this,  a  separate  interface  for  a  Material  Transport  Controller  (MTC)  is  specified.  In  the  simplest
implementations, a single MTM may manage all TransportJobs directly. In this case no separate Material Transport
Controller implementation is needed. If there is a need for delegation to one or more Material Transport Controllers,
the  Material  Transport  Manager  can  register  any  conformant  MTC  implementation  which  supports  the  specified
interface.  The  low-level  interaction  of  the  material  movement  controllers  with  the  physical  equipment  (transport
machines, storage machines and ports) is encapsulated within the scope of this component. Note that the component
manager  does  not  provide  lifecycle  services  for  its  managed  material  movement  controllers,  but  instead  uses  the
registration interfaces.
6. 4.3  MaterialTransportManager In terface
Module:MaterialTransport
Interface:MaterialTransportManager
Inherited Interface:ComponentManager, TransportJobSupervisor, JobRequestor
interfaceMaterialTransportManager: FactoryOperations::ComponentManager,
TransportJobSupervisor, AbstractIF::JobRequestor {

SEMI E102-0600 © SEMI 200019
Description:A  MaterialTransportManager  (MTM)  operates  on  requests  to  move  material  in  the
factory.  It  returns  a  TransportJob  to  the  requestor,  allowing  the  requestor  to  track  the
status and progress of the move. The MTM may perform these TransportJobs by breaking
them  into  separate  tasks  to  be  performed  by  MaterialTransportControllers  (MTC).  If
TransportJobs  are  decomposed,  the  MaterialTransportManager  then  tracks  the  MTC
TransportJobs to fulfill its commitment.
Exceptions:
exceptionMaterialTransportControllerNotRegisteredSignal{};
Published Events:None.
Provided Services:
/*    Add    a    MaterialTransportController    to    the    collection    of    MaterialTransportControllers    which    the
MaterialTransportManager can use to carry out jobs. */
voidregisterMaterialTransportController(
in MaterialTransportController aMaterialTransportController)
raises (Global::FrameworkErrorSignal);
/* Remove a MaterialTransportController from the list of resources available to the MaterialTransportManager. No
new jobs will be issued but existing jobs will be unaffected. */
voidunregisterMaterialTransportController(
in MaterialTransportController aMaterialTransportController)
raises (Global::FrameworkErrorSignal,
MaterialTransportControllerNotRegisteredSignal);
/* Return a list of all MaterialTransportControllers managed by the MaterialTransportManager. */
MaterialTransportControllerSequenceallMaterialTransportControllers()
raises (Global::FrameworkErrorSignal);
/* Returns a list of all material in the material transport system. */
AbstractIF::MaterialSequenceallMaterial()
raises (Global::FrameworkErrorSignal);
/* Returns a list of all material in transit in the material transport system. */
AbstractIF::MaterialSequenceallMaterialInTransit()
raises (Global::FrameworkErrorSignal);
/* Returns a list of all material in storage in the material transport system. */
AbstractIF::MaterialSequenceallMaterialInStorage()
raises (Global::FrameworkErrorSignal);
Contracted Services:None
Dynamic Model:None
}; //MaterialTransportManager
6. 4.4  MaterialTransportController I nterface
Module:MaterialTransport
Interface:MaterialTransportController
Inherited Interface:TransportJobSupervisor
interface MaterialTransportController : TransportJobSupervisor {

SEMI E102-0600 © SEMI 200020
Description:A  MaterialTransportController  accepts  transport  job  requests,  schedules  them,  and
executes them in order to move material around the factory or a part of the factory.
Exceptions:None.
Published Events:None.
Provided Services:
typedef sequence MaterialTransportControllerMaterialTransportControllerSequence;
/* Returns a list of all material in the domain of this material transport controller. */
AbstractIF::MaterialSequenceallMaterial()
raises (Global::FrameworkErrorSignal);
/* Returns a list of all material in transit in the domain of this material transport controller. */
AbstractIF::MaterialSequenceallMaterialInTransit()
raises (Global::FrameworkErrorSignal);
/* Returns a list of all material in storage in the domain of this material transport controller. */
AbstractIF::MaterialSequenceallMaterialInStorage()
raises (Global::FrameworkErrorSignal);
Contracted Services:None
Dynamic Model:None
}; // MaterialTransportController
6. 4.5  TransportJob Interface
Module:MaterialTransport
Interface:TransportJob
Inherited Interface:Job
interfaceTransportJob: AbstractIF::Job {
Description:This type of Job performs a specific transport of material. The ongoing status of the move
can be monitored by subscribing to the appropriate Job events.
Exceptions:
exceptionTimeUndeterminableSignal{};
Published Events:Same as Job
Provided Services:
/* Determine if the move can be completed by the specified time. */
booleancanCompleteBy(
in Global::TimeStamp whenNeeded)
raises (Global::FrameworkErrorSignal,
TimeUndeterminableSignal);
/* Estimate how long this job will take once it begins. */
Global::DurationtransportTime()
raises (Global::FrameworkErrorSignal,
TimeUndeterminableSignal);

SEMI E102-0600 © SEMI 200021
Contracted Services:None
Dynamic Model:None
}; // TransportJob
6. 4.6  TransportMachine Interface
Module:MaterialTransport
Interface:TransportMachine
Inherited Interface:Machine
interfaceTransportMachine: MachineAIG::Machine {
Description:This  concrete  specialization  of  Machine  represents  the  equipment  used  to  transport
material  within  the  factory.  Implementations  of  the  Material  Transport  and  Storage
Component   would   provide   implementations   supporting   this   interface   for   each
TransportMachine registered with the factory.
Exceptions:None
Published Events:Same as Machine
Provided Services:None
Contracted Services:None
Dynamic Model:None
}; //TransportMachine
6. 4.7  StorageMachine Interface
Module:MaterialTransport
Interface:StorageMachine
Inherited Interface:Machine
interfaceStorageMachine: MachineAIG::Machine {
Description:This  concrete  specialization  of  Machine  represents  the  equipment  used  to  store  material
within  the  factory.  Implementations  of  the  Material  Transport  and  Storage  Component
would  provide  implementations  supporting  this  interface  for  each  StorageMachine
registered with the factory.
Exceptions:None
Published Events:
*/  Notifies  subscribers  that  a  MaterialContainer  arrived  on  a  manual  input  port  may  require  further  action  (e.g.,
creation of a TransportJob or transfer to a particular logical partition). */
const stringMaterialContainerArrivedAtManualInputPortSubject=
“/MaterialTransport/StorageMachine/MaterialContainerArrivedAtManualInputPort”;
structMaterialContainerArrivedAtManualInputPortFilters{
Global::Property Port;
Global::Property MaterialContainer;
};

SEMI E102-0600 © SEMI 200022
Table 4  MaterialContainerArrivedAtManualInputPortFilters Properties:
NameValue TypeDescription
“Port”MachineAIG::PortThe port where the MaterialContainer was placed.
“MaterialContainer”DurablesManagement::Material
Container
The carrier that arrived at the manual input port.
structMaterialContainerArrivedAtManualInputPortEvent{
string eventSubject;
Global::TimeStamp eventTimeStamp;
MaterialContainerArrivedAtManualInputPortFilters eventFilterData;
Global::Properties eventNews;
StorageMachine aMachine
};
Provided Services:None
Contracted Services:None
Dynamic Model:None
}; //StorageMachine

SEMI E102-0600 © SEMI 200023
APPENDIX 1
COMPLETE LISTING OF MATERIAL TRANSPORT IDL
NOTE:  The  material  in  this  appendix  is  an  official  part  of  SEMI  E10#  and  was  approved  by  full  letter  ballot  procedures  on
January 14, 2000 by the Japanese Regional Standards Committee.
module CIMFW {
#include Global.idl
#include FactoryLabor.idl
#include AbstractIF.idl
#include FactoryOperations.idl
module MachineAIG {
interface Machine;
interface MaterialTrackingLocation;
interface Port;
typedef sequence Machine MachineSequence;
exception MachineDuplicateSignal { };
exception MachineNotAssignedSignal { };
exception MachineRemovalFailedSignal { };
exception MaterialTrackingLocationFullSignal { };
interface Machine : AbstractIF::Resource {
typedef sequence Machine MachineSequence;
typedef sequence MaterialTrackingLocation
MaterialTrackingLocationSequence;
typedef sequence Port PortSequence;
enum MachineType {
FixedBufferProductionMachine,
InternalBufferProductionMachine,
StorageMachine,
TransportMachine };
exception InvalidPortSignal { };
exception InvalidMaterialSignal { };
void setMachineType (
in MachineType aMachineType )
raises (Global::FrameworkErrorSignal);
MachineType getMachineType ( )
raises (Global::FrameworkErrorSignal);

SEMI E102-0600 © SEMI 200024
void setMaterialTrackingLocation (
in MaterialTrackingLocation aMaterialTrackingLocation,
in string aUnitToTrack)
raises (Global::FrameworkErrorSignal);
MaterialTrackingLocationSequence getAllMaterialTrackingLocations ( )
raises (Global::FrameworkErrorSignal);
MaterialTrackingLocation getMaterialTrackingLocation (
in string aUnit)
raises (Global::FrameworkErrorSignal);
Port reservePortForTransferTo (
in DurablesManagement::MaterialContainer aContainer,
in Port requestedPort )
raises (Global::FrameworkErrorSignal,
InvalidPortSignal);
Port reservePortForBatchTransferTo (
in DurablesManagement::MaterialContainerSequence aContainerGroup,
in Port requestedPort )
raises (Global::FrameworkErrorSignal,
InvalidPortSignal);
void cancelPortReservationForTransferTo (
in DurablesManagement::MaterialContainer aContainer,
in Port requestedPort )
raises (Global::FrameworkErrorSignal,
InvalidPortSignal);
void transferComplete (in DurablesManagement::MaterialContainer aContainer,
in Port reservedPort )
raises (Global::FrameworkErrorSignal,
InvalidPortSignal);
Port containerOut (
in DurablesManagement::MaterialContainer aContainer,
in Port requestedPort )
raises (Global::FrameworkErrorSignal,
InvalidMaterialSignal);
PortSequence allPorts ( )
raises (Global::FrameworkErrorSignal);
FactoryOperations::AreaSequence allAreas( )
raises (Global::FrameworkErrorSignal);
}; // Machine
interface MaterialTrackingLocation : AbstractIF::OwnedEntity {
exception InvalidMaterialSignal { };
exception MaterialTrackingLocationFullSignal { };
exception InvalidUnitSignal { };
AbstractIF::MaterialSequence allMaterialHeld ( )
raises (Global::FrameworkErrorSignal);

SEMI E102-0600 © SEMI 200025
string getIdentifier ( )
raises (Global::FrameworkErrorSignal);
void setIdentifier (
in string identifier)
raises (Global::FrameworkErrorSignal,
Global::SetValueOutOfRangeSignal,
Global::DuplicateIdentifierSignal);
Machine getMachine ( )
raises (Global::FrameworkErrorSignal);
void setUnit (
in string aUnit)
raises(Global::FrameworkErrorSignal,
InvalidUnitSignal);
string getUnit ( )
raises (Global::FrameworkErrorSignal);
void addMaterialToTrack (
in AbstractIF::Material aMaterial )
raises (Global::FrameworkErrorSignal,
InvalidMaterialSignal,
MaterialTrackingLocationFullSignal);
void removeMaterial (
in AbstractIF::Material aMaterial )
raises (Global::FrameworkErrorSignal,
InvalidMaterialSignal);
boolean reserveCapacity (
in AbstractIF::Material capacityToReserve)
raises (InvalidUnitSignal,
InvalidMaterialSignal,
MachineAIG::MaterialTrackingLocationFullSignal,
Global::FrameworkErrorSignal);
boolean releaseCapacity (
in AbstractIF::Material capacityToRelease)
raises (Global::FrameworkErrorSignal);
void setMaximumCapacity (
in long maximum)
raises (Global::FrameworkErrorSignal,
Global::SetValueOutOfRangeSignal);
long getMaximumCapacity ( )
raises (Global::FrameworkErrorSignal);
long getAvailableCapacity ( )
raises (Global::FrameworkErrorSignal);
long getReservedCapacity ( )
raises (Global::FrameworkErrorSignal);
boolean hasAvailableCapacity ( )
raises (Global::FrameworkErrorSignal);
}; // MaterialTrackingLocation

SEMI E102-0600 © SEMI 200026
interface Port : AbstractIF::Resource {
MachineAIG::Machine getMachine ( )
raises (Global::FrameworkErrorSignal);
}; // Port
}; // module MachineAIG
module DurablesManagement {
interface Durable : AbstractIF::Material {
void setMaterialTrackingLocation (
in MachineAIG::MaterialTrackingLocation aMaterialTrackingLocation)
raises (Global::FrameworkErrorSignal,
MachineAIG::
MaterialTrackingLocation::MaterialTrackingLocationFullSignal);
MachineAIG::MaterialTrackingLocation getMaterialTrackingLocation ( )
raises (Global::FrameworkErrorSignal);
void setUnit(
in string aUnit)
raises (Global::FrameworkErrorSignal,
MachineAIG::MaterialTrackingLocation::InvalidUnitSignal);
string getUnit( )
raises (Global::FrameworkErrorSignal);
}; // Durable
interface MaterialContainer : Durable {
void makeManualControl ( )
raises (Global::FrameworkErrorSignal,
Global::InvalidStateTransitionSignal);
void makeStored ( )
raises (Global::FrameworkErrorSignal,
Global::InvalidStateTransitionSignal);
void makeInTransit ( )
raises (Global::FrameworkErrorSignal,
Global::InvalidStateTransitionSignal);
void makeProcessing ( )
raises (Global::FrameworkErrorSignal,
Global::InvalidStateTransitionSignal);
}; // MaterialContainer
typedef sequence MaterialContainer MaterialContainerSequence;
}; // module DurablesManagement {
#ifndef _CIMFW_MATERIAL_TRANSPORT_
#define _CIMFW_MATERIAL_TRANSPORT_

SEMI E102-0600 © SEMI 200027
module MaterialTransport {
interface MaterialTransportController;
typedef sequence MaterialTransportController
MaterialTransportControllerSequence;
interface TransportJobSupervisor : AbstractIF::JobSupervisor {
typedef sequence <Global::Properties> JobSpecSequence;
exception UnsupportedDestinationTypeSignal { };
AbstractIF::JobSequence requestBatchTransportJob (
in JobSpecSequence jobSpecs,
in AbstractIF::JobRequestor aJobRequestor)
raises (Global::FrameworkErrorSignal,
AbstractIF::JobSupervisor::JobRejectedSignal);
}; // TransportJobSupervisor
interface MaterialTransportManager : FactoryOperations::ComponentManager,
TransportJobSupervisor, AbstractIF::JobRequestor {
exception MaterialTransportControllerNotRegisteredSignal { };
void registerMaterialTransportController (
in MaterialTransportController aMaterialTransportController)
raises (Global::FrameworkErrorSignal);
void unregisterMaterialTransportController (
in MaterialTransportController aMaterialTransportController)
raises (Global::FrameworkErrorSignal,
MaterialTransportControllerNotRegisteredSignal);
MaterialTransportControllerSequence allMaterialTransportControllers ( )
raises (Global::FrameworkErrorSignal);
AbstractIF::MaterialSequence allMaterial ( )
raises (Global::FrameworkErrorSignal);
AbstractIF::MaterialSequence allMaterialInTransit ( )
raises (Global::FrameworkErrorSignal);
AbstractIF::MaterialSequence allMaterialInStorage ( )
raises (Global::FrameworkErrorSignal);
}; // MaterialTransportManager
interface MaterialTransportController : TransportJobSupervisor {
AbstractIF::MaterialSequence allMaterial ( )
raises (Global::FrameworkErrorSignal);
AbstractIF::MaterialSequence allMaterialInTransit ( )
raises (Global::FrameworkErrorSignal);
AbstractIF::MaterialSequence allMaterialInStorage ( )
raises (Global::FrameworkErrorSignal);

SEMI E102-0600 © SEMI 200028
}; // MaterialTransportController
interface TransportJob : AbstractIF::Job {
exception TimeUndeterminableSignal { };
boolean canCompleteBy (
in Global::TimeStamp whenNeeded)
raises (Global::FrameworkErrorSignal,
TimeUndeterminableSignal);
Global::Duration transportTime ( )
raises (Global::FrameworkErrorSignal,
TimeUndeterminableSignal);
}; // TransportJob
interface TransportMachine : MachineAIG::Machine {
}; // TransportMachine
interface StorageMachine : MachineAIG::Machine {
const string MaterialContainerArrivedAtManualInputPortSubject =
“/MaterialTransport/StorageMachine/
MaterialContainerArrivedAtManualInputPort”;
struct MaterialContainerArrivedAtManualInputPortFilters {
Global::Property Port;
Global::Property MaterialContainer;
};
struct MaterialContainerArrivedAtManualInputPortEvent {
string eventSubject;
Global::TimeStamp eventTimeStamp;
MaterialContainerArrivedAtManualInputPortFilters eventFilterData;
Global::Properties eventNews;
StorageMachine aMachine
};
}; // StorageMachine
}; // module MaterialTransport
#endif // _CIMFW_MATERIAL_TRANSPORT_
}; // module CIMFW
NOTICE: SEMI makes no warranties or representations as to the suitability of the specification set forth herein for
any particular application.  The determination of the suitability of the specification is solely the responsibility of the
user.  Users are cautioned to refer to manufacturer’s instructions, product labels, product data sheets, and other rele-
vant literature respecting any materials mentioned herein.  These specifications are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that  compliance  with  this  specification  may  require  use  of
copyrighted material or of an invention covered by patent rights.  By publication of this specification, SEMI takes
no position respecting the validity of any patent rights or copyrights asserted in connection with any item mentioned
in this specification.  Users of this specification are expressly advised that determination of any such patent rights or
copyrights, and the risk of infringement of such rights, are entirely their own responsibility.

SEMI E102-0600 © SEMI 200029
RELATED INFORMATION 1
SCENARIOS FOR MATERIAL TRANSPORT AND STORAGE
NOTE:  This related information is not an official part of SEMI E10# and was derived from the work of the I300I/J300E AMHS
workgroup accomplished  during  development  of  the  proposed  standard.  This  related  information  is  included  with  the  Material
Transport and Storage Component specification to aid the readers in understanding the intent and use of the standard. This related
information was approved for publication by full letter ballot procedures on January 14, 2000.
R1-1  Introduction
R1-1.1    Scenario  Assumptions  —   These  scenarios  show  possible  implementations  of  the  SEMI  standard.  The
information  shown  here  is  intended  to  be  a  guide  rather  than  describe  rigid  implementation  rules.  Some  of  the
message sequences and implied functionality included in these scenarios will vary across different implementations.
R1-1.2  Scenario Configuration — There are thirteen scenarios included in this section. The first and last scenarios
show  all  interactions  at  an  individual  interface  level.  For  simplicity,  the  remaining  scenarios  show  interactions
abstracted  up  to  the  Component  level.  Background  information  related  to  the  scenarios  is  shown  in  Figure  R1-1.
Table R1-1 outlines the thirteen scenario case conditions.
Stk1
Stk2
Stk3
Stk4
Stk5
Stk6
Stk7
Stk8
Eq1Eq2
Eq3Eq4
Agt1
Agt2
Ohs1Ohs2
Bay1
Bay2
Stk   = Stocker
Eq
= Production Equipment
Agt= Automated Guided Transport
Sgr= Stocker Group
Oht= Overhead Hoist Transport
Stk9
Stk10
Sgr1
Eq5Eq6
Bay3
Oht1
Figure R1-1
Scenario System Layout Configuration

SEMI E102-0600 © SEMI 200030
Table R-1  Material Transport and Storage Scenario Definitions
CaseSourceDestinationBatch
Size
Route/ConditionComments
1Stk4Stk9
Manual
Output
Port
1
Carrier
Stk4>Ohs2>Stk9Interactions at an
individual interface level.
2Eq1  Stk71
Carrier
Eq1>Agt1>Stk2>Ohs1>Stk(Relay)>Ohs2>Stk7
Stk(Relay) priority = Stk4, Stk5, Stk6
Base Scenario: Delivery
from Production
Equipment to Stocker.
3Stk7   Eq32
Carriers
Stk7>Ohs2>Stk8>Agt2>Eq3
Eq3 batch size = 2 Carrier
Ohs2 batch size = 1 Carrier
Agt2 batch size = 2 Carrier
Base Scenario: Batch
delivery from Stocker to
Production Equipment.
4Eq1  Stk71
Carrier
Eq1>Agt1>Stk2>Ohs1>Stk (Relay)>Ohs2>Stk8
(Temp)>Stk7
Stk(Relay) priority = Stk4, Stk5, Stk6
Stk4 Status = Down
Stk7 logical partition = Full
Includes AMHS equipment
(Storage Device)
monitoring and stocker
logical partition overflow
control.
5Stk6Stk41
Carrier
Operator>Stk6Manual Carrier Input
handling.
6Stk4Stk91
Carrier
Stk4>Ohs2>Stk9 - Ohs2 Status = DownIncludes AMHS equipment
(transport device)
monitoring.
7Stk7   Eq64
Carriers
Stk7>Ohs2>Sgr1>Oht1>Eq6
Eq6 has internal buffer, batch size = 4 carriers
Ohs2 batch size = 1 carrier, Oht1 batch size = 1
carrier
Base scenario: Batch
delivery to internal buffer
equipment.
8Stk5   Eq51
Carrier
Stk5>Ohs2>Sgr1>Oht1>Eq5
Macro command is aborted with carrier on Ohs2.
Includes abort job
handling.
9Stk5   Eq51
Carrier
Stk5>Ohs2>Sgr1>Oht1>Eq5
Macro command is modified to final destination
Sgr1.
Includes modify job
handling.
10---Startup - Material Transport and Storage
Component is registered and starts up.
Base scenario: MTSC
startup.
11Stk6Stk41
Carrier
Stk6>Ohs2>Stk4 - Operator removes carrier
while on Ohs2.
Includes handling of
manual interruption of
delivery.
12Eq3Eq51
Carrier
Eq3>Agt2>Stk8>Ohs2>Sgr1>Oht1>Eq5Base scenario: tool-to-tool
delivery.
13Stk4Stk91
Carrier
Stk4>Ohs2>Stk9Interactions at an
individual interface level
(including capacity
reservation).

SEMI E102-0600 © SEMI 200031
R1-2  Scenarios
R1-2.1  Scenario One —   Interactions at the Interface Level
2: requestJob(JobType Transport, Priority 1, Deadline  time1, container aaa, DestinationMachine Stk9, DestPort Stk9/Manual)
3: returns Job Handle TrJob1
7: makeInTransit()
20: setMaterialTrackingLocation(materialTrackingLocation Ohs2)
21: DurableLocationChangedEvent
6: informJobStateChange(Job TrJob1, previousState JobQueued, newState JobExecuting)
10: Transfer (aaa, Bay_Out) (Internal Interface)
11: Transfer Command to Stk4 (src Stk4, dest st4/Bay_Out) (Stocker SEM)
12: Transfer Command Updates (Stocker SEM)
13: Transfer Command Complete (Stocker SEM)
14: Transfer complete (Internal Interface)
16: Transfer (aaa, stk4/Bay_Out, stk9/Bay_In) (Internal Interface)
17: Transfer Command to Ohs2 (src stk4/Bay_Out, dest stk9/Bay_In) (IBSEM)
18: Transfer Command Update (IBSEM)
19: Transfer Update (Internal Interface)
23: Transfer Command Complete (IBSEM)
24: Transfer Complete (Internal Interface)
25: Transfer (carrier aaa, src Bay_In, dest Man_Out) (Internal Interface)
26: Transfer Command to stk9 (src Bay/In, dest Man_Out) (Stocker SEM)
27: Transfer Command Updates (Stocker SEM)
28: Transfer Command Complete CarrierStoredAltEvent (Stocker SEM)
29: Transfer Complete CarrierStoredAlt (Internal Interface)
8: MaterialContainerStateChangedEvent
MTSC determines AMHS Route (Internal Service)
9: getUnit()
4: JobStateChangedEvent(..previousState JobUndefined, newState JobQueued)
5: JobStateChangedEvent(..previousState JobQueued, newState JobExecuting)
15: removeMaterial(MaterialContainer aaa)
22: addMaterialToTrack(MaterialContainer aaa)
1: setUnit( unitvalue)
30: getMaterialTrackingLocation("stk9MTL")
Factory
Operations
Material
Container aaa
Material
TransportManager
Job TrJob1AMHS Equipment
Controllers
MaterialTracking
Location ohs2MTL
MaterialTracking
Location stk4MTL
MaterialTracking
Location stk9MTL1
Storage
Machine stk9
Transport
Machine Ohs2
Storage
Machine stk4
Figure R1-2
Scenario Case 1

SEMI E102-0600 © SEMI 200032
31: setMaterialTrackingLocation(materialTrackingLocation stk9MTL1)
40: setMaterialTrackingLocation(materialTrackingLocation NULL)
41: DurableLocationChangedEvent
42: makeManualControl()
43: MaterialContainerStateChangedEvent
45: informJobStateChange(Job TrJob1, previousState JobExecuting, newState JobCompleted)
38: CarrierRemoved (Stocker SEM)
39: Carrier Removed (Internal Interface)
37: removeMaterial(MaterialContainer aaa)
33: removeMaterial(MaterialContainer aaa)
34: addMaterialToTrack(MaterialContainer aaa)
44: JobStateChangedEvent(..previousState JobExecuting, newState JobCompleted)
46: removeFinishedJob(Job TrJob1)
47: JobStateChangedEvent(..previousState JobCompleted, newState JobUndefined)
35: Transfer CommandResumed Event (Stocker SEM)
36: Transfer Command Complete (Stocker SEM)
32: DurableLocationChangedEvent
Factory
Operations
Material
Container aaa
Material
TransportManager
Job TrJob1AMHS Equipment
Controllers
MaterialTracking
Location ohs2MTL
MaterialTracking
Location stk4MTL
MaterialTracking
Location stk9MTL1
Storage
Machine stk9
Transport
Machine Ohs2
Storage
Machine stk4
Figure R1-3
Scenario Case 1 (continued)

SEMI E102-0600 © SEMI 200033
R1-2.2  Scenario Two —   Base Scenario for Delivery from Production Equipment to Stocker
MTSC reserves and manages AMHS Equipment Capacity(internal)
MTSC determines AMHS route(internal)
10: Transfer Command to Agt1(carrier bbb, src. eq.1, dest. Stk. 2/Bay_In)(IBSEM)
11: Transfer Command Updates from Agt1 (IBSEM)
14: Transfer Command  Complete (IBSEM)
17: Transfer Command to Stk. 2 (carrier bbb, src. Stk. 2/Bay_In, dest. Stk. 2/Bay_out)(StockerSEM)
18: Transfer Command  Updates from Stk. 2 (Stocker SEM)
19: Transfer Command  Complete (StockerSEM)
20: Transfer Command to Ohs1(carrier bbb, src. Stk. 2/Bay_Out, dest. Stk. 4/Bay_In)(IBSEM)
21: Transfer Command Updates from Ohs1 (IBSEM)
24: Transfer Command Complete (IBSEM)
7: makeInTransit()
12: setMaterialTrackingLocation( MaterialTrackingLocation Agt1)
15: setMaterialTrackingLocation( MaterialTrackingLocation Stk.2)
22: setMaterialTrackingLocation( MaterialTrackingLocation Ohs1)
25: setMaterialTrackingLocation(MaterialTrackingLocation Stk.4)
2: requestJob(Jobtype Transport, Priority 1, Deadline Time1, container bbb, SourceMachine eq. 1, SourcePort 1, DestinationMachine stk7)
3: Return Job Handle TrJob1
6: informJobStateChange(Job TrJob1, previousState JobQueued, newState JobExecuting)
13: DurableLocationChangedEvent
16: DurableLocationChangedEvent
23: DurableLocationChangedEvent
26: DurableLocationChangedEvent
8: MaterialContainerStateChangedEvent
MTSC determines relay
priortiy(internal)
4: JobStateChangedEvent(..previousState JobUndefined, newState JobQueued)
5: JobStateChangedEvent(..previousState JobQueued, newState JobExecuting)
9: getUnit()
1: setUnit(unitvalue)
MTSCAMHS Equipment
Controllers
Durable
Management
Factory
Operations
Figure R1-4
Scenario Case 2

SEMI E102-0600 © SEMI 200034
27: Transfer Command to Stk.4 (carrier bbb, src Stk.4/Bay_In, dest. Stk.4/Bay_outf) (StockerSEM)
28: Transfer Command Updates from Stk. 4 (StockerSEM)
29: Transfer Command Complete (StockerSEM)
30: Transfer Command to Ohs2 (carrier bbb, src. Stk. 4/Bay_Out, dest. Stk. 7/Bay_In)(IBSEM)
31: Transfer Command Updates from Ohs2 (IBSEM)
34: Transfer Command Complete (IBSEM)
37: Transfer Command to Stk. 7 (carrier bbb, src. Stk. 7/Bay_in, dest. shelf) (StockerSEM)
38: Transfer Command Updates from Stk. 7 (StockerSEM)
39: Transfer Command Complete(IBSEM)
32: setMaterialTrackingLocation(MaterialTrackingLocation Ohs2)
35: setMaterialTrackingLocation(MaterialTrackingLocation Stk.7)
43: informJobStateChange(Job TrJob1, previousState JobExecuting, newState JobCompleted)
33: DurableLocationChangedEvent
36: DurableLocationChangedEvent
41: MaterialContainerStateChangedEvent
40: makeStored()
42: JobStateChangedEvent(..previousState JobExecuting, newState JobCompleted)
44: removeFinishedJob(TrJob1)
45: JobStateChangedEvent(..previousState JobCompleted, NewState JobUndefined)
MTSCAMHS Equipment
Controllers
Durable
Management
Factory
Operations
Figure R1-5
Scenario Case 2 (continued)

SEMI E102-0600 © SEMI 200035
R1-2.3  Scenario Three —   Base Scenario for Batch Delivery from Stocker to Production Equipment
16: Transfer Command to stk7 (carrier aaa, src shelf, dest stk7/Bay_Out) (Stocker SEM)
2: requestBatchTransportJob(JobType Transport, Priority 1, Deadline time1, Container aaa, DestinationMachine eq3, DestinationPort Eq3/port1,
JobType Transport, Priority 1, Deadline time1, Container bbb, DestinationMachine eq3, DestinationPort Eq3/port2,
aJobRequestor factory)
3: Return Job Handles TrJob1, TrJob2
6: informJobStateChange(Job TrJob1, previousState JobQueued, newState JobExecuting)
12: informJobStateChange(Job TrJob2, previousState JobQueued, newState JobExecuting)
7: makeInTransit()
13: makeInTransit()
8: MaterialContainerStateChangedEvent
14: MaterialContainerStateChangedEvent
MTSC reserves and manages AMHS equipment capacity (Internal  Service)
MTSC determines AMHS Route (Internal Service)
17: Transfer Command Updates (Stocker SEM)
18: Transfer Command Complete (Stocker SEM)
19: Transfer Command to Ohs2 (carrier aaa, src stk7/Bay_Out, dest stk8/Bay_In) (IBSEM)
20: Transfer Command Updates (IBSEM)
21: setMaterialTrackingLocation(MaterialTrackingLocation ohs2)
23: Transfer Command Complete (IBSEM)
24: setMaterialTrackingLocation(MaterialTrackingLocation stk8)
MTSC reserves and manages AMHS equipment capacity (Internal  Service)
MTSC determines AMHS Route (Internal Service)
26: Transfer Command to stk7 (carrier bbb, src shelf, dest stk7/Bay_Out) (Stocker SEM)
27: Transfer Command Updates (Stocker SEM)
28: Transfer Command Complete (Stocker SEM)
29: Transfer Command to Ohs2 (carrier bbb, src stk7/bay_Out, dest stk8/Bay_In) (IBSEM)
30: Transfer Command Updates (IBSEM)

31: setMaterialTrackingLocation(MaterialTrackingLocation ohs2)
22: DurableLocationChangedEvent
25: DurableLocationChangedEvent
4: JobStateChangedEvent(..previousState JobUndefined, newState JobQueued)
5: JobStateChangedEvent(..previousState JobQueued, newState JobExecuting)
9: getUnit()
1: setUnit(unitvalue)
11: JobStateChangedEvent(..previousState JobQueued, newState JobExecuting)
15: getUnit()
10: JobStateChangedEvent(..previousState JobUndefined, newState JobExecuting)
Factory
Operations
Durable
Management
MTSCAMHS Equipment
Controllers
Figure R1-6
Scenario Case 3

SEMI E102-0600 © SEMI 200036
33: Transfer Command Complete (IBSEM)
34: setMaterialTrackingLocation(MaterialTrackingLocation stk8)
32: DurableLocationChangedEvent
35: DurableLocationChangedEvent
36: Transfer Command to stk8 (carrier aaa, src stk8/Bay_In, dest shelf) (Stocker SEM)
37: Transfer Command Updates (Stocker SEM)
38: Transfer Command Complete (Stocker SEM)
39: Transfer Command to stk8 (carrier bbb, src stk8/Bay_In, dest shelf) (Stocker SEM)
40: Transfer Command Updates (Stocker SEM)
41: Transfer Command Complete (Stocker SEM)
42: Transfer Command to stk8 (carrier aaa, src shelf, dest stk8/agt-port) (Stocker SEM)
43: Transfer Command Updates (Stocker SEM)
44: Transfer Command Complete (Stocker SEM)
45: Transfer Command to stk8 (carrier bbb, src shelf, dest stk8/agt-port) (Stocker SEM)
46: Transfer Command Updates (Stocker SEM)
47: Transfer Command Complete (Stocker SEM)
48: Transfer Command to agt2(carrier aaa, src stk8/agt-port, dest eq3/port1, carrier bbb, src stk8/agt-port, dest eq3/port2) (IBSEM)
49: Transfer Command Updates (IBSEM)
50: setMaterialTrackingLocation(MaterialTrackingLocation agt2)
51: DurableLocationChangedEvent
52: setMaterialTrackingLocation(aMaterialTrackingLocation agt2)
53: DurableLocationChangedEvent
54: Transfer Command Complete (IBSEM)
55: setMaterialTrackingLocation(MaterialTrackingLocation eq3)
56: DurableLocationChangedEvent
57: setMaterialTrackingLocation(MaterialTrackingLocation eq3)
58: DurableLocationChangedEvent
59: makeProcessing()
60: MaterialContainerStateChangedEvent
61: makeProcessing()
62: MaterialContainerStateChangedEvent
63: JobStateChangedEvent(..previousState JobExecuting, newState JobCompleted)
64: informJobStateChange(aJob TrJob1, previousState JobExecuting, newState JobCompleted)
Factory
Operations
Durable
Management
MTSCAMHS Equipment
Controllers
Figure R1-7
Scenario Case 3 (continued)

SEMI E102-0600 © SEMI 200037
Factory
Operations
Durable
Management
MTSCAMHS Equipment
Controllers
67: JobStateChangedEvent(..previousState JobExecuting, newState JobCompleted)
65: removeFinishedJob(TrJob1)
66: JobStateChangedEvent(..previousState JobCompleted, newState JobUndefined)
69: removeFinishedJob(TrJob2)
70: JobStateChangedEvent(..previousState JobCompleted, newState JobUndefined)
68: informJobStateChange(aJob TrJob2, previousState JobExecuting, newState JobCompleted)
Figure R1-8
Scenario Case 3 (continued)

SEMI E102-0600 © SEMI 200038
R1-2.4  Scenario 4 —  Equipment Monitoring and Logical Partition Overflow Control
MTSC determines- Stk.4 is down, use Stk. 5(priority#2)(internal)
MTSC determines Stk.7 is full, use
Stk. 8(1st alternate)(internal)
10: Transfer Command to Agt1(carrier 3232,src. eq.1/Port 1, dest. Stk. 2/Bay_In)(IBSEM)
11: Transfer Command Updates from Agt1 (IBSEM)
14: Transfer Command  Complete (IBSEM)
19: Transfer Command to Stk. 2 (carrier 3232, src. Stk. 2/Bay_In, dest. Stk. 2/Bay_out)(StockerSEM)
20: Transfer Command  Updates from Stk. 2 (Stocker SEM)
21: Transfer Command  Complete (StockerSEM)
22: Transfer Command to Ohs1(carrier 3232, src. Stk 2/Bay_Out, dest. Stk. 5/Bay_In)(IBSEM)
23: Transfer Command Updates from Ohs1 (IBSEM)
25: Transfer Command Complete (IBSEM)
17: Stocker 4 status update DOWN (StockerSEM)
12: setMaterialTrackingLocation(MaterialTrackingLocation Agt1)
15: setMaterialTrackingLocation(MaterialTrackingLocation Stk.2)
24: setMaterialTrackingLocation(MaterialTrackingLocationOhs1)
27: setMaterialTrackingLocation(MaterialTrackingLocationStk.5)
2: requestJob (JobType Transport, Priority 1, Deadline time1, container 3232, SourceMachine eq1, SourcePort 1, DestinationMachine Stk7)
6: informJobStateChange(JobType TrJob1, previousState JobQueued, newState JobExecuting)
18: MachineResourceE10StateChangedEvent()
3: Return Job Handle TrJob1
13: DurableLocationChangedEvent
16: DurableLocationChangedEvent
26: DurableLocationChangedEvent
28: DurableLocationChangedEvent
7: makeInTransit()
8: MaterialContainerStateChangedEvent
MTSC reserves and manages AMHS equipment capacity(internal)
MTSC determines AMHS route(internal)
4: JobStateChangedEvent(..previousState JobUndefined, newState JobQueued)
5: JobStateChangedEvent(..previousState JobQueued, newState JobExecuting)
9: getUnit()
1: setUnit(unitvalue)
MTSCAMHS Equipment
Controllers
Durable
Management
Factory
Operations
Figure R1-9
Scenario Case 4

SEMI E102-0600 © SEMI 200039
Stk.7 now
available.
31: Transfer Command to Stk.5( carrier 3232, src. Stk. 5/Bay_In, dest. Stk. 5/Bay_Out() (StockerSEM))
32: Transfer Command Updates from Stk. 5 (StockerSEM)
33: Transfer Command Complete (StockerSEM)
34: Transfer Command to Ohs2 (carrier 3232, src. Stk. 5 Bay/Out, dest. Stk. 8/Bay_In)(IBSEM)
35: Transfer Command Updates from Ohs2 (IBSEM)
38: Transfer Command Complete (IBSEM)
41: Transfer Command to Stk.8 (carrier 3232, src. Stk 8/Bay_In, dest. shelf) (StockerSEM)
42: Transfer Command Updates from Stk. 8 (StockerSEM)
43: Transfer Command Complete (StockerSEM)
44: Status update from Stk.7  (available capactiy) (StockerSEM)
46: Transfer Command to Stk. 8 (carrier 3232, src. Stk. 8 shelf, dest. Stk. 8 Bay_Out)  (StockerSEM)
47: Transfer Command Updates from Stk. 8 (StockerSEM)
48: Transfer Command Complete (StockerSEM)
49: Transfer Command to Ohs2 (carrier 3232, src. Stk. 8/Bay_Out, dest. Stk. 7/Bay_In) (IBSEM)
50: Tranfer Command Updates from Ohs2 (IBSEM)
36: setMaterialTrackingLocation(MaterialTrackingLocation Ohs2)
39: setMaterialTrackingLocation(MaterialTrackingLocation Stk.8)
51: setMaterialTrackingLocation(MaterialTrackingLocation Ohs2)
45: MaterialTrackingLocationNotFullEvent
37: DurableLocationChangedEvent
40: DurableLocationChangedEvent
30: MaterialTrackingLocationFullEvent
Carrier is temporarily stored in
Alternate Stk. 8 until Stk. 7
becomes available.
29: ZoneCapacityEvent(StockerSEM)
MTSCAMHS Equipment
Controllers
Durable
Management
Factory
Operations
Figure R1-10
Scenario Case 4 (continued)

SEMI E102-0600 © SEMI 200040
53: Transfer Command Complete (IBSEM)
56: Transfer Command to Stk. 7 ( carrier 3232, src. Stk. 7/Bay_In, dest. shelf)(StockerSEM)
57: Transfer Command Updates from Stk. 7 ( StockerSEM)
58: Transfer Command Complete (StockerSEM)
54: setMaterialTrackingLocation(MaterialTrackingLocation Stk.7)
59: makeStored()
62: informJobStateChange(JobType TrJob1, previousState JobExecuting, newState JobCompleted)
55: DurableLocationChangedEvent
52: DurableLocationChangedEvent
60: MaterialContainerStateChangedEvent
61: JobStateChangedEvent(..previousState JobExecuting, newState JobCompleted)
63: removeFinishedJob(Job TrJob1)
64: JobStateChangedEvent(..previousState JobCompleted, newState JobUndefined)
MTSCAMHS Equipment
Controllers
Durable
Management
Factory
Operations
Figure R1-11
Scenario Case 4 (continued)

SEMI E102-0600 © SEMI 200041
R1-2.5  Scenario Five —  Manual Carrier Input and Handling
Factory
Operations
Durable
Management
MTSCAMHS Equipment
Controllers
1: Stk6 Event Report CarrierWaitIn(carrier aaa) (Stocker SEM)
3: Transfer Command to Stk6 (carrier aaa, src Man_In, dest shelf) (Stocker SEM)
4: Transfer Command Updates (Stocker SEM)
5: setMaterialTrackingLocation( MaterialTrackingLocation stk6/manin)
6: DurableLocationChangedEvent
7: Transfer Command Completed (Stocker SEM)
9: MaterialContainerStateChangedEvent
11: requestJob(JobType TransportJob, Priority 1, Deadline time1, Container aaa, destination stk6)
15: InformJobStateChange(Job TrJob1, previousState JobQueued, newState JobExecuting)
16: getUnit()
18: MaterialContainerStateChangedEvent
20: InformJobStateChange(aJob TrJob1, previousState JobExecuting, newState JobCompleted)
12: returns Job Handle TrJob1
8: makeStored()
2: MaterialContainerArrivedAtManualInputPortEvent
Supervisor determines TransportJob is required from
MaterialContainerArrivedAtManualInputPortEvent
13: JobStateChangedEvent(..previousState JobUndefined, newState JobQueued)
14: JobStateChangedEvent(..previousState JobQueued, newState JobExecuting)
19: JobStateChangedEvent(..previousState JobExecuting, newState JobCompleted)
21: removeFinishedJob(Job TrJob1)
22: JobstateChangedEvent(..previousState JobCompleted, newState JobUndefined)
10: setUnit(unitvalue)
17: setMaterialTrackingLocation(MaterialTrackingLocation Stk. 6/MTL1)
MTSC determines
logical partition from
getUnit() - (internal)
Figure R1-12
Scenario Case 5

SEMI E102-0600 © SEMI 200042
R1-2.6  Scenario Six —  AMHS Equipment Monitoring
MTSC reserves and manages AMHS equipment capacity (Internal  Service)
MTSC determines AMHS Route, selects stk10 from sgr1. Ohs2 is down, no alternate
route is available therefore MTSC waits until Ohs2 is up.  (Internal Service)
8: MaterialContainerStateChangedEvent
20: DurableLocationChangedEvent
23: DurableLocationChangedEvent
28: MaterialContainerStateChangedEvent
2: requestJob(JobType Transport, Prioriy 1, Deadline time1, container aaa, DestinationMachine stk9)
6: informJobStateChange(Job TrJob1, previousState JobQueued, newState JobExecuting)
7: makeInTransit()
11: MachineResourceE10StateChangedEvent
13: MachineResourceE10StateChangedEvent
19: setMaterialTrackingLocation(MaterialTrackingLocation ohs2)
22: setMaterialTrackingLocation(stk9)
27: makeStored()
10: Ohs2 AlarmSet (IBSEM)
12: Ohs2 AlarmCleared (IBSEM)
14: Transfer Command to Stk4 (carrier aaa, src shelf, dest Bay_Out) (Stocker SEM)
15: Transfer Command Updates (Stocker SEM)
16: Transfer Command Complete (Stocker SEM)
17: Transfer Command to Ohs2 (carrier aaa, src stk4/Bay_Out, dest stk9/Bay_In) (IBSEM)
18: Transfer Command Updates (IBSEM)
21: Transfer Completed (IBSEM)
24: Transfer Command to stk9 (carrier aaa, src stk9/Bay_In, dest shelf) (Stocker SEM)
25: Transfer Command updates (Stocker SEM)
26: Transfer Command Complete (Stocker SEM)
3: Returns Job Handle TrJob1
4: JobStateChangedEvent(..previousState JobUndefined, newState JobQueued)
9: getUnit()
29: JobStateChangedEvent(..previousState JobExecuting, newState JobCompleted)
5: JobStateChangedEvent(..previousState JobQueued, newState JobExecuting)
1: setUnit(unitvalue)
Factory
Operations
Durable
Management
MTSCAMHS Equipment
Controllers
Figure R1-13
Scenario Case 6

SEMI E102-0600 © SEMI 200043
Factory
Operations
Durable
Management
MTSCAMHS Equipment
Controllers
30: informJobStateChange(Job TrJob1, previousState JobExecuting, newState JobCompleted)
31: removeFinishedJob(Job TrJob1)
32: JobStateChangedEvent(..previousState JobCompleted, newState JobUndefined)
Figure R1-14
Scenario Case 6 (continued)

SEMI E102-0600 © SEMI 200044
R1-2.7  Scenario 7 — Batch Delivery to Internal Buffer Equipment
3: requestBatchTransportJob(JobType TransportJob, Priority 1, Deadline time1, container aaa, DestinationMachine Eq6, JobType
TransportJob, Priority 1, Deadline time1, container bbb, DestinationMachine Eq6, JobType TransportJob, Priority 1, Deadline time1,
container ccc, DestinationMachine Eq6, JobType TransportJob, Priority 1, Deadline time1,container ddd, DestinationMachine Eq6)
7: InformJobStateChange(Job TrJob1, previousState JobQueued, newState JobExecuting)
MTSC reserves and manages AMHS
equipment capacity(internal)
MTSC determines AMHS
route(internal)
14: InformJobStateChange(Job TrJob2, previousState JobQueued, newState JobExecuting)
18: Transfer Command to Stk7 (carrier aaa, src. shelf, dest. Stk. 7/Bay_Out) (Stocker SEM)
19: Transfer Command Updates (Stocker SEM)
20: Transfer Completed (Stocker SEM)
21: Transfer Command to Stk7 (carrier bbb, src. shelf, dest. Stk. 7/ Bay_Out) (Stocker SEM)
22: Transfer Command Updates (Stocker SEM)
23: Transfer Completed (Stocker SEM)
24: Transfer Command to Ohs2 (carrier aaa, src. stk7/Bay_Out, dest. stk9/Bay_In) (IBSEM)
25: Transfer Command Updates (IBSEM)
28: Transfer Completed (IBSEM)
31: Transfer Command to Ohs2 (carrier bbb, src. stk7/Bay_Out, dest. stk9/Bay_in) (IBSEM)
32: Transfer Command Updates (IBSEM)
4: Return Job Handle TrJob1 TrJob2 TrJob3 TrJob4
8: makeInTransit()
15: makeInTransit()
16: MaterialContainerStateChangedEvent
26: setMaterialTrackingLocation(MaterialTrackingLocation Ohs2)
27: DurableLocationChangedEvent
29: setMaterialTrackingLocation(MaterialTrackingLocation Stk9)
30: DurableLocationChangedEvent
For clarity reasons only the
messages for containers aaa
and bbb are defined. The same
messages would also take
place for ccc and ddd.
5: JobStateChangedEvent(..previousState JobUndefined, newState JobQueued)
12: JobStateChangedEvent(..previousState JobUndefined, newState JobQueued)
9: MaterialContainerStateChangedEvent
6: JobStateChangedEvent(..previousState JobQueued, newState JobExecuting)
13: JobStateChangedEvent(..previousState JobQueued, newState JobExecuting)
17: getUnit()
10: getUnit()
1: setUnit(unitvalue)
2: setUnit(unitvalue)
11: getMachineType()
AMHS Equipment
Controllers
Factory
Operations
MTSCDurable
Management
Machine Object
Eq6
Figure R1-15
Scenario Case 7

SEMI E102-0600 © SEMI 200045
40: Transfer Command Completed (Stocker SEM)
41: Transfer Command to Stk9 (carrier bbb, src stk9/Bay_in, dest shelf) (Stocker SEM)
42: Transfer Command Updates (Stocker SEM)
43: Transfer Command Completed (Stocker SEM)
46: Transfer Command to stk9 (carrier aaa, src. shelf, dest stk9/Bay_Out) (Stocker SEM)
47: Transfer Command updates (Stocker SEM)
48: Transfer Command Complete (Stocker SEM)
49: Transfer Command to Oht1 (aaa, stk9/Bay_Out, eq6/port1) (IBSEM)
50: Transfer Command Updates (IBSEM)
53: Transfer Command Complete (IBSEM)
60: InformJobStateChange(Job TrJob1, previousState JobExecuting, newState JobCompleted)
35: Transfer Completed (IBSEM)
38: Transfer Command to Stk9 (carrier aaa, src stk9/Bay_in, dest shelf)(Stocker SEM)
39: Transfer Command Updates (Stocker SEM)
33: setMaterialTrackingLocation(MaterialTrackingLocation Ohs2)
34: DurableLocationChangedEvent
36: setMaterialTrackingLocation(MaterialTrackingLocation Stk9)
37: DurableLocationChangedEvent
51: setMaterialTrackingLocation(MaterialTrackingLocation Oht1)
52: DurableLocationChangedEvent
55: setMaterialTrackingLocation(MaterialTrackingLocation Eq6)
57: makeProcessing()
58: MaterialContainerStateChangedEvent
56: DurableLocationChangedEvent
Once all carriers of batch have
reached the stocker, the MTSC
will begin reserving ports for
delivery to the
Equipment (implementation specific).
As soon as either aaa or bbb has
been deliverd to the equip., the
reserve and following messages
would happen for ccc and then
ddd.
44: reservePortForTransferTo(MaterialContainer aaa, Port 1)
45: reservePortForTransferTo(MaterialContainer bbb, Port 2)
59: JobStateChangedEvent(..previousState JobExecuting, newState JobCompleted)
61: removeFinishedJob(Job TrJob1)
62: JobStateChangedEvent(..previousState JobCompleted, newState JobUndefined)
54: transferComplete(MaterialContainer aaa, Port 1)
AMHS Equipment
Controllers
Factory
Operations
MTSCDurable
Management
Machine Object
Eq6
Figure R1-16
Scenario Case 7 (continued)

SEMI E102-0600 © SEMI 200046
AMHS Equipment
Controllers
Factory
Operations
MTSCDurable
Management
Machine Object
Eq6
63: Transfer Command to stk9 (carrier bbb, src. shelf, dest stk9/Bay_Out) (Stocker SEM)
64: Transfer Command Updates (Stocker SEM)
65: Transfer Command Complete (Stocker SEM)
77: InformJobStateChange(Job TrJob2, previousState JobExecuting, newState JobCompleted)
66: Transfer Command to Oht1 (bbb, stk9/Bay_Out, eq6/port2) (IBSEM)
67: Transfer Command Updates (IBSEM)
68: setMaterialTrackingLocation(MaterialTrackingLocation Oht1)
69: DurableLocationChangedEvent
70: Transfer Command Complete (IBSEM)
72: setMaterialTrackingLocation(MaterialTrackingLocation Eq6)
73: DurableLocationChangedEvent
74: makeProcessing
75: MaterialContainerStateChangedEvent
76: JobStateChangedEvent(..previousState JobExecuting, newState JobCompleted)
78: removeFinishedJob(Job TrJob2)
79: JobStateChangedEvent(..previousState JobCompleted, newState JobUndefined)
71: transferComplete(MaterialContainer bbb, Port 1)
Figure R1-17
Scenario Case 7 (continued)

SEMI E102-0600 © SEMI 200047
R1-2.8  Scenario Eight —  Abort Job Handling
Factory
Operations
Durable
Management
MTSCAMHS Equipment
Controllers
MTSC reserves and manages AMHS equipment capacity (Internal  Service)
MTSC determines AMHS Route, selects stk10 from sgr1  (Internal Service)
Preferable for Supervisor to makestopped() job. In
this case the carrier remains on a port.
8: MaterialContainerStateChangedEvent
16: DurableLocationChangedEvent
2: requestJob(JobType Transport, Priority 1, Deadline time1, container aaa, DestinationMachine Eq5, DestinationPort Eq5/port1)
6: informJobStateChange(Job TrJob1, previousState JobQueued, newState JobExecuting)
7: makeInTransit()
15: setMaterialTrackingLocation(MaterialTrackingLocation ohs2)
17: makeAborted()
10: Transfer Command to Stk5 (carrier aaa, dest stk5/Bay_Out) (Stocker SEM)
11: Transfer Command Updates (Stocker SEM)
12: Transfer Command Completed (Stocker SEM)
13: Transfer Command to ohs2 (src stk5/Bay_Out, dest stk10/Bay_In) (IBSEM)
14: Transfer Command Updates (IBSEM)
19: TransferAbortInitiated (IBSEM)
20: TransferAbortCompleted (IBSEM)
18: JobStateChangedEvent(Job TrJob1, previousState JobExecuting, newState JobAborting)
22: informJobStateChange(Job TrJob1, previousState JobAborting, newState JobAborted)
3: Returns Job Handle TrJob1
1: setUnit(unitvalue)
4: JobStateChangedEvent(..PreviousState JobUndefined, NewState JobQueued)
5: JobStateChangedEvent(..PreviousState JobQueued, NewStateJobExecuting)
9: getUnit()
21: JobStateChangedEvent(..previousState JobExecuting, newState JobAborted)
23: removeFinishedJob()
24: JobStateChangedEvent(..previousState JobAborted, newStateJobUndefined)
Figure R1-18
Scenario Case 8

SEMI E102-0600 © SEMI 200048
R1-2.9  Scenario Nine —  Modify Job Handling
MTSC reserves and manages AMHS equipment capacity (Internal  Service)
MTSC determines AMHS Route, selects stk10 from sgr1  (Internal Service)
8: MaterialContainerStateChangedEvent
16: DurableLocationChangedEvent
2: requestJob(JobType Transport, Priority 1, Deadline time1, container aaa, DestinationMachine Eq5, DestinationPort Eq5/port1)
6: informJobStateChange(Job TrJob1, previousState JobQueued, newState JobExecuting)
7: makeInTransit()
15: setMaterialTrackingLocation(MaterialTrackingLocation ohs2)
17: makeStopped()
10: Transfer Command to Stk5 (carrier aaa, src shelf, dest stk5/Bay_Out) (Stocker SEM)
11: Transfer Command Updates (Stocker SEM)
12: Transfer Command Completed (Stocker SEM)
13: Transfer Command to ohs2 (carrier aaa, src stk5/Bay_Out, dest stk10/Bay_In) (IBSEM)
14: Transfer Command Updates (IBSEM)
18: JobStateChangedEvent(.. previousState Executing, newState Stopping)
19: Transfer Command Completed (IBSEM)
22: Transfer Command to stk10 (carrier aaa, src stk10/Bay_In, dest shelf) (Stocker SEM)
20: setMaterialTrackingLocation(MaterialTrackingLocation stk10)
21: DurableLocationChangedEvent
23: Transfer Command Updates (Stocker SEM)
24: Transfer Command Completed (Stocker SEM)
28: informJobStateChange(Job TrJob1, previousState JobStopping, newState JobStopped)
31: requestJob(JobType Transport, Priority 1, Deadline time1, container aaa, DestinationArea Sgr1)
25: makeStored()
26: MaterialContainerStateChangedEvent
3: Returns Job Handle TrJob1
Supervisor modifies destination by stopping current
job and requesting new one.
1: setUnit(unitvalue)
4: JobStateChangedEvent(..prevousState JobUndefined, newState JobQueued)
5: JobStateChangedEvent(..prevousState JobQueued, newState JobExecuting)
9: getUnit()
27: JobStateChangedEvent(.. previousState JobStopping, newState JobStopped)
29: removeFinishedJob()
30: JobStateChangedEvent(.. previousState JobStopped, newState JobUndefined)
Factory
Operations
Durable
Management
MTSCAMHS Equipment
Controllers
Figure R1-19
Scenario Case 9

SEMI E102-0600 © SEMI 200049
Factory
Operations
Durable
Management
MTSCAMHS Equipment
Controllers
35: informJobStateChange(Job TrJob2, previousState JobQueued, newState JobExecuting)
37: informJobStateChange(Job TrJob2, previousState JobExecuting, newState JobCompleted)
32: Returns Job Handle TrJob2
33: JobStateChangedEvent(..previousState JobUndefined, newState JobQueued)
34: JobStateChangedEvent(..previousState JobQueued, newState JobExecuting)
36: getUnit()
38: removeFinishedJob()
39: JobStateChangedEvent(.. previousState JobStopped, newState JobUndefined)
Figure R1-20
Scenario Case 9 (continued)

SEMI E102-0600 © SEMI 200050
R1-2.10  Scenario Ten — Material Transport and Storage Component Startup
MESFactoryMachine
Register
Material
TransportManager
Storage
Machine stkA
Transport
Machine ohs1
AMHS Equipment
Controllers
Material Tracking
Location stkA-MTL1
Port stkA/Man
_Out
Area area1
1: makeRegistered( factory )
3: makeStartingUp()
13: addMachine( stkA )
17: addMachine( Ohs1 )
14: MachineListChangedEvent
18: MachineListChangedEvent
5: Internal Service to create StorageMachine Instance
11: Internal Service to create TransportMachine Instance
10: Start-Up Sequence (Stocker SEM)
12: Start-Up Sequence (IBSEM)
15: addMachine( stkA )
16: AreaConfigurationChangedEvent( MachinesChanged, Area area1)
20: informComponentManagerIsOperating ( MTM )
2: ComponentManagerStateChangedEvent(  PreviousState NOT REGISTERED, NewState  REGISTERED, aComponentManager MTM )
4: ComponentManagerStateChangedEvent(PreviousState NULL , NewState  STARTING UP, aComponentManager MTM )
19: ComponentManagerStateChangedEvent{ PreviousState STARTING UP, NewState AVAILABLE, aComponentManager MTM }
6: Internal Service to create Port instance
8: setMaterialTrackingLocation( aMaterialTrackingLocation stkA-MTL1, aUnitToTrack Unit1)
7: Internal Service to create MaterialTrackingLocation Instance
9: setUnit (Unit1)
Figure R1-21
Scenario Case 10

SEMI E102-0600 © SEMI 200051
R1-2.11  Scenario Eleven —  Manual Interruption of Delivery
2: requestJob(JobType TransportJob, Priority 1, Deadline time1, Container aaa, destination stk4)
6: InformJobStateChange(Job TrJob1, previousState JobQueued, newState JobExecuting)
7: makeInTransit()
8: MaterialContainerStateChangedEvent
MTSC reserves and manages AMHS equipment capacity (Internal  Service)
MTSC determines AMHS Route (Internal Service)
10: Transfer Command to stk6 (carrier aaa, src shelf, dest Bay_Out) (Stocker SEM)
11: Transfer Command Updates (Stocker SEM)
12: Transfer Command Complete (Stocker SEM)
13: Transfer Command to Ohs2 (carrier aaa, source stk6/Bay_Out, destination stk4/Bay_In) (IBSEM)
15: setMaterialTrackingLocation( MaterialTrackingLocation ohs2)
14: Transfer Command Updates (IBSEM)
16: DurableLocationChangedEvent
3: returns Job Handle TrJob1
19: Event Report Send TransferPaused (IBSEM)
21: EventReportSend AlarmSet (IBSEM)
23: Event Report Send TransferCompleted, ResultCode=Error, TransferInfo lists carrier as missing (IBSEM)
Human Intervention required to clear error.
Human intervention to remove carrier from
vehicle. Results in Transport System Error
17: Alarm Report Send AlarmSet (IBSEM)
25: Alarm Report Send Alarm Cleared (IBSEM)
27: Event Report Send AlarmCleared (IBSEM)
18: Acknowledge (IBSEM)
20: Acknowledge (IBSEM)
22: Acknowledge (IBSEM)
24: Acknowledge (IBSEM)
26: Acknowledge (IBSEM)
28: Acknowledge (IBSEM)
29: setMaterialTrackingLocation(MaterialTrackingLocation NULL)
1: setUnit(unitvalue)
4: JobStateChangedEvent(..previousState JobUndefined, newState JobQueued)
5: JobStateChangedEvent(..previousState JobQueued, newState JobExecuting)
9: getUnit()
Factory
Operations
Durable
Management
MTSCAMHS Equipment
Controllers
Figure R1-22
Scenario Case 11

SEMI E102-0600 © SEMI 200052
Factory
Operations
Durable
Management
MTSCAMHS Equipment
Controllers
30: DurableLocationChangedEvent
31: makeManualControl()
32: MaterialLocationStateChangedEvent
35: informJobStateChange(Job TrJob1, previousState JobExecuting, newState JobAborted)
33: JobStateChangedEvent(..previousState JobExecuting, newState JobAborting)
36: removeFinishedJob()
37: JobStateChangedEvent(..previousState JobAborted, newState JobUndefined)
Material Transport Manager
aborts the Job.
34: JobStateChangedEvent(..previousState JobAborting, newState JobAborted)
Figure R1-23
Scenario Case 11 (continued)

SEMI E102-0600 © SEMI 200053
R1-2.12  Scenario 12 —  Tool to Tool Delivery
MTSCAMHS Equipment
Controllers
Durable
Management
Factory
Operations
MTSC reserves and manages AMHS Equipment Capactiy(internal)
MTSC determines AMHS route(internal)
10: Transfer Command to Agt1(carrier bbb, src. eq.3 Port 1, dest. Stk. 8/Bay_In)(IBSEM)
11: Transfer Command Updates from Agt2 (IBSEM)
14: Transfer Command  Complete (IBSEM)
17: Transfer Command to Stk. 2 (carrier bbb, src. Stk. 8/Bay_In, dest. Stk.8 Bay_Out)(StockerSEM)
18: Transfer Command  Updates from Stk. 8 (Stocker SEM)
19: Transfer Command  Complete (StockerSEM)
20: Transfer Command to Ohs2(carrier bbb, src. Stk. 8/Bay_Out, dest. Stk. 9/Bay_In)(IBSEM)
21: Transfer Command Updates from Ohs2 (IBSEM)
24: Transfer Command Complete (IBSEM)
27: Transfer Command to Stk.4 (carrier bbb, src Stk.9/Bay_In, dest. Stk. 9/Bay_Out) (StockerSEM)
28: Transfer Command Updates from Stk. 9 (StockerSEM)
7: makeInTransit()
12: setMaterialTrackingLocation( MaterialTrackingLocation Agt2)
15: setMaterialTrackingLocation( MaterialTrackingLocation Stk.8)
22: setMaterialTrackingLocation( MaterialTrackingLocation Ohs2)
25: setMaterialTrackingLocation(MaterialTrackingLocation Stk.9)
2: requestJob(Jobtype Transport, Priority 1, Deadline time1, container bbb, SourceMachine eq. 3, SourcePort 1, DestinationMachine eq. 5, Destination Port 1)
3: Return Job Handle TrJob1
6: informJobStateChange(Job TrJob1, previousState JobQueued, newState JobExecuting)
13: DurableLocationChangedEvent
16: DurableLocationChangedEvent
23: DurableLocationChangedEvent
26: DurableLocationChangedEvent
8: MaterialLocationStateChangedEvent
MTSC determines relay
priorty(internal)
1: setUnit(unitbvalue)
4: JobStateChangedEvent(..previousState JobUndefined, newState JobQueued)
5: JobStateChangedEvent(..previousState JobQueued, newState JobExecuting)
9: getUnit()
Figure R1-24
Scenario Case 12

SEMI E102-0600 © SEMI 200054
MTSCAMHS Equipment
Controllers
Durable
Management
Factory
Operations
29: Transfer Command Complete (StockerSEM)
30: Transfer Command to Oht1 (carrier bbb, src. Stk. 9/Bay_Out, dest. Eq5 Port 1)(IBSEM)
31: Transfer Command Updates from Oht1 (IBSEM)
34: Transfer Command Complete (IBSEM)
32: setMaterialTrackingLocation(MaterialTrackingLocation Oht1)
35: setMaterialTrackingLocation(MaterialTrackingLocation Eq5)
40: informJobStateChange(Job TrJob1, previousState JobExecuting, newState JobCompleted)
33: DurableLocationChangedEvent
36: DurableLocationChangedEvent
38: MaterialLocationStateChangedEvent
37: makeProcessing()
39: JobStateChangedEvent(..previousState JobExecuting, newState JobCompleted)
41: removeFinishedJob()
42: JobStateChangedEvent(..previousState JobExecuting, newState JobUndefined)
Figure R1-25
Scenario Case 12 (continued)

SEMI E102-0600 © SEMI 200055
R1-2.13  Scenario 13 —  Interactions at an Individual Interface Level (including capacity reservation)
2: requestJob(JobType Transport, Priority 1, Deadline  time1, container aaa, DestinationMachine stk9)
3: returns Job Handle TrJob1
7: makeInTransit()
22: setMaterialTrackingLocation(materialTrackingLocation Ohs2)
23: DurableLocationChangedEvent
27: setMaterialTrackingLocation(materialTrackingLocation stk9MTL1)
6: informJobStateChange(Job TrJob1, previousState JobQueued, newState JobExecuting)
12: Transfer (aaa, Bay_Out) (Internal Interface)
13: Transfer Command to Stk4 (src Stk4, dest st4/Bay_Out) (Stocker SEM)
14: Transfer Command Updates (Stocker SEM)
15: Transfer Command Complete (Stocker SEM)
16: Transfer complete (Internal Interface)
18: Transfer (aaa, stk4/Bay_Out, stk9/Bay_In) (Internal Interface)
19: Transfer Command to Ohs2 (src stk4/Bay_Out, dest stk9/Bay_In) (IBSEM)
20: Transfer Command Update (IBSEM)
21: Transfer Update (Internal Interface)
25: Transfer Command Complete (IBSEM)
26: Transfer Complete (Internal Interface)
29: Transfer (carrier aaa, src Bay_In, dest shelf) (Internal Interface)
30: Transfer Command to stk9 (src Bay/In, dest shelf) (Stocker SEM)
31: Transfer Command Updates (Stocker SEM)
8: MaterialContainerStateChangedEvent
MTSC determines AMHS Route (Internal Service)
9: getUnit()
4: JobStateChangedEvent(..previousState JobUndefined, newState JobQueued)
5: JobStateChangedEvent(..previousState JobQueued, NewState JobExecuting)
17: removeMaterial(MaterialContainer aaa)
24: addMaterialToTrack(MaterialContainer aaa)
1: setUnit( unitvalue)
10: getMaterialTrackingLocation(unitvalue)
11: reserveCapacity(MaterialContainer aaa)
28: DurableLocationChangedEvent
Factory
Operations
Material
Container aaa
Material
TransportManager
Job TrJob1AMHS Equipment
Controllers
MaterialTracking
Location ohs2MTL
MaterialTracking
Location stk4MTL
MaterialTracking
Location stk9MTL1
Storage
Machine stk9
Transport
Machine Ohs2
Storage
Machine stk4
Figure R1-26
Scenario Case 13

SEMI E102-0600 © SEMI 200056
Factory
Operations
Material
Container aaa
Material
TransportManager
Job TrJob1AMHS Equipment
Controllers
MaterialTracking
Location ohs2MTL
MaterialTracking
Location stk4MTL
MaterialTracking
Location stk9MTL1
Storage
Machine stk9
Transport
Machine Ohs2
Storage
Machine stk4
36: makeInTransit()
37: MaterialContainerStateChangedEvent
39: informJobStateChange(Job TrJob1, previousState JobExecuting, newState JobCompleted)
34: removeMaterial(MaterialContainer aaa)
35: addMaterialToTrack(MaterialContainer aaa)
38: JobStateChangedEvent(..previousState JobExecuting, newState JobCompleted)
40: removeFinishedJob(Job TrJob1)
41: JobStateChangedEvent(..previousState JobCompleted, newState JobUndefined)
32: Transfer Command Complete (Stocker SEM)
33: Transfer Command Complete (Internal Interface)
Figure R1-27
Scenario Case 13 (continued)

SEMI E102-0600 © SEMI 200057
RELATED INFORMATION 2
LOGICAL PARTITION STORAGE
NOTE:  This related information is not an official part of SEMI E10# and was derived from the work of the I300I/J300E AMHS
workgroup accomplished  during  development  of  the  proposed  standard.  This  related  information  is  included  with  the  Material
Transport and Storage Component specification to aid the readers in understanding the intent and use of the standard. This related
information was approved for publication by full letter ballot procedures on January 14, 2000.
R2-1    The  concept  of  Stocker  storage  via  logical  partitions  has  been  implemented  through  the  use  of  the
MaterialTrackingLocation  concept  and  interfaces.    In  the  example  below,  the  correlation  between  Durables  and
MaterialTrackingLocations are each object’s unit attribute.  First, the Factory Supervisor sets the Durable unit to a
particular  value  based  on  user  specifications.    The  MTSC  then  maps  the  Durable  Unit  to  the  appropriate
MaterialTrackingLocation  unit  for  the  destination  Storage  Machine  in  order  to  determine  the  appropriate  logical
partition  for  that  particular  durable.    It  is  not  required  that  the  Durable  unit  and  MaterialTrackingLocation  unit  be
identical  in  order  for  a  mapping  to  occur,  the  MTSC  may  implement  mapping  logic  in  order  to  obtain  various
relationships between Durable units and MaterialTrackingLocation units.
Factory Supervisor
Factory Supervisor determines
the “Parameter ” based on the
rules.
Factory Supervisor writes the
“Unitvalue ” using “setUnit ”
for the carrier.
MTSC
MTSC maps durable unit to
machine MTL unit.
Photo
Dummy
Empty
Durable UnitsMachine MTL Units
Product
Flow
Type of Carrier
Durable unit to
Machine  MTL
unit mapping
Conditions
MTM obtains  “Durable Units”  using
“getUnit ” from Durable interface.
L/P-1
L/P-2
L/P-3
L/P-4
L/P-5
L/P-6
L/P-7
MTM obtains “Machine MTL Units” using
“getUnit” from Machine MTL interface.
Figure R2-1
Storage in Logical Partitions
NOTICE: SEMI makes no warranties or representations as to the suitability of the specification set forth herein for
any particular application.  The determination of the suitability of the specification is solely the responsibility of the
user.  Users are cautioned to refer to manufacturer’s instructions, product labels, product data sheets, and other rele-
vant literature respecting any materials mentioned herein.  These specifications are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that  compliance  with  this  specification  may  require  use  of
copyrighted material or of an invention covered by patent rights.  By publication of this specification, SEMI takes
no position respecting the validity of any patent rights or copyrights asserted in connection with any item mentioned
in this specification.  Users of this specification are expressly advised that determination of any such patent rights or
copyrights, and the risk of infringement of such rights, are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI E105-0701 © SEMI 2000, 20011
SEMI E105-0701
PROVISIONAL SPECIFICATION FOR CIM FRAMEWORK SCHEDULING
COMPONENT
This specification was technically approved by the Global Information & Control Committee and is the direct
responsibility  of  the  North  American  Information  &  Control  Committee.  Current  edition  approved  by  the
Japanese  Regional  Standards  Committee  on  February  1,  2001.    Initially  available  at  www.semi.org  April
2001; to be published July 2001. Originally published October 2000.
1  Purpose
1. 1    The   Scheduling   Component   su pports   Factory
Operations, Material Transport and Storage, Production
Machine,  and  Equipment  Tracking  and  Maintenance
components  by  ordering,  in  time,  jobs  that  process
material  on  equipment,  move  material,  and  maintain
equipment.  The  scheduler  uses  knowledge  of  product
demand,  equipment  and  material  state,  process  flows,
throughput     bottlenecks,     operational     policy     and
constraints,  and  other  information  to  recommend  jobs
that  maximize  effective  utilization  of  factory  resources
to satisfy product demand and planned objectives.
1. 2    Increased   control   over   operatio ns   requires   an
active   Scheduling   Component   that   can   respond   to
factory  events  and  changes  in  state  and  dynamically
adjust  the  schedules  for  material  processing,  material
transport  and  equipment  maintenance.  The  Scheduling
Component  can  react  to  inventory  levels  of  material  in
the  factory  to  adjust  priorities  to  minimize  queue  sizes
and  ensure  that  use  of  bottleneck  equipment  is  opti-
mized to keep WIP inventory levels at desired levels.
1. 3   The  Scheduling  Component  ca n  minimize  turn
around  time  (TAT)  by  coordinating  material  transport
(for  substrates  and  durables)  with  processing  to  reduce
equipment  idle  time.  The  Scheduling  Component  can
sequence  activities  to  minimize  setup  time.  It  can  also
respond   to   scheduled   and   unscheduled   equipment
down-time  to  minimize  impact  on  turn  around  time.  In
addition  to  minimizing  overall  TAT,  it  can  react  to  the
priorities  for  urgent  lots  to  move  them  through  the
process   flow   in   the   minimum   possible   time   while
adjusting  the  schedules  of  lower-priority  lots  that  are
impacted.
2  Scope
2. 1    The   primary   run-time   responsi bilities   of   the
Scheduling  Component  are  to  monitor  resource  and
material  state  and  apply  scheduling  and  dispatching
decision   mechanisms   to   identify   the   next   activity
(dispatching)  or  sequence  of  activities  (scheduling)  for
factory resources. The Scheduling Component includes
an    interface    that    supports    both    scheduling    and
dispatching.    Figure    1    illustrates    the    interactions
between    the    Scheduling    Component    and    other
components  of  the  CIM  Framework.  This  illustration
does not reflect all of the many inputs to the Scheduling
Component  that  are  required  to  provide  it  with  the
current status of the factory resources.
2. 2   As  described  in  this  standard,   the  Scheduling
Component   produces   activity   option   and   activity
forecast  lists.    These  lists  are  produced  by  combining
the  factory  model  and  status  information  from  other
components with scheduling policies in the Scheduling
Component.    For  example,  the  Scheduling  Component
combines  data  from  the  Specification  Component  on
how   products   are   made   with   status   data   from   the
Equipment  and  Product  Management  Components  to
give activity options for a machine.
2. 3    The   Factory   Operations   Comp onent   uses   the
Scheduling Component services to orchestrate the man-
agement of machines and production of lots.  For exam-
ple, when a tool becomes available, Factory Operations
uses  the  Activity  Options  list  to  select  the  next  lot  to
process  on  the  tool.    Factory  Operations  then  works
with other components to execute the production job for
the  lot  on  the  machine.  Executing  the  production  job
changes  the  state  of  lot  and  tool  in  other  components.
These  status  changes  are  then  used  by  the  Scheduling
Component when it produces new activity lists.
2. 4     The    Scheduling    Manager    supp orts    Factory
Operations  by  providing  an  answer  to  questions  like,
“What   is   next   for   this   material   or   resource?”   The
answer may be based on evaluation of current or future
constraints  and  objectives.  Although  the  dispatcher's
output takes the form of a decision for the next activity
for  the  target  resource,  the  interface  may  also  support
manual  scenarios  by  providing  a  list  of  prioritized
activities from which the decision is selected.
2. 5   The  Scheduling  Manager  inter face  also  provides
forecasts of future activities projected to occur after the
next  activity.  By  simulating  anticipated  future  activity
sequencing  and  execution  timing  the  scheduler  can
generate forecasts that predict future responses from the
dispatcher for subsequent requests.  These forecasts are
subject to change as factory conditions change, but they
offer   the   best   current   projection   of   future   activity
decisions.
