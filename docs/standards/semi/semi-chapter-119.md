---
title: "P39-0304 - E2 © SEMI 2004..."
description: "SEMI标准文档"
sidebar_label: "P39-0304 - E2 © SEMI 2004..."
sidebar_position: 1190
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-119.pdf'
  chapter: 119
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/119.pdf"
  pdfSize="0.63MB"
  title="P39-0304 - E2 © SEMI 2004..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI P39-0304
E2
© SEMI 2004 4
Table 1  Unsigned-Integer Examples
Unsigned-Integer Value Binary Representation
0                                       00000000
127                                     01111111
128                                     10000000                                     00000001
16,383                                   11111111                                   01111111
16,384 10000000 10000000 00000001

7. 2.2  A signed-integer follows the same byte-continuation scheme as an unsigned-integer, and is stored in signed-
magnitude form, with the significand left-shifted one bit and the sign bit stored in the least significant bit of the low-
order (first) byte. A sign bit of 0 indicates a positive number, and a sign bit of 1 indicates a negative number. Both
representations of zero (+0 and -0) should be treated as numerically equivalent for the purposes of comparison.



Figure 2
Signed-Integer Representation

Table 2  Signed Integer Examples
Signed Integer Value Binary Representation
0                                       00000000
+1                                      00000010
−1                                      00000011
+63                                     01111110
−64                                     10000001                                     00000001
+8,191                                   11111110                                   01111111
−8,192 10000001 10000000 00000001

7. 2.3  EXCEPTION HANDLING  —    OASIS  processors  which  only  support  integer  data  in  a  restricted  space  (e.g.,
32-bit space) should treat any magnitude outside of this space as a fatal error.
7. 3  Reals
7. 3.1  A real  number  may  be  stored  in  one  of  several  rational  forms,  or  as  a  single-precision  4-byte  (ieee-4)    or
double-precision 8-byte (ieee-8) floating point value. The rational forms are usually more compact than the floating-
point  forms,  and  have  the  advantage  of  being  able  to  precisely  represent  many  values  which  can  only  be
approximated by the binary floating point representation. The type of representation is stored in an unsigned-integer
which precedes the significant portion of the real:


SEMI P39-0304
E2
© SEMI 2004 5
Table 3  Real Number Types
Format                                                                Meaning
‘0’ unsigned-integer Positive whole number
‘1’ unsigned-integer                                          Negative                                          whole                                          number
‘2’ unsigned-integer                                              Positive                                              reciprocal
‘3’ unsigned-integer                                             Negative                                             reciprocal
‘4’ unsigned-integer unsigned-integer                                    Positive                                    ratio
‘5’ unsigned-integer unsigned-integer                                   Negative                                   ratio
‘6’ IEEE-4-byte-float Single-precision floating point
‘7’ IEEE-8-byte-float Double-precision floating point

7. 3.2  In  types  0  and  1,  the  real  is  a  whole  number—its  fractional  portion  is  zero.  In  types  2  and  3,  the  unsigned-
integer represents the denominator of a reciprocal, with an implicit numerator of 1. Types 4 and 5 are ratios, with the
numerator listed first, followed by the denominator. Types 6 and 7 are binary floating point numbers in IEEE 754-
1985 format, with the least significant byte of the fraction (byte 0) stored first
.


Figure 3
IEEE Floating Point Formats

Table 4  Real Number Examples
Value Rational Form IEEE-4 Form
0. 0 00000000 00000000 00000110 00000000 00000000 00000000 00000000
1. 0 00000000 00000001 00000110 00000000 00000000 10000000 00111111
−0.5 00000011 00000010 00000110 00000000 00000000 00000000 10111111
0. 3125 00000100 00000101 00010000 00000110 00000000 00000000 10100000 00111110
1/3 00000010 00000011 00000110 10101011 10101010 10101010 00111110
−2/13 00000101 00000010 00001101 00000110 11011001 10001001 00011101 10111110

7. 3.3  EXCEPTION HANDLING  —    For  types  2–5,  a  denominator  of  0  should  be  treated  as  a  fatal  error.  A  type
outside the range of 0–7 should be treated as a fatal error.
7. 4  Strings
7. 4.1  A string is a sequence of zero or more bytes (“characters”) preceded by an unsigned-integer representing the
number of characters in the string:

string  ->  length byte*

Strings in OASIS are further sub-typed by semantic. A b-string (“binary string”) is a string which may contain any
combination  of  8-bit  character  codes  in  any  sequence.  An  a-string  (“ASCII  string”)  may  contain  only  printable
ASCII  character  codes  (hexadecimal  21-7E)  plus  the  SP  (space)  character  (hexadecimal  20),  in  any  sequence.  An
n-string (“name string”) may contain only printable ASCII character codes (hexadecimal 21-7E), and must have a
length greater than zero.


SEMI P39-0304
E2
© SEMI 2004 6
7. 4.2  The  set  of  printable  ASCII  characters  consists  of  hexadecimal  character  codes  21-7E.  In ascending order of
character code, we have:

!"#$%&’()*+,-./0123456789:;<=>?@       [21-40]
ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_‘       [41-60]
abcdefghijklmnopqrstuvwxyz{|}~         [61-7E]

This excludes space (SP), tabs (HT, VT), and all other control characters.
7. 4.3  EXCEPTION HANDLING
—    OASIS  processors  should  treat  illegal  characters  in  a-strings  or  n-strings  as
fatal errors. Zero-length n-strings should also be treated as fatal errors.
7. 5  Deltas
7. 5.1  A delta represents geometric data (coordinates, vectors, planar offsets, etc.).
7. 5.2  A 1-delta is  stored  as  a  signed-integer  and  represents  a  horizontal  or  vertical  displacement.  Bit  0  encodes
direction:  0  for  east  or  north,  1  for  west  or  south.  The  remaining  bits  are  the  magnitude.  Horizontal  or  vertical
alignment is implied by context.
7. 5.3  A 2-delta is  stored  as  an  unsigned-integer  and  represents  a  horizontal  or  vertical  displacement.  Bits  0-1
encode direction: 0 for east, 1 for north, 2 for west, and 3 for south. The remaining bits are the magnitude.
7. 5.4  A 3-delta is  stored  as  an  unsigned-integer  and  represents  a  horizontal,  vertical,  or  45-degree  diagonal
displacement.  Bits  0-2  encode  direction:  0  for  east,  1  for  north,  2  for  west,  3  for  south,  4  for  northeast,  5  for
northwest,  6  for  southwest,  and  7  for  southeast.  The  remaining  bits  are  the  magnitude  (for  horizontal  and  vertical
deltas) or the magnitude of the projection onto the x- or y-axis (for 45-degree deltas).
7. 5.5  A g-delta has two alternative forms and is stored either as a single unsigned-integer or as a pair of unsigned-
integers. The first form is indicated when bit 0 is zero, and represents a horizontal, vertical, or 45-degree diagonal
displacement, with bits 1-3 encoding direction, and the remaining bits storing the magnitude, in the same fashion as
a 3-delta.  The  second  form  represents  a  general (x,y) displacement and is a pair of unsigned-integers.  Bit  0  of  the
first  integer  is  1.  Bit  1  of  the  first  integer  is  the  x-direction  (0  for  east,  1  for  west).  The  remaining  bits  of  the  first
integer  represent  the  magnitude  in  the  x-direction.  Bit  0  of  the  second  integer  is  the  y-direction  (0  for  north,  1  for
south). The remaining bits of the second integer represent the magnitude in the y-direction. Both forms may appear
in a list of g-deltas.

Figure 4
Delta Types




SEMI P39-0304
E2
© SEMI 2004 7
Table 5  Delta Examples
Bit Pattern Type Meaning
11111001 00100011 1-delta
∆ = -2300
11111000 00100011 1-delta
∆ = +2300
10011000 00101010 2-delta
∆x = +1350
10011011 00101010 2-delta
∆y = -1350
11001101 00000001 3-delta
∆x = -25, ∆y = +25
11010111 00000111 3-delta
∆x = +122, ∆y = -122
11101001 00000011 01111010 g-delta
2

∆x = +122, ∆y = +61
11101100 00000101 g-delta
1

∆x = -46, ∆y = -46
10111011 00000001 10110111 00001111 g-delta
2

∆x = -46, ∆y = -987

7. 6  Repetitions
7. 6.1  A repetition  represents  an  “array”  of  cell  placements,  geometries,  or  text  elements.  The  repetition  is  part  of
the PLACEMENT, geometry,  or  TEXT  record  itself.  A  repetition  consists  of  an  unsigned-integer  which
encodes the type, followed by any related repetition parameters:
Table 6  Repetition Types
TYPE
Format
0
re-use the previous repetition definition
1 x-dimension y-dimension x-space y-space
2            x-dimension            x-space
3            y-dimension            y-space
4
x-dimension x-space
1
... x-space
N-1

5
x-dimension grid x-space
1
... x-space
N-1

6
y-dimension y-space
1
... y-space
M-1

7
y-dimension grid y-space
1
... y-space
M-1

8 n-dimension m-dimension n-displacement m-displacement
9            dimension            displacement
10
dimension displacement
1
... displacement
P-1

11
dimension grid displacement
1
... displacement
P-1


7. 6.1.1  x-dimension,  y-dimension,  x-space,  y-space,  dimension,  n-dimension,  m-dimension,  and  grid  are  all
unsigned-integers. displacement, n-displacement, and m-displacement are g-deltas.
7. 6.2  TYPE 0 indicates that the previous repetition description, stored in modal variable repetition, is to be re-used.
(See Section 10 on page 11.) No additional values are stored with this type.
7. 6.3  TYPE  1  is an N-column (N > 1) by M-row (M > 1) matrix  with  uniform  horizontal  and  vertical  spacing
between the elements. x-dimension is N - 2 and y-dimension is M - 2. The (x-offset, y-offset) (cumulative spacing
in  the  (horizontal,vertical)  direction)  of  element  (i,j)  of  the  repetition  (i  =  0,  ...,  N-1  and  j  =  0,  ...,  M-1)  is
(i * x-space, j * y-space).
7. 6.4  TYPE 2 is  an  N-column  (N  >  1)  by  1-row vector with uniform horizontal spacing between the elements. x-
dimension is N - 2. The (x-offset, y-offset) (cumulative spacing in the (horizontal,vertical) direction) of element i of
the repetition (i = 0, ..., N-1) is (i * x-space, 0).
7. 6.5  TYPE  3  is  a  1-column  by  M-row  (M  >  1)  vector  with  uniform  vertical  spacing  between  the  elements.  y-
dimension is M - 2. The (x-offset, y-offset) (cumulative spacing in the (horizontal,vertical) direction) of element j of
the repetition (j = 0, ..., M-1) is (0, j * y-space).


SEMI P39-0304
E2
© SEMI 2004 8
7. 6.6  TYPE 4 is an N-column (N > 1) by 1-row vector with (potentially) non-uniform horizontal spacing between
the elements. x-dimension is N - 2. The (x-offset, y-offset) (cumulative spacing in the (horizontal,vertical) direction)
of element i of the repetition (i = 0, ..., N-1) is (x-space
0
+ ... + x-space
i
, 0), with x-space
0
= 0.
7. 6.7  TYPE 5 is identical to TYPE 4, except that all offset values must be multiplied by grid during expansion of
the repetition.
7. 6.8  TYPE 6 is a 1-column by M-row (M > 1) vector with (potentially) non-uniform vertical spacing between the
elements. y-dimension is M - 2. The (x-offset, y-offset) (cumulative spacing in the (horizontal,vertical) direction) of
element j of the repetition (j = 0, ..., M-1) is (0, y-space
0
+ ... + y-space
j
), with y-space
0
= 0.
7. 6.9  TYPE 7 is identical to TYPE 6, except that all offset values must be multiplied by grid during expansion of
the repetition.
7. 6.10  TYPE  8  is  an  N  (N  >  1)  by  M  (M  >  1)  repetition  with  uniform  and  (potentially)  diagonal  displacements
between  the  elements.  n-dimension  is  N  -  2  and  m-dimension  is  M  -  2.  Defining  n-displacement  in  terms  of  its
components nx-space and ny-space (and similarly for m-displacement), the (x-offset, y-offset) (cumulative spacing
in  the  (horizontal,vertical)  direction)  of  element  (i,j)  of  the  repetition  (i  =  0,  ...,  N-1  and  j  =  0,  ...,  M-1)  is
(i * nx-space + j * mx-space, i * ny-space + j * my-space).
7. 6.11  TYPE 9 is a P-element (P > 1) repetition with uniform and (potentially) diagonal displacements between the
elements. dimension is P - 2. Defining displacement in terms of its components x-space and y-space, the (x-offset,
y-offset) (cumulative spacing in the (horizontal,vertical) direction) of element k of the repetition (k = 0, ..., P-1) is
(k * x-space, k * y-space).
7. 6.12  TYPE  10  is  a  P-element  (P  >  1)  repetition  with  (potentially)  non-uniform  and  arbitrary  two-dimensional
displacements  between  the  elements.  dimension  is  P  -  2.  Defining  displacement
k
in  terms  of  its  components  x-
space
k
and y-space
k
, the (x-offset, y-offset) (cumulative spacing in the (horizontal,vertical) direction) of element k
of the repetition (k = 0, ..., P-1) is (x-space
0
+ ... + x-space
k
, y-space
0
+ ... + y-space
k
) with x-space
0
= y-space
0
=
0).
7. 6.13  TYPE 11 is identical to TYPE 10, except that all offset values must be multiplied by grid during expansion
of the repetition.



SEMI P39-0304
E2
© SEMI 2004 9

Figure 5
Repetition Types

7. 6.14  EXCEPTION HANDLING
— A repetition type outside the range of 0 to 11 should be treated as a fatal error.
A repetition type of 0 may not be the first repetition type used within a cell.
7. 7  Point Lists
7. 7.1  A point-list  represents  a  list  of  geometric  coordinates  for  polygons  or  paths,  and  consists  of  an  unsigned-
integer denoting its type, followed by a list of deltas, in one of several formats. The initial vertex at (x,y) is supplied
by  the  POLYGON  or  PATH  record  and  is  not  part  of  the  point-list; vertex-count  (an  unsigned-integer)  is  the
number of points or deltas, excluding the initial vertex and any implicit vertices
.
Table 7  Point List Types
Type                                           Format                                           Description
0
vertex-count [ 1-delta [ ... 1-delta ] ] Implicit manhattan delta point-list (horizontal-first)
1
vertex-count [ 1-delta [ ... 1-delta ] ] Implicit manhattan delta point-list (vertical-first)
2
vertex-count [ 2-delta [ ... 2-delta ] ] Explicit manhattan delta point-list
3
vertex-count [ 3-delta [ ... 3-delta ] ] Explicit octangular delta point-list
4
vertex-count [ g-delta [ ... g-delta ] ] Explicit all-angle delta point-list
5
vertex-count [ g-delta [ ... g-delta ] ] Explicit all-angle double-delta point-list

7. 7.2  A point-list  of  type  0  consists  of  a  list  of  1-deltas,  representing  alternating  horizontal  and  vertical  relative
displacements, with the first displacement implicitly horizontal
. When describing a polygon point-list in this form,
the final  two  displacements  are  omitted,  since  they  can  be  unambiguously  implied  from  the  current  point,  the  last


SEMI P39-0304
E2
© SEMI 2004 10
edge, and the starting point. When describing a polygon, vertex-count must be an even number greater than or equal
to 2.
7. 7.3  A point-list  of  type  1  consists  of  a  list  of  1-deltas,  representing  alternating  vertical  and  horizontal  relative
displacements, with the first displacement implicitly vertical
. When describing a polygon point-list in this form, the
final two displacements are omitted, since they can be unambiguously implied from the current point, the last edge,
and the starting point. When describing a polygon, vertex-count must be an even number greater than or equal to 2.
7. 7.4  A point-list of type 2 consists of a list of 2-deltas, representing a series of manhattan relative displacements.
When describing a polygon point-list in this form, the final displacement is omitted, since the polygon is assumed to
be  implicitly  closed,  but  this  final  implicit  displacement  must  be  a  manhattan  displacement,  with  either  ∆x  =  0  or
∆y = 0.
7. 7.5  A point-list of type 3 consists of a list of 3-deltas, representing a series of octangular relative displacements.
When describing a polygon point-list in this form, the final displacement is omitted, since the polygon is assumed to
be implicitly closed, but this final implicit displacement must be an octangular displacement at an angle that is an
integral multiple of 45°.
7. 7.6  A point-list  of  type  4  consists  of  a  list  of  g-deltas,  representing  a  series  of  any-angle  relative  displacements.
When describing a polygon point-list in this form, the final displacement is omitted, since the polygon is assumed to
be implicitly closed.
7. 7.7  A point-list  of  type  5  consists  of  a  list  of  g-deltas,  representing  a  series  of  adjustments  to  a  relative
displacement vector, with the initial vector set to (
∆x = 0, ∆y = 0). To calculate the coordinates of each successive
point, the x and y components of each successive g-delta are added to the relative displacement vector, which in turn
describes the relative displacement from the current point to the next point. When describing a polygon point-list in
this form, the final displacement is omitted, since the polygon is assumed to be implicitly closed. This form of point-
list is intended to allow more compact representation of polygons and paths which are approximations of large-field
curvilinear figures on a fine grid, where the curvature is not extreme.


Figure 6
Point List Describing Polygons

Table 8  Polygon Point List for Figure 6
Type                                                                               Bit                                                                               Pattern
0 00000000 00000100 00001100 00001000 00010001 00000101
1 00000001 00000100 00010001 00000100 00000100 00000100
2 00000010 00000101 00100000 00011001 00010010 00001011 00010010
3 00000011 00000100 00010101 00100001 00110000 00010011
4 00000100 00000010 01000100 00001001 00001101
5 00000101 00001001 00000001 00000011 00101001 00000000 00000001 00000100
00000001 00000011 00000001 00000011 00101011 00000100 00101011 00000000
00000001 00000011 00000001 00000011


SEMI P39-0304
E2
© SEMI 2004 11
7. 7.8  EXCEPTION HANDLING  —  A  point-list  type  outside  the  range  of  0  to  5  should  be  treated  as  a  fatal  error.
For point-list  types  0-1,  successive  coincident  points  and/or  adjacent  colinear  edges  are  not  permitted.  A  non-
manhattan implicit closing vector for a polygon using point-list type 2, or a non-octangular implicit closing vector
for  a  polygon  using  point-list  type  3  should  be  treated  as  a  fatal  error.  For  polygons  using  point-list  types  0-1,  a
vertex count which is odd or less than 2 should be treated as a fatal error.
7. 8  Property Values
7. 8.1  A property-value stores one element of a property value list. It consists of an unsigned-integer which encodes
its type, followed by either the value itself or a reference number. Types 0-7 are reals which conform to the scheme
described in Table 3 on page 5.
Table 9  Property Value Types
Type                                               Format
0-7 real (see Table 3)
8
unsigned-integer
9
signed-integer
10
a-string
11
b-string
12
n-string
13 propstring-reference-number (implied a-string)
14 propstring-reference-number (implied b-string)
15 propstring-reference-number (implied n-string)

7. 8.2  EXCEPTION HANDLING — A property-value type outside the range of 0 to 15 should be treated as a fatal
error.  Use  of  a  propstring-reference-number  for  which  there  is  no  corresponding  PROPSTRING record  within
the same OASIS file should be treated as a fatal error.
8  CELL Referencing
8. 1  As  in  GDSII  Stream,  cells  in  OASIS  are  identified  by  name
.  The  CELL  record  not  only  introduces  a  cell
definition  but  also  defines  its  name.  PLACEMENT  records  refer  by  name  to  the  cell  being  placed.  As  in  GDSII
Stream, there are no “anonymous” cells in OASIS.
9  Layers, Datatypes, and Texttypes
9. 1  As in GDSII Stream, every geometry has associated with it a layer number and a datatype number and every
text element has associated with it a textlayer number and a texttype number.
10  Modal Variables
10. 1  For compaction purposes, selected data elements in many OASIS records may be implicitly specified through
the use of modal variables or stored state. At the beginning of the file, and whenever a CELL or name record is
encountered,  all  modal  variables  with  the  exception  of  placement-x, placement-y, geometry-x, geometry-y, text-x,
and text-y, are set to a state of undefined; the exceptions just mentioned are set to 0. As various elements appear in
the cell’s description, modal variables related to those elements are set from the elements’ definitions. These modal
variables  can  then  be  used  implicitly  by  successive  elements.  A  modal  variable  may  hold  a  single  value  such  as
geometry-w, or a multi-variable structure such as a repetition.


SEMI P39-0304
E2
© SEMI 2004 12
Table 10  Modal Variables
Modal Variables Related Records
repetition
PLACEMENT, TEXT, POLYGON, PATH,
RECTANGLE, TRAPEZOID, CTRAPEZOID,
CIRCLE, XGEOMETRY
placement-x, placement-y, placement-cell
PLACEMENT
layer, datatype POLYGON, PATH, RECTANGLE, TRAPEZOID,
CTRAPEZOID, CIRCLE, XGEOMETRY
textlayer, texttype, text-x, text-y, text-string
TEXT
geometry-x, geometry-y
POLYGON, PATH, RECTANGLE, TRAPEZOID
CTRAPEZOID, CIRCLE, XGEOMETRY
xy-mode
PLACEMENT, TEXT, POLYGON, PATH,
RECTANGLE, TRAPEZOID, CTRAPEZOID,
CIRCLE, XGEOMETRY, XYABSOLUTE,
XYRELATIVE
geometry-w, geometry-h
RECTANGLE, TRAPEZOID, CTRAPEZOID
polygon-point-list
POLYGON
path-halfwidth, path-point-list, path-start-extension,
path-end-extension
PATH
ctrapezoid-type
CTRAPEZOID
circle-radius
CIRCLE
last-property-name, last-value-list
PROPERTY

10. 2  Modal variable xy-mode governs the interpretation of the x and y fields for those related record types indicated
in  Table  10.  Two  interpretation  modes  are  provided:  absolute  and  relative.  See  Section  21  on  page  17  for  a
discussion of how these two modes work.
10. 3  EXCEPTION HANDLING
— An OASIS record which implicitly references a modal variable which is in the
undefined state should be treated as a fatal error.
11  Records
11. 1  The  basic  unit  of  information  in  an  OASIS  file  is  a  record.  A  record  consists  of  a  single  unsigned-integer
which  encodes  the  record-ID,  followed  by  the  remainder  of  the  record’s  descriptive  data.  In  this  specification,
record-ID values are displayed as decimal numbers enclosed in apostrophes.
11. 2  The CBLOCK  record  is  a  special  case  since  it  encapsulates  a  series  of  ordinary  records  in  byte-compressed
form. When a CBLOCK record is encountered while reading an OASIS file, it is first necessary to decompress its
data,  which  will  produce  one  or  more  ordinary  records,  which  can  in  turn  be  decoded.  For  more  information  on
CBLOCK records refer to Section 35 on page 26.
11. 3  Most records have an implicit length—the record must be parsed and decoded in order to determine its length.
The XNAME, XELEMENT, and XGEOMETRY records are exceptions to this. They encapsulate all of their user-
defined  data  in  a  single  variable-length  b-string,  so  they  can  be  used  for  prototyping  new  record  types,  hiding
embedded  proprietary  data,  supporting  local  non-interoperable  extensions,  etc.  without  rendering  an  OASIS  file
illegible to older readers, which can simply note the string length and skip over the record.
11. 4  EXCEPTION HANDLING
— OASIS processors should treat the nesting of a CBLOCK record within another
CBLOCK record as a fatal error.
12  PAD Record
12. 1  A PAD record provides a simple way to reserve space within an OASIS file. It has the following format:

‘0’


SEMI P39-0304
E2
© SEMI 2004 13

12. 2  PAD records may be inserted between any other two records.
12. 3  EXCEPTION HANDLING
—  The  presence  of  a  PAD  record  before  the  START  record  or  after  the  END
record should be treated as a fatal error.
13  START Record
13. 1  A START  record  identifies  the  beginning  of  an  OASIS  file,  and  immediately  follows  the  magic-bytes
sequence described in Section 6.4 on page 3. It has the following format:

‘1’ version-string unit offset-flag [ table-offsets ]

13. 2  The version-string  is  an  a-string  whose  value  is  “1.0”  for  this  version  of  the  OASIS  specification.  Version
“1.0” corresponds to the OASIS format as described in this document.
13. 3  The unit  declaration  is  a  positive
real  number  which  specifies  the  global  precision  of  the  OASIS  file’s
coordinate system in grid steps per micron. The OASIS unit value is essentially the reciprocal of the first value in
the GDSII Stream UNITS record.
13. 4  offset-flag (an unsigned-integer) is 0 when the table-offsets structure is stored in the START record; offset-
flag is 1 when the table-offsets structure is instead stored in the END record. The option of storing table-offsets in
the END record is provided to make it possible to write an OASIS file sequentially, with no seek-and-update access
required, while still providing cell-level random-access capability for subsequent readers of that OASIS file.
13. 5  The table-offsets  structure  consists  of  6  pairs  of  unsigned-integers.  Each  pair  consists  of  a  flag  field,  and  a
corresponding byte-offset field, in the following order:
Table 11  Table Offset Order
Flag                                      Byte-Offset
cellname-flag                            cellname-offset
textstring-flag                           textstring-offset
propname-flag                          propname-offset
propstring-flag                          propstring-offset
layername-flag                         layername-offset
xname-flag                               xname-offset

13. 6  Each  of  the  flag  fields  is  either  1,  indicating  strict  mode,  or  0,  indicating  non-strict  mode,  for  its  respective
table.  The  corresponding  byte-offset  field  indicates  the  position  of  the  first  record  of  its  respective  table  relative  to
the first byte (byte 0) of the OASIS file. A byte-offset of 0 indicates the absence of that particular table.
13. 7  In non-strict  mode,  records  of  the  corresponding  type  may  occur  anywhere  in  the  file,  even  if  some  of  them
have been gathered into a table pointed to by the corresponding byte-offset.
13. 8  In strict  mode,  all
records  of  the  corresponding  type  (plus  any  associated  PROPERTY  records)  have  been
gathered into a single contiguous table pointed to by the corresponding byte-offset. PAD records are also permitted
in strict  mode  tables.  In  addition,  strict  mode  guarantees
that  all  references  to  the  corresponding  class  of  objects
(names, strings, or cells) are made exclusively by reference-number.
13. 9  When  a  given  strict  mode  table  has  been  encapsulated  within  one  or  more  CBLOCK  records,  the
corresponding byte-offset  should  point  to  the  first  byte  of  the  first  CBLOCK  record  containing  that  table,  and  the
first  record  of  the  table  must  be  the  first  record  which  appears  after  decompression  of  the  CBLOCK  record.
Adherence to this requirement means that it is not permissible to encapsulate more than one strict mode table within
a single CBLOCK record, nor is it permissible to begin a strict mode table in the middle of a CBLOCK record.
13. 10  EXCEPTION HANDLING
— The absence of a START record as the first record in an OASIS file should be
treated  as  a  fatal  error.  A  value  of  unit  which  is  NaN, Inf,  or  non-positive,  should  also  be  treated  as  a  fatal  error.
When a given table offset is nonzero and the table is flagged as strict, the presence of a “stray” record of that type


SEMI P39-0304
E2
© SEMI 2004 14
located  discontiguously  from  its  tabular  group  should  be  treated  as  a  fatal  error,  and  any  records  which  fail  to  use
reference-number access for that class of objects should be treated as a fatal error. An OASIS reader which does not
rely  on  any  of  the  record  grouping,  reference-number,  and  byte-offset  guarantees  provided  by  strict  mode  is  not
required to detect and report any exceptions related to strict mode.
14  END Record
14. 1  An END  record  identifies  the  end  of  the  OASIS  file.  The  END  record  must  be  the  last  record  in  the  file;  no
trailing bytes are permitted. It has the following format:

‘2’ [ table-offsets ] padding-string validation-scheme [ validation-signature ]

14. 2  The presence of the table-offsets structure is governed by offset-flag in the START record (see Section 13 on
page  13).  The  padding-string  (a  b-string)  must  be  sized  and  inserted  by  the  OASIS  writer  so  that  the  total  byte
length of the END record, including the record-ID, is exactly 256 bytes. This makes it possible for an OASIS reader
to find the END record (and any table-offsets and validation-signature) using a relative seek from the logical end-
of-file, avoiding the need to store a forward pointer in the START record. The contents of padding-string should
be initialized to NUL characters.
14. 3  validation-scheme is an unsigned-integer which selects the validation scheme used, and validation-signature
is  an  optional  scheme-dependent  group  of  bytes  used  for  validating  the  integrity  of  the  OASIS  file.  The  following
validation schemes are defined:
Table 12  END Record Validation Schemes
Scheme               Description               Validation Signature Length
0            No            Validation            0
1            CRC32            4
2            CHECKSUM32            4

14. 4  CRC32 Validation
14. 4.1  The CRC32 polynomial is specified in ISO 3309:

x
32
+ x
26
+ x
23
+ x
22
+ x
16
+ x
12
+ x
11
+ x
10
+ x
8
+ x
7
+ x
5
+ x
4
+ x
2
+ x
1
+ x
0


With the left-most bit representing the most significant bit, this corresponds to a value of:

binary  1 0000 0100 1100 0001 0001 1101 1011 0111
hexadecimal              104c11db7

14. 4.2  The  CRC32  value  is  computed  using  all  of  the  bytes  in  the  OASIS  file  from  the  first  byte  of  the  START
record  to  the  END  record’s  validation-scheme  integer.  It  is  byte-order  dependent.  The  resulting  32-bit  word  is
stored  in  the  last  4  bytes  of  the  file,  with  the  least  significant  byte  first.  This  calculation  is  usually  implemented
using a table-lookup shift/XOR method. See Appendix 1 for sample C-language source code.
14. 5  CHECKSUM32 Validation
14. 5.1  The  CHECKSUM32  validation  signature  is  computed  as  a  simple  unsigned  arithmetic  summation  of  all  of
the  bytes  in  the  OASIS  file  from  the  first  byte  of  the  START  record  to  the  END  record’s  validation-scheme
integer. This value is then truncated to its least significant 32 bits and stored in the last 4 bytes of the file, with the
least  significant  byte  first.  It  is  not  byte-order  dependent,  and  this  characteristic  makes  it  somewhat  easier  to
calculate if the file is not written sequentially. It is, however, far less effective than CRC32 for detecting errors. See
Appendix 1 for sample C-language source code.
14. 6  EXCEPTION HANDLING
— OASIS processors should treat the absence of an END record in an OASIS file
as a fatal error.


SEMI P39-0304
E2
© SEMI 2004 15
15  CELLNAME Record
15. 1  A CELLNAME record associates the name of a cell with a unique reference number. This allows CELL and
PLACEMENT records, if desired, to avoid redundantly storing the actual text of the cell name and instead refer to
the cell by its assigned reference number. It has the following format:

‘3’              cellname-string
‘4’ cellname-string reference-number

15. 2  cellname-string  is  an  n-string  which  holds  the  cell  name.  The  reference-number  is  an  unsigned-integer
which  is  either  implicitly  or  explicitly  assigned  to  the  cell.  Implicit  assignment  occurs  in  record  type  ‘3’,  by
assigning  sequential  reference  numbers  beginning  with  0  as  each  successive  CELLNAME  record  is  encountered.
Explicit assignment occurs in record type ‘4’.
15. 3  Two standard properties, S_BOUNDING_BOX and S_CELL_OFFSET (described in Section A2-2 on page
36), may be associated with each CELLNAME record. When all CELLNAME records have been grouped into a
single contiguous table in strict mode (as described in Section 13 on page 13), with an S_CELL_OFFSET property
for every CELLNAME record, the table forms a complete index of all cells in the OASIS file, suitable for random
access.
15. 4  Record types ‘3’ and ‘4’ may not both be used in the same OASIS file.
15. 5  EXCEPTION  HANDLING
—  The  appearance  of  two  CELLNAME  records  in  the  same  file  with  the  same
number  but  different  names,  or  two  CELLNAME records  in  the  same  file  with  the  same  name  but  different
numbers, should be treated as a fatal error. The appearance of both record types ‘3’ and ‘4’ in the same OASIS file
should  be  treated  as  a  fatal  error.  The  presence  of  more  than  one  S_CELL_OFFSET  or  S_BOUNDING_BOX
property after a given CELLNAME record should be treated as a fatal error.
16  TEXTSTRING Record
16. 1  A TEXTSTRING record associates a text string with a unique reference number. This allows TEXT records,
if  desired,  to  avoid  redundantly  storing  the  actual  text  of  the  string  and  instead  refer  to  the  string  by  its  assigned
reference number. It has the following format:

‘5’              text-string
‘6’ text-string reference-number

16. 2  text-string is an a-string which holds the text string. The reference-number is an unsigned-integer which is
either implicitly or explicitly assigned to the text string. Implicit assignment occurs in record type ‘5’, by assigning
sequential  reference  numbers  beginning  with  0  as  each  successive  TEXTSTRING  record  is  encountered.  Explicit
assignment occurs in record type ‘6’.
16. 3  Record types ‘5’ and ‘6’ may not both be used in the same OASIS file.
16. 4  EXCEPTION HANDLING
— The appearance of two TEXTSTRING records in the same file with the same
number  but  different  names,  or  two  TEXTSTRING records  in  the  same  file  with  the  same  name  but  different
numbers, should be treated as a fatal error. The appearance of both record types ‘5’ and ‘6’ in the same OASIS file
should be treated as a fatal error.
17  PROPNAME Record
17. 1  A PROPNAME  record  associates  the  name  of  a  property  with  a  unique  reference  number.  This  allows
PROPERTY records, if desired, to avoid redundantly storing the actual text of the property name and instead refer
to the property name by its assigned reference number. It has the following format:

‘7’              propname-string
‘8’ propname-string reference-number



SEMI P39-0304
E2
© SEMI 2004 16
17. 2  propname-string  is  an  n-string  which  holds  the  property  name.  The  reference-number  is  an  unsigned-
integer which is either implicitly or explicitly assigned to the property name. Implicit assignment occurs in record
type  ‘7’,  by  assigning  sequential  reference  numbers  beginning  with  0  as  each  successive  PROPNAME record  is
encountered. Explicit assignment occurs in record type ‘8’.
17. 3  Record types ‘7’ and ‘8’ may not both be used in the same OASIS file.
17. 4  EXCEPTION  HANDLING
—  The  appearance  of  two  PROPNAME records  in  the  same  file  with  the  same
number  but  different  names,  or  two  PROPNAME records  in  the  same  file  with  the  same  name  but  different
numbers, should be treated as a fatal error. The appearance of both record types ‘7’ and ‘8’ in the same OASIS file
should be treated as a fatal error.
18  PROPSTRING Record
18. 1  A PROPSTRING   record   associates   a   property   string   with   a   unique   reference   number.   This   allows
PROPERTY records, if desired, to avoid redundantly storing the actual text of the property string and instead refer
to the property string by its assigned reference number. It has the following format:

‘9’              prop-string
‘10’ prop-string reference-number

18. 2  prop-string is an a-string, b-string , or n-string which holds the property string, depending on the referencing
PROPERTY record. The reference-number is an unsigned-integer which is either implicitly or explicitly assigned
to  the  property  string.  Implicit  assignment  occurs  in  record  type  ‘9’,  by  assigning  sequential  reference  numbers
beginning  with  0  as  each  successive  PROPSTRING record  is  encountered.  Explicit  assignment  occurs  in  record
type ‘10’.
18. 3  Record types ‘9’ and ‘10’ may not both be used in the same OASIS file.
18. 4  EXCEPTION HANDLING
— The appearance of two PROPSTRING records in the same file with the same
number but different names should be treated as a fatal error. The appearance of both record types ‘9’ and ‘10’ in the
same OASIS file should be treated as a fatal error.
19  LAYERNAME Record
19. 1  A LAYERNAME  record  provides  a  means  of  mapping  numeric  (layer,datatype)  and  (layer,texttype)
combinations to layer names. It has the following format:

‘11’ layername-string layer-interval datatype-interval
‘12’              layername-string              textlayer-interval texttype-interval

19. 2  Record type ‘11’ maps a range of (layer,datatype) numbers to a layer name, and record type ‘12’ maps a range
of (textlayer,texttype) numbers to a layer name.
19. 3  layername-string is an n-string containing the layer name.
19. 4  Each  of  the  interval  fields  consists  of  an  unsigned-integer  denoting  the  interval  type,  followed  by  0,  1,  or  2
unsigned-integers representing the bounds of that interval as follows:
Table 13  LAYERNAME Interval Types
Type                 Bounds                 Implied                 Range
0
0 to ∞
1
bound-a
0 to bound-a
2
bound-a
bound-a to ∞
3
bound-a                     bound-a
4
bound-a bound-b
bound-a to bound-b



SEMI P39-0304
E2
© SEMI 2004 17
19. 5  LAYERNAME records may be repeated for the same layer name. The complete mapping for a layer name is
formed by the union of all layer, datatype, textlayer, and texttype ranges associated with that name.
20  CELL Record
20. 1  A CELL record introduces a cell definition. It has the following format:

‘13’              reference-number
‘14’              cellname-string

20. 2  In  record  type  ‘13’,  reference-number  is  an  unsigned-integer referring  to  a  CELLNAME  record  where  the
cell  name  is  stored.  In  record  type  ‘14’,  cellname-string  stores  the  cell  name  locally.  In  either  representation,  the
cell name must be an n-string.
20. 3  All subsequent records in the file up to the next CELL, END, or name record are considered to be part of
that cell.
20. 4  EXCEPTION HANDLING
— Use of a reference-number for which there is no corresponding CELLNAME
record  within  the  same  OASIS  file  should  be  treated  as  a  fatal  error.  Multiple  CELL  records  within  a  single  file
which refer to the same cell name (in effect, a duplicate cell definition) should also be treated as a fatal error.
21  XYABSOLUTE & XYRELATIVE Records
21. 1  The XYABSOLUTE and XYRELATIVE records control the value of modal variable xy-mode, which in turn
governs  the  interpretation  of  the  x  and  y  values  found  in  PLACEMENT, geometry,  and  TEXT  records.  They
consist simply of a record-ID with no additional fields:

‘15’              =              XYABSOLUTE
‘16’              =              XYRELATIVE

21. 2  When each CELL record is encountered, modal variable xy-mode is set to absolute, and related modal position
variables placement-x, placement-y, geometry-x, geometry-y, text-x,  and  text-y  are  set  to  0.  The  presence  of  an
XYRELATIVE record forces modal variable xy-mode  to  relative, and the presence of an XYABSOLUTE record
forces modal variable xy-mode to absolute. This mode may be changed any number of times within a cell definition.
21. 3  In absolute mode, explicit x and y values, when present, are used directly as the actual (x,y) coordinates.
21. 4  In relative  mode,  explicit  x  and  y  values,  when  present,  are  interpreted  as  relative  displacements  from  the
stored  position  information  in  modal  variables  placement-x, placement-y, geometry-x,
geometry-y, text-x,  or  text-y,
depending on the record type in which they occur. In this mode, the actual x-coordinate is computed as the sum of
the x value and its corresponding modal position variable, and the actual y-coordinate is computed as the sum of the
y value and its corresponding modal position variable.
21. 5  In both absolute and relative modes, when an x or y value is not explicitly present in the record, the value of
the  corresponding  modal  position  variable  is  used  for  the  actual  x  or  y  coordinate.  In  both  absolute  and  relative
modes, the corresponding modal position variables are always updated with the actual (x,y) coordinate position.
21. 6  The interpretation of point-lists and repetitions does not depend on absolute or relative mode. Also, even when
a  given  element  includes  a  repetition,  the  corresponding  modal  position  variables  (placement-x, placement-y,
geometry-x, geometry-y, text-x, or text-y) are always updated with the actual (x,y) coordinate of the initial element.
22  PLACEMENT Record
22. 1  A PLACEMENT record describes one or more placements of the referenced cell within the current cell. It has
the following format:

‘17’ placement-info-byte [ reference-number | cellname-string ] [ x ] [ y ] [ repetition ]
‘18’ placement-info-byte [ reference-number | cellname-string ] [ magnification ] [ angle ]
[ x ] [ y ] [ repetition ]


SEMI P39-0304
E2
© SEMI 2004 18

22. 2  In record type ‘17’, placement-info-byte contains the bit pattern ‘CNXYRAAF’.
22. 3  In record type ‘18’, placement-info-byte contains the bit pattern ‘CNXYRMAF’.
22. 4  When C = 1, the cell reference is explicit, in which case N = 1 means that reference-number (an unsigned-
integer) is present, and refers to a CELLNAME record where the cell name is stored; N = 0 means that cellname-
string (an n-string) is present and stores the cell name locally. When C = 0, N is ignored, and the value of modal
variable placement-cell is used, referring to the same cell as the previous PLACEMENT record.
22. 5  x  and  y  are  signed-integer  coordinates  representing  either  the  absolute  or  the  relative  (x,y)  location  of  the
placement. X  is  1  if  x  is  present,  and  Y  is  1  if  y  is  present.  When  either  x  or  y  is  unspecified,  the  value  of  modal
variable placement-x or placement-y, respectively, is used instead. Refer to Section 21 on page 17 for a discussion of
how absolute and relative modes affect the interpretation of x and y.
22. 6  R is 1 if repetition is present. F = 1 indicates reflection (or flip) about the x-axis; F = 0 indicates no flip.
22. 7  In record type ‘17’, magnification is 1.0 and rotation is a counterclockwise integral multiple of 90°: AA = 0 for
0°,
AA = 1 for 90°, AA = 2 for 180°, and AA = 3 for 270°.
22. 8  In record type ‘18’, magnification and rotation are reals; angle is dimensioned in degrees, with positive values
denoting a counterclockwise rotation; magnification is, of course, unitless. A is 1 if angle is present, otherwise the
rotation defaults to 0°. M is 1 if magnification is present, otherwise the magnification defaults to 1.0.
22. 9  Each successive PLACEMENT record updates all placement-related modal variables.
22. 10  EXCEPTION HANDLING
— Use of a reference-number for which there is no corresponding CELLNAME
record  should  be  treated  as  a  fatal  error.  Any  recursive  cell  reference  (a  cell  placing  a  copy  of  itself  within  itself)
should be treated as a fatal error. Magnification values which are negative or zero should be treated as fatal errors.
Floating  point  values  of  NaN   or   Inf   for   either   magnification   or   angle   should   be   treated   as   fatal   errors.
PLACEMENT records may refer to CELL records regardless of their relative location within the file, and may also
refer to external cells which are not defined in the same file.
23  Placement Transform Representation
23. 1  EDA applications generally define a placement transform as a 3×3 matrix:
T =
X00 X01 0
X10 X11 0
X20 X21 1

which  transforms  any  point  (p,q)  via  left-multiplication  by  the  1×3  row  matrix  [  p  q  1  ].  Conversion  of  OASIS
placement data to this form is defined as follows:

X00 = cos( angle ) * magnification
X01 = sin( angle ) * magnification
X10 = -f * sin( angle ) * magnification
X11 = +f * cos( angle ) * magnification
X20 = x
X21 = y

where f = 1 if F = 0, f = -1 if F = 1, “angle” is the rotation angle given by either AA or angle in the PLACEMENT
record, and “magnification” is magnification if specified, else 1.0. Note that if the rotation is a multiple of 90° and
the  magnification  is  1.0,  then  the  upper  2×2  sub-matrix  takes  one  of  the  following  eight  forms  and  OASIS
processors may optimize accordingly:



SEMI P39-0304
E2
© SEMI 2004 19
Table 14  Standard Placement Values
F            angle           X00           X01           X10           X11
0              0°              +1              0               0              +1
1              0°              +1              0               0              −1
0             90°             0              +1             −1              0
1             90°             0              +1             +1              0
0            180°            −1              0               0              −1
1            180°            −1              0               0              +1
0            270°            0            −1             +1              0
1            270°            0            −1 −1              0

23. 2  When repetition  is  present,  the  above  transform  is  that  of  the  first  element  of  the  repetition.  In  general,  the
transform of any element E of the repetition is computed by right-multiplying the transform of the first element by
the matrix:
1
0
x-offset
0
1
y-offset
0
0
1
S =

to yield:
X00
X10
(X20 +
x-offset
)
X01
X11
(X21 +
y-offset
)
0
0
1


(Refer to Section 7.6.3 and subsequent paragraphs beginning on page 7 for a discussion of how x-offset and y-offset
are determined for the various repetition types.)
24  TEXT Record
24. 1  A TEXT record represents a text element, consisting of an (x,y) coordinate point and an annotation string. It
has the following format:

‘19’ text-info-byte [ reference-number | text-string] [ textlayer-number ] [ texttype-number ]
[ x ] [ y ] [ repetition ]

24. 2  The text-info-byte contains the bit pattern ‘0CNXYRTL’.
24. 3  When C = 1, the text reference is explicit, in which case N = 1 means that reference-number (an unsigned-
integer)  is  present,  and  refers  to  a  TEXTSTRING record  where  the  text  string  is  stored;  N =  0  means  that  text-
string (an a-string) is present and stores the text string locally. When C = 0, N is ignored, and the value of modal
variable text-string is used instead.
24. 4  x and y are signed-integer coordinates representing either the absolute or the relative (x,y) location of the text
element. X  is  1  if  x  is  present,  and  Y  is  1  if  y  is  present.  When  either  x  or  y  is  unspecified,  the  value  of  modal
variable text-x  or  text-y,  respectively,  is  used  instead.  Refer  to  Section  21  on  page  17  for  a  discussion  of  how
absolute and relative modes affect the interpretation of x and y.
24. 5  R  is  1  if  repetition
is  present.  L  is  1  if  textlayer-number  is  present.  T  is  1  if  texttype-number  is  present.
Both textlayer-number  and  texttype-number  are  unsigned-integers.  When  textlayer-number  and/or  texttype-
number are unspecified, they assume the value of modal variables textlayer and texttype, respectively.
24. 6  Each successive TEXT record updates all text-related modal variables.


SEMI P39-0304
E2
© SEMI 2004 20
24. 7  EXCEPTION   HANDLING   —   Use   of   a   reference-number   for   which   there   is   no   corresponding
TEXTSTRING record within the same OASIS file should be treated as a fatal error. Implicit use of modal variables
textlayer or texttype when they are in the undefined state should be treated as a fatal error.
25  RECTANGLE Record
25. 1  A RECTANGLE record represents a rectangular figure whose edges are parallel to the x- and y-axes. It has
the following format:

‘20’ rectangle-info-byte [ layer-number ] [ datatype-number ] [ width ] [ height ] [ x ] [ y ] [ repetition ]

25. 2  The rectangle-info-byte contains the bit pattern ‘SWHXYRDL’.
25. 3  R is 1 if repetition is present. L is 1 if layer-number is present. D is 1 if datatype-number is present. Both
layer-number  and  datatype-number are unsigned-integers.  When  layer-number  and/or  datatype-number  are
unspecified, they assume the value of modal variables layer and datatype, respectively. W is 1 if width is present.
H  is  1  if  height  is  present.  Both  width  and  height  are  unsigned-integers.    When  width  and/or  height  are
unspecified, they assume the value of modal variables geometry-w and geometry-h, respectively.
25. 4  S is 1 if the rectangle is a square. In this case, H must be 0, and width, if present, is used for both dimensions
of the rectangle. When width is unspecified, the value of modal variable geometry-w is used instead.
25. 5  x  and  y
are  signed-integer  coordinates  representing  either  the  absolute  or  the  relative  (x,y)  location  of  the
lower-left corner of the rectangle. X is 1 if x is present, and Y is 1 if y is present. When either x or y is unspecified,
the value of modal variable geometry-x or geometry-y, respectively, is used instead. Refer to Section 21 on page 17
for a discussion of how absolute and relative modes affect the interpretation of x and y.
25. 6  Each  successive  RECTANGLE  record  updates  all  rectangle-related  modal  variables.  (When  S =  1,  both
geometry-w and geometry-h are set to the rectangle’s width.)
25. 7  EXCEPTION  HANDLING
—  Implicit  use  of  modal  variables  geometry-w,  geometry-h,  layer,  or  datatype
when they are in the undefined state should be treated as a fatal error. When S = 1, H = 1 should be treated as a fatal
error. The interpretation of zero-area RECTANGLEs is application-dependent.
26  POLYGON Record
26. 1  A POLYGON record represents an arbitrary polygon figure. It has the following format:

‘21’ polygon-info-byte [ layer-number ] [ datatype-number ] [ point-list ] [ x ] [ y ] [ repetition ]

26. 2  The polygon-info-byte contains the bit pattern ‘00PXYRDL’.
26. 3  x  and  y  are  signed-integer  coordinates  representing  either  the  absolute  or  the  relative  (x,y)  location  of  the
initial vertex of the polygon. X is 1 if x is present, and Y is 1 if y is present. When either x or y is unspecified, the
value of modal variable geometry-x or geometry-y, respectively, is used instead. Refer to Section 21 on page 17 for a
discussion of how absolute and relative modes affect the interpretation of x and y.
26. 4  R is 1 if repetition is present. L is 1 if layer-number is present. D is 1 if datatype-number is present. Both
layer-number  and  datatype-number are unsigned-integers.  When  layer-number  and/or  datatype-number  are
unspecified, they assume the value of modal variables layer and datatype, respectively.
26. 5  P
is 1 if point-list is present. Otherwise, the value of modal variable polygon-point-list is used. The format of
point-lists is defined in Section 7.7 on page 9.
26. 6  Each successive POLYGON record updates all polygon-related modal variables.
26. 7  EXCEPTION HANDLING
— Polygons with fewer than three vertices should be treated as fatal errors. Implicit
use of modal variables polygon-point-list, layer, or datatype when they are in the undefined state should be treated
as  a  fatal  error.  The  interpretation  of  self-intersecting  polygons,  reentrant  polygons,  and  polygons  with  zero-area
regions is application-dependent.


SEMI P39-0304
E2
© SEMI 2004 21
27  PATH Record
27. 1  A PATH record represents an arbitrary path figure, which may be thought of as a polyline with finite width. It
has the following format:

‘22’ path-info-byte [ layer-number ] [ datatype-number ] [ half-width ]
[ extension-scheme [ start-extension] [ end-extension ] ] [ point-list ] [ x ] [ y ] [ repetition ]

27. 2  The path-info-byte contains the bit pattern ‘EWPXYRDL’.
27. 3  x  and  y  are  signed-integer  coordinates  representing  either  the  absolute  or  the  relative  (x,y)  location  of  the
initial vertex of the path centerline. X is 1 if x is present, and Y is 1 if y is present. When either x or y is unspecified,
the value of modal variable geometry-x or geometry-y, respectively, is used instead. Refer to Section 21 on page 17
for a discussion of how absolute and relative modes affect the interpretation of x and y.
27. 4  R is 1 if repetition is present. L is 1 if layer-number is present. D is 1 if datatype-number is present. Both
layer-number  and  datatype-number are unsigned-integers.  When  layer-number  and/or  datatype-number  are
unspecified, they assume the value of modal variables layer and datatype, respectively.
27. 5  P  is  1  if  point-list  is  present.  Otherwise,  the  value  of  modal  variable  path-point-list  is  used.  The  format  of
point-lists is defined in Section 7.7 on page 9.
27. 6  W
is  1  if  half-width  (an  unsigned-integer)  is  present;  if  absent,  the  half-width  value  assumes  the  value  of
modal  variable  path-halfwidth.  The  path  is  formed  by  expanding  the  centerline  (represented  by  line  segments
connecting the points) by the half-width value to each side.
27. 7  E is 1 if extension-scheme is present. Otherwise, extension-scheme, start-extension, and end-extension are
absent, and the values of modal variables path-start-extension, and path-end-extension are used instead.
27. 8  When present, extension-scheme (an unsigned-integer) contains bit pattern ‘0000SSEE’. The SS bits govern
the  path  starting  extension,  and  the  EE  bits  govern  the  path  ending  extension.  Both  start-extension  (present  only
when SS = ‘11’) and end-extension  (present  only  when  EE =  ‘11’)  are  signed-integers,  as  in  GDSII  Stream, with
positive values causing the path to extend beyond its starting and/or ending vertices, and negative values causing the
path to retract from its starting and/or ending vertices.
Table 15  Path Extension Schemes
SS Bits Description
00                     Use                     path-start-extension modal variable
01 Use flush (zero-length) extension at starting vertex
10 Use path-halfwidth extension at starting vertex
11                     Use                     explicit                     start-extension at starting vertex
EE Bits
00                     Use                     path-end-extension modal variable
01 Use flush (zero-length) extension at ending vertex
10 Use path-halfwidth extension at ending vertex
11                     Use                     explicit                     end-extension at ending vertex

27. 9  Each successive PATH record updates all path-related modal variables.
27. 10  Various  types  of  degenerate  paths,  where  the  half-width  =  0,  the  path  traces  back  on  itself,  an  extension  is
negative  with  magnitude  greater  than  its  segment  length,  etc.  are  not  prohibited;  their  interpretation  is  application-
dependent. The path expansion scheme used at the path’s interior vertices or “joints” is also application-dependent.
27. 11  EXCEPTION  HANDLING
—  Implicit  use  of  modal  variables  path-halfwidth,  path-point-list,  path-start-
extension,  path-end-extension,  layer,  or  datatype  when  they  are  in  the  undefined  state  should  be  treated  as  a  fatal
error.


SEMI P39-0304
E2
© SEMI 2004 22
28  TRAPEZOID Record
28. 1  A TRAPEZOID  record  represents  a  trapezoid  figure  (a  polygon  with  four  vertices  having  at  least  two
opposite sides parallel and parallel to either the x- or the y-axis). It has the following format:

‘23’ trap-info-byte [ layer-number ] [ datatype-number ]
[ width ] [ height ] delta-a delta-b [ x ] [ y ] [ repetition ]

‘24’ trap-info-byte [ layer-number ] [ datatype-number ]
[ width ] [ height ] delta-a [ x ] [ y ] [ repetition ]

‘25’ trap-info-byte [ layer-number ] [ datatype-number ]
[ width ] [ height ] delta-b [ x ] [ y ] [ repetition ]

28. 2  The trap-info-byte contains bit pattern ‘OWHXYRDL’.
28. 3  R is 1 if repetition is present. L is 1 if layer-number is present. D is 1 if datatype-number is present. Both
layer-number  and  datatype-number are unsigned-integers.  When  layer-number  and/or  datatype-number  are
unspecified, they assume the value of modal variables layer and datatype, respectively.  W is 1 if width is present.
H  is  1  if  height  is  present.  Width  and  height  are  unsigned-integers  which  describe  the  overall  dimensions  of  the
bounding box of the trapezoid as shown in Figure 7 on page 22.  When width and/or height are unspecified, they
assume the value of modal variables geometry-w and geometry-h, respectively.
28. 4  x  and  y  are  signed-integer  coordinates  representing  either  the  absolute  or  the  relative  (x,y)  location  of  the
lower-left corner of the trapezoid’s bounding box. X is 1 if x is present, and Y
is 1 if y is present. When either x or y
is unspecified, the value of modal variable geometry-x or geometry-y, respectively, is used instead. Refer to Section
21 on page 17 for a discussion of how absolute and relative modes affect the interpretation of x and y.
28. 5  delta-a  and  delta-b  are  1-deltas,  and  are  both  present  in  record  type  ‘23’.  In  record  type  ‘24’  delta-b  is
assumed to be 0 and is omitted, and in record type ‘25’ delta-a is assumed to be 0 and is omitted.
28. 6  O is 0 if the trapezoid is horizontally-oriented, with top (PQ) and bottom (RS) sides parallel to the x-axis. In
this case, delta-a represents (x
P
- x
R
) and delta-b represents (x
Q
- x
S
).
28. 7  O is 1 if the trapezoid is vertically-oriented, with left (PQ) and right (RS) sides parallel to the y-axis. In this
case, delta-a represents (y
P
- y
R
) and delta-b represents (y
Q
- y
S
).
28. 8  Each successive TRAPEZOID record updates all trapezoid-related modal variables.


Figure 7
Horizontal and Vertical Trapezoids

28. 9  EXCEPTION HANDLING
— For any trapezoid, deltas of sufficient magnitude to cause segments PR and QS
to cross, as well as any delta which causes either segment PR or QS not to fit diagonally within the bounding box,
should  be  treated  as  fatal  errors.  Implicit  use  of  modal  variables  geometry-w,  geometry-h,  layer,  or  datatype  when


SEMI P39-0304
E2
© SEMI 2004 23
they  are  in  the  undefined  state  should  be  treated  as  a  fatal  error.  The  interpretation  of  zero-area  trapezoids  is
application-dependent.
29  CTRAPEZOID Record
29. 1  A CTRAPEZOID  record  represents  a  trapezoid  figure  in  a  compact  form  by  assuming  that  two  sides  are
parallel to either the x- or the y-axis, and the remaining two sides form either a 45- or 90-degree angle with them. It
has the following format:

‘26’ ctrapezoid-info-byte [ layer-number ] [ datatype-number ]
[ ctrapezoid-type ] [ width ] [ height ] [ x ] [ y ] [ repetition ]

29. 2  The ctrapezoid-info-byte contains the bit pattern ‘TWHXYRDL’.
29. 3  R is 1 if repetition is present. L is 1 if layer-number is present. D is 1 if datatype-number is present. Both
layer-number  and  datatype-number are unsigned-integers.  When  layer-number  and/or  datatype-number  are
unspecified, they assume the value of modal variables layer and datatype, respectively. W is 1 if width is present.
H is 1 if height is present.  Both width and height are unsigned-integers, and represent the width (w) and height (h)
of the trapezoid’s bounding box, respectively. When width and/or height are unspecified, they assume the value of
modal variables geometry-w and geometry-h, respectively.
29. 4  x  and  y  are  signed-integer  coordinates  representing  either  the  absolute  or  the  relative  (x,y)  location  of  the
lower-left corner of the trapezoid’s bounding box. X is 1 if x is present, and Y is 1 if y
is present. When either x or y
is unspecified, the value of modal variable geometry-x or geometry-y, respectively, is used instead. Refer to Section
21 on page 17 for a discussion of how absolute and relative modes affect the interpretation of x and y.
29. 5  T  is  1  if  ctrapezoid-type  (an  unsigned-integer)  is  present;  otherwise  it  assumes  the  value  of  modal  variable
ctrapezoid-type. Types 0-25 are depicted in Figure 8:

Figure 8
The 26 Standard CTRAPEZOID Types


SEMI P39-0304
E2
© SEMI 2004 24
29. 6  The triangle, rectangle, and square forms are provided for compactness and for compatibility with some mask
writing pattern file formats. For types 16–19, 22–23, and 25, height is not used, and H must be 0. For types 20–21,
width is not used and W must be 0.
29. 7  Each  successive  CTRAPEZOID  record  updates  all  ctrapezoid-related  modal  variables  with  the  following
exception: for the forms where only one of width or height is used (types 16–23 and 25), modal variables geometry-
w and geometry-h are both updated to match the specified dimension.
29. 8  EXCEPTION HANDLING
— For types 0-3 and 6-7, (w < h) should be treated as a fatal error. For types 4-5,
(w < 2h) should be treated as a fatal error. For types 8-11 and 14-15, (h < w) should be treated as a fatal error. For
types 12-13, (h < 2w) should be treated as a fatal error. For types 16-19, 22–23, and 25, an H value of 1 should be
treated as a fatal error. For types 20-21, a W value of 1 should be treated as a fatal error. A value of ctrapezoid-type
greater  than  25  should  be  treated  as  a  fatal  error.  Implicit  use  of  modal  variables  ctrapezoid-type, geometry-w,
geometry-h,  layer  or  datatype  when  they  are  in  the  undefined  state  should  be  treated  as  a  fatal  error.    The
interpretation of zero-area trapezoids is application-dependent.
30  CIRCLE Record
30. 1  A CIRCLE record represents a circular figure. It has the following format:

‘27’              circle-info-byte              [              layer-number ] [ datatype-number ] [ radius ] [ x ] [ y ] [ repetition ]

30. 2  The circle-info-byte contains the bit pattern ‘00rXYRDL’.
30. 3  R is 1 if repetition is present. L is 1 if layer-number is present. D is 1 if datatype-number is present. Both
layer-number  and  datatype-number are unsigned-integers.  When  layer-number  and/or  datatype-number  are
unspecified, they assume the value of modal variables layer and datatype, respectively.
30. 4  x  and  y  are  signed-integer  coordinates  representing  either  the  absolute  or  the  relative  (x,y)  location  of  the
circle’s center. X is 1 if x is present, and Y is 1 if y is present. When either x or y is unspecified, the value of modal
variable geometry-x or geometry-y, respectively, is used instead. Refer to Section 21 on page 17 for a discussion of
how absolute and
relative modes affect the interpretation of x and y.
30. 4.1  r is 1 if radius is present, otherwise radius assumes the value of modal variable circle-radius instead.
30. 5  Each successive CIRCLE record updates all circle-related modal variables.
30. 6  EXCEPTION HANDLING
— Implicit use of modal variables circle-radius, layer, or datatype when they are in
the  undefined  state  should  be  treated  as  a  fatal  error.    The  interpretation  of  zero-area  CIRCLEs  is  application-
dependent.
31  PROPERTY Record
31. 1  A property is an annotation element consisting of a name plus an optional list of values, supplying descriptive
information about the characteristics of the OASIS file or one of its components. A property may be associated with
the  entire  OASIS  file,  a  name  record,  a  CELL,  a  PLACEMENT,  or  an  element  record  within  a  cell.  The
PROPERTY record has the following format:

‘28’ prop-info-byte [ reference-number | propname-string ] [ prop-value-count ] [ property-value* ]
‘29’

31. 2  Record  type  ‘29’  provides  a  compact  way  to  specify  a  duplicate  copy  of  the  most-recently-seen  property
together  with  its  value  list.  It  makes  use  of  modal  variables  last-property-name  and  last-value-list,  which  were
defined by a previous PROPERTY record.
31. 3  The prop-info-byte contains the bit pattern ‘UUUUVCNS’.
31. 4  When C = 1, the property name reference is explicit, in which case N = 1 means that reference-number (an
unsigned-integer) is present, and refers to a PROPNAME record where the property name is stored; N = 0 means


SEMI P39-0304
E2
© SEMI 2004 25
that propname-string (an n-string) is present and stores the property name locally. When C = 0, N is ignored, and
the value of modal variable last-property-name is used instead.
31. 5  When V = 0, values of UUUU from 0 to 14 indicate the number of property-value fields which are part of
this  record,  and  prop-value-count  is  omitted.  When  V =  0  and  UUUU =  15,  prop-value-count,  an  unsigned-
integer, is present and indicates the number of property-value fields. When V = 1, UUUU must be 0, and modal
variable last-value-list  supplies  the  value  list.  See  Section  7.8  on  page  11  for  a  description  of  property-value
types.
31. 6  When S = 1, a standard property is indicated; when S = 0, a non-standard or user property is indicated. The list
of  OASIS  Standard  Properties  appears  in  Appendix  2  on  page  36.  That  appendix  also  describes  how  to  represent
GDSII-Stream-style properties using the S_GDS_PROPERTY standard property.
31. 7  Each successive PROPERTY record updates modal variables last-property-name and last-value-list.
31. 8  In  general,  PROPERTY  records  directly  follow  the  record  with  which  they  are  associated.  PROPERTY
records occurring directly after the START record are associated globally with the entire OASIS file. PROPERTY
records  occurring  after  a  CELL  record  or  its  corresponding  CELLNAME  record  pertain  to  that  entire  cell.
PROPERTY  records  occurring  after  a  PLACEMENT  record  pertain  to  the  placement(s)  it  describes,  including
repetitions. PROPERTY records occurring after an element record pertain to that element and any repetitions.
31. 9  PROPERTY records do not associate with
CBLOCK or PAD records. Instead, property association occurs as
though all CBLOCK records have been uncompressed, and all PAD records have been deleted.
31. 10  EXCEPTION HANDLING
— Implicit use of modal variables last-property-name or last-value-list when they
are  in  the  undefined  state  should  be  treated  as  a  fatal  error.  Use  of  a  reference-number  for  which  there  is  no
corresponding PROPNAME record should be treated as a fatal error.
32  XNAME Record
32. 1  An XNAME record allows backward-compatible extension of OASIS name records. It associates a string
with a unique reference number. It has the following format:

‘30’ xname-attribute xname-string
‘31’ xname-attribute xname-string reference-number

32. 2  xname-string is user-defined as an a-string, b-string, or n-string which holds the name. xname-attribute is an
unsigned-integer providing the ability to associate the XNAME with a user-defined class. The reference-number is
an unsigned-integer which  is  either  implicitly  or  explicitly  assigned  to  the  name.  Implicit  assignment  occurs  in
record type ‘30’, by assigning sequential reference numbers beginning with 0 as each successive XNAME record is
encountered. Explicit assignment occurs in record type ‘31’.
32. 3  Record types ‘30’ and ‘31’ may not both be used in the same OASIS file.
32. 4  EXCEPTION  HANDLING
—  The  appearance  of  two  XNAME records  in  the  same  file  with  the  same
reference  number  but  different  names  should  be  treated  as  a  fatal  error.  The  appearance  of  both  record  types  ‘30’
and ‘31’ in the same OASIS file should be treated as a fatal error.
33  XELEMENT Record
33. 1  An XELEMENT  record  allows  backward-compatible  extension  of  OASIS  element  records.  It  has  the
following format:

‘32’  xelement-attribute  xelement-string

33. 2  xelement-attribute  is  an  unsigned-integer  providing  the  ability  to  associate  the  XELEMENT  with  a  user-
defined class. xelement-string is a b-string containing user-defined data.


SEMI P39-0304
E2
© SEMI 2004 26
34  XGEOMETRY Record
34. 1  An XGEOMETRY record allows backward-compatible extension of OASIS geometry records. It has the
following format:

‘33’ xgeometry-info-byte xgeometry-attribute
[ layer-number ] [ datatype-number ] xgeometry-string [ x ] [ y ] [ repetition ]

34. 2  The xgeometry-info-byte contains the bit pattern ‘000XYRDL’.
34. 3  R is 1 if repetition is present. L is 1 if layer-number is present. D is 1 if datatype-number is present. Both
layer-number  and  datatype-number are unsigned-integers.  When  layer-number  and/or  datatype-number  are
unspecified, they assume the value of modal variables layer and datatype, respectively.
34. 4  x  and  y  are  signed-integer  coordinates  representing  either  the  absolute  or  the  relative  (x,y)  location  of  the
geometry. X  is  1  if  x  is  present,  and  Y  is  1  if  y  is  present.  When  either  x  or  y  is  unspecified,  the  value  of  modal
variable geometry-x or geometry-y, respectively, is used instead. Refer to Section 21 on page 17 for a discussion of
how absolute and relative modes affect the interpretation of x and y.
34. 5  xgeometry-attribute  is  an  integer  providing  the  ability  to  associate  the  XGEOMETRY  with  a  user-defined
class. xgeometry-string is a b-string containing user-defined data describing the geometry.
34. 6
Each successive XGEOMETRY record updates all XGEOMETRY-related modal variables.
34. 7  EXCEPTION HANDLING
— Implicit use of modal variables layer, or datatype when they are in the undefined
state should be treated as a fatal error.
35  CBLOCK Record
35. 1  A CBLOCK record provides a mechanism for embedding compressed data within the structure of an OASIS
file for additional compactness. It has the following format:

‘34’ comp-type uncomp-byte-count comp-byte-count comp-bytes

35. 2  comp-type is  an  unsigned-integer  describing  the  type  of  compression  used  for  this  record.  uncomp-byte-
count  is  an  unsigned-integer  describing  the  number  of  bytes  prior  to  compression,  and  comp-byte-count  is  an
unsigned-integer describing  the  number  of  bytes  after  compression.  comp-bytes  is  a  sequence  of  bytes  containing
the compressed byte sequence.
35. 3  When comp-type =  0,  the  compression  scheme  is  the  lossless DEFLATE Compressed Data Format, Version
1. 3, as documented in RFC 1951 (1996).  Other values of comp-type are reserved for future versions of the OASIS
format;  the  intent  is  to  be  able  to  support  a  mixture  of  compression  methods  within  a  single  OASIS  file  for
maximum compactness.
35. 3.1  One  example  of  compression/decompression  software  that  is  compliant  with  RFC  1951  is  found  in  ZLIB
version 1.1.4 (March 2002).  This software version can be used without any licensing or legal encumbrances.  It is
expected that future versions of the ZLIB software will also remain RFC-1951-compliant.  Users of future releases
of ZLIB are cautioned to check for continued conformance to RFC 1951 as well as any changes in the terms of use.
35. 3.2  Use  of  the  ZLIB  software  is  not  mandatory  in  order  to  be  compliant  with  the  OASIS  specification.    Any
compression/decompression  software  that  stores  and  processes  data  in  conformance  with  RFC  1951  is  OASIS-
compliant.  It  should  be  noted  that  alternatives  to  the  CBLOCK record  may  emerge  in  the  future,  supporting  other
compression mechanisms. Use of multiple compression methods within a single OASIS file is not ruled out.
35. 4  The START, END, CELL, and nested CBLOCK records may not be stored within a compressed record. This
maintains the ability to perform random access at the cell level within an OASIS file. A CBLOCK record may not
encapsulate more than one “strict mode” name table (refer to Sections 13 and 14 beginning on page 13). All other
sequences of records, of any length, may be stored in a CBLOCK record.
35. 5  EXCEPTION  HANDLING
—  During  the  reading  of  a  CBLOCK  record,  it  is  a  fatal  error  if  the  number  of
bytes returned after decompression does not match uncomp-byte-count.


SEMI P39-0304
E2
© SEMI 2004 27
36  Detailed BNF Syntax
36. 1  This  specification  uses  a  modified  Backus-Naur  Form  (BNF)  notation  to  describe  OASIS  file  syntax.  The
following table summarizes the conventions used in the modified BNF:
Table 16  Modified BNF Notation
Symbol                  Term                  Meaning
ABCD
Bold Uppercase Denotes an OASIS record name
abcd
Bold Lowercase Denotes a fundamental data type defined in Section 7
< > Angle Brackets Enclose an element name which is further defined elsewhere in the BNF
-> Arrow Means “is composed of”
[ ] Square Brackets Enclose element(s) which are optional, and if present, occur only once
{ } Braces Enclose element(s) which are required
| Vertical Bar Indicates a choice between mutually exclusive elements within { } braces
* Asterisk An asterisk following an element means the element may occur zero or more times
... Ellipsis Appears between elements to indicate a variable-length list of like type
‘ ’ Single Quotes Enclose a decimal number denoting an OASIS unsigned-integer
“ ” Double Quotes Enclose a literal character string
“CR” Control Character    Angle brackets enclose the name of an ASCII Control Character within a string
// Double Virgule Indicates all characters to its right are comments—not part of the syntax

36. 2  The OASIS syntax is detailed as follows:

oasis-file -> magic-bytes START { CBLOCK | PAD | PROPERTY | cell | name }* END
name -> { CELLNAME | TEXTSTRING | LAYERNAME | PROPNAME | PROPSTRING | XNAME }
cell -> { CELL { CBLOCK | PAD | PROPERTY | XYRELATIVE | XYABSOLUTE | element }* }
element -> { geometry | PLACEMENT | TEXT | XELEMENT }
geometry -> { RECTANGLE | POLYGON | PATH | TRAPEZOID | CTRAPEZOID | CIRCLE | XGEOMETRY }

magic-bytes -> “%SEMI-OASISCRNL”

PAD -> ‘0’

START -> ‘1’ version-string unit offset-flag [ table-offsets ]

END -> ‘2’ [ table-offsets ] padding-string validation-scheme [ validation-signature ]

CELLNAME ->  ‘3’ cellname-string
CELLNAME ->  ‘4’ cellname-string reference-number

TEXTSTRING -> ‘5’ text-string
TEXTSTRING -> ‘6’ text-string reference-number

PROPNAME ->
‘7’ propname-string
PROPNAME ->  ‘8’ propname-string reference-number

PROPSTRING ->  ‘9’ prop-string
PROPSTRING ->  ‘10’ prop-string reference-number

LAYERNAME -> ‘11’ layername-string layer-interval datatype-interval
LAYERNAME -> ‘12’ layername-string textlayer-interval texttype-interval

CELL -> ‘13’ reference-number


SEMI P39-0304
E2
© SEMI 2004 28
CELL -> ‘14’ cellname-string

XYABSOLUTE -> ‘15’
XYRELATIVE -> ‘16’

PLACEMENT -> ‘17’ placement-info-byte [ reference-number | cellname-string ]
[x ] [ y ] [ repetition ]
PLACEMENT -> ‘18’ placement-info-byte [ reference-number | cellname-string> ]
[ magnification ] [ angle ] [ x ] [ y ] [ repetition ]

TEXT -> ‘19’ text-info-byte [ reference-number | text-string ] l-t [ x ] [ y ] [ repetition ]

RECTANGLE -> ‘20’  rectangle-info-byte l-d [ width ] [ height ] [ x ] [ y ] [ repetition ]

POLYGON ->  ‘21’  polygon-info-byte l-d [ point-list ] [ x ] [ y ] [ repetition ]

PATH -> ‘22’  path-info-byte l-d [ half-width ]
[ extension-scheme [ start-extension ] [ end-extension ] ]
[ point-list ] [ x ] [ y ] [ repetition ]

TRAPEZOID -> ‘23’ trap-info-byte l-d [ width ] [ height ] delta-a delta-b
[ x ] [y ] [ repetition ]
TRAPEZOID -> ‘24’ trap-info-byte l-d [ width ] [ height ] delta-a
[ x ] [y ] [ repetition ]
TRAPEZOID -> ‘25’ trap-info-byte l-d [ width ] [ height ] delta-b
[ x ] [y ] [ repetition ]

CTRAPEZOID -> ‘26’  ctrapezoid-info-byte l-d [ ctrapezoid-type ] [ width ] [ height ] [ x ] [ y ]
[ repetition ]

CIRCLE -> ‘27’  circle-info-byte l-d [ radius ] [ x ] [ y ] [ repetition ]

PROPERTY ->  ‘28’  prop-info-byte [ reference-number | propname-string ]
[ prop-value-count ] [ property-value* ]
PROPERTY ->  ‘29’

XNAME ->  ‘30’ xname-attribute xname-string
XNAME ->  ‘31’ xname-attribute xname-string reference-number

XELEMENT ->  ‘32’ xelement-attribute xelement-string

XGEOMETRY ->  ‘33’  xgeometry-info-byte xgeometry-attribute l-d xgeometry-string [ x ] [ y ]
[ repetition ]

CBLOCK -> ‘34’ comp-type uncomp-byte-count comp-byte-count comp-bytes

table-offsets ->   cellname-flag cellname-offset
textstring-flag                                textstring-offset
propname-flag                                propname-offset
propstring-flag                                propstring-offset
layername-flag                                layername-offset
xname-flag                                xname-offset



SEMI P39-0304
E2
© SEMI 2004 29
offset-flag, cellname-flag, cellname-offset, textstring-flag, textstring-offset,
propname-flag, propname-offset, propstring-flag, propstring-offset,
layername-flag, layername-offset, xname-flag, xname-offset -> unsigned-integer

padding-string -> b-string

validation-scheme -> unsigned-integer
validation-signature -> byte*

placement-info-byte, text-info-byte, rectangle-info-byte,
polygon-info-byte, path-info-byte, trap-info-byte, ctrapezoid-info-byte,
circle-info-byte, prop-info-byte, xgeometry-info-byte -> byte

layer-interval, datatype-interval, textlayer-interval, texttype-interval -> layer-interval
layer-interval -> { li0 | li1 | li2 | li3 | li4 }
li0 -> ‘0’
li1 -> ‘1’ bound-a
li2 -> ‘2’ bound-a
li3 -> ‘3’ bound-a
li4 -> ‘4’ bound-a bound-b
bound-a, bound-b -> unsigned-integer

l-d -> [ layer-number ] [ datatype-number ]
l-t -> [ textlayer-number ] [ texttype-number ]
layer-number, datatype-number, textlayer-number, texttype-number -> unsigned-integer

reference-number -> unsigned-integer
cellname-string, propname-string, layername-string -> n-string
version-string, text-string -> a-string
prop-string, xname-string -> { a-string | b-string | n-string }
xelement-string, xgeometry-string -> b-string

a-string, b-string, n-string -> string-length byte*
string-length -> unsigned-integer

xname-attribute, xelement-attribute, xgeometry-attribute -> unsigned-integer

property-value -> { pvreal | pv8 | pv9 | pv10 | pv11 | pv12 | pv13 | pv14 | pv15 }
pvreal -> real
pv8 -> ‘8’ unsigned-integer
pv9 -> ‘9’ signed-integer
pv10 -> ‘10’ a-string
pv11 -> ‘11’ b-string
pv12 -> ‘12’ n-string
pv13 -> ‘13’ reference-number // a-string
pv14 -> ‘14’ reference-number // b-string
pv15 ->
‘15’ reference-number // n-string



SEMI P39-0304
E2
© SEMI 2004 30
repetition ->  { rep0 | rep1 | rep2 | rep3 | rep4 | < rep5> | rep6 | rep7 | rep8 |
rep9 | rep10 | rep11}
rep0 -> ‘0’
rep1 -> ‘1’ x-dimension y-dimension x-space y-space
rep2 -> ‘2’ x-dimension x-space
rep3 -> ‘3’ y-dimension y-space
rep4 -> ‘4’ x-dimension x-space ... x-space
rep5 -> ‘5’ x-dimension grid x-space ... x-space
rep6 -> ‘6’ y-dimension y-space ... y-space
rep7 -> ‘7’ y-dimension grid y-space ... y-space
rep8 -> ‘8’ n-dimension m-dimension n-displacement m-displacement
rep9 -> ‘9’ dimension displacement
rep10 -> ‘10’ dimension displacement ... displacement
rep11 -> ‘11’ dimension grid displacement ... displacement

grid, x-dimension, y-dimension, dimension, n-dimension, m-dimension,
x-space, y-space -> unsigned-integer

displacement, n-displacement, m-displacement -> g-delta

point-list -> { pl0 | pl1 | pl2 | pl3 | pl4 | pl5 }
pl0 -> ‘0’  vertex-count <1-delta>* // Implicit manhattan delta point-list (horizontal-first)
pl1 -> ‘1’ vertex-count <1-delta>* // Implicit manhattan delta point-list (vertical-first)
pl2 -> ‘2’ vertex-count <2-delta>* // Explicit manhattan delta point-list
pl3 -> ‘3’ vertex-count <3-delta>* // Explicit octangular delta point-list
pl4 -> ‘4’ vertex-count g-delta* // Explicit all-angle delta point-list
pl5 -> ‘5’ vertex-count g-delta* // Explicit all-angle double-delta point-list

vertex-count, half-width, extension-scheme, ctrapezoid-type -> unsigned-integer
width, height, radius ->  unsigned-integer
prop-value-count -> unsigned-integer
delta-a, delta-b -> <1-delta>

comp-type, uncomp-byte-count, comp-byte-count -> unsigned-integer
comp-bytes -> byte*

x, y -> signed-integer
start-extension, end-extension -> signed-integer

unit, angle, magnification -> real

<1-delta> -> signed-integer // xxx...xxxd
<2-delta> -> unsigned-integer // xxx...xxdd
<3-delta> -> unsigned-integer                                            //                                            xxx...xddd
g-delta -> unsigned-integer [ unsigned-integer ] // xxx...xxxddd0   or   xxx...xxxd1  xxx...xxxd

real -> { real0 | real1 | real2 | real3 | real4 | real5 | real6 | real7 }
real0 -> ‘0’ unsigned-integer // Positive whole number
real1 -> ‘1’ unsigned-integer // Negative whole number
real2 -> ‘2’ unsigned-integer // Positive reciprocal
real3 -> ‘3’ unsigned-integer // Negative reciprocal
real4 -> ‘4’ unsigned-integer unsigned-integer // Positive ratio
real5 -> ‘5’ unsigned-integer unsigned-integer // Negative ratio
real6 -> ‘6’ ieee-4 // Single-precision floating point
real7 -> ‘7’ ieee-8 // Double-precision floating point


SEMI P39-0304
E2
© SEMI 2004 31
APPENDIX 1
CALCULATION OF VALIDATION SIGNATURES
NOTICE:    The  material  in  this  appendix  is  an  official  part  of  SEMI  P39  and  was  approved  by  full  letter  ballot
procedures on July 12, 2003.
A1-1  Sample CRC32 C-Language Source Code
The CRC32 must be calculated by processing the file contents as a single stream of bytes (CRC’s are order-
dependent).  The CRC should be initialized by calling:

uint32  crc;  /* the crc value */
crc32_init(&crc);

As each chunk of data in written into the file, one should call :

byte    *buf;  /* data written to output */
size_t  len;   /* # of bytes of data written to output */
crc32_add(&crc, buf, len);

When the END record is to be written, the CRC should be calculated using the

id-value and validation-scheme  only.

The final value of the CRC32 should then be appended to the file as a 4-byte value in little-endian order.

#define  CHG_ENDIAN32(a)  { byte  *p, b; \
p = (byte *) &(a); b=p[0]; p[0]=p[3]; p[3]=b; b=p[1]; p[1]=p[2]; p[2]=b; }

#ifdef BIG_ENDIAN_MACHINE
/* put calculated CRC in LITTLE_ENDIAN order (to align with byte ordering of the polynomial)
*/
CHG_ENDIAN32(crc);
#endif
_________________________________________________________________________________________________
_________________________________________________________________________________________________
/*
(c) Copyright 2003 SEMI   no warranty, express or implied
not liable for damages resulting from or in connection with use of this software
*/

#include stdio.h
#include errno.h

#define TEST


/********************/
/* basic data types */
/********************/
typedef unsigned char   byte;
typedef unsigned int    uint32;


/*************/
/* constants */
/*************/
#define  BUFFER_SZ      8 * 1024
#define  BITS_IN_BYTE   8


/**********/
/* macros */
/**********/
#define CHG_ENDIAN(a) {byte *p, t; p=(byte *) &(a); t=p[0]; p[0]=p[3]; p[3]=t; t=p[1]; p[1]=p[2];
p[2]=t;}


/*
CRC polynomial as specified in ISO 3309 and ITU-T V.42
used in Ethernet, FDDI, cksum, etc
polynomial is  x^32 + x^26 + x^23 + x^22 + x^16 + x^12 + x^11 + x^10
+ x^8  + x^7  + x^5  + x^4  + x^2  + x^1  + x^0

if the leftmost bit is the msb, this is
binary  1 0000 0100 1100 0001 0001 1101 1011 0111


SEMI P39-0304
E2
© SEMI 2004 32
hex     1 0    4    c    1    1    d    b    7
big order bit is implicit so we have
0x04c11db7
*/

#ifdef _ILP32

# #

#  define  CRC32_POLY      0x04c11db7ul  /* polynomial */
#  define  CRC32_CONSTANT  0x4b90b035ul  /* constant which matches polynomial above */

#  define  LEFTMOST_BIT    0x80000000ul
#  define  ALL_BITS        0xfffffffful
#else
#  define  CRC32_POLY      0x04c11db7u   /* polynomial */
#  define  CRC32_CONSTANT  0x4b90b035u   /* constant which matches polynomial above */

#  define  LEFTMOST_BIT    0x80000000u
#  define  ALL_BITS        0xffffffffu
#endif





/* initialized to zero by the compiler */
static uint32  Crc32_tbl[256];


static void
crc32_tbl_load(void)
{
int     i;
uint32  c;
int     j;


/* initialize auxiliary table */
for (i = 0; i < 256; i++)
{
c = i << 24;

for (j = 0; j < BITS_IN_BYTE; j++)
c = c & LEFTMOST_BIT <? (c << 1) ^ CRC32_POLY : (c << 1);

Crc32_tbl[i] = c;
}
}


void
crc32_init(uint32  *crc)
{
/* initialize auxiliary table (if necessary) */
if (!Crc32_tbl[1])
crc32_tbl_load();

/* preload shift register, per CRC-32 spec */
*crc = ALL_BITS;
}


void
crc32_add(uint32  *crc,
byte    *buf,
size_t  len
)
{
uint32  val;
size_t  i;


val = *crc;
val = ~val & ALL_BITS;

for (i = 0; i < len; i++)
val = (val >> 8) ^ Crc32_tbl[ (val ^ buf[i]) & 0xff];

val = ~val & ALL_BITS;
*crc = val;
}




SEMI P39-0304
E2
© SEMI 2004 33
main(int argc, char **argv)
{
char    *path;
FILE    *fptr;
size_t  len;
byte    buf[BUFFER_SZ];
uint32  crc;
uint32  crc_to_file;


switch (argc)
{
case 1 :
path = "stdin";
fptr = stdin;  /* read from standard input */
break;

case 2 :
/* open input file (use the ’b’ flag to read as binary rather than text) */
path = argv[1];
if ( (fptr = fopen(path, "rb") ) == NULL)
{
fprintf(stderr, "\nerror opening %s (%s)\n", path, strerror(errno) );
exit(1);
}
break;

default :
fprintf(stderr, "\nusage: %s   pathname\n", argv[0]);
fprintf(stderr, "       -or-");
fprintf(stderr, "\n       %s < pathname\n", argv[0]);
exit(1);
}

/* initialize */
crc32_init(&crc);

/* calculate crc for all data in file */
while (len = (fread(buf, 1, BUFFER_SZ, fptr) ) )
crc32_add(&crc, buf, len);

if (!feof(fptr) )
{
fprintf(stderr, "\nerror reading %s (%s)\n", path, strerror(errno) );
if (fptr != stdin)
fclose(fptr);
exit(1);
}

if (fptr != stdin)
fclose(fptr);

crc_to_file = crc;

/* ensure CRC32 is written to OASIS file in LITTLE_ENDIAN byte order */
#ifdef BIG_ENDIAN_MACHINE
CHG_ENDIAN(crc_to_file);
#endif

#ifdef TEST
/* this is the crc value that should be the last 4 bytes in the file */
printf("crc_to_file                         = 0x%08x\n", crc_to_file);

/* assume the CRC32 value crc_to_file was appended to the end of the Oasis file */
/* add the CRC32 (in LITTLE_ENDIAN order) to the data stream and continue CRC calculation */
crc32_add(&crc, (byte *) &crc_to_file, size of(crc_to_file) );
#endif

printf("crc_constant (should be 0x%08x) = 0x%08x\n", CRC32_CONSTANT, crc);

exit(0);
}




SEMI P39-0304
E2
© SEMI 2004 34
A1-2  Sample CHECKSUM32 C-Language Source Code
/*
(c) Copyright 2003 SEMI
no warranty, express or implied
not liable for damages resulting from or in connection with use of this software
*/


#include stdio.h
#include errno.h


/********************/
/* basic data types */
/********************/
typedef unsigned char   byte;
typedef unsigned int    uint32;

#ifdef _ILP32
typedef unsigned long long  uint64;
#else
typedef unsigned long       uint64;
#endif


/*************/
/* constants */
/*************/
#define  BUFFER_SZ      8 * 1024
#define  BITS_IN_BYTE   8

/**********/
/* macros */
/**********/
#define CHG_ENDIAN(a) {byte *p, t; p=(byte *)&(a); t=p[0]; p[0]=p[3]; p[3]=t; t=p[1]; p[1]=p[2];
p[2]=t;}



void
checksum_init(uint32  *chksum)
{
*chksum = 0;
}


void
checksum_add(uint32  *chksum,
byte    *buf,
size_t  len
)
{
uint64  val;  /* could be a uint32, but overflow handling is undefined */
size_t  i;


val = (uint64) *chksum;

for (i = 0; i < len; i++)
{
val += buf[i];      /* sum */
val &= 0xffffffff;  /* limit to 32 bits */
}

*chksum = (uint32) val;
}


main(int argc, char **argv)
{
char    *path;
FILE    *fptr;
size_t  len;
byte    buf[BUFFER_SZ];
uint32  chksum;
uint32  chksum_to_file;


switch (argc)


SEMI P39-0304
E2
© SEMI 2004 35
{
case 1 :
path = "stdin";
fptr = stdin;  /* read from standard input */
break;

case 2 :
/* open input file (use the ’b’ flag to read as binary rather than text) */
path = argv[1];
if ( (fptr = fopen(path, "rb") ) == NULL)
{
fprintf(stderr, "\nerror opening %s (%s)\n", path, strerror(errno) );
exit(1);
}
break;

default :
fprintf(stderr, "\nusage: %s   pathname\n", argv[0]);
fprintf(stderr, "       -or-");
fprintf(stderr, "\n       %s < pathname\n", argv[0]);
exit(1);
}

/* initialize */
checksum_init(&chksum);

/* calculate checksum for all data in file */
while (len = (fread(buf, 1, BUFFER_SZ, fptr) ) )
checksum_add(&chksum, buf, len);

if (!feof(fptr) )
{
fprintf(stderr, "\nerror reading %s (%s)\n", path, strerror(errno) );
if (fptr != stdin)
fclose(fptr);
exit(1);
}

if (fptr != stdin)
fclose(fptr);

chksum_to_file = chksum;

/* ensure CHECKSUM32 is written to OASIS file in LITTLE_ENDIAN byte order */
#ifdef BIG_ENDIAN_MACHINE
CHG_ENDIAN(chksum_to_file);
#endif

/* this is the checksum value that should be the last 4 bytes in the file */
printf("chksum_to_file = 0x%08x\n", chksum_to_file);

exit(0);
}




SEMI P39-0304
E2
© SEMI 2004 36
APPENDIX 2
OASIS Standard Properties
NOTICE:    The  material  in  this  appendix  is  an  official  part  of  SEMI  P39  and  was  approved  by  full  letter  ballot
procedures on July 12, 2003.
A2-1  File-Level Standard Properties
A2-1.1  Any file-level standard properties must appear immediately after the START record in an OASIS file. Use
of file-level standard properties is optional—OASIS processors may omit/ignore any or all of them.
A2-1.2  S_MAX_SIGNED_INTEGER_WIDTH
A2-1.2.1  This property declares the maximum number of bytes required to represent any signed-integer in the file,
after all continuation bits have been removed and the integer has been expressed in twos-complement form. Its value
list consists of a single unsigned-integer.
A2-1.3  S_MAX_UNSIGNED_INTEGER_WIDTH
A2-1.3.1  This  property  declares  the  maximum  number  of  bytes  required  to  represent  any  unsigned-integer  in  the
file, after all continuation bits have been removed. Its value list consists of a single unsigned-integer.
A2-1.4  S_MAX_STRING_LENGTH
A2-1.4.1  This property declares the maximum number of bytes permitted in any string within the file. Its value list
consists of a single unsigned-integer.
A2-1.5  S_POLYGON_MAX_VERTICES
A2-1.5.1  This  property  declares  the  maximum  number  of  vertices  permitted  in  any  polygon  within  the  file,
including any implicit vertices, but counting the initial vertex only once. Its value list consists of a single unsigned-
integer.
A2-1.6  S_PATH_MAX_VERTICES
A2-1.6.1  This property declares the maximum number of vertices permitted in any path within the file. Its value list
consists of a single unsigned-integer.
A2-1.7  S_TOP_CELL
A2-1.7.1  This property is used to declare the name of the “top cell” of a cell hierarchy. Its value list consists of a
single n-string. It may be repeated if more than one distinct cell hierarchy exists within the OASIS file in which it
appears.
A2-1.8  S_BOUNDING_BOXES_AVAILABLE
A2-1.8.1  This property indicates whether or not S_BOUNDING_BOX properties appear in CELLNAME records.
Its value list consists of a single unsigned-integer. A value of 0 means that S_BOUNDING_BOX properties are not
provided. A value of 1 means that at least some S_BOUNDING_BOX properties are provided. A value of 2 means
that an S_BOUNDING_BOX property is provided for every CELLNAME record.
A2-2  Cell-Level Standard Properties
A2-2.1  Any cell-level standard properties must appear immediately after the corresponding CELLNAME record in
an  OASIS  file.  Use  of  cell-level  standard  properties  is  optional—OASIS  processors  may  omit/ignore  any  or  all  of
them.
A2-2.2  S_BOUNDING_BOX
A2-2.2.1  This property may occur once after each CELLNAME record, and declares the bounding box of that cell.
Its value list consists of the following 5 fields: flags lower-left-x lower-left-y width height. The lower-
left-x and lower-left-y fields are signed-integers  representing  the  lower-left  corner  of  the  cell’s  bounding  box.  The
width  and  height  fields  are  unsigned-integers  representing  the  width  and  height  of  the  cell’s  bounding  box.  The


SEMI P39-0304
E2
© SEMI 2004 37
bounding  box  should  be  calculated  to  cover  the  full  extent  of  all  geometric  figures  and  text  element  (x,y)  points
within that cell and all of its subcells after a full expansion of any hierarchy beneath the cell.
A2-2.2.2  The flags field is an unsigned-integer. Only the least-significant 3 bits are presently defined, and have the
following meanings:
flags.bit.0: 0 = bounding box is known
1 = bounding box is unknown
flags.bit.1: 0 = bounding box is non-empty
1 = bounding box is empty
flags.bit.2: 0 = bounding box depends on no external cells
1 = bounding box depends on one or more external cells
A2-2.3  S_CELL_OFFSET
A2-2.3.1  This property may occur once after each CELLNAME record. Its value list consists of a single unsigned-
integer  which  declares  the  byte  offset  from  the  beginning  of  the  file  (byte  0)  to  where  the  corresponding  CELL
record appears in the file. An offset value of 0 denotes an external cell, with no corresponding CELL record in the
same OASIS file.
A2-3  Element-Level Properties
A2-3.1  S_GDS_PROPERTY
A2-3.1.1  This property is intended exclusively for compatibility with GDSII Stream properties. It may occur one or
more  times  after  any  element  within  a  CELL  definition.  Its  value  list  contains  exactly  two  values  in  sequence:
attribute,  an  unsigned-integer,  and  propvalue-string,  a  b-string.  These  values  correspond  to  GDSII  Stream
PROPATTR and PROPVALUE records, respectively.



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


SEMI P40-1103 © SEMI 2003 1
SEMI P40-1103
SPECIFICATION FOR MOUNTING REQUIREMENTS AND ALIGNMENT
REFERENCE LOCATIONS FOR EXTREME ULTRAVIOLET
LITHOGRAPHY MASKS
This  specification  was  technically  approved  by  the  Global  Micropatterning  Committee  and  is  the  direct
responsibility  of  the  North  American  Micropatterning  Committee.    Current  edition  approved  by  the  North
American  Regional  Standards  Committee  on  September  3,  2003.    Initially  available  at  www.semi.org
September 2003; to be published November 2003.
1  Purpose
1. 1            This      specification      covers      the      mounting
requirements   for   Extreme   Ultraviolet   Lithography
(EUVL) masks.
2  Scope
2. 1    This  standard  details  the  requirements  for  EUVL
mask  mounting.    The  mask  mount  is  a  flat  reference
surface   against   which   the   mask   is   clamped.      The
specific design and material of the mask mount are not
specified.
2. 1.1  The mounting requirements in this standard apply
to the exposure tool, the mask pattern generator and the
pattern  placement  metrology  tool.    As  an  option,  the
requirements   may   be   used   in   other   tools   used   to
fabricate or measure EUV masks.
2. 2    This  standard  also  defines  the  area  on  the  EUV
mask  reserved  for  proper  handling,  identification  (ID)
marks  and  alignment  references.  The  forms  of  the
alignment and ID marks are not specified.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI  P37  —  Specification  for  Extreme  Ultraviolet
Lithography Mask Substrates
SEMI  P38  —  Specification  for  Absorbing  Film  Stacks
and  Multilayers  on  Extreme  Ultraviolet  Lithography
Mask Blanks
NOTICE:  Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
4  Terminology
4. 1  Abbreviations and Acronyms
4. 1.1  EUV — extreme ultraviolet
4. 1.2  EUVL ó extreme ultraviolet lithography
4. 2  Definitions
4. 2.1  chuck ó  the  chuck  is  the  physical  apparatus  in
the tools listed in Section 2.1.1 upon which the mask is
mounted.
4. 2.2  mounting  surface ó  the  mounting  surface  is  the
surface  of  the  chuck  in  direct  contact  with  the  mask.
The  backside  of  the  mask,  which  is  the  unpatterned
side,   shall   be   in   direct   contact   with   the   mounting
surface while the mask is being used in the tools listed
in Section 2.1.1.
4. 2.3  pin  or  pedestal ó the  surface  of  the  chuck  may
consist  of  an  array  of  pins  or  pedestals.    Pins  are
protrusions from the chuck surface that come to a point
at the location on their surface farthest from the chuck.
Pedestals  have  a  nominally  flat  surface  at  their  surface
farthest  from  the  chuck.    Note  that  if  S
p
= P
p
in  Figure
5, the chuck is referred to as a pin chuck.  Otherwise, it
is a pedestal chuck.
4. 2.4  user ó   this   term   may   refer   to   the   user   of
fabrication  equipment  for  EUV  masks  that  contains  a
chuck,  or  this  term  may  refer  to  the  purchaser  of  an
EUV mask from a mask supplier.
5  Mask Layout Requirements
5. 1        The    square    substrates    shall    conform    to    the
dimensional tolerances as defined in Section 6 of SEMI
P37.    Datum  points  on  the  edges  of  the  mask  substrate
are defined in Figure 2 of SEMI P37.
5. 2    Masks  shall  have  areas  reserved  for  patterns  to  be
printed,   for   identification   (ID)   marks,   for   reticle
alignment  on  the  front  side  and  for  handling  as  shown
in Figure 1.
5. 2.1    The  mask  layout  shall  include  an  area  reserved
for the printable area, which has maximum dimensions


SEMI P40-1103 © SEMI 2003 2
of 104 mm by 132 mm.  This region is also centered on
the mask as shown in Figure 1.
5. 2.2      The   region   outside   of   the   printable   area   is
reserved  for  alignment  marks,  ID  marks  and  handling.
The  location  of  the  regions  for  these  items  is  to  be
negotiated between user and supplier.
6  Mounting Requirements
6. 1    The  mask  mounting  quality  area  is  indicated  in
Figure 2.  The dimensions of the mask mounting quality
area, D  and  W,  are  agreed  upon  beween  user  and
supplier.    The  edge  length  of  the  mask  substrate,  L,  is
defined in Table 1 of SEMI P37.
6. 2      The   mounting   surface   shall   meet   the   flatness
requirements  defined  in  Table  1  over  the  mounting
quality area shown in Figure 2.
6. 2.1    The  flatness  error  is  defined  as  the  maximum
deviation  of  the  surface  from  the  best  fit  plane  that
minimizes  the  maximum  deviation  of  the  mounting
surface   from   the   best   fit   plane.   This   definition   is
illustrated  in  Figure  3.    Note  that  the  mounting  surface
is defined in Section 4.2.2 .
6. 3    The  mounting  surface  may  be  discontinuous  and
not  touch  the  backside  at  all  points  within  the  flatness
quality area.  In other words, the mounting surface may
be an array of pins or pedestals.
6. 3.1    The  maximum  distance  between  these  pins  must
meet  the  requirements  shown  in  Table  4.    Figure  5
defines the pin spacing.
6. 3.2    Other  dimensions  of  the  pins  shown  in  Figure  5
are to be agreed upon between the user and supplier as
indicated  in  Table  4.    Note  that  if  S
p
= P
p
in  Figure  5,
the chuck is referred to as a pin chuck.
6. 3.3      If   the   mounting   surface   is   discontinuous   as
allowed   in   Section   6.3,   the   plane   that   defines   the
maximum  deviation  will  include  points  near  or  at  the
tops of the pins or pedestals.  This plane is illustrated in
Figure 4.
6. 4      The   mask   will   be   mounted   with   a   clamping
pressure as specified in Table 2. The clamping pressure
is  the  force  per  unit  area  in  the  plane  of  the  mounting
surface.    The  minimum  effective  bending  stiffness  of
the chuck cross section is specified in Table 3.
6. 5      The  mask  mounting  and  chuck  attributes  are  not
limited to EUVL exposure/stepper tool but apply to the
mask    pattern    generator    and    pattern    placement
metrology tools.
7  Test Methods
7. 1  Flatness   to  be  agreed  upon  between  user  and
supplier.
7. 2  Stiffness   to  be  agreed  upon  between  user  and
supplier.
7. 3  Clamping  Pressure   to  be  agreed  upon  between
user and supplier.
7. 4  Pin   or   Pedestal   Spacing,   Height,   Period   and
Sidewall Angle  to be agreed upon between user and
supplier.
8  Certification
8. 1    Upon  request  of  the  user,  a  supplier's  certification
that   the   chuck   was   manufactured   and   tested   in
accordance   with   this   specification,   together   with   a
report  of  the  test  results,  shall  be  furnished  at  the  time
of shipment.


SEMI P40-1103 © SEMI 2003 3
Maximum printable
field
(4x) 104 by 132 mm
(26 by 33 mm at
wafer)
Area reserved for

alignment marks, ID

marks, and handling

(The position of these

items are to be

negotiated between user

and supplier.)

Area for patterns printed on wafer
66. 0

76. 0

76. 0

52. 0

CL

CL


Figure 1
Layout of the Front Surface of the EUVL Mask, Showing Areas Reserved for Printed Patterns, ID Marks,
Alignment Marks and Handling
Units are in millimeters, and CL identifies the dotted lines as centerlines.

L
D
W
Mounting
quality
area
L

Figure 2
Dimensions of Mounting Quality Area



SEMI P40-1103 © SEMI 2003 4
Table 1  Flatness of the Mounting Surface
Any Square Region with Specified Edge Length (millimeters)                         Peak-to-Valley                         Flatness                         (nanometers)
150                                                                                                   48
75                                                                                                    24
40                                                                                                    12
25                                                                                                     8
20                                                                                                     6
10                                                                                                     3

Table 2  Clamping Pressure
Mean Clamping Pressure (KPa) Maximum Range of Clamping Pressure within Flatness Quality
Area (KPa)
15 ± 1.5
3. 0

Table 3  Minimum Effective Bending Stiffness of the Chuck Cross Section
Bending Stiffness (Newton-meter) (See Note 1.)
30,000
NOTE 1: The effective bending stiffness (D) of a chuck with a solid cross section is given by:
D=
Eh
3
12 1−ν
2
()

where E is the elastic modulus in N/m
3
, h is the thickness in meters and ν is Poisson’s ratio.

Table 4  Dimensions of Pins or Pedestals on Chuck Surface
Parameter Label for parameter in
Figure 5
Units                                  Required                                  Value
Maximum spacing S
p
millimeters                        10
Period                                                                      P
p
millimeters To be agreed upon between
user and supplier
Angle of sidewall
θ
degrees To be agreed upon between
user and supplier
Pin height H
p
microns To be agreed upon between
user and supplier



SEMI P40-1103 © SEMI 2003 5
P
1
Mounting surface
Flatness error
Chuck

Figure 3
Definition of Flatness Error
P
1
is the best fit plane that minimizes the maximum deviation of the surface from P
1
.

P
1
Mounting surface
Flatness error
Chuck

Figure 4
Definition of Flatness Error for a Pin or Pedestal Chuck
P
1
is the best fit plane that minimizes the maximum deviation from the surface that passes through the
highest points on the chuck surface.



SEMI P40-1103 © SEMI 2003 6
Pin sidewall angle
Chuck
Pin spacing, S
p
θ
Pin period, P
p
Pin height, H
p

Figure 5
Dimensions of Pins or Pedestals on the Chuck Surface

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
International), 3081 Zanker Road, San Jose, CA 95134. Reproduction o
f
the  contents  in  whole  or  in  part  is  forbidden  without  express  written
consent of SEMI.


SEMI P41-0304
E
© SEMI 2004 1
SEMI P41-0304
E

SPECIFICATION FOR MASK DEFECT DATA HANDLING WITH XML,
BETWEEN DEFECT INSPECTION TOOLS, REPAIR TOOLS, AND
REVIEW TOOLS
This  specification  was  technically  approved  by  the  Global  Micropatterning  Committee  and  is  the  direct
responsibility  of  the  Japanese  Micropatterning  Committee.    Current  edition  approved  by  the  Japanese
Regional Standards Committee on January 9, 2004.  Initially available at www.semi.org February 2004; to be
published March 2004.
E
This standard was modified in September 2004 to correct editorial errors. Changes were made to Tables 2
and 3.
1  Purpose
1. 1  This  data  structure  specification  uses  the  standard
XML  format  for  defect  information  communication
between   defect   inspection   tools,   repair   tools,   and
review tools at the mask production floor.
1. 1.1  Mutual use of the defect information between the
tools.
1. 1.2  Optional  usage  by  tools  and  systems  other  than
defect inspection, repair, and review tools.
1. 2  The     equipment     suppliers     who     utilize     this
standardized   data   structure   can   send   and   receive
required  information,  with  no  dependence  on  specific
software and specific hardware.
2  Scope
2. 1  This   standard   can   be   applied   to   defect-related
information     on     photomasks     for     semiconductor
manufacturing.
2. 2  This  data  structure  defines  the  data  hierarchy,  the
tag  name,  and  contents  of  an  XML  file,  which  are
transmitted.      A   particular   database   or   a   particular
programming language is not specified in this standard.
NOTICE:  This  standard  does  not  purport  to  address
safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  users  of  this  standard  to  establish
appropriate  safety  and  health  practices  and  determine
the applicability of regulatory or other limitations prior
to use.
3  Limitations
3. 1  This  standard  does  not  include  the  provision  of
defect information for wafer fabs.
3. 2  This standard does not specify particular schema.
3. 3  This  standard  does  not  address  the  name  space
issue.
4  Referenced Standards
4. 1
World Wide Web Consortium Documents
1

Extensible   Markup   Language   (XML)   1.0   (Second
Edition)          —          W3C,6          October          2000
(http://www.w3.org/TR/2000/REC-xml-20001006
)
4. 2  JEITA Documents
2

Reticle Data Management Guideline Ver.1.0 (2001)
NOTICE: Unless  otherwise  indicated,  all  documents
cited shall be the latest published versions.
5  Terminology
5. 1  Abbreviations and Acronyms
5. 1.1  MDML — Mask Defect Markup Language
5. 2  Definitions
5. 2.1  defect  inspection  information  —  the  information
gathered  with  mask  defect  inspection  tools,  such  as
defect position and shape.
5. 2.2  mask defect markup language — the name of the
XML file defined in this standard.
6  Requirements
6. 1  This  standard  defines  the  layered  structure  of  an
XML  file,  an  element  name,  an  attribute  name  and  the
contents described in them. Users of this standard have
to  define  the  style  of  the  information  described  in  an
element and an attribute, and it must be published.
6. 2  The  information  on  defect  inspection  information,
defect     repair     information,     and     defect     review
information  is  treated  as  one  file.    The  MDML  data
item specifications defined in this standard are shown in


1  World Wide Web Consortium (W3C), ,Website:
http://www.w3c.or
g
2  Japanese Electronic and Information Technology Industries
Association, Tokyo Chamber of Commerce and Industry Bldg. 2-2,
Marunouchi 3-chome, Chiyoda-ku, Tokyo 100-0005, Japan. Website:
http://www.jeita.or.jp


SEMI P41-0304
E
© SEMI 2004 2
Tables 2–7.  The columns in these tables are described
in the following sections.  A layered structure is shown
in Figures 2–7.  Figure 1 is explanation of Figures 2–7.
6. 2.1  Item Name Column — The name with which the
data item is referenced.
6. 2.2  Element    or    Attribute    Column    —    Indicates
whether the item is an element or an attribute.
6. 2.3  Mandatory   or   Optional   Column   —   Indicates
whether the item is mandatory or optional.
6. 2.4  Data Type Column — The type of data as defined
in Table 1.
Table 1  Data Types
Type                                                                                           Description
String A string of ASCII characters from 0 to 32767characters in length.
Integer A string of numeric characters (0 through 9) that represent an integer value.
Float A string representing a floating point value in exponent float.

6. 2.5  Description Column – Description of what the data item is and what value restrictions it has
Table 2  Description of Basic Information Section
Item
Element or
attribute
Mandatory or
Optional
Data Type Description
MDML                                                Element                                                Mandatory                                                -                                                Route                                                element.
data_no                                               Attribute                                               Optional                                               Integer                                               Management number in inspection tool.
date_stamp                                         Attribute                                         Optional            String            Generating time.
BasicInformation                                Element                                Mandatory                                -                                Top element of basic information.
MaskMaterialInformation Element Mandatory - Top element of material information.
MaskSize                                            Element                                            Mandatory                                            -                                            Mask                                            size                                            information.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
shape Attribute Optional String Mask substrate shape.
MaskSize_X Element Mandatory Float Mask substrate size X.
MaskSize_Y Element Mandatory Float Mask substrate size Y.
MaskThickness Element Mandatory Float Mask substrate thickness.
MaskAbsorber                                    Element                                    Optional                                    String                                    Masking                                    absorber.
DefectInspection                                 Element                                 Mandatory                                 -                                 Top                                 element of basic information on defect
inspection.
preparation_date                                 Attribute                                 Optional                                 String                                 Generating time of basic information on defect
inspection.
InspectionTool                                    Element                                    Mandatory                                    -                                    Top                                    element of defect inspection tool
information.
tool_name                                           Attribute                                           Optional                                           String General name of tool.
tool_no                                               Attribute                                               Optional                                               String                                               Tool                                               management number at mask fab.
ToolCoordinateInformation                Element                Mandatory                -                Top element of tool work stage coordinate
information. Subsequent structures are in Table

# 5

5.  Refer to Figure 9.
InspectionMethod                               Element                               Mandatory                               String Defect inspection method.
PreparationOperator                           Element                           Optional                           String                           Operator name who created inspection basic
information.
ReferenceAreaDB Element Optional String When reusable basic information exists, the
reference address is to be described.
DirectionInformation                          Element                          Mandatory                          -                          Top                          element of direction for Mask and tool work
stage. Subsequent structures are in Table 6. Refer
to Figure 10.
AreaInformation Element Mandatory - Top element of inspection area information.
LensDistance Element Optional Float Lens separation at the die to die inspection.


SEMI P41-0304
E
© SEMI 2004 3
Item
Element or
attribute
Mandatory or
Optional
Data Type Description
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
InspectionArea Element Mandatory - Top element of inspection area. Refer to Figure

# 8

8.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
InspectionArea_X                               Element                               Mandatory                               Float                               Inspection                               area                               X.
InspectionArea_Y                               Element                               Mandatory                               Float                               Inspection                               area                               Y.
InspectionAreaChip_X                       Element                       Mandatory                       Float                       Inspection area X of one die in die to die
inspection.
InspectionAreaChip_Y                       Element                       Mandatory                       Float                       Inspection area Y of one die in die to die
inspection.
ChipSize_X Element Mandatory Float Die size X in die to die inspection.
ChipSize_Y Element Mandatory Float Die size Y in die to die inspection.
InspectionChipNumber                      Element                      Mandatory - Element of die number.
InspectionChipNumber_X                  Element                  Mandatory                  Integer                  Inspected  number of die in X at die to die
inspection.
InspectionChipNumber_Y                  Element                  Mandatory                  Integer                  Inspected  number of die in Y at die to die
inspection.
Reference                                          Repeatable
Element
Mandatory - Top element of reference point.
origin                                                  Attribute                                                  Mandatory                                                  String                                                  Origin                                                  point name of this reference position.
ReferencePointName                          Element                          Mandatory          String          Reference          point          name.
ReferencePosition Element Mandatory - Element of reference position.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
ReferencePosition_X                          Element                          Mandatory Float X coordinate value of reference point.
ReferencePosition_Y                          Element                          Mandatory Float Y coordinate value of reference point.
ImageData                                        Repeatable
Element
Mandatory - Image data of reference position. Subsequent
structures are in Table 7.
InspectionStartPosition                       Element                       Mandatory                       -                       Top element of inspection starting position.
origin                                                  Attribute                                                  Mandatory                                                  String                                                  Origin                                                  point name of this reference position.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
InspectionStartPosition_X                  Element                  Mandatory Float X coordinate value of inspection start position.
InspectionStartPosition_Y                  Element                  Mandatory Float Y coordinate value of inspection start position.

Table 3  Description of Result Summary Section
Item
Element or
Attribute
Mandatory or
Optional
Data type Description
InspectionResult Element Mandatory - Top element of inspection results.
Summary Element Mandatory - Top element of summary information.
InspectionSummary Element Mandatory - Top element of defect inspection summary.
beginning_date                                   Attribute                                   Optional                                   String                                   Beginning time of defect inspection.
ending_date                                        Attribute                                        Optional                                        String                                        Ending time of defect inspection.
InspectionRecipe Element Mandatory - Element of inspection recipe.
recipe_name Attribute Optional String Inspection recipe name.
InspectionModeInformation               Element               Mandatory          String          Inspection          mode.
InspectionDetectionSummary Element Mandatory - Top element of detected defect summary.
TotalDefect Element Mandatory Integer Number of detected defects in total.
ClassifyDefect                                  Repeatable
Element
Mandatory Integer Number of defect types.


SEMI P41-0304
E
© SEMI 2004 4
Item
Element or
Attribute
Mandatory or
Optional
Data type Description
defect_type                                         Attribute                                         Mandatory                                         String                                         Defect                                         type.
InspectionOperator Element Optional String Inspection Operator name.
ReticleJudgment                                 Element                                 Optional            String            Reticle            disposition.
RepairSummary                                Repeatable
Element
Mandatory - Top element of repaired defect summary.
beginning_date                                   Attribute                                   Optional                                   String Beginning time of defect repair.
ending_date                                        Attribute                                        Optional                                        String                                        Ending time of defect repair.
RepairTool Element Mandatory - Top element of repair tool information.
tool_name                                           Attribute                                           Optional                                           String General name of tool.
tool_no                                               Attribute                                               Optional                                               String                                               Tool                                               management number in mask fab.
ToolCoordinateInformation                Element                Mandatory                -                Top element of tool work stage coordinate
information. Subsequent structures are in Table
5. Refer to Figure 9.
RepairMethod                                     Element                                     Mandatory                                     String Method of defect repairing.
DirectionInformation                          Element                          Mandatory                          -                          Top                          element of direction for Mask and tool work
stage. Subsequent structures are in Table 6. Refer
to Figure 10.
NumberRepairProcessing                   Element                   Mandatory                   -                   Element of number of repair processed.
TotalRepairProcess Element Mandatory Integer Number of repaired defects in total.
CalssifyRepairProcess                      Repeatable
Element
Mandatory Integer Number of defect types.
defect_type                                         Attribute                                         Mandatory                                         String                                         Defect                                         type.
RepairOperator                                   Element                                   Optional            String            Repair            operator            name.
RepairJudgment                                  Element                                  Optional                                  String                                  Judegement of repair process.
EvaluationSummary                         Repeatable
Element
Mandatory - Top element of evaluated defect summary.
beginning_date                                   Attribute                                   Optional                                   String Beginning time of evaluation.
ending_date                                        Attribute                                        Optional                                        String Ending time of evaluation.
EvaluationTool                                   Element                                   Mandatory                                   -                                   Top                                   element of evaluation tool information.
tool_name                                           Attribute                                           Optional                                           String General name of tool.
tool_no                                               Attribute                                               Optional                                               String                                               Tool                                               management number in mask fab.
ToolCoordinateInformation                Element                Mandatory                -                Top element of tool work stage coordinate
information. Subsequent structures are in Table
5. Refer to Figure 9.
EvaluationMethod                              Element                              Mandatory                              String Method of defect evaluation.
DirectionInformation                          Element                          Mandatory                          -                          Top                          element of direction for Mask and tool work
stage. Subsequent structures are in Table 6. Refer
to Figure 10.
NumberEvaluationProcessing            Element            Mandatory              -            Element of number of evaluation process.
TotalEvaluationProcess Element Mandatory Integer Number of evaluated defects in total.
CalssifyEvaluationProcess               Repeatable
Element
Mandatory Integer Number of defect types.
defect_type                                         Attribute                                         Mandatory                                         String                                         Defect                                         type.
EvaluationOperator                             Element                             Optional String Evaluation operator name.
EvaluationJudgment                           Element                           Optional                           String Judgment of evaluation process.



SEMI P41-0304
E
© SEMI 2004 5
Table 4  Description of Each Defect Section
Item
Element or
Attribute
Mandatory or
Optional
Data Type Description
Defect                                               Repeatable
Element
Mandatory - Top element of each defect information.
defect_type                                         Attribute                                         Mandatory                                         String                                         Defect                                         type.
date_stamp                                         Attribute                                         Optional                                         String                                         Date                                         classified.
DefectInformation                              Element                              Mandatory                              -                              Top element of defect information.
origin                                                  Attribute                                                  Mandatory                                                  String                                                  Origin                                                  point name of this reference position.
DefectPosition                                    Element                                    Mandatory                                    - Element of defect position.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
DefectPosition_X                               Element                               Mandatory                               Float                               X                               coordinate value of defect position.
DefectPosition_Y                               Element                               Mandatory                               Float                               Y                               coordinate value of defect position.
DefectSize Element Mandatory - Element of defect size.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
DefectSize_X Element Mandatory Float X size value of defect.
DefectSize_Y Element Mandatory Float Y size value of defect.
DefectJudgment                                  Element                                  Mandatory String Judgment of defect.
ImageData                                         Repetable
Element
Mandatory - Image data of defect.  Subsequent structures are
in Table 7.
DefectRepair                                     Repetable
Element
Mandatory - Top element of defect repair.
date_stamp                                         Attribute                                         Optional                                         String Repair processing date.
RepairRecipe                                      Element                                      Mandatory                                      - Element of repair recipe.
recipe_name                                       Attribute                                       Optional                                       String Repair recipe name.
RepairCondition                                 Element                                 Mandatory          String          Repair          conditions.
RepairResult                                       Element                                       Mandatory                                       String                                       Repair                                       results.
ImageData                                         Repetable
Element
Mandatory - Image data of repaired defect.  Subsequent
structures are in Table 7.
DefectEvaluate                                  Repetable
Element
Mandatory - Top element of defect evaluation.
date_stamp                                         Attribute                                         Optional                                         String Evaluation  processing date.
EvaluateRecipe Element Mandatory - Element of evaluation recipe.
recipe_name Attribute Optional String Evaluation recipe name.
EvaluateCondition                              Element          Mandatory          String          Evaluation          condition.
EvaluateResult                                    Element                                    Mandatory                                    String                                    Evaluation                                    result.
ImageData                                         Repetable
Element
Mandatory - Image data of evaluated defect. Subsequent
structures are in Table 7.

Table 5  Description of Tool Coordinate Section
Item
Element or
attribute
Mandatory or
Optional
Data Type Description
CoordinateSystem                              Element                              Mandatory                              String Coordinate system of tool.
ToolOriginPointInformation              Element              Mandatory              - Element of origin point information.
ToolOriginPoint Element Mandatory String Tool origin point information.
ToolOriginPosition Element Mandatory - Element of origin position.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
ToolOriginPosition_X                        Element                        Mandatory                        Float                        X                        coordinate value of tool origin position.


SEMI P41-0304
E
© SEMI 2004 6
Item
Element or
attribute
Mandatory or
Optional
Data Type Description
ToolOriginPosition_Y                        Element                        Mandatory                        Float                        Y                        coordinate value of tool origin position.
ToolStageCorrectionInformation       Element         Mandatory - Top element of tool work stage correction
information.
ToolStageCorrection Element Mandatory - Element of correction information.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
ToolStageCorrection_X                      Element                      Mandatory                      Float Correction information of X coordinates.
ToolStageCorrection_Y                      Element                      Mandatory                      Float Correction information of Y coordinates.
ToolStageSkew Element Mandatory - Element of skew correction information.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
ToolStageSkewCorrection                  Element                  Mandatory           Float           Skew           correction           information.
MaskOriginPointInformation Element Mandatory - Top element of mask origin position.
MaskOriginPoint Element Mandatory String Mask origin point information.
MaskOriginPosition Element Mandatory - Element of mask origin position.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
MaskOriginPosition_X                       Element                       Mandatory                       Float                       X                       coordinate value of mask origin position.
MaskOriginPosition_Y                       Element                       Mandatory                       Float                       Y                       coordinate value of mask origin position.
ToolOffset Element Mandatory - Element of relative position information on tool
origin and mask origin.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
ToolOffset_X                                      Element                                      Mandatory                                      Float                                      X                                      offset value of relative position of tool origin
and mask origin.
ToolOffset_Y                                      Element                                      Mandatory                                      Float                                      Y                                      offset value of relative position of tool origin
and mask origin.
ToolStageAccuracy                            Element                            Optional                            -                            Tool work stage positioning accuracy
information.
unit                                                     Attribute                                                     Optional                                                     String                                                     Unit                                                     system.

Table 6  Description of Mask Direction Information Section
Item
Element or
attribute
Mandatory or
Optional
Data Type Description
ReferenceMark                                   Element                                   Mandatory                                   String                                   Information on the reference mark for expressing
direction of mask.
MarkRotation                                      Element                                      Mandatory                                      String                                      Information of rotation direction on mask.
MaskMirror                                         Element                                         Mandatory                                         String                                         Information of mirror direction information on
mask.
MaskFlip                                             Element                                             Mandatory                                             String                                             Information of flip direction information on
mask.

Table 7  Description of Image Data Section
Item
Element or
Attribute
Mandatory or
Optional
Data Type Description
ImageReferenceAddress Element Optional String Reference address information of image data.
ImageInformation Element Mandatory - Element of image data information.
ImageFormat Element Mandatory String Image data format information.
ImageMagnification Element Mandatory Float Image data magnification information.
ImagePixelNumber_X Element Mandatory Integer Number of pixels in X.
ImagePixelNumber_Y Element Mandatory Integer Number of pixels in Y.


SEMI P41-0304
E
© SEMI 2004 7
Item
Element or
Attribute
Mandatory or
Optional
Data Type Description
ImagePixelSize Element Mandatory - Element of pixel size on image data.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
ImagePixelSize_X                              Element                              Mandatory Float Size of one pixel in X.
ImagePixelSize_Y                              Element                              Mandatory Float Size of one pixel in Y.
ImageGrayLevel Element Mandatory String Gray level information of image data.
ImageIllumination Element Mandatory String Illumination information of image data.
ImageRotation Element Mandatory String Rotation information of image data.
ImageMirror                                       Element                                       Mandatory                                       String                                       Mirrorring information of image data.
ImageFlip                                            Element                                            Mandatory                                            String                                            Flipping information of image data.
ImageConvertInformation                  Element Optional - Element of image conversion information from
original/raw data.
ImageContrast                                    Element                                    Mandatory                                    String       Image       contrast       information.
ImageBrightness                                 Element                                 Mandatory                                 String Image brightness information.
ImageConversionParameter               Element               Mandatory               String               Image               conversion parameter information.
ImageReference Element Mandatory - Top element of image origin point. Refer to
Figure 11.
origin                                                  Attribute                                                  Mandatory                                                  String                                                  Origin                                                  point name of this reference position.
ImageReferencePoint Element Mandatory String Image reference point information.
ImageReferencePosition Element Mandatory - Element of image reference position coordinate
value.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
ImageReferencePosition_X                Element                Mandatory                Float                X coordinates value of image reference position.
ImageReferencePosition_Y                Element                Mandatory                Float                Y coordinates value of image reference position.
ImageTarget Element Mandatory - Element of image target.
origin                                                  Attribute                                                  Mandatory                                                  String                                                  Origin                                                  point name of this reference position.
ImageTargetPosition                          Element                          Mandatory                          -                          Element of target position on image data. Refer
to Figure 12.
unit                                                     Attribute                                                     Mandatory                                                     String                                                     Unit                                                     system.
ImageTargetPosition_X                      Element          Mandatory           Float          X          coordinate          value of image target position.
ImageTargetPosition_Y                      Element          Mandatory           Float          Y          coordinate          value of image target position.
ExpressionMark                                  Element                                  Mandatory                                  String                                  Expression of target point on image data.

MDML (data_no,date_stamp)
BasicInformation
Element name
Attribute name
Top element
Under element
InspectionResult
+ Defect(defect_type,data_stamp)
Repeatable mark

Figure 1
Explanation of Figures 2–7


SEMI P41-0304
E
© SEMI 2004 8
MDML (data_no,date_stamp)
BasicInformation
MaskSize (unit,shape)
MaskSize_X
MaskSize_Y
MaskThickness
MaskAbsorber
DefectInspection (preparation_data)
InspectionTool (tool_name,tool_no)
ToolCoordinateInformation
InspectionMethod
PreparationOperator
ReferenceAreaDB
Subsequent structures are in Figure 5.
DirectionInformation
AreaInformation
LensDistance (unit)
InspectionArea (unit)
InspectionArea_X
InspectionArea_Y
InspectionAreaChip_X
InspectionAreaChip_Y
ChipSize_X
ChipSize_Y
InspectionChipNumber
InspectionChipNumber_X
InspectionChipNumber_Y
+ Reference (origin)
ReferencePointName
ReferencePosition (unit)
ReferencePosition_X
ReferencePosition_Y
+ ImageData
InspectionStartPosition (origin,unit)
InspectionStartPosition_Y
InspectionStartPosition_X
MaskMaterialInformation
Subsequent structures are in Figure 6.
Subsequent structures are in Figure 7.
Subsequent structures are in Figure 3.

Figure 2
Structure of Basic Information Section



SEMI P41-0304
E
© SEMI 2004 9
InspectionResult
Summary
InspectionSummary (beginning_date,ending_date)
InspectionRecipe (recipe_name)
InspectionModeInformation
InspectionDetectionSummary
TotalDefect
+ ClassifyDefect (defect_type)
InspectionOperator
ReticleJudgement
+RepairSummary (beginning_date,ending_date)
RepairTool (tool_name,tool_no)
RepairMethod
ToolCoordinateInformation
Subsequent structures are in Figure 5.
NunberRepairProcessing
DirectionInformation
TotalRepairProcess
+ ClassifyRepairProcess (dafect_type)
RepairOperator
RepairJudgement
+EvaluationSummary (beginning_date,ending_date)
EvaluationTool(tool_name,tool_no)
EvaluationMethod
ToolCoordinateInformation
NunberEvaluationProcessing
DirectionInformation
TotalEvaluationProcess
+ ClassifyEvaluationProcess (defect_type)
EvaluationOperator
EvaluationJudgement
Subsequent structures are in Figure 6.
Subsequent structures are in Figure 5.
Subsequent structures are in Figure 6.
Subsequent structures are in Figure 4.

Figure 3
Structure of Result Summary Section



SEMI P41-0304
E
© SEMI 2004 10
+ Defect (defect_type,date_stamp)
DefectInformation (origin)
DefectPosition_X
DefectPosition_Y
DefectSize (unit)
DefectSize_Y
DefectSize_X
DefectJudgement
+ ImageData
DefectPosition (unit)
+ DefectRepair (date_stamp)
RepairRecipe (recipe_name)
RepairCondition
RepairResult
+ ImageData
+ DefectEvaluate (date_stamp)
EvaluateRecipe (recipe_name)
EvaluateCondition
EvaluateResult
+ ImageData
subsequent structures are in Figure 7.
subsequent structures are in Figure 7.
subsequent structures are in Figure 7.

Figure 4
Structure of Each Defect Section
