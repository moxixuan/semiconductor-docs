---
title: "G31-0997 - © SEMI 1986, 19975..."
description: "SEMI标准文档"
sidebar_label: "G31-0997 - © SEMI 1986, 19975..."
sidebar_position: 1240
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-124.pdf'
  chapter: 124
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/124.pdf"
  pdfSize="1.25MB"
  title="G31-0997 - © SEMI 1986, 19975..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI G31-0997 © SEMI 1986, 19975
Figure 5
Orifice
Figure 6
Cover
NOTICE:
These  standards  do  not  purport  to  address  safety  issues,  if  any,  associated  with  their  use.  It  is  the
responsibility  of  the  user  of  these  standards  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory limitations prior to use. SEMI makes no warranties or representations as to the suitability
of the standards set forth herein for any particular application. The determination of the suitability of the standard is
solely  the  responsibility  of  the  user.  Users  are  cautioned  to  refer  to  manufacturer’s  instructions,  product  labels,
product  data  sheets,  and  other  relevant  literature  respecting  any  materials  mentioned  herein.  These  standards  are
subject to change without notice.
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

SEMI G32-94 © SEMI 1986, 19941
SEMI G32-94
GUIDELINE FOR UNENCAPSULATED THERMAL TEST CHIP
1  Preface
This     guideline     details     recommendations     for     a
standardized  thermal  test  chip  design  for  referee  test
purposes. A sample data format for the test chip can be
found in Appendix A. Based on the results of computer
simulations   of   various   chip-substrate   configurations
(Section 3.1), the following recommendations are made
for  the  design  of  thermal  test  chips  for  VLSI  package
characterization (Section 3.2).
2  General Guideline
2. 1  Heat Sources — The heat sour ces (i.e., transistors
or  resistor  stripes),  should  use  as  much  of  the  active
chip  area  as  possible  so  that  the  measured  package
thermal  resistance  is  indicative  of  the  chip  size  being
used.  A  10  mil  (0.25  mm)  parameter  stripe  (inactive
area)  should  be  sufficient  for  bonding  pads  and  scribe
lanes. It is desirable to use a range of test chip sizes so
that  the  package  thermal  resistance  can  be  determined
as  a  function  of  chip  size.  A  basic  cell  size  of  75  mil
(1.91 mm) square with a power dissipation capability of
7. 5  to  10  W  is  recommended.  The  heat  source  area
should  exceed  85%  of  this  basic  cell  active  chip  area.
This  basic  cell  could  be  arrayed  or  scaled  up  to  a  450
mil  (11.43  mm)  square  chip  in  increments  of  75  mil
(1.91 mm) on a side. For larger chip sizes, the basic cell
size should be chosen so arrays can match the chip sizes
in actual use. Since the larger chips can be 15—20 mm
per  side,  the  basic  cell  may  need  to  be  5  mm  per  side,
so a 3 × 3 array can be 15 mm square minimum.
2. 2   Spacing  between  Heat  Sources  —  The  spacing
between heat sources, which is needed to accommodate
the  temperature-sensing  elements  (i.e.,  p-n  junctions),
should  be  minimized.  The  spacing  should  be  less  than
or  equal  to  2  mil  (0.051  mm).  The  sensing  element
should  be  located  at  the  center  of  the  chip  surface.  For
chips  that  are  built  up  from  an  array  of  standard  cells,
sensing  elements  are  also  needed  near  a  corner  and
between   two   adjacent   corners   (i.e.,   near   or   in   the
inactive  regions),  of  the  basic  cell.  Additional  sensing
elements for such purposes as die attachment evaluation
and  non-uniform  power  dissipation  studies  may  be
included   as   appropriate.   All   sensing   elements   and
associated   metallization   runs   must   be   electrically
isolated from the heat sources.
2. 3   Thermal  Test  Chip  Thickness  —   T he  thermal  test
chip thickness should be between 18 mil (0.46 mm) and
22  mil  (0.56  mm).  For  thin  packages,  the  test  chip
thickness should be reduced to the normal die thickness
for that package.
2. 4  Thermal Test Chip — The ther mal test chip should
be  designed  such  that  its  power  dissipation  limitations
are   consistent   with   the   range   of   package   thermal
resistance encountered. This includes properly designed
metallization   runs   such   that   for   arrayed   test   chips,
heating  current  for  inner  chips  is  routed  so  that  wire
runs  from  the  package  to  inner  chips  are  minimized.
The  ability  to  cause  a  chip  surface-to-case  temperature
difference  of  at  least  20°C  is  desirable.  To  accomplish
this for silicon chips mounted on a variety of substrates
(ranging   from   alumina   to   beryllia),   the   basic   cell
structure  (i.e.,  75  mil  (1.91  mm)  on  a  side)  should
dissipate a minimum of 7.5 W.
2. 5  Bond Pads — Band pads (clea r opening) should be
equal  to  or  greater  than  4  mil  (0.10  mm)  on  a  side.
Sensing  and  heating  elements  should  not  be  connected
to  common  bonding  pads.  Bonding  pad  location  and
size  can  or  should  be  configured  such  that  for  arrayed
test   chips,   chip-to-chip   bonding   is   facilitated   (i.e.,
bonding  wire  runs  from  the  package  to  inner  chips  are
minimized),  but  this  is  not  mandatory  for  acceptable
functional operation.
2. 6       Temperature-Sensing      Diode/D iode      Bridge
Elements   —   The   temperature-sensing   diode/diode
bridge  elements  should  be  usable  over  the  complete
operating  power  and  temperature  range  of  the  thermal
test  chip.  The  thermal  test  chip  should  function  at
junction temperature of 130°C minimum.
2. 7   Arrayed  and  Scaled  Up  Therm al  Test  Chips —
Pictorial   representation   of   arrayed   and   scaled   up
thermal  test  chips  are  depicted  in  Figures  1  and  2,
respectively.   Heating   elements   (shaded   areas)   are
transistors  or  resistor  stripes  connected  in  a  variety  of
series-parallel  combinations  on  as  well  as  off  the  chip.
The heating elements should fill as much of the shaded
area  as  practical  (consistent  with  the  integrated  circuit
layout design rules).
3  References
3. 1      Albers,     J.,     “Semiconductor     Me asurement
Technology:  TXYZ:  A  Program  for  Semiconductor  IC
Thermal  Analysis,”  NIST  Spec.  Publ.  400-76  (April
1984).
3. 2   Oettinger,  F.F.,  “Thermal  Eval uation  of  VLSI
Packages  Using  Test  Chips  —  A  Critical  Review,”
Solid State Technology 27, 169 - 179 (Feb. 1984).

SEMI G32-94 © SEMI 1986, 19942
APPENDIX A
Sample Data Format for an Unencapsulated
Thermal Test Chip
A1  General Description
(Select appropriate descriptors)
This  device  is  an  unencapsulated  bipolar,  MOS  silicon
chip,  with  metallized  top,  metallized  top  and  bottom
surface(s),    with    transistors    or    with    metal    film
polysilicon,  implanted,  diffused  resistors  for  heating,
and with emitter-base transistor, diode p-n junctions for
temperature-sensing      in      a      diode/diode      bridge
arrangement.  This  device  is  designed  for  thermally
characterizing integrated circuit packages.
A2  Mechanical Data

# 1

1.   Show   dimensioned   drawing   of   chip   indicating
temperature-sensing  and  heating  elements,  on-chip
interconnects,  and  bonding  pad  locations.  Identify
all  bonding  pads,  indicate  any  bonding  pads  that
must be connected to most negative or most positive
external    biases.    State    whether    an    electrically
conductive  connection  to  the  bottom  (back)  surface
of the chip is required for proper operation.

# 2

2.   State chip thickness.

# 3

3.   State   all   necessary   handling   and   chip   testing
precautions.

# 4

4.   State type of metallization used on chip top contact
areas and on bottom mounting surface.

# 5

5.   State  type  of  junction  passivation  used  and  any
special    mounting    ambient    requirements.    State
preferred    chip    mounting    and    lead    bonding
procedures.

# 6

6.   Show  wire  bonding  configurations  for  various  chip
arrays and indicate heating power limits.
A3  Maximum Ratings
1. Temperature
a.   Storage temperature range, T
stg
°C to
°C
b.   Operating junction temperature range, T
J
°C to
°C
2. Voltage Over Operating Temperature Range
a.   DC   voltage   applied   to   collector   of   heating
transistors,  or  to  heating  resistors  (limited  by
reverse  voltage  breakdown  of  substrate  diode),
V
H
— _____  V
3. Current Over Operating Temperature Range
a.   DC   current   applied   to   collector   of   heating
transistors, or to heating resistors, I
H
— _____ A
A4  Electric Characteristics
1. Temperature-Sensing Element (Diodes)
a.   Reverse leakage current at    T
A
=  _____  °C  and
V
R
V, I
R
— _____  mA
b.   Forward   measuring   current   range   applied   to
sensing   p-n   junction   over   which   temperature
coefficient is linear, I
M
—              mA  to  _____
mA
c.   Forward  voltage  drop  at  maximum  measuring
current and T
A
= 25°C, V
M
—                V
2. Heating Element (Transistors or Resistors)
a.   Forward   current   transfer   ratio   of   transistor
heating  elements  at  maximum  collector  voltage
and collector current at T
A
= 25°C, h
FE
—
or,
b.   Resistance  of  resistor  heating  elements  at  T
A
=
25°C, RH —              ohms
A5  Additional Information
The  following  information,  which  depends  upon  the
mounting  of  the  chip  and  connection  of  lead  wires,  is
given   only   as   an   indication   of   the   full   electrical
capability  of  the  chip.  No  guarantee  is  to  be  inferred
from  the  following  information.  When  this  chip  is
properly   assembled   in   a   ceramic   integrated   circuit
package,  the  following  electrical  specifications  for  the
heating elements may be expected:
Max. Power Rating at T
C
=25°C, P
H
—               W

SEMI G32-94 © SEMI 1986, 19943
Figure 1
Pictorial Representation of Arrayed Thermal Test Chip

SEMI G32-94 © SEMI 1986, 19944
Figure 2
Pictorial Representation of Scaled Test Chip
NOTICE: These  standards  do  not  purport  to  address  safety  issues,  if  any,  associated  with  their  use.  It  is  the
responsibility  of  the  user  of  these  standards  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory limitations prior to use. SEMI makes no warranties or representations as to the suitability
of the standards set forth herein for any particular application. The determination of the suitability of the standard is
solely  the  responsibility  of  the  user.  Users  are  cautioned  to  refer  to  manufacturer’s  instructions,  product  labels,
product  data  sheets,  and  other  relevant  literature  respecting  any  materials  mentioned  herein.  These  standards  are
subject to change without notice.
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

SEMI G33-90 © SEMI 1986, 19961
SEMI G33-90
SPECIFICATION FOR PRESSED CERAMIC PIN GRID ARRAY
PACKAGES
1  Preface
This  specification  defines  the  acceptance  criteria  for
ceramic pin grid array packages produced using pressed
ceramic,   mechanically   inserted   pins   and   solder   for
electrical interconnection of pins.
2  Applicable Documents
2. 1  ANSI Specification
1
Y14.5 — Dimensioning and Tolerancing
2. 2  ASTM Specification
2
B 152 — Copper Metal Specification
2. 3  Federal Specification
3
QQ-N-290A — Nickel Plating
QQ-S-571E — Solder-Alloy Compositions
2. 4  Military Specifications
3
MIL-STD-105  —  Sampling  Procedures  and  Tables  for
Inspection by Attributes
MIL-STD-883  —  Test  Methods  and  Procedures  for
Microelectronics
MIL-G-45204 — Gold Plating, Electrodeposited
MIL-M-38510      —      General      Specification      for
Microcircuits
2. 5  JEDEC Specification
4
Pub.  No.  95  —  Registered  and  Standard  Outlines  for
Semiconductor Devices
3  Selected Definitions
blister  (bubble)  ceramic  —  Any  separation  within  the
ceramic  which  does  not  expose  underlying  ceramic
material.
blister   (bubble)   metal   —   Any   localized   separation
within  the  metallization  or  between  the  metallization
and    ceramic    which    does    not    expose    underlying
metallization or ceramic material.

1 ANSI, 1430 Broadway, New York, NY 10018
2 American Society of Testing and Materials, 100 Barr Harbor Drive,
West Conshohoken, PA 19428-2959
3 Military Standards, Naval Publications and Form Center, 5801
Tabor Avenue, Philadelphia, PA 19120
4 JEDEC, 2001 Eye Street N.W., Washington, D.C. 20006
burr — An adherent fragment of excess parent material
at the component edge.
chip — A region of ceramic missing from the surface or
edge   of   a   package   which   does   not   go   completely
through  the  package.  Chip  size  is  given  by  its  length,
width  and  depth  from  a  projection  of  design  planform
(see Figure 1).
crack  —  A  cleavage  or  fracture  that  extends  to  the
surface  of  a  package  which  may  or  may  not  pass
through the entire thickness of the package.
contact  pad  —  That  metallized  pattern  that  provides
mechanical   or   electrical   connection   to   the   external
circuitry.
die attach surface — A dimensional outline designated
for die attach.
dielectric  —  A  material  applied  to  the  surface  of  a
package  which  provides  such  functions  as  electrical
insulation,  passivation  of  underlying  metallization  and
limitation of solder flow.
discoloration   —   Any   change   in   the   color   of   the
package metallization as detected by the unaided eye.
flatness — The allowable deviation of a surface from a
reference  plane.  The  tolerance  zone  is  defined  by  two
parallel planes within which the surface must lie.
footprint — Pin pattern.
foreign  material  —  An  adherent  particle  other  than
parent material.
isolation  gap  —  Metal-free  space  between  conductive
areas.
peeling  (flaking)  —  Any  separation  of  metallization
from the base material exposing the base material.
pit — Any unspecified depression in the package.
post-metallization     —     The     process     by     which
metallization  is  applied  to  a  body  (substrate)  after  the
body has been fully sintered.
projection  —  An  adherent  fragment  of  parent  material
on the package surface.
pullback — The linear distance between the edge of the
ceramic  and  the  first  measurable  metallization  and/or
glass interface (see Figure 2).
refractory metallization — The process by which a high
melting  point  (typically  in  excess  of  1800°C)  metal  or

SEMI G33-90 © SEMI 1986, 19962
combination  of  metals  is  applied  to  a  suitable  substrate
and fired.
rundown  —  The  vertical  extension  of  metallization
from the ceramic (see Figure 2).
seal  area  —  A  dimensional  outline  area  designated  to
provide a surface for sealing.
seating plane — Defined by the standoff features or the
package base plane if no standoff is used (see Figure 3).
SLAM   —   Abbreviation   for   “Single   Layer   Alumina
Metallization,” which denotes a package design without
a physical die attach cavity.
solder — An alloy with a melting point equal to or less
than 427°C.
standoff  —  The  designed  separation  between  the  base
plane   and   the   seating   plane   created   by   a   physical
feature.  Standoff  use,  configuration,  and  placement  is
optional (see Figure 3).
terminal  —  Case  outline  at  point  of  entry  or  exit  of  an
electrical contact.
thick film metallization — The process by which a thin
layer  of  metal  (usually  in  the  0.3  to  1.0  μm  range)  is
applied  to  a  suitable  substrate  by  methods  including
sputtering,  vacuum  evaporation  and  chemical  vapor
deposition.
TIR — Total Indicator Reading.
window frame — A separate member of ceramic which
is  joined  to  the  surface  of  the  package  on  which  a  flat
lid is attached for sealing.
4  Ordering Information
Purchase orders for pin grid array packages furnished to
this specification shall include the following items:
1.   Drawing number and revision level
2.   Certification requirements
3.   Quantity
4.   Reference to this document
5.   Any exceptions to print or specifications
5  Dimensions and Permissi b le Variations
The  dimensions  of  the  pin  grid  array  package  shall
conform   to   SEMI   Standards   or   to   the   customer
drawing,  and  be  within  the  outline  of  the  appropriate
JEDEC standard.
6  Material Parameters
The    definitions,    defects,    and    functional    testing
described   in   this   specification   relate   directly   to   a
nominal  package  made  with  the  following  materials.
They  may  also  be  applicable  to  similar  pin  grid  array
packages made with other materials.
6. 1  Ceramic Properties
6. 1.1   Materials  —  Alumina  content   90%  minimum.
Beryllia content to be in excess of 98.5% BeO.
6. 1.2  Color — Dark or white.
6. 2  Metal Properties
6. 2.1  Plating
6. 2.1.1    Plating   finish   shall   be   per   MIL -M-38510;
Nickel Plating (if designated) shall be per QQ-N-290A,
50 μ"–350 μ" (0.1300 mm–0.08890 mm).  Gold plating
(if  desired)  shall  conform  to  MIL-G-45204,  Type  III
and 50 μ"–225 μ" (0.1300 mm–0.05080 mm).
6. 2.2  Metallization
6. 2.2.1  Metallized circuits and areas c an be thick film,
thin     film     or     refractory     post-metallized.     Such
metallization  materials  may  be,  but  are  not  limited  to,
the following:
1. Thick Film Materials
a.   Gold (Au) and Gold Alloys
b.    Silver (Ag)
c.   Silver - Platinum - Palladium (AgPtPd)
d.   Silver - Palladium - Platinum (AgPdPt)
e.   Copper (Cu)
2.    Thin Film Materials
a.   Copper (Cu)
b.   Chromium (Cr)
c.   Nickel (Ni)
d.   Titanium (Ti)
4. Refractory Materials
a.   Molybdenum - Manganese (MoMn)
b.   Molybdenum - Tungsten (MoW)
6. 2.3    Solder   —   Solder   compositions    used   in   the
manufacture of pressed ceramic pin grid array packages
shall  include,  but  not  be  limited  to,  the  following,  per
QQ-S-571E:
1.   10/90 — 10% Sn/90% Pb

SEMI G33-90 © SEMI 1986, 19963
2.   63/37 — 63% Sn/37% Pb
3.   10/88/2 — 10% Sn/88% Pb/2% Ag
6. 2.4    Pin   Material   —   CDA150,   OFH C   Copper,
Zirconium alloy per ASTM B 152.
6. 3    Thick   Film   Dielectric   —   An   am orphous   or
polycrystalline  glass  or  approved  equivalent  ranging  in
thickness   from   0.013   mm   (0.0005")   to   0.038   mm
(0.0015").
7  Defect Limits
A  magnification  of  10×  shall  be  used  to  inspect  the
packages unless otherwise specified.
7. 1  Ceramic
7. 1.1  Cracks — Per MIL-STD-883,  Method 2009.
7. 1.2  Chips — (See Figure 1.)
7. 1.2.1 General
7. 1.2.1.1  Corner — Chips shall not exce ed 0.762 mm
(0.030") length × 0.762 mm (0.030") width × 0.762 mm
(0.030") depth (see Figure 1-B).
7. 1.2.1.2   Edge  —  Chips  shall  not  excee d  1.52  mm
(0.060") length × 0.635 mm (0.025") width × 0.635 mm
(0.025") depth (see Figure 1-A).
7. 1.2.1.3   Chips  cannot  encroach  upon  c ontact  pad  or
penetrate metallization.
7. 1.2.2  Seal Area
7. 1.2.2.1 Design  With  Window  Frame  —   Chips  shall
not  exceed  0.635  mm  (0.025")  length  ×  0.635  mm
(0.025")  width  ×  0.635  mm  (0.025")  depth  maximum.
Chips  cannot  reduce  the  seal  area  width  by  more  than
1/3 of the design width.
7. 1.2.2.2    Design   Without   Window   Fram e   —   See
Section 7.5 of this specification for dielectric inspection
criteria.
7. 1.2.3  Cavity Edges
7. 1.2.3.1  Chips in the edges around the  cavity shall not
exceed  0.381  mm  (0.015")  along  the  edges  or  0.127
mm (0.005") in depth.
7. 2  Package Flatness — 0.004 inc h/inch maximum
7. 2.1  Seal Area Flatness
7. 2.1.1  With Window Frame
Seal Area SizeSeal Area Flatness (TIR)
0–12.7 mm (0.000"-0.500")0.051 mm (0.002") MAX
12. 72–19.05 mm (0.501"-0.750")   0.076 mm (0.003") MAX
19. 07 mm & greater (0.751")0.101 mm (0.004") MAX
7. 2.1.2   Without  Window  Frame  —  Fla tness  shall  be
0. 004" per inch maximum TIR.
7. 2.2  Die Attach Area Flatness
Die Attach Area Size
Die Attach Area Flatness
(TIR)
0–12.7 mm (0.000"-0.500")0.051 mm (0.002") MAX
12. 72–19.05 mm (0.501"-0.750")   0.088 mm (0.0035") MAX
7. 3  Metallization Misalignment (s ee Figure 2)
7. 3.1  Metallization Rundown — For  the internal cavity
shall  not  exceed  25%  of  the  cavity  depth,  with  a
minimum  of  0.127  mm  (0.005")  minimum  isolation
required.
7. 3.2    Wire   Bond   Finger   Pullback   —    0.254   mm
(0.010") maximum.
7. 3.3   Wire  Bond  Finger  Rundown  —   Not  to  exceed
1/3  of  the  ceramic  cavity  depth;  0.127  mm  (0.005")
isolation required.
7. 3.4   Pattern  Isolation  —  Dimensio n  shall  not  be
reduced by more than 50% of the design.
7. 4  Metallization Voids
7. 4.1   Wire  Bond  Finger  —  Must  be   free  of  voids  or
bare  spots  in  the  bonding  area  as  defined  by  customer
drawing.
7. 4.2  Die Attach Surface
7. 4.2.1  SLAM Design — Three voids  are allowed, with
a  maximum  of  0.127  mm  (0.005")  diameter  separated
by  a  distance  greater  than  0.254  mm  (0.010").  Voids
within  0.254  mm  (0.010")  of  perimeter  of  die  attach
print  area  shall  not  be  considered  as  the  basis  for
rejection.
7. 4.2.2  Cavity Design — Three voids  are allowed with
a  maximum  of  0.254  mm  (0.010")  diameter  separated
by  a  distance  greater  than  0.254  mm  (0.010").  Voids
within 0.381 mm (0.015") of die attach cavity wall shall
not be considered as the basis for rejection.
7. 4.3  Solder
7. 4.3.1   Pin  Coating  —  Solder  wetting   acceptability
shall be per criteria in MIL-STD-883, Method 2003.

SEMI G33-90 © SEMI 1986, 19964
7. 4.3.2   Contact  Pad  Coating  —  A  min imum  of  50%
filleting  must  exist  on  the  pin  to  pad  solder  joint  with
no exposed copper. A maximum of 0.889 mm (0.035")
height  of  solder  shall  be  allowed  on  pin  to  pad  solder
joints.
7. 5  Dielectric
7. 5.1   Voids  —  No  single  void  in  the   dielectric  shall
expose  two  adjacent  traces.  Voids  in  the  dielectric
closer  than  0.635  mm  (0.025")  shall  not  expose  two
adjacent traces.
7. 5.2      Contamination     —     There     shall      be     no
contamination or foreign material upon dielectric with a
diameter greater than 0.381 mm (0.015").
8  Sampling
Sampling  size  must  meet  the  requirements  of  MIL-
STD-105  or  MIL-M-38510  or  as  agreed  to  between
vendor   and   customer.   Single,   double,   or   multiple
samples   may   be   used   per   vendor   and   customer
agreement.
9  Test Methods
9. 1   Mechanical,  electrical,  and  the rmal  test  methods
are per MIL-STD-883, unless otherwise noted.
9. 1.1  Lead Pull — Under the test co ndition of five (5)
pounds  ±  one  quarter  (1/4)  pound,  pull  at  an  angle  of
20°   or   less   from   the   pins   vertical   line   measured
perpendicular  to  the  package,  there  shall  be  no  visible
separation of the solder joint under 10× magnification.
9. 1.2   Lead  Fatigue  —  Shall  be  per  M IL-STD-883,
Method 2004, Test Condition B2, Paragraph 3.2.
9. 2  Functional Test Methods
9. 2.1  Die Attach Quality  —  Destruc tive  die  shear  test
shall  be  after  environmental  testing  shall  be  per  MIL-
STD-883, Method 2019, Paragraph 3.2C.
9. 2.2   Wire  Bond  Quality  —  Minimu m  pre-seal  and
post-seal   bond   strength   test   is   per   MIL-STD-883,
Method  2011,  Test  Condition  D.  Reject  for  bonds
which  cause  metallization  to  lift  from  the  package  or
fail to meet minimum strength requirement.
9. 2.3    Solderability   —   Per   MIL-STD -883,   Method

# 2003

2003.
9. 2.4  Insulation Resistance Test — P er MIL-STD-883,
Method 1003, Condition D.
9. 2.5   Hermetic  and  Environmental  T esting  —  Per
MIL-STD-883.
9. 2.5.1  The hermetic integrity of the p ackage must be
maintained  after  all  environmental  testing.  Hermetic
checks shall comply with MIL-STD-883, Method 1014
Test Conditions A, B, C or D.
9. 2.5.2  Environmental testing shall inc lude, but not be
limited to, the following:
1.   Temperature   Cycle   per   MIL-STD-883,   Method
1010, Condition B.
2.   Thermal  Shock  per  MIL-STD-883,  Method  1011,
Condition B.
3.   Centrifuge    per    MIL-STD-883,    Method    2001,
Condition  E.  Y1  axis  only  —  cavity  up;  Y2  axis
only — cavity down. (optional)
4.   Mechanical   Shock   per   MIL-STD-883,   Method
2002, Condition B.
5.   Vibration    per    MIL-STD-883,    Method    2007,
Condition A.
NOTE: Package applications requiring a heat sink attach will
have  the  environmental  tests  (temperature  cycle,  shock,  etc.)
evaluated  on  an  individual  basis.  The  material,  form  factor
and  method  of  attachment  used  for  heat  sinks  may  result  in
severe stresses on the package assembly during environmental
testing.  Actual  accelerated  test  requirements  should  be  based
on the expected product application environment and may be
less stringent than those tests for packages without heat sinks.
10  Sequence of Events and I ncoming Testing
During  incoming  inspection,  the  sequence  of  testing
shall be:
1.   Visual
2.   Dimensional
3.   Functional
a.   Die Attach
b.   Wire Bond
c.   Pre-Seal Wire Pull
d.   Seal
e.   Heat Sink Attach (if applicable)
f.   Environmental Test
g.   Fine    Leak,    MIL-STD-883,    Method    1014,
Condition B
h.   Gross    Leak,    MIL-STD-883,    Method    1014,
Condition C
i.   Post-Seal Bond Pull
j.   Radiography
k.   Die Shear, MIL-STD-883, Method 2019
l.   Solderability, MIL-STD-883, Method 2003

SEMI G33-90 © SEMI 1986, 19965
NOTE:  An  initial  vendor  qualification  may  be  performed  on
the  thermal  and  electrical  characteristics  of  the  package.  The
characteristics tested will be:
Insulation  Resistance  —  Per  MIL-STD-883,  Method
1003, Test Condition D.
Thermal  Dissipation  —  Per  MIL-STD-883,  Method

# 1012

1012.
11  Packaging and Marking
11. 1  Packaging — Containers selec ted shall be strong
enough  and  suitably  designed  to  provide  maximum
protection against crushing, spillage, and other forms of
damage to the container or its contents or contamination
from  exposure  to  excessive  moisture  or  oxidation  by
gases.   Packaging   materials   shall   be   so   selected   to
prevent  any  contamination  of  the  ceramic  component
parts with fibers or organic particles.
11. 2  Marking — The outer containe rs shall be clearly
marked identifying the customer part number, customer
purchase  order  number,  drawing  number  (optional),
quantity, date, and vendor lot number (optional).
Figure 1
Chip Illustration
Figure 2
Metallization Misalignment
Figure 3
Seating Plane
NOTICE: These  standards  do  not  purport  to  address
safety  issues,  if  any,  associated  with  their  use.  It  is  the
responsibility of the user of these standards to establish
appropriate  safety  and  health  practices  and  determine
the  applicability  of  regulatory  limitations  prior  to  use.
SEMI  makes  no  warranties  or  representations  as  to  the
suitability  of  the  standards  set  forth  herein  for  any
particular    application.    The    determination    of    the
suitability of the standard is solely the responsibility of
the user. Users are cautioned to refer to manufacturer’s
instructions,  product  labels,  product  data  sheets,  and
other    relevant    literature    respecting    any    materials
mentioned   herein.   These   standards   are   subject   to
change without notice.
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
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI G34-89 © SEMI 1986, 19961
SEMI G34-89
SPECIFICATION FOR CER-PACK PACKAGE CONSTRUCTIONS,
INCLUDING LEADFRAMES, SUITABLE FOR AUTOMATED ASSEMBLY
BY END USERS
1  Preface
This specification defines the standard requirements for
Cer-Pack  package  construction  intended  for  automated
assembly  to  printed  wiring  boards.  Acceptance  criteria
for  package  constructions,  including  leadframes,  are
included.
2  Applicable Documents
1
2. 1  This document specifically ref ers to:
MIL-STD-883 —  Test  Methods  and  Procedures  for
Microelectronics
2. 2  Related information may also  be found in:
MIL-M-38510      —      General      Specification      for
Microcircuits
3  Selected Definitions
burr  —  A  fragment  of  excess  material  or  foreign
particle adhering to the surface.
chip — Region of ceramic missing from the surface or
edge   of   a   package   which   does   not   go   completely
through  the  package.  Chip  size  is  given  by  its  length,
width,  and  depth  from  a  projection  of  the  design  plan-
form (see Figure 1).
crack   —   Cleavage   or   fracture   that   extends   to   the
surface  of  a  package.  It  may  or  may  not  pass  through
the entire thickness of the package.
critical seal area — The area bound by the shortest line
from the cavity corners to the ceramic edge (see Figure
2).
critical seal path — The nominal design distance across
the  critical  seal  area  from  the  die  cavity  to  ceramic
edge.
fin — A fine, feathery-edged projection on the edge or
corner of the ceramic.
glass  flow  —  Heated  sufficiently  to  remove  all  screen
mesh marks visible at 10× magnification.
non-critical  seal  area  —  Those  portions  of  the  sealing
surface falling outside the critical area (see Figure 2).

1 Military Standards, Naval Publications and Form Center, 5801
Tabor Avenue, Philadelphia, PA  19120
overhang  —  Horizontal  extension  of  glass  from  the
ceramic (see Figure 3).
projection  —  Raised  portion  of  the  surface  indigenous
with the parent material.
pull  back  —  Defines  a  dimension  covering  the  linear
distance  between  the  edge  of  the  ceramic  and  the  first
measurable glass interface (see Figures 3, 4, and 5).
rundown   —   Vertical   extension   of   glass   from   the
ceramic (see Figure 3).
seal area — A dimensional outline area designated for
sealing the base and cap together to provide a hermetic
seal (see Figure 5).
void  —  An  absence  of  metallization  or  glass  from  a
designated  metallized  or  glassed  area  on  the  ceramic
surface.
4  Ordering Information
Purchase order for Cer-Pack package devices furnished
to this specification shall include the following items:
1.   Drawing number and revision level
2.   Type and color of ceramic
3.   Type and thickness of glass
4.   Type and thickness of metallization
5.   Description
6.   Certification by vendor

# 7

7.   Method of test and measurements (see Section 9)

# 8

8.   Lot acceptance procedures (see Section 8)

# 9

9.   Packaging and marking (see Section 10)

# 10

10. Lead finish requirements (see Section 6.5)
5  Dimensions and Permissi b le Variations
Packaged  device  dimensions  shall  conform  to  JEDEC
JC-11  registered  outline  dimensions  for  Cer-Packs  for
Automated Assembly.
6  Materials
6. 1  Ceramic
6. 1.1  Alumina content to be 90% mi nimum.

SEMI G34-89 © SEMI 1986, 19962
6. 1.2  Color — Black, dark brown, o r dark violet.
6. 2  Sealing Material — Solder gla ss designed to form
a hermetic seal. Glass type and temperature/time profile
shall be specified.
6. 3    Die   Attach   Pad —   Gold   (or   ot her   suitable
material).
6. 4  Leadframe — Fully annealed A lloy 42.
6. 5  Lead Finish — Unless otherw ise specified, hot tin-
lead  solder  dip,  Type  A,  per  MIL-M-38510,  to  within
0. 030" of lead seal on plated leads, and 100% coverage
if applied directly over base metal.
7  Defect Limits
7. 1  Ceramic
7. 1.1  Cracks — Cracks are not allow ed.
7. 1.2  Chips — See Figures 1 and 2.
7. 1.2.1   Corner  Chips —  0.762  mm  (0 .030")  ×  0.762
mm (0.030") × 25% of package element thickness.
7. 1.2.2  Edge Chips — 2.54 mm (0.060 ") × 0.762 mm
(0.030") × 25% of package element thickness.
7. 1.2.3   Critical  Seal  Area — Chips ca nnot reduce the
critical  seal  path  to  less  than  half  the  nominal  design
dimension  at  any  point.  No  more  than  four  chips  are
allowed in the critical seal area.
7. 1.3  Burrs, Projections, and Fins
7. 1.3.1  Cap — 0.127 mm (0.005") ma ximum.
7. 1.3.2  Base — 0.076 mm (0.003") ma ximum.
7. 1.3.3   Die  Attach  Surface  —  0.025  m m  (0.001")
maximum  above  metallization  excluding  a  0.254  mm
(0.010") perimeter.
7. 1.4  Camber — 0.050 mm (0.002")  camber permitted
up to maximum of 0.004 inch/inch (mm/mm).
7. 2  Glass
7. 2.1   Chips  or  Voids  —  Chips  in  the   glass  or  missing
glass  is  allowed,  provided  the  region  of  the  chipped  or
missing   glass   meets   the   minimum   specified   glass
thickness after melting the glass as specified.
7. 2.2   Glass  Misalignment —  (after  g lass  flow)  (see
Figure 3.)
7. 2.2.1   External  Overhang —  0.127  m m  (0.005")
maximum.
7. 2.2.2    External   Rundown —   30%   of    ceramic
thickness maximum.
7. 2.2.3  Pullback — See Table 1 and F igures 2, 3, and
4.
Table 1  Maximum Allowable Pullback
Side external (critical seal)0.010" (2.54 mm)
Side external (other)0.015" (0.381 mm)
End external0.020" (0.508 mm)
Side cavity0.010" (0.254 mm)
End cavity0.010" (0.254 mm)
NOTE:  Maximum  allowable  critical  seal  area  reduction  on
any  one  side  between  side  cavity  and  side  external  shall  not
reduce critical seal path to less than 0.635 mm (0.025").
8  Sampling
Sampling  will  be  determined  between  supplier  and
purchaser.
9  Functional Test Methods
9. 1  Die Attach Quality
9. 1.1  Visually inspect preform weto ut after die attach.
Minimum fillet shall be 75% of the die perimeter.
9. 1.2     Perform    destructive    die    shear    t est    post
environmental testing per MIL-STD-883, Method 2019.
9. 1.3   Inspect  to  reveal  voids  in  the  d ie  attach  eutectic
alloy or approved silver-filled glass per MIL-STD-883,
Method 2012.
9. 2  Lead Bond Quality — Perform   minimum pre-seal
and  post-seal  bond  strength  test  per  MIL-STD-883,
Method  2011,  Test  Condition  D.  Reject  for  bonds
causing  the  metallization  to  lift  from  the  leadframe
post.
9. 3  Hermetic Environmental Testi ng
9. 3.1   The  hermetic  integrity  of  the  p ackage  must  be
maintained  after  all  environmental  testing.  Hermetic
check  shall  comply  with  MIL-STD-883,  Method  1014,
Test Condition A, or B and C.
9. 3.2   Environmental  testing  shall  inc lude,  but  not  be
limited to, the following:
9. 3.2.1  Temperature Cycle per MIL-S TD-883, Method
1010, Condition C.
9. 3.2.2   Thermal  Shock  per  MIL-STD-8 83,  Method
1011, Condition B.
9. 3.2.3   Centrifuge  per  MIL-STD-883,   Method  2001,
Condition D, Y axis only.
9. 3.2.4     Moisture    Resistance    per    MIL-S TD-883,
Method 1004.
9. 4    Die   Attach   Material   Thickness —   Die   attach
material thickness shall be measured by standard cross-
sectioning without smearing.

SEMI G34-89 © SEMI 1986, 19963
9. 5  Solderability — Per MIL-STD -883, Method 2003.
9. 6   Sequence  of  Events  and  Incom ing  Testing —
During  incoming  inspection,  the  sequence  of  testing
shall be:
1.   Frame Attach
2.   Die Attach
3.   Bond (if applicable)
4.   Seal
5.   Lead Finish (Type A per MIL-M-38510)
6.   Environmental Testing
7.   Lead Trim
8.   Fine Leak
9.   Gross Leak
10. Torque Test (test method pending)

# 11

11. Bond Pull

# 12

12. Die Shear (optional)
9. 6.1   Solderability  — A  separate  sam ple  with  lead
finish  Type  A  shall  be  subjected  to  preconditioning  of
Class  B  time/temperature  exposure  per  burn-in  Test
Method  1015,  MIL-STD-883,  then  tested  to  Method
2003.
NOTE:  An  initial  qualification  on  the  thermal  and  electrical
characteristics   of   the   package   may   be   performed.   The
characteristics tested will be:
Insulation  Resistance —  Per  MIL-STD-883,  Method
1003, Test Condition B.
Thermal  Dissipation —  Per  MIL-STD-883,  Method
1012.
10  Packaging and Marking
10. 1  Packaging — Containers selec ted shall be strong
enough  and  suitably  designed  to  provide  maximum
protection against crushing, spillage, and other forms of
damage to the container or its contents. Containers shall
afford  protection  of  the  contents  from  contamination
and  exposure  to  excessive  moisture  or  oxidation  by
gases.   Packaging   materials   shall   be   so   selected   to
prevent  any  contamination  of  the  ceramic  component
parts with paper fibers or organic particles.
10. 2  Marking — The outer containe rs shall be clearly
marked to identify the user stock number, user purchase
order  number,  drawing  number,  quantity,  vendor  lot
number, and solder glass type.
Figure 1
Chip Illustration
Non-Critical
Critical
Figure 2
Critical and Non-Critical Seal Areas
Figure 3
Glass Misalignment
Figure 4
Pullback Measurement Area

SEMI G34-89 © SEMI 1986, 19964
Seal Area
Figure 5
Seal Area
NOTICE: These  standards  do  not  purport  to  address
safety  issues,  if  any,  associated  with  their  use.  It  is  the
responsibility of the user of these standards to establish
appropriate  safety  and  health  practices  and  determine
the  applicability  of  regulatory  limitations  prior  to  use.
SEMI  makes  no  warranties  or  representations  as  to  the
suitability  of  the  standards  set  forth  herein  for  any
particular    application.    The    determination    of    the
suitability of the standard is solely the responsibility of
the user. Users are cautioned to refer to manufacturer’s
instructions,  product  labels,  product  data  sheets,  and
other    relevant    literature    respecting    any    materials
mentioned   herein.   These   standards   are   subject   to
change without notice.
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
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction of
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI G35-87 © SEMI 1986, 19871
SEMI G35-87
SPECIFICATION FOR TEST METHODS FOR LEAD FINISHES ON
SEMICONDUCTOR (ACTIVE) DEVICES
1  Scope
This  specification  shall  be  used  by  suppliers  and/or
users of semiconductor (active) devices, and is effective
for all lead finishes used.
2  Purpose
This   specification   establishes   uniform   methods   and
procedures  for  conducting  tests  on  lead  finishes  on
(active   device)   electronic   packages.   Other   SEMI
standards  establish  materials  used  and  the  finishes  for
them.
3  Applicable Documents
3. 1  Order of Precedence  —  In  the   event  of  a  conflict
between the text of this specification and the references
cited  herein,  the  text  of  this  specification  shall  take
precedence.
3. 2    Referenced   Documents   —   Unl ess   otherwise
specified,  the  following  standards  and  specifications,
with appropriate issue letter at time of order entry, form
a  part  of  this  specification  to  the  extent  and  for  the
purpose specified herein.
3. 3  ASTM Specifications
1
E 10 — Standard Test Method for Brinell Hardness for
Metallic Materials
E  122  —  Choice  of  Sample  Size  to  Estimate  the
Average Quality of a Lot or Process
E 384 — Standard Test Methods for Micro-Hardness of
Materials
B   487   —   Measuring   Metal   and   Oxide   Coating
Thickness  by  Microscopical  Examination  of  a  Cross
Section
B  545  —  Standard  Specification  for  Electro  Deposited
Coatings of Tin
B  567  —  Measurement  of  Coating  Thickness  by  the
Beta Backscatter Principle
B 568 — Measurement of Coating Thickness by X-Ray
Spectrometry
3. 4  Military Specifications
2

1 American Society for Testing and Materials, 100 Barr Harbor
Drive, West Conshohoken, PA 19428-2959
MIL-STD-883  —  Test  Methods  and  Procedures  for
Microelectronics
MIL-STD-105 — Sampling Procedures with Tables for
Inspection by Attributes
3. 5  SEMI Specifications
SEMI  G4  —  Integrated  Circuit  Leadframe  Materials
Used in the Production of Stamped Leadframes
SEMI  G18  —  Integrated  Circuit  Leadframe  Materials
Used in the Production of Etched Leadframes
SEMI   G20   —   Lead   Finishes   for   Plastic   Packages
(Active Devices Only)
4  Selected Definitions
active  devices  —  semiconductor  devices  with  active
function   (e.g.,   IC,   transistor,   diode)   as   opposed   to
passive devices (e.g., inductors, capacitors).
air  atmosphere  —  air  heated  to  specified  temperature
which,  when  cooled  to  ambient,  will  normalize  to  one
(1) standard atmosphere.
steam  atmosphere  —  atmosphere  in  a  closed  vessel
containing  water,  with  venting  sufficient  to  maintain
temperature at one (1) standard atmosphere and 100°  +
0, -5°C.
NOTE:  The  intent  of  this  requirement  is  to  replace  air  with
steam.
5  Sampling
Unless  otherwise  specified,  Practice  E  122  shall  be
used. When so specified, appropriate sample sizes shall
be selected from each lot in accordance with MIL-STD-

# 105

105.  Each  quality  characteristic  shall  be  assigned  an
acceptable   quality   level   (AQL)   and   lot   tolerance
percent  defective  (LTPD)  value  in  accordance  with
MIL-STD-105 definitions for critical, major, and minor
classifications.   If   desired   and   so   specified   in   the
contract  or  order,  each  of  these  classifications  may
alternatively  be  assigned  cumulative  AQL  and  LTPD
values.  Inspection  levels  shall  be  agreed  upon  between
the user and supplier.

2 Military Standards, Naval Publications and Form Center, 5801
Tabor Avenue, Philadelphia, PA 19120

SEMI G35-87 © SEMI 1986, 19872
6  Test Methods
6. 1  Visual Inspection
6. 1.1   For  reference  purposes  the  req uired  appearance
and associated properties for any specific lead finish are
specified  in  the  detailed  SEMI  specification  for  the
specific lead finish to be evaluated.
6. 1.2  Purpose
6. 1.2.1    Visual   inspection   shall   be   perf ormed   to
evaluate   application   of   the   required   lead   finish.
Magnification at 10× preferred.
6. 1.3  Failure Criteria
6. 1.3.1   Finish  is  wrong  type,  is  missin g,  or  is  non-
adherent (has peeling, flaking, or blistering).
NOTE:  Variations  in  color  are  not  cause  for  failure  unless
there is evidence of corrosion and flaking or pitting.
6. 1.3.2   Finish  contains  foreign  materia l  or  surface
contamination such as water marks.
6. 1.3.3   Leads  and  terminations  shall  b e  electrically
sound  and  mechanically  intact.  Nothing  in  the  lead
finish shall detract from lead integrity.
6. 2  Solderability
6. 2.1   The  purpose  of  the  test,  terms   and  definitions,
apparatus,  and  materials  to  be  used  are  specified  in
MIL-STD-883, Method 2003.
6. 2.2   Procedure  to  be  used  shall  be  a s  specified  in
MIL-STD-883,   Method   2003,   except   as   specified
below.
6. 2.2.1   Aging  as  specified  in  MIL-ST D-883,  Method
2003, shall not be performed. (See Section 6.2.2.2.)
6. 2.2.2   At  user’s  option,  pre-aging  at  t he  indicated
level below shall be performed:
1.   Condition A — No pre-age.
2.   Condition    B    —    5    hours    at    150°C    in    Air
Atmosphere.
3.   Condition    C    —    5    hours    at    200°C    in    Air
Atmosphere.
4.   Condition   D   —   4   hours   suspended   in   Steam
Atmosphere.
5.   Condition   E   —   8   hours   suspended   in   Steam
Atmosphere.
NOTE:  See  definition  section  for  above  noted  atmospheric
conditions.
6. 2.3   Failure  criteria  shall  be  as  spec ified  in  MIL-
STD-883, Method 2003, except as specified below.
6. 2.3.1    Coverage   shall   be   90%   on   maj or   flat
(excluding  non-functional  areas).  Non-functional  areas
include end of termination, edges in clad materials, and
areas above the seating plane.
6. 3  Lead Fatigue/Lead Finish Adh erence
6. 3.1  The purpose of the test, appara tus, and procedure
to  be  used  are  as  specified  in  MIL-STD-883,  Method
2004, Test Condition B1, except as specified below.
6. 3.1.1  Purpose of this test is limited t o a check of lead
finish integrity after stressing.
6. 3.1.2  Three (3) leads per device shal l be tested.
6. 3.1.3  Three (3) cycles of rotation sh all be used.
6. 3.2  Failure Criteria
When examined at 10× magnification, any evidence of
peeling,  or  gross  discontinuity  shall  be  considered  a
device failure.
6. 4  Thickness
6. 4.1  Thickness, when specified, sha ll be measured in
functional  lead  area.  On  flat  leads,  measure  in  the
center of the major flat. On round leads, measure below
the seating plane and above the gauge plane.
6. 4.2  Thickness, when specified, sha ll be measured in
accordance   with   ASTM   B   568   (Measurement   of
Coating   Thickness   by   X-Ray   Spectrometry)   as   the
preferred method.
6. 4.3   Thickness  may  be  measured  as   an  alternative  to
the  above  by  either  ASTM  B  567  (Beta  Backskatter
Principle) or ASTM B 487 (Cross Section Principle).
6. 5  Hardness
6. 5.1   Hardness,  when  specified,  sha ll  be  measured  in
functional  lead  area.  On  flat  leads,  measure  in  the
center of the major flat. On round leads, measure below
the seating plane and above the gauge plane.
6. 5.2  Hardness shall be tested only w hen specified as a
Lead Finish Detail (e.g., for socketing application).
6. 5.3   Hardness  shall  be  tested  in  acc ordance  with
ASTM   E   384   (Standard   Test   Methods   for   Micro-
Hardness  of  Materials),  or  ASTM  E  10  (Standard  Test
Method  for  Brinnel  Hardness  for  Metallic  Materials),
whichever  is  appropriate  (see  detailed  specification  or
procurement document).
7  Certification
7. 1   Upon  request  of  the  purchaser   in  the  contract  or
order,  a  manufacturer’s  or  supplier’s  certification  that
the material was manufactured and tested in accordance

SEMI G35-87 © SEMI 1986, 19873
with this specification, together with a report of the test
results, shall be furnished at the time of shipment.
7. 2   In  the  interest  of  controlling  in spection  costs,  the
supplier  and  the  purchaser  may  agree  that  the  material
shall   be   certified   as   capable   of   meeting   certain
requirements.  In  this  context,  capable  of  meeting  shall
signify  that  the  supplier  is  not  required  to  perform  the
appropriate  tests  in  Section  6.  However,  if  the  user
performs  the  test  and  the  material  fails  to  meet  the
requirement, the material may be subject to rejection.
NOTICE: These  standards  do  not  purport  to  address
safety  issues,  if  any,  associated  with  their  use.  It  is  the
responsibility of the user of these standards to establish
appropriate  safety  and  health  practices  and  determine
the  applicability  of  regulatory  limitations  prior  to  use.
SEMI  makes  no  warranties  or  representations  as  to  the
suitability  of  the  standards  set  forth  herein  for  any
particular    application.    The    determination    of    the
suitability of the standard is solely the responsibility of
the user. Users are cautioned to refer to manufacturer’s
instructions,  product  labels,  product  data  sheets,  and
other    relevant    literature    respecting    any    materials
mentioned   herein.   These   standards   are   subject   to
change without notice.
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
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI G36-88 © SEMI 1986, 19881
SEMI G36-88
SPECIFICATION FOR DIMENSIONS AND TOLERANCES USED TO
MANUFACTURE PLASTIC MOLDED HIGH DENSITY TAB QUAD
SEMICONDUCTOR PACKAGE TOOLING
1  Preface
This document is for the ordering of tooling required to
mold   and   form   plastic   high   density   TAB   quad
semiconductor  packages.  It  is  to  be  used  by  packaging
engineers,     mold     manufacturers,     and     end-of-line
toolmakers   as   the   basis   for   defining   the   limits   of
manufacturing tolerances.
2  Applicable Documents
2. 1  ANSI Specification
1
Y14.5 — Dimensioning and Tolerancing
2. 2  JEDEC Specification
2
Pub No.95 — JEDEC Registered and Standard Outline
and Standard Outline for Semiconductor Devices
2. 3  Military Specification
3
MIL-STD-100 — Engineering Drawing Practices
3  Selected Definitions — Pr oduct Criteria
Tolerance Limits
mismatch and offset — defined with respect to package
only.  All  statements  will  be  equally  applicable  in  two
(2)  axes.  All  mismatch  and  offset  measurements  are
made after molding and prior to trimming.
cavity  to  frame  offset  —  will  be  measured  prior  to  any
trimming   operation.   Offset   will   be   defined   as   the
difference  in  bottom  cavity  position  with  respect  to  a
leadframe datum. The offset measurement will exclude
leadframe tolerances (see Figure 2).
top  to  bottom  cavity  mismatch  —  characterized  by  the
fact that the top and bottom cavities in the mold are not
aligned  properly,  causing  a  mismatch  condition.  The
measurement shall be stated as the difference in the top
cavity  position  relative  to  the  bottom  cavity  position
(see Figure 1).
package   warpage   —   any   non-linear   dimensional
change  from  the  mold  cavity  characteristic,  usually
caused   by   incorrect   package   design   or   molding
practices (see Figure 3).

1 ANSI, 1430 Broadway, New York, NY 10018
2 JEDEC, 2001 Eye Street N.W., Washington, D.C. 20006
3 Military Standards, Naval Publications and Form Center, 5801
Tabor Avenue, Philadelphia, PA 19120
parting line protrusions — those plastic excesses which
remain as a normal characteristic after normal molding,
deflashing, trimming, and singulation (see Figure 4).
top,   bottom   protrusions   —   those   plastic   excesses
(includes ejector pin crowns) which remain as a normal
characteristic extending from the smooth surface of the
molded package.
variations in lead location — defined with respect to a
90° angle from the top or bottom of the smooth surface
of  the  molded  package  as  viewed  on  the  end  or  side
projections (see Figure 4).
lead   shoulder   intrusions   and   protrusions   —   any
variations  in  straightness  along  the  defined  shoulder
essentially caused by dambar removal (see Figure 4).
lead position overlay (footprint) — (See Figure 5.)
shoulder bend location — measured from the outermost
point of the shoulder bend radius (see Figure 6).
lead   co-planarity   —   defined   as   the   vertical   lead
position  with  respect  to  a  reference  plane  measured
after  forming.  The  reference  plane  is  defined  by  the
three lowest leads from the bottom of the package (see
Figure 6).
4  Ordering Information
4. 1  Purchase orders for tooling for  plastic molded high
density  TAB  semiconductor  packages  furnished  to  this
specification shall include the following items:
1. A  package  tooling  outline  drawing  showing  all
required  dimensions  listed  in  Section  5.  Package
surface finish to be included.
2. A  list  of  any  tolerance  limits  which  differ  from
those in Section 6.
3. The type of tooling steel required.
4. The  type  of  leadframe  material  and  temper  to  be
used.
5. The  type  of  plastic  to  be  molded  (if  proprietary,  a
statement   of   its   shrinkage   characteristics)   and
molding temperature.
6. Sampling plan shall be determined between vendor
and purchaser.
7. The  number  of  spare  parts  or  expendable  parts
desired.

SEMI G36-88 © SEMI 1986, 19882
8. Molding press to be used.
9. Electrical power available for heating.
10. Applicable    leadframe    drawing,    including    all
dimensions.
5  Dimensions
5. 1   Drawing  must  show  dimension s  for  the  following
items, if applicable:
1.   Package length
2.   Package width
3.   Top cavity thickness
4.   Bottom cavity thickness
5.   Frame thickness
6.   Top ejector pin locations from datum lines
7.   Bottom ejector pin locations from datum lines
8.   Ejector pin sizes (top and bottom)
9.   Ejector  depth  (top  and  bottom,  draft  angle  top  and
bottom side)
10. Pin 1 ID location from package center
11. Pin 1 ID shape and size
12. All applicable package radii

# 13

13. Draft angles (top and bottom)

# 14

14. Package parting line location

# 15

15. Shoulder bend location
6  Product Criteria
6. 1  Dimensional tolerance limits f or high density TAB
products (see Section 3).
6. 1.1  Recognizing that every manuf acturing process is
subject   to   variation,   the   following   list   details   the
acceptable limit of this variation:
28-328 LEAD
OVERLAP/OFFSET
Cavity Overlap (See Figure 1)0.002" (maximum)
Cavity Mismatch (See Figure 10.002" (maximum)
CAVITY TO FRAME OFFSET
(See Figure 2)
(not including leadframe tolerances)
0. 002" (maximum)
PACKAGE WARPAGE
Warp factor (See Figure 3)2.5 to a max. of
0. 003"
PROTRUSIONS & INTRUSIONS
(See Figure 4) Parting line0.005" (maximum)
Gating0.005" (maximum)
Top or bottom ejector pin0.002" (maximum)
VARIATIONS IN LEAD POSITION
(See Figure 4)0.003" (maximum)
LEAD COPLANARITY
(See Figure 6)0.002" (maximum)
DAMBAR TRIMMING
INTRUSIONS/PROTRUSIONS
Intrustions (See Figure 6)0.002" (maximum)
Protrusions (See Figure 4) (shall not
decrease gap more than 20%)
0. 003" (maximum)
7  Packaging
Tooling  must  be  packed  in  containers  designed  and
constructed  to  prevent  damage  and/or  contamination.

SEMI G36-88 © SEMI 1986, 19883
Figure 1
Top to Bottom Cavity Mismatch
Figure 2
Cavity to Frame Offset
Figure 3
Package Warpage

SEMI G36-88 © SEMI 1986, 19884
Figure 4
Parting Line Protrusion/Intrusion and Variation in Lead Location
Figure 5
Lead Position Overlay Example
NOTICE: These  standards  do  not  purport  to  address  safety  issues,  if  any,  associated  with  their  use.  It  is  the
responsibility  of  the  user  of  these  standards  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory limitations prior to use. SEMI makes no warranties or representations as to the suitability
of the standards set forth herein for any particular application. The determination of the suitability of the standard is
solely  the  responsibility  of  the  user.  Users  are  cautioned  to  refer  to  manufacturer’s  instructions,  product  labels,
product  data  sheets,  and  other  relevant  literature  respecting  any  materials  mentioned  herein.  These  standards  are
subject to change without notice.
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

SEMI G37-88 © SEMI 1986, 19881
SEMI G37-88
SPECIFICATION FOR DIMENSIONS AND TOLERANCES USED TO
MANUFACTURE PLASTIC MOLDED SMALL OUTLINE PACKAGE
TOOLING
1  Preface
This document is a guideline for the ordering of tooling
required to mold and form plastic molded small outline
semiconductor  packages.  It  is  to  be  used  by  packaging
engineers,     mold     manufacturers,     and     end-of-line
toolmakers   as   the   basis   for   defining   the   limits   of
manufacturing tolerances.
2  Applicable Documents
2. 1  ANSI Specification
1
Y14.5 — Dimensioning and Tolerancing
2. 2  JEDEC Specification
2
Pub.  No.  95  —  Registered  and  Standard  Outline  for
Semiconductor Devices
2. 3  Military Specification
3
MIL-STD-100 — Engineering Drawing Practices
3  Selected Definitions — Pr oduct Criteria
Tolerance Limits
mismatch and offset — defined with respect to package
only.  As  this  family  of  packages  has  four  sides,  all
statements  will  be  equally  applicable  in  two  (2)  axes.
All  mismatch  and  offset  measurements  are  made  after
molding and prior to trimming.
cavity  to  frame  offset  —  will  be  measured  prior  to  any
trimming   operation.   Offset   will   be   defined   as   the
difference  in  bottom  cavity  position  with  respect  to  a
leadframe datum. The offset measurement will exclude
leadframe tolerances (see Figure 1).
top  to  bottom  cavity  mismatch  —  characterized  by  the
fact that the top and bottom cavities in the mold are not
aligned  properly,  causing  a  mismatch  condition.  The
measurement  shall  be  stated  as  the  difference  in  the
package top cavity position relative to the bottom cavity
position (see Figure 2).
parting line protrusions — those plastic excesses which
remain as a normal characteristic after normal molding,
deflashing, trimming, and singulation (see Figure 3).

1 ANSI, 1430 Broadway, New York, NY 10018
2 JEDEC, 20001 Eye Street, N.W., Washington, D.C. 20006
3 Military Standards, Naval Publications and Form Center, 5801
Tabor Avenue, PA 19120
top  or  bottom  protrusions  —  those  plastic  excesses
(includes ejector pin crowns), which remain as a normal
characteristic extending from the smooth surface of the
molded package.
variations in lead location — defined with respect to a
90° angle from the top or bottom of the smooth surface
of  the  molded  package  as  viewed  on  the  end  or  side
projections (see Figure 3).
lead   shoulder   intrusions   and   protrusions   —   any
variations  in  straightness  along  the  defined  shoulder
essentially caused by dambar removal (see Figure 3).
package   warpage   —   any   non-linear   dimensional
change  from  the  mold  cavity  characteristic,  usually
caused   by   incorrect   package   design   or   molding
practices (see Figure 4).
shoulder bend location — measured from the outermost
point of the shoulder bend radius (see Figure 5).
lead   co-planarity   —   defined   as   the   vertical   lead
position  with  respect  to  a  reference  plane  measured
after  forming.  The  reference  plane  is  defined  by  the
three lowest leads from the bottom of the package (see
Figure 6).
4  Ordering Information
4. 1  Purchase orders for tooling for  plastic molded high
density  TAB  semiconductor  packages  furnished  to  this
specification shall include the following items:
1.   A   package   tooling   outline   drawing   showing   all
required  dimensions  listed  in  Section  5.  Package
surface finish to be included.
2.   A  list  of  any  tolerance  limits  which  differ  from
those in Section 6.
3.   The type of tooling steel required.
4.   The  type  of  leadframe  material  and  temper  to  be
used.
5.   The  type  of  plastic  to  be  molded  (if  proprietary,  a
statement of its shrinkage characteristics).
6.   Sampling plan for compliance to Section 7.
7.   The  number  of  spare  parts  or  expendable  parts
desired.

SEMI G37-88 © SEMI 1986, 19882
8.   The  type  of  molding  press  to  be  used,  including
power requirements.
9.   Applicable    leadframe    drawing,    including    all
dimensions.
5  Dimensions
5. 1   Drawing  must  show  dimension   for  the  following
items, if applicable:
1. Package length
2. Package width
3. Top cavity thickness
4. Bottom cavity thickness
5. Frame thickness
6. Ejector top locations from cavity centerline
7. Ejector bottom locations from cavity centerline
8. Ejector size (top and bottom)
9. Ejector  depth  (top  and  bottom,  draft  angle  top  side,
bottom side, and end)
10. End notch shape, depth, width, length
11. Pin 1 ID location from package center
12. Pin 1 ID shape and size
13. Corner radius or sides
14. Corner radius or ends
15. Lead spread (nominal)

# 16

16. Shoulder bend location

# 17

17. Shoulder width
6  Product Criteria — Dimen sional Tolerance
Limits for S.O. Packages
6. 1  In recognizing that every manu facturing process is
subject   to   variation,   the   following   list   details   the
acceptable limit of this variation:
CAVITY MISMATCH
(See Figure 2)0.05 mm (0.002")
PACKAGE/FRAME OFFSET
(See Figure 1), (excluding leadframe
tolerances)
0. 05 mm (0.002")
MOLDED PROTRUSIONS
(See Figure 3) Parting line0.15 mm (0.006")
Top or bottom0.025 mm (0.001")
VARIATION IN LEAD LOCATION
(See Figure 3)0.101 mm (0.004")
SHOULDER INTRUSIONS AND
PROTRUSIONS
Intrusions0.025 mm (0.001")
Protrusions*0.004"
PACKAGE WARPAGE
Warp factor:2.5
LEAD CO-PLANARITY
0. 003" (maximum)
EJECTOR PIN DEPTH
0. 003"
* Assumes 0.002" design protrusion.
7  Sampling
Samples  used  to  determine  compliance  to  Section  6
shall be determined between user and supplier.
8  Packaging
Tooling must be packed in containers designed and
constructed to prevent damage and/or contamination.
Specific protection must be provided if tooling is to be
shipped any great distance.

SEMI G37-88 © SEMI 1986, 19883
Figure 1
Cavity to Frame Offset
Figure 2
Cavity Mismatch
Figure 3
Parting Line Protrusions

SEMI G37-88 © SEMI 1986, 19884
Figure 4
Package Warpage Warp in mils/Length in Inches = Warp Factor
Figure 5
Shoulder Bend Location
Figure 6
Lead Co-planarity
NOTICE:  These  standards  do  not  purport  to  address  safety  issues,  if  any,  associated  with  their  use.  It  is  the
responsibility  of  the  user  of  these  standards  to  establish  appropriate  safety  and  health  practices  and  determine  the
applicability of regulatory limitations prior to use. SEMI makes no warranties or representations as to the suitability
of the standards set forth herein for any particular application. The determination of the suitability of the standard is
solely  the  responsibility  of  the  user.  Users  are  cautioned  to  refer  to  manufacturer’s  instructions,  product  labels,
product  data  sheets,  and  other  relevant  literature  respecting  any  materials  mentioned  herein.  These  standards  are
subject to change without notice.
The  user’s  attention  is  called  to  the  possibility  that  compliance  with  this  standard  may  require  use  of  copyrighted
material  or  of  an  invention  covered  by  patent  rights.  By  publication  of  this  standard,  SEMI  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  item  mentioned  in  this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights and
the risk of infringement of such rights, are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI G38-0996 © SEMI 1987, 2004 1
SEMI G38-0996 (Reapproved 1104)
TEST METHOD FOR STILL- AND FORCED-AIR JUNCTION-TO-
AMBIENT THERMAL RESISTANCE MEASUREMENTS OF
INTEGRATED CIRCUIT PACKAGES
This  test  method  was  technically  reapproved  by  the  Global  Assembly  and  Packaging  Committee  and  is  the
direct  responsibility  of  the  Japanese  Packaging  Committee.  Current  edition  approved  by  the  Japanese
Regional Standards Committee on July 23, 2004.  Initially available at www.semi.org September 2004; to be
published November. Originally published in 1987; previously published September 1996.
1  Purpose
1. 1  The purpose of this test is to determine the thermal
resistance  of  integrated  circuit  packages  using  thermal
test chips.
2  Scope
2. 1      This   test   method   deals   only   with   junction-to-
ambient  measurements  of  thermal  resistance  and  limits
itself    to    still-    and    forced-air    convection    testing
environments.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI  G32  ó  Guideline  for  Unencapsulated  Thermal
Test Chip
SEMI  G42  ó  Specification  for  Thermal  Test  Board
Standardization   for   Measuring   Junction-to-Ambient
Thermal Resistance of Semiconductor Packages
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Terminology
4. 1  Definitions
4. 1.1      The   following   definitions   and   symbols   shall
apply for the purpose of this test:
4. 1.2  ambient  temperature  (T
A
,  in  degrees  Celsius)  ó
the ambient temperature is the temperature of the air at
a     specified     location     in     the     vicinity     of     the
microelectronic device under test (DUT).
4. 1.3  junction  temperature  (T
J
,  in  degrees  Celsius)  ó
the  term  is  used  to  denote  the  temperature  of  the
semiconductor junction in the microcircuit in which the
major part of the heat is generated. For purposes of this
test,    the    measured    junction    temperature    is    only
indicative  of  the  temperature  in  the  immediate  vicinity
of the element used to sense the temperature.
4. 1.4  power  dissipation  (P
H
,  in  watts)  ó  the  heating
power  applied  to  the  device  causing  a  junction-to-
reference point temperature difference.
4. 1.5  temperature-sensitive   parameter   (TSP)   ó   the
temperature-dependent  electrical  characteristic  of  the
junction under test which can be calibrated with respect
to  temperature  and  subsequently  used  to  detect  the
junction temperature of interest.
4. 1.6  thermal   resistance   ó   junction   to   specified
reference point, R
θJR
degrees Celsius/watt. The thermal
resistance   of   the   microcircuit   is   the   temperature
difference from the junction to some reference point in
the ambient divided by the power dissipation P
H
.
4. 1.7  velocity (v
A
, in linear feet per minute (LFPM)) ó
the  velocity  of  the  air  at  a  specified  location  upstream
of the DUT.
5  Apparatus
5. 1  The apparatus required for these tests shall include
the   following   as   applicable   to   the   specified   test
procedures.
5. 1.1  Thermocouple   Material   ó   Shall   be   copper
constantan  (type  T)  or  equivalent,  for  the  temperature
range −100 to + 300∞C. The wire size shall be no larger
than  AWG  size  30.  The  junction  of  the  thermocouple
shall  be  welded  to  form  a  bead  rather  than  soldered  or
twisted.   The   accuracy   of   the   thermocouple   and
associated measuring system shall be ± 0.5∞C.
5. 1.2  Suitable  Electrical  Equipment  ó  As  required  to
provide  controlled  levels  of  conditioning  power  and  to
make the specified measurements. The instrument used
to    electrically    measure    the    temperature-sensitive
parameter   shall   be   capable   of   resolving   a   voltage
change of 0.5 mV.
5. 1.3  Controlled Temperature Chamber, Fluid Bath, or
Wind  Tunnel  ó  Capable  of  maintaining  the  specific
reference  point  temperature  to  within  ±  0.5∞C  of  the
reset  (measured)  value.  Typical  still-air  enclosure  and


SEMI G38-0996 © SEMI 1987, 2004 2
wind  tunnel  assemblies  are  presented  for  reference
purposes only.
5. 1.4  Still-Air Enclosure Assembly ó The microcircuit
shall  be  mounted  in  a  cubic  enclosure  of  not  less  than
0. 028  m
3
(1.0  ft
3
).  There  shall  be  no  radiation  sources
other  than  the  microcircuit  under  test  in  the  enclosure.
The interior enclosure wall shall have a high reflectance
finish   (emissivity   <   0.1).   The   ambient   temperature
should   be   measured   by   means   of   a   thermocouple
mounted at a distance of approximately 2.54 cm (1.0 in)
beneath  the  DUT  and  1.27  cm  (0.5  in)  from  the  test
board or socket.
5. 1.4.1    The  microcircuit  shall  be  mounted  in  such  a
manner that conduction cooling through the leads or the
test socket or both shall be small compared to the other
cooling  mechanisms.  No.  36  AWG  wire  should  be
connected  to  the  device  test  socket.  The  air  flow  (by
natural  convection)  should  be  unrestricted  above  and
beneath  the  device.  An  alternative  approach  would  be
to  use  a  mounting  arrangement  that  approximates  an
application  environment.  Such  a  reference  mounting
configuration  can  be  found  in  Specification,  Thermal
Test  Board  Standardization  for  Measuring  Junction-to-
Ambient    Thermal    Resistance    of    Semiconductor
Packages.  Device  mounting  and  test  board  positioning
inside the measuring chamber are depicted in Figure 1.
5. 1.5  Wind  Tunnel  Assembly  ó  A  typical  wind  tunnel
design is shown with its dimensions in Figure 2.
5. 1.5.1        The    fan    or    blower    should    be    placed
downstream  of  the  DUT  as  depicted  in  Figure  2.  A
static   pressure   differential   measurement   across   a
calibrated nozzle is used to calculate the wind tunnel air
velocity,  while  a  thermocouple  is  used  to  measure  the
ambient  temperature  upstream  of  the  DUT.  Both  of
these  devices  should  be  placed  at  a  specified  location
upstream  of  the  DUT,  as  shown  in  Figure  2.  The
thermocouple  is  located  in  the  center  of  the  wind
tunnel,  5.08  cm  (2.0  in)  from  the  test  section  and  2.54
cm (1.0 in) above the center plane of the DUT.
5. 1.5.2    The  microcircuit  shall  be  mounted  in  such  a
manner that conduction cooling through the leads or the
test  socket,  or  both,  shall  be  small  compared  to  the
other  cooling  mechanisms.  To  minimize  conduction
through   the   leads,   No.   36   AWG   wire   should   be
connected to the device test socket. The DUT should be
aligned so that the air front is parallel to the longer edge
of  the  package  (air  front  hitting  the  package  side).  An
alternative   approach   would   be   to   use   a   mounting
arrangement     that     approximates     an     application
environment.  Such  a  referee  mounting  configuration
can  be  found  in  SEMI  G42.  Device  mounting  and  test
board orientation inside the wind tunnel are depicted in
Figure 3.
5. 1.5.3  Flow  straighteners  should  be  placed  upstream
of   the   DUT,   as   shown   in   Figure   2.   The   flow
straighteners   should   provide   a   flat   velocity   profile
across  the  test  section  of  the  wind  tunnel.  This  will
ensure  that  the  DUT  is  exposed  to  a  uniform  velocity
across its entire cross section. A typical velocity profile
for well-developed turbulent flow is depicted in Figure
3.
5. 1.5.4  Calibrated hot wire anemometer or nozzle with
suitable  pressure  gauges  (p
1
and  p
2
)  for  measuring  the
pressure   difference   across   the   nozzle   is   used   to
calculate  the  wind  tunnel  air  velocity.  When  using  the
nozzle,  the  pressure  differential  across  the  calibrated
nozzle is measured using a liquid monometer, typically
in inches of water.
5. 1.5.5    Hot  wire  anemometer  capable  of  verifying  the
air  velocity  profile  with  an  accuracy  of  ±  5%.  The
velocity  sensor  should  disrupt  the  airflow  as  little  as
possible.
6  Procedure
6. 1  Measurement  of  Wind  Tunnel  Air  Velocity,  v
A
ó
The  air  velocity  measurement  techniques  are  direct
method and indirect method.
6. 1.1  Direct Measurement of Wind Tunnel Air Velocity
ó  The  direct  method  is  based  on  a  measurement  by  a
hot wire anemometer in wind tunnel.
6. 1.2  Indirect    Measurement    of    Wind    Tunnel    Air
Velocity, vA ó The air velocity measurement technique
is  an  indirect  method  based  on  a  pressure  differential
measurement  across  a  calibrated  nozzle.  The  actual
velocity  of  interest  is  derived  from  a  calibration  curve
relating  the  pressure  differential  of  the  nozzle  to  the
volume  (or  mass)  flow  rate  of  the  air  through  the
nozzle.  The  required  air  velocity  (in  linear  feet  per
minute) is then calculated by dividing the volume flow
rate  (in  cubic  feet  per  minute)  by  the  cross  sectional
area  at  the  entrance  of  the  DUT  test  section  (in  square
feet).  The  volume  flow  rate  shall  be  determined  to
within an accuracy of ± 10%.
6. 1.2.1  Air   Flow   Profile   ó   Hot   wire   anemometer
should be used to verify that the flow profile of the air
front,  measured  within  5.08  cm  (2.0  in.)  of  the  test
section,  does  not  vary  by  more  than  10%  across  the
center 90% of the test section. The DUT and mounting
board/socket  should  not  be  in  the  test  section  when  the
flow profile is determined.
6. 2  Direct      Measurement      of      Reference      Point
Temperature,  T
S
ó  For  the  purpose  of  measuring  the
still-air    junction-to-ambient    microelectronic    device
thermal    resistance    in    a    chamber,    the    ambient
temperature  (T
R
=  T
A
)  should  be  measured  with  a


SEMI G38-0996 © SEMI 1987, 2004 3
thermocouple   beneath   the   DUT.   For   purposes   of
measuring    forced    air    junction-to-ambient    thermal
resistance  in  a  wind  tunnel,  the  ambient  temperature
should  be  measured  with  a  thermocouple  upstream  of
the  DUT  in  the  section  of  the  tunnel  that  experiences
fully developed flow.
6. 3  Thermal     Resistance,     Junction     to     Specified
Reference Point, R
θJR
.
6. 3.1  General     Considerations     ó     The     thermal
resistance of a semiconductor device is a measure of the
ability of its carrier, or package and mounting technique
to  provide  for  heat  removal  from  the  semiconductor
junction.  The  thermal  resistance  of  a  microelectronic
device can be calculated when the ambient temperature
and power dissipation in the device and a measurement
of  the  junction  temperature  are  known.  When  making
the   indicated   measurements,   the   package   shall   be
considered  to  have  achieved  thermal  equilibrium  when
halving  the  time  between  the  application  of  power  and
the taking of the reading causes no error in the indicated
results within the required accuracy of measurement.
6. 3.2  Indirect  Measurement  of  Junction  Temperature
for the Determination of R
θJA
ó The purpose of the test
is   to   measure   the   thermal   resistance   of   integrated
circuits  by  using  particular  semiconductor  elements  on
the  chip  to  indicate  the  device  junction  temperature.  In
order  to  obtain  a  realistic  estimate  of  the  operating
junction  temperature,  the  whole  chip  in  the  package
should  be  powered  in  order  to  provide  the  proper
internal  temperature  distribution.  During  measurement
of  the  junction  temperature,  the  chip  heating  power
(constant  voltage  source)  shall  remain  constant  while
the  junction  calibration  current  remains  stable.  It  is
assumed that the calibration current will not be affected
by   the   circuit   operation   during   the   application   of
heating power.
6. 3.3      The   temperature-sensitive   device   parameter   is
used  as  an  indicator  of  an  average  (weighted)  junction
temperature    of    the    semiconductor    element    for
calculations   of   thermal   resistance.   The   measured
junction  temperature  is  indicative  of  the  temperature
only  in  the  immediate  vicinity  of  the  element  used  to
sense the temperature.
6. 3.4    The  temperature-sensitive  electrical  parameters
generally   used   to   indirectly   measure   the   junction
temperature  are  the  forward  voltage  of  diodes  and  the
emitter-base   voltage   of   bipolar   transistors.   Other
appropriate  temperature-sensitive  parameters  may  be
used  for  indirectly  measuring  junction  temperature  for
fabrication  technologies  that  do  not  lend  themselves  to
sensing the active junction voltages.
6. 3.4.1  Steady-State  Technique  for  Measuring  T
J
ó
The  following  symbols  shall  apply  for  the  purpose  of
these measurements:
I
M
Measuring current in milliamperes.
V
MH
Value of temperature-sensitive parameters in
millivolts, measured at I
M
, and corresponding to
the temperature of the junction heated by P
H
.
T
MC
Calibration temperature in degrees Celsius,
measured at the reference point.
V
MC
Value of temperature-sensitive parameter in
millivolts, measured at I
M
and specific value of
T
MC
.

6. 3.4.2  The measurement of T
J
, using junction forward
voltage as the TSP, is made in the following manner:
6. 3.4.2.1  Step  1  ó  Measurement  of  the  temperature
coefficient of the TSP (calibration).
6. 3.4.2.2    The  coefficient  of  the  temperature-sensitive
parameter  is  generated  by  measuring  the  TSP  as  a
function   of   the   reference   point   temperature,   for   a
specified  constant  measuring  current,  I
M
,  by  externally
heating the device under test in a controlled temperature
oven  or  fluid  bath.  The  reference  point  temperature
range   used   during   calibration   shall   encompass   the
temperature range encountered in the power application
test  (see  Step  2).  The  measuring  current  is  generally
chosen   such   that   the   TSP   decreases   linearly   with
increasing  temperature  over  the  range  of  interest  and
that negligible internal heating occurs in the silicon and
metal   traces.   For   determining   the   optimum   TSP
calibration or measuring current, V
MC
vs. log I
M
curves
for    two    temperature    levels    that    encompass    the
calibration   temperature   range   of   interest   should   be
blotted.  The  optimum  measuring  current,  I
M
,  is  then
selected such that it resides on the linear portion of the
two  V
MC
vs.  log  I
M
curves  that  were  generated.  A
measuring   current   ranging   from   0.05   to   5   mA   is
generally  used,  depending  on  the  specifications  and
operating   conditions   of   the   device   under   test   for
measuring  the  TSP.  The  value  of  the  TSP  temperature
coefficient,   V
MC
/T
MC
,   for   the   particular   measuring
current   used   in   the   test,   is   calculated   from   the
calibration  curve,  V
MC
vs.  T
MC
.  At  least  three  points
should  be  used  to  generate  the  voltage  vs.  temperature
curve  for  the  determination  of  the  TSP  temperature
coefficient.
6. 3.4.3  Step 2 ó Power application test
6. 3.4.3.1    The  power  application  test  is  performed  in
two  parts.  For  both  portions  of  the  test,  the  reference
point temperature and the specified air velocity are held
constant  at  a  preset  value.  The  first  measurement  to  be
made  is  that  of  the  temperature-sensitive  parameter
(i.e.,    V
MC
,    under    operating    conditions    with    the


SEMI G38-0996 © SEMI 1987, 2004 4
measuring   current,   I
M
,   used   during   the   calibration
procedure).   The   DUT   shall   then   be   operated   with
heating  power  (P
H
)  applied.  The  temperature-sensitive
parameter,   V
MH
,   shall   be   measured   with   constant
measuring  current,  I
M
,  that  was  applied  during  the
calibration procedure (see Step 1).
6. 3.4.3.2    The  heating  power,  P
H
,  shall  be  chosen  such
that     the     calculated     junction-to-reference     point
temperature  difference  as  measured  at  V
MH
is  greater
than or equal to 20∞C. In accomplishing this, the device
under test should not be operated at such a high heating
power  level  that  the  on-chip  temperature  sensing  and
heating  circuitry  is  no  longer electrically isolated. Care
should also be taken not to exceed the design ratings of
the package-interconnect system, as this may lead to an
overestimation  of  the  power  being  dissipated  in  the
active area of the chip due to excessive power losses in
the  package  leads  and  wire  bonds.  The  values  of  V
MH
,
V
MC
, and P
H
are recorded during the power application
test.
6. 3.4.3.3  The following data shall be recorded for these
test conditions:
a.   Temperature-sensitive   electrical   parameters   (V
F
,
V
EB
, or other appropriate TSP).
b.  Junction  temperature,  T
J
,  is  calculated  from  the
equation:
T
J
=T
R
+V
MH
−V
MC
()
∆V
MC
∆T
MC








−1
where  T
R
=T
A

c.   Ambient (air) temperature, T
A
.
d.  Ambient  (air)  velocity,  v
A
,  (v
A
=  0  for  still-air
enclosure).
e.   Power   dissipation,   P
H
.
f.   Mounting  arrangement  (including  offset  from  test
board).
6. 4  Calculations of R
θJR

6. 4.1  Calculation  of  Package  Thermal  Resistance  ó
The  thermal  resistance  of  a  microelectronic  device  can
be  calculated  when  the  junction  temperature,  T
J
,  has
been  measured  in  accordance  with  procedures  outlined
in  Sections  6.1  through  6.3.  With  the  data  recorded
from   each   test,   the   thermal   resistance   shall   be
determined from:
R
θ
JR
=
T
J
−
T
R
P
H(Package)
where :  R
θ
JR
=
R
θ
JA
and T
R
=
T
A
.



SEMI G38-0996 © SEMI 1987, 2004 5
7  Summary Report
7. 1  The following details shall be specified:


1.          Description          of          Package

1. 1        Package        Type
Package Name  ________________ (per JEDEC or EIAJ)
Pin Counts ________________ pins
Special Specification ________________ Yes                ________________ No
If Yes, describe the detail specification.


1. 2        Test        Chip
Chip per SEMI G32 ________________ Yes                ________________ No
Chip Size ________________ mm   x        ________________ mm
Chip Thickness ________________ mm
1. 3        Leadframe
Leadframe Material Fe/Ni       Alloy,       Cu,       Cu   Alloy,       Other       (____________ )
Leadframe Thickness ________________ mm
Die Pad Size ________________ mm   x        ________________ mm
1. 4 Package Dimension & Compound
Package Size ________________ mm   x        ________________ mm
Package Thickness ________________ mm
Compound Material ___________________________________________
1. 5        Others
Die Attach Material ____________________________________________
Heat Sink/Spreader ________________ Yes                ________________ No
If yes, describe the configuration, dimension, method of attachment, location, etc.


2. Description of Test Board

Test Board per SEMI G42 ________________ Yes                ________________ No
No.             of             Layers             ___________________________________________
If test board is specified, describe the specification of the following items:
Dimension ________________ mm x ________________ mm x ________________mmt
No.             of             Layers             ___________________________________________
Material             ___________________________________________


SEMI G38-0996 © SEMI 1987, 2004 6
Pattern             ___________________________________________
3.  Measurement Condition

Ambient             Temperature,             T
a
________________                     ∞C
Ambient Humidity, H
a
________________                          %RH
Air Velocity, V
a
0,     1,     2,     5,     (          ) mm/sec.
Power Dissipation, P
H
0,     1,     2     W
4. No. of Samples, N
________________
5.
Thermal Resistance, R
θJA

________________ ∞C/W

8  Related Documents
8. 1  Laboratory  Methods  of  Testing  Fans  for  Rating,  AMCA  Standard  210-74/ASHRAE  Standard  51-75,  Air
Movement  and  Control  Association  and  the  American  Society  of  Heating,  Refrigerating  and  Air-Conditioning
Engineers, 1975.
8. 2  Fluid Meters ó Their Theory and Application, American Society of Mechanical Engineers, Sixth Edition, 1971.


Figure 1
Test Board Positioning



Figure 2
Wind Tunnel Set-Up


SEMI G38-0996 © SEMI 1987, 2004 7

Figure 3
Test Board Orientation Inside Wind Tunnel


SEMI G38-0996 © SEMI 1987, 2004 8
APPENDIX 1
REPORT FORMAT
NOTICE: This appendix was approved as an official part of SEMI G38 by full letter ballot procedure.
The following format is a sample of report format:


1.                 Description                 of                 Package

1. 1               Package               Type
Package Name ________________       (per JEDEC or EIAJ)
Pin Counts ________________       pins
Special Specification ________________         Yes            ________________ No
1. 2               Test               Chip
Chip per SEMI G32 ________________         Yes            ________________ No
Chip Size ________________       mm   x      ________________ mm
Chip Thickness ________________       mm
1. 3               Leadframe
Leadframe Material Fe/Ni     Alloy,       Cu,       Cu     Alloy,       Other     (________________)
Leadframe Thickness ________________       mm
Die Pad Size ________________       mm x      ________________ mm
1. 4 Package Dimension & Compound
Package Size ________________       mm x      ________________ mm
Package Thickness ________________       mm
Compound Material ________________________________
1. 5               Others
Die Attach Material ________________________________
Heat Sink/Spreader ________________         Yes          ________________ No
2. Description of Test Board

Test Board per SEMI G42 ________________         Yes          ________________ No
No. of Layers ________________________________
3.                 Measurement                 Result

Power Dissipation ________________ W


SEMI G38-0996 © SEMI 1987, 2004 9

Units: ∞C/W
Air Velocity (m/s)
Sample No.
0                                       1                                       3                                        5

1
2
3
4
5
6
7
8
9
10

Average

NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturerís  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature respecting any materials mentioned herein. These standards are subject to change without notice.
The  userís  attention  is  called  to  the  possibility  that  compliance  with  this  standard  may  require  use  of  copyrighted
material  or  of  an  invention  covered  by  patent  rights.  By  publication  of  this  standard,  SEMI  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  item  mentioned  in  this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights, are entirely their own responsibility.

Copyright   by   SEMIÆ   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI G39-89 © SEMI 1986, 19891
SEMI G39-89
SPECIFICATION FOR BRAZED LEAD FLATPACK CONSTRUCTIONS,
INCLUDING LEADFRAMES, SUITABLE FOR AUTOMATED ASSEMBLY
1  Preface
This specification defines the standard requirements for
co-fired    ceramic    brazed    lead    flatpack    package
constructions   intended   for   automated   assembly   to
printed  wiring  boards.  Acceptance  criteria  for  package
constructions, including leadframes, are included.
2  Applicable Documents
2. 1  ANSI Standard
1
ANSI Y14.5 — Dimensioning and Tolerancing
2. 2  Federal Specification
2
QQ-N-290 — Nickel Plating
2. 3  JEDEC Standard
3
JEDEC Pub 95 — Registered and Standard Outlines for
Solid State Products
2. 4  Military Specifications
2
MIL-M-38510  —  General  Specifications  for  Micro-
circuits
MIL-STD-1051 — Sampling Procedures and Tables for
Inspections by Attributes
MIL-STD-23011  —  Iron  Nickel  Alloys  for  Sealing  to
Glass and Ceramics
MIL-STD-45204 — Gold Plating Electrodeposited
MIL-STD-87883 — Brazing
MIL-STD-883  —  Test  Methods  and  Procedures  for
Microelectronics
3  Selected Definitions
blister  bubble  (ceramic)  —  any  separation  within  the
ceramic  which  does  not  expose  underlying  ceramic
material.
blister   bubble   (metal)   —   any   localized   separation
within  the  metallization  or  between  the  metallization
and ceramic which does not expose underlying metal or
ceramic material.

1 ANSI, 1430, Broadway, New York, NY 10018
2 Military Standards, Naval Publications and Form Center, 5801
Tabor Avenue, Philadelphia, PA 19120
3 JEDEC, 2001 Eye Street, N.W., Washington, D.C. 20006
bond  finger  —  a  region  of  refractory  metallization
within the package cavity intended for wirebonding to a
mirocircuit die pad.
braze  —  an  alloy  with  a  melting  point  equal  to  or
greater than 600°C.
burr — an adherent fragment of excess parent material
at the component edge.
chip-out  —  a  region  of  ceramic  missing  from  the
surface   or   edge   of   a   package   which   does   not   go
completely through the package. Chip-out size is given
by its length, width, and depth from a projection of the
design plan-form (see Figure 1).
co-fired  —  a  process  or  technology  for  manufacturing
products    in    which    the    ceramic    and    refractory
metallizations are fired simultaneously.
contact  pad  —  that  metallized  pattern  to  which  the
leadframe is brazed.
crack — a cleavage or fracture, internal or external.
die  attach  surface  —  a  designated  dimensional  outline
area intended for die attach (see Figure 2).
foreign  material  —  an  adherent  particle  other  than
parent material of that component.
layer — a dielectric sheet with or without metallization
that performs a discrete function as part of the package
construction.
lead offset — alignment of leads across the package.
peeling  (flaking)   —   any   separation   from   the   basis
material that exposes the basis material.
projection  —  an  adherent  fragment  of  excess  material
on the component surface.
pullback — the linear distance between the edge of the
ceramic  and  the  first  measurable  metallization  surface
(see Figure 3).
rundown — the linear distance down a vertical surface
from  the  top  to  the  point  of  maximum  metallization
overhang (see Figure 3).
seal  area  —  a  dimensional  outline  area  designated  for
either metallization or bare ceramic to provide a surface
area for lid sealing (see Figure 2).
terminal   —   metallization   at   the   point   of   electrical
contact  to  package  interior  circuitry;  also  the  brazing
surface for a lead.

SEMI G39-89 © SEMI 1986, 19892
TIR  —  total  Indicator  Reading;  the  span  of  readings
from minimum to maximum of a given dimension over
the total surface to which it applies.
void (ceramic) — an absence of screen printed ceramic
from a designated area greater than 0.075 mm (0.003")
in diameter.
void  (metal)  —  an  absence  of  refractory  metallization,
braze or plating material from a designated area greater
than 0.075 mm (0.003") in diameter.
4  Ordering Information
4. 1   Purchase  orders  for  co-fired  ce ramic  brazed  lead
flatpack  packaged  devices  shall  specify  the  following
information:
1.   Quantity.
2.   Drawing number and revision level or date.
3.   Reference to this specification.
4.   Any exception to drawing or specification.
4. 2  Drawings for co-fired ceramic  brazed lead flatpack
packaged     devices     shall     specify     the     following
information:
1.   Drawing number and revision level.
2.   Number   of   terminals   and   terminal   center   line
pacing.
3.   Lead material, finish, and dimensions.
4.   Ceramic   material   color   and   composition;   and
refractory metal type.
5.   Type  and  thickness  of  plating  on  both  device  body
and leads.
6.   Dimensioning and tolerancing per ANSI Y14.5.
7.   Internal bonding pattern.
8.   Lead number 1 position.
9.   Method of test and measurements.
10. Electrical,       mechanical       and       environmental
requirements.
5  Dimensions and Permissi b le Variations
Packaged  device  dimensions  shall  conform  to  JEDEC
JC-11  registered  outline  dimension  drawings  for  Co-
fired   Ceramic   Brazed   Lead   Flatpack   Devices   for
Automated Assembly, unless otherwise specified.
6  Materials
6. 1  Ceramic
6. 1.1    Alumina   Content   —   To   be   90%    minimum.
Beryllia content to be 99% minimum.
6. 1.2  Color — To be black, dark bro wn, or dark violet
unless otherwise specified.
6. 2   Metals  —  External  metal  surfa ces  shall  be  in
accordance with MIL-M-38510.
6. 3  Braze — Copper/silver per MI L-STD-7883.
6. 4   Refractory  Metallization  —  To   be  per  MIL-M-
38510, Type C.
6. 5   Leadframe  —  Fully  annealed  i ron  nickel  cobalt
alloy  (per  MIL-M-38510,  Type  A)  or  iron  nickel  alloy
(per MIL-M-38510, Type B).
6. 6   Microcircuit  Finishes  —  Shall   be  per  MIL-M-
38510 unless otherwise specified.
7  Incoming Testing Sequen ce
1.   Visual inspection.
2.   Dimensional check.
3.   Electrical parameter testing.
4.   Sampling  testing  of  plating  quality,  die  attach,  die
shear,   wire   bond   pull,   seal,   hermeticity,   lead
integrity, and solderability.
8  Visual Criteria (10× Magni fication)
8. 1    Cracks   —   None   allowed   per   M IL-STD-883,
Method 2009.
8. 2  Chip-Outs
8. 2.1   Corner  —  0.762  mm  (0.030")   ×  0.762  mm
(0.030") × 1 tape layer, maximum.
8. 2.2  Edge — 2.54 mm (0.100") × 0 .762 mm (0.030")
× 1 tape layer, maximum.
8. 2.3   Encroachment  —  No  encroach ment  upon  seal
areas,   bonding   fingers,   or   external   terminal   areas
permitted.  Chips  that  expose  any  buried  metallization
are not permitted.
8. 3  Burrs, Projections, and Blister s — Must fit within
outline limits.
8. 3.1   Top  Plane  —  excluding  seal  a rea  —  0.102  mm
(0.004"), maximum.
8. 3.2  Unmetallized Seal Area — 0.0 762 mm (0.003"),
maximum.

SEMI G39-89 © SEMI 1986, 19893
8. 3.3   Metallized  Seal  Area  —  0.025   mm  (0.001"),
maximum.
8. 3.4     Bottom    Surface    —    0.051    mm    ( 0.002"),
maximum.
8. 3.5  Edges — 0.152 mm (0.006"),  maximum.
8. 3.6     Terminal    Pads    —    0.051    mm    ( 0.002"),
maximum.
8. 3.7    Wire   Bond   Fingers   —   0.025   m m   (0.001"),
maximum.
8. 3.8    Die   Attach   Surface   Flatness   —    0.025   mm
(0.001"), maximum.
8. 4   Camber  —  .004  inch/inch  (mm /mm),  maximum.
For  dimensions  less  than  10.5  mm  (0.750"),  0.127  mm
(0.003")    camber    is    permitted    along    any    planar
dimension of the device package.
8. 5  Seal Area Flatness — The sea l area shall be within
the limits listed in Table 1.
8. 6   Die  Attach  Surface  Flatness  —   The  die  attach
surface shall be flat within the limits listed in Table 2.
Table 1  Seal Ring Flatness Limits
Seal Ring O.D.Seal Ring Flatness
0—6.35 mm (0–0.250")0.051 mm max. (0.002")
6. 37—12.7 mm (0.251"–0.500")0.051 mm max. (0.002")
12. 72—25.40       mm       (0.501"–
1. 000")
0. 101 mm max. (0.004")
25. 40 mm (1.000")0.101 mm/mm (0.004"/in.)
Table 2  Die Attach Area Flatness Limits
Die Attach Pad DimensionTIR Flatness
0—12.7 mm (0—0.500")0.051 mm max. (0.002")
12. 72—19.5 mm (0.501"—0.750")  0.088 mm max. (0.0035")
8. 7  Voids
8. 7.1   Seal  Area  Voids  —  A  maximu m  of  3  voids
permitted.  Not  more  than  two  voids  per  side  of  0.010"
diameter.  Any  two  voids  must  be  separated  by  0.762
mm  (0.030")  minimum,  not  to  degrade  the  seal  width
by more than 25%.
8. 7.2  Terminal Void  —  A  maximum   of  two  voids  per
terminal   pad   permissible.   Maximum   void   diameter
acceptable  is  0.254  mm  (0.101).  Voids  may  never
reduce  the  minimum  terminal  width  to  less  than  2/3  of
the nominal design dimension.
8. 7.3   Wire  Bond  Finger  Voids  —  Vo id  free  0.015"
back from the bond finger tip.
8. 7.4   Die  Attach  Surface  Voids  —  T hree  voids  of
0. 010" diameter are the maximum allowed separated by
0. 030" minimum.
NOTE — Voids 0.015" from the cavity wall not included.
8. 7.5  Internal Metallization Voids —  Voids in internal
metallization planes or traces shall not break continuity.
Specific  requirements  for  resistance  and  capacitance
parameters  shall  be  specified  in  the  purchase  order,  if
applicable.
8. 8  Pattern Metallizations
8. 8.1   Seal  Plan  Rundown  (internal  c avity)  —  Not  to
exceed 25% of the cavity layer thickness.
8. 8.2   Seal  Plan  Rundown  (external  t o  cavity)  —  Not
to  exceed  half  the  nominal  design  distance  to  adjacent
edge  metallization.  In  no  event  shall  the  rundown  be
closer    than    0.254    mm    (0.010")    to    any    edge
metallization.
8. 8.3    Wire   Bond   Rundown   —   Wire    bond   finger
rundown  shall  not  exceed  25%  of  the  cavity  depth  or
0. 005" (0.127 mm) whichever is smaller.
8. 8.4  Wire Bond Finger Pullback —  Wire bond finger
pullback  shall  not  exceed  0.127  mm  (0.005")  from  the
nominal design dimension for finger end to cavity edge.
8. 8.5  Seal Plane Pullback — Seal p lane pullback shall
not exceed 0.127 mm (0.005") from the nominal design
dimension for seal plane metallization to edge.
8. 9  Lead Attachment
8. 9.1  Voids in Braze — Braze fillets  must be 95% free
of voids, shall not cause voids under a lead.
8. 9.2  Lead Offset — Lead centerline s must be aligned
to  within  0.127  mm  (0.005")  of  the  centerlines  of
corresponding  braze  pad  metallizations.  Side  to  side
within 0.010".
8. 9.3   Lead-to-Lead  Misalignment  —   To  exceed  10%
of nominal spacing.
8. 9.4    Dimensional   Criteria   —   Per   J EDEC   JC-11
registered  outline  drawings  in  JEDEC  Publication  95,
or as specified on the user drawings.
9  Sampling
Sample  size  must  meet  requirements  of  MIL-STD-105
or   MIL-M-38510   as   agreed   to   between   user   and
supplier.
10  Test Methods (Mechanica l, Electrical, and
Thermal)
10. 1   Gold  Plating  Thickness  —  Sha ll  conform  to
MIL-STD-45204.  Gold  thickness  may  be  determined

SEMI G39-89 © SEMI 1986, 19894
using  the  Beta  Backscatter  Radiation  Method,  X-Ray
Fluorescence or by Cross Sectioning.
10. 2   Nickel  Plating  —  Shall  confor m  to  QQ-N-290.
Nickel  thickness  may  be  determined  using  the  Beta
Backscatter Radiation Method, X-Ray Fluorescence, or
by Cross Sectioning.
10. 3    Destructive   Die   Shear   Testing   —   Shall   be
performed per Method 2019 of MIL-STD-883.
10. 4   Wire  Bond  Pull  Testing  —  Sha ll  be  performed
per Method 2011, Condition D of MIL-STD-883.
10. 5    Temperature   Cycling   Testing   —    Shall   be
performed per Method 1010, Condition C of MIL-STD-

# 883

883.
10. 6  Thermal Shock Testing — Sha ll be performed per
Method 1011, Condition C of MIL-STD-883.
10. 7    Constant   Acceleration   Testing    —    Shall    be
performed per Method 2001, Condition E, Y axis only,
of MIL-STD-883.
10. 8  Mechanical Shock Testing —  Shall be performed
per Method 2002, Condition B of MIL-STD-883.
10. 9    Insulation   Resistance   Testing   —    Shall   be
performed per Method 1003 of MIL-STD-883.
10. 10   Internal  Water  Vapor  Content   Testing  —  Shall
be performed per Method 1018 of MIL-STD-883.
10. 11   Hermeticity  Testing  —  Shall  b e  performed  per
Method   1014,   Condition   A   of   MIL-STD-883.   The
hermetic  integrity  of  the  packaged  device  must  be
maintained after all testing.
10. 12   Lead  Integrity  Testing  —  Shal l  be  performed
per  Method  2004,  Condition  A,  B1,  and  B2  of  MIL-
STD-883.
10. 13  Solderability Testing — Shall  be performed per
Method 2003 of MIL-STD-883.
10. 14    Moisture   Resistance   Testing   —    Shall   be
performed per Method 1004 of MIL-STD-883.
11  Packaging and Marking
11. 1  Packaging — Containers selec ted shall be strong
enough  and  suitably  designed  to  provide  maximum
protection against crushing, spillage and other forms of
damage to the container or its contents. Container shall
afford protection of the contents to contamination from
exposure  to  excessive  moisture  or  oxidation  by  gases.
Packaging  material  shall  be  so  selected  to  prevent  any
contamination  of  the  ceramic  component  parts  with
fibers or organic particles.
11. 2  Marking — The outer containe rs shall be clearly
marked identifying:
1.   Supplier part number.
2.   User part number.
3.   Quantity.
4.   Date of manufacture.
5.   Supplier lot number.
12  Applicability
This  specification  is  intended  to  apply  to  construction
utilizing  the  tall  brazed  lead  flatpack  outlines  included
in JEDEC Publication 95.
Figure 1
Chip Illustration
Figure 2
Die Attach Surface and Seal Area

SEMI G39-89 © SEMI 1986, 19895
Figure 3
Metallization Misalignment
NOTICE: These  standards  do  not  purport  to  address
safety  issues,  if  any,  associated  with  their  use.  It  is  the
responsibility of the user of these standards to establish
appropriate  safety  and  health  practices  and  determine
the  applicability  of  regulatory  limitations  prior  to  use.
SEMI  makes  no  warranties  or  representations  as  to  the
suitability  of  the  standards  set  forth  herein  for  any
particular    application.    The    determination    of    the
suitability of the standard is solely the responsibility of
the user. Users are cautioned to refer to manufacturer’s
instructions,  product  labels,  product  data  sheets,  and
other    relevant    literature    respecting    any    materials
mentioned   herein.   These   standards   are   subject   to
change without notice.
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
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI G41-87 © SEMI 19871
SEMI G41-87
SPECIFICATION FOR DUAL STRIP SOIC LEADFRAME
1  Preface
This   specification   is   a   guideline   for   high   volume
production  of  leadframes,  including  internal  package
plating,    for    plastic    molded    S.O.    semiconductor
packages.   It   is   a   design   guideline   for   packaging
engineers,  leadframe  stampers  and  mold  manufacturers
and  has  been  developed  to  meet  the  requirements  of
automated assembly.
2  Applicable Documents
2. 1  SEMI Specifications
SEMI  G4  —  Integrated  Circuit  Leadframe  Materials
used in the Production of Stamped Leadframes
SEMI  G10  —  Mechanical  Measurement  for  Plastic
Package Leadframes
2. 2  Military Specifications
1
MIL-STD-105  —  Sampling  Procedures  and  Tables  for
Inspection by Attributes
MIL-STD-883  —  Test  Methods  and  Procedures  for
Microelectronics
3  Selected Definitions
burr — a fragment of excess material either horizontal
or vertical attached to the leadframe.
camber  —  curvature  of  the  leadframe  strip  edge  (see
Figure 1).
coil  set  —  longitudinal  bowing  of  the  leadframe  (see
Figure 2).
coined  area  —  that  area  at  the  tip  end  of  the  bond
fingers coined to produce a flattened area for wire bond
(see Figure 3).
crossbow  —  transverse  bowing  of  the  leadframe  (see
Figure 4).
functional area — the die attach pad and the lead tips.
lead  twist  —  angular  rotation  of  bonding  fingers  (see
Figure 5).
pits  —  shallow  surface  depressions  or  craters  in  the
leadframe material.
slug marks — random dents in the leadframe caused by
foreign material in the stamping die.

1 Military Standards, Naval Publications and Form Center, 5801
Tabor Avenue, Philadelphia, PA 19120
stamped leadframe terminology — (See Figure 6.)
Z plane — lead and pad planarity require a reference in
the Z dimension. The recommendation for the reference
plane, hereafter called the Z plane, is the average of the
two  dambars  when  measured  at  their  geometric  center.
This reference method is incorporated into SEMI G10.
4  Ordering Information
4. 1  Purchase orders for leadframes  for plastic molded
S.O.   packages   furnished   to   this   specification   shall
include the following items:
1.   Part specification number and revision level
2.   Material
3.   Number of leads
4.   Material certification
5.   Packaging and marking (see Section 8)
5  Dimensions
See Table 1 and Figure 7.
6  Defect Limits and Parame ters
(See SEMI G10 for Measurement Methods)
6. 1  Internal Frame Area
6. 1.1   Minimum  Flat  Wire  Bonding  A rea  —  80%  of
nominal lead width and 0.381 mm (0.015") in length.
6. 1.2  Coin Depth
6. 1.2.1    0.20   mm   (0.008")   material:   0.0 13   mm
(0.0005") minimum/0.02 mm (0.001") maximum.
6. 1.2.2    0.25   mm   (0.010")   material:   0.0 13   mm
(0.0005") minimum/0.05 mm (0.002") maximum.
NOTE:  Maximum  coin  depth  may  also  be  constrained  by
minimum  lead  spacing  requirement  given  in  Section  6.1.3.
Minimum  coin  depth  may  also  be  constrained  by  minimum
bond area requirement given in Section 6.1.1.
6. 1.3  X-Y Plane Lead Spacing and L ocation
6. 1.3.1    Spacing   between   leads   to   be   0. 152   mm
(0.006") minimum.
6. 1.3.2   Leads  to  be  located  so  that  a  0 .007"  diameter
circle centered on the nominal center of the coined lead
in  width  and  0.152  mm  (0.006")  back  from  lead  tip  in
length shall be totally encompassed by the coined area.

SEMI G41-87 © SEMI 19872
6. 1.4   X-Y  Plane  Die  Attach  Pad  Loc ation  —  Die
attach pad to be located within ± 0.151 mm (0.002") as
measured  from  the  centerline  of  the  reference  hold  in
the side rail.
6. 1.5  Lead Twist — Shall not exceed  330 or 0.015 mm
(0.0006") per 0.254 mm (0.010") of lead width.
6. 1.6  Die Attach Pad Tilt and Flatne ss
6. 1.6.1   Tilt  —  0.025  mm  (0.001")  max imum  per  2.54
mm   (0.100")   in   the   undepressed   state.   0.051   mm
(0.002")   maximum   per   2.54   mm   (0.100")   in   the
depressed condition.
6. 1.6.2    Flatness   —   0.0005   mm   (0.000 2")   when
measuring  from  the  center  to  the  average  of  the  four
corners.  The  corners  are  defined  at  0.127  mm  (0.005")
from each edge.
6. 1.7    Die   Attach   Pad   Downset   —   ±    0.051   mm
(0.002")  as  measured  from  the  center  of  the  pad  to  a
point  on  the  bar  support  strip.  The  nominal  downset
recommended   is   0.30   mm   (0.012")   for   0.25   mm
(0.010")  thick  material  and  0.20  mm  (0.008")  for  0.20
mm (0.008") thick material.
6. 1.8  Lead and Die Attach Pad Cop lanarity
6. 1.8.1   Coplanarity  —  The  relationsh ip  between  the
leads and die attach pad is the axis relationship of these
parts to the Z plane.
6. 1.8.2  Lead Planarity — The lead tip s as measured in
the  center  of  the  back,  uncoined  surface  of  the  lead  tip
shall be located within the following tolerances of the Z
plane: Lead Planarity: ± 0.004".
6. 1.8.3   Die  Attach  Pad  Planarity  —  T he  die  attach
pad  when  measured  at  the  center  must  be  within  the
following  tolerances  of  the  Z  plane:  Pad  Planarity:  ±
0. 003"/-0.005".
6. 2  External Area and Strip
6. 2.1  Material
6. 2.1.1      0.20     mm     (0.008")     material     thic kness
recommended for 0.300" wide packages.
6. 2.1.2      0.25     mm     (0.010")     material     thic kness
recommended for 0.300" wide packages.
6. 2.1.3   Nominal  thickness  tolerances  s hall  be  ±  0.008
mm (0.0003").
6. 2.1.4  Width Tolerance — ± 0.051 m m (0.002").
6. 2.2   Coil  Set  —  Maximum  of  3.175   mm  (0.125")
measured in a free standing state over strip length.
6. 2.3   Crossbow  —  crossbow  shall  n ot  exceed  the
following  dimensions:  Maximum  Crossbow  ±  0.127
mm (0.005").
6. 2.4   Camber  —  Shall  not  exceed  0 .05  mm  (0.002")
over  a  gauge  length  of  150  mm  (6.00").  (See  SEMI
G10, Section 8).
6. 2.5  Progression — The progressio n over strip length
shall be within ± 0.051 mm (0.002") of nominal.
6. 2.6  Burrs — Burrs shall be firmly  attached and able
to  withstand  a  probe  force  of  10  grams.  Vertical  burrs
inside  the  dambar  shall  not  exceed  0.02  mm  (0.001").
Vertical  burrs  outside  the  dambar  and  horizontal  burrs
in any location shall not exceed 0.05 mm (0.002").
6. 2.7  Pits and Slug Marks
6. 2.7.1   Within  functional  area  and  on   external  leads
there shall be no slug marks. Pits shall not exceed .008
mm  (0.0003")  in  depth  and  0.013  mm  (0.0005")  in
largest surface dimension in these areas.
APPLICATION  NOTE:  There  is  a  question  regarding
the    ability    of    material    suppliers    to    meet    this
specification.  Revision  of  this  specification  is  under
review.
6. 2.7.2    Areas   Other   than   6.2.7.1    —    Pi ts    and
imperfections    shall    not    affect    leadframe    strength
regardless   of   size   and   shall   not   exceed   0.05   mm
(0.002")  in  depth  and  0.07  mm  (0.005")  in  largest
surface dimension.
6. 2.8   Strip  Cutoff  Location  —  Strip   cutoff  shall  be
within ± 0.05 mm (0.002") of basic strip length.
7  Sampling
Sampling will be determined between user and supplier.
8  Packaging and Marking
8. 1   Packaging  —  Leadframes  mus t  be  packed  in
containers designed and constructed to prevent damage
and/or   contamination.   Specific   protection   must   be
provided      against      foreseeable      mechanical      and
environmental hazards.
8. 2   Marking  —  The  outer  containe rs  shall  be  clearly
marked,   identifying   the   user   stock   number,   user
purchase  order  number,  drawing  number,  and  vendor
lot number within the carton.

SEMI G41-87 © SEMI 19873
8. 3
Figure 1
Camber
Figure 2
Coil Set
Figure 3
Coined Area
Figure 4
Crossbow
Figure 5

SEMI G41-87 © SEMI 19874
Lead Twist
Table 1  SOIC Dual Standard Dimensions
0. 150 WIDE (NARROW)0.300 WIDTH (WIDE)
81416  141618202428
MATERIAL
GAGE
0. 0080.0080.0080.0100.0100.0100.0100.0100.010
STRIP WIDTH0.6001.0301.0301.0301.0301.2401.2401.4701.670
PROGRESSION0.3160.3160.3160.5300.5300.5300.5300.5300.530
TOOLING
HOLE
0. 0600.0600.0600.0600.0600.0600.0600.0600.060
DAMBAR
WIDTH
0. 0120.0120.0120.0120.0120.0120.0120.0120.012
DAMBARDIST
ANCE
0. 1020.1020.1020.1720.1720.1720.1720.1720.172
FROM PARTS
PER STRIP
202424
STRIP LENGTH6.327.5847.5847.427.427.427.427.427.42
PAD DOWNSET0.0080.0080.0080.0120.0120.0120.0120.0120.012
Figure 6
Stamped Leadframe Terminology

SEMI G41-87 © SEMI 19875
Note:
1. The oblong slots in frames, slot dimensions and locations are optional.
Figure 7
8 Lead Dual SOIC .150 (Narrow)
NOTE:
1. THE OBLONG SLOTS IN FRAMES, SLOT DIMENSIONS AND LOCATIONS ARE
OPTIONAL
Figure 8
16 Lead SOIC .150 (Narrow)

SEMI G41-87 © SEMI 19876
NOTE:
1. THE OBLONG SLOTS IN FRAMES, SLOT DIMENSIONS AND LOCATIONS
ARE OPTIONAL.
Figure 9
14 Lead Dual SOIC .300 (Wide)
Figure 10
16 Lead Dual SOIC .300 (Wide)
Figure 11
18 Lead Dual SOIC .300 (Wide)

SEMI G41-87 © SEMI 19877
Figure 12
20 Lead Dual SOIC .300 (Wide)
Figure 13
24 Lead Dual SOIC .300 (Wide)
Figure 14
28 Lead Dual SOIC .300 (Wide)

SEMI G41-87 © SEMI 19878
NOTICE: These  standards  do  not  purport  to  address
safety  issues,  if  any,  associated  with  their  use.  It  is  the
responsibility of the user of these standards to establish
appropriate  safety  and  health  practices  and  determine
the  applicability  of  regulatory  limitations  prior  to  use.
SEMI  makes  no  warranties  or  representations  as  to  the
suitability  of  the  standards  set  forth  herein  for  any
particular    application.    The    determination    of    the
suitability of the standard is solely the responsibility of
the user. Users are cautioned to refer to manufacturer’s
instructions,  product  labels,  product  data  sheets,  and
other    relevant    literature    respecting    any    materials
mentioned   herein.   These   standards   are   subject   to
change without notice.
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


SEMI G42-0996 © SEMI 1986, 2004 1
SEMI G42-0996 (Reapproved 1104)
SPECIFICATION FOR THERMAL TEST BOARD STANDARDIZATION
FOR MEASURING JUNCTION-TO-AMBIENT THERMAL RESISTANCE
OF SEMICONDUCTOR PACKAGES
This  specification  was  technically  reapproved  by  the  Global  Assembly  &  Packaging  Committee  and  is  the
direct  responsibility  of  the  Japanese  Packaging  Committee.  Current  edition  approved  by  the  Japanese
Regional Standards Committee on July 23, 2004.  Initially available at www.semi.org September 2004; to be
published November 2004. Originally published in 1986; previously published September 1996.
1  Purpose
1. 1    This  document  provides  the  requirements  for  a
standard  thermal  resistance  test  board  to  be  used  in
junction- to-ambient thermal resistance measurement of
a  semiconductor  package  under  still-  and  forced-air
condition as a referee method.
2  Scope
2. 1  This document describes the thermal resistance test
board for measurement of the following packages:
• Dual-In-Line Packages (DIP),
• Plastic Chip Carrier Package (PCC),
• Quad Flat Package (QFP),
• Pin Grid Array Package (PGA), and
• Ball Grid Array Package (BGA).
2. 2  This document uses SI units.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1    Information  regarding  the  methods  for  measuring
junction-to-ambient   thermal   resistance,   the   proper
design  and  use  of  thermal  test  chips,  and  material
specifications for printed circuit boards, can be found in
the applicable documents listed below.
3. 2  SEMI Standards
SEMI  G32  ó  Guideline  for  Unencapsulated  Thermal
Test Chip
SEMI  G38  ó  Test  Method  for  Still-  and  Forced-Air
Junction-to-Ambient             Thermal             Resistance
Measurements of Integrated Circuit Packages
3. 3  Military Specifications
1

MIL-P-13949   ó   Material   Specification   for   NEMA
Grade G-10 Printed Circuit Board Material
MIL-STD-883C     ó     Method     1012.1,     Thermal
Characteristics
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Terminology
4. 1  Definitions
4. 1.1  junction  temperature,T
J
ó  in  degrees  Celsius  is
used  to  denote  the  temperature  of  the  semiconductor
junction  in  the  microcircuit  in  which  the  major  part  of
the  heat  is  generated.  Usually  the  measured  junction
temperature is only indicative of the temperature in the
immediate  vicinity  of  the  element  used  to  sense  the
temperature.
4. 1.2  junction-to-ambient  thermal  resistance,  R
θJA
ó
in  degrees  Celsius/watt  is  the  temperature  difference
between  the  junction  and  the  ambient,  divided  by  the
power dissipation P
H
.
4. 1.3  power  dissipation,  P
H
ó  in  watts  is  the  heating
power  applied  to  the  device  causing  a  junction-to-
reference point temperature difference.
4. 1.4  temperature  sensitive  parameter,  TSP  ó  is  the
temperature  dependent  electrical  characteristic  of  the
junction under test which can be calibrated with respect
to  temperature  and  subsequently  used  to  detect  the
junction temperature of interest.
5  Ordering Information
5. 1    The  material  required  for  making  the  thermal  test
board  can  be  ordered  through  any  electronic  supply
store.


1 United States Military Standards, Available through the Naval
Publications and Forms Center, 5801 Tabor Avenue, Philadelphia,
PA 19120-5099, USA. Telephone: 215.697.3321


SEMI G42-0996 © SEMI 1986, 2004 2
6  Requirements
6. 1    General  requirements  regarding  the  materials  used
for  test  board,  the  specified  physical  dimensions  of  the
test board and other necessary conditions are described
in the following paragraphs:
6. 1.1  Material Requirements
6. 1.1.1  The test board material should be NEMA Grade
G-10 or equivalent.
6. 1.1.2    The  conductor  traces  on  the  board  must  be
copper  and  the  total  amount  of  copper  should  not
exceed 20% of the surface area of the board.
6. 1.1.3  The vias should be plated through.
6. 1.1.4    External  wire  connections  from  the  package
leads  to  edge  connector  leads  must  be  made  with  24-
gauge copper wire.
6. 1.2  Thermal  Test  Board  Physical  Dimensions and
Layout  ó  Five  separate  boards  are  designed  for  the
purpose  of  thermal  measurements  of  different  types  of
semiconductor packages.
6. 1.2.1  Physical Dimensions
6. 1.2.1.1  Length  ó  114.3  mm  ±  0.254  (4.50  inches  ±
0. 01)
6. 1.2.1.2  Width  ó  76.2  mm  ±  0.254  (3.00  inches  ±
0. 01)
6. 1.2.1.3  Thickness  ó  1.524  ñ  1.651  mm  ±  0.127  mm
(0.060 ñ 0.065 inches ± 0.005 inches)
6. 1.2.2  Layout
6. 1.2.2.1  Dual-in-Line    Packages    or    Sockets (See
Figure 1.)
a.   The  vias  shall  be  located  on  2.54  mm  (0.10  inch)
centers    ±    0.076    mm    (0.003    inches)    non-
accumulative.
b.   The diameter of the vias shall be 1.143 mm (0.045
inches) ± 0.076 mm (0.003 inches).
c.   The  location  of  the  vias  on  the  board  shall  be  as
shown in Figure 1.
6. 1.2.2.2  Chip Carrier Packages (See Figure 2.)
a.   The copper traces shall be laid out on the PC board
as shown in Figure 2. The traces are drawn on 1.27
mm  (0.050  inch)  centers  ±  0.127  mm  (0.005  inch)
non-accumulative.
b.   The  vias  at  the  end  of  the  copper  traces  shall  be
located on the 2.54 mm (0.10 inch) centers ± 0.076
mm (0.003 inch) non-accumulative.
6. 1.2.2.3  Quad  Flat  Packages  (0.3,  0.4,  0.5,  and  0.65
mm lead pitch) or sockets (See Figures 3ñ6.)
a.   The copper traces shall be laid out on the PC board
as  shown  in  Figures  3ñ6.  The  traces  are  drawn  in
accordance with pitch and width as shown in Table
1.
Table 1  Trace Pitch and Width for QFP Package
Boards
Package Lead Pitch
(mm)

Trace Pitch (mm)

Trace Width (mm)
0. 65 0.65 ± 0.05 0.35
0. 5 0.5 ± 0.05 0.25
0. 4 0.4 ± 0.04 0.2
0. 3 0.3 ± 0.03 0.15

6. 1.2.2.4  Pin  Grid  Array  Packages  or Sockets  (See
Figure 7.)
a.   The  vias  shall  be  located  on  2.54  mm  (0.10  inch)
centers    ±    0.076    mm    (0.003    inches)    non-
accumulative.
b.   The diameter of the copper lead shall be 1.2 mm ±
0. 046  mm  and  the  hole  shall  be  0.95  mm  ±  0.046
mm.
c.   The  location  of  the  vias  on  the  board  shall  be  as
shown in Figure 7-1.
6. 1.2.2.5  Ball Grid Array Packages (1.5, 1.27, and 1.0
mm Ball Pitch) (See Figure 8.)
a.   The copper traces shall be laid out on the PC board
as  shown  in  Figure  8-1.  The  traces  and  vias  are
drawn   in   accordance   with   configuration   and
dimension as shown in Table 2.
b.   The  board  shall  be  covered  by  resist  as  shown  in
Figure 8-2. The back side of the board shall not be
covered by resist.


SEMI G42-0996 © SEMI 1986, 2004 3
Table 2  Trace Dimension for BGA Package Boards

Pad Pitch (mm)

Trace Radius, R (mm)
Solder Mask Opening
Diameter ÿ1 (mm)

Hole Diameter ÿ 2 (mm)

Number of Pads
1. 5 0.9 0.6 0.2 33 x 33
1. 27 0.8 0.6 0.35 39 x 39
1. 0 0.6 0.45 0.3 49 x 49

6. 1.2.2.6    Equivalent  boards  for  other  packages  should
follow guidelines similar to those described in Sections
6. 1.2.2.1ñ6.1.2.2.5.
6. 1.2.2.7  Multi-Layer    Board    ó    When    measuring
thermal  resistance  using  a  multi-layer  board,  the  layer
shall  be  constructed  as  shown  in  Figure  9.  The  inner
pattern should have the clearance as shown in Figure 10
to isolate with via holes.
6. 1.3  Mounting Guidelines
6. 1.3.1  Example of package mounting on the boards is
shown   in   Figures   11   and   12.   Packages   should   be
mounted  such  that  the  center  line  of  the  test  board  is
coincidental with the center line of the package.
6. 1.3.2    For  DIP  and  CCP,  the  longer  edge  of  the
package should be closest to the long edge of the board.
6. 1.3.3    For  QFP,  PGA,  and  BGA  package  board,  the
package should be mounted in the center of the board.
6. 1.3.4      Packages   must   be   mounted   such   that   the
standoff   height   above   the   board   is   as   per   JEDEC
guidelines.  In  the  case  of  a  new  package  without  such
information available, a minimum of 0.127 mm (5 mil)
air  gap  between  the  bottom  surface of the package and
the thermal test board is acceptable.
6. 1.4  Mounting   the   Test   Board   for   Still-Air R
θJA

Measurement
6. 1.4.1    The  test  board  should  be  mounted  on  a  clamp
as   shown   in   Figure   13   through   a   suitable   edge
connector clamp.
6. 1.4.2    The  test  board  and  the  edge  connector  clamp
are placed in a 0.0283 m
3
(one cubic foot) enclosure as
shown  in  Figure  13.  The  edge  connector  clamp  height
must be adjusted to ensure positioning of the package in
the center of the chamber.
6. 1.4.3      The   electrical   wire   connections   from   the
package  are  routed  out  of  the  one  cubic  foot  enclosure
either  through  an  edge  connector  or  through  small
diameter holes in the box.
6. 1.5  Mounting  the  Test  Board  for  Forced-Air  R
θJA

Measurement  ó  Forced  air  R
θJA
measurements  are
performed  in  a  wind  tunnel  whose  diameter  is  203.2
mm (8.00 inches). Details of the wind tunnel are given
in SEMI G38.
6. 1.5.1    The  test  board  should  be  mounted  inside  the
wind  tunnel  on  an  edge  connector  clamp  as  shown  in
Figure 14.
6. 1.5.2  The test board is placed in the wind tunnel such
that  the  longer  edge  of  the  package  is  in  a  vertical
position (see Figure 14).
6. 1.5.3  The longer edge of the package should face the
direction of air flow.
6. 1.5.4    The  longer  side  of  the  package  must  meet  the
air front first, as shown in Figure 14.
6. 1.5.5    Air  may  be  forced  through  the  wind  tunnel  by
either  blowing  from  one  end  or  by  suction.  (Suction
being preferred.)
6. 1.5.6    The  test  board  and  the  edge  connector  clamp
are  placed  in  the  wind  tunnel  as  shown  in  Figure  14.
The  edge  connector  clamp  height  must  be  adjusted  to
ensure  positioning  of  the  package  in  the  center  of  the
wind tunnel.
6. 1.6    Thermal  Resistance  Measurement  Methods  ó
Methods   for   measuring   R
θJA
(Junction-to-Ambient
Thermal  Resistance)  of  IC  packages  using  thermal  test
chips  have  been  described  in  SEMI  G32  and  SEMI
G38,    respectively.    These    methods    or    equivalent
methods  such  as  the  use  of  switching  techniques,  as
described  in  MIL-STD-883C,  Method  1021.1,  should
be used for making thermal resistance measurements of
IC packages using thermal test chips or IC devices.
