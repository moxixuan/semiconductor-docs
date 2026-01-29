---
title: "E114-0302 - E © SEMI 2002..."
description: "SEMI标准文档"
sidebar_label: "E114-0302 - E © SEMI 2002..."
sidebar_position: 180
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-018.pdf'
  chapter: 18
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/018.pdf"
  pdfSize="0.76MB"
  title="E114-0302 - E © SEMI 2002..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI E114-0302
E
© SEMI 2002 5
13. 4    At  the  short  circuit  termination,  the  measurement
shall be made up to the point where the falling edge of
the  impedance  is  equal  to  90  percent  of  the  nominal
impedance.    For  example,  if  the  nominal  impedance  is
50  ohms,  then  the  measurement  can  stop  at  the  point
where    the    measured    value    at    the    short    circuit
termination  is  equal  to  45  ohms  (0.9  ×  50  =  45).    An
example  plot  showing  the  measurement  termination
point is shown in Figure 5.
NOTE    1:    The    termination    point    can    be    verified    by
disconnecting the short circuit termination and observing that
the impedance increases rapidly due to the open circuit.
14  Reporting Test Results
14. 1    Report  the  type  of  Network  Analyzer  and  the
details of the Network Analyzer parameters used for the
tests,  including  the  bandwidth,  the  number  of  data
points,  the  test  frequency,  and  the  frequency  span  (if
any).  An example data sheet is shown in Table 1.
14. 2    Report  the  type  of  Time  Domain  Reflectometer
used for the test.
14. 3    Report  the  length  of  the  cable  assembly  in  terms
of degrees at the nominal operating frequency.
14. 4      Report   the   power   dissipation   in   terms   of   dB
(decibels) and percentage of power transfer.
14. 5  Report the variation in characteristic impedance in
terms  of  the  minimum  and  maximum  after  the  values
have  been  scaled  according  to  the  reference  50-ohm
load.
15  Related Documents
15. 1  IEEE Standards
1

IEEE-STD-572  —  IEEE  Standard  for  Qualification  of
Class  1E  Connection  Assemblies  for  Nuclear  Power
Generating Stations
15. 2  MIL-Specifications
2

MIL-PRF-31031A    —    General    Specification    for
Connectors, Electrical, Plugs and Receptacles, Coaxial,
Radio  Frequency,  High  Reliability,  for  Flexible  and
Semirigid Cables
MIL-STD-348A    —    Radio    Frequency    Connector
Interfaces for MIL-C-3643, MIL-C-3650, MIL-C-3655,
MIL-C-25516,  MIL-C-26637,  MIL-PRF-39012,  MIL-
PRF-49142, MIL-PRF-55339, and MIL C-83517
MIL-STD-220B  —  Test  Method  Standard:  Method  of
Insertion Loss Measurement

Port 1
Short Circuit
Termination

Cable Assembly to be tested

Network
Analyzer

NOTE:  The reflection coefficient calibration is at the Port 1 output.  The cable assembly to be tested (DUT) attaches to Port 1
and is terminated with a short circuit.

Figure 1
Schematic of the Network Analyzer Test Setup for the Electrical Length Measurement




SEMI E114-0302
E
© SEMI 2002 6
Estimate the
Free-Space Length
of Cable Assembly
Physical Length
Velocity of Propagation
[]
Is the
Estimated Length
Less Than a Quarter Wavelength
at the Nominal Operating
Frequency?
Use Test Method 1
to Measure Wavelength
Use Test Method 2
to Measure Wavelength
Yes
No


Figure 2
Flow Chart Showing the Steps to Chose the Appropriate Test Method for Determining Electrical Length of
the Cable Assembly




Port 1
Port 2
Additional Test Cable
Cable Assembly to be tested
Network
Analyzer

NOTE:  Both  the  Port  1  and  Port  2  outputs  need  to  be  used  for  the  measurement.    An  additional  test  cable  is  needed  for  the
transmission calibration between the two ports.  The cable assembly to be tested (DUT) attaches between the additional test cable
on Port 1 and Port 2.

Figure 3
Schematic of the Network Analyzer Test Setup for the Power Dissipation (loss) Measurement


SEMI E114-0302
E
© SEMI 2002 7

Short Circuit
Termination
Cable Assembly to be tested
Test Port
TDR


NOTE: The cable assembly to be tested (DUT) attaches to the test port and is terminated with a short circuit.

Figure 4
Schematic of the Time Domain Reflectometer (TDR) Test Setup for the Characteristic Impedance
Measurement


Point where impedance

is 45 ohms
50

45

40

55

60

Test Data Curve near
short circuit termination
Distance
Impedance


NOTE:  The  measurement  termination  point  is  defined  as  where  the  impedance  at  the  short  is  equal  to  0.9  times  the  nominal
impedance value, which would be 45 ohms for a 50-ohm nominal impedance.

Figure 5
Example Plot of the Characteristic Impedance of a 50-ohm Cable Assembly Near the Short Circuit
Termination



SEMI E114-0302
E
© SEMI 2002 8
Table 1  Example Data Table for Presenting the Test Methods Parameters
Cable Length Test
Instrument
Parameters

Model Number
Bandwidth
(Hz)
Frequency (MHz) Test Method
(1 or 2)
Cable Assembly
Length (°)


Power Loss Test
Instrument
Parameters

Model Number
Bandwidth
(Hz)
Frequency (MHz) Loss (dB) Power Transferred (%)


Characteristic Impedance Test
Instrument
Model Number
Normalization
Factor
Minimum
Impedance
Maximum
Impedance




NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer's  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature,  respecting  any  materials  or  equipment  mentioned  herein.  These  standards  are  subject  to  change  without
notice.
By  publication  of  this  standard,  Semiconductor  Equipment  and  Materials  International  (SEMI)  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  items  mentioned  in  this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights are entirely their own responsibility.

Copyright  by  SEMI®  (Semiconductor  Equipment  and  Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI E115-0302
E
© SEMI 2002 1
SEMI E115-0302
E

TEST METHOD FOR DETERMINING THE LOAD IMPEDANCE AND
EFFICIENCY OF MATCHING NETWORKS USED IN SEMICONDUCTOR
PROCESSING EQUIPMENT RF POWER DELIVERY SYSTEMS
This test method was technically approved by the Global Metrics Committee and is the direct responsibility
of  the  North  American  Metrics  Committee.  Current  edition  approved  by  the  North  American  Regional
Standards  Committee  on  March  30,  2002.  Initially  available  at  www.semi.org  June  2002;  to  be  published
July 2002. Previously published March 2002.
E
This document was editorially modified in May 2002 to correct an errata.  A change was made in Section
1. 1.
1  Purpose
1. 1    The  purpose  of  this  document  is  to  define  a  test
method  used  to  determine  the  load  impedance  and
efficiency  of  matching  networks  used  in  RF  power
delivery     systems     for     semiconductor     processing
equipment.
2  Scope
2. 1  This document specifies the testing procedures and
test   equipment   required   for   determining   the   load
impedance and power efficiency of a matching network
based  on  the  positions  of  the  tuning  elements  in  the
matching network.
2. 2        The    primary    focus    for    this    specification    is
semiconductor processing equipment including, but not
limited to, the following tool types:
• Dry etch equipment,
• Film deposition equipment (CVD and PVD).
2. 3      This   standard   does   not   address   any   safety   or
performance issues related to RF emissions or electrical
codes  (e.g.,  Underwriter’s  Laboratory,  Inc.  (UL),  the
National       Electrical       Code       (NEC

),       Federal
Communications   Commission   (FCC)).      It   is   the
responsibility of the users of this standard to conform to
the appropriate local codes and regulations as applied to
this  type  of  equipment,  some  of  which  are  covered  by
referenced documents.
2. 4    This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.   It   is   the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1    This  standard  addresses  RF  Matching  Networks
used   in   RF   systems   that   primarily   operate   in   the
frequency  range  of  0.2–100  MHz.    It  does  not  address
higher frequency RF systems or microwave systems.
3. 2    This  standard  is  meant  for  analyzing  matching
networks that are designed to operate at fixed frequency
with a 50-ohm input impedance.
3. 3  International, national, and local codes, regulations
and   laws   should   be   consulted   to   ensure   that   the
equipment      and      procedures      meet      regulatory
requirements in each location.
4  Referenced Standards
4. 1  SEMI Standards
SEMI    E113    —    Specification    for    Semiconductor
Processing Equipment RF Power Delivery Systems
4. 2  IEEE Standards
1

IEEE-STD-383  —  IEEE  Standard  for  Type  Test  of
Class    1E    Electrical    Cables,    Field    Splices,    and
Connections for Nuclear Power Generating Stations
4. 3  Military Standards
2

MIL-PRF-39012D    —    General    Specification    for
Connectors, Coaxial, Radio Frequency
5  Terminology
5. 1  Abbreviations and Acronyms
5. 1.1  CVD — Chemical Vapor Deposition
5. 1.2  PVD — Physical Vapor Deposition
5. 1.3  VSWR — Voltage Standing Wave Ratio
5. 2  Definitions of Terms
5. 2.1  complex   conjugate   load   impedance    —    the
complex  conjugate  load  impedance  has  the  same  real
part  of  the  load  impedance  and  the  negative  of  the
reactive  part  of  the  load  impedance.  For  example,  the


1 Institute of Electrical and Electronics Engineers, IEEE Operations
Center, 445 Hoes Lane, P.O. Box 1331, Piscataway, New Jersey
08855-1331, USA. Telephone: 732.981.0060; Fax: 732.981.1721
2 Available through the Naval Publications and Forms Center, 5801
Tabor Avenue, Philadelphia, PA 19120-5099, USA. Telephone:
215. 697.3321


SEMI E115-0302
E
© SEMI 2002 2
complex  conjugate  of  a  load  impedance  of  2.0  –  j20
ohms would be 2.0 + j20 ohms.
5. 2.2  device under test (DUT) — the matching network
to be tested.
5. 2.3  harmonic frequency — the harmonic frequencies
are  defined  as  integer  multiples  of  the  fundamental
frequency.  For example, the second harmonic of 13.56
MHz is 27.12 MHz.
5. 2.4  “L”   type   matching   network   —   this   type   of
network  consists  of  a  tuning  element  that  is  connected
to  ground,  which  is  often  a  variable  capacitor,  and
another  tuning  element  that  is  in  series  with  the  output
connection.    The  series  section  of  the  “L”  matching
network   typically   consists   of   an   inductor   and   a
capacitor, one of which is variable.
5. 2.5  load  and  tune  position  —  for  some  matching
networks,  the  tuning  elements  are  referred  to  as  the
Load Position and the Tune Position.  This terminology
is  common  for  “L”  type  matching  networks,  which
have  a  tuning  element  that  is  connected  to  ground  and
another  tuning  element  that  is  in  series  with  the  output
connection.    The  Load  Position  corresponds  to  the
tuning  element  that  is  grounded  and  is  associated  with
matching  to  the  real  part  of  the  load  impedance.    The
Tune Position corresponds to the tuning element that is
in   series   with   the   output   and   is   associated   with
matching to the reactive part of the load impedance.
5. 2.6  load  impedance  —  the  load  impedance  is  the
impedance to which a matching network is matched.
5. 2.7  load     impedance     simulator     —     the     Load
Impedance  Simulator  is  a  device  that  presents  a  load
impedance  to  which  a  matching  network  can  match.
Details of a typical Load Simulator can be found in the
Related Information section of this test method.
5. 2.8  matched  input  impedance  —  a  matched  load
impedance  is  defined  as  typically  having  a  magnitude
of  50  ±  3.3  ohms  at  a  phase  angle  of  up  to  ±  3.8
degrees.  In other words, the load is considered matched
if  the  reflection  coefficient  is  no  greater  than  0.032  at
any phase angle.
5. 2.9  matching    network    —    the    device    used    to
transform  the  impedance  of  the  load  (chamber/chuck)
to    match    the    impedance    of    the    generator/cable
assembly, which is typically 50 ohms.
5. 2.10  power   efficiency   —   the   ratio   of   the   power
exiting  the  matching  network  divided  by  the  power
entering the matching network.
5. 2.11  S-parameters  —  the  scattering  matrix  used  to
describe  a  network.    The  reflection  coefficient  is  the
S11  parameter  and  the  transmission  coefficient  is  the
S21 parameter.
5. 2.12  tuning  element  position  —  the  position  of  the
tuning  element  is  defined  as  the  output  voltage  or
output encoder value that corresponds to the position of
a variable tuning element in a Matching Network.  For
example, the voltage from a rotary potentiometer on the
rotating   shaft   of   a   variable   capacitor   (the   “Tuning
Element”)   would   be   referred   to   as   the   capacitor’s
“Position”.      In   this   example,   the   position/voltage
corresponds to a certain shaft location or position.
6  Test Apparatus
6. 1  RF   Vector   Network   Analyzer   —   The   Network
Analyzer  is  used  to  measure  the  load  impedance  and
efficiency  of  the  matching  network.    The  Network
Analyzer  requires  vector  capability  so  that  both  the
magnitude  of  phase  of  the  reflection  coefficient  and
transmission   coefficient   can   be   measured   at   the
operating frequency.  The Network Analyzer shall have
an up-to-date calibration per the manufacturer.
6. 2  Coaxial  Output  Adapter  —  An  adapter  to  convert
the  output  connection  of  the  matching  network  to  a
standard  coaxial  interface  is  required  for  some  of  the
tests.
6. 3  RF Adapters and Terminations — Various adapters
may be necessary to convert between different types of
coaxial  connectors  (e.g.,  type  N  to  type  HN  adapters,
etc.).    All  adapters  used  shall  have  the  same  nominal
characteristic   impedance   as   the   system,   which   is
typically 50 ohms.   For some measurements, additional
coaxial   cable   assemblies   are   used.      These   cable
assemblies    shall    also    be    of    the    same    nominal
characteristic   impedance   as   the   system.      Standard
terminations  are  also  used,  such  as  shorts,  opens,  and
precision 50-ohm loads.
6. 4  RF  Load  Impedance  Simulator  —  A  device  that
can  be  attached  to  the  output  of  the  DUT  to  act  as  a
load   for   the   DUT   is   required   for   some   of   the
measurements.      The   load   simulator   shall   have   an
impedance  range  to  match  a  minimum  of  80%  of  the
tuning space of the matching network to be tested.
7  Safety Precautions
7. 1  Work should be conducted in accordance with local
safety   requirements   and   test   device   manufacturer
recommended safety procedures. The tests described in
this  document  involve  using  low  output  power  test
instrumentation (typically less than 10 milli-Watt).
7. 2    The  area  immediately  surrounding  the  Test  Setup
shall  be  keep  free  and  clear  of  unnecessary  equipment
and materials.


SEMI E115-0302
E
© SEMI 2002 3
8  Test Setup for Determining Load Impedance
and Efficiency
8. 1      Two   test   methods   are   described   for   analyzing
matching  networks.  The  first  method  for  determining
the   load   impedance   and   efficiency   measures   the
complex  conjugate  of  the  load  impedance  and  then
corrects  for  the  matching  network  losses  to  determine
the load impedance and efficiency.  A schematic of the
Test  Setup  is  shown  in  Figure  1.    The  method  uses  a
Network Analyzer to measure the reflection coefficient,
which   is   related   to   the   load   impedance,   and   the
transmission   coefficient,   which   is   related   to   the
efficiency. The Test Setup for this approach consists of
the  Network  Analyzer,  the  matching  network  to  be
tested  (DUT),  coaxial  test  cables,  and  the  appropriate
adapters  (if  any)  to  connect  the  DUT  to  the  Network
Analyzer.
8. 2      The   second   method   for   determining   the   load
impedance   and   efficiency   uses   a   Load   Impedance
Simulator   attached   to   the   output   of   the   matching
network.    A  schematic  of  the  Test  Setup  is  shown  in
Figure  2.    The  Test  Setup  for  this  approach  consists  of
the  Network  Analyzer,  the  matching  network  to  be
tested  (DUT),  the  load  simulator,  coaxial  test  cables,
the  appropriate  adapter  (if  any)  to  connect  the  DUT  to
the  Network  Analyzer,  and  the  appropriate  adapter  to
connect the load simulator to the DUT.
8. 3    Prior  to  making  any  measurements,  the  Network
Analyzer  shall  be  turned  on  and  allowed  to  warm  up
before the testing is to take place.  This time will allow
for  electronics  to  come  to  a  stable  operating  condition
for the measurements.
9  Test Procedure for Determining Load
Impedance and Efficiency
9. 1    Two  test  procedures  can  be  used  to  determine  the
load   impedance   and   efficiency   of   the   matching
network.    The  first  method  is  designed  for  “L”  type
matching  networks,  where  the  losses  are  dominated  by
the  loss  resistance  of  the  inductor  that  is  in  series  with
the load impedance. For the case where there are finite
losses in the shunt capacitor, the capacitor losses can be
lumped  in  with  the  inductor  losses  without  introducing
significant  error  (usually  less  than  0.5%  for  typical
values of < 0.1 ohms).  Lumping the total losses into an
overall  series  loss  will  also  cause  a  slight  shift  in  the
reactive part of the impedance, but the magnitude of the
shift    is    on    the    same    order    as    the    impedance
measurement uncertainty and can be ignored.
9. 2  The second method is designed for other matching
network  types  and  uses  a  load  simulator  to  determine
the load impedance and efficiency.
9. 3  Test  Method  1  for  Determining  Matching  Network
Load Impedance and Efficiency
9. 3.1    This  test  method  shall  be  used  for  “L”  type
matching  networks  of  the  type  shown  schematically  in
Figure 1, where the losses in the network are dominated
by  the  loss  resistance  of  the  inductor,  RLOSS.    The
efficiency for this type of matching network is given as
Eff=
RLOAD
RLOAD+RLOSS
(1)
where RLOAD   refers   to   the   real   part   of   the   load
impedance   and   RLOSS   refers   to   the   losses   of   the
matching network.
9. 3.2    For  this  type  of  network,  the  real  part  of  the
complex  conjugate  impedance,  Re(Zout*),  contains  the
real  part  of  the  load  impedance  plus  twice  the  loss
resistance, RLOSS.
Re(Zout*)=RLOAD+2RLOSS            (2)
9. 3.3    The  load  impedance,  therefore,  is  equal  to  the
complex   conjugate   impedance   less   twice   the   loss
resistance  (along  with  the  sign  change  of  the  reactive
part  of  the  conjugate  impedance).    For  example,  if  the
conjugate   impedance   is   measured   as   3   +   j20   and
RLOSS  is  determined  to  be  0.5  ohms,  then  the  load
impedance is 2 – j20 ohms.
9. 3.4    The  efficiency  of  the  matching  network  and  the
loss    resistance,    RLOSS,    can    be    determined    by
measuring  both  the  transmission  coefficient,  S21,  and
the reflection coefficient, S11, in the Test Setup shown
in   Figure   1.      Note   that   the   reflection   coefficient
measurement,   S11,   is   equivalent   to   measuring   the
complex   conjugate   impedance.      If   the   matching
network is considered as a test load with an impedance
equal  to  the  complex  conjugate  impedance,  then  the
loss  resistance  is  found  by  measuring  the  efficiency  of
the test load.  This efficiency, Effm, can be expressed as
Effm=
Re(
Zout*)−RLOSS
Re(Zout*)
(3)
where   Re(Zout*)   is   the   real   part   of   the   complex
conjugate   load   impedance,   Zout*.      The   measured
efficiency, Effm,  can  be  determined  from  the  S21  and
S11  measurements  (as  shown  later  in  this  section).
Thus,  the  measurements  of  Re(Zout*)  and  Effm  can  be
used to determine RLOSS as
)1(*)Re(EffmZoutRLOSS−×=             (4)
and  the  load  impedance  and  power  efficiency  of  the
matching network can then be determined from
Effc=
Re(Zout*)−2RLOSS
Re(Zout*)−RLOSS
(5)


SEMI E115-0302
E
© SEMI 2002 4
RLOAD=Re(Zout*)−2RLOSS            (6)

XLOAD=−Im(Zout*)                        (7)
where Effc  is  the  calculated  power  efficiency  based  on
the measurement of Re(Zout*) and Effm, RLOAD is the
real  part  of  the  load  impedance,  and  XLOAD  is  the
imaginary part of the load impedance.
9. 3.5    Calibrate  the  Network  Analyzer  at  the  desired
operating  frequency  (e.g.,  13.56  MHz).    The  Network
Analyzer    shall    be    calibrated    for    measuring    the
reflection  coefficient  at  test  Port  1  and  for  measuring
the transmission coefficient at test Port 2 (see Figure 1)
using  the  calibration  kit  provided  with  the  Network
Analyzer.    This  measurement  requires  measuring  the
S11  and  S21  S-parameters  and  requires  a  full  2-port
calibration.  The calibration shall be performed at fixed
frequency    (continuous-wave    operation)    using    the
lowest  bandwidth  possible  (typically  10  Hz).    The
calibration for each port shall include the additional test
cables and any additional adapters.
9. 3.6    After  calibration  of  the  Network  Analyzer,  the
cable connected to Port 1 of the Network Analyzer shall
be  connected  to  the  output  of  the  DUT.    The  cable
connected  to  Port  2  of  the  Network  Analyzer  shall  be
connected to the input of the DUT.
9. 3.7    The  tuning  elements  shall  be  moved  to  their
minimum positions before the measurement is initiated.
After  all  connections  are  visually  inspected  for  proper
contact  and  the  Network  Analyzer  has  stabilized,  the
value of the complex conjugate impedance (Zout*), the
magnitude  of  the  reflection  coefficient  (S11),  and  the
magnitude of the transmission coefficient (S21) shall be
recorded.
9. 3.8  The efficiency when the DUT is viewed as a test
load, Effm,  is  determined  from  both  the  reflection  and
transmission    coefficients.    The    efficiency    can    be
calculated  by  taking  the  ratio  of  the  output  power
divided  by  the  input  power.    The  output  power  is
simply (S21)
2
and the input power is (1-(S11)
2
).
()
()
2
2
111
21

S
S
Effm
−
=

Typically,  the  reflection  and  transmission  coefficients
are expressed in terms of dB (decibels). The conversion
between dB and efficiency is expressed as
)10/dBin  11S(
)10/dBin  21S(
101
10
−
=Effm

For example, if the transmission coefficient is measured
to   be   –10.2   dB   and   the   reflection   coefficient   is
measured  to  be  –0.61  dB,  then  Effm  would  be  0.7288.
The  efficiency  based  on  this  measurement  can  then  be
used to calculate RLOSS, Effc, RLOAD, and XLOAD by
using  the  equations  previously  shown.    All  of  these
calculated   numbers   using   equations   3–6   shall   be
recorded, as well as the positions of the tuning elements
of the matching network.
9. 3.9    For  the  next  measurement,  Tune  Position  shall
remain  fixed,  and  the  Load  Position  shall  be  increased
by an increment equal to no more than 10% of the full-
scale   range   of   the   tuning   element   position.      For
example, if the range of the tuning element is 10 volts,
then the tuning element should be moved in increments
of  no  greater  than  1  volt.  A  smaller  increment  shall  be
used for the case where the incremental change in Load
Position results in an incremental impedance change of
more   than   20%   of   the   total   impedance   variation
measured   by   the   full-scale   variation   of   the   Load
Position.    For  example,  if  the  real  part  of  the  load
impedance varies 15 ohms over the 10 volt variation of
the   Load   Position,   then   a   smaller   Load   Position
increment  shall  be  used  if  the  real  load  impedance
varies by more than 3 ohms between increments (0.2 ×
15  =  0.3).  After  the  tuning  elements  have  been  moved
to  their  new  values,  the  previous  measurement  steps
shall be repeated.
9. 3.10  After the Load Position has been varied over its
entire range, the Tune Position shall be increased by an
increment  equal  to  no  more  than  10%  of  the  full-scale
range   of   the   tuning   element   position.      The   Load
Position  shall  be  moved  back  to  its  minimum  position
and  the  above  steps  shall  be  repeated  until  the  entire
tuning range of the matching network is measured.
9. 3.11  The data shall be recorded and then presented in
both  graphical  and  tabular  forms.    An  example  of  a
typical impedance range graph is shown in Figure 3 for
the real load impedance and in Figure 4 for the reactive
load  impedance.    An  example  of  a  typical  efficiency
plot   is   shown   in   Figure   5.      An   example   of   data
presented in tabular form is shown in Table I.
9. 4  Test  Method  2  for  Determining  Matching  Network
Load Impedance and Efficiency
9. 4.1    This  test  method  shall  be  used  for  matching
networks that are not necessarily dominated by a series
loss  resistance  as  in  an  ideal  “L”  type  network.    This
method  uses  a  Load  Simulator(s)  attached  to  the  DUT
and  assumes  that  the  DUT  has  two  tuning  elements.
The  Load  Simulator(s)  shall  have  a  tuning  range  that
will  cover  no  less  than  80%  of  the  tuning  range  of  the
matching network.  Details of a typical Load Simulator
can be found in the Related Information section of this
Test  Method.    The  test  method  outlined  here  assumes
that  the  Load  Simulator(s)  contains  variable  tuning
elements  with  position  indicators  to  allow  the  load


SEMI E115-0302
E
© SEMI 2002 5
impedance  to  vary.    An  example  of  a  load  simulator
would  be  a  matching  network  used  in  reverse,  where
the  output  of  the  DUT  would  attach  to  the  output  of
another matching network.
9. 4.2  Calibrate  the  Network  Analyzer  at  the  desired
operating  frequency  (e.g.,  13.56  MHz).    The  Network
Analyzer    shall    be    calibrated    for    measuring    the
reflection  coefficient  at  test  Port  1  and  for  measuring
the transmission coefficient at test Port 2 (see Figure 1)
using  the  calibration  kit  provided  with  the  Network
Analyzer.    This  measurement  requires  measuring  the
S11  and  S21  S-parameters  and  requires  a  full  2-port
calibration.  The calibration shall be performed at fixed
frequency    (continuous-wave    operation)    using    the
lowest  bandwidth  possible  (typically  10  Hz).    The
calibration for each port shall include the additional test
cables and any additional adapters.
9. 4.3    After  calibration  of  the  Network  Analyzer,  the
test cable connected to Port 1 of the Network Analyzer
shall be connected to the input of the matching network
to  be  tested  (DUT).    The  Load  Simulator  shall  be
connected   to   the   output   of   the   DUT.      The   cable
connected  to  Port  2  of  the  Network  Analyzer  shall  be
connected to the output of the Load Simulator.
9. 4.4    The  tuning  elements  shall  be  moved  to  their
minimum  positions  (or  the  positions  that  can  match  to
lowest tuning point of the Load Simulator(s)) before the
measurement  is  initiated.    The  variable  elements  in  the
Load   Simulator   shall   be   adjusted   until   the   input
impedance  of  the  matching  network  is  matched  (i.e.,
input  impedance  =  50  ohms).  After  all  connections  are
visually  inspected  for  proper  contact  and  the  Network
Analyzer   has   stabilized,   the   value   of   the   input
impedance   and   the   magnitude   of   the   transmission
coefficient  (S21)  shall  be  recorded.    In  addition,  the
positions  of  the  tuning  elements  of  the  DUT  and  the
Load Simulator shall be recorded.
9. 4.5    The  load  impedance  of  the  DUT  corresponds  to
the  input  impedance  of  the  Load  Simulator.    At  this
point   in   the   process,   the   Load   Simulator   can   be
disconnected and its input impedance can be measured.
Alternatively,  the  input  impedance  can  be  measured
later  by  moving  the  Load  Simulator  tuning  element
values to the positions recorded in Section 9.4.4.
9. 4.6    The  efficiency  of  the  Test  Setup,  which  includes
the  DUT  and  the  Load  Simulator,  is  determined  from
the     transmission     coefficient.          Typically,     the
transmission  coefficient  is  expressed  in  terms  of  dB
(decibels).  The conversion between dB and percentage
is expressed as:

Efficiency(%)=100×10
( loss in dB/10)

For example, if the transmission coefficient is measured
to  be  –3  dB,  then  the  power  transfer  efficiency  would
be 50.1%.  In other words, 49.9% of the power is lost in
the Test Setup.
9. 4.7    The  efficiency  of  the  DUT  is  determined  by
dividing   the   efficiency   of   the   Test   Setup   by   the
efficiency  of  the  Load  Simulator.    For  example,  if  the
efficiency  of  the  Test  Setup  is  70%  and  the  efficiency
of the Load Simulator is 90%, then the efficiency of the
DUT  is  77.8%  (0.7/0.9).    The  efficiency  of  the  Load
Simulator   is   typically   determined   separately   (see
Related  Information  Section  at  the  end  of  this  Test
Method).
9. 4.8    For  the  next  measurement,  one  tuning  element
(element  1)  shall  remain  fixed,  and  the  other  tuning
element (element 2) shall be increased by an increment
equal to no more than 10% of the full scale range of the
tuning  element  position.    For  example,  if  the  range  of
the  tuning  element  is  10  volts,  then  the  tuning  element
shall be moved in increments of no greater than 1 volt.
A  smaller  increment  shall  be  used  for  the  case  where
the   incremental   change   in   tuning   element   position
results  in  an  incremental  impedance  change  of  more
than 20% of the total impedance variation measured by
the  full-scale  variation  of  the  tuning  element.    For
example,  if  the  real  part  of  the  load  impedance  varies
15  ohms  over  the  10  volt  variation  of  the  tuning
element,  then  a  smaller  tuning  element  increment  shall
be used if the real load impedance varies by more than
3 ohms between increments (0.2 × 15 = 0.3). After the
tuning  elements  have  been  moved  to  their  new  values,
the previous measurement steps shall be repeated.
9. 4.9    After  the  tuning  element  (element  2)  has  been
varied  over  its  entire  range,  the  other  tuning  element
(element 1) shall be increased by an increment equal to
no  more  than  10%  of  its  full-scale  range.    Tuning
element 2 shall be moved back to its minimum position
and  the  above  steps  shall  be  repeated  until  the  entire
tuning range of the matching network is measured.
9. 4.10  The data shall be recorded and then presented in
both  graphical  and  tabular  forms.    An  example  of  a
typical impedance range graph is shown in Figure 3 for
the real load impedance and in Figure 4 for the reactive
load  impedance.    An  example  of  a  typical  efficiency
plot   is   shown   in   Figure   5.      An   example   of   data
presented in tabular form is shown in Table 1.
10  Reporting Test Results
10. 1    Report  the  type  of  Network  Analyzer  and  the
details of the Network Analyzer parameters used for the
tests,  including  the  bandwidth,  the  number  of  data
points,  and  the  test  frequency.    Also  report  which  Test
Method was used.


SEMI E115-0302
E
© SEMI 2002 6
10. 2    Report  the  matching  network  load  impedance  and  efficiency  as  a  function  of  tuning  element  positions.    The
data shall be presented in both graphical and tabular forms.
11  Related Documents
11. 1  IEEE Standards
1

IEEE-STD-572  —  IEEE  Standard  for  Qualification  of  Class  1E  Connection  Assemblies  for  Nuclear  Power
Generating Stations
11. 2  Military Standards
2

MIL-PRF-31031A  —  General  Specification  for  Connectors,  Electrical,  Plugs  and  Receptacles,  Coaxial,  Radio
Frequency, High Reliability, for Flexible and Semirigid Cables.
MIL-STD-348 — General Specification for Radio Frequency Connector Interfaces.
MIL-STD-220B — Test Method Standard: Method of Insertion Loss Measurement.
RF outR
AB
Port 2Port 1
Port 1
RLOSS
LC2
C1
Input Connection
Output Connection
Matching Network
Port 2
Perform Calibrations
at End of Additional
Test Cables
Network
Analyzer

NOTE  1:  Both  the  Port  1  and  Port  2  outputs  need  to  be  used  for  the  measurement.    Additional  test  cables  are  needed  for  the
transmission calibration between the two ports.  The output connection of the matching network to be tested (DUT) attaches to
Port 1 and the input connection of the matching network attaches to Port 2 of the Network Analyzer.
Figure 1
Schematic of the Test Method 1 Network Analyzer Test Setup for the Load Impedance and Efficiency
Measurement for “L” Type Matching Networks


SEMI E115-0302
E
© SEMI 2002 7

RF outR
AB
Port 2Port 1
Port 1
Port 2
Perform Calibrations
at End of Additional
Test Cables
RLOSS
LC2
C1
Load Simulator
Input Connection
Output Connection
Matching Network
Network
Analyzer

NOTE 1:  Both the Port 1 and Port 2 outputs need to be used for the measurement and additional test cables are needed for the
transmission  calibration  between  the  two  ports.    The  input  connection  of  the  matching  network  to  be  tested  (DUT)  attaches  to
Port  1,  the  output  connection  of  the  matching  network  attaches  to  the  input  of  the  Load  Simulator,  and  the  output  of  the  Load
Simulator attaches to Port 2 of the Network Analyzer.
Figure 2
Schematic of the Test Method 2 Network Analyzer Test Setup for the Load Impedance and Efficiency
Measurement




SEMI E115-0302
E
© SEMI 2002 8
0. 0
2. 0
4. 0
6. 0
8. 0
10. 0
0246810
Real Load Impedance (ohms)
Load Position (volts)
Tune Position Fixed at 5.0 Volts

NOTE 1: For this example, the full-scale voltage for both the Tune and Load Positions is 10 V (i.e., Tune = 5.0 V corresponds to
50% of full scale).
Figure 3
Example Plot of the Real Part of the Load Impedance as a Function of the Load Position Tuning Element in
the Matching Network



-35.0
-30.0
-25.0
-20.0
-15.0
-10.0
0246810
Tune = 3.0 volts
Tune = 5.0 volts
Tune = 7.0 volts
Reactive Load Impedance (ohms)
Load Position (volts)


NOTE 1: The Tune Position is at the indicated fixed value for each set of data.  For this example, the full scale voltage for both
the Tune and Load Positions is 10 V (i.e., Tune = 3.0 V corresponds to 30% of full scale).

Figure 4
Example Plot of the Reactive Part of the Load Impedance as a Function of the Load Position Tuning Element
in the Matching Network



SEMI E115-0302
E
© SEMI 2002 9
50. 0
60. 0
70. 0
80. 0
90. 0
100. 0
0246810
Tune = 3.0 volts
Tune = 5.0 volts
Tune = 7.0 volts
Power Efficiency (%)
Load Position (volts)

NOTE 1: The Tune Position is at the indicated fixed value for each set of data.  For this example, the full scale voltage for both
the Tune and Load Positions is 10 V (i.e., Tune = 3.0 V corresponds to 30% of full scale).

Figure 5
Example Plot of the Power Efficiency as a Function of the Load Position Tuning Element in the Matching
Network



Table 1  Example Data Table Showing the Matching Network Load Impedance and Power Efficiency as a
Function of the Positions of the Tuning Elements
Load
Position (Volts)
Tune
Position (Volts)
Real Load
(ohms)
Reactive Load
(ohms)
Efficiency (%)
0                                       3                                       0.74                                       -31.75                                       61.51
1                                       3                                       0.91                                       -31.23                                       66.36
2                                       3                                       1.12                                       -30.64                                       70.86
3                                       3                                       1.38                                       -29.96                                       75.04
4                                       3                                       1.72                                       -29.18                                       78.88
5                                       3                                       2.15                                       -28.26                                       82.38
6                                       3                                       2.72                                       -27.17                                       85.56
7                                       3                                       3.50                                       -25.87                                       88.39
8                                       3                                       4.59                                       -24.31                                       90.90
9                                       3                                       6.18                                       -22.42                                       93.07
10                                      3                                      8.57                                      -20.15                                      94.91
NOTE  1:  For  this  example,  the  full-scale  voltage  for  both  the  Tune  and  Load  Positions  is  10  V  (i.e.,  Tune  =  3.0  V  corresponds  to  30%  of  full
scale).  This example only shows data for a fixed Tune position of 3.0 volts.  Data is also required at a Tune position of 0.0 V, 1.0 V, etc.



SEMI E115-0302
E
© SEMI 2002 10
RELATED INFORMATION 1
LOAD SIMULATORS
NOTE:  This related information is not an official part of SEMI E115 and was derived RF Diagnostic Task Force in
North America.  This related information was approved for publication by full letter ballot on November 27, 2001.
R1-1  Types of Load Simulators
R1-1.1    Load  Simulators  are  used  to  present  a  known
load  impedance  to  a  matching  network.    One  example
of a Load Simulator would be a matching network used
in reverse.  This section will describe a Load Simulator
that  can  be  used  with  typical  matching  networks  that
operate at 13.56 MHz with capacitive load impedances.
These   applications   include   those   networks   used   in
parallel-plate  capacitively  coupled  plasmas  and  also
those  networks  used  in  wafer  bias  applications,  where
the   plasma   is   mostly   sustained   by   another   power
source,  such  as  an  inductively  coupled  plasma  or  a
microwave ECR (electron cyclotron resonance) plasma.
R1-1.2    The  typical  impedance  that  is  seen  by  the
matching  network  depends  on  the  geometry  of  the
applicator   (its   capacitance   to   ground),   the   type   of
plasma  (gases),  the  operating  pressure,  and  the  density
of   the   plasma.      Typical   impedances   seen   by   the
matching    networks    operating    at    13.56    MHz    in
capacitive-loading  applications  have  a  real  part  in  the
range of 0.5 to 10 ohms and a reactive part in the range
of  –10  to  –50  ohms.    If  a  transmission  line  is  used
between  the  output  of  the  matching  network  and  the
applicator,  the  impedance  will  get  transformed.    The
amount  of  transformation  will  depend  on  the  length  of
the transmission line, but in general the effect will be to
decrease the real part of the impedance and to decrease
the reactive part of the load (make it less negative).  If
the  transmission  line  is  long  enough,  the  impedance
seen by the matching network may even look inductive
instead   of   capacitive   because   of   the   impedance
transformation.
R1-2  Load Simulator Design
R1-2.1  A typical design for a Load Simulator operated
at  13.56  MHz  uses  two  capacitors  and  a  50-ohm  load.
A  schematic  is  shown  in  Figure  R1-1.    The  Load
Simulator consists of a series capacitor, C2, and a shunt
capacitor, C1.  The C1 capacitor is in parallel with a 50-
ohm  load.    The  50-ohm  load  can  be  an  input  port  to  a
Network  Analyzer  or  a  high-power  50-ohm  load  that
can be used with high-power testing.
R1-2.2    A  picture  of  a  Load  Simulator  of  this  type  of
design is shown in Figure R1-2.  Two vacuum variable
capacitors  are  used,  with  a  copper  strap  connecting
them.    The  capacitors  shown  in  the  figure  are  variable
from 8 to 1000 pF.  Additional fixed capacitors can be
easily  added  to  the  circuit  to  expand  the  operating
range.      The   strap   connecting   the   capacitors   adds
roughly  100  nH  of  inductance  to  the  series  part  of  the
circuit for this example.
R1-2.3    The  impedance  range  for  this  type  of  Load
Simulator is fairly broad.  A plot of the real part of the
input  impedance  as  a  function  of  the  value  of  the  C1
shunt capacitor is shown in Figure R1-3.  The real part
of the load varies from close to 50 ohms to around 1.2
ohms  at  a  C1  capacitance  of  1500  pF.    A  plot  of  the
reactive part of the input impedance is shown in Figure
R1-4.  The reactance can be varied as a function of both
the C1 and C2 capacitances.  A reactance range of –5 to
–100  ohms  is  easily  achieved  for  a  C2  capacitance
variation of 1500 pF to 100 pF.
R1-3  Measurement of Load Simulator
Impedance and Efficiency
R1-3.1    The  impedance  and  the  efficiency  of  the  Load
Simulator can be measured in much the same way as a
matching network.  The test setup is shown in Figure R-

# 5

5.  A special fixture may be required to adapt the input
connection   of   the   Load   Simulator   to   a   coaxial
connector.
R1-3.2    Calibrate  the  Network  Analyzer  at  the  desired
operating  frequency  (e.g.,  13.56  MHz).    The  Network
Analyzer    shall    be    calibrated    for    measuring    the
reflection  coefficient  at  test  Port  1  and  for  measuring
the transmission coefficient at test Port 2 (see Figure R-
1)  using  the  calibration  kit  provided  with  the  Network
Analyzer.    This  measurement  requires  measuring  the
S11  and  S21  S-parameters  and  requires  a  full  2-port
calibration.  The calibration shall be performed at fixed
frequency    (continuous-wave    operation)    using    the
lowest  bandwidth  possible  (typically  10  Hz).    The
calibration for each port shall include the additional test
cables and any additional adapters.
R1-3.3    After  calibration  of  the  Network  Analyzer,  the
cable connected to Port 1 of the Network Analyzer shall
be  connected  to  the  input  of  the  Load  Simulator.    The
cable connected to Port 2 of the Network Analyzer shall
be connected to the output of the Load Simulator.
R1-3.4  The tuning elements (variable capacitors) shall
be   moved   to   their   minimum   positions   before   the
measurement   is   initiated.   After   all   connections   are
visually  inspected  for  proper  contact  and  the  Network
Analyzer   has   stabilized,   the   value   of   the   input


SEMI E115-0302
E
© SEMI 2002 11
impedance,  the  magnitude  of  the  reflection  coefficient
(S11), and the magnitude of the transmission coefficient
(S21)  shall  be  recorded.    In  addition,  the  positions  of
the  tuning  elements  of  the  Load  Simulator  shall  be
recorded.
R1-3.5      The   efficiency   of   the   Load   Simulator   is
determined  from  both  the  reflection  and  transmission
coefficients. The efficiency can be calculated by taking
the  ratio  of  the  output  power  divided  by  the  input
power.    The  output  power  is  simply  (S21)
2
and  the
input power is (1-(S11)
2
).
()
()
2
2
111
21
S
S
iencyator EfficLoad Simul
−
=

Typically,  the  reflection  and  transmission  coefficients
are expressed in terms of dB (decibels). The conversion
between dB and efficiency is expressed as
)10/dBin  11S(
)10/dBin  21S(
101
10

−
=EfficiencySimulator Load

)10/dBin  11S(
)10/dBin  21S(
101
10
100%
−
×=TransferPower

For example, if the transmission coefficient is measured
to be –10 dB and the reflection coefficient is measured
to be –0.5 dB, then the power transfer efficiency would
be 91.95%.  In other words, 8.05% of the power is lost
in the Load Simulator.
R1-3.6    For  the  next  measurement,  one  tuning  element
shall  remain  fixed  (C2),  and  the  other  tuning  element
(C1)  shall  be  increased  by  an  increment  equal  to  no
more  than  10%  of  the  full  scale  range  of  the  tuning
element  position.    After  the  tuning  elements  have  been
moved  to  their  new  values,  steps  3.4  and  3.5  shall  be
repeated.  This process shall be repeated until the tuning
element (C1) has covered its entire range.
R1-3.7    After  the  tuning  element  (C1)  has  been  varied
over its entire range, the other tuning element (C2) shall
be  increased  by  an  increment  equal  to  no  more  than
10%  of  its  full-scale  range.    The  C1  tuning  element
shall  then  be  moved  back  to  its  minimum  position  and
the  above  steps  (R1.3.4–R1.3.6)  shall  be  repeated  until
the  entire  tuning  range  of  the  matching  network  is
measured.

Load Simulator
Input Connection
Output Connection
C2
C1
50-Ohm Load

NOTE 1:  The input connection is attached to a series variable capacitor, C2.  The shunt variable capacitor, C1, is in parallel with
a 50-ohm load.
Figure R1-1
Schematic of a Load Simulator


SEMI E115-0302
E
© SEMI 2002 12

Series Capacitor Strap Input














Rotating
Shafts
















Shunt Capacitor Output



NOTE 1: Picture of a Load Simulator showing the variable capacitors.  The capacitors are connected together by a strap that has
an inductance of around 100 nH.  The values of the capacitors are varied by rotating their shafts.  The ends of the shafts are
connected to a dial indicator to measure their positions.

Figure R1-2
Picture of a Load Simulator Showing the Variable Capacitors



SEMI E115-0302
E
© SEMI 2002 13
0. 0
10. 0
20. 0
30. 0
40. 0
50. 0
050010001500
Real Impedance (ohms)
C1 Capacitance (pF)


NOTE 1: The real impedance varies from 1.2 ohms to close to 50 ohms.

Figure R1-3
Example Plot of the Real Part of the Load Impedance as a Function of the C1 Shunt Capacitor in the Load
Simulator





-40.0
-35.0
-30.0
-25.0
-20.0
-15.0
-10.0
-5.0
0. 0
050010001500
C2 = 500 pF
C2 = 1000 pF
C2 = 1500 pF
Reactive Impedance (ohms)
C1 Capacitance (pF)

NOTE 1: The C2 capacitance is at the indicated fixed value for each set of data.  For this example, the reactive impedance varies
from around –40 ohms to –5 ohms.  Decreasing C2 to 100 pF reduces the reactance to less than –100 ohms.

Figure R1-4
Example Plot of the Reactive Part of the Load Impedance as a Function of the C1 Shunt Capacitance in the
Load Simulator


SEMI E115-0302
E
© SEMI 2002 14
RF outR
AB
Port 2Port 1
Port 1
Port 2
Perform Calibrations
at End of Additional
Test Cables
Load Simulator
Input Connection
Output Connection
C2
C1
Network
Analyzer


NOTE 1: Both the Port 1 and Port 2 outputs need to be used for the measurement.  Additional test cables are needed for the
transmission calibration between the two ports.  The input connection of the Load Simulator attaches to Port 1 of the Network
Analyzer.  The output connection of Load Simulator attaches to Port 2 of the Network Analyzer.

Figure R1-5
Schematic of a Load Simulator Test Setup for the Load Impedance and Efficiency Measurement



NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer's  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature,  respecting  any  materials  or  equipment  mentioned  herein.  These  standards  are  subject  to  change  without
notice.
By  publication  of  this  standard,  Semiconductor  Equipment  and  Materials  International  (SEMI)  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  items  mentioned  in  this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights are entirely their own responsibility.
Copyright  by  SEMI®  (Semiconductor  Equipment  and  Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden,  without  express  written
consent of SEMI.


SEMI E116-0705 © SEMI 2002, 2005 1
SEMI E116-0705
PROVISIONAL SPECIFICATION FOR EQUIPMENT PERFORMANCE
TRACKING
This  specification  was  technically  approved  by  the  global  Information  &  Control  Committee.    This  edition
was  approved  for  publication  by  the  global  Audits  and  Reviews  Subcommittee  on  April  7,  2005.    It  was
available  at  www.semi.org  in  June  2005  and  on  CD-ROM  in  July  2005.    Originally  published  July  2002;
previously published November 2004.
1  Purpose
1. 1  This  document  provides  specification  for  implementing  basic  equipment  performance  tracking  for  production
equipment.    Provisions  in  this  document  enable  the  host  computer  to  track  basic  equipment  performance  in  an
automated  and  consistent  matter,  without  operator  or  host  input.    This  document  provides  specification  for
equipment suppliers to:
• Track basic equipment states (no operator or host input required).
• Track basic equipment states in a modular manner, for both major modules and the overall equipment.
• Report basic equipment state changes to a host computer, at both module and equipment level.
• Report equipment’s time in state to a host computer, at both module and equipment level.
• Report reasons to a host computer for why equipment is blocked from performing its task, at both module and
equipment level.
1. 2  Equipment  users  require  the  ability  to  track  equipment  performance  without  dependence  on  user  input  to
eliminate inaccuracies due to incorrect or untimely input from the user.  The ability to track equipment performance
without  user  input  is  essential  in  300  mm  wafer  factories  where  operational  scenarios  require  minimal  manual
interaction.    EPT  defines  concepts,  behavior,  and  message  services  that  enable  the  host  computer  to  obtain  the
equipment data required for equipment performance tracking in an automated and consistent matter without operator
or host input.
1. 3  EPT  enables  factory  managers  to  identify  the  current  states  of  factory  equipment,  both  at  the  equipment  level
and  at  the  module  level  (e.g.,  processing  chambers),  without  dependence  on  user  input.    EPT  enables  factory
engineers  to  evaluate  the  time  that  equipment  and  modules  spent  in  different  states  and  identify  areas  for
improvement.  EPT enables factory engineers to obtain directly from the equipment the reasons why the equipment
or  module  is  prevented  from  performing.    EPT  provides  industrial  engineers  the  equipment  data  which,  when
combined with external data from the Manufacturing Execution System (MES),  will enable accurate calculation of
SEMI  E10  states  and  SEMI  E79  metrics  at  the  equipment-level  and  the  module-level.    EPT  enables  automation
engineers to develop reusable host interfaces by using a standardized collection event and data variables to collect
equipment state data.
2  Scope
2. 1  The Scope of this standard is to define equipment behavior states and the data required to track basic equipment
performance  for  production  equipment.  These  requirements  are  intended  to  facilitate  equipment-level  and  module-
level  state  tracking  and  to  communicate  state  information  to  the  host  for  simple  equipment  performance  tracking,
without requiring host or operator input.
2. 2  Specifically, this document provides:
• An Equipment Performance Tracking (EPT) state model that defines triggers for state changes.
• Specification  of  data  variables  required  to  communicate  basic  equipment  performance  data  to  the  host
computer.
• Specification of event messages used to communicate basic equipment performance data to the host computer.
• Requirements for EPT compliance.


SEMI E116-0705 © SEMI 2002, 2005 2
2. 3  This standard specifies the concepts, behavior, and message services that enable the host computer to obtain the
equipment  data  required  for  equipment  performance  tracking  in  an  automated  and  consistent  manner,  without
operator or host input.  It does not specify the report of SEMI E10 states from the equipment to a host computer, as
this information requires user input and is already specified by SEMI E58.
2. 4  This  standard  does  not  conflict  with  SEMI  E58  nor  does  it  inhibit  the  equipment’s  ability  to  report  out  SEMI
E10 states via SEMI E58.
2. 5  This  standard  is  a  building  block  towards  SEMI  E10  and  SEMI  E79  by  providing  accurate  equipment
information  required  for  SEMI  E10  and  SEMI  E79  metrics,  without  dependence  on  operator  or  host  input,
eliminating  inaccuracies  due  to  incorrect  or  untimely  input  from  the  user.    EPT  assists  both  SEMI  E10  and  SEMI
E79 by providing a modular approach to equipment performance tracking, allowing the state of the equipment to be
determined  by  the  states  of  its  major  modules.    EPT  assists  SEMI  E79  by  providing  task-level  detail  of  the
equipment or module’s current activity, allowing performance metrics to be tracked at the task level.
2. 6  This  is  a  provisional  standard.    In  order  to  have  the  provisional  status  removed,  the  following  areas  must  be
completed:
• Equipment Interlock Information
• Equipment Process Monitoring Information
• Equipment Maintenance Trigger Information
• Application of EPT State Model to load ports and internal buffers
NOTICE:  This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory or other limitations prior to use.
3  Limitations
3. 1  This  standard  applies  to  semiconductor  production  equipment.    Other  types  of  equipment  have  not  been
examined.  However, it may be used for other types of equipment when applicable.
4  Referenced Standards and Documents
4. 1  SEMI Standards
SEMI   E10   ―   Specification   for   Definition   and   Measurement   of   Equipment   Reliability,   Availability,   and
Maintainability (RAM)
SEMI E39 — Object Services Standard: Concepts, Behavior, and Services
SEMI E30 ― Generic Model for Communications and Control of Manufacturing Equipment (GEM)
SEMI  E58  ―  Automated  Reliability,  Availability,  and  Maintainability  Standard  (ARAMS):  Concepts,  Behavior,
and Services
SEMI E79 ― Standard for Definition and Measurement of Equipment Productivity
SEMI E90 ― Specification for Substrate Tracking
SEMI E98 ― Provisional Standard for the Object-Based Equipment Model (OBEM)
SEMI 101 ― Provisional Guide for EFEM Functional Structure Model
NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.


SEMI E116-0705 © SEMI 2002, 2005 3
5  Terminology
5. 1  Abbreviations and Acronyms
5. 1.1  EFEM — Equipment Front End Module
5. 1.2  EPT  — Equipment Performance Tracking
5. 1.3  GEM — Generic Equipment Model [SEMI E30]
5. 2  Definitions
5. 2.1  EPT module — a major component of the equipment that affects processing or throughput.
5. 2.1.1  For purposes of simplification, an EPT module executes one and only one task at a time.  Each EPT Module
has an EPT state model that is maintained by the equipment.
5. 2.2  EPT state — the state of IDLE, BUSY, or BLOCKED within EPT state model.
5. 2.3  event report — a message the equipment sends to the host on the occurrence of a collection event.
5. 2.4  fault — an exception.
5. 2.5  host — the factory computer system or an intermediate system that represents the factory and the   operator to
the equipment.
5. 2.6  intended  function  —  a  manufacturing  function  that  the  equipment  was  built  to  perform.    This  includes
transport  functions  for  transport  equipment,  measurement  functions  for  metrology  equipment,  as  well  as  process
functions  such  as  physical  vapor  deposition  and  wire  bonding.    Complete  equipment  may  have  more  than  one
intended function. [SEMI E58]
5. 2.7  material  —    the  basic  unit  of  process.    For  the  purposes  of  this  standard,  material  is  a  set  of  one  or  more
substrates.
5. 2.8  module  —  a  major  component  of  equipment  that  contains  at  least  one  material  location  and  performs  some
task on material. Equipment modules may be aggregates of equipment subsystems, I/O devices, and other modules.
[SEMI E98]
5. 2.9  substrate  —  the  basic  unit  of  material  on  which  work  is  performed  to  create  a  product.    Examples  include
wafers, die, plates used for masks, flat panels, circuit boards, and leadframes. [SEMI E90]
5. 2.10  task — a planned and repeatable activity with an expected duration and a definite beginning and end (e.g.,
Move  wafer  from  cassette  to  stage,  Pre-align  wafer,  Align  reticle,  Preheat  chamber,  Increase  vacuum).  NOTE:
Actual durations may vary.
5. 2.11  trigger —  an  event  that  causes  a  change  in  the  state  of  the  equipment.    Examples  are  changes  in  sensor
readings, alarms, and messages received from the host, and operator commands.
5. 2.12  unit ⎯
any  wafer,  die,  packaged  device,  or  piece  thereof  (included  product  and  non-product units). [SEMI
E10]
5. 2.13  user  —  any  entity  interacting  with  the  equipment,  either  locally  as  an  operator  or  remotely  via  the  host.
From the equipment’s viewpoint, both the operator and the host represent the user. [SEMI E58]
6  Requirements
6. 1  An  EPT  compliant  implementation  requires  provision  of  certain  capabilities  defined  by  other  standards:
accessibility  to  status  information,  event  reporting,  alarm  management,  and  provision  of  an  internal  time-and-date
clock.    These  requirements  may  be  satisfied  through  compliance  to  SEMI  E30  for  the  following  sets  of
requirements:
• Clock Services
• Event Notification
• Status Data Collection


SEMI E116-0705 © SEMI 2002, 2005 4
• Equipment Constants
• Alarm Management
6. 2  An  EPT  compliant  implementation  requires  a  documented  list  of  all  EPT  modules  contained  within  the
equipment.
6. 3  An EPT compliant implementation requires an EPT state model for the equipment and for each EPT module.
6. 4  Each EPT module shall have a documented list of tasks that the module may perform.
7  Conventions
7. 1  This document follows the conventions for state model methodology and service definitions used by the SEMI
standards referenced in §4.
7. 2  State Model Methodology
7. 2.1  A state model has three elements: definitions of each state and sub-state, a diagram of the states showing the
valid  transitions  between  states,  and  a  corresponding  state  transition  table  that  defines  the  triggers  for  each
transition.    The  diagram  of  the  state  model  uses  the  Harel  State  Chart  notation.    An  overview  of  this  notation  is
presented  in  an  Appendix  of  SEMI  E30.    The  definition  of  this  notation  is  presented  in  Science  of  Computer
Programming 8, “Statecharts: A Visual Formalism for Complex Systems”, by D. Harel, 1987.
7. 2.2  Transition tables are provided in conjunction with the state diagrams to explicitly describe the nature of each
state  transition.    A  transition  table  contains  columns  for  Transition  number,  Previous  State,  Trigger,  New  State,
Actions,  and  Comments.    The  “trigger”  (column  3)  for  the  transition  occurs  while  in  the  “previous”  state.    The
“actions” (column 5) includes a combination of:
1)  Actions taken upon exit of the previous state.
2)  Actions taken upon entry of the new state.
3)  Actions taken that are most closely associated with the transition.
7. 2.3  No differentiation is made between these cases.

# #

# PREVIOUS
STATE
TRIGGER NEW STATE ACTIONS COMMENTS
Transition #

7. 3  Variable Data Item Definition
7. 3.1  The variable item dictionary contained in this document defines the variable name, description, type (format),
access (read/write or read only), and comments about the variable.  This is depicted in the format of the following
table:

VARIABLE NAME DESCRIPTION TYPE ACCESS COMMENT


7. 4  Event Description
7. 4.1  The  collection  event  description  table  contained  in  this  document  includes  the  event  name,  the  state  model
transition, the description, and the data required for the event.  This is depicted in the format of the following table:

EVENT NAME STATE MODEL
TRANSITION
NUMBER
DESCRIPTION REQUIRED DATA




SEMI E116-0705 © SEMI 2002, 2005 5
8  Overview
8. 1  This  section  defines  the  concepts  that  enable  EPT  to  provide  information  required  for  determining  equipment
performance.
8. 2  Equipment  processing  times,  including  throughput  and  cycle  times,  are  determined  by  two  factors:  (1)  the
sequence of tasks performed by the equipment’s EPT modules, including the number of each task performed, as well
as the series and parallel relationships between tasks, and (2) the execution time of each individual task. By tracking
equipment systems in terms of modules that perform tasks, it will be possible to precisely identify the affect of both
factors toward overall system performance.
8. 3  EPT enables tracking to this level of detail by introducing the concept of an EPT module and the concept of a
task.    EPT-compliant  equipment  are  required  to  report  events  according  to  a  breakdown  of  equipment  operations
into tasks and EPT modules.  An EPT module is an equipment component that affects processing or throughput, and
is  capable  of  executing  only  one  task  at  a  time.    Examples  of  EPT  modules  include  process  stations,  process
chambers, wafer handling systems, etc.  A task is a planned and repeatable activity with an expected duration and a
definite beginning and end.  Examples of tasks include the following:
• Move wafer from cassette to stage
• Pre-align wafer
• Align reticle
• Preheat chamber
• Increase vacuum etc.
8. 4  EPT-compliant equipment consist of EPT modules that perform tasks.  Thus, the state of the equipment can be
effectively  modeled  as  a  composition  of  the  states  of  the  EPT  modules.  In  addition,  EPT  provides  detailed
information required for performance tracking by providing the task-level details for each EPT module.
8. 5  EPT  modules  and  tasks  are  to  be  defined  such  that  each  EPT  module  executes  only  one  task  at  a  time.    An
example  is  given  in  Related  Information  §R1-7.    Each  equipment  system  must  have  defined  at  least  as  many  EPT
modules as tasks that may be performed simultaneously by that system.
8. 6  Each  task  should  be  defined  such  that  the  units  involved  (e.g.,  wafers,  substrates,  reticles),  the  EPT  modules
involved (e.g., process station, robot, etc.), and the task type (e.g., “process”, “support”, etc.) are constant throughout
the duration of the task. A change in any of the following items should result in the start of a new task or completion
of current task:
• Change in material involved (e.g., arrival of wafer, removal of wafer)
• Change of EPT modules involved (e.g., robot moves wafer,  chamber processes wafer)
• Change in task type (e.g., purge recipe followed by production recipe)
NOTE 1:   It is not practical for equipment to define tasks or modules at an indefinite level of detail. It is therefore recommended
that in each instance for which the material involved, the EPT modules involved, and the task types are all constant, events for
only  one  task  should  be  reported.  Any  further  breakdown  is  not  required  for  EPT  compliance.  EPT  places  no  limitations  on
supplemental event reporting within any task. However, these supplemental events should not be reported as EPT events.
9  EPT State Model
9. 1  This section defines the basic Equipment Performance Tracking State Model, which is applied to the equipment
and its EPT modules.
9. 2  EPT State Model Requirements
9. 2.1  The EPT state model is intended to capture the different states of the equipment and its EPT modules from an
operational point of view:
• EPT module busy executing a task.
• EPT module blocked from executing a task.


SEMI E116-0705 © SEMI 2002, 2005 6
• EPT module idle.
9. 2.2  The equipment shall maintain an EPT state model for each major module (e.g., process stations and chambers,
wafer  handling  systems,  etc.)  through  which  a  unit  passes  throughout  the  entire  equipment  from  removal  of  units
from the carrier to the return of units to the carrier.
9. 2.3  The  equipment  shall  maintain  an  EPT  state  model  for  any  major  component  of  the  equipment  that  impacts
processing and throughput.
9. 2.4  The equipment shall maintain its own EPT state model for the overall equipment.
9. 2.5  The equipment is responsible for communicating all EPT state transitions.
9. 2.6   The EPT state model can be applied to the Equipment Front-End Module (EFEM).
9. 2.7  There  are  two  types  of  EPT  Modules:  (1)  Production  EPT  modules,  and  (2)  EFEM/LoadPort  EPT  modules.
Both types have a module-level EPT State Machine.
9. 3  EPT State Model Diagram
9. 3.1  Figure 1 shows the EPT state module diagram.
1
9
4
2
3
7
8
5
6
IDLE
BLOCKEDBUSY
EPT State Model
C

Figure 1
Equipment Performance Tracking State Model
9. 4  EPT State Definitions
This section describes the EPT states.
9. 4.1  IDLE
9. 4.1.1  EPT Module — The following conditions are required for the module to be in the IDLE state:
• No material is present in the module and
• The module is not executing a task and
• No fault condition exists in the module that prevents it from starting a new task.
9. 4.1.2  Equipment — The following conditions are required for the equipment to be in the IDLE state:


SEMI E116-0705 © SEMI 2002, 2005 7
• No BLOCKED EPT modules prevent an EPT module from starting a new task, and
• There is no EPT module in the BUSY state with a task type of 1, 2, 3, 4 or 5.
9. 4.1.3  For both the equipment and modules the following conditions may
exist in the IDLE State:
• The  equipment  or  module  is  maintaining  and  monitoring  environmental  requirements  (e.g.,  background
temperature, particle monitoring, etc).
9. 4.2  BUSY
9. 4.2.1  EPT Module — The following conditions are required for the module to be in the BUSY state:
• The module is executing a task and
• No fault condition exists in the module that prevents the execution of a task.
9. 4.2.2  Equipment — The following condition is required for the equipment to be in the BUSY state:
• At least one EPT module is BUSY with a task type of 1, 2, 3, 4, or 5.
9. 4.2.3  For both the equipment and modules the following conditions may
exist in the BUSY State:
• Material is present.
9. 4.3  BLOCKED
9. 4.3.1  EPT  Module  —  One  or  more  of  the  following  conditions  are  required  for  the  module  to  be  in  the
BLOCKED state:
• Conditions exist that do not allow the EPT module to continue or start execution of a task:
• A fault condition(s) exists that prevents the EPT module from completing its task.
• A fault condition(s) exists that prevents the EPT module from starting a new task.
• The EPT module is pausing (or aborting) as the result of a pause (or abort) directive.
• The EPT module has paused its task and is awaiting a resume directive.
• The EPT module fails to initialize upon start-up.
9. 4.3.2  Equipment — The following condition is required for the EPT equipment to be in the BLOCKED state:
• No EPT module is BUSY with task type of 1, 2, 3, 4 or 5, and
• At  least  one  BLOCKED  EPT  module  prevents  any  EPT  module  from  starting  a  new  task  or  completing  a
current task.
9. 4.3.3  For both the EPT equipment and modules the following conditions may
exist in the BLOCKED State:
• Material is present.
9. 5  EPT State Transition Table – Module Level
9. 5.1  This section defines the state transitions for the EPT modules within the equipment.
9. 5.2  For each status variable updated with the event change, the corresponding event variable shall also be updated
(see Table 4).


SEMI E116-0705 © SEMI 2002, 2005 8
Table 1  Basic EPT State Transitions – Module Level
# PREVIOUS
STATE
TRIGGER
NEW STATEACTIONS COMMENTS
1    (No state) EPT Module
i
initialization
completed.
IDLE

[OR]

BLOCKED


• No EPT event is triggered
• EPTState
i
= IDLE or
BLOCKED
• PreviousEPTState
i
= NoState
• PreviousTaskName
i
= “No
Task”
• PreviousTaskType
i
= 0
• EPTStateTime
i
= 0
• If no Fault
conditions exist
and no material is
present, transition
to IDLE
• If Fault conditions
exist, or EPT
module cannot be
initialized, then
transition to
BLOCKED
• If Material is
present, then
transition to
BLOCKED
2    IDLE    EPT    Module
i
starts
execution of a new task.
BUSY

• EPTStateChange
i
event is
triggered
• EPTStateTime
i
is calculated
• EPTState
i
= BUSY
• PreviousEPTState
i
=IDLE
• TaskName
i
is set
• TaskType
i
is set

3    BUSY    EPT    Module
i
completes
execution of task.

[AND]

Material is removed from
the EPT Module
i
.
IDLE
• EPTStateChange
i
event is
triggered
• EPTStateTime
i
is calculated
• EPTState
i
= IDLE
• PreviousEPTState
i
=BUSY
• TaskName
i
= “No Task”
• TaskType
i
= 0
• PreviousTaskName
i
is set
• PrevoiusTaskType
i
is set

4    BUSY    EPT    Module
i
starts
execution of a new task
upon the normal completion
of the previous task.
BUSY
• EPTStateChange
i
event is
triggered
• TaskName
i
is set
• TaskType
i
is set

EPTStateTime
i
does not
change.  Thus when the
module transitions out
of BUSY state, the
value of EPTStateTime
i

will reflect the total
time the module was
BUSY.
PreviousEPTState
i
does
not change.  Thus,
PreviousEPTState
i
will
continue to reflect the
state of the module
before it was BUSY.


SEMI E116-0705 © SEMI 2002, 2005 9
# PREVIOUS
STATE
TRIGGER
NEW STATEACTIONS COMMENTS
5    BUSY A pause command is
received that pauses the EPT
Module
i
.

[OR]

An abort command is
received that aborts the EPT
Module
i
.

[OR]

A Fault condition occurs
that prevents the EPT
Module
i
from executing its
task.

BLOCKED
• EPTStateChange
i
event is
triggered
• EPTStateTime
i
is calculated
• BlockedReason
i
is set
• BlockedReasonText
i
is set
• EPTState
i
=BLOCKED
• PreviousEPTState
i
=BUSY
TaskName
i
and
TaskType
i
do not
change.  The variables
continue to reflect the
information of the task
that is currently blocked
from executing.
6    BLOCKED All fault conditions that
prevented task execution are
cleared and the EPT
Module
i
resumes execution
of its task or starts execution
of a new task.

[OR]

A resume command is
received that enables the
EPT Module
i
to resume its
task.

BUSY
• EPTStateChange
i
event is
triggered
• EPTStateTime
i
is calculated
• EPTState
i
= BUSY
• PreviousEPTState
i
=BLOCKED
• TaskName
i
is set
• TaskType
i
is set
• BlockedReason
i
= 0
• BlockedReasonText
i
= “Not
Blocked”

7    BLOCKED All fault conditions that
prevented task execution are
cleared.

[AND]

All material is removed
from the EPT Module
i
.

[AND]

EPT Module
i
can begin a
new task
.
IDLE
• EPTStateChange
i
event is
triggered
• EPTStateTime
i
is calculated
• EPTState
i
=IDLE
• PreviousEPTState
i
=BLOCKED
• TaskName
i
= “No Task”
• TaskType
i
= 0
• PreviousTaskName
i
is set
• PrevoiusTaskType
i
is set
• BlockedReason
i
= 0
• BlockedReasonText
i
= “Not
Blocked”



SEMI E116-0705 © SEMI 2002, 2005 10
# PREVIOUS
STATE
TRIGGER
NEW STATEACTIONS COMMENTS
8    IDLE Material arrives at the EPT
Module
i
and the EPT
Module
i
cannot begin
executing a task on the
material.

[OR]

A fault condition occurs
which prevents the EPT
Module
i
from starting a new
task.
BLOCKED
• EPTStateChange
i
event is
triggered
• EPTStateTime
i
is calculated
• BlockedReason
i
is set
• BlockedReasonText
i
is set
• EPTState
i
= BLOCKED
• PreviousEPTState
i
= IDLE

9    BLOCKED Fault conditions occur that
prevent the EPT Module
i

from resuming a blocked
task, or starting a new task.




BLOCKED
• EPTStateChange
i
event is
triggered
• BlockedReason
i
is set
• BlockedReasonText
i
is set

EPTStateTime
i
does not
change.  Thus when the
module transitions out
of BLOCKED state, the
value of EPTStateTime
i

will reflect the total
time the module was
BLOCKED from
processing.
PreviousEPTState
i
does
not change.  Thus,
PreviousEPTState
i
will
continue to reflect the
state of the module
before it was
BLOCKED from
processing.

9. 6  EPT State Transition Table for Equipment
9. 6.1  This section defines the State Transitions for the Equipment, in terms of its EPT modules.
Table 2  Basic EPT State Transitions — Equipment Level
# PREVIOUS
STATE
TRIGGER
NEW STATE ACTIONS COMMENTS
1   (No state) Equipment initiation
completed (includes
initialization of EPT modules)
IDLE
[OR]
BLOCKED
[OR]
BUSY
• EPTStateChange event is
triggered
• EPTState = IDLE or
BLOCKED or BUSY
• PreviousEPTState =
NoState
• EPTStateTime = 0
• BlockedReason may be
updated
• BlockedReasonText may be
updated

2   IDLE   At   least   one EPT module
transitions to the BUSY state
with task type of 1..5.
BUSY
• EPTStateChange event is
triggered
• EPTStateTime is calculated
• EPTState = BUSY
• PreviousEPTState

= IDLE



SEMI E116-0705 © SEMI 2002, 2005 11
# PREVIOUS
STATE
TRIGGER
NEW STATE ACTIONS COMMENTS
3   BUSY All EPT modules that were
BUSY with task type of 1..5
transition either to IDLE or to
BUSY with task type other
than 1..5.
IDLE
• EPTStateChange event is
triggered
• EPTStateTime is calculated
• EPTState = IDLE
• PreviousEPTState

=
BUSY

4   BUSY Any EPT module transitions to
BUSY state with task type 1..5.
BUSY
5   BUSY   {

At least one EPT module
transitions to a BLOCKED
state and prevents another EPT
module from starting a new
task or completing an existing
task

[AND]

There are no other EPT
modules BUSY with task type
1. .5.

}  [OR]  {

Any EPT module that was
BUSY with task type 1..5
transitions to either IDLE or
BUSY with task type other
than 1..5.

[AND]

There is at least one EPT
module in BLOCKED state
that is preventing another EPT
module from starting a new
task or completing an existing
task.

}
BLOCKED
• EPTStateChange event is
triggered
• EPTStateTime is calculated
• EPTState = BLOCKED
• PreviousEPTState

=
BUSY
• BlockedReason is set
• BlockedReasonText is set

6   BLOCKED At least one EPT module
transitions to BUSY with task
type of 1..5.
BUSY
• EPTStateChange event is
triggered
• EPTStateTime is calculated
• EPTState = BUSY
• PreviousEPTState

=
BLOCKED



SEMI E116-0705 © SEMI 2002, 2005 12
# PREVIOUS
STATE
TRIGGER
NEW STATE ACTIONS COMMENTS
7   BLOCKED All BLOCKED EPT modules
that prevented another EPT
module from starting a new
task or completing a current
task no longer prevents the
EPT module from doing so.

[AND]

No EPT module is BUSY with
task type 1.. 5.
IDLE
• EPTStateChange event is
triggered
• EPTStateTime  is
calculated
• EPTState = IDLE
• PreviousEPTState =
BLOCKED

8   IDLE Any EPT module transitions to
BLOCKED that prevents
another EPT module from
starting a new task.
BLOCKED
• EPTStateChange event is
triggered
• EPTStateTime is
calculated
• BlockedReason  is set
• BlockedReasonText is set
• EPTState = BLOCKED
• PreviousEPTState = IDLE

9   BLOCKED Any EPT module transitions to
BLOCKED that prevents or
continues to prevent another
EPT module from starting a
new task or completing a
current task.
BLOCKED
• EPTStateChange event is
triggered
• EPTStateTime is calculated
• BlockedReason is set
• BlockedReasonText is set
EPTStateTime does not
change.  Thus when the
equipment transitions
out of BLOCKED state,
the value of
EPTStateTime will
reflect the total time the
equipment was
BLOCKED from
processing.
PreviousEPTState

does
not change.  Thus,
PreviousEPTState

will
continue to reflect the
state of the equipment
before it was
BLOCKED from
processing.

10  EPTTracker Objects
10. 1  The  equipment  shall  provide  SEMI  E39-compliant  EPTTracker  objects  to  track  performance  of  EPT
Equipment  and  Modules.    The  equipment  shall  provide  one  EPTTracker  object  for  the  equipment  and  one
EPTTracker  object  for  each  EPT  Module  (both  Production  and  EFEM/LoadPort  EPT  Modules).    The  EPTTracker
object is used to maintain and update the SEMI E116 attributes each time an SEMI E116 transition occurs.  These
EPTTracker  objects  will  be  owned  at  the  equipment  level.    These  objects  shall  be  available  immediately  after
equipment  initialization,  and  shall  be  persistent  until  equipment  shutdown.  If  certain  attributes  are  identified  as
persistent, the object shall restore the value of these attributes on initialization. The Host can use SEMI E39 services
(e.g., GetAttr) to access EPTTracker objects.  The EPTTracker object format is specified in Table 3.


SEMI E116-0705 © SEMI 2002, 2005 13
Table 3  EPTTracker Object Definition
Attribute Name Definition Access Reqd Form
ObjType                                  Object                                  type                                  RO              Y              Text              “EPTTracker”
ObjID Object identifier.  A name assigned
by the Equipment designer
uniquely identifying the instance of
the EPTTracker object within this
Equipment.
RO Y Text 1 to 80 characters. Shall conform
to SEMI E39 restrictions on ObjID.
BlockedReason A numeric code that identifies the
most recent blocked condition of
the related EPT module.
RO              Y              Enumerated:
0 = Not Blocked
1 = Unknown
2 = Safety Threshold
3 = Error Condition
4 = Parametric Exception
5 = Aborting, Aborted
6 = Pausing, Paused
7 = Reserved
8 = Reserved
9 = Reserved
BlockedReasonText A description of the most recent
blocked condition of this
Equipment or EPT module.  May
provide further details to
BlockedReason.
RO Y Text 0 to 80 characters

This attribute must be defined for both
equipment and module EPTTracker
objects. For the Equipment, a
BlockedReason value is determined by
the blocked module.
DisableEventOnTransition     A     list     of zero to nine EPT State
Model transitions for which event
reporting to the host are disabled.
RW Y List of zero to nine integers in the
range 1–9.
EPTElementType A numeric code that indicates
whether this EPTTracker object
refers to the equipment or an EPT
module.
RO              Y              Enumerated
0 = Equipment
1 = Production EPT Module
2 = EFEM/LoadPort EPT Module
EPTState The current EPT state of this
equipment or EPT module.
RO              Y              Enumerated
0 = Idle
1 = Busy
2 = Blocked
EPTStateTime Time spent in the previous EPT
State, prior to entering the current
EPTState.
RO              Y              Unsigned              integer
Value in seconds
EPTElementName                  A                  human-understandable name for
this equipment or module, which
must be unique among all objects
of EPTTracker type.
RO Y Text 0 to 80 characters
PreviousEPTState                   The                   previous EPT state of this
equipment or EPT module, prior to
entering the current EPTState.
RO              Y              Enumerated
0 = Idle
1 = Busy
2 = Blocked
3 = No State


SEMI E116-0705 © SEMI 2002, 2005 14
Attribute Name Definition Access Reqd Form
PreviousTaskName Name of the EPT Task previously
running on this EPT module, prior
to starting the current EPT Task.
RO Y Text 0 to 80 characters

This attribute must be defined for both
equipment and module EPTTracker
objects. For the Equipment, the value
of the PreviousTaskName attribute
may be left blank (empty string).
PreviousTaskType Type of the EPT Task previously
running on this EPT module, prior
to starting the current EPT Task.
RO              Y              Enumerated:
0 = No Task
1 = Unspecified
2 = Process -- adding value (e.g.,
exposing)
3 = Support -- incapable of adding
value (e.g., Handling/Transport)
4 = Equipment Maintenance (e.g.,
Equipment-initiated clean cycle)
5 = Equipment Diagnostics (e.g.,
Equipment-initiated health check)
6 = Waiting (e.g., chamber waiting for
a robot to remove a substrate)

This attribute must be defined for both
equipment and module EPTTracker
objects.  For the Equipment, the value
of the PreviousTaskType attribute may
be set to 0.
TaskName Name of the EPT Task currently
running on this EPT module.
RO Y Text 0 to 80 characters

This attribute must be defined for both
equipment and module EPTTracker
objects. For the Equipment, the value
of the TaskName attribute may be left
blank (empty string).
TaskType The type of EPT Task currently
running on this EPT module.
RO              Y              Enumerated:
0 = No Task
1 = Unspecified
2 = Process -- adding value (e.g.,
exposing)
3 = Support -- incapable of adding
value (e.g., Handling/Transport)
4 = Equipment Maintenance (e.g.,
Equipment-initiated clean cycle)
5 = Equipment Diagnostics (e.g.,
Equipment-initiated health check)
6 = Waiting) e.g., chamber waiting for
a robot to remove a substrate)

This attribute must be defined for both
equipment and module EPTTracker
objects.  For the Equipment, the value
of the TaskType attribute may be set to

# 0

0.


SEMI E116-0705 © SEMI 2002, 2005 15
Attribute Name Definition Access Reqd Form
TransitionTimestamp             The             timestamp when the most
recent transition occurred and
collection event was triggered that
set the tracker to its current state.
RO Y Formatted numeric text: timestamp
format – list specifics
16 characters
YYYYDDMMHHMMSSCC
Transition The most recent transition that
updated the tracker.
RO              Y              Enumerated:
1 = Transition 1
2 = Transition 2
...
9 = Transition 9
TrackerEventID Numeric identifier for the event
that is triggered for a change in the
state model for this tracker.
RO              Y              Integer



10. 2  The object attributes TaskType and PreviousTaskType may take on one of the following values:
0. No Task — Value for TaskType when the EPT module is IDLE, and value for the PreviousTaskType when the
EPT module transitions out of the IDLE state or initial state (no state).

# 1

1. Unspecified — A placeholder for unspecified task types.

# 2

2. Process — Tasks expected under normal or desired manufacturing operations that are capable of adding value
by  either  (1)  a  physical-chemical  change  or  (2)  providing  critical  process  information  (e.g.,  inspection,
metrology).  This  includes  tasks  that  are  dependent  on  a  recipe  ID,  dependent  on  parameters  (e.g.,  target  etch
thickness), or recipe and parameter independent (e.g., fixed purge time for all recipes or regardless target etch
thickness).

# 3

3. Support — Tasks expected under normal or desired manufacturing operations that are incapable of adding value
according  to  the  criteria  for  a  process  task.    These  include  alignment,  handling  and  other  transport,  and
environmental changes by supporting EPT modules (e.g., pumpdown and vent operations in a load lock).

# 4

4. Maintenance  —  Any  task  that  is  intended  to  change  the  state  of  the  equipment  for  the  purpose  of  maintaining
equipment  functionality  or  performance.  This  includes  clean  cycles,  purges  not  expected  under  normal  or
desired manufacturing operations, and certain reset operations that do not put the EPT module or equipment in a
non-operational state.
5. Diagnostics  —  Any  task  that  obtains  information  about  the  status  of  the  equipment  for  the  purpose  of
determining  the  equipment’s  health  or  identifying  an  equipment  problem(s).  This  excludes  any  task  that  is
intended  to  change  the  status  of  the  equipment,  as  in  a  maintenance  task.  This  also  excludes  metrology  and
inspection  tasks  that  provide  critical  information  about  the process even if those tasks also provide equipment
diagnostic information as a byproduct.

# 6

6. Waiting — An equipment-initiated task that indicates the module is encountering normal waiting periods as part
of  its  normal  wafer  processing  scenario.  A  “Waiting”  task  applies  when  the  module  is  awaiting  a  task  to  be
completed by an external source before it can continue/complete processing (e.g., processing chamber waiting
for  robot  to  remove  wafer,  load  port  waiting  for  host  ID/slot  map  verification,  module  waiting  for  a  host
command  to  initiate  processing  and  commence  material  unloading.)  Material  must  be  present  in  the  module
when this task occurs.
10. 2.1  NOTES:    The  following  notes  resolve  ambiguities  that  arise  from  limitations  of  the  equipment  or  EPT
module point of view. From the equipment or EPT module point of view:
• Process maintenance activities (e.g., monitor wafers) and engineering activities (e.g., new process qualification
runs)  may  be  indistinguishable  from  normal  or  desired  manufacturing  operations.  These  operations  shall  be
reported as either process or support operations.
• Equipment maintenance activities (e.g., equipment qualification runs monitor wafers) may be indistinguishable
from  normal  or  desired  manufacturing  operations.  These  operations  shall  be  reported  as  either  process  or
support operations.
• Activities  executed  for  exception  handling  (e.g.,  pausing,  aborting,  stopping,  or  otherwise  moving  to  a  safe
state)  may  be  indistinguishable  from  support  tasks.  Examples  include  handling/transporting  wafers  to  safe
locations,  pumping,  venting,  purging,  etc.  If  the  equipment  or  module  implementing  EPT  does  not  have


SEMI E116-0705 © SEMI 2002, 2005 16
reasonable  inherent  knowledge  of  purpose  regarding  these  activities,  the  tasks  should  be  always  declared  as
support  tasks.  If  the  equipment  or  module  implementing  EPT  does  have  reasonable  inherent  knowledge  of
purpose  regarding  these  activities,  these  activities  shall  be  either  (1)  modeled  as  task  faults  or  otherwise
blocked conditions, or (2) exempted entirely from treatment under EPT. In case 2, the affected EPT module or
modules must be in a BLOCKED state due to related conditions reported to the EPT state model(s).
10. 3  Blocked Reason Text Requirements
• Fault Condition:  Blocked reason text should begin with “Fault: - ‘appropriate text’”
• Pause Condition: Blocked reason text should begin with “Pause: - ‘appropriate text’”
• Abort Condition: Blocked reason text should begin with “Abort:  - ‘appropriate text’”
10. 4  Configurable Disabling Of Event Reporting For Selected Transitions
10. 4.1  The  attribute  DisableEventOnTransition  may  be  used  by  the  host  to  selectively  disable  EPT  state  model
transition  events  for  an  individual  EPTTracker  object    independently  of  whether  the  events  are  enabled  at  the
equipment or not.  This attribute is a simple list of integers 1–9 representing the disabled events.
10. 4.2  For example, a list {1,4} indicates that no event reports should be sent for transitions 1 and 4.  This attribute
may be set by using the SEMI E39 service SetAttr for one or more objects.
11  EPT Events
11. 1  This section defines the required events and variable data associated with transitions in the EPT state model.
11. 2  Table  4  defines  the  data  variables  that  are  valid  at  the  time  of  an  EPT  State  Change  event.    When  the
equipment  or  EPT  module  triggers  an  EPTStateChange  event,  the  value  of  the  data  variable  shall  be  updated  to
reflect the data valid at the time the event occurred.
Table 4  Variable Data Definitions – Event Variables
VARIABLE NAME DESCRIPTION TYPE ACCESS COMMENT
EPTState The new (resulting) EPT
state of the module or
equipment at the end of
an EPT state transition.
Enumerated  RO 0 = IDLE
1 = BUSY
2 = BLOCKED
PreviousEPTState The previous EPT state
of the module or
equipment of an end of
an EPT state transition.
Enumerated RO 0 = IDLE
1 = BUSY
2 = BLOCKED
3 = No State
EPTStateTime Time spent in previous
EPT state for the
equipment or module.
Unsigned
integer
RO Seconds

This is the time period between the
entry into the previous EPT state
and the entry into the current EPT
State.
Clock The time and date at the
end of an EPT state
transition.
Formatted
numeric text:
timestamp
format
RO When included in an event report,
Clock represents the timestamp for
the occurrence of the event.


SEMI E116-0705 © SEMI 2002, 2005 17
VARIABLE NAME DESCRIPTION TYPE ACCESS COMMENT
TaskName Name of the task that
was started by the
module or equipment at
the occurrence of an EPT
state transition.
Text, 0 to 80
characters
RO TaskName is defined by the
equipment supplier.
TaskType The type of EPT Task
currently running on this
EPT module.
Enumerated RO 0 = No Task
1 = Unspecified
2 = Process – adding value (e.g.,
exposing)
3 = Support – incapable of adding
value (e.g., Handling/Transport)
4 = Equipment Maintenance (e.g.,
equipment initiated clean cycle)
5 = Equipment Diagnostics (e.g.,
equipment-initiated health check)
6 = Waiting (e.g., chamber waiting
for a robot to remove a substrate)
PreviousTaskName Name of the task that
was completed by the
module or equipment at
the occurrence of an EPT
state transition.
Text, 0 to 80
characters
RO
PreviousTaskType The type of the task that
was completed by the
module or equipment at
the occurrence of an EPT
state transition.
Enumerated RO 0 = No Task
1 = Unspecified
2 = Process – adding value (e.g.,
exposing)
3 = Support – incapable of adding
value (e.g., Handling/Transport)
4 = Equipment Maintenance (e.g.,
equipment initiated clean cycle)
5 = Equipment Diagnostics (e.g.,
equipment-initiated health check)
6 = Waiting (e.g., chamber waiting
for a robot to remove a substrate)
BlockedReason The number of the block
condition that initiated
the transition to the
BLOCKED state for the
module or equipment.
Enumerated RO 0 – Not Blocked
1 – Unknown
2 – Safety Threshold
3 – Error Condition
4 – Parametric Exception
5 – Aborting, Aborted
6 – Pausing, Paused
7 – Reserved
8 – Reserved
9 – Reserved
BlockedReasonText The reason why the
transition was made to
the BLOCKED state for
the module or
equipment.
Text, 0 to 80
characters
RO Description of the Blocked reason





SEMI E116-0705 © SEMI 2002, 2005 18
11. 3  All events require the following data variables to be available:
< Clock >            (Clock represents the timestamp for the occurrence of the event)
< EPTState >
PreviousEPTState
< EPTStateTime >
TaskName
TaskType
PreviousTaskName
PreviousTaskType
Additional data required for specific transitions are shown in Table 5.
Table 5  Events
EVENT NAME STATE MODEL
TRANSITION
NUMBER
DESCRIPTION REQUIRED DATA
EPTStateChange
0
1, 2, 3, 4, 5, 6, 7, 8,
9
Triggered by a EPT State change at the
equipment-level.
EqpName 

The following additional data is
required for Transitions 5, 8
and 9:
< Blocked Reason>
< BlockedReasonText>
EPTStateChange
i
1, 2, 3, 4, 5, 6, 7, 8,
9
Triggered by an EPT State change at the
EPT module-level.

There exist i+1 EPTStateChange events,
where i is the number of EPT modules.
EPTStateChange
1
is triggered by a state
change at the 1
st
EPT module,
EPTStateChange
2
is triggered by a state
change at the 2
nd
EPT module, etc.
ModuleName
i


The following additional data is
required for Transitions 5, 8
and 9:
< Blocked Reason>
< BlockedReasonText>


12  Requirements for Compliance
12. 1  Table 6 provides a checklist for EPT compliance.
Table 6  EPT Compliance Statement
Fundamental EPT Requirements EPT Section                      Implemented                         EPT                      Compliant
EPT State Model for Equipment  9  Yes    No   Yes    No
EPT State model for each EPT module 9  Yes    No  Yes    No
EPTTRacker Objects 10  Yes    No  Yes    No
EPT Events 11  Yes    No   Yes    No

13  Related Documents
13. 1.1  International SEMATECH Equipment Performance Management User Requirements Document
13. 1.2  ISMT/J300E Equipment Performance Management Operator Requirements Document (URD)
13. 1.3  Harel,  D.,  “Statecharts:  A  Visual  Formalism  for  Complex  Systems,”  Science  of  Computer  Programming  8
(1987) 231-274.


SEMI E116-0705 © SEMI 2002, 2005 19
RELATED INFORMATION 1
EXAMPLES OF EQUIPMENT PERFORMANCE TRACKING (EPT)
NOTICE:  This  related  information  is  not  an  official  part  of  SEMI  E116  and  was  derived  from  North  American
Information and Control.  This related information was approved for publication by full letter ballot procedures on
April 30, 2002.
R1-1  Examples of EPT Modules per Tool Type
R1-1.1  Table R1-1 lists examples of EPT modules for various equipment types. It is not required that each tool type
support all or be limited to only the modules listed; rather, the listing is provided as an example only.
Table R1-1  Example EPT Modules
Tool Type Modules
CMP/
Planar
Loadports      Alignment
Stage
Wafer
Handler
Transport       Polish
Table
Scrub
Station
Rinse
Station

Linked Litho
Track
Loadports         Central
Wafer
Handler
Module
Spin Cup Link
Transfer
Station
Buffer     Vapor     PrimeChill
Plate
Soft Bake
Oven

Linked Litho
Expose
Expose
Stage
Wafer
Transfer
Link
Transfer
Station –
In port
Link
Transfer
Station –
Out port
Reticle
Stage
Reticle
Library
Reticle
Loader
Arm


Thin Film
Sputter
Loadports         Central
Wafer
Handler(s)
Cool DownPVD Airlock Argon
Sputter Etch
Degas          In          Situ
Metrology
CVD
Diffusion
Furnace
Loadports         Quartz
Loading
Station
Reactor
Module
Wafer
Transfer
System
Buffer
Implanter Loadports         Central
Wafer
Handler(s)
Implant
Chamber
Platen          Notch
Aligner
Coldplate
Plater Loadports         Central
Wafer
Handler
Degas            Plate
Chamber

Thermal
Anneal
Loadports         Central
Wafer
Handler
Bake Stage
Wet Etcher Loadports         Central
Wafer
Handler
Aligner Bath CH 1Bath CH
2
Buffer
Dry Etcher Loadports         Central
Wafer
Handler
Aligner Chill PlateEtch CH
1
Etch CH 2
Wafer Sorter Loadports         Central
Wafer
Handler
Aligner


SEMI E116-0705 © SEMI 2002, 2005 20
Tool Type Modules
Metrology Loadports         Central
Wafer
Handler
Align-ment
Stage
Measure-
ment Stage

Inspection Loadports      Inspection
Stage
Handler
Probe / Test Loadports      Probe/      Test
Platform
Handler

R1-2  EPT Module / Task Definition Example
R1-2.1  Figure R1-1 shows a simple module and the associated actions/tasks that correspond.  The EPT Tasks have
been  diluted  to  the  level  that  will  allow  a  serial  chain  of  tasks  to  occur.    The  Internal  Tasks  column  is  present  to
show that the equipment may have much more happening concurrently at a more detailed level.  Table R1-2 shows a
possible task-based process flow in this module.

Spinning substrateDispensing resist
Substra te load/unload

Figure R1-1
Example EPT Module
Table R1-2  Example EPT Tasks
Step Action Possible Internal Tasks EPT Active Task
1 Loading the substrate Receiving the substrate
Substrate alignment
Substrate load
2 Coating the substrate Substrate spin (accelerate)
Substrate spin (steady)
Dispense resist
Substrate spin (decelerate)

Substrate coat
3 Unloading the substrate Substrate alignment
Substrate removal
Substrate unload

R1-3  An Example of Equipment Performance Tracking on a Carrier Handling Module
R1-3.1  This section provides examples of equipment performance tracking to clarify the application of the standard
to modules that are part of the Equipment Front-End Module (EFEM).
R1-4  Carrier Handling Module (CHM)
R1-4.1  The Carrier Handler is a part of EFEM, excluding any Substrate Handler, which is defined in SEMI E101. A
Carrier  Handling  Module  is  similar  but  different  from  the  definition.  It  is  a  more  general  subsystem  to  handle
carriers  without  handling  substrates  in  EFEM  that  is  applicable  to  various  analyses  and  applications.    The  Carrier
Handling Module is a logical module that may or may not represent an existing physical module.


SEMI E116-0705 © SEMI 2002, 2005 21
R1-4.2  The  advantages  of  applying    Equipment  Performance  Tracking  to  the  Carrier  Handling  Module  are  as
follows:
• Any equipment, except certain specific ones such as an expose tool within a linked litho tool in the lithography
process, has one or more Carrier Handling Modules.
The state of the Carrier Handling Module leads to whole input and output of material to and from an equipment.
• Monitoring the Equipment Performance Tracking state of the Carrier Handling Module helps control loading to
or unloading from equipment on appropriate time.
• The state can reveal what related SEMI standards, i.e. SEMI E87 and SEMI E90, may not address.
• Estimation  of  capabilities  about  sub-components  on  a  Carrier  Handling  Module  is  available  with  tracking  the
state.
• Each component that makes up the Carrier Handling Module may experience mechanical failure. This can cause
the  entire  Carrier  Handling  Module  to  be  in  an  out  of  service  state.  Tracking  time  between  failures  would  be
valuable.
R1-5  Components to track performance of Carrier Handling Module
R1-5.1  Generally, a Carrier Handling Module has the following components.
• Carrier Handoff PIO (SEMI E84) Port
• Carrier Transfer Mechanism
• Carrier ID Reader
• Carrier ID Writer
• FOUP Opener
• Carrier Slot Mapper
R1-5.2  This section investigates the following composition to represent examples for Fixed Buffer type and Internal
Buffer type equipment. An example of a Carrier Handling Module is illustrated in Figure R1-2. Number of installed
components are listed in the Table R1-3.

Table R1-3  Typical Composition of Carrier Handoff Module
Number Installed Carrier Handoff
PIO
Carrier Transfer
Mechanism
Carrier ID
Reader
Carrier ID
Writer
FOUP
Opener
Slot Mapper
Internal Buffer Type 2 4 2 1 1 1
Fixed Buffer Type 2 2 2 2 2 2
#1
Several Carrier Transfer Mechanisms are usually docking mechanism for Fixed Buffer type. For Internal Buffer type, one of them is a Carrier
Transfer Robot in internal buffer, one is a Docking Mechanism inside the internal buffer and the other one is Carrier Transfer Mechanism to pass
carrier between Load Port and the Internal Buffer.



SEMI E116-0705 © SEMI 2002, 2005 22

FB Type
TA            TBTC
Equipment
(Process Area)
exit
entrance
IB Type
FIMS face
CHM

Figure R1-2
Carrier Handling Module
In Diagram R1-2, the following translation applies

FB Type = Fixed Buffer Type
IB Type  = Internal Buffer Type
TA  = Transport A
TB  = Transport B
TC  = Transport C
R1-6  Triggers of Transition for each Components of Carrier Handling Module
The following tables describe triggers to change the state of components for specific tasks.
Table R1-4  Triggers of Transitions for Specific Tasks of Carrier Handoff PIO
#        Previous        State        Trigger        New State Action(s) Comment
2 IDLE  Receiving VALID
signal in SEMI E84.
BUSY Set off handoff
sequence
Loading or Unloading sequence.
Processing or moving wafers
between carrier and process
container before Unloading.
3     BUSY     Receiving     COMPT
signal in SEMI E84 or
Timeout in handoff
sequence.
IDLE  Waiting
disconnected
Loading or Unloading sequence is
completed or terminated.  Processing
or moving wafers between carrier
and process container after Loading.
Table R1-5  Triggers of Transitions for Specific Tasks of Carrier Transfer Mechanism on Loadport of Fixed
Buffer Type or FIMS Port of IB
#        Previous        State        Trigger        New State Action(s) Comment
2 IDLE  Docking or Undocking
Started
BUSY                        None                        Carrier                        moving sequence before
docking. Processing or moving
wafers between carrier and process
container before undocking.
3 BUSY Docking or Undocking
Complete
IDLE  None Processing or moving wafers
between carrier and process
container after docking.


SEMI E116-0705 © SEMI 2002, 2005 23

Table R1-6  Triggers of Transitions for Specific Tasks of Carrier Transfer Mechanism in Internal Buffer Unit
#        Previous        State        Trigger        New State Action(s) Comment
2 IDLE  Transfer Started BUSY Moves carrier to
destination

3 BUSY Transfer Complete IDLE  None Ready to unload or remove from
port.

Table R1-7  Triggers of Transitions for specific tasks of Carrier ID Reader
#        Previous        State        Trigger        New State Action(s) Comment
2 IDLE  Reading Started BUSY None Carrier moving sequence before
reading.
3 BUSY Reading Complete IDLE  Verification Processing or moving wafers
between carrier and process
container after opening.

Table R1-8  Triggers of Transitions for Specific Tasks of Carrier ID Writer
#        Previous        State        Trigger        New State Action(s) Comment
2 IDLE  Writing Started BUSY None Processing wafers before writing.
3 BUSY Writing Complete IDLE  Waiting next
writing or any
post writing
action
Carrier moving sequence after
writing.

Table R1-9  Triggers of Transitions for Specific Tasks of FOUP Opener
#        Previous        State        Trigger        New State Action(s) Comment
2 IDLE  Opening or Closing
Started
BUSY                        None                        Carrier                        moving sequence before
opening.
3 BUSY Opening or Closing
Complete
IDLE  None Processing or moving wafers
between carrier and process
container after opening.

Table R1-10  Triggers of Transitions for Specific Tasks of Slot Mapper
#        Previous        State        Trigger        New State Action(s) Comment
2 IDLE  Scanning Started BUSY None Carrier moving sequence before
mapping.
3 BUSY Scanning Complete IDLE  Waiting next
scan
Processing or moving wafers
between carrier and process
container after mapping.

Table R1-11  Triggers of Transitions Common for all Components of Carrier Handling Module
#        Previous        State        Trigger        New State Action(s) Comment
1 (no state) Initialization is
complete
IDLE                          None
7 BLOCKED Get Recovered IDLE  None
8 IDLE Unable to do task BLOCKED  None
9 BLOCKED Get another Fault             BLOCKED                            None


SEMI E116-0705 © SEMI 2002, 2005 24
R1-7  Operation Scenarios for Carrier Handling Module
R1-7.1  A couple of following scenarios are typical for different type of Carrier Handling Module.
R1-7.2  Carrier Handling Module for Fixed Buffer Type
R1-7.2.1  Beside the number of Loadports, following table shows just one set of components out of them.
R1-7.2.2  Indicated  subsystems:  PIO  =  Carrier  Handoff  PIO  Port,  CID-R  =  Carrier  ID  Reader,  X’fer  Transfer
Mechanism  =  Carrier  Transfer  Mechanism  (Docking  Mechanism),  CID-W  =  Carrier  ID  Writer,  Opener  =  FOUP
Opener, Mapper = Carrier Slot Mapper.
Table R1-12  Scenario of Fixed Type Carrier Handling Module
Event         #         Description         Time         PIO         CID-R.         X’fer
Mech
CID-W      Opener      Mapper
0 Carrier Handling Module and all
components starting in “IDLE”
0:00         IDLE         IDLE         IDLE         IDLE         IDLE         IDLE
1        Loading        Started        0:30        BUSY
Ç Ç Ç Ç Ç
2        Loading        Completed        1:00        IDLE
Ç Ç Ç Ç Ç
3 ID Reading Started 1:05
Ç
BUSY
Ç Ç Ç Ç
4 ID Reading Complete 1:10
Ç
IDLE
Ç Ç Ç Ç
5        ID        Verification        -
Ç Ç Ç Ç Ç Ç
6        Docking        Started        1:20
Ç Ç
BUSY
Ç Ç Ç
7        Docking        Complete        1:50
Ç Ç
IDLE
Ç Ç Ç
8        Opening        Start        1:55
Ç Ç Ç Ç
BUSY
Ç
9        Opening        Complete        2:25
Ç Ç Ç Ç
IDLE
Ç
10       Mapping       Started       2:30
Ç Ç Ç Ç Ç
BUSY
11       Mapping       Complete       2:15
Ç Ç Ç Ç Ç
IDLE
12       Slotmap       Verification       -
Ç Ç Ç Ç Ç Ç
13       Process       Started       12:15
Ç Ç Ç Ç Ç Ç
14       Process       Completed       47:15
Ç Ç Ç Ç Ç Ç
15       Writing       Started       47:20
Ç Ç Ç
BUSY
Ç Ç
16       Writing       Complete       48:10
Ç Ç Ç
IDLE
Ç Ç
17       Closing       Start       48:10
Ç Ç Ç Ç
BUSY
Ç
18       Closing       Complete       48:40
Ç Ç Ç Ç
IDLE
Ç
19       Undocking       Started       48:45
Ç Ç
BUSY
Ç Ç Ç
20       Undocking       Complete       49:15
Ç Ç
IDLE
Ç Ç Ç
21       Unloading       Started       52:25       BUSY
Ç Ç Ç Ç Ç
22       Unloading       Complete       52:55       IDLE
Ç Ç Ç Ç Ç
23 Carrier Handling Module and all
components returning in “IDLE”
52:55
Ç Ç Ç Ç Ç Ç

R1-7.3  Carrier Handling Module for Internal Buffer Type
R1-7.3.1  It is assumed that Carrier Slot Mapper and Carrier ID Writer are mounted at an FIMS port next to Internal
Buffer located inside of the equipment.  The following table shows the set of components of a single Loadport.
R1-7.3.2  Indicated  subsystems:  PIO  =  Carrier  Handoff  PIO  Port,  CID-R  =  Carrier  ID  Reader,  X’fer  A  =  Carrier
Transfer  Mechanism  from  Handoff  position  to  Carrier  In/Out  position,  X’fer  B  =  Carrier  Transfer  Mechanism  of
Internal  Buffer,  X’fer  C  =  Carrier  Transfer  Mechanism  (Docking  Mechanism)  for  internal  FIMS  port,  CID-W  =
Carrier ID Writer, Opener = FOUP Opener, Map = Carrier Slot Mapper


SEMI E116-0705 © SEMI 2002, 2005 25
Table R1-13  Scenario of Fixed Type Carrier Handling Module
Event # Description Time PIO CID-R.    X’fer A   X’fer B  X’fer C  CID-W  OpenerMap
0 Carrier Handling Module and all
components starting in “IDLE”
0:00         IDLE         IDLE         IDLE         IDLE     IDLE     IDLE     IDLE     IDLE
1              Loading              Started              0:30              BUSY
Ç Ç Ç Ç Ç Ç Ç
2              Loading              Completed              1:00              IDLE
Ç Ç Ç Ç Ç Ç Ç
3 ID Reading Started 1:05
Ç
BUSY
Ç Ç Ç Ç Ç Ç
4 ID Reading Complete 1:10
Ç
IDLE
Ç Ç Ç Ç Ç Ç
5              ID              Verification              -
Ç Ç Ç Ç Ç Ç Ç Ç
6              Transfer              Started              1:20
Ç Ç
BUSY
Ç Ç Ç Ç Ç
7              Transfer              Complete              1:35
Ç Ç
IDLE
Ç Ç Ç Ç Ç
8              Moving              Started              1:40
Ç Ç Ç
BUSY
Ç Ç Ç Ç
9              Moving              Complete              2:25
Ç Ç Ç
IDLE
Ç Ç Ç Ç
10            Docking            Started            2:30
Ç Ç Ç Ç
BUSY
Ç Ç Ç
11            Docking            Complete            2:50
Ç Ç Ç Ç
IDLE
Ç Ç Ç
12            Opening            Start            2:55
Ç Ç Ç Ç Ç Ç
BUSY
Ç
13            Opening            Complete            3:25
Ç Ç Ç Ç Ç Ç
IDLE
Ç
14            Mapping            Started            3:30
Ç Ç Ç Ç Ç Ç Ç
BUSY
15            Mapping            Complete            3:15
Ç Ç Ç Ç Ç Ç Ç
IDLE
16            Slotmap            Verification            -
Ç Ç Ç Ç Ç Ç Ç Ç
17 Wafer Moving Started 3:30
Ç Ç Ç Ç Ç Ç Ç Ç
18            Wafer            Moving            Completed            7:00
Ç Ç Ç Ç Ç Ç Ç Ç
12            Closing            Start            7:05
Ç Ç Ç Ç Ç Ç
BUSY
Ç
13            Closing            Complete            7:20
Ç Ç Ç Ç Ç Ç
IDLE
Ç
21            Undocking            Started            7:25
Ç Ç Ç Ç
BUSY
Ç Ç Ç
22            Undocking            Complete            7:45
Ç Ç Ç Ç
IDLE
Ç Ç Ç
8              Moving              Started              7:50
Ç Ç Ç
BUSY
Ç Ç Ç Ç
9              Moving              Complete              8:35
Ç Ç Ç
IDLE
Ç Ç Ç Ç
17            Process            Started            16:15
Ç Ç Ç Ç Ç Ç Ç Ç
18            Process            Completed            147:15
Ç Ç Ç Ç Ç Ç Ç Ç
8              Moving              Started              146:30
Ç Ç Ç
BUSY
Ç Ç Ç Ç
9              Moving              Complete              147:15
Ç Ç Ç
IDLE
Ç Ç Ç Ç
10            Docking            Started            147:20
Ç Ç Ç Ç
BUSY
Ç Ç Ç
11            Docking            Complete            147:40
Ç Ç Ç Ç
IDLE
Ç Ç Ç
19            Writing            Started            147:45
Ç Ç Ç Ç Ç
BUSY
Ç Ç
20            Writing            Complete            148:10
Ç Ç Ç Ç Ç
IDLE
Ç Ç
12            Opening            Start            148:10
Ç Ç Ç Ç Ç Ç
BUSY
Ç
13            Opening            Complete            148:25
Ç Ç Ç Ç Ç Ç
IDLE
Ç
17 Wafer Moving Started 148:30
Ç Ç Ç Ç Ç Ç Ç Ç
18            Wafer            Moving            Completed            152:00
Ç Ç Ç Ç Ç Ç Ç Ç
12            Closing            Start            152:05
Ç Ç Ç Ç Ç Ç
BUSY
Ç
13            Closing            Complete            152:20
Ç Ç Ç Ç Ç Ç
IDLE
Ç
21            Undocking            Started            152:25
Ç Ç Ç Ç
BUSY
Ç Ç Ç
22            Undocking            Complete            152:45
Ç Ç Ç Ç
IDLE
Ç Ç Ç
23            Moving            Started            152:50
Ç Ç Ç
BUSY
Ç Ç Ç Ç
24            Moving            Complete            153:35
Ç Ç Ç
IDLE
Ç Ç Ç Ç
25            Transferring            Started            153:40
Ç Ç
BUSY
Ç Ç Ç Ç Ç
26            Transferring            Complete            153:55
Ç Ç
IDLE
Ç Ç Ç Ç Ç


SEMI E116-0705 © SEMI 2002, 2005 26
27            Unloading            Started            202:25            BUSY
Ç Ç Ç Ç Ç Ç Ç
28            Unloading            Complete            202:55            IDLE
Ç Ç Ç Ç Ç Ç Ç
29 Carrier Handling Module and all
components returning in “IDLE”
202:55
Ç Ç Ç Ç Ç Ç Ç Ç

R1-8  Tracking Performance for Whole Carrier Handling Module
R1-8.1  Even  composition  and  property  of  equipment  are  dependent  on  equipment  type,  operation  and  usage
depends  on  equipment  user.    Because  actual  usage  deeply  affects  the  whole  performance  of  the  Carrier  Handling
Module  and/or  Equipment,  the  user  is  responsible  for  reconstructing    the  performance  from  performance  tracking
events for each component.


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


SEMI E116.1-1104 © SEMI 2003, 2004 1
SEMI E116.1-1104
SPECIFICATION FOR SECS-II PROTOCOL FOR EQUIPMENT
PERFORMANCE TRACKING (EPT)
This specification was technically approved by the Global Information & Control Committee and is the direct
responsibility  of  the  North  American  Information  &  Control  Committee.    Current  edition  approved  by  the
North  American  Regional  Standards  Committee  on  August  16,  2004.    Initially  available  at  www.semi.org
September 2004; to be published November 2004.  Originally published March 2003.
NOTICE:  This document was rewritten in its entirety in 2004.
1  Purpose
1. 1  This document maps the services and data of the Equipment Performance Tracking Standard (EPT) to SECS-II
streams, functions, and data definitions.
2  Scope
2. 1  This  document  applies  to  all  implementations  of  EPT  that  use  the  SECS-II  message  protocol  (SEMI  E5).
Compliance to this standard requires compliance to both SEMI E116 and SEMI E5.
NOTICE:  This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory or other limitations prior to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI E5 — SEMI Equipment Communications Standard 2 Message Content (SECS-II)
SEMI E30 — Generic Model for Communications and Control of Manufacturing Equipment (GEM)
SEMI E39 — SECS-II Protocol for Object Services Standard (OSS)
SEMI E116 — Provisional Specification for Equipment Performance Tracking (EPT)
NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.
4  SECS-II Attribute Definitions
4. 1  Table  1  provides  the  SECS-II  structure  definitions  for  the  E116  EPTTracker  Object.  This  must  be  compliant
with the E39 (OSS) protocol. The host does not have the ability to create or destroy these objects. However, the host
must be able to access all attributes via the default E39 GetAttr services (for all attributes) and SetAtt services (for
RW attributes).
4. 2  A subset of these object attributes are enumerated via SECS-II Data Variables that may be provided via event-
reports. See the section on Variable Data Item Mapping in this document.


SEMI E116.1-1104 © SEMI 2003, 2004 2
Table 1  EPTTracker Object SECS-II Attributes Definitions
Attribute Name Attribute Data Form: SECS-II Structure
“ObjType” 20 (A[10]) must always be set to  “EPTTracker”
“ObjID” 20 (A[1..80]) OBJECTIDENTIFIER
ObjID is equipment defined.  Examples are “EQUIPMENT”, “CHAMBER A”, “ROBOT
ARM”.
Conforms to the restrictions of ObjID as specified in SEMI E39.1
“BlockedReason” 51 (U1)  BlockedReason
where the values are enumerated as:
0 = Not Blocked
1 = Unknown
2 = Safety Threshold
3 = Error Condition
4 = Parametric Exception
5 = Aborting, Aborted
6 = Pausing, Paused
7 = Reserved
8 = Reserved
9 = Reserved
“BlockedReasonText” 20 (A) BlockedReasonText
Usage is equipment defined.  Examples: “Abort – Host-requested Abort”, “Fault – Reticle
Stage Error”; “Pause – Host-requested Pause”
“EPTElementType”                      51                      (U1) EPTElementType
where the values are enumerated as:
0 = Equipment
1 = Production EPT Module
2 = EFEM/Load Port EPT Module
“EPTState” 51 (U1) EPTState
where the values are enumerated as:
0 = Idle
1 = Busy
2 = Blocked
“EPTStateTime” 54 (U4) EPTStateTime

“EPTElementName” 20 (A) EPTElementName
Usage is equipment defined. Examples “EQUIPMENT”, “CHAMBER A”, “ROBOT ARM”.
“PreviousEPTState”                     51                     (U1) PreviousEPTState
where the values are enumerated as:
0 = Idle
1 = Busy
2 = Blocked
3 = No State
“PreviousTaskName”                   20                   (A[0..80]) PreviousTaskName
Usage is equipment defined.  Examples: “Loading”, “Etching”, “Pumping Down”


SEMI E116.1-1104 © SEMI 2003, 2004 3
“PreviousTaskType” 51 (U1) PreviousTaskType
where the values are enumerated as:
0 = No Task
1 = Unspecified
2 = Process -- adding value (e.g., exposing)
3 = Support -- incapable of adding value (e.g., Handling/Transport)
4 = Equipment Maintenance (e.g., Equipment-initiated clean cycle)
5 = Equipment Diagnostics (e.g., Equipment-initiated health check)
6 = Waiting (e.g., chamber waiting for a robot to remove a substrate)
“TaskName” 20 (A[0..80]) TaskName
Usage is equipment defined.  Examples: “Loading”, “Etching”, “Pumping Down”
“TaskType” 51 (U1) TaskType
where the values are enumerated as:
0 = No Task
1 = Unspecified
2 = Process -- adding value (e.g., exposing)
3 = Support -- incapable of adding value (e.g., Handling/Transport)
4 = Equipment Maintenance (e.g., Equipment-initiated clean cycle)
5 = Equipment Diagnostics (e.g., Equipment-initiated health check)
6 = Waiting) e.g., chamber waiting for a robot to remove a substrate)
“TransitionTimeStamp”               20               (A[16])
YYYYMMDDhhmmsscc

YYYY=Year  0000 to 9999
MM=Month  01 to 12
DD=Day                                                01                to                31
hh=Hour                                                00                to                23
mm=Minute  00 to 59
ss=Second  00 to 59
cc=   Centisecond 00 to 99
“Transition” 51 (U1) Transition
where the values are enumerated as:
1 = Transition 1
2 = Transition 2
.
.
.
9 = Transition 9
“TrackerEventID” 54 (U4) TrackerEventID
where:
This is identical to EPTStateChangeEvent
i
corresponding to this object (see the Events
Mapping section in this document)
“DisableEventOnTransition”       L,n
1. 51 (U1) Transition Number
2. 51 (U1) Transition Number
...
n. 51 (U1) Transition Number
where the elements of this list are can only have values in the range 1..9, in order, with no
repeats. This list may be empty.



SEMI E116.1-1104 © SEMI 2003, 2004 4
5  Events Mapping
5. 1  Table 2 shows the specific SECS-II streams and functions that shall be used for SECS-II implementations of the
events defined in EPT.  A single collection event is generated for each of the equipment and the modules to report
transitions occurring within the state model.  This approach differs from state models that are defined in other 300
mm-related  SEMI  standards,  which  utilize  a  unique  CEID  for  each  transition  in  the  state  model.    For  example,  a
piece  of  equipment  with  3  EPT  modules  would  have  4  associated  CEIDs.  The  CEID  indexed  0  would  report
equipment-level events and 3 CEIDs corresponding to the equipment’s 3 EPT modules indexed 1...3 would report
EPT module-level events.
Table 2  Event Mapping Table
Event Name Stream, Function SECS-II Message Name
EPTStateChangeEvent
i

S6F11/F12 Event Report Send/Acknowledge

6  Variable Data Item Mapping
6. 1  Table  3  shows  the  specific  SECS-II  data  classes,  and  formats  needed  for  SECS-II  implementations  of  SEMI
E116  EPT  variable  data  items.    The  data  variables  must  be  updated  as  specified  in  the  E116  standard  when  a
transition occurs in the state-model for any of the EPTTracker objects implemented on the equipment. The Variable
Names below match the object Attribute Names from which the variables are to be updated (see the section on EPT
Tracker Object SECS-II Attribute Definitions)
These variables are tied to the occurrence of transitions in the state model and are not impacted by the
DisableEventOnTransition attribute in the EPTTracker object.
Table 3  Event Variable Data Item Mapping Table
Variable Name Class Format
EPTState                                                                                                       DVVAL                                                                                                       51                                                                                                       (U1)
PreviousEPTState                                                                                         DVVAL                                                                                         51                                                                                         (U1)
EPTStateTime                                                                                              DVVAL                                                                                              54                                                                                              (U4)
TaskName                                                                                                    DVVAL                                                                                                    20                                                                                                    (A[0..80])
TaskType                                                                                                      DVVAL                                                                                                      51                                                                                                      (U1)
PreviousTaskName                                                                                      DVVAL                                                                                      20                                                                                      (A[0..80])
PreviousTaskType                                                                                        DVVAL                                                                                        51                                                                                        (U1)
BlockedReason                                                                                             DVVAL                                                                                             51                                                                                             (U1)
BlockedReasonText                                                                                     DVVAL                                                                                     20                                                                                     (A)

Table 4  Additional Data Item Mapping Table
Variable Name SECS-II Data Item
Clock                                          CLOCK

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


SEMI E117-1104 © SEMI 2002, 2004 1
SEMI E117-1104
SPECIFICATION FOR RETICLE LOAD PORT
This specification was technically approved by the Global Physical Interfaces and Carriers Committee and is
the direct responsibility of the North American Physical Interfaces and Carriers Committee. Current edition
approved  by  the  North  American  Regional  Standards  Committee  on  August  16,  2004.    Initially  available  at
www.semi.org  September  2004;  to  be  published  November  2004.    Originally  published  November  2002;
previously published March 2003.
1  Purpose
1. 1  This        specification        defines        dimensional
requirements and options of reticle load ports on reticle
stockers,  lithography  exposure  equipment,  and  reticle
inspection   equipment.   It   is   intended   to   promote   a
uniform  physical  interface  between  equipment  and  the
factory, to facilitate the use of automated RSP transport
systems,  and/or  to  meet  ergonomic  requirements  for
manually loaded equipment.
2  Scope
2. 1  This  standard  covers  only  load  ports  for  reticle
SMIF  pods  (RSPs)  as  specified  in  SEMI  E100,  E111,
and  E112.  Similar  requirements  and  options  covering
load ports for wafers are covered in SEMI E15 (for 200
mm  wafers  and  smaller)  and  in  SEMI  E15.1  (for  300
mm wafers).
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  health  practices  and  determine  the
applicability or regulatory limitations prior to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI E15 — Specification for Tool Load Port
SEMI  E15.1  —  Specification  for  300  mm  Tool  Load
Port
SEMI E19.3 — Port Standard for Mechanical Interface
of Wafer Cassette Transfer, 150 mm (6 inch) Port
SEMI E19.4 — 200 mm Standard Mechanical Interface
(SMIF)
SEMI  E72  —  Specification  and  Guide  for  300  mm
Equipment Footprint, Height, and Weight
SEMI  E100  —  Specification  for  a  Reticle  SMIF  Pod
(RSP)  Used  to  Transport  and  Store  6  inch  or  230  mm
Reticles
SEMI  E111  —  Provisional  Mechanical  Specification
for  a  150mm  Reticle  SMIF  Pod  (RSP150)  Used  to
Transport and Store a 6 Inch Reticle
SEMI  E112  —  Provisional  Mechanical  Specification
for  a  Multiple  150  mm  Reticle  SMIF  Pod  (MRSP150)
Used to Transport and Store 6 Inch Reticles
NOTICE: As  listed  or  revised,  all  documents  cited
shall be the latest publications of adopted standards.
4  Terminology
4. 1  Definitions
4. 1.1  150  mm  Multiple  Reticle  SMIF  Pod  (MRSP150)
— a minienvironment compatible carrier (as defined in
SEMI  E112)  that  is  capable  of  holding  six  6  inch
reticles  in  a  horizontal  orientation  during  transport  and
storage  and  is  compatible  with  a  Standard  Mechanical
Interface (SMIF) per SEMI E19.3.
4. 1.2  150   mm Reticle   SMIF   Pod   (RSP150)   —   a
minienvironment   compatible   carrier   (as   defined   in
SEMI  E111)  that  is  capable  of  holding  one  6  inch
reticle  in  a  horizontal  orientation  during  transport  and
storage  and  is  compatible  with  a  Standard  Mechanical
Interface (SMIF) per SEMI E19.3.
4. 1.3  200   mm Reticle   SMIF   Pod   (RSP200)   —   a
minienvironment   compatible   carrier   (as   defined   in
SEMI  E100)  that  is  capable  of  holding  one  6  inch
reticle or one 230 mm reticle in a horizontal orientation
during  transport  and  storage  and  is  compatible  with  a
Standard   Mechanical   Interface   (SMIF)   per   SEMI
E19.4.
4. 1.4  Reticle  SMIF  Pod  (RSP)  —  a  minienvironment
compatible  carrier  that  is  capable of holding either one
or   six   reticles   in   a   horizontal   orientation   during
transport and storage and is compatible with a Standard
Mechanical Interface (SMIF) per SEMI E19.3 or SEMI
E19.4.
NOTE 1:  All  other  terminology  from  SEMI  E100,  E111,
E112,  and  E15  also  apply  (except  that  in  SEMI  E15,  the
substrate must be assumed to be a reticle and not a wafer).
5  Ordering Information
5. 1  The  user  must  specify  which  RSPs  will  be  used:
RSP200,  RSP150,  MRSP150,  or  both  RSP150  and
MRSP150.


SEMI E117-1104 © SEMI 2002, 2004 2
6  Requirements
6. 1  Figures     and     Tables     —     The     dimensional
requirements   for   a   reticle   load   port   (and   for   the
placement  of  an  RSP  on  that  load  port)  are  given  in
Table  1  with  reference  to  the  figures  in  this  document.
Although  the  carrier  transport  systems  shown  in  these
figures represent an overhead transport system using an
OHT delivery vehicle, they are intended to represent all
types   of   transport   systems   (AGV,   PGV,   conveyor,
overhead track, etc.).
6. 2  Orientation   —   The   reticles   are   to   be   oriented
horizontally   (chrome   down)   with   zero   nominal   tilt
when the RSP is placed on the load port. The tolerance
in the horizontal plane is determined by the registration
and  alignment  feature  between  the  RSP  and  the  load
port,  as  specified  in  SEMI  E19.3  or  SEMI  E19.4.    The
RSP shall be loaded and unloaded with its front (where
reticles are inserted and extracted after the SMIF pod is
opened)  parallel  to  and  away  from  the  load  face  plane
(see Figure 2).
6. 3  Side  Clearances  —  Clearances  C1  and  C2  are
defined with respect to the maximum dimensions of the
footprint  of  the  RSP  (as  specified  in  SEMI  E19.3  or
SEMI  E19.4),  not  to  the  rectangular  carrier  envelope
(defined in SEMI E15). Note that C1 is lateral clearance
to  the  left  and  right  of  the  RSP,  but  C2  is  a  radial
clearance from the nearest point of the RSP.
6. 4  Overhead  Clearances  —  All  load  ports  intended
for  automated  overhead  access  must  be  open  from
above  to  facilitate  automatic  RSP  delivery.    The  open
volume  required  for  automated  overhead  delivery  is
defined by a projection of the load port area, including
the  area  required  for  C1  and  C2  clearances,  projected
upward to the top of the equipment.  To allow space for
overhead  delivery  above  H2,  D1  also  defines  the  open
volume. Note that this condition need only be met when
the   equipment   is   being   loaded   or   unloaded.   For
example, the load port may be formed by a surface that
extends  outward  during  loading  to  provide  overhead
access.
6. 5  Easement for Overhead Transport — As shown in
Figure  1  and  Figure  2,  to  add  clearance  for  overhead
RSP transport, no part of the equipment may be higher
than H2 above the floor along an easement between the
load  ports  of  adjacent  equipment  down  the  bay.    On  a
reticle   stocker,   on   inspection   equipment,   and   on
lithography exposure equipment that  has  the  load  ports
on  the  far  end  from  the  litho  track,  this  easement  is
between  the  load  face  plane  and  a  plane  parallel  to  it
that   is   D1   beyond   the   facial   reference   plane.   On
lithography exposure equipment that  has  the  load  ports
on  a  side  adjacent  to  the  litho  track,  this  easement  is
between  two  planes  parallel  to  the  bilateral  reference
plane  at  the  furthest  reach  of  clearance  C1  to  the  left
and right of the set of load ports.  Such tools must also
have an additional easement above H6 between the load
face  plane  and  a  plane  parallel  to  it  that  is  D1  beyond
the  facial  reference  plane.    It  is  recommended  that
transport  equipment  using  these  easements  have  extra
clearance     to     avoid     contacting     any     equipment
boundaries.
6. 6  Loading Obstructions — As shown in Figure 3, the
maximum  allowable  height  of  an  obstruction  on  the
load  port  over  which  the  RSP  must  be  lifted  (before
being   set   down   on   the   SMIF   interface)   is   H1.
Examples   of   such   obstructions   include   alignment
devices  and  identification  tag  readers  (as  well  as  the
SMIF port itself).  In the volume between the horizontal
reference plane and H1 above it, clearances C1 and C2
no longer apply.
6. 7  Load Port Lead In — The load port must provide a
lead-in  capability  (in  addition  to  that  required  on  the
SMIF port) that corrects an RSP misalignment distance
of R in any horizontal direction.
6. 8  Adjacent  Load  Ports  —  All  reticle  load  ports  for
automated  access  must  be  on  the  same  side  of  the
equipment.    All  equipment  must  have  at  least  one  load
port  with  access  for  automated  overhead  delivery.    At
least  two  of  these  load  ports  are  recommended  to
support  equipment  throughput.    Auxiliary  load  ports
intended  for  manual  delivery  may  be  located  on  a
different  side  of  the  equipment.  On  each  piece  of
equipment,    reticle    load    ports    are    numbered    in
increasing  order  (beginning  with  1)  from  left  to  right
(as   seen   by   a   person   facing   the   load   face   plane)
beginning with reticle load ports in the lowest level and
then continuing (from left to right) with any reticle load
ports   at   higher   levels.   Dimension   S   specifies   the
spacing between adjacent reticle load ports.
6. 9  As  shown  in  Figure  4,  reticle  load  ports  must
conform  to  one  of  the  following  configuration  options.
If no option is specified, Option 1 is assumed.
6. 9.1  In  Option  1,  the  load  port  must  nominally  be  at
H,   and   it   must   be   open   from   above   to   facilitate
automatic  carrier  delivery  from  an  overhead  transport
system.  The open volume required for vertical delivery
is  defined  by  a  projection  of  the  tool  load  port  area,
including  the  area  required  for  C1  and  C2  clearances,
projected  upward  to  the  top  of  the  tool.    Note  that  this
condition  need  only  be  met  when  the  tool  is  being
loaded.  For example, the load port may be formed by a
surface  that  extends  outward  during  loading  to  provide
overhead access.
6. 9.2  In   Option   2   (which   allows   faster   automatic
carrier delivery from an overhead transport system), the
top  of  the  carrier  must  be  ≤H2  (2900  for  exposure
