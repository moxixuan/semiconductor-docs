---
title: "F97-0305 - © SEMI 2005 11..."
description: "SEMI标准文档"
sidebar_label: "F97-0305 - © SEMI 2005 11..."
sidebar_position: 890
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-089.pdf'
  chapter: 89
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/089.pdf"
  pdfSize="0.91MB"
  title="F97-0305 - © SEMI 2005 11..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI F97-0305 © SEMI 2005 11
9. 4.5.3  The locked sub state of Run and Stand-by may be used in order to force the FPU to maintain the current Run
or  Stand-by  state  until  the  lock  is  disabled.    The  reasons  causing  the  lock  are  out  of  scope  of  this  standard.    In
addition to the trigger to unlock, only critical failures can cause the FPU to leave the locked sub state.  These critical
failures  are  being  defined  on  a  case  by  case  basis  by  the  purchaser  and  supplier  of  the  FPU  and  the  system
integrator.


Run-Mode

C
1
Run
Not_locked
Locked

10
12
11
14

Down
Stand-by
Not_locked
Locked

4
6
5
8
3
2
13
9
7

Figure 7
State Transition Diagram Run-Mode



SEMI F97-0305 © SEMI 2005 12

Table 4  State Transition Table Run-Mode
Number    Previous    State    Trigger                       New                       State                       Actions                       Remark
1 (no state) Start up of FPU. Down
or
Stand by

or


Run
None. Dependent on type of FPU;

Normally when to Stand-by
then to Stand by and not
locked, but an automatic
function may force FPU to
Stand-by and locked;

Normally when to Run then to
Run and not locked, but an
automatic function may force
FPU to Run and locked.
2 Down Trigger to activate the
principal availability of the
FPU (e.g. operator action or
logical function).
Stand-by FPU activates its stand-
by functions including
watchdog-toggle.
Normally to Stand-by and not
locked, but an automatic
function may force FPU to
Stand-by and locked.
3       Stand-by
and
Not_Locked
Failure occurred. Down FPU deactivates its
stand-by functions.

4       Stand       by
and
Not_Locked
Trigger to lock Stand by
state.
Stand-by and
Locked
FPU ignores trigger and
any request to change
state of Run-mode.

5       Stand-by
and
Locked
Trigger to perform a
scheduled down or non
critical failure.
Stand-by and
Locked
FPU ignores trigger and
any request to change
state of Run-mode.

6       Stand-by
and
Locked
Trigger to unlock. Stand by and
Not_Locked
FPU releases pending
triggers to change to
other states.

7       Stand-by
and
Locked
Critical failure occurred. Down FPU deactivates its stand
by functions.

8       Stand-by
and
Not_Locked
Trigger to activate Run (e.g.
operator action or logical
function).
Run
and
Not_Locked
FPU activates its running
functions.

9       Run
and
Not_Locked
Trigger to activate Stand-by
(e.g. operator action or
logical function).
Stand-by
and
Not_Locked
FPU deactivates its
running functions.

10      Run
and
Not_Locked
Trigger to lock Run. Run
and
Locked
FPU ignores trigger and
any request to change
state of Run-mode.

11      Run
and
Locked
Trigger to perform a
scheduled down or non
critical failure.
Run
and
Locked
FPU ignores trigger and
any request to change
state of Run-mode.

12      Run
and
Locked
Trigger to release locked
state of Run.
Run
and
Not_Locked
FPU releases pending
triggers to change to
other states.

13      Run
and
Locked
Critical failure occurred. Down FPU stops its running
functions.

14      Run
and
Not_Locked
Trigger to perform a
scheduled down or a critical
failure.
Down                FPU                deactivates                its
running functions.



SEMI F97-0305 © SEMI 2005 13
9. 4.6  Alarm-Mode
9. 4.6.1  Alarms are being defined on a case by case basis between the purchaser and the supplier of the FMCS and
FPUs and the system integrator.  Alarm-Mode specifies whether an alarm occurred:
• No_Alarm: No alarm present.
• Alarm: An alarm is present (at least one part of the FPU is in alarm condition
).

Alarm-Mode
No_AlarmAlarm

2
3
1


Figure 8
State Transition Diagram Alarm-Mode

Table 5  State Transition Table Alarm-Mode
Number         Previous         State         Trigger                            New                            State                            Actions                            Remark
1 (no state) Start up of FPU. No_Alarm None.
2 No_Alarm Alarm event occurred. Alarm FPU may perform
alarm routines.

3           Alarm           Alarm           condition
disappeared.
No_Alarm                     FPU                     releases
alarm routines.


9. 4.7  Warning-Mode
9. 4.7.1  Warnings  are  being  defined  on  a  case  by  case  basis  between  the  purchaser  and  supplier  of  the  FMCS  and
FPUs and the system integrator.  Warning-Mode specifies whether a warning occurred:
• No_Warning: No warning present
• Warning: Warning present.


Warning-Mode
No_WarningWarning
2
3
1


Figure 9
State Transition Diagram Warning-Mode



SEMI F97-0305 © SEMI 2005 14
Table 6  State Transition Table Warning-Mode
Number         Previous         State         Trigger                            New                            State                            Actions                            Remark
1 (no state) Start up of FPU. No_Warning None.
2 No_Warning Warning event occurred. Warning FPU may perform
warning routines.

3           Warning           Warning           condition
disappeared.
No_Warning                 FPU                 releases
warning routines.


9. 4.8  Error-Mode
9. 4.8.1  Errors are being defined on a case by case basis by the purchaser and supplier of the FMCS and FPUs and
the system integrator.  Error-Mode specifies whether an error occurred:
• No_Error: No error present.
• Error: Error present.

Error-Mode
No_Error Error
2
3
1


Figure 10
State Transition Diagram Error-Mode

Table 7  State Transition Table Error-Mode
Number       Previous       State       Trigger                         New                         State                         Actions                            Remark
1 (no state) Start up of FPU. No_Error FPU may release
error routines.

2 No_Error Error occurred. Error FPU may perform
error routines.

3           Error           Error           condition
disappeared.
No_Error FPU may release
error routines.


9. 4.9  Maintenance-Mode
9. 4.9.1  Maintenance-Mode specifies whether maintenance is required or no maintenance is required:
• No_Maintenance: No maintenance required.
• Maintenance:  Maintenance  is  required  (at  least  one  part  of  the  FPU  requires  maintenance  at  the  site  of  the
FPU).


SEMI F97-0305 © SEMI 2005 15
Maintenance-Mode
No_MaintenanceMaintenance
2
3
1


Figure 11
State Transition Diagram Maintenance-Mode

Table 8  State Transition Table Maintenance-Mode
Number             Previous             State             Trigger                              New                              State                              Actions                              Remark
1 (no state) Start up of FPU. No_Maintenance None.
2 No_Maintenance Error or preventive
maintenance event
occurred.
Maintenance FPU may request
maintenance.

3         Maintenance         Error         condition         or
preventive maintenance
condition disappeared.
No_Maintenance                  None.

9. 4.10  Simulation-Mode
9. 4.10.1  Simulation-Mode specifies whether the FPU or parts of the FPU are simulated:
• No_Simulation: FPU operates not in simulation mode (simulation turned off).
• Simulation: FPU or parts of the FPU are simulated.  FPU functions are performed using simulated I/O signals.

Simulation-Mode
No_Simulation Simulation
2
3
C
1


Figure 12
State Transition Diagram Simulation-Mode



SEMI F97-0305 © SEMI 2005 16

Table 9  State Transition Table Simulation-Mode
Number           Previous           State           Trigger                     New                     State                         Actions                     Remark
1 (no state) Start up of FPU.   No_Simulation or
Simulation
None.                           Dependent                           on                           local
operator action.
2 No_Simulation Local or remote
operator action.
Simulation FPU simulates parts
of FPU or the entire
FPU functions.

3 Simulation Local or remote
operator action.
No_Simulation                 FPU                 disables
simulation of parts of
the FPU or the entire
FPU functions.


9. 5  Operations Between FMCS and FPUs
9. 5.1  The Table below lists the operations between the FMCS and the FPU.
Table 10  Operation Definition
Operation                                                         Description                                                          Mandatory/Optional
Get Status FMCS requests status data from FPU. mandatory
Set Data FMCS requests FPU to update data in the FPU. optional
Get Data FMCS requests to retrieve data from the FPU. optional

9. 5.2  Get Status — Is used by the FMCS to request the status of the FPU.
Table 11  Status Parameters
Parameter                                   Description                                   Direction                                   Data                                   Type
Tag Local identifier for the FMCS. FMCS ->
FPU
Out of scope.
Status value Status field values of the FPU. FPU ->
FMCS
See Table 12 for details.



SEMI F97-0305 © SEMI 2005 17

Table 12  Status Field Values
Field                                   Bit                                   Meaning                                   Mandatory/optional
Watchdog-Toggle                                             0                                             0/1                                             mandatory
OP-Mode                                                           1                                                           0:                                                           Manual
1: Automatic
mandatory
Control-Mode                                                    2                                                    0:                                                    Local (default, when not
supported)
1: Remote (FMCS)
optional
Run-Mode 3-4 0: Down (unscheduled)
1: Down (scheduled)
2: Stand by
3: Run
mandatory
Alarm-Mode                                                      5                                                      0:                                                      No_Alarm (default, when not
supported)
1: Alarm
optional
Warning-Mode 6 0: No_Warning (default, when not
supported)
1: Warning
optional
Error-Mode                                                       7                                                       0:                                                       No_Error
1: Error
mandatory
Maintenance-Mode 8 0: No_Maintenance (default, when
not supported)
1: Maintenance
optional
Simulation-Mode                                              9                                              0:                                              No_Simulation (default, when
not supported)
1: Simulation
optional
Lock-Mode 10 0: Not_Locked (default, when not
supported)
1: Locked
optional
Reserved                                                        11-15                                                        none                                                        optional

9. 5.3  Set Data — Is used by the FMCS to set data in the FPU.  Upon receiving this, the FPU shall update the data
with the Set value.
Table 13  Set Data Parameter
Parameter                                  Description                                  Direction                                    Data                                    Type
Tag Local identifier for the FMCS. FMCS ->
FPU
Out of scope.
Set value Value of the Set parameter field. FMCS ->
FPU
Must be agreed between suppliers and purchasers.
See Related Information 2.

9. 5.4  Get Data — Is used by the FMCS to get data from the FPU.  Upon receiving this from the FPU, the FMCS
shall update its data cache.
Table 14  Get Data Parameter
Parameter                                  Description                                  Direction                                  Form
Tag Local identifier for the FMCS. FMCS ->
FPU
Out of scope.
Get Parameter value Value of the Get parameter field. FPU ->
FMCS
Must be agreed between suppliers an purchasers.
See Related Information 2.


SEMI F97-0305 © SEMI 2005 18
10  Mapping to Various Communication Solutions
10. 1  This  standard  does  not  make  any  assumptions  about  how  the  mapping  to  the  communications  protocols  is
made.
11  Test Methods and Compliance
11. 1  Overall  Precondition  —  The  precondition  for  testing  the  FPU  (and  the  FMCS)  is  the  agreement  between
supplier and purchaser on a common set of issues which include:
• communication hardware and protocols to be used for the integration between FMCS and FPU,
• data formats and semantics to be transferred between FMCS and FPU,
• FMCS and FPU are initialized, the FPU reflects already a valid run state,
• FMCS shall be able to issue a Get Status, and
• FMCS shall be able to visualize the results of the tests.
11. 1.1  See ordering information (§7) and Related Information 2 (§R2).
11. 2  Tests
11. 2.1  Get Status Test
11. 2.1.1  Preconditions:
• FMCS and FPU are connected.
• FMCS is ready to issue a Get Status.
11. 2.1.2  Test Operations:
• Operation 1: The FMCS shall issue a Get Status against the FPU.
• Operation  2:  The  FMCS  shall  issue  a  Get  Status  against  the  FPU.    The  FPU  shall  alternate  the  Watchdog-
Toggle.
• Operation 3..n: The status of all status variables at the FPU is forced at least to change once; after each status
change a new Get Status request shall be issued against the FPU.
11. 2.1.3  Post Conditions:
• Post condition 1: The FPU shall respond with all requested parameters in the Status Response.  The result shall
be visualized by the FMCS and show the returned values of all supported status variables.
• Post  condition  2:  The  FMCS  shall  visualize  that  the  FPU  is  still  alive  or  not  alternating  the  Watchdog-Toggle
within the specified time window.
• Post condition 3..n: The FPU shall respond with the changed status variable values.  In each case the result of
all supported status variables shall be visualized by the FMCS.
11. 2.1.4  All  status  values  of  the  Run-Mode  shall  be  used  at  the  FPU  to  show  that  state  changes  are  correctly
maintained and transmitted to the FMCS.
11. 2.2  Set Data Test (if supported by FPU)
11. 2.2.1
Preconditions:
• FMCS and FPU are connected.
• FMCS is ready to issue a Set Data.
• FMCS shall be able to enter the data to be transmitted by Set Data.
11. 2.2.2  Test Operations:
• Operation 1..n: The FMCS shall issue a Set Data against the FPU.


SEMI F97-0305 © SEMI 2005 19
11. 2.2.3  Post Conditions:
• Post condition 1..n: The FPU shall reflect the new value of the variable set by the Set Data.
11. 2.2.4  It is recommended that all parameters supported by Set Data are tested.
11. 2.3  Get Data Test (if supported by FPU)
11. 2.3.1  Preconditions:
• FMCS and FPU are connected.
• FMCS is ready to issue a Get Data.
11. 2.3.2  Test Operations:
• Operation 1..n: A test person shall set the variable at the FPU to a particular value.  The FMCS shall issue a Get
Data against the FPU.
11. 2.3.3  Post Conditions:
• Post condition 1..n: The FMCS shall visualize the new value of the variable.
11. 2.3.4  It is recommended that all parameters supported by Get Data are tested.
11. 3  Compliance
11. 3.1  Table 15 provides a checklist for compliance with this standard.
Table 15  Compliance Checklist
Section                           Implemented                           Compliant
Fundamental Requirements
Watchdog-Toggle                  9.4.2                  Yes   No Yes   No
OP-Mode                               9.4.3                               Yes   No Yes   No
Run-Mode                              9.4.5                              Yes   No Yes   No
Error-Mode                            9.4.8                            Yes   No Yes   No
Get Status Operation 9.5.2 Yes   No Yes   No
Optional Capabilities
Control-Mode                        9.4.4                        Yes   No Yes   No
Alarm-Mode                          9.4.6                          Yes   No Yes   No
Warning-Mode                      9.4.7                      Yes   No Yes   No
Maintenance-Mode                9.4.9                Yes   No Yes   No
Simulation Mode 9.4.10 Yes   No Yes   No
Lock-Mode                            9.4.5.2                            Yes   No Yes   No
Set Data Operation 9.5.3 Yes   No Yes   No
Get Data Operation 9.5.4 Yes   No Yes   No




SEMI F97-0305 © SEMI 2005 20
RELATED INFORMATION 1
APPLICATION EXAMPLES
NOTICE: This related information is not an official part of SEMI F97 and was derived from work of the originating
task force.  This related information was approved for publication by full letter ballot on November 10, 2004.
R1-1  Application Examples
R1-1.1  In  order  to  help  with  understanding  of  FPU  states  specified  in  this  standard,  this  Related  Information
provides  examples  of  their  use.    Examples  of  simple  and  more  complex  FPUs  are  given.    The  status  of  the  FPU
retrieved by the FMCS is depicted in a table.  In addition, a picture is given that might visualize the FPU status by
the FMCS.

R1-2 Simple FPU – Pump
Table R1-1  Status Response of a Pump in Operation

Status Field Name Meaning Value FMCS- Visualization
Watchdog-Toggle Toggle value (not supported) 0
OP-Mode                                     Automatic                                     1
Control-Mode                              Local                              0
Run-Mode                                   Run                                   3
Alarm-Mode                                No_Alarm                                0
Warning-Mode                            No_Warning                            0
Error-Mode                                  No_Error                                  0
Maintenance-Mode                     No_Maintenance                     0
Simulation-Mode                         No_Simulation                         0
Lock-Mode                                  Not_Locked                                  0



Table R1-2  Status Response of a Pump That is Not Operating Because of an Alarm, e.g. Motor-Overheat
Status Field Name Meaning Value FMCS- Visualization
Watchdog-Toggle Toggle value (not supported) 0
OP-Mode                                     Automatic                                     1
Control-Mode                              Local                              0
Run-Mode                                   Down                                   (unscheduled)                                   0
Alarm-Mode                                Alarm                                1
Warning-Mode                            No_Warning                            0
Error-Mode                                  No_Error                                  0
Maintenance-Mode                     No_Maintenance                     0
Simulation-Mode                         No_Simulation                         0
Lock                                             Not_Locked                                             0





SEMI F97-0305 © SEMI 2005 21
R1-2 Complex FPU – Makeup Air Unit (MAU)
Table R1-3  Status Response of a MAU in Run, Locked and Automatic Mode
Status Field Name Meaning Bit-value
Watchdog-Toggle                        Toggle                        value                        0/1
OP-Mode                                     Automatic                                     1
Control-Mode                              Remote                              1
Run-Mode                                   Run                                   3
Alarm-Mode                                Alarm                                0
Warning-Mode                            No_Warning                            0
Error-Mode                                  No_Error                                  0
Maintenance-Mode                     No_Maintenance                     0
Simulation-Mode                         No_Simulation                         0
Lock                                             Locked                                             1

Makeup Air Unit
MAU007
LA

Table R1-4  Status Response of a MAU in Maintenance Mode
Status Field Name Meaning Bit-value
Watchdog-Toggle                        Toggle                        value                        0/1
OP-Mode                                     Automatic                                     1
Control-Mode                              Local                              0
Run-Mode                                   Stand-by                                   2
Alarm-Mode                                Alarm                                0
Warning-Mode                            No_Warning                            0
Error-Mode                                  No_Error                                  0
Maintenance-Mode                     Maintenance                     1
Simulation-Mode                         No_Simulation                         0
Lock                                             Not_Locked                                             0

Makeup Air Unit
MAU007
M
L




SEMI F97-0305 © SEMI 2005 22
RELATED INFORMATION 2
CHECKLIST FOR SUPPLIERS AND PURCHASERS
NOTICE: This related information is not an official part of SEMI F97 and was derived from work of the originating
task force.  This related information was approved for publication by full letter ballot on November 10, 2004.
R2-1  Checklist of Information Exchanged
R2-1.1  Table  R2-1  lists  the  information  that  needs  to  be  agreed  upon  by  purchasers,  system  integrators  and
suppliers for a particular application within the focus of this standard.
Table R2-1  Template for the Information Exchanged Between FMCS and FPU
Project:
FPU:
Supplier FPU:
FPU Model:
Supplier FMCS:
FMCS Model:
Protocol FPU/FMCS:

NOTE 1:  Table R2-1 is comprised of three sections – General Information, Status Information, and Data Information
General Information
Status Information
Tag:
Field                Bit                Meaning                Issue                Comment/Value
Watchdog-toggle 0 0/1 Supported?    Yes / No
Frequency?

OP-Mode                      1                      0:                      Manual
1: Automatic
Variable supported?    Yes / No
Initial state when started?
Manual
Automatic
State-Transitions supported? Yes / No
Restrictions to switch between states?

Control-Mode               2               0:               Local
1: Remote
Variable supported?    Yes / No
Initial state when started?
Local
Remote
State-Transitions supported? Yes / No

Run-Mode 3-4   0: Down (unscheduled)
1: Down (scheduled)
2: Stand-by
3: Run
Variable supported?    Yes / No
Initial state when started?
Down (unscheduled)
Down (scheduled)
Stand-by
Run
State-Transitions supported? Yes / No
Restrictions to switch between states?




SEMI F97-0305 © SEMI 2005 23
Tag:
Field                Bit                Meaning                Issue                Comment/Value
Alarm-Mode                 5                 0:                 No_Alarm
1: Alarm
Variable supported?    Yes / No
State-Transitions supported? Yes / No
Type of acknowledgement?

Warning-Mode             6             0:             No_Warning
1: Warning
Variable supported?    Yes / No
State-Transitions supported? Yes / No

Error-Mode                  7                  0:                  No_Error
1: Error
Variable supported?    Yes / No
State-Transitions supported? Yes / No

Maintenance-Mode      8       0:      No_Maintenance
1: Maintenance
Variable supported?    Yes / No
State-Transitions supported? Yes / No

Simulation-Mode 9 0 : No_Simulation
1 : Simulation
Variable supported?    Yes / No
State-Transitions supported? Yes / No

Initial state when started?
No_Simulation
Simulation
Means provided to switch between states?

Lock-Mode                   10                   0:                   Not_Locked
1: Locked
Variable supported?    Yes / No
List critical failures which cause FPU to
leave locked state:

Others
(Describe)




SEMI F97-0305 © SEMI 2005 24
Data Information
FPU System Output Data
Analog Data Set Data
Possible
(yes/no)
Tag         Data
Type
Update
Cycle
Time
Value
Range
Value StepPolarity Alarm
Levels
Warning
Levels


Discrete Data Set Data
Possible
(yes/no)
Tag         Data
Type
Update
Cycle
Time
Meaning



FPU Subcontrol Level Data
Subsystem/Component:
Analog Data Set Data
Possible
(yes/no)
Tag         Data
Type
Update
Cycle
Time
Value
Range
Value StepPolarity Alarm
Levels
Warning
Levels


Discrete Data Set Data
Possible
(yes/no)
Tag         Data
Type
Update
Cycle
Time
Meaning



Subsystem/Component:
Analog Data Set Data
Possible
(yes/no)
Tag         Data
Type
Update
Cycle
Time
Value
Range
Value StepPolarity Alarm
Levels
Warning
Levels


Discrete Data Set Data
Possible
(yes/no)
Tag         Data
Type
Update
Cycle
Time
Meaning





SEMI F97-0305 © SEMI 2005 25
R2-1.2  SEMI  E6  recommends  data  to  be  supplied  in  the  semiconductor  equipment  installation  documentation
including their units of measurement.  It is recommended that FPUs and FMCS use the same units of measurement
for the data to be exchanged between them.
R2-2  Example
R2-2.1  The tables below give examples of the template tables listed in R2-1.
Table R2-2  Example of the Use of the Tables R2-1 for One Particular FPU
General Information
Project: Fab XXX, Purchaser Name, Location
FPU: UPW (Ultra Pure Water)
FPU Model: YYY-ZZZ
Supplier:                               Supplier                               Name
Protocol FPU/FMCS: PROFIBUS-DP

Status Information
Tag:                              CUB_UPW_STATUS
Field                Bit                Meaning                Issue                Comment/Value
Watchdog-Toggle 0 0/1 Supported?    Yes / No
Frequency?


60 seconds
OP-Mode                      1                      0:                      Manual
1: Automatic
Supported?    Yes / No
Initial state when started?
⌧Manual
Automatic
Restrictions to switch between states?





None
Control-Mode               2               0:               Local
1: Remote
Supported?    Yes / No
Initial state when started?
⌧Local
Remote

Run-Mode                    3-4                    0:                    Down
(unscheduled)
1: Down (scheduled)
2: Stand-by
3: Run
Supported?    Yes
/ No
Initial state when started?
Down (unscheduled)
Down (scheduled)
⌧Stand-by
Run

Alarm-Mode                 5                 0:                 No_Alarm
1: Alarm
Supported?    Yes / No
Type of acknowledgement?

Operator must
acknowledge at FPU
Warning-Mode             6             0:             No_Warning
1: Warning
Supported?    Yes / No
Error-Mode                  7                  0:                  No_Error
1: Error
Supported?    Yes / No
Maintenance-Mode      8       0:      No_Maintenance
1: Maintenance
Supported?    Yes / No


SEMI F97-0305 © SEMI 2005 26
Tag:                              CUB_UPW_STATUS
Field                Bit                Meaning                Issue                Comment/Value
Simulation-Mode 9 0 : No_Simulation
1 : Simulation
Supported?    Yes / No
Initial state when started?
⌧No_Simulation
Simulatiom
Means to switch between states?





Manual switch at control
panel of FPU
Lock-Mode                   10                   0:                   Not_Locked
1: Locked
Supported?    Yes / No
Critical failures which cause FPU to leave
locked state?



see functional design
specification xxxx
Others
(Describe)


Data Information
FPU System Output Data
Analog Data Set Data
Possible
(yes/no)
Tag              Data              Type              Update
Cycle
Time

Value
Range
Value
Step
Polarity         Alarm
Levels
Warning
Levels
Temperature
(°C)
Yes             CUB_UPW_
TIC_401
Real 32 2 s 20–100 0.1 Unipolar Low: 22
High: 40
Low: 25
High: 30
Resistivity
(MegaOhm-cm)
No              CUB_UPW_
RES_402
Real 32 2 s 10–100 0.1 Unipolar Low: 16     Low: 17
Operation time
(hours)
No              CUB_UPW_
TIME_403
Real 32 6 min 0–100,000  0.1 Unipolar
FPU Subcontrol Level Data
Subsystem/Component:          Reverse          Osmosis
Analog Data Set Data
Possible
(yes/no)
Tag              Data              Type              Update
Cycle
Time

Value
Range
Value
Step
Polarity         Alarm
Levels
Warning
Levels
Capacity (%) No CUB_UPW_
ROS_CAP
Integer 16 5 s 0–100 1 Unipolar High: 95 High: 90
Discrete Data Set Data
Possible
(yes/no)
Tag              Data              Type              Update
Cycle
Time

Meaning
Cartridge RO-1
(on/off)
No              CUB_UPW_
RO1_STATUS
Unsigned8     2 s 0: Off
1: On
Cartridge RO-2
(on/off)
No              CUB_UPW_
RO2_STATUS
Unsigned8     2 s 0: Off
1: On



SEMI F97-0305 © SEMI 2005 27
Subsystem/Component:          Pumps
Discrete Data Set Data
Possible
(yes/no)
Tag              Data              Type              Update
Cycle
Time

Meaning
Pump 1
(on/off)
No              CUB_UPW_
PUMP1_STAT
US
Unsigned8     5 s 0: Off
1: On
Pump 2
(on/off)
No              CUB_UPW_
PUMP2_STAT
US
Unsigned8     5 s 0: Off
1: On



NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular application.  The determination of the suitability of the standard is solely the responsibility of the user.
Users are cautioned to refer to manufacturer's instructions, product labels, product data sheets, and other relevant
literature, respecting any materials or equipment mentioned herein.  These standards are subject to change without
notice.
By  publication  of  this  standard,  Semiconductor  Equipment  and  Materials  International  (SEMI)  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  items  mentioned  in  this
standard.  Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights are entirely their own responsibility.



Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081  Zanker  Road,  San  Jose,  CA  95134.    Reproduction
of  the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI F98-0305 © SEMI 2005 1
SEMI F98-0305
GUIDE FOR TREATMENT OF REUSE WATER IN SEMICONDUCTOR
PROCESSING
This guide was technically approved by the Global Facilities Committee and is the direct responsibility of the
North American Facilities Committee.  Current edition approved by the North American Regional Standards
Committee  on  December  10,  2004.    Initially  available  at  www.semi.org  February  2005;  to  be  published
March 2005.
1  Purpose
1. 1  This guide establishes definitional requirements for industrial water systems that reuse water in a semiconductor
manufacturing  facility.    It  is  intended  to  establish  a  common  basis  for  developing  detailed  specifications  in
subsequent documents concerning design, performance, optimization, and monitoring of such systems.
1. 2  This  document  may  be  used  by  users  and  suppliers  as  a  basis  for  developing  site-specific  specifications  and
performance criteria.
2  Scope
2. 1  This  guide  applies  to  water  systems  designed  for  reuse  of  water  including  reclaim  and  recycle,  used  in
semiconductor manufacturing facilities, supplying water to a variety of uses.  Such uses include directing waters to
the  front  end  of  a  UPW  system,  to  cooling  systems,  scrubbers,  thermal  processes,  and  to  irrigation  systems,
depending on the quality of the water.
2. 2  This guide can be used to understand the design elements and functionality of water systems that support reuse
of water.  Although such systems can be retrofitted into existing manufacturing factories, there is a broader range of
opportunities available in new facilities that can be designed with water saving applications in mind.
NOTICE:  This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory or other limitations prior to use.
3  Limitations
3. 1  This guide does not define the actual specifications generally negotiated between the user and the manufacturer
of the reclaim or recycle system.
3. 2  This guide does not address the methodology for optimizing the reuse of spent rinse waters.
3. 3  This guide does not address the frequency or scope of ongoing maintenance for reuse water systems including
change-out of resin beds and replacement of filters.
3. 4  This  guide  does  not  describe  the  broad  range  of  possible  reuse  opportunities  and  the  associated  water  quality
required for each.
3. 5  This  guide  does  not  intend  to  cover  any  of  the  important  safety  considerations  that  relate  to  the  proper
installation, operation, or maintenance of a reuse water system.
4  Referenced Standards
4. 1  SEMI Standards
SEMI E49 — Guide for High Purity and Ultrahigh Purity Piping Performance, Subassemblies, and Final Assemblies
SEMI F63 — Guide for Ultrapure Water System Used in Semiconductor Processing
SEMI S2 — Environmental, Health, and Safety Guideline for Semiconductor Manufacturing Equipment


SEMI F98-0305 © SEMI 2005 2
4. 2  Other Standards
“Strategies for Water Reuse Reduction in Semiconductor Manufacturing”, Technology Transfer 97013232A-ENG
1

2004 International Technology Roadmap for Semiconductors
1

NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.
5  Terminology
5. 1  Acronyms and Abbreviations
5. 1.1  UPW — Ultrapure Water
5. 2  Definitions
5. 2.1  spent water — any discharge water that is consumed or processed and is ready to be discharged to drain.
5. 2.2  UPW reclaim — the reuse of spent water as feed water for a process different from the one that discharged it,
e.g.  RO reject fed into cooling towers.
5. 2.3  UPW  recycle  —  the  reuse  of  spent  water  as  feed  water  for  the  same  process  that  discharged  it  (Point-of-
Discharge (POD) recycling), or  the plant UPW system.
5. 2.4  UPW reuse — the secondary use of spent water.
6  Design Components and Elements
6. 1  Collection  of  Waste  Streams  —  The  most  common  collection  system  includes  fab-wide  gravity  collection
piping  using  PVC  or  PVDF  transfer  piping  and  associated  pipe  racks  and  tunnels  to  the  collection  tanks.    Proper
venting is also critical to correct operation.  The system may also include a reclaim pit, pumps, tanks, and controls.
Separate holding tanks are used for each grade of water or type of waste stream so that routing of waste and types of
treatment can be matched to specific needs (see Figure 1).
6. 1.1  A key consideration for the design of a water reuse system is the ability to separate different grades of water
and collect each type of effluent.  Typical types of segregation include:  segregation of clean rinse water from acid
waste; separation of waste streams that contain organics, (e.g. from IPA drying); and isolation of waste streams that
require specific treatment such as for hydrofluoric acid, CMP processing, copper solutions, or phosphoric acid.
6. 1.2  A recent initiative by semiconductor fabs encourages tool manufacturers to include multiple drain lines within
the tool so that waste streams can be easily segregated.  Diverter valves can be used to segregate chemicals and are
also  useful  when  organics  exceed  recommended  levels.    Tool  manufacturers  can  also  incorporate  plumbing  and
treatment modules for returning spent water discharged from a tool as feed water for that tool (Point of Discharge
[POD]  recycling).    Purchasing  tools  with  recycle  hardware  already  built-in  eliminates  the  need  for  users  to  design
and install customized water reuse systems unique to their site.
6. 2  Treatment of Waste Streams — In addition to choosing the most effective and technically sound design choices,
other  considerations  for  treatment  choices  include  easy  access  to  all  major  components  for  operations  and
maintenance, availability of consumables and spare parts, and a high level of automation and reliability.  There are
several choices related to treatment choices:
6. 2.1  TOC (total oxidizable carbon) destruction by UV is commonly used for removal of organics found in reclaim
waters and is sometimes combined with ozone or hydrogen peroxide.
6. 2.2    Activated  Carbon  or  other  adsorbents  (e.g.    GAC)  are  used  for  removal  of  organics  and  decomposed
hydrogen peroxide, and is a common type of treatment in recycle water systems.
6. 2.3  Electrodeionization  (EDI)  enables  ion  exchange  reactions  to  be  carried  out  continuously,  without  off-line
regeneration, by introducing a dc electric field across the resin bed.  This electric filed is oriented transverse to the
direction of water flow through the ion exchange column.  Under the influence of the applied electric field, impurity
ions,  chemically  captured  by  the  ion  exchange  reactions,  drift  from  resin  bead  to  neighboring  resin  bead  and


1  International SEMATECH, 2706 Montopolis Drive, Austin, TX 78741, USA, Website: www.sematech.org


SEMI F98-0305 © SEMI 2005 3
ultimately through a semipermeable membrane that isolates the feed water channel from adjacent circulating water
flows  (“concentrate  channels”)  that  sweep  away  the  impurities  entering  through  the  semipermeable  membranes.
This continuous regeneration action eliminates the need to take ion exchange columns off-line for resin regeneration
and also eliminates the need for storing regeneration chemicals on site.
6. 2.4  Reverse  Osmosis  Membrane  Treatment  provides  extremely  high  rejection  of  dissolved  ions  (charged  atoms
and  molecules),  organic  (carbon  containing)  compounds,  silica  (silicon  containing)  compounds,  and  virtually
complete rejection of suspended contaminants, but will not reject dissolved gases and volatile organic compounds as
well.  For reclaim systems, special types of high rejection or low fouling RO membranes may be selected.
6. 2.5  Often  RO  Systems  are  combined  with  ion  exchange  processes  either  with  the  purpose  of  increasing  the
recovery rate of the RO or by combining the high efficiency of a membrane process with the lower fouling potential
of  ion  exchange  resins,  e.g.    Weakly  Acidic  Cation  Resin  (WAC)  is  designed  to  remove  Ca  and  Mg  ions  in  the
water.  The system design should reflect that most of the contaminants of rinse waters are anionic in nature and may
foul  RO  membranes,  but  recycling  water  may  be  mixed  with  other  water  qualities  and  may  therefore  contain
hardness, which can react with the Fluoride of the recycling water.
6. 2.6  Biological  processes  are  used  to  treat  water  with  higher  organic  contents.    They  can  be  either  fixed  bed
systems or fluidized bed systems.  These processes typically require both upstream and downstream processes, such
as  neutralization,  and  maintaining  a  stable  feed  concentration  for  the  biological  process  upstream  and  removal  of
bacteria  downstream.    The  operation  of  such  systems  is  quite  sensitive,  but  most  of  the  organics  used  in
semiconductor manufacturing can be treated by such systems, including TMAH and chemicals used for lithography
and stripping.
6. 2.7  Other Treatment — Includes microfiltration, ultrafiltration, and other types of water treatment typically used
to protect RO Membranes.  Pretreatment equipment may include media filtration (bulk suspended solids removal),
1–5  micron  cartridge  filtration  (polishing  step  for  suspended  solids  removal),  sodium-cycle  cation  exchange
(softening, to remove scale-forming cations), acid injection (to minimize cellulose acetate membrane damage and/or
to  control  carbonate  scales),  scale  inhibitor  injection  (to  control  scaling),  and  sulfite  ion  injection  (to  remove
oxidizing agents).
6. 3  Monitoring —  TOC,  pH,  conductivity,  and  temperature  are  typical  parameters  that  can  be  monitored  on-line
and tracked over time to optimize performance.  The set points and level of monitoring depends on the chemistries
being used and what the ionic and organic loads are in each waste stream after the application and the treatment.  To
ensure the accuracy of certain on-line measurements, a minimum residence time and volume of sample is required
and can be provided through the use of a buffer station and separate sample tanks.  Other parameters such as fluoride
levels, specific organics, and oxidants from undeveloped ammonia must be measured in the laboratory.
7  Grades of Water Effluent
7. 1  Rinse  Water  —  The  second  and  third  rinses  from  wafer  cleaning  processes  are  sufficiently  high  quality  to  be
reused  without  further  treatment  either  for  make-up  water  in  a  UPW  system,  or  directly  for  use  in  a  lower  grade
application such as CMP cleaning.
7. 2  Non-treated  Reclaim  Water  —  Is  a  lower  grade  of  water  with  possible  applications  including  fab  air  pollution
abatement scrubbers, fab point-of-use hazardous gas burn boxes, and drain flushing for CMP drains.
8  Special Issues
8. 1  Difficulty of Identifying and Treating Organics — It is difficult to evaluate rinse waters after solvent use.  Real
time,  on-line  instruments  are  not  available  to  easily  quantify  and  identify  the  complete  composition  of  the  organic
molecules  for  proper  segregation.    In  addition,  treatment  of  waste  water  containing  organics  is  more  difficult  in
some cases, depending on the organic molecules being removed or converted.
8. 2  Managing  Excursions  —  Excursions  in  reuse  water  quality  can  occur  due  to  various  reasons  such  as  human
error in operating non-automated manufacturing equipment.
8. 2.1
It is important to detect and redirect such water before it can contaminate the system for which it directed for
reuse or possibly even damage the treatment equipment.  Excursions from organics are particularly difficult because
they  cannot  be  detected  in  real  time.    Two  methods  have  been  used  to  compensate  for  this  delay:    locate  the


SEMI F98-0305 © SEMI 2005 4
analyzers  at  a  sufficient  distance  upstream  of  the  central  diverter  point,  or  provide  a  sufficient  buffer/quarantine
volume.
8. 3  Temperature  —  Hot  water  effluent  from  rinse  tanks  on  wet  benches  can  provide  a  challenge  in  recycling
treatment systems, as temperature can be an important variable to water recycling system performance and can cause
an  increase  in  bacteria  growth.    This  issue  is  influenced  by  seasonal  variations  in  ambient  temperature.      Heat
exchangers for process waters can be added to a recycle system in order to keep the system at a steady state.
8. 4  Discharge  Permits  —  One  aspect  of  water  reuse  that  can  have  significant  economic  impact  relates  to  site
effluent and local discharge permits.  As water reuse increases, contaminant concentrations in the site effluent will
also  increase  due  to  the  reduced  volume  of  the  wastewater.    If  site  water  reuse  is  great  enough,  these  higher
concentrations may approach the limits of the local wastewater discharge permits and need to be closely monitored.
9  Economic Considerations
9. 1  General  —  Potential  cost  savings  are  available  from  the  introduction  of  reuse  water  systems.    One  type  of
savings can be measured from the actual cost of the water being replaced.  The cost savings depends on the grade of
water being replaced and the original cost of producing that grade of water at that location.  Additional savings can
often be realized in maintenance costs (e.g.  membrane cleaning) given that the reclaim water is generally of better
quality  than  incoming  water.    Models  for  evaluating  the  economics  of  a  reclaim  or  recycle  water  application  have
been developed in the industry.

UPW Plant
Recycling
Plant
Fab
Reclaim
Plant
Other users
Waste water
treatment plant
Waste water
Lightly
contaminated
Contaminated
Very
contaminated
Raw water

NOTE:  Courtesy of German UPW standard VDI 2083 Part 13
Figure 1
Schematic of Basic Reclaim Water System


SEMI F98-0305 © SEMI 2005 5

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
fS


SEMI F99-0705 © SEMI 2005 1
SEMI F99-0705
DIMENSIONAL SPECIFICATION OF A DIAPHRAGM VALVE FOR A
METRIC PFA TUBE
This  specification  was  technically  approved  by  the  Global  Liquid  Chemicals  Committee.    This  edition  was
approved  for  publication  by  the  global  Audits  and  Reviews  Subcommittee  on  March  11,  2005.    It  was
available at www.semi.org in June 2005 and on CD-ROM in July 2005.
1  Purpose
1. 1  This  document  specifies  the  outside  dimensions  of  diaphragm  valves  used  with  metric  PFA  tubes  in  liquid
chemical distribution facilities and process equipment for semiconductor and flat panel display manufacturing.
2  Scope
2. 1  This  specification  addresses  dimensions  of  diaphragm  valves  used  with  metric  PFA  tubes  except  for  face-to-
face dimensions. Since there are many seizes of fittings being applied to valves, this document doesn’t specify face-
to-face dimensions.
2. 2  These diaphragm valves are limited to pneumatic valves. Specification for manual valves should be separately
provided as needed.
2. 3  These  diaphragm  valves  are  used  in  chemical  distribution  systems  for  semiconductor  and  flat  panel  display
manufacturing.
2. 4  The  valves  are  made  from  materials  such  as  PTFE  or  PFA,  which  have  high  corrosion  resistance  and  low
contamination contribution to the fluid.
2. 5  The valves withstand up to 0.2 megapascals (MPa) [29 pounds per square inch (psi)] back pressure.
NOTICE:  This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory or other limitations prior to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI F65 — Dimensional Specification for Mounting Bases of Diaphragm Valves Used with Metric PFA Tubes
NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.
4  Terminology
4. 1  Abbreviations and Acronyms
4. 1.1  PFA — Tetrafluoroethylene Perfluoroalkylvinylether
4. 1.2  PTFE — Tetrafluoroethylene
4. 2  Definitions
4. 2.1  back pressure — a maximum allowable pressure applied to outlet of a diaphragm valve.
4. 2.2  liquid chemicals — acid, alkali, organic solvent, and pure water used for wet stations; resists and developers
used for truck system; and other chemicals used for process or maintenance (such as slurry of CMP) of equipment or
facilities.
5  Dimensional Specifications
5. 1  Overall  Height  Dimensions  —  The  height  (B)  and  (C)  indicated  in  Figure  1  and  the  values  for  different  tube
sizes are specified in Table 1.


SEMI F99-0705 © SEMI 2005 2
5. 2  Port  Height  Dimensions  —  The  height  (A)  indicated  in  Figure  1  and  the  values  for  different  tube  sizes  are
specified in Table 1.
5. 3  Body Dimensions — The length (D) and width (E) of the body indicated in Figure 1 and the values for different
tube sizes are specified in Table 1.

Ｃ
（
with flow control
）

Ｂ

Ａ

Ｅ

D
Ｄ

Figure 1
Top View of A Typical Diaphragm Valve

Table 1  Dimensional Specifications
Tube Size (mm)    (OD /
ID)*
A (mm) B (mm) C (mm) D (mm) E (mm)
25/22 35–40 MAX 145 MAX 175 MAX 62 MAX 62
19/16 25–30 MAX 120 MAX 150 MAX 60 MAX 60
12/10 20–30 MAX 95 MAX 115 MAX 36 MAX 40
10/8 20–25 MAX 95 MAX 115 MAX 36 MAX 40
6/4 15–25 MAX 80 MAX 100 MAX 35 MAX 35
#1
OD and ID are the outside diameter and inside diameter of the tube respectively.
#2
As seen above, dimensions of A are specified by the range, and dimensions from B to E are specified as maximum dimensions that are to be
considered as targets.
6  Measurements
6. 1  The  mounting  base  must  be  conditioned  for  a  minimum  of  one  hour  in  an  air  environment  of  23  ±  3ºC
(73.4 ±5.4ºF) prior to measuring the dimensions.


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


SEMI F100-0705 © SEMI 2005 1
SEMI F100-0705
COMPLIANCE TEST METHOD FOR MINIMUM FLOW COEFFICIENT OF
DIAPHRAGM VALVE FOR METRIC PFA TUBE
This  test  method  was  technically  approved  by  the  Global  Liquid  Chemicals  Committee.    This  edition  was
approved  for  publication  by  the  global  Audits  and  Reviews  Subcommittee  on  March  11,  2005.    It  was
available at www.semi.org in June 2005 and on CD-ROM in July 2005.
1  Purpose
1. 1  This  compliance  test  method  presents  that  the  verification  of  the  compatibility  of  each  diaphragm  valves  for
Metric PFA tube simply.
1. 2  This  document  specifies  the  relative  orifice  that  gives  the  minimum  flow  coefficient  for  diaphragm  valve  for
Metric PFA tube.
1. 3  This compliance test method describes how to verify the flow coefficient of the diaphragm valve by comparing
with the relative orifice.
2  Scope
2. 1  This Specification addresses a capacity of diaphragm valves used with metric PFA tubes.
2. 2  These  diaphragm  valves  are  used  in  chemical  distribution  systems  for  semiconductor  and  flat  panel  display
manufacturing.
2. 3  The  valves  are  made  from  materials  such  as  PTFE  or  PFA,  which  have  high  corrosion  resistance  and  low
contamination contribution to the fluid.
2. 4  The valves withstand up to 0.2 megapascals (MPa) [29 pounds per square inch (psi)] backpressure.
2. 5  Fully open to fully shut switch over is the objective of the shut-off valve.
NOTICE:  This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory or other limitations prior to use.
3  Terminology
3. 1  Abbreviations and Acronyms
3. 1.1  PFA — Perfluroalkoxy
3. 1.2  PTFE — Polytetrafluoroethylene
3. 1.3  P1 — Gauge pressure at upstream pressure tap, kPa
3. 1.4  Q — Volumetric flow rate
3. 2  Definitions
3. 2.1  back pressure — a maximum allowable pressure applied to outlet of a diaphragm valve.
3. 2.2  liquid chemicals — acid, alkali, organic solvent, and pure water used for wet stations; resists and developers
used for track system; and other chemicals used for process or maintenance (such as slurry of CMP) of equipment or
facilities.
4  Test Fluids
4. 1  Incompressible (Liquid) Fluid — Water is standard liquid test fluid.


SEMI F100-0705 © SEMI 2005 2
5  Test Setup
5. 1  Standard Orifice
5. 1.1  Orifice Diameter (A)
On the basis of 50% of the inner diameter of PFA tube connection. See Figure 1.
• φ2.0[mm] orifice (φ6-4[mm] tube)
• φ4.0[mm] orifice (φ10-8[mm] tube)
• φ5.0[mm] orifice (φ12-10[mm] tube)
• φ8.0[mm] orifice (φ19-16[mm] tube)
• φ11.0[mm] orifice (φ25-22[mm] tube)

M e tric PFA TubeB
C
D
E
S tan d ard  O rifice
Diaphragm  Valve
A
FF

Figure 1
Inside View of Standard Orifice
5. 1.2  Orifice Diameter Tolerance
Tolerance: +0.2, −0 [mm]
5. 1.3  Orifice Length (B) should be less than inner tube diameter, i.e., B ≤ A.
5. 1.4  Dimensions (D) should be determined in accordance with the test valve port connection, i.e., D ≤ E.
5. 1.5  Dimension (F) should be equal to or less than a 90 degree angle.
5. 2  Test Circuit

Val ve
flow  meter
pressure sensor
Standard Orifice
flow  meter
pressure sensor

Figure 2
Test Circuit


SEMI F100-0705 © SEMI 2005 3
5. 2.1  The valve and orifice tests must be applied with identical pressure sensors/flow meters.
5. 2.2  Reproducibility and repeatability of measuring devices must rate 2 % or less of R.S.
5. 2.3  Both the test valve and test orifice must have identical port connections.
5. 3  Test Method/Procedure
5. 3.1  In accordance to the test circuit of ¶5.2, flow rate is compared under the same pressure condition. Volume and
weight of accumulative flow can be compared without the use of a flow meter.
5. 3.2  P1 is set 50kPa or more.
5. 4  Qualification of Standard
5. 4.1  The standard of diaphragm valves used with metric PFA tubes is determined by the flow rate Q1 of the tested
valve being greater than the flow rate Q2 of the standard orifice tested of ¶5.1. ( Q1 > Q2 / Q1 < Q2).


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

SEMI INTERNATIONAL STANDARDS
FLAT PANEL DISPLAY
Semiconductor Equipment and Materials International


SEMI D3-91 © SEMI 1991, 2003 1
SEMI D3-91 (Reapproved 0703)
QUALITY AREA SPECIFICATION FOR FLAT PANEL DISPLAY
SUBSTRATES
This specification was technically reapproved by the Global Flat Panel Display Committee and is the direct
responsibility  of  the  Japanese  FPD  Materials  and  Components  Committee.  Current  edition  approved  by  the
Japanese Regional Standards Committee on April 28, 2003.  Initially available at www.semi.org June 2003;
to be published July 2003. Originally published in 1991.
1  Purpose
1. 1  This document defines various areas on the pattern
surface  of  a  flat  panel  display  substrate  and  describes
their    relationship.    It    assumes    the    existence    of
terminology  and  a  banking  convention  described  in
other SEMI flat panel display documents.
2  Scope
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI D9 — Terminology for FPD Substrates
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Significance
4. 1  The patterns placed on a flat panel display substrate
are  expected  to  occur  only  in  a  specified,  central  area,
and certain requirements are applied in that area to both
the    substrate    and    pattern    quality.    The    substrate
peripheral   area(s)   outside   this   zone   have   different
specified  properties.  Defining  the  terms  to  apply  and
the  geometric  relationship  in  these  various  areas  will
assist   the   suppliers   and   users   of   substrates   and
processing/inspection equipment.
5  Summary
5. 1      A   substrate   edge   length   is   defined   in   two
dimensions,  L
X
and  L
Y
,  with  nominal  and  tolerance
values for each.
5. 2    A  quality  area  is  defined  by  two  dimensions,  QA
X

and QA
Y
, with nominal and tolerance values for each.
5. 3    A  fixed  edge  exclusion  area  is  defined  for  the
substrate  edges  to  be  placed  against  reference  (also
called “banking”) pins.
5. 4    Two  variable  edge  exclusion  areas  result  from
combining the above three dimension sets.
6  Procedure
6. 1  Locate the properties in Sections 6.2–6.4 relative to
the  substrate  origin,  using  the  nominal  values  assigned
by the substrate specification.
6. 2  Let   L
X
=   the   substrate   edge   length   in   the   x-
direction, and
L
Y
=  the  substrate  edge  length  in  the  y-direction.  (See
Figure 1.)
6. 3  Let  EF
X
=  the  fixed  edge  exclusion  area  along  the
substrate’s lower edge, and
EF
Y
=   the   fixed   edge   exclusion   area   along   the
substrate’s left edge.
6. 4  Let  QA
X
=  the  quality  area’s  edge  length  in  the  x
direction, and
QA
Y
= the quality area’s edge length in the y direction.
6. 5  Then  EV
X
and  EV
Y
,  the  variable  edge  exclusions,
are  not  specified.  They  result  from  the  interaction  of
substrate  tolerance  variations  from  nominal  with  the
fixed location origin.


SEMI D3-91 © SEMI 1991, 2003 2

L  , L
QA  , QA
EF  , EF
EV  , EV        are not specified,  but  result from tolerance effects.
X
X
X
X
Y
Y
Y
Y
are specified, nominal dimensions

Figure 1
Substrate Area Relationships

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
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI D5-94 © SEMI 1992, 2003 1
SEMI D5-94 (Reapproved 0703)
STANDARD SIZE FOR FLAT PANEL DISPLAY SUBSTRATES
This  standard  was  technically  reapproved  by  the  Global  Flat  Panel  Display  Committee  and  is  the  direct
responsibility  of  the  Japanese  FPD  Materials  and  Components  Committee.  Current  edition  approved  by  the
Japanese Regional Standards Committee on April 28, 2003.  Initially available at www.semi.org June 2003;
to be published July 2003. Originally published in 1993; previously published in 1994.
1  Purpose
1. 1    This  standard  covers  the  specification  of  nominal
edge  length  and  thickness  and  related  tolerances  of  a
flat panel display substrate.
2  Scope
2. 1      These   dimensions   apply   to   substrates   that   are
principally used in fabricating AMLCD displays. These
dimensions  may  also  be  applicable  to  substrates  for
other  display  types.  The  edge  lengths  specified  range
from  300  ◊  300  mm  to  500  ◊  500  mm.    A  single
thickness, 1.1 mm, applied to all substrates.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI  D3  ó  Quality  Area  Specification  for  Flat  Panel
Display Substrates
SEMI   D4   ó   Method   for   Referencing   Flat   Panel
Display Substrates
SEMI D12 ó Specification for Edge Condition of Flat
Panel Display (FPD) Substrates
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Dimensions
4. 1  Edge Length
Table 1  Standard (Arithmetical Progression) Edge
Length (mm)
300 ◊ 300    300 ◊ 350    300 ◊ 400    300 ◊ 450    300 ◊ 500
350 ◊ 350    350 ◊ 400    350 ◊ 450    350 ◊ 500
400 ◊ 400    400 ◊ 450    400 ◊ 500
450 ◊ 450    450 ◊ 500
500                    ◊                    500
NOTE  1:  For  substrates  larger  than  500  mm  ◊  500  mm,  it  is
recommended that the edge lengths be increased in increments of 50
mm.
Table 2  Standard Edge Length (mm)
320 mm ◊ 300 mm
320 mm ◊ 400 mm
360 mm ◊ 465 mm

Table 3  Edge Length Tolerance
Nominal                                   Tolerance
< 400 mm ± 0.2 mm
≥ 400 mm ± 0.3 mm

4. 2  Thickness — 1.1 ± 0.1 mm
NOTE  1:  Nominal  values  and  tolerances  for  thickness  <  1.1
mm, and > 1.1 mm are under discussion.

NOTICE: SEMI      makes      no      warranties      or
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


SEMI D6-0305 © SEMI 1992, 2005 1
SEMI D6-0305
SPECIFICATION FOR LIQUID CRYSTAL DISPLAY (LCD) MASK
SUBSTRATES
This  specification  was  technically  approved  by  the  Global  Flat  Panel  Display  Mask  Committee  and  is  the
direct responsibility of the Japanese Flat Panel Display Materials and Mask.  Current edition approved by the
Japanese  Regional  Standards  Committee  on  January  11,  2005.    Initially  available  at  www.semi.org  January
2005; to be published March 2005.  Originally published in 1992; previously published November 2001.
1  Purpose
1. 1  This specification defines standard for substrates used to fabricate liquid crystal display masks.
2  Scope
2. 1  This specification applies to photomasks that are principally used in fabricating liquid crystal displays. The edge
lengths specified range from 202.8 × 202.8 mm to 700 × 800 mm.
2. 2  Substrates  with  an  edge  length  less  than  200  mm  follow  the  specifications  for  a  semiconductor  mask  (see
SEMI P1).
NOTICE:  This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory or other limitations prior to use.
3  Referenced Standards
3. 1  SEMI Standard
SEMI P1 — Specification for Hard Surface Photomask Substrates
NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.
4  Terminology
4. 1  None.
5  Ordering Information
5. 1  Ordering information shall be discussed between suppliers and users.
6  Edge Length and Thickness Specification
6. 1  Edge  Length  —  Units  are  in  mm.  See  Tables  1  and  2,  3  and  4,  5  and  6,  and  7  and  8  for  a  combination  of
materials, edge length, and thickness.
6. 2  Edge Length Tolerance — ± 0.4 mm. Applies to all groups.
6. 3  Thickness, Tolerance
6. 3.1  Thickness of substrates shall be specified by the edge length group and materials as shown in Tables 2, 4, and

# 6

6.
6. 3.2  Tolerance — For Groups A and B: –0.4 ~ + 0.2 mm.  For Group C: See Table 6.  For Group D: See Table 8.
6. 4  Material — See §7.


SEMI D6-0305 © SEMI 1992, 2005 2

Table 1  Edge Length (Group A) in mm
202. 8 × 202.8
200 × 250 250 × 250
250 × 300 300 × 300
300 × 350 350 × 350
350 × 400 400 × 400

Table 2  Plate Thickness and Materials (Group A) in mm
Material
HTE                   MTE/LTE                   ULTE                   Thickness(mm)
+                            +                            +                             3.0
+     4.8
+ + 5.0

Table 3  Edge Length (Group B) in mm
330 × 450
400 × 500
450 × 550
500 × 600

Table 4  Plate Thickness and Materials (Group B) in mm
Material
HTE                   MTE/LTE                   ULTE                   Thickness(mm)
+     4.8
+ + 5.0

Table 5  Edge Length (Group C) in mm
620 × 720
650 × 750
650 × 800
700 × 800

Table 6  Plate Thickness and Materials (Group C) in mm
Material
ULTE                    Thickness                    (mm)                    Tolerance (mm)
+                                  5.0                                  ±                                  0.2


SEMI D6-0305 © SEMI 1992, 2005 3
Table 6  Plate Thickness and Materials (Group C) in mm
+ 8.0 -0.4 ~+ 0.2

Table 7  Edge Length (Group D) in mm
390 × 610

Table 8  Plate Thickness and Materials (Group D) in mm
Material
ULTE Thickness (mm) Tolerance (mm)
+                                    6.0
± 0.2

7  Material Specification
7. 1  Substrate material shall be specified as high thermal expansion (HTE), medium thermal expansion (MTE), low
thermal  expansion  (LTE),  or  ultra  low  thermal  expansion  (ULTE).  Examples  of  HTE  materials  are  soda  lime
glasses; of MTE materials are borosilicate and aluminosilicate glasses; of LTE materials are aluminosilicate glasses;
and of ULTE materials are synthetic quartz glasses.
7. 2  Substrate  materials  shall  conform  to  thermal  expansion  and  optical  transmittance  characteristics  specified  in
SEMI P1.
7. 3  Selected physical properties of HTE, MTE, LTE, and ULTE materials are provided for information in SEMI P1,
Appendix 1.
8  Related Document
8. 1  SEMI Standards
SEMI D21 — Terminology for Flat Panel Display Masks
NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.


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



SEMI D7-94 © SEMI 1994, 2003 1
SEMI D7-94 (Reapproved 0703)
FPD GLASS SUBSTRATE SURFACE ROUGHNESS MEASUREMENT
METHOD
This  standard  was  technically  reapproved  by  the  Global  Flat  Panel  Display  Committee  and  is  the  direct
responsibility  of  the  Japanese  FPD  Materials  and  Components  Committee.  Current  edition  approved  by  the
Japanese Regional Standards Committee on April 28, 2003.  Initially available at www.semi.org June 2003;
to be published July 2003. Originally published in 1994.
1  Purpose
1. 1    This  document  defines  the  method  of  FPD  glass
substrate   surface   roughness   measurement   by   stylus
method surface roughness measurement instrument.
2  Scope
2. 1    This  specification  shall  be  used  by  vendors  and/or
buyers  of  glass  substrates  for  flat  panel  display  and  is
effective for all glass substrates used.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  ISO Standards
1

ISO486-1982  ó  Surface  Roughness  ó  Parameters,
Their   Values   and   General   Rules   for   Specifying
Requirements
ISO3274-1975  ó  Instruments  for  the  Measurement  of
Surface  Roughness  by  the  Profile  Method  ó  Contact
(Stylus)      Instruments      of      Consecutive      Profile
Transformation
ISO4287/1-1984      ó      Surface      Roughness      ó
Terminology ó Part 1: Surface and its Parameters
3. 2  JIS Standard
2

JIS  B0601-1982  ó  Definitions  and  Designation  of
Surface Roughness
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.


1 International Organization for Standardization, ISO Central
Secretariat, 1, rue de VarembÈ, Case postale 56, CH-1211 Geneva 20,
Switzerland. Telephone: 41.22.749.01.11; Fax: 41.22.733.34.30,
Website: www.iso.ch
2 Japanese Industrial Standards, Available through the Japanese
Standards Association, 1-24, Akasaka 4-Chome, Minato-ku, Tokyo
107-8440, Japan. Telephone: 81.3.3583.8005; Fax: 81.3.3586.2014,
Website: www.jsa.or.jp
4  Terminology
4. 1  Definitions
4. 1.1  long  wavelength  cutoff  ó  wavelength  that  the
attenuation  ratio  of  its  amplitude  becomes  75%  when
the   traced   profile   is   passed   through   the   high-pass
wavelength filter which eliminates waviness element.
4. 1.2  short  wavelengh  cutoff  ó  wavelength  that  the
attenuation  ratio  of  its  amplitude  becomes  75%  when
the   traced   profile   is   passed   through   the   low-pass
wavelength filter which eliminates noise element.
4. 1.3  stylus    method    surface    roughness    measuring
instrument  ó  instrument  that  traces  on  a  section  of  a
surface by a stylus, records irregularity on the surface in
a   enlarged   form,   and   indicates   its   amplitude   as
roughness parameters.
4. 1.3.1      The   type   of   instrument   in   this   standard   is
specified to an instrument which is sometimes called as
a profiler for very thin films and steps.
5  Measurement Instrument
5. 1  Method   ó   Stylus   method   surface   roughness
measuring instrument defined in Sections 3.1 or 3.2, or
an instrument which meets those conditions.
5. 2  Stylus
Material ó diamond
Shape ó circular cone or rectangular cone
Tip Radius ó 2 μm or less
5. 3  Measuring Force ó 0.1 mN (0.01 gf) or above, 0.7
mN (0.07 gf) or less.
5. 4  Sampling Interval ó 1 μm or less.
5. 5  Vertical noise amplitude p-p value: 3 nm (= 30 ≈)
or less.
6  Measurement Conditions
6. 1  Long Wavelength Cutoff, λc ó 0.08 mm or close.
6. 1.1  Short  Wavelength  Cutoff, λs  ó  0.0025  mm  or
less.
6. 1.2  Evaluation length, Le ó 0.4 mm.



SEMI D7-94 © SEMI 1994, 2003 2
6. 1.3  Surface   Roughness   Parameter   ó   Maximum
height    of    the    profile    Ry5(ISO4287/1-1984)(=Rz
(DIN4768-1990))  or  10  point  height  of  irregularities
which is close to Ry5, Rz (JIS B0601-1982).
7  Test Specimen
7. 1    A  clean  FPD  glass  substrate.  No  stains  or  oils
should be seen by the naked eye.
8  Measurement Procedure
8. 1  Contact the specimen on the stage of the instrument
and leave for five minutes to condition the specimen to
room temperature.
8. 2  Put the stylus on the specimen, measure roughness
by   tracing   the   surface,   and   calculate   the   defined
roughness parameter.
8. 3    Change  the  measurement  location  to  the  location
near the previous location and measure again.
8. 4    Change  the  measurement  location  to  the  location
defined in Section 9 and repeat the above measurement.
9  Measurement Location
9. 1  Describe  the  measurement  location  on  the  report,
for example, measure the following two locations:
a.   The center of the specimen.
b.   The point which is 20 mm inside from both edges of
the orientation corner.
10  Calculations or Interpretation of Results
10. 1          Show     the     measurement     results     in     nm
(nanometers) and round fractions of 0.5 and over to the
next highest whole numbers.
Table 1  Example: Measurement Results
Maximum Height: Ry5 n1 n2
The Center **nm **nm
The Corner **nm **nm

Measurement Conditions
Surface ó The pattern surface
Instrument ó (type of instrument and name of maker)
Stylus tip radius ó 2 μm
Tracing speed ó ** μm/sec
Measuring force ó 0.* mN
Cutoff λc ó 0.08 mm

NOTICE: SEMI      makes      no      warranties      or
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


1                                                                                             SEMI                                                                                             D9-0303                                                                                             © SEMI 1994, 2003
SEMI D9-0303
TERMINOLOGY FOR FPD SUBSTRATES
This  terminology  was  technically  approved  by  the  FPD  Materials  and  Components  Committee  and  is  the
direct responsibility of the Japanese FPD Materials and Components Committee. Current edition approved by
the  Japanese  Regional  Standards  Committee  on  January  10,  2003.    Initially  available  at  www.semi.org
January  2003;  to  be  published  March  2003.  This  document  was  originally  published  in  1994;  previously
published November 2001.
1  Purpose
1. 1    This  document  provides  terms  and  definitions  of
materials  and  defects  within  and  on  the  surface  of  flat
panel  display  (FPD)  substrates  and  of  dimensional,
thermal, chemical, optical and mechanical properties of
FPD substrates.
2  Scope
2. 1    These  terms  and  definitions  are  applicable  to  both
front and back substrates used in FPD fabrication.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI  D3    Quality  Area  Specification  for  Flat  Panel
Display Substrates
SEMI  D5    Standard  Size  for  Flat  Panel  Display
Substrates
SEMI  D7    FPD  Glass  Substrate  Surface  Roughness
Measurement Method
SEMI  D11    Specification  for  Flat  Panel  Display
Glass Substrate Cassettes
SEMI D12  Specification for Edge Conditions of Flat
Panel Display (FPD) Substrates
SEMI  D15    FPD  Glass  Substrate  Surface  Waviness
Measurement Method
SEMI  D24    Specification  for  Glass  Substrates  Used
to Manufacture Flat Panel Displays
3. 2  ASTM Standards
1

ASTM  C336  ó  Standard  Test  Method  for  Annealing
Point  and  Strain  Point  of  Glass  by  Fiber  Elongation

Test Method (Elongation of Glass Fibers)
ASTM  C338  ó  Standard  Test  Method  for  Softening
Point of Glass
ASTM  C598  ó  Standards  Test  method  for  Annealing
Point and Strain Point by Beam Bending
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Terminology
NOTE    1:    SEAJ    Liquid    Crystal    Display    Manufacturing
Equipment Dictionay is referred as to every term in Section 4.
4. 1  Internal Defects
4. 1.1  bubble  a gaseous inclusion.
4. 1.2  open  bubble   a  gaseous  inclusion  which  is  so
close to the surface that it is obviously open and/or one
so close to the surface that it may be broken open with
the point of a soft lead pencil.
4. 1.3  inclusion   opaque  or  partially  melted  particle
of  refractory  or  batch  material  embedded  in  glass.  Its
size  is  usually  determined  by  the  size  of  the  distorted
area.
4. 1.4  devitrification   a  crystalline  area  within  the
glass.
4. 1.5  knot   an  embedded  glassy,  transparent,  lump
having  an  irregular  or  tangled  appearance.  Its  size  is
usually determined by the size of the distorted area.
4. 2  Material on the Surface
4. 2.1  cullet  small transparent glass particles that are
adhered or fused to the glass substrate surface.
4. 2.2  particle    a   micron-size   piece   of   foreign
material on the glass surface.


1 American Society for Testing and Materials, 100 Barr Harbor Drive
West Conshochocken, Pennsylvania, USA 19428-2959. Tel: 610-
832-9585, Fax: 610-832-9555, http://www.astm.org


SEMI D9-0303 © SEMI 1994, 2003 2
4. 2.3  stain   organic  or  inorganic  material  on  the
surface.
4. 2.4  blur  ó  any  erosion  of  the  surface;  generally
cloudy in appearance, it sometimes exhibits an apparent
color.
4. 3  Surface Defects
4. 3.1  scratch
  a  surface  fissure  generally  caused
during handling.
4. 3.2  sleek  ó  a  very  shallow  type  of  scratch  on  the
polished  surface  that  is  sometimes  invisible  when  the
viewing angle is changed.
4. 3.3  latent   scratch   ó   a   scratch   which   is   usually
invisible  but  when  subjected  to  an  etching  action  by
dipping into a detergent or a corrosive solution, such as
an acid, the previously invisible scratch becomes visible
due to the minor removal of surface glass.
4. 3.4  chip  ó  a  region  of  material  missing  from  the
edge  of  the  glass  substrate,  which  is  sometimes  caused
by processing or handling.
4. 3.5  pit/dig ó small indentation on the glass substrate
surface.
4. 3.6  bump    a   small   protuberance   on   the   glass
substrate.
4. 3.7  crack  ó  a  fissure  located  at  the  sheet  edge  area
or central area.
4. 3.8  streak  ó  a  defect  with  a  very  small  undulation
on the glass substrate surface.
4. 4  Dimensional Properties
4. 4.1  outsize   dimension    vertical   and   horizontal
dimensions of the glass substrate.
4. 4.2  thickness
   the   distance   between   the   front
surface and the back surface of a glass substrate at same
single point.
4. 4.3  thickness  variation  ó  any  differences  between
maximum and minimum values within the thickness of
a glass substrate.
4. 4.4  warp  defined as the maximum distance from a
reference  plane  to  the  guaranteed  surface;  this  includes
twists,  partial  rises  or  declines  in  the  glass  compared
with  the  reference  plane.    Warp  expression  a  condition
of the whole glass (substrate).
4. 4.5  waviness   the  residual  unevenness  after  the
long   wavelength   component   (warp)   and   the   short
wavelength  component  (surface  roughness)  have  been
eliminated.    This  is  also  called  ìFPD  Wavinessî  when
referring  specifically  to  FPD  substrates,  as  in  SEMI
D15.
4. 4.6  surface   roughness   ó   the   criterion   for   the
smoothness  of  the  sheet  surface.  Usually  the  randomly
selected  areas  on  the  sheet  surface  are  measured  by  a
surface analyzer. Details are defined in SEMI D7.
4. 4.7  beveling   grinding  out  or  shaping  substrate
edges by lapping or grinding.

X
Y
chamfered edge
radiused edge
R
W

Figure 1
Beveling
4. 4.7.1  chamfered    edge     a    beveled    angle    of
approximately 45∞ in respect to the surface and cut edge
surface.    One  characteristic  is  that  part  of  the  cut  edge
surface remains.  For this reason, R-beveled edges have
come  to  be  used  in  conjunction  with  chamfered  edges
in  liquid  crystal  applications.  Chamfered  edges  with
particularly  small  widths  are  also  referred  to  as  ìstring
bevelsî. (See Figure 1.)
4. 4.7.2  R beveled edge ó a beveled shape of an arc in
respect  to  the  surface  and  cut  edge  surface.    One
characteristic  is  that  the  complete  cut  edge  surface  is
ground with a wheel and processed into a frosted glass
state.    Generally,  in  TFT  liquid  crystals,  R-beveled
edges are used more often. (See Figure 1.)
4. 4.8  orientation  corner  ó  the  corner  of  a  substrate
which  identifies  the  pattern  surface  and  the  rotational
orientation.  It is defined by the X and Y dimensions in
the  following  figure.    It  is  also  commonly  known  as
ìorientation flatî or ìorifraî.
4. 4.9  corner  cut  ó  removal  of  the  corners  of  the
substrate  by  either  lapping  or  grinding.    As  with  the
orientation  corner,  this  is  defined  by  the  X  and  Y
dimensions,  but  generally,  most  corner  cuts  have  a  X
and Y of the same length.


SEMI D9-0303 © SEMI 1994, 2003 3

orientation
corner
X
Y
corner cut
(3 places)

Figure 2
Orientation Corner and Corner Cut

4. 4.10  squareness   deviation  of  the  outline  of  the
substrate  from  a  true  square  or  rectangle.    Using  the
drawing  below,  it  is  defined  as  PS  or  PL,  but  must  be
recorded  with  a  or  b  dimensions.    Dimensions  a  and  b
can   be   decided   voluntarily,   but   generally,   most
applications use a = S and b = L. (See Figure 3.)

a
P
S

L
≥
S
b
L
P
L
S

Figure 3
Squareness
4. 5  Thermal Properties
4. 5.1  coefficient  of  thermal  expansion   expansion  is
the  change  in  length  per  initial  length  caused  by  a
thermal  change.  Concretely,  it  is  shown  as  ∆L/L0,
where ∆L = L2 ñ L1 and L0, L1, and L2 are the lengths
of   the   material   at   the   temperature   T0,   T1,   T2
respectively.  Usually, the coefficient of expansion (A),
means  the  average  coefficient  of  expansion  over  the
temperature  range  T1  to  T2.    This  is  shown  in  the
following equation.
α=(∆L/∆T)/L
0
= [(L
2
ñL
1
)/(T
2
ñT
1
)]/L
0

4. 5.2  thermal  shrinkage   when  the  substrate  is  heat
treated  along  a  specific  thermal  profile,  the  relaxation
of  thermal  stress  and  the  structure  change  occur  in
material,  and  create  the  shrinkage  of  the  substrate.
Usually  it  is  described  with  ∆L/L0,  where,  ∆L  is  the
amount of change and shown as ∆L = L0 ñ L.  L0 is the
length  of  material  before  heat  treatment,  and  L  is  after
heat treatment.
4. 5.3  strain  point   temperature  of  the  glass  when  its
viscosity  is  approximately  10
14. .5
dPa∑s.    Strain  point  is
defined  by  two  methods  in  ASTM:  Test  Method  C336
(Elongation  of  Glass  Fibers)  and  Test  Method  C598
(Bending in Glass Beams).  In practice, the strain point
of glass is the maximum temperature at which glass can
be   processed   without   triggering   unnecessary   strain.
Internal strain can be relieved by keeping (the glass) at
this temperature for 4 hours.
4. 5.4  annealing point  temperature of the glass when
its viscosity is approximately 10
13
dPa∑s.  The annealing
point  is  the  temperature  at  which  internal  strain  can  be
relieved in 15 minutes.
4. 5.5  softening  point   temperature of the glass when
its  viscosity  is  approximately  10
7. 6
dPa∑s.    Softening
point is defined in ASTM C338.
4. 6  Chemical Properties
4. 6.1  chemical durability  a measure of corrosion or
attack  of  a  glass  surface  when  subjected  to  a  specific
reagent,  such  as  acid,  base,  or  water  at  a  specific
concentration for a specific time and temperature.
4. 7  Optical Properties
4. 7.1  transmittance   ó   percentage   of   incident   light
which  permeates  the  glass.    It  is  defined  as  I/Io,  where
Io  is  the  strength  of  the  incident  light,  and  I  is  strength
of  the  permeated  light.    Transmittance  is  effected  by
material  composition,  temperature,  thickness  and  light
wavelength.
4. 7.2  refractive  index  ó  ratio  of  the  speed  of  light  in
the  material  and  in  a  vacuum  at  a  specific  wavelength.
The   refractive   index   of   substrate   glass   is   between
approximately 1.50 and 1.53.
4. 8  Mechanical Properties
4. 8.1  density
 mass per unit volume.  Decided by the
mass  of  the  materialís  atomic  composition  and  the
volume  (comparative  capacity,  mol  capacity)  which  it
occupies.
4. 8.2  Young’s  modulus
 a  type  of  elasticity  ratio,
which  shows  the  stretch  (or  compression)  elasticity.
When stretch (or compression) deformation stress σ and
the  strain  ε  resulting  from  the  stress  are  proportionate,
the  proportionate  constant  E  =  σ/ ε  is  called  Youngís
modulus, a material characteristic.
4. 8.3  shear modulus  a type of elasticity ratio which
shows    divergence    elasticity.        When    divergent
deformation stress τ and the strain Φ resulting from the
stress  are  proportionate,    the  proportionate  constant
G   =   τ/Φ   is   called   Shear   Modulus,   a   material
characteristic.


SEMI D9-0303 © SEMI 1994, 2003 4
4. 8.4  Poisson’s  ratio   the  ratio  between  Youngís
modulus and shear modulus.
4. 8.5  Vickers  hardness  ó  a  type  of  pressure  test.    A
diamond  pyramid  indentator  with  a  face  angle  of  136∞
is  pressed  into  the  glass  surface  to  find  the  degree  of
hardness  by  measuring  trace  indentation  on  the  overall
squareness.
4. 9  Electrical Properties
4. 9.1  dielectric constant  the proportionate dielectric
constant which is the ratio between a vacuum dielectric
constant and the material dielectric constant.
4. 9.2  dielectric loss — the phenomenon, or volume, of
(electricity)   loss   through   heat   when   a   dielectric   is
introduced to an alternating current.
4. 9.3  resistivity     —     the     reciprocal     of     electric
conductivity.
4. 10  pattern  surface  —  the  main  area  where  device
patterns  can  be  formed,  determined  by  the  orientation
corner, etc.
4. 11  quality  area  ó  the  center  area  to  the  substrate
where   specified   substrate   quality   criteria   (primarily
internal defects, surface contamination, surface defects,
waviness, and surface roughness) are applicable.
5  Referenced Documents
SEAJ(Semiconductor Equipment Association of Japan)
Liquid   Crystal   Display   Manufacturing   Equipment
Dictionary
2


quality area

Figure 4
Quality Area


2 Semiconductor Equipment Association of Japan, 7-10 Shinjuku 1-
chome, Shinjuku-ku, Tokyo, 160-0022 Japan. Tel:+81-3-3353-7589,
fax:+81-3-3353-7970, http://www.seaj.or.jp
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
International),3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.



SEMI D10-95 © SEMI 1995, 2003 1
SEMI D10-95 (Reapproved 0703)
TEST METHOD FOR CHEMICAL DURABILITY OF FLAT PANEL
DISPLAY GLASS SUBSTRATES
This  test  method  was  technically  reapproved  by  the  Global  Flat  Panel  Display  Committee  and  is  the  direct
responsibility  of  the  Japanese  FPD  Materials  and  Components  Committee.  Current  edition  approved  by  the
Japanese Regional Standards Committee on April 28, 2003.  Initially available at www.semi.org June 2003;
to be published July 2003. Originally published in 1995.
1  Purpose
1. 1      This   test   procedure   evaluates   quantitatively   the
durability  of  flat  panel  display  (FPD)  glass  substrates
using reagents employed in FPD production processes.
2  Scope
2. 1    This  standard  may  be  used  by  vendors  and/or
buyers of glass substrates for FPD.
2. 2    This  standard  defines  three  methods  for  testing
chemical   durability   of   various   flat   panel   display
substrates:  (Method  A)  Weight  Loss,  (Method  B)  Step
Measurement   Using   Profilometry,   and   (Method   C)
Surface  Haze.  Each  method  provides  a  measure  of  the
amount  of  material  that  is  removed  from  a  substrate
during  a  controlled  chemical  reaction  sequence.  This
sequence is nominally identical for each method.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Limitations
3. 1      These   tests   are   not   applicable   to   calculating
variations in chemical durability in local areas within a
substrate.
3. 2        The    calculations    assume    that    all    edges    are
nominally straight. They do not include adjustments for
corner cuts.
3. 3        The    chemicals    used    in    these    practices    are
potentially  harmful  and  should  be  handled  in  a  fume
hood  with  the  utmost  care  at  all  times.  Warning  -
Hydro- fluoric acid solutions are particularly hazardous.
Precaution: They should not be used by anyone who is
not  familiar  with  the  specific  preventive  measures  and
first  aid  treatments  given  in  the  appropriate  Material
Safety Data Sheet.
4  Referenced Standards
4. 1  SEMI Standard
SEMI  D5  —  Standard  Size  for  Flat  Panel  Display
Substrates
4. 2  ASTM Document
1


C729  —  Test  Method  for  Density  of  Glass  by  Sink
Float Comparator
4. 3  ISO Document
2


ISO   3274   —   Instruments   for   the   Measurement   of
Surface   Roughness   by   the   Profile   Method   Contact
(Stylus)      Instruments      of      Consecutive      Profile
Transformation Contact Profile Meters, System M
4. 4  JIS Documents
3


JIS  B0651  —  Instruments  for  the  Measurement  of
Surface Roughness by the Stylus Method
JIS B7507 — Vernier, Dial, and Digital Callipers
JIS B7601 — Trip Balances
JIS K7105 — Testing Methods for Optical Properties of
Plastics
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
5  Terminology
5. 1  Definitions
5. 1.1  haze  —  a  method  to  measure  the  degree  of  haze
created   on   the   FPD   glass   substrate   surface   by   a
chemical etch sequence.


1 American Society for Testing and Materials, 100 Barr Harbor
Drive, West Conshohocken, Pennsylvania 19428-2959, USA.
Telephone: 610.832.9585, Fax: 610.832.9555, Website:
www.astm.org
2 International Organization for Standardization, ISO Central
Secretariat, 1, rue de Varembé, Case postale 56, CH-1211 Geneva 20,
Switzerland. Telephone: 41.22.749.01.11; Fax: 41.22.733.34.30,
Website: www.iso.ch
3 Japanese Industrial Standards, Available through the Japanese
Standards Association, 1-24, Akasaka 4-Chome, Minato-ku, Tokyo
107-8440, Japan. Telephone: 81.3.3583.8005; Fax: 81.3.3586.2014,
Website: www.jsa.or.jp



SEMI D10-95 © SEMI 1995, 2003 2
5. 1.2  step    measurement    using    profilometry    —    a
method to measure depths of etching by comparing the
differences  in  heights  between  etched  and  non-etched
parts  of  a  specimen  measured  by  profilometry  or  an
equivalent method.
5. 1.3  weight  loss  method  —  a  method  to  calculate
depths of etching by comparing differences in specimen
weights before and after the etch sequence.
6  Apparatus
6. 1  For all chemical reactions, the following apparatus
shall be used.
6. 1.1  Reaction Vessel
6. 1.1.1  Material   —   Teflon   or   other   suitably   etch-
resistant material.
6. 1.1.2  Shape   and   Capacity   —   Cylindrical   wide-
mouthed   sealable   vessel,   suitable   for   the   size   and
quantity of samples to be tested.
6. 1.2  Thermostatically   Controlled   Shaker   Bath   or
Equipment
6. 1.2.1  Shaking Stroke — 10 to 60 mm.
6. 1.2.2  Shaking Frequency — 30–90/min., controllable
to ± 10/min.
6. 1.2.3  Operating Temperature Range — 20 to 150°C,
controllable to ± 1°C.
6. 1.3  Oven  —  Controllable  to  ±  10°  over  an  operating
range of 50 to 200°C.
6. 1.4  Desiccator  —  Room  temperature,  with  sufficient
capacity and size for all samples to be tested.
6. 1.5  Caliper — Per JIS B7507, or equivalent.
6. 2    For  the  measurements,  one  of  the  following  shall
be used.
6. 2.1  Method   A   —   Balance   per   JIS   B7601,   or
equivalent.
6. 2.2  Method  B  —  Profilometer  per  ISO  3274,  JIS
B0651, or equivalent.
6. 2.3  Method  C  —  Haze  measurement  equipment  with
integrating sphere per JIS K7105, or equivalent.
NOTE  1:    It  is  ideal  to  use  haze  measurement  equipment
which   automatically   measures   total   transmittance,   diffuse
transmittance, and haze values.
7  Reagents and Materials
7. 1  No specific requirement is defined for the reagents
and   materials.   As   long   as   the   test   conditions   are
reported  with  the  result,  any  combination  of  chemical
reagents with any concentration can be used for the test.
The   test   conditions   should   reflect   actual   process
conditions which are specific for the Flat Panel Display
manufacturers. Some reagents suggested for the test are
provided in Related Information 1 as a reference.
7. 2    This  standard  may  involve  hazardous  materials,
operations,   and   equipment.   This   standard   does   not
purport to address all of the safety problems associated
with  its  use.  It  is  the  responsibility  of  the  user  of  this
standard   to   establish   appropriate   safety   and   health
practices  and  determine  the  applicability  of  regulatory
limitations prior to use.
8  Sample Preparation
8. 1  Prepare  at  least  a  specimen  from  a  lot  of  the
substrates  to  be  tested.  The  specimen  is  a  rectangular
plate about 25 × 50 mm edge length for Methods A and
B, or 40 × 40 mm edge length for Method C.
8. 1.1      If   they   are   not   already   chamfered,   specimen
edges  and  corners  should  be  chamfered  slightly  to
remove chips and prevent cracking. If repeated tests are
expected,   prepare   an   appropriate   quantity   of   test
specimens.
8. 2    Measure  edge  lengths  of  the  test  specimens,  and
calculate total surface area, A:

A
=

(L
×

W
×

2)
+

{(L
+

W

)

×

T

×

2

)}

(1)
where

L

=

one edge length of test specimen in cm,
W

=

adjacent edge length of test specimen in cm,
T

=

thickness of test specimen in cm, and

A

=

total surface area of test specimen in cm
2
.


8. 3    Clean  all  test  specimens  by  a  method  appropriate
for  the  history  of  the  material.  The  cleaning  method
should not cause any corrosion. Clean the specimens by
an    appropriate    neutral    or    alkali    detergent    for
approximately 10 minutes using an ultrasonic bath.
8. 3.1  Rinse them continuously in a stream of deionized
water, having a conductivity of less than 1 μ S/cm, for 1
minute using the ultrasonic bath. Finally, dry them.
8. 4  Place all specimens on a clean heat resistant sample
holder.   Dry   the   specimens   at   140   ±   10°C   for   30
minutes.
8. 5  Place all specimens in a desiccator containing silica
gel or calcium sulfate and cool them, for a minimum of
1 hour, to room temperature.
8. 6  If Method A will be used, weigh the test specimen
to 0.1 mg or 0.01 mg as required using the balance.
8. 7  If Method B will be used, coat about a half portion
of   each   test   specimen   by   an   appropriate   coating



SEMI D10-95 © SEMI 1995, 2003 3
material durable to the test media and conditions. (Wax,
varnish, epoxy resins, adhesive tape, etc., may be used.)
9  Procedure
9. 1  Test Specimen Processing
9. 1.1          Prepare     cylindrical     wide-mouthed     sealable
vessels,  sample  holders,  etc.,  made  of  materials  which
do   not   react   with   the   test   medium   under   the   test
conditions.  Use  a  reaction  vessel  in  which  the  test
specimen,  while  on  the  sample  holder,  is  sufficiently
immersed in the required volume of test reagent.
9. 1.2  Place the test specimen on the sample holder with
spacing  of  1  to  2  cm  between  the  test  specimen  and
bottom   of   the   empty   vessel.   When   a   part   of   the
specimen  is  coated  by  protective  material,  position  the
sample  so  that  its  coated  portion  faces  down.  The  test
specimen  may  be  leaned  against  the  vessel  wall  if  the
test is to be done in relatively brief or slightly corrosive
conditions,   or   in   concentrated,   extremely   corrosive
media.
9. 1.3    Pour  the  test  reagents  into  the  reaction  vessel.
Volume of the test medium shall be 5 to 10 ml per cm
2

of  specimen  surface  area.  Preheat  the  test  medium  to
the specified test temperature.
9. 1.4    Place  the  reaction  vessel  in  the  preheated  shaker
bath with specified shaking stroke and frequency. Close
the reaction vessel loosely, and expose the specimen at
specified temperature for specified time.
9. 1.5        At    the    completion    of    specified    test    time,
immediately remove the reaction vessel from the shaker
bath.  Remove  the  test  specimens  from  the  reaction
vessel   using   soft   forceps,   and   rinse   the   specimens
immediately    by    deionized    water    at    appropriate
temperature.  When  the  specimen  temperature  is  high
following  this  process,  rinse  the  specimens  completely
with  water  of  gradually  decreasing  temperature.  Finish
it by deionized water at room temperature. Less caution
is  required  when  the  reaction  temperature  is  low.  A
synthetic rubber or plastic glove may be used instead of
forceps  if  sufficient  care  is  taken.  In  all  cases,  the
surface  of  the  test  specimen  shall  not  be  scrubbed.
Never  dry  the  test  specimen  during  this  operation.
Generation   of   cracks   or   chips   due   to   thermal   or
mechanical shocks should be avoided.
9. 1.6      For   Method   B   samples,   remove   coating   by
appropriate  non-corrosive  method,  and  clean  samples
again.  In  this  case,  residue  from  the  coating  material
should not contaminate the overall test specimen.
9. 1.7  Place the test specimens on a clean heat-resistant
sample  holder,  and  dry  them  at  140  ±  10°C  for  30
minutes.
9. 1.8    Place  the  specimens  in  the  desiccator  and  allow
them to cool to room temperature.
9. 2  Measurement Method
9. 2.1  Method A (Weight Change)
9. 2.1.1    Weigh  the  test  specimen  to  0.1  mg  or  0.01  mg
as required, using the balance.
9. 2.1.2    Calculate  the  areal  weight  change  with  the
following equation.
W
A
=
W
2
–W
1
A
(2)
where
W
1
=the initial weight of the test specimen in mg,
W
2
= weight of the test specimen in mg after the test,
A  = is surface area of test specimen in cm
2
,
as calculated in 8.2,  and
W
A
= the areal weight change,  in mg•cm
-2
.

NOTE 2:  A negative result indicates a real weight loss, and a
positive result indicates a real weight gain.
9. 2.1.3    Calculate  penetration  depth  of  corrosion,  P,  of
the test sample by the following equation.
P
=
10
W
A
D
(3)
where
W
A
= the areal weight change in mg•cm
-2
D = the density of the substrate material in mg•cm
-3
(see 9.2.1.4) and
P =
penetration depth in
μ
m

NOTE  3:    A  negative  result  indicates  loss  of  material,  and  a
positive result indicates material gain.
9. 2.1.4  When density of the materials is unknown, use
the  value  measured  by  the  method  described  in  ASTM
C729.
9. 2.2  Method B (Profilometry)
9. 2.2.1    Measure  the  height,  H,  in  μm,  of  the  step
between  the  unetched  (coated)  section  and  the  etched
(uncoated) section by a calibrated surface profilometer.
Trace  length  shall  be  between  2  and  4  mm,  with  the
boundary  between  the  two  sections  located  near  the
center of the trace.
Repeat this measurement at least 3 times.
9. 2.2.2  Calculate the average penetration depth P:
P=
H
1
+H
2
+•••••+H
N
N
(4)




SEMI D10-95 © SEMI 1995, 2003 4
NOTE  4:    A  negative  result  indicates  loss  of  material,  and
positive result indicates material gain.
9. 2.3  Method C (Surface Haze)
9. 2.3.1    Measure  total  transmittance,  Tt,  and  diffuse
transmittance, Td, and calculate the haze value from the
following expression:
H=
Td
Tt
×100                  (5)
where
Tt = total transmittance,
Td = diffuse transmittance,  and
H = haze value in %.

10  Reporting Results
10. 1  Report date and time of test, ambient temperature,
test operator, test conditions (reagent and concentration,
volume  of  the  test  medium,  test  temperature,  test  time,
stroke length, and frequency of shaking), specimen size
and  total  surface  area,  specimen  cleaning  method,  and
the following:
10. 1.1  Method A — The areal weight change (W
A
), the
initial  weight  of  the  specimen  (W
1
),  the  density  of  the
substrate    material    (D),    and    calculated    depth    of
corrosion (P).
10. 1.1.1  Method B — Penetration depth (P).
10. 1.1.2  Method  C  —  The   average,   maximum   and
minimum   value   of   total   transmittance   (Tt),   diffuse
transmittance (Td), and haze value (H).
10. 2  Remarks  —  In  a  typical  test,  one  specimen  is
immersed in an unused medium of specified volume in
a  reaction  vessel  during  a  specified  time.  However,  as
long  as  various  conditions  are  described  in  the  report,
even  irregular  methods  may  be  allowed.  Repetitive
usage  of  a  medium  may  not  markedly  affect  the  result
when  the  test  is  done  in  relatively  brief  or  slightly
corrosive   conditions,   or   in   concentrated,   extremely
corrosive media.
11  Precision and Accuracy
11. 1  Interlaboratory evaluation of these test methods is
planned  to  verify  their  suitability  and  reliability.  Until
the  results  are  established,  use  of  this  test  method  for
commercial transactions is not recommended unless the
parties to the test establish the degree of correlation that
can be obtained.
11. 2    No  standards  exist  against  which  any  bias  of  this
test method can be evaluated.
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




SEMI D10-95 © SEMI 1995, 2003 5
RELATED INFORMATION 1
NOTICE: This related information is not an official part of SEMI D10 and is not intended to modify or supercede
the official standard. Publication was authorized by full letter ballot procedures. Determination of the suitability of
the material is solely the responsibility of the user.
NOTICE: This related information does not purport to address all of the safety issues associated with its use. It is
the  responsibility  of  the  user  of  this  related  information  to  establish  appropriate  safety  and  health  practices  and
determine the applicability of regulatory limitations prior to use.
R1-1.1  The following chemicals and test conditions are recommended when this test is applied to flat panel display
glass substrates:
Buffered hydrofluoric acid (1:5) 49% HF, 49% NH
4
F, at 40°C for 10 minutes.
Hydrofluoric acid nitric acid (1:5) 49% HF, 70% HNO
3
, at 40°C for 10 minutes.
Hydrochloric acid (diluted) (1:1) 36% HCl, H
2
O, at

50°C for 20 minutes.

Sodium hydroxide solution (10%) at 50°C for 20 minutes.

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
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.



SEMI D11-95 © SEMI 1995, 2003 1
SEMI D11-95 (Reaproved 0703)
SPECIFICATION FOR FLAT PANEL DISPLAY GLASS SUBSTRATE
CASSETTES
This  specification  was  technically  approved  by  the  Global  Flat  Panel  Display  Committee  and  is  the  direct
responsibility  of  the  Japanese  FPD  Materials  and  Components  Committee.  Current  edition  approved  by  the
Japanese Regional Standards Committee on April 28, 2003.  Initially available at www.semi.org June 2003;
to be published July 2003. Originally published in 1995.
1  Purpose
1. 1    This  document  describes  cassettes  that  are  used
with  glass  substrates  in  the  fabrication  and  processing
of  subassemblies  and  masks  for  flat  panel  displays
(FPD).
2  Scope
2. 1    This  document  applies  to  cassettes  that  hold  a
quantity  of  rectangular  FPD  substrates.  Selected  terms
and    definitions    and    summary    specifications    are
included.    The    specifications    for    single-substrate
cassettes will be developed in other documents.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI  D3  —  Quality  Area  Specification  for  Flat  Panel
Display Substrates
SEMI  D5  —  Standard  Size  for  Flat  Panel  Display
Substrates
SEMI   D6   —   Specification   for   Edge   Length   and
Thickness  for  Liquid  Crystal  Display  (LCD)  Mask
Substrates
SEMI D9 —Terminology for FPD Substrates
SEMI D21 — Definitions for Flat Panel Display Masks
SEMI  E1  —  Specification  for  3  inch,  100  mm,  125
mm, and 150 mm Plastic and Metal Wafer Carriers
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Terminology
4. 1  The following descriptions assume that the cassette
orientation places the substrates in a horizontal plane.
4. 2  Definitions
4. 2.1  cassette  bottom  plate  —  the  bottom  plate  of  the
cassette.  It  is  parallel  to  the  substrate  plane.  It  is
physically  different  from  the  cassette  top  plate  for
purposes   of   machine   interface   and   for   mechanical
positioning by operators.
4. 2.2  cassette front — the area between top and bottom
cassette  plates  through  which  substrates  pass  during
loading and unloading.
4. 2.3  cassette   plate   opening   —   an   opening   in   the
cassette top and bottom plate that provides access to the
glass substrates for external roller driver mechanisms to
move substrates into/from the cassette.
4. 2.4  cassette rear — the area between top and bottom
cassette plates opposite the cassette front.
4. 2.5  cassette   top   plate   —   the   upper   plate   of   the
cassette.  It  is  parallel  to  the  substrate  plane.  It  is
physically  different  from  the  cassette  bottom  plate  for
the  purpose  of  machine  interface  and  for  mechanical
positioning by operators.
4. 2.6  first  mizo  clearance  —  the  distance  between  the
inside  surface  of  the  bottom  plate  and  the  centerline  of
the nearest mizo.
4. 2.7  first  mizo  dimension  —  the  distance  between  the
outside surface of the bottom plate and the centerline of
the nearest mizo.
4. 2.8  glass substrate cassette — a container for holding
glass     substrates     for     processing,     storage,     and
transportation during the fabrication of FPD.
4. 2.9  inner  height  —  the  shortest  distance  between  the
inside surface of the bottom plate and the inside surface
of the top plate.
4. 2.10  mizo — a term (plural form = mizo) describing a
family of rails that support the substrates. They may be
smooth-sided,  toothed  symmetrically,  or  toothed  non-
symmetrically. Precise mizo contours are not described
in this document.



SEMI D11-95 © SEMI 1995, 2003 2
4. 2.11  mizo base — the innermost portion of a mizo.
4. 2.12  mizo centerline — 1/2 the mizo clearance.
4. 2.13  mizo  clearance  —  the  minimum  dimensions
between two adjacent mizo teeth, into which a substrate
can be placed.
4. 2.14  mizo  depth  —  the  distance  between  the  base  of
the mizo and the top of the tooth. It is also called ‘tooth
height.’
4. 2.15  mizo  flat  —  the  distance  along  the  mizo  base
between two adjacent mizo teeth.
4. 2.16  mizo opening width — the distance between the
extreme ends of two adjacent mizo teeth.
4. 2.17  mizo  pitch  —  the  distance  between  adjacent
mizo centerlines.
4. 2.18  mizo  plate  —  a  plate  that  contains  mizo  for
supporting glass substrates.
4. 2.19  mizo   plate   space   —   the   distance   between
adjacent  mizo  plates.  It  is  used  in  the  alignment  of
substrates after loading.
4. 2.20  mizo size — the distance between opposite mizo
bases.
4. 2.21  substrate  clearance  —  the  difference  between
the substrate width and the mizo size.
4. 2.22  substrate  load  depth  —  the  shortest  distance
between  the  front  surface  of  the  cassette  and  the  front
surface of the substrate stops.
4. 2.23  substrate   stop   —   a   portion   of   the   cassette,
located  at  the  cassette  rear,  that  provides  a  mechanical
stop for substrates during their insertion.
4. 2.24  tooth  —  the  protrusion,  on  the  inner  surface  of
the mizo-pocket plate, that contains the mizo shape.
4. 2.25  tooth height — see “mizo depth.”
5  Cassette Specification
5. 1    An  FPD  substrate  cassette  contains  the  following
items:
5. 1.1  One cassette bottom plate.
5. 1.2  One cassette top plate.
5. 1.3  One or more substate stops.  A mizo plate may be
used as a substrate stop.
5. 1.4  Three or more mizo plates.
5. 2  Capacity — Two or more substrates.
5. 3  Dimensions  and  Tolerances — To be agreed upon
between  supplier  and  user.  The  following  table  and
figures explain application of the above definitions and
located related dimensions.
5. 4  Material  —  To  be  agreed  upon  between  supplier
and  user.  Construction  may  be  of  one  or  more  molded
or machined parts.
Table 1  Cassette Designations
Symbol                                   Description
A1       Outer       height
A2       Outer       width
A3       Outer       length
B1 Mizo per plate
B2       Mizo       pitch
B3 The distance between the first mizo centerline and
the last mizo centerline
B4       Substrate       load       depth
B5 The distance between the cassette rear and the
inside surface of the substrate stop
B6 The distance between the cassette front and the
front edge of the substrate
C1 Mizo opening width
C2       Mizo       depth
C3       Mizo       clearance
C4       Mizo       size
C5       Tooth       size
C6       Substrate       clearance
D1 First mizo dimension
D2 First mizo clearance
D3 Thickness of the cassette bottom plate
D4 Thickness of the cassette top plate
D5       Inner       height
D6 Width of mizo plate space



SEMI D11-95 © SEMI 1995, 2003 3

Figure 1
FPD Substrate Cassette (Detail View)



SEMI D11-95 © SEMI 1995, 2003 4


Figure 2

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



SEMI D12-95 © SEMI 1995, 2003 1
SEMI D12-95 (Reapproved 0703)
SPECIFICATION FOR EDGE CONDITION OF FLAT PANEL DISPLAY
(FPD) SUBSTRATES
This  specification  was  technically  approved  by  the  Global  Flat  Panel  Display  Committee  and  is  the  direct
responsibility  of  the  Japanese  FPD  Materials  and  Components  Committee.  Current  edition  approved  by  the
Japanese Regional Standards Committee on April 28, 2003.  Initially available at www.semi.org June 2003 to
be published July 2003. Originally published in 1995.
1  Purpose
1. 1  This document defines various aspects of the edges
of  a  flat  panel  display  substrate  and  describes  their
relationships.  It  assumes  the  existence  of  terminology
described  in  other  SEMI  flat  panel  display  documents.
It   applies   to   substrates   whose   nominal   thickness
specification is 1.1 mm.
2  Scope
2. 1  Significance  —  The  edges  of  a  flat  panel  display
substrate  are  important  in  both  the  specifications  for
and  uses  of  the  material.  They  effect  the  means  for
producing, handling, storing, and processing substrates.
Defining  the  terminology  and  the  geometric  properties
of  these  edges  will  assist  both  the  producers  and  users
of substrates and processing/inspection equipment.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI  D3  —  Quality  Area  Specification  for  Flat  Panel
Display Substrates
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Terminology
4. 1  Definitions
4. 1.1  corner — of a substrate, any corner other than the
orientation corner.
4. 1.2  edge length — of a substrate, the nominal length
of  an  edge,  including  that  portion  at  the  edge  corner(s)
from   which   material   may   have   been   removed   for
finishing purposes. It is “... defined by two dimensions
X and Y, with nominal and tolerance values for each.”
4. 1.3  orientation  convention  —  a  means  for  denoting
the rotational orientation of a substrate.
4. 1.4  orientation  corner  —  the  corner  of  a  substrate
which   identifies   the   pattern   surface   and   rotational
orientation.
5  Edge Condition
5. 1    All  edges  shall  be  treated  for  purposes  of  operator
safety  and  to  minimize  particulate  generation.  Edges
shall  be  chamfered  per  Figure  1;  other  edge  treatments
are being developed as outlined in Related Information

# 1

1.
5. 2  Other edge-related parameters shall be per Table 1.
6  Corner Condition
6. 1      The   orientation   corner   is   asymmetrical   for   all
substrates, with dimensions per Figure 2.
6. 2    The  edge  condition  within  all  corner  areas  shall
meet the criteria of Section 5.
Table 1
Parameter                  Nominal                   Tolerance
Length < 400 mm
≥ 400 mm
± 0.2 mm
± 0.3 mm
Squareness
≤  ± 1/1000 of longer edge for
chamfered edge


Figure 1
Chamfered Edge
