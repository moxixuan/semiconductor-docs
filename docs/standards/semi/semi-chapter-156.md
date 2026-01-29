---
title: "T12-0305 - © SEMI 2004, 2005..."
description: "SEMI标准文档"
sidebar_label: "T12-0305 - © SEMI 2004, 2005..."
sidebar_position: 1560
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-156.pdf'
  chapter: 156
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/156.pdf"
  pdfSize="0.43MB"
  title="T12-0305 - © SEMI 2004, 2005..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI T12-0305 © SEMI 2004, 2005 30
10. 2.6.6  showHistory  —  This  service  is  used  to  inquire  history  in  HistoryRecord.    Following  table  defines  its
parameters.
Table 60
Parameter                         Req/Ind                         Rsp/Conf                         Description
Items                                                             C                                                             -                                                             Expected                                                             Items.
Restriction                                                    C                                                    -                                                    Restriction for items.
History - M Requested attachment’s history.
ServiceStatus - M Result of service request.

10. 2.6.7  destruct  —  This  service  is  used  to  remove  HistoryRecord  object.    This  service  is  typically  used  when  an
attachment is removed from inventory.  Following table defines its parameters.
Table 61
Parameter                         Req/Ind                         Rsp/Conf                         Description
State                                                              -                                                              M                                                              Immediate                                                              state                                                              just before removed.
ServiceStatus - M Result of service request.

10. 2.6.8  Parameter List — Above services use following parameters.
Table 62
Parameter                                                              Definition                                                              Form
DataName Name of data value. Text.
DataValue Value of data. Value.
EventCaption Caption of an event for indexing information including
identification, code and timestamp.
Text.
History History of an Attachment.  It’s not necessary to have entire history
depending on the other service parameters: it may be summary,
limited or simple record.
Text.
Item Category of a historic record: event, exception, fluctuating values,
critical/affective process condition, cycles and etc.
Text.
Restriction Screening parameter for history items: e.g., all, latest, summary,
time=0715/300903-1655/311203, time=-100.
Text.
ServiceStatus Result of service to show successful or reason of failure. Text.
State State of HistoryBuffer object. Text.

10. 2.7  Inventory — Following tables define services of Inventory class.
10. 2.7.1  Service List — Inventory class has following services.
Table 63
Operation                                                                       Description                                                                       Type                                                                       Reqd
Update Updates Inventory information for an Attachment. R Y
Install Adds an Attachment to Inventory. R Y
uninstall Removes an Attachment from Inventory. R Y
showNamespace Inquires subject equipment group to serve. R N
changeNamespace               Changes subject equipment group to serve. R N
ListUp List up attachments registered in Inventory. R Y
showData Inquires information of an Attachment in Inventory. R Y



SEMI T12-0305 © SEMI 2004, 2005 31
10. 2.7.2  update  —  This  service  is  used  to  updates  information  for  an  Attachment  registered  in  Inventory.
Following table defines its parameters.
Table 64
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentId                                               M                                               -                                               Identification                                               of                                               Attachment.
Operation M - Operation done on an Attachment.
Location C - Source, destination or both.
ServiceStatus - M Result of service request.

10. 2.7.3  install  —  This  service  is  used  to  register  a  brand  new  or  used  Attachment  for  adding  on  Inventory.
Following table defines its parameters.
Table 65
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentId                                               M                                               -                                               Identification                                               of                                               Attachment.
AttachmentName M - Operation done on an Attachment.
AttachmentType                                          M                                          -                                          Operation done on an Attachment.
Location C - Logical partition in Inventory: option.
History C - Known history including manufacturer and date.
Handle - C A kind of logical ID given locally on registration: option.
ServiceStatus - M Result of service request.

10. 2.7.4  uninstall  —  This  service  is  used  to  unregister  an  Attachment  for  removing  from  Inventory.    Following
table defines its parameters.
Table 66
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentId                                               M                                               -                                               Identification                                               of                                               Attachment.
ServiceStatus - M Result of service request.

10. 2.7.5  showNamespace  —  This  service  is  used  to  inquire  target  equipment  group.    Following  table  defines  its
parameters.
Table 67
Parameter                         Req/Ind                         Rsp/Conf                         Description
GroupName - M Target group name.
ServiceStatus - M Result of service request.

10. 2.7.6  changeNamespace — This service is used to change target equipment group.  Following table defines its
parameters.
Table 68
Parameter                         Req/Ind                         Rsp/Conf                         Description
GroupName M - New group name.
ServiceStatus - M Result of service request.



SEMI T12-0305 © SEMI 2004, 2005 32
10. 2.7.7  listUp — This service is used to inquire registered Attachments in Inventory.  Following table defines its
parameters.
Table 69
Parameter                         Req/Ind                         Rsp/Conf                         Description
Restriction                                                    C                                                    -                                                    Condition                                                    for expected Attachments.
AttachmentId - M Attachment identification (may be list).
ServiceStatus - M Result of service request.

10. 2.7.8  showData  —  This  service  is  used  to  inquire  information  of  a  registered  Attachment.    Following  table
defines its parameters.
Table 70
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentId                                               M                                               -                                               Identification                                               of                                               Attachment.
AttachmentInfo - M Information of specified Attachment including location.
ServiceStatus - M Result of service request.

10. 2.7.9  Parameter List — Above services use following parameters.
Table 71
Parameter                                                              Definition                                                              Form
AttachmentId                        Identification                        of                        Attachment: usually equivalent to physical ID
maybe tagged on physical attachment.
Text.
AttachmentInfo Information of an Attachment as it is: location and such attributes as
name and type.  It is given by name-value pairs, concatenated with
equal sign or colon and separated by semicolon: additional
parenthesis and braces may be allowed for optional readability.
Text.
AttachmentName                 Human                 friendly                 name                 assigned on an Attachment.                               Text.
AttachmentType Type of Attachment: at least jig or implement, and based on
attachments’ compatibility.  Further classification is dependent on
manufacturer, attachment, equipment or strategy of its user.
Enumerated.
GroupName Target equipment group name for Inventory.  This parameter is
useful if there are several pieces of equipment with equivalent
fundamental function but attachment management is separated by
group.
Text.
Handle A kind of logical ID given locally on registration or creation of
Attachment object.
Text.
History Historic record of Attachment. Text.
Location Public location of an Attachment, given by name and identification
separated by a colon.  Identification is optional but required if name
is not unique for Inventory.
Text.
Operation Updating operation name: one of following.
Release: for leaving stock yard for equipment,
Storage: for reaching stock yard,
Deploy: for arriving by equipment,
Withdraw: leaving equipment for stock yard, and
Forward: for transferring for the other equipment.
Enumerated.
Restriction Screening parameter for history items: e.g., all, type=ttttt,
name=nnn.
Text.
ServiceStatus Result of service to show successful or reason of failure. Text.



SEMI T12-0305 © SEMI 2004, 2005 33
10. 2.8  Invoice — Following tables defines services of Invoice class.
10. 2.8.1  Service List — Invoice class has following services.
Table 72
Operation                                                                       Description                                                                       Type                                                                       Reqd
ShowId Inquires identification of Invoice. R Y
showAttachments Inquires Attachment identifications on this Invoice. R Y
showTypes                          Inquires                          Attachment Types respective above. R Y
showLoadports Inquires expected load ports to load listed Attachments. R N
showHistory Inquires history of each Attachment listed above. R Y

10. 2.8.2  showId — This service is used to inquire Invoice’s ID.  Following table defines its parameters.
Table 73
Parameter                         Req/Ind                         Rsp/Conf                         Description
InvoiceId                                                       -                                                       M                                                       Identification                                                       of                                                       Invoice.
ServiceStatus - M Result of service request.

10. 2.8.3  showAttachments  —  This  service  is  used  to  inquire  a  list  of Attachment identification written in Invoice.
Following table defines its parameters.
Table 74
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentId                                                -                                                M                                                Identification                                                of Attachment (maybe list).
ServiceStatus - M Result of service request.

10. 2.8.4  showTypes  —  This  service  is  used  to  inquire  Attachment  types  respective  to  Attachment  list  above.
Following table defines its parameters.
Table 75
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentType                                           -                                           M                                           Type                                           of                                           Attachment (maybe list).
ServiceStatus - M Result of service request.

10. 2.8.5  showLoadports — This service is used to inquire expected load ports to load Attachments.  Following table
defines its parameters.
Table 76
Parameter                         Req/Ind                         Rsp/Conf                         Description
LoadportId - M Load port number (maybe list).
ServiceStatus - M Result of service request.

10. 2.8.6  showHistory — This service is used to inquire Attachment history.  Following table defines its parameters.


SEMI T12-0305 © SEMI 2004, 2005 34
Table 77
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentId                                                -                                                M                                                Identification                                                of                                                Attachment.
History - M Requested attachment’s history.
ServiceStatus - M Result of service request.

10. 2.8.7  Parameter List — Above services use following parameters.
Table 78
Parameter                                                              Definition                                                              Form
AttachmentId                        Identification                        of                        Attachment: usually equivalent to physical ID
maybe tagged on physical attachment.
Text.
AttachmentType Type of Attachment: at least jig or implement, and based on
attachments’ compatibility.  Further classification is dependent on
manufacturer, attachment, equipment or strategy of its user.
Enumerated.
History History of an Attachment.  It’s not necessary to have entire history:
it may be summary, limited or simple record useful for choice of
attachment suitable to specific process.
Text.
InvoiceId Identification of Invoice assigned by such management agent as
Attachment dispatcher or Attachment Tracer.
Text.
LoadportId Load port number assigned; assignment manner may be dependent
on equipment.
Text.
ServiceStatus Result of service to show successful or reason of failure. Text.

10. 2.9  JitMachine — Following tables defines services of JitMachine class.
10. 2.9.1  Service List — JitMachine class has following services.
Table 79
Operation                                                                       Description                                                                       Type                                                                       Reqd
ShowId                                Inquires                                identification of JitMachin. R Y
showName                           Inquires                           human                           friendly name of JitMachine. R Y
showType                            Inquires                            JitMachine Types. R Y
receiveInvoice Delivers Invoice information. R N
showAttachments                Inquires                Attachments staying on a JitMachine (Secondments). R Y
showExceptions Inquires effective Exceptions raised on a JitMachine. R Y

10. 2.9.2  showId — This service is used to inquire JitMachine’s ID.  Following table defines its parameters.
Table 80
Parameter                         Req/Ind                         Rsp/Conf                         Description
MachineId                                                     -                                                     M                                                     Identification                                                     of                                                     JitMachine.
ServiceStatus - M Result of service request.

10. 2.9.3  showName — This service is used to inquire human friendly name of Jigs/Implements Tracking Machine.
Following table defines its parameters.


SEMI T12-0305 © SEMI 2004, 2005 35
Table 81
Parameter                         Req/Ind                         Rsp/Conf                         Description
MachineName - M Name of Machine.
ServiceStatus - M Result of service request.

10. 2.9.4  showType  —  This  service  is  used  to  inquire  Jigs/Implements  Tracking  Machine  type.    Following  table
defines its parameters.
Table 82
Parameter                         Req/Ind                         Rsp/Conf                         Description
MachineType - M Type of Machine.
ServiceStatus - M Result of service request.

10. 2.9.5  receiveInvoice  —  This  service  is  used  to  delivers  Invoice  information  to  specific  JitMachine.    Following
table defines its parameters.
Table 83
Parameter                         Req/Ind                         Rsp/Conf                         Description
InvoiceId                                                      M                                                      -                                                      Identification                                                      of                                                      Invoice.
AttachmentId                                               M                                               -                                               Identification                                               of Attachment (maybe list).
AttachmentType                                          M                                          -                                          Type                                          of                                          Attachment (maybe list).
LoadportId C - Load port number (maybe list).
History M - Attachment’s history (maybe list).
ServiceStatus - M Result of service request.

10. 2.9.6  showAttachments — This service is used to inquire a list of Attachments staying on JitMachine.  Following
table defines its parameters.
Table 84
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentId                                                -                                                M                                                Identification                                                of Attachment (maybe list).
ServiceStatus - M Result of service request.

10. 2.9.7  showExceptions — This service is used to inquire effective Exceptions raised on a JitMachine.  Following
table defines its parameters.
Table 85
Parameter                         Req/Ind                         Rsp/Conf                         Description
ExceptionId - M Identification of Exception (maybe list).
ServiceStatus - M Result of service request.

10. 2.9.8  Parameter List — Above services use following parameters.



SEMI T12-0305 © SEMI 2004, 2005 36
Table 86
Parameter                                                              Definition                                                              Form
AttachmentId                        Identification                        of                        Attachment: usually equivalent to physical ID
maybe tagged on physical attachment.
Text.
AttachmentType Type of Attachment: at least jig or implement, and based on
attachments’ compatibility.  Further classification is dependent on
manufacturer, attachment, equipment or strategy of its user.
Enumerated.
ExceptionId Identification of Exception.  It’s usually dependent to equipment. Text.
History History of an Attachment.  It’s not necessary to have entire history:
it may be summary, limited or simple record useful for choice of
attachment suitable to specific process.
Text.
InvoiceId Identification of Invoice assigned by such management agent as
Attachment dispatcher or Attachment Tracer.
Text.
LoadportId Load port number assigned; assignment manner may be dependent
on equipment.
Text.
MachineId                            Identification                            of                            JitMachine.                             It’s usually dependent to equipment
user.
Text.
MachineName Human Friendly of JitMachine.  It’s usually dependent to equipment
user.
Text.
MachineType Type of JitMachine.  It starts with such general name as ‘Molder’,
followed by supplier, model name/number of equipment and may be
version code.  They are separated by colon.  The general name is
mandatory but the others are optional dependent on compatibility.
Text.
ServiceStatus Result of service to show successful or reason of failure. Text.

10. 2.10  PublicLocation — Following tables define services of PublicLocation class.
10. 2.10.1  Service List — PublicLocation class has following services.
Table 87
Operation                                                                       Description                                                                       Type                                                                       Reqd
showId Inquires identification of the location. R Y
showName Inquires name of the location. R Y
changeName Substitutes name of the location. R Y
showLocationType Inquires type of the location. R Y
showPossibleType               Inquires               acceptable type of attachment on the location. R Y
ShowCapacity                     Inquires                     the                     capacity of the location. R Y
showAvailableSpace Inquires acceptable amount of attachments. R Y
updateOccupanvy                Increases                or                decreases occupying attachments on the location. R Y
showAttachments                Inquires                attachments on the location. R Y
showState                            Inquires                            state information. R Y
updateState                          Updates                          state information. R Y

10. 2.10.2  showId — This service is used to inquire location’s identification.  Following table defines its parameters.
Table 88
Parameter                         Req/Ind                         Rsp/Conf                         Description
LocationId                                                     -                                                     M                                                     Identification of Public Location.
ServiceStatus - M Result of service request.



SEMI T12-0305 © SEMI 2004, 2005 37
10. 2.10.3  showName  —  This  service  is  used  to  inquire  human  friendly  name  of  PublicLocation.    Following  table
defines its parameters.
Table 89
Parameter                         Req/Ind                         Rsp/Conf                         Description
LocationName - M Given name of possible location for Attachment.
ServiceStatus - M Result of service request.

10. 2.10.4  changeName — This service is used to replace human friendly name of PublicLocation.  Following table
defines its parameters.
Table 90
Parameter                         Req/Ind                         Rsp/Conf                         Description
LocationName M - New name of possible location for Attachment.
ServiceStatus - M Result of service request.

10. 2.10.5  showLocationType — This service is used to inquire type of PublicLocation.  Following table defines its
parameters.
Table 91
Parameter                         Req/Ind                         Rsp/Conf                         Description
LocationType - M Type of PublicLocation.
ServiceStatus - M Result of service request.

10. 2.10.6  showPossibleTypes  —  This  service  is  used  to  inquire  acceptable  Attachment  types  for  the  Public
Location.  Following table defines its parameters.
Table 92
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentType - M Acceptable type of Attachment (maybe list).
ServiceStatus - M Result of service request.

10. 2.10.7  showCapacity  —  This  service  is  used  to  inquire  maximum  number  of  occupancy  of  Attachment  for
Public Location.  Following table defines its parameters.
Table 93
Parameter                         Req/Ind                         Rsp/Conf                         Description
Capacity - M Maximum number of acceptable Attachment on Public Location.
ServiceStatus - M Result of service request.

10. 2.10.8  showAvailableSpace  —  This  service  is  used  to  inquire  number  of  available  additional  occupants  on  the
Public Location for Attachment.  Following table defines its parameters.
Table 94
Parameter                         Req/Ind                         Rsp/Conf                         Description
Space - M Open space for possible Attachments on PublicLocation.
ServiceStatus - M Result of service request.



SEMI T12-0305 © SEMI 2004, 2005 38
10. 2.10.9  updateOccupancy  —  This  service  is  used  to  fluctuate  number  of  available  unoccupied  space  on
PublicLocation.  Following table defines its parameters.
Table 95
Parameter                         Req/Ind                         Rsp/Conf                         Description
Occupancy M - Number of occupancy to increase or decrease.
ServiceStatus - M Result of service request.

10. 2.10.10  showAttachments — This service is used to inquire a list of Attachments occupying on PublicLocation.
Following table defines its parameters.
Table 96
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentId                                                -                                                M                                                Identification                                                of Attachment (maybe list).
ServiceStatus - M Result of service request.

10. 2.10.11  showState — This service is used to inquire occupancy state of Public Location.  Following table defines
its parameters.
Table 97
Parameter                         Req/Ind                         Rsp/Conf                         Description
State - M State of Public Location.
ServiceStatus - M Result of service request.

10. 2.10.12  updateState  —  This  service  is  used  to  update  occupancy  state  of  Public  Location  in  order  to  follow
reality of corresponding Attachment on equipment.  Following table defines its parameters.
Table 98
Parameter                         Req/Ind                         Rsp/Conf                         Description
State M - New state of PublicLocation.
ServiceStatus - M Result of service request.

10. 2.10.13  Parameter List — Above services use following parameters.
Table 99
Parameter                                                              Definition                                                              Form
AttachmentId                       Identification                       of                       Attachment: usually equivalent to physical ID
maybe tagged on physical attachment.
Text.
AttachmentType Type of Attachment: at least jig or implement, and based on
attachments’ compatibility.  Further classification is dependent on
manufacturer, attachment, equipment or strategy of its user.
Enumerated.
Capacity Maximum number of occupant available on Public Location. Value.
LocationId                            Identification                            of                            PublicLocation.  If stock has logical or physical
partitions, their locations may be differently identified.  If a piece of
equipment has more than one locations for different Attachment
types, their locations may be differently identified.
Text.
LocationName                      Human                      friendly                      name of PublicLocation. Text.


SEMI T12-0305 © SEMI 2004, 2005 39
Parameter                                                              Definition                                                              Form
LocationType Type of PublicLocation.  At lease it is classified into ‘Stock’ and
‘Equipment’.  If stock has logical or physical partitions, their types
may different LocationTypes.  If a piece of equipment has more than
one locations, they may be different LocatuinTypes.
Text.
Space Number of available free position for possible Attachment. Value.
Occupancy Fluctuation number of occupants for PublicLocation: positive for
increment and negative for decrement.
Value.
ServiceStatus Result of service to show successful or reason of failure. Text.
State Occupancy state of PublicLocation object. Text.

10. 2.11  Secondment — Following tables defines services of Secondment class.
10. 2.11.1  Service List — Secondment class has following services.
Table 100
Operation                                                                       Description                                                                       Type                                                                       Reqd
ShowId                                Inquires                                secondment’s identification. R Y
showName                           Inquires                           secondment’s name. R Y
changeName Substitutes secondment’s name. R Y
showType Inquires type of the secondment. R Y
showState                            Inquires                            state information. R Y
Destruct Destruct a Secondment object. R Y

10. 2.11.2  showId  —  This  service  is  used  to  inquire  Secondment’s  identification.    Following  table  defines  its
parameters.
Table 101
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentId                                                -                                                M                                                Identification                                                of                                                Secondment.
ServiceStatus - M Result of service request.

10. 2.11.3  showName  —  This  service  is  used  to  inquire  human  friendly  name  of  Secondment.    Following  table
defines its parameters.
Table 102
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentName                                          -                                          M                                          Given                                          human                                          friendly name of Secondment.
ServiceStatus - M Result of service request.

10. 2.11.4  changeName  —  This  service  is  used  to  replace  human  friendly  name  of  Secondment.    Following  table
defines its parameters.
Table 103
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentName                                         M                                         -                                         New                                         name of Secondment.
ServiceStatus - M Result of service request.



SEMI T12-0305 © SEMI 2004, 2005 40
10. 2.11.5  showType — This service is used to inquire type of Secondment.  Following table defines its parameters.
Table 104
Parameter                         Req/Ind                         Rsp/Conf                         Description
AttachmentType - M Type of Secondment.
ServiceStatus - M Result of service request.

10. 2.11.6  showState — This service is used to inquire state of Secondment.  Following table defines its parameters.
Table 105
Parameter                         Req/Ind                         Rsp/Conf                         Description
State - M State of Secondment.
ServiceStatus - M Result of service request.

10. 2.11.7  destruct  —  This  service  is  used  to  remove  Secondment  object.    This  service  is  typically  used  when  an
attachment is removed from equipment.  Following table defines its parameters.
Table 106
Parameter                         Req/Ind                         Rsp/Conf                         Description
State                                                              -                                                              M                                                              Immediate                                                              state                                                              just before removed.
ServiceStatus - M Result of service request.

10. 2.11.8  Parameter List — Above services use following parameters.
Table 107
Parameter                                                              Definition                                                              Form
AttachmentId                        Identification                        of                        Attachment: usually equivalent to physical ID
maybe tagged on physical attachment.
Text.
AttachmentName                 Human                 friendly                 name                 assigned on an Attachment.                               Text.
AttachmentType Type of Attachment: at least jig or implement, and based on
attachments’ compatibility.  Further classification is dependent on
manufacturer, attachment, equipment or strategy of its user.
Enumerated.
ServiceStatus Result of service to show successful or reason of failure. Text.
State Occupancy state of PublicLocation object. Text.



SEMI T12-0305 © SEMI 2004, 2005 41
RELATED INFORMATION 1
USE CASE OF TRACKING JIGS AND IMPLEMENTS
NOTICE:    This  related  information  is  not  an  official  part  of  SEMI  T12  and  was  derived  from  the  work  of  the
originating  task  force.    This  related  information  was  approved  for  publication  by  full  letter  ballot  procedures  on
January 9, 2004.
R1-1  Use Case Diagram
R1-1.1  Use  Case  diagram  is  one  of  good  start  point  to  understand  and  analyze  problem  domain.    It  is  often  used
before modeling a system.
R1-1.2  Use  Case  diagram  consists  of  Actors  and  Use  Cases.    A  use  case  defines  something  expected  to  a  system
related to an actor or between actors.  All use cases build up whole system.
R1-2  Use Case Diagram of Attachment Tracking
R1-2.1  Figure R1-1 is for use cases of Jigs and Implements.
R1-2.2  Update Inventory — Jig Handler updates when it takes jig to or brings from equipment.  Tool updates when
jig has arrived (and verified) and removed.
R1-2.3  Update or Check History — Tool reports when it uses some amount of cycle or such things as maintenance,
inspection  or  problem  happens.    Superintendent  checks  history  of  a  jig.    Provided  information  is  based  on  data  in
database with inquiry about current delta on equipment.
R1-2.4  Manage  Exception  —  Tool  reports  when  some  exception  happens.    Superintendent  instructs  something.
Tool replies.
R1-2.5  Invoice — Superintendent send invoice to let tool know which jig is delivered.  Tool asks whether received
jig is right one or not.  If something is wrong, an exception process is required.
R1-2.6  Manage Expiration — When Jig is used repeatedly and it use-time or cycles reaches preset value, tool has to
make some expected action to avoid unexpected processing.
R1-2.7  Manage Exception — Superintendent configures effective period or cycle of a Jig.  Tool stop using the Jig
or notify the event when it is expired.

Update
History
Superinten
dent
To o l
(Jig User)
Check
History
Invoice
Manage
Expiration
Update
Inventory
Jig
Handler
Superinten
dent
To o l
(Jig User)
Manage
Exception

Figure R1-1



SEMI T12-0305 © SEMI 2004, 2005 42
RELATED INFORMATION 2
AN EXAMPLE ON EQUIPMENT WITH SECS-II AND GEM
NOTICE:    This  related  information  is  not  an  official  part  of  SEMI  T12  and  was  derived  from  the  work  of  the
originating  task  force.    This  related  information  was  approved  for  publication  by  full  letter  ballot  procedures  on
January 9, 2004.
R2-1  GEM Level Example
R2-1.1  This  example  is  a  possible  implementation  of  attachment  tracking  capabilities  “Acquisition  of  Minimum
Tracking Information” and “Action on Expiration” with SEMI E5 (SECS-II) and SEMI E30 (GEM).
R2-1.2  Great many equipment and production lines adopt GEM level implementation around the world because it
was standardized more than ten years ago and was the only unified communication standard between equipment and
factory host computer for long period.
R2-2  Example Scenario
R2-2.1  An example scenario consists of setting up expiry, tracing data of an attachment and hitting expiration.

Host
Equipment
S2F15 (ECS)
or S2F41 (HCS)
S2F16 (ECA)
or S2F42
(HCA)
Setting Expiration
Acknowledge
S6F11 (ERS)
S6F12 (ERA)
Acknowledge
Cycle Increment
S6F11 (ERS)
S6F12 (ERA)
Acknowledge
Use-Time Increment
S6F11 (ERS)
S6F12 (ERA)
Acknowledge
Expired and
Equipment Stops
S5F1 (ARS)
S5F2 (ARA)
Acknowledge
Alarm Raised
S5F1 (ARS)
S5F2 (ARA)
Acknowledge
Alarm Cleared

Figure R2-1



SEMI T12-0305 © SEMI 2004, 2005 43
RELATED INFORMATION 3
AN EXAMPLE ON EQUIPMENT WITH SECS-II, GEM AND OSS
NOTICE:    This  related  information  is  not  an  official  part  of  SEMI  T12  and  was  derived  from  the  work  of  the
originating  task  force.    This  related  information  was  approved  for  publication  by  full  letter  ballot  procedures  on
January 9, 2004.
R3-1  Example with GEM plus OSS
R3-1.1  This  example  is  a  possible  implementation  of  attachment  tracking  capabilities  “Acquisition  of  Minimum
Tracking Information”, “Action on Expiration” and “Identification and Verification of Attachments” with SEMI E5
(SECS-II), SEMI E30 (GEM) and SEMI E39 (OSS).
R3-1.2  Object base system modeling and OSS has been recognized recently by equipment users especially in 300
mm  fabs  as  handy  tools  to  access  data  on  equipment  because  the  allows  accessing  unit  by  object  rather  than  all
values or just one data.
R3-2  Example Scenario
R3-2.1  An example scenario consists of verification of attachment/setting up expiry, tracing data of an attachment
and hitting expiration.
R3-2.2  Verification of Attachment/Setting up Expiry

Host
Equipment
S14F9 (COR)
S14F10 (COA)
Sending Invoice
Acknowledge
S6F11 (ERS)
S6F12 (ERA)
Acknowledge
Invoice object has
been created
S6F11 (ERS)
S6F12 (ERA)
Acknowledge
Secondment object
has been created
An attachment
has arrived
Equipment verifies
and it is ri
ght one.
Expiry objects has
been created, using
Invoice information
S14F19 (GSR)
S14F20 (GSA)
Acknowledge
update:
(Deploied)
HistoryBuffer object
has been created

Figure R3-1


SEMI T12-0305 © SEMI 2004, 2005 44
R3-2.3  Tracing Data of an Attachment and Hitting Expiration

Host
Equipment
S14F19 (GSR)
S14F20 (GSA)
Acknowledge
update:
(use-time increment)
S14F19 (GSR)
S14F20 (GSA)
Acknowledge
update:
(Expiration event)
S6F11 (ERS)
S6F12 (ERA)
Acknowledge
Equipment Stops
because expired
S5F1 (ARS)
S5F2 (ARA)
Acknowledge
Alarm Raised
S5F1 (ARS)
S5F2 (ARA)
Acknowledge
Alarm Cleared
S14F19 (GSR)
S14F20 (GSA)
Acknowledge
update:
(Cycle Increment)
S6F11 (ERS)
S6F12 (ERA)
Acknowledge
Exception object
has been created

Figure R3-2

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


SEMI T12.1-0704 © SEMI 2004 1
SEMI T12.1-0704
SPECIFICATION FOR SECS PROTOCOL FOR TRACKING JIGS AND
IMPLEMENTS
This  specification  was  technically  approved  by  the  Global  Traceability  Committee  and  is  the  direct
responsibility  of  the  Japanese  Traceability  Committee.  Current  edition  approved  by  the  Japanese  Regional
Standards Committee on April 30, 2004.  Initially available at www.semi.org June 2004; to be published July

# 2004

2004.
1  Purpose
1. 1  The purpose of this document is to map Services and data in Specification of Tracking Jig and Implements into
SECS protocol.
2  Scope
2. 1      This   document   is   applied   to   SECS   implementation   of   Jigs   and   Implements   traceability   with   some
interoperability with semiconductor Manufacturing Execution System (MES).
NOTICE:  This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory or other limitations prior to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI E5 — SEMI Equipment Communication Standard 2 Message Content (SECS-II)
SEMI E39 — Object Service Standard: Concepts, Behavior and Services
SEMI T12 — Specification for Tracing Jigs and Implements
NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.
4  Requirements
4. 1  Service  Mapping  —  This  specification  maps  service  instructions  defined  in  “Specification  for  Jigs  and
Implements”  into  SECS  stream/functions  as  follows.  Supporting  Class  names  specified  in  the  following  table  are
used as OBJSPEC or a part of OBJSPEC to request services.
Table 1  Service Message Instruction Mapping
Service Message Name Supporting Class Stream, Function SECS-II Message Name
addEvent                                 HistoryRecord                                 S14, F19/F20 Generic Service Request / Response
adopt                                       HistoryDB                                       S14,                                       F19/F20                                       Generic Service Request / Response
changeAction                                    Expiry                                    S14,                                    F19/F20                                    Generic Service Request / Response
changeDescription                                Expiry                                S14,                                F19/F20            Generic            Service            Request / Response
changeExpiration                                 Expiry                                 S14,                                 F19/F20                                 Generic Service Request / Response
changeName                   Attachment,                   PublicLocation,
Secondment
S14, F19/F20 Generic Service Request / Response
changeNamespace                              Inventory                              S14,                              F19/F20            Generic            Service            Request / Response
destrcut Exception, Expiry, HistoryBuffer,
HistoryRecord, Secondment
S14, F19/F20 Generic Service Request / Response
disown                                      HistoryDB                                      S14,                                      F19/F20                                      Generic Service Request / Response
fluctuate                                 HistoryRecord                                 S14,                                 F19/F20                                 Generic Service Request / Response
install                                        Inventory                                        S14,                                        F19/F20                                        Generic Service Request / Response
listEvent                                 HistoryRecord                                 S14,                                 F19/F20                                 Generic Service Request / Response


SEMI T12.1-0704 © SEMI 2004 2
Service Message Name Supporting Class Stream, Function SECS-II Message Name
listRecords                                  HistoryDB                                  S14,                                  F19/F20                                  Generic Service Request / Response
listUp                                        Inventory                                        S14,                                        F19/F20                                        Generic Service Request / Response
receiveInvoice                                JitMachine                                S14, F19/F20 Generic Service Request / Response
reset                                        HistoryDB                                        S14,                                        F19/F20                                        Generic Service Request / Response
setReleaseCondition                         HistoryBuffer                          S14,                         F19/F20            Generic            Service            Request / Response
showAction                                     Expiry                                     S14,                                     F19/F20                                     Generic Service Request / Response
showAttachment                            HistoryBuffer                            S14,                            F19/F20            Generic            Service            Request / Response
showAttachments                      Invoice,                      JitMachine,
PublicLocation
S14, F19/F20 Generic Service Request / Response
showAvailableSpace PublicLocation S14, F19/F20 Generic Service Request / Response
showCapacity                             PublicLocation                             S14,                             F19/F20            Generic            Service            Request / Response
showCategory                                 Exception                                 S14,                                 F19/F20                                 Generic Service Request / Response
showCode                                    Exception                                    S14,                                    F19/F20                                    Generic Service Request / Response
showData                                     Inventory                                     S14,                                     F19/F20                                     Generic Service Request / Response
showDescription Exception, Expiry S14, F19/F20            Generic            Service            Request / Response
showEvent                                HistoryRecord                                S14,                                F19/F20                                Generic Service Request / Response
showExeptions                               JitMachine                               S14, F19/F20 Generic Service Request / Response
showExpiration                                  Expiry                                  S14,                                  F19/F20                                  Generic Service Request / Response
showHistory                    Attachment,                    HistoryBuffer,
HistoryDB, HistoryRecord, Invoice
S14, F19/F20 Generic Service Request / Response
showId                     Attachment,                     Exception,                     Expiry,
Invoice, JitMachine,
PublicLocation, Secondment
S14, F19/F20 Generic Service Request / Response
showLoadports                                  Invoice                                  S14,                                  F19/F20                                  Generic Service Request / Response
showLocationType                         PublicLocation                         S14,                         F19/F20            Generic            Service            Request / Response
showName                        Attachment,                        JitMachine,
PublicLocation, Secondment
S14, F19/F20 Generic Service Request / Response
showNamespace Inventory S14, F19/F20 Generic Service Request / Response
showOccupancy                           PublicLocation                           S14,                           F19/F20            Generic            Service            Request / Response
showPossibleType                         PublicLocation S14, F19/F20 Generic Service Request / Response
showReleaseCondition                       HistoryBuffer                          S14,                       F19/F20            Generic            Service            Request / Response
showState Exception, Expiry, HistoryBuffer,
PublicLocation, Secondment
S14, F19/F20 Generic Service Request / Response
showSubject                            Exception,                            Expiry S14, F19/F20 Generic Service Request / Response
showType                        Attachment,                        JitMachine,
Secondment
S14, F19/F20 Generic Service Request / Response
showTypes                                     Invoice                                     S14,                                     F19/F20                                     Generic Service Request / Response
uninstall                                      Inventory                                      S14,                                      F19/F20                                      Generic Service Request / Response
update HistoryDB, Inventory S14, F19/F20            Generic            Service            Request / Response
updateHistory                      Attachment,                      Exception,
HistoryBuffer
S14, F19/F20 Generic Service Request / Response
updateState                               PublicLocation                               S14,                               F19/F20                               Generic Service Request / Response

4. 2  Service Parameter Mapping — The Following Table shows the mapping between service parameters defined by
“Specification  for  Tracking  Jigs  and  Implements”  standard  and  Data  Items  defined  by  SEMI  E5.  The  data  item
SVCNAME  used  with  S14F19  is  the  text  string  defined  in  the  above  table.  The  data  item  SPNAME  used  with
S14F19/F20 is also text string defined in following table. It is recommended but not limited to be case sensitive for
both data items for future extension.


SEMI T12.1-0704 © SEMI 2004 3
Table 2  Service Message Parameter Mapping
Parameter Name SECS-II Data Item Reference SECS-II Format Remarks
Action                                      L,                                      2
1. SPNAME
2. SPVAL
SPNAME = Action
SPVAL = (20)

AttachmentId                           L,                           2
1. SPNAME
2. SPVAL
SPNAME = AttachmentId
SPVAL = (20)

AttachmentInfo                       L,                       2
1. SPNAME
2. SPVAL
SPNAME = AttachmentInfo
SPVAL = (20)

AttachmentName                    L,                    2
1. SPNAME
2. SPVAL
SPNAME = AttachmentName
SPVAL = (20)

AttachmentType                      L,                      2
1. SPNAME
2. SPVAL
SPNAME = AttachmentType
SPVAL = (20)
Space separated enumeration
if more than one enumerated
items.
Capacity                                  L,                                  2
1. SPNAME
2. SPVAL
SPNAME = Capacity
SPVAL = (51, 52, 54)

Category                                  L,                                  2
1. SPNAME
2. SPVAL
SPNAME = Category
SPVAL = (20)

Code                                        L,                                        2
1. SPNAME
2. SPVAL
SPNAME = Code
SPVAL = (20)

Condition                                 L,                                 2
1. SPNAME
2. SPVAL
SPNAME = Condition
SPVAL = (20)

DataName                               L,                               2
1. SPNAME
2. SPVAL
SPNAME = DataName
SPVAL = (20)

DataValue                               L,                               2
1. SPNAME
2. SPVAL
SPNAME = DataValue
SPVAL = (00, 1x, 2x, 3x, 4x, 5x)
“x”  is  an  appropriate  octal
defined in SEMI E5.
Description                              L,                              2
1. SPNAME
2. SPVAL
SPNAME = Description
SPVAL = (20)

EventCaption                           L,                           2
1. SPNAME
2. SPVAL
SPNAME = EventCaption
SPVAL = (20)

ExceptionId                             L,                             2
1. SPNAME
2. SPVAL
SPNAME = ExceptionId
SPVAL = (20)
numeric or alpha-numeric
Expiration                                L,                                2
1. SPNAME
2. SPVAL
SPNAME = Expiration
SPVAL = (20)

ExpiryId                                  L,                                  2
1. SPNAME
2. SPVAL
SPNAME = ExpiryId
SPVAL = (20)



SEMI T12.1-0704 © SEMI 2004 4
Parameter Name SECS-II Data Item Reference SECS-II Format Remarks
GroupName                             L,                             2
1. SPNAME
2. SPVAL
SPNAME = GroupName
SPVAL = (20)

Handle                                     L,                                     2
1. SPNAME
2. SPVAL
SPNAME = Handle
SPVAL = (20)

History                                     L,                                     2
1. SPNAME
2. SPVAL
SPNAME = History
SPVAL = (20)

HistoryDifference                   L,                   2
1. SPNAME
2. SPVAL
SPNAME = HistoryDifference
SPVAL = (20)

InvoiceId                                 L,                                 2
1. SPNAME
2. SPVAL
SPNAME = InvoiceId
SPVAL = (20)

Item                                         L,                                         2
1. SPNAME
2. SPVAL
SPNAME = Item
SPVAL = (20)

LoadportId                               L,                               2
1. SPNAME
2. SPVAL
SPNAME = LoadportId
SPVAL = (20)

Location                                  L,                                  2
1. SPNAME
2. SPVAL
SPNAME = Location
SPVAL = (20)

LocationId                               L,                               2
1. SPNAME
2. SPVAL
SPNAME = LocationId
SPVAL = (20)

LocationName                         L,                         2
1. SPNAME
2. SPVAL
SPNAME = LocationName
SPVAL = (20)

LocationType                          L,                          2
1. SPNAME
2. SPVAL
SPNAME = LocationType
SPVAL = (20)

MachineId                               L,                               2
1. SPNAME
2. SPVAL
SPNAME = MachineId
SPVAL = (20)

MachineName                         L,                         2
1. SPNAME
2. SPVAL
SPNAME = MachineName
SPVAL = (20)

MachineType                          L,                          2
1. SPNAME
2. SPVAL
SPNAME = MachineType
SPVAL = (20)

Operation                                 L,                                 2
1. SPNAME
2. SPVAL
SPNAME = Operation
SPVAL = (20)
One   of   enumerated   word
defined in the standard.
Occupancy                               L,                               2
1. SPNAME
2. SPVAL
SPNAME = Occupancy
SPVAL = (51, 52, 54)



SEMI T12.1-0704 © SEMI 2004 5
Parameter Name SECS-II Data Item Reference SECS-II Format Remarks
Restriction                               L,                               2
1. SPNAME
2. SPVAL
SPNAME = Restriction
SPVAL = (20)

ServiceStatus                           L,                           2
1. SVCACK
2. L, p
1. L, 2
1. ERRCODE
1

2. ERRTEXT
1

.....   .....   .....
p. L, 2
1. ERRCODE
p

2. ERRTEXT
p

SVCACK = (10)
ERRCODE = (51, 52, 54)
ERRTEXT = (20)
If   service   was   successful,
P=0   and   no   error   list   is
attached.
If  not,  the  maximum  length
of  each  ERRTEXT  must  be

# 80

80.
Space                                       L,                                       2
1. SPNAME
2. SPVAL
SPNAME = Space
SPVAL = (51, 52, 54)

State                                        L,                                        2
1. SPNAME
2. SPVAL
SPNAME = State
SPVAL = (20)

Name of Service SVCNAME                                 20                                 Note:  message  name  other
than message parameter.

4. 3  The   Other   Communication   —   The   other   SECS-II   communication   may   additionally   take   place   to   run
manufacturing  systems.  Such  communications  as  event  report  and  exception  notification  are  usually  done  from
equipment  to  host.  Also  some  instructive  communications  for  manufacturing  as  job  management  and  remote
command are done from host to equipment. But they are just recommended to do regularly and independently to this
specification because they are not in the scope of traceability but in production scope.


SEMI T12.1-0704 © SEMI 2004 6
RELATED INFORMATION 1
LEGACY SECS MAPPING FOR RESTRICTED CAPABILITIES
NOTICE:    This  related  information  is  not  an  official  part  of  SEMI  T12.1  and  was  derived  from  the  Japanese
Traceability  Committee.    This  related  information  was  approved  for  publication  by  full  letter  ballot  on  April  30,
2004.
R1-1  Legacy Mapping for Older Equipment
R1-1.1    Often  older  equipment  may  not  have  Object  Service  capability  implemented  with  functions  of  stream  14.
Limited service messages and their parameters are mapped as shown in the following tables. This mapping is one of
example legacy mappings and there are not a full mapping but effective functions for Jigs and Implements Tracking.
Table R1-1  Service Instructions Mapping
Service Message Name Supporting Class Stream, Function SECS-II Message Name
changeAction                               Expiry                               S2,                               F15/F16                               New Equipment Constans Send / Ack.
changeExpiration                            Expiry                            S2,                            F15/F16                            New Equipment Constans Send / Ack.
showState                                  Expiry                                  S1,                                  F3/F4                                  Selected Equipment Status Request / Data
updateHistory                           Attachment                           S6,                           F11/F12 Event Report Send / Acknowledge
updateState                          PublicLocation                          S6,                          F11/F12 Event Report Send / Acknowledge

Table R1-2  Service Parameters Mapping
Parameter Name SECS-II Data Item Reference SECS-II Format Remarks
Action                                      L,                                      2
1. ECID
2. ECV
ECID = (20)
ECV = (3x, 4x, 5x)
changeAction of Expiry
Expiration                                L,                                2
1. ECID
2. ECV
ECID = (20)
ECV = (3x, 4x, 5x)
changeExpiration of Expiry
HistoryDifference V V=(0, 1x, 2x, 3x, 4x, 5x) updateHistory of Attachment
Item V V=(20, 3x, 5x) updateHistory of Attachment
L,  0  N/A  changeAction  /  changeExpiration
of Expiry
ServiceStatus
EAC                                            EAC=(10)                                            showState                                            of                                            Expiry
SV                                               SV=(20)                                               showState                                               of                                               Expiry
SVID is required
State
V SV=(20, 1x) updateState of PublicLocation


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


SEMI T12.2-0704 © SEMI 2004 1
SEMI T12.2-0704
SPECIFICATION FOR XML PROTOCOL FOR TRACKING JIGS AND
IMPLEMENTS
This  specification  was  technically  approved  by  the  Global  Traceability  Committee  and  is  the  direct
responsibility  of  the  Japanese  Traceability  Committee.  Current  edition  approved  by  the  Japnese  Regional
Standards Committee on April 30, 2004.  Initially available at www.semi.org June 2004; to be published July
2004.
1  Purpose
1. 1    The  purpose  of  this  document  is  to  map  Services
and    data    in    Specification    of    Tracking    Jig    and
Implements into XML protocol.
2  Scope
2. 1    This  document  is  applied  to  XML  implementation
of    Jigs    and    Implements    traceability    with    some
interoperability with Surface Mount Technology (SMT)
equipment.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Limitations
3. 1    This  protocol  mapping  has  a  consideration  being
interoperable  with  SMT  manufacturing  it  may  be  used
in    such    area,    using    this    specification    on    such
manufacturing   area   is   not   guaranteed   because   this
specification  is  originally  planned  to  be  working  on
semiconductor     manufacturing     systems     including
equipment.
4  Referenced Standards
4. 1  SEMI Standards
SEMI   T12   —   Specification   for   Tracing   Jigs   and
Implements
4. 2  Association    Connecting    Electronics    Industries
(IPC)/National   Electronics   Manufacturing   Initiative
(NEMI)/American National Standard institute (ANSI)
1

IPC-2501  —  Definition  for  Web-Based  Exchange  of
XML data; (July, 2003)
IPC-2541   —   Generic   Requirements   for   Electronics
Manufacturing  Shop-Floor  Equipment  Communication


1 http://www.ipc.org, http://www.nemi.org, http://www.ansi.org,
The original developer is IPC with NEMI cooperation, ANSI ends up
with authorizing approval.
(CAMX); (October, 2001 / ANSI Approved November,
2001)
4. 3  World Wide Web Consortium (W3C)
2

REC-xml-20001006  —  Extensible  Markup  Language
(XML) 1.0  (Second Edition)
NOTE-SOAP-20000508   —   Simple   Object   Access
Protocol (SOAP) 1.1
4. 4  Internet Engineering Task Force
3

RFC2045      —      Multipurpose      Internet      Message
Extensions (MIME) Part 1: Format of Internet Message
Bodies
RFC2616 — Hyper Text Transfer Protocol – HTTP/1.1
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
5  Terminology
5. 1  Acronyms and Abbreviations
5. 1.1  MIME     —    Multipurpose    Internet    Message
Extensions
5. 1.2  SOAP — Simple Object Access Protocol
5. 1.3  XML — eXtensible Markup Language
6  Base Requirements
6. 1  Base  Protocol  Mapping  —  This  XML  protocol
specification  adopts  Simple  Object  Access  Protocol
(SOAP) over Hyper Text Transfer Protocol (HTTP) on
Transmission     Control     Protocol/Internet     Protocol
(TCP/IP).  Some  equipment  users  produce  not  only
semiconductor  devices  but  also  Print  Circuit  Boards
(PCBs). It is convenient for such users to have common
messaging   protocol   with   standard   messaging   for
Surface  Mount  Technology  (SMT).  For  this  purpose
this  protocol  mapping  extension  standard  specifies  the
messaging    mechanism    conformant    to    IPC-2501
“Definition for Web-Based Exchange of XML Data” as
one  of  mapping  means.  Also  this  extension  standard
document follows IPC-2541 “Generic Requirements for
Electronics    Manufacturing    Shop-Floor    Equipment


2 http://www.w3c.org,
3 http://www.ietf.org
,


SEMI T12.2-0704 © SEMI 2004 2
Communication  Messages”  and  IPC-2551  “Sectional
Requirements  for  Manufacturing  Execution  System”
for  that  reason.  The  following  subsections  describe  a
part  of  these  specifications  for  introduction.  Refer  to
these documents for detail reference.
6. 2  SOAP   Structure   —   A   HTTP   message   in   this
specification  has  an  envelope  to  contain  a  couple  of
MIME blocks. One is for SOAP Envelope and the other
is  for  message  detail  to  be  able  to  mix  with  such  non-
XML  information  as  binary  data.  The  service  message
specified   in   “Specification   for   Tracking   Jigs   and
Implements”  is  contained  in  latter  one.  SOAP  standard
envelop  MIME  Block  contains  SOAP  Header  which
has   message   information   and   SOAP   Body   which
contains  SOAP  Faults.  Outlined  diagram  is  shown  in
Related  Information.  Official  definitions  are  given  in
referenced documents.
6. 3  Messaging  Mechanism  —  Message  Broker,  that  is
logical   middle   ware   server   to   handle   and   relay
messages,  is  assumed  somewhere  on  communication
network.  While  the  broker  behaves  as  communication
server,  the  other  logical  nodes  are  message  clients.
Every message starts with a client and responded by the
server.  Messages  communicated  between  clients  are
exchanged  through  the  server.  The  server  keeps  posted
messages  from  clients  in  a  queue  for  each  individual
client.  Expecting  recipient  client  asks  the  server  for
messages  and  a  topmost  message  in  the  queue  for  the
client  is  responded  if  the  queue  is  not  empty.  The
recipient  client  posts  acknowledge  back  to  the  server.
When  the  recipient  replies  back  a  message  to  the
original   sender   client,   same   thing   happens   with
switched  roles  between  sender  and  recipient  clients.
Explanatory  diagrams  for  this  outline  are  shown  in
Related  Information.  Official  specification  is  given  in
referenced documents.
6. 4  Issues  Specific  to  this  Messaging  —  A  few  issues
for  IPC  based  communication  protocol  for  Jigs  and
Implements Tracking are introduced here.
6. 4.1  Domain  Configuration  —  Message  Broker  has
domain   configuration   information   to   make   sure   all
acting    entities,    possible    messages    with    related
publisher,  recipient  and  subscriber  clients.  Also  it  has
other    detail    characteristics    of    the    domain    of
communication.  Every  client  needs  to  look  up  the
information before the first messaging.
6. 4.2  Message   Information   —   This   is   an   element
contained  in  SOAP  Header.  This  information  provides
time   of   transaction,   sender,   destination,   message
identification and schema type used for service message
detail in the second MIME block.
6. 4.3  Attributes  in  Service  Message  Element  —  The
top  element  of  each  service  message  has  date/time  of
the message, session ID or session reference, request ID
or  request  reference,  and  optional  values.  Some  of  the
optional  values  are  extended  for  Jigs  and  Implements
Tracking  communication:  linkId,  linkCnt  and  linkExp.
The  extension  may  be  used  for  delayed  reply  message
and  multiple  divided  replies  to  keep  conformance  of
related messages.
7  Requirements
7. 1  Service     Mapping     —     Services     defined     in
“Specification  for  Tracking  Jigs  and  Implement”  are
mapped on the following table.
7. 1.1  Capitalized Service Message Element Name Base
—  Each  service  message  is  mapped  into  an  XML
element   with   capitalized   heading   letter   to   prevent
collision with XML or XML Schema native words.
7. 1.2  Service    Message    Element    Name    Suffix   —
Because      of      symmetry      of      message      broker
communication    and    for    XML    element    naming
convention,  suffix  of  ‘Request’  or  ‘Response’  is  added
to  each  service  message  element  name  for  request  or
response respectively: e.g. AddEventRequest to request
service    and    AddEventResponse    for    its    response
message.

Table 1  Service Instruction Mapping
Service Message Name Supporting Class Service Message Element
Name Base
Remarks
addEvent                                        HistoryRecord                                         AddEvent
adopt                                              HistoryDB                                               Adopt
changeAction                                          Expiry                                           ChangeAction
changeDescription                                      Expiry                                       ChangeDescription
changeExpiration                                       Expiry                                        ChangeExpiration
changeName               Attachment,               PublicLocation, Secondment ChangeName
changeNamespace                                    Inventory                                     ChangeNamespace
destrcut Exception, Expiry, HistoryBuffer,
HistoryRecord, Secondment
Destrcut
disown                                            HistoryDB                                             Disown


SEMI T12.2-0704 © SEMI 2004 3
Service Message Name Supporting Class Service Message Element
Name Base
Remarks
fluctuate                                        HistoryRecord                                         Fluctuate
install                                              Inventory                                               Install
listEvent                                        HistoryRecord                                         ListEvent
listRecords                                         HistoryDB                                          ListRecords
listUp                                              Inventory                                               ListUp
receiveInvoice                                      JitMachine                                       ReceiveInvoice
reset                                              HistoryDB                                               Reset
setReleaseCondition                               HistoryBuffer                                SetReleaseCondition
showAction                                            Expiry                                             ShowAction
showAttachment                                  HistoryBuffer                                   ShowAttachment
showAttachments               Invoice,               JitMachine, PublicLocation ShowAttachments
showAvailableSpace                              PublicLocation                               ShowAvailableSpace
showCapacity                                   PublicLocation                                    ShowCapacity
showCategory                                       Exception                                        ShowCategory
showCode                                          Exception                                           ShowCode
showData                                           Inventory                                            ShowData
showDescription                               Exception,                               Expiry                                ShowDescription
showEvent                                      HistoryRecord                                       ShowEvent
showExeptions                                      JitMachine                                       ShowExeptions
showExpiration                                         Expiry                                          ShowExpiration
showHistory Attachment, HistoryBuffer, HistoryDB,
HistoryRecord, Invoice
ShowHistory
showId Attachment, Exception, Expiry, Invoice,
JitMachine, PublicLocation, Secondment
ShowId
showLoadports                                         Invoice                                          ShowLoadports
showLocationType                               PublicLocation                                ShowLocationType
showName                 Attachment,                 JitMachine, PublicLocation,
Secondment
ShowName
showNamespace                                      Inventory                                       ShowNamespace
showOccupancy                                 PublicLocation                                  ShowOccupancy
showPossibleType                                PublicLocation                                 ShowPossibleType
showReleaseCondition                             HistoryBuffer                              ShowReleaseCondition
showState Exception, Expiry, HistoryBuffer,
PublicLocation, Secondment
ShowState
showSubject                                  Exception,                                  Expiry                                   ShowSubject
showType                    Attachment,                    JitMachine, Secondment ShowType
showTypes                                            Invoice                                             ShowTypes
uninstall                                            Inventory                                             Uninstall
update                                    HistoryDB,                                    Inventory                                     Update
updateHistory                 Attachment,                 Exception, HistoryBuffer UpdateHistory
updateState                                     PublicLocation                                      UpdateState



SEMI T12.2-0704 © SEMI 2004 4
7. 2  Service Parameter Mapping — Service parameter type mapping is shown in the following table.
Table 2  Service Parameter Type Mapping
Parameter Name Attribute/Element Type Remarks
Action                                         Element                                         string
AttachmentId                                   Element                                   string
AttachmentInfo                                 Element                                 string
AttachmentName                                Element                                string
AttachmentType                                 Element                                 anyType                                 Some                                 Enumeration
Capacity                                       Element                                         unsignedInt
Category                                       Element                                       string
Code                                          Element                                              string
Condition                                      Element                                      string
DataName                                     Element                                     string
DataValue Element anyType Usually integer or float
Description                                     Element                                     string
EventCaption                                   Element                                   anyType                                   Formatted                                   Text
ExceptionId                                    Element                                    string
Expiration                                      Element                                      string
ExpiryId                                       Element                                       string
GroupName                                    Element                                    string
Handle                                        Element                                        string
History                                        Element                                           anyType                                        Formatted                                        Text
HistoryDifference                               Element                               anyType                                 Formatted                               Text
InvoiceId                                      Element                                      string
Item                                          Element                                             string                                          maybe                                          enumerated
LoadportId                                     Element                                     string                                     Usually small integer
Location                                       Element                                       string
LocationId                                     Element                                     string
LocationName                                  Element                                  string
LocationType                                   Element                                   string
MachineId                                     Element                                     string
MachineName                                  Element                                  string
MachineType                                   Element                                   string
Operation                                      Element                                      string                                       Enumerated
Occupancy Element int Positive or Nagative
Restriction Element string regular expression or any
ServiceStatus                                   Element                                       complexType                                   status+Rejection
Space                                         Element                                         unsignedInt                                         Usually                                         small                                         integer
State                                          Element                                             string                                          Class                                          dependent



SEMI T12.2-0704 © SEMI 2004 5
7. 3  Additional Parameters for Service Messages — Because this protocol mapping works for asynchronous HTTP
server-client communication on message broker, such additional parameters to give complementary information as
issued  time  and  transaction  identification  are  required  to  be  attached  to  each  message.  The  information  may  be
dependent to the role of the message. Type mapping of them are shown in the following table.
Table 3  Type Mapping of Additional Parameters
Parameter Name Attribute/Element Type Remarks
dateTime Attribute dateTime
sessionId Attribute string
sessionRef Attribute string
requestId Attribute string
requestRef Attribute string
linkId Attribute string extended for delayed response
linkCnt Attribute integer extended for delayed response
linkExp Attribute duration extended for delayed response

7. 4  Example XML Message Fragments — The following subsections give examples of some fragments of service
messages in XML. A full message is given with envelopes and headers.
7. 4.1  addEvent  Request  —  The  following  XML  description  is  an  example  of  the  principal  part  of  service  request
message for addEvent provided by HistoryRecord objects. Because the structure of parameter ‘History’ is dependent
to event, attachment type and equipment, the standard doesn’t define it. Suppliers are required to define the structure
or negotiate with specific user. Users need to discuss with suppliers or interpret their structures.
AddEventRequest dateTime=”2004-03-29T13:05:25.000-08:00”
SessionRef=”SemiJitQs-9876543210” RequestId=”123456”
History
HistoryIndex
Id120123456789/Id
TypeUPXB Modl Die XYZ737/Type
</ HistoryIndex>
Event
Id12345678/Id
EventClassMilestone/EventClass
NamedValue
SetPoint10000/SetPoint
TotalTimes150000/TotalTimes
/NamedValue
MachineUPXB039/Machine
TimeStamp2004-03-29T13:05:18.000-08:00/TimeStamp
Event
/History
/AddEventRequest

7. 4.2  showTypes  Response  —  The  following  XML  description  is  an  example  of  the  principal  part  of  service
response message for showTypes provided by Invoice objects.
ShowTypesResponse dateTime=”2004-03-29T09:07:59.000-08:00”
SessionRef=”SemiJitQs-9876543123” RequestRef=”123443” status=”GRANTED”
AttachmentTypeUPXB Modl Die XYZ737/AttachmentType
ServiceStatus
SvcAckSuccessful/SvcAck
/ServiceStstus
/ShowTypesResponse



SEMI T12.2-0704 © SEMI 2004 6
APPENDIX 1
XML SCHEMA
NOTICE:  The material in this appendix is an official part of SEMI T12.2 and was approved by full letter ballot
procedures on April 30, 2004.
A1-1  XML Message Schema
A1-1.1  XML  Schema  —  XML  Schema  is  a  kind  of  template  for  documents.  The  following  XML  Schemas  shows
how messages in this XML protocol are represented.
A1-1.1.1  Message  Schema  —  Each  message  in  T12  has  one  XML  Schema.  Parsing  with  the  schema,  application
can understand what elements and attributes mean. Also it can check syntax easily.
A1-1.1.2  Common  Definitions  —  Common  part  of  the  schema  is  separated  and  it  is  included  in  each  message
schema.
A1-1.2  Enumeration  —  Attachment  specific  or  eqiopment  specific  enumeration  may  not  be  addressed  here.
Corresponding  part  of  the  shema  should  be  extended  or  restricted  with  ‘redefine’  element,  for  example,  in
application schema.


XML Message Schema Name:  T12ChangeNameRequestAtt.xsd      for Attachment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -  Change Name Request - - - - - - - - - - - - - -  -->
<xsd:element name="ChangeNameRequest" type="ChangeNameRequestType"/>

<xsd:complexType name="ChangeNameRequestType">
<xsd:sequence>
<xsd:element name="AttachmentName" type="xsd:string"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>xxx

</xsd:schema>


XML Message Schema Name:  T12ChangeNameResponseAtt.xsd      for Attachment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Change Name Response - - - -  - - - -    -->
<xsd:element name="ChangeNameResponse" type="ChangeNameResponseType"/>

<xsd:complexType name="ChangeNameResponseType">
<xsd:sequence>
<xsd:element name="AttachmentName" type="xsd:string" minOccurs="0" maxOccurs="1"/>


SEMI T12.2-0704 © SEMI 2004 7
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowHistoryRequestAtt.xsd      for Attachment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show History Request - - - -  - - - -    -->
<xsd:element name="ShowHistoryRequest" type="ShowHistoryRequestType"/>

<xsd:complexType name="ShowHistoryRequestType">
<xsd:sequence>
<xsd:element name="Items" type="xsd:string" minOccurs="0" maxOccurs="unbounded”
/>
<xsd:element name="Restriction" type="xsd:string" minOccurs="0"
maxOccurs="unbounded"/>
xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowHistoryResponseAtt.xsd      for Attachment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show History Response - - - -  - - - -    -->
<xsd:element name="ShowHistoryResponse" type="ShowHistoryResponseType"/>

<xsd:complexType name="ShowHistoyResponseType">
<xsd:sequence>
<xsd:element name="History" type="HistoryType" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowIdRequestAtt.xsd      for Attachment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01



SEMI T12.2-0704 © SEMI 2004 8
targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show ID Request - - - -  - - - -    -->
<xsd:element name="ShowIdRequest" type="ShowIdRequestType"/>

<xsd:complexType name="ShowIdRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowIdResponseAtt.xsd      for Attachment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show ID Response - - - -  - - - -    -->
<xsd:element name="ShowIdResponse" type="ShowIdResponseType"/>

<xsd:complexType name="ShowIdResponseType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowNameRequestAtt.xsd      for Attachment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show Name Request - - - -  - - - -    -->
<xsd:element name="ShowNameRequest" type="ShowNameRequestType"/>

<xsd:complexType name="ShowNameRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowNameResponseAtt.xsd      for Attachment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema



SEMI T12.2-0704 © SEMI 2004 9
xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show Name Response - - - -  - - - -    -->
<xsd:element name="ShowNameResponse" type="ShowNameResponseType"/>

<xsd:complexType name="ShowNameResponseType">
<xsd:sequence>
<xsd:element name="AttachmentName" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowTypeRequestAtt.xsd      for Attachment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show Type Request - - - -  - - - -    -->
<xsd:element name="ShowTypeRequest" type="ShowTypeRequestType"/>

<xsd:complexType name="ShowTypeRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowTypeResponseAtt.xsd      for Attachment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show Type Response - - - -  - - - -    -->
<xsd:element name="ShowTypeResponse" type="ShowTypeResponseType"/>

<xsd:complexType name="ShowTypeResponseType">
<xsd:sequence>
<xsd:element name="AttachmentType" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


SEMI T12.2-0704 © SEMI 2004 10


XML Message Schema Name:  T12UpdateHistoryRequestAtt.xsd      for Attachment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Update History Request - - - -  - - - -    -->
<xsd:element name="UpdateHistoryRequest" type="UpdateHistoryRequestType"/>

<xsd:complexType name="UpdateHistoryRequestType">
<xsd:sequence>
<xsd:element name="Items" type="xsd:string"/>>
<xsd:element name="History" type="HistoryType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12UpdateHistoryResponseAtt.xsd      for Attachment Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Update History Response - - - -  - - - -    -->
<xsd:element name="UpdateHistoryResponse" type="UpdateHistoryResponseType"/>

<xsd:complexType name="UpdateHistoyResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12DestructRequestExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Destruct Request - - - -  - - - -    -->
<xsd:element name="DestructRequest" type="DestructRequestType"/>

<xsd:complexType name="DestructRequestType">


SEMI T12.2-0704 © SEMI 2004 11
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12DestructResponseExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Destruct Response - - - -  - - - -    -->
<xsd:element name="DestructResponse" type="DestructResponseType"/>

<xsd:complexType name="DestructResponseType">
<xsd:sequence>
<xsd:element name="State" type="ExceptionStateType"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

<!-- - - - - - - - -$$$   State for Exception   $$$- - - - - -  - - -->
<xsd:simpleType name="ExceptionStateType">
restriction base="xsd:string"
enumeration value="CLEARED"/
enumeration value="SET"/
enumeration value="NO STATE"/
restriction
</xsd:simpleType>

</xsd:schema>


XML Message Schema Name:  T12ShowCategoryRequestExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show Category Request - - - -  - - - -    -->
<xsd:element name="ShowCategoryRequest" type="ShowCategoryRequestType"/>

<xsd:complexType name="ShowCategoryRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowCategoryResponseExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01



SEMI T12.2-0704 © SEMI 2004 12
targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show Category Response - - - -  - - - -    -->
<xsd:element name="ShowCategoryResponse" type="ShowCategoryResponseType"/>

<xsd:complexType name="ShowCategoryResponseType">
<xsd:sequence>
<xsd:element name="Category" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowCodeRequestExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show Code Request - - - -  - - - -    -->
<xsd:element name="ShowCodeRequest" type="ShowCodeRequestType"/>

<xsd:complexType name="ShowCodeRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowCodeResponseExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show Code Response - - - -  - - - -    -->
<xsd:element name="ShowCodeResponse" type="ShowCodeResponseType"/>

<xsd:complexType name="ShowCodeResponseType">
<xsd:sequence>
<xsd:element name="Code" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>



SEMI T12.2-0704 © SEMI 2004 13

XML Message Schema Name:  T12ShowDescriptionRequestExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show Description Request - - - -  - - - -    -->
<xsd:element name="ShowDescriptionRequest" type="ShowDescriptionRequestType"/>

<xsd:complexType name="ShowDescriptionRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowDescriptionResponseExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show Description Response - - - -  - - - -    -->
<xsd:element name="ShowDescriptionResponse" type="ShowDescriptionResponseType"/>

<xsd:complexType name="ShowDescriptionResponseType">
<xsd:sequence>
<xsd:element name="Description" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowIdRequestExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show ID Request - - - -  - - - -    -->
<xsd:element name="ShowIdRequest" type="ShowIdRequestType"/>

<xsd:complexType name="ShowIdRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


SEMI T12.2-0704 © SEMI 2004 14


XML Message Schema Name:  T12ShowIdResponseExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - -  - - - -     Show ID Response - - - -  - - - -    -->
<xsd:element name="ShowIdResponse" type="ShowIdResponseType"/>

<xsd:complexType name="ShowIdResponseType">
<xsd:sequence>
<xsd:element name="ExceptionId" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowStateRequestExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!--  - - - - - - Show State Request - - - - - -     -->
<xsd:element name="ShowStateRequest" type="ShowStateRequestType"/>

<xsd:complexType name="ShowStateRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowStateResponseExc.xsd      for Exception Class

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
<xsd:element name="State" type="ExeptionStateType"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>


SEMI T12.2-0704 © SEMI 2004 15
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

<!-- - - - - - - - -$$$   State for Exception   $$$- - - - - -  - - -->
<xsd:simpleType name="ExceptionStateType">
restriction base="xsd:string"
enumeration value="CLEARED"/
enumeration value="SET"/
enumeration value="NO STATE"/
restriction
</xsd:simpleType>

</xsd:schema>


XML Message Schema Name:  T12ShowSubjectRequestExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Subject Request - - - - - -  - - -->
<xsd:element name="ShowSubjectRequest" type="ShowSubjectRequestType"/>

<xsd:complexType name="ShowSubjectRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowSubjectResponseExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Subject Response - - - - - -  - - -->
<xsd:element name="ShowSubjectResponse" type="ShowSubjectResponseType"/>

<xsd:complexType name="ShowSubjectResponseType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12UpdateStateRequestExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema



SEMI T12.2-0704 © SEMI 2004 16
xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Update State Request - - - - - -  - - -->
<xsd:element name="UpdateStateRequest" type="UpdateStateRequestType"/>

<xsd:complexType name="UpdateStateRequestType">
<xsd:sequence>
<xsd:element name="State" type="ExeptionStateType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

<!-- - - - - - - - -$$$   State for Exception   $$$- - - - - -  - - -->
<xsd:simpleType name="ExceptionStateType">
restriction base="xsd:string"
enumeration value="CLEARED"/
enumeration value="SET"/
enumeration value="NO STATE"/
restriction
</xsd:simpleType>

</xsd:schema>


XML Message Schema Name:  T12UpdateStateResponseExc.xsd      for Exception Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

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


XML Message Schema Name:  T12ChangeActionRequestExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Change Action Request - - - - - -  - - -->


SEMI T12.2-0704 © SEMI 2004 17
<xsd:element name="ChangeActionRequest" type="ChangeActionRequestType"/>

<xsd:complexType name="ChangeActionRequestType">
<xsd:sequence>
<xsd:element name="Action" type="xsd:string"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ChangeActionResponseExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Change Action Response - - - - - -  - - -->
<xsd:element name="ChangeActionResponse" type="ChangeActionResponseType"/>

<xsd:complexType name="ChangeActionResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ChangeExpirationRequestExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Change Expiration Request - - - - - -  - - -->
<xsd:element name="ChangeExpirationRequest" type="ChangeExpirationRequestType"/>

<xsd:complexType name="ChangeExpirationRequestType">
<xsd:sequence>
<xsd:element name="Expiration" type="xsd:string"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ChangeExpirationResponseExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01



SEMI T12.2-0704 © SEMI 2004 18
elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Change Expiration Response - - - - - -  - - -->
<xsd:element name="ChangeExpirationResponse" type="ChangeExpirationResponseType"/>

<xsd:complexType name="ChangeExpirationResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ChangeDescriptionRequestExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Change Description Request - - - - - -  - - -->
<xsd:element name="ChangeDescriptionRequest" type="ChangeDescriptionRequestType"/>

<xsd:complexType name="ChangeDescriptionRequestType">
<xsd:sequence>
<xsd:element name="Description" type="xsd:string"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ChangeDescriptionResponseExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Change Description Response - - - - - -  - - -->
<xsd:element name="ChangeDescriptionResponse" type="ChangeDescriptionResponseType"/>

<xsd:complexType name="ChangeDescriptionResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>



SEMI T12.2-0704 © SEMI 2004 19

XML Message Schema Name:  T12DestructRequestExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - Destruct Request - - - - - - - - - - - -->
<xsd:element name="DestructRequest" type="DestructRequestType"/>

<xsd:complexType name="DestructRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12DestructResponseExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - - - - Destruct Response - - - - - - - - - - - -->
<xsd:element name="DestructResponse" type="DestructResponseType"/>

<xsd:complexType name="DestructResponseType">
<xsd:sequence>
<xsd:element name="State" type="ExpiryStateType"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

<!-- - - - - - - - -$$$   State for Expiry   $$$- - - - - -  - - -->
<xsd:simpleType name="ExpiryStateType">
restriction base="xsd:string"
enumeration value="EXPIRED"/
enumeration value="VALID"/
enumeration value="NO STATE"/
restriction
</xsd:simpleType>

</xsd:schema>


XML Message Schema Name:  T12ShowActionRequestExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>


SEMI T12.2-0704 © SEMI 2004 20

<!-- - - - - - - -   Show Action Request - - - - - -  - - -->
<xsd:element name="ShowActionRequest" type="ShowActionRequestType"/>

<xsd:complexType name="ShowActionRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowActionResponseExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Action Response - - - - - -  - - -->
<xsd:element name="ShowActionResponse" type="ShowActionResponseType"/>

<xsd:complexType name="ShowActionResponseType">
<xsd:sequence>
<xsd:element name="Action" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowDescriptionRequestExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Description Request - - - - - -  - - -->
<xsd:element name="ShowDescriptionRequest" type="ShowDescriptionRequestType"/>

<xsd:complexType name="ShowDescriptionRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowDescriptionResponseExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include


SEMI T12.2-0704 © SEMI 2004 21
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Description Response - - - - - -  - - -->
<xsd:element name="ShowDescriptionResponse" type="ShowDescriptionResponseType"/>

<xsd:complexType name="ShowDescriptionResponseType">
<xsd:sequence>
<xsd:element name="Description" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowExpirationRequestExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Expiration Request - - - - - -  - - -->
<xsd:element name="ShowExpirationRequest" type="ShowExpirationRequestType"/>

<xsd:complexType name="ShowExpirationRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowExpirationResponseExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Expiration Response - - - - - -  - - -->
<xsd:element name="ShowExpirationResponse" type="ShowExpirationResponseType"/>

<xsd:complexType name="ShowExpirationResponseType">
<xsd:sequence>
<xsd:element name="Expiration" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowIdRequestExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema



SEMI T12.2-0704 © SEMI 2004 22
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


XML Message Schema Name:  T12ShowIdResponseExp.xsd      for Expiry Class

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
<xsd:element name="ExpiryId" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowStateRequestExp.xsd      for Expiry Class

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


XML Message Schema Name:  T12ShowStateResponseExp.xsd      for Expiry Class



SEMI T12.2-0704 © SEMI 2004 23
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
<xsd:element name="State" type="ExpiryStateType"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

<!-- - - - - - - - -$$$   State for Expiry   $$$- - - - - -  - - -->
<xsd:simpleType name="ExpiryStateType">
restriction base="xsd:string"
enumeration value="EXPIRED"/
enumeration value="VALID"/
enumeration value="NO STATE"/
restriction
</xsd:simpleType>

</xsd:schema>


XML Message Schema Name:  T12ShowSubjectRequestExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Subject Request - - - - - -  - - -->
<xsd:element name="ShowSubjectRequest" type="ShowSubjectRequestType"/>

<xsd:complexType name="ShowSubjectRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowSubjectResponseExp.xsd      for Expiry Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Subject Response - - - - - -  - - -->
<xsd:element name="ShowSubjectResponse" type="ShowSubjectResponseType"/>


SEMI T12.2-0704 © SEMI 2004 24

<xsd:complexType name="ShowSubjectResponseType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12DestructRequestHbf.xsd      for HistoryBuffer Class

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


XML Message Schema Name:  T12DestructResponseHbf.xsd      for HistoryBuffer Class

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
<xsd:element name="State" type="HistoryBufferStateType"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

<!-- - - - - - - - -$$$   State for History Buffer   $$$- - - - - -  - - -->
<xsd:simpleType name="HistoryBufferStateType">
restriction base="xsd:string"
enumeration value="EMPTY"/
enumeration value="BUFFERED"/
enumeration value="NO STATE"/
restriction
</xsd:simpleType>

</xsd:schema>


SEMI T12.2-0704 © SEMI 2004 25


XML Message Schema Name:  T12SetReleaseConditionRequestHbf.xsd   for HistoryBuffer
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Set Release Condition Request - - - - - -  - - -->
<xsd:element name="SetReleaseConditionRequest" type="SetReleaseConditionRequestType"/>

<xsd:complexType name="SetReleaseConditionRequestType">
<xsd:sequence>
<xsd:element name="Condition" type="xsd:string"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12SetReleaseConditionResponseHbf.xsd   for HistoryBuffer
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Set Release Condition Response - - - - - -  - - -->
<xsd:element name="SetwReleaseConditionResponse"
type="SetReleaseConditionResponseType"/>

<xsd:complexType name="SetReleaseConditionResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowAttachmentRequestHbf.xsd   for HistoryBuffer Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Attachment Request - - - - - -  - - -->
<xsd:element name="ShowAttachmentRequest" type="ShowAttachmentRequestType"/>


SEMI T12.2-0704 © SEMI 2004 26

<xsd:complexType name="ShowAttachmentRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowAttachmentResponseHbf.xsd   for HistoryBuffer Class

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


XML Message Schema Name:  T12ShowHistoryRequestHbf.xsd   for HistoryBuffer Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show History Request - - - - - -  - - -->
<xsd:element name="ShowHistoryRequest" type="ShowHistoryRequestType"/>

<xsd:complexType name="ShowHistoryRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowHistoryResponseHbf.xsd   for HistoryBuffer Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show History Response - - - - - -  - - -->


SEMI T12.2-0704 © SEMI 2004 27
<xsd:element name="ShowHistoryResponse" type="ShowHistoryResponseType"/>

<xsd:complexType name="ShowHistoyResponseType">
<xsd:sequence>
<xsd:element name="History" type="HistoryType" minOccurs="0"
maxOccurs="unbounded"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowReleaseConditionRequestHbf.xsd   for HistoryBuffer
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Release Condition Request - - - - - -  - - -->
<xsd:element name="ShowReleaseConditionRequest"
type="ShowReleaseConditionRequestType"/>

<xsd:complexType name="ShowReleaseConditionRequestType">
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowReleaseConditionResponseHbf.xsd   for HistoryBuffer
Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Show Release Condition Response - - - - - -  - - -->
<xsd:element name="ShowReleaseConditionResponse"
type="ShowReleaseConditionResponseType"/>

<xsd:complexType name="ShowReleaseConditionResponseType">
<xsd:sequence>
<xsd:element name="Condition" type="xsd:string"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12ShowStateRequestHbf.xsd   for HistoryBuffer Class


SEMI T12.2-0704 © SEMI 2004 28

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


XML Message Schema Name:  T12ShowStateResponseHbf.xsd   for HistoryBuffer Class

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
<xsd:element name="State" type="HistoryBufferStateType"/>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

<!-- - - - - - - - -$$$   State for History Buffer   $$$- - - - - -  - - -->
<xsd:simpleType name="HistoryBufferStateType">
restriction base="xsd:string"
enumeration value="EMPTY"/
enumeration value="BUFFERED"/
enumeration value="NO STATE"/
restriction
</xsd:simpleType>

</xsd:schema>


XML Message Schema Name:  T12UpdateHistoryRequestHbf.xsd   for HistoryBuffer Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Update History Request - - - - - -  - - -->


SEMI T12.2-0704 © SEMI 2004 29
<xsd:element name="UpdateHistoryRequest" type="UpdateHistoryRequestType"/>

<xsd:complexType name="UpdateHistoryRequestType">
<xsd:sequence>
<xsd:element name="History" type="HistoryType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12UpdateHistoryResponseHbf.xsd   for HistoryBuffer Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Update History Response - - - - - -  - - -->
<xsd:element name="UpdateHistoryResponse" type="UpdateHistoryResponseType"/>

<xsd:complexType name="UpdateHistoyResponseType">
<xsd:sequence>
<xsd:element name="ServiceStatus" type="ServiceStatusType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegResponseAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12AdoptRequestHdb.xsd      for HistoryDB Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01

targetNamespace=http://www.semi.org/Traceability/T12.2-V01

elementFormDefault="qualified" attributeFormDefault="qualified">

<xsd:include
schemaLocation="http://www.semi.org/Traceability/T12.2-V01/CommonDefinitions"/>

<!-- - - - - - - -   Adopt Request - - - - - -  - - -->
<xsd:element name="AdoptRequest" type="AdoptRequestType"/>

<xsd:complexType name="AdoptRequestType">
<xsd:sequence>
<xsd:element name="AttachmentId" type="xsd:string"/>
<xsd:element name="History" type="HistoryType"/>
</xsd:sequence>
<xsd:atributeGroup ref="RegRequestAttr"/>
</xsd:complexType>

</xsd:schema>


XML Message Schema Name:  T12AdoptResponseHdb.xsd      for HistoryDB Class

<xsd:schema xmlns=http://www.w3.org/2001/XMLSchema

xmlns=http://www.semi.org/Traceability/T12.2-V01
