---
title: "P19-92 - © SEMI 1992, 19962..."
description: "SEMI标准文档"
sidebar_label: "P19-92 - © SEMI 1992, 19962..."
sidebar_position: 1160
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-116.pdf'
  chapter: 116
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/116.pdf"
  pdfSize="2.47MB"
  title="P19-92 - © SEMI 1992, 19962..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI P19-92 © SEMI 1992, 19962
isolated  line  —  a  clearfield,  dark  line  as  shown  in
Figure 2 (SYN: island).
Figure 2
Isolated Line
isolated  space  —  A  darkfield,  clear  line  as  shown  in
Figure 3 (SYN: window, trench, contact, opening).
Figure 3
Isolated Space
2  Detail Specification
2. 1  Introduction
2. 1.1   This  specification  describes  th e  pattern  cells,
which  are  illustrated  in  the  figures  at  the  end  of  this
document.      These      cells      are      to      be      placed
photolithographically   or   by   other   direct   patterning
methods  onto  wafer  substrates  at  different  masking
levels during the IC manufacturing process.
2. 1.2   Many  details  of  the  pattern  cel ls,  such  as  the
orientation,  magnitude,  range  of  the  linewidths,  and
polarity of tone (clearfield vs. darkfield) will be defined
by  the  user,  unless  otherwise  noted.  When  reporting
results  based  on  tests  using  these  cells,  details  such  as
field       polarity,       orientation,       and       topographic
considerations must be indicated.
2. 1.3   All  critical  dimensions  given  i n  this  document
are   the   actual   CAD   values   at   1X.   For   a   given
magnification,  M,  the  target  dimensions  on  the  reticle
should  be  exactly  M  times  the  dimension  given  in  this
specification.  The reticle dimensions must not be sized
to compensate for any wafer process-induced bias.
2. 2  Applications
2. 2.1   These  cells  are  intended  to  be   used  in  several
applications. The following applications list some of the
intended uses for the pattern cells.
2. 2.1.1   in-line  process  monitoring  —   To  establish
patterns to determine if the layer has been processed to
design specifications.
2. 2.1.2  process transfer — To standar dize the patterns
for      process      monitoring      within      manufacturing
fabrication sites and to facilitate process and technology
transfers between sites.
2. 2.1.3   equipment  evaluation  —  To  st andardize  the
patterns used to evaluate semiconductor equipment.
2. 2.1.4   equipment  characterization  —   To  standardize
the patterns for the characterization process of different
metrology equipment.
3  Guidelines for Application s
3. 1  General
3. 1.1   The  cells  described  here  repres ent  a  primary
metrology  set  from  which  composite  patterns  may  be
constructed.
3. 1.2   A  composite  pattern  set  meets   this  standard  if  it
consists  of  any  number  of  the  basic  cells  described
herein,  provided  all  design  rules  for  each  cell  are
obeyed.
3. 1.3   Each  basic  cell  contains  a  fund amental  design
feature. This feature may be repeated at different (user-
defined)  dimensions  within  a  modified  metrology  cell.
The  user  will  determine  all  appropriate  dimensions  for
the       feature       as       they       apply       to       specific
processing/equipment situations.
3. 1.4   The  figures  provided  within  th is  document  are
intended  to  illustrate  the  proper  layout  of  each  pattern
cell and to define the appropriate design elements used
within  each  basic  cell.  The  pattern  cell  dimensions  are
provided when appropriate.
3. 1.5   All  feature  groups  must  be  sep arated  by  at  least
five times the largest feature width. This proximity rule
is defined in order to ensure that patterns intended to be
independent are indeed non-coupled.

SEMI P19-92 © SEMI 1992, 19963
3. 1.6   Labels,  border  lines,  indicator   marks,  or  any
other  adjacent  feature  will  be  separated  by  a  minimum
of 5 μm.
3. 1.7   A  label  to  indicate  the  nomina l  feature  width
must be placed near each basic cell, except the linearity
cell,  which  has  no  user-defined  features.  The  units  of
the  CD  labels  must  be  micrometers  and  at  least  two
significant figures must be used. The labels must be of
a  clearly  printable  size.  Decimal  points  are  optional.  If
decimal  points  are  eliminated,  digits  to  the  left  of  the
imaginary  decimal  point  must  be  slightly  larger  than
those  digits  to  the  right.  Characters  to  the  left  of  the
decimal are optional. All CD labels that are printed with
one  size  only  will  correspond  to  numbers  less  than  1.0
μm,  and  any  number  greater  than  1.0  μm  must  contain
at  least  one  character  to  the  right  of  the  decimal  place.
If  the  cell  includes  a  bias,  a  label  to  indicate  this  bias,
including a “+” sign, must be placed near the basic cell.
One significant figure may be used for bias labels if the
bias is less than 1.0 μm and a multiple of 0.1 μm. (e.g.,
+ 4 = + 0.4 μm).
3. 1.8   It  is  recognized  that  there  are  d esign  limitations
dictated  by  the  equipment  used  to  generate  the  pattern
(e.g., CAD grids, PG rectangles, E-beam spot sizes). It
is permitted within this standard to modify these cells in
order to meet these equipment limitations (e.g., stay on
grid).
3. 2  Specific
3. 2.1  L-Bar Cell — (See Figure 4.)
3. 2.1.1  The L-bar cell is designed to b e a measurement
site  for  isolated  features  as  well  as  line  and  space
groups  in  orthogonal  axes.  The  cell  can  be  used  to
measure the quality of pattern transfer and metrology of
imaged features. The cell is also a qualitative visual test
site for resolution of straight lines and lines bent at right
angles.
3. 2.1.2   The  design  elements  are  the  no minal  feature
width,  the  inter-feature  spacing,  the  minimum  feature
length,   and   the   intergrouping   linewidth   difference
(bias).
3. 2.1.3   The  basic  cell  consists  of  one  o r  more  groups
of nested L-shaped lines at a specific pitch. The pitch is
defined at twice the nominal feature width. (See Figure
5. )
W
0
= Nominal feature width
S = Interfeature spacing
L = Nominal feature length
W
0
-W
1
= Intergrouping linewidth difference (bias)
Figure 5
Table 1
Nominal Feature
Width
Number of Nested
L-barsMinimum Length
>1 μm310 W
0
≤1 μm510 μm
The center L-bar of each group shall extend beyond the
ends  of  the  other  L-bars  by  at  least  10  μm.    If  these
cells are to be used for cross-section analysis, the length
of the L-bars may be designed considerably longer than
the minimum length.
3. 2.1.4   The  L-bar  basic  cell  consists  o f  one,  three,
five,  or  seven  feature  groups.  If  the  basic  cell  only
consists  of  a  single  feature  group,  then  the  lines  and
spaces must both be equal to the nominal feature width.
If the basic cell consists of three, five, or seven groups,
then  the  groups  are  nested.  For  the  middle  group,  the
lines  and  spaces  must  both  be  equal  to  the  nominal
feature  width.  The  feature  widths  in  each  successive
feature  group  nested  outside  the  middle  group  are
incrementally increased by the bias. The feature widths
in  each  successive  feature  group  inside  the  middle
group  are  incrementally  decreased  by  the  bias.  The
pitch  for  all  L-bar  groups  within  a  basic  cell  must  be
held  constant  and  equal  to  twice  the  nominal  feature
width.
3. 2.2  Straight-Line Cell — (See Fig ure 6.)
3. 2.2.1   The  straight-line  cell  is  a  versi on  of  the  L-bar
cell,  modified  for  tilted  SEM  inspection  by  removing
the elbows.

SEMI P19-92 © SEMI 1992, 19964
Figure 7
The square area, shown above, is removed to create
straight-line cell.
3. 2.2.2   To  create  the  straight-line  cell   from  the  L-bar
cell,  the  area  removed  will  be  a  square  defined  by  two
diagonal corners referred to as “A” and “B” in Figure 7.
Corner  “A”  is  the  outer  edge  of  the  outermost  elbow.
Corner “B” is a point inside the innermost elbow whose
distance  to  the  nearest  edge  is  five  times  that  of  the
smallest CD — or 5.0 μm if the smallest CD is less than
1. 0 μm. This square area must remain unpatterned.
3. 2.3  Proximity Dagger Cell — (See  Figure 8.)
3. 2.3.1    The   proximity   dagger   cell   is   d esigned   to
provide information on the proximity effects of isolated
lines/spaces  in  relation  to  large  area  blocks.  This  cell
design  allows  clear  and  dark  features  to  be  measured
simultaneously in one layout.
3. 2.3.2   The  design  elements  within  th e  cell  are  the
nominal    feature    linewidth,    the    nominal    feature
spacewidth,  and  the  staircase  stepwidth.  The  stepwidth
is  user-selected,  but  it  is  recommended  to  be  at  least
25%  of  the  nominal  feature  pitch  (i.e.,  pitch  equals
nominal linewidth plus nominal spacewidth).
3. 2.3.3    The   cell   consists   of   a   nine-tier    staircase
reproduced  symmetrically  in  both  clear  and  darkfields.
A  full  description  of  the  clearfield  staircase  (i.e.,  large
chrome  islands)  is  given.  The  same  descriptions  apply
for  the  darkfield  staircase  except  the  polarities  are
reversed. Each tier is 10 microns tall. The full width of
the cell is 40 microns and the full height is 180 microns.
The   first   tier   separates   the   nominal   feature   width
symmetrically  from  the  large  chrome  islands  by  an
amount  equal  to  the  nominal  width.  Tiers  2–7  are
successively  wider  by  the  indicated  bias.  The  8th  and
9th  tiers  will  be  5  and  10  times  the  nominal  feature
width respectively.
3. 2.4  Contact Array Cell — (See Fig ure 9.)
3. 2.4.1     The  contact  array  cell  is  desig ned  to  provide
resolution and proximity-effect information over a wide
range of contact sizes.
3. 2.4.2   The  design  elements  are  the  no minal  square
contact  dimension,  the  inter-contact  dimension  within
the  5  ×  5  and  the  3  ×  3  arrays.    The  latter  dimension
will be equal to the contact dimension.
3. 2.4.3   The  contact  array  cell  will  con sist  of  three
subgroups: a 5 × 5 contact array, a 3 × 3 contact array,
and  an  isolated  contact.    The  5  ×  5  array  will  produce
the  maximal  proximity  (i.e.,  dense  printing)  for  the
center  contact.    The  center  contact  in  the  3  ×  3  array
will  exhibit  proximal  printing  effects  different  from
both the isolated contact and the dense contact.
3. 2.5  Staggered Contact Array — (S ee Figure 10.)
3. 2.5.1  The staggered contact array ce ll is designed to
improve   the   probability   of   cross-sectioning   small
contacts for SEM metrology analysis.
3. 2.5.2   The  design  elements  are  the  sq uare  contact
dimension,  the  column-to-column  vertical  offset  —  or
staggering  —  and  the  contact-to-contact  spacing.  The
contact-to-contact  spacing  will  be  equal  to  the  square
contact dimension.
3. 2.5.3   The  contacts  are  laid  out  using   a  minimum  of
three  columns  of  contacts.  The  user-selected  offset
between  columns  should  allow  the  contacts  to  remain
on grid.
3. 2.5.4  The lines (or spaces) shown on  the left side of
Figure  10  are  optional.  They  have  been  placed  to
provide feature identification of pitch calibration. If the
widths  are  to  be  submicron,  5  lines  (or  spaces)  instead
of 3 will be required.
3. 2.6  Linearity Cell — (See Figure 1 1.)
3. 2.6.1   The  linearity  cell  is  designed  t o  test  (1)  the
linearity  of  the  measurement  method,  assuming  the
lithographical  process  is  linear  over  all  line  sizes  used,
or  (2)  the  linearity  of  the  process,  assuming  that  the
metrological method is linear over all line sizes used.
3. 2.6.2    The   design   elements   of   this   ce ll   are   the
linewidths,  the  interfeature  spacing,  and  the  minimum
line lengths. Unlike the other cells, its elements are not
adjusted  to  a  nominal  critical  dimension,  but  rather  are
numerically specified as constants for all applications.
3. 2.6.3   The  cell  consists  of  nine  parall el  lines,  placed
on a five-micron pitch. The linewidths are 1.2, 1.1, 1.0,
0. 9, 0.8, 0.7, 0.6, 0.5, and 0.4 microns. The line lengths
are  a  minimum  of  ten  microns.  A  two-micron  top  and
bottom border (running orthogonal to the parallel lines,

SEMI P19-92 © SEMI 1992, 19965
across  the  ends)  is  provided  on  the  array  to  allow
recognition of the cell as a unit.
3. 2.7  Electrical Cell — (See Figure  12.)
3. 2.7.1   The  electrical  cell  is  designed   to  provide  very
precise and relatively fast determinations of the average
linewidth  of  a  conductive  film  using  an  automated  test
system, but can also be used with a manual prober.
3. 2.7.2  The design elements of this ce ll are the bridge
resistor linewidth, W
b
, the center-of-tap to center-of-tap
bridge  length,  L
b
,  the  sheet  and  bridge  tap  widths,  W
c
and W
t
, the sheet and bridge tap lengths, L
c
and L
t
, the
extension  of  the  bridge  resistor  line  to  the  nearest
discontinuity in that line, L
e
, and the size of the square
sheet  will  be  35  –  100  μm.    See  Figure  13  for  the
labeling of these elements.  The rules for these elements
are as follows:
W
t
≤ W
b
(for L
b
< 100 W
b
)(1)
W
t
≤ 1.2*W
b
(for L
b
≥ 100 W
b
and W(2)
L
b
≥ 15W
b
for 80 μm, whichever is larger)(3)
L
t
> 2W
t
(4)
L
e
> 2W
b
(5)
L
c
> 2W
c
(6)
3. 2.7.3 The  cell  consists  of  two  types  o f  four-point
Kelvin structures: a van der Pauw sheet resistor and one
or   more   bridge   resisitors.   The   orientation   of   the
individual  bridge  resistors  is  user-defined.  The  bridge
resisitors  also  can  be  surrounded  by  dummy  lines  to
measure  the  process  bias  due  to  proximity  effect.  On
structures     containing     the     dummy     lines,     the
interconnects  will  hook  up  to  the  bridge  resistor  in  a
perpendicular fashion, as shown in Figure 14.
3. 2.7.4  The pad labeled with a V in Fi gures 13 and 15
will be used for voltage measurement only, and will be
used   as   the   fourth   point   in   the   sheet   resistivity
measurements  that  will  be  used  to  make  the  linewidth
determination.

SEMI P19-92 © SEMI 1992, 19966
Figure 13
Electrical Cell, 2 × n Configuration with Labeling
Figure 14
Blow-Up of Bridge Resistor with Proximity Lines

SEMI P19-92 © SEMI 1992, 19967
3. 2.7.5  The pads can be arranged in a  1 × n layout for
scribeline    placement    (see    Figure    15),    or    the
conventional  2  ×  n  layout  can  be  used  if  the  spatial
constraints  are  minimal.    Pad  size  and  pitch  are  user-
defined.    For    automatic    testing    in    a    production
environment,  it  is  recommended  that  the  pads  be  80  –
100 mm per side.
3. 3  User Considerations
3. 3.1  Target CD versus Resolved CD
3. 3.1.1   The  desired  size  of  a  critical  d imension  (CD)
on  an  integrated  circuit  can  be  considered  its  nominal
value and is herein designated the “target CD.” The size
actually  achieved  (resolved  CD)  on  the  circuit  may  be
different from this nominal value.
3. 3.1.2   Measurements  of  the  resolved   CD  may  not  be
accurate  because  of  the  difficulty  in  determining  the
actual location of the edge in the optical or SEM image
profile.
3. 3.1.3    Even   if   inaccurate,   measureme nt   of   the
resolved CD can be valuable for comparison purposes if
the  measurement  method  has  adequate  precision  and
sensitivity to detect the dimensional changes of interest.
3. 3.1.4  The traditional definition of re solution may not
be  adequate  (e.g.,  ability  to  distinguish  closely  spaced
points)    for    specifying    the    sensitivity    to    small
dimensional changes.
4  References
4. 1   Yen,  D.,  Linholm,  L.W.,  and  B uehler,  M.G.,  “A
Cross-Bridge    Test    Structure    for    Evaluating    the
Linewidth    Uniformity    of    an    Integrated    Circuit
Lithography    System,”    J.    Electrochemical    Society
1_2_9_ (1982), 2313.
4. 2   Hasan,  T.F.,  Perloff,  D.S.,  and   Mallory,  C.L.,
“Test  Structures  for  the  Measurement  and  Analysis  of
VLSI     Lithographic     and     Etching     Parameters”,
Semiconductor  Silicon/1981,  H.R.  Huff,  R.J.  Kriegler
and    Y.    Takeishi    Eds.,    (Electrochemical    Society,
Pennington, NJ) 1981, 866.
4. 3   Carver,  G.P.,  Mattis,  R.L.,  and   Buehler,  M.G.,
“Design   Considerations   for   the   Cross-Bridge   Sheet
Resistor,”    NBSIR    82-2548,    National    Bureau    of
Standards, Washington, DC, (1982).
4. 4   Buehler,  M.G.,  Hershey,  C.W. ,  “The  Split-Cross-
Bridge  Resistor  for  Measuring  the  Sheet  Resistance,
Linewidth,  and  Line  Spacing  of  Conducting  Layers,”
IEEE Transactions on Electron Devices, (1986), 1572.
4. 5  Lin, Burn J., “Proximity and A stigmatism Tolerant
Testsites  for  Electrical  Linewidth  Measurement,”  SPIE
Proc., Vol. – (1989).
Figure 15
Electrical Cell, 1 × n Configuration

SEMI P19-92 © SEMI 1992, 19968
Figure 4
L-Bar Cell
Figure 6
Straight Line Cell

SEMI P19-92 © SEMI 1992, 19969
Figure 8
Proximity Dagger Cell

SEMI P19-92 © SEMI 1992, 199610
Figure 9
Contact Array Cell

SEMI P19-92 © SEMI 1992, 199611
Figure 10
Staggered Contact Array

SEMI P19-92 © SEMI 1992, 199612
Figure 11
Linearity Cell
Figure 12
Electrical Cell, 2 × n Configuration
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
International),  3081  Zanker  Road,  San  Jose,  CA    95134.  Reproduction
of  the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.



SEMI P20-0703 © SEMI 1992, 2003 1
SEMI P20-0703
GUIDELINE FOR CATALOG PUBLICATION OF EB RESIST
PARAMETERS (PROPOSAL)
This  guideline  was  technically  approved  by  the  Global  Micropatterning  Committee  and  is  the  direct
responsibility  of  the  Japanese  Micropatterning  Committee.  Current  edition  approved  by  the  Japanese
Regional  Standards  Committee  on  April  28,  2003.    Initially  available  at  www.semi.org  June  2003;  to  be
published July 2003. Originally published in 1992.
1  Purpose
1. 1      The   purpose   of   this   guideline   is   to   provide   a
baseline for publications of EB resist parameters. It can
also  be  used  as  a  guide  to  evaluate  resist  process
parameters.  This  guideline  is  intended  to  be  applicable
for electron beam processes.
1. 2      The   parameters   for   EB   Resist   publication   are
discussed below.
2  Scope
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Resist Commercial Name
3. 1  Describe resist commercial name.
4  Resist Properties
4. 1  Polymer Properties
4. 1.1  Components   ó   Describe   resist   components.
Chemical structure is not necessarily required.
4. 1.2  Molecular   Weight   ó   Describe   M
w
,   Mn   and
M
w
/Mn if known.
4. 1.3  Thermal Characteristics ó Describe Tg and Tm.
4. 2  Resist Solution Properties
4. 2.1  Solvent ó Specify chemical names.
4. 2.2  Viscosity ó Solution viscosity, mPa∑s, 25∞C.
4. 2.3  Solid Content ó Weight %.
5  Film Forming Properties
5. 1  Thickness  Curves  ó  Plot  film  thickness  T  (μm  or
nm) after prebake versus spinning speed R (rpm). Here,
x axis is log (R) and y axis is log (T).
5. 2  Conditions ó Specify following conditions.
5. 2.1  Substrate   ó   Silicon   wafer   or   chrome   mask
blank. Specify its structure.
5. 2.2  Spinning     Conditions     ó     Specify     spinning
conditions including coating sequence.
5. 2.3  Environmental  Conditions  ó  Temperature  (∞C),
relative humidity (%).
5. 2.4  Prebake  Conditions  ó  Prebaking  temperature
(∞C),   time   (sec),   heating   and   cooling   method   and
apparatus.  Specify  heating  rate  and  cooling  rate  if
monitored.
5. 2.5  Thickness  Measurement  Methods  ó  Thickness
measurement  instruments  and  measurement  method.  In
case   of   a   light   interferance   thickness   measurement
apparatus,  specify  the  refractive  index  as  a  parameter
used in the measurement.
6  Film Thicknesses
6. 1        Defines    resist    thicknesses    and    measurement
conditions for resist parameter descriptions in and after
Section 10. Unit is μm or nm.
6. 1.1  Film Thickness Definitions
6. 1.1.1  Ti  ó  Initial  thickness  after  prebake  prior  to
exposure.
6. 1.1.2  Te     ó     Exposed     region     thickness     after
development.
6. 1.1.3  Tu    ó    Unexposed    region    thickness    after
development, and after postbake if required.
6. 1.1.4  NTe   ó   Te/Ti.   Normalized   exposed   region
thickness.
6. 1.1.5  NTu  ó  Tu/Ti.  Normalized  unexposed  region
thickness.
6. 1.2  Thickness Measurement Conditions ó Thickness
measurement    conditions    should    be    the    same    as
described  in  Section  5.2.5.  In  case  of  measurements  of
exposed  region  thickness,  exposed  region  area  should
be larger than 20 μm on all sides.
7  Sample Preparation
7. 1      Defines   sample   preparation   methods   for   resist
parameter descriptions in and after Section 10.
7. 1.1  Film  Thickness  ó  Ti.  0.50  ±  0.02  μm  (500  ±  20
nm) is recommended for a standard thickness.



SEMI P20-0703 © SEMI 1992, 2003 2
7. 1.2  Conditions  ó  Specify  conditions  described  in
Sections 5.2.1 to 5.2.4.
8  Exposure
8. 1  Defines exposure condition description methods for
resist parameter descriptions in and after Section 10.
8. 1.1  Exposure   Dosage   Definition   ó   Quantity   of
electrical charge per unit area, μC/cm
2
. Describe as D.
8. 1.2  Exposure  Dosage  Calculation  ó  Calculate  as
follows.
D = I ◊ t/S ◊ 10
6

Here,  I  is  current  (A),  t  is  exposure  time  (s),  S  is
exposure area (cm
2
).

Specify these parameters.
8. 1.3  Acceleration Voltage ó In a range from 10 to 50
kV.
8. 1.4  Exposure System ó Specify exposure methods.
8. 1.4.1  Beam Scanning Methods ó For example, raster
scanning  or  vector  scanning.  Specify  beam  scanning
pitch if defined.
8. 1.4.2   Beam Shape ó Describe beam shape.
8. 1.4.3  Beam  Conditions  ó  Specify  beam  size  (μm  or
nm) and current density (A/cm
2
), if possible.
8. 1.4.4  Exposure Tool Manufacturer and System Name
ó  Specify  exposure  tool  manufacturer  and  system
name, if possible.
9  Processing and Developing Parameters
9. 1    This  section  defines  process  condition  descriptions
in and after Section 10.
9. 1.1  Post  Exposure  Treatments  ó  Describe  if  any
treatment     is     processed     after     exposure     before
development.
9. 1.1.1  Methods ó For example, post exposure bake.
9. 1.1.2  Conditions     ó     For     example,     treatment
conditions    such    as    temperature    (∞C),    time    (s),
atmosphere,   heating   method,   cooling   method   and
apparatus.  Specify  heating  rate  and  cooling  rate  if
monitored.
9. 1.2  Developing Parameters
9. 1.2.1  Methods ó Specify spray, dip, or puddle.
9. 1.2.2  Solution   Components   ó   Specify   name   of
developer   and   rinse.   (Chemical   names   and   weight
percent if possible.)
9. 1.2.3  Temperature ó ∞C
• For  spray,  bulk  temperature.  Processing  chamber
atmospheric temperature if monitored.
• For dip, solution temperature.
• For  puddle,  bulk  temperature.  Processing  chamber
atmospheric temperature and substrate temperature
if monitored.
9. 1.2.4  Time ó sec.
9. 1.2.5  Relative Humidity ó %.
9. 1.2.6  Additional Processes ó Specify if applied.
9. 1.3  Post bake
9. 1.3.1  Conditions   ó   Temperature   (∞C),   time   (s),
heating    method,    cooling    method,    and    apparatus.
Specify heating rate and cooling rate if monitored.
9. 1.3.2    Describe  treatment  conditions  before  or  after
post baking, if applied.
10  Sensitivity Curves
10. 1  Curve  Plotting  ó  Plot  NTe  as  a  function  of  D.
Here, x axis is log (D), y axis is NTe.
10. 2  Exposure Dosage Range
10. 2.1  Positive Resist ó Include dosages larger than a
dose gives NTe of 0.
10. 2.2  Negative Resist ó Include dosages larger than a
dose gives NTe of 0.7.
11  Sensitivity
11. 1  A  dose  required  to  form  a  pattern  larger  than  20
μm on all sides.
11. 1.1  Positive Resist ó Describe as Dp
0
. It gives NTe
of 0.
11. 1.2  Negative  Resist  ó  Describe  as  Dn
0. 5
.  It  gives
NTe of 0.5.
12  Contrast
12. 1  Contrast  Definition  ó  Describe  as  γ.  Calculate
from a slope of resist sensitivity curve.
12. 2  Positive  Resist  (Figure  1)  ó  Calculate  using  an
angle  given  from  a  solid  line  between  NTe  of  0  and
NTe of 0.8 and a solid line parallel to x axis. Here, NTu
should be larger than 0.9.

γ
p
0
−
0. 8

=
tan
θ =
y/x
=
0. 8/log (Dp
0
/Dp
0. 8
)




SEMI P20-0703 © SEMI 1992, 2003 3
12. 3  Negative  Resist  (Figure  2)  ó  Calculate  using  an
angle  given  from  a  solid  line  between  NTe  of  0.5  and
NTe of 0.7 and a solid line parallel to x axis.

γ
p
0. 5
−
0. 7
= tanθ = y/x = 0.2/log (Dn
0. 7
/Dn
0. 5
)

13  Resolution
13. 1  Pattern  Type  and  Feature  Size  ó  Lines  and
spaces.  Ratio  of  lines  and  spaces  should  be  1:1.  Add
hole pattern and isolated pattern if possible.
13. 2  Conditions ó Specify conditions in Sections 7, 8,
and 9.
13. 3  Measurement   Method   ó   Measure   resolutions
using a scanning electron microscope.
14  Nominal Exposure Dosage
14. 1  Nominal  Exposure  Dosage  Definition  ó  A  dose
which  gives  lines  and  spaces  of  3  μm  at  a  ratio  of  1:1
under conditions described in Sections 7, 8, and 9.
15  Others
15. 1  Describe following items if known.
15. 1.1  Durability ó Wet etching, dry etching.
15. 1.2  Stability  ó  Shelf  stability,  spun  film  stability,
post exposure stability, and post processing stability.
15. 1.3  Removability    ó    Describe    resist    removing
method after processing.
15. 1.4  Remarks  ó  Describe  special  characteristics  of
the EB resist.
15. 1.5  Cautions ó Describe cautions for safety.
(Reference) G.N. Taylor, Solid State Technology, June
(1984) 105.

Figure 1
Positive Sensitivity Curve

Figure 2
Negative Sensitivity Curve




SEMI P20-0703 © SEMI 1992, 2003 4
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



SEMI P21-92 © SEMI 1992, 2003 1
SEMI P21-92 (Reapproved 0703)
GUIDELINES FOR PRECISION AND ACCURACY EXPRESSION FOR
MASK WRITING EQUIPMENT
This  guideline  was  technically  approved  by  the  Global  Micropatterning  Committee  and  is  the  direct
responsibility  of  the  Japanese  Micropatterning  Committee.  Current  edition  approved  by  the  Japanese
Regional  Standards  Committee  on  April  28,  2003.    Initially  available  at  www.semi.org  June  2003;  to  be
published July 2003. Originally published in 1992.
1  Purpose
1. 1      This   guideline   describes   general   requirements
concerning  precision  and  accuracy  expression  of  mask
writing   equipment.   Writing   accuracy   of   the   mask
writing  equipment  is  evaluated  by  measuring  a  written
mask and is affected greatly by process conditions to be
carried  out.  Therefore,  the  writing  conditions  are  to  be
agreed upon by the user and supplier.
2  Scope
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Precision and Accuracy Expression Items,
Definitions, Measurement, and Requirements
3. 1  Minimum Pattern
3. 1.1  Definition
• The minimum line and space pattern and minimum
pattern which is possible to be separated.
3. 1.2  Expression
• SEM photograph
3. 1.3  Measurement
• SEM photograph of the resist pattern or the chrome
pattern.
3. 2  Pattern Dimension Precision and Accuracy
3. 2.1  Definition
• Critical Dimension (CD) variation and deviation of
written pattern from designed value.
3. 2.2  Expression
• Deviation of measured mean value to design value
(∆l:μm) and variations (3 σ:μm).
• Measured   area   and   number   of   sampling   point
should be clearly described.
3. 2.3  Measurement
• Optical CD measurement
• Electron beam CD measurement
• CD measurement done by self-diagnostic feature of
writing equipment.
3. 2.4  Requirement
• Width  of  a  long  line  pattern  in  X  and  Y  direction
should be measured.
• Pattern  types  are  isolated  pattern;  1:1  line  and
space pattern or 1:2 line and space pattern.
• The line width to be measured is not specified, but
at   least   three   different   line   widths   should   be
measured.
• Examples of patterns are shown in Figures 1 and 2.
3. 3  Overlay Accuracy
3. 3.1  Definition
• Relative  deviation  of  pattern  position  between  two
masks.
3. 3.2  Expression
• 3σ:μm (X and Y direction separately)
• Measured  area  and  number  of  sampling  points
should be clearly described.
3. 3.3  Measurement
• Optical coordinates measurement
• Electron beam coordinates measurement
• Coordinates  measurement  done  by  self-diagnostic
feature of writing equipment.
3. 3.4  Requirement
• The  pattern  should  be  cross  or  L  mark.  Uniform
rotation error in measurement should be subtracted
from the measurement result.
• Overlay accuracy between different cassette should
be  clearly  described.  An  example  of  a  pattern  is
shown in Figure 3.



SEMI P21-92 © SEMI 1992, 2003 2
3. 4  Pattern Stitching Accuracy
3. 4.1  Definition
• Position errors at the stitching boundary of writing
fields, stripes, and shots.
3. 4.2  Expression
• |average  value|  1  +  3  σμm  (X  and  Y  direction
separately) measured area and number of sampling
points should be clearly described.
3. 4.3  Measurement
• Optical coordinates measurement
• Electron beam coordinate measurement
• Coordinates  measurement  done  by  self-diagnostic
feature of writing equipment.
• Vernier measurement
• Boundary measurement by SEM image
3. 4.4  Requirement
• The  pattern  should  be  cross  or  L  marks  in  both
sides   adjacent   to   the   stitching   boundary   for
coordinate measurement.
• When    the    optical    microscope    is    used    for
measurement, the vernier pattern should be used.
4  Notice
4. 1      The   following   subjects   should   be   agreed   upon
beforehand   between   users   and   makers   in   order   to
evaluate  the  above-mentioned  writing  precision  and
accuracy item.
4. 1.1  Process Requirements
• Resist Materials
• Coating Condition
• Development Condition
• Process Sequence
• Mask Substrate and Chrome Thin Film Materials
4. 1.2  Test Pattern
4. 1.3  Measurement Procedure
5  Others
5. 1    The  following  items  are  not  specified  in  these
guidelines,  still  it  is  preferable  that  these  items  are
agreed upon beforehand between user and supplier.
5. 1.1  Pattern coordinates
5. 1.2  Pattern position accuracy
5. 1.3  Long-term stability of accuracy
5. 1.4  Particles



SEMI P21-92 © SEMI 1992, 2003 3

Figure 1



SEMI P21-92 © SEMI 1992, 2003 4

Figure 2



SEMI P21-92 © SEMI 1992, 2003 5

Figure 3

NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturerís  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature respecting any materials mentioned herein. These standards are subject to change without notice.
The  userís  attention  is  called  to  the  possibility  that  compliance  with  this  standard  may  require  use  of  copyrighted
material  or  of  an  invention  covered  by  patent  rights.  By  publication  of  this  standard,  SEMI  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  item  mentioned  in  this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights, are entirely their own responsibility.


Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI P22-0699 © SEMI 1993, 19991
SEMI P22-0699
GUIDELINE FOR PHOTOMASK DEFECT CLASSIFICATION AND SIZE
DEFINITION
This guideline was technically approved by the Global Mask & Mask Equipment Committee and is the direct
responsibility  of  the  Japanese  Mask  &  Mask  Equipment  Committee.  Current  edition  approved  by  the
Japanese Regional Standards Committee on March 17, 1999.  Initially available at www.semi.org April 1999;
to be published June 1999. Originally published in 1993.
1  Purpose
1. 1   The  purpose  of  this  guideline  i s  to  establish  stan-
dard nomenclature for photomask defect classifications,
and to define defect sizing methods.
2  Scope
2. 1    It   is   desirable   to   follow   this   gu ideline   when
discussing  classification,  nomenclature,  and  size  of  the
photomask defects.
3  References
3. 1  SEMI Standard
SEMI     P33     —     Provisional     Specification     For
Developmental    230    mm    Square    Hard    Surface
Photomask Substrates.
4  Terminology
4. 1  design pattern — pattern of int ended design data.
4. 2    photomask   pattern   —   pattern   o n   photomask
surface.
4. 3  Many terms relating to photom ask technology can
be found in SEMI P33.
5  Classification of the Mask  Defect
5. 1  Mask Pattern Defects
5. 1.1   Shape  Defect  —  a  photomask  p attern  whose
shape is different from its intended design pattern.
5. 1.1.1  Isolated  Defect  —  shape  defec ts  which  are
isolated from pattern.
1) Dot (See Figures 1, 23)
2) Hole (See Figure 2)
5. 1.1.2  Edge   Defect   —   shape   defects   w hich   are
adjacent to straight pattern edge.
1) Edge Extension (See Figures 3, 24)
2) Edge Intrusion (See Figure 4)
5. 1.1.3  Corner  Defect  —  shape  defect s  which  are
adjacent to corners.
1) Corner Extension (See Figures 5, 27, 29)
2) Corner Intrusion (See Figures 6, 28, 30)
5. 1.1.4  Bridge  —  shape  defects  which   are  adjacent  to
more than two edges.
1) Opaque Bridge (See Figures 7, 26)
2) Clear Bridge (See Figure 8)
5. 1.2  Size Defect — a photomask pa ttern whose size is
different from its intended design pattern.
1) Oversize (on opaque pattern) (See Figure 9)
2) Oversize (on clear pattern) (See Figure 10)
3) Undersize (on opaque pattern) (See Figure 11)
4) Undersize (on clear pattern) (See Figure 12)
5) Elongation (on opaque pattern) (See Figure 13)
6) Elongation (on clear pattern) (See Figure 14)
7) Truncation (on opaque pattern) (See Figure 15)
8) Truncation (on clear pattern) (See Figure 16)
5. 1.3   Misplacement  Defect —  a  pho tomask  pattern
whose  placement  is  different  from  its  intended  design.
(See Figures 17, 18, 25)
5. 1.4   Transmission  Defect  —  a  phot omask  pattern
whose   transmission   is   different   from   its   intended
design.
1) Transmission Defect (on clear pattern) (See Figure
19)
2) Transmission   Defect   (on   opaque   pattern)   (See
Figure 20)
5. 1.5   Missing  pattern  defect — a  pho tomask  pattern
which is absent.
1) Missing opaque pattern (See Figure 21)
2) Missing clear pattern (See Figure 22)
5. 2  Glass Defect — unwanted defe ct in (or on) a glass
created  by  various  undefined  causes  (e.g.  sleek,  pit,
scratch,    chip,    striation,    polishing    mark,    discolor,
bubbles, etc.).
5. 3  Miscellaneous Defect — unwa nted clear or opaque
spot  created  by  various  undefined  causes  (e.g.,  crystal

SEMI P22-0699 © SEMI 1993, 19992
growth,  electrostatic  damage,  organic  material  deposit,
Phase shift defect).
6  Definition of Size for Phot omask Defects
6. 1   The  tools  and  conditions  used   to  measure  defect
size should be clearly specified.
6. 2  Pattern Defects
6. 2.1  Shape Defects
6. 2.1.1  Isolated  Defect  —  defect  size   is  expressed  as
two  dimensions  (S1  and  S2)  of  the  smallest  rectangle
that encloses the defect. (See Figures 1, 2, 23)
6. 2.1.2  Edge Defect — defect size is e xpressed as two
dimensions  (S1  and  S2)  of  the  smallest  rectangle  that
encloses the defect. (See Figures 3, 4, 24)
6. 2.1.3  Corner  Defect  —  defect  size  is   expressed  as
the distance (S1) between the intersection point, formed
by the bisection of the corner angle and the pattern, and
the point designed. (See Figures 5, 6)
6. 2.1.4  Bridge  —  defect  size  is  expres sed  as  two
dimensions  (S1  and  S2)  of  the  smallest  rectangle  that
encloses the defect. (See Figures 7, 8, 26)
6. 2.2  Size Defects
6. 2.2.1  Oversize   and   Undersize   —   def ect   size   is
expressed  as  two  dimensions  (S1  and  S2)  representing
the  absolute  value  of  the  deviation  from  the  intended
design pattern.
S1 = | b - a |
S2 = | d - c |
“a”  and  “c”  are  intended  value;  “b”  and  “d”  are  actual
measured value. (See Figures 9, 10, 11, 12)
6. 2.2.2  Elongation  and  Truncation  —   defect  size  is
expressed   as   two   dimensions   (S1   and   S2)   of   the
smallest  rectangle  that  encloses  the  deviation  from  the
intended design pattern. (See Figures 13, 14, 15, 16)
6. 2.3  Misplacement Defect — defec t size is expressed
as the absolute value of X and Y displacement from its
intended position. (See Figures 17, 18, 25)
6. 2.4  Transmission Defect —  transm ission defects are
evaluated by their transmissivity in addition to the size.
The   wavelength   used   for   measurement   should   be
clearly  specified,  as  well  as  the  transmissivity  error
(Te).    Defect  dimensions  should  be  consistent  with
other definitions. (See Figures 19, 20)
Te = Td  - Ti
where
Td = transmissivity of defect
Ti = intended transmissivity of design
6. 2.5    Missing   Pattern   Defect   —   def ect   size   is
expressed   as   two   dimensions   (S1   and   S2)   of   the
smallest  rectangle  that  encloses  the  intended  design
pattern. (See Figures 21, 22)
6. 3  Randomly Shaped Defects — f or the defects which
all  of  above  sizing  method  cannot  be  applied,  defect
size is expressed as two dimensions (S1 and S2) of the
smallest rectangle that encloses the defect. (See Figures
23, 24, 27, 28, 29, 30)
Figure 1Figure 2
DotHole

SEMI P22-0699 © SEMI 1993, 19993
Figure 3Figure 4
Edge ExtensionEdge Intrusion
S1
1/2
1/2
S1
1/2
1/2
Figure 5Figure 6
Corner ExtensionCorner Intrusion
Figure 7Figure 8
Opaque BridgeClear Bridge

SEMI P22-0699 © SEMI 1993, 19994
Figure 9Figure 10
Oversize On Opaque PatternOversize On Clear Pattern
Figure 11Figure 12
Undersize On Opaque PatternUndersize On Clear Pattern
Figure 13Figure 14
Elongation On Opaque PatternElongation On Clear Pattern

SEMI P22-0699 © SEMI 1993, 19995
Figure 15Figure 16
Truncation On Opaque PatternTruncation On Clear Pattern
Figure 17Figure 18
Misplacement On Opaque PatternMisplacement On Clear Pattern
Figure 19Figure 20
Transmission Defect On Clear PatternTransmission Defect On Opaque Pattern

SEMI P22-0699 © SEMI 1993, 19996
Figure 21Figure 22
Missing Opaque PatternMissing Clear Pattern
S1
S2
Figure 23Figure 24
Dot Randomly ShapedEdge Extension Randomly Shaped
Figure 25Figure 26
Misplacement On Opaque PatternOpaque Bridge

SEMI P22-0699 © SEMI 1993, 19997
S2
S1
S2
S1
Figure 27Figure 28
Corner Extension Randomly ShapedCorner Intrusion Randomly Shaped
S1
S2
S2
S1
Figure 29Figure 30
Corner Extension Randomly ShapedCorner Intrusion Randomly Shaped
NOTICE:  These  standards  do  not  purport  to  address
safety  issues,  if  any,  associated  with  their  use.  It  is  the
responsibility of the user of these standards to establish
appropriate  safety  and  health  practices  and  determine
the  applicability  of  regulatory  limitations  prior  to  use.
SEMI  makes  no  warranties  or  representations  as  to  the
suitability  of  the  standards  set  forth  herein  for  any
particular    application.    The    determination    of    the
suitability of the standard is solely the responsibility of
the user.  Users are cautioned to refer to manufacturer's
instructions,  product  labels,  product  data  sheets,  and
other    relevant    literature    respecting    any    materials
mentioned   herein.   These   standards   are   subject   to
change without notice.
The  user's  attention  is  called  to  the  possibility  that
compliance   with   this   standard   may   require   use   of
copyrighted  material  or  of  an  invention  covered  by
patent  rights.  By  publication  of  this  standard,  SEMI
takes  no  position  respecting  the  validity  of  any  patent
rights  or  copyrights  asserted  in  connection  with  any
item  mentioned  in  this  standard.  Users  of  this  standard
are  expressly  advised  that  determination  of  any  such
patent rights or copyrights, and the risk of infringement
of such rights are entirely their own responsibility.
Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.

SEMI P23-0200 © SEMI 1993, 20001
SEMI P23-0200
GUIDELINES FOR PROGRAMMED DEFECT MASKS AND
BENCHMARK PROCEDURES FOR SENSITIVITY ANALYSIS OF MASK
DEFECT INSPECTION SYSTEMS
These guidelines were technically approved by the Global Mask and Mask Equipment Committee and are the
direct responsibility of the Japanese Mask and Mask Equipment Committee. Current edition approved by the
Japanese  Regional  Standards  Committee  on  September  10,  1999.    Initially  available  at  www.semi.org
February 2000; to be published February 2000. Originally published in 1993; previously published in 1996.
NOTE: These guidelines were rewritten in their entirety
in February 2000.
1  Purpose
1. 1   The  purpose  of  this  guideline  i s  to  propose  a  test
mask  to  be  used  for  evaluation  of  the  sensitivity  of
Mask   Defect   Inspection   Systems.   This   test   mask
consists  of  test  chips  including  programmed  pattern
defects  and  reference  test  chips  without  programmed
defects.  Since  the  test  chip  is  an  assembly  of  cells,  the
test  chips  are  defined  in  this  guideline  by  cell  patterns,
programmed  defects  in  cell  patterns,  and  the  layout  of
the cells. Also, the test mask is defined by defining the
test  chips  arrangement.  Furthermore,  the  use  of  this
mask  is  described.  It  is  desirable  that  these  test  masks
and benchmark procedures be used when the sensitivity
of a Mask Defect Inspection System is evaluated.
1. 2  Background — Different mask s have been used by
many  equipment  manufacturers  and  users  in  the  past,
and  sensitivity  has  been  tested  by  various  methods
decided  independently  by  each  manufacturer  and  user.
In  some  cases,  no  common  measurement  methods  or
sensitivity  analysis  methods  have  been  agreed  upon.
Therefore,  confusion  exists  concerning  the  sensitivity
comparison  of  equipment  between  manufacturers,  the
definition    for    specifications    between    users    and
suppliers,  and  the  definition  for  specifications  between
users.  Also, due to the fact that several problems were
found  when  using  the  previous  guideline  in  actual
manufacturing,  the  document  has  been  reviewed  and
content  has  been  changed  throughout.    It  was  also  the
goal   of   this   revision,   while   considering   ease   of
manufacturing  of  test  masks  first,  to  fully  cover  the
evaluation of mask defect inspection systems.
2  Scope
2. 1  This guideline defines the con tent and methods for
use of test masks used in the evaluation of mask defect
inspection  systems.    Although  it  is  possible  to  use  this
test  mask  to  evaluate  transcription  of  defects  etc.,  this
standard does not attempt to define these processes.
2. 2    This   guideline   shall   be   revised    when   a   new
effective   measurement   technology   for   defect   sizing
becomes commonly available in the market.
2. 3   This  guideline  does  not  purpor t  to  address  safety
issues,   if   any,   associated   with   its   use.      It   is   the
responsibility  of  the  users  of  this  guideline  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI P1  Specification for Hard Surface Photomask
Substrates
SEMI    P22        Guideline    for    Photomask    Defect
Classification and Size Definition.
SEMI     P33          Provisional     Specification     for
Developmental    230    mm    Square    Hard    Surface
Photomask Substrates
NOTE 1: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
4  Terminology
4. 1  Definitions
4. 1.1   Many  terms  relating  to  photom ask  technology
are defined in SEMI P22 and SEMI P33.
4. 1.2   design  pattern    pattern  of  in tended  design
data.
4. 1.3   photomask  pattern    pattern  o n  photomask
surface.
5  Mask (See Figure 1)
5. 1   Masks  will  be  either  5"  or  6"  w hich  meet  SEMI
P1; both the 5" and 6" will be the same layout.
5. 2    Masks   will   be   limited   to   two   ty pes,   namely
Conventional  and  Attenuated  (Half  Tone).    Note  that
Levenson   and   Optical   Proximity   Correction   (OPC)
types will not be included.

SEMI P23-0200 © SEMI 1993, 20002
5. 3    There   are   two   types   of   patterns :   Wiring   and
Contact Hole pattern.
5. 4   In  one  mask,  there  will  be  one   type  of  pattern,
either Wiring or Contact Hole.
5. 5  One defect chip will be placed  in the center of the
mask.
5. 6    Eight   reference   chips   (non-def ective)   will   be
placed  at  25,000  micron  intervals  to  make  sure  that
inspection  can  occur  even  if  the  mask  is  set  in  the
inspection  equipment  in  different  directions  (e.g.,  0º,
90º, 180º, 270º).
5. 7  Mask Naming
5. 7.1   Wiring  Pattern  Mask  is  “SEM I  STANDARD
P23-0200-1500W”.
5. 7.2     Contact    Hole    Pattern    Mask    is    ”S EMI
STANDARD P23-0200-1500C”.
5. 7.3   “P23-0200”  is  the  registered  n umber  of  this
guideline.
5. 7.4     “1500”    expressed    in    nanomete rs,    is    the
photomask    pattern    design    rule.        The    following
explanations  in  this  guideline  are  based  on  a  1,500  nm
(1.50 micron) design rule.
5. 7.5  The mask naming should be w ritten in characters
which  can  be  confirmed  by  the  naked  eye,  and  should
be   displayed   in   a   place   recognized   by   either   the
manufacturer or user of the mask.
5. 8   Four  light  intensity  adjustment   patterns  will  be
placed at 12,500 micron intervals from the center of the
mask.
5. 9  It is feasible to place stepper a lignment marks and
other  patterns  in  such  a  way  as  not  to  effect  the  mask
pattern described above.
6  Chip
See Figure 2 for illustration.
6. 1  One chip of wiring patterns wi ll be made up of 17
types  of  defects,  each  at  20  different  defect  sizes  for  a
total of 340 cells.
6. 2  One chip of contact hole patter ns will be made up
of 14 types of defects, each at 20 different defect sizes
for a total of 280 cells.
6. 3  Place defects changing types a long the X-axis.
6. 3.1   Display  the  defect  type  from  th e  left  side  of  the
chip, toward the right, in capital English letters.
6. 3.1.1  Wiring patterns are listed from  A to Q.
6. 3.1.2  Contact Hole patters are listed  from A to N.
6. 4  Place defects changing size alo ng the Y-axis.
6. 4.1  Place the defects, from top to b ottom, in range of
size  from  0.05  microns  to  1.00  microns  at  0.05  micron
intervals.
NOTE 2: Display all sizes as they pertain to the mask (on the
mask).
7  Cell
7. 1   One  cell  will  be  250  microns  s q uare.  (See  Figure
3. )
7. 2  Sub-cells will be placed 5 by 5  (Total=25).
7. 3   Defects  will  be  placed  in  the  c enter  of  the  cell  (±
5. 0 micron).
7. 4  Cells will be broken up into 9  types, depending on
the content of the pattern and defect.
7. 4.1   Seven  types  are  used  for  Wirin g  Patterns.  (See
Figures 4, 15 to 21.)
7. 4.2   Two  types  are  used  for  Contac t  Hole  Patterns.
(See Figures 6 and 7.)
8  Sub-cell
8. 1  One sub-cell is 50 microns squ are.
8. 2  Place a pattern which shows th e boundaries of the
cell at the sub-cell coordinates (x1,y1), (x5,y1), (x1,y5)
and (x5,y5). (See Figures 8 to 12.)
8. 2.1   Figure  13  shows  an  example  o f  these  patterns
placed together.
8. 2.2  The pattern placed at (x5,y1) s hould be a pattern
from which coordinates can be measured.
8. 3  Place the defect type ID (cell c oordinates) and the
abbreviated   pattern   for   the   defect   type   in   sub-cell
coordinates (x1,y5).  (See Figures 8 and 12.)
8. 3.1   Defect  type  ID  (cell  coordinate s)  are  written  as
one  capital  English  letter,  representing  the  defect  type
and   a   two-digit   number   representing   defect   size.
(Example: A01)
Character  line  width  is  set  at  2.00  micron.  (See  Figure
14. )
8. 3.2  The abbreviated pattern which  denotes the defect
content  should  keep  the  defect  shape  and  direction
consistent  with  the  shape  and  direction  of  the  program
defect in the design.
8. 4   The  recommended  values  for  p attern  dimensions
under  the  design  rule  (dimensions  on  mask)  are  as
follows:

SEMI P23-0200 © SEMI 1993, 20003
Dimension on MaskMask Name
5. 00 micron5000
3. 00 micron3000
2. 50 micron2500
2. 00 micron2000
1. 50 micron1500
1. 00 micron1000
0. 80 micron800
0. 50 micron500
8. 4.1   The  above  list  of  design  rule  d imensions  are
recommended values, and it is feasible to use a different
size.
8. 4.2   When  changing  the  design  rule ,  chip  spacing
(25.0 mm) should not change.
8. 5   For  the  Wiring  Pattern  Chip,  p lace  a  pattern  with
uniform sub-cell coordinates: (x2,y1), (x4,y1),  (x1,y2),
(x2,y2),  (x4,y2),  (x5,y2),  (x1,y4),  (x2,y4),    (x4,y4),
(x5,y4), (x2,y5), (x4,y5). (See Figure 4.)
8. 5.1 Patterns  in  a  sub-cell  using  the   uniform  Wiring
Pattern should be as follows:
Sub-cell CoordinatesPattern to Be Used
(x2,y1) & (x4,y5)Wiring Type A (Figure 15)
(x4,y1) & (x2,y5)Wiring Type B (Figure 16)
(x1,y4) & (x5,y2)Wiring Type A rotated 90º
(x1,y2) & (x5,y4)Wiring Type B rotated 90º
(x2,y2)Wiring Type C (Figure 17)
(x4,y2)Wiring Type D (Figure 18)
(x2,y4)Wiring Type E (Figure 19)
(x4,y4)Wiring Type F (Figure 20)
8. 5.2  Uniform patterns are placed in side a 50 micron-
square sub-cell.
8. 5.3  For patterns in the Wiring Patt ern which change
depending  on  the  defect  type  ID,  the  same  patterns
should    be    placed,    without    borders,    in    sub-cell
coordinates  (x3,y1),  (x3,y2),  (x1,y3),  (x2,y3),  (x3,y3),
(x4,y3), (x5,y3), (x3,y4) and (x3,y5).
8. 5.4     Pattern    content    will    change    as     follows,
depending on the defect type ID:
Defect Type IDPattern to Be Used
A, B, C, DWiring Type A (Figure 15)
G, H, K, L, QWiring Type C (Figure 17)
I, JWiring Type D (Figure 18)
E, FWiring Type E (Figure 19)
M, NWiring Type F (Figure 20)
O, PWiring Type G (Figure 21)
8. 5.4.1  Adjust the pattern position so t hat the defect is
placed  in  the  center  of  sub-cell  coordinates  (x3,y3).
There  may  be  instances  where  the  placement  of  the
uniform  patterns  and  the  defect-inserted  patterns  vary
slightly.
8. 5.4.2  Figure 5 is an example of plac ement of a Type
A Wiring Pattern.
8. 6   For  Contact  Hole  Pattern  Chip s,  contact  hole
patterns   should   be   placed   at   all   sub-cells   except
coordinates  (x1,y1),  (x5,y1),  (x1,y5)  and  (x5,y5).  (See
Figures 6 and 22.)
8. 6.1    For   misplacement   defects,   in   o rder   to   be
evaluated  as  an  isolated  field,  place  just  one  contact
hole  pattern  in  the  center  of  sub-cell  coordinates  (x3,
y3)  and  only  in  cells  where  the  contact  hole  pattern
defect type ID is “M”. (See Figure 7.)
8. 6.2    Adjust   the   whole   pattern   for   co ntact   hole
patterns so that the defect is placed in the center of sub-
cell coordinates (x3,y3).
8. 7   Use  a  common  spacing  for  pla cement  of  wiring
patterns and contact hole patterns.
8. 7.1   For  placement  of  patterns  in  de sign  rule  1.50
microns (on mask), use a spacing of 14.0 microns in the
X-direction and 7.0 microns in the Y-direction.
8. 7.2     The    values    for    spacing    should     change
accordingly with a change in the design rule.
9  Defect
See Figures 23 and 24 for illustration.
9. 1  Defect Type
9. 1.1  Dot
9. 1.2  Hole
9. 1.3  Edge Extension
0 degree
45 degree
arctan (1/2) = 26.565 degree
9. 1.4  Edge Intrusion
0 degree
45 degree
arctan (1/2) = 26.565 degree
9. 1.5  Corner Extension
9. 1.6  Corner Intrusion
9. 1.7  Over size
9. 1.8  Under size
9. 1.9  Elongation
9. 1.10  Truncation
9. 1.11  Misplacement

SEMI P23-0200 © SEMI 1993, 20004
9. 1.12  Missing Pattern
9. 2  Defect Design Method
9. 2.1   Design  the  following  defects,  i n  squares,  for
wiring  patterns  and  contact  hole  patterns.    For  edge
defects  on  diagonal  lines,  use  a  pattern  designed  in  a
square and rotated to the angle of the diagonal. (In this
case,  the  shape  of  the  defect  may  change  in  the  design
data.)  For  corner  defects,  design  using  the  edge  length
as a design dimension and not the diagonal.
9. 2.1.1  Dot
9. 2.1.2  Hole
9. 2.1.3  Edge Extension
0 degree
45 degree
arctan (1/2) = 26.565 degree
9. 2.1.4  Edge Intrusion
0 degree
45 degree
arctan (1/2) = 26.565 degree
9. 2.1.5  Corner Extension
9. 2.1.6  Corner Intrusion
9. 2.2  The following defects change  only in the pattern
size along the Y-direction.
9. 2.2.1  Wiring Pattern Over Size
9. 2.2.2  Wiring Pattern Under Size
9. 2.3   The  following  defects  change   in  pattern  size
along both X and Y.
9. 2.3.1  Contact Hole Pattern Over Siz e
9. 2.3.2  Contact Hole Pattern Under si ze
9. 2.4   The  following  defects  change   only  in  pattern
length along the Y-direction in both wiring and contact
hole patterns.
9. 2.4.1  Elongation
9. 2.4.2  Truncation
9. 2.5   For  the  following  defects,  in  b oth  wiring  and
contact hole patterns, move the right half of the pattern
in the Y-direction only to form a step.
9. 2.5.1  Misplacement Defect with ID  ”K”
9. 2.6   In  the  following  defects,  the  pa ttern  shape  and
size  are  the  same,  with  one  whole  isolated  pattern
moving only in the Y-direction.
9. 2.6.1    Misplacement   defects,   in   both     wiring   and
contact hole patterns, which have the defect ID “L”.
9. 2.6.2  Misplacement defects, in conta ct hole patterns,
with the defect ID ”M”.
9. 2.7     The    following    single    isolated    p attern    is
completely  destroyed  in  both  wiring  and  contact  hole
patterns.
9. 2.7.1  Missing Pattern
9. 3  Fabricating Position for Progr am Defect
9. 3.1  Fabricate according to Figure  detailed drawing.
10  Program Defect Size
10. 1   According  to  SEMI  P22,  main ly,  two  values  are
to be used in defining size of defects.  However, for the
following  reason,  one  value  will  be  used  to  describe
program defect size on this SEMI Standard P23 mask.
10. 1.1   Defects  used  in  evaluation  are   all  program
defects and mainly designed in square shape.
10. 1.2  When describing the capabiliti es of mask defect
inspection  systems,  it  has  become  typical  to  describe
defect size which one value.
10. 2   Due  to  various  reasons  (influe nces)  in  mask
manufacturing,  it  is  not  always  possible  to  form  all
program  defects  with  the  shape  and  size  described  in
the design.
10. 3   SEMI  Standard  mask  defect  si ze  is  defined  as
follows.  (See Figures 23 and 24.)
Follow SEMI P22 for the values used below (S1, S2, X,
Y, a, b, c, d).
10. 3.1  Dot & Hole
10. 3.1.1  Defect Size is S1 or S2, which ever is larger.
10. 3.2  Edge Extension & Intrusion
10. 3.2.1  Defect Size is S2.
10. 3.3  Corner Extension
10. 3.3.1   Defect  Size  is  the  difference  b etween  the
reference  pattern  S1[Reference]  and  the  defect  pattern
S1[Defect]
( | S1[Reference] - S1[Defect] | ).
10. 3.4  Corner Intrusion
10. 3.4.1  Wiring Pattern
10. 3.4.1.1   Defect  Size  is  the  difference  b etween  the
reference  pattern  S1[Reference]  and  the  defect  pattern
S1[Defect]
( | S1[Reference] - S1[Defect] | ).

SEMI P23-0200 © SEMI 1993, 20005
10. 3.4.2  Contact Hole Pattern
10. 3.4.2.1   As  with  Edge  Intrusion  in  10.3 .2,  Defect
Size is S2.
10. 3.5  Over Size
10. 3.5.1  Wiring Pattern
10. 3.5.1.1   Since  size  only  changes  in  the   Y-direction,
Defect Size is (d-c).
10. 3.5.2  Contact Hole Pattern
10. 3.5.2.1   With  “a”  and  “c”  as  the  referen ce  pattern
size, Defect Size is (b-a) or (d-c), whichever is larger.
10. 3.6  Under Size
10. 3.6.1  Wiring Pattern
10. 3.6.1.1   Since  size  only  changes  in  the   Y-direction,
Defect Size is (d-c).
10. 3.6.2  Contact Hole Pattern
10. 3.6.2.1   With  “a”  and  “c”  as  the  referen ce  pattern
size, Defect Size is (b-a) or (d-c), whichever is larger.
10. 3.7  Elongation & Truncation
10. 3.7.1   Since,  in  a  program  defect,  the   size  only
changes in the Y-direction (S1), Defect Size is S1.
10. 3.8  Misplacement
10. 3.8.1   Since  the  program  defect  is  on ly  moving
along the Y-axis, Defect Size is Y.
10. 3.9  Missing Pattern
10. 3.9.1  With S1 and S2 as the referenc e pattern size,
Defect Size is S1 or S2, whichever is larger.
11  Light Intensity Adjustmen t Pattern
11. 1  Light intensity adjustment patt erns will be placed
in  four  areas  in  mask  defect  inspection  systems.    (See
Figure 1.)
11. 2  A glass pattern will be placed  in the center.
11. 3   Around  the  circumference  of  t he  glass  pattern,  a
line  and  space  pattern  will  be  placed,  1  for  1,  with  the
same  line  width  as  the  design  rule  (dimensions  on
mask).
11. 3.1  With 500 by 1,250 microns as  one block, place
horizontal    patterns    on    the    left    and    right    sides,
perpendicular  patterns  on  the  top  and  bottom.    Also,
place  a  horizontal  pattern  on  the  lower  left  corner.
(See Figure 25.)
11. 4  The circumference of the glass  pattern and line &
space  pattern  should  have  at  least  6,000  microns  of
shade film.
12  Method for Use of Test Ma sks in
Evaluating Mask Defect Inspection System
12. 1   Inspect  all  defect  cells,  or  a  po rtion  of  them
according  to  the  inspection  conditions  of  the  mask
defect inspection system to be evaluated.
12. 2  Perform at least 20 inspections .
12. 3    Perform   the   inspection   at   least    with   a   set
direction  of  0º.  It  is  also  preferable  that  the  inspection
be  performed  after  rotating  the  set  at  90º,  180º,  and
270º.
12. 4  When displaying the defect ins pection sensitivity
for  mask  defect  inspection  system,  display  the  defect
size  of  the  smallest  defect  of  each  type  which  was
detected 100%. (See Figures 26 and 27.)

SEMI P23-0200 © SEMI 1993, 20006
25,000 um25,000 um
25, 000 um
25, 000 um
Defect Chip
Reference Chip
12,500 um
Light Adjustment Pattern
12, 500 um
SEMI  ST ANDARD
P23- 0200- 15 00C
or
(P23- 0200- 150 0W)
5inch Mask
6inch Mask
Figure 1
Mask

SEMI P23-0200 © SEMI 1993, 20007
Cel l
QPONMLKJIHGFEDCBA
D ef ect  T ype
01
02
03
04
05
06
07
08
09
10
11
12
13
14
15
16
17
18
19
20
Defect Number
0. 75
0. 70
0. 65
0. 60
0. 55
0. 50
0. 45
0. 40
0. 30
0. 35
0. 20
0. 25
0. 15
0. 10
0. 05
0. 80
0. 90
1. 00
0. 85
0. 95
Defect Design Size (um)
250 um
4,250 um  (Wiring)
250 um
5,000 u m
3,500 um  (Contact Hole)
Figure 2
Chip
Wiring Chip; A to Q (#340 cell)
Contact Hole Chip; A to N (#280 cell)

SEMI P23-0200 © SEMI 1993, 20008
Sub Cell
Defect Posit ion
y1
x5x4x3x2x1
y3
y4
y2
50 u m
50 u m
250 um
250 um
y5
Figure 3
Cell

SEMI P23-0200 © SEMI 1993, 20009
y1
x5x4x3x2x1
y3
y4
y2
50 um
50 u m
250 um
250 um
y5
Figure 4
Cell
Wiring Standard Pattern

SEMI P23-0200 © SEMI 1993, 200010
y1
x5x4x3x2x1
y3
y4
y2
50 um
50 u m
250 um
250 um
y5
Figure 5
Cell
Sample; Wiring (Type A)
Defect ID; A, B, C, D

SEMI P23-0200 © SEMI 1993, 200011
y1
x5x4x3x2x1
y3
y4
y2
50 um
50 u m
250 um
250 um
y5
Figure 6
Cell
Contact Hole Pattern (Type A)
Defect ID; A to L, and N

SEMI P23-0200 © SEMI 1993, 200012
y1
x5x4x3x2x1
y3
y4
y2
50 um
50 u m
250 um
250 um
y5
Figure 7
Cell
Contact Hole Pattern (Type B)
Defect ID; M

SEMI P23-0200 © SEMI 1993, 200013
y1
x5x4x3x2x1
y3
y4
y2
50 um
50 u m
250 um
250 um
y5
Figure 8
Cell

SEMI P23-0200 © SEMI 1993, 200014
50 um
50 um
2 um
2 um
5. 0
5. 0
25. 0
25. 0
Figure 9
Sub Cell
Right Upper (x5, y1)
(Metrology Measurement Pattern)
; Film Pattern

SEMI P23-0200 © SEMI 1993, 200015
50 um
50 um
2 um
2 um
6. 0
3. 0
25. 0
25. 0
Figure 10
Sub Cell
Left Upper (x1, y1)
; Film Pattern

SEMI P23-0200 © SEMI 1993, 200016
50 um
50 um
2 um
2 um
6. 0
3. 0
25. 0
25. 0
Figure 11
Sub Cell
Right Lower (x5, y5)
; Film Pattern

SEMI P23-0200 © SEMI 1993, 200017
50 um
50 um
2 um
2 um

# 3

3. 0

# 6

6. 0
5. 0
5. 06. 0
3. 0
6. 0

# 4

4. 04. 0
6. 0

# 10

10. 0

# 14

14. 0
4. 0
Figure 12
Sub Cell
Left Lower (X1, y5)
Defect ID & Defect Type
; Film Pattern

SEMI P23-0200 © SEMI 1993, 200018
50 um
50 um
2 um
2 um
Figure 13
Sub Cell
Cell Corner Sample
; Film Pattern

SEMI P23-0200 © SEMI 1993, 200019
2 um  Square
10 um
14 um
Figure 14
Letter
(Non False Defects Pattern)

SEMI P23-0200 © SEMI 1993, 200020
50 um
50 um
De tai l
1 u m
1 u m
1. 5
14. 0
2. 5
11. 5
7. 0
0. 5
2. 0
1. 5
2. 5
4. 5
C
D
A
B
; Film Pattern
; Defect Position
Figure 15
Sub Cell
Wiring  (Type A)

SEMI P23-0200 © SEMI 1993, 200021
50 um
50 um
Detail
1 um
1 um
14. 0
2. 5
11. 5
7. 0
0. 5
2. 0
1. 5
1. 5
2. 5
45. 0 deg.
4. 5
; Film Pattern
Figure 16
Sub Cell
Wiring (Type B)

SEMI P23-0200 © SEMI 1993, 200022
50 um
50 um
De ta i l
1 u m
1 u m
7. 0
14. 0
3. 011.0
7. 0
2. 0
1. 5
2. 0
G/ H/ K/ L/ Q
; Film Pattern
; Defect Position
Figure 17
Sub Cell
Wiring (Type C)

SEMI P23-0200 © SEMI 1993, 200023
50 um
50 um
De t a il
1 u m
1 u m
2. 0
14. 0
8. 55.5
7. 0
3. 5
2. 0
3. 5
3. 5
2. 0
2. 0
1. 5
1. 5
2. 0
I/  J
; Film Pattern
; Defect Position
Figure 18
Sub Cell
Wiring (Type D)
