---
title: "F47-0200 - © SEMI 1999, 20002..."
description: "SEMI标准文档"
sidebar_label: "F47-0200 - © SEMI 1999, 20002..."
sidebar_position: 810
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-081.pdf'
  chapter: 81
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/081.pdf"
  pdfSize="0.61MB"
  title="F47-0200 - © SEMI 1999, 20002..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI F47-0200 © SEMI 1999, 20002
other related standards.
3. 4   This  standard  is  intended  to  be   a  performance
specification, it is not intended to address design issues
related  to  safety  which  are  covered  elsewhere  in  the
SEMI Standards (see SEMI S2).
NOTE  1:  Safety  related  systems  may  require  ride-through
capability  for  conditions  up  to  and  including  full  power
failure.  Further,  if  hazards  could  result  from  voltage  sags
greater than those allowable in Table 1, provisions should be
made to negate or eliminate such hazards.
3. 5  International, national and loca l codes, regulations
and  laws  should  be  consulted  to  ensure  that  the  equip-
ment meets regulatory requirements in each location.
4  Referenced Standards
4. 1  SEMI Standards
SEMI E10 — Standard for Definition and Measurement
of      Equipment      Reliability,      Availability,      and
Maintainability (RAM)
SEMI E51 — Guide for Typical Facilities Services and
Termination Matrix
SEMI    F42    —    Test    Method    for    Semiconductor
Processing Equipment Voltage Sag Immunity
SEMI   S2   —   Environmental,   Health,   and   Safety
Guideline for Semiconductor Manufacturing Equipment
4. 2  IEEE Standards
1
IEEE    446    —    IEEE    Recommended    Practice    for
Emergency  and  Standby  Power  Systems  for  Industrial
and Commercial Applications (IEEE Orange Book)
IEEE   1100   —   IEEE   Recommended   Practice   for
Powering     and     Grounding     Sensitive     Electronic
Equipment (IEEE Emerald Book)
IEEE  1250  —  IEEE  Guide  for  Service  to  Equipment
Sensitive to Momentary Voltage Disturbances
NOTE 2: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
5  Terminology
5. 1   assist  —  an  unplanned  interrup tion  that  occurs
during   an   equipment   cycle   where   all   three   of   the
following conditions apply:
• The interrupted equipment cycle is resumed
through external intervention (e.g., by an operator
or user, either human or host computer).
• There is no replacement of a part, other than
specified consumables.

1 The Institute of Electrical and Electronic Engineers, Inc., 345 East
47th Street, New York, NY 10017-2394, USA
• There is no further variation from specification of
equipment operation [SEMI E10].
5. 2   failure  —  any  unplanned  inter ruption  or  variance
from  the  specifications  of  equipment  operation  other
than assists [SEMI E10].
5. 3  interrupt — any assist or failu re [SEMI E10].
5. 4  ride-through capability — the  ability of equipment
to  withstand  momentary  interruptions  or  sags  [IEEE
1250]. Also known as voltage sag immunity.
5. 5   voltage  sag  —  an  rms  reductio n  in  the  ac  voltage
at  power  frequency  for  durations  from  half-cycle  to  a
few seconds [IEEE 1250]. Also known as voltage dip.
6  Ordering Information
6. 1     Semiconductor    manufacturers     may    use    this
standard   when   procuring   processing   equipment   to
specify equipment ride-through requirements capability
to  the  equipment  supplier.  This  document  may  also  be
used  by  semiconductor  processing  equipment  suppliers
to specify ride-through requirements to component and
module suppliers.
6. 2   Orders  for  equipment  in  accor dance  with  this
standard shall include:
a)This specification number and date of issue.
b)    Requirements  for  qualification  testing  per  SEMI
F42.
c)Any  certification  showing  passage  of  qualification
tests required to be provided (optional).
d)    Any  test  results  required  to  be  included  in  reports
to be provided (optional).
7  Requirements
7. 1     Semiconductor    processing,    me trology,    and
automated test equipment must be designed and built to
conform   to   the   voltage   sag   ride-through   capability
shown in Figure 1.  Equipment must continue to operate
without  interrupt  (see  Terminology)  during  conditions
identified in the area above the defined line.
7. 2   The  requirements  defined  in  th is  specification
apply  to  two  phase  (phase-to-phase)  and  single  phase
(phase-to-neutral) voltage incidents.
7. 3  The performance curve is defi ned by values shown
in Table 1—voltage sag duration and percent deviation
from equipment nominal voltage.
NOTE  3:  For  recommendations  on  equipment  ride-through
capability  below  0.05  seconds  (50  milliseconds)  and  above
1. 0  seconds,  see  Related  Information  at  the  end  of  this
document.

SEMI F47-0200 © SEMI 1999, 20003
8  Test Methods
8. 1   Qualification  tests  are  conduct ed  on  samples  of
production     articles,     not     each     item     produced.
Qualification  testing  of  equipment  to  requirements  in
this specification should be performed per SEMI F42.
9  Related Documents
9. 1  SEMI Standard
SEMI S9 — Electrical Test Methods for Semiconductor
Manufacturing Equipment
9. 2  CENELEC Standard
2
EN   50082-2   —   Electromagnetic   Compatibility   —
Generic    Immunity    Standard,    Part    2:    Industrial
Environments
9. 3  IEC Standard
3
IEC   61000-4-11   —   Electromagnetic   Compatibility
(EMC)  —  Part  4:  Testing  and  Measuring  Techniques
—  Section  11:  Voltage  Dips,  Short  Interruptions  and
Voltage Variations Immunity Tests
9. 4  IEEE Standard
1
IEEE  1346  —  Electric  Power  System  Compatibility
with Electronic Process Equipment
NOTE 4: As listed or revised, all documents cited shall be the
latest publications of adopted standards.

2 European Committee for Electrotechnical Standardization, Rue de
Stassart, 35, B – 1050, Brussels
3 International Electrotechnical Commission, 3, rue de Varembé, P.O.
Box 131, 1211 Geneva 20, Switzerland

SEMI F47-0200 © SEMI 1999, 20004
Table 1  Voltage Sag Duration and Percent Deviation from Equipment Nominal Voltage
VOLTAGE SAG DURATIONVOLTAGE SAG
Seconds (s)Milliseconds (ms)Cycles at 60 hzCycles at 50 hz
Percent (%) of
Equipment Nominal
Voltage
< 0.05 s< 50 ms < 3 cycles < 2.5 cyclesNot specified
0. 05 to 0.2 s50 to 200 ms3 to 12 cycles2.5 to 10 cycles50%
0. 2 to 0.5 s200 to 500 ms12 to 30 cycles10 to 25 cycles70%
0. 5 to 1.0 s500 to 1000 ms30 to 60 cycles25 to 50 cycles80%
> 1.0 s> 1000 ms> 60 cycles> 50 cyclesNot specified
Percent of Equipment Nominal Voltage
0. 20.50.11.0
0. 05
Duration of Voltage Sag in Seconds
100
90
80
70
60
50
40
30
20
10
0
NOTE: Equipment must continue to operate without interrupt during voltage sags above the line.
Figure 1
Required Semiconductor Equipment Voltage Sag Ride-Through Capability Curve
NOTICE:      SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer’s   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature
respecting   any   materials   mentioned   herein.   These
standards are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that
compliance   with   this   standard   may   require   use   of
copyrighted  material  or  of  an  invention  covered  by
patent  rights.  By  publication  of  this  standard,  SEMI
takes  no  position  respecting  the  validity  of  any  patent
rights  or  copyrights  asserted  in  connection  with  any
item  mentioned  in  this  standard.  Users  of  this  standard
are  expressly  advised  that  determination  of  any  such
patent rights or copyrights, and the risk of infringement
of such rights, are entirely their own responsibility.

SEMI F47-0200 © SEMI 1999, 20005
RELATED INFORMATION 1
RELATIONSHIP TO OTHER ELECTRICAL STANDARDS
NOTE:    This  related  information  is  not  an  official  part  of
SEMI  F47  and  is  not  intended  to  modify  or  supersede  the
official standard.  It has been derived from the work of the
originating  task  force.    Determination  of  the  suitability  of
the material is solely the responsibility of the user.
R1-1  Basis for this Industry-Specific
Semiconductor Standard
R1-1.1        The    Information    Technology    Industry
Council  (ITIC)  “CBEMA-curve,”  contained  in  IEEE
446,  IEEE  1100,  and  SEMI  E51,  was  used  as  a
starting   point   in   establishing   recommended   ride-
through limits.  The following curve (see Figure R1-
1)  was  developed  to  define  voltage  sag  ride-through
for  use  with  semiconductor  processing  equipment.
Primarily  due  to  testing  limitations,  only  the  portion
between   0.05   seconds   (50   milliseconds)   and   1.0
seconds     was     selected     for     inclusion     in     the
specification.  As future test equipment, methods, and
data  are  developed  the  specified  duration  limits  may
be   expanded.      Recommended   voltage   sag   ride-
through  capability  limits  from  zero  to  100  seconds
are  included  here  for  reference  (see  Figure  R1-1).
While    not    currently    included    in    this    SEMI
specification  the  wider  range  should  be  considered
when      designing      equipment      and      selecting
components.
R1-1.2    Over  voltage  conditions  also  covered  in  the
ITIC  CBEMA-curve  contained  in  IEEE  446,  IEEE
1100, and SEMI E51, are not considered in the scope
of this industry-specific specification primarily due to
the    extremely    low    number    of    semiconductor
equipment   interruptions   caused   by   over   voltage
events.    While  not  in  the  scope  of  this  specification,
over  voltage  conditions  should  not  be  ignored  and
use   of   existing   equipment   protection   techniques
should be continued (see SEMI E51 or IEEE 446 for
generic     equipment     over     voltage     ride-through
specifications).
R1-2  Relationship to Generic Electrical
Standards
R1-2.1      This   SEMI   standard   is   intended   to   be
coordinated   with   related   SEMI,   IEC   and   IEEE
standards.        The    relationship    of    this    SEMI
specification  to  many  other  standards  that  address
equipment  immunity,  test  methods,  and  safety  was
considered  in  development  of  this  specification.    For
example,  the  emerging  IEC  Generic  Immunity  standard
for    industrial    environments    currently    published    by
CENELEC   as   EN   50082-2   recommends   a   generic
equipment  immunity  limit  for  Europe.    When  published
by  IEC,  this  standard  will  provide  a  generic  equipment
voltage  sag  immunity  limit.    Another  example  is  the  US
National    Fire    Protection    Association    on    Industrial
Machinery  (NFPA  79),  which  sets  a  generic  equipment
voltage sag immunity limit for the United States.
R1-2.2  These emerging generic limits were considered in
the establishment of ride-through limits for semiconductor
equipment.    However,  most  generic  equipment  limits  are
less  stringent  than  the  existing  CBEMA-curve  currently
referenced  in  SEMI  E51.    For  most  installations  meeting
the  CBEMA  limits  (a  specification  which  was  developed
for   computer   business   equipment)   still   results   in   an
unacceptable    number    of    semiconductor    equipment
interrupts.        Therefore,    the    requirements    in    this
international  standard  were  developed  to  better  suit  the
semiconductor   industry.      While   more   stringent,   this
industry-specific   specification   is   not   in   conflict   with
known  generic  equipment  regulations  from  other  regions
or generic equipment standards from other organizations.
R1-2.3  Another published IEC standard defines a generic
immunity test method for voltage sags (dips), IEC 61000-
4-11.    This  standard  does  not  provide  limits  but  does
provide   a   voltage   sag   test   method   for   single-phase
equipment   rated   less   than   16   amps.      It   has   been
considered     in     defining     voltage     sag     ride-through
parameters  and  it  may  provide  an  interim  voltage  sag
immunity  test  method.    As  noted  in  this  document,  a  test
method for three-phase equipment greater than 16 amps is
being developed for use with semiconductor equipment.
R1-2.4      The   generic   type   standards   developed   for
industrial  or  consumer  equipment  by  organizations  like
IEC,  ITIC,  and  IEEE  provide  a  foundation  for  industry-
specific    standards    like    those    published    by    SEMI
Standards.  In acknowledgement of this tiered approach to
standardization   there   are   provisions   for   recognizing
industry-specific      or      product-type      standards      by
organizations like IEC.  Typically, product-type standards
when  developed  by  industry-specific  organizations  take
precedent   over   the   broader   based   generic   industrial
standards.

SEMI F47-0200 © SEMI 1999, 20006
0
10
20
30
40
50
60
70
80
90
100
0. 010.1110100
Duration of Voltage Sag in Seconds
Percent of Equipment Nominal Voltage
Area included in Specification
0. 05 to 1 second
0. 02
Figure R1-1
Recommended Semiconductor Equipment Voltage Sag Ride-Through Capability Curve
from 0 to 100 Seconds
NOTICE:      SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer’s   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature
respecting   any   materials   mentioned   herein.   These
standards are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that
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

SEMI F48-0600 © SEMI 20001
SEMI F48-0600
TEST METHOD FOR DETERMINING TRACE METALS IN POLYMER
MATERIALS
This test method was technically approved by the Global Facilities Committee and is the direct responsibility
of  the  North  American  Facilities  Committee.  Current  edition  approved  by  the  North  American  Regional
Standards  Committee  on  March  2,  2000.    Initially  available  on  www.semi.org  April  2000;  to  be  published
June 2000.
1  Purpose
1. 1  This method provides a proced ure for determining
the   nonvolatile   trace   inorganic   impurities   in   bulk
polymeric materials.
2  Scope
2. 1   Following  digestion  by  dry  ash ing  (DDA)  or
digestion     in     closed     vessel     (DCV)     preparation
techniques,  samples  previously  obtained  and  cleaned
according   to   SEMI   F40   are   analyzed   for   trace
inorganics   using   inductively   coupled   plasma-mass
spectrometry    (ICP–MS),    graphite    furnace    atomic
absorption  spectroscopy  (GFAAS),  and/or  inductively
coupled  plasma-atomic  emission  spectroscopy  (ICP–
AES).
2. 2   Materials  for  analysis  include,   but  are  not  limited
to:
• Raw  polymer  materials  (resins),  such  as  pellets  of
perfluoroalkoxy   (PFA),   polyvinylidene   fluoride
(PVDF), ethylenechlorotrifluoroethylene (ECTFE),
polyetheretherketone  (PEEK),  polypropylene  (PP),
polyethylene  (PE),  acetal  resin,  polyvinyl  chloride
(PVC),     Perfluoromethylether-based     Perfluoro-
alkoxy   (MFA)   and   powders   of   polytetrafluoro-
ethylene (PTFE).
• Polymer  components  of  tubing,  piping,  fittings,
valves,  regulators,  filter  housings,  filter  cartridges,
O–rings and gaskets used in ultrapure water (UPW)
and  liquid  chemical  distribution  systems  (LCDS).
See Section 3.8 for further information.
• Ion-exchange resins
• Polymer  products  used  in  the  manufacturing  of
semiconductor  devices,  such  as  wafer  carriers  and
wands,   as   well   as   accessories   internal   to   wet
equipment  (e.g.,  drums  in  spin  rinse  dryers,  tanks
in quick dump rinsers).  See Section 3.8 for further
information.
2. 3   The  DDA  sections  of  this  docu ment  refer  to  an
ashing  technique,  whereby  the  sample  is  placed  into  a
platinum or quartz crucible and thermally decomposed.
Thermal decomposition in muffle furnace or microwave
muffle furnace may also be used.  Additionally, oxygen
plasma  may  be  used  separately  or  in  conjunction  with
these techniques.
2. 4  The DCV sections of this docu ment refer to closed
vessel   microwave   acid   decomposition   at   elevated
temperature  and  pressure.    Alternatively  closed  vessel
thermal conduction heating may also be applied.
2. 5     ICP–MS,    GFAAS,    and    ICP–A ES    are    all
appropriate methods for inorganic analysis.  ICP–MS is
the  preferred  method  because  it  is  more  sensitive  and
efficient.    Alternate  procedures  may  be  used  if  they
meet  the  same  analytical  performance  criteria.    Each
laboratory  is  responsible  for  verifying  the  validity  of
each method within its own operation.
2. 6   This  method  is  applicable  for  t he  elements  found
in Table 1:
Table 1  List of Applicable Elements (See NOTE 1.)
AluminumMagnesium
BariumManganese
CalciumNickel
ChromiumPotassium
CobaltSodium
CopperStrontium
IronTin
LeadTitanium
LithiumZinc
MolybdenumZirconium
NOTE 1: See Limitations, Section 3.3.
2. 7   This  method  may  be  used  for  o ther  materials,  or
other  nonvolatile  elements,  if  the  end-user  wishes  and
performance is demonstrated for the analyte of interest,
in the matrices of interest, at the concentration levels of
interest.
2. 8   This  standard  does  not  purport   to  address  safety
issues,   if   any,   associated   with   its   use.      It   is   the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1   The  accuracy  of  the  method  is   limited  by  the
detection  limits  of  the  instruments  and  by  the  sample
preparation procedure.

SEMI F48-0600 © SEMI 20002
3. 2   This  procedure  anticipates  ana lysis  levels  in  the
ppm  (mass/mass)  range.    Impurities  less  than  0.1  ppm
may not be detected by this method.
3. 3   When  extending  the  method  to   other  elements
recovery  should  be  evaluated  during  validation.    Poor
recovery  rates  are  often  found  for  volatile  elements
such   as   boron   (B),   arsenic   (As),   antimony   (Sb),
mercury  (Hg),  gold  (Au),  and  tungsten  (W)  because  of
the   relatively   high   temperature   sample   preparation
method and poor stability of some elements in aqueous
solution.  Elements forming volatile halogenides can be
affected  due  to  the  in-situ  production  of  hydrogen
halogenides when halogenated polymers are ashed.
3. 4   This  is  a  bulk  analysis  techniq ue.    For  leachable
testing   or   surface   analysis   refer   to   the   Related
Documents (Section 16) of this method.
3. 5  Due to the rapid advances in d igestion technology,
consult  the  manufacturer’s  recommended  instructions
for  guidance  when  conducting  analyses  using  the  DCV
sections of this document.
3. 6   DCV  techniques  can  generate   gaseous  digestion
reaction products, very reactive, or volatile materials at
high  pressures.    Spontaneous  venting  which  can  occur
during sample heating may cause venting of the vessels
with  potential  loss  of  sample  and  analytes.    Sample
sizes greater than 0.25 g may accentuate this event.
3. 7   In  the  use  of  the  DCV  techniqu e,  TiO2,  alumina,
and   other   oxides   may   not   be   totally   dissolved.
Sequestering of target analyte elements may occur.
3. 8  Although this method allows t he sampling of small
pieces of polymer that are mechnically removed from a
larger  item,  obtaining  such  samples  in  a  clean  manner
may  be  difficult.    Multiple  sampling,  separation  and
preparation  techniques  might  be  necessary  to  establish
confidence in the results.
3. 9    This   document   is   not   intended    to   supersede
international,  national  or  local  codes,  regulations,  and
laws.    Each  should  be  consulted  to  ensure  that  the
method meets regulatory requirements in each location.
4  Referenced Standards
4. 1  SEMI Standard
SEMI  F40  ––  Practice  for  Preparing  Liquid  Chemical
Distribution Components for Chemical Testing
4. 2  ASTM Standard
1
ASTM    D4375    ––    Standard    Practice    for    Basic
Definitions,  Notation,  and  Symbology  for  Statistics  in
Committee D19 on Water

1 American Society for Testing and Materials, 1916 Race St.,
Philadelphia, PA 19103
NOTE 1: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
5  Terminology
5. 1  Acronyms and Abbreviations
5. 1.1  AAS/GFAAS — atomic absorp tion spectroscopy/
graphite furnace atomic absorption spectroscopy
5. 1.2  amu — atomic mass unit
5. 1.3  DCV  digestion in closed ve ssel
5. 1.4  DDA  digestion by dry ashin g
5. 1.5   GFAAS  —  graphite  furnace  at o mic  absorption
spectroscopy
5. 1.6  ICP–AES — inductively coupl ed plasma–atomic
emission spectroscopy
5. 1.7   ICP–MS  —  inductively  couple d  plasma–mass
spectrometry
5. 1.8  ppb — parts per billion by ma ss (ng/g)
5. 1.9  ppm — parts per million by m ass (μg/g)
5. 1.10 UPW — ultrapure water (see S ection 9.4)
6  Summary of Test Method
6. 1  Samples previously prepared u sing SEMI F40 are
ashed  or  digested  under  pressure  within  a  digestion
device, and trace inorganics in the residue are dissolved
into  acid  and  UPW.    The  sample  is  then  analyzed  by
ICP–MS,  GFAAS,  and/or  ICP–AES  to  determine  the
inorganic content of the material.  This method applies
only  to  nonvolatile  metals  (i.e.,  alkali  metals,  alkaline
earths, and transition metals).
6. 2   Data  from  different  tests  can  b e  compared  to
determine  the  inorganic  content  in  different  materials
and in the same material from different manufacturers.
7  Significance and Use
7. 1       Determining      the      metallic      conta mination
concentration  in  bulk  polymer  materials  used  in  either
distribution  systems  for  process  fluids  or  products  in
direct  contact  with  the  wafer  is  important  criterion  for
deciding  the  suitability  of  a  material.    For  example,
ultrapure  water  contaminated  by  distribution  system
components  may  adversely  affect  microelectronic  and
other processes.
7. 2    This   method   measures   the   tota l   amount   of
impurities in the bulk of the material.  These impurities
will not necessarily leach into a process fluid stream.

SEMI F48-0600 © SEMI 20003
8  Apparatus
8. 1  Muffle   Furnace    With   tempe rature   control
ranging up to a minimum of 700°C and equipped with a
means to regulate air circulation.
8. 2  Microwave Muffle Furnace
8. 3  Crucibles   Made  of  either  pl atinum  or  quartz
and with a 30 mL capacity.
8. 4  ICP–MS
8. 5  GFAAS
8. 6  ICP–AES   Either  simultaneo us  or  sequential
reading type.
8. 7  Chemical Fume Hood
8. 8   Propane  Torch  or  Appropriate   Heating  Source
with a minimum temperature of 650°C.
8. 9   Device  for  digestions  under  a  p ressure  of  at  least
30 bar (435 psi), with temperature control.  This can be
a laboratory microwave-based system or a system based
on other heating sources.
8. 9.1   In  the  case  of  microwave  diges tion  devices:
Laboratory   microwave   digestion   systems   should   be
used  that  possess  appropriate  temperature  control  of
chemical  reactions.    Closed  microwave  systems  must
have controlled pressure relief.
8. 9.2  Digestion vessels of appropria te internal volume
should    be    used    and    construction    should    be    of
appropriate  chemically  inert  materials.    If  the  vessel  is
pressurized,  it  should  be  capable  of  withstanding  a
minimum  pressure  of  30  atm  (30  bar  or  435  psi),  with
controlled  pressure  relief  of  reagents  and  digestion
products.
NOTE  2:  Only  microwave  manufacturer’s  approved  vessels
for that device should be used.
8. 9.3   In  case  of  a  laboratory  microw ave  digestion
device:  Oscillating  turntable  to  insure  homogeneous
distribution of microwave radiation to all vessels.
8. 9.4  Filter paper, qualitative or equ ivalent.
8. 9.5   Filter  funnel,  polypropylene,  p olyethylene  or
equivalent.
8. 10   Volumetric  flasks,  20  mL  or  5 0  mL  capacity  or
equivalent.
8. 11   Analytical  balance,  of  appropr iate  capacity,  with
a  ±  0.0001  g  or  appropriate  precision  for  the  weighing
of  the  sample.    Optionally,  the  vessel  with  sample  and
reagents may be weighed, with an appropriate precision
balance,   before   and   after   microwave   processing   to
evaluate the seal integrity in some vessel types.
9  Materials
9. 1  Argon Gas 99.99% pure or bet ter.
9. 2  Standards and Reference Mate rials
9. 2.1    For   preparation   of   multi-eleme nt   standard
solutions,    use    NIST
2
,    NIST-traceable,    or    other
appropriate international standards as stock solutions.
9. 2.2    From   these   stock   solutions,   mu lti-element
working  standard  solutions  must  be  prepared  daily  by
pipeting  the  appropriate  volumes  of  the  trace  metal
standards and diluting to the desired concentrations.
NOTE  3:  Prepare  these  working  standards  using  the  same
amount of acid as used for the sample.
9. 2.3     For    validation    purposes,    use    ap propriate
international  reference  materials  that  match  the  sample
matrix as close as possible.
9. 3   All  reagents  should  be  of  appr opriate  purity  or
high  purity  (acids  for  example,  should  be  sub-boiling
distilled  where  possible)  to  minimize  the  blank  levels
due  to  elemental  contamination.    If  the  purity  of  a
reagent    is    questionable,    analyze    the    reagent    to
determine  the  level  of  impurities.    The  reagent  blank
must be less than the minimum detection limit in order
to be used.
9. 3.1  Ultrapure Hydrochloric Acid l ess than 1 ppb for
each trace metal.
9. 3.2   Ultrapure  Nitric  Acid  less  than   1  ppb  for  each
trace metal.
9. 4  Ultrapure Water
9. 4.1   For  purposes  of  this  test,  refere nces  to  water
shall be understood to mean ultrapure water as defined
by   maximum   individual   metal   and   anion   impurity
levels  of  0.1  ppb  or  less,  nonvolatile  residue  levels  of
0. 1   ppm   or   less,   resistivity   of   18   megohm-cm   or
greater, and reactive silica impurity of less than 1.0 ppb.
10  Precautions
10. 1  Safety Precautions
10. 1.1    This   test   method   may   involve    hazardous
materials, operations, and equipment.  This test method
does  not  purport  to  address  the  safety  considerations
associated  with  its  use.    It  is  the  responsibility  of  the
user to establish appropriate safety and health practices
and   to   determine   the   applicability   of   regulatory
limitations before using this method.

2 National Institute of Standards and Technology,  100 Bureau Dr.,
Gaithersburg, MD, 20899-001 USA, (301) 975-6478,
www.nist.gov

SEMI F48-0600 © SEMI 20004
10. 1.2   Care  must  be  taken  in  the  hand ling  and  use  of
the  acids  to  avoid  acid  burns  or  contamination  of  the
acid.  Acid should be neutralized before disposal.
10. 1.3   Care  must  be  taken  when  using   the  propane
torch to avoid burns.  The torch should not be used near
flammable materials or solvents.
10. 1.4   Care  must  be  taken  when  using   the  muffle
furnace to avoid burns.
10. 1.5   When  ashing  fluoropolymeric   materials,  the
ashing  must  be  performed  in  a  fume  hood.    When
heated,   fluoropolymer   materials   outgas   hydrofluoric
acid fumes and may also emit fluoropolymeric particles
which,  if  inhaled,  can  cause  a  condition  known  as
“polymer fume fever.”  If hot fluoropolymer fumes are
inhaled, remove the individual to a well-ventilated area
and seek medical attention.
10. 1.6   The  outer  layers  of  vessels  use d  in  the  DCV
technique are frequently not as acid or reagent resistant
as  the  liner  material.    To  retain  the  performance  and
safety   required   these   outer   layers   must   be   neither
chemically  degraded  nor  physically  damaged.    Routine
examination of the vessel materials may be required to
ensure their safe use.
10. 1.7   Only  DCV  containers  with  pre ssure  relief  or
control  mechanisms  or  containers  with  suitably  inert
polymeric    or    quartz    liners    and    pressure    relief
mechanisms are considered acceptable for use with this
process.
NOTE  4:  Only  microwave  manufacturer’s  approved  vessels
for that device should be used.
10. 1.8    Use   of   laboratory   microwave   s ystems   is
required  for  this  method.    Users  are  advised  not  to  use
domestic (kitchen) type microwave ovens or cookware.
Nor  should  inappropriately  sealed  containers  without
pressure  relief  for  microwave  acid  digestions  be  used.
See  Section  16.3.1  for  additional  information  on  safety
issues  concerning  the  use  of  laboratory  microwave
systems.
10. 1.9  Toxic nitrogen oxide(s), hydro gen fluoride, and
toxic  chlorine  (from  the  addition  of  hydrochloric  acid)
fumes     are     usually     produced     during     digestion.
Therefore,  all  steps  involving  open  or  the  opening  of
digestion  vessels  must  be  performed  in  a  properly
operating fume ventilation system.
10. 1.10     The    analyst    should    wear    appro priate
protective clothing, such as gloves and face protection,
and  must  not  at  any  time  permit  a  solution  containing
hydrofluoric acid to come in contact with skin or lungs.
10. 2  Technical Precautions – Diges tion by Dry Ashing
(DDA)
10. 2.1    Flaming   and   ashing   temperatu res   must   be
controlled   so   that   they   do   not   exceed   650°C   to
minimize   metal   loss   due   to   volatilization.      If   the
crucible becomes excessively hot for longer than about
one  minute  during  flaming,  it  may  have  overheated.
When  testing  the  method  for  recovery  rates,  it  will
become  apparent  that  the  sample  has  been  overheated
from the low recovery of metals.
10. 2.2   One  method  of  cleaning  the  cr ucibles  and
covers  is  to  flame  them  with  a  propane  torch  or  other
appropriate  heating  source  until  they  are  sufficiently
hot,  allow  them  to  cool,  rinse  in  dilute  ultrapure  nitric
acid, and then rinse in ultrapure water.
10. 2.3  When ashing a sample, take ca re that all of the
ash residue remains in the crucible.
10. 2.4  Several factors concerning sele ction of crucible
materials  should  be  considered  when  performing  the
DDA  technique.    For  example,  the  crucible  itself  can
contribute  elevated  levels  of  its  own  composition  into
samples  at  trace  levels.    Temperature  restrictions  are
another   factor   to   consider   in   the   selection   of   the
crucible  material.    Corrosion  of  the  crucible  during  the
decomposition of the sample should also be considered.
For  example,  in  the  ashing  of  fluorinated  materials,
platinum  is  preferred  over  quartz  glass  that  could  be
etched by the liberated hydrogen fluoride.
10. 3  Technical  Precautions  –  Diges tion  in  Closed
Vessel (DCV)
10. 3.1   Trace  analysis  requires  a  thoro ugh  cleaning.
One method of cleaning the vessels is to leach with hot
(1:1) hydrochloric acid (greater than 80 C, but less than
boiling) for a minimum of two hours followed with hot
(1:1)   nitric   acid   (greater   than   80   C,   but   less   than
boiling)  for  a  minimum  of  two  hours  and  rinsed  with
reagent water and dried in a clean environment.
10. 4  Other Technical Precautions
10. 4.1   When  switching  between  high   concentration
samples and low concentration samples, all crucibles or
digestion  vessels  should  be  cleaned  according  to  the
corresponding  and  recommended  cleaning  procedure.
This  cleaning  procedure  should  also  be  used  whenever
the  prior  use  of  the  digestion  vessels  is  unknown  or
cross contamination from vessels is suspected.
10. 4.2  Trace metallic levels of reagen t blanks must be
significantly lower than those in the sample in order to
obtain accurate results for the analyte of interest.
10. 4.3     Perform    sample    preparation    in     a    clean
environment   and   under   a   fume   hood   to   minimize
contamination.

SEMI F48-0600 © SEMI 20005
11  Sampling
11. 1  Sampling of Test Specimens
11. 1.1   Test  specimens  shall  be  repres entative  of  the
polymer  material  being  tested  and  shall  be  free  of
embedded      particles      and      extraneous      surface
contamination when visually inspected.
11. 1.2  Two samples of each material  shall be prepared
per  SEMI  F40.    This  test  is  performed  in  duplicate.
More samples may be analyzed if desired.
NOTE 5:  The samples are cleaned and weighed according to
SEMI   F40.      The   sample   preparation   described   in   this
document  begins  with  either  the  ashing  (DDA)  or  digestion
under pressure (DCV) of the polymer material.
11. 2  Sample  Preparation  –  Digestio n  by  Dry  Ashing
(DDA)
NOTE  6:  Digestion  by  ashing  using  an  oxygen  plasma  asher
differs  considerably  from  the  described  procedures  that  refer
to ashing in open crucibles.  Specific instructions are available
from the instrument manufacturers.
11. 2.1   Clean  the  digestion  container  a nd  cover  using
appropriate   methods   for   the   vessel   materials   and
procedures being employed.
11. 2.2  Place the sample into a cleaned  crucible.  For at
least  two  additional  samples,  add  the  recovery  spike  as
discussed in Section 12.
11. 2.3   Use  a  propane  torch  or  other  a ppropriate  heat-
ing source to carefully flame the outside of the crucible
until  the  polymer  inside  the  crucible  is  completely
charred.  Do not flame exceedingly, i.e., do not allow a
platinum  crucible,  for  example,  to  become  red  hot,  as
excessive heat will allow some metals to volatilize.
NOTE  7:  This  step  must  be  carried  out  in  a  well-ventilated
fume hood.
11. 2.4   Prepare  at  least  three  procedur al  blanks  by
flaming three or more empty crucibles using the method
discussed  in  Section  11.2.3.    The  results  from  these
blanks    will    be    used    to    determine    the    metallic
contribution  from  the  crucibles  themselves,  from  the
reagents and from the test procedure.  These procedural
blanks   should   be   treated   like   any   other   sample.
Crucibles should be rotated in and out of service so that
the same crucibles are not always used for blanks.
11. 2.5   Place  the  charred  sample  cruci bles  and  blank
crucibles  in  a  muffle  furnace,  cover  the  crucibles  with
the  cleaned  covers,  and  continue  to  char  at  500  to
650°C  until  all  the  carbon  is  removed  (usually  over  a
period of 6–18 hrs).  The removal of all carbon is indi-
cated by the absence of black material in the sample.
NOTE  8:  Some  oxides  (such  as  SnO
2
)  are  black  and  may
confound this determination.  If a sample is still black after 18
hours,  assume  that  it  is  an  oxide  and  continue  with  the
procedure.
11. 2.6  Allow the crucibles to cool.
11. 2.7    Add   the   appropriate   amount   (1 –2   mL)   of
concentrated    ultrapure    hydrochloric    acid    to    each
crucible.
11. 2.8  Evaporate the hydrochloric aci d to dryness in a
chemical hood at less than 100°C if necessary to permit
instrumental compatibility.
NOTE 9: The presence of chloride in the sample can result in
interferences  for  the  determination  of  arsenic  and  vanadium
by ICP-MS.
11. 2.9   Continue  preparing  the  sample   as  described  in
Section 11.4.
11. 3  Sample Preparation – Digestio n in Closed Vessel
(DCV)
11. 3.1   Clean  the  digestion  container  a nd  cover  using
appropriate   methods   for   the   vessel   materials   and
procedures being employed.
11. 3.2    Place   the   sample   into   a   cleaned    digestion
container.    For  at  least  two  additional  samples,  add  the
recovery spike as discussed in Section 12.
11. 3.3  Add the reagents needed for th e digestion.
11. 3.4   Prepare  at  least  three  procedur al  blanks  by
adding the same amount of all reagents, but no sample,
to three or more additional containers.  The results from
these  blanks  will  be  used  to  determine  the  metallic
contribution  from  the  containers  themselves,  from  the
reagents and from the test procedure.  These procedural
blanks   should   be   treated   like   any   other   sample.
Containers  should  be  rotated  in  and  out  of  service  so
that the same containers are not always used for blanks.
11. 3.5  The analyst should be aware o f the potential for
a vigorous reaction.  If a vigorous reaction occurs upon
the initial addition of reagent or the sample is suspected
of  containing  easily  oxidizable  materials,  allow  the
sample  to  predigest  in  the  uncapped  digestion  vessel.
Heat may be added in this step for safety considerations
(for  example  the  rapid  release  of  carbon  dioxide  from
easily  oxidized  polymeric  material).    Once  the  initial
reaction  has  ceased,  the  sample  may  continue  through
the digestion procedure.
11. 3.6  Seal the vessel according to th e manufacturer’s
directions.
11. 3.7    Properly   place   the   vessel   in   the    digestion
system  according  to  the  manufacturer’s  recommended
specifications  and  connect  appropriate  temperature  and
pressure sensors to vessels according to manufacturer’s
specifications.

SEMI F48-0600 © SEMI 20006
11. 3.8   Set  the  parameters  of  the  diges tion  device  to
manufacturer’s recommendations.
NOTE  10:  If  the  pressure  exceeds  the  pressure  limits  of  the
vessel,  the  pressure  will  be  reduced  by  the  relief  mechanism
of the vessel.
NOTE 11: Pressure control for a specific matrix is applicable
if  instrument  conditions  are  established  using  temperature
control.    Because  each  matrix  will  have  a  different  reaction
profile,   performance   using   temperature   control   must   be
developed  for  every  specific  matrix  type  prior  to  use  of  the
pressure control system.
11. 3.9   At  the  end  of  the  digestion  pro gram,  allow  the
vessels to cool for an appropriate period of time before
removing  them  from  the  system.    When  the  vessels
have cooled to near room temperature, determine if the
microwave  vessels  have  maintained  a  seal  throughout
the  digestion.    Due  to  the  wide  variability  of  vessel
designs, a single procedure is not appropriate.  The use
of  a  spiked  control  sample  is  appropriate  to  ensure  that
analyte loss has not occurred due to vessel venting.  For
vessels  with  burst  disks,  a  careful  visual  inspection  of
the disk may identify compromised sample digestions.
11. 3.10   Complete  the  preparation  of  th e  sample  by
carefully  uncapping  and  venting  each  vessel  in  a  fume
hood.        Vent    the    vessels    using    the    procedure
recommended by the vessel manufacturer.  Transfer the
sample to an appropriate acid cleaned container.
11. 3.11   If  the  digested  sample  contains   particulates,
which may clog nebulizers or interfere with injection of
the  sample  into  the  instrument,  the  sample  may  be
centrifuged, allowed to settle, or filtered.
11. 3.11.1   If  necessary,  centrifugation  at   2,000–3,000
rpm  for  10  minutes  is  usually  sufficient  to  clear  the
supernatant.
11. 3.11.2  Settling  ––  If  undissolved  mate rial  remains
such  as  TiO,  or  other  refractory  oxides,  allow  the
sample to stand until the supernatant is clear.  Allowing
a  sample  to  stand  overnight  will  usually  accomplish
this.
11. 3.11.3  Filtering   ––   If   necessary,   the   f iltering
apparatus  must  be  thoroughly  cleaned  and  pre-rinsed
with dilute (approximately 10% V/V) nitric acid.  Filter
the sample through qualitative filter paper into a second
acid-cleaned container.
11. 3.12  Continue preparing the sample  as described in
Section 11.4.
11. 4  Preparation of the Sample for  Analysis
11. 4.1   If  the  sample  was  obtained  fro m  the  DDA
method,  add  0.5  mL  concentrated  nitric  acid  to  each
crucible.
11. 4.2   For  samples  obtained  from  the   DCV  method,
transfer or decant the sample into volumetric ware.
11. 4.3   Dilute  either  obtained  sample   to  a  required
volume    with    ultrapure    water    (usually    20    mL).
Alternatively,  a  gravimetric  dilution  of  the  samples  is
also  appropriate.    The  samples  are  now  ready  for
analysis.      See   Related   Documents,   Section   16   for
applicable trace inorganics test methods.
12  Recovery Preparation and   Percentage
Recovery Rate Determination
12. 1   Metal  recovery  percentage  mu st  be  determined
for all instruments by the individual laboratory.  This is
accomplished via spiking a crucible or digestion vessel
containing     a     polymer     sample     with     a     known
concentration   of   metals.      Then,   determining   the
percentage    of    each    metal    recovered    after    the
decomposition process or acid digestion.  The following
provides the recommended method for spiking:
12. 1.1  Add a known volume of a stan dard to a crucible
or digestion container containing a polymer sample.
12. 1.2  For  DDA  ––  Gently  evaporate   the  standard
solution to dryness.
12. 1.3   Digest  the  dried  standard  and  d ried  polymer
using  the  same  procedure  as  for  the  samples.    Typical
recovery  rates  are  70–110%  for  the  alkali,  alkaline
earths, and most transition metals.
13  Data Analysis
13. 1  Calculations
13. 1.1    The   concentration   of   trace   met als   in   the
solution    must    be    calculated    to    determine    the
concentration  in  μg/g  (ppm)  of  the  polymeric  material
using the following equation:
polymer concentration (μg/g ) =
= solution concentration
(μg/L) × solution volume (L) / mass of the polymer(g)
13. 1.2   Since  the  procedural  blank  doe s  not  contain  a
weighed  sample,  the  results  must  be  transformed  to
solid  concentrations  (in  μg/g)  by  using  the  average
weight   of   the   samples   (see   Section   11.1.2   and
corresponding NOTE).
14  Data Presentation
NOTE 12: Use the Report Form provided in Section 17 of this
document.
14. 1  Sample Information
14. 1.1  Provide the date(s) of the test,  the person and/or
company  requesting  the  analysis,  the  method  in  which
the sample was obtained (e.g., if it was separated from a

SEMI F48-0600 © SEMI 20007
larger   component   and   delivered   to   the   laboratory),
operator  and  laboratory  performing  the  test,  type  of
material  (e.g.,  PFA  pellets,  injection  molded  PVDF
valve,  perfluoroelastomer  O-ring),  material  supplier,
material  model  and  lot  number(s),  date  sample  was
obtained and if the sample is a prototype or production
material.
14. 2  Methods
14. 2.1   Provide  the  method  of  cleanin g  the  sample  as
well  as  indicating  if  the  sample  arrived  pre-cleaned
from the requester or if it was cleaned in the laboratory
performing the test.
14. 2.2    Check   the   applicable   box   for   t he   type   of
digestion.    Complete  as  well  the  information  regarding
the conditions.
14. 3  Results
14. 3.1   Use  Table  1,  Trace  Metals  in  B ulk  Polymer
Worksheet  in  Section  17.3  to  report  the  results  of  the
analysis  along  with  detection  limits  and  recovery  rates
for all elements required in the samples.
NOTE 13: For this document, the detection limit is defined as
the  concentration  equivalent  to  three  standard  deviations  of
the results of the procedural blanks (see Section 13.1.2).
NOTE  14:  The  procedural  blanks  should  be  averaged  and
then  subtracted  from  each  sample  (see  Columns  3  and  4  of
Table 1).
NOTE  15:  If  multiple  samples  of  the  same  polymer  material
are  evaluated,  an  average  and  standard  deviation  must  be
reported.
15  Precision and Bias
15. 1   Expected  variations  in  the  blan k  are  due  to
environmental and instrument variation.
15. 2  Expected variation in the samp les is 20–30% and
is  due  to  environmental,  instrumental,  and  ashing  or
digestion variations.
15. 3   This  test  does  not  give  an  indic ation  of  the
variations found in the polymer sample material.
15. 3.1  Analyze multiple samples of th e same polymer
material to determine the variation.
15. 3.2    Refer   to   ASTM   D4375   for   info rmation
regarding  sample  populations  to  determine  differences
between materials.
16  Related Documents
16. 1  References Pertaining to ICP–M S
Dams,  R.  F.  J.,  Goossens,  J.,  Moens,  L.  “Spectral  and
Non-Spectral   Interferences   in   Inductively   Coupled
Plasma   Mass   Spectrometry”   Microchim.   Acta   119
(1995):277-286.
Evans, E. H., Giglio, J. J., “Interferences in Inductively
Coupled  Plasma  Mass  Spectrometry”  J  Anal.  Atom.
Spectrom. 8 (1993):1-18.
Jarvis,  K.  E.,  Gray,  A.  L.,  Houk,  R.  S.  “Handbook  of
Inductively    Coupled    Plasma    mass    Spectrometry”
Blackie, Glasgow 1992 (USA: Chapman and Hall, New
York).
Shao, Y. and G. Horlick. “Recognition of Mass Spectral
Interferences   in   Inductively   Coupled   Plasma–Mass
Spectrometry.” Applied Spectroscopy 45 (1991):143.
16. 2 References Pertaining to ICP–A ES
Garbarino,  J.R.,  B.E.  Jones,  G.P.  Stein,  W.T.  Belser,
and H.E. Taylor. “Statistical Evaluation of an ICP–AES
Method  for  Routine  Water  Quality  Testing.”  Applied
Spectroscopy 39 (1985):535.
Winge,  R.K.,  V.S.Fassel,  R.N.  Kniseley,  E.  De  Kalb,
and  W.J.  Haas  Jr.  “ICP  as  an  Analytical  Source.”
Spectrochimica Acta 32B (1977):327
16. 3  References Pertaining to Micr owave Digestion
Kingston,   H.   M.   Skip   and   Haswell,   Steve,   Eds.,
Microwave     Enhanced     Chemistry:     Fundamentals,
Sample      Preparation,      and      Applications,      ACS
Professional     Reference     Book     Series,     American
Chemical Society, Washington, DC, 1997.
16. 4  U.S. EPA Documents
3
U.S.  EPA  Method  3052  ––  Microwave  Assisted  Acid
Digestion of Siliceous and Organically Based Matrices
U.S.  EPA  RCRA  SW-846  ––  Chapter  3,  sections  on
clean chemistry and microwave decomposition.
16. 5  SEMATECH Documents
4
SEMASPEC     #92010956B–STD     ––     SEMATECH
Provisional   Test   Method   for   Analyzing   the   Plastic
Surface    Composition    and    Chemical    Bonding    of
Components   of   UPW   Distribution   Systems   (ESCA
Method)
SEMASPEC     #92010936B–STD     ––     SEMATECH
Provisional   Test   Method   for   the   Determination   of
Leachable  Trace  Inorganics  from  UPW  Distribution
System Components

3 Environmental Protection Agency, 401 M St., SW, Washington, DC
20460, USA
4 SEMATECH, 2706 Montopolis Dr., Austin TX 78741

SEMI F48-0600 © SEMI 20008
17  Report Form
17. 1  Sample Information  Test Date(s): ________________
17. 1.1  Person/Company Requesting A nalysis: ________________________________________
17. 1.2  Method of Obtaining Sample:  _______________________________________________
17. 1.3  Operator and Laboratory Perfo rming Test: _____________________________________
17. 1.4  Sample Material: __________ ______Sample Supplier: ___________________
17. 1.5  Model/Lot Number: ________ _________Date of Sample: ____________________
17. 1.6  Circle one:Pre-Production Material or Final Production Material
17. 2  Methods
17. 2.1  Sample Cleaning Technique (S EMI F40 or other): _______________________________
17. 2.2  Digestion Technique (check on e)
 Dry Ashing Closed Vessel
Type of Crucible: _______Vessel Material: _____________
Temperature of Ashing: _____°CReaction Conditions: _______________________
Time of Ashing: _________ hours  _______________________________
17. 3  Results
Table 1  Trace Metals in Bulk Polymer Worksheet
ElementDetection Limit
(μg/g)
Procedural Blank
(μg/g)
Result with Blank
Subtraction
(μg/g)
% Recovery
Aluminum
Barium
Calcium
Chromium
Cobalt
Copper
Iron
Lead
Lithium
Molybdenum
Magnesium
Manganese
Nickel
Potassium
Sodium
Strontium
Tin
Titanium
Zinc
Zirconium

SEMI F48-0600 © SEMI 20009
NOTICE: SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standard  set
forth   herein   for   any   particular   application.      The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.    Users  are  cautioned  to
refer   to   manufacturer’s   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature
respecting   any   materials   mentioned   herein.      These
standards are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that
compliance with this standard may require use of copy-
righted  material  or  of  an  invention  covered  by  patent
rights.  By publication of this standard, SEMI takes no
position  respecting  the  validity  of  any  patent  rights  or
copyrights   asserted   in   connection   with   any   item
mentioned  in  this  standard.    Users  of  this  standard  are
expressly advised that determination of any such patent
rights  or  copyrights,  and  the  risk  of  infringement  of
such rights, are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI F49-0200 © SEMI 20001
SEMI F49-0200
GUIDE FOR SEMICONDUCTOR FACTORY SYSTEMS VOLTAGE SAG
IMMUNITY
This guide was technically approved by the Global Facilities Committee and is the direct responsibility of the
North American Facilities Committee. Current edition approved by the North American Regional Standards
Committee  on  December  15,  1999.    Initially  available  on  www.semi.org  February  2000;  to  be  published
February 2000.
1  Purpose
1. 1   A  guide  defining  a  systems  ap proach  to  power
conditioning is needed for semiconductor and flat panel
display   (FPD)   facilities.      Semiconductor   and   FPD
factories require high levels of power quality due to the
sensitivity    of    equipment    and    process    controls.
Semiconductor   and   FPD   processing   equipment   is
especially  vulnerable  to  voltage  sags.    The  facility
electrical     system     distributes     power     to     process
equipment,      support      equipment,      and      facility
infrastructure equipment.  Facility electrical distribution
systems should be designed to integrate the voltage sag
susceptibility   of   all   the   equipment   with   the   power
quality  supplied  by  the  utility.    Installing  effective  and
efficient     facilities     power     conditioning     requires
identification  of  appropriate  conditioning  technologies
and properly applying the conditioning equipment.
1. 2   Utilizing  recommendations  in   this  guide  should
result  in  effective  power  conditioning  of  the  facility
electrical   distribution   system   such   that   the   process
equipment,  associated  support  equipment  and  facilities
infrastructure   equipment   function   within   acceptable
ranges.
2  Scope
2. 1   This  guide  is  intended  for  facil ities  engineers,
equipment   engineers,   and   facilities   managers   who
specify  compatibility  requirements  for  equipment  and
utility  services,  and  in  particular  for  electrical  power
requirements such as those found in SEMI E51.
2. 2    This   document   provides   recom mendations   for
implementing  a  systems  approach  to  identification  and
resolution   of   voltage   sag   events   that   disturb   the
performance  of  semiconductor  process  equipment.    A
program  recommending  facilities  electrical  distribution
system  monitoring  and  control  strategies  for  both  the
direct  and  indirect  effect  of  voltage  sags  on  wafer
processing is outlined as follows:
• Reasons   for   monitoring   and   conditioning   (see
Section 7.1).
• Facilities    electrical    distribution    system    power
monitoring and conditioning (see Section 7.2).
• Quantifying  process  equipment  performance  (see
Section 7.3).
• Quantifying    support    equipment    and    facilities
infrastructure  equipment  performance  (see  Section
7. 4).
• Utility  power  monitoring  strategies  (see  Section
7. 5).
• Measurement  and  modeling  strategies  (see  Section
7. 6).
• Power  enhancing  and  conditioning  strategies  for
use  in  the  facilities  electrical  distribution  system
(see Section 7.7).
2. 3   This  guide  does  not  purport  to   address  safety
issues,   if   any,   associated   with   its   use.      It   is   the
responsibility  of  the  users  of  this  guide  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1  This guide addresses power qu ality monitoring and
conditioning  solutions  primarily  within  the  facilities
electrical  distribution  system.    Process  equipment  and
utility   performance   are   covered   in   other   related
standards.
3. 2  This guide does not address th e impact of voltage
sags  on  equipment  beyond  the  effect  to  the  electrical
components.      Effects   on   interdependent   equipment
interlocks are not examined in detail in this document.
3. 3   This  guide  is  not  intended  to  a ddress  design  or
materials  issues  related  to  safety  which  are  addressed
elsewhere in the SEMI guidelines (see SEMI S2).
3. 4    This   document   is   not   intended    to   supersede
international,  national  or  local  codes,  regulations  and
laws.    Each  should  be  consulted  to  ensure  that  the
equipment   meets   regulatory   requirements   in   each
location.
4  Referenced Standards
4. 1  SEMI Standards
SEMI   S2   —   Environmental,   Health,   and   Safety
Guideline for Semiconductor Manufacturing Equipment

SEMI F49-0200 © SEMI 20002
SEMI E51 — Guide for Typical Facilities Services and
Termination Matrix
4. 2  IEEE Standards
1
IEEE   1100   —   IEEE   Recommended   Practice   for
Powering     and     Grounding     Sensitive     Electronic
Equipment
IEEE   1159   —   IEEE   Recommended   Practice   on
Monitoring Electrical Power Quality
IEEE   1346   —   IEEE   Recommended   Practice   for
Evaluating  Electric  Power  System  Compatibility  with
Electronic Process Equipment

NOTE 1: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
5  Terminology
5. 1  facilities  infrastructure  equipm ent  —  component,
modules,  and  systems  used  to  transport  materials  like
chemicals,   power,   water,   effluent,   and   exhaust   in
semiconductor factories.
5. 2  process   equipment   —   fabricati on   equipment,
inspection  equipment,  and  cassette  stage  equipment
used in semiconductor manufacturing.
5. 3  support equipment — ancillary  equipment not part
of the process equipment main chassis.
5. 4  voltage sag — an rms reductio n in the ac voltage,
at  power  frequency,  for  durations  from  half-cycle  to  a
few seconds.
6  Impact
6. 1  The primary goal of this guide  is mitigation of the
effects   of   utility   voltage   sags   on   semiconductor
processing equipment, support equipment, and facilities
infrastructure    equipment.        A    voltage    sag    event
adversely   affecting   only   one   of   these   pieces   of
equipment    can    cause    processing    equipment    to
malfunction.    Both  the  direct  and  indirect  effect  of
voltage sags on process equipment should be managed.
Voltage  sags  can  effect  process  equipment  directly
through   the   electrical   power   points   of   connection.
Voltage    sags    can    also    indirectly    effect    process
equipment  through  fluctuations  in  air,  gas,  liquid,  and
other  utility  streams  caused  when  voltage  sags  effect
support      equipment      and      facility      infrastructure
equipment.
6. 2    Examples   of   processing   equipm ent,   support
equipment,  and  facilities  infrastructure  equipment  are

1 The Institute of Electrical and Electronic Engineers, Inc. (IEEE),
345 East 47th Street, New York, NY 10017-2394, USA
listed  below.    The  interaction  of  these  three  types  of
equipment is shown in Figure 1.
6. 2.1  Process Equipment
• Etch (dry & wet)
• Film deposition (CVD & PVD)
• Thermal
• Surface prep and clean
• Photolithography (exposure & coater/developer)
• Chemical Mechanical Polishing
• Ion Implant
• Metrology
• Automated test
6. 2.2  Support Equipment
• Vacuum  system  (roughing,  turbo,  and  cryogenic
pumps)
• RF generator
• Residual gas analyzer (RGA)
• Water heater
• Chiller
• Photolithography  stepper  laser  light  source  power
supplies
• Photolithography      coat/developer      temperature/
humidity controllers
• Emission control (burn boxes)

SEMI F49-0200 © SEMI 20003


Utility Supplied
Power
Facilities
Electrical
Distribution
System
Infrastructure
Equipment
Process
Equipment
Support
Equipment
Utility
Services
Facilities
Systems
Wafe
r
Processing
Systems
Power Monitoring
and Conditioning
Power Monitoring
and Conditioning
Ride-Through
Techniques
See industry guide for
electric utility voltage
sag performance.
Covered in this guide for
semiconductor factory systems
voltage sag immunity
See industry specification and
test method for semiconductor
processing equipment voltage
sag immunity.
Ride-Through
Techniques

Figure 1
Power Quality Interfaces
(See Related Documents section.)


Scrubber Exhaust Distribution
Fume Scrubber
Scrubber Fan
Process Cooling Water
Distribution
PCW Pump
Process Vacuum
Pump & Motor
Process Vacuum
Distribution
Clean Dry Air Distribution
CDA Motor &
Compressor
Power Source
Wafer Processing
Tool
Power
Process Mechanical
Fab Power
Distribution
Tool High
Vacuum Pump
Tool Closed
Loop Chiller
DC
Tool RF
Generator

Figure 2
Typical Interconnection of Facility Infrastructure Equipment with Process and Support Equipment


SEMI F49-0200 © SEMI 20004
6. 2.3  Facilities Infrastructure Equip ment
• Exhaust systems (scrubbers and VOC exhaust fans
and controls)
• Process cooling water system (pumps and controls)
• Air compressors (and controls)
• Vacuum system (pumps and controls)
• Bulk and specialty gas distribution systems (pumps
and controls)
• Liquid  chemical  distribution  systems  (pumps  and
controls)
• Power distribution systems
7  Power Monitoring and Co nditioning
Recommendations
7. 1  Reasons for Monitoring and C onditioning
7. 1.1   Semiconductor  manufacturing   facility  electrical
distribution  systems  should  be  designed  to  transport
power  to  process  equipment,  support  equipment,  and
other    facilities    infrastructure    equipment    without
degradation to the electrical power quality.  The system
should  recognize  electrical  power  that  does  not  meet
specification and provide proper power conditioning so
as not to impact wafer processing.
7. 1.2   Power  monitoring  is  used  to  m easure  electrical
system  power  quality  performance  for  the  following
reasons.
a) Monitoring     data     can     be     compared     to
equipment    voltage    sag    specifications    to
identify problems.
b) Selection  and  control  of  power  conditioning
devices    are    dependent    upon    monitoring
measurements.
7. 1.3  Power conditioning is implem ented to correct for
gaps  in  equipment  voltage  sag  susceptibility  and  point
of  connection  electrical  power  performance.    Power
conditioning  is  occasionally  implemented  where  the
risk  of  unacceptable  equipment  performance  is  high,
where   equipment   performance   tolerance   is   outside
specifications,   and   where   equipment   interruption   is
costly.
7. 2  Monitoring and Conditioning  Program
7. 2.1     Quantify    the    process    equipmen t,    support
equipment,    and    facilities    infrastructure    equipment
voltage   sag   susceptibility   using   industry   standard
specifications  and  test  methods.  (See  Sections  7.3  and
7. 4.)
7. 2.2   Set-up  monitors  for  utility  pow er  quality  (see
Section 7.5).
7. 2.3   Measure  and/or  model  the  imp act  of  the  facility
electrical   distribution   system   on   the   utility   power
delivered to the process equipment (see Section 7.6).
7. 2.4    Model   and   evaluate   cost/benef it   of   power
conditioning  solutions  where  there  are  gaps  or  high
risks.        Select    and    implement    identified    power
conditioning   solutions   into   the   facilities   electrical
distribution system.  (See Section 7.7.)
7. 2.5    Maintain   the   installed   power   c onditioning
equipment  and  monitor  the  power  either  continuously
or   periodically   to   assure   performance   and   evaluate
results.
7. 3  Process Equipment Performan ce
7. 3.1    Facility   design   specifications   s hould   include
requirements   for   processing   equipment   voltage   sag
immunity (see industry specification for semiconductor
processing   equipment   voltage   sag   immunity).   (See
Related Documents section.)
7. 3.2   Variability  in  process  equipme nt  manufacturing
and supplied utility power quality preclude interruption
free   manufacturing.      This   variation   comes   from
multiple sources:
a) Verification    of    representative    samples    of
equipment  does  not  guarantee  100%  of  the
equipment will meet the same requirements.
b) Factors    such    as    location,    load    changes,
capacity,       weather,       and       transmission/
distribution  equipment,  limit  how  well  utility
power quality can be controlled.
c) The  tests,  themselves,  are  not  variation  free;
the  test  equipment,  calibration  processes,  and
the    test    personnel    can    introduce    further
variability.
7. 3.3   The  risk  of  manufacturing  inte rruptions  can  be
considerably reduced through two approaches.
a) Create a margin between allowable voltage sag
for   the   supplied   utility   power   and   process
equipment voltage sag immunity.
b) Provide  added  protection  from  interruptions
due  to  voltage  sag  events  by  enhancing  the
power   quality   in   the   facilities   distribution
system.    (This  approach  is  covered  in  this
document,  see  Scope  and  the  middle  segment
of Figure 1.)

SEMI F49-0200 © SEMI 20005
7. 4  Support  and  Facilities  Infrastr ucture  Equipment
Performance
7. 4.1  The effects that support equipm ent and facilities
infrastructure  equipment  have  on  process  equipment
should be considered.
7. 4.2  Process and support equipmen t typically contain
flow,   temperature,   or   pressure   sensors.      If   facility
infrastructure  equipment  malfunctions  due  to  a  voltage
sag event, the diminished flow of a required fluid or gas
will  cause  the  support  or  process  equipment  to  alarm,
malfunction, or stop.
7. 4.3      A     typical     interconnection     of     fa cility
infrastructure   equipment   with   process   and   support
equipment   is   illustrated   in   Figure   2.      The   various
support  and  facilities  infrastructure  systems  that  can
have    an    indirect    effect    on    process    equipment
performance  when  subjected  to  voltage  sag  events  are
listed below:
• Process cooling water,
• Scrubbed exhaust,
• Volatile organic compound (VOC) exhaust,
• Gas     cabinets     and     gas     monitoring     system
controllers,
• Compressed dry air,
• Process vacuum,
• Automated wafer transport systems,
• Computer      integrated      manufacturing      (CIM)
systems,
• Gas leak detection systems,
• Exhaust abatement systems, and
• Bulk chemical delivery system.
7. 4.4   Since  the  supplied  utility  powe r  quality  effects
all   the   equipment   within   the   factory,   performance
requirements   for   support   equipment   and   facilities
infrastructure  equipment  should  be  specified  using  the
same    standards    used    for    processing    equipment.
Applying     the     same     voltage     sag     susceptibility
specifications  for  semiconductor  processing  equipment
(see     industry     specification     for     semiconductor
processing  equipment  voltage  sag  immunity)  to  the
support   equipment   and   the   facilities   infrastructure
equipment  has  the  following  benefits:  (See  Related
Documents section.)
a) Use    of    the    same    specification    for    all
equipment    allows    for    consistency    when
monitoring  and  conditioning  for  the  effects  of
voltage sag events.
b) The    same    performance    verification    test
methods    as    those    used    for    processing
equipment   can   be   applied   to   the   support
equipment      and      facilities      infrastructure
equipment.
7. 4.5   Where  it  is  inefficient  to  have   support  and/or
facilities  infrastructure  equipment  supplied  to  meet  the
same  specifications  as  process  equipment,  the  facility
electrical   distribution   system   may   be   required   to
compensate for any specification gap.
7. 5  Monitoring Strategies
7. 5.1   Use  power  disturbance  monito rs  and/or  digital
fault recorders to monitor voltage to detect compliance
(see    IEEE    1159).        Monitor    current    to    identify
disturbance sources and assist in solutions.
7. 5.2   Locate  continuous  monitoring   at  the  electrical
utility  service,  all  major  facility  electrical  distribution
centers,  and  all  critical  equipment  electrical  points  of
connection.    Perform  periodic  monitoring  for  at  least
one   location   of   each   equipment   type   in   order   to
characterize  the  electrical  environment  under  normal
conditions   (i.e.,   to   create   a   baseline).      Additional
monitoring  should  be  performed  when  experiencing
unexplained  operational  problems.    A  comparison  of
baseline    data    to    monitored    data    for    equipment
experiencing  problems  is  recommended  for  evaluating
the power supplied to the equipment.
7. 5.3    Provide   time   synchronization   f or   multiple
monitors to allow for the correlation of a single voltage
sag event between all monitors.
7. 5.4   In  order  to  understand  the  imp act,  correlate
monitored   voltage   sag   events   with   known   wafer
processing effects within the process equipment.
7. 6  Measuring and Modeling Stra tegies
7. 6.1   A  single  voltage  sag  event  orig inating  outside
the  factory  will  vary  in  magnitude  and  duration  when
measured  at  differing  locations  throughout  the  facility.
This  is  largely  due  to  differing  lengths  and  type  of
distribution   conductors   feeding   equipment   located
throughout   the   facility.      In   addition,   the   electrical
interactions  of  the  reactive  and  non-linear  elements  of
equipment effect the voltage sag measurements.
7. 6.2   Voltage  sag  events  that  origina te  within  the
facility   electrical   distribution   system   will   vary   in
magnitude  and  duration  when  measured  at  differing
locations  throughout  the  facility.    These  voltage  sag
events are usually a result of a current flow increase and
the   associated   voltage   drop   across   the   conductors
between  the  source  and  load.    The  location  along  the
current   flow   path   greatly   effects   the   voltage   sag
measured.

SEMI F49-0200 © SEMI 20006
7. 6.3   Computer  design  tools  should   be  used  to  model
the  electrical  distribution  system  in  order  to  calculate
anticipated  voltage  sags  for  utility  or  site  originated
faults.      If   limitations   exist   such   that   voltage   sag
monitors  are  not  located  at  every  piece  of  equipment,
then    event    measurements    can    be    adjusted    from
modeling  information  to  determine  voltage  sag  values
at other locations.
7. 6.4   As  a  means  for  measuring  effe ctiveness  in  a
business environment, it would be useful to statistically
model   the   effect   of   voltage   sag   events   on   the
manufacturing  processes.    The  variations  mentioned  in
Section 7.3.2, above, preclude a deterministic approach
to how well a wafer fabrication process will perform for
a  given  voltage  sag  event.    A  statistical  correlation
model  would  aid  in  estimating  the  correlation  between
voltage sags and manufacturing cost, and can be used to
validate  the  effectiveness  of  power  enhancement  and
conditioning programs.
7. 6.5  Example of Voltage Sag Event  Modeling
7. 6.5.1    A   voltage   sag   event   originatin g   on   the
electrical    utility    system    often    exhibits    different
characteristics  when  measured  at  different  locations  on
facility electrical distribution systems.  The variance in
voltage  sag  characteristics  can  create  different  effects
on   similar   equipment.      Variances   can   usually   be
explained by examining 1) the characteristics of voltage
sag  at  the  utility  interfaces,  2)  the  type  and  connection
configuration  of  voltage  transformations,  and  3)  the
voltage levels and corresponding phase relationships at
the  terminals  of  infrastructure,  support,  and  process
equipment within the facility.
7. 6.5.2   The  types  of  faults  that  can  oc cur  on  a  utility
system are:
• Line to line to line,
• Line to line to line to ground,
• Line to line,
• Line to line to ground, and
• Line to ground.
7. 6.5.3   The  utility  network  can  be  mo deled  to  predict
the  voltage  sag  characteristics  due  to  various  types  of
faults     at     the     electrical     interfaces     between     a
semiconductor  manufacturing  facility  and  utility.    The
most common utility system fault type is a single line to
ground  fault.    An  example  of  the  translation  of  a
voltage  sag  resulting  from  a  line  to  ground  voltage  sag
event is provided in the following sections.
7. 6.5.4    Typical   voltage   transformation s   from   the
utility    interface    to    utilization    voltage    levels    are
illustrated  in  Figure  3.    Under  normal  conditions,  the
three  phase  voltages  are  all  approximately  equal  and
displaced  120º  from  each  other.    During  a  voltage  sag
event   due   to   an   unbalanced   fault,   this   relationship
changes.  Delta-wye transformers between the origin of
the  fault  and  the  equipment  being  studied  will  further
affect  the  phase  and  magnitude  relationships.    The
degree  to  which  voltage  phase  shift  and  magnitude
changes  occur  at  each  transformation  throughout  the
facility  distribution  system  should  be  considered  when
examining impacts on individual equipment.


Transmission System
Medium Voltage Distribution System
138kV (L-L Nominal)
φ
C
φ
B
φ
A
Substation Transformer
First Step-down Transformer
Second Step-down Transformer
Low Voltage Distribution System
F
A
C
I
L
I
T
Y
U
T
I
L
I
T
Y
12. 47 kV (L-L Nominal)    7.2 kV (L-N Nominal)
480 or 208 volt (L-L)    277 or 120 volt (L-N)
208 volt (L-L)       120 volt (L-N)
Figure 3
Typical Semiconductor Factory Voltage
Transformations
7. 6.5.5  Figure 4 illustrates the variatio ns in magnitude
of  a  voltage  sag  event  within  a  facility  during  a  single
line to ground fault on a utility transmission line.  This
example  illustrates  a  worst  case  situation,  where  a
single-phase  fault  occurs  at  a  substation  transformer
primary-side    terminal.    (See    Related    Documents
section.)
7. 6.5.6  Many devices in process, supp ort, and facilities
infrastructure  equipment  are  not  connected  to  all  three
phases.    Because  the  voltage  sag  response  of  these
devices  may  dictate  the  sag  response  for  the  entire
equipment  assembly,  understanding  device  connection
configuration  and  sag  response  characteristics  is  of
critical  importance.    Sag  depth  and  duration,  the  point
on   the   wave   at   which   the   sag   begins,   and   the
corresponding  phase  relationships  are  all  known  to  be

SEMI F49-0200 © SEMI 20007
factors   in   determining   the   sag   response   of   many
common devices.


138kV (L-L Nominal)
φ
C
φ
B
φ
A
Substation Transformer
First Step-down Transformer
Second Step-down Transformer
12. 47 kV (L-L Nominal)    7.2 kV (L-N Nominal)
480 or 208 volt (L-L)         277 or 120 volt (L-N)
208 volt (L-L)                    120 volt (L-N)
Sag Voltage
(% of Normal)
V
AB
58%
V
BC
100%
V
CA
58%
Sag Voltage
(% of Normal)
V
AB
88%
V
BC
88%
V
CA
33%
Sag Voltage
(% of Normal)
V
AN
58%
V
BN
100%
V
CN
58%
Sag Voltage
(% of Normal)
V
AB
58%
V
BC
100%
V
CA
58%
Sag Voltage
(% of Normal)
V
AB
88%
V
BC
88%
V
CA
33%
Sag Voltage
(% of Normal)
V
AN
88%
V
BN
88%
V
CN
33%
Sag Voltage
(% of Normal)
V
AN
58%
V
BN
100%
V
CN
58%
φ
Α
L-G Fault
F
A
C
I
L
I
T
Y
U
T
I
L
I
T
Y
Figure 4
Example of Voltage Sag Levels during a Single Line
to Ground Fault
7. 6.5.7   Figure  4  illustrates  the  importa nce  of  phase
relationships  in  the  sag  response  of  a  120-volt  control
circuit  emergency  off  (EMO)  relay  which  is  connected
to   phase   A   (or   phase   B)   in   a   208-volt   facility
distribution  system  derived  with  only  one  low  voltage
transformation.  In this example the voltage sags to only
88%  of  nominal  on  these  phases,  but  drops  to  33%  of
nominal  on  phase  C.    The  industry  specification  for
semiconductor    processing    equipment    voltage    sag
immunity  does  not  specify  that  equipment  ride-through
a sag to 33% of nominal voltage.
7. 6.5.8   If  two  low  voltage  transformat ions  were  used
to  derive  the  208-volt  facility  system  (see  Figure  4),
phase  B  voltage  would  be  unaffected  during  the  utility
voltage  sag,  but  phases  A  and  C  would  sag  to  58%  of
nominal.        Industry    standards    typically    require
equipment   to   ride-through   a   sag   of   this   depth.
However,  a  tolerance  designed  into  the  facility  system
may    be    necessary    to    provide    adequate    system
protection.
7. 7  Power Enhancing and Conditi oning Strategies
7. 7.1   While  it  is  desirable  to  reduce   and  eliminate
battery    storage    devices    provided    by    equipment
suppliers  with  individual  pieces  of  process  equipment,
battery   storage   devices   may   be   appropriate   as   a
centralized or distributed part of a facilities distribution
system (when evaluated in a systems approach to power
enhancement and conditioning).
7. 7.2   Facility  power  systems  enhanc ements  should  be
examined  on  a  case-by-case  approach  to  determine  the
appropriate   measure   of   power   conditioning   to   be
applied.    In  general,  the  following  types  of  equipment
are  frequently  used  to  mitigate  the  effects  of  utility
voltage sag events in semiconductor factories.
• Constant voltage transformers (typically applied on
control systems)
• Diesel engine based uninterruptible power supplies
(UPS)
• Magnetic synthesizers
• Motor-generators
• Rotary UPS
• Static UPS
• Static   transfer   switches   with   alternate   power
systems
7. 7.3    Other   power   enhancement   tech niques   and
equipment   available   for   use   in   facilities   electrical
distribution  systems  include  but  are  not  limited  to  the
following:
• Capacitors for voltage regulation,
• Filters for power conditioning,
• High resistance grounding,
• Isolation of electrical circuit from other loads,
• Power line conditioners,
• Primary  and  secondary  selective  rather  than  radial
distribution systems,
• Super-conducting      magnetic      energy      storage
systems,
• Transformer load tap changers, and
• Voltage regulators.
7. 7.4  Power enhancement and condi tioning equipment
can   be   applied   at   selected   equipment   components,
selected  distribution  circuits,  or  selected  distribution
buses.    For  power  conditioning  equipment  application
guidelines see IEEE 1100 and 1346.

SEMI F49-0200 © SEMI 20008
8  Related Documents
8. 1  SEMI Standards
Under development.
8. 2  CENELEC Standard
2
EN    50082-2    —    Electromagnetic    compatibility    -
Generic     immunity     standard,     Part     2.     Industrial
environments.
8. 3  IEC Standard
3
IEC   61000-4-11   —   Electromagnetic   Compatibility
(EMC)  -  Part  4:  Testing  and  Measuring  Techniques  -
Section   11:   Voltage   Dips,   Short   Interruptions   and
Voltage Variations Immunity Tests
8. 4  IEEE Standards
1
IEEE  Std  493  —  IEEE  Recommended  Practice  for  the
Design  of  Reliable  Industrial  and  Commercial  Power
Systems
IEEE   Std   1250   —   IEEE   Guide   for   Service   to
Equipment      Sensitive      to      Momentary      Voltage
Disturbances
NOTE 2: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
NOTICE:      SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  guides  set
forth   herein   for   any   particular   application.      The
determination of the suitability of the guide is solely the
responsibility  of  the  user.    Users  are  cautioned  to  refer
to  manufacturer’s  instructions,  product  labels,  product
data sheets, and other relevant literature respecting any
materials mentioned herein.  These guides are subject to
change without notice.
The  user’s  attention  is  called  to  the  possibility  that
compliance   with   this   guide   may   require   use   of
copyrighted  material  or  of  an  invention  covered  by
patent rights.  By publication of this guide, SEMI takes
no  position  respecting  the  validity  of  any  patent  rights
or  copyrights  asserted  in  connection  with  any  item
mentioned   in   this   guide.      Users   of   this   guide   are
expressly advised that determination of any such patent
rights  or  copyrights,  and  the  risk  of  infringement  of
such rights, are entirely their own responsibility.

2 European Committee for Electrotechnical Standardization
(CENELC), Rue de Stassart, 35, B - 1050 Brussels
3 International Electrotechnical Commission (IEC), 3 rue de
Varembé,  PO Box 131, 1211 Geneva 20, Switzerland
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International),3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI F50-0200 © SEMI 20001
SEMI F50-0200
GUIDE FOR ELECTRIC UTILITY VOLTAGE SAG PERFORMANCE FOR
SEMICONDUCTOR FACTORIES
This guide was technically approved by the Global Facilities Committee and is the direct responsibility of the
North American Facilities Committee. Current edition approved by the North American Regional Standards
Committee  on  December  15,  1999.    Initially  available  on  www.semi.org  February  2000;  to  be  published
February 2000.
1  Purpose
1. 1      This     guide     provides     a     framewo rk     for
semiconductor     and     flat     panel     display     (FPD)
manufacturers and their electric utility service providers
to   minimize   the   effect   of   voltage   sag   events   on
semiconductor  processing.    In  particular,  this  guide
focuses  on  electric  utility  power  quality  performance
goals  that  are  complementary  to  voltage  sag  immunity
levels   for   semiconductor   processing   equipment   and
facilities   infrastructure   equipment   (see   Figure   1).
Recommendations    for    measuring    and    evaluating
voltage   sag   performance,   evaluating   utility   system
enhancements,   and   implementation   of   a   continuous
improvement  process  are  included  since  no  electric
utility industry standards exist.
1. 2   Utility  systems  are  designed,  c onstructed,  and
operated   to   meet   utility   industry   regulations   and
requirements.        One    important    requirement    for
semiconductor   factories   is   power   system   reliability.
Utilities   measure   reliability   in   minutes   of   voltage
outages per customer per year.  Semiconductor factories
require  a  high  level  of  power  system  reliability,  any
service   outage   is   usually   unacceptable.      A   second
important requirement is power quality.  Power quality
relates  to  disturbed  voltage  waveforms,  not  outages.
When  utilities  implement  measures  to  increase  power
system   reliability,   power   quality   can   be   adversely
affected.  The structured approach defined in this guide
can   achieve   high   levels   of   power   quality   without
sacrificing power reliability.
1. 3   The  intent  of  this  guide  is  to  he lp  semiconductor
manufacturers   achieve   both   high   levels   of   power
reliability   and   power   quality   from   energy   utility
providers.    By  becoming  familiar  with  the  cause  and
effect relationships of voltage sag events on the utility’s
side of the electric meter, semiconductor manufacturers
and   electric   utilities   can   work   together   to   pursue
efficient   solutions   for   improved   voltage   sag   ride-
through in semiconductor factories.
2  Scope
2. 1    The   scope   of   this   guide   extend s   beyond   a
discussion   of   typical   electric   utility   reliability   and
quality    improvement    techniques    to    developing    a
continuous   improvement   process   for   electric   utility
voltage sag performance (depicted graphically in Figure
2).  Factors in this process include the following:
• Define   desired   performance   criteria   by   setting
goals for voltage sag event duration and magnitude
(see Section 6.1).
• Measure   performance   for   both   proposed   and
existing  semiconductor  factory  sites  (see  Section
6. 2).
• Summarize voltage sag event data and identify the
impact  on  semiconductor  processing  and  facilities
infrastructure equipment (see Section 6.3).
• Recommend       improvements       that       include
consideration     of     cost,     benefit,     and     risk.
Improvements   can   include   corrective   action   to
eliminate    system    faults,    changes    to    service
configurations,   and   power   enhancements   (see
Section 6.4).
• Select  and  implement  improvements.  Establish  a
continuous improvement process (see Section 6.5).
2. 2    For   the   purposes   of   this   docum ent,   the   term
Electric  Utility  refers  to  energy  service  providers  (that
sell  energy  to  semiconductor  manufacturers)  and/or
electric  transmission  and  distribution  providers  (that
deliver energy through their power lines).
2. 3   This  guide  does  not  purport  to   address  safety
issues,   if   any,   associated   with   its   use.      It   is   the
responsibility  of  the  users  of  this  guide  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.

SEMI F50-0200 © SEMI 20002

Utility Supplied
Power
Facilities
Electrical
Distribution
System
Infrastructure
Equipment
Process
Equipment
Support
Equipment
Utility
Services
Facilities
Systems
Wafer
Processing
Systems
Power Monitoring
and Conditioning
Power Monitoring
and Conditioning
Ride-Through
Techniques
Covered in this

guide
for electric utility
voltage sag
performance
See industry guide for
semiconductor factory systems
voltage sag immunity.
See industry specification and
test method for semiconductor
processing equipment voltage
sag immunity.
Ride-Through
Techniques

Figure 1
Power Quality Interfaces
(See Related Documents section.)


Define Desired Performance
- Voltage Sag Magnitude/Duration
- Maximum Deviations per Year
Existing Sites
-
Define Monitor Protocol
- Monitor Performance
- Track and Report Events
Proposed Sites
- Define Site Selection Factor
- Monitor near Proposed Site
- Model Events
Summarize and Evaluate Data
- Chart Data
- Correlate Events to Impact on Factory
- Categorize Events within Bins
Recommend Improvements
- Corrective Actions for System Faults
- Identify Service Configurations
- Review Enhancement Technologies
Select and Implement Improvements
-
Prioritize System Improvements
- Identify Action Plan and Define Expectations
- Implement Solutions

Figure 2
Continuous Improvement Process


SEMI F50-0200 © SEMI 20003
3  Limitations
3. 1  This guide addresses electric u tility power quality
monitoring   and   enhancement   techniques   primarily
related    to    semiconductor    factory    energy    utility
providers.    Process  equipment  and  factory  systems  are
covered in other related standards.
3. 2   This  standard  is  not  intended  t o  address  design  or
materials  issues  related  to  safety  which  are  addressed
elsewhere in the SEMI guidelines (see SEMI S2).
3. 3    This   document   is   not   intended    to   supersede
international,  national  or  local  codes,  regulations  and
laws.    Each  should  be  consulted  to  ensure  that  the
equipment   meets   regulatory   requirements   in   each
location.
4  Referenced Standards
4. 1  SEMI Standards
SEMI   S2   —   Environmental,   Health,   and   Safety
Guideline for Semiconductor Manufacturing Equipment
4. 2  IEEE Standards
1
IEEE   1159   —   IEEE   Recommended   Practice   for
Monitoring Electric Power Quality
IEEE  1250  —  IEEE  Guide  for  Service  to  Equipment
Sensitive to Momentary Voltage Disturbances
IEEE   1346   —   IEEE   Recommended   Practice   for
Evaluating  Electric  Power  System  Compatibility  with
Electronic Process Equipment

NOTE 1: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
5  Terminology
5. 1  electric  utility  —  the  company   identified  as  the
contractual  provider  of  electrical  power  and  energy  to
the  customer  point  of  delivery.    Also  known  as  the
electric service provider.
5. 2  voltage  sag  —  an  rms  reductio n  in  the  ac  voltage
at  power  frequency  for  durations  from  half-cycle  to  a
few  seconds  (see  IEEE  1250).    Also  known  as  voltage
dip.
6  Electric Utility Voltage Sa g Performance
Recommendations
6. 1  Define Voltage Sag Performan ce
6. 1.1    Defining   a   goal   for   acceptable    voltage   sag
duration   and   magnitude   is   useful   in   establishing   a
benchmark     or     reference     point     for     monitoring

1 The Institute of Electrical and Electronic Engineers, Inc., 345 East
47th Street, New York, NY 10017-2394, USA
improvement.  Events can be identified and categorized
within    the    realm    of    the    electric    utility    or    the
semiconductor  manufacturer.    Industry  specifications
for  semiconductor  processing  equipment  voltage  sag
immunity   (which   define   the   level   of   voltage   sag
immunity    required    for    semiconductor    processing
equipment)  are  recommended  as  a  performance  goal.
Using  this  goal  for  the  performance  of  electric  utility
services  will  provide  consistency  with  semiconductor
processing    equipment    capabilities.    (See    Related
Documents section.)
6. 1.2  The goal for the maximum num ber of deviations
from specified performance per year is zero.  However,
it   is   useful   to   recognize   that   utility   generation,
transmission,  and  distribution  systems  are  subject  to
environmental   and   regulatory   conditions   that   may
negatively    influence    the    ability    to    provide    zero
deviations on a continuous basis.
6. 1.2.1     Document    regulatory    and    envi ronmental
requirements that will limit the electric utility’s choices
when    implementing    improvements,    such    as    rate
structures or rights-of-way.
6. 2  Measure Performance
6. 2.1  Measuring   Performance   at   Pr oposed   Semi-
conductor Factory Sites
6. 2.1.1   Factory  site  selection  teams  sh ould  consider
the   importance   of   power   and   power   quality   when
evaluating potential sites.  To insure that power quality
considerations   are   properly   factored   into   the   site
selection  process,  a  selection  factor  should  be  assigned
to power quality and reliability criteria.
6. 2.1.2   Utility  electrical  service  config urations  should
be    considered    when    measuring    and    comparing
reliability  and  power  quality  performance  at  different
locations.    The  load  profile  for  the  proposed  factory  is
used  to  determine  the  standard  utility  electrical  service
configuration.    Usually,  larger  factories  (>  10  MW)
exceed allowable loading for lower voltage distribution
systems  (<  69  kV),  therefore  a  high  voltage  service  is
the   typical   configuration   for   larger   semiconductor
factories.    Selection  of  the  highest  available  service
voltage  is  preferred  for  reliability  due  to  two  factors.
First, the area of exposure is greater for lower voltages
since they include both higher and lower voltage system
distribution   lines   and   equipment.      Second,   higher
voltage  systems  can  provide  energy  to  lower  voltage
system  faults  with  little  or  no  impact  to  high  voltage
system  voltages,  whereas,  lower  voltage  systems  are
greatly impacted by faults not buffered by transformers.
6. 2.1.3   The  preferred  method  for  com paring  power
quality  and  reliability  from  different  locations  involves
creating a summary of the number of voltage sag events

SEMI F50-0200 © SEMI 20004
that  fall  into  different  magnitude-duration  categories.
Data  from  different  categories  should  be  adjusted  by
weighting  factors  to  enable  valid  comparison.    See
IEEE  1346  for  suggested  voltage  sag  event  category
and weighting factors.
6. 2.1.4  Model events.
6. 2.1.4.1   If  actual  disturbance  data  is  no t  available,
modeling    results    based    on    simulation    of    actual
electrical  faults  should  be  calculated  and  reviewed.
These   studies   called   area   of   vulnerability   analysis
determine   transmission   lines   and   equipment   where
faults can adversely impact a semiconductor factory.
NOTE  2:  As  monitoring  data  is  later  collected,  the  modeling
results should be validated.
6. 2.1.5  Monitor events near proposed  site(s).
6. 2.1.5.1   Define  monitoring  protocol  pe r  the  method
outlined in Section 6.2.2.2.
6. 2.1.5.2   Upon  establishing  an  appropri ate  electrical
service   configuration,   reliability   and   power   quality
information relative to that service configuration should
be requested from the electric utility.  Depending upon
utility   rate   structures,   semiconductor   manufacturers
may  be  required  to  pay  separately  for  this  analysis.
Where   available,   the   information   provided   should
include actual disturbance data from other selected sites
collected  in  accordance  with  IEEE  1159.    Strive  for
data   on   sites   that   have   similar   electrical   service
configurations  and  are  located  electrically  close  to  the
proposed site (e.g., ideally, from the same transmission
or distribution line).
6. 2.2  Measuring   Performance   at   Ex isting   Semi-
conductor Factory Sites
6. 2.2.1  Preparation for monitoring.
6. 2.2.1.1   Review  existing  industry  typic al  voltage  sag
performance data for utility point-of-service.
6. 2.2.1.2  Review existing site voltage sa g performance
data,  usually  taken  at  a  variety  of  locations  within  the
factory.
6. 2.2.1.3      Review     existing     utility     voltage      sag
performance  data  for  the  area  around  the  factory  site,
usually  a  20−30  mile  radius  of  the  service  area  is
sufficient.
6. 2.2.1.4   Review  existing  utility  area  of   vulnerability
modeling  studies  for  power  flow  and  system  power
quality.
6. 2.2.1.5      Document     the     existing     utility     a nd
manufacturing   site   electrical   design   and   operating
procedures.
6. 2.2.2  Define the monitoring protoco l.
6. 2.2.2.1   Define  where  measurement  de vices  will  be
located, how many to be installed, who will operate and
maintain   them,   and   what   are   the   standards   for
calibration.
6. 2.2.2.2     Define    sensitivity    settings.        Us ually
magnitude triggers are set as tightly as possible (95% of
nominal voltage).  This will generate a large amount of
data  that  will  verify  trends  and  maximize  comparison
opportunities  between  cause  and  effect.    After  several
evaluation  cycles  magnitude  triggers  can  be  moved
closer to the criteria (90% of nominal voltage), in order
to  focus  improvement  efforts  on  the  more  significant
sags.
6. 2.2.3  Monitor the voltage sag perfor mance.
6. 2.2.3.1   Location  of  monitor(s)  should   be  such  that
the  utility  point-of-service  to  the  factory  is  represented
by  the  recorded  data.    Data  recorded  remote  from  the
utility  point-of-service  will  be  effected  by  other  utility
or factory system components.  Remote data should be
adjusted    to    represent    a    utility    point-of-service
equivalent.
6. 2.2.4  Track and report events.
6. 2.2.4.1  Define the reporting format fo r all events and
who  will  receive  the  reports.    (Example:  Reports  to
contain   magnitude,   duration,   time/date   stamp   and
impact   on   process,   if   known.      All   events   are
summarized    and    reported    monthly.    All    out-of-
specification  events  only  are  reported  same  day  as
event.  All reports distributed to both factory and utility
representatives.)
6. 3  Summarize Data and Evaluate  Impact
6. 3.1  Summarizing monitoring data.
6. 3.1.1   Figure  3  shows  how  monitorin g  data  can  be
graphically     reported     using     charts     representing
magnitude and duration.
6. 3.1.2    Monitored   and   measuring   pow er   quality
performance  provides  the  semiconductor  manufacturer
and their electric utility with empirical data on which to
base    voltage    sag    performance    and    improvement
decisions.


SEMI F50-0200 © SEMI 20005
0%
10%
20%
30%
40%
50%
60%
70%
80%
90%
100%
110%
1101001000
Duration (cycles)
Percent of Nominal Voltage
Figure 3
Example of Chart Summarizing
Monitoring Data

6. 3.2  Correlate data to impact on fac tory.
6. 3.2.1   For  new  sites,  categorize  volta ge  sag  events
within magnitude/duration bins.
6. 3.2.2   When  evaluating  new  sites  tha t  are  located  in
different electrical utility service areas it is beneficial to
normalize  the  voltage  sag  data  prior  to  comparison.
The  use  of  magnitude/duration  bins  to  place  historical
or  predicted  event  data  creates  discrete  blocks  of  like
kind events.  The impact on factories, causes of events,
and  potential  improvements  may  be  evaluated  on  each
individual bin or groups of bins.  Increasing the number
of magnitude/duration bins used in the data comparison
refines   the   accuracy,   but   also   increases   the   effort
needed to translate events into discrete data bins.  (See
IEEE 1346 and Related Information 2.)
6. 3.2.3   For  existing  sites,  define  categ ories  of  event
impact on manufacturing process.  For example:
• In Spec Event/No known impact
• In Spec Event/Minor impact
• In Spec Event/Major impact
• Out of Spec Event/No known impact
• Out of Spec Event/Minor impact
• Out of Spec Event/Major impact
6. 3.2.3.1   The  boundary  between  major  a nd  minor
impact  is  often  cost  or  number  of  wafer  moves  lost
converted to an equivalent cost.
6. 4  Recommend Improvements
6. 4.1  Analyze costs, benefits, and ri sks.
6. 4.1.1    The   improvement   recommend ation   process
should  include  the  equivalent  of  identifying  the  costs
related   to   the   disturbances,   the   costs   related   to
improvements,  and  the  effectiveness  of  improvements.
The  risks  should  be  identified  for  taking  no  action,  the
possibility    that    events    will    occur    during    the
implementation  of  improvements,  and  that  events  will
occur as a result of unknown factors resulting from the
installation   of   improvements.      Improvements   can
include  corrective  action  to  eliminate  system  faults,
changes     to     service     configurations,     and     power
enhancements.
6. 4.2  Corrective action to eliminate  system faults.
6. 4.2.1   The  key  to  influencing  an  elec tric  utility’s
voltage  sag  performance  is  mutual  understanding  of
measurement   and   improvement   processes.      Voltage
sags  on  utility  electric  systems  are  created  because  of
faults  (short  circuits)  caused  by  a  variety  of  events,
including   lightning,   trees   contacting   power   lines,
equipment  failure,  and  vehicles  striking  power  poles.
In  order  to  reduce  the  number  of  voltage  sag  events,  it
is  important  to  understand  the  specific  cause  of  each
fault.  Semiconductor manufacturers should request that
electric  utilities  share  disturbance  investigation  reports
and statistics.  If data is not available, or tracking fault
causes  is  not  a  focus  (many  utilities  track  only  outage
causes)   then   a   fault   tracking   system   should   be
established.
6. 4.2.2   Many  times,  the  initially  ident ified  fault  cause
(for  example  lightning)  has  a  more  specific  cause  (for
example  a  contaminated  insulator),  with  an  even  more
specific  root  cause  (for  example  salt  contamination  on
coastal    power    lines    in    dry    weather    seasons).
Identifying   this   root   cause   helps   to   establish   the
appropriate  corrective  action  (for  example,  improved
insulator    cleaning    practices    to    include    weather
considerations    on    coastal    lines).        Semiconductor
manufacturers  and  their  electric  utilities  should  work
together   to   ensure   voltage   sag   event   root   cause
identification processes exists.
6. 4.2.3   Analysis  steps  for  electric  utili ties  to  identify
the root cause of system faults include the following:
Step 1Locate the fault and identify what initiated the
fault.
Step  2Investigate  the  underlying  causes  of  the  fault
to discover the root cause.
Step 3Track faults and root causes in a database.
Step 4Identify corrective actions.
6. 4.2.4   Some  of  the  more  obvious  cor rective  actions
include  additional  animal  guards  on  exposed  electrical
devices  to  reduce  the  effects  from  inadvertent  touch.
Additional  patrols  and  early  removal  of  birds  nests,
sources   of   nesting   material,   reduction   in   potential
roosting and nesting sites, sealing any possible entry to
electrical   equipment   against   wildlife   intrusion,   and
designs  using  larger  phase  spacing  and  higher  Basic

SEMI F50-0200 © SEMI 20006
Impulse  Insulation  Levels  (BIL)  are  just  some  of  the
ways that events can be eliminated.
6. 4.3  Service Configurations
6. 4.3.1   Determine  the  factors  that  are   fixed  for  the
purposes  of  improvement  development  and  evaluation.
Some examples include, but are not limited to, physical
location of site, utility system configuration beyond the
immediate   vicinity   of   the   site,   and   electric   rate
structures.
6. 4.3.2    Once   the   electrical   reliability   a nd   power
quality  needs  of  a  semiconductor  factory  are  identified
and  the  reliability  and  power  quality  of  the  electrical
network  in  the  area  has  been  characterized,  electric
utility  service  configuration  can  be  considered.    The
electric   utility   and   the   semiconductor   manufacturer
should  jointly  develop  a  plan  that  balances  reliability
and  power  quality.    This  plan  should  consider  the
following service configuration options.
6. 4.3.3  High voltage service configura tions.
6. 4.3.3.1   Utility  electrical  service  config urations  have
a  significant  effect  on  the  levels  of  power  quality  and
reliability.    Semiconductor  manufacturing  facilities  can
typically    derive    the    highest    service    quality    and
reliability from electrical service provided at the highest
voltage level.  By bringing service to the semiconductor
factory   from   the   highest   available   voltage   system,
semiconductor facilities can eliminate their exposure to
electrical   disturbances   on   lower   voltage   systems.
Seldom   are   disturbances   that   result   from   events
originating in lower voltage systems transferred into the
higher   voltage   systems   to   any   significant   degree.
Utility  industry  studies  have  indicated  approximately
60−75%   fewer   voltage   sag   events   (below   70%   of
nominal) on the high voltage systems.
6. 4.3.3.2   For  plants  with  loads  greater  th an  10  MW,
the  highest  voltage  available  is  usually  service  at  a
voltage  between  69  kV  and  345  kV.    Voltages  above
this   range,   while   widely   used   by   utilities,   are   not
usually  economical  to  adapt  to  loads  less  than  60  MW
and  may  require  lengthy  regulatory  approvals.    If  new
overhead  power  lines  are  required,  environmental  and
public  issues  associated  with  locating  the  lines  may
reduce access to higher voltage lines.
6. 4.3.4  Redundancy.
6. 4.3.4.1    All   on-site   facilities   and   intern al   factory
distribution   should   have   at   least   N+1   component
redundancy.    Where  N  is  the  number  of  components
required  to  operate  for  maximum  loading  conditions
and +1 indicates a single additional component that will
operate  to  maintain  the  system  capability  in  the  event
that one of the original components is out-of-service.  If
the plant is to be operated with no annual shutdowns for
maintenance,  then  the  system  should  be  designed  with
enough redundancy to maintain every component in the
plant   without   dropping   service   to   any   load.      This
requires at least a dual feed system that originates with
two  or  more  utility  sources  and  continues  throughout
the   semiconductor   factory   with   appropriate   transfer
schemes to keep the loads energized at all times and to
transfer loads without interruptions.
6. 4.3.4.2   The  most  reliable  service  is  on e  where  there
are  multiple  sources  connected  in  a  network  to  the
semiconductor factory.  This allows for adequate power
supply, even if one of the sources fails.  If a network is
not  available,  a  dual  feed  system  can  be  configured  to
provide  an  immediate  transfer  to  the  backup  system  in
the case of primary source failure, reducing outage time
to  near  zero.    Additionally,  if  the  two  sources  are
independent,   a   static   transfer   switch   may   increase
quality to a level higher than that of a network.  If only
one source is available to a semiconductor factory with
a  load  of  less  than  five  megawatts,  an  alternative  is  on
site   generation   combined   with   a   voltage   sag   ride-
through system.
6. 4.3.5  Minimize exposure.
6. 4.3.5.1   When  choosing  source  configu rations,  it  is
important  to  consider  exposure  at  the  semiconductor
factory   site.      The   more   line   length   the   factory   is
connected to, the more exposure there is.
a)It might not be desirable to have three lines serving
the  plant  if  one  is  a  long  line  that  is  prone  to
failures.  As a rule of thumb, more than three lines
connected in a network may reduce quality without
adding significantly to reliability.
b)    If service is taken from a distribution class circuit,
then  consider  purchasing  a  so-called  express  or
dedicated feeder from the utility to isolate the plant
from neighboring facilities.
c)Review the line routes with the utility and consider
changes  to  reduce  exposures,  such  as:  where  the
poles are vulnerable to being struck by vehicles, or
where  trees  are  growing  close  to  the  transmission
lines.
6. 4.4  Power Enhancements Technol ogies
6. 4.4.1   All  disturbances  will  not  be  eli minated  from
the  utility  grid.    In  order  to  achieve  the  next  step  in
plant  protection,  it  may  be  necessary  to  implement
some  type  of  custom  power  option.    Custom  power  is
so  called  because  it  is  thought  to  be  a  custom  solution
tailored  to  the  needs  of  the  process  and  the  unique
situation  of  the  site.    Custom  power  options  usually
involve    some    type    of    power    enhancement    and
conditioning  system.    These  power  electronics  systems
are  most  often  connected  between  the  semiconductor

SEMI F50-0200 © SEMI 20007
factory  and  the  electric  utility  at  the  point  of  common
coupling  (also  known  as  the  electrical  service  point).
Many   custom   power   options   include   some   energy
storage  to  ride  through  the  disturbance,  but  they  are
usually  designed  to  carry  the  factory  through  only
momentary  interruptions.    In  fact,  for  large  factories
(>10  MW)  some  available  ride-through  systems  only
operate  to  boost  the  voltage  during  sags  and  will  not
carry  the  factory  site  through  even  short  outages.    The
trade-off is cost versus protection.  The systems should
be    economically    evaluated    as    well    as    matched
technically to the needs of the site.
6. 4.4.2  Electric utility provided custom  power options
should  be  balanced  against  factory  system  voltage  sag
immunity covered in industry guide for factory systems
voltage sag immunity.
6. 5  Select and Implement Improve ments
6. 5.1   Both  the  electric  utility  and  the   semiconductor
manufacturer  should  agree  criteria  methodology  for
prioritizing improvements.  The following are examples
of prioritization criteria.
• Expected frequency of disturbances.
• Impact     of     fault     on     electric     utility     and
semiconductor processing.
• Relative cost of system improvement.
• Ability of action to reduce effects.
6. 5.2  Select improvement to be imp lemented, identify
the   schedules   for   installation,   and   define   the   new
system performance expectations.
6. 5.3  Implement selected improvem ents.
6. 5.4   With  identified  fault  tracking  a nd  root  cause
analysis  processes  electric  utilities  will  be  in  a  position
to  communicate  the  cause  of  events,  their  corrective
actions,  and  the  impact  of  improvements.    Results  will
be both immediate and long-term, but to ensure that the
continuous  improvement  process  remains  successful,
the  impacts  of  improvements  should  be  tracked.    The
results  of  this  tracking  should  provide  feedback  to  the
continuous improvement process as a whole.
7  Related Documents
7. 1  SEMI Standards
SEMI    F42    —    Test    Method    for    Semiconductor
Processing Equipment Voltage Sag Immunity
SEMI     F47     —     Provisional     Specification     for
Semiconductor   Processing   Equipment   Voltage   Sag
Immunity
SEMI   F49   —   Guide   for   Semiconductor   Factory
Systems Voltage Sag Immunity
SEMI E51 — Guide for Typical Facilities Services and
Termination Matrix
7. 2  IEEE Standards
1
IEEE 141  IEEE Recommended Practice for Electric
Power Distribution for Industrial Plants
IEEE    446    —    IEEE    Recommended    Practice    for
Emergency  and  Standby  Power  Systems  for  Industrial
and Commercial Applications
IEEE  493  —  IEEE  Recommended  Practice  for  the
Design  of  Reliable  Industrial  and  Commercial  Power
Systems
IEEE   1100   —   IEEE   Recommended   Practice   for
Powering     and     Grounding     Sensitive     Electronic
Equipment
IEEE  1250  —  IEEE  Guide  for  Service  to  Equipment
Sensitive to Momentary Voltage Disturbances

NOTE 3: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
NOTICE:      SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  guides  set
forth   herein   for   any   particular   application.      The
determination of the suitability of the guide is solely the
responsibility  of  the  user.    Users  are  cautioned  to  refer
to  manufacturer’s  instructions,  product  labels,  product
data sheets, and other relevant literature respecting any
materials mentioned herein.  These guides are subject to
change without notice.
The  user’s  attention  is  called  to  the  possibility  that
compliance   with   this   guide   may   require   use   of
copyrighted  material  or  of  an  invention  covered  by
patent rights.  By publication of this guide, SEMI takes
no  position  respecting  the  validity  of  any  patent  rights
or  copyrights  asserted  in  connection  with  any  item
mentioned   in   this   guide.      Users   of   this   guide   are
expressly advised that determination of any such patent
rights  or  copyrights,  and  the  risk  of  infringement  of
such rights, are entirely their own responsibility.









SEMI F50-0200 © SEMI 20008
RELATED INFORMATION 1
VOLTAGE SAG PERFORMANCE AT SEMICONDUCTOR FACTORY
SITES
NOTE:  This  related  information  is  not  an  official  part  of
SEMI  F50  and  was  derived  from  the  work  of  the  originating
task   force.   This   related   information   was   approved   for
publication  by  full  letter  ballot  procedures  on  December  15,

# 1999

1999. Determination of the suitability of the material is solely
the responsibility of the user.
R1-1  Typical Electric Utility System
Performance
R1-1.1    Although  most  large  semiconductor  sites  are
served  from  dedicated  substations,  data  collected  from
utility  (medium-voltage)  distribution  circuits  can  be
useful  in  establishing  a  baseline  for  electric  utility
system    performance.        As    part    of    the    EPRI*
2
Distribution   Power   Quality   (DPQ)   study,   data   was
collected for a two-year period from approximately 300
different BMI PQNode monitors.  These monitors were
located  on  100  different  feeders  at  24  geographically
dispersed  utilities.    The  power  quality  database  created
in  conjunction  with  this  study  is  probably  the  most
extensive  in  existence.    The  data  derived  from  this
study  provides  a  statistically  based  assessment  of  the
level  of  power  quality  on  electric  utility  distribution
circuits (voltage range from 4.16kV to 34.5kV).
R1-1.2    Almost  every  category  of  power  quality  data
was collected in the DPQ study, however, only voltage
sag  and  interruption  data  is  assumed  to  be  pertinent  to
this activity.  In the DPQ study, a voltage sag event was
initiated  when  the  rms  voltage  dropped  below  95%  of
nominal  for  one  cycle  (data  analysis  was  performed
only  for  events  with  magnitudes  less  than  or  equal  to
90%).    An  interruption  event  was  initiated  when  the
voltage   dropped   below   10%   of   nominal   for   120
seconds.    Although  waveforms  were  captured  for  most
sag  and  interruption  events,  almost  all  of  the  data
analysis   was   performed   on   the   basis   of   minimum
voltage  magnitude  (as  a  percentage  on  nominal)  and
maximum duration during the event.
R1-1.3  DPQ Key Results
• The  average  interruption  rate  per  site,  per  month
was approximately 0.5.
• The  average  sag  rate  per  site,  per  month  was
approximately 4 (10% < V < = 90%).
• The   ratio   of   voltage   sags   to   interruptions   was
approximately 10:1.

2 Electric Power Research Institute, Inc., 3412 Hillview Ave., Palo
Alto, CA 94304-1395, USA
• Almost  all  voltage  sag  events  have  only  a  single
component.
• Most  voltage  sags  had  duration  of  less  than  10
cycles.
R1-1.4    The  Figure  R1-1  represents  a  summary  of  the
voltage  sag  and  interruption  data  in  a  contour  format.
The  contour  lines  on  the  graph  represent  the  expected
number  of  disturbance  events  that  are  more  severe
(longer  or  deeper)  than  the  duration  and  magnitude
grid.
R1-2  Semiconductor Factory Site Disturbance
Data
R1-2.1    The  DPQ  study  provides  a  baseline  of  the
power  quality  that  exists  on  typical  utility  distribution
systems.    However,  only  one  of  the  semiconductor
manufacturing  sites  from  which  data  was  collected  is
served   from   a   typical   utility   distribution   system.
Fourteen  of  the  fifteen  semiconductor  sites  surveyed
were served from dedicated substations owned by either
the  customer  or  the  utility.    A  comparison  between
DPQ  and  semiconductor  site  data  (for  large  facilities)
indicates  that  application  of  DPQ  data  would  yield  a
more    restrictive    tool    tolerance    standard.        It    is
recommended,  therefore,  that  data  from  semiconductor
sites  be  utilized  to  develop  an  initial  curve  and  that  the
curve be validated against DPQ data.
R1-2.2      Voltage   sag   and   interruption   data   was
accumulated      for      14      different      semiconductor
manufacturing       sites       geographically       dispersed
throughout  the  United  States.    One  additional  site  was
located  outside  of  the  United  States.    Data  represented
in    this    report    was    provided    by    semiconductor
manufacturing companies.
R1-2.3    All  of  the  data  collected  was  in  the  form  of
magnitude  and  duration  point  values.    Although  the
validity    of    characterizing    the    electrical    system
performance  is  this  manner  has  been  questioned,  it
remains  the  most  common  data  format  for  disturbance
data.
R1-2.4      The   coverage   of   the   disturbance   data   is
typically represented as the product of number of years
(or  months)  monitored  and  the  number  of  monitors
present.    In  this  report,  the  unit  for  data  coverage  is
Monitor-Years.      One   Monitor-Year   of   data   is   the
quantity  of  data  derived  by  one  monitor  for  a  one-year
period.    The  data  for  semiconductor  sites  covers  30.5

SEMI F50-0200 © SEMI 20009
Monitor-Years.    The  minimum  coverage  for  a  site  was
0. 8  Monitor-Years  (one  monitor  for  10  months).    The
site  with  the  maximum  coverage  had  eight  Monitor-
Years    of    data.    The    average    for    all    sites    was
approximately 1.9 Monitor-Years.
R1-2.5    Shown  below  is  a  scatter  graph  of  all  of  the
1076   disturbances   that   were   reported.      The   graph
represents  the  magnitudes  and  duration  for  all  voltage
sags and interruptions at all sites.  The magnitude value
is the minimum voltage level during the sag represented
as a percent of the nominal voltage.  Also shown on the
graph   is   the   pertinent   portion   of   the   Information
Technology  Industry  Council  (ITIC)  “CBEMA-curve,”
contained in IEEE Standards 446 and 1100.
R1-2.6  The  total  number  of  events  on  or  below  the
CBEMA   curve   was   166.      Thirteen   of   the   fifteen
semiconductor  sites  averaged  at  least  one  event  below
the CBEMA each year.  The average number of events
below  CBEMA,  per  site,  each  year  was  approximately
5. 4.    If  the  semiconductor  manufacturers  employed  the
new  CBEMA  curve  for  a  tolerance  standard,  most
would   have   experienced   a   significant   number   of
equipment interruptions.
Figure R1-1
Typical Electric Utility System Performance

SEMI F50-0200 © SEMI 200010
0%
10%
20%
30%
40%
50%
60%
70%
80%
90%
100%
110%
1101001000
Duration (cycles)
Percent of Nominal Voltage
Figure R1-2
Semiconductor Factory Site Disturbance Data

SEMI F50-0200 © SEMI 200011
RELATED INFORMATION 2
EXAMPLE OF MEASURED PERFORMANCE DATA REPORTED IN
MAGNITUDE AND DURATION BINS
NOTE:  This  related  information  is  not  an  official  part  of
SEMI  F50  and  was  derived  from  the  work  of  the  originating
task   force.   This   related   information   was   approved   for
publication  by  full  letter  ballot  procedures  on  December  15,
1999. Determination of the suitability of the material is solely
the responsibility of the user.
NOTE:    This  related  information  section  is  reprinted  from
IEEE 1346. The IEEE disclaims any responsibility or liability
resulting from the placement and use in the described manner.
Information is reprinted with the permission of the IEEE.
R2-1  Excerpt from IEEE 1346 – Annex D
Constructing Coordination Charts
3
R2-1.1  The use of bins to count the number of voltage
sag  events  on  a  utility  service  is  developed  in  IEEE
1346
4
as  a  step  within  a  procedure  for  developing
number of sags per year contour graphs.  The bin tables
are  themselves  useful  as  a  tool  for  comparison  of
voltage  sag  performance  of  electrical  systems.    The
paragraphs  and  tables  below  have  been  included  to
explain   the   use   of   bins   in   the   standardization   of
historical or predicted events.
R2-1.2  Table R2-1 shows a grid of nine sag magnitude
ranges in rows and five sag duration ranges in columns.
The   combination   of   nine   rows   and   five   columns
produce  a  total  of  45  magnitude/duration  bins.    Each
measured  or  predicted  sag  will  have  a  magnitude  and
duration  that  fits  in  only  one  of  the  45  bins.    The
magnitude bin is a range of sag voltages expressed as a
percentage  of  nominal.    The  time  bin  is  a  range  of  sag
durations  expressed  as  seconds.    Each  sag  will  have
associated with it one magnitude and one time bin.  The
number  in  each  table  entry  will  correspond  to  the
number  of  sags  that  have  magnitudes  and  times  in  the
same  bins.    Interruptions  would  go  into  the  lower  row
of  bins  according  to  the  duration.    The  number  bins
may   vary   depending   on   coordination   needs   for   a
particular  case.    However,  this  selection  of  45  bins  is
reasonably convenient.
R2-1.3    For  this  example,  assume  each  of  the  45  bins
contains  one  sag  event.    This  means  there  are  45  sags
per  year  and  the  characteristics  of  each  sag  fits  in  a
unique bin.  The 15 bins in the lower-right corner have

3 Reprinted with the permission of The Institute of Electrical and
Electronic Engineers, Inc. (IEEE), 445 Hoes Lane, P.O. Box 1331
Piscataway, NJ 08855-1331, USA
4

IEEE 1346 — Recommended Practice for Evaluating Electrical
Power and System Compatibility with Electronic Process Equipment.
Copyright  1998 by The Institute of Electrical and Electronic
Engineers. All Rights Reserved.
bold italic highlighting to promote understanding as this
example continues.
R2-1.4    Table  R1-2  shows  the  cumulative  number  of
sag events that are worse than or equal to each bin from
Table  R1-1.    “Worse  than”  means  the  magnitude  is
lower and the duration is longer.  The row and column
headings  show  only  single  values  instead  of  ranges.
For  example,  there  are  15  sags  in  the  50%  magnitude,
0. 4s entry of Table R1-2.  The bold number 15 in Table
R1-2  is  the  sum  of  all  15  individual  bold  entries  in
Table  R1-1.    This  means  15  sags  will  have  magnitude
less than or equal to 50% and duration longer than 0.4s.

SEMI F50-0200 © SEMI 200012
Table R2-1  Count of Events in Each Bin
Time Bin in Seconds
Magnitude Bin0.0s < 0.2s0.2s < 0.4s0.4s < 0.6s0.6s < 0.8s>/= 0.8s
> 80−90%
11111
> 70−80%
11111
> 60−70%
11111
> 50−60%
11111
> 40−50%
11
111
> 30−40%
11
111
> 20−30%
11
111
> 10−20%
11
111
0−10%
11
111
Table R2-2  Sum of Events Worse Than or Equal to Each Magnitude and Duration
MagnitudeTime in Seconds
% of Nominal
Voltage
0. 0s0.2s0.4s0.6s0.8s
90%453627189
80%403224168
70%352821147
60%302418126
50%2520
15
105
40%20161284
30%1512963
20%108642
10%54321
NOTICE: SEMI makes no warranties or representations as to the suitability of the guides set forth herein for any
particular application.  The determination of the suitability of the guide is solely the responsibility of the user.  Users
are cautioned to refer to manufacturer’s instructions, product labels, product data sheets, and other relevant literature
respecting any materials mentioned herein.  These guides are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that  compliance  with  this  guide  may  require  use  of  copyrighted
material or of an invention covered by patent rights.  By publication of this guide, SEMI takes no position respecting
the validity of any patent rights or copyrights asserted in connection with any item mentioned in this guide.  Users of
this  guide  are  expressly  advised  that  determination  of  any  such  patent  rights  or  copyrights,  and  the  risk  of
infringement of such rights, are entirely their own responsibility.

Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International),3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI F51-0200 © SEMI 20001
SEMI F51-0200
GUIDE FOR ELASTOMETRIC SEALING TECHNOLOGY
This guide was technically approved by the Global Facilities Committee and is the direct responsibility of the
North American Facilities Committee. Current edition approved by the North American Regional Standards
Committee  on  December  15,  1999.    Initially  available  on  www.semi.org  February  2000;  to  be  published
February 2000.
1  Purpose
1. 1   The  purpose  of  this  document   is  to  introduce  a
basic   guide   for   the   use   of   seals   in   semiconductor
fabrication  equipment.    Also,  to  introduce  the  diverse
chemical   and   physical   requirements   for   the   many
process  applications,  and  to  reduce  cost  of  ownership
and  improve  up-time  through  the  use  of  appropriate
sealing materials.  It is important that equipment users,
suppliers,  OEMs,  and  seal  manufacturers  use  the  same
terminology  and  that  communication  can  take  place  at
the   same   level   so   that   actual   performance   of   the
equipment can be discussed.
2  Scope
2. 1   This  guide  is  applicable  to  the   use  of  seals  in
specific  operating  environments  used  in  the  fabrication
of   semiconductor   devices.      The   guide   will   aid   in
defining  the  seal  parameters  for  the  various  process
environments.    It  includes  those  elastomeric  seals  that
come in contact with process liquids and or gases.
2. 2   This  guide  does  not  purport  to   address  safety
issues,   if   any,   associated   with   its   use.   It   is   the
responsibility  of  the  users  of  this  guide  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1    The   application   of   this   guide   is    limited   to
elastomeric  sealing  technology  performance  as  used  in
semiconductor    manufacturing    and    related    process
equipment.
4  Referenced Standards
4. 1  SEMI Standards
SEMI C3 — Specifications for Gases
SEMI   D9   —   Definitions   for   Flat   Panel   Display
Substrates
SEMI  E45  —  Test  Method  for  the  Determination  of
Inorganic Contamination from Minienvironments
SEMI  F21  —  Classification  of  Airborne  Molecular
Contaminant Levels in Clean Environments
SEMI P5 — Specification for Pellicles
SEMI      S4      —      Safety      Guideline      for      the
Segregation/Separation  of  Gas  Cylinders  Contained  in
Cabinets
NOTE 1: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
5  Terminology
5. 1  Abbreviations and Acronyms
5. 1.1  ATM — Atmospheric
5. 1.2  BCD  Bulk Chemical Dispe nsing System
5. 1.3  CVD — Chemical Vapor Depo sition
5. 1.4  DI — De-ionized
5. 1.5  HDP — High Density Plasma
5. 1.6  HF — Hydrofluoric Acid
5. 1.7  LPCVD   —   Low   Pressure   Chem ical   Vapor
Deposition
5. 1.8  MOCVD  —  Metal  Organic  Ch emical  Vapor
Deposition
5. 1.9  OEM — Original Equipment M anufacturer
5. 1.10  PPB — Parts per Billion
5. 1.11  PVD — Physical Vapor Depos ition
5. 1.12  RF — Radio Frequency
5. 1.13  RTP — Rapid Thermal Proces s
5. 1.14  T.O.C. (total organic carbons)  hydrocarbons
which can appear in a process from a variety of sources
including breakdown of O-ring materials.
5. 1.15  UPDI — Ultra Pure De-ionize d
5. 1.16  UV — Ultraviolet
5. 2  Definitions
5. 2.1   acid
 a  corrosive  material  w hose  chemical
reaction  characteristic  is  that  of  an  electron  acceptor
(SEMI F21, SEMI S4).
5. 2.2    anion    a   negatively   charged    ion   that   is
attracted to an anode in electrolysis.

SEMI F51-0200 © SEMI 20002
5. 2.3  cation  a positively charged  ion; an ion that is
attracted  to  the  cathode  in  electrolysis.    These  are
typically ions of metallic elements.
5. 2.4    chemical/mechanical   wear    injury   to   the
surface of an object or partial obliteration of or altering
caused by rubbing, stress or chemical/mechanical use.
5. 2.5  chemical breakdown  the de gradation of a seal
as the result of a chemical reaction.
5. 2.6   chemical  property
  chemica l  durability  is  a
measure  of  corrosion  or  attack  of  a  glass  surface  when
subjected  to  a  specific  reagent,  such  as  acid,  base,  or
water at a specific concentration for a specific time and
temperature (SEMI D9).
5. 2.7   chemical  reaction   a  process   that  involves
change in the structure of  ions or molecules.
5. 2.8 compatibility   the  ability  of  t he  molecules  of  a
seal  to  coexist  with  process  chemistries  without  the
degradation of either.
5. 2.9   corrosives   a  chemical  that  c auses  visible
destruction of, or irreversible alterations in, living tissue
by chemical action at the site of contact.  A chemical is
considered to be corrosive if, when tested on the intact
skin  of  albino  rabbits  by  the  method  described  in  the
U.S. Department of Transportation in Appendix A to 49
CFR   173,   it   destroys   or   changes   irreversibly   the
structure of the tissue at the site of contact following an
exposure period of four hours.  This term shall not refer
to action on inanimate surfaces (SEMI S4).
5. 2.10   de-ionized  water
  (specified   with  specific
resistivity ≥ 18 MΩcm, cations: Na, Fe, Ca ≤  0.2  μg/l)
(SEMI E45).
5. 2.11   degradation   a  chemical  rea ction  leading  to
the reduction to a simpler molecular structure. See also
chemical breakdown.
5. 2.12   ion   an  atom  or  group  of  ato ms  that  has  lost
or gained one or more electrons.
5. 2.13  leachables  atoms or molecu les which escape
from  the  body  of  a  material  under  vacuum,  heat  or
chemical attack.
5. 2.14  leak rate  rate at which an e nvironment loses
a vacuum (Millitorr litres/second).
5. 2.15  outgassing  process whereby  molecules of air
or  other  gases  adhere  to  the  surface  of  the  vacuum
vessel   or   component   therein   and   become   liberated
under   vacuum   conditions.      Sometimes   known   as
degassing.
5. 2.16    oxidizer   gas    a   gas   which   w ill   support
combustion    or    increase    the    burning    rate    of    a
combustible material with which it may come in contact
(SEMI S4).
5. 2.17      particle      materials     which     ca n     be
distinguished from the film whether on the film surface
or embedded in the film (SEMI P5).
5. 2.18   particle  generation   molecu les  of  material
generated due to degradation of a material.
5. 2.19   permeation   the  tendency  fo r  a  gas  or  liquid
to pass through a seal structure by osmosis or diffusion.
5. 2.20   silica   silicon  dioxide,  occur ring  as  quartz,
etc.
5. 2.21   swell  resistance   the  ability   of  a  material  to
resist increasing its volume when it has been immersed
in a liquid or exposed to vapor.
5. 2.22    temperature    a   measure   of   h eat   usually
expressed     in     degrees     Celsius     or     Fahrenheit.
Temperature   values   shall   be   expressed   in   degrees
Celsius (SEMI C3).
5. 2.23   weight  loss   reduction  in  ma ss  of  a  sealing
compound  through  the  result  of  a  chemical  or  physical
reaction.
5. 2.24  vacuum integrity  a subjecti ve measure of the
efficiency of a vacuum vessel.
6  Related Documents
6. 1  SEMI Standard
SEMI   E49      Guide   for   Standard   Performance,
Practices,  and  Sub-Assembly  for  High  Purity  Piping
Systems    and    Final    Assembly    for    Semiconductor
Manufacturing Equipment
SEMI  F40    Practice  for  Preparing  Liquid  Chemical
Distribution Components for Chemical Testing
6. 2  Other Documents
Millipore    9
th
Annual    Microelectronics    Technical
Symposium,  May  20,  1991,  “Contamination  Derived
from O-Rings”, Robert Matthews
1
RTP’97   5
th
International   Conference   on   Advanced
Thermal    Processing    of    Semiconductors,    “Sealing
Technology  for  the  Semiconductor  Industry”,  Dalia
Vernikovsky
2

1 Millipore Corporation, 80 Ashby Road, Bedford, MA, USA, 01730-
2271
2 Greene, Tweed & Co., 2157D O’Toole Avenue, San Jose, CA,
USA, 95131

SEMI F51-0200 © SEMI 20003
7  Considerations for Use in  Ultra Pure De-
ionized Water (UPDI)
NOTE 2:  See Figure 1.
7. 1  De-ionized water is used in ma ny wafer processing
steps  and  shall  not  contribute  any  contaminants  to  the
processes.    The  most  common  sealing  requirements  in
DI  water  systems  are  filters,  valves,  flow  and  pressure
regulators, and fittings.
7. 2  Contaminants in DI water fall  primarily into three
categories.    They  are  ion  contamination,  T.O.C.’s  and
bacterial   growth.      Contaminant   levels   are   usually
measured in parts per billion (PPB).
7. 3  Ion contamination problems ar e caused by anionic
and  cationic  elements  in  DI  water  such  as  fluorides,
chlorides,  sulfates,  etc.    These  can  be  leached  from
seals as well as the DI plumbing.
7. 4   Cations  (mostly  metallic  ions)   are  leached  from
seals as well as the plumbing that delivers the DI water.
In  order  to  kill  bacteria  which  have  a  propensity  to
grow  in  DI  water,  the  water  is  either  heated  (80°C+),
ozonated,  or  bombarded  with  UV  light,  or  possibly  a
combination of these three elements.  This poses unique
problems for seals used in the DI system and can cause
the following problems: Contamination of the DI water
caused  by  T.O.C.’s  being  leached  from  the  seals  and
plumbing.
7. 5   Seal  breakdown  caused  by  ozo ne  attack,  or  seal
deterioration due to UV exposure.  T.O.C.’s are of great
concern  since  they  can  adhere  to  wafers  and  result  in
degraded oxide quality and hazy films.  Ozone and UV
deterioration  of  the  seals  usually  leads  to  particulate
contamination.    These  can  be  as  small  as  single  atoms
or molecules to gross particle size contamination.
7. 6  Considerations:
• What   method   of   sterilization   (i.e.,   chemical,
thermal or radiation)?
• Concerns for cations, anions, or T.O.C.’s?
• Seal life expectation?
8  Considerations for Use in   Corrosives
(Acids, Bases), Oxidizers, and Solvents
NOTE 3: See Figure 2.
8. 1   Inorganic  wet  chemicals  at  hig h  concentration
levels  and  in  some  cases  at  elevated  temperatures  are
readily  used  in  front-end  semiconductor  processing  in
the   fabrication   of   semiconductor   devices.      Most
common  sealing  requirements  are  in  acid  recirculation
and   chemical   distribution   systems   (mostly   BCD’s).
Component  systems  include  pumps,  filters,  megasonic
seals, gaskets for pipeline interfaces and valves.
8. 2   Of  primary  concern  when  spec ifying  a  specific
seal  for  an  application  are  issues  relating  to  resistance
to  chemical  reaction.    Design  considerations  should
include  resistance  to  chemical  breakdown,  static  vs.
dynamic      environments,      pressure,      temperature,
leachables, particle generation.
8. 3   Chemical  and  Thermal  Degrad ation  involves  the
incompatibility  of  the  seals  to  the  process  chemistries.
An   example   is   Hydroflouric   Acid   (HF)   dissolves
silicone  elastomers.    The  same  is  true  of  temperature
degradation  (i.e.,  Piranha  or  Phosphoric  Acids)  where
the     process     temperature     causes     thermally     and
chemically  induced  effects  on  the  seal.    That  also
contributes to the mechanical failure of the seal.
8. 4  Leaching is most commonly a ssociated with metal
filler   systems   of   the   seal,   which   usually   introduce
metallic  ions.    This  is  a  continuous  occurrence  as  long
as the seal is in the system.
8. 4.1    Particles    Particles   can   be   th e   result   of
mechanical damage of the seal or as a result of leaching
or  chemical  degradation  or  foreign  material  present  on
the seal surface.  Particles can end up on the wafer and
cause defects.
8. 4.2     Summary     All    cases    of    the    a bove
contamination  can  create  electrical  shorts,  voids,  and
unwanted doping.
8. 4.3   Solvents   Incompatibility  of   elastomers  or
seals      with      solvent      chemistries      may      cause
contamination.
8. 4.3.1      For     example,     there     are     degrees      of
incompatibility:
8. 4.3.1.1  If the seal is dissolved by the s olvent, then a
catastrophic  failure  occurs  where  the  solvent  leaks  out
of the liquid process loop.  This is associated with mis-
processed wafers.
8. 4.3.1.2  Another type of solvent seal in teraction is the
swelling  of  the  elastomer  or  the  leaching  of  small
amounts   of   elastomer.      Excessive   swelling   of   the
elastomer  can  result  in  premature  seal  failures  and  a
higher cost of ownership caused by increased frequency
of seal change outs.
9  Considerations for Use In  Thermal
Processes
NOTE 4: See Figure 3.
9. 1  Diffusion processes are used p rimarily for growth
of oxide layers and to anneal crystal damage caused by
implant.    Diffusion  furnaces  are  usually  batch  process
equipment where the process atmosphere is constrained
within  quartz  tubes.    The  seals  of  these  tubes  are
exposed  to  temperatures  of  250–300°C.    This  requires

SEMI F51-0200 © SEMI 20004
that the seals not only be capable of withstanding these
high  temperatures  but  also  that  they  not  out-gas  or
permeate  adversely  affecting  the  purity  of  the  process.
Also  of  concern  is  the  possible  particle  generation
caused  by  the  seals  as  they  expand  and  contract  due  to
temperature cycling (see Section 8.4.1).
9. 1.1  Factors include:
• Temperature   capability   of   material   and   process
temperature.
• Static or dynamic state of seal.
• Proper sizing and fit of seal to gland.
10  Considerations for Use in   Plasma Systems
(Etch, CVD, and PVD)
NOTE 5:  See Figure 4.
10. 1  Considerations for sealing com ponents for use in
plasma  applications  shall  include  proximity  to  plasma,
plasma  reactor  temperature,  chemical  composition  of
plasma,  plasma  energy,  and  chemical  leaching  by  the
plasma.
10. 2      Contamination     from     the     inhere nt     seal
components and particle generation is directly related to
other considerations mentioned above.
10. 2.1  Factors include:
• Seal composition and resistance to chemical attack.
• Proximity to source and intensity of RF.
• Temperature   capability   of   material   and   process
temperature.
• Static or dynamic state of seal.
• Proper sizing and fit of seal to gland.
Categories for Consideration
UPDI
ChemicalThermalRadiation
Figure 1
UPDI Chart

SEMI F51-0200 © SEMI 20005
Categories for Consideration
LIQUID
CHEMICALS
CORROSIVESOXIDIZERSSOLVENTS
Figure 2
Liquid Chemical Chart
Categories for Consideration
THERMAL
ION
IMPLANT
(Hi Vac)
RTPLPCVDATM
ATM
POCI
3
O
2
,
N
2
CI
MOCVDTEOSNITPOLY
LTO,
HTO
TiNW
H
2
O
CVD
Figure 3
Thermal Chart

SEMI F51-0200 © SEMI 20006
Categories for Consideration
PLASMA
CVD
SiN
OxideHDP
PSG,
BPSG
BSG
ETCH
PVD
(Hi Temp)
TEOS
Cleaning
Tech
C
2
F
6
,
NF
3
F
Cl
Br
O
2
H
x
C
y
H
2
BPSG
BSG
Figure 4
Plasma Chart
NOTICE: SEMI makes no warranties or representations as to the suitability of the guides set forth herein for any
particular application. The determination of the suitability of the guide is solely the responsibility of the user. Users
are cautioned to refer to manufacturer’s instructions, product labels, product data sheets, and other relevant literature
respecting any materials mentioned herein. These guides are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that  compliance  with  this  guide  may  require  use  of  copyrighted
material or of an invention covered by patent rights. By publication of this guide, SEMI takes no position respecting
the validity of any patent rights or copyrights asserted in connection with any item mentioned in this guide. Users of
this  guide  are  expressly  advised  that  determination  of  any  such  patent  rights  or  copyrights,  and  the  risk  of
infringement of such rights, are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International),3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI F52-1101 © SEMI 2000, 20011
SEMI F52-1101
DIMENSIONAL SPECIFICATION FOR METRIC PFA TUBES FOR
LIQUID CHEMICAL DISTRIBUTION IN SEMICONDUCTOR AND FLAT
PANEL DISPLAY MANUFACTURING
This specification was technically approved by the Global Liquid Chemical Distribution Systems Committee
and  is  the  direct  responsibility  of  the  Japanese  Liquid  Chemical  Distribution  Systems  Committee.  Current
edition  approved  by  the  Japanese  Regional  Standards  Committee  on  June  19,  2001.    Initially  available  on
www.semi.org August 2001; to be published November 2001. Originally published June 2000.
1  Purpose
1. 1  This document defines sizes and their measurement
methods   of   metric   PFA   tubes   for   liquid   chemical
distribution  in  semiconductor  and  flat  panel  display
manufacturing equipment and facilities.
2  Scope
2. 1  This  document  applies  to  metric  tubes  made  from
PFA.
2. 2  This   specification   does   not   purport   to   address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility   of   the   users   of   this   specification   to
establish  appropriate  safety  and  health  practices  and
determine  the  applicability  of  regulatory  limitations
prior to use.
3  Referenced Standards
3. 1  ISO Standards
1
ISO  4397  —  Fluid  Power  System  and  Components  –
Connectors   and   Associated   Components   –   Outside
Diameters of Tubes and Inside Diameters of Hoses
3. 2  JASO Standards
2
JASO F 409-91 — Fittings for Polyamide (Nylon) Tube
JASO  M  317-73  —  Nylon  Tube  for  Automobile  Air
Brake Piping
3. 3  JIS Standards
3
JIS B 7502 — External Micrometer
JIS  B  8381  —  Fittings  for  Flexible  Tube  Used  at
Atmospheric Pressure
JIS  K  6890  —  Tube  Made  from  Tetra-fluoroethylene
Resin

1 International Organization for Standardization, 1, rue de Varembe,
Case postale 56 CH-1211 Geneve.
2 Japanese Automobile Standards Organization / Society of
Automotive Engineers of Japan, Goban-cho Center Bldg., 10-2
Goban-cho, Chiyoda-ku, Tokyo 102-0076.
3 Japan Standards Association, 4-1-24 Akasaka, Minato-ku, Tokyo
107-8440.
3. 4  SAE Standards
4
SAE J 844 — Nonmetallic Air Brake System Tubing
SAE  J  1394  —  Metric  Nonmetallic  Air  Brake  System
Tubing
NOTE 1: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
4  Terminology
4. 1  Abbreviations and Acronyms
4. 1.1  ID — Inside Diameter
4. 1.2  ISO  —  International  Organization  for  Standard-
ization
4. 1.3  JASO — Japan Automobile Standard
4. 1.4  JIS — Japanese Industrial Standard
4. 1.5  OD — Outside Diameter
4. 1.6  PFA  —  Tetrafluoroethylene  Perfluoroalkylvinyl-
ether Copolymer
4. 1.7  SAE — Society of Automotive Engineers
4. 2  Definitions
4. 2.1  dial  thickness  gauge  —  an  instrument  used  to
measure wall thickness with a dial meter.
4. 2.2  liquid  chemical  —  acid,  alkali,  organic  solvent,
and   pure   water   used   for   wet   stations;   resists   and
developers  used  for  track  system;  and  other  chemicals
used  for  process  or  maintenance  (such  as  slurry  of
chemical-mechanical    polishing)    of    equipment    or
facilities.
4. 2.3  outside     diameter     tolerance     —     allowable
deviation of the outside diameter of PFA tube from the
specified dimension.
4. 2.4  projector — an instrument used to measure shape
and dimension of an object by optically projecting it at
a given magnification.  Also referred to as a measuring
projector or profile projector.

4 Society of Automotive Engineers, 400 Commonwealth Drive,
Warrendale, PA 15096-0001.

SEMI F52-1101 © SEMI 2000, 20012
4. 2.5  wall  thickness  —  thickness  of  the  wall  of  the
PFA tube.
4. 2.6  wall  thickness  deviation  —  deviation  of  wall
thickness.
4. 2.7  wall  thickness  tolerance  —  allowable  deviation
of   actual   measurement   of   wall   thickness   from   its
specification.
5  Nominal Size and Dimensional Specification
5. 1  A   nominal   tube   size   is   indicated   by   “outside
diameters/inside  diameter”.    This  document  provides
specifications  for  eight  nominal  tube  sizes  as  shown  in
Table 1.
5. 2  The  indication  of  the  nominal  size  for  metric  PFA
tubes   is   preferably   printed   on   each   package   for
shipping.
Table 1  Tube Size (mm)
OD/ID25/2219/1612/1010/88/66/44/33/2
OD Tolerance
± 0.2± 0.15± 0.15± 0.12± 0.12± 0.1± 0.1± 0.1
Wall Thickness1.51.51.01.01.01.00.50.5
Wall Thickness Tolerance
± 0.15± 0.15± 0.1± 0.1± 0.1± 0.1± 0.05± 0.05
Wall Thickness Deviation0.150.150.10.10.10.10.050.05
NOTE 1: The specified sizes should be measured at 23 ± 3°C.  The specimen should be kept in the environment for more than 1 hour prior to the
measurement.
NOTE 2: Refer to JASO F 409-91 and JASO M 317-73 for outside and inside diameter of 10/8, 8/6 and 6/4 tubes.
NOTE 3: Refer to JIS B 8183 for outside and inside diameter of 8/6 and 6/4 tubes.
NOTE 4: Refer to JIS B 6890 for outside and inside diameter of 12/10, 10/8, 8/6, 6/4, 4/3 and 3/2 tubes.
NOTE 5: Refer to SAE J 844 for outside diameter of 19/16 tube.
NOTE 6: Refer to SAE J 1394 for outside and inside diameter of 8/6 and 6/4 tubes.
NOTE 7: Refer to ISO 4397 for outside diameter of 25/22, 12/10, 10/8, 8/6 and 4/3 tubes.

SEMI F52-1101 © SEMI 2000, 20013
6  Measurement Procedures
6. 1  Outside Diameter — Measure the diameters at both
ends  of  tube  with  a  dial  thickness  gauge  at  4  points  in
45 degree intervals (see Figure 1).  It is calculated with
the following formula:
Outside   Diameter   =   1/2   *   (maximum   reading   +
minimum reading)
Measuring Point No.1
Measuring Point No.2
Measuring Point No.3
Measuring Point No.4
Figure 1
Outside Diameter Measurement
6. 2  Wall  Thickness  —  Measure  the  wall  thickness  at
both ends of tube with a dial thickness gauge at 8 points
in  45  degree  intervals  (see  Figure  2).    If  it  is  not
practical to use a dial thickness gauge, prepare a 1 mm
long  test  piece  and  measure  it  with  a  projector.    It  is
calculated with the following formula:
Wall Thickness = 1/2 * (maximum reading + minimum
reading)
Measuring Point No.1
Measuring
Point No.2
Measuring
Point No.3
Measuring
Point No.4
Measuring Point No.5
Measuring
Point No.6
Measuring
Point No.7
Measuring
Point No.8
Figure 2
Wall Thickness Measurement
6. 3  Wall  Thickness  Deviation  —  Use  maximum  and
minimum  readings  of  Section  6.2  and  calculate  the
deviation with the following formula:
Wall   Thickness   Deviation   =   maximum   reading   –
minimum reading
6. 4  Other  specifications  including  surface  roughness,
deviation  from  circular  form,  and  physical  property
values may be determined upon agreement between the
supplier and user.
6. 5  Refer to JIS B 7502, External Micrometer for a dial
thickness gauge.
7  Related Documents
7. 1  SEMI Standards
SEMI  F7  —  Test  Method  to  Determine  the  Tensile
Strength    of    Tube    Fitting    Connections    Made    of
Fluorocarbon Materials
SEMI  F8  —  Test  Method  for  Evaluating  the  Sealing
Capabilities   of   Tube   Fitting   Connections   Made   of
Fluorocarbon  Materials,  When  Subjected  to  Tensile
Forces
SEMI  F9  —  Test  Method  to  Determine  the  Leakage
Characteristics  of  Tube  Fitting  Connections  Made  of
Fluorocarbon  Materials,  When  Subjected  to  a  Side
Load Condition
SEMI  F10  —  Test  Method  to  Determine  the  Internal
Pressure  Required  to  Produce  a  Failure  of  a  Tube
Fitting Connection Made of Fluorocarbon Materials
SEMI  F11  —  Test  Method  to  Obtain  an  Indication  of
the     Thermal     Characteristics     of     Tube     Fitting
Connections Made of Fluorocarbon Materials
SEMI  F12  —  Test  Method  to  Determine  the  Sealing
Capabilities    of    Fittings,    Made    of    Fluorocarbon
Materials, after Being Subjected to a Heat Cycle
NOTICE: SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  specification
set  forth  herein  for  any  particular  application.    The
determination  of  the  suitability  of  the  specification  is
solely   the   responsibility   of   the   user.      Users   are
cautioned   to   refer   to   manufacturer’s   instructions,
product  labels,  product  data  sheets,  and  other  relevant
literature  respecting  any  materials  mentioned  herein.
These   specifications   are   subject   to   change   without
notice.
The  user’s  attention  is  called  to  the  possibility  that
compliance  with  this  specification  may  require  use  of
copyrighted  material  or  of  an  invention  covered  by
patent  rights.    By  publication  of  this  specification,
SEMI  takes  no  position  respecting  the  validity  of  any
patent  rights  or  copyrights  asserted  in  connection  with
any  item  mentioned  in  this  specification.    Users  of  this
specification  are  expressly  advised  that  determination
of  any  such  patent  rights  or  copyrights,  and  the  risk  of
infringement   of   such   rights,   are   entirely   their   own
responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI F53-0600 © SEMI 20001
SEMI F53-0600
TEST METHOD FOR EVALUATING THE ELECTROMAGNETIC
SUSCEPTIBILITY OF THERMAL MASS FLOW CONTROLLERS
This test method was technically approved by the Global Facilities Committee and is the direct responsibility
of  the  North  American  Facilities  Committee.  Current  edition  approved  by  the  North  American  Regional
Standards  Committee  on  March  2,  2000.    Initially  available  on  www.semi.org  April  2000;  to  be  published
June 2000.
1  Purpose
1. 1   The  purpose  of  this  document   is  to  define  a
structured   method   for   testing   and   evaluating   the
electromagnetic  susceptibility  of  thermal  mass  flow
controllers.
2  Scope
2. 1   This  document  contains  the  re quirements  and  test
method  that  can  be  used  to  evaluate  whether  a  thermal
mass   flow   controller   will   maintain   its   functional
characteristics  when  subjected  to  EMI  levels  typical  of
the  industry.    The  test  method  covers  both  the  radiated
susceptibility (RS) and conducted susceptibility (CS) of
the    controller    when    exposed    to    EMI.        The
electromagnetic      susceptibility      requirements      are
extracted from MIL-STD-461C and SAMA PMC-33.1,
and the test method is a composite of the RS03, CS01,
CS02, and CS06 test methods defined in MIL-STD 462.
2. 2  This test method does not purp ort to address safety
issues, if any, associated with its use.  It is the responsi-
bility  of  the  users  of  this  test  method  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1   This  test  method  is  not  designe d  for  AC-powered
MFCs.    The  test  method  addresses  electromagnetic
susceptibility  of  MFCs  through  DC  power  leads  and
control signals.
4  Referenced Standards
4. 1  Military Standards
1
MIL-STD-461C    Electromagnetic   Emission   and
Susceptibility    Requirements    for    the    Control    of
Electromagnetic Interference
MIL-STD-462    Measurement   of   Electromagnetic
Interference Characteristics

1 Available from Naval Publications and Forms Center, 5801 Tabor
Ave., Philadelphia, PA 19120
MIL-STD-463A   Electromagnetic  Interference  and
Electromagnetic  Compatibility  Technology  Definitions
and Systems of Units
4. 2  Scientific Apparatus Makers A ssociations

2
SAMA PMC  33.1  Electromagnetic Susceptibility of
Process  Control  Instrumentation,  Scientific  Apparatus
Makers Associations
NOTE 1: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
5  Terminology
5. 1  Abbreviations and Acronyms
5. 1.1  CS — conducted susceptibility
5. 1.2  dB — decibels
5. 1.3  DC — direct current
5. 1.4  EMC — electromagnetic comp atibility
5. 1.5  EMI — electromagnetic interf erence
5. 1.6  GHz — gigahertz
5. 1.7  kHz — kilohertz
5. 1.8  MFC — mass flow controller
5. 1.9  MHz — megahertz
5. 1.10  MIL-STD — Military Standard
5. 1.11  psia — pounds per square inch  absolute
5. 1.12  psig — pounds per square inch  gauge
5. 1.13  RF — radio frequency
5. 1.14  RG-58 — a specification for a  particular type of
coaxial cable
5. 1.15  rms — root mean square
5. 1.16  RS — radiated susceptibility
5. 1.17  T — teslas

2 Portions of this method are excerpted from SAMA Standard PMC
31. 1-1980 with permission of the publisher, Process Measurements &
Control Section, SAMA, 1101 16th St., N. W. Washington, DC
20036

SEMI F53-0600 © SEMI 20002
5. 1.18  V — volt
5. 1.19  V/m — volts/meter
5. 2  Definitions
5. 2.1   conducted  susceptibility  —  eq uipment  vulnera-
bility to conducted emissions.
5. 2.2   electromagnetic  —  all  energy   of  electrical  or
magnetic  nature;  i.e.,  electric  current  flow  or  magnetic
field.
5. 2.3   electromagnetic  compatibility  —  the  capability
of electronic equipment or systems to be operated in the
intended  operational  electromagnetic  environment  at
designed levels of efficiency.
5. 2.4  electromagnetic interference —  impairment of a
wanted  electromagnetic  signal  by  an  electromagnetic
disturbance.
5. 2.5   ground  —  a  conducting  conne ction,  whether
intentional or accidental, by which an electric circuit or
piece of equipment is connected to the earth, or to some
conducting body of relatively large extent.
5. 2.6   limit  —  the  level  of  susceptibi lity  that  a  stated
standard allows.
5. 2.7   noise  (electrical)  —  unwanted   electrical  signals
that   produce   undesirable   effects   in   the   circuits   of
control systems in which they occur.
5. 2.8   radiated  susceptibility  —  equi p ment  vulnerable
to radiated emissions.
5. 2.9  stable — the state a signal leve l obtains when its
magnitude varies by less than or equal to  ± 2.0% of full
scale over a one minute period.
6  Summary of Method
6. 1   This  test  method  describes  the   test  equipment  and
procedures  for  determining  if  the  thermal  mass  flow
controller is susceptible to both radiated and conducted
interference.    Initially,  the  controller  is  exposed  to
radiated  electric  fields  over  a  frequency  range  from  14
kHz  to  1  GHz  at  field  strength  levels  less  than  10
volts/meter (V/m).  Furthermore, the controller’s power
leads   will   be   tested   for   susceptibility   to   voltage
transients  with  10  μs  rise  times.    See  flow  chart  of  the
test method, Figure 1.
7  Interferences
7. 1   MFCs  are  located  in  areas  whe re  electromagnetic
(EM) fields are present.  If an MFC is susceptible to the
fields,  then  the  delivered  flow  by  the  MFC  could  be
adversely  effected.    The  magnitude  of  the  EM  field’s
effect  on  the  MFC  performance  shall  be  quantified  by
this test method.
8  Apparatus
8. 1  Radiated Electric Field Suscep tibility (RS-03)
8. 2  Signal Generator, 14 kHz to 1 G Hz
8. 3  Audio Power Amplifier, 14 kH z to 1 MHz
8. 4  RF Power Amplifier #1, 1 MH z to 400 MHz
8. 5  RF Power Amplifier #2, 500 M Hz to 1 GHz
8. 6  Field Strength Meter
8. 7  Oscilloscope
8. 8  Parallel Element Antenna, 14 k Hz to 20 MHz
8. 9  Biconical Antenna, 30 MHz to  200 MHz
8. 10   Conical  Log  Spiral  Antenna,  3 00  MHz  to  one
GHz
8. 11  Tripod
8. 12   Coaxial  Cable,  50-ft,  RG-58,  w ith  BNC  male
plugs at each end.
8. 13  X10 Attenuator Scope Probe
8. 14  Assorted Coax Cables for Inte rconnects
8. 15   Flow  Standard  —  Installed  do wnstream  and  in
series  with  the  flow  through  the  MFC.    The  flow
standard shall be capable of measuring flow to within ±
0. 3% of full scale.
8. 16   Flow  Output  Monitor  —  Conn ected  to  the  MFC
output   and   signal   common/ground   points.      The
monitor/recorder  shall  be  capable  of  measuring  over  a
range of 0–10 VDC to within ± 5 mV.
8. 17   Transient  Susceptibility  of  Pow er  and  Control
Leads (CS-06) (Conducted Susceptibility)
8. 18  Spike Generator, with series an d parallel outputs
8. 19  Oscilloscope, dual channel
8. 20  X10 Attenuator Probe
8. 21  X100 Scope Attenuator Probe,  two each
8. 22  Test Leads, 12-in long with ba nana plugs at each
end, four each
9  Reagents and Materials
9. 1  Test Gas — Nitrogen with a d ew point of less than
or  equal  to  -40°C  and  at  a  source  delivery  pressure  of
35 psig.
10  Safety Precautions
10. 1   Safety  Precautions  —  This  tes t  method  may
involve  hazardous  materials,  operations,  and  equip-
ment.

SEMI F53-0600 © SEMI 20003
10. 2   The  user  must  have  a  working   knowledge  of  the
respective    instrumentation,    must    practice    proper
handling of test components, and must understand good
laboratory  practices.    The  user  should  not  operate  the
components  in  such  a  manner  as  to  exceed  the  ratings
(i.e., pressure, temperature, flow, and voltage).
10. 3   Technical  Precautions  —  The se  tests  are  to  be
performed  in  a  shielded  or  screened  room  to  prevent
possible   problems   with   nearby   instrumentation   or
electrical  systems  caused  by  the  EM  fields.    At  a
minimum,  the  instrumentation  associated  with  this  test
series  (see  Figure  2)  must  be  shielded  from  the  EM
fields to ensure their proper operation.
11  Preparation of Apparatus
11. 1   The  test  gas  source  and  deliver y  system  must  be
capable  of  satisfying  the  test  volume  flow  rate  at  a
constant pressure, ± 0.1 psia.
11. 2   The  test  gas  source  and  deliver y  system  must  be
capable  of  delivering  a  gas  at  ambient  temperature  ±
1°C  for  the  duration  of  each  analysis.    The  ambient
temperature shall be held to 22°C ± 1°C.
12  Calibration and Standardi zation
12. 1   For  each  test,  verify  that  calibr ation  of  test
equipment is up-to-date.
13  Procedure
13. 1    Install   the   MFC   into   the   test   se tup   per
manufacturer’s recommendations.
13. 2  Apply power to all devices sho wn in Figure 3 per
manufacturer’s  specifications.    Allow  the  devices  to
warm  up  for  the  duration  specified  by  the  equipment
manufacturer.
13. 3   Purge  the  system  with  nitrogen   for  a  length  of
time  equal  to  ten  times  the  amount  of  time  it  takes  to
replace the system volume once, when the test MFC is
at its full-scale rated flow rate.
13. 4   Close  inlet  shut-off  valve.    The n  close  the  outlet
shut-off valve located adjacent to the MFC (see Figure
2).  Adjust the MFC setpoint to zero flow.  Wait for the
signals  to  become  stable.    Record  the  following  on  the
data sheet:
• MFC indicated flow,
• Flow standard flow,
• Ambient temperature,
• Gas temperature, and
• Gas pressure.
13. 5   Ensure  that  the  inlet  and  outlet   shut-off  valves
adjacent  to  the  MFC  (see  Figure  2)  are  open.    Adjust
the    MFC    setpoint    to    50%.        Ensure    that    all
manufacturer’s recommended conditions are met for the
MFC.    Once  the  output  signals  become  stable,  record
the MFC output signal, the flow standard output signal,
the  ambient  and  gas  temperature,  and  the  gas  pressure
on the data sheet in Table 1.
13. 6  Ensure that the MFC power le ads and control sig-
nal cables are shielded in the area that will be irradiated
by the EM fields.  The cable shielding shall be intact up
to  the  connector.    The  type  of  shielding  and  connector
shall be recorded on the data sheet in Table 1.
13. 7  Radiated Electric Field Suscep tibility (RS-03)
13. 7.1  Testing from 14 kHz to 20 MH z:
13. 7.1.1   Mount  the  parallel  element  ant enna  on  a
tripod at a distance of one meter from the controller and
connect the antenna to the audio power amplifier using
the  50-ft  length  of  RG-58  coaxial  cable  (see  Figure  3).
Set the switch to low frequency range.
13. 7.1.2   Connect  the  amplifier  input  to   the  signal
generator output.
13. 7.1.3  Turn on amplifier and signal g enerator.
13. 7.1.4   Using  the  X10  probe,  connect   the  scope
across the antenna terminals.
NOTE  2:  It  is  important  to  use  the  X10  probe  rather  than  a
coax that terminates in 50 ohms.  The audio amplifier will not
drive the required voltage into 50 ohms.
13. 7.1.5   Set  frequency  output  of  the  sig nal  generator
to 14 kHz.
13. 7.1.6   Turn  off  signal  generator  mod ulation  and  set
voltage across the antenna input connector at 35-V rms.
NOTE   3:   With   this   voltage   applied   to   the   antenna   at
frequencies below one MHz, the required field strength of 10
V/m  at  a  distance  of  one  meter  from  the  antenna  should  be
established.
13. 7.1.7   If,  at  any  frequency,  the  requir ed  voltage
cannot be developed across the antenna terminals, set to
the  maximum  possible  without  exceeding  equipment
ratings.
13. 7.1.8   When  voltage  is  set,  turn  on  m odulation  and
adjust  for  50%  amplitude  modulation  with  the  internal
one kHz source.
13. 7.1.9    Check   operation   of   the   control ler   in   the
presence   of   this   radiated   field.      Record   the   MFC
indicated flow, flow standard output, and the frequency
on the data sheet in Table 1.

SEMI F53-0600 © SEMI 20004
13. 7.1.10   Before  changing  frequency  as   described  in
Sections    13.7.1.10–13.7.1.15,    reduce    the    voltage
amplitude to zero.
13. 7.1.11  Set frequency to 20 kHz and re peat Sections
13. 7.1.6–13.7.1.9.
13. 7.1.12  Set frequency to 50 kHz and re peat Sections
13. 7.1.6–13.7.1.9.
13. 7.1.13    Set   frequency   to   100   kHz   and    repeat
Sections 13.7.1.6–13.7.1.9.
13. 7.1.14    Set   frequency   to   200   kHz   and    repeat
Sections 13.7.1.6–13.7.1.9.
13. 7.1.15    Set   frequency   to   500   kHz   and    repeat
Sections 13.7.1.6–13.7.1.9.
13. 7.1.16    Set   frequency   to   one   MHz   and    repeat
Sections 13.7.1.6–13.7.1.9.
13. 7.1.17  Shut down the test equipment.   Then remove
the audio amplifier and install RF power amplifier #1 in
its place.
13. 7.1.18   Having  exceeded  one  MHz,  tu rn  antenna
switch to the high frequency range.
13. 7.1.19  Turn on test equipment and res ume testing.
13. 7.1.20   Set  output  of  the  signal  genera tor  to  two
MHz  and  set  field  strength  to  10  V/m,  using  field
strength meter at the controller location.
NOTE  4:    If,  at  any  frequency,  the  required  field  cannot  be
developed,  set  to  the  maximum  possible  without  exceeding
equipment ratings.
13. 7.1.21  When voltage is set, turn on m odulation and
adjust  for  50%  amplitude  modulation  with  the  internal
one kHz source.
13. 7.1.22   Check  operation  of  the  control ler  in  the
presence   of   this   radiated   field.      Record   the   MFC
indicated   flow,   the   flow   standard   output,   and   the
frequency on the data sheet.
13. 7.1.23   Before  changing  frequency  as   described  in
Sections 13.7.1.23–13.7.1.25 reduce the field amplitude
to zero.
13. 7.1.24  Set frequency to 5 MHz and re peat Sections
13. 7.1.19–13.7.1.22.
13. 7.1.25    Set   frequency   to   10   MHz   and    repeat
Sections 13.7.1.19–13.7.1.22.
13. 7.1.26    Set   frequency   to   20   MHz   and    repeat
Sections 13.7.1.19–13.7.1.22.
13. 7.1.27  After testing at fixed frequenc ies, sweep the
signal  source  from  50  kHz  to  20  MHz  at  an  amplitude
of about 35 V rms or 10 V/m.  If a malfunction occurs
during  the  sweep,  stop  and  go  back  to  that  frequency
range and try to find the malfunction by testing at single
frequencies.  Record the MFC indicated flow, the flow
standard outputs, and the frequency.  If the malfunction
cannot  be  found  by  testing  at  single  frequencies  and
only shows up when sweeping, the problem is probably
that  the  signal  source  has  to  switch  ranges  at  certain
frequencies  and  during  the  switching  can  create  strong
transient  noise.    Only  the  results  at  single  frequencies
can be trusted; the sweep is only to locate the problems,
not to completely define them.
13. 7.1.28  Reduce signal source output to  zero and de-
energize test equipment.
13. 7.1.29    Disconnect   and   remove   paralle l   element
antenna.
13. 7.1.30  Testing from 30 MHz to 200 M Hz:
13. 7.1.31  Mount biconical antenna on th e tripod.  Test
in  a  sequence  similar  to  that  in  Sections  13.7.1.1–
13. 7.1.9.
13. 7.1.32  Verify that RF power amplifie r #1 is still in
place.
13. 7.1.33    At   a   minimum,   test   at   the   follo wing
frequencies:  30  MHz,  40  MHz,  50  MHz,  60  MHz,  70
MHz,  80  MHz,  90  MHz,  100  MHz,  120  MHz,  140
MHz, 160 MHz, 180 MHz, and 200 MHz.
13. 7.1.34   At  each  frequency,  set  the  field   strength  to
10  V/m  using  the  field  strength  meter  at  the  controller
location  with  the  antenna  in  both  the  vertical  and  the
horizontal positions.
13. 7.1.35   Check  operation  of  the  control ler  in  the
presence  of  the  radiated  fields  generated.    Record  the
MFC indicated flow, the flow standard outputs, and the
frequency on the data sheet.
13. 7.1.36  After testing at fixed frequenc ies, sweep the
signal   source   from   30   MHz   to   200   MHz.      If   a
malfunction occurs during the sweep, stop and go back
to   the   faulty   frequency   range   and   try   to   find   the
malfunction  by  testing  at  single  frequencies.    Record
the MFC indicated flow, the flow standard outputs, and
the  frequency  on  the  data  sheet.    If  the  malfunction
cannot  be  found  by  testing  at  single  frequencies  and
only shows up when sweeping, the problem is probably
that  the  signal  source  has  to  switch  ranges  at  certain
frequencies and can create strong transient noise during
the  switching.    Only  the  results  at  single  frequencies
can be trusted; the sweep is only to locate problems, not
to completely define them.
13. 7.1.37  Reduce signal source output to  zero and de-
energize test equipment.
13. 7.2  Testing from 300 MHz to one G Hz:

SEMI F53-0600 © SEMI 20005
13. 7.2.1   Mount  the  conical  log  spiral  an tenna  on  the
tripod.    Test  in  a  sequence  similar  to  that  in  Sections
13. 7.1.1–13.7.1.9.
13. 7.2.2   Verify  that  RF  power  amplifie r  #1  is  still  in
place.
13. 7.2.3   Test  at  the  following  frequenc ies,  using  RF
power  amplifier  #1:  300  MHz  and  400  MHz.    Record
the MFC indicated flow, flow standard outputs, and the
frequency for each test point on the data sheet.
13. 7.2.4   After  completion  of  the  test  at   400  MHz,
reduce  amplitude  of  signal  source  to  zero  and  shut
down test equipment.
13. 7.2.5  Disconnect RF power amplifie r #1, install RF
power  amplifier  #2,  turn  on  equipment,  and  resume
testing.
13. 7.2.6   Test  at  the  following  frequenc ies  using  RF
power  amplifier  #2:  500  MHz,  600  MHz,  700  MHz,
800 MHz, 900 MHz, and 990 MHz.
13. 7.2.7    Check   operation   of   the   control ler   in   the
presence  of  the  fields  generated.    Record  the  MFC
indicated   flow,   the   flow   standard   outputs,   and   the
frequency for each test point on the data sheet.
13. 7.2.8   After  testing  at  fixed  frequenc ies,  sweep  the
signal   source   from   300   MHz   to   990   MHz.      If   a
malfunction occurs during the sweep, stop and go back
to  that  frequency  range  and  try  to  find  the  malfunction
by  testing  at  single  frequencies.    Record  the  MFC
indicated   flow,   the   flow   standard   outputs,   and   the
frequency on the data sheet.  If the malfunction cannot
be  found  by  testing  at  single  frequencies  and  only
shows up when sweeping, the problem is probably that
the   signal   source   has   to   switch   ranges   at   certain
frequencies  and  during  the  switching  can  create  strong
transient  noise.    Only  the  results  at  single  frequencies
can be trusted; the sweep is only to locate problems, not
to completely define them.
13. 7.2.9   Reduce  signal  source  output  to   zero,  de-
energize test equipment, and disassemble test setup.
13. 8  Transient  Susceptibility  of  Pow er  and  Control
Leads (CS-06) (Conducted Susceptibility)
NOTE 5: If any calibration is required during the performance
of this procedure, such calibration shall be done in accordance
with manufacturers’ specifications.
13. 8.1  Spikes on DC Power Lines
13. 8.1.1  Verify that the test equipment  and DC power
are  off  before  making  connections  for  performing  tests
on DC-powered equipment.
13. 8.1.2   Connect  the  parallel  output  of   the  spike  gen-
erator between the binding posts as shown in Figure 4.
NOTE  6:    The  output  from  the  spike  generator  must  be  from
the parallel  output.    Otherwise,  the  DC  power  supply  would
be shorted by a low DC resistance.
13. 8.1.3   The  spike  is  injected  across  the   DC  power
line to ground, not in series.
13. 8.2  Spike on positive DC Lead:
13. 8.2.1    Connect   spike   generator   outpu t   between
positive DC lead and ground and adjust spike generator
output control for minimum amplitude.
13. 8.2.2   Using  the  X100  probe,  connec t  one  channel
on  the  scope  to  monitor  the  amplitude  of  the  spike
applied  on  the  positive  lead.    Put  the  scope  probe
ground clip on the green wire safety ground, not on any
of the spike generator output terminals.
13. 8.2.3  Energize test equipment and o bserve polarity
of low amplitude spikes to determine the polarity of the
transient.  Connection to the generator output should be
such  that  positive  spikes  are  applied  on  the  positive
lead.    If  the  pulses  are  negative,  reverse  leads  at  the
generator output.
13. 8.2.4  Apply DC power.
13. 8.2.5   With  the  scope  synchronized  t o  line  voltage
and  the  spike  repetition  rate  set  so  that  the  spike  will
move    slowly    across    the    screen,    increase    spike
amplitude  to  100%  of  the  voltage  rating  of  the  input
power or MFC malfunction.  Record the MFC indicated
flow, the flow standard outputs, and the spike amplitude
on the data sheet.
13. 8.2.6   If  the  controller  is  not  initially   susceptible
below the voltage rating and if the equipment is digital,
hold  the  upper  limit  condition  for  five  minutes.    This
condition   need   only   be   held   momentarily   if   the
controller  is  analog.    Record  the  MFC  indicated  flow
and flow standard outputs on the data sheet.
13. 8.2.7   Reduce  spike  amplitude  contro l,  de-energize
test equipment, and turn off DC power before switching
spike polarity.
13. 8.2.8  Reverse leads at the spike gene rator output to
apply negative spikes to the controller.
13. 8.2.9  Energize test equipment.
13. 8.2.10   Repeat  Sections  13.8.2.4  throu gh  13.8.2.6
with  the  negative  voltage  spikes  applied  to  the  positive
lead.  Then go on to Section 13.8.2.11.
13. 8.2.11  Reduce spike amplitude to zer o, de-energize
test equipment, and turn off DC power.
13. 8.3  Spike on negative DC Lead:

SEMI F53-0600 © SEMI 20006
13. 8.3.1    Connect   spike   generator   outpu t   between
negative DC lead and ground and adjust spike generator
output control for minimum amplitude.
13. 8.3.2   Using  the  X100  probe,  connec t  one  channel
of the scope to the negative lead in order to monitor the
amplitude of the spike applied on the negative lead.  Put
the  scope  probe  ground  clip  on  the  green  wire  safety
ground,   not   on   any   of   the   spike   generator   output
terminals.
13. 8.3.3  Energize test equipment and o bserve polarity
of low amplitude spikes to determine the polarity of the
transient.  Connection to the generator output should be
such  that  positive  spikes  are  applied  on  the  negative
lead.    If  pulses  are  negative,  reverse  leads  at  generator
output.
13. 8.3.4   Repeat  Sections  13.8.2.4  throu gh  13.8.2.6
with  the  positive  voltage  spikes  applied  to  the  negative
lead.  Then go on to Section 13.8.3.5.
13. 8.3.5   Reduce  spike  amplitude  contro l,  de-energize
test equipment, and turn off DC power before switching
spike polarity.
13. 8.3.6  Reverse leads at the spike gene rator output to
apply negative spikes to the controller.
13. 8.3.7  Energize test equipment.
13. 8.3.8   Repeat  Sections  13.8.2.4  throu gh  13.8.2.6
with the negative voltage spikes applied to the negative
lead.  Then go on to Section 13.8.3.9.
13. 8.3.9   Reduce  spike  amplitude  to  zer o,  de-energize
test  equipment,  turn  off  the  DC  power,  and  disconnect
equipment from test setup patch panel.
13. 8.4  Spike on control (setpoint) sig nal lead:
13. 8.4.1    Connect   spike   generator   outpu t   between
control   signal   lead   and   ground   and   adjust   spike
generator output control for minimum amplitude.
13. 8.4.2   Using  the  X100  probe,  connec t  one  channel
on  the  scope  to  monitor  the  amplitude  of  the  spike
applied  on  the  setpoint  lead.    Put  the  scope  probe
ground clip on the green wire safety ground, not on any
of the spike generator output terminals.
13. 8.4.3  Energize test equipment and o bserve polarity
of low amplitude spikes to determine the polarity of the
transient.  Connection to the generator output should be
such  that  positive  spikes  are  applied  on  the  setpoint
lead.    If  pulses  are  negative,  reverse  leads  at  generator
output.
13. 8.4.4  Apply the maximum DC contr ol signal level.
13. 8.4.5   Repeat  Sections  13.8.2.5  and  1 3.8.2.6  with
the  positive  voltage  spikes  applied  to  the  setpoint  lead.
Then go on to Section 13.8.4.6.
13. 8.4.6   Reduce  spike  amplitude  contro l,  de-energize
test equipment, and turn off DC power before switching
spike polarity.
13. 8.4.7  Reverse leads at the spike gene rator output to
apply negative spikes to the controller.
13. 8.4.8  Energize test equipment.
13. 8.4.9  Apply the maximum DC contr ol signal level.
13. 8.4.10   Repeat  Sections  13.8.2.5  and  1 3.8.2.6  with
negative voltage spike applied to the setpoint lead.
13. 8.4.11  Reduce spike amplitude to zer o, de-energize
test  equipment,  turn  off  the  DC  power,  and  disconnect
equipment from test setup patch panel.
14  Calculations or Interpreta tion of Results
14. 1  Calculations
NOTE  7:    Use  the  data  sheet  (see  Table  1)  to  record  the  test
data.    Then  record  the  calculated  values  at  each  data  point  in
Table 2.
14. 1.1   Convert  MFC  indicated  flow  o utput  data  (v)
and  the  flow  standard  output  data  to  percent  of  full-
scale flow as follows:
MFC Indicated Flow:
Percent of Full-Scale Flow =
Output Data (v)× 100
Full Scale output (v)
14. 1.2   Record  on  data  sheet  for  each   measurement
point.
14. 1.3  Flow Standard (actual flow)
14. 1.3.1   Follow  the  manufacturer’s  rec ommendations
for  the  flow  standard  output  conversion  to  percent  of
full scale.
14. 1.4   Record  on  data  sheet  for  each   measurement
point.
14. 1.5   Calculate  the  zero-corrected  pe rcent  of  full-
scale  values  for  both  the  MFC  indicated  flow  and  the
flow standard output as follows:
MFC Indicated Flow or Standard Flow = MFC or Flow
Standard  Value  (%FS)  at  a  Data  Point  –  MFC  or  Flow
Standard Value (%FS) at the Zero Flow
14. 1.6  Record these values at each da ta point in Table

# 2

2.
14. 1.7   Calculate  the  change  in  flow  fo r  the  MFC  and
flow standard as follows:
Change  in  Flow  (%FS)  =  MFC  Standard  Value  (%FS)
Corrected  for  Zero  –  MFC  or  Flow  Standard  Value
(%FS) Corrected for Zero at Reference Conditions

SEMI F53-0600 © SEMI 20007
14. 1.7.1   Where  reference  conditions  ar e  defined  by
50% FS flow with the EMI source at zero field strength.
14. 1.8  Record these values in Table 2 .
14. 2  Interpretation of Results
14. 2.1  The changes in flow columns i n Table 2 give an
indication   of   the   effect   of   EM   susceptibility,   both
radiated and conducted.  If the effect is larger than can
be tolerated for the process in the fab, two steps may be
necessary.        EM    field    strength    and    frequency
measurements  should  be  made  at  the  fab  under  normal
operating  conditions.    If  EM  measurements  in  the  fab
match  areas  that  cause  unacceptable  effects  on  the
MFC,  shielding  may  be  necessary  to  reduce  the  effect.
Shielding   design   is   beyond   the   scope   of   this   test
method.
15  Illustrations
Start
Set up Test
Apply Power
Allow Warm
Up
Purge With N2
Zero MFC and
Record Data
Set Up 50%
Flow of N2 and
Record Data
Initiate
Radiated EM
Testing
Set Frequency
and Record
Data
Repeat Until all
Frequencies
are Covered
Are all
Frequencies
Tested
Set Up for High
Frequency
Sweep
Frequency 50
KHz to 20 MHz
Any
Malfunctions
Locate
Frequency of
Malfunction
and Record
Set Up for
Higher
Frequencies
Set Frequency
and Record
Data
Are all
Frequencies
Tested
Sweep
Frequency 30
MHz to 200
MHz
Any
Malfunctions
Locate
Frequency of
Malfunction
and Record
Set Up for High
Frequency
Set Frequency
and record
Data
Are All
Frequencies
Tested
Sweep
Frequencu 300
MHz to 990
MHz
Yes
No
Yes
No
No
Yes
Yes
No
No
Yes
Figure 1
Flow Chart of Test Method
