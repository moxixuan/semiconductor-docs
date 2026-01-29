---
title: "E5-1104 - © SEMI 1982, 2004..."
description: "SEMI标准文档"
sidebar_label: "E5-1104 - © SEMI 1982, 2004..."
sidebar_position: 230
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-023.pdf'
  chapter: 23
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/023.pdf"
  pdfSize="0.29MB"
  title="E5-1104 - © SEMI 1982, 2004..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI E5-1104 © SEMI 1982, 2004 43
Name                   Format                    Description                   Values                   Class
DataSetName 20 The name of the Data Set that was
uploaded through S7F37, F39,
F41, F43; S15F49, F51
transactions that initiated Data Set
transfer of large process programs
and recipes

DVVAL
DowntimeAlarm 3(), 5()  Identifier of the last alarm or
exception triggering an
equipment-initiated transition to
UNSCHEDULED DOWNTIME
from the PRODUCTIVE or
STANDBY states

SV
DowntimeAlarmText               20               Text               associated               with
DowntimeAlarm.  0–80
characters.

SV
DowntimeData                         20                         Equipment defined data
associated with transitions to, or
within, the SCHEDULED or
UNSCHEDULED DOWNTIME
states.  For example, this may be
used to carry fault information,
the component serial number of a
repaired component, or comments
entered at the equipment’s control
panel.
0–256 characters.

SV
EngTime 5() Accumulation of time in
ENGINEERING reported in
minutes

ECV
EqpModel 20 Text string describing the
equipment model.  1–80
characters.

SV
EqpName                                  20                                  Text                                  string containing a user-
assigned name for equipment.  1–
80 characters.  Information in the
data item EQNAME is a subset of
EqpName.

ECV
EqpSerialNum 20 Text string describing the product
serial number assigned by the
manufacturer.  1–80 characters.
Information in the data item
MDLN is a subset of
EqpSerialNum.

SV
EstablishCommunications-
Timeout
52 The length of time, in seconds, of
the interval between attempts to
send S1F13 when establishing
communications

ECV
EventsEnabled                           0                           Contains the list of events
(CEIDs) enabled for reporting
(via Stream 6)
Structure:
L,n   n = # of events enabled
1. CEID
1

.
.
n.CEID
n

SV


SEMI E5-1104 © SEMI 1982, 2004 44
Name                   Format                    Description                   Values                   Class
EventLimit                             0,                             10,
11, 20,
21, 3(),
4(), 5()
Used with the Limits Monitoring
capability, it contains the
LIMITID of the limit reached or
crossed by LimitVariable.  Since
multiple zone transitions for a
variable may occur
simultaneously (e.g., due to
identical limit definitions or a
slow data sampling rate),
EventLimit has been defined to
allow for a list of LIMITIDs.

DVVAL
InterruptionCtr 5() The number of transitions to
UNSCHEDULED DOWNTIME
from PRODUCTIVE

ECV
LastPowerdown 20 Timestamp estimate of when the
last powerdown or reset occurred.
Uses format defined for CLOCK.

SV
LimitVariable  This variable contains the VID for
the variable whose value changed
monitoring zones

DVVAL
MaxSpoolTransmit  54 The maximum number of
messages which the equipment
will transmit from the spool in
response to an S6,F23 “Transmit
Spooled Messages” request.  If
MaxSpoolTransmit is set to zero,
no limit is placed on the messages
sent from the spool.  Multi-block
inquire/grant messages are not
counted in this total.

ECV
NSTime 5() Accumulation of time in NON-
SCHEDULED TIME, reported in
minutes

ECV
OperatorCommand 5() This data variable is valid in the
event the operator issues a
command to the equipment.  The
codes for this variable are
equipment-dependent.

DVVAL
OverWriteSpool                       11                       This                       Equipment Constant is used
to indicate to the equipment either
to overwrite data in the spool area
or to stop spooling whenever the
spool area limits are exceeded
= TRUE to overwrite spooled
data
= FALSE to stop spooling when
limits exceeded
ECV
PowerdownTime                      20                      This                      timestamp is periodically
updated based on an interval set
by the user.  It is used to
determine the approximate time
that the equipment went down in
the event of a power loss.  Uses
format defined for CLOCK.

SV
PowerupState 20 Specifies the powerup ARAMS
state when powerdown occurs
during manufacturing time.
Single text digit.
2 = STANDBY
5 = UNSCHEDULED DOWNTIME
SV


SEMI E5-1104 © SEMI 1982, 2004 45
Name                   Format                    Description                   Values                   Class
PPChangeName 10, 20   The PPID which was affected
upon the event of the creation,
editing, or deletion of a Process
Program local to the equipment.
If the PPID Data Item is also
defined and implemented for the
equipment, then the values for
PPChangeName are subject to the
same format restrictions defined
for the PPID Data Item.

DVVAL
PPChangeStatus 51 The action taken on the Process
Program named in
PPChangeName.  This variable is
valid upon the event of the
creation, editing, or deletion of a
Process Program local to the
equipment.
1  = Credited
2  = Edited
3  = Deleted
4-63 Reserved
DVVAL
PPError 20 Contains information about a
failure to verify a text process
program

SV or
DVVAL
PPExecName                         0,                         10,
20
The PPID(s) of the currently
selected Process Program(s).  The
selection of a new Process
Program updates this variable.  If
multiple Process Programs can be
selected, then this variable is a list
of PPIDs.  If the PPID Data Item
is also defined and implemented
for the equipment, then the values
for PPExecName are subject to
the same format restrictions
defined for the PPID Data Item.

SV


SEMI E5-1104 © SEMI 1982, 2004 46
Name                   Format                    Description                   Values                   Class
PPFormat 51 Indicates the type or types of
process programs and recipes that
are supported
1 = Unformatted process
programs
2 = Formatted process programs
3 = Both unformatted and
formatted process programs
4 = Execution Recipes
5 = Large unformatted process
programs
6 = Large formatted process
programs
7 = Both large unformatted and
large formatted process
programs
8 = Large execution recipes
9 = Both execution recipes and
large execution recipes
10 = Both unformatted and large
unformatted process programs
11 = Both formatted and large
formatted process programs
12 = Both unformatted and large
formatted process programs
13 = Both formatted and large
unformatted process programs
14 = Unformatted, large
unformatted and large formatted
process programs
15 = Formatted, large
unformatted and large formatted
process programs
16 = Formatted, unformatted,
large unformatted, large
formatted process programs
>16 Reserved
SV
PrdRecovery 11 A boolean value that enables
(TRUE) or disables (FALSE) the
equipment-initiated return to
PRODUCTIVE from
UNSCHEDULED DOWNTIME.

ECV
PrdState 20 Default ARAMS Substate Code
for automated transitions to
PRODUCTIVE

SV
PrdTime 5() Accumulation of time in
PRODUCTIVE, reported in
minutes

ECV
PrevARAMSState 20 The ARAMS code corresponding
to the previous state/substate.
Four characters.

SV
PreviousProcessState  51 The previous processing state of
the equipment, before the most
recent process state change
0-63 Reserved
SV
ProcessState                             51                             The                             current processing state of the
equipment
0-63 Reserved
SV
RcpChangeName 20 The identifier of the recipe
affected upon the event of the
creation, editing, or deletion of a
recipe

DVVAL


SEMI E5-1104 © SEMI 1982, 2004 47
Name                   Format                    Description                   Values                   Class
RcpChangeStatus 51 The type of change that occurred
for the recipe indicated in
RcpChangeName
0 = No change
1 = Created
2 = Updated (modified)
3 = Stored (new)
4 = Replaced
5 = Deleted
6 = Copied
7 = Renamed
8,9 Reserved
>10 Reserved
DVVAL
RcpExecName 0, 20    The identifier, or a list of
identifiers, of currently selected
recipes.  A zero-length item or list
indicates no recipes are currently
selected.

SV
ReticleIDVerification               11               This               equipment constant is used
to indicate whether Reticle ID
verification is required

ECV
ReticleParticleInspection 11 This equipment constant is used
to indicate whether Reticle
Particle Inspection in required.

ECV
SbyRecovery 11 A boolean value that enables
(TRUE) or disables (FALSE) the
equipment-initiated return to
STANDBY from
UNSCHEDULED DOWNTIME

ECV
SbyTime 5() Accumulation of time in
STANDBY, reported in minutes

ECV
SDTime 5() Accumulation of time in
SCHEDULED DOWNTIME,
reported in minutes

ECV
SpoolCountActual 5() Used to keep a count of the
messages actually contained in
the equipment’s spool area.
Multi-block inquire/grant
messages are not spooled and not
included in this count.

SV
SpoolCountTotal                      5()                      Used                      to                      keep a count of the total
number of primary messages
directed to the spool, regardless of
whether placed or retained in the
spool.  Multi-block inquire/grant
messages are not spooled and not
included in this count.

SV
SpoolFullTime                         20                         Contains                         the timestamp from the
time the spool last became full.  If
the spool was not filled during the
last spooling period, this will
contain a time value prior to the
current SpoolStartTime.  Uses the
same format as the CLOCK
variable data item.

SV
SpoolStartTime 20 Contains the timestamp from the
time spooling last became active.
Uses the same format as the
CLOCK variable data item.

SV


SEMI E5-1104 © SEMI 1982, 2004 48
Name                   Format                    Description                   Values                   Class
SymptomID 5() A numeric code representing the
symptom that initiated the user-
initiated state change.  A value of
zero indicates “no symptom”.

SV
SymptomText 20 Text describing the SymptomID.
0–80 characters.

SV
TimeFormat                             5()
NOTE 5:  The setting of this ECV
controls whether the equipment
shall send the Data Items STIME
and TIME in 12 or 16-byte format.
0 = 12-byte format
1 = 16-byte format
>1  Reserved
ECV
TransitionType                         10                         Used                         with the Limits Monitoring
capability, it defines the direction
of the zone transition which has
occurred.
0 = Transition from lower to
upper zone.
1 = Transition from upper to
lower zone.
DVVAL
TRATID 5() Contains the TRATOMICID of
the atomic transfer referenced by
the event.

DVVAL
TRJOBIDENT 5() Contains the TRJOBID for the
transfer job referenced by the
event.

DVVAL
TRJOBNM  20 Contains the TRJOBNAME for
the transfer job referenced by the
event.

DVVAL
TRLNK 5() Contains the TRLNK value for
the atomic transfer referenced by
the event

DVVAL
UDTime 5() Accumulation of time in
UNSCHEDULED DOWNTIME,
reported in minutes

ECV

9. 8  Object Dictionary — This section defines the public attributes of objects which are available through SECS-II
messages.
9. 8.1  The attributes of an object are defined in a table for each object in the following form:
Table 5  Agent Attribute Definition
Attribute Name Definition Access Format Value
“ObjType” Agent object type. RO 20 “Agent”
“ObjID” The agent’s name, assigned by an authorized user.    RO    20

Table 6  Agent-Specific Dataset Object Attribute Definition
Attribute Name Definition Access   Format Value
“ObjType” The object type. RO 20 “MRcpASDS”
“ObjID” The object’s identifier.  Contains the value in
AgentSpec Agent.

RO        20
“AgentSpec_Agent” The name of the executing agent to which the other
attributes in the dataset apply.  Mandatory.
RO        20
“AgentSpec_AttrLength”   The length of the agent-specific attributes, in bytes.
Mandatory.
RO        54
“AgentSpec_ChgTime” Timestamp of when an agent-specificattribute was last
changed.  Mandatory.
RO        20


SEMI E5-1104 © SEMI 1982, 2004 49
Attribute Name Definition Access   Format Value
“AgentSpec_Comments”    Comments specific to the agent entered by the author.   RW 20 Maximum length is 80
characters.
“AgentSpec_LinkParam”   A list of variable parameter definitions modified from
the list in LinkParam
.  Valid only for a linked main
recipe.  Parameter name and form may not be
changed.
RO 00 List of structures composed
of parameter name, value,
and restrictions.
“Certified” The certification level for the specific agent, assigned
by an authorized user.  Reset when AgentSpec
LinkParam is modified.  Required for certification
support.
RW        52
“AgentSpec_UD_”             Non-standard             attribute             defined by the supplier or user.
Asterisk indicates the part of the attribute name that is
provided in this definition.  Must be preserved exactly
except by the defining entity.
RO        10,        11
20, 3()
4(), 5()
Text form is limited to 80
characters.

Table 7  Collection Event Object
Attribute Name Description Access    Format    Related Data Items Value
“ObjType” Collection Event Object type RO 20 - “COLLEVENT”
“ObjID”                Collection                Event                Identifiers                RO                20                CEID                -
“Enabled” Boolean true means reporting is enabled for a
specific CEID.
RW        11        CEED        -
“EventSource” Object specifier for object which generates the
event for a specific CEID.
RO        20            EVNTSRC        -
“DataReportList”  List of Report Identifiers linked to a specific CEID. RO 20 - (list of) RPTID

Table 8  Data Report Object
Attribute Name Description Access     Format   Related Data Items Value
“ObjType” Data Report Object Type RO 20 - “DATARPT”
“ObjID” Object identifier for a data report RO 20 RPTID -
“DataSource” Source for the variable data, not writable for
predefined provider reports
RO          20            DATASRC            -
“AttrList” Returns the attribute (or variable) names that this
report is requesting from the Data source.
RW * - (list of) VID

Table 9  Data Source Object
Attribute Name Description Access     Format   Related Data Items Value
“ObjType” Data Source Object Type RO 20 - “DataSource”
“ObjID” Identifier of a specific Data Source Object RO 20 DATASRC -
“AttrList” Name of attributes for a specific Data Source
Object
RO * - (list of) VID

Table 10  Distributed Recipe Namespace Attribute Definition
Attribute Name Description Access Format Value
“ObjType” The object type. RO 20 “RNSD”
“ObjID”                        Text.                        RO                        20
“LockedRecipes” A list of identifiers of all recipes with existing change
request records.
RO              20


SEMI E5-1104 © SEMI 1982, 2004 50
Attribute Name Description Access Format Value
“Recorder”                    The recorder specifier of the attached distributed
recipe namespace recorder.
RO              20
“Segments” A list of specifiers of the distributed recipe namespace
segments attached to the namespace.
RO              20

Table 11  Distributed Recipe Namespace Manager Attribute Definition
Attribute Name Description Access Format Value
“ObjType” The object type. RO 20 “RNS_MgrD”
“ObjID”                                The                                manager’s name. RO 20

Table 12  Distributed Recipe Namespace Recorder Attribute Definition
Attribute Name Description Access Format Value
“ObjType” The object type. RO 20 “RNSDRecorder”
“ObjID”                                Text.                                RO                                20
“LockedRecipes”                 List                 of                 identifiers of recipes with existing change
request records.
RO              00
“Namespace”                       Identifies                       the                       namespace to which the recorder is
attached.  May be set by the manager.
RO              20
“NamespaceManager”         Identifies         the         distributed recipe namespace
manager.  May be set by the manager.
RO              20
“Segments”                          List                          of                          specifiers of currently attached segments.    RO 00

Table 13  Distributed Recipe Namespace Segment Attribute Definition
Attribute Name Description Access Format Value
“ObjType” The object type. RO 20 “RNSDSegment”
“ObjID” The object name (identifier). RO 20
“Namespace” The name (ObjID) of the namespace to which the
segment belongs.  May be set by the manager.
RO              20
“NamespaceManager”         Identifies         the         distributed recipe namespace
manager.  May be set by the manager.
RO              20
“RecipeReadOnlyLevel” Used to track the corresponding attribute of the
namespace to which the segment belongs.  May be
set by the manager.
RO              52

Table 14  Exception Attributes
Attribute Name Description Access     Format   Related Data Items Value
“ObjType” The object type RO 20 - “EXCEPTION”
“ObjID” The identifier of a specific
Exception
RO          20            EXID          -
“EXType” Identifies the type of exception RO 20 - Select from set:
“ALARM”
“ERROR”
“EXMessage”               Text               message describing the
abnormal situation monitored.
RO 20 - Max. length of 80 characters
“EXEnabled”                Indicates                that reporting to the
decision authority on the exception
condition is enabled.
RW          11            -          Boolean;
TRUE is enabled.


SEMI E5-1104 © SEMI 1982, 2004 51
Attribute Name Description Access     Format   Related Data Items Value
“EXRecoveryAction”   List   of   possible recovery actions
(EXRecovery).
RO 20 - list of text
“EXState” Current state of an Exception
Object.  The Exception Object
state is usually defined as a
combination of substates and
concurrent states.
RO 20 - Composed from the set:
“CLEARED”
“SET”
“NOTPOSTED”
“POSTED”
“NOTRECOVERING”
“RECOVERING”
“ABORTINGRECOVERY”

Table 15  Execution Recipe Attribute Definition
Attribute Name Definition Acc. Rqmt Form Default Value
Identification Attributes
“ObjType” The object type. RO          Y             Text:          “ERcp”                      “ERcp”
“ObjID” An identifier derived from Namespace,
Class, Name, and Version.
RO          Y             Formatted          text.          -
“Namespace” The name of the originating namespace.    RO    Y    Text.    -
“Name” A logical name assigned by the user when
the recipe is created.
RO          Y             Text.          -
“Class” The recipe’s class (e.g., “/PROCESS/”
OR “/PROCESS/LOADER/”).
RO          Y             Formatted          text:
“CLASS/CLASS/..
/CLASS/”
-
“Version” The version of the recipe. RO Y Text. -
Mandatory Attributes
“ExecAttrLength”    The    length attribute for the attributes of
the execution recipe.  Calculated when the
recipe is downloaded and whenever an
attribute changes.  Mandatory.
RO          Y             Unsigned          integer          -
“ExecChgTime”       The       timestamp of a change to the
attributes of the execution recipe.
Mandatory.
RO          Y             Formatted          text,          timestamp
format
-
“AttrLength”            Preserved.                        Mandatory.                               RO                               Y                               Unsigned                               integer                               -
“AttrChgTime”        Preserved.                Mandatory.                               RO                               Y                               Timestamp                               format                               -
“EditTime”               Preserved               unless               recipe is modified.
Timestamp of when the body was created
or modified.  Mandatory.
RO          Y             Formatted          text          Timestamp
format
-
“BodyLength”          Preserved          unless recipe is modified.
Length of the recipe’s body, in bytes.
Mandatory.
RO          Y             Unsigned          integer          -
“BodyFormat” Indicates the form and format of the
recipe’s body.
RO          Y             Enumerated          unsigned
integer:
0 = source,
1 = object,
> 1 reserved.
0
“Verified” Indicates whether the recipe’s body is
syntactically correct.
RO          Y             Boolean.          FALSE
“Linked” Indicates whether the recipe is linked.        RO          Y        Boolean.        FALSE


SEMI E5-1104 © SEMI 1982, 2004 52
Attribute Name Definition Acc. Rqmt Form Default Value
“ChangedBody” Set to TRUE if the recipe body has
changed without a subsequent upload to
the originating namespace.  Note: this
attribute is never updated to a namespace.
Required only if recipe can be changed or
created.
RO          Y             Boolean.          FALSE
“ExecChgCtl” Preserved.  Specifies change control
requirements for recipe.
RO          Y             Binary.
Bitwise:
1 - may change
2 - change notification
required
4 - recipe may be selected
after change,
8 - most recent parameter
settings shall be saved.
Any combination of these
four bits is allowed.
0
Optional Attributes
“AgentSpec_
Comments”
Copied from the original agent-specific
attribute when downloaded.  Set by the
user.
RO N Text.  Maximum length is
80 characters.
-
“ApprovalLevel” Indicates the level of approval assigned
by an authorized user.
RO          N             Unsigned          integer          0
“Certified” Preserved from the agent-specific
attribute as downloaded.  May be used as
control for production-worthy recipes.
RO          N             Unsigned          integer          0
“Comments” User comments.  Preserved from the
generic attribute as downloaded.
RO N Text.  Maximum length is
80 characters.
-
“EditedBy”               Preserved               unless               recipe is modified.  The
name of the person or executing agent
who last modified the recipe.
RO N Text.  Maximum length is
40 characters.
-
“EstRunTime” The nominal or estimated execution (run)
time of the recipe, in seconds.  Used for
scheduling purposes.  Preserved from the
generic attribute as downloaded.
RO          N             Unsigned          integer          0
“ExecLinkParam”    Preserved    unless last value is changed
(Section 9.7.4).  Contains the list of
parameter definitions including any
agent-specific modifications.  Required
for variable parameter support.
RO N Structure composed of
parameter name, initial
value, and restrictions.
NULL
“LinkList” Preserved.  A complete list of recipe
specifiers for a linked recipe set.
Required for multi-part recipe support.
RO N List of formatted text. NULL
“SrcRcpID” For a derived object form recipe, contains
the recipe identifier of the original source
form recipe.  Required only for derived
object form recipes.
RO          N             Formatted          text.          NULL
“VerificationID” Identification code used by the verifier of
the recipe.  May be used to determine out-
of-date formats that need to be re-verified.
RO N Text.  Maximum length is
40 characters.
NULL
Non-Standard Attributes
AgentSpec_UD_*    Preserved from the original agent-specific
attributed as downloaded.
RO N Defined by supplier or
user.  Text limited to 80
characters.
-


SEMI E5-1104 © SEMI 1982, 2004 53
Attribute Name Definition Acc. Rqmt Form Default Value
UD_* Non-standard attribute defined by
supplier or user.  Asterisk indicates the
part of the attribute name that is provided
in this definition.  Shall be preserved
exactly except by the entity that defined
it.
RO N Varies with definition.
Text form is limited to 80
characters.
-

Table 16  Managed Recipe Attribute Definition
Attribute Name Description                                  AccessFormat                                  Value
“ObjType” The object type. RO 20 “MRcp”
“ObjID” An identifier derived from Class, Name, and
Version
.  No part of a recipe’s identifier shall be
changed except through renaming.
RO        20
(other) Description of the information contained. RO
or
RW
Varies with
definition.
Varies with definition.
“Name” A logical name assigned by the user when the
recipe is created or renamed.
RO        20
“Class” The recipe’s class (e.g., “/PROCESS/” or
“/PROCESS/LOADER/”).
RO        20        Formatted        text:
“CLASS/CLASS/../CLASS/”
“Version” The version of the recipe. RO 20
“AttrLength” The total length of the generic attributes, in bytes.
Mandatory.
RO        5()
“AttrChgTime”     Timestamp of the last change to a genericattribute.
Mandatory.
RO        20
“BodyLength” Length of the recipe’s body, in bytes.  Mandatory.   RO   5()
“EditTime” Timestamp of when the body was created or last
updated.  Mandatory.
RO        20        Timestamp format:
“YYYYMMDDhhmmsscc”
“BodyFormat” Indicates the form and format of the recipe’s body.
Default is zero.
RO 52 0 = source,
1 = object,
>1   reserved.
“Verified” Indicates whether the recipe’s body is syntactically
correct.  Reset when the recipe is created or
updated.  Default is FALSE.
RO        11
“Linked” Indicates whether the recipe is linked.  Reset when
the recipe is originated, verified, or unlinked.
Default is FALSE.
RO        11
“ApprovalLevel”  Indicates  the  level of approval assigned by an
authorized user.  Default is zero.  Reset when the
recipe is originated or linked.  For a linked recipe,
may not be higher than any of its subrecipes.
RW        52
“Comments”         User         comments.         RW         20         Maximum length is 80 characters.
“EditedBy” The name of the person who last edited the recipe.   RO 20 Maximum length is 40 characters.
“EstRunTime” The nominal or estimated execution (run) time of
the recipe, in seconds.  Reset when the recipe, is
created or updated.  Set when the recipe is verified.
May be recalculated to total time for a main recipe
when linked.  Used for scheduling purposes.
Algorithm for calculation shall be documented.
Default is 0.
RW        54


SEMI E5-1104 © SEMI 1982, 2004 54
Attribute Name Description                                  AccessFormat                                  Value
“ExecChgCtrl” Specifies change control requirements for recipe.
Default is 0.  Combinations of bits are used to
indicate multiple permissions.
RW        10        Binary.
Bitwise (MSB = 8):
1 - the recipe body may be changed
2 - change notification required
4 - recipe may be selected after
change,
8 - most recent parameter settings
shall be saved.
Any combination of these four bits
is allowed
“ExtRef” A list of all recipe specifiers as referenced within
the recipe.  Explicit versions not required.  Reset
when the recipe is created, updated, and verified.
RO 00 List of items of format 20.
“LinkList” A complete list of recipe specifiers found in the
ExtRef
attribute of a main recipe and all of its
subrecipes, with duplicates removed and all
versions explicitly determined.  Set for the main
recipe when linked
.  Reset when the recipe is
originated or verified.  Required for multi-part
recipe support.
RO 00 List of items of format 20.
“LinkParam” A list of all variable parameter definitions
contained in the Parameters
attribute of a main
recipe and all of its subrecipes, with duplicates
removed.  Reset when the recipe is created,
updated, or verified.  Set when the recipe is linked.
Required for variable parameter support.
RO 00 List of parameter definition
structures composed of parameter
name, initial value, and restrictions.
“Parameters” A list of variable parameter definitions contained in
the recipe.  Reset when the recipe is created,
updated, and verified.  Set when the recipe is
verified.  Required only for variable parameter
support.
RO 00 List of parameter definition
structures composed of parameter
name, initial value, and restrictions.
“SrcRecID” Identifier of the source form recipe from which a
derived object form recipe is derived.  Value
determined by the verifier of the recipe.  Required
only for support of derived object form recipes.
RO        20
“VerificationID”   Identification code set by the verifierof the recipe.
May be used to determine out-of-date formats that
need to be re-verified.
RO 20 Maximum length is 40 characters.
“UD_”                   Non-standard                   attribute defined by supplier or user.
Asterisk indicates the part of the attribute name that
is provided in this definition.  Shall be preserved
exactly except by the entity that defined it.
RO 10, 11, 20,
3(), 4(), 5()
Text form is limited to a maximum
of 80 characters.

Table 17  Process Job Attributes
Attribute Name Description                              Access    FormatRelated
Data Item
Value
“ObjType” Name of the Object Type RO 20 - “PROCESSJOB”
“ObjID” Identifier of a Process Job RO 20 PRJOBID    -
“PRMt1Type” Type of material being processed RO 20 - allowed values:
“css”
“wfr”
“PRMt1NameList”   Process Material Name, identifies material
being processed by a job, which could be
more than one item.
RO 20 - (list of) Text


SEMI E5-1104 © SEMI 1982, 2004 55
Attribute Name Description                              Access    FormatRelated
Data Item
Value
“RecID” Object Specifier of Recipe used by a Process
Job, see SEMI E39 and SEMI E42
RO        20            -        -
“PRRecipeMethod”  Indicates any special handling for a Process
Job’s Recipe
RO        20            -        allowed        values:
“STANDARD”
“USETUNING”
“PRJobState” Indicates the current state of a Process Job.
The state of a job may be a combination of
sub-states and concurrent states.
RO 20 - Composed from the set:
“WAITINGFOR JOB”
“JOBQUEUED”
“JOB CANCELLED”
“JOBACTIVE”
“SETUP”
“WAITINGFORSTART”
“PROCESSING”
“NOTPAUSED”
“PAUSING”
“PAUSED”
“NOTSTOPPING”
“STOPPING”
“NOTABORTING”
“ABORTING”
“PROCESSCOMPLETE”
“JOBCOMPLETE”
“PRProcessStart”      Processing      should      start automatically after Job
is defined when this Boolean is set TRUE
RO        11            -        Boolean

Table 18  Recipe Executor Attribute Definition
Attribute Name Description Access   RqmtForm
“ObjType” The object type RO Y Text = “RcpExec”
“ObjID”                      Text                      RO                      Y                      Text
“DefaultNamespace”  The name of an executing agent’s name-space used
for all hardware-dependent and other agent-specific
recipes.
RW        Y          Text
“ProdApprove” The minimum value of a recipe’s approval level
accepted during productive and standby states.
Required for SEMI E10 support only.
RW        N          Unsigned        integer
“ProdCertify” The minimum value of a recipe’s certification level
accepted during productive and standby states.
Required for SEMI E10 support only.
RW        N          Unsigned        integer
“RunCycleUnit” The process unit on which the calculation of the
estimated value of the recipe generic attribute
EstRunTime is based.
RO        N         Case-sensitive        formatted        text
composed of a unit of measure and
an optional numeric suffix.
Compliant with SEMI E5, Section

# 12

12.
“RecipeSelectID” A list of recipe identifiers for the currently selected
recipes.
RO Y List of formatted text.
“RecipeSelect-
Parameters”
A list of all parameter definitionsin effect for the ith
recipe identifier in RecipeSelectID.  The maximum
value for i is determined by the equipment supplier
as the maximum number of recipes which may be
selected at the same time.  Required if variable
parameters are supported.
RO N List of structures composed of
parameter name, parameter value,
parameter restriction.



SEMI E5-1104 © SEMI 1982, 2004 56
Table 19  Recipe Namespace Attribute Definition
Attribute Name Definition Access   FormatValue
“ObjType” The object type. RO 20 “RNS”
“ObjID”                            The                            name of the namespace. RO 20 A name of “Default” is prohibited.
“RecipeReadOnlyLevel”  The  level  of  approval at which recipes are read-
only.
RW        52
“Members”                       The                       names of agents capable of verifying and
executing the recipes in the namespace.
RW 00 List of items of format 20.

Table 20  Recipe Namespace Manager Attribute Definition
Attribute Name Definition Access Format Value
“ObjType” The object type. RO 20 “RNS_Mgr”
“ObjID”                       The                       manager’s name. RO 20
“NamespaceName”     The     name of the namespace managed. RO 20

Table 21  Table Attribute Definition
Attribute Name Definition  Access Format Value
“ObjType” The object type. RO 20 “Table”
“ObjID” The object’s identifier.                                                           RO                                                           20                                                           1–80                                                           characters.
“NumCols” Number of columns. RO 5() Non-zero.
“NumRows” Number of rows. RO 5() Non-zero.
“TableLength”        Total        number        of bytes required to store the table elements,
exclusive of any formatting required for storage.
RO              5()               Non-zero.

Table 22  Trace Object
Attribute Name Description Access    Format   Related Data Items Value
“ObjType” Trace Report Object type RO 20 - “TRACE”
“ObjID” Identifier of a specific Trace Report RO 20 TRID -
“Enabled” Boolean true means the specific Trace Report is
enabled.
RW        *        CEED        -
“ReportID” List or report linked to this Trace Report RO 20 - (list of) RPTID
“SamplePeriod” Time between report samples given in floating
point seconds.
RW        4        ()           TRSPER        -
“TotalSamples”            The            maximum number of samples that this Trace
Report will perform.
RW        *        TOTSMP        -
“GroupSize” Number of trace reports to be grouped before a
report is sent.
RW        *        REPGSZ        -
“StartEventID” Identifier of the event which starts trace
reporting.
RW        20        CEID        -
“StartEvtSrcSpec” Source for the start event RW 20 EVNTSRC -
“StopEventID” Identifier of the event which stops trace
reporting.
RW        20        CEID        -
“StopEvtSrcSpec” Source for the stop event RW 20 EVNTSRC -
“AutoDelete” Boolean true means this report is deleted when
reporting is complete.
RW        11        TRAUTOD        -
“ReportChangeOnly”   Boolean, if true, then trace reports are sent only
if at least one of the reported variables changes.
RW        11        RPTOC        -



SEMI E5-1104 © SEMI 1982, 2004 57
9. 8.2  attribute name — A reserved text string, of at most 40 characters, that is unique for that object.
9. 8.3  description — A description of the attribute.
9. 8.4  access  —  Indicates  whether  the  attribute  may  be  set  through  messages.    Access  is  either  read-only  (RO)  or
read-write (RW).
9. 8.5  format — Indicates the type of data (format code).
9. 8.6  timestamp format — Text form indicating date and time in the format “YYYYMMDDhhmmsscc”.
9. 8.7  related data items — Indicates an explicit relationship with a corresponding data item.
9. 8.8  value — Specifies any restrictions on the possible values.  Examples of restrictions include exclusion of zero
for format 5(), a maximum length for text, a format imposed on text, an order imposed on a list, or an enumerated
set of valid values.
9. 8.9  Requirements
• The attributes “ObjType” and “ObjID” are required for all object definitions and shall use format 20.
• The attribute “ObjType” shall be assigned a fixed value for each object.
• The value of “ObjID” may not be changed by using SetAttr (S14F3).
9. 8.10  The value of “ObJType” may be used for messages using the data item OBJTYPE.  The value of the attribute
“ObjID” may be used for messages using the data item OBJID.
9. 8.11  The name of a public attribute may be used for messages using the data item ATTRID.  The value of a public
attribute may be used for messages using the data item ATTRDATA.
9. 8.12  Variable  data  items  defined  in  Section  9.7  may  be  regarded  as  attributes  of  the  object  type  “Equipment”,
where SVs and DVVALs are RO and ECVs are RW.
9. 9  With the use of Harel
4

state diagrams to describe the behavior of objects, an object’s state must be describable
as a combination of a set of sub-states and concurrent states.  The rules for describing the state of an object are: (1)
use the comma (‘,’) to deliminate concurrent states, (2) use the foreslash (‘/’) to delimit a super-state and sub-state,
(3) to deliver the set of lowest level concurrent states, and (4) optionally omit super-state names when there are no
ambiguities in the names of the lowest level states.
9. 9.1  Please  refer  to  Figure  3  in  order  to  follow  the  discussions  for  the  notations.    In  Harel  notation,  ‘pump’  and
‘vacuum’  are  concurrent  states.    The  text  to  specify  this  relation  in  a  response  to  a  request  for  state  is  ‘pump,
vacuum’.  The comma can be read as meaning ‘and’.  ‘on’ and ‘off’ are sub-states of ‘pump’.  ‘vent’, ‘rough’, and
‘Hi-V’ are sub-states of ‘vacuum’.  The sub-state syntax is ‘state/sub-state’ where the ‘/’ can be read as ‘is in sub-
state’.  So using the example in Figure 3, if the pump is off and the vacuum is vented, then the text message which
conveys this is ‘pump/off, vacuum/vent’.  This message can be shortened to ‘off,vent’ because there is no ambiguity
in doing so.

Figure 3
State Chart Example



4  Harel D. “Statecharts: A Visual Formalism for Complex Systems”, Science of Computer Programming, 8, 1987, pp. 231-274. Elsevier Science,
P.O. Box 945, New York, NY 10159-0945, http://www.elvesier.nl/homepage/browse.htt


SEMI E5-1104 © SEMI 1982, 2004 58
10  Message Detail
10. 1  Intent — This section defines a number of specific functions in different streams which can be used as a basis
for communication between host and equipment.  The functions are defined in the form of transaction message pairs
according to the transaction level requirements specified in Section 8.
10. 2  The  functions  are  described  in  a  standard  form  which  involves  specification  of  the  number,  name,  single  or
multiple  block,  direction  of  communication,  nature  of  reply  required,  description,  variable  definition,  and  the
detailed structure of the message in terms of lists and items.  Double lines separate streams, and single lines separate
transactions to aid readability.
10. 2.1  The abbreviations used in each transaction are as follows:

Description
A description of the action generated by the function.
Structure
Detailed structure showing lists and defined items.  Lists are denoted by a capital L
followed by the length separated by a comma.  The individual elements in the list are
numbered on separate lines.  Nested lists are indented to emphasize the structure.
The detailed form of the items is given in the define section at the beginning of the
transaction.  The symbols "<" and ">" are used to enclose each item in the structure
data and imply that there is an item header.  A detailed description of each data item
as well as a list of the allowable data formats can be found in the Data Item
Dictionary.
Exception
Special cases in the structure that have a different meaning.

Sn,Fm+1 Name of function  (same structure as above
(secondary)  except never with reply)
10. 3  Message Usage — This section discusses message features and where they may be used.
10. 3.1  Zero Length Items and Lists — Certain message definitions may use zero length data items and zero length
lists  as  a  technique  to  convey  specific  information  to  the  receiver  of  the  message.    For  commands  (i.e.,  “Do
Something”)  and  requests  (i.e.,  “Return  Some  Data”),  it  may  be  used  to  mean  “Use  default  values  for  the  data
item(s) which were not included”.  The default may be a specific value or a value chosen by the equipment.
10. 3.1.1  For messages reporting data (either responses to requests or asynchronous reports), the technique may be
used  to  indicate  that  the  desired  information  is  not  available  or not applicable.  In some cases, the fact that data is
unavailable may indicate success or failure of a command.
10. 3.1.2  Certain  message  definitions  may  define  a  zero  length  data  item  or  a  zero  length  list  to  mean  “the
information is not supplied.” The receiving party should react to this lack of information as it deems appropriate.
10. 3.2  Compliance  to  Message  Definitions  —  Any  given  standard  SECS-II  message  shall  comply  to  the  format
shown in the Message Definition for that Stream and Function.  Specifically:


SEMI E5-1104 © SEMI 1982, 2004 59

# 1

1. The message shall contain all Lists and Data Items shown as required in the Message Definition.

# 2

2. The message shall not contain any Lists or Data Items not shown in the Message Definition, unless the Message
Definition specifically allows this.

# 3

3. The  message  shall  not  contain  any  List  Item  or  Data  Item  with  zero  length  unless  the  Message  Definition
specifically defines a meaning for such a zero length item.
10. 4  Stream  0  and  Function  0  —  Stream  0  is  always  defined  as  not  used  since  a  0  is  the  most  likely  error.    No
functions are defined in stream 0.
10. 4.1  Function  0  exists  in  all  streams  and  has  the  same  special  meaning  in  each  stream.    A  function  0  message
closes a transaction, so that the originator will not have to wait for a transaction timeout to proceed.  Function 0 is
sent in lieu of the expected secondary message when the interpreter cannot, because of a transmission error or some
other reason, respond with the expected reply.  It is not a requirement that the interpreter send function 0 to close a
transaction.
10. 5  Stream 1 Equipment Status — This stream provides a means for exchanging information about the status of the
equipment, including its current mode, depletion of various consumable items, and the status of transfer operations.

Stream,Function  Name (Mnemonic) Direction
S1,F0  Abort Transaction (S1F0) S,H<->E
Description
Used in lieu of an expected reply to abort a transaction.  Function 0 is defined in every stream and has the same meaning in every
stream.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S1,F1  Are You There Request (R) S,H<->E,reply
Description
Establishes if the equipment is on-line.  A function 0 response to this message means the communication is inoperative.  In the
equipment, a function 0 is equivalent to a timeout on the receive timer after issuing S1,F1 to the host.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S1,F2  On Line Data (D) S,H<->E
Description
Data signifying that the equipment is alive.
Structure
L,2
1. MDLN
2. SOFTREV
Exception
The host sends a zero-length list to the equipment.



SEMI E5-1104 © SEMI 1982, 2004 60
Stream,Function  Name (Mnemonic) Direction
S1,F3  Selected Equipment Status Request (SSR) S,H->E,reply
Description
A request to the equipment to report selected values of its status.
Structure
The following structure is approved for all item formats and should be used by all new
implementations:

L,n
1. SVID
1

.
.
n. SVID
n


The following structure is included for compatibility with previous implementations
and may only be used for items of format 3() and 5():

SVID
1
,...,SVID
n

Exception
A zero-length list (structure 1) or item (structure 2) means report all SVIDs.

Stream,Function  Name (Mnemonic) Direction
S1,F4  Selected Equipment Status Data (SSD) M,H<-E
Description
The equipment reports the value of each SVID requested in the order requested.  The host remembers the names of values
requested.
Structure
L,n
1. SV
1

.
.
n. SV
n

Exception
A zero-length list item for SV
i
means that SVID
i
does not exist.

Stream,Function  Name (Mnemonic) Direction
S1,F5  Formatted Status Request (FSR) S,H->E,reply
Description
A request for the equipment to report the status according to a pre-defined fixed format.
Structure
SFCD
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 61
Stream,Function  Name (Mnemonic) Direction
S1,F6  Formatted Status Data (FSD) M,H<-E
Description
The equipment reports the value of status variables according to the SFCD.
Structure
Depends upon the structure specified by the status form.
Exception
A zero-length item means that no report can be made.

Stream,Function  Name (Mnemonic) Direction
S1,F7  Fixed Form Request (FFR) S,H->E,reply
Description
A request for the form used in S1,F6.
Structure
SFCD
Exception
None

Stream,Function  Name (Mnemonic) Direction
S1,F8  Fixed Form Data (FFD) M,H<-E
Description
The form is returned with the name of each value and the data format item having a zero length as a two-element list in the place
of each single item to be returned in S1,F6.
Structure
Depends upon the form being specified.
Exception
A zero-length item means the form is unavailable.

Stream,Function  Name (Mnemonic) Direction
S1,F9  Material Transfer Status Request (TSR) S,H->E,reply
Description
A request to report the status of all material ports to the host.
Structure
Header only
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 62
Stream,Function  Name (Mnemonic) Direction
S1,F10  Material Transfer Status Data (TSD) M,H<-E
Description
The equipment reports to the host the transfer status of all material ports.
Structure
L,2
1. TSIP
1
,...,TSIP
n

2. TSOP
1
,...,TSOP
n

Exception
A zero-length item means there are no such ports.  A zero-length list means there are no ports.

Stream,Function  Name (Mnemonic) Direction
S1,F11  Status Variable Namelist Request (SVNR) S,H->E,reply
Description
A request to the equipment to identify certain status variables.
Structure
L,n
1. SVID
1

.
.
n. SVID
n

Exception
A zero length means report all SVIDs.

Stream,Function  Name (Mnemonic) Direction
S1,F12  Status Variable Namelist Reply (SVNRR) M,H<-E
Description
The equipment reports to the host the name and units of the requested SVs.
Structure
L,n
1. L,3
1. SVID
1

2. SVNAME
1

3. UNITS
1

2. L,3
.
.
n. L,3
1. SVID
n

2. SVNAME
n

3. UNITS
n

Exception
Zero-length ASCII items for both SVNAME
i
and UNITS
i
indicates that the SVID does not exist.



SEMI E5-1104 © SEMI 1982, 2004 63
Stream,Function  Name (Mnemonic) Direction
S1,F13  Establish Communications Request (CR) S,H<->E,reply
Description
The purpose of this message is to provide a formal means of initializing communications at a logical application level both on
power-up and following a break in communications.  It should be the following any period where host and Equipment SECS
applications are unable to communicate.  An attempt to send an Establish Communications Request (S1,F13) should be repeated
at programmable intervals until an Establish Communications Acknowledge(S1,F14) is received within the transaction timeout
period with an acknowledgement code accepting the establishment.
Structure
L,2
1. MDLN
2. SOFTREV
Exception
The host sends a zero-length list to the equipment.

Stream,Function  Name (Mnemonic) Direction
S1,F14  Establish Communications Request Acknowledge (CRA) S,H<->E
Description
Accept or deny Establish Communications Request (S1,F13).  MDLN and SOFTREV are on-line data and are valid only if
COMMACK = 0.
Structure
L,2
1. COMMACK
2. L,2
1. MDLN
2. SOFTREV
Exception
The host sends a zero-length list for item 2 to the equipment.

Stream,Function  Name (Mnemonic) Direction
S1,F15  Request OFF-LINE (ROFL) S,H->E,reply
Description
The host requests that the equipment transition to the OFF-LINE state.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S1,F16  OFF-LINE Acknowledge (OFLA) S,H<-E
Description
Acknowledge or error
Structure
OFLACK
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 64
Stream,Function  Name (Mnemonic) Direction
S1,F17  Request ON-LINE (RONL) S,H->E,reply
Description
The host requests that the equipment transition to the ON-LINE state
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S1,F18  ON-LINE Acknowledge (ONLA) S,H<-E
Description
Acknowledge or error
Structure
ONLACK
Exception
None

10. 5.1  Macro Level Messages
Stream,Function  Name (Mnemonic) Direction
S1,F19  Get Attribute (GA) S,H<—>E,reply
5

Description
Request for attribute data relating to the specified object or entity within the equipment.
Structure
L,3
1. OBJTYPE
2. L,m                   [m = number of objects for which attributes requested]
1. OBJID
1

.
.
m. OBJID
m

3. L,n                   [n = number of attributes requested for each object]
1. ATTRID
1

.
.
n. ATTRID
n

Exception
A zero-length list (m = 0) is a request for attributes of all objects of the specified type.  A zero-length list (n = 0) is a request for
all attributes of the object(s)to be returned in a predefined order.



5  Material Movement Management used only the Host to Equipment direction for this message. However, both directions are included for future
compatibility with Recipe Management and other future services.


SEMI E5-1104 © SEMI 1982, 2004 65
Stream,Function  Name (Mnemonic) Direction
S1,F20  Attribute Data (AD) M,H<—>E
Description
This message is used to transfer the requested set of object attributes.  The order of requested objects and attributes is retained
from the primary message.
Structure
L,2
1. L,m                          [m = number of objects for which data is sent]
1. L,n                      [n = number of attributes returned for OBJID
1
]
1. ATTRDATA
1

.
.
n. ATTRDATA
n

.
.
m. L,n                      [n = number of attributes returned for OBJID
m
]
1. ATTRDATA
1

.
.
n. ATTRDATA
n

2. L,p                          [p = # errors reported]
1. L,2
1. ERRCODE
1

2. ERRTEXT
1

.
.
p. L,2
1. ERRCODE
p

2. ERRTEXT
p

Exception
If m = 0, it indicates that the specified OBJTYPE is unknown.  If any n = 0, it indicates that the corresponding object was not
found.  If any ATTRDATA item is reported as a zero-length item, it indicates that the specified attribute does not exist.  If no
errors were found, p = 0.

10. 6  Stream 2 Equipment Control and Diagnostics — Messages which deal with control of the equipment from the
host.    This  includes  all  remote  operations  and  equipment  self-diagnostics  and  calibration  but  specifically  excludes
the  control  operations  which  are  associated  with  material  transfer  (see  Stream  4),  loading  of  executive  and  boot
programs (Stream 8), and all file and operating system calls (Streams 10, 13).  See also continuations in Stream 17.

Stream,Function  Name (Mnemonic) Direction
S2,F0  Abort Transaction (S2F0) S,H<->E
Description
Same form as S1,F0
Structure

Exception




SEMI E5-1104 © SEMI 1982, 2004 66
Stream,Function  Name (Mnemonic) Direction
S2,F1  Service Program Load Inquire (SPI) S,H<->E,reply
Description
Either the host or equipment wants to send the specified program.
Structure
L,2
1. SPID
2. LENGTH
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F2  Service Program Load Grant (SPG) S,H<->E
Description
Provides permission to load
Structure
GRANT
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F3  Service Program Send (SPS) M,H<->E, reply
Description
The data associated with the S2,F1 inquire is sent.  If S2,F3 is multi-block, it must be preceded by the S2,F1/S2,F2 Inquire/Grant
transaction.
Structure
SPD
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F4  Service Program Send Acknowledge (SPA) S,H<->E
Description
Acknowledge or error
Structure
SPAACK
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 67
Stream,Function  Name (Mnemonic) Direction
S2,F5  Service Program Load Request (SPR) S,H<->E,reply
Description
A service program is requested.
Structure
SPID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F6  Service Program Load Data (SPD) M,H<->E
Description
A service program is sent.
Structure
SPD
Exception
A zero-length item means that the requested program cannot be returned.

Stream,Function  Name (Mnemonic) Direction
S2,F7  Service Program Run Send (CSS) S,H->E,reply
Description
Start the requested program
Structure
SPID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F8  Service Program Run Acknowledge (CSA) S,H<-E
Description
Acknowledge or error
Structure
CSAACK
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F9  Service Program Results Request (SRR) S,H->E,reply
Description
Ask for results of service program
Structure
SPID
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 68
Stream,Function  Name (Mnemonic) Direction
S2,F10  Service Program Results Data (SRD) M,H<-E
Description
Get the results back
Structure
SPR
Exception
A zero-length item means SPR does not exist.

Stream,Function  Name (Mnemonic) Direction
S2,F11  Service Program Directory Request (SDR) S,H<->E,reply
Description
There may be more than one service program.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F12  Service Program Directory Data (SDD) S,H<->E
Description
A list of service program names.
Structure
L,n
1. SPID
1

.
.
n. SPID
n

Exception
If n = 0, there are no service programs.



SEMI E5-1104 © SEMI 1982, 2004 69
Stream,Function  Name (Mnemonic) Direction
S2,F13  Equipment Constant Request (ECR) S,H->E,reply
Description
Constants such as for calibration, servo gain, alarm limits, data collection mode, and other values that are changed infrequently
can be obtained using this message.
Structure
The following structure is approved for all item formats and should be used by all new
implementations:

L,n
1. ECID
1

.
.
n. ECID
n


The following structure is included for compatibility with previous implementations
and may only be used for items of format 3() and 5():
ECID
1
, . . . , ECID
n

Exception
A zero-length list (structure1) or item (structure2) means report all ECVs according to a predefined order.

Stream,Function  Name (Mnemonic) Direction
S2,F14  Equipment Constant Data (ECD) M,H<-E
Description
Data Response to S2,F13 in the order requested.
Structure
L,n
1. ECV
1

2. ECV
2

.
.
n. ECV
n

Exception
A zero-length list item for ECV
i
means that ECID
i
does not exist.  The list format for this data item is not allowed, except in this
case.



SEMI E5-1104 © SEMI 1982, 2004 70
Stream,Function  Name (Mnemonic) Direction
S2,F15  New Equipment Constant Send (ECS) S,H->E,reply
Description
Change one or more equipment constants.
Structure
L,n
1. L,2
1. ECID
1

2. ECV
1

2. L,2
.
.
n. L,2
1. ECID
n

2. ECV
n

Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F16  New Equipment Constant Acknowledge (ECA) S,H<-E
Description
Acknowledge or error If EAC contains a non-zero error code, the equipment should not change any of the ECIDs specified in
S2F15.
Structure
EAC
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F17  Date and Time Request (DTR) S,H<->E,reply
Description
Useful to check equipment time base or for equipment to synchronize with the host time base.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F18  Date and Time Data (DTD) S,H<->E
Description
Actual time data
Structure
TIME
Exception
A zero-length item means no time exists.



SEMI E5-1104 © SEMI 1982, 2004 71
Stream,Function  Name (Mnemonic) Direction
S2,F19  Reset/Initialize Send (RIS) S,H->E,reply
Description
Causes equipment to reach one of several predetermined initialized conditions.
Structure
RIC
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F20  Reset Acknowledge (RIA) S,H<-E
Description
Acknowledge or error
Structure
RAC
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F21  Remote Command Send (RCS) S,H->E,[reply]
Description
Similar to pressing buttons on the front panel or causes some equipment activity to commence or to cease.
Structure
RCMD
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F22  Remote Command Acknowledge (RCA) S,H<-E
Description
Acknowledge or error
Structure
CMDA
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 72
Stream,Function  Name (Mnemonic) Direction
S2,F23  Trace Initialize Send (TIS) M,H->E,reply
Description
Status variables exist at all times.  This function provides a way to sample a subset of those status variables as a function of time.
The trace data is returned on S6,F1 and is related to the original request by the TRID Multiple trace requests may be made to that
equipment allowing it.  If equipment receives S2,F23 with the same TRID as a trace function that is currently in progress, the
equipment should terminate the old trace and then initiate the new trace.  A trace function currently in progress may be
terminated by S2,F23 with TRID of that trace and TOTSMP = 0.
If S2,F23 is multi-block, it must be preceded by the S2,F39/S2,F40 Inquire/Grant transaction.  Some equipment may support
only single-Block S6,F1, and may refuse a S2,F23 message which would cause a multi-block S6,F1.
Each equipment shall document its trace performance limits.  The Host Computer shall not send an S2,F23 which exceeds the
equipment’s  performance limits, or the equipment may operate incorrectly.
Structure
The following structure is approved for all item formats and should be used by all new
implementations:

L,5
1. TRID
2. DSPER
3. TOTSMP
4. REPGSZ
5. L,n
1. SVID
1

.
.
n. SVID
n


The following structure is included for compatibility with previous implementations
and may only be used for items whose SVID is format 3() and 5():

L,5
1. TRID
2. DSPER
3. TOTSMP
4. REPGSZ
5. SVID
1
, . . . , SVID
n

Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F24  Trace Initialize Acknowledge (TIA) S,H<-E
Description
Acknowledge or error
Structure
TIAACK
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 73
Stream,Function  Name (Mnemonic) Direction
S2,F25  Loopback Diagnostic Request (LDR) S,H<->E,reply
Description
A diagnostic message for checkout of protocol and communication circuits.  The binary string sent is echoed back.
Structure
ABS
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F26  Loopback Diagnostic Data (LDD) S,H<->E
Description
The echoed binary string
Structure
ABS
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F27  Initiate Processing Request (IPR) S,H->E,reply
Description
Host requests equipment to initiate processing of the identified material at the specified location in the machine using the
specified process program.
Structure
L,3
1. LOC
2. PPID
3. L,n
1. MID
1

.
.
n. MID
n

Exception
A zero-length PPID indicates no process program is being specified and the equipment is to take whatever action is appropriate
for it to determine the proper program to use. A zero-length MID list indicates no MID is to be associated with the material to be
processed.

Stream,Function  Name (Mnemonic) Direction
S2,F28  Initiate Processing Acknowledge (IPA) S,H<-E
Description
Response by equipment to Initiate Processing Request.  Returned status indicates whether or not the request was honored by the
equipment.
Structure
CMDA
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 74
Stream,Function  Name (Mnemonic) Direction
S2,F29  Equipment Constant Namelist Request (ECNR) S,H->E,reply
Description
This function allows the host to retrieve basic information about what equipment constants are available in the equipment.
Structure
L,n
1. ECID
1

.
.
n. ECID
n

Exception
A zero-length list means send information for all ECIDs.

Stream,Function  Name (Mnemonic) Direction
S2,F30  Equipment Constant Namelist (ECN) M,H<-E
Description
Data Response
Structure
L,n (number of equipment constants)
1. L,6
1. ECID
1

2. ECNAME
1

3. ECMIN
1

4. ECMAX
1

5. ECDEF
1

6. UNITS
1

2. L,6
.
.
n. L,6
1. ECID
n

2. ECNAME
n

3. ECMIN
n

4. ECMAX
n

5. ECDEF
n

6. UNITS
n

Exception
Zero-length ASCII items for  ECNAME
i
, ECMIN
i
, ECMAX
i
, ECDEF
i
, and UNITS
i
indicates that the ECID does not exist.

Stream,Function  Name (Mnemonic) Direction
S2,F31  Date and Time Set Request (DTS) S,H->E,reply
Description
Useful to synchronize the equipment time with the host time base.
Structure
TIME
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 75
Stream,Function  Name (Mnemonic) Direction
S2,F32  Date and Time Set Acknowledge (DTA) S,H<-E
Description
Acknowledge the receipt of time and date.
Structure
TIACK
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F33  Define Report (DR) M,H->E,reply
Description
The purpose of this message is for the host to define a group of reports for the equipment.
The type of report to be transmitted is designated by a Boolean “Equipment Constant.” An “Equipment Constant Value” of
“False” means that an “Event Report”(S6,F11) will be sent, and a value of “True” means that an “Annotated Event
Report”(S6,F13) will be sent.If S2,F33 is Multi-block, it must be preceded by the S2,F39/S2,F40 Inquire/Grant transaction.
Structure
L,2
1. DATAID
2. L,a                          # reports
1. L,2                      report       1
1. RPTID
1

2. L,b                # VIDs this report
1. VID
1

.
.
b.VID
b

a. L,2                      report       a
1. RPTID
a

2. L,c                # VIDs this report
1. VID
1

.
.
c. VID
c

Exception
1. A list of zero-length following DATAID deletes all report definitions and associated links.  See S2,F35 (Link
Event/Report).
2. A list of zero-length following RPTID deletes report type RPTID.  All CEID links to this RPTID are also deleted.

Stream,Function  Name (Mnemonic) Direction
S2,F34  Define Report Acknowledge (DRA) S,H<-E
Description
Acknowledge or error If an error condition is detected the entire message is rejected (i.e., partial changes are not allowed).
Structure
DRACK
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 76
Stream,Function  Name (Mnemonic) Direction
S2,F35  Link Event Report (LER) M,H->E,reply
Description
The purpose of this message is for the host to link n reports to an event (CEID).  These linked event reports will default to
‘disabled’ upon linking.  That is, the occurrence of an event would not cause the report to be sent until enabled.  See S2,F37 for
enabling reports.
If S2,F35 is Multi-block, it must be preceded by the S2,F39/S2,F40 Inquire/Grant transaction.
Structure
L,2
1. DATAID
2. L,a                          # events
1. L,2                      event       1
1. CEID
1

2. L,b
1. RPTID
1

.
.
b. RPTID
b

.
.
a. L,2                      event       a
1. CEID
a
            # RPTIDS this event
2. L,c
1. RPTID
1

.
.
c. RPTID
c

Exception
A list of zero length following CEID deletes all report links to that event.

Stream,Function  Name (Mnemonic) Direction
S2,F36  Link Event Report Acknowledge (LERA) S,H<-E
Description
Acknowledge or error If an error condition is detected the entire message is rejected (i.e., partial changes are not allowed).
Structure
LRACK
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 77
Stream,Function  Name (Mnemonic) Direction
S2,F37  Enable/Disable Event Report (EDER) S,H->E,reply
Description
The purpose of this message is for the host to enable or disable reporting for a group of events (CEIDs).
Structure
L,2
1. CEED                       enable/disable
2. L,n                          #CEIDs
1. CEID
1

.
.
n. CEID
n

Exception
A list of zero length following CEED means all CEIDs.

Stream,Function  Name (Mnemonic) Direction
S2,F38  Enable/Disable Event Report Acknowledge (EERA) S,H<-E
Description
Acknowledge or error If an error condition is detected the entire message is rejected, i.e., partial changes are not allowed.
Structure
ERACK
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F39  Multi-block Inquire (DMBI) S,H->E,reply
Description
If a S2,F23 S2,F33, S2,F35, S2,F45, or S2,F49 message is more than one block, this transaction must precede the message.
Structure
L,2
1. DATAID
2. DATALENGTH
Exception


Stream,Function  Name (Mnemonic) Direction
S2,F40  Multi-block Grant (DMBG) S,H<-E
Description
Grant permission to send multi-block message.
Structure
GRANT
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 78
Stream,Function  Name (Mnemonic) Direction
S2,F41  Host Command Send (HCS) S,H->E,reply
Description
The Host requests the Equipment perform the specified remote command with the associated parameters.
Structure
L,2
1. RCMD
2. L,n                          # of parameters
1. L,2
1. CPNAME
1
            parameter 1 name
2. CPVAL
1
             parameter 1 value
.
.
n. L,2
1. CPNAME
n
            parameter n name
2. CPVAL
n
             parameter n value
Exception
None

Stream,Function  Name (Mnemonic) Direction
S2,F42  Host Command Acknowledge (HCA) S,H<-E
Description
Acknowledge Host command or error.  If command is not accepted due to one or more invalid parameters (i.e., HCACK = 3),
then a list of invalid parameters will be returned containing the parameter name and reason for being invalid.
Structure
L,2
1. HCACK
2. L,n                          # of parameters
1. L,2
1. CPNAME
1
            parameter 1 name
2. CPACK
1
             parameter 1 reason
.
.
n. L,2
1. CPNAME
n
            parameter n name
2. CPACK
n
             parameter n reason
Exception
If there are no invalid parameters, then a list of zero length will be sent for item 2.



SEMI E5-1104 © SEMI 1982, 2004 79
Stream,Function  Name (Mnemonic) Direction
S2,F43  Reset Spooling Streams and Functions (RSSF) S,H->E,reply
Description
This message allows the host to select specific streams and functions to be spooled whenever spooling is active.
Structure
L,m
1. L,2
1. STRID
1

2. L,n
1. FCNID
1

.
.
n. FCNID
n

.
.
m. L,2
1. STRID
m

2. L,n
1. FCNID
1

.
.
n. FCNID
n

Exception
1. A zero-length list, m = 0, turns off spooling for all streams and functions.
2. A zero-length list, n = 0, turns on spooling for all functions for the associated stream.
Notes:
1. Turning off spooling for all functions for a specific stream is achieved by omitting reference to the stream from this message.
2. Spooling for Stream 1 is not allowed.
3. Equipment must allow host to spool all primary messages for a stream (except Stream 1).

# 4

4. A defined list of functions for a stream in this message will replace any previously selected functions.



SEMI E5-1104 © SEMI 1982, 2004 80
Stream,Function  Name (Mnemonic) Direction
S2,F44  Reset Spooling Acknowledge (RSA) M,H<-E
Description
Acknowledge or error
Structure
L,2
1. RSPACK                      (accept       or       reject)
2. L,m                          (m = number of streams with errors)
1. L,3
1. STRID
1

2. STRACK
1
          (error in stream)
3. L,n                (n = number of functions in error)
1. FCNID
1

.
.
n. FCNID
n

.
.
m. L,3
1. STRID
m

2. STRACK
m
          (error in stream)
3. L,n                (n = number of functions in error)
1. FCNID
1

.
.
n. FCNID
n

Exception
1. If RSPACK = 0, a zero-length list, m = 0, is given, indicating no streams or functions in error.
2. A zero-length list, n = 0, indicates no functions in error for specified stream.



SEMI E5-1104 © SEMI 1982, 2004 81
Stream,Function  Name (Mnemonic) Direction
S2,F45  Define Variable Limit Attributes (DVLA) M,H->E,reply
Description

Structure
L,2
1. DATAID
2. L,m                      (m = # of variables in this definition)
1. L,2
1. VID
1

2. L,n           (n = # of limits being defined/changed for VID
1
)
1. L,2
1. LIMITID
1

2. L,p               (p       =       {0,2})
1. UPPERDB
1

2. LOWERDB
1

.
.
n. L,2
1. LIMITID
n

2. L,p    (p = {0,2})
1. UPPERDB
n

2. LOWERDB
n

.
.
m.L,2
1. VID
m

2. L,n            (n = # of limits being defined/changed for VID
m
)
1. L,2
1. LIMITID
1

2. L,p                (p = {0,2})
1. UPPERDB
1

2. LOWERDB
1

.
.
n. L,2
1. LIMITID
n

2. L,p                (p = {0,2})
1. UPPERDB
n

2. LOWERDB
n

Exception
1. A zero-length list, m = 0, sets all limit values for all monitored VIDs to “undefined.”
2. A zero-length list, n = 0, sets all limits values for that VID to “undefined.”
3. A zero-length list, p = 0, sets that limit to “undefined.”



SEMI E5-1104 © SEMI 1982, 2004 82
Stream,Function  Name (Mnemonic) Direction
S2,F46  Variable Limit Attribute Acknowledge (VLAA) M,H<-E
Description
Acknowledge definition of variable limit attributes or report error.  If DVLA is not accepted due to one or more invalid
parameters (e.g., LIMITACK = 3), then a list of invalid parameters is returned containing the variable limit attribute and reason
for rejection.  If an error condition is detected, the entire message is rejected (i.e., partial changes are not allowed).
Structure
L,2
1. VLAACK
2. L,m                          (m = number of invalid parameters)
1. L,3
1. VID
1
             (VID with error)
2. LVACK
p
           (reason)
3. L,n                {n = 0,2}
1. LIMITID
1
    (1st limit in error for VID
p
)
2. LIMITACK
1
   (reason)
.
.
m. L,3
1. VID
m
             (VID with error)
2. LVACK
m
           (reason)
3. L,n                {n = 0,2}
1. LIMITID
1
    (1st limit in error for VID
x
)
2. LIMITACK
1
   (reason)
Exception
1. A zero-length list, m = 0 indicates no invalid variable limit attributes.
2. A zero-length list, n = 0 indicates no invalid limit values for that VID.

Stream,Function  Name (Mnemonic) Direction
S2,F47  Variable Limit Attribute Request (VLAR) S,H->E,reply
Description
This message allows the host to query the equipment for current variable limit attribute definitions.
Structure
L,m                                (m = # of VIDs this request)
1. VID
1

.
.
m. VID
m

Exception
A zero-length list, m = 0, requests a list of all VID values that can have variable limit attributes.



SEMI E5-1104 © SEMI 1982, 2004 83
Stream,Function  Name (Mnemonic) Direction
S2,F48  Variable Limit Attributes Send (VLAS) M,H<-E
Description
Equipment sends values of requested variable limit attribute definitions in the order requested.
Structure
L,m                                (m = # of VIDs this request)
1. L,2
1. VID
1

2. L,p                      {p       =       0,4}
1. UNITS
1

2. LIMITMIN
1

3. LIMITMAX
1

4. L,n                (n = # of limits defined for this VID)
1. L,3
1. LIMITID
1

2. UPPERDB
1

3. LOWERDB
1

.
.
n. L,3
1. LIMITID
n

2. UPPERDB
n

3. LOWERDB
n

.
.
m. L,2
1. VID
m

2. L,p                      {p       =       0,4}
1. UNITS
m

2. LIMITMIN
m

3. LIMITMAX
m

4. L,n                (n = # of limits defined for this VID)
1. L,3
1. LIMITID
1

2. UPPERDB
1

3. LOWERDB
1

.
.
n. L,3
1. LIMITID
n

2. UPPERDB
n

3. LOWERDB
n

Exception
1. A zero-length list, p = 0, indicates that limits are not supported for the VID.
2. A zero-length list, n = 0, means no limits are currently defined for the specified variable.



SEMI E5-1104 © SEMI 1982, 2004 84
Stream,Function  Name (Mnemonic) Direction
S2,F49  Enhanced Remote Command M,H->E
Description
The host requests an object to perform the specified remote command with its associated parameters.  If multi-block, it shall be
preceded by the S2,F39/S2,F40 Multi-Block Inquire/Grant transaction.
Structure
L,4
1. DATAID
2. OBJSPEC
3. RCMD
4. L,m                          # of parameter groups
1. L,2
1. CPNAME
1
          command parameter 1 name
2. CEPVAL
1
          command-enhanced parameter 1 value
2. L,2
1. CPNAME
2
          command parameter 2 name
2. CEPVAL
2
          command-enhanced parameter 2 value
.
.
m. L,2
1. CPNAME
m
          command parameter m name
2. CEPVAL
m
          command enhanced parameter m value

If a specific value of CPNAME is defined to have a CEPVAL defined as a LIST, it shall
always be a LIST.  If the CEPVAL that is associated to that specific value of CPNAME
is defined to be anything other than LIST, it will result in a format error.
Exception
A zero length list, m = 0, indicates that no parameter groups are sent with the command.  OBJSPEC can be a null length item.
Notes:
1. If CEPVAL is a LIST, the items that make up that list shall take on one of the following forms: (1) a list of items with an
identical format, (2) a LIST of CPNAME, CEPVAL pairs, as illustrated below.
A) L,2
1. CPNAME
a

2. L,m
1. CPVAL
a1

2. CPVAL
a2

.
.
m. CPVAL
am

B) L,2
1. CPNAME
b

2. L,n
1. L,2
1. CPNAME
b1

2. CEPVAL
b1

.
.
n. L,2
1. CPNAME
bn

2. CEPVAL
bn




SEMI E5-1104 © SEMI 1982, 2004 85
Stream,Function  Name (Mnemonic) Direction
S2,F50  Enhanced Remote Command Acknowledge M,H<-E
Description
The equipment acknowledges Enhanced Remote Command or reports any error(s).  If the command is not accepted due to one or
more invalid parameters, (i.e. HCACK = 3), then a list of invalid parameters will be returned containing the parameter name and
reason for being invalid.
Structure
L,2
1. HCACK
2. L,n                          # of parameter groups
1. L,2
1. CPNAME
1

2. CEPACK
1

.
.
n. L,2
1. CPNAME
n

2. CEPACK
n

Exception
None

10. 7  Stream 3 Materials Status — The functions of the material status stream are used to communicate information
and  actions  related  to  material,  including  carriers  and  material-in-process,  time-to-completion  information,  and
extraordinary material occurrences.

Stream,Function  Name (Mnemonic) Direction
S3,F0  Abort Transaction (S3F0) S,H<->E
Description
Same form as S1,F0
Structure

Exception


Stream,Function  Name (Mnemonic) Direction
S3,F1  Material Status Request (MSR) S,H->E,reply
Description
Host requests the device to send the status of all material in process.
Structure
Header only
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 86
Stream,Function  Name (Mnemonic) Direction
S3,F2  Material Status Data (MSD) M,H<-E
Description
Material-in-process information is sent from the equipment to the host.  There are m locations.
Structure
L,2
1. MF
2. L,m
1. L,3
1. LOC
1

2. QUA
1

3. MID
1

2. L,3
.
.
m. L,3
1. LOC
m

2. QUA
m

3. MID
m

Exception
A zero-length list returned means no such data exists.

Stream,Function  Name (Mnemonic) Direction
S3,F3  Time to Completion Request (TCR) S,H->E,reply
Description
Host requests the equipment to send the time-to-completion of operations on all material in possession.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S3,F4  Time to Completion Data (TCD) M,H<-E
Description
Time-to-completion information is sent by the equipment to the host.
Structure
L,2
1. MF
2. L,m
1. L,3
1. TTC
1

2. QUA
1

3. MID
1

2. L,3
.
.
m. L,3
1. TTC
m

2. QUA
m

3. MID
m

Exception
A zero-length list header returned means no such data exists.



SEMI E5-1104 © SEMI 1982, 2004 87
Stream,Function  Name (Mnemonic) Direction
S3,F5  Material Found Send (MFS) S,H<-E,[reply]
Description
The equipment advises the host that unsolicited material has appeared at one of its sensors.
Structure
L,2
1. MF
2. QUA
Exception
None

Stream,Function  Name (Mnemonic) Direction
S3,F6  Material Found Acknowledge (MFA) S,H->E
Description
Acknowledge or error
Structure
ACKC3
Exception
None

Stream,Function  Name (Mnemonic) Direction
S3,F7  Material Lost Send (MLS) S,H<-E,[reply]
Description
The equipment advises the host that material has disappeared from its sensors.
Structure
L,3
1. MF
2. QUA
3. MID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S3,F8  Material Lost Acknowledge (MLA) S,H->E
Description
Acknowledge or error
Structure
ACKC3
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 88
Stream,Function  Name (Mnemonic) Direction
S3,F9  Material ID Equate Send (IES) S,H<-E,reply
Description
Provide an alternative name to be used as equivalent to the original material ID.
Structure
L,2
1. MID
2. EMID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S3,F10  Material ID Equate Acknowledge (IEA) S,H->E
Description
Acknowledge or error
Structure
ACKC3
Exception
None

Stream,Function  Name (Mnemonic) Direction
S3,F11  Material ID Request (MIDR) S,H<-E,reply
Description
The equipment requests the Material ID of the material at the specified port.
Structure
PTN
Exception
None

Stream,Function  Name (Mnemonic) Direction
S3,F12  Material ID Request Acknowledge (MIRA) S,H->E
Description
The host acknowledges the request for the Material ID.  If the use of a request/acknowledge/send/acknowledge conversation is
required, it indicated by the acknowledge code MIDRA = 2.  In this case, the send/acknowledge transaction is S3,F13, S3,Fl4.  A
timeout when electing S3,F13 is indicated by S9,F13 or a restart of the conversation, with S3,F11.
Structure
L,3
1. PTN
2. MIDRA
3. MID

Note:  For all cases except MIDRA = 0 (accepted, MID follows), the MID will be
ignored by the receiver of message S3,F12.  When MIDRA = 0, a zero-length MID
indicates that no MID is available.
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 89
Stream,Function  Name (Mnemonic) Direction
S3,F13  Material ID Send (MIS) S,H->E,reply
Description
The host sends the Material ID of the material at the specified port.
Structure
L,2
1. PTN
2. MID

Note:  A zero-length MID indicates that no MID is available.
Exception
None

Stream,Function  Name (Mnemonic) Direction
S3,F14  Material ID Acknowledge (MIA) S,H<-E
Description
Acknowledge or error
Structure
MIDAC
Exception
None

Stream,Function  Name (Mnemonic) Direction
S3,F15  Materials Multi-Block Inquire (MMBI) S,H->E,reply
Description
This message requests permission to send a multi-block message based upon a maximum length of the total message.  It must be
sent prior to sending any multi-block primary message in Stream 3.
Structure
L,2
1. DATAID
2. DATALENGTH
Exception
None

Stream,Function  Name (Mnemonic) Direction
S3,F16  Materials Multi-Block Grant (MMBG) S,H<-E
Description
This message grants or denies permission to send a multi-block primary message in Stream 3.
Structure
GRANT
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 90
Stream,Function  Name (Mnemonic) Direction
S3,F17  Carrier Action Request M,H->E,reply
Description
This message requests an action to be performed for a specified carrier.  If multi-block, this message must be preceded by the
S3,F11/F12 transaction.
Structure
L,5
1. DATAID
2. CARRIERACTION
3. CARRIERID
4. PTN
5. L,n                          n = number of carrier attributes
1. L,2
1. CATTRID
1

2. CATTRDATA
1

.
.
n. L,2
1. CATTRID
n

2. CATTRDATA
n

Exception
If n = 0, then no carrier attributes are included.  If CARRIERID is not a zero-length item, then PTN may be omitted (a zero-
length item).  ATTRID and ATTRDATA may be substituted for CATTRID and CATTRDATA respectively.
ReticlePodLocationID may be used as one of CATTRID when the CARRIERACTION is PodRelease and the carrier is not at
a Load Port.

Stream,Function  Name (Mnemonic) Direction
S3,F18  Carrier Action Acknowledge S,H<-E
Description
This message acknowledges the carrier action request.
Structure
L,2
1. CAACK
2. L,n
1. L,2
1. ERRCODE
1

2. ERRTEXT
1

.
.
n. L,2
1. ERRCODE
n

2. ERRTEXT
n

Exception
If n = 0, no errors exist.



SEMI E5-1104 © SEMI 1982, 2004 91
Stream,Function  Name (Mnemonic) Direction
S3,F19  Cancel All Carrier Out Request S,H->E, reply
Description
This message is used to cancel all pending carrier out requests.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S3,F20  Cancel All Carrier Out Acknowledge S,H<-E
Description
This message acknowledges the Cancel Carrier Out request.
Structure
L,2
1. CAACK
2. L,n
1. L,2
1. ERRCODE
1

2. ERRTEXT
1

.
.
n. L,2
1. ERRCODE
n

2. ERRTEXT
n

Exception
If n = 0, no errors exist.

Stream,Function  Name (Mnemonic) Direction
S3,F21  Port Group Definition S,H->E, reply
Description
This message defines the port in a port group and provides the initial port access.
Structure
L,3
1. PORTGRPNAME
2. PORTACCESS
3. L,n
1. PTN
1

.
.
n. PTN
n

Exception
None



SEMI E5-1104 © SEMI 1982, 2004 92
Stream,Function  Name (Mnemonic) Direction
S3,F22  Port Group Definition Acknowledge S,H<-E
Description
This message acknowledges the port group definition
Structure
L,2
1. CAACK
2. L,n
1. L,2
1. ERRCODE
1

2. ERRTEXT
1

.
.
n. L,2
1. ERRCODE
n

2. ERRTEXT
n

Exception
If n = 0, no errors exist.

Stream,Function  Name (Mnemonic) Direction
S3,F23  Port Group Action Request S,H->E, reply
Description
This message requests an action be performed for a port group.  The access mode may be changed or the port group may be
deleted.
Structure
L,3
1. PGRPACTION
2. PORTGRPNAME
3. L,m
1. L,2
1. PARAMNAME
1

2. PARAMVAL
1

.
.
m. L,2
1. PARAMNAME
m

2. PARAMVAL
m

Exception
If m = 0, then no parameters are provided.
