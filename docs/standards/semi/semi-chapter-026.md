---
title: "E5-1104 - © SEMI 1982, 2004..."
description: "SEMI标准文档"
sidebar_label: "E5-1104 - © SEMI 1982, 2004..."
sidebar_position: 26
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-026.pdf'
  chapter: 26
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';
import PdfSplitView from '@site/src/components/PdfSplitView';

<PdfDownloadCard
  pdfLink="/pdfs/semi/026.pdf"
  pdfSize="N/A"
  title="E5-1104 - © SEMI 1982, 2004..."
  description="SEMI标准文档"
/>

---

## 📖 并排查看：Markdown文本 + PDF原文档

<PdfSplitView pdfPath="/pdfs/semi/026.pdf">

---
title: "E5-1104 - © SEMI 1982, 2004..."
description: "SEMI标准文档"
sidebar_label: "E5-1104 - © SEMI 1982, 2004..."
sidebar_position: 26
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-026.pdf'
  chapter: 26
  page_count: 50
---



&lt;!-- Page 1 --&gt;

SEMI E5-1104 © SEMI 1982, 2004193 Stream,Function Name (Mnemonic) DirectionS14,F20 Generic Service Acknowledge (GSA) M,H&lt;-EDescriptionThe equipment acknowledges requested service or reports any error(s). If the service is accepted and completed at once, (i.e.SVCACK = 0) then, the required parameters for the response are listed within this message. If the service is accepted but theperformance of the service takes a relatively longer time due to some physical reason, (i.e. SVCACK = 4) then, the serviceresponse will be sent with the required parameters when the service is completed (see S14,F21/F22). The determination as towhether a delayed response is acceptable is dependent upon the implementation. LINKID is set to a non-zero value if and only ifadditional completion reports will be sent. The data items are mapped to the service response parameter list of the applied objectservice. Parameters that apply to the list are described in the standard that defines the application of the service.StructureL,41. 2\. 3\. L,n # of parameter groups1. L,21. service parameter 1 name2. service parameter 1 value2. L,21. service parameter 2 name2. service parameter 2 value..n. L,21. service parameter n name2. service parameter n value4. L,21. 2\. L,p p = number of errors reported1. L,21. 2\. ..p. L,21. 2\. ExceptionIf p = 0, no errors were detected. If n = 0 parameters are returned. SVCACK is specified twice in the above structure forbackward compatibility with the previous structure of this message, and for consistency with other stream 14 reply messages.The values of both SVCACK data items in this structure must be equal. The above message structure (L,4) is the preferredstructure for this message and must be used for new implementations. The following message structure (L,3) is included forcompatibility with previous implementations and must not be used for new implementations.Structure:L,31. 2\. 3\. L,n # of parameter groups1. L,21. service parameter 1 name2. service parameter 1 value2. L,21. service parameter 2 name2. service parameter 2 value..n. L,21. service parameter n name2. service parameter n value

&lt;!-- Page 2 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 194 Stream,Function Name (Mnemonic) DirectionS14,F21 Generic Service Completion Information (GSCI) M,H&lt;-E,replyDescriptionThe equipment notifies the original service requestor when requested service on an object is completed, either successfully orunsuccessfully. The equipment may send required information using reply parameters. If the service was accepted andcompleted at once, the information was carried with the acknowledge message, that is secondary message of requesting one, andthis message is not provided.OPID contains the value of OPID in the initial request, i.e. S14F19. LINKID is set to a non-zero value if and only if additionalcompletion reports with the same OPID will be sent. If multi-block, it shall be preceded by the S14F23/F24 Multi-BlockInquire/Grant transaction.StructureL,51. 2\. 3\. 4\. L,n n = of parameter groups1. L,21. Service parameter 1 name2. Service parameter 1 value2. L,21. Service parameter 2 name2. Service parameter 2 value..n. L,21. Service parameter n name2. Service parameter n value5. L,21. 2\. L,p p = number of errors reported1. L,21. 2\. ExceptionIf p = 0, no errors were detected. If n = 0 no parameters are returned. Stream,Function Name (Mnemonic) DirectionS14,F22 Generic Service Completion Acknowledge (GSCA) S,H-&gt;EDescriptionThe acknowledgement of generic Object Service Completion Information, i.e. S14F21.StructureExceptionNone

&lt;!-- Page 3 --&gt;

SEMI E5-1104 © SEMI 1982, 2004195 Stream,Function Name (Mnemonic) DirectionS14,F23 Multi-block Generic Service Data Inquire (GSDI) S,H&lt;-&gt;E,replyDescriptionIf any of Object Service messages are larger than one block, then this transaction must precede that message.StructureL,21. 2\. ExceptionNone Stream,Function Name (Mnemonic) DirectionS14,F24 Multi-block Generic Service Data Grant (GSDG) S,H&lt;-&gt;EDescriptionMessage to indicate if permission is granted to transmit a multi-block Object Service message.StructureExceptionNone Stream,Function Name (Mnemonic) DirectionS14,F25 Get Service Name Request (GSNR) S,H-&gt;EDescriptionThis message is used to request to list the services of specified types of owned objects. This is an operation performed on anobject type rather than on object instances. Wild characters ? and \* may be used as a filter for object types. Equipment isnot required to support wild characters.StructureL,21. 2\. L,n n = # of object types1. ..n. ExceptionIf OBJSPEC is a zero-length item, no object specifier is provided.

&lt;!-- Page 4 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 196 Stream,Function Name (Mnemonic) DirectionS14,F26 Get Service Name Data (GSND) S,H&lt;-EDescriptionThis message contains a list of the services of the requested objects.StructureL,21. L,n n = number of object types1. L,21. 2\. L,a a = number of attributes1. ..a. ..n. L,21. 2\. L,b b = number of attributes1. ..b. 2\. L,21. L,21. 2\. L,p p = number of errors reported1. L,21. 2\. ..p. L,21. 2\. ExceptionIf p = 0, no errors were detected. Stream,Function Name (Mnemonic) DirectionS14,F27 Get Service Parameter Name Request (GPNR) S,H-&gt;EDescriptionThis message is used to request to list the parameters of specified services of owned object. This is an operation performed on anobject type rather than on object instances.StructureL,31. 2\. 3\. L,n n = # of interesting services1. ..n. ExceptionIf OBJSPEC is a zero-length item, no object specifier is provided.

&lt;!-- Page 5 --&gt;

SEMI E5-1104 © SEMI 1982, 2004197 Stream,Function Name (Mnemonic) DirectionS14,F28 Get Service Parameter Name Data (GPND) S,H&lt;-EDescriptionThis message contains a list of the service parameters of the requested services for the specified object.StructureL,21. L,n n = number of services of interest1. L,21. 2\. L,a a = number of parameter names1. ..a. ..n. L,21. 2\. L,b b = number of parameter names1. ..b. 2\. L,21. 2\. L,p p = number of errors reported1. L,21. 2\. ..p. L,21. 2\. ExceptionIf p = 0, no errors were detected. 10.19 Stream 15 Recipe Management  The functions in this stream are used requesting information andoperations concerning recipes, recipe namespaces, and recipe executors. A recipe is an object that is transferred insections, where a section consists of either recipe attributes, agent-specific dataset attributes, or the body of therecipe. An attribute is information concerning the recipe body, the recipe as a whole, or the application of therecipe. An attribute consists of an attribute name/attribute value pair. Stream,Function Name (Mnemonic) DirectionS15,F0 Abort Transaction (S15F0) S,H&lt;-&gt;EDescriptionSame form as S1,F0.Structure Exception

&lt;!-- Page 6 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 198 Stream,Function Name (Mnemonic) DirectionS15,F1 Recipe Management Multi-block Inquire S,H&lt;-&gt;E,replyDescriptionThis message requests permission to send a multi-block message based upon a maximum length of the total message.StructureL,31. 2\. 3\. ExceptionIf RCPSPEC is zero-length, the multi-block message for which permission to send is requested does not contain a recipe. Stream,Function Name (Mnemonic) DirectionS15,F2 Recipe Management Multi-block Grant S,H&lt;-&gt;EDescriptionThis message grants or denies permission to send a multi-block message.StructureExceptionNone Stream,Function Name (Mnemonic) DirectionS15,F3 Recipe Namespace Action Request S,H&lt;-&gt;E,replyDescriptionThis message requests that a recipe namespace be created or deleted.StructureL,21. 2\. ExceptionNone

&lt;!-- Page 7 --&gt;

SEMI E5-1104 © SEMI 1982, 2004199 Stream,Function Name (Mnemonic) DirectionS15,F4 Recipe Namespace Action Acknowledge M,H&lt;-&gt;EDescriptionThis message is used to confirm whether the requested action was completed successfully or to provide error informationotherwise.StructureL,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors. Stream,Function Name (Mnemonic) DirectionS15,F5 Recipe Namespace Rename Request S,H&lt;-&gt;E,replyDescriptionA request is made for a recipe namespace to be renamed.StructureL,21. 2\. ExceptionNone Stream,Function Name (Mnemonic) DirectionS15,F6 Recipe Namespace Rename Acknowledge M,H&lt;-&gt;EDescriptionThis message is used to acknowledge or deny a request to rename a recipe namespace.StructureL,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors.

&lt;!-- Page 8 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 200 Stream,Function Name (Mnemonic) DirectionS15,F7 Recipe Space Request S,H&lt;-&gt;E,replyDescriptionThis message requests the amount of recipe storage available in the storage of a recipe namespace or recipe executor, asindicated by its object specifier OBJSPEC.StructureExceptionNone Stream,Function Name (Mnemonic) DirectionS15,F8 Recipe Space Data M,H&lt;-&gt;EDescriptionThis message contains the amount of storage available for recipes.StructureL,21. 2\. L,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors. Stream,Function Name (Mnemonic) DirectionS15,F9 Recipe Status Request S,H&lt;-&gt;E,replyDescriptionThis message is used to request the status of a recipe and the next available numeric version for that recipe class and name.StructureExceptionNone

&lt;!-- Page 9 --&gt;

SEMI E5-1104 © SEMI 1982, 2004201 Stream,Function Name (Mnemonic) DirectionS15,F10 Recipe Status Data M,H&lt;-&gt;EDescriptionThis message contains the protected status of the recipe and the next available version number for that recipe class and name.StructureL,31. 2\. 3\. L,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. ExceptionRCPVERS is a zero-length item if and only if the recipe does not exist. p = 0 if and only if RMACK indicates no errors. Stream,Function Name (Mnemonic) DirectionS15,F11 Recipe Version Request S,H&lt;-&gt;E,replyDescriptionThis message is used to request the best version of a recipe for the specified agent.StructureL,41. 2\. 3\. 4\. ExceptionIf item 2 is zero length, the recipe class PROCESS is indicated. If item 4 is a zero-length item, no agent is specified.

&lt;!-- Page 10 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 202 Stream,Function Name (Mnemonic) DirectionS15,F12 Recipe Version Data M,H&lt;-&gt;EDescriptionThis message contains the recommended version.StructureL,31. 2\. 3\. L,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. ExceptionIf AGENT is a zero-length item in the request, it shall also be a zero-length item in the reply. If it is not zero-length in therequest, and it is of zero-length in the reply, then no qualifying recipe was found specific to that equipment. p = 0 if and only ifRMACK indicates no errors. Stream,Function Name (Mnemonic) DirectionS15,F13 Recipe Create Request M,H&lt;-&gt;E,replyDescriptionThis message is used to create or modify a recipe body. If multi-block, it shall be preceded by the S15,F1/F2 inquire/granttransaction.StructureL,51. 2\. 3\. 4\. L,m1. L,21. 2\. ..m. L,21. 2\. 5\. ExceptionRCPBODY may be of zero length.

&lt;!-- Page 11 --&gt;

SEMI E5-1104 © SEMI 1982, 2004203 Stream,Function Name (Mnemonic) DirectionS15,F14 Recipe Create Acknowledge M,H&lt;-&gt;EDescriptionThis message is used to acknowledge that a recipe has been created or updated with the body sent in the request.StructureL,21. 2\. L,21. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors.

&lt;!-- Page 12 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 204 Stream,Function Name (Mnemonic) DirectionS15,F15 Recipe Store Request M,H&lt;-&gt;E,replyDescriptionThis message is used to send a recipe, or one or more recipe sections, to a recipe namespace. If multi-block, it shall be precededby the S15,F1/F2 inquire/grant transaction.StructureL,41. 2\. 3\. 4\. L,q (q = 1,2,3)1. L,r (r = 0 or 2)1. 2\. L,g (g = # generic attributes)1. L,21. 2\. ..g. L,21. 2\. 2\. 3\. L,m (m = # agent-specific datasets)1. L,21. 2\. L,a1. L,21. 2\. ..a. L,21. 2\. ..m. L,21. 2\. L,b1. L,21. 2\. ..b. L,21. 2\. ExceptionRCPBODY is a zero-length item when the body is omitted. If g = 0, no generic attributes are transferred and RCPBODY shallbe a zero-length item. If m = 0, no agent-specific datasets are transferred.

&lt;!-- Page 13 --&gt;

SEMI E5-1104 © SEMI 1982, 2004205 Stream,Function Name (Mnemonic) DirectionS15,F16 Recipe Store Acknowledge M,H&lt;-&gt;EDescriptionThis message is used to acknowledge that the specified recipe has been stored as requested or to indicate the error(s).StructureL,21. 2\. L,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors. Stream,Function Name (Mnemonic) DirectionS15,F17 Recipe Retrieve Request S,H&lt;-&gt;E,replyDescriptionThis message is used to get a recipe, or one or more recipe sections, from a recipe namespace.StructureL,21. 2\. ExceptionNone

&lt;!-- Page 14 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 206 Stream,Function Name (Mnemonic) DirectionS15,F18 Recipe Retrieve Data M,H&lt;-&gt;EDescriptionThis message is used to acknowledge that the specified recipe, or recipe sections, have been set as requested, or to indicate theerror(s).StructureL,21. L,q (q = 1,2,3)1. L,r (r = 0 or 2)1. 2\. L,g (g = # generic attributes)1. L,21. 2\. ..g. L,21. 2\. 2\. 3\. L,m (m = # agent-specific datasets)1. L,21. 2\. L,a1. L,21. 2\. ..a. L,21. 2\. ..m. L,21. 2\. L,b1. L,21. 2\. ..b. L,21. 2\. 2\. L,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. ExceptionIf r = 0, no generic attributes are transferred and RCPBODY shall be a zero-length item. If m = 0, no agent-specific datasets aretransferred. p = 0 if and only if RMACK indicates no errors.

&lt;!-- Page 15 --&gt;

SEMI E5-1104 © SEMI 1982, 2004207 Stream,Function Name (Mnemonic) DirectionS15,F19 Recipe Rename Request S,H&lt;-&gt;E,replyDescriptionThis message is used to request that a recipe be copied to, or renamed to, a recipe with a new identifier.StructureL,31. 2\. 3\. ExceptionNone Stream,Function Name (Mnemonic) DirectionS15,F20 Recipe Rename Acknowledge M,H&lt;-&gt;EDescriptionThis message acknowledges the request to copy or rename a recipe and indicates whether the action was successfully performedor errors that occurred.StructureL,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors. Stream,Function Name (Mnemonic) DirectionS15,F21 Recipe Action Request M,H&lt;-&gt;E,replyDescriptionThis message is used to acknowledge the request to perform an action in one or more recipes within a namespace.StructureL,61. 2\. 3\. 4\. 5\. 6\. L,n1. ..n. ExceptionAGENT may be a zero-length item except for requests for certify, de-certify, download, and upload.

&lt;!-- Page 16 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 208 Stream,Function Name (Mnemonic) DirectionS15,F22 Recipe Action Acknowledge M,H&lt;-&gt;EDescriptionThis message is used to acknowledge the request to originate a new recipe.StructureL,41. 2\. 3\. 4\. L,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. ExceptionLINKID is zero if and only if all requested actions have been completed. p = 0 if and only if RMACK indicates no errors. Stream,Function Name (Mnemonic) DirectionS15,F23 Recipe Descriptor Request M,H&lt;-&gt;E,replyDescriptionThis message is used to request the descriptors of a list of the specified recipes. If multi-block, it must be preceded by theS15,F1/F2 inquire/grant transaction. OBJSPEC is the object specifier of either a recipe namespace of a recipe executor.StructureL,31. 2\. 3\. L,n1. ..n. ExceptionNone

&lt;!-- Page 17 --&gt;

SEMI E5-1104 © SEMI 1982, 2004209 Stream,Function Name (Mnemonic) DirectionS15,F24 Recipe Descriptor Data M,H&lt;-&gt;EDescriptionThis message returns the requested descriptors in the same order as requested.StructureL,21. L,n (n = number of recipes from request)1. L,a (descriptors for recipe #1)1. L,r (r = 0 or 3) (1st component descriptor)1. 2\. 3\. ..a. L,r (r = 0 or 3)1. 2\. 3\. ..n. L,b (descriptors for recipe #n)1. L,r (r = 0 or 3) (1st component descriptor)1. 2\. 3\. ..b. L,r (r = 0 or 3)1. 2\. 3\. 2\. L,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. ExceptionA zero-length recipe descriptor (r = 0) means that the specified recipe does not exist (could not be located). p = 0 if and only ifRMACK indicates no errors.

&lt;!-- Page 18 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 210 Stream,Function Name (Mnemonic) DirectionS15,F25 Recipe Parameter Update Request M,H&lt;-&gt;E,replyDescriptionThis message is used to update the variable parameter definitions for a specific agent. If multi-block, it must be preceded by theS15,F1/F2 inquire/grant transaction.StructureL,41. 2\. 3\. 4\. L,n1. L,31. 2\. 3\. ..n. L,31. 2\. 3\. ExceptionNone Stream,Function Name (Mnemonic) DirectionS15,F26 Recipe Parameter Update Acknowledge M, H&lt;-&gt;EDescriptionThis message indicates the successful performance of the request or otherwise indicates the nature of error(s) that occurred.StructureL,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors.

&lt;!-- Page 19 --&gt;

SEMI E5-1104 © SEMI 1982, 2004211 Stream,Function Name (Mnemonic) DirectionS15,F27 Recipe Download Request M,H-&gt;E,replyDescriptionThis message is used to send a recipe to a recipe executor. If multi-block, it shall be preceded by the S15,F1/S15,F2inquire/grant transaction.StructureL,51. 2\. 3\. 4\. L,m1. L,21. 2\. ..m. L,21. 2\. 5\. ExceptionNone Stream,Function Name (Mnemonic) DirectionS15,F28 Recipe Download Acknowledge M,H&lt;-EDescriptionThis message is used to acknowledge that a recipe has been received by the recipe executor. If the recipe was successfullyverified, the results are returned to the sender. RCPID contains the identifier of a derived object form recipe if created duringverification.StructureL,31. 2\. L,n (n = # of attributes)1. L,21. 2\. ..n. L,21. 2\. 3\. L,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. ExceptionIf item is a zero length item, no derived object form recipe was originated. n = 0 if and only if the recipe was not verified orfailed verification. p = 0 if and only if RMACK indicates no errors.

&lt;!-- Page 20 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 212 Stream,Function Name (Mnemonic) DirectionS15,F29 Recipe Verify Request M,H-&gt;E,replyDescriptionThis message is used to request verification of one or more recipes by a recipe executor. If multi-block, it shall be preceded bythe S15F1,F2 inquire/grant transaction. The operation identifier OPID, used where multiple verification requests may beoutstanding, may be zero if no further verifications will be requested before all current verification requests are completed by therecipe executor. Otherwise, OPID is generated to be unique for the requestor. RESPEC is the object specifier for the recipeexecutor.StructureL,41. 2\. 3\. 4\. L,m1. ..m. ExceptionIf RESPEC is a zero length item, the target is the recipient of the message.

&lt;!-- Page 21 --&gt;

SEMI E5-1104 © SEMI 1982, 2004213 Stream,Function Name (Mnemonic) DirectionS15,F30 Recipe Verify Acknowledge M,H&lt;-EDescriptionThis message is used to acknowledge the request to verify one or more recipes. If a single recipe verification was requested andthe recipe was successfully verified, the results are returned to the sender in this message, and RCPID contains the identifier of aderived object form recipe if created during verification. If multiple recipe verifications were requested, then LINKID shall benon-zero.StructureL,51. 2\. 3\. 4\. L,n (n = # attributes)1. L,21. 2\. ..n. L,21. 2\. 5\. L,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. ExceptionLINKID is zero if and only if a single recipe verification was requested and has been completed. If item 3 is zero length item, noderived object form recipe was originated. n = 0 if and only if the recipe was not verified or failed verification. p = 0 if and onlyif RMACK indicates no errors. Stream,Function Name (Mnemonic) DirectionS15,F31 Recipe Upload Request S,H-&gt;E,replyDescriptionThis message is used to request an execution recipe from a recipe executor.StructureExceptionNone

&lt;!-- Page 22 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 214 Stream,Function Name (Mnemonic) DirectionS15,F32 Recipe Upload Data M,H&lt;-EDescriptionThis message is used to send an execution recipe from a recipe executor.StructureL,41. 2\. L,m (m = # attributes)1. L,21. 2\. ..m. L,21. 2\. 3\. 4\. L,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors.

&lt;!-- Page 23 --&gt;

SEMI E5-1104 © SEMI 1982, 2004215 Stream,Function Name (Mnemonic) DirectionS15,F33 Recipe Select Request M,H-&gt;E,replyDescriptionThis message is used to request the selection of one or more execution recipes. If multi-block, it shall be preceded by theS15,F1/S15,F2 inquire/grant transaction.StructureL,31. 2\. 3\. L,r (r = # selections)1. L,21. (1st recipe selection)2. L,p (p = # parameter settings for 1st recipe)1. L,21. 2\. ..p. L,21. 2\. ..r. L,21. (rth recipe selection)2. L,s (s = # parameter settings for rth recipe)1. L,21. 2\. ..s. L,21. 2\. ExceptionIf the list of parameter settings for a recipe selection is of zero length, then no parameter settings are specified for thecorresponding recipe.

&lt;!-- Page 24 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 216 Stream,Function Name (Mnemonic) DirectionS15,F34 Recipe Select Acknowledge M,H&lt;-EDescriptionThis message is used to acknowledge the request for recipe selection.StructureL,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors. Stream,Function Name (Mnemonic) DirectionS15,F35 Recipe Delete Request M,H-&gt;E,replyDescriptionThis message is used to request that one or more recipes be deleted or deselected. If multi-block, it shall be preceded by theS15,F1/S15,F2 inquire/grant transaction.StructureL,41. 2\. 3\. 4\. L,n (n = # recipes deselected)1. ..n. ExceptionIf n = 0 and recipes are to be deselected (RCPDEL = 1), then all currently-selected recipes are indicated.

&lt;!-- Page 25 --&gt;

SEMI E5-1104 © SEMI 1982, 2004217 Stream,Function Name (Mnemonic) DirectionS15,F36 Recipe Delete Acknowledge M,H&lt;-EDescriptionThis message is used to acknowledge the request that recipes be deleted or deselected.StructureL,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors. Stream,Function Name (Mnemonic) DirectionS15,F37 DRNS Segment Approve Action Request S,H&lt;-&gt;E,replyDescriptionThis message is sent by a distributed recipe namespace manager to an attached distributed recipe namespace segment to approvean action previously requested by the segment. If multi-block, it shall be preceded by the S15,F1/S15,F2 inquire/granttransaction.StructureL,61. 2\. 3\. 4\. 5\. 6\. ExceptionNone

&lt;!-- Page 26 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 218 Stream,Function Name (Mnemonic) DirectionS15,F38 DRNS Segment Approve Action Acknowledge M,H&lt;-&gt;EDescriptionThis message is used to acknowledge or deny the approve action request.StructureL,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors. Stream,Function Name (Mnemonic) DirectionS15,F39 DRNS Recorder Segment Request M,H&lt;-&gt;E,replyDescriptionThis message is used by the distributed recipe namespace manager to request that an attached recorder create or delete a segmentspecifier record. If multi-block, it shall be preceded by the S15,F1/S15,F2 inquire/grant transaction.StructureL,51. 2\. 3\. 4\. 5\. ExceptionNone Stream,Function Name (Mnemonic) DirectionS15,F40 DRNS Recorder Segment Acknowledge M,H&lt;-&gt;EDescriptionThis message is used to acknowledge the request to add or delete a segment specifier record.StructureL,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors.

&lt;!-- Page 27 --&gt;

SEMI E5-1104 © SEMI 1982, 2004219 Stream,Function Name (Mnemonic) DirectionS15,F41 DRNS Recorder Modify Request M,H&lt;-&gt;E,replyDescriptionThis message is used by a distributed recipe namespace manager to a recorder to store or delete a change request record. Ifmulti-block, it shall be preceded by the S15,F1/F2 inquire/grant transaction.StructureL,51. 2\. 3\. 4\. 5\. L,c (c = 1 or 7)1. 2\. 3\. 4\. 5\. 6\. 7\. ExceptionIf RMNSCMD = create, then c = 7, otherwise c = 1. Stream,Function Name (Mnemonic) DirectionS15,F42 DRNS Recorder Modify Acknowledge M,H&lt;-&gt;EDescriptionThis message is used to acknowledge a request to store or delete a change request.StructureL,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors.

&lt;!-- Page 28 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 220 Stream,Function Name (Mnemonic) DirectionS15,F43 DRNS Get Change Request M,H&lt;-&gt;E,replyDescriptionThis message is used to request a distributed recipe namespace recorder or manager to return change requests records for aspecific recipe or assigned to a specific segment. If multi-block, it shall be preceded by the S15,F1/F2 inquire/grant transaction.StructureL,31. 2\. 3\. ExceptionIf TARGETSPEC is omitted, OBJSPEC identifies a recipe. Stream,Function Name (Mnemonic) DirectionS15,F44 DRNS Get Change Request Data M,H&lt;-&gt;EDescriptionThis message is used to return the specified change request records.StructureL,21. L,n n = # change requests1. L,71. 2\. 3\. 4\. 5\. 6\. 7\. ..n. L,71. 2\. 3\. 4\. 5\. 6\. 7\. 2\. L,21. 2\. L,p1. L,21. 2\. ..p. L,21. 2\. ExceptionIf n = 0, no change records were found matching the specification. p = 0 if and only if RMACK indicates no errors.

&lt;!-- Page 29 --&gt;

SEMI E5-1104 © SEMI 1982, 2004221 Stream,Function Name (Mnemonic) DirectionS15,F45 DRNS Manager Segment Change Approval Request M,H&lt;-&gt;E,replyDescriptionThis message is sent to a distributed recipe namespace manager by an attached distributed recipe namespace segment to requestapproval for a specific type of change to a recipe. If multi-block, it shall be preceded by the S15,F1/F2 inquire/grant transaction.StructureL,41. 2\. 3\. 4\. ExceptionRCPNEWID is a zero-length item except where RMCHGTYPE specifies a copy or rename change. Stream,Function Name (Mnemonic) DirectionS15,F46 DRNS Manager Segment Approval Acknowledge S,H&lt;-&gt;EDescriptionThis message is used to acknowledge the request to change a recipe.StructureL,31. 2\. 3\. ExceptionOPID is zero if and only if RMGRNT indicates the change is denied. Stream,Function Name (Mnemonic) DirectionS15,F47 DRNS Manager Rebuild Request M,H&lt;-&gt;E,replyDescriptionThis message requests a distributed recipe namespace manager specified in OBJSPEC to rebuild a distributed recipe namespace.Either a distributed recipe namespace recorder or a list of distributed recipe namespace segment specifiers shall be provided. Ifmulti-block, it shall be preceded by the S15,F1/F2 inquire/grant transaction.StructureL,51. 2\. 3\. 4\. 5\. L,n1. ..n. ExceptionIf RMRECSPEC is a non-zero length item, then n is zero. If RMRECSPEC is a zero length item, then n is non-zero.

&lt;!-- Page 30 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 222 Stream,Function Name (Mnemonic) DirectionS15,F48 DRNS Manager Rebuild Acknowledge M,H&lt;-&gt;EDescriptionThis message is used to acknowledge the request to rebuild a distributed recipe namespace.StructureL,21. 2\. L,P1. L,21. 2\. ..p. L,21. 2\. Exceptionp = 0 if and only if RMACK indicates no errors. Stream,Function Name (Mnemonic) DirectionS15,F49 Large Recipe Download Request (LRDR) S,H-&gt;E,replyDescriptionThis is a request by the host for the equipment to request the download of a recipe via the Stream 13 Data Set Transfer protocol.The Data Set name, DSNAME, is the text string identifier of the recipe, RCPSPEC. The Data Set is subsequently transferred asa Stream with the following internal SECSII structured data: L,41. 2\. 3\. L,m (m = # of attributes)1. L,21. 2\. ..m. L,21. 2\. 4\. StructureL,21. 2\. ExceptionNone

&lt;!-- Page 31 --&gt;

SEMI E5-1104 © SEMI 1982, 2004223 Stream,Function Name (Mnemonic) DirectionS15,F50 Large Recipe Download Acknowledge (LRDA) S,H&lt;-EDescriptionAcknowledge or error. A returned status of accepted means only that the message is understood. Upon completion of thelarge recipe download request (Stream 13 Data Set transfer scenario) the equipment initiates a separate verification transaction(S15,F53/S15,F54) that provides the result of the verification.StructureExceptionNone Stream,Function Name (Mnemonic) DirectionS15,F51 Large Recipe Upload Request (LRUR) S,H-&gt;E,replyDescriptionThis is a request by the host for the equipment to request the host to upload a recipe via the Stream 13 Data Set Transferprotocol. The Data Set name, DSNAME, is the text string identifier of the recipe, RCPSPEC. The Data Set is subsequentlytransferred as a Stream with the following internal SECSII structured data: L,31. 2\. L,m (m = # of attributes)1. L,21. 2\. ..m. L,21. 2\. 3\. StructureExceptionNone Stream,Function Name (Mnemonic) DirectionS15,F52 Large Recipe Upload Acknowledge (LRUA) S,H&lt;-EDescriptionAcknowledge or error. A returned status of accepted means only that the message is understood. The completion of therequest is signaled by an event report.StructureExceptionIt is possible to use the ACKC15 code command will be performed with completion signaled later for this message.

&lt;!-- Page 32 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 224 Stream,Function Name (Mnemonic) DirectionS15,F53 Recipe Verification Send (RVS) M,H&lt;-E,replyDescriptionThis message indicates to the host that a large recipe that was transferred via Stream 13 Data Set Transfer Protocol had beenreceived and checked by the equipment. RCPID contains the identifier of a derived object form recipe if created duringverification. The result of the check is specified by the list of errors. An empty error list indicates no errors were found in therecipe. The equipment is responsible for sending a single copy of this message to the host after any reception of a recipe throughS15,F49.StructureL,31. 2\. 3\. L,21. 2\. L,n (n = number of errors being reported)1. L,21. 2\. .n. L,21. 2\. Exceptionn = 0 if and only if RMACK indicates no error. If RCPSEPC is a zero length item, then the recipe was not verified or failedverification. If RCPID is zero length, then no derived object form recipe was originated. Stream,Function Name (Mnemonic) DirectionS15,F54 Recipe Verification Acknowledge (RVA) S,H-&gt;EDescriptionReply by host to equipment providing response to Recipe Verification Send (RVS).StructureHeader onlyExceptionNone 10.20 Steam 16 Processing Management  This stream provides protocol for a set of messages that enable thecontrol of material processing at equipment and equipment resources. Control is implemented by supporting twojob types; the control job and the process job. A process job is a single unit of work that ensures that the appropriateprocessing is applied to a particular material by a processing resource. The Process Job provides a widely applicablesupervisory control capability for automated processing of material in equipment, irrespective of the particularprocess being used. The Process Job creates a transient link between the three elements of the manufacturingprocess; the first is the material to be processed. The second is the equipment on which the process will occur. Thethird is the process specification, a Process Recipe. When a Process Job has completed, it ceases to exist; its ProcessJob ID is no longer valid. The control job is used to group a set of related process jobs. The group is logicallyrelated from the hosts viewpoint. For instance; if a carrier contains multiple lots, then the process jobs for each lot(in the carrier) could be included in the control job specification. Control jobs also provide mechanisms forspecifying the destination for processed material.

&lt;!-- Page 33 --&gt;

SEMI E5-1104 © SEMI 1982, 2004225 Stream,Function Name (Mnemonic) DirectionS16,F0 Abort Transaction (S16F0) S,H&lt;-&gt;EDescriptionSame form as S1F0Structure Exception Stream,Function Name (Mnemonic) DirectionS16,F1 Multi-block Process Job Data Inquire (PRJI) S,H-&gt;E,replyDescriptionIf any of Processing Management messages are larger than one block, then this transaction must precede that message.StructureL,21. 2\. ExceptionNone Stream,Function Name (Mnemonic) DirectionS16,F2 Multi-block Process Job Data Grant (PRJG) S,H&lt;-EDescriptionMessage to indicate if permission is granted to transmit a multi-block Job Data message.StructureExceptionNone

&lt;!-- Page 34 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 226 Stream,Function Name (Mnemonic) DirectionS16,F3 Process Job Create Request (PRJCR) M,H-&gt;E,replyDescriptionThe purpose of this message is to request material to be processed on a Process Module.StructureL,51. 2\. 3\. L,n1. ..n. 4\. L,31. 2\. 3\. L,m (m = &#123;c,2&#125;)1. L,21. 2\. ..m. L,21. 2\. 5\. ExceptionFor the m length list m = 0 may be allowed value depending on the value of PRRECIPEMETHOD. Stream,Function Name (Mnemonic) DirectionS16,F4 Process Job Create Acknowledge (PRJCA) S,H&lt;-EDescriptionAcknowledge or report error in the creation of a Process Job.StructureL,21. 2\. L,21. 2\. L,n1. L,21. 2\. ...n. L,21. 2\. ExceptionThis list may be zero length, generally the case when ACKA indicates success. When ACKA indicates a create failure, theequipment may supply one or more ERRCODEs.

&lt;!-- Page 35 --&gt;

SEMI E5-1104 © SEMI 1982, 2004227 Stream,Function Name (Mnemonic) DirectionS16,F5 Process Job Command Request (PRJCMDR) M,H-&gt;E,replyDescriptionSend a job control command to a processing job.StructureL,41. 2\. 3\. 4\. L,n1. L,21. 2\. ..n. L,21. 2\. ExceptionThe CPNAME, CPVAL pairs are command parameter identifiers and values; n = 0 is valid for some commands(PRCMDNAME). Stream,Function Name (Mnemonic) DirectionS16,F6 Process Job Command Acknowledge (PRJCMDA) S,H&lt;-EDescriptionThe processing service sends its confirmation for receipt of a command request.StructureL,21. 2\. L,21. 2\. L,n (n = &#123;0,n&#125;)1. L,21. 2\. ..n. L,21. 2\. ExceptionThis list n may be zero length.

&lt;!-- Page 36 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 228 Stream,Function Name (Mnemonic) DirectionS16,F7 Process Job Alert Notify (PRJA) S,H&lt;-E,\[reply\]DescriptionThe processing service may notify the controlling entity of important events. The Process Job Milestones only assume smallnumber of different values. However, the conditions under which a process job meets one of these milestones may vary. Forinstance, a Job may reach Job Complete because the Process was Aborted. By using item 4, the status of the Alert(PRJOBMILESTONE) can be indicated. See the list of Error Codes for Processing in Data Item Dictionary.StructureL,41. 2\. 3\. 4\. L,21. 2\. L,n (n = &#123;0,n&#125;)1. L,21. 2\. ..n. L,21. 2\. ExceptionThe list n may be zero length. Stream,Function Name (Mnemonic) DirectionS16,F8 Process Job Alert Confirm (PRJAC) S,H-&gt;EDescriptionHost confirms receipt of Process Job Alert message from the equipment.StructureHeader onlyExceptionNone

&lt;!-- Page 37 --&gt;

SEMI E5-1104 © SEMI 1982, 2004229 Stream,Function Name (Mnemonic) DirectionS16,F9 Process Job Event Notify (PRJE) S,H&lt;-E,\[reply\]DescriptionSend Processing Job related event to the controlling entity.StructureL,41. 2\. 3\. 4\. L,n1. L,21. 2\. ..n. L,21. 2\. ExceptionThe VID, V pairs are variable data identifiers and values; exceptions n = 0 is valid for some events (PREVENTID). Stream,Function Name (Mnemonic) DirectionS16,F10 Process Job Event Confirm (PRJEC) S,H-&gt;EDescriptionHost confirms receipt of S16,F9 message to equipment.StructureHeader onlyExceptionNone

&lt;!-- Page 38 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 230 Stream,Function Name (Mnemonic) DirectionS16,F11 PRJobCreateEnh M,H-&gt;E,replyDescriptionRequest equipment to create a Process Job with the given PRJOBID. If multi-block, this message must be preceded by theS16,F1/F2 transaction.StructureL,71. 2\. 3\. 4a. L,n \[MF = carrier, n = # of carriers\]1. L,21. 2\. L,j \[j = # of slots, may be implemented as an array\]1. 2\. ..j. ..n. L,21. 2\. L,j \[j = # of slots, may be implemented as an array\]1. 2\. ..j. 4b. L,n \[MF = substrate\]1. ..n. 5\. L,31. 2\. 3\. L,m \[m = # recipe parameters\]1. L,21. 2\. .m. L,21. 2\. 6\. 7\. ExceptionThe list for specifying material (item 4a and 4b) is empty (L,0 instead of L,n), when no material is specified for the process job.The form of data item 4(a or b) depends on the value in MF.

&lt;!-- Page 39 --&gt;

SEMI E5-1104 © SEMI 1982, 2004231 Stream,Function Name (Mnemonic) DirectionS16,F12 PRJobCreateEnh Acknowledge S,H&lt;-EDescriptionThis message acknowledges the request and reports any errors in the creation of a process job.StructureL,21. 2\. L,21. 2\. L,n1. L,21. 2\. ..n. L,21. 2\. ExceptionIf n = 0, no errors exist. Stream,Function Name (Mnemonic) DirectionS16,F13 PRJobDuplicateCreate M,H-&gt;E,replyDescriptionNot used.Structure Exception Stream,Function Name (Mnemonic) DirectionS16,F14 PRJobDuplicateCreate Acknowledge S,H&lt;-EDescriptionNot used.Structure Exception

&lt;!-- Page 40 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 232 Stream,Function Name (Mnemonic) DirectionS16,F15 PRJobMultiCreate M,H-&gt;E,replyDescriptionUse this single message to Create Multiple Process Jobs, each of which may be unique in its association of material to processrecipe. If multi-block, this message must be preceded by the S16,F1/F2 transaction.StructureL,21. 2\. L,p \[p = # of process jobs being created\]1. L,61. 2\. 3a. L,n \[MF = carrier, n = # of carriers\]1. L,21. 2\. L,j \[j = # of slots, may be implemented as an array\]1. 2\. ..j. ..n. L,21. 2\. L,j \[j = # of slots, may be implemented as an array\]1. 2\. ..j. 3b. L,n \[MF = substrate, n = # of MID\]1. ..n. 4\. L,31. 2\. 3\. L,m \[m = # recipe parameters\]1. L,21. 2\. ..m. L,21. 2\. 5\. 6\. ..p. L,61. 2\. 3a. L,n \[MF = carrier, n = # of carriers\]1. L,21. 2\. L,j \[j = # of slots, may be implemented as an array\]1. 2.

&lt;!-- Page 41 --&gt;

SEMI E5-1104 © SEMI 1982, 2004233 ..j. ..n. L,21. 2\. L,j \[j = # of slots, may be implemented as an array\]1. 2\. ..j. 3b. L,n \[MF = substrate, n = # of MID\]1. ..n. 4\. L,31. 2\. 3\. L,m \[m = # recipe parameters\]1. L,21. 2\. ..m. L,21. 2\. 5\. 6\. ExceptionThe list for specifying material (item 3a and 3b) is empty (L,0 instead of L,n), when no material is specified for the process job.The form of data item 3(a or b) depends on the value in MF.

&lt;!-- Page 42 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 234 Stream,Function Name (Mnemonic) DirectionS16,F16 PRJobMultiCreate Acknowledge S,H&lt;-EDescriptionThis message acknowledges the request and reports any errors in the creation of a process job. ERRTEXT contains the identifierof process jobs that were not created.StructureL,21. L,m \[m = # jobs created\]1. ..m. 2\. L,21. 2\. L,n1. L,21. 2\. ..n. L,21. 2\. ExceptionIf n = 0, no errors exist. Stream,Function Name (Mnemonic) DirectionS16,F17 PRJobDequeue S,H-&gt;E,replyDescriptionUsed to remove process jobs from the equipment for jobs that have not begun processing.StructureL,m \[m = # jobs to remove\]1. ..m. ExceptionIf m = 0, then de-queue all.

&lt;!-- Page 43 --&gt;

SEMI E5-1104 © SEMI 1982, 2004235 Stream,Function Name (Mnemonic) DirectionS16,F18 PRJobDequeue Acknowledge S,H&lt;-EDescriptionAcknowledge the request to de-queue and report any errors. ERRTEXT will contain the identifier of any jobs that were not de-queued.StructureL,21. L,m \[m = # jobs removed\]1. ..m. 2\. L,21. 2\. L,n1. L,21. 2\. ..n. L,21. 2\. ExceptionIf n = 0, no errors exist. Stream,Function Name (Mnemonic) DirectionS16,F19 PRGetAllJobs S,H-&gt;EDescriptionRequests the equipment to return a list of process jobs which have not completed. They may be running or waiting to run.StructureHeader onlyExceptionNone Stream,Function Name (Mnemonic) DirectionS16,F20 PRGetAllJobs Send S,H&lt;-EDescriptionReturns the requested list of process jobs.StructureL,m \[m = # jobs in the list\]1. L,21. 2\. ..m. L,21. 2\. ExceptionIf m = 0, then no process jobs are running or waiting to run.

&lt;!-- Page 44 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 236 Stream,Function Name (Mnemonic) DirectionS16,F21 PRGetSpace S,H-&gt;EDescriptionRequests the equipment to return the number of process jobs it has space to create.StructureHeader onlyExceptionNone Stream,Function Name (Mnemonic) DirectionS16,F22 PRGetSpace Send S,H&lt;-EDescriptionSends the host the number of process jobs which can be created.StructureExceptionNone Stream,Function Name (Mnemonic) DirectionS16,F23 PRJobSetRecipeVariable S,H-&gt;EDescriptionReset the value of recipe variable parameters for a specific process job.StructureL,21. 2\. L,m \[m = # recipe variables\]1. L,21. 2\. ..m. L,21. 2\. ExceptionNone

&lt;!-- Page 45 --&gt;

SEMI E5-1104 © SEMI 1982, 2004237 Stream,Function Name (Mnemonic) DirectionS16,F24 PRJobSetRecipeVariable Acknowledge S,H&lt;-EDescriptionIndicate the status of the request to set recipe variables. ERRTEXT will contain the RCPPARNM value for parameters thatcould not be reset.StructureL,21. 2\. L,n1. L,21. 2\. ..n. L,21. 2\. ExceptionIf n = 0, no errors exist. Stream,Function Name (Mnemonic) DirectionS16,F25 PRJobSetStartMethod S,H-&gt;EDescriptionUsed to request to change the start method (USERSTART or AUTO) for one or more process jobs.StructureL,21. L,m \[m = # of jobs\]1. ..m. 2\. ExceptionNone

&lt;!-- Page 46 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 238 Stream,Function Name (Mnemonic) DirectionS16,F26 PRJobSetStartMethod Acknowledge S,H&lt;-EDescriptionAcknowledges request to set job start method and indicates any errors. ERRTEXT will contain the identifiers of any processjobs that did not accept the new process start method.StructureL,21. L,m \[m = # of jobs\]1. ..m. L,21. 2\. L,n1. L,21. 2\. ..n. L,21. 2\. ExceptionNone Stream,Function Name (Mnemonic) DirectionS16,F27 Control Job Command Request S,H-&gt;EDescriptionSend a control job command to a control job.StructureL,31. 2\. 3\. L,21. 2\. Exception3. L,2 IS L,0 for commands that do not need parameters.

&lt;!-- Page 47 --&gt;

SEMI E5-1104 © SEMI 1982, 2004239 Stream,Function Name (Mnemonic) DirectionS16,F28 Control Job Command Acknowledge S,H&lt;-EDescriptionIndicates success or failure of command request to a control job. If applicable ERRTEXT shall contain information on specificcommand parameter names or values that caused the error.StructureL,21. 2\. L,21. 2\. Exception2. L,2 IS L,0 if no errors. Stream,Function Name (Mnemonic) DirectionS16,F29 PRSetMtrlOrder (PRJSMO) S,H-&gt;E,replyDescriptionThis message requests the equipments Processing Management Service to use a specific strategy for the order in whichmaterials are processed.StructureExceptionNone Stream,Function Name (Mnemonic) DirectionS16,F30 PRSetMtrlOrder Acknowledge (PRJSMOA) S,H&lt;-EDescriptionThis message acknowledges the request for change to the material process strategy by reporting back the value requested, ifcorrect.StructureExceptionNone 10.21 Stream 17 Equipment Control and Diagnostics  This stream is a continuation of Stream 2. Stream,Function Name (Mnemonic) DirectionS17,F0 Abort Transaction (S17F0) S,H&lt;-&gt;EDescriptionSame form as S1F0Structure Exception

&lt;!-- Page 48 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 240 Stream,Function Name (Mnemonic) DirectionS17,F1 Data Report Create Request (DRC) M,H-&gt;E,replyDescriptionCreate a Data Report definition. This function allows the referencing of a Data Source for the items (variables or attributes)specified in the data report.StructureL,41. 2\. 3\. 4\. L,n1. 2\. ...n. ExceptionDATAID is a zero length item when the request can be sent in a single block. If RPTID is a zero length item, then the equipmentshall return a value in RPTID by which the host can then reference the report efinition. If RPTID has a value, then theequipment shall retain this value by which the host can then reference the report definition. Stream,Function Name (Mnemonic) DirectionS17,F2 Data Report Create Acknowledge (DRCA) S,H&lt;-EDescriptionEquipment confirms creation of a Data Report and returns RPTID.StructureL,21. 2\. ExceptionIf ERRCODE is a zero length item, then no error occurred. Stream,Function Name (Mnemonic) DirectionS17,F3 Data Report Delete Request (DRD) S,H-&gt;E,replyDescriptionDelete one or more data reports. This shall cause those reports to be unlinked from any Event Reports to which they werelinked. This shall cause the report to be excluded from any Trace Reports for in which it had originally been included.StructureL,n1. 2\. ..n. ExceptionIf this message is sent with a zero length list, then all reports shall be deleted.

&lt;!-- Page 49 --&gt;

SEMI E5-1104 © SEMI 1982, 2004241 Stream,Function Name (Mnemonic) DirectionS17,F4 Data Report Delete Acknowledge (DRDA) S,H&lt;-EDescriptionEquipment confirms or indicates any errors on the request to delete Data Reports. All Data Reports which could be deleted shallbe listed in the response and the associated error code shall be included in the list.StructureL,21. 2\. L,m1. L,31. 2\. 3\. ..m. L,31. 2\. 3\. ExceptionIf ACKA is TRUE, then no errors were encountered, meaning all report requests were completed successfully and a zero-lengthlist (m = 0) shall be sent.If some reports could not be deleted, then their RPTIDs shall be given in a space separated list in ERRTEXT. Stream,Function Name (Mnemonic) DirectionS17,F5 Trace Create Request (TRC) M,H-&gt;E,replyDescriptionEstablish a Trace Report definition.StructureL,61. 2\. 3\. 4\. L,n1. 2\. ..n. 5\. 6\. L,m (m = &#123;0,8&#125;)1. 2\. 3\. (Defines source for start Event)4. (Defines ID of the start Event)5. (Defines source for stop Event)6. (Defines ID of the stop Event)7. 8\. ExceptionThe list m can be zero-length, or it can contain all eight data items. Since specifying values for each item is optional, each of theeight items can be zero-length. If the item is zero-length, the format of the item shall be the same format used in other instancesof the S17,F5 message where the value is not zero-length.

&lt;!-- Page 50 --&gt;

SEMI E5-1104 © SEMI 1982, 2004 242 Stream,Function Name (Mnemonic) DirectionS17,F6 Trace Create Acknowledge (TRCA) S,H&lt;-EDescriptionEquipment confirms creation of an Event Report and returns a TRID.StructureL,21. 2\. ExceptionIf ERRCODE is a zero length item, then no error occurred. Stream,Function Name (Mnemonic) DirectionS17,F7 Trace Delete Request (TRD) S,H-&gt;E,replyDescriptionThe host requests to delete one or more Trace Reports.StructureL,n1. 2\. ..n. ExceptionNone Stream,Function Name (Mnemonic) DirectionS17,F8 Trace Delete Acknowledge (TRDA) S,H&lt;-EDescriptionThis message is required to inform the host when a Trace Report could not be deleted. This message does not need to be sent toconfirm the successful deletion of a Trace Report. If the report is sent for a successfully deleted Trace Report, then theERRCODE item length shall be set to zero.StructureL,21. 2\. L,m1. L,31. 2\. 3\. ..m. L,31. 2\. 3\. ExceptionIf ACKA is TRUE, then no errors were encountered, meaning all report requests were completed successfully and a zero-lengthlist (m = 0) shall be sent.If some reports could not be deleted, then their TRIDs shall be provided in a space separated list in ERRTEXT.

</PdfSplitView>
