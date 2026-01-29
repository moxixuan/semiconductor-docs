---
title: "T1-95 - © SEMI 1993, 2003..."
description: "SEMI标准文档"
sidebar_label: "T1-95 - © SEMI 1993, 2003..."
sidebar_position: 1530
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-153.pdf'
  chapter: 153
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/153.pdf"
  pdfSize="0.86MB"
  title="T1-95 - © SEMI 1993, 2003..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI T1-95 © SEMI 1993, 2003 2
3. 1.8  bi-directional  bar  code  symbol  ó  a  bar  code
symbol  capable  of  being  read  successfully,  either  by
scanning from right to left or from left to right.
3. 1.9  character  —  of  a  bar  code  ó  a  single  group  of
bars  and  spaces  that  together  represent  an  individual
numeral, letter, punctuation mark, or other symbol.
3. 1.10  character    set    ó    the    complete    range    of
characters available for encoding within a particular bar
code symbology.
3. 1.11  check  character  —  of  a  bar  code  symbol  ó  a
character  included  within  the  symbol  whose  value  is
used for the purpose of mathematical verification of the
accuracy of the read.
3. 1.12  continuous code ó a bar code symbol in which
all  spaces  within  the  symbol  are  parts  of  characters  so
that there are no inter-character gaps.
3. 1.13  element — of a bar code symbol ó a single bar
or space.
3. 1.14  module  —  of  a  bar  code  symbol  ó  narrowest
element, bar, or space.
3. 1.15  nominal  width  —  of  a  bar  code  element  ó  the
average width of each size element.
3. 1.16  quiet  zone  —  of  a  bar  code  symbol  ó  a  clear
background  area  that  precedes  the  start  character  and
follows the stop character of the symbol.
3. 1.17  self-checking  bar  code  symbol  ó  a  bar  code
symbol    that  uses  a  checking  algorithm  that  can  be
applied  against  each  character  such  that  substitution
errors can only occur if two or more ìprintingî defects
appear within a single character.
3. 1.18  self-clocking  bar  code  symbol  ó  a  bar  code
symbol  in  which  the  number  of  modules,  bars,  and
spaces is the same in each character.
3. 1.19  space  —  in  a  bar  code  symbol  ó  the  more
reflective element of the symbol,  usually formed by the
background between  bars.
3. 1.20  start/stop character — in a bar code symbol ó
special  characters  that  provide  initial  timing  references
and direction-of-read information to the decoding logic.
3. 1.21  start/stop  character  pattern  ó  a  special  bar
code  character  that  provides  the  scanner  with  start  and
stop  reading  instructions  as  well  as  scanning  direction.
The start character is at the left end of a BC-412 symbol
(position  #2).    The  stop  character  is  at  the  right  end  of
the symbol (position #11).
3. 1.22  symbol  ó  a  combination  of  characters,  inclu-
ding  start/stop  characters,  quiet  zones,  data  characters,
and    check    characters,    required    by    a    particular
symbology, which form a complete scannable entity.
4  Method of Marking
4. 1  The dot matrix laser method shall be used to write
characters.    The  minimum  bar  matrix  shall  be  1  dot
horizontal and 11 dots/mm vertical as shown in Table 1
and  Figure  1.    The  minimum  matrix  for  alphanumeric
characters shall be as specified in SEMI M12.  In either
case,  more  dots  may  be  used,  up  to  and  including  a
solid line.
5  BC-412 Code
1


5. 1  Characteristics  ó  BC-412  is  a  presence-absence
bar   code   symbology   which   uses   an   alphanumeric
character set as outlined in Table 2.  The name BC-412
is   derived   from   the   method   used   to   encode   data
characters.    Each  data  character  is  comprised  of  four
single-width bars incremented within 12 modules.  The
code is a continuous code.
5. 2  Character  Set  ó  The  character  set  available  for
marking  wafers  consists  of  the  ten  digits  (0−9)  and  all
capital letters in the English alphabet except O as listed
in  Table  3.    In  addition,  there  is  a  start  character  and  a
stop character.
5. 2.1  Character   Construction   and   Value   ó   The
module  sequence  and  value  for  use  in  calculating  the
check character are listed for each character in Table 3.
5. 3  Symbol Content ó All character count and content
in  the  wafer  marking  symbol  are  user-definable  and
vary in number from 7 to 18.  The checksum character
position is fixed.
6  Optional Alphanumeric Code
6. 1    The  optional  alphanumeric  symbol  is  variable  and
user  definable,  and  similar  to  existing  SEMI  standards
M12 and M13 with respect to font style.
6. 2  The characters may be oriented with the bottom or
top  of  each  character  toward  the  primary  fiducial  user
definable.
6. 3        The    characters    in    the    optional    alphanumeric
symbol  are  those  in  position  #3  through  position  #
(n + 2) of the BC-412 symbol (see Table 4).
7  Code Field Locations
7. 1    The  code  field  locations  for  flatted  and  notched
wafers  are  specified  in  Figures  3  and  4,  respectively.
Values  of  the  dimensions  for  both  cases  are  given  in
Table 5.


1  IBM Corporation, 2000 Purchase Street, Purchase, NY 10577,
Director of Commercial Relations


SEMI T1-95 © SEMI 1993, 2003 3
7. 2    The  dimensions  given  in  Table  5  are  those  found
on   the   finished   wafer,   regardless   of   where   in   the
process the wafer is marked.
7. 3    These  dimensions  are  derived  with  the  assumption
that  both  the  bar  code  and  the  optional  alphanumeric
markings  are  placed  on  the  wafer  without  realignment
of the wafer.
7. 4  The code field locations are defined by the limits of
the  bar  code  elements  and  the  optional  alphanumeric
characters.  Character dimensions are from centerline to
centerline of the extreme features of the character.
8  Definition of the Error-Detecting Method
8. 1  Define the following symbols:
CD = Check character
i = Position of a data character within
a string from left to right,  i≥1
CV(i) = Character value of i (Table 4)
F
o
= Mod
35
CV(i)
i =odd∑
()

F
e
= Mod
35
CV(i)
i =even∑
()
F = Mod
35
F
o
+2F
e
()

8. 2  Compute the check character:
8. 2.1      Assign   the   value   ì0î   to   the   check   character
(position #4, second character in string).
8. 2.2  Calculate F
o
and F
e
.
8. 2.3  Calculate F.
8. 2.4  Calculate CD as Mod
35
(17 ◊ F).
8. 3  Verification
8. 3.1  Recalculate F
e
and F
o
with the value of CD found
in  Section  8.2.4  to  the  second  character  in  the  string
(position #4).
8. 3.2  Calculate F.
8. 3.3  If F = 0, the check character is correct.
8. 4    As  an  example,  calculate  the  check  character  for
A_Q45670 as follows:
8. 4.1  Write the code as A0Q45670.
8. 4.2  Calculate F
o
, F
e
, and F:
F
o
=Mod
35
(A(i) + Q(i) + 5(i) + 7(i)) =
F
o
=Mod
35
(7 + 18 + 33 + 21) = Mod
35
(79)=9
F
o
=Mod
35
(0 + 11 + 19 + 0 ) = Mod
35
(30)=30
F=Mod
35
(9 + 60) = Mod
35
(69)=34

8. 4.3   Calculate the value for CD:
CD = Mod
35
(17×34)=Mod
35
(578)=18

8. 4.4   This  corresponds  to  the  character,  Q,  so  the
symbol is now AQQ45670.
8. 4.5      Verify  that  the  check  character  in  AQQ45670  is
correct as follows:
F
o
=Mod
35
(A(i) + Q(i) + 5(i) + 7(i))
=Mod
35
(7 + 18 + 33 + 21)=Mod
35
(79)=9
F
e
=Mod
35
(Q(i) + 4( i) + 6(i) + 0(i))
=Mod
35
(1 8 + 1 1 + 1 9 + 0 )=Mod
35
(48)=13
F=Mod
35
(F
o
+2F
e
)
=Mod
35
(9+26 )=Mod
35
(35)=0

Table 1  Character Dimensions (see Figure 1)
Module Height
(dot centerline to dot centerline)
2. 000 mm ± 0.025 mm (0.0790" ± 0.0010")
Bar Code Character Spacing
(centerline to centerline, non-cumulative within the Symbol
Length [see Table 2])
1. 440 mm ± 0.025 mm (0.0570" ± 0.0010")
Mark Width 0.110 mm ± 0.025 mm (0.0043" ± 0.0010")
Module Spacing
(centerline to centerline, non-cumulative within the Character
Spacing [see above])
0. 120 mm ± 0.025 mm (0.0047" ± 0.0010")
Scribing Features: Scribing Features:
Density of dots along module length 11 dots/mm, minimum
Number of dots per module width 1 dot per module width
Character Construction: # of Bars # of Spaces Modules
Data Character 4 8 12
Start Character 1 2 3
Start Character Dimension 0.360 mm ± 0.025 mm (0.0140" ± 0.0010")
Stop Character 2 1 3
Stop Character Dimension 0.360 mm ± 0.025 mm (0.0140" ± 0.0010")



SEMI T1-95 © SEMI 1993, 2003 4
Table 2  Characteristics of BC-412 Bar Code
Encodable Character Set Alphanumeric (except O) with No Non-Numeric or Non-Alphabetic Characters (see Table 3)
Code Type Continuous
Symbol Length Variable: for this application, symbol can be formed from 13.200 mm ± 0.050 mm (0.5760" ±
0. 020") including the Quiet Zones, to 29.040 mm ± 0.050 mm (1.1400" ± 0.0020") including the
Quiet Zones.
Bi-Directional Decoding Yes
Number of Check Characters  One
Character Self Checking Yes
Character Self Clocking Yes
Character Dimensions See Table 1 and Figure 1.
Non-Data Overhead Six Modules

Table 3  BC 412 Code — Character Construction and Values

Character

Module Sequence
Check Character
Value

Character

Module Sequence
Check Character
Value
0                       |-|-|-|-----                       00                       I                        |--|-|----|-                       27
1                       |-|-|--|----                       15                       J                        |--|--|-|---                       16
2                       |-|-|---|---                       17                       K                        |--|--|--|--                       24
3                       |-|-|----|--                       29                       L                        |--|--|---|-                       04
4                       |-|-|-----|-                       11                       M                       |--|---|-|--                       34
5                       |-|--|-|----                       33                       N                        |--|---|--|-                       12
6                                |-|--|--|---                                19                                O
7                       |-|--|---|--                       21                       P                        |--|----|-|-                       32
8                       |-|--|----|-                       08                       Q                        |---|-|-|---                       18
9                       |-|---|-|---                       02                       R                        |---|-|--|--                       01
A                       |-|---|--|--                       07                       S                        |---|-|---|-                       14
B                       |-|---|---|-                       25                       T                        |---|--|-|--                       13
C                       |-|----|-|--                       20                       U                        |---|--|--|-                       26
D                       |-|----|--|-                       22                       V                        |---|---|-|-                       05
E                       |-|-----|-|-                       09                       W                       |----|-|-|--                       31
F                       |--|-|-|----                       30                       X                        |----|-|--|-                       28
G                       |--|-|--|---                       03                       Y                        |----|--|-|-                       23
H                       |--|-|---|--                       06                       Z                        |-----|-|-|-                       10
Start                                   |--                                                                      Stop                                   |-|
Legend:    |=one bar; -=one module blank (no bar)



SEMI T1-95 © SEMI 1993, 2003 5
Table 4  BC 412 Symbol Content for Wafer Marking
Position                                                        Description                                                        Modules
1                                                       Leading                                                       Quiet                                                       Zone                                                       10
2                                                           Start                                                           Character                                                           3
3                                                           User                                                           Definable                                                           12
4                                                          Check                                                          Character                                                          12
5 to (n + 2) User Definable 12/character
(n + 2) + 1 Stop Character 3
(n + 2) + 2 Trailing Quiet Zone 10
Total Modules including Quiet Zones f(n) = (12n) + (6) + (20)
Total Modules within Marking Area Only  f(n) = (12n) + (6)
n = Number of characters in the code as defined by the user, including check character, excluding Start and Stop characters.

Table 5  Code Field Location Dimensions (see Figures 3 and 4)
Dimension Flatted Wafer (Figure 3) Flatted Wafer (Figure 3) Notched Wafer (Figure 4)     Notched Wafer (Figure 4)
n = 7 n = 18 n = 7 n = 18
A 1.624 mm ± 0.025 mm same 1.624 mm ± 0.025 mm same
B
3

4. 666 mm ± 0.500 mm 12.476 mm ± 0.500 mm 4.666 mm ± 0.500 mm 12.476 mm ± 0.500 mm
C
3

9. 332 mm ± 0.030 mm 24.952 mm ± 0.050 mm 9.332 mm ± 0.030 mm 24.052 mm ± 0.050 mm
E
1

3. 350 mm ± 0.500 mm same 7.400 mm ± 0.050 mm same
F 0.700 mm ref. same 0.700 mm ref. same
G
3

5. 400 mm ± 0.500 mm 13.320 mm ± 0.500 mm 5.400 mm ± 0.500 mm 13.320 mm ± 0.500 mm
H
3

10. 800 mm ± 0.050 mm 26.640 mm ± 0.050 mm 10.800 mm ± 0.050 mm 26.640 mm ± 0.050 mm
J 2.000 mm ± 0.025 mm same 2.000 mm ± 0.025 mm same
L
3

13. 200 mm ± 0.050 mm 29.040 mm ± 0.050 mm 13.200 mm ± 0.050 mm 29.040 mm ± 0.050 mm
M
2

1. 260 mm min. same 1.260 mm min. same
1
This dimension is the distance between the centerline of the bottom dot in the bar code and the edge of the finished wafer.
2
This dimension is the distance between the centerline of the first module of the start character (or the last element of the stop character) and the
outer edge of the Quiet Zone.
3
n = 7 and n = 18 values represent the smallest to the largest extremes of the bar code symbology to be used.

The formulas for calculating all other values in between are as follows:
Dimension (B)

(Usin

g SEMI M

12 Sizing)

=

((n ñ 1) Character Spacing)

+

(Character Width)
2
=
((n ñ 1)
×
1. 420)

+

0. 812
2

±

0. 500








mm=((0.710n ñ 0.304)
±
0. 500)

mm


Dimension

(C) = (((n - 1)
×

1. 420) + 0.812
±

0. 050)mm=((1.420n-0.608)
±
0. 050)mm
Dimension (G)
=
((12n)
×

0. 120) + (6
×

0. 120)
2
±

0. 500













mm
=

((0.720n-0.360)
±

0. 500)

mm
Dimension


(H) = ((( 12 n)
×

0 . 1 20) + ( 6
×

0 . 120 )
±

0. 050)

mm=((1.440n-0.720)
±

0. 050)

mm
Dimension


(L) = ((( 12 n)
×

0 . 1 20) + ( 6
×

0 . 120 )
±

(20
×

0. 120)
±

0. 050

mm=((1.440n-3.120)
±

0. 050)

mm
Tolerance for module spacing is non - cumulative (see Table 1).




SEMI T1-95 © SEMI 1993, 2003 6

Figure 1
BC-412 Data Character Construction

NOTE 4:  Each bar code character contains four bars and four spaces.  A space is one or more contiguous blanks.  Module 1 is
always a bar; the other three bars are distributed among modules 3−11; modules 2 and 12 are always spaces.  One or more blanks
which comprise a space must occur between bars.


Figure 2
BC-412 Character Position and Module Content


SEMI T1-95 © SEMI 1993, 2003 7


Figure 3
Code Field Locations for Flatted Wafers


Figure 4
Code Field Locations for Notched Wafers



SEMI T1-95 © SEMI 1993, 2003 8
NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.    The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer's  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature, respecting any materials or equipment mentioned herein.  These standards are subject to change without
notice.
By  publication  of  this  standard,  Semiconductor  Equipment  and  Materials  International  (SEMI)  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  items  mentioned  in  this
standard.  Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights are entirely their own responsibility.



SEMI T1-95 © SEMI 1993, 2003 9
RELATED INFORMATION 1
APPLICATION NOTES
NOTICE:  This  related  information  section  is  not  an  official  part  of  SEMI  T1  and  is  not  intended  to  modify  or  supercede  the
official standard.  Rather, this note is provided primarily as a source of information to aid in the application of the standard.  As
such, it is considered reference material only.  The standard should be referred to in all cases.
R1-1  Center Reference Dimensions for Bar
Code and Optional Alphanumeric Marks
R1-1.1    The  following  information  is  provided  as  a
reference    for    equipment    which    employs    center
referencing    to    locate    the    bar    code    or    optional
alphanumeric marks.  Dimensions for flatted wafers are
given in Table R1-1 and dimensions for notched wafers
are given in Table R1-2.
R1-2  Referenced Documents
R1-2.1  SEMI Standards
SEMI  M1.7  ó  Standard  for  125  mm  Polished  Mono-
crystalline Silicon Wafers
SEMI  M1.8  ó  Standard  for  150  mm  Polished  Mono-
crystalline Silicon Wafers
SEMI  M1.9  ó  Standard  for  200  mm  Polished  Mono-
crystalline Silicon Wafers (Notched)
SEMI M1.10 ó Standard for 200 mm Polished Mono-
crystalline Silicon Wafers (Flatted)
SEMI M1.12 ó Standard for 125 mm Polished Mono-
crystalline Silicon Wafers Without Secondary Flat
SEMI M1.13 ó Standard for 150 mm Polished Mono-
crystalline Silicon Wafers Without Secondary Flat (625
μm Thickness)
Table R1-1   Mark Distances on Flatted Wafers
(see Figure R1-1)
Wafer Size and SEMI Standards
125 mm 150 mm 200 mm
Dim. in
mm
SEMI
M1.7
SEMI
M1.12
SEMI
M1.13
SEMI
M1.8
SEMI
M1.10
D         125         ±
0. 5
125 ±
0. 2
150 ± 0.2   150 ± 0.2   200 ± 0.2
FL        42.5        ±
2. 5

# 475

475. ±
2. 5
47. 50 ±
2. 5
57. 50 ±
2. 5
57. 50 ±
2. 5
Znom58.83         58.83         71.19         69.32         95.83
Zmax59.53         59.37         71.70         69.93         96.30
Zmin         58.09         58.25         70.66         68.68         95.34
R1nom54.48         54.48         66.84         64.97         91.48
R1max55.59         55.53         67.86         66.10         92.46
R1min53.23         53.39         65.79         63.82         90.08
K1nom1.03           1.03           1.03           1.03           1.03
K1max1.55           1.55           1.55           1.55           1.55
K1min0.05           0.50           0.50           0.50           0.50
D = Wafer Diameter
FL = Primary Flat Length

Table R1-2  Mark Distances on Notched Wafers
(see Figure R1-2)
Wafer Size and SEMI Standards
Dim. in mm 125 mm 150 mm 200 mm
SEMI M1.9
D 125 ± 0.5 150 ± 0.2 200 ± 0.2
Z1nom                 0.80                 0.80                 0.80
Z1max                 1.05                 1.05                 1.05
Z1min                 0.30                 0.30                 0.30
R1nom                54.90               67.40               92.40
R1max                55.91               68.26               93.26
R1min                53.64               66.29               91.29
K1mon                 3.28                 3.28                 3.28
K1max                 4.05                 4.05                 4.05
K1min                 2.50                 2.50                 2.50
Ynom                  1.80                 1.80                 1.80
Y1max                 2.05                 2.05                 2.05
Y1min                 1.55                 1.55                 1.55
D = Wafer Diameter



SEMI T1-95 © SEMI 1993, 2003 10


Figure R1-1
Code Field Locations for Flatted Wafers (See Tables R1-1 and 5.)


Figure R1-2
Code Field Locations for Notched Wafers (See Tables R1-2 and 5.)

NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.    The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer's  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature, respecting any materials or equipment mentioned herein.  These standards are subject to change without
notice.
By  publication  of  this  standard,  Semiconductor  Equipment  and  Materials  International  (SEMI)  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  items  mentioned  in  this
standard.  Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights are entirely their own responsibility.

Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International),3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.



SEMI T2-0298

(Reapproved 1104)
SPECIFICATION FOR MARKING OF WAFERS WITH A TWO-
DIMENSIONAL MATRIX CODE SYMBOL
This  specification  was  technically  approved  by  the  Global  Traceability  Committee  and  is  the  direct
responsibility  of  the  North  American  Traceability  Committee.    Current  edition  approved  by  the  North
American Traceability Committee on July 11, 2004.  Initially available at www.semi.org September 2004; to
be published November 2004.  Originally published in 1993; last published February 1998.
1  Purpose
1. 1  This specification is intended to provide a marking
symbology that can be used to mark silicon wafers with
minimum  intrusion  into  the  fixed  quality  area  of  the
wafer.
2  Scope
2. 1  This  specification  defines  the  geometric  and  spa-
tial relationships and content (including the error check-
ing  and  correcting  code)  of  a  two-dimensional  (2-D),
machine-readable,  binary  matrix  code  symbol  for  front
surface marking of wafers of silicon which comply with
SEMI  M1,  SEMI  M2,  or  SEMI  M11,  and  other  mater-
ials  with  diameters  of  125  to  200  mm.  This  specifica-
tion  allows  for  consistency  of  all  wafer  marking  per-
formed by wafer manufacturers. It may be used in con-
junction  with,  or  as  an  alternative  to,  the  alphanumeric
marking codes specified in SEMI M12 and SEMI M13
or  a  front  surface  bar  code  like  that  specified  in  SEMI
T1.
2. 2  Although  this  specification  does  not  specify  the
marking  techniques  that  may  be  employed  when  com-
plying with its requirements, it is assumed that the sym-
bol will be obtained by laser scribing individual dots.
2. 3  The 2-D matrix code is applicable to a broad range
of  wafer  products,  including  epitaxial  wafers,  SOI  wa-
fers, and unpatterned or patterned polished wafers. The
format and algorithms of this code are based on the Da-
ta Matrix two-dimensional symbology specified in AIM
International Symbology Specification - Data Matrix.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI AUX001 — List of Vendor Identification Codes
SEMI  M1  —  Specifications  for  Polished  Monocrys-
talline Silicon Wafers
SEMI M2 — Specification for Silicon Epitaxial Wafers
for Discrete Device Applications
SEMI   M11   —   Specifications   for   Silicon   Epitaxial
Wafers for Integrated Circuit (IC) Applications
SEMI  M12  —  Specification  for  Serial  Alphanumeric
Marking of the Front Surface of Wafers
SEMI M13 — Specification for Alphanumeric Marking
of Silicon Wafers
SEMI  T1  —  Specification  for  Back  Surface  Bar  Code
Marking of Silicon Wafers
3. 2  AIM International Technical Specification
1


AIM   International   Symbology   Specification   -   Data
Matrix
3. 3  ANSI Standard
2


ANSI    X3.4    —    American    Standard    Code    for
Information Interchange (ASCII)
NOTE 1:  This standard is equivalent to ISO 646, Information
Processing  -  ISO  7-bit  Coded  Character  Set  for  Information
Processing.
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.

1 AIM International Inc., 125 Warrendale-Bayne Road, Warrendale,
PA 15086, +1 724 934 4470, Fax:  +1 724 934 4495,
http://www.aimglobal.org/
2 American National Standards Institute, Headquarters: 1819 L
Street, NW, Washington, DC 20036, USA. Telephone: 202.293.8020;
Fax: 202.293.9287, New York Office: 11 West 42nd Street, New
York, NY 10036, USA. Telephone: 212.642.4900; Fax: 212.398.002,
Website: www.ansi.org
SEMI T2-0298 © SEMI 1993, 2004 1



4  Terminology
4. 1  Definitions
4. 1.1  binary  values  —  a  dot  in  the  wafer  surface
indicates the binary value 1. The absence of a dot, or a
smooth   surface   surrounding   a   cell   center   point,
indicates the binary value 0.
4. 1.2  border column — the outermost column of a data
matrix code symbol.
4. 1.3  border row — the outermost row of a data matrix
code symbol.
4. 1.4  cell  center  point,  of  an  array  —  the  point  at
which the centerline of a row intersects the centerline of
a column.
4. 1.5  cell spacing, of an array — the (equal) vertical or
horizontal  distance  between  the  cell  center  points  of
contiguous cells.
4. 1.6  cell,  of  a  data  matrix  code  symbol  —  the  area
within  which  a  dot  may  be  placed  to  indicate  a  binary
value.
4. 1.7  center  line,  of  a  row  or  column  —  the  line
positioned  parallel  to,  and  spaced  equally  between,  the
boundary lines of the row or column.
4. 1.8  central  area,  of  a  cell  —  the  area  enclosed  by  a
circle  centered  at  the  cell  center  point;  used  by  code
readers to sense the binary value of the cell.
4. 1.9  data  matrix  code  symbol  —  a  two-dimensional
array  of  square  cells  arranged  in  contiguous  rows  and
columns.
4. 1.10  dot  —  a  localized  region  with  a  reflectance
which differs from that of the surrounding surface.
NOTE 2:  To  assure  reading  efficiency,  a  minimum  contrast
of 30% is required between the reflectance value of a dot and
the  surrounding  wafer  surface.  Various  densitometers  can
provide such measurements nondestructively.
4. 1.11  dot  misalignment,  within  a  cell  —  the  distance
between  the  physical  center  point  of  a  dot  and  the  cell
center point.
4. 1.12  reference point, of a data matrix code symbol —
the  physical  center  point  of  a  corner  cell  common  to  a
border  row  and  border  column,  used  to  identify  the
physical  location  of  the  symbol  on  the  object  being
marked with the symbol.
NOTE 3:  The  reference  point  is  at  a  fixed  location  on  the
object.  Different  cells  may  be  chosen  as  the  reference  point,
depending  on  the  desired  orientation  of  the  symbol  on  the
object  and  the  size  variability  of  the  symbol.  The  particular
cell  to  be  used  as  the  reference  point  must  be  specified  for
each application.
5  Ordering Information
5. 1  Purchase   orders   for   wafers   furnished   to   this
specification shall include the following items:
5. 1.1  Message Characters
5. 1.1.1  Quantity  (10  to  nn,  where  nn  is  11–31  and  de-
pends on the character set to be encoded (see Table 1).
5. 1.1.2  Content  of  Message  Characters  11  and  up,  if
present.
5. 1.2  Cell Spacing (125 or 150 μm).
6  Requirements
6. 1  Shape and Size of the Matrix Code Symbol
6. 1.1  Each   square   matrix   code   symbol   shall   be
composed  of  an  equal  even  number  (from  16  to  20)  of
rows  and  columns  of  equally  spaced  square  cells.  Cell
spacing shall be either 125 or 150 μm (see Table 2, and
Figures 1 and 2).
6. 1.2  Dot   Size   —   The   nominal   shape   of   the   dot
produced  in  the  matrix  may  be  circular  or  square.  Its
dia-meter or edge length (after polishing) shall be 100 ±
10 μm.
6. 2  Border Rows and Columns (see Figure 3)
6. 2.1  One  border  row  and  one  border  column  shall
contain  a  dot  in  each  cell.  These  are  identified  as  the
primary  border  row  and  the  primary  border  column.
These  are  used  by  the  code  reader  to  determine  the
reference point and orientation of the matrix.
6. 2.2  The    opposing    (secondary)    border    row    and
column shall contain dots in alternating cells.
6. 2.3  The  reference  point  of  the  symbol  shall  be  the
physical centerpoint of the cell common to the primary
border row and the secondary border column.
6. 2.4  The  maximum  dot  misalignment  within  a  cell  is
20  μm.  This  ensures  that  a  minimum  size  dot  covers  a
cell central area of radius 25 μm (see Figure 4).
SEMI T2-0298 © SEMI 1993, 2004 2



Table 1  Matrix Code Symbol Dimensions
Square Arrays for Use on 125 to 200 mm Wafers C
1
, R
1
(μm)
#1
C
2
, R
2
(μm)
#1

# #

# of cells in row or column 16 18 20 16 18 20
125            μm            spacing            1875            2125            2375            2000            2250            2500
150            μm            2250            2550            2850            2400            2700            3000
#1:  See Figure 1 for pictorial representation of Dimensions C
1
, C
2
, R
1
, and R
2
.

Table 2  Message Character Count in Square Arrays for Use on 125 to 200 mm Wafers
# of Cells in a Row or Column 16 18 20
8-bit                                                                        10                                                                        16                                                                        20                                                                        Maximum # of Message Characters
Mostly upper-case 16 25 31


Figure 1
Data Matrix Field Dimensions

SEMI T2-0298 © SEMI 1993, 2004 3



Cell
Cell Center
Row
Column
C
L
C
L
S
S
S = 125 or 150 um, center to center

Figure 2
Data Matrix Cell Spacing


Figure 3
Border Rows and Columns: ECC200

SEMI T2-0298 © SEMI 1993, 2004 4



Dot
Central Area of Cell
45
20
25
Rdot (min) = 45
Rcentral area (min) = 25
Rdot misalign (max) = 20
100
100

Figure 4
Minimum Size Dot with Maximum Dot Misalignments (all Dimensions in μm)

6. 3  Content of the Matrix Code Symbol
6. 3.1  Each square matrix code symbol shall contain between 10 and 23 message characters encoded in accordance
with  AIM  ISS  Data  Matrix,  including  the  characters  associated  with  error  checking  and  correcting  (ECC200),  as
also defined in AIM ISS Data Matrix.
6. 3.2  The message characters may include any of those designated as “mostly uppercase” in Table 5 and Annex J of
AIM ISS - Data Matrix. The first 10 message characters shall contain two elements:
• a vendor-assigned 8-character wafer identification code, followed by
• a 2-character vendor identification code as defined in SEMI AUX001.
6. 3.2.1  The remaining message characters, if any, shall contain information as agreed between the vendor and user.
6. 3.3  The  total  number  of  message  characters  available  depends  on  the  row/column  count  and  on  the  encoded
character set (see Table 2).
6. 4  Location of the Matrix Code Symbol
6. 4.1  With  the  wafer  positioned  front  surface  up  and  with  the  primary  fiducial  toward  the  operator,  the  reference
point of the matrix code symbol shall be located as specified in Table 3.
6. 4.2  The  square  matrix  code  symbol  used  on  125  to  200  mm  diameter  wafers  shall  be  oriented  with  the  border
columns  parallel  with  the  primary  fiducial  bisector  and  the  border  rows  perpendicular  to  the  primary  fiducial
bisector.  The  secondary  border  column  shall  be  toward  the  primary  fiducial  bisector,  and  the  primary  border  row
shall be toward the edge of the wafer.
6. 4.3  The  nominal  position  of  the  reference  point  of  the  matrix  code  symbol  is  1  mm  to  the  right  of  the  closest
alphanumeric code field. A 3º skew toward the alphanumeric field, which is the maximum skew allowed by SEMI
M12 and SEMI M13, does not cause the matrix code symbol to impinge on the alphanumeric code fields, even if the
symbol is placed only 15.5 mm from the primary fiducial bi-sector. Consequently, this matrix code symbol position
permits the simultaneous use of front surface alphanumeric marking as specified in SEMI M12 or M13, on 125 to
200 mm wafers with either flatted or notched primary fiducials.
6. 4.4  Because the matrix code symbol is located in the same place with respect to the primary fiducial bisector on
all wafer diameters from 125 to 200 mm, the use of both marking and reading equipment is simplified.
SEMI T2-0298 © SEMI 1993, 2004 5



6. 4.5  The  distance  from  the  edge  of  the  data  matrix  code  symbol  to  the  diameter  perpendicular  to  the  primary
fiducial bisector varies according to the actual size of the wafer and the placement of the symbol within its tolerance
range. Minimum distances from the edge of the code symbol to the wafer center-line are given in Table 4 for both
16 × 16, 125 μm and 20 × 20, 150 μm matrix code symbols.

Table 3  Location of Matrix Code Symbol — Wafer Polished Side Up, Primary Fiducial toward the Operator
Type of Array Wafer Fiducial Reference Point Cell Location of Symbol Reference Point
Square (used on 125, 150,
and 200 mm wafers)
Flat Common cell of primary
border row and secondary
border column
16. 0 ± 0.5 mm to the right of the fiducial bisection,
and 2.5 ± 0.5 mm above the edge of the flat
Notch  160 ± 0.5 mm to the right of the fiducial bisector, and
5. 3 ± 0.5 mm above the notch pin center

Table 4  Minimum Distances from Edge of Matrix Code Symbol to the Wafer Centerline
SEMI Standard M1.7 M1.8 M1.12 M1.13 M1.10   M1.9
Nominal            Wafer            Diameter,            mm            125            150            125            150            200            125            150            200
Flat or Notch Flat Flat Flat Flat Flat Notch Notch Notch
Distance from 20 × 20 Matrix with 150
μm Cell Spacing, mm
52. 17         62.76         52.33         64.73         89.28         53.98         66.48         91.48
Distance from 16 × 16 Matrix with 125
μm Cell Spacing, mm
53. 14         63.73         53.30         65.74         90.25         54.95         67.45         92.45

SEMI T2-0298 © SEMI 1993, 2004 6



APPENDIX 1
SIMULTANEOUS MARKING WITH SQUARE DATA MATRIX AND
ALPHANUMERIC CODES
NOTICE:    The  material  in  this  appendix  is  an  official  part  of  SEMI  T2  and  was  approved  by  full  letter  ballot
procedures.
A1-1  The relative positions of alphanumeric and data matrix markings are shown in Figure A1-1. This figure also
shows the relationship between the data matrix code symbol and the edge of the polished area of the front surface of
the wafer. Wafer peripheries in the figure are the edges of  the  polished  area  of  wafers  with  maximum  intrusion  of
the  edge  contour,  minimum  diameter,  and  maximum  flat  diameter  (minimum  flat  length),  or  distance  between  the
notch  pin  centerline  and  the  wafer  edge,  as  specified  in  SEMI  M1.  For  all  wafer  diameters,  SEMI  M1  allows  the
edge contour to extend inward from the edge up to 508 μm (Dimension B in Figure 4 of SEMI M1). The distance
between the notch pin centerline and the wafer periphery may vary from 0.30 to 0.80 mm as indicated in Figure 6 of
SEMI  M1.  Other  dimensions  and  tolerances  are  specified  in  the  appropriate  polished  wafer  specification  in  SEMI
M1.
A1-2  Alphanumeric code field locations are shown for all cases except the SEMI M13 code field for flatted wafers,
which  lies  entirely  to  the  left  of  the  primary  fiducial  bisector.  Note  that  alphanumeric  code  field  locations  are  not
specified for 125 mm diameter notched wafers in either SEMI M12 or SEMI M13.
A1-3  The nominal position of the reference point of the data matrix code symbol is marked by a +; this position is 1
mm  to  the  right  of  the  closest  alphanumeric  code  field.  Because  of  the  tolerances  on  the  position  of  the  reference
point,  the  largest  data  matrix  code  symbol  (20  ×  20,  150  μm  cell  spacing)  may  lie  anywhere  within  the  dotted
square.  The  effect  of  a  3º  skew  toward  the  alphanumeric  field  is  also  shown.  Although  the  skew  does  not  affect
readability of the data matrix code symbol, too great a skew may cause the data matrix symbol code to impinge on
occupied areas of the wafer surface. The 3º skew, which is the maximum allowed by SEMI M12 and SEMI M13,
does not cause the data matrix code symbol to impinge on the alphanumeric code fields.
SEMI T2-0298 © SEMI 1993, 2004 7




Figure A1-1
Relationship Between the Maximum Size Matrix Code Symbol, Alphanumeric Fields, and the Edges of the
Polished Front Surface of Minimum Size Wafers
SEMI T2-0298 © SEMI 1993, 2004 8


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
SEMI T2-0298 © SEMI 1993, 2004 9


SEMI T3-0302  © SEMI 1995, 2002 1
SEMI T3-0302
SPECIFICATION FOR WAFER BOX LABELS
This  specification  was  technically  approved  by  the  Global  Traceability  Committee  and  is  the  direct
responsibility  of    the  North  American  Traceability  Committee.  Current  edition  approved  by  the  North
American  Regional  Standards  Committee  on  November  27,  2001.    Initially  available  at  www.semi.org
February 2002; to be published March 2002.
NOTE:   This   document   was   entirely   rewritten   for
publication in 2002.
1  Purpose
1. 1      This   specification   provides   a   common   format,
content,   size,   and   location   for   printed,   machine-
readable     labels     on     wafer     boxes     to     facilitate
communication    of    data    essential    for    advanced
traceability   and   electronic   data   exchange   systems.
These   labels   differ   from   those   used   in   common
commercial  practice  in  that  they  provide  less  detailed
information  about  parametric  properties  of  the  wafer.
Such  information  is  now  readily  stored  in  advanced
traceability systems.
1. 2    This  specification  covers  labels  that  contain  two
bar  code  symbols  and  their  associated  human-readable
interpretation.
1. 3    This  specification  also  covers  a  two-dimensional
Data   Matrix   code   symbol   that   can   accommodate
substantially  more  information  than  can  the  bar  code
symbols.    This  symbol  is  included  to  provide  for  a
smooth transition from existing traceability and labeling
procedures   to   the   comprehensive,   unified   system
envisioned  for  the  future  in  which  common  reading
equipment  can  be  used  throughout  the  plant.    If  the
Data   Matrix   symbol   is   used   without   the   bar   code
symbols,  provision  is  made  for  an  associated  human
readable interpretation.
1. 4    Labels  provided  in  accordance  with  this  specifi
-
cation   satisfy   the   special   requirements   of   300   mm
Wafer  Shipping  Systems,  detailed  in  SEMI  M45,  for
both front opening shipping box (FOSB) labels and bag
labels.
2  Scope
2. 1  This specification covers size, message content and
symbology requirements of labels for wafer boxes used
for  storage  and  transport  of  silicon  wafers  100  mm  in
diameter and larger.
2. 2  For wafer boxes used with 100 to 200 mm diameter
wafers, this specification provides for two similar labels
in  order  that  the  contents  of  the  wafer  box  can  be
identified when the wafer box is stored in either of two
positions:  with  the  side  of  the  wafer  box  parallel  with
the  front  of  the  storage  shelf  or  with  the  end  of  the
wafer  box  parallel  with  the  front  of  the  storage  shelf.
Because  wafer  boxes  are  routinely  stacked  for  storage,
placement of box labels on the top or bottom of the box
is not recommended.
2. 3      For   FOSBs   used   with   300   mm   wafers,   this
specification provides for two identical labels, one to be
placed  on  the  FOSB  and  the  other  to  be  placed  on  the
outer  bag.    These  requirements  are  consistent  with  the
requirements  of  SEMI  M45.    SEMI  M31  specifies
FOSB dimensions.
2. 4    The  message  content  and  locations  of  the  symbols
used  on  the  labels  covered  by  this  specification  are
designed  to  fit  in  a  space  consistent  with  size  of  the
available  flat  area  on  wafer  boxes  investigated.    If  a
larger  flat  area  is  available  on  the  wafer  boxes  to  be
used,  the  label  size  may  be  increased  and  additional
message content included.
2. 5      This   specification   includes   descriptions   of   the
characteristics of the code formats to be employed.
2. 6    The  labels  covered  by  this  specification  may  be
applied  on  the  box  itself,  and  on  the  box  wrap  portion
of the wafer package,  but not on the transport package
(outer     shipping     carton)     used     for     commercial
transportation of wafer packages.
NOTE   1:   Specifications   for   transaction   labels,   which   are
intended  for  use  on  the  outer  shipping  carton,  are  given  in
ANSI/EIA 556-B.
2. 6.1    The  format  of  the  barcode  is  based  on  Code  39,
as specified in ISO/IEC 16388.
2. 6.2  The  format  of  the  Data  Matrix  Code  is  specified
in ISO/IEC 16022.

2. 7      Wafer  box  labels  are  intended  to  be  applied  in  a
cleanroom environment concurrent with the completion
of  production  of  the  wafers.    Although  it  is  recognized
that  the  materials  of  construction  and  the  adhesives
used to apply the label must be selected with this use in
mind,  their  specification  is  beyond  the  scope  of  this
document.
2. 8   The dimensions in this specification are applicable
to   labels   printed   with   printers   that   have   nominal
resolution  of  203  dots  per  inch  (dpi).    Printers  with
higher   resolution   may   be   used,   but   many   of   the
dimensions  may  differ  from  those  in  this  specification
and  the  code  fields  may  or  may  not  fit  within  the
specified label size and format.  In such cases, the user


SEMI T3-0302 © SEMI 1995, 2002 2
of  this  specification  must  ensure  that  the  label  is  of  a
size that fits the box to be employed.
2. 9    This  standard  does  not  purport  to  address  safety
issues,   if   any,   associated   with   its   use.      It   is   the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  health  practices  and  determine  the
applicability or regulatory limitations prior to use.
3  Referenced Documents
3. 1  SEMI Standards
AUX1 — List of Vendor Identification Codes
SEMI M1.15 — Standard for 300 mm Polished Mono-
crystalline Silicon Wafers (Notched)
SEMI  M12  —  Specification  for  Serial  Alphanumeric
Marking of the Front Surface of Wafers
SEMI M13 — Specification for Alphanumeric Marking
of Silicon Wafers
SEMI   M31   —   Provisional   Specification   for   Front-
Opening Shipping Box Used to Transport and Ship 300
mm Wafers
SEMI M45 — Provisional Standard for 300 mm Wafer
Shipping System
SEMI  T1  —  Specification  for  Back  Surface  Bar  Code
Marking of Silicon Wafers
SEMI  T2  —  Specification  for  Marking  of  Wafers  with
a Two-Dimensional Matrix Code Symbol
SEMI T7 — Specification for Back-surface Marking of
Double-side  Polished  Wafers  with  a  Two-dimensional
Data Matrix Code Symbol
3. 2  ANSI Standards
1

ANSI/ASC X3.182

— Bar Code Print Quality - Guide-
line
ANSI  MH10.8.2  —  Data  Application  Identifier  Stan-
dard
3. 3  EIA Standards
2

ANSI/EIA-556-B

—  Outer  Shipping  Container  Label
Standard
ANSI/EIA 706 — Component Marking Standard


1 American National Standards Institute, New York Office: 11 West
42nd Street, New York, NY 10036, USA. Telephone: 212.642.4900;
Fax: 212.398.0023 Website: www.ansi.org
2 Electronic Industries Alliance, EIA Engineering Department,
Standards Sales Office, 2001 Eye Street, NW, Washington, D.C.
20006, USA. Website: www.eia.org
3. 4  ISO/IEC Standards
3

ISO/IEC  15417  —  Automatic  Identification  and  Data
Capture  Technique  Symbology  Specification  –  Code
128
ISO/IEC      16022      —      International      Symoblogy
Specification – Data Matrix
ISO/IEC    16388  —  Automatic  Identification  and  Data
Capture  Technique  Symbology  Specification  –    Code
39
4  Terminology
4. 1    Definitions  of  terms  relating  to  wafer  boxes  (see
Figure 1) are as follows:
4. 1.1  bar  end,  of  a  wafer  box  base —  the  end  of  the
box  base  that  is  next  to  the  first  pocket  of  the  cassette
inside the base or the first pocket of the base itself.
4. 1.2  base,  of  a  wafer  box —  the  open-top  container
into which wafers are placed, either in cassettes or into
integrally molded pockets.
4. 1.3  box  wrap  —  the  wrapping  or  bagging  applied
over the wafer box to comprise the product package.
NOTE  2:  The  box  wrap  is  usually  sealed  under  clean  room
conditions.
4. 1.4  cover,  of  a  wafer  shipping  box  —  the  portion  of
the box which closes the top of the base.
4. 1.5  wafer  box —  a  sealable  container  consisting  of  a
base  and  a  cover,  used  for  storing  or  transporting
wafers.        Compare    with    transport    package    in
ANSI/EIA-556-B.
4. 1.6  wafer  box  label —  the  label  on  the  wafer  box
identifying the product and its manufacturer.
4. 1.7  wafer package — the combination of a wafer box
and box wrap.
4. 1.8  wall  end,  of  a  wafer  shipping  box  —  the  end  of
the shipping box that is opposite the bar end.
4. 2    Terms  relating  to  FOSBs  are  defined  in  SEMI
M31.
4. 3      Terms   relating   to   bar   code   characteristics   are
defined  in  SEMI  T1.    Definitions  for  additional  terms
relating  to  the  product  package,  product  package  label,
and bar code format and characteristics can be found in
ANSI/EIA-556-B, Appendix A.


3 International Organization for Standardization, ISO Central
Secretariat, 1, rue de Varembé, Case postale 56, CH-1211 Geneva 20,
Switzerland. Telephone: 41.22.749.01.11; Fax: 41.22.733.34.30
Website: www.iso.ch


SEMI T3-0302  © SEMI 1995, 2002 3
4. 4    Terms  relating  to  the  data  matrix  code  symbol
characteristics  are  defined  in  SEMI  T2  and  ISO/IEC

# 16022

16022.
4. 5  Definitions of terms relating to code content are as
follows:
4. 5.1  customer information field — a 35-character field
containing  the  customer  product  ID  and,  if  desired,
other customer assigned information.
4. 5.2  customer  product  ID —  a  unique  combination  of
alphanumeric  characters  assigned  by  a  customer  or
purchaser   to   identify   a   product,   sometimes   called
customer part number.
4. 5.3  data  field —  a  specific  portion  or  area  of  a  label
designated to contain a human readable interpretation, a
bar  code  symbol,  or  a  two-dimensional  matrix  code
symbol.
4. 5.4  data   identifier —   a   specified   character   or
character  string  that  defines  the  category  or  intended
use of data that follows.
4. 5.5  encrypted  data —  data  entered  by  the  vendor,
usually to facilitate traceability, that may or may not be
shared with the customer.
4. 5.6  human   readable   interpretation   (hri) —   the
interpretation of all or a portion of a bar or matrix code
symbols  presented  in  a  type  font  which  can  be  read  by
persons.
4. 5.7  message  character —  a  character  that  contains
data, encoded into a bar or matrix code symbol.
NOTE  3:  Data  identifiers  and  concatenation  characters  are
considered to be message characters, but start/stop characters
are not.
4. 5.8  message   length —   the   number   of   message
characters contained in a single encoded message.
4. 5.9  traceability  number,  of  a  wafer  box  label —  a
string   of   35   message   characters   comprising   a   lot
number,  vendor  code  (including  manufacturing  loca-
tion,  if  desired),  and  date  of  labeling  together  with  the
appropriate data identifier and concatenation characters.
5  Ordering Information
5. 1  Purchase orders for the wafers furnished with wafer
box  labels  in  conformance  with  this  specification  shall
include the following:
5. 1.1    Statement  that  the  wafer  box  label  conforms  to
SEMI Specification T3.
5. 1.2    Content  of  message  characters  for  customer  in-
formation field.
5. 1.3    Label  type  (see  Section  7.1)  or,  if  additional
space is available on the box, dimensions of labels and
placement of fields thereon.
5. 2    In  addition,  the  following  optional  items  may  be
specified:
5. 2.1      If   a   two-dimensional   matrix   code   symbol   is
included on the label:
5. 2.1.1    Inclusion  or  exclusion  of  wafer  identification
information.
5. 2.1.2        User-specified    data,    if    required,    and    re-
quirement,  if  any,  for  sharing  of  code  for  encrypted
data.
5. 2.2    Label  locations  on  the  wafer  box,  if  different
from the recommended locations.
6  Content and Characteristics of Data Fields
6. 1  Bar Code Symbols
6. 1.1    The  label  shall  contain  two  data  fields  for  bar
code  symbols,  when  such  symbols  are  specified.    Each
bar code symbol shall contain 35 message characters in
addition to the start/stop characters.
6. 1.2        A    non-printed    message    header    is    normally
encoded  when  encoding  multiple,  concatenated  data
fields.    However,  this  header  is  not  encoded  in  the  bar
code  fields  to  conserve  space.    The  absence  of  this
message  header  requires  appropriate  software  in  bar
code reading systems, to separate the data fields.
6. 1.3    The  upper  bar  code  data  field,  the  customer
information  field  (see  Table  1  and  Figure  2a),  shall
contain the customer product ID preceded by a “P,” the
data   identifier   for   this   item   as   specified   in   ANSI
MH10.8.2.
6. 1.3.1  Optionally, if the customer product ID occupies
less than 34 characters, the customer identification field
may  also  contain  one  or  more  of  the  subfields  listed
below,  up  to  the  limit  of  35  characters  total.    Each
optional subfield shall be preceded by the concatenator
symbol   “+”   and   the   data   identifier(s)   below,   in
accordance with ANSI MH 10.8.2.
6. 1.3.2      Field   Identifier   for   customer   part   number
revision: 2P
6. 1.3.3        Field    Identifier    for    customer    specification
number: 20P
6. 1.3.4        Field    Identifier    for    customer    specification
revision: 21P
6. 1.3.5  Field  Identifier  for customer  drawing  number:
12P


SEMI T3-0302 © SEMI 1995, 2002 4
6. 1.3.6  Field Identifier for customer drawing revision: 22P
6. 1.4  The lower bar code data field (see Table 2 and Figure 2b) shall contain the 35-message character traceability
number.    This  field  is  divided  into  four  subfields,  each  separated  from  the  adjacent  field  by  the  concatenation
symbol “+.” The first subfield contains the lot number of 16 characters, preceded by the data identifier “1T.”  The
second  subfield  contains  the  2-character  SEMI  vendor  identification  code,  preceded  by  the  data  identifier  “1V.  ”
The third subfield contains the labeling date (YYMMDD), preceded by the data identifier “D. ”  The fourth subfield
contains the quantity, preceded by the data identifier “Q. ”  The quantity indicated on the label shall be the number
of  wafers  in  the  wafer  box  to  which  the  label  is  affixed;  the  unit  of  measure  is  understood  as  each  (EA).    The
message characters in this symbol are distributed as shown in Table 2.
Table 1  Content of Bar Code Symbol in Upper Bar Code Data Field (Customer Information Field)
Number of characters Symbol Content Notes
Required Subfield
First 1 Data Identifier “P”
message dependent Customer Product ID (e.g.  part number) (Customer-specified)
Optional Subfields
3 Concatenator + Data Indentifier “+2P”
message-dependent Customer Part Number Revision (Customer-specified)
4 Concatenator + Data Indentifier “+20P”
message-dependent Customer Specification Number (Customer-specified)
4 Concatenator + Data Indentifier “+21P”
message-dependent Customer Specification Number Revision (Customer-specified)
4 Concatenator + Data Indentifier “+12P”
message-dependent Customer Drawing Number (Customer-specified)
4 Concatenator + Data Indentifier “+22P”
message-dependent Customer Drawing Revision (Customer-specified)
NOTE 1:  The total number of characters in the field shall not exceed 35; any character location not filled with data shall contain a dash.
Table 2  Content of Bar Code Symbol in Lower Bar Code Data Field (Traceability Number)
Character Location Symbol Content (All required fields) Notes
1–2                     Data                     Identifier                     “1T”
3–18 Lot Number (Supplier assigned)
19–21 Concatenation Symbol and Data Identifier “+1V”
22–23 Vendor Identification Code (SEMI) (See Note 1)
24–25 Concatenation Symbol and Data Identifier “+D”
26–31 Labeling Date (YYMMDD) (See Related Information 1)
32–33 Concatenation Symbol and Data “+Q”
34–35 Quantity (unit, EA, implied) (numeric)
NOTE 1:  The SEMI vendor identification code may contain information on manufacturing location.  AUX1 contains multiple codes indicating
manufacturing  location  for  some,  but  not  all,  wafer  suppliers.    If  desired,  suppliers  whose  codes  do  not  now  include  manufacturing  location
identification can request additional codes for each location from SEMI, following the procedure in AUX1.
6. 1.5    All  bar  code  symbols  shall  use  the  Code  39  bar  code  as  specified  in  ISO/IEC  16388,  unless  an  optional  bar
code  is  selected  (see  Section  6.1.9).    Code  39  is  a  variable  length,  discrete,  self-checking,  bi-directional  bar  code.
Each character is composed of nine elements: Five bars and four spaces.  Three of the nine elements are wide and
six elements are narrow.
6. 1.6  Character  Set  —  The  Code  39  character  set  consists  of  43  characters:  0-9,  A-Z,+,-,.,$,/,%,  and  space.    In
addition, an asterisk (*) is used only for both the start and stop characters; it cannot be used as a message character.
No other characters shall be encoded in the bar code symbols of labels covered by this specification.  In the absence
of a character at any assigned location, a dash (-) shall be used.


SEMI T3-0302  © SEMI 1995, 2002 5
6. 1.7  Print Quality — The Code 39 print quality shall be B/03/630 or better in accordance with ANSI X3.182.  To
assure  reading  efficiency,  the  minimum  reflectance  of  the  quiet  zones  shall  be  60%,  the  minimum  reflectance  of
spaces shall be 51%, and the maximum reflectance of bars shall be 10%.
6. 1.8  Symbol Dimensions — Bar code symbol dimensions shall be as listed in Table 3.
6. 1.9  Other Bar Code Symbology — Code 128 may be used in lieu of Code 39.  Users must verify that this code fits
within the available label space.
6. 2  Human-Readable Interpretation Symbols
6. 2.1    Each  bar  code  symbol  data  field  on  the  label  shall  have  an  associated  human-readable  data  field  either
immediately above or immediately below it.  The symbol in each of the human-readable data fields shall contain all
the  message  characters  contained  in  the  associated  bar  code  data  field.    Start  and  stop  characters  shall  not  be
included, but the data field identifiers and concatenation symbols shall be included.
6. 2.2  The nominal height of the human-readable characters shall be 2.0 mm (0.08 in.).
6. 2.3  There shall be a clear space of 0.5 mm (0.02 in.) above and below each human-readable symbol.
6. 3  Data Matrix Code Symbol
6. 3.1    The  label  may  contain  up  to  two  identical  square  two-dimensional matrix code symbols each with up to 682
message  characters  when  six-bit  characters  are  encoded  using  the  EDIFACT  encodation  scheme  described  in
Annexe J3 of ISO/IEC 16022 (see also Table 11 in ISO/IEC 16022 ).
6. 3.2  The first six characters shall contain the message header, in accordance with EIA 706; this header identifies a
message  that  contains  data  identifiers  that  are  in  accordance  with  ANSI  MH10.8.2.    The  header  content  is  not
printed.
6. 3.3  The next 71 characters in the matrix code symbol shall contain the information included in the two bar code
symbols on the label, together with additional concatenation symbols, as summarized in Table 4.  In the absence of a
character at any assigned location, a dash (-) shall be used.  This information shall also be included if the bar codes
are not printed.
Table 3  Nominal Dimensions of Bar Code 39 Symbols
Symbol Dimension Metric (SI) Value U.S.  Customary Value
- number of message characters 35 35
X width of narrow bar 0.125 mm 0.00493 in.
N ratio of wide to narrow bar width 2.0 2.0
I nominal intercharacter gap 0.1251 mm 0.00493 in.
H bar height (See Note 1.)

9. 0 mm 0.35 in.
L' bar code symbol length (excl. quiet zones) 60.06 mm 2.365 in.
- bar code density (excl. quiet zones) 0.583 cpmm 14.80 cpi
Q width of quiet zone (See Note 1.)

6. 35 mm 0.25 in.
L total length of bar code symbol 72.76 mm 2.865 in.
NOTE  1:    The  metric  (SI)  and  U.S.  Customary  values  of  this  dimension  are  not  exact  equivalents;  the  dimension  has  been  rounded  to  obtain
rational values in both systems.
6. 3.4  For boxes to be used for wafers between 100 and 200 mm in diameter, the content of the remainder of the data
matrix code symbol is optional, as agreed between the customer and supplier.  However, it is recommended that the
remaining   message   characters   in   the   Data   Matrix   code   symbol   include   the   following   500-character   wafer
identification  information.    For  labels  to  be  used  on  300  mm  FOSBs,  the  wafer  identification  information  is
required, in accordance with SEMI M45.
6. 3.4.1  These next 500 characters identify the slot number and individual wafer identification of each wafer in the
box, with a string of 25 twenty-character fields.  Each of these fields contains:
a.    The concatenation character (“+”) and Data Identifier for the slot ID (“31T”) and a two-digit number of the slot,
and


SEMI T3-0302 © SEMI 1995, 2002 6
b.     the  concatenation  character  (“+”)  and  Data  Identifier  for  the  ID  of  the  wafer  in  that  slot  (“32T”)  and  the  ten-
character wafer ID including the two-character vendor identification code.  The wafer ID number is comprised
of
i) the first ten characters of the marking codes specified in SEMI M12, SEMI M13, or SEMI T2, or
ii) all ten characters of the marking code specified in SEMI T7.
NOTE 4: The content of the marking code specified in SEMI T1 is not specified.  This standard may not be suitable for use with
wafers marked with the marking code specified in SEMI T1.
6. 3.4.2  The cassette/box slot sequence assumes slot 01 at the bar end and slot 25 at the other end of the box.  Data
matrix code symbols on labels on boxes or cassettes with less than 25 slots shall have one field for each slot.
Table 4  Message Character Content of Matrix Code Symbols
Character
Location                 Count
Symbol Content Notes
General Information
1–6                         6                         Message                         Header                         d237
7                           1                           Data                           Identifier                           “P”
8–41 34 Customer Information (see Table 2) (Customer-assigned)
42–44 3 Concatenation Symbol and Data Identifier “+1T”
45–60                      16                      Lot                      Number                      (Supplier-assigned)
61–63 3 Concatenation Symbol and Data Identifier “+1V”
64–65 2 Vendor Identification Code (SEMI)
66–67 2 Concatenation Symbol and Data Identifier “+D”
68–73 6 Labeling Date (YYMMDD) (See Related Information 1)
74–75 2 Concatenation Symbol and Data Identifier “+Q”
76–7 2 Quantity (unit, EA, implied) (numeric)
77 Subtotal for general information

Wafer Information (Optional, see 6.3.4 and 6.3.4.1)
78–81 4 Concatenation Symbol and Data Identifier “+31T”

(See Note 8)

82–83 2 Slot Number (numeric, 01-25)
84–87 4 Concatenation Symbol and Data Identifier “+32T”
88–97 10 Wafer Identification Number
20 Subtotal for one wafer
98–577 480 Subtotal for next 24 wafers
500 Subtotal for wafer information

577 Total for General + Wafer Information
Encrypted or Customer-specific Data (Optional)
577–682 up to 105  As needed Otherwise unused character locations (See
Note 9)

NOTE  1:    If  wafer  identification  data  are  not  available  or  are  not  desired  for  a  particular  application,  additional  supplier-specified  and/or
customer-specified data fields may be included in these character locations as agreed upon between customer and supplier.  Begin each supplier-
specified  field  with  a  data  identifier  from  the  series  31T  to  34T  and  each  customer-specified  field  with  a  data  identifier  from the series 20T to
24T.  Separate adjacent fields with the concatenation symbol (+).
NOTE 2:  These unused character locations are available for encrypted or unencrypted supplier-specified information or for customer-specified
information.    These  characters  do  not  appear  in  the  bar  code  symbol,  but  only  in  the  Data  Matrix  Code  Symbol.    Begin  the  field  with  the
concatenation  symbol  (“+”)  followed  by  an  appropriate  data  identifier  as  defined  in  Note  1;  in  the  unlikely  event  that  more  than  one  field  is
included,  begin  each  field  with  an  appropriate  identifier  and  separate  adjacent  fields  with  the  concatenation  symbol.    If  the  field  is  not  filled
completely with characters it is not necessary to pad with dashes; the encoding software will pad it automatically.
6. 3.4.3    All  slots  shall  be  represented  in  the  Data  Matrix  code.    The  first  identification  number  shall  be  that  of  the
wafer in slot 01 at the bar end; the second, that of the wafer in slot 02; and so on.  An empty slot shall be designated


SEMI T3-0302  © SEMI 1995, 2002 7
by dashes.  For shipping boxes containing 100 to 200 mm diameter wafers, slot 01 is at the bar end of the box.  For
300 mm FOSBs, slot 1 is specified by SEMI M31 to be at the bottom of the FOSB.
6. 3.5  Any character locations not otherwise used may contain information whose content shall be agreed to between
supplier  and  customer.    These  characters  may  consist  of  customer-specified  data  or  supplier-specified  data  (which
may be encrypted) or both.
6. 3.6    The  data  matrix  code  shall  be  a  square  field,  constructed  in  accordance  with  ISO/IEC  16022,  using  error
correction code ECC200.
6. 3.7  Dot Size — The nominal shape of the dot produced in the matrix may be circular or square, depending on the
printing technique.  It is recommended that each "cell" of the data matrix symbol be composed of at least four dots
(a cell with two dots per edge).  When printed at 203 dpi, the dot diameter or edge length is 0.125 mm (0.00985 in.).
6. 3.8  Symbol  Dimensions  —  Each  matrix  code  symbol  shall  be  composed  of  80  rows  and  80  columns  of  cells
spaced  equally  with  cell  spacing  S  (see  Figure  3).    The  nominal  outside  dimensions  of  the  matrix  (C2  and  R2  in
Figure 4), printed with 4 dots per cell at 203 dpi is 20 mm.
6. 3.9  Border Rows and Columns (see Figure 4)
6. 3.9.1  The leftmost border row and the bottom border column shall contain dots in each cell.  These are identified
as the primary border row and the primary border column.
6. 3.9.2  The opposing (secondary) border row and column shall contain dots in every other cell.
6. 3.9.3  These border rows and columns are used by the code reader to determine the origin, size, and orientation of
the matrix.
6. 3.9.4    The  origin  of  the  matrix  code  symbol  shall  be  the  physical  center  point  of  the  cell  common  to  the  primary
border row and the primary border column.
NOTE 5: This origin location differs from that used in SEMI T2.
6. 3.10  Message Characters — The matrix code symbol contains 682 8-bit message characters.
Table 5  Nominal Dimensions of Wafer Box Labels and All Data Fields
Dimension Metric (SI) Value U.S. Customary Value
A (see Note 11) 25 mm 1 in.
B (see Note 11) 0.75 mm 0.04 in.
C (see Note 11) 1.0 mm 0.04 in.
D (see Note 11) 0.50 mm 0.02 in.
E (see Note 11) 2.0 mm 0.08 in.
F (see Note 11) 24.24 mm 0.95 in.
H (see Note 11) 9.0 mm 0.35 in.
J  2.0 mm  0.08 in.
K (see Note 12)

20. 0 mm  0.788 in.
L ́ 60.06 mm 2.365 in.
L 72.76 mm 2.865 in.
P  119.0 mm 4.69 in.
Q  6.35 mm 0.25 in.
S (see Note 11) 30.0 mm 1.19 in.
T (see Note 11)  24.0 mm  0.95 in.
U (see Note 11)  2.5 mm  0.106 in.
NOTE 1:  The Metric (SI) and U.S.  Customary values of this dimension are not exact equivalents; the dimension has been rounded to obtain
rational values in both systems.
NOTE 2:  Printed at 4 dots/cell and 203 dpi.



SEMI T3-0302 © SEMI 1995, 2002 8
6. 3.10.1    The  initial  six  characters  are  a  non-printed
message header.  The next 570 characters are restricted
to  the  Code  39  Character  Set  (see  6.1.6)  using  the  six-
bit  EDIFACT  encodation  scheme  described  in  Annexe
J3  of  ISO/IEC  16022.    The  remaining  105  message
characters   may   be   any   character   in   the   EDIFACT
Encodation  Character  Set,  including  unprinted  ones.
These  105  characters  are  available  for  encrypted  or
unencrypted    information,    as    negotiated    between
supplier and customer.
6. 3.11  Print  Quality — To assure reading efficiency, a
minimum  contrast  of  30%  is  required  between  the
reflectance  value  of  a  dot  and  the  surrounding  label
surface.      Various   densitometers   can   provide   such
measurements nondestructively.
7  Label Types, Label Dimensions, and
Placement of Data Fields on Labels
7. 1  Label Types (see Figure 5 for examples)
7. 1.1  Type  1  —  Company  Field  +  Data  Matrix  Field
with hri fields
7. 1.2  Type 2 — Company Field + Bar Code Field with
hri fields
7. 1.3  Type  3 — Company Field + Data Matrix Field +
Bar  Code  Field  with  hri  fields.    Two  of  this  type  of
label are required for use on 300 mm FOSBs.
NOTE   6:   The   space   reserved   on   the   FOSB   rear   surface
accepts  labels  as  large  as  120  mm  by  120  mm.    This  permits
the use of labels wider than is specified in this standard.  Such
labels  may  contain  additional  information  as  arranged  by
agreement between customer and supplier.
7. 1.4  Type 4 — Company Field + Data Matrix Field1 +
Bar  Code  Field  with  hri  fields  +  Data  Matrix  Field2
with hri fields
7. 1.5  Type  5  —  Company  Field  +  two  Data  Matrix
Fields, both with hri fields
7. 2        Each    label    shall    contain    an    area    containing
Company Information and one or more areas containing
bar   codes,   data   matrix   codes,   and   related   human-
readable information.
7. 2.1      The   Company   Information   area   may   contain
supplier-related  information  in  human-readable  alpha-
numeric  format  and  other  information  as  agreed  to
between customer and supplier.
7. 2.2    The  other  fields  that  contain  bar  code,  human-
readable,  and  two-dimensional  matrix  code  data  fields,
may be arranged as indicated in the examples shown in
Figure 5.
7. 2.3      The   human-readable   (hri)   data   fields   can   be
placed  either  above  or  below  their  associated  bar  code
data   fields.      The   examples   in   Figure   5   show   the
configuration with the hri fields above the bar code data
fields.
7. 3    Approximate  overall  dimensions  of  the  five  label
types shown in Figure 5 are tabulated in Table 6.
7. 4    Dimensions  of  individual  fields,  label  height,  and
label length for a type 4 label are given in Table 5 and
Figure 6.  Label types 4 and 5 may use perforated label
material  so  that  the  sections  may  be  separated  after
printing.
Table 6  Overall Dimensions of Box Labels
Length                                 Width
Label
Type
Symbol       mm       in.       Symbol       mm       in.
1             F+S             54.2             2.1             A             25.0             1.0
2             F+L             97.0             3.8             A             25.0             1.0
3         P=F+T+
L

# 119

119.
0
4. 7          A           25.0          1.0
4             P+S             149.
0
5. 9          A           25.0          1.0
5            F+2S            84.2            3.3            A            25.0            1.0
NOTE 1: For meaning of the symbols, see Table 5.
8  Label Locations on Wafer Box
8. 1    For  boxes  containing  wafers  from  100  to  200  mm
in diameter, the following recommendations apply.
8. 1.1    It  is  recommended  that  label  type  4  or  label  type
5  be  used  for  these  boxes.    These  label  types  may  be
printed  on  perforated  label  material  so  that  the  sections
may be separated after printing.
8. 1.2  The recommended location for the larger label is
the  center  (both  vertically  and  horizontally)  of  the  side
of  the  cover  of  the  wafer  box  facing  the  operator  with
the bar end to the left and the wall end to the right (see
Figure 7).  Alternatively, this label may be placed in the
center of the same side of the base of the wafer box.
8. 1.3    The  recommended  location  for  the  smaller  label
is  the  center  (both  vertically  and  horizontally)  of  the
wall  end  of  the  base  of  the  wafer  box  (see  Figure  7).
Alternatively,  this  label  may  be  placed  at  the  center  of
the wall end of the cover of the wafer box.
8. 1.4    It  is  recommended  that  the  wafer  box  cover  and
the  wafer  box  base  each  contain  a  label,  so  that  each
will   have   a   label   after   they   have   been   separated.
However,  in  some  cases,  space  limitations  may  require
that both labels be placed on the same part of the wafer
box.
8. 2      For   FOSBs   containing   300   mm   wafers,   the
following requirements apply.
8. 2.1  Use two identical Type 3 labels.


SEMI T3-0302  © SEMI 1995, 2002 9
8. 2.2  Place one label on the center of the rear surface of the FOSB with the long axis of the label perpendicular to
the FOSB base (see Figure 8a).
8. 2.3    Place  the  other,  identical,  label  on  the  outer  wrap  bag,  which  is  specified  in  SEMI  M31,  at  the  center  of  the
side adjacent to the FOSB door (see Figure 8b).

NOTE 1:  This specification covers only labels for the wafer package, including the wafer boxes and the wafer box wrap; labels
for transport packages are specified in EAI 556-B.
Figure 1
Wafer Box, Wafer Package and Transport Package



SEMI T3-0302 © SEMI 1995, 2002 10

P 98765432+2P 93+20P 96+21P 06+12P 4+22P 25
CUSTOMER PRODUCT ID
DATA IDENTIFIER
CUSTOMER
PART # REV.
DATA IDENTIFIER
CUSTOMER
SPEC #
DATA IDENTIFIER
CUSTOMER
SPEC  # REV.
DATA IDENTIFIER
CUSTOMER
DRAW ING #
DATA IDENTIFIER
CUSTOMER
DRAWING  # REV.
DATA IDENTIFIER

NOTE  1:    In  this  figure,  vertical  dashed  lines  separate  subfields;  the  concatenation  and  field  identifiers  are  to  the  left  of  these
dashed  lines.    The  CUSTOMER  PRODUCT  ID  is  a  required  field  whose  content  is  specified  by  the  customer.    The  PART  #
REVISION,   SPECIFICATION   #,   SPECIFICATION   #   REVISION,   DRAWING   NUMBER   and   DRAWING   NUMBER
REVISION  are  optional  fields;  these  are  also  assigned  by  the  customer  up  to  a  maximum  character  count  of  35,  including    all
concatenation and  field identifier characters.  All unused character locations are filled with a dash (-).
Figure 2a
Example of Customer Information Field


DATA IDENTIFIER
CONCATENATOR
DATA IDENTIFIER
DATA IDENTIFIER
LOT NUMBER
SEMI
YYMMDD.
DATA IDENTIFIER
#
1T 1234567891234567+1V SV+D 960625+Q 25

NOTE  1:    In  this  figure,  vertical  dashed  lines  separate  subfields;  the  concatenation  and  field  identifiers  are  to  the  left  of  these
dashed lines.  LOT NUMBER is assigned by the supplier.  SEMI represents the two-character vendor code that is maintained by
SEMI.  YYMMDD represents the year, month and day of packaging and # is a two-digit number indicating the quantity of wafers
in the box.
Figure 2b
Example of Traceability Number



SEMI T3-0302  © SEMI 1995, 2002 11

NOTE 1:  S = 0.25 mm (at 203 dpi and 4 dots per cell)
Figure 3
Data Matrix Cell Spacing


Figure 4
Border Rows, Border Columns and Dimensions of Data Matrix Symbol


SEMI T3-0302 © SEMI 1995, 2002 12

Figure 5
Examples of Box Label Layout Types


SEMI T3-0302  © SEMI 1995, 2002 13

Figure 6
Labels with Bar Code, Human-Readable and Matrix Code Data Fields











SEMI T3-0302 © SEMI 1995, 2002 14


Figure 7
Recommended and Alternative Locations for Labels on Wafer Boxes for
Use with Wafers of 100 to 200 mm Diameter

Bilateral Datum Plane
Bottom Rail
Human Handle
(optional)
Horizontal Datum Plane of
Box Nest or Load Port
Rear Surface
Label Area
Preferred Label Location

Figure 8a
300 mm FOSB Rear Surface Label Locations



SEMI T3-0302  © SEMI 1995, 2002 15






Figure 8b
FOSB Associated Outer Bag Label Location

NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer's  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature,  respecting  any  materials  or  equipment  mentioned  herein.  These  standards  are  subject  to  change  without
notice.
By  publication  of  this  standard,  Semiconductor  Equipment  and  Materials  International  (SEMI)  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  items  mentioned  in  this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights are entirely their own responsibility.


SEMI T3-0302 © SEMI 1995, 2002 16
RELATED INFORMATION 1
MODIFIED DATE FORMAT
NOTE: This related information is not an official part of SEMI T3 and was derived from information developed by the T3
Revision task force of the N.A. Traceability committee during revision of the standard.  This related information was approved
for publication in June 1997 after full letter ballot and approval by the NA Regional Standards Committee.
R1-1  Alternative Labeling Date Format
R1-1.1    By  agreement  between  supplier  and  customer,  the  labeling  date  may  be  in  the  format  of  YYYYMMDD.
The data identifier “6D” should be used when the year is indicated by four characters.  This adds three characters to
the  information  printed  on  the  label,  two  additional  date  characters  and  the  second  character  in  the  data  identifier.
There  is  space  available  on  the  minimum  size  label  when  using  the  two-dimensional  data  matrix  symbol  or  the
optional Code 128 bar code.  Three additional characters added to the Code 39 bar code will not fit on the minimum
size label unless the Lot Number is reduced to 13 characters.

NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer's  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature,  respecting  any  materials  or  equipment  mentioned  herein.  These  standards  are  subject  to  change  without
notice.
By  publication  of  this  standard,  Semiconductor  Equipment  and  Materials  International  (SEMI)  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  items  mentioned  in  this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights are entirely their own responsibility.

Copyright  by  SEMI  ®  (Semiconductor  Equipment  and  Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden,  without  express  writte
n
consent of SEMI.

SEMI T4-0301 © SEMI 1995, 20011
SEMI T4-0301
SPECIFICATION FOR 150 mm AND 200 mm POD IDENTIFICATION
DIMENSIONS
This  specification  was  technically  approved  by  the  Global  Physical  Interfaces  &  Carriers  Committee  and  is
the direct responsibility of the European Equipment Automation Committee. Current edition approved by the
European  Regional  Standards  Committee  on  December  20,  2000.    Initially  available  at  www.semi.org
February 2001; to be published March 2001. Originally published in 1995.
1  Purpose
1. 1   The  purpose  of  this  specificati on  is  to  ensure
dimensional     compatibility     when     mounting     pod
identification tags and tag identification devices.
2  Scope
2. 1  The scope of this specification  is to define:
• free space at a pod to allow the mounting of a pod
identification tag, and
• free space to allow data transmission.
2. 2  This specification is applicable  to 150 mm and 200
mm  Standard  Mechanical  Interfaces  (SEMI  E19).  The
space  required  for  pod  handling  per  SEMI  E47  is
considered.
2. 3   This  standard  does  not  purport   to  address  safety
issues,   if   any,   associated   with   its   use.      It   is   the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory limitations prior to use.
3  Limitations
3. 1   This  specification  applies  to  po d  identification
only.
4  Referenced Standards
4. 1  SEMI Standards
SEMI E15 — Specification for Tool Load Port
SEMI E19 — Standard Mechanical Interface (SMIF)
SEMI  E47  —  Specification  for  150  mm/200  mm  Pod
Handles
NOTE 1: As listed or revised, all documents cited shall be the
latest publications of adopted standards.
5  Terminology
5. 1   pod  —   a   box   having   a   Standar d   Mechanical
Interface (SMIF) per SEMI E19.
5. 2    Pod   Identification   Tag   —    info r mation   carrier
mounted to a pod.
5. 3     Standard    Mechanical    Interfac e    (SMIF)    —
interface      plane      between      pod      and      another
minienvironment per SEMI E19.
5. 4     Tag    Identification    Device    —     device    for
transferring  information  from/to  a  pod  identification
tag.
6  Requirements
6. 1  The defined free space for a po d identification tag
(see Figure 1) may not be used by any other device than
the pod identification tag and its supports.
6. 1.1   The  pod  identification  tag  and   its  supports  may
not  exceed  the  outline  of  the  defined  free  space  for  a
pod  identification  tag  (see  Related  Information  Section
R1-1).
6. 2   The  defined  free  space  for  data   transmission  (see
Figure  1)  may  only  be  used  by  the  tag  identification
device  if  necessary  (see  Related  Information  Section
R1-2).
Table 1  Dimensions of Defined Free Space
Dimension150 mm SMIF200 mm SMIF
A1130 mm167.5 mm
A2160 mm min.
180 mm recommended
207. 5 mm min.
227. 5 mm recommended
A370 mm70 mm
B136 mm36 mm
B243 mm43 mm
B3120 mm120 mm

SEMI T4-0301 © SEMI 1995, 20012
Figure 1
NOTICE: SEMI makes no warranties or representations as to the suitability of the standards set forth herein for any
particular  application.  The  determination  of  the  suitability  of  the  standard  is  solely  the  responsibility  of  the  user.
Users  are  cautioned  to  refer  to  manufacturer’s  instructions,  product  labels,  product  data  sheets,  and  other  relevant
literature  respecting  any  materials  or  equipment  mentioned  herein.  These  standards  are  subject  to  change  without
notice.
The  user’s  attention  is  called  to  the  possibility  that  compliance  with  this  standard  may  require  use  of  copyrighted
material  or  of  an  invention  covered  by  patent  rights.  By  publication  of  this  standard,  SEMI  takes  no  position
respecting  the  validity  of  any  patent  rights  or  copyrights  asserted  in  connection  with  any  item  mentioned  in  this
standard. Users of this standard are expressly advised that determination of any such patent rights or copyrights, and
the risk of infringement of such rights, are entirely their own responsibility.

SEMI T4-0301 © SEMI 1995, 20013
RELATED INFORMATION 1
NOTE:  This  related  information  is  not  an  official  part  of  SEMI  T4,  but  was  approved  for  publication  by  full  letter  ballot
procedures in 1995.
R1-1      As   the   outline   of   the   pod   sidewall   is   not
standardized,    the    available    space    for    the    pod
identification tag may vary between different pod types.
R1-2    The  defined  free  space  for  data  transmission
should not be obstructed for the following reasons:
• data transmission
• loading/unloading
• SEMI E15 (multiple row applications)
NOTICE:      SEMI      makes      no      warranties      or
representations  as  to  the  suitability  of  the  standards  set
forth    herein    for    any    particular    application.    The
determination of the suitability of the standard is solely
the  responsibility  of  the  user.  Users  are  cautioned  to
refer   to   manufacturer’s   instructions,   product   labels,
product   data   sheets,   and   other   relevant   literature
respecting   any   materials   or   equipment   mentioned
herein.  These  standards  are  subject  to  change  without
notice.
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



SEMI T5-96 © SEMI 1996, 2004 1
SEMI T5-96 (Reapproved 1104)
SPECIFICATION FOR ALPHANUMERIC MARKING OF ROUND
GALLIUM ARSENIDE WAFERS
This  specification  was  technically  approved  by  the  Global  Traceability  Committee  and  is  the  direct
responsibility  of  the  North  American  Traceability  Committee.    Current  edition  approved  by  the  North
American Traceability Committee on July 11, 2004.  Initially available at www.semi.org September 2004; to
be published November 2004.  Originally published in 1996; previously published in 1999.
1  Purpose
1. 1  The purpose of this document is to define standard
criteria for the alphanumeric marking of round gallium
arsenide wafers, in order to improve the consistency of
wafer    marking    and    allow    simplification    of    the
performance requirement of automatic optical character
recognition (OCR) equipment.
2  Scope
2. 1  This specification defines the geometric and spatial
limits   of   the   alphanumeric   code,   specifically   for
nominally  round,  flatted  gallium  arsenide  wafers.    It
also  defines  the  basic  code  used  to  characterize  the
individual  wafer,  thereby  providing  practical  operator
interpretation.    This  document  does  NOT  address  the
marking   techniques   that   may   be   employed   when
complying  with  this  standard  nor  does  it  address  any
health issues associated with those techniques.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI AUX001 — List of Vendor Identification Codes
SEMI  M12  —  Specification  for  Serial  Alphanumeric
Marking of the Front Surface of Wafers
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Terminology
4. 1  Definitions
4. 1.1  adjacent  character  misalignment  —  the  vertical
distance, r,  between  the  character  baselines  of  two
adjacent characters on the same line (see Figure 6).
4. 1.2  character height — the vertical distance between
the lowest and the highest centerpoints of a character.
4. 1.3  character  separation  —  the  horizontal  distance
between  the  adjacent  boundaries  of  any  characters  (see
Figure 1).
4. 1.4  character   skew   —   the   angle   between   the
character baseline and a line parallel with the bottom of
the character window (see Figure 5).
4. 1.5  character   spacing   —   the   horizontal   distance
between  the  character  spacing  reference  lines  of  the
adjacent characters (see Figure 1).
4. 1.6  character   width   —   the   horizontal   distance
between the most left and the most right centerpoint of
a character.
4. 1.7  code  field  (also  known  as  character  window)  —
the  rectangular  window  within  which  all  characters
must be contained (see Figure 4).
4. 1.8  front  surface  of  the  wafer  —  the  surface  upon
which  active  semiconductor  devices  have  been,  or  will
be, fabricated.
NOTE 1:  This can be either the V-Groove or Dovetail side of
the GaAs wafer.
4. 1.9  line   character   misalignment   —   the   vertical
distance, R, between the character baselines of any two
characters on the same line (see Figure 7).
5  Shape and Size of Marking
5. 1  Dot  matrix  method  shall  be  used  to  write  charac-
ters.    The  minimum  matrix  shall  be  5  dots  horizontal
and  9  dots  vertical  as  shown  in  Figure  1.    More  dots
may be used.
NOTE 2:  The  5  ×  9  dot  matrix  shown  in  Figure  1  is  the
minimum  number  of  dots  allowed.    More  dots  may  be  used,
up   to   and   including   a   solid   line.   A   solid   line   is   not
recommended, since it may increase wafer breakage.
5. 2  Character  Dimensions  and  Spacing  —  See  Table
1, Table 2, and Figure 1.


SEMI T5-96 © SEMI 1996, 2004 2

Figure 1
Character Outline

Table 1  Character Dimensions and Spacing —
Configuration A — 3”, 100 mm, 125 mm, 150 mm
Character                                      (mm)
Height 1.624 ± 0.025
Width 0.812 ± 0.025
Thickness
0. 200 + 0.050 − 0.150
Spacing 1.420 ± 0.025
Minimum Separation 0.400

Table 2  Configuration B — 2”, Option for 3” Wafers
Character                                      (mm)
Height 0.812 ± 0.025
Width 0.406 ± 0.025
Thickness 0.100 ± 0.050
Spacing 0.710 ± 0.025
Minimum Separation 0.104

NOTE 3:  The  thickness  of  the  diagonal  in  the  letter  “N”  is
0. 138 ± 0.05 mm for single density dot matrix.
5. 3  SEMI  OCR  Standard  Character  Set  —  See  Figure
2 and Appendix 1.



Figure 2
Standard Character Set

6  Alphanumeric Code
6. 1  Code  —  Limited  to  one  line  of  20  characters
maximum  (see  Figure  3  and  Table  3  for  an  example
using 15 characters).  The first five to ten characters are
an  identification  number  which  is  unique  to  the  ingot
for a given supplier.  This is followed by a dash, which
is  followed  by  three  digits  which  indicate  the  wafer
number, as numbered starting from the seed end of the
ingot.    The  next  two  alpha  characters  identify  the
vendor according to SEMI AUX001.  The last optional
characters are specified by the vendor or customer.  For
example, these characters could be used to differentiate
specifications,  orientation,  or  doping.    The  character
string  (using  a  five  character  ingot  as  example)  is
constructed as follows:
Table 3  Vendor identification code
Character #  Character StyleParameter         Definition
1 - 5 Alphanumeric    Ingot number Supplier-
assigned
6                  Alpha                  dash                  a                  spacer
7 - 9 Numeric Wafer number Number of
wafer in ingot
10 - 11 Alpha only Vendor
Identification
Code
See SEMI
AUX001
12 - 15 AlphanumericOptional:
characters to
identify
specification(s)
Supplier- or
customer-
specified



SEMI T5-96 © SEMI 1996, 2004 3
6. 2  If  the  optional  special  code  characters  are  used  to
indicate doping, surface orientation, the symbols shown
in Table 4 will be employed.
Table 4  Special Code Characters
Parameter                       Code                       Definition
Device surface orientationand flat
location
V V - Groove
D                                  Dovetail
Dopant                            U                            Undoped
C                                  Carbon
R                                  Chromium
T                                  Tellurium
I                                   Indium
S                                  Silicon
L                                  Sulfur
Z                                  Zinc
E                                  Selenium
Front Surface Orientation 0 100
A, B 111 A or B
2                                   100                                   (2°off)
3 100 (other off
orientation)
4                                   other                                   orientation
5                                   other                                   flats

6. 3  An example of the code is given in Figure 3.


Figure 3
Example of Code for 3" Wafer

7  Code Field Location
7. 1  Code  field  shall  be  located  on  the  polished  front
surface  of  wafers  or  on  the  polished  or  etched  back
surface of wafers as shown in Table 5.
7. 2  Code  field  is  located  as  shown  in  Figure  4  and
Table 6.
7. 3  All  characters  must  be  contained  within  the  code
field  along  the  major  flat.  The  top  of  the  characters  is
toward  the  side  of  the  code  field  nearest  the  flat,  see
Figure 4.
7. 4  Dimensions — See Figure 4 and Table 6.


SEMI T5-96 © SEMI 1996, 2004 4
7. 5  In the standard specification, the first character of the code line is located toward the left side of the code field.


Figure 4
Code Field Location for Flatted Wafers

Table 5  Location of Code Field
Wafer Diameter Location of Code Field
2" Front (standard); Back surface (alternate)
3" Front (standard); Back surface (alternate)
100 mm Front surface
125 mm Front surface
150 mm Front surface

Table 6  Code Field Location and Dimensions
Parameter (mm) 2" 3" 3" 100 mm 125 mm 150 mm
Configuration Character Dimension(See
Tables 1 and 2)
B                     B                     A
#1
A                    A                    A
L              min              14.23              19.05              19.05               30.0                40.0                55.0
x                  7.1                  9.5                  9.5                  15.0                  20.0                  27.5
w                14.0                14.0                19.0                27.0                27.0                27.0
d                  1.0                  1.0                  1.0                  1.0                  1.0                  1.0
h                  1.4                  1.4                  2.4                  2.4                  2.4                  2.4
#1:  For 3" wafers, only 13 characters are allowed due to limitations on the size of the code field.


SEMI T5-96 © SEMI 1996, 2004 5
8  Character Alignment
8. 1  Character Skew — 3 degrees maximum allowable (see Figure 5).
8. 2  Maximum character misalignment (see Figures 6 and 7).
8. 2.1  Maximum adjacent character misalignment allowable is 0.230 mm.
8. 2.2  Maximum line character misalignment allowable is 0.460 mm.

Figure 5
Character Skew



Figure 6
Adjacent Character Misalignment



Figure 7
Line Character Misalignment



SEMI T5-96 © SEMI 1996, 2004 6
APPENDIX 1
SEMI OCR CHARACTER OUTLINES
NOTICE:  The material in this appendix is an official part of SEMI T5 and was approved by full letter ballot procedures.













SEMI T5-96 © SEMI 1996, 2004 7















SEMI T5-96 © SEMI 1996, 2004 8









SEMI T5-96 © SEMI 1996, 2004 9













SEMI T5-96 © SEMI 1996, 2004 10
RELATED INFORMATION 1
NOTICE:  This related information is not an official part of SEMI T5.  This related information was approved for
publication by full letter ballot procedures.
R1-1  Considerations for Reliable Automatic
Reading of the Marking
R1-1.1  The  following  suggestions  are  offered  to  assist
in  assuring  the  most  reliable  automatic  reading  of  the
alphanumeric marking.
R1-1.2  Character  Stroke  Thickness  —  If  a  5  ×  9  dot
matrix  is  chosen  for  marking,  it  is  recommended  that
the  minimum  dot  size  be  0.100  mm.  Double  or  higher
density dot matrix is recommended; when used, smaller
dot  diameters  may  be  employed.    Stroke  thickness
should   be   constant   withing   20%   over   the   entire
character   set   so   that   the   reader   settings   may   be
optimized for the specific wafer run.
R1-1.3  Contrast    —    The    character    should    have
sufficient   contrast   to   be   legible.   Contrast   may   be
affected by depth and other conditions.
R1-1.4  Clear Zone — It is recommended that the area
immediately  beneath  and  a  minimum  of  0.500  mm
around    the    marking    characters    be    of    uniform
reflectivity  and  free  of  any  lithography  and  process
overlay edges.
R1-2  Considerations for the Use of Front
Surface Markings
R1-2.1  Marks  can  impinge  upon  areas  where  devices
may  be  printed.  Since  mask  geometries  are  varied,
considerations of the mark area should be made in mask
design  and  also  when  applying  the  mark  specifications
to existing mask designs.
R1-2.2  When  the  mark  is  applied  prior  to  epitaxial
deposition,  a  crown  or  epi  may  grow  along  the  mark
edge. The height of this crown will depend upon the epi
thickness and the deposition process.
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


Copyright   by   SEMI®   (Semiconductor   Equipment   and   Materials
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction of
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI T6-0697 © SEMI 1997, 2004 1
SEMI T6-0697 (Reapproved 1104)
PROCEDURE AND FORMAT FOR REPORTING OF TEST RESULTS BY
ELECTRONIC DATA INTERCHANGE (EDI)
This   procedure   was   technically   approved   by   the   Global   Traceability   Committee   and   is   the   direct
responsibility  of  the  North  American  Traceability  Committee.    Current  edition  approved  by  the  North
American Traceability Committee on July 11, 2004.  Initially available at www.semi.org September 2004; to
be published November 2004.  Originally published in 1997; previously published in 1999.
1  Purpose
1. 1  To  facilitate  the  electronic  transfer  of  quality  and
test data between users and suppliers.
2  Scope
2. 1  This  document  describes  a  procedure  and  format
using ANSI ASC X12 “863 Report of Test Results” for
electronic  data  interchange  (EDI).    The  ANSI  standard
provides  a  basic  structure  and  codes  for  transmitting
messages.    This  is  supplemented  by  SEMI-generated
codes  to  describe  product  parameters  and  test  methods
specific  to  the  semiconductor  industry.    For  a  descrip-
tion of the EDI business applications, see Appendices 1
and 2.
2. 2  This standard may be used to report test results for
all  products  used  in  the  semiconductor  industry  when
the  applicable  codes  are  included  in  a  SEMI  standard.
It   is   intended   to   provide   a   consistent   method   for
transmit-ting  test  results  throughout  the  industry.  Any
implemen-tation of this document shall be agreed upon
between trading partners.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI AUX001 — List of Vendor Identification Codes
SEMI  M12  —  Specification  for  Serial  Alphanumeric
Marking of the Front Surface of Wafers
SEMI  M18  —  Format  for  Silicon  Wafer  Specification
Form for Order Entry
3. 2  ANSI Standards
1


ASC  X12  —  863  Report  of  Test  Results,  version  003
release 050
ASC X12 — Data Dictionary
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Terminology
4. 1  Abbreviations and Acronyms
4. 1.1  ANSI — American National Standards Institute
4. 1.2  ASC X12 (Accredited Standards Committee X12)
—  Comprised  of  industry  members  for  the  purpose  of
creating  EDI  standards  for  submission  to  ANSI  for
subsequent approval and dissemination.
4. 1.3  EDI   (Electronic   Data   Interchange)   —   The
computer-to-computer  exchange  of  information  which
has   tradi-tionally   been   communicated   using   paper
documents.
4. 2  Definitions
4. 2.1  certificate   of   analysis   EDI   message   —   one
message  containing  measurement  or  statistical  data  for
one shipment, from one supplier site to one user site, of
one  user  part  number  against  one  user  purchase  order
shipped.  Multiple  lot  numbers  may  be  included  in  the
shipment. (See Appendix 5.)
4. 2.2  codes  —  a  recognized  set  of  abbreviations  or
conventions for representing specific elements of data.
4. 2.3  EDI  translation  —  the  conversion  of  application
data to and from the ASC X12 standard format.
4. 2.4  manufacturing  lot  —  a  generic  description  for  a
group of parts that have a relationship as defined by the
party    establishing    the    identification    (e.g.,    batch,
shipment,    production    run,    qualification/test    run,
individual product). (See Application Notes.)


1 American National Standards Institute, Headquarters: 1819 L
Street, NW, Washington, DC 20036, USA. Telephone: 202.293.8020;
Fax: 202.293.9287, New York Office: 11 West 42nd Street, New
York, NY 10036, USA. Telephone: 212.642.4900; Fax:
212. 398.0023, Website: www.ansi.org


SEMI T6-0697 © SEMI 1997, 2004 2
4. 2.5  mapping   —   the   process   of   identifying   the
standards  data  element  relationship  to  application  data
elements.
4. 2.6  message — entire data stream including the outer
envelope.
4. 2.7  statistical  results  EDI  message  —  one  message
containing  measurement  or  statistical  data  for  defined
parameters for a stated period of time (see Appendix 5).
4. 2.8  test  results  EDI  message  —  used  to  designate
data  provided  by  special  request  (e.g.,  engineering,
qualifications).        This    message    contains    specific
measurement  or  statistical  data  for  one  request,  from
one  trading  partner  to  another  trading  partner,  of  one
part  number  against  one  purchase  order.    Multiple  lot
numbers may be included (see Appendix 5).
4. 2.9  trading   partner   —   all   members   within   the
channels  of  distribution  within  an  industry  (suppliers,
carriers,  users,  and  intermediaries)
2

.    This  includes
buyers  and  sellers  which  represent  SEMI  terms  of  user
and supplier as well.
5  Requirements
5. 1  An implementation model shall be agreed upon by
trading  partners.    It  is  the  intent  of  this  document  to
make interpretation of the models used for transmitting
electronic     messages     more     consistent,     so     that
implementations are based upon common practices.
5. 1.1  Select one of the report types in Table 1 using the
business model (Appendix 1) and the definitions found
in Section 4.
Table 1  Report Types
Code Type of EDI Message
CA Certificate of Analysis
RT                                      Test                                      Results
SR                                 Statistical                                 Results

5. 1.2  Define    data    requirements    representing    the
requested measurements and statistics that are recorded
for reporting electronically. (See Appendix 2.)
5. 1.3  Select  codes  for  parameters,  units  of  measure,
and statistical terms. Appendix 4 is a guideline to assist
in  modeling  the  EDI  message.  It  uses  codes  selected
from the ANSI Data Dictionary as well as codes created
by SEMI for the semiconductor industry.


2 The term “Trading Partner” is referenced from the Global
Electronics Guidelines (DRAFT) for Bar Code & 2D Symbol
Marking of Products and Packages in Conjunction with EDI.
5. 1.4  Data   is   electronically   reformatted   from   the
application  where  it  resides  into  a  format  suitable  for
EDI  transmission.  This  usually  requires  the  use  of
translation software and the development of application
interface programs.
5. 2  Thorough    piloting,    testing,    and    educating    is
required for successful implementation.
6  Procedures
6. 1  See Appendix 4.
7  Application Notes
7. 1  Pending  ANSI  approval,  SEMI  is  an  authorized
agency to maintain the tables of codes.
7. 2  The  material  contained  in  Appendix  4  was  created
by  using  an  EDI  simulator  referencing  the  ASC  X12
“863 Report of Test Reports”, version 003 release 050.
7. 3  In  using  Appendix  4,  refer  to  the  column  “SEMI
Use”  (far-left)  to  determine  if  data  element  usage  is
mandatory,  conditional,  or  optional.  SEMI  mandatory
elements include all ASC X12 863 mandatory elements,
as  well  as  selected  other  elements  that  are  optional  or
conditional within ASC X12 863.
7. 4  In   Appendix   5,   the   example   messages   in   this
appendix were simplified by showing only a portion of
what  they  can  do.  In  practice,  all  of  the  transaction
types (CA, RT, and SR) can use any combination of the
statistical codes in Appendix 4, the new statistical codes
in Appendix 4, or raw measurement data.
7. 5  Additional    statistical    codes    are    defined    in
Appendix 3.  These codes are pending ANSI approval.
7. 6  This    procedure    will    accommodate    date/time
considerations  for  the  turn  of  the  century.    There  are
many  options  found  in  the  data  transmission  segments
in  this  document.    The  end  result  for  which  option  is
utilized  will  be  agreed  upon  by  the  trading  partners.
The  message  is  itself  part  of  the  ANSI  standard,  and
any revisions to this standard will be incorporated.
7. 6.1  In  the  data  element  type,  DT  is  a  standard  ANSI
definition   and   is   being   addressed   by   ASC   X12
Committee.
7. 6.2  In  the  BTR  segment,  used  to  identify  the  date  of
the  actual  transmission,  BTR06  may  be  used  as  a
century reference number.
7. 6.3  In  the  DTM  segments,  used  to  identify  the  date
for  the  actual  data,  the  DTM05  data  element  of  CC
represents  a  two-digit  century  code  (e.g.,  19  for  1999,
20 for 2000).


SEMI T6-0697 © SEMI 1997, 2004 3
7. 7  Multiple  levels  of  lot  definitions  (i.e.,  Lots  and
Sub-lots)  may  be  handled  through  nesting  within  the
LIN loop.
8  Listing of Appendices
8. 1  Appendix 1 — EDI Business Model
8. 2  Appendix 2 — EDI Transmission Flowchart
8. 3  Appendix 3 — New EDI Statistics (Definitions)
8. 4  Appendix 4 — EDI Transmission Components (863
Report of Test Results)
8. 5  Appendix 5 — Examples of EDI Transmissions
