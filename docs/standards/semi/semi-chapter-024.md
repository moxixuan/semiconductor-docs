---
title: "E5-1104 - © SEMI 1982, 2004..."
description: "SEMI标准文档"
sidebar_label: "E5-1104 - © SEMI 1982, 2004..."
sidebar_position: 240
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-024.pdf'
  chapter: 24
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/024.pdf"
  pdfSize="0.29MB"
  title="E5-1104 - © SEMI 1982, 2004..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI E5-1104 © SEMI 1982, 2004 93
Stream,Function  Name (Mnemonic) Direction
S3,F24  Port Group Action Acknowledge S,H<-E
Description
This message acknowledges the port group action.
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
S3,F25  Port Action Request S,H->E, reply
Description
This message requests an action be performed for a port
Structure
L,3
1. PORTACTION
2. PTN
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



SEMI E5-1104 © SEMI 1982, 2004 94
Stream,Function  Name (Mnemonic) Direction
S3,F26  Port Action Acknowledge S,H<-E
Description
This message acknowledges the port action request.
Structure
L,2
1. CAACK
2. L,n
1. L,2
3. ERRCODE
1

4. ERRTEXT
1

.
.
n. L,2
5. ERRCODE
n

6. ERRTEXT
n

Exception
If n = 0, no errors exist.

Stream,Function  Name (Mnemonic) Direction
S3,F27  Change Access S,H->E, reply
Description
The Host requests the Equipment to change the Access Mode for the specified Load Ports.  ACCESSMODE specifies the desired
Access Mode.  PTN specifies a desired Load Port Number.
Structure
L,2
1. ACCESSMODE
2. L,n
1. PTN
1

.
.
n. PTN
n

Exception
If n = 0, then the command applies to all Load Ports on the equipment.  If any specified port is already in the specified Access
Mode, then the Equipment shall accept the command, and toggle all loadports to specified mode.  If the Equipment is unable to
change one or more of specified Port(s) to the specified Access Mode, then the Equipment shall accept the command (with
appropriate response acknowledgement), and shall change only the Access Mode of those Port(s) allowed by the equipment,
supplying the host with an indication that not all ports were successfully changed.



SEMI E5-1104 © SEMI 1982, 2004 95
Stream,Function  Name (Mnemonic) Direction
S3,F28  Change Access Acknowledge S,H<-E
Description

Structure
L,2
1. CAACK
2. L,n
1. L,3
1. PTN
1

2. ERRCODE
1

3. ERRTEXT
1

.
.
n. L,3
1. PTN
n

2. ERRCODE
n

3. ERRTEXT
n

Exception
If the command is successful, CAACK = 0, and n = 0.  If the command was successful for some ports, CAACK  = 6, and n > 0.

Stream,Function  Name (Mnemonic) Direction
S3,F29  Carrier Tag Read Request S,H->E, reply
Description
The host requests the equipment to read data from the carrier tag of a carrier.  The carrier must be identified either by its location
identifier or its carrier identifier, or both.  DATASEG may be used to indicate a specific section of data to be read.
DATALENGTH is used to limit the amount of data for that section.
Structure
L,4
1. LOCID
2. CARRIERSPEC
3. DATASEG
4. DATALENGTH
Exception
Either LOCID and CARRIERSPEC can omitted (zero length item), but not both.  If DATASEG and DATALENGTH are both
omitted (are zero length items) then all data is requested.  If DATALENGTH only is omitted,  then all data within the indicated
section is requested.



SEMI E5-1104 © SEMI 1982, 2004 96
Stream,Function  Name (Mnemonic) Direction
S3,F30  Carrier Tag Read Data (CTRD) S,H<-E
Description
This message is used to return requested information from the carrier tag of the carrier indicated in the request and to
acknowledge the results of the request.
Structure
L,2
1. DATA
2. <L,2>
1. CAACK
2. L,s
1. L,2
1. ERRCODE
1

2. ERRTEXT
1

.
.
s. L,2
1. ERRCODE
s

2. ERRTEXT
s

Exception
If the carrier identifier or the carrier location originally specified is unknown, then DATA is zero length.  If CAACK is non-zero,
then DATA is zero length.

Stream,Function  Name (Mnemonic) Direction
S3,F31  Carrier Tag Write Data Request (CTWDR) S,H->E, reply
Description
The host requests the equipment to write data to a carrier tag.  The carrier must be indicated either by its location identifier or its
carrier identifier, or both.  DATASEG may be used to indicate a specific section of data to be written or overwritten.
DATALENGTH may be used to indicate the length of the data to be written.
Structure
L,5
1. LOCID
2. CARRIERSPEC
3. DATASEG
4. DATALENGTH
5. DATA
Exception
Either LOCID and CARRIERSPEC can be omitted (zero length item), but not both.  If DATASEG and DATALENGTH are
both omitted (are zero length items) then all data is to be overwritten.  If only DATALENGTH is omitted, then all data within
the indicated section is to be written.



SEMI E5-1104 © SEMI 1982, 2004 97
Stream,Function  Name (Mnemonic) Direction
S3,F32  Carrier Tag Write Data Acknowledge (CTWDA) S,H<-E
Description
This message acknowledges the success or failure of writing data to the carrier tag requested.
Structure
L,2
1. CAACK
2. L,s
1. L,2
1. ERRORCODE
1

2. ERRORTEXT
1

.
.
s. L,2
1. ERRORCODE
s

2. ERRORTEXT
s

Exception
s = 0 if and only if there are no errors.

Stream,Function  Name (Mnemonic) Direction
S3, F33  Cancel All Pod Out Request
Description
This message is used to cancel all pending pod out requests.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S3,F34  Cancel All Pod Out Acknowledge
Description
This message acknowledges the Cancel Pod Out request.
Structure
L,2
1. CAACK
2. L,n
1. L,2
1. ERRORCODE
1

2. ERRORTEXT
1

.
.
n. L,2
1. ERRORCODE
n

2. ERRORTEXT
n

Exception
If n = 0, no errors exist.



SEMI E5-1104 © SEMI 1982, 2004 98
Stream,Function  Name (Mnemonic) Direction
S3,F35  Reticle Transfer Job Request
Description
This message requests a reticle transfer job be performed (or cancelled) for a particular pod.
Structure
L,6
1. JOBACTION
2. PODID
3. INPTN
4. OUTPTN
5. L,n                          n = number of attributes
1. L,2
1. ATTRID
1

2. ATTRDATA
1

.
.
.
n. L,2
1. ATRRID
n

2. ATTRDATA
n

5. L,m                          m = capacity
1. L,3
1. RETICLEID
1

2. RETREMOVEINSTR
1

3. L,r                r = number of attributes
1. L,2
1. ATTRID
1. 1

2. ATTRDATA
1. 1

.
.
r. L,2
1. ATTRID
1. r

2. ATTRDATA
1. r

.
.
m. L,3
1. RETICLEID
m

2. RETREMOVEINSTR
m

3. L,r                r = number of attributes
1. L,2
1. ATTRID
m.1

2. ATTRDATA
m.1

.
.
r. L,2
1. ATTRID
m.r

2. ATTRDATA
m.r

6. L,m                          m = capacity
1. L,2
1. RETICLEID
1

2. RETPLACEINSTR
1

.
.
m. L,2
1. RETICLEID
m

2. RETPLACEINSTR
m

Exception
If JOBACTION = CancelReticleTransferJob, m and n may = 0



SEMI E5-1104 © SEMI 1982, 2004 99
Stream,Function  Name (Mnemonic) Direction
S3,F36  Reticle Transfer Job Request Acknowledgement
Description
This message acknowledges the ReticleTransferJobRequest.
Structure
L,2
1. RPMACK
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
None

10. 8  Stream 4 Material Control — The material control stream contains the original material control protocol and
the newer protocol which supports SEMI E32.
10. 8.1  Original  Material  Control  Protocol  —  The  functions  in  the  material  control  stream  are  used  to  effect  the
automatic transfer of material between equipment.  A simple handshake is achieved which provides for a variety of
error  conditions  which  gracefully  terminate  the  handshake.    Separate  messages  advise  the  host  of  errors  and
completed material transfers.
10. 8.1.1  Since the handshake and host messages are separate, the handshake may be achieved transparently through
the  host  or  by  direct  connection  between  equipment.    The  host  completes  the  handshake  by  relaying  messages
between the equipment.  Only a single port is required on the equipment, and the equipment has a simple message
handling requirement.  When a direct connection is desired, at least three ports are required, the receiving equipment
must  look  like  the  host  with  respect  to  the  sending  equipment,  and  message  handling  in  the  equipment  is
significantly  more  complicated  than  in  the  host-only  connection.    Nevertheless,  the  direct  connection  may  still  be
chosen  in  an  attempt  to  provide  operation  without  a  host.    Since  the  host  is  reasonably  transparent  in  the  material
handshake,  a  simple  explanation  of  the  handshake  may  be  achieved  by  just  considering  the  exchange  of  messages
between the sender, the equipment wanting to get rid of material, and the receiver (the equipment able to accept the
material).
10. 8.1.2  Figure  4  shows  six  possible  handshake  situations  between  the  sender  and  the  receiver.    There  are  two
normal  handshakes.    Figure  4(a)  shows  the  normal  three-message  exchange  when  material  is  passed  between
equipment.    The  host  is  informed  of  a  complete  transfer  of  material.    Figure  4(b)  shows  an  alternative  message
exchange  where  the  sender  changes  its  mind  and  decides  not  to  send  the  material.    Figures  4(c)  and  (d)  show  two
situations where the material gets stuck during the transfer.  In each situation an error message is issued to the host
from the equipment where the material is stuck.  The other equipment terminates normally.  When material is stuck,
manual  intervention  is  required  to  move  the  material  towards  the  equipment  which  indicates  the  stuck  condition.
The  manual  intervention  has  two  possible  outcomes.    One,  the  material  can  be  moved  to  a  position  where  the
handshake can resume or, two, the material is broken or lost from the transfer.  Lost material causes a lost material
error message to be sent to the host prior to resuming the operation.  The specific details of recovering front stuck
material are equipment-dependent.  The stuck material condition is determined by the amount of time the material
transfer mechanism is turned on.  The sender claims stuck material if the material is not clear of its sensor before a
time t1.  The receiver claims stuck material if the material is not received before time t2.  Figures 4(e) and (f) show
the  possible  error  conditions  in  the  unlikely  event  that  for  some  reason  a  handshake  message  is  lost.    Figure  4(e)
shows  that  time  t3  is  the  longest  that  the  sender  will  wait  for  material  received  message.    Times  t2  and  t3  set  an
upper limit on the amount of time either material transport mechanism will operate.


SEMI E5-1104 © SEMI 1982, 2004 100

Figure 4
The Six Possible Handshakes

10. 8.1.3  Figure 5 summarizes the interaction of the timers, handshake messages, and the error messages in the form
of a flow chart.  It also identifies specific states for the sender and the receiver.  These states are referred to in the
messages.
The ranges of timer values are as follows:
tl — time to leave sender
tl + 10 <= t2 <= 60 sec. — time to receive
t2 + 10 <= t3 <= 70 sec. — time to complete send


SEMI E5-1104 © SEMI 1982, 2004 101
Default values, tl = 10 sec., t2 = 60 sec., t3 = 70 sec.
NOTE 6:  t1, t2, t3 defined for Stream 4 are not to be confused with timeouts T1, T2, T3, and T4 defined in SEMI E4 (SECS-I).

Figure 5
Material Control-Handshake Flowchart



SEMI E5-1104 © SEMI 1982, 2004 102
Stream,Function  Name (Mnemonic) Direction
S4,F0  Abort Transaction (S4F0) S,H->E
Description
Same form as S1,F0.
Structure

Exception


Stream,Function  Name (Mnemonic) Direction
S4,F1  Ready to Send Materials (RSN) S,H<->E,reply
Description
The sender advises the receiver that some material is awaiting transfer.
Structure
L,2
1. PTN
2. MID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S4,F2  Ready to Send Acknowledge (RSA) S,H<->E
Description
Acknowledge or error
Structure
RSACK
Exception
None

Stream,Function  Name (Mnemonic) Direction
S4,F3  Send Material (SMN) S,H<->E
Description
The receiver advises the sender that it is ready to receive material and that its transfer mechanism is running.
Structure
L,2
1. PTN
2. MID
Exception
None

S4,F4 Not Used



SEMI E5-1104 © SEMI 1982, 2004 103
Stream,Function  Name (Mnemonic) Direction
S4,F5  Handshake Complete (HCN) S,H<->E
Description
Receiver advises sender that the handshake is complete.  The sender may now stop its transfer mechanism.
Structure
L,2
1. PTN
2. MID
Exception
None

S4,F6 Not Used

Stream,Function  Name (Mnemonic) Direction
S4,F7  Not Ready to Send (ABN) S,H<->E
Description
Sender advises receiver that no material is being sent.  The receiver may now stop its transfer mechanism.
Structure
L,2
1. PTN
2. MID
Exception
None

S4,F8 Not Used

Stream,Function  Name (Mnemonic) Direction
S4,F9  Stuck in Sender (SSN) S,H<-E
Description
An error from the sender to the host.  The time between the receipt of Material (SMN) and the material leaving the sender’s
sensor exceeds the sender’s t1 timeout.  The sender goes to a hold state until the disposition of the stuck material is determined.
Structure
L,2
1. PTN
2. MID
Exception
None

S4,F10 Not Used



SEMI E5-1104 © SEMI 1982, 2004 104
Stream,Function  Name (Mnemonic) Direction
S4,F11  Stuck in Receiver (SRN) S,H<-E
Description
An error from the receiver to the host.  The time between Send Material (SMN) and detection of the material at the receiver
exceeds the receiver’s t2 timeout.  The receiver goes to a hold state until the disposition of material is determined.
Structure
L,2
1. PTN
2. MID
Exception
None

S4,F12 Not Used

Stream,Function  Name (Mnemonic) Direction
S4,F13  Send Incomplete Timeout (SIN) S,H<-E
Description
An error from the sender to the host.  The time between the receipt of the Send Material (SMN) and the receipt of Handshake-
Complete (HCN) exceeds the sender’s t3 timeout.  There has been an error in the handshake and the transfer mechanism is
turned off.
Structure
L,2
1. PTN
2. MID
Exception
None

S4,F14 Not Used

Stream,Function  Name (Mnemonic) Direction
S4,F15  Material Received (MRN) S,H<-E
Description
A message from the receiver to the host.  Material has been transferred to the receiver.
Structure
L,2
1. PTN
2. MID
Exception
None

S4,F16 Not Used



SEMI E5-1104 © SEMI 1982, 2004 105
Stream,Function  Name (Mnemonic) Direction
S4,F17  Request to Receive (RTR) S,H<->E,reply
Description
Receiver requests the sender initiate a conversation to send the specified material to the specified port.
Structure
L,2
1. PTN
2. MID
Exception
A zero-length MID means equipment doesn’t know MID.

Stream,Function  Name (Mnemonic) Direction
S4,F18  Request to Receive Acknowledge (RRA) S,H<->E
Description
Acknowledge or error
Structure
RRACK
Exception
None

10. 8.2  Support  for  Material  Movement  Management  Services  —  The  following  messages  were  defined  to  support
SEMI E32.
10. 8.2.1  Macro  Level  Messages  —  The  following  messages  support  the  host  supervised  macro  level  of  material
movement  as  defined  in  SEMI  E32.    Stream  1  Macro  Level  Messages  can  be  found  in  Section  10.5:  S1F19,  Get
Attribute (GA); S1F20, Attribute Data (AD).



SEMI E5-1104 © SEMI 1982, 2004 106
Stream,Function  Name (Mnemonic) Direction
S4,F19  Transfer Job Create (TJ) M,H->E,reply
Description
The host requests that the equipment undertake one or more discrete (or atomic) transfers to achieve a host defined objective.
The host provides the transfer specifications for each atomic transfer.  Atomic transfers on separate ports on the equipment are
allowed to execute in parallel.  Atomic transfers for a port must be executed sequentially or in some cases concurrently.  Both
equipment transfer partners for each atomic transfer must receive appropriate Transfer Job Request messages in order to execute
a transfer.  If S4,F20 is multi-block, it must be preceded by the S4,F25/S4,F26 Inquire/Grant transaction.
Structure
L,2
1. DATAID
2. L,2
1. TRJOBNAME
2. L,n                      [n = #atomic xfrs defined for this job]
1. L,12                [Specification for first atomic xfr]
1. TRLINK      [Atomic transfer identifier]
2. TRPORT      [Port to be used for transfer]
3. TROBJNAME   [Transfer object identifier]
4. TROBJTYPE   [Object type–what form is the material in]
5. TRROLE      [Role in transfer–primary/secondary]
6. TRRCP       [Transfer recipe identifier]
7. TRPTNR      [Identifier of transfer partner]
8. TRPTPORT    [Partner's Port to be Used]
9. TRDIR       [Transfer direction-send or receive]
10. TRTYPE      [Active or Passive]
11. TRLOCATION  [Location to send/receive mtl]
12. TRAUTOSTART [Does eqp await host start command after setup?]
.
.
n. L,12                [Specification for nth atomic xfr]
1. <TRLINK]
↓
12. TRAUTOSTART
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 107
Stream,Function  Name (Mnemonic) Direction
S4,F20  Transfer Job Acknowledge (TJA) S,H<-E
Description
The equipment informs the host of its acceptance or rejection of the Transfer Job Request.
Structure
L,3
1. TRJOBID
2. L,m                          [m = number of atomic transfers in the transfer job.]
1. TRATOMICID
1

.
.
m. TRATOMICID
m

3. L,2
1. TRACK                 [Accepted or rejected]
2. L,n                      [n = # errors reported]
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
A zero-length list (m = 0) is sent if the transfer job is rejected.  A zero-length list (n = 0) is sent if the transfer job is accepted.

Stream,Function  Name (Mnemonic) Direction
S4,F21  Transfer Job Command (TC) S,H->E,reply
Description
This message is used by the host to modify a current transfer job on an equipment.
Structure
L,3
1. TRJOBID
2. TRCMDNAME                  [identifier of the transfer command]
3. L,n                          [n = number of parameters = 0 if none]
1. L,2
1. CPNAME
1
          [transfer parameter name]
2. CPVAL
1
           [transfer parameter value]
.
.
n. L,2
1. CPNAME
n

2. CPVAL
n

Exception
None



SEMI E5-1104 © SEMI 1982, 2004 108
Stream,Function  Name (Mnemonic) Direction
S4,F22  Transfer Command Acknowledge (TCA) S,H<-E
Description
Equipment accepts or rejects the transfer command.
Structure
L,2
1. TRACK                       [Accepted or rejected]
2. L,n                          [n = # errors reported]
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
If the command is accepted, n = 0.

Stream,Function  Name (Mnemonic) Direction
S4,F23  Transfer Job Alert (TJA) S,H<-E,[reply]
Description
Equipment informs the host that a transfer job milestone has been reached (e.g., job started or job complete).  If complete, all
quipment resources originally reserved for the transfer have been released.
Structure
L,4
1. TRJOBID
2. TRJOBNAME
3. TRJOBMS
4. L,2
1. TRACK                 [success or failure]
2. L,n                      [n = # errors reported]
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
If the transfer job is completed successfully, n = 0.

Stream,Function  Name (Mnemonic) Direction
S4,F24  Transfer Alert Acknowledge (TLA) S,H->E
Description
Acknowledge receipt of the S4,F23 message.
Structure
Header only
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 109
Stream,Function  Name (Mnemonic) Direction
S4,F25  Multi-block Inquire (MB14) S,H->E,reply
Description
If a Stream 4 host-initiated message is more than a single block in length, this transaction must precede the message.
Structure
L,2
1. DATAID
2. DATALENGTH
Exception
None

Stream,Function  Name (Mnemonic) Direction
S4,F26  Multi-block Grant (MBG4) S,H<-E
Description
Grant (or deny) permission to send multi-block message.
Structure
GRANT
Exception
None

10. 8.2.2  Micro  Level  Messages  —  The  following  messages  support  the  equipment-to-equipment  micro  level
handoff of material as defined in SEMI E32.
10. 8.2.2.1  The messages which support the micro level are passed directly between the equipment.  For the purpose
of  the  communication  link,  one  of  the  equipment  must  be  designated  the  host  and  the  other  the  equipment.    The
choice is up to the implementer.  Equipment which are configurable to act as either host or equipment are suggested
for ease of installation.
10. 8.2.2.2  The  two  equipment  involved  in  a  micro  level  transfer  assume  different  roles.    One  equipment  is
designated  the  “Primary  Transfer  Partner,”  and  the  other  is  the  “Secondary  Transfer  Partner”  (see  SEMI  E32  for
more definition).  While some consistency of roles is expected, this designation is fluid and may change from one
transfer  to  the  next.    The  Primary  Transfer  Partner  has  more  responsibility  and  thus  initiates  messages  which  the
Secondary does not.
10. 8.2.2.3  The  selection  of  “Host”  and  “Equipment”  for  the  communication  link  is  not  related  to  the  fluid
relationship  of  Primary  and  Secondary  Transfer  Partner.    However,  it  is  the  designation  of  Primary  or  Secondary
which determines the originator of certain messages.  It is for this reason that the designation P = Primary and S =
Secondary Transfer Partner.


SEMI E5-1104 © SEMI 1982, 2004 110
10. 8.2.2.4  Micro Level Messages
Stream,Function  Name (Mnemonic) Direction
S4,F27  Handoff Ready (HR) S,P<->S
Description
Each transfer partner informs the other when they are ready to perform a specified atomic transfer.  The TRLINK values from
the two partners must match.  The values contained in the atomic transfer specification pertain to the sender of the message
(except where specified).
Structure
L,2
1. EQNAME
2. L,11                         [Specification for atomic xfr]
1. TRLINK               [Atomic transfer identifier]
2. TRPORT               [Port to be used for transfer]
3. TROBJNAME            [Transfer object identifier]
4. TROBJTYPE            [Object type-what form the material is in]
5. TRROLE               [Role in transfer-primary/secondary]
6. TRPTNR               [Identifier of transfer partner]
7. TRPTPORT             [Partner's Port to be Used]
8. TRDIR                [Transfer direction-send or receive]
9. TRTYPE               [Active or Passive]
10. TRLOCATION           [Location to send/receive mtl]
Exception
None

S4,F28 Not Used

Stream,Function  Name (Mnemonic) Direction
S4,F29  Handoff Command (HC) S,P->S
Description
Command issued by the primary to the secondary transfer partner to  achieve some physical action.
Structure
L,4
1. TRLINK                      [Atomic       Transfer       identifier]
2. MCINDEX                    [Identified this specific Micro Cmd request]
3. HOCMDNAME                  [Requested Micro Cmd]
4. L,n                          [n = number of parameters]
1. L,2
1. CPNAME
1
          [Micro Cmd parameter name]
2. CPVAL
1
           [Micro Cmd parameter value]
.
.
n. L,2
1. CPNAME
n

2. CPVAL
n

Exception
N = 0 if no parameters are used.

S4,F30 Not Used



SEMI E5-1104 © SEMI 1982, 2004 111
Stream,Function  Name (Mnemonic) Direction
S4,F31  Handoff Command Complete (HCC) S,P<-S
Description
Completion status of the micro command.  This is sent from the secondary to the primary transfer partner when the command is
completed or terminated.
Structure
L,3
1. TRLINK                      [Atomic       Transfer       identifier]
2. MCINDEX                    [Links to specific micro command (S4,F31)]
3. L,2
1. HOACK                 [success or failure]
2. L,n                      [n = # errors reported]
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
None

S4,F32 Not Used

Stream,Function  Name (Mnemonic) Direction
S4,F33  Handoff Verified (HV) P<->S
Description
Sent by the primary transfer partner to inform the secondary that no more micro commands will be issued for this atomic transfer
and to request a verification that the transfer is complete and successful.  Also sent by the secondary partner following the receipt
of this message to verify that the transfer is complete and successful (or to report problems).
Structure
L,2
1. TRLINK
2. L,2
1. HOACK                 [success or failure]
2. L,n                      [n = # errors reported]
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
None

S4,F34 Not Used



SEMI E5-1104 © SEMI 1982, 2004 112
Stream,Function  Name (Mnemonic) Direction
S4,F35  Handoff Cancel Ready (HCR) P<->S
Description
Sent by either transfer partner to cancel a previous Handoff Ready message.  This message is valid only before the handoff has
begun.
Structure
TRLINK
Exception
None

S4,F36 Not Used

Stream,Function  Name (Mnemonic) Direction
S4,F37  Handoff Cancel Ready Acknowledge (HCA) P<->S
Description
Sent by the receiver of the Handoff Cancel Ready message to accept or deny the cancel.  The cancel request is denied if the
handoff process has begun.
Structure
L,2
1. TRLINK
2. HOCANCELACK
Exception
None

S4,F38 Not Used

Stream,Function  Name (Mnemonic) Direction
S4,F39  Handoff Halt (HH) P<->S
Description
Sent by either transfer partner to cause all transfer related activity of the other to cease immediately.  It is used when the
equipment or material is at risk of damage.
Structure
TRLINK
Exception
None

S4,F40 Not Used



SEMI E5-1104 © SEMI 1982, 2004 113
Stream,Function  Name (Mnemonic) Direction
S4,F41  Handoff Halt Acknowledge (HHA) P<->S
Description
Sent to equipment’s transfer partner following completion of halt activities resulting from a previously received S4,F39.
Structure
L,2
1. TRLINK
2. HOHALTACK
Exception
None

S4,F42 Not Used

10. 9  Stream  5  Exception Handling  —  This  stream  contains  messages  regarding  binary  and  analog  equipment
exceptions.  Exceptions are classified into two categories: errors and alarms.  Messages S5,F1 through S5,F8 of this
section  provide  basic  alarm  messages.    The  messages  S5,F9  through  S5,F18  provide  extended  capabilities  for
Exception Handling.  When using messages F1–F8, alarms may be divided into categories as follows:

# 1

1. personal safety — Condition may be dangerous to people.

# 2

2. equipment safety — Condition may harm equipment.

# 3

3. parameter control warning — Parameter variation outside of preset limits — may harm product.

# 4

4. parameter  control  error  —  Parameter  variation  outside  of  reasonable  control  limits  —  may  indicate  an
equipment malfunction.

# 5

5. irrecoverable error — Intervention required before normal use of equipment can resume.

# 6

6. equipment status warning — An unexpected condition has occurred, but operation can continue.

# 7

7. attention flags — A signal from a process program indicating that a particular step has been reached.

# 8

8. data integrity — A condition which may cause loss of data; usually related to Stream 6.
10. 9.1  For messages F1 through F8, it will be the equipment’s responsibility to categorize the alarm.  Some alarm
conditions  may  cause  more  than  one  type  of  alarm  to  be  issued.    For  example,  a  parameter  control  error  on  over
temperature may also trip a protective device that makes the alarm irrecoverable without some intervention.

Stream,Function  Name (Mnemonic) Direction
S5,F0  Abort Transaction (S5F0) S,H<->E
Description
Same form as S1,F0.
Structure

Exception




SEMI E5-1104 © SEMI 1982, 2004 114
Stream,Function  Name (Mnemonic) Direction
S5,F1  Alarm Report Send (ARS) S,H<-E,[reply]
Description
This message reports a change in or presence of an alarm condition.  One message will be issued when the alarm is set and one
message will be issued when the alarm is cleared.  Irrecoverable errors and attention flags may not have a corresponding clear
message.
Structure
L,3
1. ALCD
2. ALID
3. ALTX
Exception
None

Stream,Function  Name (Mnemonic) Direction
S5,F2  Alarm Report Acknowledge (ARA) S,H->E
Description
Acknowledge or error
Structure
ACKC5
Exception
None

Stream,Function  Name (Mnemonic) Direction
S5,F3  Enable/Disable Alarm Send (EAS) S,H->E,[reply]
Description
This message will change the state of the enable bit in the equipment.  The enable bit determines if the alarm will be sent to the
host.  Alarms which are not controllable in this way are unaffected by this message.
Structure
L,2
1. ALED
2. ALID
Exception
A zero-length item for ALID means all alarms.

Stream,Function  Name (Mnemonic) Direction
S5,F4  Enable/Disable Alarm Acknowledge (EAA) S,H<-E
Description
Acknowledge or error
Structure
ACKC5
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 115
Stream,Function  Name (Mnemonic) Direction
S5,F5  List Alarms Request (LAR) S,H->E,reply
Description
This message requests the equipment to send binary and analog alarm information to the host.
Structure
ALID
1
, . . . ,ALID
n

Exception
A zero-length item means send all possible alarms regardless of the state of ALED.

Stream,Function  Name (Mnemonic) Direction
S5,F6  List Alarm Data (LAD) M,H<-E
Description
This message contains the alarm data known to the equipment.  There are “m” alarms in the list.
Structure
L,m
1. L,3
1. ALCD
1

2. ALID
1

3. ALTX
1

2. L,3
.
.
m. L,3
1. ALCD
m

2. ALID
m

3. ALTX
m

Exception
If m = 0, no response can be made.  A zero-length item returned for ALCD
i
or ALTX
i
means that value does not exist.

Stream,Function  Name (Mnemonic) Direction
S5,F7  List Enabled Alarm Request (LEAR) S,H->E,reply
Description
List alarms which are enabled.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S5,F8  List Enabled Alarm Data (LEAD) M,H<-E
Description
This message is similar to S5,F6 except that it lists only alarms which are enabled.
Structure
Same as S5,F6
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 116
Stream,Function  Name (Mnemonic) Direction
S5,F9  Exception Post Notify (EXPN) S,H<-E,[reply]
Description
This message provides the means to inform a host system that an exception condition is ‘set’.  Optionally, recovery actions for
the exception may be sent.
Structure
L,5
1. TIMESTAMP
2. EXID
3. EXTYPE
4. EXMESSAGE
5. L,n
1. EXRECVRA
1

.
.
.
n. EXRECVRA
n

Exception
A zero-length list (n = 0) shall be sent when there are no possible recovery actions.
This is a single block message.  The text in each of the EXRECVRA data items may need to be restricted in length to meet the
single block requirement.

Stream,Function  Name (Mnemonic) Direction
S5,F10  Exception Post Confirm (EXPC) S,H->E
Description
Host confirms receipt of S5,F9 message from the equipment.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S5,F11  Exception Clear Notify (EXCN) S,H<-E,[reply]
Description
This message provides the means to inform a host system that an exception/alarm condition is no longer active (set).
Structure
L,4
1. TIMESTAMP
2. EXID
3. EXTYPE
4. EXMESSAGE
Exception
EXMESSAGE can be used to provide the reason that the exception cleared.



SEMI E5-1104 © SEMI 1982, 2004 117
Stream,Function  Name (Mnemonic) Direction
S5,F12  Exception Clear Confirm (EXCC) S,H->E
Description
Host confirms receipt of S5,F11 message from the equipment.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S5,F13  Exception Recover Request (EXRR) S,H->E,reply
Description
Request that the entity which is experiencing an error execute a recovery action.
Structure
L,2
1. EXID
2. EXRECVRA
Exception


Stream,Function  Name (Mnemonic) Direction
S5,F14  Exception Recover Acknowledge (EXRA) S,H<-E
Description
The entity indicates a response to the recovery request.
Structure
L,2
1. EXID
2. L,2
1. ACKA
2. L,m                      (m       =       {0,2})
1. ERRCODE
2. ERRTEXT
Exception
The list m can be zero length, if the recovery request was accepted.



SEMI E5-1104 © SEMI 1982, 2004 118
Stream,Function  Name (Mnemonic) Direction
S5,F15  Exception Recovery Complete Notify (EXRCN) S,H<-E,[reply]
Description
Allows the service provider to inform the controller/host that the recovery operation completed on a specific exception and an
error code if the recovery terminated abnormally.
Structure
L,3
1. TIMESTAMP
2. EXID
3. L,2
1. ACKA
2. L,m                      (m       =       {0,2})
1. ERRCODE
2. ERRTEXT
Exception
This list m can be of zero length if the recovery was successful.

Stream,Function  Name (Mnemonic) Direction
S5,F16  Exception Recovery Complete Confirm (EXRCC) S,H->E
Description
Host confirms receipt of S5,F15 message from the equipment.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S5,F17  Exception Recovery Abort Request (EXRAR) S,H->E,reply
Description
Stop the recovery procedure on a specific exception.
Structure
1. EXID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S5,F18  Exception Recovery Abort Acknowledge (EXRAA) S,H<-E
Description
Indicate the success of the request for Recovery Abort.
Structure
L,2
1. EXID
2. L,2
1. ACKA
2. L,m                      (m       =       {0,2})
1. ERRCODE
2. ERRTEXT
Exception
The list m can be of zero length if the abort was successful.



SEMI E5-1104 © SEMI 1982, 2004 119
10. 10  Stream  6  Data  Collection  —  This  stream  is  intended  to  cover  the  needs  of  in-process  measurements  and
equipment monitoring.

Stream,Function  Name (Mnemonic) Direction
S6,F0  Abort Transaction (S6F0) S,H<->E
Description
Same form as S1,F0.
Structure

Exception


Stream,Function  Name (Mnemonic) Direction
S6,F1  Trace Data Send (TDS) M,H<-E,[reply]
Description
This function sends samples to the host according to the trace setup done by S2,F23.  Trace is a time-driven form of equipment
status.
Even if S6,F1 is multi-block, it is not preceded by an Inquire/Grant transaction, because the Host S2,F23 is an implicit grant.
Some equipment may support only single-block S6,F1, and may refuse an S2,F23 (Trace Initiate Send) message which would
cause a multi-block S6,F1.
Structure
L,4
1. TRID
2. SMPLN
3. STIME
4. L,n
1. SV
1

2. SV
2

.
.
n. SV
n

Exception
A zero-length STIME means no value is given and that the time is to be derived from SMPLN along with knowledge of the
request.

Stream,Function  Name (Mnemonic) Direction
S6,F2  Trace Data Acknowledge (TDA) S,H->E
Description
Acknowledge or error
Structure
ACKC6
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 120
Stream,Function  Name (Mnemonic) Direction
S6,F3  Discrete Variable Data Send (DVS) M,H<-E,[reply]
Description
Any data report which is initiated by an event, such as the completion of a measurement, rather than passage of time is called a
discrete variable.  Some equipment may have several possible events on which to send the data.  S2,F15 is used to select the
desired reporting events.  Reports requiring only one block of data may report directly to the host with this message.  If S6,F3 is
multi-block, it must be preceded by the S6,F5/S6,F6 Inquire/Grant transaction.
Structure
L,3
1. DATAID
2. CEID
3. L,n
1. L,2
1. DSID
1

2. L,m
1. L,2
1. DVNAME
1

2. DVVAL
1

2. L,2
.
.
m. L,2
1. DVNAME
m

2. DVVAL
m

2. L,2
.
.
n. L,2
1. DSID
n

2. etc.
Exception
None

Stream,Function  Name (Mnemonic) Direction
S6,F4  Discrete Variable Data Acknowledge (DVA) S,H->E
Description
Acknowledge or error
Structure
ACKC6
Exception
None

Stream,Function  Name (Mnemonic) Direction
S6,F5 Multi-block Data Send Inquire (MBI) S,H<-E,reply
Description
If the discrete data report S6F3, F9, F11, F13 can involve more than one block, this transaction must precede the transmission.
Structure
L,2
1. DATAID
2. DATALENGTH
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 121
Stream,Function  Name (Mnemonic) Direction
S6,F6  Multi-block Grant (MBG) S,H->E
Description
Grant permission to send
Structure
GRANT6
Exception
None

Stream,Function  Name (Mnemonic) Direction
S6,F7  Data Transfer Request (DDR) S,H->E,reply
Description
The host may initiate a data transfer of specified data stored in the equipment with this function.
Structure
DATAID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S6,F8  Data Transfer Data (DDD) M,H<-E
Description
Equipment sends data to the host.
Structure
Similar to the structure of S6,F3
Exception
A zero-length item returned means the requested data cannot be sent.



SEMI E5-1104 © SEMI 1982, 2004 122
Stream,Function  Name (Mnemonic) Direction
S6,F9  Formatted Variable Send (FVS) M,H<-E,[reply]
Description
The same function as S6,F3 except that the DVNAMEs are supplied from a predefined form that is known to the host.  Thus, the
data are more compact.  If S6,F9 is multi-block, it must be preceded by the S6,F5/S6,F6 Inquire/Grant transaction.
Structure
L,4
1. PFCD
2. DATAID
3. CEID
4. L,n
1. L,2
1. DSID1
1

2. L,m
1. DVVAL
1

.
.
m. DVVAL
m

2. L,2
.
.
n. L,2
1. DSID
n

2. etc.
Exception
None

Stream,Function  Name (Mnemonic) Direction
S6,F10  Formatted Variable Acknowledge (FVA) S,H->E
Description
Acknowledge or error
Structure
ACKC6
Exception




SEMI E5-1104 © SEMI 1982, 2004 123
Stream,Function  Name (Mnemonic) Direction
S6,F11  Event Report Send (ERS) M,H<-E, reply
Description
The purpose of this message is for the equipment to send a defined, linked, and enabled group of reports to the host upon the
occurrence of an event (CEID).
If S6,F11 is Multi-block, it must be preceded by the S6,F5/S6,F6 Inquire/Grant transaction.
Structure
L,3
1. DATAID
2. CEID
3. L,a
1. L,2
1. RPTID
1

2. L,b
1. V
1

.
.
b. V
b

.
.
a. L,2                      report a
1. RPTIDa
2. L,c                #Vs this report
1. V
1

.
.
c. V
c

Exception
If there are no reports linked to the event a ‘null’ report is assumed.  A zero-length list for # of reports means there are no reports
linked to the given CEID.

Stream,Function  Name (Mnemonic) Direction
S6,F12  Event Report Acknowledge (ERA) S,H->E
Description
Acknowledge or error
Structure
ACKC6
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 124
Stream,Function  Name (Mnemonic) Direction
S6,F13  Annotated Event Report Send (AERS) M,H<-E,reply
Description
This message is the same as S6F11 with the exception that VID’s are sent with data.
If S6,F13 is Multi-block, it must be preceded by the S6,F5/S6,F6 Inquire/Grant transaction.
Structure
L,3
1. DATAID
2. CEID
3. L,a
1. L,2
1. RPTID
1

2. L,b
1. L,2
1. VID
1

.
.
b. L,2
1. VID
b

b. V
b

.
.
a. L,2
1. RPTID
a

2. L,c
1. L,2
1. VID
1

2. V
1

.
.
c. L,2
1. VID
c

2. V
c

Exception
If there are no reports linked to the event a ‘null’ report is assumed.  A zero-length list for # of reports means there are no reports
linked to the given CEID.

Stream,Function  Name (Mnemonic) Direction
S6,F14  Annotated Event Report Acknowledge (AERA) S,H->E
Description
Acknowledge or error
Structure
ACKC6
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 125
Stream,Function  Name (Mnemonic) Direction
S6,F15  Event Report Request (ERR) S,H->E, reply
Description
The purpose of this message is for the host to demand a given report group from the equipment.
Structure
CEID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S6,F16  Event Report Data (ERD) M,H<-E
Description
Equipment sends reports linked to given CEID to host.
Structure
Identical to structure of S6,F11.
Exception
A zero-length item means there are no reports linked to the given CEID.

Stream,Function  Name (Mnemonic) Direction
S6,F17  Annotated Event Report Request (AERR) S,H->E,reply
Description
Same as S6,F15, but requests annotated reports.
Structure
CEID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S6,F18  Annotated Event Report Data (AERD) M,H<-E
Description
Equipment sends annotated reports linked to given CEID.
Structure
Same as S6,F13.
Exception
A zero-length item means there are no reports linked to the given CEID.

Stream,Function  Name (Mnemonic) Direction
S6,F19  Individual Report Request (IRR) S,H->E,reply
Description
The purpose of this message is for the host to request a defined report from the equipment.
Structure
RPTID
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 126
Stream,Function  Name (Mnemonic) Direction
S6,F20  Individual Report Data (IRD) M,H<-E
Description
Equipment sends variable data defined for the given RPTID to the host.
Structure
L,n                                   #       of       variable       data       items
1. V
1

.
.
n. V
n

Exception
None

Stream,Function  Name (Mnemonic) Direction
S6,F21  Annotated Individual Report Request (AIRR) S,H->E,reply
Description
The purpose of this message is for the host to request an annotated defined report from the equipment.
Structure
RPTID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S6,F22  Annotated Individual Report Data (AIRD) M,H<-E
Description
Equipment sends annotated variable data defined for the given RPTID to the host.
Structure
L,n                                   #       of       variable       data       items
1. L,2
1. VID
1

2. V
1

.
.
n. L,2
1. VID
n

2. V
n

Exception
A zero-length list for # of variable data items means RPTID is not defined.

Stream,Function  Name (Mnemonic) Direction
S6,F23  Request Spooled Data (RSD) S,H->E,reply
Description
The purpose of this message is for the host to request transmission or deletion of the messages currently spooled by the
equipment.
Structure
RSDC
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 127
Stream,Function  Name (Mnemonic) Direction
S6,F24  Request Spooled Data Acknowledgement Send (RSDAS) S,H<-E
Description
The purpose of this message is to acknowledge the receipt of the Request Spooled Data (S6,F23) and to respond with an
appropriate acknowledge code.
Structure
RSDA
Exception
None

Stream,Function  Name (Mnemonic) Direction
S6,F25  Notification Report Send M,H<->E,[reply]
Description
This message is used for change notifications or confirmation reports.  A change notification is a report of an internal action and
is not associated with a prior action requested by the host.
A confirmation report is always associated with an earlier request for action.  A confirmation report is sent to the initial requestor
of a delayed action at the time the action is completed.  A delayed action is an action that is any action not performed before the
response to the initial request is sent.  OPID contains the value of OPID in the initial request.  LINKID is set to a non-zero value
if and only if additional completion reports with the same OPID will be sent.  If S6,F25 is multiblock, it must be preceded by the
S6,F5/S6,F6 Inquire Grant transaction.
Structure
L,7
1. DATAID
2. OPID
3. LINKID
4. RCPSPEC
5. RMCHGSTAT
6. L,m
1. L,2
1. RCPATTRID
1

2. RCPATTRDATA
1

.
.
m. L,2
1. RCPATTRID
m

2. RCPATTRDATA
m

7. L,2
1. RMACK
2. L,p
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
OPID and LINKID are zero-length items when and only when S6,F25 is sent as a change notification rather than as a
confirmation report.  p = 0 if and only if RMACK indicates no errors.



SEMI E5-1104 © SEMI 1982, 2004 128
Stream,Function  Name (Mnemonic) Direction
S6,F26  Notification Report Send Acknowledge S,H<->E
Description
This message is used to acknowledge the confirmation report.  It is defined for completeness and as an aid to the user in
identifying problems.
Structure
ACKC6
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 129
Stream,Function  Name (Mnemonic) Direction
S6,F27  Trace Report Send (TRS) M,H<-E,[reply]
Description
The equipment sends a completed Trace Report to the host.
Structure
L,3
1. DATAID
2. TRID
3. L,n                          (n cannot exceed group size specified by S2F53)
1. L,p                      (p is the number of reports for each trace sample)
1. L,2
1. RPTID
1

2. L,m           (number of items in this data report)
1. V
1

.
.
m. V
m

.
.
p. L,2
1. RPTID
p

2. L,m
1. V
1

.
.
m. V
m

.
.
n. L,p                      (p is the number of reports for each trace sample)
1. L,2
1. RPTID
1

2. L,m           (number of items in this data report)
1. V
1

.
.
m. V
m

.
.
p. L,2
1. RPTID
p

2. L,m
1. V
1

.
.
m. V
m

Exception
The lists of variables associated with a unique RPTID are also unique.  This structure illustrates the form of the message, so in
general, V
1
for RPTID
a
and V
1
for RPTID
b
do not reference the same variable.



SEMI E5-1104 © SEMI 1982, 2004 130
Stream,Function  Name (Mnemonic) Direction
S6,F28  Trace Report Send Acknowledge S,H->E
Description
The host Acknowledges receipt of the Trace Report.
Structure
TRID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S6,F29  Trace Report Request (TRR) S,H->E
Description
Request that the data reports assigned to the trace report be sampled and returned to the host.
Structure
TRID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S6,F30  Trace Report Data (TRD) M,H<-E
Description
Message containing the requested data reports associated with the TRID of trace data report definition.
Structure
L,3
1. TRID
2. L,n                          (n = number data reports defined for this TRID)
1. L,2
1. RPTID
1

2. L,m                (m = number of items in this RPTID)
1. V
1

.
.
m. V
m

.
.
n. L,2
1. RPTID
n

2. L,m                (m = number of items in this RPTID)
1. V
1

.
.
m. V
m

3. ERRCODE
Exception
If TRID is unknown, a zero-length list (n = 0) shall be sent.  Item 3 (ERRCODE) shall be set to zero length when there is no
error.

10. 11  Stream  7  Process  Program  Management  —  The  functions  in  this  stream  are  used  to  manage  and  transfer
process  programs.    Process  programs  are  the  equipment-specific  descriptions  that  determine  the  procedure  to  be
conducted  on  the  material  by  a  single  piece  of  equipment.    Methods  are  provided  to  transfer  programs  as  well  as
establish the link between the process program and the material to be processed with that program.


SEMI E5-1104 © SEMI 1982, 2004 131

Stream,Function  Name (Mnemonic) Direction
S7,F0  Abort Transaction (S7F0) S,H<->E
Description
Same form as S1,F0
Structure

Exception


Stream,Function  Name (Mnemonic) Direction
S7,F1  Process Program Load Inquire (PPI) S,H<->E,reply
Description
This message is used to initiate the transfer of a process program or to select from stored programs.  The message may be used to
initiate the transfer of an unformatted process program (S7,F3/S7,F4) or a formatted process program
(S7,F23/S7,F24),(S7,F31/S7,F32).
Structure
L,2
1. PPID
2. LENGTH
Exception
None

Stream,Function  Name (Mnemonic) Direction
S7,F2  Process Program Load Grant (PPG) S,H<->E
Description
This message gives permission for the process program to be loaded.
Structure
PPGNT
Exception
None

Stream,Function  Name (Mnemonic) Direction
S7,F3  Process Program Send (PPS) M,H<->E,reply
Description
The program is sent.  If S7,F3 is multi-block, it must be preceded by the S7,F1/S7,F2 Inquire/Grant transaction.
Structure
L,2
1. PPID
2. PPBODY
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 132
Stream,Function  Name (Mnemonic) Direction
S7,F4  Process Program Acknowledge (PPA) S,H<->E
Description
Acknowledge or error
Structure
ACKC7
Exception
None

Stream,Function  Name (Mnemonic) Direction
S7,F5  Process Program Request (PPR) S,H<->E,reply
Description
This message is used to request the transfer of a process program.
Structure
PPID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S7,F6  Process Program Data (PPD) M,H<->E
Description
This message is used to transfer a process program.
Structure
L,2
1. PPID
2. PPBODY
Exception
A zero-length list means request denied.

NOTE 7:  The  equipment-to-host  transfer  of  the  process  program,  denoted  by  the  R  bit  in  the  header  (R  =  1),  provides  the
mechanism  for  the  host  computer  to  receive  process  programs  created  on  the  equipment.    This  allows  use  of  the  equipment
without having process program generation capabilities on the host.

Stream,Function  Name (Mnemonic) Direction
S7,F7  Process Program ID Request (PIR) S,H<-E,reply
Description
This message is used to request the PPID for use on the material identified.
Structure
MID
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 133
Stream,Function  Name (Mnemonic) Direction
S7,F8  Process Program ID Data (PID) S,H->E
Description
This message is used to transmit a single matrix entry in response to S7,F7.
Structure
L,2
1. PPID
2. MID
Exception
A zero-length list returned means no such MID or other error.

Stream,Function  Name (Mnemonic) Direction
S7,F9  M/P M Request (MMR) S,H<->E,reply
Description
This message is used to request the transmission of the material/process matrix.  If the message is from the host, the response
will be the current matrix in the equipment.  If the message is from the equipment, the response will be a new matrix to initialize
the equipment.
Structure
Header only
Exception
None

NOTE 8:  M/PM  defines  the  Material/Process  Matrix.    The  Material/Process  Matrix  is  a  table  which  links  the  material  to  the
process program to be used in processing the material.



SEMI E5-1104 © SEMI 1982, 2004 134
Stream,Function  Name (Mnemonic) Direction
S7,F10  M/P M Data (MMD) M,H<->E
Description
In the response to S7,F9, the equipment will transmit the current matrix it contains.  The matrix will be the sum of all matrix
updates transmitted since initialization less the completed material whose linkages have been deleted.  Programs with no pending
material will be deleted from the matrix but not from the equipment program directory.
Structure
L,n                                   number       of       process       programs
1. L,2
1. PPID
1

2. L,a                   (number of MID for this PPID)
1. MID
1

.
.
a. MID
a

2. L,2
.
.
n. L,2
1. PPID
n

2. L,b
1. MID
1

.
.
b. MID
b


Function 10     Example 2 process programs (1 and 3 MID, respectively)
L,2
L,2
1. PPID
1

2. L,1
1. MID
a

L,2
1. PPID
2

2. L,3
1. MID
b

2. MID
c

3. MID
d

Exception
a = 0 indicates that this PPID will be used for all material processed.  The last default transmitted will be the one used; all other
entries will be deleted from the active matrix.  A zero-length list returned means no such matrix.



SEMI E5-1104 © SEMI 1982, 2004 135
Stream,Function  Name (Mnemonic) Direction
S7,F11  M/P M Update Send (UMS) S,H->E,[reply]
Description
This message is used by the host to add to the M/PM in the equipment.
Structure
L,n                                   (number       of       process       programs)
1. L,2
1. PPID
1

2. L,a                    (number of MID's using PPID1)
1. MID
1

.
.
a. MID
a

2. L,2
.
.
n. L,2
1. PPID
n

2. L,b
1. MID
1

.
.
b. MID
b

Exception
If a = 0, then the preceding PPID is to be used for all material processed.  All other entries will be deleted from the active matrix.

Stream,Function  Name (Mnemonic) Direction
S7,F12  M/P M Update Acknowledge (UMA) S,H<-E
Description
Acknowledge or error
Structure
ACKC7
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 136
Stream,Function  Name (Mnemonic) Direction
S7,F13  Delete M/P M Entry Send (DES) S,H->E,[reply]
Description
This message is used to delete program to material linkages in the M/PM of the equipment.
Structure
L,n                                   (number       of       process       programs)
1. L,2
1. PPID
1

L,a                        (number of MID's using PPID)
1. MID
1

.
.
a. MID
a

2. L,2
.
.
n. L,2
1. PPID
n

2. L,b
1. MID
1

.
.
b. MID
b

Exception
A delete consisting of a zero-length means delete all entries and generate a S7,F9 request to initialize matrix.

Stream,Function  Name (Mnemonic) Direction
S7,F14  Delete M/P M Entry Acknowledge (DEA) S,H<-E
Description
Acknowledge or error
Structure
ACKC7
Exception
None

Stream,Function  Name (Mnemonic) Direction
S7,F15  Matrix Mode Select Send (MMS) S,H->E,reply
Description
This message is used by the host to change the method of process program selection in the equipment which might not support
all modes.
Structure
MMODE
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 137
Stream,Function  Name (Mnemonic) Direction
S7,F16  Matrix Mode Select Acknowledge (MMA) S,H<-E
Description
Acknowledge or error
Structure
ACKC7
Exception
None

NOTE 9:  The  matrix  structure  allows  the  program  linkages  to  be  established  for  each  MID  or  the  multi-MID  production  plans
for an extended period of time.  The host system makes the choice of operating mode.  By continuous updates to the equipment
matrix, automatic system backup is achieved.

Stream,Function  Name (Mnemonic) Direction
S7,F17  Delete Process Program Send (DPS) S,H->E,reply
Description
This message is used by the host to request the equipment to delete process programs from equipment storage.
Structure
L,n                                (Number of process programs to be deleted)
1. PPID
1

.
.
n. PPID
n

Exception
If n = 0, then delete all.

Stream,Function  Name (Mnemonic) Direction
S7,F18  Delete Process Program Acknowledge (DPA) S,H<-E
Description
Acknowledge or error
Structure
ACKC7
Exception
None

Stream,Function  Name (Mnemonic) Direction
S7,F19  Current EPPD Request (RER) S,H->E,reply
Description
This message is used to request the transmission of the current equipment process program directory (EPPD).  This is a list of all
the PPIDs of the process programs stored in the equipment.
Structure
Header only
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 138
Stream,Function  Name (Mnemonic) Direction
S7,F20  Current EPPD Data (RED) M,H<-E
Description
This message is used to transmit the current EPPD.
Structure
L,n                                (number of process programs in the directory)
1. PPID
1

.
.
n. PPID
n

Exception
None

Stream,Function  Name (Mnemonic) Direction
S7,F21  Equipment Process Capabilities Request (PCR) S,H->E,reply
Description
This message is used to request the Equipment Process Capabilities Data (PCD).
Structure
Header only
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 139
Stream,Function  Name (Mnemonic) Direction
S7,F22  Equipment Process Capabilities Data (PCD) M,H<-E
Description
This equipment message provides the information necessary for the host to create and partially verify the contents of a new
process program or display the object of a process program previously generated by a host or equipment.  The PCD defines the
process program content acceptable to the originating equipment.
Structure
L,5
1. MDLN
2. SOFTREV
3. CMDMAX
4. BYTMAX
5. L,c                          (c = Number of Possible Commands)
1. L,11
1. CCODE
2. CNAME
3. RQCMD
4. BLKDEF
5. BCDS
6. IBCDS
7. NBCDS
8. ACDS
9. IACDS
10. NACDS
11. L,p               (p = Number of Parameters)
1.              (parameter specification) (see below)
.
.
p.              (parameter specification)
2. L,11
.
.
c. L,11

Parameter specifications depend on the data type of each parameter.  The structure of each of the possible three groups is as
follows:

Numeric Data                 String Data                  Boolean Data
L,9                          L,5                          L,4
1. PNAME                   1. PNAME                   1. PNAME
2. RQPAR                   2. RQPAR                   2. RQPAR
3. PDFLT                   3. PDFLT                   3. PDFLT
4. PMAX                    4. PMAX                    4. PMAX
5. LLIM                    5. L,s
6. ULIM                         1. STEMP
1



7. UNITS                        .
8. RESC                         .
9. RESV                         s. STEMP
s



Exception
None



SEMI E5-1104 © SEMI 1982, 2004 140
Stream,Function  Name (Mnemonic) Direction
S7,F23  Formatted Process Program Send (FPS) M,H<->E,reply
Description
This message allows movement of formatted process programs between a piece of equipment and its host system.  The values of
MDLN and SOFTREV are obtained from the PCD used to generate the process program.  If S7,F23 is multi-block, it must be
preceded by the S7F1/F2 Inquire/Grant transaction.
Structure
L,4
1. PPID
2. MDLN
3. SOFTREV
4. L,c                          (c = Number of Process Commands)
1. L,2
1. CCODE
2. L,p                (p = Number of Parameters)
1. PPARM
1

.
.
p. PPARMp
2. L,2
.
.
c. L,2
Exception
None

Stream,Function  Name (Mnemonic) Direction
S7,F24  Formatted Process Program Acknowledge (FPA) S,H<->E
Description
Acknowledges reception of a formatted process program at its destination and whether the process program was accepted by the
interpreter.  A returned status of “accepted” by the interpreter means only that the message is understood.  The validity of the
contents of the process program is determined through a separate transaction (S7,F27/S7,F28).
Structure
ACKC7
Exception
None

Stream,Function  Name (Mnemonic) Direction
S7,F25  Formatted Process Program Request (FPR) S,H<->E,reply
Description
This message is used by either equipment or host to request a particular process program from the other.
Structure
PPID
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 141
Stream,Function  Name (Mnemonic) Direction
S7,F26  Formatted Process Program Data (FPD) M,H<->E
Description
This message transfers a process program in response to a request for the PPID.  The values of MDLN and SOFTREV are
obtained from the PCD used to generate the process program.
Structure
L,4
1. PPID
2. MDLN
3. SOFTREV
4. L,c                          (c = Number of Process Commands)
1. L,2
1. CCODE
2. L,p                (p = Number of Parameters)
1. PPARM
1

.
.
p. PPARM
p

2. L,2
.
.
c. L,2
Exception
A zero length list indicates the request was denied.

Stream,Function  Name (Mnemonic) Direction
S7,F27  Process Program Verification Send (PVS) S,H<-E,reply
Description
This message indicates to the host that a process program has been received and checked by the equipment.  The result of the
check is specified by the list of errors.  An empty error list (list of zero-length) or a one-element list with ACKC7A having a
value of zero (0) indicates no errors were found in the process program.  The equipment may report as many errors as it seems
appropriate.  The equipment is responsible for sending a single copy of this message to the host after any reception of a
formatted process program (S7,F23; S7,F26; S7,F31) or a large process program that was transferred via Stream 13 Data set
Transfer Protocol (S7,F37; S7,F39; S7,F41; S7,F43).  The verification of large unformatted process programs checks that the
received process program is intact and was not corrupted by the Stream 13 transfer (e.g. by trying to load it).If S7,F27 is multi-
block, it must be preceded by the S7,F29/S7,F30 Inquire/Grant Transaction.
Structure
L,2
1. PPID
2. L,n                          (n = number of errors being reported)
1. L,3
1. ACKC7A
2. SEQNUM
3. ERRW7
2. L,3
.
.
n. L,3
Exception




SEMI E5-1104 © SEMI 1982, 2004 142
Stream,Function  Name (Mnemonic) Direction
S7,F28  Process Program Verification Acknowledge (PVA) S,H->E
Description
Reply by host to equipment acknowledging reception of Process Program Verification Send (PVS).
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S7,F29  Process Program Verification Inquire (PVI) S,H<-E,reply
Description
This message allows a piece of equipment to ask a host for permission to send a multi-block PVS.
Structure
LENGTH
Exception
None

Stream,Function  Name (Mnemonic) Direction
S7,F30  Process Program Verification Grant (PVG) S,H->E
Description
Reply by host to equipment providing response to Process Program Verification Inquire (PVI).
Structure
PPGNT
Exception
None
