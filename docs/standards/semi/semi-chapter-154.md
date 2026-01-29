---
title: "T6-0697 - © SEMI 1997, 2004..."
description: "SEMI标准文档"
sidebar_label: "T6-0697 - © SEMI 1997, 2004..."
sidebar_position: 1540
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-154.pdf'
  chapter: 154
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/154.pdf"
  pdfSize="0.57MB"
  title="T6-0697 - © SEMI 1997, 2004..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI T6-0697 © SEMI 1997, 2004 4
APPENDIX 1
EDI BUSINESS MODEL
NOTICE:  The material in this appendix is an official part of SEMI T6 and was approved by full letter ballot procedures.
A1-1  Any implementation model is agreed upon by trading partners. It is the intent of this
document to make interpretation of the models used for transmitting electronic messages more
consistent, so that implementations are based upon common practices.



A2-1  Attributes of EDI Messages
A2-1.1  Certificate of Analysis (CA) — One message containing measurement or statistical  data for one shipment,
from one supplier site to one user site, of one user part number against one user purchase order shipped. Multiple lot
numbers may be included in the shipment.
A2-1.2  Test Results (RT) — Used to designate data provided by special request (e.g., engineering, qualifications).
This message contains specific measurement or statistical data for one request, from one trading partner to another
trading partner, of one part number against one purchase order. Multiple lot numbers may be included.
A2-1.3  Statistical  Results  (SR) — One  message  containing  measurement  or  statistical  data  for  defined  parameters
for a period of time from one trading partner to another.


SEMI T6-0697 © SEMI 1997, 2004 5
APPENDIX 2
EDI TRANSMISSION FLOWCHART
NOTICE:  The material in this appendix is an official part of SEMI T6 and was approved by full letter ballot procedures.





SEMI T6-0697 © SEMI 1997, 2004 6
APPENDIX 3
NEW EDI STATISTICS (DEFINITIONS)
NOTICE:  The material in this appendix is an official part of SEMI T6 and was approved by full letter ballot procedures.
A3-1  Additions to ANSI’s Statistical Codes to be Included within this Standard
A3-1.1  These new statistical codes are added to a predefined ANSI list of summary statistics found in Appendix 3
under the transaction segment STA. The codes are HS, HW, HC, GM, GS, PK, EC, OC, and PE and are submitted
to  ANSI  for  approval.  The  codes  can  be  used  in  an  EDI  message  as  long  as  the  trading  partners  agree  to  include
them  as  part  of  their  transmissions.  Once  the  codes  are  approved,  the  ASC  X12  convention  will  be  updated  to
automatically accept these codes as standards.
A3-1.2  Histogram Information
A3-1.2.1  HS = Histogram Start (Left side of first class or bar)
A3-1.2.2  HW = Histogram Class Width (Width of class or bar)
A3-1.2.3  HC = Histogram Class Count (Count of classes or bars)
A3-1.3  Process Capability Information
A3-1.3.1  GM = Geometric Mean (GMEAN). For the lognormal distribution, it’s calculated as:
TMEAN = The mean of the natural log of the raw data values
GMEAN = EXP(TMEAN+ (TSIGMA**2)/2)
A3-1.3.2  GS = Geometric Sigma (GSIGMA). For the lognormal distribution, it’s calculated as:
TSIGMA = The sigma of the natural log of the raw data values
GSIGMA = SQRT((EXP((2*TMEAN)+(TSIGMA**2)))**EXP((TSIGMA**2))-1))
A3-1.3.3  PK  =  The  peak  of  the  fitted  probability  distribution  function.  It’s  calculated  as  the  maximum  Y
value of the probability distribution function after it is fitted to the process histogram.
A3-1.3.4  EC = The equivalent normal Cpk (ECPK). For the lognormal distribution, it’s calculated as:
ECPK     =     ((LN(USL))-LN((GMEAN**2/(SQRT(GMEAN**2+GSIGMA**2))))/     (3*SQRT(LN
(GMEAN**2)/ GMEAN**2)))
A3-1.4  Outlier Information
A3-1.4.1  OC = Outlier Count. It may be calculated as A minus B, where A = the count beyond a chosen
sigma  point  using  the  histogram,  and  B  =  the  count  beyond  the  chosen  sigma  point  using  the  statistical
distribution.
A3-1.5  Percentile Information
A3-1.5.1  PE = Percentile. Like the HG, it can be repeated to give different elements. The user and supplier
need to agree on the order for a particular application.


SEMI T6-0697 © SEMI 1997, 2004 7
APPENDIX 4
EDI TRANSMISSION COMPONENTS (863 REPORT OF TEST
RESULTS)
NOTICE:  The material in this appendix is an official part of SEMI T6 and was approved by full letter ballot procedures.
A4-1  Introduction
A4-1.1  The  purpose  of  this  section  is  to  provide  the
necessary  information  to  enable  trading  partners  to  use
the  ASC  X12  standards  for  the  exchange  of  electronic
business documents within the electronics industry.
A4-1.2  The  transmission,  in  the  ASC  X12  format,  is
comprised of an outer envelope (transmission envelope)
which  identifies  the  sender  and  receiver.  Within  the
transmission   envelope   are   one   or   more   functional
groups.
A4-1.3  The functional groups are analogous to batches
of  like  documents  (i.e.,  certificate  of  analysis,  test
results,   statistical   results).   Each   functional   group
contains   one   or   more   transaction   sets   (electronic
documents).    Each    transaction    set    is    an    ordered
collection  of  segments.  Each  segment  is  an  ordered
collection of data elements.
A4-1.4  Each segment has been assigned a two or three
charac-ter identifier.
A4-1.5  This  identifier  marks  the  beginning  of  each
segment. Each element within the segment is separated
by   a   data   element   separator   character.   Electronic
Industry Data Exchange (EIDX) recommends the use of
the asterisk (*) character as a data element separator. A
segment terminator character is used to mark the end of
a segment.
A4-2  Format
A4-2.1    The  ASC  X12  segment  hierarchy  lists  all
segments,   in   order,   available   from   the   ASC   X12
standard. The segment ID’s that are shaded indicate the
segments  utilized  by  EIDX.  Following  the  ASC  X12
segment  hierarchy  is  a  detailed  description  of  each
segment in the order that they appear in the transaction
set.
A4-2.2  Each segment is listed with the segment ID and
name,  level  (header,  detail,  or  summary),  loop  (if  the
segment is contained within a loop), loop repeat (for the
first   segment   in   the   loop),   requirement   within   the
transaction  set,  maximum  use,  purpose  (as  defined  by
ASC   X12),   ASC   X12   syntax   notes,   ASC   X12
comments for segment usage, and notes that explain the
EDIX    convention    for    this    segment    within    the
transaction set. It is important to note all shaded text is
either   an   EDIX   convention   or   EDIX   terminology.
Shaded  coded  lists  refer  to  recommendations  culled
from  the  entire  ASC  X12  data  element  code  list.  The
unshaded areas contain definitions and comments from
the ASC X12 standard.
A4-2.3    The  data  element  summary  lists  each  data
element,   in   order,   for   the   segment;   for   each   data
element    there    is    one    line    to    identify    reference
designator,  data  element  number,  data  element  name,
and attributes.
A4-2.4    Below  the  one  line  summary  are  usage  notes
and ac-tual values identified for use.
A4-2.5    Reference  Designator  —  This  is  the  segment
identifier   with   the   data   element   sequence   number
within the segment.
A4-2.6    Data  Element  Number  —  This  is  the  number
assigned to the data element by ASC X12. This number
may  be  used  for  direct  refer-ence  into  the  ASC  X12
Data Dictionary.
A4-2.7    Data  Element  Name  —  This  is  the  name
assigned  to  the  data  element  by  ASC  X12,  in  the  ASC
X12 Data Dictionary.
A4-2.8  Attributes — Each data element has three ANSI
attributes:     element     usage,     element     type,     and
Minimum/Maximum length.
A4-2.9  Element Usage
M   Mandatory   Designer
This  is  the  segment  identifier  with  the  data
element sequence number within the segment.
O    Optional
The  data  element  may  be  used  if  the  segment
is used.
X    Conditional
The  data  element  may  be  used  only  if  other
elements are used within the segment.
The particular condition/relation will be stated
in the Data Element Summary for the segment
when used.


SEMI T6-0697 © SEMI 1997, 2004 8
A4-2.10  Element Type
ID   Identifier
Values for the identifier-type data elements are
taken  from  a  predefined  list  in  the  ASC  X12
data element dictionary.
AN  String
Values  for  the  string-type  data  elements  are  a
sequence of any printable characters.
DT  Date
Values  for  a  date-type  data  element  are  in  the
format YYMMDD.
TM Time
Values  for  a  time-type  data  element  are  in  the
format HHMM expressed in a 24-hour clock.
Nx  Numeric
Values  for  a  numeric  data  element  are  in  an
implied  decimal  format,  where  "X"  indicates
the   number   of   places   to   the   right   of   the
decimal point.
i.e.,
N0 is a whole number (999.)
N2 is 999.99
R    Decimal
This  is  a  numeric  field  in  character  format,
with  a  decimal  point  included.  It  is  treated  as
alpha/numeric.  The  decimal  point  is  not  sent
for whole numbers.
e.g.,
to  send  the  number  0128.734,  the  field  would
contain "128.734".
to  send  the  number  0789.00,  the  field  would
contain "789".
A4-2.11  Minimum/Maximum
This is the minimum and maximum length the field can
be.
e.g.,
02/02 - fixed length of 2 characters.
04/09 - Minimum length of 4 characters and maximum
length of 9 characters.




SEMI T6-0697 © SEMI 1997, 2004 9
863 Report of Test Results - Overview
Heading:
This  section  of  information  appears  one  time  at  the  beginning  of  each  transaction.  The  information  is
targeted at the indentification of "Who is sending What to Whom, Where, and When."
SEMI USE:  Pos. No. Seg. ID Name Req. Des.    Max. Use     Loop Repeat
M 010              ST              Transaction              Set              Header              M                 1
M 020 BTR Beginning Segment for Test Results M 1
X 040 REF Reference Numbers (Order & Material Ident.) O 12
O 060 PID Product/Item Description (Commodity ID) O 200

LOOP ID- NI   >1
M 080 N1 Name (Buyer & Seller Company) O 1
O 090 N2 Additional Name Information O 2
O 100              N3              Address              Information              O                 2
O 110 N4 Geographic Location (Buyer & Seller Site) O 1
LOOP ID - PER   >1
O 130            PER            Administrative            Communications Contact O 1

Detail:  This  section  of  information  appears  as  often  as  necessary  during  the  transaction.  The  information  deals
directly with the data specific to the product or process of the supplier.
SEMI USE: Pos. No.  Seg. ID Name Req. Des.  Max. Use    Loop Repeat
LOOP ID - LIN   >1
M 010 LIN    Item Identification (Primary Data Loop) O 1
O 034        QTY        Quantity        O        10
X 040       DTM       Date/Time       Reference       O       10
LOOP ID - CID   >1
M 060        CID        Characteristic/Class        ID        O        1
O 100        SPS        Sampling        Parameters for Summary Statistics O >1
O 120       DTM       Date/Time       Reference       O       10
LOOP ID - MEA   >1
X 150       MEA       Measurements       O       1
O 170        REF        Reference        Numbers        O        10
LOOP ID - STA   >1
X 180        STA        Statistics        O        1
O 195        REF        Reference        Numbers        O        10
LOOP ID - TSP   >1
M 210 TSP    Test Period or Interval O 1
LOOP ID - LM   >1
M 242 LM    Code Source Information O 1
M 244         LQ         Industry         Code         M         >1

Summary: Transmission segments to mark the end of the transaction set.
SEMI USE: Pos. No.  Seg. ID Name Req. Des. Max. Use Loop Repeat
O             005             CTT             Transaction             Totals             O             1
M            010            SE            Transaction            Set            Trailer            M            1


SEMI T6-0697 © SEMI 1997, 2004 10
Transmission Segments and Data Elements:

Segment: ST Transaction Set Header
Level:    Heading
Loop:    _______
Usage:    Mandatory
Max Use:    1
Purpose:    To indicate the start of a transaction set and to assign a control number.
Semantic Notes: 1 The transaction set identifier (ST01) used by the translation routines of the interchange partners
to select the appropriate transaction set definition (e.g., 810 selects the invoice transaction set).

Data Element Summary
SEMI USE: Ref. Des. Data Element Name Attributes
M ST01 143 Transaction Set Identifier Code M ID 3/3
Code uniquely identifying a Transaction Set.
863X12.41 Report of Test Results
M ST02 329 Transaction Set Control Number M AN 4/9
Identifying control number that must be unique within the transaction set functional
group assigned by the originator for a transaction set.


SEMI T6-0697 © SEMI 1997, 2004 11

Segment: BTR Beginning Segment for Test Results
Level:    Heading
Loop:    _______
Usage:    Mandatory
Max Use:    1
Purpose:    To indicate the beginning of a test results transaction set.
Semantic Notes: 1 If BTR01 equals 01, 02, 03, 04, 05, 18, or 19, then BTR06 is required to identify the original test
report reference number transmitted.
2 BTR02 is the date that this transaction set was created by the sending party.
3 BTR03 is the time that this transaction set was created by the sending party.
4 BTR05 specifies test results report reference number created by the sending party.
Comments: This segment is used to identify date and purpose of the data transmission.

Data Element Summary
SEMI USE:     Ref. Des.    Data Element Name Attributes
M BTR01 353 Transaction Set Purpose Code M ID 2/2
Code identifying purpose of transaction set.
00Original
18Reissue
M              BTR02              373              Date              M              DT              6/6
Date                      (YYMMDD).

Seller generated date representing the data collection date or other mutually agreeable
date. Not associated with the lot/date code of the material.
O              BTR03              337              Time                O        TM        4/8
Time expressed in 24-hour clock time as follows: HHMM or HHMMSS, or
HHMMSSD or HHMMSSDD, where H = hours (00-23), M = minutes (00-59), S =
integer seconds (00-59) and DD = decimal seconds are expressed as follows: D = tenths
(0-9) and DD = hundredths (00-99).

Seller generated time representing the data collection time or other mutually agreeable
time. Not associated with the lot/date code of the material.
M BTR04 755 Report Type Code  O ID 2/2
Code indicating the title or contents of a document, report, or supporting item.
CA  Certificate of Analysis
RT  Report of Tests and Analysis Report
SR                                            Statistical                      Report
X              BTR05              127              Reference              Number              O              AN              1/30
Reference number or identification number as defined for a particular Transaction Set,
or as specified by the Reference Number Qualifier.

Seller's unique shipment identification code visible on the shipping container and/or
shipping paperwork that identifies the link to the data in a single Transaction Set.
(Examples: Invoice No., Shipper No., Work Order No., etc.)NOTE: In the case of a re-
transmittal (Purpose Code 18, reissue) of previous data due to correction or loss of data,
this data element repeats the information from the prior transmission to be replaced.
O BRT06 127 Reference Number  O AN 1/30
Reference number of identification number as defined for a particular Transaction Set,
or as specified by the Reference Number Qualifier.



SEMI T6-0697 © SEMI 1997, 2004 12

Segment: REF Reference Numbers (Order & Material Ident.)
Level:    Heading
Loop:    _______
Usage:    Optional
Max Use:    12
Purpose:    To specify identifying numbers.
Syntax Notes: 1 At least one of REF02 or REF03 is required.
Comments: 1 It is recommended for use and for report types CA and RT.
2 BTR03 is the time that this transaction set was created by the sending party.
3 It is not repeated once for each REF01 Qualifier determined by mutual consent between the Buyer
and Seller as required.


Data Element Summary
SEMI USE:     Ref. Des.    Data Element Name Attributes
M REF01 128 Reference Number Qualifier M ID 2/2
Code qualifying the Reference Number.
BVPurchase Order Line Item Identifier (Buyer)
MFManufacturer's Part Number (Seller)
PMPart                     Number                     (Buyer)
POPurchase                     Order                     Number                     (Buyer)
PPPurchase                     Order Revision Number (Buyer)
RERelease                     Number                     (Buyer)
S3Specification                     Number                     (Buyer)
SZSpecification                     Revision                     (Buyer)
YBRevision                     Number                     (Buyer)
ZZMutually                     Defined
X              REF02              127              Reference              Number              X              AN              1/30
Reference number or identification number as defined for a particular Transaction Set,
or as specified by the Reference Number Qualifier.
O              REF03              352              Description              X              AN              1/80
A free-form description to clarify the related data elements and their content.


SEMI T6-0697 © SEMI 1997, 2004 13

Segment: PID Product/Item Description (Commodity ID)
Level:    Heading
Loop:    _______
Usage:    Optional
Max Use:    200
Purpose:    To describe a product or process in coded or free-form format.
Syntax Notes: 1 If PID04 is present, then PID03 is required.
2 At least one of PID04 or PID05 is required.
3 If PID07 is present, then PID03 is required.
Semantic Notes: 1 Use PID03 to indicate the organization that publishes the code list being referred to.
2 PID04 should be used for industry-specific product description codes.
Comments: 1 If PID01 = "F", then PID05 is used. If PID01 = "S", then PID04 is used. If PID01 = "X", then
both PID04 and PID05 are used.
2 PID07 specifies the individual code list of the agency specified in PID03.


Data Element Summary
SEMI USE:     Ref. Des.    Data Element Name Attributes
M PID01 349 Item Description Type M ID 1/1
Code indicating the format of a description.
FFree-form

Not recommended. To be used prior to adoption of SEMI codes into
X.12.41 Standards.
SStructured (From Industry Code List)

Preferred use. The PID03 and PID04 codes shall be registered with
the appropriate organization.
XSemi-structured (Code and Text)

Not recommended.
M              PID03              559              Agency              Qualifier Code X ID 2/2
Code identifying the agency assigning the code values.
SMSemiconductor                      Equipment                      and Materials International

SEMI EDI Task Force shall register this code with ANSI.
ZZMutually                      Defined

To be used prior to adoption of SEMI codes into X.12.41 Std.
M PID04 751 Product Description Code X AN 1/12
A code from an industry code list which provides specific data about a product
characteristic.

For silicon wafers see SEMI Standard M18. Codes for other semiconductor products
can be used as they are documented.
O               PID05               352               Description               X               AN               1/80
A free-form description to clarify the related data elements and their content.
O               PID07               822               Source               Subqualifier               O               AN               1/15
A reference that indicates the table or text maintained by the Source Qualifier.

Identifies the SEMI Standard and applicable Table or Figure reference that defines the
meaning of the codes used in PID04.



SEMI T6-0697 © SEMI 1997, 2004 14

Segment: N1 Name (Buyer & Seller Company Ident.)
Level:    Heading
Loop:    N1
Usage:    Optional
Max Use:    1
Purpose:    To identify a party by type of organization, name, and code.
Syntax Notes: 1 At least one of N102 or N103 is required.
2 If either N103 or N104 is present, then the other is required.
Comments: This N1 loop requires a minimum of two passes, one for Buyer (receiver) identification, and one for
Seller (submitter) identification.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M N101 98 Entity Identifier Code M ID 2/2
Code identifying an organizational entity, a physical location, or an individual.
1XLaboratory
28Subcontractor
BYBuying                      Party                      (Purchaser)
PTParty to Receive Test Report [Buyer to the attention of]
SESelling                      Party
YEThird                      Party
X                N102                93                Name                X                AN                1/35
Free-form                      name.

Use of N103 and N104 in lieu of this Element is recommended.
X                N103                66                Identification                Code Qualifier X ID 1/2
Code designating the system/method of code structure used for Identification Code
(67).

Preferred use is N103/N104 combination.
SMSEMI
ZZMutually                      Defined
X                N104                67                Identification                Code                X                AN                2/20
Code identifying a party or other code.

Code from SEMI Standards Buyer/Seller code list (SEMI AUX1).



SEMI T6-0697 © SEMI 1997, 2004 15

Segment: N2 Additional Name Information
Level:    Heading
Loop:    N1
Usage:    Optional
Max Use:    2
Purpose:    To specify additional names or those longer than 35 characters in length.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M                N201                93                Name                M                AN                1/35
Free-form                      name.
O                N202                93                Name                O                AN                1/35
Free-form                      name.




Segment: N3 Address Information
Level:    Heading
Loop:    N1
Usage:    Optional
Max Use:    2
Purpose:    To specify the location of the named party.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M                N301                166                Address                Information                M                AN                1/35
Address                      information
O                N302                166                Address                Information                O                AN                1/35
Address                      information



SEMI T6-0697 © SEMI 1997, 2004 16

Segment: N4 Geographic Location (Buyer & Seller Site Ident.)
Level:    Heading
Loop:    N1
Usage:    Optional
Max Use:    1
Purpose:    To specify the geographic place of the named party.
Syntax Notes: 1 If N406 is present, then N405 is required.
Comments: 1 A combination of either N401 through N404 or (N405 and N406) may be adequate to specify a
location.
2 N402 is required only if city name (N401) is in the USA or Canada.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
O                N401                19                City                Name                O                AN                2/30
Free-form text for city name.
O N402 156 State or Province Code O ID 2/2
Code (Standard State/Province) as defined by appropriate government agency.
O N403 116 Postal Code   O ID 3/11
Code defining international postal zone code excluding punctuation and blanks (zip
code for United States).
O                N404                26                Country                Code                O                ID                2/3
Code identifying the country.
X                N405                309                Location                Qualifier                X                ID                1/2
Code identifying type of location.

Preferred use if N405/406 combination.Additional codes are available for
selection.

FA                      Factory
O                N406                310                Location                Identifier                O                AN                1/30
Code which identifies a specific location.

Mutually defined identification strings shall be determined by trading partners and shall
remain constant.



SEMI T6-0697 © SEMI 1997, 2004 17

Segment: PER Administrative Communications Contact
Level:    Heading
Loop:    PER
Usage:    Optional
Max Use:    1
Purpose:    To identify a person or office to whom administrative communications should be directed.
Syntax Notes: 1 If either PER03 or PER04 is present, then the other is required.
2 If either PER05 or PER06 is present, then the other is required.
3 If either PER07 or PER08 is present, then the other is required.
Comments: Used to notify of change in EDI contact information at Seller, or to specify special attention name at
Buyer, as required. Infrequent use anticipated.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M PER01 366 Contact Function Code M ID 2/2
Code identifying the major duty or responsibility of the person or group named.
DC                      Delivery                      Contact

[A Buyer attention flag.]
EA                      EDI                      Coordinator

[Seller’s EDI primary contact information.]
EG                      Engineering

[A Buyer attention flag.]
QA Quality Assurance Contact

[A Buyer attention flag.]
SU                      Supplier                      Contact

[A Seller attention flag.]
O              PER02              93              Name              O              AN              1/35
Free-form                      name.
X               PER03               365               Communication               Number Qualifier X ID 2/2
Code identifying the type of communication number.
X               PER04               364               Communication               Number               X               AN               1/80
Complete communications number including country or area code when applicable.
X               PER05               365               Communication               Number Qualifier X ID 2/2
Code Identifying the type of communication number.
Refer to 003050 Data Element Dictionary for acceptable code values.
X               PER06               364               Communication               Number               X               AN               1/80
Complete communications number including country or area code when applicable.
X               PER07               365               Communication               Number Qualifier X ID 2/2
Code identifying the type of communication number.
Refer to 003050 Data Element Dictionary for acceptable code values.
X               PER08               364               Communication               Number               X               AN               1/80
Complete communications number including country or area code when applicable.
O PER09 443 Contact Inquiry Reference O AN 1/20
Additional reference number or description to clarify a contact number.


SEMI T6-0697 © SEMI 1997, 2004 18

Segment: LIN Item Identification (Primary Data Loop)
Level:    Detail
Loop:    LIN
Usage:    Optional
Max Use:    1
Purpose:    To specify basic item identification data.
Syntax Notes: 1 If either LIN04 or LIN05 is present, then the other is required.
Semantic Notes: 1 LIN01 is the line item identification.
Comments: 1 See the Data Dictionary for a complete list of ID's.
2 LIN02 through LIN31 provide for fifteen (15) different product/service ID's for each item. For
example: Case, Color, Drawing No., UPC No., ISBN No., Model No., SKU.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M               LIN01               350               Assigned               Identification                                                                     O                                                                     AN                                                                     1/11
Alphanumeric characters assigned for differentiation within a transaction set.

Use to clarify the type of information in Table 2.
LOT                      Lot                      Dependent                      Data

Report Type Codes CA and RT: Indicates that the LIN loop contains
specific lot based data.
PE
R Lot Independent Periodic Data

Report Type Code SR: Indicates that the LIN loop contains lot
independent data.
M               LIN02               235               Product/Service               ID Qualifier M ID 2/2
Code identifying the type/source of the descriptive number used in Product/Service ID
(234).
KL Item Management Code

Mandatory use for Assigned ID of PER: Primary scope identification number
for data, assigned by Seller for the data set included. This Product/Service ID
may identify periodic data sets by a single code, permanently defined by mutual
consent of trading partners.
LT                      Lot                      Identifier

Mandatory use for Assigned ID of LOT: Primary lot identification number for
material. Example: Polished wafer final acceptance test lot number.
M               LIN03               234               Product/Service               ID               M               AN               1/40
Identifying number for a product or service.
X               LIN04               235               Product/Service               ID Qualifier X ID 2/2
Code identifying the type/source of the descriptive number used in Product/Service ID
(234).

NOTE: The codes identified below are examples that may be used for each
Product/Service ID Qualifier in this segment. Up to 14 Element pairs
(LIN04/LIN05...through LIN30/LIN31) may be used.
FE                      Feature

Optional use for Assigned ID of PER: Secondary scope identification number
for data assigned by mutual consent for the data set included. Example: Back
Surface Finish No. 2 - Poly, LTO, etc.


SEMI T6-0697 © SEMI 1997, 2004 19
F1                      Finish                      Number
Optional use for Assigned ID of PER: Secondary scope identification number
for data, assigned by mutual consent for the data set included. Example: Back
Surface Finish No. 1 - Poly, LTO, etc.
GC                      Grade                      Code

Optional use for Assigned ID of PER: Secondary scope identification number
for data, assigned by mutual consent for the data set included. Example: Wafer
Grade - Prime (Product), Test/Monitor (Non-product), SIMOX, BESOI,
Silicon, Gallium Arsenide, etc.
KM                  Shelf-Life                  Code
KN Shelf-Life Action Code
LT                      Lot                      Number

Optional use for Assigned ID of LOT: Subordinate lot identification number for
material. Example: EPI lot number.
MB Measurement Type Code

Optional use for Assigned ID of PER: Secondary scope identification number
for data, assigned by mutual consent for the data set included. Example: Data is
for before or after depositions.
P
R                  Process                  Number

Optional use for Assigned ID of LOT: Additional processing lot identification
number for material if required.
PW                      Part                      Drawing

Optional use for Assigned ID of PER: Secondary scope identification number
for data, assigned by mutual consent for the data set included. Example:
Specific part number.
RS                      Set                      Number

Optional use for Assigned ID of LOT: Superior lot identification number for
data, assigned by mutual consent for the data set included. Example: Crystal or
boule identification, etc.
SF                      Surface                      Finish

Optional use for Assigned ID of PER: Secondary scope identification number
for data, assigned by mutual consent for the data set included. Example: Front
Surface Finish - Etch, Polish, EPI, etc.
TP Product Type Code

Optional use for Assigned ID of PER: Secondary scope identification number
for data, assigned by mutual consent for the data set included. Example:
Diameter - 100 mm, 125 mm, 150 mm, 200 mm, 300 mm, etc.
LIN05                234                Product/Service                ID                X                AN                1/40
Identifying number for a product or service.

The value identified by the preceding Product/Service ID Qualifier.



SEMI T6-0697 © SEMI 1997, 2004 20

Segment: QTY Quantity
Level:    Detail
Loop:    LIN
Usage:    Optional
Max Use:    10
Purpose:    To specify quantity information.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M              QTY01              673              Quantity              Qualifier              M              ID              2/2
Code specifying the type of quantity.
39                      Shipped                      Quantity
M              QTY02              380              Quantity              M              R              1/15
Numeric value of quantity.

Quantity of material represented by the most recent LIN Segment definition above; i.e.,
the material quantity represented by the data below. Not the combined total quantity of
the shipment, unless it is a single lot.
O QTY03 355 Unit or Basis for Measurement Code O ID 2/2
Code specifying the units in which a value is being expressed, or manner in which a
measurement has been taken.

Other codes may be used for other commodities/materials.
EA                      Each



SEMI T6-0697 © SEMI 1997, 2004 21

Segment: DTM Date/Time Reference
Level:    Detail
Loop:    LIN
Usage:    Optional
Max Use:    10
Purpose:    To specify pertinent dates and times.
Syntax Notes: 1 At lease one of DTM02, DTM03, or DTM06 is required.
2 If either DTM06 or DTM07 is present, then the other is required.
Comments: 1 Report Type Code SR (LIN01 Assigned ID = "PER"): Defines date range covered by summary
data.
2 Report Type Codes CA and RT (LIN01 Assigned ID = "LOT"): May be used to specify a ship date
or other date mutually agreed upon by Buyer and Seller.
3 If date range for all data entities is identical, the DTM Segment at Position Number 040 may be
used to identify a single date.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M             DTM01             374             Date/Time             Qualifier             M             ID             3/3
Code specifying type of date or time, or both date and time.
009                      Process
011                      Shipped
054                      Sellers                      Local
119 Test Performed [Period Range]
157 Test Period Start
158 Test Period Ending
X              DTM02              373              Date              X              DT              6/6
Date                      (YYMMDD).

Used for start/stop combination.
O              DTM03              337              Time              X              TM              4/4
Time expressed in 24-hour clock time (HHMM).
O              DTM05              624              Century              O              N0              2/2
The first two characters in the designation of the year (CCYY).
X DTM06 1250 Date Time Period Format Qualifier X ID 2/3
Code indicating the date format, time format, or date and time format.
RD6 Range of Dates Expressed in Format YYMMDD-YYMMDD.
RD8 Range of Dates Expressed in Format CCYYMMDD-CCYYMMDD.
A range of dates expressed in the format CCYYMMDD-
CCYYMMDD, where CCYY is the numerical expression of the
century CC and year YY, MM is the numerical expression of the
month within the year, and DD is the numerical expression of the
day within the year; the first occurrence of CCYYMMDD is the
beginning date and the second occurrence is the ending date.
RDM Range of Dates Expressed in Format YYMMDD-MMDD.
X DTM07 1251 Date Time Period X AN 1/35
Expression of a date, a time, or range of dates, times, or dates and times.


SEMI T6-0697 © SEMI 1997, 2004 22

Segment: CID Characteristic/Class ID
Level:    Detail
Loop:    CID
Usage:    Optional
Max Use:    1
Purpose:    To specify the general class or specific characteristic upon which test results are being reported or are to
be taken.
Syntax Notes: 1 At least one of CID01, CID02, CID04, or CID05 is required.
2 If either CID03 or CID04 is present, then the other is required.
3 If CID06 is present, then both CID03 and CID04 are required.
4 If CID07 is present, then at least one of CID04 or CID05 is required.
Comments 1 CID06 specifies the individual code list of the agency specified in CID03.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
X               CID01               738               Measurement               Qualifier                                                                    X                                                                    ID                                                                    1/3
Code identifying a specific product or process characteristic to which a measurement
applies.
M CID02 750 Product/Process Characteristic Code X ID 2/3
Code identifying the general class of a product or process characteristic.
13                      Quality                      (Quality                      Level)
X               CID03               559               Agency               Qualifier Code X ID 2/2
Code identifying the agency assigning the code values.
SM                      Semiconductor                      Equipment and Materials International

New code required for SEMI: SM suggested.
ZZ                      Mutually                      Defined

May be required until incorporation of the SEMI code.
X CID04 751 Product Description Code X AN 1/12
A code from an industry code list which provides specific data about a
productcharacteristic.
X               CID05               352               Description               X               AN               1/80
A free-form description to clarify the related data elements and their content.
O               CID06               822               Source               Subqualifier               O               AN               1/15
A reference that indicates the table or text maintained by the Source Qualifier.



SEMI T6-0697 © SEMI 1997, 2004 23

Segment: SPS Sampling Parameters for Summary Statistics
Level:    Detail
Loop:    CID
Usage:    Optional
Max Use:    >1
Purpose:    To define the sampling parameters associated with summary statistics.
Syntax Notes: 1 If either SPS05 or SPS06 is present, then the other is required.
Semantic Notes: 1 SPS01 is the population size (count) of the class of objects or events to which the statistical
generalizations refer.
2 SPS02 is the sample size, which is the number of observations on which the reported summary
statistics were based.
3 SPS03 is the subgroup size, which is the number of observations in a subgroup of a sample.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
O               SPS01               609               Count               O               N0               1/9
Occurrence                      counter
O               SPS02               609               Count               O               N0               1/9
Occurrence                      counter
O               SPS03               609               Count               O               N0               1/9
Occurrence                      counter
O               SPS04               949               Confidence               Limit               O               R               1/4
Percent value expressing the confidence that a true value falls within a certain
confidence interval.
O               SPS05               C00101               Composite               Unit of Measure X
To identify a composite unit of measure.
C00101 355 Unit or Basis for Measurement Code M ID 2/2
Code specifying the units in which a value is being expressed, or manner in which a
measurement has been taken.
Refer to 003051 Data Element Dictionary for acceptable code values.
C00102                1018                Exponent                O                R                1/15
Power to which a unit is raised.
C00103                649                Multiplier                O                R                1/10
Value to be used as a multiplier to obtain a new value.

C00101 through C00103 can be repeated five times using C00103 to C00115.
O SPS06 942 Sample Frequency Value per Unit of
Measurement Code
X        N0        1/9
The number of samples collected.



SEMI T6-0697 © SEMI 1997, 2004 24

Segment: DTM Date/Time Reference
Level:    Detail
Loop:    CID
Usage:    Optional
Max Use:    10
Purpose:    To specify pertinent dates and times.
Syntax Notes: 1 At lease one of DTM02, DTM03, or DTM06 is required.
2 If either DTM06 or DTM07 is present, then the other is required.
Comments: 1 Report Type Code SR (LIN01 Assigned ID = "PER"): Defines date range covered by summary
data.
2 Report Type Codes CA and RT (LIN01 Assigned ID = "LOT"): May be used to specify a ship date
or other date mutually agreed upon by Buyer and Seller.
3 If date range for all data entities is identical, the DTM Segment at Position Number 040 may be
used to identify a single date.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M             DTM01             374             Date/Time             Qualifier             M             ID             3/3
Code specifying type of date or time, or both date and time.
009                      Process
011                      Shipped
054                      Sellers                      Local
119 Test Performed [Period Range]
157 Test Period Start
158 Test Period Ending
X              DTM02              373              Date              X              DT              6/6
Date                      (YYMMDD).
O              DTM03              337              Time              X              TM              4/4
Time expressed in 24-hour clock time (HHMM).
O              DTM05              624              Century              O              N0              2/2
The first two characters in the designation of the year (CCYY).
X DTM06 1250 Date Time Period Format Qualifier X ID 2/3
Code indicating the date format, time format, or date and time format.
RD6 Range of Dates Expressed in Format YYMMDD-YYMMDD.
RD8 Range of Dates Expressed in Format CCYYMMDD-CCYYMMDD.
A range of dates expressed in the format CCYYMMDD-
CCYYMMDD where CCYY is the numerical expression of the
century CC and year YY, MM is the numerical expression of the
month within the year, and DD is the numerical expression of the
day within the year; the first occurrence of CCYYMMDD is the
beginning date and the second occurrence is the ending date.
RDM Range of Dates Expressed in Format YYMMDD-MMDD.
X DTM07 1251 Date Time Period X AN 1/35
Expression of a date, a time, or range of dates, times, or dates and times.



SEMI T6-0697 © SEMI 1997, 2004 25
Segment:
MEA Measurements
Level:    Detail
Loop:    MEA
Usage:    Optional
Max Use:    1
Purpose:    To specify physical measurements or counts, including dimensions, tolerances, variances, and
weights. (See figures in appendix for example of use of C001.)
Syntax Notes: 1 At lease one of MEA03, MEA05, MEA06, or MEA08 is required.
2 If MEA05 is present, then MEA04 is required.
3 If MEA06 is present, then MEA04 is required.
4 If MEA07 is present, then at least one of MEA03, MEA05, or MEA06 is required.
5 Only one of MEA08 or MEA03 may be present.
Semantic Notes: 1 MEA04 defines the unit of measure for MEA03, MEA05, and MEA06.
Comments: 1 When citing dimensional tolerances, any measurement requiring a sign (+ or -), or any
measurement where a positive (+) value cannot be assumed, use MEA05 as the negative (-)
value and MEA06 as the positive (+) value.

Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
O MEA01 737 Measurement Reference ID Code O ID 2/2
Code identifying the broad category to which a measurement applies.

Examples of possible values for wafers, if used, are indicated.
AV                      Average                      Reading
CT                      Counts
DE                      Defects
EL                      Electrical                      Characteristics
FD                      Finished                      Dimensions
Dimensions of the final or end-use product
H
R                  Historical                  Result
I
R                  Interpolated                  Result
A test result value calculated by interpolation between two physical
tests.
LS                      Lot                      Status
LT                      Lot                      Limits
Limits set on test results from all product contained in a single ship-
ment (which may involve any multiple or fraction of transportation
carrier units) to one customer.
PD                      Physical                      Dimensions (Product Ordered)
SF                      Shelf                      Life
T
R                  Test                  Results
Indicates that the data to follow are the results test measurements.
O              MEA02              738              Measurement              Qualifier                                                                    O                                                                    ID                                                                    1/3
Code identifying a specific product or process characteristic to which a measurement
applies.

Use not recommended for wafers. Included as optional for use with other
commodities/materials.
Refer to 003050 Data Element Dictionary for acceptable code values.


SEMI T6-0697 © SEMI 1997, 2004 26
X        MEA03        739        Measurement        Value        X        R        1/20
The value of the measurement.
X              MEA04              C001              Composite              Unit of Measure X
To identify a composite unit of measure (see figures in appendix for examples of use).
M C00101 355 Unit or Basis for Measurement Code M ID 2/2
Code specifying the units in which a value is being expressed, or manner in which a
measurement has been taken.
ZZ                      Mutually                      Defined

Standardized default unit of measure for each parameter to be
published by SEMI as part of the procedure. Optionally, standard
code set may be used.
O              C00102              1018              Exponent              O              R              1/15
Power to which a unit is raised.
O              C00103              649              Multiplier              O              R              1/10
Value to be used as a multiplier to obtain a new value.
X        MEA05        740        Range        Minimum        X        R        1/20
The value specifying the minimum of the measurement range.
X        MEA06        741        Range        Maximum        X        R        1/20
The value specifying the maximum of the measurement range.
O              MEA07              935              Measurement              Significance Code O ID 2/2
Code used to benchmark, qualify, or further define a measurement value.
03                      Approximately
04                      Equal                      to
05 Greater than or equal to
06                      Greater                      than
07                      Less                      than
08 Less than or equal to
10 Not equal to
22                      Actual
31                      Calculated
39                      Corrected
40                      Uncorrected
43                      Intermediate
44 Average [based on an average parameter or standard]
X              MEA08              936              Measurement              Attribute              Code              X              ID              2/2
Code used to express an attribute response when a numeric measurement value cannot
be determined.
Other codes available.
05                      Undetectable
09                      Pass
12                      OK
21                      Checked
23                      Absent
29 To Be Determined
44                      Not                      Applicable
45                      Not                      Determined
51                      Conforming


SEMI T6-0697 © SEMI 1997, 2004 27

Segment: REF Reference Numbers
Level:    Detail
Loop:    MEA
Usage:    Optional
Max Use:    10
Purpose:    To specify identifying numbers.
Syntax Notes: 1 At lease one of REF02 or REF03 is required.
Comments: May be used when describing serialized or positional-dependent data.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M REF01 128 Reference Number Qualifier M ID 2/2
Code qualifying the Reference Number.
55                      Sequence                      Number
6K                      Zone

Wafer site or other measurement location identification.
BG Beginning Serial Number
EG Ending Serial Number
QQ                      Unit                      Number

Used to identify the parameter sample size.
SE                      Serial                      Number

Serialization reference number applicable to the measurement.
SJ                      Set                      Number

Reference to the laser mark on a wafer (verbatim).
X               REF02               127               Reference               Number               X               AN               1/30
Reference number or identification number as defined for a particular Transaction Set,
or as specified by the Reference Number Qualifier.
X               REF03               352               Description               X               AN               1/80
A free-form description to clarify the related data elements and their content.



SEMI T6-0697 © SEMI 1997, 2004 28

Segment: STA Statistics
Level:    Detail
Loop:    STA
Usage:    Optional
Max Use:    1
Purpose:    To provide summary statistics related to a specific collection of test result values.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M              STA01              950              Statistic              Code              M              ID              2/2
A code specifying the specific statistic being reported.

Complete list from Standard is available. Typical parameters are indicated. Other
parameters may be defined to accommodate proprietary statistical formats.
01                      Cusum                      Delta
02 Cusum - H
03 Cusum - K
04                      Capability                      Ratio
05 F - Test
06 Control Limit Lower - Individual
07 Control Limit Upper - Individual
08                      T                      -                      Test
09 Grand Average (Double X-Bar)
10                      Kurtosis
11                      Mean                      Average
12                      Median
13                      Minimum                      Average
14                      Median                      Range
15                      Maximum                      Average
16 Process Capability Upper
17 Process Capability Lower
18 Process Capability CPK
19 Range Average (R-Bar)
20 Control Limit Lower R-Bar
21 Control Limit Upper R-Bar
22 Range Value (Total Range)
23                      Standard                      Deviation
24                      Standard                      Error
25                      Skewness
26 Control Limit Lower X-Bar
27 Control Limit Upper X-Bar
28 Failure Rate in Time (failures over time determined by the equation
(failure rate*10^9))
29                      Mode
30                      Average


SEMI T6-0697 © SEMI 1997, 2004 29
31                      Mean
32                      Minimum                      Value
The least or smallest value; the allowed lower limit
33                      Maximum                      Value
The largest value; the allowed upper limit
AD Anderson Darling Test
CF                      Cochran's                      Procedure
CS                      Chi-Square                      Test
See Appendix 2 EC Equivalent Cpk (Add definition)
See Appendix 2 PE Percentile
See Appendix 2 GM Geometric Mean
See Appendix 2 GS Geometric Sigma
HG           Histogram
See Appendix 2 HC Histogram Class Count (Count of classes or bars)
See Appendix 2 HS Histogram Start (Left side of first class or bar)
See Appendix 2 HW Histogram Width (Width of class or bar)
KS           Kolmogrov-Smirnov           Test
See Appendix 2 OC Outlier Count
See Appendix 2 PK Peak Value of Distribution Curve
SK Moment Tests, Skewness and Kurtosis (Weighted Average)
SW                      Shapiro-Wilk                      Test
ZZ                      Mutually                      Defined
M              STA02              739              Measurement              Value              M              R              1/20
The value of the measurement.
O STA03 C001 Composite Unit of Measure O
To identify a composite unit of measure (see figures in appendix for example of use).
M C00101 355 Unit or Basis for Measurement Code M ID 2/2
Code specifying the units in which a value is being expressed, or manner in which a
measurement has been taken.
Refer to 003050 Data Element Dictionary for acceptable code values.
O              C00102              1018              Exponent              O              R              1/15
Power to which a unit is raised.
O              C00103              649              Multiplier              O              R              1/10
Value to be used as a multiplier to obtain a new value.
O               STA04               738               Measurement               Qualifier                                                                    O                                                                    ID                                                                    1/3
Code identifying a specific product or process characteristic to which a meas. applies.
Refer to 003050 Data Element Dictionary for acceptable code values.
O STA05 737 Measurement Reference ID Code O ID 2/2
Code identifying the broad category to which a measurement applies.
H
R                  Historical                  Result
LS                      Lot                      Status
LT                      Lot                      Limits
Limits set on test results from all product contained in a single
shipment (which may involve any multiple or fraction
oftransportation carrier units) to one customer.
TS                      Single                      Test                      Limits


SEMI T6-0697 © SEMI 1997, 2004 30
Limits set on each measurement of the specified
productcharacteristic or manufacturing process so that any single test
whose value falls outside these limits causes the product or process
to be declared out-of-specification.
O               STA06               740               Range               Minimum               O               R               1/20
The value specifying the minimum of the measurement range.
O               STA07               741               Range               Maximum               O               R               1/20
The value specifying the maximum of the measurement range.



SEMI T6-0697 © SEMI 1997, 2004 31

Segment: REF Reference Numbers
Level:    Detail
Loop:    STA
Usage:    Optional
Max Use:    10
Purpose:    To specify identifying numbers.
Syntax Notes: 1 At lease one of REF02 or REF03 is required.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M REF01 128 Reference Number Qualifier M ID 2/2
Code qualifying the Reference Number.
Refer to 003050 Data Element Dictionary for acceptable code values.
X               REF02               127               Reference               Number               X               AN               1/30
Reference number or identification number as defined for a particular Transaction Set,
or as specified by the Reference Number Qualifier.
X               REF03               352               Description               X               AN               1/80
A free-form description to clarify the related data elements and their content.



SEMI T6-0697 © SEMI 1997, 2004 32

Segment: TSP Test Period or Interval
Level:    Detail
Loop:    TSP
Usage:    Optional
Max Use:    1
Purpose:    To describe a specific period or interval at which tests are performed.
Syntax Notes: 1 If either TSP03 or TSP04 is present, then the other is required.
Comments: 1 TSP02 is used to further expand TSP01 as a qualifier.

Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M TSP01 1312 Test Period or Interval Qualifier M ID 2/2
Code indicating the type of period or interval as related to when a test event occurs.
TF Final Test Measurement or Read-point (Cumulative).
This code marks the end of the experiment under a specific test.
TI Intermediate Test Measurements or Read-point (Cumulative).
There may be a number of intermediate test points during an
experiment; this code would likely be combined with DE 350 to
indicate which intermediate test point it is.
TO Initial Test Measurement or Read-point (Cumulative).
This is the first test interval that a product or item is subjected to.
O               TSP02               350               Assigned               Identification               O               AN               1/11
Alphanumeric characters assigned for differentiation within a transaction set.
X TSP03 1313 Test Period or Interval Value X N0 1/6
Numeric value of period or interval signifying when a test event occurs.
X TSP04 344 Unit of Time Period or Interval X ID 2/2
Code                      indicating                      the                      time period or interval.
AD                      Average                      Daily
AM                  Average                  Monthly
AY                      Average                      Year
CY                      Calendar                      Year
DA                      Calendar                      Days
F1 Fiscal Year Plus One Year
F2 Fiscal Year Plus Two Years
FY                      Fiscal                      Year
MO                  Month
P
R Preceding Six Months
Q1                      First                      Quarter
Q2                      Second                      Quarter
Q3                      Third                      Quarter
Q4                      Fourth                      Quarter
QY Quarter of a Year
SA                      Semiannual
WK                      Weeks
WW                      Work                      Week



SEMI T6-0697 © SEMI 1997, 2004 33

Segment: LM Code Source Information
Level:    Detail
Loop:    LM
Usage:    Optional
Max Use:    1
Purpose:    To transmit standard code list identification information.
Comments: 1 LM02 identifies the applicable industry code list source information.


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
M LM01 559 Agency Qualifier Code M ID 2/2
Code identifying the agency assigning the code values.
SM                      Semiconductor                      Equipment and Materials International
ZZ                      Mutually                      Defined
O               LM02               822               Source               Subqualifier               O               AN               1/15
A reference that indicates the table or text maintained by the Source Qualifier.




SEMI T6-0697 © SEMI 1997, 2004 34

Segment: LQ Industry Code
Level:    Detail
Loop:    LM
Usage:    Mandatory
Max Use:    >1
Purpose:    Code to transmit standard industry codes.
Syntax Notes: 1 If LQ01 is present, then LQ02 is required.
Comments: This section will allow for a breakdown of the measurement or parameter (e.g., Flatness, STIR, Font
Ref, 90% PUA, ADE7700).


Data Element Summary
SEMI USE: Ref. Des.    Data Element Name Attributes
O LQ01 1270 Code List Qualifier Code O ID 1/3
Code identifying a specific industry code list.
Refer to 003050 Data Element Dictionary for acceptable code values.
M               LQ02               1271               Industry               Code               X               AN               1/20
Code indicating a code from a specific industry code list.
Repeat as necessary to define a parameter in mutlitier fashion. May also be used after
parameter definition to provide additional information such as test method orconditions
coding.



SEMI T6-0697 © SEMI 1997, 2004 35

Segment: CTT Transaction Totals
Level:    Summary
Loop:    _______
Usage:    Optional
Max Use:    1
Purpose:    To transmit a hash total for a specific element in the transaction set.
Syntax Notes: 1 If either CTT03 or CTT04 is present, then the other is required.
2 If either CTT05 or CTT06 is present, then the other is required.
Comments: 1 This segment is intended to provide hash totals to validate transaction completeness
andcorrectness.


Data Element Summary

SEMI USE: Ref. Des.    Data Element Name Attributes
M CTT01 354 Number of Line Items M N0 1/6
Total number of line items in the transaction set.
M              CTT02              347              Hash              Total              O              R              1/10
Sum of values of the specified data element. All values in the data element will be
summed without regard to decimal points (explicit or implicit) or signs. Truncation will
occur on the left most digits if the sum is greater than the maximum size of the hash
total of the data element.
Example:
-.0018 First occurrence of value being hashed. .18 Second occurrence of value being
hashed. 1.8 Third occurrence of value being hashed. 18.01 Fourth occurrence of value
being hashed. ------- 1855 Hash total prior to truncation. 855 Hash total after truncation
to three-digit field.



SEMI T6-0697 © SEMI 1997, 2004 36

Segment: SE Transaction Set Trailer
Level:    Summary
Loop:    _______
Usage:    Mandatory
Max Use:    1
Purpose:    To indicate the end of the transaction set and provide the count of the transmitted segments (including
the beginning (ST) and ending (SE) segments).
Comments: 1 SE is the last segment of each transaction set.


Data Element Summary

SEMI USE: Ref. Des.    Data Element Name Attributes
M SE01 96 Number of Included Segments M N0 1/10
Total number of segments included in a transaction set including ST and SE segments.
M SE02 329 Transaction Set Control Number M AN 4/9
Identifying control number that must be unique within the transaction set functional
group assigned by the originator for a transaction set.



SEMI T6-0697 © SEMI 1997, 2004 37
APPENDIX 5
EXAMPLES OF EDI TRANSMISSIONS
NOTICE:  The material in this appendix is an official part of SEMI T6 and was approved by full letter ballot procedures.
A5-1  Certificate of Analysis Transmission

The "ISA" and "GS" segments indicated at the start of this example and the "GE" and "IEA" segments located at the
end are generally handled by the Information System (IS) dept. in charge of managing the translation and routing of
EDI messages through various VAN channels, and are not part of this document.

ISA*00*                  *00*                  *01*9012345720000         *01*908887732000*960130*2049*U*00200*120005424*0*T*:
GS*RT*901234572000*908887732000*960130*2049*4*T*003050




SEMI T6-0697 © SEMI 1997, 2004 38
A5-2  Test Results Transmission

The "ISA" and "GS" segments indicated at the start of this example and the "GE" and "IEA" segments located at the
end are generally handled by the Information System (IS) dept. in charge of managing the translation and routing of
EDI messages through various VAN channels, and are not part of this document.

ISA*00*            *00*            *01*9012345720000            *01*908887732000            *960130*2049*U*00200*000045789*0*T*:
GS*RT*901234572000*908887732000*960130*2049*4*T*003050





SEMI T6-0697 © SEMI 1997, 2004 39
A5-3  Statistical Results Transmission

The "ISA" and "GS" segments indicated at the start of this example and the "GE" and "IEA" segments located at the
end are generally handled by the Information System (IS) dept. in charge of managing the translation and routing of
EDI messages through various VAN channels, and are not part of this document.

ISA*00*            *00*            *01*9012345720000            *01*908887732000            *960130*2049*U*00200*004113004*0*T*:
GS*RT*901234572000*908887732000*960130*2049*4*T*003050





SEMI T6-0697 © SEMI 1997, 2004 40
NOTICE: SEMI  makes  no  warranties  or  representations  as  to  the  suitability  of  the  standards  set  forth
herein  for  any  particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the
responsibility  of  the  user.  Users  are  cautioned  to  refer  to  manufacturer's  instructions,  product  labels,
product data sheets, and other relevant literature, respecting any materials or equipment mentioned herein.
These standards are subject to change without notice.
By  publication  of  this  standard,  Semiconductor  Equipment  and  Materials  International  (SEMI)  takes  no
position  respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  items
mentioned  in  this  standard.  Users  of  this  standard  are  expressly  advised  that  determination  of  any  such
patent rights or copyrights, and the risk of infringement of such rights are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction of
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI T7-0303 © SEMI 1997, 2003 1
SEMI T7-0303
SPECIFICATION FOR BACK SURFACE MARKING OF DOUBLE-SIDE
POLISHED WAFERS WITH A TWO-DIMENSIONAL MATRIX CODE
SYMBOL
This  specification  was  technically  approved  by  the  Global  Traceability  Committee  and  is  the  direct
responsibility  of  the  North  American  Traceability  Committee.    Current  edition  approved  by  the  North
American Traceability Committee on November 22, 2002.  Initially available at www.semi.org January 2003;
to be published March 2003.  Originally published in 1997; previously published November 2002.
1  Purpose
1. 1  This specification is intended to provide a marking
symbology that can be used to mark silicon wafers with
no intrusion into the fixed quality area of the wafer.
2  Scope
2. 1  This specification defines the geometric and spatial
relationships  and  content  (including  the  error  checking
and  correcting  code)  of  a  rectangular  two-dimensional
(2-D),   machine-readable,   binary   data   matrix   code
symbol  for  back  surface  marking  of  notched,  double-
side  polished  wafers  of  silicon  which  comply  with
SEMI M1.15, and other materials with diameters of 300
mm and larger.
2. 2    Although  this  specification  does  not  specify  the
marking   techniques   that   may   be   employed   when
complying  with  its  requirements,  it  is  assumed  that  the
symbol  will  be  obtained  by  laser  scribing  individual
dots.
2. 3    The  matrix  code  is  applicable  to  a  broad  range  of
wafer  products  including  epitaxial  wafers,  SOI  wafers,
and   unpatterned   or   patterned   polished   wafers.   The
format  and  algorithms  of  this  code  are  based  on  two-
dimensional symbology specified in ISO/IEC 16022.
NOTICE: This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  health  practices  and  determine  the
applicability or regulatory limitations prior to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI AUX001 — List of Vendor Identification Codes
SEMI   M1.15   —   Standard   for   300   mm   Polished
Monocrystalline Silicon Wafers (Notched)
SEMI  M12  —  Specification  for  Serial  Alphanumeric
Marking of Silicon Wafers
3. 2 ISO/IEC Standard
1

ISO/IEC      16022      —      International      Symbology
Specification – Data Matrix
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Terminology
4. 1  Definitions
4. 1.1  alignment bar, of a data matrix code symbol — a
solid  line  of  contiguous  filled  cells  abutting  a  line  of
alternately filled and empty cells [ISO/IEC 16022].
4. 1.2  binary  values  —  a  dot  in  the  wafer  surface
indicates the binary value 1. The absence of a dot, or a
smooth surface surrounding a cell center point indicates
the binary value 0.
4. 1.3  border column — the outermost column of a data
matrix  code  symbol.  This  column  is  a  portion  of  the
finder pattern.
4. 1.4  border row — the outermost row of a data matrix
code symbol. This row is a portion of the finder pattern.
4. 1.5  cell,  of  a  data  matrix  code  symbol  —  the  area
within  which  a  dot  may  be  placed  to  indicate  a  binary
value.
4. 1.6  cell  center  point,  of  an  array  —  the  point  at
which the centerline of a row intersects the centerline of
a column.
4. 1.7  cell spacing, of an array — the (equal) vertical or
horizontal  distance  between  the  cell  center  points  of
contiguous cells.
4. 1.8  center  line,  of  a  row  or  column  —  the  line
positioned  parallel  to,  and  spaced  equally  between,  the
boundary lines of the row or column.
4. 1.9  central  area,  of  a  cell  —  the  area  enclosed  by  a
circle  centered  at  the  cell  center  point;  used  by  code
readers to sense the binary value of the cell.


1 International Organization for Standardization, ISO Central
Secretariat, 1, rue de Varembé, Case postale 56, CH-1211 Geneva 20,
Switzerland. Telephone: 41.22.749.01.11; Fax: 41.22.733.34.30
Website: http://www.iso.ch



SEMI T7-0303 © SEMI 1997, 2003 2
4. 1.10  data  matrix  code  symbol  —  a  two-dimensional
array  of  square  cells  arranged  in  contiguous  rows  and
columns.  In  certain  ECC200  symbols,  data  regions  are
separated  by  alignment  patterns.  The  data  region  is
surrounded by a finder pattern [ISO/IEC 16022].
4. 1.11  dot  —  a  localized  region  with  a  reflectance
which differs from that of the surrounding surface.
NOTE  1:    To  assure  reading  efficiency,  a  minimum  contrast
of 30% is required between the reflectance value of a dot and
the  surrounding  wafer  surface.  Various  densitometers  can
provide such measurements nondestructively.
4. 1.12  dot  misalignment,  within  a  cell  —  the  distance
between  the  physical  center  point  of  a  dot  and  the  cell
center point.
4. 1.13  finder pattern, of a data matrix code symbol  —
a  perimeter  to  the  data  region.  Two  adjacent  sides
contain  dots  in  every  cell;  these  are  used  primarily  to
define  physical  size,  orientation  and  symbol  distortion.
The two opposite sides are made up of cells containing
dots in alternate cells [ISO/IEC 16022].
4. 1.14  reference point, of a data matrix code symbol —
the physical center point of a corner cell common to the
primary  border  row  and  the  solid  line  of  the  alignment
bar, used to identify the physical location of the symbol
on the object being marked with the symbol.
NOTE  2:    The  reference  point  is  at  a  fixed  location  on  the
object.  Different  cells  may  be  chosen  as  the  reference  point
depending  on  the  desired  orientation  of  the  symbol  on  the
object  and  the  size  variability  of  the  symbol.  The  particular
cell  to  be  used  as  the  reference  point  must  be  specified  for
each application.
5  Requirements
5. 1  Shape and Size of the Data Matrix Code Symbol
5. 1.1  Data Matrix Code Symbol Dimensions
5. 1.1.1    Each  rectangular  matrix  code  symbol  shall  be
composed of an array of 8 rows and 32 columns with an
alignment bar as defined in ISO/IEC ISS 16022.
5. 1.1.2  Cell spacing shall be 125 μm, center to center.
5. 1.2  Dot   Size   —   The   nominal   shape   of   the   dot
produced  in  the  matrix  may  be  circular  or  square.  Its
diameter  or  edge  length  (after  polishing)  shall  be  100
μm + 10 μm – 20 μm.
5. 1.3  Border Rows and Columns
5. 1.3.1    One  border  row  and  one  border  column  shall
contain  a  dot  in  each  cell.  These  are  identified  as  the
primary  border  row  and  the  primary  border  column.
These  are  used  by  the  code  reader  to  determine  the
orientation of the matrix.
5. 1.3.2      The   opposing   (secondary)   border   row   and
column shall contain dots in alternating cells.
5. 1.3.3    For  these  rectangular  matrix  code  symbols,  the
reference  point  of  the  symbol  shall  be  the  physical
centerpoint  of  the  cell  common  to  the  primary  border
row and the center alignment bar.
5. 1.4    The  maximum  dot  misalignment  within  a  cell  is
15  μm.  This  ensures  that  a  minimum  size  dot  covers  a
cell central area of radius 25 μm.
5. 1.5  Adjacent dots shall not touch.
5. 2  Content of the Data Matrix Code Symbol
5. 2.1      Each   rectangular   matrix   code   symbol   shall
contain  10  message  characters,  together  with  the  error
checking  and  correcting  (ECC200)  code  characters,
encoded in accordance with ISO/IEC ISS 16022.
5. 2.2        The    message    characters    may    include    the
following:  A–Z,  0–9,  and  dash  (–).    These  characters
constitute  the  SEMI  OCR  Character  Set  except  for  the
period  (.);  this  is  the  same  character  set  specified  in
SEMI  M12.    These  characters  are  also  included  in  the
set  designated  as  “primarily  upper  case  alphanumeric”
in  ISO/IEC  16022,  in  Table  5  and  Annexe  J.  The  ten
message characters shall contain two elements:
a.   a   vendor-assigned   8-character  wafer  identification
code, followed by
b.   a  2-character  vendor  identification  code  (see  SEMI
AUX001).
5. 3  Location of the Data Matrix Code Symbol
5. 3.1    With  the  wafer  positioned  back  surface  up  and
with  the  primary  fiducial  (notch)  toward  the  operator,
the  origin  of  the  data  matrix  code  symbol  shall  be
located as specified below.
5. 3.1.1  The 8 row × 32 column rectangular 2-D matrix
code  symbol  shall  be  placed  entirely  outside  a  fixed
quality area (FQA) with a nominal edge exclusion of 3
mm. The reference point shall be located 148.95 ± 0.15
mm  from  the  center  of  the  wafer,  along  a  radius  5.0  ±
0. 1°   counterclockwise   from   the   axis   of   the   notch
fiducial bisector.
5. 3.2  The primary row of the matrix code symbol shall
be placed toward the periphery of the wafer.



SEMI T7-0303 © SEMI 1997, 2003 3

32 cells per row
C1 C2
R1
R2
8 cells per
column
Nominal Dimensions (mm)
R1 = 3.875

C1 = 0.875
R2 = 4.000

C2 = 1.000
C
L
C
L
C
L
C
L

Figure 2
Data Matrix Field Dimensions
ECC200 - 8 rows × 32 columns

To Wafer Center
Dimensions in millimeters are of
center to center of dots

Figure 3
Data Matrix Code Fields
ECC200 - 8 rows × 32 columns


SEMI T7-0303 © SEMI 1997, 2003 4

Figure 4
Data Matrix Code Symbol Location on Back Surface of Notched 300 mm Diameter Wafer

NOTE  1:  The  peripheries  are  of  wafers  of  nominal  diameter  with  nominal  notch  dimensions.  The  dots  of  the  finder  pattern  are
shown for an 8 row x 32 column data matrix code symbol with 125 μm spacing.

NOTICE:  These  standards  do  not  purport  to  address  safety  issues,  if  any,  associated  with  their  use.  It  is  the
responsibility  of  the  user  of  these  standards  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory limitations prior to use. SEMI makes no warranties or representations as to the suitability
of the standards set forth herein for any particular application. The determination of the suitability of the standard is
solely  the  responsibility  of  the  user.  Users  are  cautioned  to  refer  to  manufacturer’s  instructions,  product  labels,
product  data  sheets,  and  other  relevant  literature  respecting  any  materials  mentioned  herein.  These  standards  are
subject to change without notice.
The user’s attention is called to the possibility that compliance with this standard may require the use of copyrighted
material  or  of  an  invention  covered  by  patent  rights.    RVSI  Acuity  CiMatrix  has  filed  a  statement  with  SEMI
asserting  that  the  patented  or  copyrighted  item  can  be  used  by  the  public  for  the  purpose  of  implementing  this
standard  without  specific  license  and  without  payment  of  royalty  or  other  charge.    Attention  is  also  drawn  to  the
possibility  that  some  elements  of  this  standard  may  be  subject  to  patented  technology  or  copyrighted  items  other
than  those  identified  above.    Semiconductor  Equipment  and  Materials  International  (SEMI)  shall  not  be  held
responsible  for  identifying  any  or  all  such  patented  technology  or  copyrighted  items.    By  publication  of  this
standard,  SEMI  takes  no  position  respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection
with  any  item  mentioned  in  this  standard.    Users  of  this  standard  are  expressly  advised  that  determination  of  any
such patent rights or copyrights and the risk of infringement of such rights are entirely their own responsibility.

Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International),3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI T8-0698
E
© SEMI 1998, 2004 1
SEMI T8-0698
E
(Reapproved 1104)
SPECIFICATION FOR MARKING OF GLASS FLAT PANEL DISPLAY
SUBSTRATES WITH A TWO-DIMENSIONAL MATRIX CODE SYMBOL
This  specification  was  technically  reapproved  by  the  Global  Traceability  Committee  and  is  the  direct
responsibility  of  the  North  American  Traceability  Committee.  Current  edition  approved  by  the  North
American  Regional  Standards  Committee  on  August  16,  2004.    Initially  available  at  www.semi.org
September 2004; to be published November 2004. Originally published June 1998.
1  Purpose
1. 1  This specification is intended to provide a marking
symbology  that  can  be  used  to  mark  glass  flat  panel
display (FPD) substrates within the fixed quality area of
the edge exclusion area of the substrate.
2  Scope
2. 1  This specification defines the geometric and spatial
relationships  and  content  (including  the  error  checking
and correcting code) of rectangular two-dimensional (2-
D),  machine-readable,  binary  Data  Matrix  symbology
for front-surface or back-surface marking of glass FPD
substrates  (sometimes  called  “motherglass”  substrates)
which  comply  with  the  edge  specifications  of  SEMI
D12.   It   may   be   used   in   conjunction   with   the
alphanumeric  marking  codes  specified  in  SEMI  M12
and SEMI M13 or the bar code specified in SEMI T1.
2. 2  Although  this  specification  does  not  specify  the
marking   techniques   that   may   be   employed   when
complying  with  its  requirements,  it  is  assumed  that  the
symbol  will  be  obtained  by  laser  scribing  individual
dots. A survivability experiment executed by the United
States Display Consortium found such marks suitable.
NOTE 1:  Other techniques could include resist exposure and
grit blasting.
2. 3  Data  Matrix  symbology  is  applicable  to  a  broad
range   of   FPD   products   including   virgin   substrates,
processed  and  patterned  substrates,  panel  assemblies,
and   displays.   An   application   note   describes   the
application  of  Data  Matrix  symbology  to  individual
panel    sections    contained    within    a    multi-panel
motherglass  substrate.  The  format  and  algorithms  of
this  code  are  based  on  two-dimensional  symbology
specified      in      AIM      International      Symbology
Specification - Data Matrix.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI D12 — Specification for Edge Condition of Flat
Panel Display (FPD) Substrates
SEMI  M12  —  Specification  for  Serial  Alphanumeric
Marking of the Front Surface of Wafers
SEMI M13 — Specification for Alphanumeric Marking
of Silicon Wafers
SEMI  T1  —  Specification  for  Back  Surface  Bar  Code
Marking of Silicon Wafers
3. 2  AIM International Technical Specifications
1

AIM   International   Symbology   Specification   -   Data
Matrix
3. 3  ANSI Standard
2

ANSI    MH10.8.2    —    Data    Application    Identifier
Standard
3. 4  Uniform Commercial Council Standard
3

Manufacturer Identification Codes
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Terminology
4. 1  Definitions
4. 1.1  alignment bar, of a data matrix code symbol — a
solid  line  of  contiguous  filled  cells  abutting  a  line  of
alternatively  filled  and  empty  cells  (AIM  International
Symbology Specification - Data Matrix).


1 AIM International, Inc., 634 Alpha Drive, Pittsburgh, PA 15238-
2802, tel 412.963.8588, fax 412.938.8753
2 American National Standards Institute, Headquarters: 1819 L
Street, NW, Washington, DC 20036, USA. Telephone: 202.293.8020;
Fax: 202.293.9287, New York Office: 11 West 42nd Street, New
York, NY 10036, USA. Telephone: 212.642.4900; Fax:
212. 398.0023, Website: www.ansi.org23
3 Uniform Code Council, 7887 Washington Village Drive, Suite 300
Dayton, OH 45459 Telephone: 937.435.3870, Fax: 937.435.7317,
Website: info@uc-council.org


SEMI T8-0698
E
© SEMI 1998, 2004 2
4. 1.2  binary  values  —  a  dot  in  the  substrate  surface
indicates the binary value 1. The absence of a dot, or a
smooth   surface   surrounding   a   cell   center   point,
indicates the binary value 0.
4. 1.3  border column — the outermost column of a data
matrix  code  symbol.  This  column  is  a  portion  of  the
finder pattern.
4. 1.4  border row — the outermost row of a data matrix
code symbol. This row is a portion of the finder pattern.
4. 1.5  cell,  of  a  data  matrix  code  symbol  —  the  area
within  which  a  dot  may  be  placed  to  indicate  a  binary
value.
4. 1.6  cell  center  point,  of  an  array  —  the  point  at
which the centerline of a row intersects the centerline of
a column.
4. 1.7  cell spacing, of an array — the (equal) vertical or
horizontal  distance  between  the  cell  center  points  of
contiguous cells.
4. 1.8  center  line,  of  a  row  or  column  —  the  line
positioned  parallel  to,  and  spaced  equally  between,  the
boundary lines of the row or column.
4. 1.9  central  area,  of  a  cell  —  the  area  enclosed  by  a
circle  centered  at  the  cell  center  point;  used  by  code
readers to sense the binary value of the cell.
4. 1.10  data  matrix  code  symbol  —  a  two-dimensional
array  of  square  cells  arranged  in  contiguous  rows  and
columns.  In  certain  ECC200  symbols,  data  regions  are
separated  by  alignment  patterns.  The  data  region  is
surrounded   by   a   finder   pattern   (AIM   International
Symbology Specification - Data Matrix).
4. 1.11   dot  —  a  localized  region  with  a  reflectance
which differs from that of the surrounding surface.
NOTE 2:  To  assure  reading  efficiency,  a  minimum  contrast
of 30% is required between the reflectance value of a dot and
the  surrounding  substrate  surface.  Various  densitometers  can
provide such measurements non-destructively.
4. 1.12  dot  misalignment,  within  a  cell  —  the  distance
between  the  physical  center  point  of  a  dot  and  the  cell
center point.
4. 1.13  finder pattern, of a data matrix code symbol —
a  perimeter  to  the  data  region.  Two  adjacent  sides
contain  dots  in  every  cell;  these  are  used  primarily  to
define physical size, orientation, and symbol distortion.
The two opposite sides are made up of cells containing
dots  in  alternate  cells  (AIM  International  Symbology
Specification - Data Matrix).
4. 1.14  reference point, of a data matrix code symbol —
the   physical   center   point   of   a   cell   common   to   a
designated   row   and   column,   used   to   identify   the
physical  location  of  the  symbol  on  the  object  being
marked with the symbol.
NOTE 3:  The  reference  point  is  at  a  fixed  location  on  the
object.  Different  cells  may  be  chosen  as  the  reference  point,
depending  on  the  desired  orientation  of  the  symbol  on  the
object and on the size variability of the symbol. The particular
cell  to  be  used  as  the  reference  point  must  be  specified  for
each application.
5  Ordering Information
5. 1  Purchase  orders  for  substrates  furnished  to  this
specification shall include the following items:
5. 1.1  Message Characters
5. 1.1.1  Quantity  (15  to  nn,  where  nn  is  16–46,  and
depends  on  the  character  set  to  be  encoded  [see  Table
2]).
5. 1.1.2  Content  of  Message  Characters  16  and  up,  if
present.
6  Requirements
6. 1  Shape and Size of the Data Matrix Code Symbol
6. 1.1  Data Matrix Code Symbol Dimensions
6. 1.1.1  Each  rectangular  matrix  code  symbol  shall  be
composed  of  an  array  of  8  to  16  rows  and  32  to  46
columns (see Table 1 and Figure 1) as defined in AIM
International Symbology Specification - Data Matrix. It
may contain an alignment bar.
6. 1.1.2  Cell spacing shall be 125 μm, center to center.
6. 1.2  Dot   Size   —   the   nominal   shape   of   the   dot
produced  in  the  matrix  may  be  circular  or  square.  Its
diameter or edge length shall be 100 ± 10 μm.
6. 1.3  Border Rows and Columns (see Figure 3)
6. 1.3.1  One  border  row  and  one  border  column  shall
contain  a  dot  in  each  cell.  These  are  identified  as  the
primary  border  row  and  the  primary  border  column.
These  are  used  by  the  code  reader  to  determine  the
orientation of the matrix.
6. 1.3.2  The   opposing   (secondary)   border   row   and
column shall contain dots in alternating cells.
6. 1.3.3  For  these  rectangular  matrix  code  symbols,  the
reference  point  of  the  symbol  shall  be  the  physical
centerpoint  of  the  cell  common  to  the  primary  border
row and the primary border column.
6. 1.4  The    maximum    allowable    dot    misalignment
within  a  cell  is  20  μm.  This  ensures  that  a  minimum
size dot covers a cell central area of radius 25 μm.


SEMI T8-0698
E
© SEMI 1998, 2004 3
6. 2  Content of the Data Matrix Code Symbol
6. 2.1  Each   rectangular   matrix   code   symbol   shall
contain between 15 and 46 message characters, together
with the error checking and correcting (ECC) 200 code
characters,     encoded     in     accordance     with     AIM
International Symbology Specification - Data Marix.
6. 2.2  The message characters may include any of those
designated  as  “mostly  upper  case”  in  Table  5  and
Annex     K     of     AIM     International     Symbology
Specification - Data Marix. 8-bit characters may also be
encoded with reduced field capacity (see Table 3). The
first 15 message characters shall contain two elements:
a. a        vendor-assigned        8-character        substrate
identification code, followed by
b. a 7-character vendor identification code as defined
by    UCC.    These    are    a    six-digit    company
identification, preceded by a zero (0).
6. 2.2.1  The remaining message characters, if any, shall
contain  information  as  agreed  between  the  vendor  and
user.   This   may   require   field   identifiers   and   field
concatenators (see ANSI MH10.8.2).
6. 3  Location of the Data Matrix Code Symbol
6. 3.1  With the substrate positioned front surface up and
with  the  orientation  corner  toward  the  operator  and  to
the operator's left, the reference point of the data matrix
code  symbol  shall  be  placed  toward  the  orientation
corner as specified in Table 3.
6. 3.2  The 12 row × 26 column rectangular 2-D matrix
code  symbol  shall  be  placed  entirely  outside  the  fixed
quality   area   (FQA)   and   within   a   nominal   edge
exclusion  area  of  10  mm.    Large  symbols  will  extend
toward  the  substrate  center  and  perpendicular  to  the
substrate edges.  (See Table 1 for field dimensions.)
6. 3.3  The  primary  row  of  the  symbol  shall  be  parallel
to  the  adjacent  edge  of  the  substrate  ±  10.0°.  The
primary   column   of   the   symbol   shall   be   nominally
perpendicular  to  the  same  edge.  The  symbol  shall  lie
between  these  two  edges  and  the  FQA  (see  Figures  4
and  5).  The  reference  point  of  the  symbol  shall  be
located  4.0  ±  1.0  mm  from  the  adjacent  edge  of  the
substrate.
Table 1  2-D Data Matrix Code Symbol Dimensions

Rectangular Array Spacing

# #

# of Cells
in Row
# of Cells
in Column

C
1
(mm)

R
1
(mm)

C
2
(mm)

R
2
(mm)
12           26              1.375           3.125           1.500           3.250
12           32              1.375           4.375           1.500           4.500

125 μm
16           36              1.875           4.375           2.000           4.500

Table 2  Message Character Count in Rectangular Arrays for Use on FPD Substrates

#  of Cells in Row and Column
12 Rows
×
26 Columns
12 Rows ×
36 Columns
16 Rows ×
36 Columns
Maximum # of Message Characters 8-bit N/A 20 30
Mostly                       upper-case                       22                       31                       46

Table 3  Location of 2-D Matrix Code Symbol Substrate Back Surface Up, Orientation Corner Toward the
Operator and Toward the Operator’s Left
Type of Array Reference Point Location of Reference Point
Rectangular Common cell of
primary border row and
column
#1
4. 0 ± 1.0 mm from the nominal edge of the substrate and toward the
substrate orientation corner.
#1
The rows of the rectangular 2-D matrix code symbol are parallel to the X-edge of a substrate whose orientation corner is in the 1,1,1 orientation
or the 2, -1, 0 orientation.




SEMI T8-0698
E
© SEMI 1998, 2004 4

Figure 1
Data Matrix Field


Figure 2
Data Matrix Cell Dimensions



SEMI T8-0698
E
© SEMI 1998, 2004 5


Figure 3
Border Rows and Columns


Figure 4|
Data Matrix Code Field in Edge Exclusion Area



SEMI T8-0698
E
© SEMI 1998, 2004 6

Figure 5
Data Matrix Code Field



Figure 6
Data Matrix Code Field


SEMI T8-0698
E
© SEMI 1998, 2004 7
APPENDIX 1
PLACEMENT OF DATA MATRIX CODES ON DISPLAY SECTIONS OF
FLAT PANEL DISPLAY SUBSTRATES
NOTICE: This appendix was approved as an official part of SEMI T8, but the recommendations in this appendix
are optional and are not required to conform to this standard.
A1-1  The following suggests one way in which individual display sections could be marked while still a part of the
motherglass substrate. Figure A1-1 illustrates a six-up display layout on a 550 × 650 mm substrate.

Figure A1-1
An Example of Mark Field Locations in Individual Display
Sections within a “Motherglass” Substrate

A1-2  The Substrate ID location falls within the edge exclusion area as detailed in Figure 4. In this example, all ID
fields  are  located  on  the  back  (non-pattern)  surface.  Placing  them  on  the  same  surface  as  the  substrate  mark  can
simplify  ID  reading  during  fabrication.  Their  location  on  the  non-pattern  surface  could  allow  ID  reading  of  the
outside surface of a display after assembly.
A1-3  The axes of the individual display IDs are parallel to the substrate ID axes. Each display ID is located adjacent
to a display corner. The locations of each ID field are given.
NOTE A1-1: This example does not constitute a recommended usage, but is intended to assist users in developing ID locations
suitable for their operations
.



SEMI T8-0698
E
© SEMI 1998, 2004 8
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



SEMI T9-0200 © SEMI 1998, 2004 1
SEMI T9-0200 (Reapproved 1104)
SPECIFICATION FOR MARKING OF METAL LEAD-FRAME STRIPS
WITH A TWO-DIMENSIONAL DATA MATRIX CODE SYMBOL
This  specification  was  technically  approved  by  the  Global  Traceability  Committee  and  is  the  direct
responsibility  of  the  North  American  Traceability  Committee.    Current  edition  approved  by  the  North
American  Regional  Standards  Committee  on  July  11,  2004.    Initially  available  at  www.semi.org  September
2004; to be published November 2004.  Originally published in 1998; previously published April 2000.
1  Purpose
1. 1  This  specification  provides  a  marking  symbology
that can be used to mark metal lead-frame strips.
2  Scope
2. 1  This specification defines the geometric and spatial
relationships  and  content  (including  the  error  checking
and correcting code) of rectangular two-dimensional (2-
D),  machine-readable,  binary  Data  Matrix  symbology
for  front-surface  marking  of  metal  lead-frame  strips
(also  called  “strips”).  It  may  be  used  in  conjunction
with   the   alphanumeric   marking   codes   specified   in
SEMI M12 and SEMI M13 or the bar code specified in
SEMI T1.
2. 2  This  specification  defines  a  22-character  default
message that is included in all marks, and option for up
to  50  additional  characters,  for  a  total  of  72  message
characters.  An  optional  shorter  message  contains  12  to
16  message  characters;  the  resulting  square  field  is
narrower  but  taller  than  the  22-character  rectangular
one.
2. 3  This specification provides a suggested location for
the   code   symbol.   It   also   provides   guidelines   for
specifying  other  code  locations  when  the  suggested
location is not suitable for an application.
2. 4  Although  this  specification  does  not  specify  the
marking   techniques   that   may   be   employed   when
complying  with  its  requirements,  it  is  assumed  that  the
symbol  will  be  obtained  by  laser  scribing  individual
dots.
NOTE 1:  A    mark    survivability    experiment    is    being
conducted   by   the   SEMI   North   American   Traceability
committee.   A   report   is   available   from   SEMI:   request
“Leadframe   Mark   Survivability   Report”   dated   February,

# 1999

1999.
2. 5  Data  Matrix  symbology  is  applicable  to  a  broad
range  of  lead-frame  materials  including  copper  and
Alloy 42 in both bare and plated conditions. The format
and   algorithms   of   this   code   are   based   on   two-
dimensional  symbology  specified  in  AIM  International
Symbology Specification - Data Matrix.
2. 6  This  specification  supports  EIA  Package  Marking
Specification by enabling individual die tracking in the
manufacturing  steps  between  die  attach  and  device
packaging marking.
NOTE 2:  Marking  of  each  die,  while  in  wafer  form,  prior  to
dicing, could also accomplish this end.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI  M12  —  Specification  for  Serial  Alphanumeric
Marking of the Front Surface of Wafers
SEMI M13 — Specification for Alphanumeric Marking
of Silicon Wafers
SEMI  T1  —  Specification  for  Back  Surface  Bar  Code
Marking of Silicon Wafers
3. 2  AIM International Technical Specifications
1

AIM  International  Symbology  Specification  —  Data
Matrix
3. 3  ANSI Standards
2

ANSI/FACT-1 — Data Application Identifier Standard
ANSI    X3.4    —    American    Standard    Code    for
Information Interchange (ASCII)
NOTE 3:  This standard is equivalent to ISO 646, Information
Processing  -  ISO  7-bit  Coded  Character  Set  for  Information
Exchange
3
.

1 AIM International, Inc., 125 Warrendale-Bayne Road , Warrendale,
PA 15086, Phone: 1 724 934 4470, Fax:  1 724 934 4495,
http://www.aimglobal.org/
2 American National Standards Institute, Headquarters: 1819 L
Street, NW, Washington, DC 20036, USA. Telephone: 202.293.8020;
Fax: 202.293.9287, New York Office: 11 West 42nd Street, New
York, NY 10036, USA. Telephone: 212.642.4900; Fax:
212. 398.0023, Website: www.ansi.org
