---
title: "E5-1104 - © SEMI 1982, 2004..."
description: "SEMI标准文档"
sidebar_label: "E5-1104 - © SEMI 1982, 2004..."
sidebar_position: 260
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-026.pdf'
  chapter: 26
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/026.pdf"
  pdfSize="0.23MB"
  title="E5-1104 - © SEMI 1982, 2004..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI E5-1104 © SEMI 1982, 2004 193
Stream,Function  Name (Mnemonic) Direction
S14,F20  Generic Service Acknowledge (GSA) M,H<-E
Description
The equipment acknowledges requested service or reports any error(s).  If the service is accepted and completed at once, (i.e.
SVCACK = 0) then, the required parameters for the response are listed within this message.  If the service is accepted but the
performance of the service takes a relatively longer time due to some physical reason, (i.e. SVCACK = 4) then, the service
response will be sent with the required parameters when the service is completed (see S14,F21/F22).  The determination as to
whether a delayed response is acceptable is dependent upon the implementation.  LINKID is set to a non-zero value if and only i
f
additional completion reports will be sent.  The data items are mapped to the service response parameter list of the applied object
service.  Parameters that apply to the list are described in the standard that defines the application of the service.
Structure
L,4
1. SVCACK
2. LINKID
3. L,n                          # of parameter groups
1. L,2
1. SPNAME
1
          service parameter 1 name
2. SPVAL
1
           service parameter 1 value
2. L,2
1. SPNAME
2
          service parameter 2 name
2. SPVAL
2
           service parameter 2 value
.
.
n. L,2
1. SPNAME
n
          service parameter n name
2. SPVAL
n
           service parameter n value
4. L,2
1. SVCACK
2. L,p                      p = number of errors reported
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
If p = 0, no errors were detected.  If n = 0 parameters are returned.  SVCACK is specified twice in the above structure for
backward compatibility with the previous structure of this message, and for consistency with other stream 14 reply messages.
The values of both SVCACK data items in this structure must be equal.  The above message structure (L,4) is the preferred
structure for this message and must be used for new implementations.  The following message structure (L,3) is included for
compatibility with previous implementations and must not be used for new implementations.
Structure:
L,3
1. SVCACK
2. LINKID
3. L,n                          # of parameter groups
1. L,2
1. SPNAME
1
          service parameter 1 name
2. SPVAL
1
           service parameter 1 value
2. L,2
1. SPNAME
2
          service parameter 2 name
2. SPVAL
2
           service parameter 2 value
.
.
n. L,2
1. SPNAME
n
          service parameter n name
2. SPVAL
n
           service parameter n value



SEMI E5-1104 © SEMI 1982, 2004 194
Stream,Function  Name (Mnemonic) Direction
S14,F21  Generic Service Completion Information (GSCI) M,H<-E,reply
Description
The equipment notifies the original service requestor when requested service on an object is completed, either successfully or
unsuccessfully.  The equipment may send required information using reply parameters.  If the service was accepted and
completed at once, the information was carried with the acknowledge message, that is secondary message of requesting one, and
this message is not provided.
OPID contains the value of OPID in the initial request, i.e. S14F19.  LINKID is set to a non-zero value if and only if additional
completion reports with the same OPID will be sent.  If multi-block, it shall be preceded by the S14F23/F24 Multi-Block
Inquire/Grant transaction.
Structure
L,5
1. DATAID
2. OPID
3. LINKID
4. L,n                          n = of parameter groups
1. L,2
1. SPNAME
1
          Service parameter 1 name
2. SPVAL
1
           Service parameter 1 value
2. L,2
1. SPNAME
2
          Service parameter 2 name
2. SPVAL
2
           Service parameter 2 value
.
.
n. L,2
1. SPNAME
n
          Service parameter n name
2. SPVAL
n
           Service parameter n value
5. L,2
1. SVCACK
2. L,p                      p = number of errors reported
1. L,2
1. ERRCODE
p

2. ERRTEXT
p

Exception
If p = 0, no errors were detected.  If n = 0 no parameters are returned.

Stream,Function  Name (Mnemonic) Direction
S14,F22  Generic Service Completion Acknowledge (GSCA) S,H->E
Description
The acknowledgement of generic Object Service Completion Information, i.e. S14F21.
Structure
DATAACK
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 195
Stream,Function  Name (Mnemonic) Direction
S14,F23  Multi-block Generic Service Data Inquire (GSDI) S,H<->E,reply
Description
If any of Object Service messages are larger than one block, then this transaction must precede that message.
Structure
L,2
1. DATAID
2. DATALENGTH
Exception
None

Stream,Function  Name (Mnemonic) Direction
S14,F24  Multi-block Generic Service Data Grant (GSDG) S,H<->E
Description
Message to indicate if permission is granted to transmit a multi-block Object Service message.
Structure
GRANT
Exception
None

Stream,Function  Name (Mnemonic) Direction
S14,F25  Get Service Name Request (GSNR) S,H->E
Description
This message is used to request to list  the services of specified types of owned objects.  This is an operation performed on an
object type rather than on object instances.  Wild characters “?” and “*” may be used as a filter for object types.  Equipment is
not required to support wild characters.
Structure
L,2
1. OBJSPEC
2. L,n                          n = # of object types
1. OBJTYP
1

.
.
n. OBJTYP
n

Exception
If OBJSPEC is a zero-length item, no object specifier is provided.



SEMI E5-1104 © SEMI 1982, 2004 196
Stream,Function  Name (Mnemonic) Direction
S14,F26  Get Service Name Data (GSND) S,H<-E
Description
This message contains a list of the services of the requested objects.
Structure
L,2
1. L,n                          n = number of object types
1. L,2
1. OBJTYP
1

2. L,a                a = number of attributes
1. SVCNAME
1

.
.
a. SVCNAME
a

.
.
n. L,2
1. OBJTYP
n

2. L,b                b = number of attributes
1. SVCNAME
1

.
.
b. SVCNAME
b

2. L,2
1. L,2
1. OBJACK
2. L,p                p = number of errors reported
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
If p = 0, no errors were detected.

Stream,Function  Name (Mnemonic) Direction
S14,F27  Get Service Parameter Name Request (GPNR) S,H->E
Description
This message is used to request to list the parameters of specified services of owned object.  This is an operation performed on an
object type rather than on object instances.
Structure
L,3
1. OBJSPEC
2. OBJTYP
3. L,n                          n = # of interesting services
1. SVCNAME
1

.
.
n. SVCNAME
n

Exception
If OBJSPEC is a zero-length item, no object specifier is provided.



SEMI E5-1104 © SEMI 1982, 2004 197
Stream,Function  Name (Mnemonic) Direction
S14,F28  Get Service Parameter Name Data (GPND) S,H<-E
Description
This message contains a list of the service parameters of the requested services for the specified object.
Structure
L,2
1. L,n                          n = number of services of interest
1. L,2
1. SVCNAME
1

2. L,a                a = number of parameter names
1. SPNAME
1

.
.
a. SPNAME
a

.
.
n. L,2
1. SVCNAME
n

2. L,b                b = number of parameter names
1. SPNAME
1

.
.
b. SPNAME
b

2. L,2
1. OBJACK
2. L,p                      p = number of errors reported
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
If p = 0, no errors were detected.

10. 19  Stream  15  Recipe  Management ⎯  The  functions  in  this  stream  are  used  requesting  information  and
operations concerning recipes, recipe namespaces, and recipe executors.  A recipe is an object that is transferred in
sections,  where  a  section  consists  of  either  recipe  attributes,  agent-specific  dataset  attributes,  or  the  body  of  the
recipe.    An  attribute  is  information  concerning  the  recipe  body,  the  recipe  as  a  whole,  or  the  application  of  the
recipe.  An attribute consists of an attribute name/attribute value pair.

Stream,Function  Name (Mnemonic) Direction
S15,F0  Abort Transaction (S15F0) S,H<->E
Description
Same form as S1,F0.
Structure

Exception




SEMI E5-1104 © SEMI 1982, 2004 198
Stream,Function  Name (Mnemonic) Direction
S15,F1  Recipe Management Multi-block Inquire S,H<->E,reply
Description
This message requests permission to send a multi-block message based upon a maximum length of the total message.
Structure
L,3
1. DATAID
2. RCPSPEC
3. RMDATASIZE
Exception
If RCPSPEC is zero-length, the multi-block message for which permission to send is requested does not contain a recipe.

Stream,Function  Name (Mnemonic) Direction
S15,F2  Recipe Management Multi-block Grant S,H<->E
Description
This message grants or denies permission to send a multi-block message.
Structure
RMGRNT
Exception
None

Stream,Function  Name (Mnemonic) Direction
S15,F3  Recipe Namespace Action Request S,H<->E,reply
Description
This message requests that a recipe namespace be created or deleted.
Structure
L,2
1. RMNSSPEC
2. RMNSCMD
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 199
Stream,Function  Name (Mnemonic) Direction
S15,F4  Recipe Namespace Action Acknowledge M,H<->E
Description
This message is used to confirm whether the requested action was completed successfully or to provide error information
otherwise.
Structure
L,2
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
p = 0 if and only if RMACK indicates no errors.

Stream,Function  Name (Mnemonic) Direction
S15,F5  Recipe Namespace Rename Request S,H<->E,reply
Description
A request is made for a recipe namespace to be renamed.
Structure
L,2
1. RMNSSPEC
2. RMNEWNS
Exception
None

Stream,Function  Name (Mnemonic) Direction
S15,F6  Recipe Namespace Rename Acknowledge M,H<->E
Description
This message is used to acknowledge or deny a request to rename a recipe namespace.
Structure
L,2
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
p = 0 if and only if RMACK indicates no errors.



SEMI E5-1104 © SEMI 1982, 2004 200
Stream,Function  Name (Mnemonic) Direction
S15,F7  Recipe Space Request S,H<->E,reply
Description
This message requests the amount of recipe storage available in the storage of a recipe namespace or recipe executor, as
indicated by its object specifier OBJSPEC.
Structure
OBJSPEC
Exception
None

Stream,Function  Name (Mnemonic) Direction
S15,F8  Recipe Space Data M,H<->E
Description
This message contains the amount of storage available for recipes.
Structure
L,2
1. RMSPACE
2. L,2
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
p = 0 if and only if RMACK indicates no errors.

Stream,Function  Name (Mnemonic) Direction
S15,F9  Recipe Status Request S,H<->E,reply
Description
This message is used to request the status of a recipe and the next available numeric version for that recipe class and name.
Structure
RCPSPEC
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 201
Stream,Function  Name (Mnemonic) Direction
S15,F10  Recipe Status Data M,H<->E
Description
This message contains the protected status of the recipe and the next available version number for that recipe class and name.
Structure
L,3
1. RCPSTAT
2. RCPVERS
3. L,2
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
RCPVERS is a zero-length item if and only if the recipe does not exist.  p = 0 if and only if RMACK indicates no errors.

Stream,Function  Name (Mnemonic) Direction
S15,F11  Recipe Version Request S,H<->E,reply
Description
This message is used to request the best version of a recipe for the specified agent.
Structure
L,4
1. RMNSSPEC
2. RCPCLASS
3. RCPNAME
4. AGENT
Exception
If item 2 is zero length, the recipe class PROCESS is indicated.  If item 4 is a zero-length item, no agent is specified.



SEMI E5-1104 © SEMI 1982, 2004 202
Stream,Function  Name (Mnemonic) Direction
S15,F12  Recipe Version Data M,H<->E
Description
This message contains the recommended version.
Structure
L,3
1. AGENT
2. RCPVERS
3. L,2
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
If AGENT is a zero-length item in the request, it shall also be a zero-length item in the reply.  If it is not zero-length in the
request, and it is of zero-length in the reply, then no qualifying recipe was found specific to that equipment.  p = 0 if and only if
RMACK indicates no errors.

Stream,Function  Name (Mnemonic) Direction
S15,F13  Recipe Create Request M,H<->E,reply
Description
This message is used to create or modify a recipe body.  If multi-block, it shall be preceded by the S15,F1/F2 inquire/grant
transaction.
Structure
L,5
1. DATAID
2. RCPUPDT
3. RCPSPEC
4. L,m
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

5. RCPBODY
Exception
RCPBODY may be of zero length.



SEMI E5-1104 © SEMI 1982, 2004 203
Stream,Function  Name (Mnemonic) Direction
S15,F14  Recipe Create Acknowledge M,H<->E
Description
This message is used to acknowledge that a recipe has been created or updated with the body sent in the request.
Structure
L,2
1. RMACK
2. L,2
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
p = 0 if and only if RMACK indicates no errors.



SEMI E5-1104 © SEMI 1982, 2004 204
Stream,Function  Name (Mnemonic) Direction
S15,F15  Recipe Store Request M,H<->E,reply
Description
This message is used to send a recipe, or one or more recipe sections, to a recipe namespace.  If multi-block, it shall be preceded
by the S15,F1/F2 inquire/grant transaction.
Structure
L,4
1. DATAID
2. RCPSPEC
3. RCPSECCODE
4. L,q                          (q = 1,2,3)
1. L,r                      (r = 0 or 2)
1. RCPSECNM
2. L,g                (g = # generic attributes)
1. L,2
1. RCPATTRID
1

2. RCPATTRDATA
1

.
.
g. L,2
1. RCPATTRID
g

2. RCPATTRDATA
g

2. RCPBODY
3. L,m                      (m = # agent-specific datasets)
1. L,2
1. RCPSECNM
1

2. L,a
1. L,2
1. RCPATTRID
11

2. RCPATTRDATA
11

.
.
a. L,2
1. RCPATTRID
1a

2. RCPATTRDATA
1a

.
.
m. L,2
1. RCPSECNM
m

2. L,b
1. L,2
1. RCPATTRID
m1

2. RCPATTRDATA
m1

.
.
b. L,2
1. RCPATTRID
mb

2. RCPATTRDATA
mb

Exception
RCPBODY is a zero-length item when the body is omitted.  If g = 0, no generic attributes are transferred and RCPBODY shall
be a zero-length item.  If m = 0, no agent-specific datasets are transferred.



SEMI E5-1104 © SEMI 1982, 2004 205
Stream,Function  Name (Mnemonic) Direction
S15,F16  Recipe Store Acknowledge M,H<->E
Description
This message is used to acknowledge that the specified recipe has been stored as requested or to indicate the error(s).
Structure
L,2
1. RECPSECCODE
2. L,2
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
p = 0 if and only if RMACK indicates no errors.

Stream,Function  Name (Mnemonic) Direction
S15,F17  Recipe Retrieve Request S,H<->E,reply
Description
This message is used to get a recipe, or one or more recipe sections, from a recipe namespace.
Structure
L,2
1. RCPSPEC
2. RCPSECCODE
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 206
Stream,Function  Name (Mnemonic) Direction
S15,F18  Recipe Retrieve Data M,H<->E
Description
This message is used to acknowledge that the specified recipe, or recipe sections, have been set as requested, or to indicate the
error(s).
Structure
L,2
1. L,q                          (q = 1,2,3)
1. L,r                      (r = 0 or 2)
1. RCPSECNM
2. L,g                (g = # generic attributes)
1. L,2
1. RCPATTRID
1

2. RCPATTRDATA
1

.
.
g. L,2
1. RCPATTRID
g

2. RCPATTRDATA
g

2. RCPBODY
3. L,m                      (m = # agent-specific datasets)
1. L,2
1. RCPSECNM
1

2. L,a
1. L,2
1. RCPATTRID
11

2. RCPATTRDATA
11

.
.
a. L,2
1. RCPATTRID
1a

2. RCPATTRDATA
1a

.
.
m. L,2
1. RCPSECNM
m

2. L,b
1. L,2
1. RCPATTRID
m1

2. RCPATTRDATA
m1

.
.
b. L,2
1. RCPATTRID
mb

2. RCPATTRDATA
mb

2. L,2
1. RMACK
2. L,p
1. L,2
1. ERROCODE
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
If r = 0, no generic attributes are transferred and RCPBODY shall be a zero-length item.  If m = 0, no agent-specific datasets are
transferred.  p = 0 if and only if RMACK indicates no errors.



SEMI E5-1104 © SEMI 1982, 2004 207
Stream,Function  Name (Mnemonic) Direction
S15,F19  Recipe Rename Request S,H<->E,reply
Description
This message is used to request that a recipe be copied to, or renamed to, a recipe with a new identifier.
Structure
L,3
1. RCPSPEC
2. RCPRENAME
3. RCPNEWID
Exception
None

Stream,Function  Name (Mnemonic) Direction
S15,F20  Recipe Rename Acknowledge M,H<->E
Description
This message acknowledges the request to copy or rename a recipe and indicates whether the action was successfully performed
or errors that occurred.
Structure
L,2
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
p = 0 if and only if RMACK indicates no errors.

Stream,Function  Name (Mnemonic) Direction
S15,F21  Recipe Action Request M,H<->E,reply
Description
This message is used to acknowledge the request to perform an action in one or more recipes within a namespace.
Structure
L,6
1. DATAID
2. RCPCMD
3. RMNSSPEC
4. OPID
5. AGENT
6. L,n
1. RCPID
1

.
.
n. RCPID
n

Exception
AGENT may be a zero-length item except for requests for certify, de-certify, download, and upload.



SEMI E5-1104 © SEMI 1982, 2004 208
Stream,Function  Name (Mnemonic) Direction
S15,F22  Recipe Action Acknowledge M,H<->E
Description
This message is used to acknowledge the request to originate a new recipe.
Structure
L,4
1. AGENT
2. LINKID
3. RCPCMD
4. L,2
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
LINKID is zero if and only if all requested actions have been completed.  p = 0 if and only if RMACK indicates no errors.

Stream,Function  Name (Mnemonic) Direction
S15,F23  Recipe Descriptor Request M,H<->E,reply
Description
This message is used to request the descriptors of a list of the specified recipes.  If multi-block, it must be preceded by the
S15,F1/F2 inquire/grant transaction.  OBJSPEC is the object specifier of either a recipe namespace of a recipe executor.
Structure
L,3
1. DATAID
2. OBJSPEC
3. L,n
1. RCPID
1

.
.
n. RCPID
n

Exception
None



SEMI E5-1104 © SEMI 1982, 2004 209
Stream,Function  Name (Mnemonic) Direction
S15,F24  Recipe Descriptor Data M,H<->E
Description
This message returns the requested descriptors in the same order as requested.
Structure
L,2
1. L,n                          (n = number of recipes from request)
1. L,a                      (descriptors       for       recipe       #1)
1. L,r                (r = 0 or 3) (1st component descriptor)
1. RCPDESCNM
11

2. RCPDESCTIME
11

3. RCPDESCLTH
11

.
.
a. L,r                (r = 0 or 3)
1. RCPDESCNM
1a

2. RCPDESCTIME
1a

3. RCPDESCLTH
1a

.
.
n. L,b                      (descriptors       for       recipe       #n)
1. L,r                (r = 0 or 3) (1st component descriptor)
1. RCPDESCNM
n1

2. RCPDESCTIME
n1

3. RCPDESCLTH
n1

.
.
b. L,r                (r = 0 or 3)
1. RCPDESCNM
nb

2. RCPDESCTIME
nb

3. RCPDESCLTH
nb

2. L,2
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
A zero-length recipe descriptor (r = 0) means that the specified recipe does not exist (could not be located).  p = 0 if and only if
RMACK indicates no errors.



SEMI E5-1104 © SEMI 1982, 2004 210
Stream,Function  Name (Mnemonic) Direction
S15,F25  Recipe Parameter Update Request M,H<->E,reply
Description
This message is used to update the variable parameter definitions for a specific agent.  If multi-block, it must be preceded by the
S15,F1/F2 inquire/grant transaction.
Structure
L,4
1. DATAID
2. RMNSSPEC
3. AGENT
4. L,n
1. L,3
1. RCPPARNM
1

2. RCPPARVAL
1

3. RCPPARRULE
1

.
.
n. L,3
1. RCPPARNM
n

2. RCPPARVAL
n

3. RCPPARRULE
n

Exception
None

Stream,Function  Name (Mnemonic) Direction
S15,F26  Recipe Parameter Update Acknowledge M, H<->E
Description
This message indicates the successful performance of the request or otherwise indicates the nature of error(s) that occurred.
Structure
L,2
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
p = 0 if and only if RMACK indicates no errors.



SEMI E5-1104 © SEMI 1982, 2004 211
Stream,Function  Name (Mnemonic) Direction
S15,F27  Recipe Download Request M,H->E,reply
Description
This message is used to send a recipe to a recipe executor.  If multi-block, it shall be preceded by the S15,F1/S15,F2
inquire/grant transaction.
Structure
L,5
1. DATAID
2. RCPOWCODE
3. RCPSPEC
4. L,m
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

5. RCPBODY
Exception
None

Stream,Function  Name (Mnemonic) Direction
S15,F28  Recipe Download Acknowledge M,H<-E
Description
This message is used to acknowledge that a recipe has been received by the recipe executor.  If the recipe was successfully
verified, the results are returned to the sender.  RCPID contains the identifier of a derived object form recipe if created during
verification.
Structure
L,3
1. RCPID
2. L,n                          (n = # of attributes)
1. L,2
1. RCPATTRID
1

2. RCPATTRDATA
1

.
.
n. L,2
1. RCPATTRID
n

2. RCPATTRDATA
n

3. L,2
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
If item is a zero length item, no derived object form recipe was originated.  n = 0 if and only if the recipe was not verified or
failed verification.  p = 0 if and only if RMACK indicates no errors.



SEMI E5-1104 © SEMI 1982, 2004 212
Stream,Function  Name (Mnemonic) Direction
S15,F29  Recipe Verify Request M,H->E,reply
Description
This message is used to request verification of one or more recipes by a recipe executor.  If multi-block, it shall be preceded by
the S15F1,F2 inquire/grant transaction.  The operation identifier OPID, used where multiple verification requests may be
outstanding, may be zero if no further verifications will be requested before all current verification requests are completed by the
recipe executor.  Otherwise, OPID is generated to be unique for the requestor.  RESPEC is the object specifier for the recipe
executor.
Structure
L,4
1. DATAID
2. OPID
3. RESPEC
4. L,m
1. RCPID
1

.
.
m. RCPID
m

Exception
If RESPEC is a zero length item, the target is the recipient of the message.



SEMI E5-1104 © SEMI 1982, 2004 213
Stream,Function  Name (Mnemonic) Direction
S15,F30  Recipe Verify Acknowledge M,H<-E
Description
This message is used to acknowledge the request to verify one or more recipes.  If a single recipe verification was requested and
the recipe was successfully verified, the results are returned to the sender in this message, and RCPID contains the identifier of a
derived object form recipe if created during verification.  If multiple recipe verifications were requested, then LINKID shall be
non-zero.
Structure
L,5
1. OPID
2. LINKID
3. RCPID
4. L,n                          (n = # attributes)
1. L,2
1. RCPATTRID
1

2. RCPATTRDATA
1

.
.
n. L,2
1. RCPATTRID
n

2. RCPATTRDATA
n

5. L,2
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
LINKID is zero if and only if a single recipe verification was requested and has been completed.  If item 3 is zero length item, no
derived object form recipe was originated.  n = 0 if and only if the recipe was not verified or failed verification.  p = 0 if and only
if RMACK indicates no errors.

Stream,Function  Name (Mnemonic) Direction
S15,F31  Recipe Upload Request S,H->E,reply
Description
This message is used to request an execution recipe from a recipe executor.
Structure
RCPSPEC
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 214
Stream,Function  Name (Mnemonic) Direction
S15,F32  Recipe Upload Data M,H<-E
Description
This message is used to send an execution recipe from a recipe executor.
Structure
L,4
1. RCPSPEC
2. L,m                          (m = # attributes)
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

3. RCPBODY
4. L,2
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
p = 0 if and only if RMACK indicates no errors.



SEMI E5-1104 © SEMI 1982, 2004 215
Stream,Function  Name (Mnemonic) Direction
S15,F33  Recipe Select Request M,H->E,reply
Description
This message is used to request the selection of one or more execution recipes.  If multi-block, it shall be preceded by the
S15,F1/S15,F2 inquire/grant transaction.
Structure
L,3
1. DATAID
2. RESPEC
3. L,r                          (r = # selections)
1. L,2
1. RCPID
1
           (1st recipe selection)
2. L,p                (p = # parameter settings for 1st recipe)
1. L,2
1. RCPPARNM
11

2. RCPPARVAL
11

.
.
p. L,2
1. RCPPARNM
1p

2. RCPPARVAL
1p

.
.
r. L,2
1. RCPID
r
           (rth recipe selection)
2. L,s                (s = # parameter settings for rth recipe)
1. L,2
1. RCPPARNM
r1

2. RCPPARVAL
r1

.
.
s. L,2
1. RCPPARNM
rs

2. RCPPARVAL
rs

Exception
If the list of parameter settings for a recipe selection is of zero length, then no parameter settings are specified for the
corresponding recipe.



SEMI E5-1104 © SEMI 1982, 2004 216
Stream,Function  Name (Mnemonic) Direction
S15,F34  Recipe Select Acknowledge M,H<-E
Description
This message is used to acknowledge the request for recipe selection.
Structure
L,2
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
p = 0 if and only if RMACK indicates no errors.

Stream,Function  Name (Mnemonic) Direction
S15,F35  Recipe Delete Request M,H->E,reply
Description
This message is used to request that one or more recipes be deleted or deselected.  If multi-block, it shall be preceded by the
S15,F1/S15,F2 inquire/grant transaction.
Structure
L,4
1. DATAID
2. RESPEC
3. RCPDEL
4. L,n                          (n = # recipes deselected)
1. RCPID
1

.
.
n. RCPID
n

Exception
If n = 0 and recipes are to be deselected (RCPDEL = 1), then all currently-selected recipes are indicated.



SEMI E5-1104 © SEMI 1982, 2004 217
Stream,Function  Name (Mnemonic) Direction
S15,F36  Recipe Delete Acknowledge M,H<-E
Description
This message is used to acknowledge the request that recipes be deleted or deselected.
Structure
L,2
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
p = 0 if and only if RMACK indicates no errors.

Stream,Function  Name (Mnemonic) Direction
S15,F37  DRNS Segment Approve Action Request S,H<->E,reply
Description
This message is sent by a distributed recipe namespace manager to an attached distributed recipe namespace segment to approve
an action previously requested by the segment.  If multi-block, it shall be preceded by the S15,F1/S15,F2 inquire/grant
transaction.
Structure
L,6
1. RMSEGSPEC
2. OBJTOKEN
3. RMGRNT
4. OPID
5. RCPID
6. RMCHGTYPE
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 218
Stream,Function  Name (Mnemonic) Direction
S15,F38  DRNS Segment Approve Action Acknowledge M,H<->E
Description
This message is used to acknowledge or deny the approve action request.
Structure
L,2
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
p = 0 if and only if RMACK indicates no errors.

Stream,Function  Name (Mnemonic) Direction
S15,F39  DRNS Recorder Segment Request M,H<->E,reply
Description
This message is used by the distributed recipe namespace manager to request that an attached recorder create or delete a segment
specifier record.  If multi-block, it shall be preceded by the S15,F1/S15,F2 inquire/grant transaction.
Structure
L,5
1. DATAID
2. RMNSCMD
3. RMRECSPEC
4. RMSEGSPEC
5. OBJTOKEN
Exception
None

Stream,Function  Name (Mnemonic) Direction
S15,F40  DRNS Recorder Segment Acknowledge M,H<->E
Description
This message is used to acknowledge the request to add or delete a segment specifier record.
Structure
L,2
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
p = 0 if and only if RMACK indicates no errors.



SEMI E5-1104 © SEMI 1982, 2004 219
Stream,Function  Name (Mnemonic) Direction
S15,F41  DRNS Recorder Modify Request M,H<->E,reply
Description
This message is used by a distributed recipe namespace manager to a recorder to store or delete a change request record.  If
multi-block, it shall be preceded by the S15,F1/F2 inquire/grant transaction.
Structure
L,5
1. DATAID
2. RMRECSPEC
3. OBJTOKEN
4. RMNSCMD
5. L,c                          (c = 1 or 7)
1. RCPID
2. RCPNEWID
3. RMSEGSPEC
4. RMCHGTYPE
5. OPID
6. TIMESTAMP
7. RMREQUESTOR
Exception
If RMNSCMD = create, then c = 7, otherwise c = 1.

Stream,Function  Name (Mnemonic) Direction
S15,F42  DRNS Recorder Modify Acknowledge M,H<->E
Description
This message is used to acknowledge a request to store or delete a change request.
Structure
L,2
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
p = 0 if and only if RMACK indicates no errors.



SEMI E5-1104 © SEMI 1982, 2004 220
Stream,Function  Name (Mnemonic) Direction
S15,F43  DRNS Get Change Request M,H<->E,reply
Description
This message is used to request a distributed recipe namespace recorder or manager to return change requests records for a
specific recipe or assigned to a specific segment.  If multi-block, it shall be preceded by the S15,F1/F2 inquire/grant transaction.
Structure
L,3
1. DATAID
2. OBJSPEC
3. TARGETSPEC
Exception
If TARGETSPEC is omitted, OBJSPEC identifies a recipe.

Stream,Function  Name (Mnemonic) Direction
S15,F44  DRNS Get Change Request Data M,H<->E
Description
This message is used to return the specified change request records.
Structure
L,2
1. L,n                          n = # change requests
1. L,7
1. RCPID
1

2. RCPNEWID
1

3. RMSEGSPEC
1

4. RMCHGTYPE
1

5. OPID
1

6. TIMESTAMP
1

7. RMREQUESTOR
1

.
.
n. L,7
1. RCPID
n

2. RCPNEWID
n

3. RMSEGSPEC
n

4. RMCHGTYPE
n

5. OPID
n

6. TIMESTAMP
n

7. RMREQUESTOR
n

2. L,2
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
If n = 0, no change records were found matching the specification.  p = 0 if and only if RMACK indicates no errors.



SEMI E5-1104 © SEMI 1982, 2004 221
Stream,Function  Name (Mnemonic) Direction
S15,F45  DRNS Manager Segment Change Approval Request M,H<->E,reply
Description
This message is sent to a distributed recipe namespace manager by an attached distributed recipe namespace segment to request
approval for a specific type of change to a recipe.  If multi-block, it shall be preceded by the S15,F1/F2 inquire/grant transaction.
Structure
L,4
1. DATAID
2. RCPSPEC
3. RCPNEWID
4. RMCHGTYPE
Exception
RCPNEWID is a zero-length item except where RMCHGTYPE specifies a copy or rename change.

Stream,Function  Name (Mnemonic) Direction
S15,F46  DRNS Manager Segment Approval Acknowledge S,H<->E
Description
This message is used to acknowledge the request to change a recipe.
Structure
L,3
1. RMCHGTYPE
2. RMGRNT
3. OPID
Exception
OPID is zero if and only if RMGRNT indicates the change is denied.

Stream,Function  Name (Mnemonic) Direction
S15,F47  DRNS Manager Rebuild Request M,H<->E,reply
Description
This message requests a distributed recipe namespace manager specified in OBJSPEC to rebuild a distributed recipe namespace.
Either a distributed recipe namespace recorder or a list of distributed recipe namespace segment specifiers shall be provided.  If
multi-block, it shall be preceded by the S15,F1/F2 inquire/grant transaction.
Structure
L,5
1. DATAID
2. OBJSPEC
3. RMNSSPEC
4. RMRECSPEC
5. L,n
1. RMSEGSPEC
1

.
.
n. RMSEGSPEC
n

Exception
If RMRECSPEC is a non-zero length item, then n is zero.  If RMRECSPEC is a zero length item, then n is non-zero.



SEMI E5-1104 © SEMI 1982, 2004 222
Stream,Function  Name (Mnemonic) Direction
S15,F48  DRNS Manager Rebuild Acknowledge M,H<->E
Description
This message is used to acknowledge the request to rebuild a distributed recipe namespace.
Structure
L,2
1. RMACK
2. L,P
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
p = 0 if and only if RMACK indicates no errors.

Stream,Function  Name (Mnemonic) Direction
S15,F49  Large Recipe Download Request (LRDR) S,H->E,reply
Description
This is a request by the host for the equipment to request the download of a recipe via the Stream 13 Data Set Transfer protocol.
The Data Set name, DSNAME, is the text string identifier of the recipe, RCPSPEC.  The Data Set is subsequently transferred as
a Stream with the following internal SECSII structured data:

L,4
1. RCPSPEC
2. DATAID
3. L,m                          (m = # of attributes)
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

4. RCPBODY
Structure
L,2
1. DSNAME
2. RCPOWCODE
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 223
Stream,Function  Name (Mnemonic) Direction
S15,F50  Large Recipe Download Acknowledge (LRDA) S,H<-E
Description
Acknowledge or error.  A returned status of “accepted” means only that the message is understood.  Upon completion of the
large recipe download request (Stream 13 Data Set transfer scenario) the equipment initiates a separate verification transaction
(S15,F53/S15,F54) that provides the result of the verification.
Structure
ACKC15
Exception
None

Stream,Function  Name (Mnemonic) Direction
S15,F51  Large Recipe Upload Request (LRUR) S,H->E,reply
Description
This is a request by the host for the equipment to request the host to upload a recipe via the Stream 13 Data Set Transfer
protocol.  The Data Set name, DSNAME, is the text string identifier of the recipe, RCPSPEC.  The Data Set is subsequently
transferred as a Stream with the following internal SECSII structured data:

L,3
1. RCPSPEC
2. L,m                          (m = # of attributes)
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

3. RCPBODY
Structure
DSNAME
Exception
None

Stream,Function  Name (Mnemonic) Direction
S15,F52  Large Recipe Upload Acknowledge (LRUA) S,H<-E
Description
Acknowledge or error.  A returned status of “accepted” means only that the message is understood.  The completion of the
request is signaled by an event report.
Structure
ACKC15
Exception
It is possible to use the ACKC15 code “command will be performed with completion signaled later” for this message.



SEMI E5-1104 © SEMI 1982, 2004 224
Stream,Function  Name (Mnemonic) Direction
S15,F53  Recipe Verification Send (RVS) M,H<-E,reply
Description
This message indicates to the host that a large recipe that was transferred via Stream 13 Data Set Transfer Protocol had been
received and checked by the equipment.  RCPID contains the identifier of a derived object form recipe if created during
verification.  The result of the check is specified by the list of errors.  An empty error list indicates no errors were found in the
recipe.  The equipment is responsible for sending a single copy of this message to the host after any reception of a recipe through
S15,F49.
Structure
L,3
1. RCPSPEC
2. RCPID
3. L,2
1. RMACK
2. L,n                      (n = number of errors being reported)
1. L,2
1. ERRCODE
1

2. ERRTEXT
1

.
n. L,2
1. ERRCODE
n

2. ERRTEXT
n

Exception
n = 0 if and only if RMACK indicates no error.  If RCPSEPC is a zero length item, then the recipe was not verified or failed
verification.  If RCPID is zero length, then no derived object form recipe was originated.

Stream,Function  Name (Mnemonic) Direction
S15,F54  Recipe Verification Acknowledge (RVA) S,H->E
Description
Reply by host to equipment providing response to Recipe Verification Send (RVS).
Structure
Header only
Exception
None

10. 20  Steam  16  Processing  Management  —  This  stream  provides  protocol  for  a  set  of  messages  that  enable  the
control  of  material  processing  at  equipment  and  equipment  resources.    Control  is  implemented  by  supporting  two
job types; the control job and the process job.  A process job is a single unit of work that ensures that the appropriate
processing is applied to a particular material by a processing resource.  The Process Job provides a widely applicable
supervisory  control  capability  for  automated  processing  of  material  in  equipment,  irrespective  of  the  particular
process  being  used.    The  Process  Job  creates  a  transient  link  between  the  three  elements  of  the  manufacturing
process; the first is the material to be processed.  The second is the equipment on which the process will occur.  The
third is the process specification, a Process Recipe.  When a Process Job has completed, it ceases to exist; its Process
Job  ID  is  no  longer  valid.    The  control  job  is  used  to  group  a  set  of  related  process  jobs.    The  group  is  logically
related from the host’s viewpoint.  For instance; if a carrier contains multiple lots, then the process jobs for each lot
(in  the  carrier)  could  be  included  in  the  control  job  specification.    Control  jobs  also  provide  mechanisms  for
specifying the destination for processed material.



SEMI E5-1104 © SEMI 1982, 2004 225
Stream,Function  Name (Mnemonic) Direction
S16,F0  Abort Transaction (S16F0) S,H<->E
Description
Same form as S1F0
Structure

Exception


Stream,Function  Name (Mnemonic) Direction
S16,F1  Multi-block Process Job Data Inquire (PRJI) S,H->E,reply
Description
If any of Processing Management messages are larger than one block, then this transaction must precede that message.
Structure
L,2
1. DATAID
2. DATALENGTH
Exception
None

Stream,Function  Name (Mnemonic) Direction
S16,F2  Multi-block Process Job Data Grant (PRJG) S,H<-E
Description
Message to indicate if permission is granted to transmit a multi-block Job Data message.
Structure
GRANT
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 226
Stream,Function  Name (Mnemonic) Direction
S16,F3  Process Job Create Request (PRJCR) M,H->E,reply
Description
The purpose of this message is to request material to be processed on a Process Module.
Structure
L,5
1. DATAID
2. MF
3. L,n
1. MID
1

.
.
n. MID
n

4. L,3
1. PRRECIPEMETHOD
2. RCPSPEC
3. L,m                      (m       =       {c,2})
1. L,2
1. RCPPARNM
1

2. RCPPARVAL
1

.
.
m. L,2
1. RCPPARNM
m

2. RCPPARVAL
m

5. PRPROCESSSTART
Exception
For the m length list m = 0 may be allowed value depending on the value of PRRECIPEMETHOD.

Stream,Function  Name (Mnemonic) Direction
S16,F4  Process Job Create Acknowledge (PRJCA) S,H<-E
Description
Acknowledge or report error in the creation of a Process Job.
Structure
L,2
1. PRJOBID
2. L,2
1. ACKA
2. L,n
1. L,2
1. ERRCODE
1

2. ERRTEXT
1

.
.
.
n. L,2
1. ERRCODE
n

2. ERRTEXT
n

Exception
This list may be zero length, generally the case when ACKA indicates success.  When ACKA indicates a create failure, the
equipment may supply one or more ERRCODEs.



SEMI E5-1104 © SEMI 1982, 2004 227
Stream,Function  Name (Mnemonic) Direction
S16,F5  Process Job Command Request (PRJCMDR) M,H->E,reply
Description
Send a job control command to a processing job.
Structure
L,4
1. DATAID
2. PRJOBID
3. PRCMDNAME
4. L,n
1. L,2
1. CPNAME
1

2. CPVAL
1

.
.
n. L,2
1. CPNAME
n

2. CPVAL
n

Exception
The CPNAME, CPVAL pairs are command parameter identifiers and values; n = 0 is valid for some commands
(PRCMDNAME).

Stream,Function  Name (Mnemonic) Direction
S16,F6  Process Job Command Acknowledge (PRJCMDA) S,H<-E
Description
The processing service sends its confirmation for receipt of a command request.
Structure
L,2
1. PRJOBID
2. L,2
1. ACKA
2. L,n                    (n = {0,n})
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
This list n may be zero length.



SEMI E5-1104 © SEMI 1982, 2004 228
Stream,Function  Name (Mnemonic) Direction
S16,F7  Process Job Alert Notify (PRJA) S,H<-E,[reply]
Description
The processing service may notify the controlling entity of important events.  The Process Job Milestones only assume small
number of different values.  However, the conditions under which a process job meets one of these milestones may vary.  For
instance, a Job may reach Job Complete because the Process was Aborted.  By using item 4, the status of the Alert
(PRJOBMILESTONE) can be indicated.  See the list of Error Codes for Processing in Data Item Dictionary.
Structure
L,4
1. TIMESTAMP
2. PRJOBID
3. PRJOBMILESTONE
4. L,2
1. ACKA
2. L,n                      (n       =       {0,n})
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
The list n may be zero length.

Stream,Function  Name (Mnemonic) Direction
S16,F8  Process Job Alert Confirm (PRJAC) S,H->E
Description
Host confirms receipt of Process Job Alert message from the equipment.
Structure
Header only
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 229
Stream,Function  Name (Mnemonic) Direction
S16,F9  Process Job Event Notify (PRJE) S,H<-E,[reply]
Description
Send Processing Job related event to the controlling entity.
Structure
L,4
1. PREVENTID
2. TIMESTAMP
3. PRJOBID
4. L,n
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
The VID, V pairs are variable data identifiers and values; exceptions n = 0 is valid for some events (PREVENTID).

Stream,Function  Name (Mnemonic) Direction
S16,F10  Process Job Event Confirm (PRJEC) S,H->E
Description
Host confirms receipt of S16,F9 message to equipment.
Structure
Header only
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 230
Stream,Function  Name (Mnemonic) Direction
S16,F11  PRJobCreateEnh M,H->E,reply
Description
Request equipment to create a Process Job with the given PRJOBID.  If multi-block, this message must be preceded by the
S16,F1/F2 transaction.
Structure
L,7
1.  DATAID
2.  PRJOBID
3.  MF
4a. L,n                         [MF = carrier, n = # of carriers]
1. L,2
1. CARRIERID
1

2. L,j               [j = # of slots, may be implemented as an array]
1. SLOTID
1

2. SLOTID
2

.
.
j. SLOTID
j

.
.
n. L,2
1. CARRIERID
n

2. L,j               [j = # of slots, may be implemented as an array]
1. SLOTID
1

2. SLOTID
2

.
.
j. SLOTID
j

4b. L,n                         [MF = substrate]
1. MID
1

.
.
n. MID
n

5.  L,3
1. PRRECIPEMETHOD
2. RCPSPEC
3. L,m                    [m = # recipe parameters]
1. L,2
1. RCPPARNM
1

2. RCPPARVAL
1

.
m. L,2
1. RCPPARNM
m

2. RCPPARVAL
m

6. PRPROCESSSTART
7. PRPAUSEEVENT
Exception
The list for specifying material (item 4a and 4b) is empty (L,0 instead of L,n), when no material is specified for the process job.
The form of data item 4(a or b) depends on the value in MF.



SEMI E5-1104 © SEMI 1982, 2004 231
Stream,Function  Name (Mnemonic) Direction
S16,F12  PRJobCreateEnh Acknowledge S,H<-E
Description
This message acknowledges the request and reports any errors in the creation of a process job.
Structure
L,2
1. PRJOBID
2. L,2
1. ACKA
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
S16,F13  PRJobDuplicateCreate M,H->E,reply
Description
Not used.
Structure

Exception


Stream,Function  Name (Mnemonic) Direction
S16,F14  PRJobDuplicateCreate Acknowledge S,H<-E
Description
Not used.
Structure

Exception




SEMI E5-1104 © SEMI 1982, 2004 232
Stream,Function  Name (Mnemonic) Direction
S16,F15  PRJobMultiCreate M,H->E,reply
Description
Use this single message to Create Multiple Process Jobs, each of which may be unique in its association of material to process
recipe.  If multi-block, this message must be preceded by the S16,F1/F2 transaction.
Structure
L,2
1. DATAID
2. L,p                          [p = # of process jobs being created]
1. L,6
1.  PRJOBID
1

2.  MF
1

3a. L,n               [MF = carrier, n = # of carriers]
1. L,2
1. CARRIERID
1

2. L,j    [j = # of slots, may be implemented as an array]
1. SLOTID
1

2. SLOTID
2

.
.
j. SLOTID
j

.
.
n. L,2
1. CARRIERID
n

2. L,j    [j = # of slots, may be implemented as an array]
1. SLOTID
1

2. SLOTID
2

.
.
j. SLOTID
j

3b. L,n               [MF = substrate, n = # of MID]
1. MID
1

.
.
n. MID
n

4.  L,3
1. PRRECIPEMETHOD
1

2. RCPSPEC
1

3. L,m          [m = # recipe parameters]
1. L,2
1. RCPPARNM
1

2. RCPPARVAL
1

.
.
m. L,2
1. RCPPARNM
m

2. RCPPARVAL
m

5.  PRPROCESSSTART
1

6.  PRPAUSEEVENT
1

.
.
p. L,6
1.  PRJOBID
p

2.  MF
p

3a. L,n               [MF = carrier, n = # of carriers]
1. L,2
1. CARRIERID
1

2. L,j    [j = # of slots, may be implemented as an array]
1. SLOTID
1

2. SLOTID
2



SEMI E5-1104 © SEMI 1982, 2004 233
.
.
j. SLOTID
j

.
.
n. L,2
1. CARRIERID
n

2. L,j    [j = # of slots, may be implemented as an array]
1. SLOTID
1

2. SLOTID
2

.
.
j. SLOTID
j

3b. L,n               [MF = substrate, n = # of MID]
1. MID
1

.
.
n. MID
n

4.  L,3
1. PRRECIPEMETHOD
p

2. RCPSPEC
p

3. L,m          [m = # recipe parameters]
1. L,2
1. RCPPARNM
1

2. RCPPARVAL
1

.
.
m. L,2
1. RCPPARNM
m

2. RCPPARVAL
m

5.  PRPROCESSSTART
p

6.  PRPAUSEEVENT
p

Exception
The list for specifying material (item 3a and 3b) is empty (L,0 instead of L,n), when no material is specified for the process job.
The form of data item 3(a or b) depends on the value in MF.



SEMI E5-1104 © SEMI 1982, 2004 234
Stream,Function  Name (Mnemonic) Direction
S16,F16  PRJobMultiCreate Acknowledge S,H<-E
Description
This message acknowledges the request and reports any errors in the creation of a process job.  ERRTEXT contains the identifier
of process jobs that were not created.
Structure
L,2
1. L,m                          [m = # jobs created]
1. PRJOBID
1

.
.
m. PRJOBID
m

2. L,2
1. ACKA
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
S16,F17  PRJobDequeue S,H->E,reply
Description
Used to remove process jobs from the equipment for jobs that have not begun processing.
Structure
L,m                                [m = # jobs to remove]
1. PRJOBID
1

.
.
m. PRJOBID
m

Exception
If m = 0, then de-queue all.



SEMI E5-1104 © SEMI 1982, 2004 235
Stream,Function  Name (Mnemonic) Direction
S16,F18  PRJobDequeue Acknowledge S,H<-E
Description
Acknowledge the request to de-queue and report any errors.  ERRTEXT will contain the identifier of any jobs that were not de-
queued.
Structure
L,2
1. L,m                          [m = # jobs removed]
1. PRJOBID
1

.
.
m. PRJOBID
m

2. L,2
1. ACKA
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
S16,F19  PRGetAllJobs S,H->E
Description
Requests the equipment to return a list of process jobs which have not completed.  They may be running or waiting to run.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S16,F20  PRGetAllJobs Send S,H<-E
Description
Returns the requested list of process jobs.
Structure
L,m                                [m = # jobs in the list]
1. L,2
1. PRJOBID
1

2. PRSTATE
1

.
.
m. L,2
1. PRJOBID
m

2. PRSTATE
m

Exception
If m = 0, then no process jobs are running or waiting to run.



SEMI E5-1104 © SEMI 1982, 2004 236
Stream,Function  Name (Mnemonic) Direction
S16,F21  PRGetSpace S,H->E
Description
Requests the equipment to return the number of process jobs it has space to create.
Structure
Header only
Exception
None

Stream,Function  Name (Mnemonic) Direction
S16,F22  PRGetSpace Send S,H<-E
Description
Sends the host the number of process jobs which can be created.
Structure
PRJOBSPACE
Exception
None

Stream,Function  Name (Mnemonic) Direction
S16,F23  PRJobSetRecipeVariable S,H->E
Description
Reset the value of recipe variable parameters for a specific process job.
Structure
L,2
1. PRJOBID
2. L,m                          [m = # recipe variables]
1. L,2
1. RCPPARNM
1

2. RCPPARVAL
1

.
.
m. L,2
1. RCPPARNM
m

2. RCPPARVAL
m

Exception
None



SEMI E5-1104 © SEMI 1982, 2004 237
Stream,Function  Name (Mnemonic) Direction
S16,F24  PRJobSetRecipeVariable Acknowledge S,H<-E
Description
Indicate the status of the request to set recipe variables.  ERRTEXT will contain the RCPPARNM value for parameters that
could not be reset.
Structure
L,2
1. ACKA
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
S16,F25  PRJobSetStartMethod S,H->E
Description
Used to request to change the start method (USERSTART or AUTO) for one or more process jobs.
Structure
L,2
1. L,m                          [m = # of jobs]
1. PRJOBID
1

.
.
m. PRJOBID
m

2. PRPROCESSSTART
Exception
None



SEMI E5-1104 © SEMI 1982, 2004 238
Stream,Function  Name (Mnemonic) Direction
S16,F26  PRJobSetStartMethod Acknowledge S,H<-E
Description
Acknowledges request to set job start method and indicates any errors.  ERRTEXT will contain the identifiers of any process
jobs that did not accept the new process start method.
Structure
L,2
1. L,m                          [m = # of jobs]
1. PRJOBID
1

.
.
m. PRJOBID
m

L,2
1. ACKA
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

Stream,Function  Name (Mnemonic) Direction
S16,F27  Control Job Command Request S,H->E
Description
Send a control job command to a control job.
Structure
L,3
1. CTLJOBID
2. CTLJOBCMD
3. L,2
1. CPNAME
2. CPVAL
Exception

# 3

3. L,2 IS L,0 for commands that do not need parameters.



SEMI E5-1104 © SEMI 1982, 2004 239
Stream,Function  Name (Mnemonic) Direction
S16,F28  Control Job Command Acknowledge S,H<-E
Description
Indicates success or failure of command request to a control job.  If applicable ERRTEXT shall contain information on specific
command parameter names or values that caused the error.
Structure
L,2
1. ACKA
2. L,2
1. ERRCODE
2. ERRTEXT
Exception

# 2

2. L,2 IS L,0 if no errors.

Stream,Function  Name (Mnemonic) Direction
S16,F29  PRSetMtrlOrder (PRJSMO) S,H->E,reply
Description
This message requests the equipment’s Processing Management Service to use a specific strategy for the order in which
materials are processed.
Structure
PRMTRLORDER
Exception
None

Stream,Function  Name (Mnemonic) Direction
S16,F30  PRSetMtrlOrder Acknowledge (PRJSMOA) S,H<-E
Description
This message acknowledges the request for change to the material process strategy by reporting back the value requested, if
correct.
Structure
ACKA
Exception
None

10. 21  Stream 17 Equipment Control and Diagnostics — This stream is a continuation of Stream 2.

Stream,Function  Name (Mnemonic) Direction
S17,F0  Abort Transaction (S17F0) S,H<->E
Description
Same form as S1F0
Structure

Exception




SEMI E5-1104 © SEMI 1982, 2004 240
Stream,Function  Name (Mnemonic) Direction
S17,F1  Data Report Create Request (DRC) M,H->E,reply
Description
Create a Data Report definition.  This function allows the referencing of a Data Source for the items (variables or attributes)
specified in the data report.
Structure
L,4
1. DATAID
2. RPTID
3. DATASRC
4. L,n
1. VID
1

2. VID
2

.
.
.
n. VID
n

Exception
DATAID is a zero length item when the request can be sent in a single block.  If RPTID is a zero length item, then the equipment
shall return a value in RPTID by which the host can then reference the report efinition.  If RPTID has a value, then the
equipment shall retain this value by which the host can then reference the report definition.

Stream,Function  Name (Mnemonic) Direction
S17,F2  Data Report Create Acknowledge (DRCA) S,H<-E
Description
Equipment confirms creation of a Data Report and returns RPTID.
Structure
L,2
1. RPTID
2. ERRCODE
Exception
If ERRCODE is a zero length item, then no error occurred.

Stream,Function  Name (Mnemonic) Direction
S17,F3  Data Report Delete Request (DRD) S,H->E,reply
Description
Delete one or more data reports.  This shall cause those reports to be unlinked from any Event Reports to which they were
linked.  This shall cause the report to be excluded from any Trace Reports for in which it had originally been included.
Structure
L,n
1. RPTID
1

2. RPTID
2

.
.
n. RPTID
n

Exception
If this message is sent with a zero length list, then all reports shall be deleted.



SEMI E5-1104 © SEMI 1982, 2004 241
Stream,Function  Name (Mnemonic) Direction
S17,F4  Data Report Delete Acknowledge (DRDA) S,H<-E
Description
Equipment confirms or indicates any errors on the request to delete Data Reports.  All Data Reports which could be deleted shall
be listed in the response and the associated error code shall be included in the list.
Structure
L,2
1. ACKA
2. L,m
1. L,3
1. RPTID
1

2. ERRCODE
1

3. ERRTEXT
1

.
.
m. L,3
1. RPTID
m

2. ERRCODE
m

3. ERRTEXT
m

Exception
If ACKA is TRUE, then no errors were encountered, meaning all report requests were completed successfully and a zero-length
list (m = 0) shall be sent.
If some reports could not be deleted, then their RPTIDs shall be given in a space separated list in ERRTEXT.

Stream,Function  Name (Mnemonic) Direction
S17,F5  Trace Create Request (TRC) M,H->E,reply
Description
Establish a Trace Report definition.
Structure
L,6
1. DATAID
2. TRID
3. CEED
4. L,n
1. RPTID
1

2. RPTID
2

.
.
n. RPTID
n

5. TRSPER
6. L,m                          (m = {0,8})
1. TOTSMP
2. REPGSZ
3. EVNTSRC               (Defines source for start Event)
4. CEID                  (Defines ID of the start Event)
5. EVNTSRC               (Defines source for stop Event)
6. CEID                  (Defines ID of the stop Event)
7. TRAUTOD
8. RPTOC
Exception
The list m can be zero-length, or it can contain all eight data items.  Since specifying values for each item is optional, each of the
eight items can be zero-length.  If the item is zero-length, the format of the item shall be the same format used in other instances
of the S17,F5 message where the value is not zero-length.



SEMI E5-1104 © SEMI 1982, 2004 242
Stream,Function  Name (Mnemonic) Direction
S17,F6  Trace Create Acknowledge (TRCA) S,H<-E
Description
Equipment confirms creation of an Event Report and returns a TRID.
Structure
L,2
1. TRID
2. ERRCODE
Exception
If ERRCODE is a zero length item, then no error occurred.

Stream,Function  Name (Mnemonic) Direction
S17,F7  Trace Delete Request (TRD) S,H->E,reply
Description
The host requests to delete one or more Trace Reports.
Structure
L,n
1. TRID
1

2. TRID
2

.
.
n. TRID
n

Exception
None

Stream,Function  Name (Mnemonic) Direction
S17,F8  Trace Delete Acknowledge (TRDA) S,H<-E
Description
This message is required to inform the host when a Trace Report could not be deleted.  This message does not need to be sent to
confirm the successful deletion of a Trace Report.  If the report is sent for a successfully deleted Trace Report, then the
ERRCODE item length shall be set to zero.
Structure
L,2
1. ACKA
2. L,m
1. L,3
1. TRID
1

2. ERRCODE
1

3. ERRTEXT
1

.
.
m. L,3
1. TRID
m

2. ERRCODE
m

3. ERRTEXT
m

Exception
If ACKA is TRUE, then no errors were encountered, meaning all report requests were completed successfully and a zero-length
list (m = 0) shall be sent.
If some reports could not be deleted, then their TRIDs shall be provided in a space separated list in ERRTEXT.
