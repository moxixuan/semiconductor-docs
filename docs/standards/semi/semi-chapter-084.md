---
title: "F64-0701 - © SEMI 200113 APPENDIX..."
description: "SEMI标准文档"
sidebar_label: "F64-0701 - © SEMI 200113 APPENDIX..."
sidebar_position: 840
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-084.pdf'
  chapter: 84
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/084.pdf"
  pdfSize="0.71MB"
  title="F64-0701 - © SEMI 200113 APPENDIX..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI F64-0701 © SEMI 200113
APPENDIX 1
NOTE: The material in this appendix is an official part of SEMI F64 and was approved by full letter ballot procedures on April
30, 2001 by the Facilities Regional Standards Committee.
A1–1  Data Analysis: Method A-1
Table A1–1  Sample Data Sheet: Methods A-1 and A-2
Date:________________Time:__________
D.U.T. #________________Ambient Temp__________°C
Standard Flow Device:________________
Full Scale:________________ sccm
Ramp Rate (Method A-2) ______________kPa/sec
Time (sec)P1 (psig)Q
A
(sccm)Q
I
(sccm)
025. 0150.0050.01
0. 0525.0150.0150.01
0. 1025.0250.0050.02
0. 1525.0149.9950.01
.
.
.
.
.
.
.
.
.
.
.
.
2. 2025.4052.6851.38
2. 2525.8555.2352.56
.
.
.
.
.
.
.
.
.
.
.
.
6. 3026.8946.2849.23
A1–1.1  Data Interpretation, Method A-1
A1–1.1.1
δQ
+
=maximum positive deviation of actual flow from nominal
δQ
+
=Q
max
- Q
N
where:
Q
max
=maximum value of Q
A
Q
N
=average value of Q
A
during time when P
1
= initial steady state
δQ
-
=maximum negative deviation of actual flow from nominal
δQ
-
=Q
min
- Q
N
where:
Q
min
=minimum value of Q
A

SEMI F64-0701 © SEMI 200114
For example (see Table A1–1), if Q
N
= 50.01 sccm, Q
max
= 55.23 sccm, and Q
min
= 46.28 sccm, then
δQ
+
=55.23 sccm - 50.01 sccm   =5.22 sccm
δQ
-
=46.28 sccm - 50.01 sccm   =-3.73 sccm
A1–1.1.2  t
s
is settling time to Q
N
; i.e.,
t
s
=elapsed  time  from  initiation  of  pressure  transient  (t
o
)  to  when  Q
A
is  within  0.5%  of
reading of Q
N
(t
f
) = t
f
- t
o
δM is deviation of mass of material delivered during the disturbance relative to steady state mass delivery; i.e.,
min/sec 60
)
t
-
t
()
Q
-
Q
(
= M
iih
NA
t
t
=
t
f
oi
δ
(2)
This quantity may be thought of as the net area between the Q
A
versus time curve and the Q
N
versus time line.  See
Figure A1–1 below.
Figure A1–1
Q
N
versus t (sec)
NOTE 1:  δM is expressed in units of sccm.
A1–2  Data Analysis: Method A-2
Refer again to Table A1–1
A1–2.1  Data Interpretation, Method A-2
Q
R
is the steady state actual flow while the inlet pressure is being ramped.  It is calculated by averaging Q
A
values from time t
o
+ 50 sec to t
o
+ 110 sec.
∆Q is the steady state deviation of actual flow during the inlet pressure ramp from that while inlet pressure
is constant; i.e.,
∆Q = Q
R
- Q
N
(3)

SEMI F64-0701 © SEMI 200115
V
eq
is the equivalent internal control volume of the DUT.  Note that it may not represent the actual internal volume
of the DUT; i.e.,
)
min/sec 60
atm i/std. s p 14.7
(x
P
Q
=
V
1
eq
∆
(4)
For example, if ∆Q = 5.02 sccm and P1 = 0.7 kPa (0.1 psi)/sec, then
Veq=  [(5.02 sccm)/( 0.7 kPa (0.1 psi)/sec)] × [(101.325 kPa (14.7 psi)/std. atm)/(60 sec/min)] = 12.3 ccm
A1–3  Data Analysis: Method B
Table A1–2  Sample Data Sheet: Method B
Date:________________Time:__________
DUT #________________Ambient Temp__________°C
Standard Flow Device________________
Full Scale________________ sccm
P1 (psig)Setpoint Flow (sccm)Q
A
(sccm)Q
I
(sccm)
15. 0200.00-0.01
15. 005050.0150.01
15. 01100100.12100.01
50. 0600.00-0.05
50. 045050.1250.01
50. 03100100.56100.02
A1–3.1  Data Interpretation, Method B
PC
o
is the pressure coefficient of indicated flow per pressure change at zero flow; i.e.,
100
Q

P
Q
= (%)
PC
sp
1
A
A
x
∆
∆
(5)
x100
Q
)
P
-
P
(
Q
-
Q
= (%)
PC
FS
IiIf
IiIf
o
(6)
PC
A
is the pressure coefficient of actual flow per pressure change at a setpoint; i.e.,
For example, from Table A2.1,
PC
o
(%)= {[-0.05 sccm-(-0.01 sccm)]/[(50.06 psig-15.02 psig)(100 sccm)]} × 100
= -0.0011% of FS/psi
PC
A
(@ 50%) = [50.12 sccm-50.01 sccm]/[(50.04 psig-15.00 psig)(50 sccm)] × 100
= 0.0063% of reading/psi at 50 sccm
PC
A
(@ FS= [100.56 sccm-100.12 sccm]/[(50.03 psig-15.01 psig)(100 sccm)] × 100
= 0.013% of reading/psi at 100 sccm

SEMI F64-0701 © SEMI 200116
A–4  Data Analysis: Method C
Table A4–1  Sample Data Sheet: Method C
Date:________________Time:__________
DUT #________________Ambient Temp__________°C
Standard Flow Device________________
Setpoint________________ sccm
Te = ________________ °CP1 =     __________psig
Time (sec)P2 (kPa)Q
A
(sccm)Q
I
(sccm)
0101. 33850.0550.0
0. 05101.33850.0550.0
.
.
.
.
.
.
.
.
.
.
.
.
2. 2095.08652.2851.5
2. 2588.40654.5652.1
.
.
.
.
.
.
.
.
.
.
.
.
8. 4532.42450.0850.0
8. 5031.81150.0750.0
.
.
.
.
.
.
.
.
.
.
.
.
15. 2026.83850.0650.0
A1–4.1  Data Interpretation, Method C – See Appendix A1–1.1
NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacture's  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature,  respecting  any  materials  or  equipment  mentioned  herein.  These  standards  are  subject  to  change  without
notice.
The user’s attention is called to the possibility that compliance with this standard may require use of copy-righted
material  or  of  an  invention  covered  by  patent  rights.    By  publications  of  this  standard,  Semiconductor  Equipment
and  Materials  International  (SEMI)  takes  no  position  respecting  the  validity  of  any  patent  rights  or  copyrights
asserted in connection with any items mentioned in this standard. Users of this standard are expressly advised that
determination of any such patent rights or copyrights, and the risk of infringement of such rights are entirely their
own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI F65-1101 © SEMI 20011
SEMI F65-1101
DIMENSIONAL SPECIFICATION FOR MOUNTING BASES OF
DIAPHRAGM VALVES USED WITH METRIC PFA TUBES
This specification was technically approved by the Global Liquid Chemical Distribution Systems Committee
and  is  the  direct  responsibility  of  the  Japanese  Liquid  Chemical  Distribution  Systems  Committee.  Current
edition  approved  by  the  Japanese  Regional  Standards  Committee  on  August  3,  2001.    Initially  available  at
www.semi.org September 2001; to be published November 2001.
1  Purpose
1. 1  This  document  specifies  dimensions  of  mounting
base and their clearance hole sizes for bolts and the hole
locations  of  diaphragm  valves  used  with  metric  PFA
tubes   in   liquid   chemical   distribution   facilities   and
process  equipment  for  semiconductor  and  flat  panel
display manufacturing.
1. 2  To  avoid  any  disturbance  of  future  development
and to facilitate interchangeability of diaphragm valves,
this   document   has   a   limited   scope   as   specified   in
Section 2.
2  Scope
2. 1  This  document  applies  to  mounting  bases  for  two
way  valves  with  a  diaphragm  designed  to  shut  off
and/or  regulate  a  liquid  chemical  flow  in  tubes  whose
sizes are listed in Table 1.
2. 2  The  valves  are  made  from  materials  such  as  PTFE
or  PFA,  which  have  high  corrosion  resistance  and  low
contamination contribution to the fluid.
2. 3  This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.   It   is   the
responsibility  of  the  user  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Referenced Standards
3. 1  ISO Standards
1
ISO  273  —  Fasteners  –  Clearance  Holes  for  Bolts  and
Screws
ISO 2768-1 — General Tolerance – Part 1: Tolerances
for  linear  and  angular  dimensions  without  individual
tolerance indications
3. 2  JIS Standards
2
JIS   B   1001   —   Diameter   of   Clearance   Holes   and
Counterbores for Bolts and Screws

1  International Organization for Standardization (ISO), 1, rue de
Varembé, Case postale 56, CH-1211 Genève 20, Switzerland.
2  Japan Standards Association, 4-1-24, Akasaka, Minato-ku, Tokyo,
Japan 107-8440.
JIS  B  0405  —  General  Tolerance  –  Part  1:  Tolerances
for  linear  and  angular  dimensions  without  individual
tolerance indications
NOTE 1: Unless   otherwise   indicated,   all   documents   cited
shall be the latest published versions.
4  Terminology
4. 1  Abbreviations and Acronyms
4. 1.1  PFA  —  tetrafluoroethylene  perfluoroalkylvinyl-
ether copolymer
4. 1.2  PTFE — polytetrafluoroethylene
4. 2  Definitions
4. 2.1  back  pressure — a maximum allowable pressure
applied to outlet of a diaphragm valve.
4. 2.2  liquid  chemicals  —  acid,  alkali,  organic  solvent,
and pure water used for wet stations; resists and devel-
opers  used  for  track  system;  and  other  chemicals  used
for process or maintenance (such as slurry of chemical-
mechanical polishing) of equipment or facilities.
4. 2.3  mounting  bases  —  plates  which  are  attached  to
diaphragm valves to mount the valves to equipment or a
facility.
5  Dimensional Specification
5. 1  Mounting  Base  Dimensions  —  the  length  (l)  and
width  (w)  of  the  mount  base  plate  indicated  in  the
Figure  1  and  the  values  for  different  tube  sizes  are
specified in Table 1.
5. 2  Clearance  Hole  Locations  —  the  location  of  the
clearance holes for bolts are indicated with “w” and “l”
in  the  Figure  1  and  the  values  for  different  tube  sizes
are specified in Table 1.
5. 3  Clearance Hole Sizes — the size of clearance holes
(φD) for different tube sizes are specified in the Table 1
according to ISO 273 (JIS B 1001).

SEMI F65-1101 © SEMI 20012
5. 4  Where  the  dimension  depends  on  the  valve  design  considering  the  back  pressure,  the  upper  row  in  Table  1
applies  to  the  valves  that  withstand  up  to  0.2  megapascals  (MPa)  (29  pounds  per  square  inch  (psi))  back  pressure,
and the lower row applies to the valves that withstand more than 0.2 MPa (29 psi) back pressure.
φD
w’w
l
l’
Figure 1
Top View of A Typical Diaphragm Valve with A Mounting Base
Table 1  Dimensional Specifications
Tube Size (mm)    (OD / ID)*Back Pressure
(Mpa)
l’ (mm)l (mm)w’ (mm)w (mm)
φD (mm)
Bolt Type
(example)
≤ 0.2
6048
25 / 22
> 0.2
6856
96847M6
≤ 0.2
44327664
19 / 16
> 0.2
52408472
7
M6
≤ 0.2
34226250
12 / 10
> 0.2
46347058
7M6
≤ 0.2
34226250
10 / 8
> 0.2
46346856
7M6
≤ 0.2
32205644
6 / 4
> 0.2
40286048
7
M6
Note 1:  OD and ID are outside diameter and inside diameter of the tube respectively.
Note 2:  Refer to ISO 2768-1 or JIS B 0405 for tolerances.
6  Measurements
6. 1  The mounting base must be conditioned for a minimum of one hour in an air environment of 23 ± 3ºC (73.4 ±
5. 4ºF) prior to measuring the dimensions.
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
International),3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI F66-1101 © SEMI 20011
SEMI F66-1101
SPECIFICATION FOR PORT MARKING AND SYMBOL OF STAINLESS
STEEL VESSELS FOR LIQUID CHEMICALS
This specification was technically approved by the Global Liquid Chemical Distribution Systems Committee
and  is  the  direct  responsibility  of  the  Japanese  Liquid  Chemical  Distribution  Systems  Committee.  Current
edition  approved  by  the  Japanese  Regional  Standards  Committee  on  August  3,  2001.    Initially  available  at
www.semi.org September 2001; to be published November 2001.
1  Purpose
1. 1  This  document  specifies  port  marking  and  symbol
of  stainless  steel  vessels  for  liquid  chemicals  used  in
semiconductor  and  flat  panel  display  manufacturing
equipment and liquid chemical distribution facilities.
2  Scope
2. 1  This  document  covers  stainless  steel  vessels  with
tubes  that  penetrate  into  the  vessels  as  inlets  or  outlets
of liquid chemical to/from the vessels.
2. 2  A  vessel  which  uses  coupling  (quick  coupling)  at
its tube end (port) is excepted from the scope.
2. 3  This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.   It   is   the
responsibility  of  the  user  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Referenced Standards
3. 1  None.
4  Terminology
4. 1  dip tube — a piece of tube which penetrates into a
vessel  as  an  inlet  or  outlet  of  liquid  chemical  to/from
the vessel.
4. 2  liquid   chemical   —   organic   or   inorganic   liquid
chemical  used  for  semiconductor  or  flat  panel  display
manufacturing.
4. 3  port — an end of a tube attached to a vessel.
5  Requirements for Port Marking
5. 1  The  dip  tube  port  shall  be  marked  as  “DIP”.    If
more than one dip tube port exists on a vessel, each port
shall be marked as “DIP”.
5. 2  Additional  Marking  —  A  description  to  identify
multiple  ports  may  be  added  to  the  dip  port  marking
such as DIP-1 or DIP (1).
5. 3  Location  of  Marking  —  “DIP”  marking  shall  be
located  where  it  will  clearly  identify  the  dip  tube  port.
If  more  than  one  dip  tube  ports  exist  on  a  vessel,  each
marking shall be located so that the corresponding port
is clearly identified.
5. 4  Method   of Marking   —   The   marking   shall   be
engraved, etched, or labeled properly so that the “DIP”
marking shall not be removed.  Color of the marking is
optional.
5. 5  Size  of  Marking  —  The  marking  shall  be  sized  so
that it is clearly readable.
6  Requirements for Symbol
6. 1  A  symbol  illustrated  in  Figure  1  shall  be  used  to
draw a stainless steel vessel with a dip tube.  A dip tube
shall  be  identified  in  the  symbol  as  a  line  penetrating
into a rectangle.
6. 2  If  more  than  one  dip  tube  exists  on  a  vessel,  the
symbol  shall  have  the  same  number  of  lines  which
correspond to the dip tubes.
Figure 1
Symbol for Stainless Steel Vessel with a Dip Tube
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

SEMI F66-1101 © SEMI 20012
By    publication    of    this    standard,    Semiconductor
Equipment and Materials International (SEMI) takes no
position  respecting  the  validity  of  any  patent  rights  or
copyrights   asserted   in   connection   with   any   items
mentioned  in  this  standard.  Users  of  this  standard  are
expressly advised that determination of any such patent
rights  or  copyrights,  and  the  risk  of  infringement  of
such rights are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International),3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI F67-1101 © SEMI 20011
SEMI F67-1101
TEST METHOD FOR DETERMINING INERT GAS PURIFIER CAPACITY
This test method was technically approved by the Global Facilities Committee and is the direct responsibility
of  the  North  American  Facilities  Committee.  Current  edition  approved  by  the  North  American  Regional
Standards  Committee  on  August  27,  2001.    Initially  available  at  www.semi.org  September  2001;  to  be
published November 2001.
1  Purpose
1. 1  The  purpose  of  this  document  is  to  define  a  test
method  to  quantify  impurity  removal  capacity  of  inert
gas purifiers.
2  Scope
2. 1  To determine the impurity capacity of a gas purifier
at the point of breakthrough.  Capacity tests are done by
adding ppm levels of a given gaseous impurity to a pure
zero gas and monitoring the effluent of the test purifier
for active impurity species.
NOTE 1: Mixtures   of   two   or   more   impurities   for   multi
impurity  removal  purifiers  is  a  more  representative  method
for determining capacity.
2. 2  This  document  is  intended  for  point  of  use  (POU)
inert  gas  purifiers  where  inlet  purity  is  99.9995%  or
higher.
2. 3  This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.   It   is   the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  and  safety  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1  The  inherent  limitation  to  this  method  is  the  limit
of   detection   (LOD)   of   the   analytical   instrument
employed by the user.
3. 2  This  test  method  can  only  be  used  to  compare
purifier capacity results if the user application for flow
rate,  pressure,  and  temperature  are  the  same  as  the  test
conditions.    Different users  and/or  different  operating
conditions  may  result  in  different  purifier  performance
results.
3. 3  In  testing  mixtures  of  impurities,  some  impurities
may influence the capacity results.  Discussion with the
manufacturer is highly recommended prior to testing.
3. 4  The test method does not apply to particulates.
3. 5  This  test  method  can  only  be  used  to  compare  the
capacity  of  different  purifiers,  when  the  purifiers  are
sized for the appropriate flow rate.  Comparing purifiers
of   different   maximum   flow   ratings   will   result   in
misleading information.
3. 6  This  test  method  will  provide  capacity  information
only for impurities that are used in the challenge gas.
4  Referenced Standards
4. 1  SEMI Standards
SEMI E29 — Standard Terminology for the Calibration
of Mass Flow Controllers and Mass Flow Meters
SEMI  F6  —  Guide  for  Secondary  Containment  of
Hazardous Gas Piping Systems
SEMI F22 — Guide for Gas Distribution Systems
SEMI  F33  —  Method  for  Calibration  of  Atmospheric
Pressure Ionization Mass Spectrometer (APIMS)
4. 2  ANSI Standards
1
ANSI  B46.1  —  Surface  Texture  (Surface  Roughness,
Waviness, and Lay)
NOTE 2: Unless   otherwise   indicated,   all   documents   cited
shall be the latest published versions.
5  Terminology
5. 1  Abbreviations and Acronyms
5. 1.1  APIMS  —  atmospheric  pressure  ionization  mass
spectrometer
5. 1.2  °C — degrees Celsius
5. 1.3  DUT — device under test
5. 1.4  °F — degrees Fahrenheit
5. 1.5  in — inch
5. 1.6  kPa — kiloPascal
5. 1.7  LOD — limit of detection
5. 1.8  m — meter
5. 1.9  MFC — mass flow controller
5. 1.10  NMHC — non methane hydrocarbons
5. 1.11  POU — point of use
5. 1.12  ppb — parts per billion, volume basis

1 American National Standards Institute, New York Office: 11 West
42nd Street, New York, NY 10036, USA. Telephone: 212.642.4900;
Fax: 212.398.0023 Website: www.ansi.org

SEMI F67-1101 © SEMI 20012
5. 1.13  ppm — parts per million, volume basis
5. 1.14  psi — pounds per square inch
5. 1.15  psia — pounds per square inch absolute
5. 1.16  psig — pounds per square inch gauge
5. 1.17  R
a
—  surface  roughness  average  (as  defined  in
ANSI B46.1)
5. 1.18  R
a,max
—   surface   roughness   maximum   (as
defined in ANSI B46.1)
5. 1.19  s — second
5. 1.20  sccm — standard cubic centimeters per minute
5. 1.21  slpm — standard liter per minute
5. 2  Definitions
5. 2.1  activation — the process of initially preparing the
purifier   media   to   be   chemically   reactive   with   gas
impurities.
5. 2.2  activation  temperature  —  temperature  at  which
DUT was initially prepared.
5. 2.3  atmospheric       pressure       ionization       mass
spectrometer  (APIMS)  —  an  instrument  consisting  of
an  atmospheric  pressure  ion  source  where  gas  phase
impurities  are  ionized  via  charge  exchange  reactions
with  the  bulk  gas.    These  ions  are  directed  into  a
vacuum  chamber  where  they  are  then  separated  by  a
mass analyzer and detected by an electron multiplier.
5. 2.3.1  ion    source    —    the    section    of    a    mass
spectrometer  used  to  generate  sample  ions  by  electron
impact, chemical ionization, or charge exchange.
5. 2.3.2  mass  analyzer  —  a  device  that  utilizes  electric
and/or  magnetic  fields  to  separate  charged  particles  or
ions  according  to  their  mass-to-charge  (m/e)  ratios.
Examples   of   mass   analyzers   include   quadrupole,
magnetic  and/or  electric  sector,  time  of  flight,  and  ion
traps.
5. 2.3.3  electron  multiplier — a device that detects and
amplifies     electro-magnetic     phenomena     such     as
positive/negative ions.
5. 2.4  back   pressure   regulator   —   a   self-contained
device,  consisting  of  a  mechanical  or  electrical  sensor
and     control     device,     commonly     used     in     the
semiconductor  industry  to  maintain  a  constant  pressure
upstream of the regulator.
5. 2.5  breakthrough —   the   point   in   time   when   an
individual impurity level in the purifier effluent exceeds
the  level  specified  by  the  manufacturer.    Typically  in
the range of 1–100 ppb.
5. 2.6  challenge  gas  —  a  gas  mixture  containing  high
levels of gas impurities.  Typically, a challenge gas has
impurities of between 500 ppm to 1% which is used to
shorten  the  test  duration;  however,  challenges  in  the
range   of   1–10   ppm   for   the   impurities   is   more
representative.
5. 2.7  gaseous  impurities  —  gas  phase  elements  and
compounds  in  the  gas  stream  other  than  the  process  or
base gas.
5. 2.8  impurity  analyzer  —  an  appropriate  analyzer  to
measure the concentration of desired impurities in a gas
stream  from  the  ppm  to  the  percent  (%)  concentration
range.
5. 2.9  inert  gas  —  a  gas,  which  at  ambient  conditions,
does   not   react   chemically   with   other   materials   or
chemicals.
5. 2.10  limit of detection (LOD) — lowest concentration
that can be detected by an instrument.  LOD is typically
defined  as  three  times  the  standard  deviation  of  the
mean  noise  level  (see  SEMI  F6,  lower  detectable  limit
of instrument).
5. 2.11  mass flow controller (MFC)  —  a  self-contained
device,  consisting  of  a  mass  flow  transducer,  control
valve,  and  control  and  signal-processing  electronics,
commonly   used   in   the   semiconductor   industry   to
measure  and  regulate  the  mass  flow  of  gas  (as  defined
in SEMI E29).
5. 2.12  pure  gas  —  an  inert  gas,  minimum  purity  of
99. 9995%, and less than 1 ppb of each impurity that is
specified to be removed by the DUT.
5. 2.13  purifier —    generally    a    catalytic    (getter,
reactive),  resinous,  or  diatomaceous  material  within  a
pressure  vessel  which  removes  particulate  and/or  trace
gas  impurities  from  a  gas  stream  (as  defined  in  SEMI
F22).
5. 2.14  purifier  capacity  —  the  total  quantity  of  each
trace  gas  impurity  that  may  be  sorbed  by  the  purifier
media.  Defined as liters impurity/liter purifier media.
5. 2.15  regeneration  —  the  process  of  reactivating  the
purifier media.
5. 2.16  test  duration  —  total  time  required  to  complete
the test procedure.
5. 2.17  test flow rate — flow rate through DUT (slpm).
5. 2.18  test  pressure  —  pressure  immediately  upstream
of the DUT.
5. 2.19  test  temperature  —  operating  temperature  of
DUT.
5. 2.20  ultratrace      analytical      instrumentation      —
instrumentation    that    has    sufficient    sensitivity    to

SEMI F67-1101 © SEMI 20013
measure  all  impurities  of  interest  at  the  specified  level
of the customer, the ppb or sub-ppb level.
5. 2.21  zero gas — nitrogen, argon, helium or hydrogen
with an estimated level an order of magnitude, or more,
lower   than   the   lowest   calibration   point   for   each
impurity of interest (as defined in SEMI F33).
6  Summary of Method
6. 1  This  method  will  allow  a  user  to  quantify  the
impurity  removal  capacity  of  a  given  inert  gas  purifier
for that impurity.
7  Safety Precautions
7. 1  This test method may involve hazardous materials,
operations,  and  equipment.    The  test  method  does  not
purport  to  address  the  safety  considerations  associated
with  its  use.    It  is  the  responsibility  of  the  user  to
establish  appropriate  safety  and  health  practices  and
determine  the  applicability  of  regulatory  limitations
before using this method.
7. 2  Exhaust from the DUT should be properly vented.
7. 3  Only the appropriate gas should be used for purifier
testing.      Use   of   the   inappropriate   gas   may   cause
exothermic reactions and possible explosions.
7. 4  Electric  discharges  or  mechanical  friction  might
trigger  combustion  within  a  getter.    Avoid  situations
where there is an accumulation of electrostatic charge.
7. 5  Purifiers   are   generally   designed   for   use   with
impurity  levels  less  than  1%  and  should  not  be  used  to
purify  air  or  other  inappropriate  gases.    Contact  the
manufacturer   if   there   is   any   question   as   to   the
suitability for a particular gas.
7. 6  Care  should  be  taken  to  minimize  the  purifier’s
exposure to room air (even filtered air).  Room air may
chemically  react  with  some  purifiers  shortening  the
purifier  lifetime.    Follow  manufacturer’s  installation
procedures.
8  Test Protocol
8. 1  Test Conditions
8. 1.1  The    test    should    be    conducted    following
manufacturers  recommended  handling  procedures  to
activate   new   media   or   regenerate   existing   purifier
media.
8. 1.2  The test is to be conducted at a room temperature
maintained  between  18°C  (64°F)  and  26°C  (78°F).
Environmental   temperature   fluctuations   within   this
range are not expected to have any measurable effect on
the   instrumentation   used   to   detect   the   level   of
impurities.  Follow instrument manufacturer’s operating
procedures.
8. 1.3  Testing  performed  at  high  impurity  challenge
may alter test results, and may not be appropriate to do
for  all  types  of  purifiers.    Any  significant  temperature
change  during  the  test  could  have  adverse  or  false
effects on the capacity results.
8. 1.4  For a mixture of more than 1 impurity, competing
reactions  may  occur  between  impurities,  which  may
lead to different results.
8. 2  Apparatus
8. 2.1  Materials
8. 2.1.1  Test   Gas   —   a   mixture   of   pure   gas   and
challenge  gas.    Select  the  appropriate  concentration
level.    For  initial  studies,  a  higher  concentration  range,
e.g.,  500  ppm  to  1%  is  suggested  for  each  given
impurity.    For  more  representative  studies  done  over
longer time periods, 1–10 ppm for each given impurity
is suggested.
8. 2.1.2  Pressure   Regulators   —   all   wetted   internal
surfaces,   where   appropriate,   should   be   made   of
electropolished  316L  stainless  steel  with  an  internal
surface  finish  of  0.18  μm  (7  μin)  R
a
and  0.25  μm  (10
μin) R
a,max
, to control system pressures.
8. 2.1.3  Pressure Gauge — all wetted internal surfaces,
where  appropriate,  should  be  made  of  electropolished
316L  stainless  steel  with  an  internal  surface  finish  of
0. 18  μm  (7  μin)  R
a
and  0.25  μm  (10  μin)  R
a,max
,  to
monitor system pressures.
8. 2.1.4  Standard  Test  Flows  —  use  appropriate  mass
flow devices.  One MFC with appropriate range of 0–50
slpm for the pure gas is suggested.  Various MFCs with
appropriate  ranges  of  0–25  sccm,  0–100  sccm  and  0–1
slpm for the challenge gas is suggested.
8. 2.1.5  Tubing   —   made   of   electropolished   316L
stainless  steel,  with  an  internal  surface  finish  of  0.18
μm (7 μin) R
a
and 0.25 μm (10 μin) R
a,max
, to transport
gas.
8. 2.1.6  Fittings — the appropriate size face-seal fitting
is used.
8. 2.1.7  Gaskets    —    use    metal    gaskets    for    all
connections.  New gaskets should be used for each new
connection.  Use of cleanroom gloves is required when
handling gaskets and fittings.
8. 2.2  Instrumentation
8. 2.2.1  An    APIMS    or    other    ultratrace    analytical
instrumentation  is  used  to  determine  the  level  of  each
gaseous impurity exiting the DUT.

SEMI F67-1101 © SEMI 20014
8. 2.2.2  An impurity analyzer is used to measure higher
concentrations  of  impurities  such  as  found  in  the  test
gas.
8. 2.2.3  Electronically  controlled  mass  flow  controllers
are  used  to  accurately  blend  the  impurity  challenge
level.
8. 2.2.4  Data  collection  equipment  is  used  to  gather
output from the ultratrace analytical instrumentation.
8. 2.2.5  All   instruments   used   should   be   calibrated
regularly, according to manufacturer’s specifications.
8. 2.3  Test Set-up and Schematic
8. 2.3.1  Assemble  the  test  setup  according  to  Figure  1.
Do not install the DUT until a purge flow is established
through MFC1.
8. 2.3.2  For  the  test  set-up,  pure  gas  is  blended  with
challenge gas to create a test gas mixture.
8. 2.3.3  The    DUT    is    connected,    purged    per    the
manufacturer’s  recommendation,  positioned  with  the
appropriate  attitude  (if  required  by  the  manufacturer),
and heated (if required by manufacturer) under pure gas
flow.
8. 2.3.4  Challenge   gas   flow   is   introduced   and   the
impurity  analyzer  measures  the  impurity  levels.    If
appropriate,  the  APIMS  or  other  ultratrace  analytical
instrumentation  may  be  used  to  measure  the  test  gas
while the test gas bypasses the DUT.  See Section 9 on
Exposure Precautions.
8. 2.3.5  Measure  and  record  the  test  gas  concentration
for the desired impurity.
8. 2.3.6  Following  measurement  of  the  test  gas,  the
bypass   should   be   purged   with   pure   gas   to   ensure
impurity removal from the section of the test set-up that
is downstream of the DUT.
8. 3  Test Procedures —  Refer to Figure 1.
8. 3.1  Use  of  the  impurity  analyzer  is  recommended  to
protect      the      APIMS      or      ultratrace      analytical
instrumentation   from   high   impurity   concentrations
which  may  harm  the  instrument.    The  test  may  be
conducted  without  the  impurity  analyzer  at  the  risk  of
exposing     the     APIMS     or     ultratrace     analytical
instrumentation to high impurity concentrations.
8. 3.2  Analytical Instrumentation Setup
8. 3.2.1  Set      up      and      calibrate      the      analytical
instrumentation    (APIMS    or    ultratrace    analytical
instrumentation  and  impurity  analyzer)  according  to
manufacturer specifications.  This includes establishing
the appropriate flow rate to the instrument.
8. 3.2.2  Acquire  zero  data  to  establish  the  analytical
instrumentation  baseline  and  stability  prior  to  starting
the test.
8. 3.3  Establish  flow  of  pure  gas  through  the  manifold
bypass:
8. 3.3.1  Start with all valves closed except purge gas to
analytical instrumentation (V11 and V13 open).
8. 3.3.2  Open   V1   and   adjust   R1   to   the   suggested
operating pressure range of 275–415 kPa (40–60 psig).
8. 3.3.3  Open  V2,  V8,  V9  and  adjust  R3  to  provide
appropriate backpressure for operation of the APIMS or
other ultratrace analytical instrumentation.  R3 will vent
excess gas providing the volume challenge to the DUT.
Set  MFC1  to  the  appropriate  flow  rate.    Readjust  R1
and R3 to obtain the proper operating conditions.
8. 3.4  Monitor drydown of the manifold bypass:
8. 3.4.1  Close V11 and Open V10.
8. 3.4.2  Purge  the  bypass  manifold  until  the  impurity
level   is   in   the   range   of   the   APIMS   or   ultratrace
analytical instrumentation.
8. 3.4.3  Close  V13  and  Open  V12.    Close  V10  and
Open V11.
8. 3.4.4  Purge  the  bypass  manifold  until  the  moisture
impurity  level  at  the  APIMS  or  ultratrace  analytical
instrumentation is below 1.0 ppb.
8. 3.5  Re-isolate   the   APIMS   or   ultratrace   analytical
instrumentation:
8. 3.5.1  Close V12 and Open V13.  Maintain a constant
purge to the analytical instrumentation.
8. 3.6  Install the DUT, Purging with Pure Gas:
8. 3.6.1  Open  V6.    Remove  the  DUT  inlet  face-seal
connection.  Quickly install the DUT inlet.  Remove the
DUT  outlet  face-seal  connection  and  install  the  DUT
outlet.  Open V7.
8. 3.6.2  Isolate  the  manifold  bypass,  directing  all  flow
through the DUT, close V8 and V9.
8. 3.6.3  Adjust  R1  and  R3  until  P1  measures  the  stated
purifier operating pressure.
8. 3.6.4  Purge    the    DUT    per    the    manufacturer’s
recommendation.      If   required,   heat   the   DUT   per
manufacturer’s recommendation.
8. 3.7  Monitor  the  impurity  level  at  the  outlet  of  the
DUT until stable:
8. 3.7.1  Initial  impurity  monitoring  may  be  done  with
the impurity analyzer.  Close V11, open V9 and V10.

SEMI F67-1101 © SEMI 20015
8. 3.7.2  When  the  impurity  level  is  in  the  range  of  the
APIMS  or  ultratrace  analytical  instrumentation,  Close
V13 and Open V12.  Close V9 and V10, Open V11.
8. 3.7.3  Monitor impurity level until stable.
8. 3.8  Initiate Impurity Challenge:
8. 3.8.1  Isolate   the   DUT   and   APIMS   or   ultratrace
analytical  instrumentation.    Close  V7  and  V12,  open
V13.
8. 3.8.2  Open   V3   and   adjust   R2   to   the   suggested
operating pressure range of 275–415 kPa (40–60 psig).
Open  V5  and  set  MFC2  to  the  desired  flow.    (See
Appendix 1 to determine the desired flow for MFC2).
8. 3.8.3  Verify  test  gas  impurity.    Open  V4,  V8,  and
V10  and  then  close  V5  and  V11,  supplying  test  gas  to
the  impurity  analyzer.    Adjust  R2  as  necessary  to
maintain   appropriate   pressure   for   supplying   MFC2.
Monitor  test  gas  impurity  until  stable  and  verified  to
theoretical impurity value (See Appendix 1).
8. 3.8.4  Initiate  test.    Direct  input  test  gas  through  the
DUT  to  the  APIMS  or  ultratrace  impurity  analyzer,
Open  V6  and  V7.    Open  V12  and    close  V13.    Isolate
impurity analyzer, Close V8 and V10.  Open V11.
8. 3.8.5  Zero  test  gas  flow  totalizers  (Pure  Gas  MFC1
and  challenge  gas  through  MFC2)  beginning  Purifier
Capacity Test.
8. 3.9  Determination of purifier capacity:
8. 3.9.1  The  test  will  require  several  weeks  or  months
depending on the purifier’s capacity for retention of and
the concentration of the impurity.
8. 3.9.2  The test may be done on newly activated media
or  may  be  done  using  existing  media  that  has  been
regenerated.  The test may be destructive to the DUT.
8. 3.9.3  Constant   monitoring   of   the   purifier   effluent
over  the  duration  of  the  test  is  preferred.    However,
periodic monitoring, e.g. every few hours is sufficient.
8. 3.9.4  The  test  gas  can  be  periodically  monitored  at
the  impurity  analyzer  by  closing  V11  and  opening  V8
and  V10.    If  significant,  ensure  that  flow  volume  to
impurity  analyzer  during  this  time  is  subtracted  from
total   volume   input   through   DUT.      In   addition,
instrument    calibration    should    be    monitored    as
recommended by the manufacturer.
8. 3.9.5  Monitor   trends   in   outlet   purity   until   the
breakthrough  point  for  the  impurity  is  detected.    Time,
liters of gas, and outlet purity should be recorded.
8. 4  Repeat  test  for  each  new  impurity  to  be  analyzed
using a new or regenerated DUT.
9  Exposure Precautions
9. 1  The   APIMS   or   ultratrace   analytical   instrument
should  not  be  exposed  to  high  levels  of  impurities.
After  installation  of  the  purifier,  it  should  be  purged
well,   per   the   manufacturer’s   recommendation.      A
typical  recommendation  might  be  to  purge  a  minimum
of  150  bed  volumes  before  directing  the  flow  to  the
APIMS.
10  Calculation of Purifier Capacity
10. 1  Use  the  following  formula  to  calculate  Purifier
Capacity:
10. 2  (Test  Duration  (min))  ×  (Test  Flow  Rate  slpm)  =
Total Liters Test Gas (TLTG)
10. 3  Impurity(liters) = (TLTG) × ppm × 10
-6
10. 4  Purifier       Capacity       =       (Total       Impurity
(liters)/(Purifier Volume(liters))
10. 5  Purifier Capacity is reported as total liters of each
given impurity per liter purifier, and is a dimensionless
number.
11  Reporting Results
11. 1  The following test conditions should be reported:
11. 1.1  Date and time of test,
11. 1.2  Operator,
11. 1.3  Pure gas flow rate (slpm),
11. 1.4  Challenge gas flow rate (sccm),
11. 1.5  Test pressure kPa (psig or psia),
11. 1.6  DUT operating temperature (°C),
11. 1.7  Purifier     manufacturer,     model,     and     serial
number, and volume,
11. 1.8  Ultratrace analytical instrumentation used,
11. 1.9  Test gas impurities and levels, and
11. 1.10  Calibration   certificates   for   the   mass   flow
devices,   pressure   gauges   and   ultratrace   analytical
instrumentation.
12  Related Documents
SEMI  F30  —  Start-up  and  Verification  of  Purifier
Performance   Testing   for   Trace   Gas   Impurities   and
Particles at an Installation Site
SEMI   F43   —   Test   Method   for   Determination   of
Particle Contribution by Point-Of-Use Purifiers
NOTE 3: Unless   otherwise   indicated,   all   documents   cited
shall be the latest published versions.

SEMI F67-1101 © SEMI 20016
Purge Gas
DUT
Pure Gas
(>9N Purity)
APIMS
or
Ultratrace
Analytical
Instrumentation
Impurity Analyzer
P1
Legend
DUT = Device Under Test
P1 = Test Pressure
R1 = Pure Gas 0–100 psig Regulator
R2 = Challenge Gas 0–100 psig Regulator
R3 = Vent Gas 0–100 psig Back Pressure Regulato
r
V1 = Pure Gas Source Isolation Valve
V2 = Pure Gas System Isolation Valve
V3 = Challenge Gas Source Isolation Valve
V4 = Challenge Gas System Isolation Valve
V5 = Challenge Gas Vent Isolation Valve
Challenge Gas
(~1% Impurity)
V4
V5
V6V7
V8
V9
Vent
V10
V11
MFC1
R1
V1
V2
V6 = DUT Inlet Isolation Valve
V7 = DUT Outlet Isolation Valve
V8 = DUT Bypass Inlet Isolation Valve
V9 = DUT Bypass Outlet Isolation Valve
V10 = Impurity Analyzer Sample Isolation Valve
V11 = Impurity Analyzer Purge Gas Isolation Valve
V12 = APIMS/UAI Sample Isolation Valve
V13 = APIMS/UAI Purge Gas Isolation Valve
MFC1 = Pure Gas Mass Flow Controller
MFC2 = Challenge Gas Mass Flow Controller
V13
V12
MFC2
R2
V3
R3
Figure 1
Suggested Point of Use Purifier Capacity Test Setup

SEMI F67-1101 © SEMI 20017
APPENDIX 1
MFC SIZING
NOTE:    The  material  in  this  appendix  is  an  official  part  of  SEMI  F67  and  was  approved  by  full  letter  ballot
procedures on August 27, 2001.
A1-1          To     determine     purifier     efficiency,     the
concentration  of  impurity  entering  the  purifier  and  the
quantity of impurity downstream of the purifier must be
determined.
A1-2      Determine   the   manufacturer’s   recommended
flow  rate  for  the  purifier.    As  an  example,  assume  a
flow rate of 5 slpm.
A1-3      Determine   the   flow   rate   of   challenge   gas
required.  As an example, 5 sccm of a 1% challenge gas
would  be  blended  into  4,995  sccm  of  pure  gas  to
generate a 10 ppm test gas.
PPM 10
sccm 4,995sccm 5
sccm 5PPM 10,000
GasTest=
+
×
=
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

SEMI F68-1101 © SEMI 20011
SEMI F68-1101
TEST METHOD FOR DETERMINING PURIFIER EFFICIENCY
This test method was technically approved by the Global Facilities Committee and is the direct responsibility
of  the  North  American  Facilities  Committee.  Current  edition  approved  by  the  North  American  Regional
Standards  Committee  on  August  27,  2001.    Initially  available  at  www.semi.org  September  2001;  to  be
published November 2001.
1  Purpose
1. 1  The  purpose  of  this  document  is  to  define  a  test
method  to  quantify  the  efficiency  of  a  purifier  for
removal  of  an  active  gaseous  impurity  from  a  matrix
gas.
2  Scope
2. 1  To  determine  the  efficiency  of  a  gas  purifier  to
remove  a  given  impurity  species.    Efficiency  tests  are
performed  by  adding  ppm  levels  of  gaseous  impurities
to  a  pure  matrix  gas  and  monitoring  the  effluent  of  the
test purifier for active impurity species.  Tests are done
at    supplier    recommended    flow    rate,    operating
temperature and pressure.
2. 2  To establish a method of determining instantaneous
purifier efficiency.
2. 3  The test method applies to point of use (POU) and
large scale purifiers.
2. 4  This  method  is  for  UHP  efficient  removal  of  low
level contaminants.
2. 5  This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.   It   is   the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  and  safety  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1  The  inherent  limitation  to  this  method  is  the  limit
of   detection   (LOD)   of   the   analytical   instrument
employed by the user.
3. 2  This  test  method  can  only  be  used  to  compare
purifier  efficiency  results  if  the  user  application  for
flow rate, pressure, and temperature are the same as the
test    conditions.        Different    user    and/or    different
operating  conditions  may  result  in  different  purifier
performance results.
3. 3  In  testing  mixtures  of  impurities,  some  impurities
may influence the efficiency results of other impurities.
Discussion     with     the     manufacturer     is     highly
recommended prior to testing.
3. 4  The test method does not apply to particulates.
3. 5  This     test     method     will     provide     efficiency
information  only  for  impurities  that  are  used  in  the
challenge gas.
4  Referenced Standards
4. 1  SEMI Standards
SEMI E29 — Standard Terminology for the Calibration
of Mass Flow Controllers and Mass Flow Meters
SEMI  F6  —  Guide  for  Secondary  Containment  of
Hazardous Gas Piping Systems
SEMI F22 — Guide for Gas Distribution Systems
SEMI  F33  —  Method  for  Calibration  of  Atmospheric
Pressure Ionization Mass Spectrometer (APIMS)
4. 2  ANSI Standards
1
ANSI  B46.1  —  Surface  Texture  (Surface  Roughness,
Waviness, and Lay)
NOTE 1: Unless   otherwise   indicated,   all   documents   cited
shall be the latest published versions.
5  Terminology
5. 1  Abbreviations and Acronyms
5. 1.1  APIMS  —  atmospheric  pressure  ionization  mass
spectrometer
5. 1.2  °C — degrees Celsius
5. 1.3  DUT — device under test
5. 1.4  °F — degrees Fahrenheit
5. 1.5  in — inch
5. 1.6  kPa — kiloPascal
5. 1.7  LOD — limit of detection
5. 1.8  m — meter
5. 1.9  MFC — mass flow controller
5. 1.10  NMHC — non methane hydrocarbons
5. 1.11  POU — point of use
5. 1.12  ppb — parts per billion, volume basis

1  American National Standards Institute, New York Office: 11 West
42nd Street, New York, NY 10036, USA. Telephone: 212.642.4900;
Fax: 212.398.0023 Website: www.ansi.org

SEMI F68-1101 © SEMI 20012
5. 1.13  ppm — parts per million, volume basis
5. 1.14  psi — pounds per square inch
5. 1.15  psia — pounds per square inch absolute
5. 1.16  psig — pounds per square inch gauge
5. 1.17  R
a
—  surface  roughness  average  (as  defined  in
ANSI B46.1)
5. 1.18  R
a,max
—   surface   roughness   maximum   (as
defined in ANSI B46.1)
5. 1.19  s — second
5. 1.20  sccm — standard cubic centimeters per minute
5. 1.21  slpm — standard liters per minute
5. 1.22  UHP — ultra high purity
5. 2  Definitions
5. 2.1  activation — the process of initially preparing the
purifier   media   to   be   chemically   reactive   with   gas
impurities.
5. 2.2  activation  temperature  —  temperature  at  which
DUT was initially prepared.
5. 2.3  atmospheric       pressure       ionization       mass
spectrometer  (APIMS)  —  an  instrument  consisting  of
an  atmospheric  pressure  ion  source  where  gas  phase
impurities  are  ionized  via  charge  exchange  reactions
with  the  bulk  gas.    These  ions  are  directed  into  a
vacuum  chamber  where  they  are  then  separated  by  a
mass analyzer and detected by an electron multiplier.
5. 2.3.1  ion    source    —    the    section    of    a    mass
spectrometer  used  to  generate  sample  ions  by  electron
impact, chemical ionization, or charge exchange.
5. 2.3.2  mass  analyzer  —  a  device  that  utilizes  electric
and/or  magnetic  fields  to  separate  charged  particles  or
ions  according  to  their  mass-to-charge  (m/e)  ratios.
Examples   of   mass   analyzers   include   quadrupole,
magnetic  and/or  electric  sector,  time  of  flight,  and  ion
traps.
5. 2.3.3  electron  multiplier — a device that detects and
amplifies     electro-magnetic     phenomena     such     as
positive/negative ions.
5. 2.4  back   pressure   regulator   —   a   self-contained
device,  consisting  of  a  mechanical  or  electrical  sensor
and     control     device,     commonly     used     in     the
semiconductor  industry  to  maintain  a  constant  pressure
upstream of the regulator.
5. 2.5  breakthrough —   the   point   in   time   when   an
individual impurity level in the purifier effluent exceeds
the  level  specified  by  the  manufacturer.    Typically  in
the range of 1–100 ppb.
5. 2.6  challenge  gas  —  a  gas  mixture  containing  high
levels of gas impurities.  Typically, a challenge gas has
impurities of between 500 ppm to 1% which is used to
shorten  the  test  duration;  however,  challenges  in  the
range   of   1–10   ppm   for   the   impurities   is   more
representative.
5. 2.7  efficiency — a measure of the ability of a purifier
to  remove  active  impurities  from  a  matrix  gas  stream.
It is calculated as the ratio of the difference between the
inlet  concentration  and  the  concentration  of  impurity
leaving  the  purifier  to  the  concentration  of  impurity
entering the purifier.
5. 2.8  gaseous  impurities  —  gas  phase  elements  and
compounds  in  the  gas  stream  other  than  the  process  or
base gas.
5. 2.9  impurity  analyzer  —  an  appropriate  analyzer  to
measure the concentration of desired impurities in a gas
stream  from  the  ppm  to  the  percent  (%)  concentration
range.
5. 2.10  inert gas — a gas, which at ambient conditions,
does   not   react   chemically   with   other   materials   or
chemicals.
5. 2.11  limit of detection (LOD) — lowest concentration
that can be detected by an instrument.  LOD is typically
defined  as  three  times  the  standard  deviation  of  the
mean  noise  level  (see  SEMI  F6,  lower  detectable  limit
of instrument).
5. 2.12  mass flow controller (MFC)  —  a  self-contained
device,  consisting  of  a  mass  flow  transducer,  control
valve,  and  control  and  signal-processing  electronics,
commonly   used   in   the   semiconductor   industry   to
measure  and  regulate  the  mass  flow  of  gas  (as  defined
in SEMI E29).
5. 2.13  pure  gas  —  an  inert  gas,  minimum  purity  of
99. 9995%, and less than 1 ppb of each impurity that is
specified to be removed by the DUT.
5. 2.14  purifier— generally a catalytic (getter, reactive),
resinous,  or  diatomaceous  material  within  a  pressure
vessel   which   removes   particulate   and/or   trace   gas
impurities from a gas stream (as defined in SEMI F22).
5. 2.15  purifier  capacity  —  the  total  quantity  of  each
trace  gas  impurity  that  may  be  sorbed  by  the  purifier
media.  Defined as liters impurity/liter purifier media.
5. 2.16  regeneration  —  the  process  of  reactivating  the
purifier media.
5. 2.17  test  duration  —  total  time  required  to  complete
the test procedure.
5. 2.18  test flow rate — flow rate through DUT (slpm).

SEMI F68-1101 © SEMI 20013
5. 2.19  test  pressure  —  pressure  immediately  upstream
of the DUT.
5. 2.20  test  temperature  —  operating  temperature  of
DUT.
5. 2.21  ultratrace      analytical      instrumentation      —
instrumentation    that    has    sufficient    sensitivity    to
measure  all  impurities  of  interest  at  the  specified  level
of the customer, the ppb or sub-ppb level.
5. 2.22  zero gas — nitrogen, argon, helium or hydrogen
with an estimated level an order of magnitude, or more,
lower   than   the   lowest   calibration   point   for   each
impurity of interest (as defined in SEMI F33).
6  Summary of Method
6. 1  This  method  will  allow  a  user  to  quantify  the
impurity  efficiency  of  a  point-of-use  (POU)  or  large
scale purifier.
7  Safety Precautions
7. 1  This test method may involve hazardous materials,
operations,  and  equipment.    The  test  method  does  not
purport  to  address  the  safety  considerations  associated
with  its  use.    It  is  the  responsibility  of  the  user  to
establish  appropriate  safety  and  health  practices  and
determine  the  applicability  of  regulatory  limitations
before using this method.
7. 2  Exhaust from the DUT should be properly vented.
7. 3  Only the appropriate gas should be used for purifier
testing.      Use   of   inappropriate   gases   may   cause
exothermic reactions and possible explosions.
7. 4  Electric  discharges  or  mechanical  friction  might
trigger  combustion  within  a  getter.    Avoid  situations
where there is an accumulation of electrostatic charge.
7. 5  Purifiers   are   generally   designed   for   use   with
impurity  levels  less  than  1%  and  should  not  be  used  to
purify  air  or  other  inappropriate  gases.    Contact  the
manufacturer   if   there   is   any   question   as   to   the
suitability for a particular gas.
7. 6  Care  should  be  taken  to  minimize  the  purifier’s
exposure to room air (even filtered air).  Room air may
chemically  react  with  some  purifiers  shortening  the
purifier  lifetime.    Follow  manufacturer’s  installation
procedures.
8  Test Protocol
8. 1  Test Conditions
8. 1.1  The    test    should    be    conducted    following
manufacturer’s  recommended  handling  procedures  to
activate   new   media   or   regenerate   existing   purifier
media.
8. 1.2  The test is to be conducted at a room temperature
maintained  between  18°C  (64°F)  and  26°C  (78°F).
Environmental   temperature   fluctuations   within   this
range are not expected to have any measurable effect on
the   instrumentation   used   to   detect   the   level   of
impurities.  Follow instrument manufacturer’s operating
procedures.
8. 2  Apparatus
8. 2.1  Materials
8. 2.1.1  Test   Gas   —   a   mixture   of   pure   gas   and
challenge  gas.    The  mixture  should  contain  gaseous
impurities of between 1 ppm and 10 ppm.
8. 2.1.2  Pressure   Regulators   —   all   wetted   internal
surfaces,   where   appropriate,   should   be   made   of
electropolished  316L  stainless  steel  with  an  internal
surface  finish  of  0.18  μm  (7  μin)  R
a
and  0.25  μm  (10
μin) R
a,max
, to control system pressures.
8. 2.1.3  Pressure Gauge — all wetted internal surfaces,
where  appropriate,  should  be  made  of  electropolished
316L  stainless  steel  with  an  internal  surface  finish  of
0. 18  μm  (7  μin)  R
a
and  0.25  μm  (10  μin)  R
a,max
,  to
monitor system pressures.
8. 2.1.4  Standard  Test  Flows  —  use  appropriate  mass
flow devices.  One MFC with appropriate range of 0–50
slpm for the pure gas is suggested.  Various MFCs with
appropriate  ranges  of  0–25  sccm,  0–100  sccm  and  0–1
slpm for the challenge gas are suggested.
8. 2.1.5  Tubing   —   made   of   electropolished   316L
stainless  steel,  with  an  internal  surface  finish  of  0.18
μm (7 μin) R
a
and 0.25 μm (10 μin) R
a,max
, to transport
gas.
8. 2.1.6  Fittings — the appropriate size face-seal fitting
is used.
8. 2.1.7  Gaskets    —    use    metal    gaskets    for    all
connections.  New gaskets should be used for each new
connection.  Use of cleanroom gloves is required when
handling gaskets and fittings.
8. 2.2  Instrumentation
8. 2.2.1  An    APIMS    or    other    ultratrace    analytical
instrumentation  is  used  to  determine  the  level  of  each
gaseous impurity exiting the DUT.
8. 2.2.2  An impurity analyzer is used to measure higher
concentrations  of  impurities  such  as  found  in  the  test
gas.
8. 2.2.3  Electronically  controlled  mass  flow  controllers
are  used  to  accurately  blend  the  impurity  challenge
level.

SEMI F68-1101 © SEMI 20014
8. 2.2.4  Data  collection  equipment  is  used  to  gather
output from the ultratrace analytical instrumentation.
8. 2.2.5  All   instruments   used   should   be   calibrated
regularly, according to manufacturer specifications.
8. 2.3  Test Setup and Schematic
8. 2.3.1  Assemble  the  test  setup  according  to  Figure  1.
For    a    large    scale    system    which    may    include
components  such  as  flow  meters,  pressure  regulation
and  indication,  and  bypass  loops  around  the  purifying
media(s), the test setup may be modified accordingly in
order  to  use  these  built  in  attributes  while  adhering  to
the  procedural  steps.    Do  not  install  the  DUT  until  a
purge flow is established through MFC1.
8. 2.3.2  Pure gas is blended with challenge gas to create
a  test  gas  mixture  containing  approximately  1–10  ppm
of gaseous impurities.
8. 2.3.3  The    DUT    is    connected,    purged    per    the
manufacturer’s  recommendation,  positioned  with  the
appropriate  attitude  (if  required  by  the  manufacturer),
and heated (if required by manufacturer) under pure gas
flow.
8. 2.3.4  Challenge   gas   flow   is   introduced   and   the
impurity  analyzer  measures  the  impurity  levels.    If
appropriate,  the  APIMS  or  other  ultratrace  analytical
instrumentation  may  be  used  to  measure  the  test  gas
while the test gas bypasses the DUT.  See Section 9 on
Exposure Precautions.
8. 2.3.5  Measure  and  record  the  test  gas  concentration
for the desired impurity.
8. 2.3.6  Instantaneous   impurity   efficiencies   may   be
calculated  at  any  point  by  knowing  the  level  of  each
impurity entering and exiting the purifier.
8. 3  Test Procedures — Refer to Figure 1.
8. 3.1  Use  of  the  impurity  analyzer  is  recommended  to
protect   the   APIMS   or   other   ultratrace   analytical
instrumentation  from  impurity  spikes  which  may  harm
the instrument.  The test may be conducted without the
impurity analyzer at the risk of such spikes.
8. 3.2  Analytical Instrumentation Setup
8. 3.2.1  Set      up      and      calibrate      the      analytical
instrumentation    (APIMS    or    ultratrace    analytical
instrumentation  and  impurity  analyzer)  according  to
manufacturer  specifications.    This  includes  but  is  not
limited  to  establishing  the  appropriate  flow  rates  to  the
instruments.
8. 3.2.2  Acquire      zero      data      to      establish      the
instrumentation  baseline  and  stability  prior  to  starting
the test.
8. 3.3  Establish  flow  of  pure  gas  through  the  manifold
bypass:
8. 3.3.1  Start with all valves closed except purge gas to
analytical instrumentation (V11 and V13 open).
8. 3.3.2  Open   V1   and   adjust   R1   to   the   suggested
operating pressure range of 275–415 kPa (40–60 psig).
8. 3.3.3  Open  V2,  V8,  V9  and  adjust  R3  to  provide
appropriate backpressure for operation of the APIMS or
other ultratrace analytical instrumentation.  R3 will vent
excess gas providing the volume challenge to the DUT.
Set MFC1 to the appropriate flow rate.
8. 3.4  Monitor drydown of the manifold bypass:
8. 3.4.1  Close V11 and Open V10.
8. 3.4.2  Purge  the  bypass  manifold  until  the  impurity
level   is   in   the   range   of   the   APIMS   or   ultratrace
analytical instrumentation.
8. 3.4.3  Close V13 and Open V12.
8. 3.4.4  Purge  the  bypass  manifold  until  the  moisture
impurity  level  at  the  APIMS  or  ultratrace  analytical
instrumentation is below 1.0 ppb.
8. 3.5  Re-isolate   the   APIMS   or   ultratrace   analytical
instrumentation:
8. 3.5.1  Close V12 and Open V13.  Close V10 and open
V11.      Maintain   a   constant   purge   to   the   analytical
instrumentation.
8. 3.6  Install the DUT, purging with Pure Gas (may not
be  necessary,  as  installed  in  the  test  set-up  for  large
scale systems):
8. 3.6.1  Open  V6.    Remove  the  DUT  (purifier)  inlet
face-seal  connection.    Quickly  install  the  DUT  inlet.
Remove the DUT outlet face-seal connection and install
the DUT outlet.  Open V7.
8. 3.6.2  Isolate  the  manifold  bypass,  directing  all  flow
through the DUT, close V8 and V9.
8. 3.6.3  Adjust  R1  and  R3  until  P1  measures  the  stated
purifier operating pressure.
8. 3.6.4  Purge      the      DUT      (purifier)      per      the
manufacturer’s  recommendation.    If  required,  heat  the
DUT (purifier) per manufacturer’s recommendation.
8. 3.7  Monitor  the  impurity  level  at  the  outlet  of  the
DUT until stable:
8. 3.7.1  Initial  impurity  monitoring  may  be  done  with
the  impurity  analyzer.    Close  V12,  Open  V9  and  V10.
Close V11.

SEMI F68-1101 © SEMI 20015
8. 3.7.2  When  the  impurity  level  is  in  the  range  of  the
APIMS  or  ultratrace  analytical  instrumentation,  Close
V13 and Open V12.  Close V9 and V10, Open V11.
8. 3.7.3  Monitor impurity level until stable.
8. 3.8  Initiate Impurity Challenge:
8. 3.8.1  Isolate   the   DUT   and   APIMS   or   ultratrace
analytical  instrumentation.    Close  V7  and  V12,  open
V13.
8. 3.8.2  Open   V3   and   adjust   R2   to   the   suggested
operating pressure range of 275–415 kPa (40–60 psig).
Open  V5  and  set  MFC2  to  the  desired  flow.    (See
Appendix 1 to determine the desired flow for MFC2).
8. 3.8.3  Verify  test  gas  impurity.    Close  V5  and  V11,
Open  V4,  V8,  and  V10  supplying  test  gas  to  the
impurity  analyzer.    Monitor  test  gas  impurity  until
stable  and  verified  to  theoretical  impurity  value  (See
Appendix 1).
8. 3.8.4  Initiate  test.    Isolate  impurity  analyzer,  Close
V8  and  V10,  Open  V11.    Input  test  gas  through  the
DUT  to  the  APIMS  or  ultratrace  impurity  analyzer,
Open V6 and V7.  Close V13 and Open V12.
8. 3.8.5  Monitor  and  record  the  outlet  impurity  level
until stable.
8. 3.8.6  If  necessary,  repeat  the  test  for  a  different
challenge gas mixture.
8. 3.9  Determination       of       instantaneous       purifier
efficiency:
8. 3.9.1  The test may be done on newly activated media
or  may  be  done  using  existing  media  that  has  been
regenerated.    The  test  may  be  destructive  to  the  DUT
(purifier).
8. 3.9.2  Repeat   the   test   as   necessary   to   provide   a
statistically  valid  number  of  test  results.    A  discussion
of what is statistically valid is beyond the scope of this
document.
9  Exposure Precautions
9. 1  The   APIMS   or   ultratrace   analytical   instrument
should  not  be  exposed  to  high  levels  of  impurities.
After  installation  of  the  purifier,  it  should  be  purged
well,   per   the   manufacturer’s   recommendation.      A
typical  recommendation  might  be  to  purge  a  minimum
of  150  bed  volumes  before  directing  the  flow  to  the
APIMS.
9. 2  Alternative   instrumentation   should   be   used   to
measure  the  challenge  gas  when  the  concentration  of
the challenge gas is greater than the normal calibration
range   of   the   APIMS   or   other   ultratrace   analytical
instrumentation.
10  Calculation of Instantaneous Purifer
Efficiency
10. 1.1.1  Use  the  following  formula  to  calculate  the
Instantaneous Purifier Efficiency:
1001%×








−=
impurityinlet
impurityoutlet
eff
Example:  Let  impurity  outlet  =  10  ppb  and  impurity
inlet = 10 ppm,
9. 99100
000,10
10
1%=×






−=eff
11  Reporting Results
11. 1  The following test conditions should be reported:
11. 1.1  Date and time of test,
11. 1.2  Operator,
11. 1.3  Pure gas flow rate (slpm),
11. 1.4  Challenge gas flow rate (sccm),
11. 1.5  Test pressure kPa (psig or psia),
11. 1.6  DUT operating temperature (°C),
11. 1.7  Purifier     manufacturer,     model,     and     serial
number, and volume,
11. 1.8  Ultratrace analytical instrumentation used,
11. 1.9  Test gas impurities and levels (Table 1), and
11. 1.10  Calibration   certificates   for   the   mass   flow
devices,   pressure   gauges   and   ultratrace   analytical
instrumentation.
12  Related Documents
SEMI  F30  —  Start-up  and  Verification  of  Purifier
Performance   Testing   for   Trace   Gas   Impurities   and
Particles at an Installation Site.
SEMI   F43   —   Test   Method   for   Determination   of
Particle Contribution by Point-Of-Use Purifiers.
NOTE 2: Unless   otherwise   indicated,   all   documents   cited
shall be the latest published versions.

SEMI F68-1101 © SEMI 20016
Purge Gas
DUT
Pure Gas
(>9N Purity)
APIMS
or
Ultratrace
Analytical
Instrumentation
Impurity Analyzer
P1
Legend
DUT = Device Under Test
P1 = Test Pressure
R1 = Pure Gas 0–100 psig Regulator
R2 = Challenge Gas 0–100 psig Regulator
R3 = Vent Gas 0–100 psig Back Pressure Regulato
r
V1 = Pure Gas Source Isolation Valve
V2 = Pure Gas System Isolation Valve
V3 = Challenge Gas Source Isolation Valve
V4 = Challenge Gas System Isolation Valve
V5 = Challenge Gas Vent Isolation Valve
Challenge Gas
(~1% Impurity)
V4
V5
V6V7
V8
V9
Vent
V10
V11
MFC1
R1
V1
V2
R3
V6 = DUT Inlet Isolation Valve
V7 = DUT Outlet Isolation Valve
V8 = DUT Bypass Inlet Isolation Valve
V9 = DUT Bypass Outlet Isolation Valve
V10 = Impurity Analyzer Sample Isolation Valve
V11 = Impurity Analyzer Purge Gas Isolation Valve
V12 = APIMS/UAI Sample Isolation Valve
V13 = APIMS/UAI Purge Gas Isolation Valve
MFC1 = Pure Gas Mass Flow Controller
MFC2 = Challenge Gas Mass Flow Controller
V13
V12
MFC2
R2
V3
Figure 1
Suggested Point of Use Purifier Efficiency Test Setup
Table 1  Efficiency Of DUT Parameters
EFFICIENCY OF DUT
ImpurityPure Gas FlowChallenge FlowInlet ConcOutlet ConcZero GasAnalyzer
(slpm)(sccm)(ppm)(ppb)(ppb)
CH
4
H
2
O
2
N
2
CO
2
NMHC

SEMI F68-1101 © SEMI 20017
APPENDIX 1
MFC SIZING
NOTE:    The  material  in  this  appendix  is  an  official  part  of  SEMI  F68  and  was  approved  by  full  letter  ballot
procedures on August 27, 2001.
A1-1          To     determine     purifier     efficiency,     the
concentration  of  impurity  entering  the  purifier  and  the
quantity of impurity downstream of the purifier must be
determined.
A1-2      Determine   the   manufacturer’s   recommended
flow  rate  for  the  purifier.    As  an  example,  assume  a
flow rate of 5 slpm.
A1-3    Determine  the  flow  rate  challenge  gas  required.
As an example, 5 sccm of a 1% challenge gas would be
blended into 4,995 sccm of pure gas to create at 10 ppm
test gas.
PPM 10
sccm 4,995sccm 5
sccm 5PPM 10,000
Gas Test=
+
×
=
As  a  large  scale  system,  with  a  flow  of  1,000  slpm,  a
flow  of  1  slpm  of  challenge  gas  (1%  impurity)  is
required to create a 10 ppm challenge.
PPM 10
slpm 999slpm 1
slpm 1PPM 10,000
Gas Test=
+
×
=
NOTICE:      SEMI      makes      no      warranties      or
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


SEMI F69-0302 © SEMI 2002 1
SEMI F69-0302
TEST METHODS FOR TRANSPORT AND SHOCK TESTING OF GAS
DELIVERY SYSTEMS
This test method was technically approved by the Global Facilities Committee and is the direct responsibility
of  the  North  American  Facilities  Committee.  Current  edition  approved  by  the  North  American  Regional
Standards  Committee  on  November  27,  2001.  Initially  available  at  www.semi.org  December 2001;  to  be
published March 2002.
1  Purpose
1. 1  This document provides test methods for qualifying
the   mechanical   integrity   of   gas   delivery   systems
through vibration and shock testing.
2  Scope
2. 1    The  test  methods  recommended  herein  provide  for
vibration (transport simulation) and shock testing of gas
delivery systems for semiconductor processing.
2. 2  The test methods recommended herein apply to gas
delivery  systems  not  crated  or  packaged  for  shipment.
Specifically,  the  test  methods  are  to  be  applied  to  the
assembled  and  interconnected  gas  delivery  components
and  their  associated  mounting  panel  (back  plane),  with
or without a sheet metal enclosure.
2. 3    For  the  purpose  of  this  guideline,  transportation
vibration,   and   its   simulation,   are   expectedly   more
severe   than   in-use   vibrational   levels.      Thus   the
transportation  simulation  test  is  considered  acceptable
to   assess   mechanical   integrity   adequate   for   both
shipment  and  life-cycle  vibrational  stress  of  the  gas
delivery systems.
2. 4    The  intent  of  the  shock  test  is  to  provide  further
assessment  of  equipment  malfunction  that  may  result
from shocks experienced during unpacking, installation,
or use in the field.
2. 5    Successful  completion  of  the  tests  recommended
herein is a recommended metric of mechanical integrity
for   gas   delivery   systems   architecture,   design,   and
assembly techniques.
2. 6    This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.   It   is   the
responsibility  of  the  user  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1      This   document,   as   a   guide,   does   not   provide
detailed  information  sufficient  for  conducting  the  tests.
It  is  the  responsibility  of  the  user  and  testing  entity  to
procure  a  copy  of  the  referenced  test  procedures  from
the issuing organization(s).
3. 2  The test methods recommended herein are intended
to  evaluate  gas  delivery  systems  architectures,  design
principles,  and  assembly  methodologies,  not  individual
production gas delivery systems.
3. 3        The    functional    components    of    gas    delivery
systems,   for   example   mass   flow   controllers   and
pressure  transducers,  may  be  adversely  affected  by  the
forces  seen  during  these  tests.    Such  components  may
require recalibration after testing.
4  Referenced Standards
NOTE  1:    As  listed  or  revised,  all  documents  cited  shall  be
the latest publications of adopted standards.
4. 1  SEMI Standards
SEMI  F1      Specification  for  Leak  Integrity  of  High-
Purity Gas Piping Systems and Components
4. 2  Military Standards
1

MIL-STD-810        Environmental       Engineering
Considerations and Laboratory Tests
5  Terminology
5. 1  bag leak test  A helium leak testing procedure in
which  the  system  undergoing  leak  test  is  placed  in  a
helium-filled    plastic    bag    while    connected    to    a
functional helium leak detector.
5. 2  g  A unit of force equal to that exerted by gravity
upon  a  mass  in  equilibrium  on  the  earth’s  surface.
Expressed in Newtons (kg-m/sec.
2
).
5. 3  leak  tight   Having  a  helium  leak  rate  no  greater
than that specified by the customer or end-user.
6  Vibration Testing
NOTE 2:  Vibration testing should be performed in its entirety
before continuing to the shock testing.
6. 1  In general, conduct vibrational testing according to
MIL-STD-810,   Part   Two,   Laboratory   Test   Method
514. 5, Procedure 1, Category 4, for 3 hours in each axis
(a  total  of  9  hours).    This  will  subject  the  gas  delivery


1 DODSSP, Building 4 / Section D, 700 Robbins Avenue,
Philadelphia, PA  19111-5094


SEMI F69-0302 © SEMI 2002 2
systems  to  the  equivalent  physical  stress  of  a  4828
kilometer   (3000   mile)   motor   freight   shipment   over
improved or paved highways.  Because vibration tables
are  commonly  single-axis  devices,  the  gas  delivery
systems   will   be   subjected   to   single-axis   random
vibrational  frequencies  in  the  range  of  5—500  Hz,
sequentially, in each of its three axes.
6. 2  Prior to initiating the test, examine the gas delivery
systems for physical defects and document the results.
6. 3    Prior  to  initiating  the  test,  thoroughly  prepare  the
gas  delivery  systems  for  testing.    This  includes,  but  is
not   limited   to,   insuring   all   fasteners   and   sealing
mechanisms  are  tightened  to  manufacturers’  or  design
specifications.
6. 4                  The         MIL-STD-810         transportation         test
recommended herein provides for different acceleration
levels  for  each  of  the  3  axes  of  the  device  under  test.
Because   the   majority   of   gas   delivery   systems   are
shipped  in  a  vertical  orientation,  this  convention  is
maintained   for   the   purpose   of   the   transportation
simulation  tests.    Thus  the  vertical  orientation  would
have  the  gas  delivery  system  mounted  vertically  with
respect  to  the  vibration  table  top  (see  Figure  2),  the
longitudinal  orientation  would  have  the  gas  delivery
system  mounted  flat  to  the  vibration  table  top  (see
Figure 1), and the transverse orientation would have the
gas  delivery  system  mounted  on  its  side,  against  the
vibration  table  top  (see  Figure  3).    Note  that  the  terms
“vertical,”     “longitudinal,”     and     “transverse,”     are
contextual   to   motor   freight   transport,   and   receive
different  acceleration  levels,  within  MIL-STD-810.    A
simplified and conservative approach to applying MIL-
STD-810  involves  applying  the  highest  acceleration
level,  associated  with  the  vertical  axis,  to  all  three
orientations as illustrated in Figures 1–3.
6. 5      Mount   the   gas   delivery   system,   in   any   of   its
untested  axes,  securely  to  the  vibration  table.    See
Figures 1–3.
6. 6    Prior  to  initiating  the  test  at  the  test  site,  make
certain  that  the  gas  delivery  system  is  leak  tight  using
inboard  test  procedures  per  SEMI  F1.    A  bag  leak  test
method is recommended in conjunction with this test.
6. 7      Initiate   and   run   for   3   hours   the   vibration   test
corresponding  to  the  orientation  of  the  gas  delivery
system.
6. 8  At the conclusion of the test, examine the gas panel
for physical defects and document the results
6. 9    At  the  conclusion  of  the  test,  leak  test  the  gas
delivery   system   using   inboard   leak   procedures   per
SEMI  F1.  A  bag  leak  test  method  is  recommended  in
conjunction  with  this  test.    Alternatively,  by  agreement
with the customer, all leak testing may be withheld until
completion  of  all  shock  and  vibration  testing.  This
presumes   specific   failure   mode   information   is   not
required.
6. 10    Repeat  Sections  6.5  through  6.9  until  all  3  axes
are tested.
6. 11    The  post-test  report  should  include,  at  minimum,
the following:
(1)   Pre-test examination results.
(2)   Pre-test leak rates.
(3)   Summary   and   chronology   of   test   events,   test
interruptions, and test failures.
(4)   All vibration measurement data.
(5)   Post-test examination results.
(6)   Post-test leak rates.



SEMI F69-0302 © SEMI 2002 3

NOTE 1:  Plane of gas sticks is parallel to shock/vibe table and transverse to test input.

Figure 1
Horizontal Orientation



NOTE 1: Plane and axes of gas sticks are normal to shock/vibe table and parrallel to test input.

Figure 2
Vertical Orientation


SEMI F69-0302 © SEMI 2002 4

NOTE 1: Plane of gas sticks is normal to shock/vibe table and axes of sticks are transverse to test input.

Figure 3
Lateral Orientation

7  Shock Testing
7. 1      In   general,   conduct   shock   testing   according   to
MIL-STD-810,   Part   Two,   Laboratory   Test   Method
516. 5,  Procedure  1  (Functional  Shock).    This  test  will
subject the gas delivery system to a peak acceleration of
40 g’s employing a terminal peak sawtooth shock pulse.
7. 2    The  test  should  be  conducted  in  each  of  the  gas
delivery system’s three axes as illustrated in Figures 1–

# 3

3.
7. 3  Prior to initiating the test, examine the gas delivery
system for physical defects and document the results.
7. 4    Prior  to  initiating  the  test,  thoroughly  prepare  the
gas  delivery  system  for  testing.    This  includes,  but  is
not   limited   to,   insuring   all   fasteners   and   sealing
mechanisms  are  tightened  to  manufacturers’  or  design
specifications.
7. 5  Prior to initiating the test, make certain that the gas
delivery   system   is   leak   tight   using   inboard   test
procedures  per  SEMI  F1.    A  bag  leak  test  method  is
recommended in conjunction with this test.
7. 6    Secure  the  gas  delivery  system  under  test  to  the
shock  table  in  one  of  its  three  orientations:  horizontal,
vertical,  or  lateral.    The  gas  delivery  system  should  be
fastened  directly  to  the  table  with  no  cushion  or  other
intermediary  between  the  two.    A  rigid  mounting  is
desirable,  taking  caution  not  to  introduce  stress  to  the
gas delivery system.
7. 7  Conduct the shock test.
7. 8  At the conclusion of the test, examine the gas panel
for physical defects and document the results.
7. 9    If,  as  a  result  of  the  test,  an  apparent  physical
failure  occurred  that  would  likely  prevent  the  safe
operation   of   the   gas   panel   and/or   would   likely
compromise  the  leak  tightness  of  the  gas  panel,  the
physical  failure  should  be  corrected,  the  gas  panel
retested for leak tightness, and the test repeated.
7. 10    At  the  conclusion  of  the  test,  leak  test  the  gas
delivery   system   using   inboard   leak   procedures   per
SEMI  F1.  A  bag  leak  test  method  is  recommended  in
conjunction  with  this  test.  Alternatively,  by  agreement
with the customer, all leak testing may be withheld until
completion  of  all  shock  and  vibration  testing.  This
presumes   specific   failure   mode   information   is   not
required.
7. 11  Repeat 7.6 through 7.10 for a second orientation.
7. 12    Repeat  7.6  through  7.10  for  the  third  and  final
orientation.



SEMI F69-0302 © SEMI 2002 5
7. 13    The  post-test  report  should  include,  at  minimum,
the following:
1)    Pre-test examination results.
2)    Pre-test leak rate.
3)    Summary   and   chronology   of   test   events,   test
interruptions, and test failures.
4)     All  shock  measurement  data,  including  that  of  any
accelerometers mounted to the gas delivery system.
5)    Post-test examination results for all three axes.
6)    Post-test leak rate for all three shock tests.
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


Copyright  by  SEMI®    (Semiconductor  Equipment  and  Materials
International), 3081  Zanker  Road,  San  Jose,  CA  95134  Reproduction  o
f
the  contents  in  whole  or  in  part  is  forbidden,  without  express  written
content of SEMI.


SEMI F70-0302 © SEMI 2002
1
SEMI F70-0302
TEST METHOD FOR DETERMINATION OF PARTICLE CONTRIBUTION
OF GAS DELIVERY SYSTEM
This test method was technically approved by the Global Facilities Committee and is the direct responsibility
of  the  Japanese  Facilities  Committee.    Current  edition  approved  by  the  Japanese  Regional  Standards
Committee  on  January  11,  2002.    Initially  available  at  www.semi.org  January  2002; to be published March

# 2002

2002.
1  Purpose
1. 1    The  purpose  of  this  document  is  to  provide  a
standardized methodology and procedure for measuring
the  particle  contribution  performance  of  a  gas  delivery
system  in  terms  of  number  of  particles  added  to  gas
flowing    through    the    system.        This    standardized
procedure  is  intended  to  be  used  commonly  by  the
component     suppliers,     gas     suppliers,     equipment
suppliers, and users.
2  Scope
2. 1    This  test  method  applies  to  all  types  of  surface
mount  and  conventional  gas  delivery  systems  used  in
semiconductor  manufacturing  facilities  and  comparable
research and development areas.
2. 2    This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.   It   is   the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1    All  components  must  meet  quality  requirements  as
established  and  controlled  by  manufacturers  prior  to
testing (e.g., dimensional, functional, etc.).
3. 2        Care    should    be    exercised    in    handling    of
components to maintain manufacturer’s specifications.
4  Referenced Standards
NOTE  1:      As  listed  or  revised,  all  documents  cited  shall  be
the latest publications of adopted standards.
4. 1  ISO Standards
1

ISO 14644-1 — Cleanrooms and Associated Controlled
Environments – Part 1: Classification of air cleanliness


1 ISO Central Secretariat, 1, rue de Varembé, Case postale 56, CH-
1211 Genève 20, Switzerland, website: www.iso.ch
4. 2  JIS Standards
2

JIS  B  9921  —  Light  Scattering  Automatic  Particle
Counter
5  Terminology
5. 1  Abbreviations and Acronyms
5. 1.1  CNC — condensation nucleus counter
5. 1.2  LPC — laser particle counter
5. 1.3  MFC — mass flow controller
5. 1.4  MFM — mass flow meter
5. 1.5  slm   —   standard   liters   per   minute,   the   gas
volumetric  flow  rate  measured  in  liters  per  minute  at
0°C and 1 atm.
5. 2  Definitions
5. 2.1  background counts — particle counts contributed
by  the  test  apparatus  (including  false  counts)  with  the
spool piece in the place of the test object as function of
particle size.
5. 2.2  counting  efficiency  —  the  ratio  of  the  particle
concentration  calculated  from  the  particle  counts  to  the
actual  particle  concentration  in  the  sampled  gas  for
particles equal to or larger than a given particle size.
5. 2.3  design flow rate — flow rate normally applied to
the gas delivery system.
5. 2.4  false  counts  —  particle  counts  contributed  by
electrical  noise  or  by  other  events  and  not  particles  in
the sampled gas.
5. 2.5  gas   delivery   system   —   a   system   installed   in
semiconductor   manufacturing   equipment   to   supply
process  and  carrier  gases  to  reactors,  which  typically
consists  of  tubing,  fittings,  valves,  filters,  mass  flow
controllers  and  regulators;  can  be  surface  mount  or
conventional system.
5. 2.6  minimum    counting    particle    diameter    —    a
predefined   minimum   diameter   of   particles   to   be
counted in this test method.


2 Japanese Standards Association, 1-24, Akasaka, 4-Chome, Minato-
ku, Tokyo 107 Japan


SEMI F70-0302 © SEMI 2002
2
5. 2.7  particle counts — a counted value from a laser particle counter (LPC) or condensation nucleus counter (CNC)
shown for particles or larger than or equal to the minimum counting particle diameter.
5. 2.8  sample flow rate — the volumetric flow rate through the particle counter.
5. 2.9  spool  piece  —  a  null  component  consisting  of  a  straight  piece  of  electropolished  tubing  or  like  object  and
appropriate fittings used in place of the test system to establish the background.
5. 2.10  test flow rate — the volumetric flow rate through the test systemRequired Apparatus
6  Required Apparatus
6. 1  Filter — Filters with the following performance specified by the manufacturer.
Characteristic                                                Performance                                                 Condition
Filtration Efficiency
9 log particle size: 0.02 μm
Flow Rate
300 slm inlet pressure: 0.34 MPa

6. 2  Tubing Material — 1/4 inch or 3/8 inch SUS 316L electropolished tubing or better.
6. 3  Particle  Counter  —  The  particle  counter  may  be  either  LPC  or  CNC  of  which  the  minimum  counting  particle
diameter is 0.1 μm or smaller, and has the following performance as specified by JIS B 9921.
6. 3.1  Counting Efficiency
Diameter of Polystyrene Latex Standard Particle Counting Efficiency
Minimum countable particle diameter of the counter (See NOTE 1.)
50 ± 20 %
1. 5 to 2.0 × Minimum countable particle diameter of the counter
100 ± 10 %
NOTE 1:  For a CNC, the minimum countable diameter shall be defined as a diameter having counting efficiency of 50 ± 20%.

6. 3.2  False Count — Equal to or less than 1 in 5 minutes.
6. 3.3  Acceptable Error of Flow Rate — ± 5%
6. 4  Sampler — A system used to perform partial sampling of the gas stream exiting the test system, that consists of
a diffuser equipped with a pressure reducing device in which gradual expansion to atmospheric pressure occurs and
a sample probe.  It is desirable that the sampler is designed to obtain isokinetic sampling.  The average velocity of
gas  flowing  through  the  sample  probe  should  approximate  the  average  velocity  in  the  external  tubing  in  which  the
sample probe is inserted.  The sample probe overlap with the external tube must be of appropriate length, and it must
be confirmed before use that the surrounding atmospheric gas is not drawn in the sample.
7  Test Condition
7. 1  Test Gas — Liquid Nitrogen (LN
2
) or cleaner Nitrogen (N
2
) or Argon (Ar).
7. 2  Temperature — Room temperature (between 18 and 26°C)
7. 3  Environment — ISO/FDIS 14644-1 class 5 or better.


SEMI F70-0302 © SEMI 2002
3
8  Preparation of Apparatus
8. 1  Set up apparatus and the gas supply system as shown in Figure 1.
NV
RGF
N2
By-pass
MFM
System
Under
Test
Particle
Counter
Sampler
F
F
MFC
VENT
V
Legend, V: ValveMFC: Mass Flow ControllerMFM: Mass Flow Meter
F: FilterRG: RegulatorNV: Needle Valve

Figure 1
Test Set Up Basic Flow Diagram

8. 2  If the test flow rate is equal to or less than the sample flow rate required by the particle counter, insert a filter in
place of the sampler to fulfill the sample flow rate. (See Figure 2.)
Test
Flow
Particle
Counter
Filter
Test Flow Rate
≤
Sample Flow Rate

Figure 2
Full Sampling

8. 3    If  the  test  flow  rate  is  higher  than  the  sample  flow  rate  required  by  the  particle  counter,  use  the  sampler  for
partial  sampling.    (See  Figure  3.)  To  establish  the  test  flow  rate and obtain an isokinetic condition, it is required to
adjust the MFC in the test set up and the NV on the by-pass line. The by-pass line is required to have a capability to
handle the maximum test flow when the valves in the system under test is closed position during the pulse test.
Sampler
Particle
Counter
Test
Flow
Vent
FNV
By-pass
Test Flow Rate
>
Sample Flow Rate

Figure 3
Partial Sampling


SEMI F70-0302 © SEMI 2002
4
9  Procedure
9. 1    A  typical  gas  delivery  system  configuration  is  shown  in  Figure  4.  The  following  test  procedure  shall  be
interpreted to apply to the actual test system and recorded by the operator.

V2V4V6
V1V3V5
F1
F2F3
MFC1MFC2MFC3
LINE1LINE2LINE3
LEGEND
V1 - 6    Valves
F1 - 3     Filters
MFC1 -3 Mass Flow
Controllers
System Under Test

Figure 4
Typical Gas Delivery System Configuration

9. 2  Determination of Background Counts
9. 2.1  For test set up, insert a spool piece in place of the
system  under  test  (i.e.  the  gas  delivery  system)  as  in
Figure 1.
9. 2.2    Establish  the  test  flow  rate  as  1.5  times  of  the
design flow rate and supply N
2
(or Ar). In this case the
design  flow  rate  is  determined  as  the  flow  rate  of  the
line  which  has  maximum  flow  rate  in  the  system  under
test. Purge the test set up for more than 10 minutes.
9. 2.3    Confirm  the  particle  count  is  not  more  than  1
during 10 minutes after the purge. If the total volume of
the test flow is less than 28.3 liters, extend the sampling
time  until  it  achieves  more  than  28.3  liters.  If  the
particle count is more than 1, repeat Sections 9.2.2 and
9. 2.3.
9. 2.4  Replace the spool piece with the test system.
9. 3  Static Flow Test
9. 3.1  Close all valves in the line 2 and 3, set the MFCs
as  full  scale  or  purge  mode  if  available  and  fully  open
the valves in the line 1.
9. 3.2  Supply  N
2
(or  Ar)  to  the  line  1  with  1.5  times  of
the design flow rate of the line 1 and purge the test set
up  for  more  than  10  minutes.  In  many  case,  this  will
require  the  activation  of  the  valve  override  on  any
MFCs  on  the  test  line.  It  is  also  required  to  verify  that
all  components  in  the  system  can  withstand  1.5  times
the design flow rate.
9. 3.3    Count  particles  for  more  than  10  minutes.  If  the
total  volume  of  the  test  flow  is  less  than  28.3  liters,
extend  the  sampling  time  until  it  achieves  more  than
28. 3 liters.
9. 3.4  Repeat Sections 9.3.2 and 9.3.3 per all lines.
9. 4  Pulse Flow Test
9. 4.1  Close all valves in the line 2 and 3, set the MFCs
as  full  scale  or  purge  mode  if  available  and  fully  open
the valves in the line 1.
9. 4.2  Supply  N
2
(or  Ar)  to  the  line  1  with  1.5  times  of
the design flow rate of the line 1 and purge the test set
up for more than 10 minutes.
9. 4.3  Actuate V1 at the rate of 30 cycles/minute for 10
minutes  if  V1  is  pneumatically  operated  valve.  For
manually   operated   valve,   actuate   the   valve   at   4
cycles/minute for 10 minutes. Each cycle consists of on
and  off  actuation  of  the  valve.  The  on  and  off  cycles
should  be  of  equal  duration.  If  the  total  volume  of  the
test  flow  is  less  than  28.3  liters,  extend  the  sampling
time  until  it  achieves  more  than  28.3  liters.  Count
particles during the period.
9. 4.4  Repeat Section 9.4.3 for V2.


SEMI F70-0302 © SEMI 2002
5
9. 4.5  Repeat Sections 9.4.1 to 9.4.4 per all lines.
NOTE 2:  For the pulse test, the total volume of the test flow
shall  be  half  of  the  test  flow  rate  multiplied  by  the  sampling
time.
10  Calculation and Report
10. 1  The following test conditions are to be included in
the test report:
• counter type (LPC or CNC)
•  manufacturer of counter
• counter model (manufacturer’s model # or part #)
• sample flow
• particle diameter
• sampler diameter
• sample probe diameter
• test gas
• background count
• valve operation interval (for the pulse flow test)
• flow diagram of the system under test
10. 2  Calculation of Data  —  The  test  result  is  reported
in number of particles in liters denoted by floating point
representation  with  two  significant  digits  (ex.  2.3  ×  10
-
2
/L).    The  method  of  calculation  is  shown  in  Section
10. 2.1.
10. 2.1    The  following  formula  is  used  to  calculate  the
particles in a liter:


PARTICLES
N
V
=


where     N: Total particle counts in 10 minutes or in the
extended  period  if  the  total  volume  of  the  test  flow  is
less than 28.3 liters.
V:  Total  sampling  volume  in  liter  in  10  minutes  (mass
flow  meter  read  value)  or  in  the  extended  period  if  the
total volume of the test flow is less than 28.3 liters.
If the sample flow rate is equal to or more than the test
flow rate, V is equal to the total volume of the test flow
in liter in the sampling time.
If the sample flow rate is less than the test flow rate, V
is equal to the total volume of the sample flow in liter in
the sampling time.
10. 3  Report   Format   —   Sample   report   formats   are
given in Appendixes 1 and 2.



SEMI F70-0302 © SEMI 2002
6
APPENDIX 1
SAMPLE REPORT FORMAT FOR STATIC FLOW PARTICLE TEST
NOTE:  This  appendix  is  being  balloted  as  an  official  part  of  SEMI  F70  by  full  letter  ballot  procedures,  but  the
recommendation in this appendix are optional and are not required to conform to this standard.

STATIC FLOW PARTICLE TEST REPORT

Line                Design                Flow
(l/min)
Test Flow (l/min)Sampling MethodTotal sampling
volume (l)
Total particle
count
Particle Count
(particle/l)
P-N
2
200                        300                       Partial                       Sampling283                          3
1. 1 × 10
-2

O
2
10                          15                          Full                          Sampling                          150                          2
1. 3 × 10
-2


Flow Diagram of System Under Test Test Condition





Counter Type:
Manufacturer of the Counter
Counter Model
Sample Flow:
Particle Diameter:
Sampler Diameter:
Sample Probe Diameter:
Test Gas
Background Count:

LPC
A
B
28. 3 l/min
≥ 0.1 μm
30. 0 mm
7. 53 mm
LN
2

0


SEMI F70-0302 © SEMI 2002
7
APPENDIX 2
SAMPLE REPORT FORMAT FOR PULSE FLOW PARTICLE TEST
NOTE:  This  appendix  is  being  balloted  as  an  official  part  of  SEMI  F70  by  full  letter  ballot  procedures,  but  the
recommendation in this appendix are optional and are not required to conform to this standard.

PULSE FLOW PARTICLE TEST REPORT

Line Design Flow
(l/min)
Test Flow
(l/min)
Sampling
Method
Total Sampling
Volume (l)
Total Particle
Count
Drive Valve #   Particle Count
(particle/l)
4
V1
1. 4 × 10
-2

3
V2
1. 1 × 10
-2

3
V3
1. 1 × 10
-2

P-N
2
200                    300
Partial
Sampling
141. 5
4
V4
1. 4 × 10
-2

1
V5
3. 5 × 10
-2

1                       V6
3. 5 × 10
-2

0                       V7                       0
O
2
0. 5                     0.75                     Full                     Sampling
28. 5
(See NOTE 1.)
1                       V8
3. 5 × 10
-2


Flow Diagram of System Under Test Test Condition




Counter Type:
Manufacturer of counter
Counter Model
Sample Flow:
Particle Diameter:
Sampler Diameter:
Sample Probe Diameter:
Test gas:
Background Count
Valve Operation Interval:

LPC
A
B
28. 3 l/min
≥ 0.1 μm
30. 0 mm
7. 53 mm
LN
2
0
30 cycle/
minute

NOTE 1. The test period for O2 line was extended to 76 minutes in order that the total volume of the test flow achieves more than 28.3 liters.


SEMI F70-0302 © SEMI 2002
8
NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer’s  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature respecting any materials mentioned herein. These standards are subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that  compliance  with  this  standard  may  require  use  of  copyrighted
material  or  of  an  invention  covered  by  patent  rights.  By  publication  of  this  standard,  SEMI  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  item  mentioned  in  this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights, are entirely their own responsibility.

Copyright  by  SEMI®    (Semiconductor  Equipment  and  Materials
International), 3081  Zanker  Road,  San  Jose,  CA  95134  Reproduction  o
f
the  contents  in  whole  or  in  part  is  forbidden,  without  express  writte
n
content of SEMI.


SEMI F71-1102 © SEMI 2002 1
SEMI F71-1102
TEST METHOD FOR TEMPERATURE CYCLE OF GAS DELIVERY
SYSTEM
This guideline was technically approved by the Global Facilities Committee and is the direct responsibility of
the  Japan  Facilities  Committee.  Current  edition  approved  by  the  Japan  Regional  Standards  Committee  on
July 19, 2002.  Initially available at www.semi.org September 2002; to be published November 2002.
1  Purpose
1. 1    The  purpose  of  this  document  is  to  provide  a
standardized   methodology   and   procedure   for   the
leakage     performance     of     gas     delivery     systems
temperature cycling.
2  Scope
2. 1    This  test  method  applies  to  gas  delivery  systems
installed in semiconductor manufacturing equipment.
2. 2    This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.      It   is   the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  health  practices  and  determine  the
applicability or regulatory limitations prior to use.
3  Referenced Standards
NOTE 1: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
3. 1  SEMI Standards
SEMI  F1  —  Specification  for  Leak  Integrity  of  High-
Purity Gas Piping System and Components
4  Terminology
4. 1  Definitions
4. 1.1  gas  delivery  system  —  A  system  installed  in
semiconductor   manufacturing   equipment   to   deliver
process  and  carrier  gases  to  reactors,  which  typically
consists  of  tubing,  fittings,  valves,  filters,  mass  flow
controllers and regulators.
4. 1.2  Helium  leak  test  —  Testing  shall  be  conducted
per procedure outlined of inboard leak test in SEMI F1.
4. 1.3  T-max  —  The  maximum  set  temperature  of  the
temperature cycle test.
4. 1.4  T-min  —  The  minimum  set  temperature  of  the
temperature cycle test.
5  Apparatus
5. 1  helium   leak   detector      —   The   detector   has
appropriate detection sensitivity according to SEMI F1.
5. 2  constant    temperature    oven    —    The    constant
temperature    oven    should    have    the    capacity    to
accommodate  the  test  configuration  and  maintain  the
elevated T-max temperature to ± 5°C.
5. 3  freezer  —  The  freezer  should  have  the  capacity  to
accommodate the test configuration and maintain the T-
min temperature to ± 5°C.
5. 4  thermocouple  —  The  thermocouple  should  make
contact  with  the  sample  and  should  take  measures  of  a
noise.
6  Test Specimen and Condition
6. 1    The  temperature  cycling  test  should  be  performed
using  a  typical  gas  delivery  system  configuration.    An
example is shown in Figure 1.
6. 1.1    The  influence  of  heat  expansion  is  not  easily
measured  with  a  single  component.    Therefore,  use  a
gas  panel  having  a  minimum  of  three  lines  as  an
assembled sample.  An example is shown in Figure 1.
6. 2        A    set    temperature    (T-max,    T-min)    at    the
temperature cycle must be within the range of the rated
temperature of components used in the gas panel.
6. 3  The sealing surface used in the gas delivery system
shall not have any scratches or other defects which are
visible to non-magnified normal vision.
6. 4      Install   the   thermocouple   in   approximately   the
center of the gas panel to be tested.
6. 5  The user can arbitrarily decide heating and  cooling
temperatures     in     temperature     cycle     examination
according to the purpose of use.
6. 6    The  helium  leak  test  shall  be  performed  only  at
room  temperature  (22  ±  4°C),  not  during  heating  or
cooling.
7  Procedure
7. 1      A   typical   gas   delivery   system   configuration   is
shown  in  Figure  1.    The  following  test  procedure  shall
be  interpreted  to  apply  to  the  actual  test  target  and
deviations from the procedure in this document shall be
recorded  along  with  the  test  results.    (The  condition  of
heated  T-max  and  cooling  T-min  was  taken  up  here  as
an example.)


SEMI F71-1102 © SEMI 2002 2
7. 2    Perform  the  helium  leak  test  and  confirm  whether
there   is   leakage   in   the   gas   panel   before   starting
temperature  cycle  examination.    Connect  all  flow  path
in  the  gas  panel  to  helium  leak  detector  and  plug  all
open    end  connections  before    the  helium  leak  test  is
executed. Abort testing if leakage is detected and record
leaking points and leak rate.
7. 3    Put  the  test  sample  in  the  constant  temperature
oven  and  apply  heat  until  the  test  sample  reaches  T-
max.  Maintain the temperature for 10 ± 1 minutes.
7. 4    Remove  the  sample  from  the  constant  temperature
oven  and  cool  down  to  the  room  temperature  and
perform helium leak test.
7. 5  Put the test sample in the freezer and cool until the
test  sample  reaches  T-min.    Maintain  the  temperature
for 10 ± 1 minutes.
7. 6        Remove    the    sample    from    the    freezer    and
equilibrate to the room temperature and perform helium
leak test .
7. 7    Repeat  Section  7.2  through  7.6  for  5  cycles.    The
temperature  cycles  should  be  recorded  and  plotted  as
shown in Figure 2.

MFCPT
MFCPT
MFCPT

Figure 1
Typical Gas Delivery System Configuration


R.T. (22 ± 4)
T-max
T-min
10 M
10 M
1 cycle 3 cycle5 cycle 2 cycle4 cycle


Figure 2
Temperature Cycle Chart



SEMI F71-1102 © SEMI 2002 3
8  Reporting Results
8. 1  The report shall include the following:
• Date and time of test,
• Operator,
• Leak point and leak rate,
• Helium leak detector maker and model number,
• Flow  diagram  of  the  test  gas  panel  and  layout
drawing,
• Schematic of the test system,
• Temperature  conditions  of  the  temperature  cycle
test, and
• Any  deviations  from  the  test  procedure  in  section

# 7

7.
A sample report format is given in Appendix 1.



SEMI F71-1102 © SEMI 2002 4
APPENDIX 1
SAMPLE REPORT FORM
NOTE:    The  material  in  this  appendix  is  an  official  part  of  SEMI  [insert  designation,  without  publication  date
(month-year) code] and was approved by full letter ballot procedures on July 19, 2002
A1-1 Sample Report Form

Test date:

Test operator:

Helium leak detector maker and model number:

Table A1-1 TEMPERATURE CYCLE TEST REPORT
Number of Heat Cycle
Leak Point and Leak Rate
(Pa × m
3
/sec)
Background
(Pa × m
3
/sec)
Initial N.D. 3.6 × 10
-11

after heating (T-max) N.D. 3.1 × 10
-11

1
after cooling (T-min) N.D. 4.1 × 10
-11

after heating (T-max) N.D. 2.6 × 10
-11

2
after cooling (T-min) N.D 3.3 × 10
-11

after heating (T-max) N.D. 4.3 × 10
-11

3
after cooling (T-min) N.D. 3.0 × 10
-11

after heating (T-max) N.D. 2.1 × 10
-11

4
after cooling (T-min) N.D. 1.6 × 10
-11

after heating (T-max) N.D. 2.5 × 10
-11

5
after cooling (T-min) N.D. 3.0 × 10
-11


NOTICE:  SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
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


SEMI F72-1102 © SEMI 2002 1
SEMI F72-1102
TEST METHOD FOR AUGER ELECTRON SPECTROSCOPY (AES)
EVALUATION OF OXIDE LAYER OF WETTED SURFACES OF
PASSIVATED 316L STAINLESS STEEL COMPONENTS
This test method was technically approved by the Global Gases Committee and is the direct responsibility of
the North American Gases Committee. Current edition approved by the North American Regional Standards
Committee on July 21, 2002.  Initially available at www.semi.org October 2002; to be published November
2002.
1  Purpose
1. 1    The  purpose  of  this  document  is  to  define  a  test
method   to   characterize   the   surface   composition   of
passivated   316L   stainless   steel   components   being
considered   for   installation   into   a   high-purity   gas
distribution system.  This test method is intended to be
applied  to  the  wetted  surfaces  of  stainless  steel  tubing,
fittings,  valves,  and  other  components  as  a  measure  of
the effectiveness of passivation.
1. 2      The   objective   of   this   method   is   to   describe   a
general set of instrument parameters and conditions that
will   achieve   reproducible   measurements   within   the
chromium-enriched passive oxide layer.
2  Scope
2. 1        This    document    describes    a    test    method    to
characterize   the   composition   and   thickness   of   the
chromium-enriched   oxide   layer   of   stainless   steel
surfaces  and  to  detect  surface  contamination  in  tubing,
fittings,  valves  and  other  components.    The  procedure
involves   detection   and   measurement  of  the  surface
elemental composition by Auger Electron Spectroscopy
(AES).    This  procedure  also  describes  the  test  method
for  a  depth  compositional  profile  of  Cr,  Fe,  Ni,  O,  and
C   from   the   as-received   surface,   through   the   oxide
layers,   and   extending   into   the   base   metal.      This
measurement  provides  oxide  thickness  and  chromium
enrichment   information   throughout   the   passivated
region.
2. 2    This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.      It   is   the
responsibility   of   the   users   of   this   test   method   to
establish  appropriate  safety  and  health  practices  and  to
determine  the  applicability  of  regulatory  limitations
prior to use.
3  Limitations
3. 1    This  test  method  is  intended  to  be  used  by  AES
analysts    familiar    with    the    instrumentation    and
technique.  The AES instrument must be calibrated and
maintained  to  pertinent  manufacturerís  specifications.
The  method  is  not  intended  to  preclude  the  use  of  any
particular    brand    or    model    of    surface    analysis
equipment.    While  most  of  the  test  methodology  has
been   developed   using   specific   instrumentation,   this
method can be adapted to most Auger surface analytical
instrumentation.
3. 2    Quantification  of  the  elemental  compositions  is
performed   with   handbook   values   of   the   relative
elemental  sensitivity  factors.    These  sensitivity  factors
do   not   allow   for   differences   due   to   the   chemical
environment  of  the  elements,  and  are  thus  not  accurate
in  this  instance  in  which  the  chemical  environment
changes from the passive oxide layer to the metal alloy.
In  addition,  quantification  is  affected  by  the  choice  of
instruments   and   instrument   parameters.      For   these
reasons  the  results  of  this  test  method  may  not  be
reproducible     between     different     instruments     and
operators.  Use of the results of this test method should
be restricted to process development and comparison to
an  historical  database  of  AES  data  from  the  same
source.
3. 3  The effects of the depth of analysis of the technique
and  surface  contamination  affect  the  results  of  this  test
method.  These are discussed in the attached appendix.
Surface  roughness,  non-planarity  of  the  surface,  and
differential  sputtering  rates  for  the  different  chemical
species  also  cause  measurement  uncertainties  in  this
test method.
3. 4    The  results  of  this  test  method  have  not  been
demonstrated  to  affect  performance  of  stainless  steel
components  in  high  purity  gas  distribution  systems  for
semiconductor manufacturing.
4  Referenced Standards
4. 1  SEMI Standard
SEMI F19 ó Specification for the Finish of the Wetted
Surfaces   of   Electropolished   316L   Stainless   Steel
Components


SEMI F72-1102 © SEMI 2002 2
4. 2  ASTM
1
Standards
ASTM  E  673  ó  Standard  Terminology  Relating  to
Surface Analysis
ASTM   E   1078   ó   Standard   Guide   for   Specimen
Handling  in  Auger  Electron  Spectroscopy  and  X-ray
Photoelectron Spectroscopy
ASTM  E  1127  ó  Standard  Guide  for  Depth  Profiling
in Auger Electron Spectroscopy
NOTE 1: Unless   otherwise   indicated,   all   documents   cited
shall be the latest published versions
5  Terminology
5. 1    Terminology  is  per  ASTM  E  673  unless  otherwise
specified.
5. 2  Abbreviations and Acronyms
5. 2.1  AES ó Auger Electron Spectroscopy
5. 3  Definitions
5. 3.1  passivation   ó   the   chemical   treatment   of   a
stainless  steel  surface  with  a  mild  oxidant  for  the
purpose  of  enhancing  the  corrosion  resistant  surface
film.
5. 3.2  sampling  volume  ó  the  volume  in  the  sample
from which Auger electrons are detected.  The electron
beam  spot  size  or  the  scan  area,  and  the  acceptance
angle  of  the  electron  analyzer  determine  the  lateral
dimensions. A length of three times the Auger electron
mean   free   path   is   considered   the   maximum   depth
sensitivity.   Sampling   volume   is   dependent   on   the
sample material and TOA.
5. 3.3  take-off   angle   (TOA)   ó   the   angle   that   the
collection lens forms with the sample plane.
6  Summary of Method
6. 1  Data Acquisition
6. 1.1    Acquire  initial  elemental  survey  and  calculate
elemental composition of ìas receivedî wetted surface.
6. 1.2    Acquire  a  compositional  depth  profile  by  ion
etching to determine the relative abundance of C, O, Cr,
Fe  and  Ni.    Additional  elements  may  be  included  as
desired  (i.e.,  molybdenum,  silicon  and  nitrogen).    The
thickness  of  the  passive  oxide  layer  and  carbon  is  also
determined from the depth profile.


1 American  Society  for  Testing  and  Materials,  100  Barr  Harbor
Drive,    West    Conshohocken,    Pennsylvania    19428-2959,    USA.
Telephone:       610.832.9585,       Fax:       610.832.9555       Website:
www.astm.org
6. 2  Reporting ó Data is provided consisting of:
6. 2.1      An   initial   survey   spectrum   extending   from
approximately 0 to 2000 eV.
6. 2.2    A  compositional  depth  profile  plot  including  C,
O, Cr, Fe and Ni as a function of sputtering time.
6. 2.3      A   table   of   the   as-received   surface   elemental
composition    calculated    from    the    initial    survey
spectrum.
6. 2.4      A   table   of   the   oxide   thickness,   the   carbon
thickness,  and  the  maximum  of  the  Chromium  to  Iron
ratio calculated from the depth profile.
7  Possible Interferences
7. 1  Cr  and  O  ó  Carefully  select  windows  for  oxygen
and   chromium   to   minimize   interference.      Monitor
individual windows after profile is complete to evaluate
effects.    Some  instruments  may  have  enhanced  ability
to compensate for overlaps.
8  Apparatus
8. 1  Instrumentation  ó  Any  AES  instrument  equipped
with  an  ion  gun  may  be  used,  whether  it  etches  and
measures  simultaneously  or  in  alternating  fashion.    An
instrument   that   analyzes   and   etches   in   alternating
fashion should be evaluated to assure that no significant
oxygen   level   redeposits   onto   the   sample   surface
between  etching  intervals.    The  electron  analyzer  may
be  of  either  the  hemispherical  or  cylindrical  mirror
analyzer  (CMA)  type.    The  electron  energy  analyzer
shall  be  of  high  enough  energy  resolution  to  permit
adequate separation of the Chromium KLL and Oxygen
KLL Auger peaks.
8. 2    Instruments  with  geometries  significantly  different
from  one  another  may  provide  analysis  from  different
sampling volumes.  The incident electron beam energy,
the  angle  of  the  incident  electron  beam  to  the  sample
plane, and the take-off angle must be recorded.
9  Reagents and Materials
9. 1  Instrument   Calibration   Materials   ó   Refer   to
instrument manufacturer recommendations or ASTM E
1127 for standard materials.
10  Safety Precautions
10. 1    This  test  method  does  not  purport  to  address  the
safety   considerations   associated   with   use   of   high
voltage,  vacuum,  and  electron  producing  equipment.
The  method  assumes  an  AES  analyst  with  adequate
skill level as well as knowledge of instrumentation and
associated safety precautions.


SEMI F72-1102 © SEMI 2002 3
11  Test Specimens
11. 1    Specimens  are  to  be  sectioned  to  appropriate  size
for  the  particular  AES  instrument  using  a  clean,  dry
hacksaw  or  dry  low  speed  bandsaw.    Any  sample
preparation  shall  avoid  introducing  contamination  onto
the  surface  to  be  measured.  Clean  noncontaminating
gloves and tweezers should be used to handle samples,
avoiding  contact  with  the  area  of  interest.    In  addition,
preparation must avoid excessive heating of the sample;
i.e.,  the  surface  temperature  shall  not  exceed  50
o
C,  to
avoid oxide growth or change in surface composition.
11. 2    Sample  preparation  should  preferably  be  done  by
the component manufacturer.  Following sectioning the
sample(s)  are  to  be  cleaned  and  packaged  per  the
manufacturerís  standard  final  cleaning  and  packaging
procedures.
11. 3    If  sample  preparation  is  done  by  other  than  the
manufacturer, the sample(s) may be cleaned in DI water
and  dried  promptly.    If  the  sample(s)  are  not  to  be
analyzed   immediately   they   should   be   packaged   by
wrapping  in  clean  metal  foil  or  sealing  in  cleanroom
quality nylon bags.
11. 4    If  sample  preparation  is  done  by  other  than  the
manufacturer  this  shall  be  stated  in  the  report  narrative
and  the  analytical  results  are  not  to  be  interpreted  as
indicative of the manufacturerís quality of cleaning and
packaging  procedures.    A  note  to  this  effect  shall  be
included   in   all   tables   of   reported   results   of   the
composition of the surface.
11. 5  After  preparation,  samples  should  be  analyzed
promptly,   with   allowance   for   shipping   times   and
queuing time at the analyst.
12  Preparation of Apparatus
12. 1          Instruments     shall     be     routinely     tested     in
accordance   with   manufacturer   recommendations   to
assure  proper  performance.    The  instrument  vacuum
shall be 1.0 ◊ 10
-7
Torr or better during the analysis.
13  Calibration and Standardization
13. 1        Instrument    calibration    for    etch    rates    and
sensitivity  factors  shall  be  performed  in  accordance
with   instrument   manufacturer   recommendations   or
other established method.
14  Procedure
14. 1    The  sample  is  to  be  mounted  in  accordance  with
manufacturer's   recommendations   and   in   a   manner
consistent  with  ultra-high  vacuum  surface  analytical
procedures.    Some  of  these  practices  are  detailed  in
ASTM  E  1078.    The  area  to  be  analyzed  should  be
mounted  parallel  to  the  sample  holder  surface  so  that
the TOA is known.
14. 2  Place the sample in the AES introduction chamber
for  pumpdown.    Transfer  to  the  analytical  chamber  at
the manufacturer's recommended base pressure.
14. 3    Align  the  sample  with  respect  to  the  electron
beam and analyzer so that optimum count rate from the
desired analytical location is obtained.  The surface area
to  be  analyzed  should  be  free  of  sample  preparation
debris,  visible  particles  and  large  defect  features,  if
possible.
14. 4    A  large  beam  size  or  scan  area  should  be  used  to
attempt   measurement   of   a   representative   surface.
Elemental  survey  data  (approximately  0-2000  eV)  are
to  be  measured  from  the  sample  surface  to  determine
the  elements  present  and  their  approximate  surface
abundances.    A  signal-to-noise  ratio  of  2  is  usually
adequate to ensure detection of elements present at one
atomic  percent  or  greater  levels.    A  typical  survey
spectrum is shown in Figure 1.

Figure 1
Auger Spectrum of Stainless Steel Surface

14. 5    Acquire  a  depth  composition  profile  to  determine
the  relative  abundances  of  Cr,  Fe,  Ni,  O,  and  C.    The
profile   may   be   acquired   in   a   simultaneous   or   an
alternating  etch/data  acquisition  mode.    Measurement
of each element shall be made at a frequency of at least
one data point every 5 ≈ within the first 50 ≈ and one
data point every 10 ≈ from 50 ≈ to the profile end.  An
appropriate  scan  acquisition  time  is  one  that  optimizes


SEMI F72-1102 © SEMI 2002 4
spectral resolution and signal/noise, and that has at least
ten  data  points  in  each  spectral  window.    The  depth
profile should be continued into the depth of the sample
until   the   Fe,   Cr   and   Ni   levels   are   approximately
constant.
14. 6  Depth profile data are presented as signal intensity
of  each  element  with  etch  time  (i.e.,  depth),  and  as
atomic  concentration  with  etch  time.    Depths  may  be
estimated  from  etch  times  by  determination  of  the  etch
rate  on  a  known  thickness  of  standard  material.    A
typical AES profile is shown in Figure 2.

Figure 2
Auger Depth Profile of Stainless Steel
15  Calculations and Interpretation of Results
15. 1          Most     manufacturers     supply     software     for
calculation  of  the  approximate  elemental  composition
from  the  survey  spectrum  and  the  depth  profile  data.
The  elemental  composition  should  be  estimated  using
sensitivity  factors  appropriate  to  the  instrument,  each
element,  and  resolution  settings  for  each  measurement.
AES  spectra  are  considered  only  semiquantitative,  due
to    instrument    geometry    and    the    chemical    form
dependency    of    each    element's    sensitivity    factor.
Evaluations  of  elemental  composition  should  therefore
be  limited  to  similar  samples  analyzed  on  the  same
instrument.
15. 2    The  signal  intensity  with  etch  time  graph  may  be
used to calculate oxide thickness, defined as the point at
which the oxygen signal decreases to half its maximum
value.    The  thickness  of  surface  carbon  contamination
is calculated in the same way from the carbon signal.
15. 3  Relative   abundances of   profiled   elements   are
recorded  on  the  atomic  concentration  with  etch  time
graph.
16  Reporting Results
16. 1  A tabular summary of estimated surface elemental
composition   is   to   be   supplied   with   its   associated
elemental survey spectrum.
16. 2    Tabular  summaries  of  oxide  thickness,  thickness
of  the  region  in  which  Cr  concentration  exceeds  Fe
concentration,  thickness  of  a  surface  Fe  enrichment  (if
present),  and  carbon  thickness  are  to  be  supplied  with
associated depth profile graphs.
16. 3    Optionally,  parameters  such  as  maximum  Cr/Fe
ratio  may  be  reported.    However,  the  value  of  the
maximum Cr/Fe ratio is subject to instrument geometry
and sensitivity factor variations, and should not be used
for    primary    evaluation    purposes.        Comparative
evaluations should only be made from data collected by
the same instrument with an identical protocol.
16. 4  Data acquisition parameters, including instrument
geometry,  electron  beam  size  or  scan  area,  and  other
pertinent settings are to be supplied.  The manufacturer
and model number of instrument used is to be reported.
Analyst  identity  and  analysis  date  are  also  required
information.    Each  table  and  graph  must  be  clearly
labeled with sample identification.

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



SEMI F72-1102 © SEMI 2002 5
APPENDIX 1
DISCUSSION  OF  EFFECTS  OF  DEPTH  OF  ANALYSIS  ON  DEPTH
PROFILE  ANALYSIS  BY  AUGER  ELECTRON  SPECTROSCOPY  FOR
SURFACE   CHEMISTRY   ANALYSIS   OF   PASSIVATED   STAINLESS
STEEL
NOTE:    The  material  in  this  appendix  is  an  official  part  of  SEMI  F72  and  was  approved  by  full  letter  ballot  procedures.    This
appendix was derived from presentations made to the Stainless Steel and Surface Analysis Workshop
2
.



2  Stainless Steel and Surface Analysis Workshop, March, 1999;  Interpratation of Depth Profile Analysis Data, Dave Harris, Charles Evans and
Associates.
A1-1
A1-1.1   The purpose of this appendix is to describe the
Auger   Electron   Spectroscopy   (AES)   technique   and
explain  the  interpretation  of  the  depth  profile  analysis
with  respect  to  the  structure  and  composition  of  the
passive oxide layer on stainless steel.  The effect of the
depth  of  analysis  on  the  measured  chromium  to  iron
ratio,  the  oxide  thickness,  and  the  depth  of  enrichment
is  discussed.    The  discussion  also  applies  to  depth
profile    analyses    performed    by    ESCA    (Electron
Spectroscopy    for    Chemical    Analysis,    sometimes
referred  to  as  X-Ray  Photoelectron  Spectroscopy,  or
XPS).
A1-1.2 Auger  ó  The  mechanism  of  Auger  electron
generation is illustrated in Figure A1-1.  The energy of
the Auger electron is determined by the energies of the
electron  energy  levels  participating  in  the  generation
process  and  are  unique  for  each  chemical  element.
Thus  the  elements  present  in  the  analyzed  region  may
be  determined  by  analysis  of  the  energies  of  emitted
Auger electrons.

K or 1s
Auger Electron
L
2,3
or 2p
L
1
or 2s
Electron
Energy
Levels
Electron Hole
1
.
Electron from higher energy
level drops into electron hole
created by incident electron or
photon

# 2

2. Energy released by 1
“kicks out” Auger Electron
from hi
gher energy level

Figure A1-1
Schematic Representation of Auger Electron
Generation Process
A1-1.3   The Auger technique makes use of an electron
beam  for  primary  excitation,  typically  of  energy  in  the
range 2 to 5 keV. The electron beam may by defocused
to  analyze  a  relatively  large  area  of  the  surface,  of  the
order   of   micrometers,   or   focussed   and   rastered   to
ìmapî  the  distribution  of  elements  on  the  surface.  An
electron energy analyzer is focused at the same point as
the incident electron beam, and the Auger electrons that
escape  the  surface  are  detected  and  analyzed.    The
analysis is commonly presented as the derivative of the
electron  signal  intensity  N  as  a  function  of  energy  E,
dN(E)/dE,  of  the  spectrum  to  enhance  the  visibility  of
the    small    Auger    electron    peaks    relative    to    the
background.      An   example   of   an   Auger   electron
spectroscopy  spectrum  of  a  stainless  steel  surface  is
shown in Figure 1 of this test method.
A1-2 Illuminated Volume and Surface
Sensitivity
A1-2.1   The  incident  electron  beam  penetrates  well
below  the  surface.  Auger  electrons  are  generated  all
through  this  illuminated  volume.  The  Inelastic  Mean
Free  Path  (IMFP)  of  an  electron  in  a  solid  is  the  mean
distance  through  the  solid  that  an  electron  can  travel
before  losing  some  of  its  energy  (suffering  an  inelastic
interaction).    The  IMFP  is  a  function  of  the  electronís
energy  and  the  matrix  through  which  it  is  traveling.
Electrons  with  an  energy  typical  of  Auger  and  ESCA
electrons, approximately 1 keV, have an IMFP of about
10  angstroms.    That  means  that  a  1  keV  electron  will
travel, on average, 10 angstroms before interacting with
the  matrix  and  giving  up  some  of  its  energy.    In  other
words  it  will  be  scattered  to  lower  energy  and  will  not
be  part  of  the  photoelectron  or  Auger  electron  line  for
its element.  The IMFP is a statistical parameter and an
electron  may  travel  several  IMFPs  before  having  a
collision.  The  ìseveral  IMFPsî  is  called  the  escape
depth of the electron, or the depth of analysis, as shown


SEMI F72-1102 © SEMI 2002 6
in   Figure   A1-2.      Although   Auger   and   ESCA   are
considered   surface   analytical   tools,   their   depth   of
analysis is on the order of 50 angstroms, or about one to
three  times  the  depth  of  the  oxide  film  found  on  a
typical passivated stainless steel surface.

Figure A1-2
The Electron Escape Depth of Low Energy
Electrons in Some Metals
A1-3 Depth of Analysis Function
A1-3.1    There  has  been  some  discussion  with  respect
to  the  ìDepth  of  Analysis  Functionî.  There  is  one
school that believes that it is 5 IMFPs and another that
uses 3 IMFPs.  These two functions will be referred to
as 5λ and 3λ respectively.  It will be seen that it makes
little difference which function is used even though the
depth of the oxide films is of the order of the functions.
These  functions  are  seen  in  Figure  A1-3,  which  shows
the  proportion  of  the  total  signal  generated  from  each
depth below the surface.  The Y-axis is in decimal and
the  X-axis  is  in  angstroms  from  the  surface.  The  first
point  of  the  5λ  curve  is  0.16  at  the  1
st
angstrom  level.
That  means  that  16%  of  the  signal  comes  from  the  1
st

angstrom,  14%  from  the  2
nd
angstrom  level  and  so  on
down  to  1%  from  the  25
th
angstrom  level.    Thus
elements that do not appear on the surface or in the first
24 angstroms in from the surface, but do exist at the 25
angstrom level will be detected.

5 Lambda
0
0. 02
0. 04
0. 06
0. 08
0. 1
0. 12
0. 14
0. 16
0. 18
1  2  3  4  5  6  7  8  9 10111213141516171819202122232425
Angstroms
3 Lambda
0
0. 02
0. 04
0. 06
0. 08
0. 1
0. 12
0. 14
0. 16
0. 18
1  2  3  4  5  6  7  8  9 10111213141516171819202122232425
Angstroms
Figure A1-3
These Two Graphs Represent the ìDepth of
Analysisî That Will be Seen When Analyzing 1 keV
Electrons.  The Top Curve is the 5λ Curve and
Bottom the 3 λ.
A1-4     Modeling
A1-4.1   Figure  A1-4  is  the  composition  profile  of  a
ìperfectî  oxide.    It  represents  25  angstroms  of  pure
Cr
2
O
3
on an atomically flat 316L stainless steel surface,
with  no  surface  or  interfacial  contamination  present.
Figures  A1-5a  and  b  are  the  theoretical  depth  profiles
derived  by  assuming  a  depth  of  analysis  of  5λ  and 3λ
respectively.  The  first  factor  to  note  is  that  Fe,  Ni  and
Mo  appear  most  or  all  of  the  way  through  the  depth
profile of the oxide due to the contribution of the metal
substrate to the detected signal,  the  ìdepth  of  analysisî
effect  as  introduced  above.  1  keV  electrons  can  escape
from   as   deep   as   25   angstroms.      This   must   be
appreciated when interpreting these depth profiles.


SEMI F72-1102 © SEMI 2002 7

Theoretical
0
10
20
30
40
50
60
70
80
051015202530354045
Angstroms
Atomic Concentration
CrFeNiMoOC
Figure A1-4
Composition Versus Depth of a Pure Cr
2
O
3
Layer
on Stainless Steel
A1-4.2   The second factor to notice is the thickness of
the  oxide.    Historically,  the  FWHM  (Full  Width  Half
Maximum;  the  width  of  a  peak  measured  at  half  its
maximum  height)  of  the  oxygen  profile  has  been  used
as  the  measure  of  oxide  thickness.    It  is  apparent  in
Figures  A1-4  and  A1-5  that  this  underestimates  the
oxide thickness by 15 to 20 %.
A1-4.3   It  should  also  be  noted  that  the  Cr:Fe  ratio
measured   from   Figures   A1-4   and   A1-5   has   its
maximum value at the initial surface, decreasing as the
depth profile progresses, whereas the actual Cr:Fe ratio
in Figure A1-4 is infinite down to 25 angstroms.  Most
actual  depth  profiles  exhibit  a  maximum  of  the  Cr:Fe
ratio at some depth below the initial surface, referred to
as   the   depth   of   maximum   enrichment.      This   is   a
consequence  of  variation  in  the  actual  composition  of
the oxide, possibly having a higher concentration of Fe
near the surface, a phenomenon commonly termed a
ìdetached iron oxide layerî, or of contamination on the
surface,  generally  hydrocarbons.    These  are  discussed
in the next section
A1-5 Effects of Detached Iron Oxide Layer
and Surface Contamination
A1-5.1   The model composition profile of Figure A1-6
shows 3 angstroms of pure Fe
2
O
3
over 22 angstroms of
pure Cr
2
O
3
on 316L stainless steel.  This is a model of a
detached   iron   oxide   layer.      Figure   A1-7   is   the
theoretical depth profile of this model derived assuming
a depth of analysis of 5λ.  Note that the initial Cr value
in  the  profile  is  higher  than  the  Fe  value,  even  though
the surface is pure Fe
2
O
3
.  This is a consequence of the
depth  of  analysis  detecting  the  Cr  from  levels  beneath
the  surface.    The  Cr:Fe  ratio  for  this  model  has  its
maximum   value   at   3   angstroms   below   the   initial
surface.    The  theoretical  depth  profile  using  a  depth  of
analysis of 3λ is very similar

Convoluted 5 Lambda
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
051015202530354045
Angstroms
Atomic Concentration
0
20
40
60
80
100
120
140
CrFeNiMoOCCr:Fe
Figure A1-5a
Theoretical Depth Profile of Figure 5 Assuming 5λ
Depth of Analysis

Convoluted 3 Lambda
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
051015202530354045
Angstroms
Atomic Concentration
0
100
200
300
400
500
600
700
CrFeNiMoOCCr:Fe
Figure A1-5b
Theoretical Depth Profile of Figure 5 Assuming 3λ
Depth of Analysis
A1-6 Effects of Hydrocarbon Contamination
A1-6.1   The model composition profile of Figure A1-8
shows 3 angstroms of pure carbon over 22 angstroms of
pure  Cr
2
O
3
on  316L  stainless  steel,  representing  an
idealized     model     of     the     adsorbed     hydrocarbon
contamination    generally    found    on    stainless    steel
surfaces exposed to the atmosphere.  Figure A1-9 is the
theoretical depth profile of this model assuming a depth
of analysis of 5λ.  In this case the O, Cr and Fe atomic
concentration values are reduced by the presence of the
carbon   until   the   depth   profiling   proceeds   past   the
carbon, but they have the same relative values (ie: same
Cr:Fe    ratio)    versus    depth    as    derived    in    the
uncontaminated  model.    The  maximum  of  the  Cr:Fe
ratio  is  seen  to  be  at  the  initial  surface.    Although  the
actual oxide thickness is less in this model, the FWHM
measure of the oxide thickness from the depth profile is
the same due to the presence of the carbon layer.  Note


SEMI F72-1102 © SEMI 2002 8
that the Oxygen concentration profile initially increases
to  a  maximum,  then  decreases.    This  is  typical  of
Oxygen  concentration  profiles  seen  on  actual  samples,
which  will  generally  have  some  adsorbed  hydrocarbon
contamination on the surface.

Theoretical
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
051015202530354045
Angstroms
Atomic Concentration
CrFeNiMoOC

Figure A1-6
Composition Versus Depth of a Fe
2
O
3
Layer Over a
Cr
2
O
3
Layer on Stainless Steel

Convoluted  5 Lambda
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
051015202530354045
Angstroms
Atomic Concentration
0
5
10
15
20
25
CrFeNiMoOCCr:Fe
Figure A1-7
Theoretical Depth Profile of Figure A1-6 Assuming
5λ Depth of Analysis

Theoretical
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
051015202530354045
Angstroms
Atomic Concentration
CrFeNiMoOC
Figure A1-8
Composition Versus Depth of a Carbon Layer Over
a Cr
2
O
3
Layer on Stainless Steel

Convoluted  5 Lambda
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
051015202530354045
Angstroms
Atomic Concentration
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
CrFeNiMoOCCr:Fe
Figure A1-9
Theoretical Depth Profile of Figure A1-8 Assuming
5λ Depth of Analysis
A1-7 Effects of Hydrocarbon Contamination
over Detached Iron Oxide Layer
A1-7.1    The  model  composition  profile  of  Figure  A1-
10  shows  a  3  angstrom  carbon  layer  over  3  angstroms
of pure Fe
2
O
3
over 19 angstroms of pure Cr
2
O
3
on 316L
stainless  steel.  Figure  A1-11  is  the  theoretical  depth
profile of this model assuming a depth of analysis of 5
λ.  This profile is seen to be similar to the depth profiles
generally  observed  for  passivated  stainless  steel.    The
Cr:Fe  ratio  maximum  occurs  below  the  initial  surface,
and  the  initial  surface  atomic  concentrations  of  the
elements  of  interest  are  diluted  by  the  presence  of  the
carbon  layer  on  the  surface.    The  oxide  thickness,  as
measured by the FWHM technique, is affected by both


SEMI F72-1102 © SEMI 2002 9
the  presence  of  the  carbon  layer  and  the  depth  of
analysis.

Theoretical
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
051015202530354045
Angstroms
Atomic Concentration
CrFeNiMoOC
Figure A1-10
Composition Versus Depth of a Carbon Layer Over
a Fe
2
O
3
Layer Over a Cr
2
O
3
Layer on Stainless Steel

Convoluted  5 Lambda
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
051015202530354045
Angstroms
Atomic Concentration
0
2
4
6
8
10
12
14
CrFeNiMoOCCr:Fe
Figure A1-11
Theoretical Depth Profile of Figure 11 Assuming 5λ
Depth of Analysis
A1-8
A1-8.1   It must be emphasized that these derived depth
profiles  are  for  models  with  perfect  interfaces  and
perfect   compositions   instead   of   the   compositional
gradients   observed   in   real   systems.      Additional
measurement  uncertainties  result  from  roughness  and
non-planarity   of   the   surface,   and   from   differential
sputtering  rates  for  different  chemical  species  during
depth profiling.
A1-8.2   The  depth  profiles  of  real  systems  must  be
interpreted   with   an   understanding   of   the   effects
described  in  this  appendix  and  a  realization  that  they
are not ideal.  The same considerations pertain to ESCA
depth profile analysis.
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

Copyright   by   SEMIÆ   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI F73-1102 © SEMI 2002 1
SEMI F73-1102
TEST METHOD FOR SCANNING ELECTRON MICROSCOPY (SEM)
EVALUATION OF WETTED SURFACE CONDITION OF STAINLESS
STEEL COMPONENTS
This test method was technically approved by the Global Gases Committee and is the direct responsibility of
the North American Gases Committee. Current edition approved by the North American Regional Standards
Committee  on  August  29,  2002.    Initially  available  at  www.semi.org  September  2002;  to  be  published
November 2002.
1  Purpose
1. 1    This  document  defines  a  uniform  procedure  for
testing the wetted surfaces of stainless steel components
intended for installation into high purity gas distribution
systems.  This  procedure  characterizes  the  occurrence,
frequency,    and    in    some    cases    the    identity    of
microscopic surface defects and contaminants that may
appear  on  the  wetted  surfaces.  It  should  be  noted  that
there  has  been  no  direct  correlation  made  between  the
results of this test method and contamination of process
gases  or  product  yields  in  processes  served  by  high
purity gas distribution systems.  Application of this test
method    is    intended    to    yield    comparable    and
reproducible results among various users of this method
for the purposes of qualification of components.
1. 2      The   objective   of   this   method   is   to   describe   a
general set of instrument parameters and conditions that
will  achieve  precise  and  reproducible  measurements  of
important parameters regarding the surface condition.
2  Scope
2. 1    This  procedure  applies  to  the  wetted  surfaces  in
stainless   steel   tubing,   fittings,   valves,   and   other
components  to  determine  the  effectiveness  of  surface
finishing   and   cleaning   processes.      The   technique
describes  counting  of  surface  defects  including  pits,
inclusions,    inclusion    stringers,    scratches,    residual
process  marks,  grain  boundaries  and  contamination  on
the  wetted  surfaces.    However,  any  surface  damage
produced  during  sample  preparation  is  to  be  excluded
from such assessment.
2. 2    This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.      It   is   the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  health  practices  and  determine  the
applicability or regulatory limitations prior to use.
3  Limitations
3. 1  This test method is primarily intended to determine
the   frequency   of   occurrence   (surface   density)   and
identity  of  microscopic  surface  defects,  down  to  a  size
range  of  ≥  approximately  0.1  micrometer,  that  may  be
detrimental  to  high  purity  gas  distribution  systems.
Such  defects  may  not  be  identifiable  by  visual  or
magnified   optical   inspection,   but   concentrations   of
microscopic    surface    defects    may    cause    visually
apparent defects such as haze.
3. 2      This   test   method   requires   sectioning   of   the
specimen(s)  used  for  test  purposes  and  is  therefore
destructive.
3. 3      The   method   must   be   applied   to   representative
examples  of  process  lots  to  determine  quality  of  the
processes employed and/or lots processed.  As the areas
examined and measured by this method are very small,
the  results  may  not  be  representative  of  all  areas  or  all
lots processed.
3. 4  This test method may be subject to operator bias in
selection   of   representative   areas   and   definition   of
countable defects.
3. 5  Detection   of   countable   defects   is   affected   by
operator  selection  of  SEM  operating  conditions  and
image  recording  conditions.    This  test  method  assumes
that  the  operator  is  sufficiently  proficient  in  operation
of the SEM to minimize this limitation, per instructions
in the procedures.
3. 6    SEM  imaging  will  reveal  surface  finish  flaws,  but
may  not  show  features  that  are  well  rounded  by  an
electropolishing or other surface leveling process.
3. 7    Energy  dispersive  X-ray  spectroscopy  (EDS)  may
be   used   in   this   test   method   to   analyze   surface
contaminants  at  least  approximately  one  micrometer  in
thickness  and  inclusions  at  least  approximately  one
micrometer   in   size.      EDS   is   not   an   appropriate
technique for analysis of the oxide passive layer on the
stainless steel surface, as EDS analyzes down to a depth
of the order of 1 micrometer below the surface, and the
oxide  passive  layer  is  only  0.001  to  0.01  micrometer
deep.


SEMI F73-1102 © SEMI 2002 2
4  Referenced Standards
4. 1  ASTM Standards
1

ASTM   E   7   —   Standard   Terminology   Relating   to
Metallography
ASTM  E  766  —  Standard  Practice  for  Calibrating  the
Magnification of a Scanning Electron Microscope
4. 2  ANSI
2
/IEEE Standard
3

759  —Standard  Test  Procedures  for  Semiconductor  X-
ray Energy Spectrometers
NOTE 1: Unless   otherwise   indicated,   all   documents   cited
shall be the latest published versions.
5  Terminology
5. 1  Abbreviations and Acronyms
5. 1.1  EDS  —  Energy  Dispersive  X-ray  spectroscopy,
sometimes called EDX.
5. 1.2  FWHM —   abbreviation   of   Full   Width   Half
Maximum; the width of an EDS peak measured at half
its maximum height.
5. 1.3  SEM — Scanning Electron Microscopy.
5. 2  Definitions
5. 2.1  defect   —   any   surface   feature   that   is   either
characteristic  of  the  material,  or  a  result  of  material
processing   or   product   fabrication,   that   is   deemed
capable  of  generating  and/or  trapping  and  releasing
particles,  or  otherwise  be  detrimental  to  the  contained
fluids.    Specific  features  that  may  be  considered  to  be
defects,  with  definitions  that  relate  to  the  purposes  of
this  document  and/or  obtained  from  reference  sources
noted include:
5. 2.1.1  contamination    —    three    dimensional    alien
material  adhering  to  a  surface.    (SEMI  Compilation  of
Terms)
5. 2.1.2  grain  boundary  —  an  interface  separating  two
grains, where the orientation of the lattice changes from
that of one grain to that of the other. (ASTM E 7)
5. 2.1.3  inclusion   —   indigenous   or   foreign   material
within   the   metal,   usually   referring   to   non-metallic


1 American Society for Testing and Materials, 100 Barr Harbor
Drive, West Conshohocken, Pennsylvania 19428-2959, USA.
Telephone: 610.832.9585, Fax: 610.832.9555 Website:
www.astm.org
2 American National Standards Institute, New York Office: 11 West
42nd Street, New York, NY 10036, USA. Telephone: 212.642.4900;
Fax: 212.398.0023 Website: www.ansi.org
3 Institute of Electrical and Electronics Engineers, IEEE Operations
Center, 445 Hoes Lane, P.O. Box 1331, Piscataway, New Jersey
08855-1331, USA. Telephone: 732.981.0060; Fax: 732.981.1721
compound particles such as oxides, alumina, sulfides or
silicates.
5. 2.1.4  pit  —  a  surface  cavity  or  crater  with  a  defined
edge not caused by impact.
5. 2.1.5  process  marks  —  a  surface  texture  or  pattern
that  is  characteristic  of  the  surface  finishing  process
employed.
5. 2.1.6  scratch  —  an  elongated  mark  or  groove  cut  in
the  surface  by  mechanical  means,  not  associated  with
the  predominant  surface  texture  pattern.  (adapted  from
SEMI Compilation of Terms)
5. 2.1.7  stringer —  a  microstructural  configuration  of
alloy  constituents  or  foreign  nonmetallic  material,  or
trace  thereof,  lined  up  in  the  direction  of  working.
(adapted from ASTM E 7)
5. 2.2  wetted   surface   —   surfaces   of   a   component
contacting  the  contained  fluids.    (adapted  from  SEMI
Compilation of Terms)
5. 2.3  working  distance  —  the  distance  between  the
surface  of  the  specimen  being  examined  and  the  front
surface of the objective lens.  (ASTM E 7)
6  Summary of Method
6. 1  Obtain a SEM photomicrograph of a representative
area   of   the   wetted   surface   of   the   sample   at   a
magnification  of  200×.    Increase  the  magnification  to
1000×  and  take  another  SEM  photomicrograph  within
this  area,  and  another  at  a  pre-selected  magnification
within  the  range  3000  to  3600×.    Obtain  3000–3600×
photomicrographs   at   two   additional   representative
areas,  not  necessarily  within  the  200×  magnification
region.
6. 2    If  inclusions  or  contaminants  are  noted  on  any
3000–3600×   magnification   photos,   EDS   spectra   of
representative example(s) may be obtained.
6. 3    Perform  grid  overlay  defect  counting  on  the  three
3000–3600×  photos.    Report  results  in  tabular  form;
provide   photomicrographs   and   EDS   spectra   with
identification of elements detected.
7  Interferences
7. 1    Interferences  may  be  encountered  as  overlaps  in
EDS  spectral  peaks.    Specific  overlaps  that  may  be
encountered include but are not limited to:
7. 1.1  Molybdenum   and   Sulfur   —   Overlap   in   EDS
spectra   of   Mo   L   peaks   and   S   K   peaks   prevents
unambiguous determination.
7. 1.2  Manganese  and  Chromium/Iron  —  Overlap  in
EDS spectra of Mn Kα peak with Cr Kβ peak, and Mn
