---
title: "SEMI Standards - Chapter 145"
description: "SEMI标准文档"
sidebar_label: "SEMI Standards - Chapter 145"
sidebar_position: 1450
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-145.pdf'
  chapter: 145
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/145.pdf"
  pdfSize="2.95MB"
  title="SEMI Standards - Chapter 145"
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI ME1392-0305 © SEMI 2003, 2005 10
APPENDIX 1
GEOMETRY
NOTICE: The material in this appendix is an official part of SEMI ME1392.  It was developed during the original
approval  of  this  standard  by  ASTM  Committee  E12  in  1996.    SEMI  approval  was  by  full  letter  ballot  procedures
with publication authorized by the NA Regional Standards Committee on December 10, 2004.
A1-1  Relationship between the Sample (X, Y, Z) and Beam (XB, YB, and ZB) Coordinate Systems
A1-1.1  The Z  and  ZB axes  are  always  the  local  normal  to  the  sample  face.    Locations  on  the  sample  face  are
measured in the sample coordinate system.  The incident and scatter directions are measured in the beam coordinate
system.  If the sample fiducial mark is not an X axis mark, the intended value must be indicated on the sample (see
Figure A1-1).

NOTE 1: The X-Y zero position on the sample face is assumed to be the geometric center of the sample.
NOTE 2: The fiducial mark can be on the edge or back of the sample.  For silicon wafers, the primary fiducial mark (flat or
notch) is on the circumference of the wafer at its intersection with the –y-axis.
Figure A1-1
Relationship Between Sample and Beam Coordinate Systems
A1-2  Angle Conventions for the Incident and Scattered Light in the Beam Coordinate System
A1-2.1  The projection of the incident direction onto the sample face is the −XB axis.  Azimuth angles are measured
from the XB axis.  The incident azimuth angle,
φ
i
, is always 180° so φ
s
can be used directly in the common form of
the grating equation (see Figure A1-2).

NOTE: The plane of incidence (PLIN) is the I-O-ZB plane.  The scatter plane is the S-O-ZB plane.
Figure A1-2
Angle Conventions


SEMI ME1392-0305 © SEMI 2003, 2005 11
A1-3  Receiver Geometry
A1-3.1  In  many  cases  the  field  stop  is  set  by  the  detector  size;  however,  as  the  aperture  stop  approaches  the  field
stop  the  risk  of  seeing  unwanted  stray  light  increases.    Other  receiver  geometries  may  be  used.    They  all  have
effective aperture and field stops and it is good operating practice to make them well defined.

NOTE: A = illuminated area with average E = P
i
/A, FOV = field of view that must include all area, A.  The Aperture Stop limits
the size of Ω , and the Field Stop limits the size of the FOV.
Figure A1-3
Receiver Geometry


SEMI ME1392-0305 © SEMI 2003, 2005 12
RELATED INFORMATION 1
ADDITIONAL DATA PRESENTATION
NOTICE:  This  related  information  is  not  an  official  part  of  SEMI  ME1392  and  is  not  intended  to  modify  or
supercede  the  officiall  standard.    It  was  developed  during  the  original  approval  of  this  standard  by  ASTM
Committee E12 in 1996.  SEMI approval was by full letter ballot procedures with publication authorized by the NA
Regional Standards Committee on December 10, 2004.  Determination of the suitability of the material is solely the
responsibility of the user.
R1-1  ∆
θ Presentation
R1-1.1  It  is  common  practice  to  plot  BRDF  with  respect  to  the  angle  from  the  specular  beam,  ∆
θ.    If  scatter  is
measured only in the PLIN, ∆
θ = θ
s
− θ
i
.  However, in the more general case for scatter out of the PLIN:

()
ssisi
φθθθθθcossinsincoscoscos
1
+=∆
−
(R1-1)
R1-1.2  This  is  a  useful  angular  reference  for  specular  samples.    However,  when  using  this  format,  care  must  be
taken  that  ∆
θ  is  not  confused  with  θ
s
in  the  calculation  of  BRDF.    This  presentation  format  is  normally  used  only
when ∆
θ passes through zero, that is, when the scatter scan includes the specular beam.
R1-1.3  The terms “forward scatter” and “back scatter” refer to PLIN scatter directions for which ∆
θ is respectively
positive or negative.  Note that ∆
θ continues to increase as a negative angle when passing the surface normal since
the sign of
φ
s
switches in the above equation.
R1-2  ∆
β Presentation
R1-2.1  ∆
β = β − β
o
,  where  β = sinθ
s
and  β
o
= sinθ
i
,  is  a  method  of  expressing  the  angle  between  the  specular  and
scatter  directions  in  direction  cosine  space  along  the  surface  for  scatter  in  the  PLIN.    This  is  a  very  useful
normalization when scatter results only from surface microroughness, and the grating equation:

fn
is
λθθ±=sinsin                                                                      (R1-2)
where:
λ
=    wavelength of the incident flux,
f =    linear spatial frequency for the microroughness in the x or y direction, and
n     =     diffraction     order.
This equation can be used to relate
θ
s
to the frequency, f.  Only the first order (n  = 1) is significant for roughness
much less than the wavelength.  BRDF can now be interpreted as the ability of each frequency to scatter light.  If
BRDF is plotted against a ∆
β scale it may be independent of θ
i
and proportional to f.  If the surface behaves in this
way the BRDF is “shift invariant.”
11

R1-2.2  In the general case for scatter out of the PLIN the following two dimensional grating equations apply:

xiss
fnλθθφ±=sinsincos                                                                (R1-3)
and

yss
fnλφθ±=sinsin
(R1-4)
The definition of ∆
β must be expanded to include the projection of the scattered light in the X and Y directions:

ssisi
θθθθθβcossinsin2sinsin
222
−+=∆                                                  (R1-5)


11  Harvey, James E., “Light Scattering Characteristics of Optical Surfaces,” Proceedings SPIE 107, 41 (1977)


SEMI ME1392-0305 © SEMI 2003, 2005 13
R1-3  Reflectance Factor
R1-3.1  A  measure  of  diffuse  reflectance  in  common  use  is  the  reflectance  factor,  R,  that  is  the  ratio  of  flux
propagated  from  source  to  receiver  in  a  reflectometer  with  a  specimen,  to  the  flux  propagated  with  a  perfectly
reflecting  diffuser.    Regarding  a  scatterometer  as  a  very  directional  bi-directional  reflectometer,  the  following
relationship between R and BRDF is obtained as follows:

BRDF
1/
BRDF
BRDF
BRDF
diffuser
π
π
===R
(R1-6)
Additional information can be found in ASTM Practice E 167.  Note that reflectance factor and specular reflectance
share the same symbol, R, but they are not the same parameter.


SEMI ME1392-0305 © SEMI 2003, 2005 14
RELATED INFORMATION 2
MODEL DEPENDENT CALCULATED PARAMETERS
NOTICE:  This  related  information  is  not  an  official  part  of  SEMI  ME1392  and  is  not  intended  to  modify  or
supercede the official standard.  It was developed during the original approval of this standard by ASTM Committee
E12  in  1996.    SEMI  approval  was  by  full  letter  ballot  procedures  with  publication  authorized  by  the  NA  Regional
Standards  Committee  on  December  10,  2004.    Determination  of  the  suitability  of  the  material  is  solely  the
responsibility of the user.
R2-1  Total Integrated Scatter (TIS)
R2-1.1  TIS can be calculated from BRDF by integrating BRDF over the hemisphere.
12
Typically a 5° total angle
“hole”  is  left  around  the  specular  beam  since  specular  light  is  not  included  in  total  integrated  scatter  (see  SEMI
MF1048).
R2-1.1.1  For  an  isotropic  surface,  measure  in-plane  BRDF  at
θ
i
=  0  and  calculate  the  expected  total  integrated
scatter by integrating over the angle limits specified in SEMI MF1048.

∫
°
°
−
=
70
5. 2
1
calculated
dsinBRDFcos2TIS
sss
Rθθθπ                                                  (R2-1)
R2-1.1.2  Sample specular reflectance, R, must be included because total integrated scatter is referenced to reflected
and  not  incident  power.    The  cos
θ
s
term  must  be  included  because  BRDF  is  defined  in  terms  of  the  projected
receiver  aperture.    This  comparison  between  total  integrated  scatter  and  BRDF  may  not  be  exact  since  the  total
integrated  scatter  detector  is  less  sensitive  to  light  incident  on  the  detector  at  large  angles  and  if  low  f  (close  to
specular) scatter dominates, the 5° hole size is critical.  In addition a TIS instrument is not polarization selective.
R2-2  Roughness
R2-2.1  The  rms  surface  roughness,
σ,  is  an  often  quoted  number  that  can  be  obtained  from  direct  profile
measurements with stylus or optical profilometers.  It can also be inferred from total integrated scatter when,
σ <<
λ/4π for front surface scatter from a clean, smooth surface,
13
as described in SEMI MF1048.

()
2/1
TIS
4
⎟
⎠
⎞
⎜
⎝
⎛
=
π
λ
σ
(R2-2)
R2-2.1.1  The  user  must  confirm  the  usefulness  of  this
σ  calculation  based  on  the  particular  measurement
circumstances.  It may have strong frequency limitations and not agree with surface roughness derived from optical
or mechanical profile instruments (which can have different spatial frequency limits
14
).
R2-3  Power Spectrum
R2-3.1  The  surface  power  spectral  density  function  (PSD)  can  be  calculated  from  the  BRDF  through  a  scatter
model.    For  example,  the  grating  equation  model  discussed  in  §R1-2  shows  that  high  frequency  surface
perturbations  scatter  light  far  from  specular  and  low  frequency  perturbations  scatter  close  to  specular.    The  PSD
shows the amount of modulation versus f , that is, the square of the Fourier transform of the surface profile.  Since it
is  a  sample  property,  the  same  PSD  should  be  obtained  regardless  of  wavelength  and  incident  angle  dependent
differences in the BRDF data.
R2-3.2  Wavelength  scaling  is  another  check  on  system  calibration.    Smooth,  clean,  nonabsorbing  front  surface
reflectors  should  yield  the  same  PSD  for  different  BRDF  measurement  wavelengths.    If  the  instrument  does  not
wavelength  scale  on  appropriate  samples,  the  BRDF  measurement  may  be  suspect.    Polished  molybdenum  and


12  Stover, John C., Hourmand, Bahram, and Kahler, Jeffrey, A., “Comparison of Roughness Measurements by Differential Scatter and Total
Integrated Scatter,” Proceedings SPIE 511, 2-6 (1984).
13  Stover, John C.,  Optical Scattering: Measurement and Analysis, 2nd Edition, (SPIE Optical Engineering Press.  Bellingham, WA, 1995)
Chapter 4.
14  Bennet, Jean M., and Mattsson, Lars, Introduction to Surface Roughness and Scattering (Optical Society of America, Washington, DC, 1989)
p. 32.


SEMI ME1392-0305 © SEMI 2003, 2005 15
silicon  wafers  are  two  examples  of  surfaces  that  have  been  shown  to  wavelength  scale  from  the  visible  into  the
infrared.  Many beryllium mirrors and silicon carbide mirrors have been shown to not wavelength scale because of
anomalous scatter that arises from features other than surface roughness.


SEMI ME1392-0305 © SEMI 2003, 2005 16
RELATED INFORMATION 3
SUGGESTED REPORTING FORMAT
NOTICE:  This  related  information  is  not  an  official  part  of  SEMI  ME1392  and  is  not  intended  to  modify  or
supercede the official standard.  It was developed during the original approval of this standard by ASTM Committee
E12  in  1996.    SEMI  approval  was  by  full  letter  ballot  procedures  with  publication  authorized  by  the  NA  Regional
Standards  Committee  on  December  10,  2004.    Determination  of  the  suitability  of  the  material  is  solely  the
responsibility of the user.
R3-1   There is a considerable amount of information that should accompany BRDF measurements.  This suggested
data  file  format  (see  Table  R3-1)  divides  the  information  into  descriptive  headers  followed  by  a  data  sequence  of
variables.  The headers consist of laboratory information, system information, sample information and measurement
parameters.  These are simply generic labels that help to organize the fields under the headers.  Any of the header
fields can be a variable in the data sequence; however, variables are normally limited to measurement parameters.
R3-2   The data files are stored as ASCII text fields.  Each set of data taken is stored as a  separate  data  file.    Each
field  in  the  headers  and  each  data  point  in  the  data  sequence  begins  on  a  new  line  (carriage  return–line  feed  pair
terminates each line).  Multiple items under each field in the headers and multiple variables per data point field in
the data sequence are separated by commas.  Each field in the headers has a unique one word name preceding the
field contents on the same line.  This name identifies the contents of the field.  The first character of a name must be
an alpha character.
R3-3   The data sequence must come at the end of the file.  Each line in the data sequence represents a single data
point.  It must begin with a numeric character, the “+” character or the “−” character.  Multiple variables for each
data point are on the same line but separated by commas.  This permits the data sequence to be printed as a set of
columns.    Each  variable  must  remain  in  the  same  column  throughout  a  file.    The  VARS  field  specifies  which
variable is in each column.
R3-4   Because  of  the  name  tag,  there  is  no  position  dependence  for  information  in  the  headers.    The  number  of
header fields can vary from one data file to another.  If a certain field is not in the file it means that information was
not  recorded  or  does  not  apply  to  that  measurement.    Every  user  should  supply  a  format  template  for  their  header
and  data  sequence  in  order  to  expedite  conversion  from  site  to  site  and  avoid  confusion  over  units  and  field  size.
Fields  can  easily  be  added  to  the  headers  if  sufficient  descriptive  text  is  provided  in  the  field  or  on  the  template.
Fields can be added or deleted from old data sets without obsoleting the data file.  This is a suggested list of fields in
a recommended grouping and order.  Additional fields can be defined by users, and they can be added to this guide
as they become accepted by the scatter community.
Table R3-1  Suggested Data Format
LABORATORY INFORMATION


LAB_NAME text field with the name of the facility

LAB_ADD                              street                              address of the facility

LAB_CITY city the facility is located in

LAB_STATE state the facility is located in

LAB_ZIP                                 zip                                 code

LAB_PHONE phone number of the laboratory

LAB_OPERATOR name of the operator

LAB_COMMENTS comments that pertain to the laboratory in open format
SYSTEM INFORMATION


SYSTEM_NAME name of the instrument the data was measured with; many facilities have more than one
scatter instrument

SOURCE_KW key words describing the source assembly such as laser, coherent, broad band, blackbody, or
vendor

RX_KW key words describing the receiver assembly such as cooled, silicon, array, HgCdTe


SEMI ME1392-0305 © SEMI 2003, 2005 17

APERTURE text field that describes the type of receiver aperture (circular, slit, bow tie, other)

NORM normalization method — absolute (A), relative BRDF (R), relative specular reflectance (S),
relative total reflectance (T)

FILE_REF name/number/id of the file that contains the reference sample information for the instrument
and this measurement

FILE_SIG name/number/id of the file that contains the signature information for the instrument and this
measurement

NEBRDF                                 noise                                 equivalent                                 BRDF of the instrument

ERROR error levels expected in the BRDF measurement

SYSTEM_COMMENTS comments that pertain to the system, for example, the type of normalization used
SAMPLE INFORMATION


SAMPLE_NAME name or id number of the sample

SAMPLE_TYPE type of sample such as mirror, lens, window, grating, baffle substrate, paper

SAMPLE_VEND name of the sample vendor

SAMPLE_ADD street address of the sample vendor

SAMPLE_CITY city of the sample vendor

SAMPLE_STATE state of the sample vendor

SAMPLE_ZIP zip code of the sample vendor

SAMPLE_PHONE phone number of the sample vendor

SAMPLE_CONTACT name of a contact person for the sample

SAMPLE_KW key words describing the sample such as silver, black, diffuse, grating, specular, one-
dimensional, two-dimensional, color

MANUF_KW key words describing the manufacturing process of the sample such as molded, polished,
ground, diamond-turned, crystal

TREAT_KW key words describing the treatment process of the sample such as cleaned, radiated, e-beam,
dust, contaminated

SHAPE_KW key words describing the shape of the sample such as flat, square, circular, spherical,
hemisphere, ellipse, irregular

FS_AREA surface area of the front surface of the sample

SIZE_DIM diameter or the sample

SIZE_X size of the sample at the sample center from edge to edge in the x dimension

SIZE_Y size of the sample at the sample center from edge to edge in the y dimension

SIZE_Z thickness of the sample at the sample center

SUB_MAT sample substrate material

SUB_N substrate index of refraction, n

SUB_K                                    substrate                                    extinction                                    coefficient,                                    k

FS_FINISH_KW key words describing sample front surface finish such as coated, superpolish, hardened,
ground, irradiated, smooth, rough

BS_FINISH_KW key words describing the sample back surface finish

FS_CURV the inverse of the radius of curvature of the sample front surface, convex is positive, concave
is negative

BS_CURV the inverse of the radius of curvature of the sample back surface

FS_COAT description of the coating on the front surface

FS_SPEC_REFL specular reflectance of the sample front surface

FS_SPEC_TRAN specular transmittance of the sample when the front surface is incident

FS_DIFF_REFL                      total                      hemispherical reflectance of the sample front surface

FS_DIFF_TRAN total hemispherical transmittance of the sample when the front surface is incident

CLEAN description of the cleaning procedure

SAMPLE_COMMENTS         comments         that pertain to the sample
MEASUREMENT PARAMETERS

MEAS_NAME a descriptive name for the measurement


SEMI ME1392-0305 © SEMI 2003, 2005 18

FILE_NAME name/number/id of this data file

MEAS_DATE date the measurement was made, mm-dd-yyyy

MEAS_TIME time the measurement finished, hh:mm:ss, 24 h format

MODE indicates whether the sample was measured in a reflective (R), transmissive (T) or both (B)
mode or is a signature (S), Values are R, T, B, S

NUM_AVE the number of measurements averaged for each data point in the data sequence

NUM_POINTS the number of data points in the data sequence, this is a mandatory field

VARS list of the field names for the variables that will appear in the data sequence, the entry after
each of these fields in the headers will be var1, var2, var3, etc.  depending on the position
(column) in the data sequence

BRDF BRDF of the sample, this is normally var1

WAVELENGTH
center wavelength of the source, units are μm

BANDWIDTH bandwidth of the source, FWHM

ALPHA                                    the                                    sample                                    x axis position as measured from the incident plane or XB axis in degrees

THETA_I
angle of incidence,
θ
i


PHI_I
incident azimuthal angle,
φ
i


THETA_S
polar angle from sample normal,
θ
s


PHI_S
scatter azimuthal angle,
φ
s


POWER_INC total incident power on sample in watts

POWER_SCTR scattered power from the sample in watts

SPOT_SIZE
illuminated spot size, A, on the sample defined by the exp
−2
power points

SOURCE_POL_I I component of the stokes vector defining the source polarization

SOURCE_POL_M M component of the stokes vector defining the source polarization

SOURCE_POL_C C component of the stokes vector defining the source polarization

SOURCE_POL_S S component of the stokes vector defining the source polarization

RX_POL_I I component of the stokes vector defining the receiver polarization selection

RX_POL_M M component of the stokes vector defining the receiver polarization selection

RX_POL_C C component of the stokes vector defining the receiver polarization selection

RX_POL_S S component of the stokes vector defining the receiver polarization selection

SOURCE_POL_ORN the angular orientation of linear polarization for the source light wrt the PLIN,  p = 0°,
s = 90°, in degrees from 0 to 90°

RX_POL_ORN the angular orientation of a linear polarizer in the receiver wrt the scatter plane, P = 0°,
S = 90°, in degrees from 0 to 90°

RX_DIST rotational radius of the aperture stop defining the solid angle for the BRDF calculation

APER_SIZE size of the aperture stop, this is the width of a slit or the diameter of a circular aperture or the
area of a bow tie or other type of complex aperture

RX_FOV receiver FOV in steradians

SAMPLE_TEMP sample temperature in degrees K

SAMPLE_ATM_KW key words that describe the test atmosphere surrounding the sample during the measurement
such as vacuum, air, vapor, chemical

SAMPLE_PRES pressure of the gas surrounding the sample in torr

SAMPLE_HUMID humidity of the gas surrounding the sample in percent

SOURCE_CONV                    the                    source                    convergence                    or divergence at the sample in radians, convergence is positive and
divergence is negative

SPOT_X illuminated spot position in the X direction with respect to sample center

SPOT_Y illuminated spot position in the Y direction with respect to sample center

SPOT_Z sample front surface location with respect to the center of rotation of the instrument.  A
sample mounted so the front surface was the surface inspected would have a value of 0.0.  A
sample mounted so the back surface was the surface inspected such as a back surface
reflector would have a value equal to the sample thickness

MEAS_COMMENTS comments that pertain to the measurement


SEMI ME1392-0305 © SEMI 2003, 2005 19
DATA SEQUENCE
This section of the data file is a list of all data for the measurement.  Each data point is stored
on a separate line ending in a carriage return—line feed pair.  Separate variables in the line
are delimitated with commas.  There is no imposed limit to the number of variables in the
line.  Variables that do not change from the data point to the next do not have to be repeated,
but two commas are needed to reserve the column.


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


SEMI MF26-0305 © SEMI 2003, 2005 1
SEMI MF26-0305
TEST METHODS FOR DETERMINING THE ORIENTATION OF A
SEMICONDUCTIVE SINGLE CRYSTAL
These  test  methods  were  technically  approved  by  the  Global  Silicon  Wafer  Committee  and  are  the  direct
responsibility of the North American Silicon Wafer Committee.  Current edition approved for publication by
the   North   American   Regional   Standards   Committee   on   December   10,   2004.      Initially   available   at
www.semi.org
February  2005;  to  be  published  March  2005.    Original  edition  published  by  ASTM
International as ASTM E 26-63T.  Last previous edition SEMI MF26-87a (Reapproved 1999).
1  Purpose
1. 1  The  orientation  of  semiconductor  crystals  and  wafers  as  determined  by  these  test  methods  is  an  important
materials  acceptance  requirement  because  the  orientation  controls  various  parameters  of  semiconductor  devices
fabricated from the material.
2  Scope
2. 1  These  test  methods  cover  techniques  for  determining  the  crystallographic  orientation  of  a  surface  which  is
roughly parallel to a low-index atomic plane in single crystals used primarily for semiconductor devices.
NOTE 1:  DIN 50433 contains equivalent methods.  It is the responsibility of DIN Committee NMP 221.  DIN 50433, Testing of
Inorganic Semiconductor Materials: Determining the Orientation of Monocrystals; Part 1 with an X-ray Goniometer, and Part 2
by  the  Light-figure  Method,  is  available  from  Beuth  Verlag  GmbH,  Burggrafenstrasse  6,  10787  Berlin,  Germany,  Website:
www.beuth.de
.
2. 2  Two types of test methods are covered as follows:
2. 2.1  Test  Method  A,  X-ray  Diffraction  Orientation  —  This  test  method  may  be  used  for  the  orientation  of  all
semiconductive single crystals.  The X-ray test method is nondestructive and yields the more precise measurement
of orientation; however, use of the equipment requires compliance with stringent safety regulations.
2. 2.2  Test  Method  B,  Optical  Orientation  —  This  test  method  is  limited  in  application  at  the  present  time  to
elemental  semiconductors.    The  optical  test  method  requires  etching  the  specimen  and  is  therefore  destructive  of
polished wafer surfaces.  This test method is less precise than the X-ray test; however, the apparatus required is less
complex.
NOTICE:  This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  user  of  this  standard  to  establish  appropriate  safety  and  health  guides  and  determine  the
applicability of regulatory or other limitations prior to use.
3  Referenced Standards
3. 1  SEMI Standards
SEMI C28 — Specifications and Guidelines for Hydrofluoric Acid
SEMI C30 — Specifications and Guidelines for Hydrogen Peroxide
SEMI C40 — Specification for Potassium Hydroxide, 45% Solution
SEMI C43 — Specification for Sodium Hydroxide, 50% Solution
3. 2  ASTM Standards
D 5127 — Guide for Ultra Pure Water Used in the Electronics and Semiconductor Industry
1

E 82 — Test Method for Determining the Orientation of a Metal Crystal
2



1  Annual Book of ASTM Standards, Vol 11.01, ASTM International, 100 Barr Harbor Drive, West Conshohocken, PA  19428.  Telephone: 610-
832-9500, Fax: 610-832-9555, Website: www.astm.org

2  Annual Book of ASTM Standards, Vol 03.01.


SEMI MF26-0305 © SEMI 2003, 2005 2
E 177 — Practice for Use of the Terms Precision and Bias in ASTM Test Methods
3

3. 3  ANSI Standard
B74.10 — Specifications for Grading of Abrasive Microgrits
4
3. 4  Other Standard
Code of Federal Regulations, Title 10, Part 20, Standards for Protection Against Radiation
5

NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.
4  Test Method A — X-Ray Diffraction Orientation
4. 1  Summary of Test Method
4. 1.1  The atoms of a single crystal form a periodic three-dimensional array in a crystal lattice structure whose units
may  be  considered  as  lying  in  a  series  of  parallel  planes  of  equal  perpendicular  spacing,  d,  as  shown  in  Figure  1.
When a beam of parallel, monochromatic X rays of wavelength
λ is incident upon the planes, diffraction (reflection)
occurs  when  the  path  difference  of  the  X  rays  between  adjacent  planes  is  an  integral  number,  n,  of  wavelengths.
When this geometrical condition is satisfied, the reflections from the various planes of the series are exactly in phase
and  the  diffracted  beam  is  of  maximum  intensity.    Thus,  as  shown  in  Figure  1,  the  diffracted  beam  of  X  rays
possesses  maximum  intensity  when  the  angle  of  incidence,
θ,  of  the  beam  with  the  reflecting  planes,  the  X-ray
wave-length,
λ, the atomic interplanar spacing, d, and the order of the diffraction, n, simultaneously have values that
obey Bragg’s law as follows:

θλsin2dn=                                                                                 (1)

NOTE: Reflection conditions are as follows: NB = BM = dsin
θ, NB + BM = nλ, nλ = 2dsinθ.
Figure 1
Geometrical Reflection Conditions for X Rays from a Single Crystal
4. 1.1.1  The  reflecting  planes  are  more  commonly  defined  in  terms  of  their  Miller  indexes  (h,  k,  l).    The  Miller
indexes  are  the  smallest  integers  proportional  to  the  reciprocals  of  the  intercepts  of  the  plane  on  the  three  crystal
axes of unit length.  Thus, for any lattice structure where the  periodicity  is  represented  by  a  cubic  unit  cell  of  side
length (lattice parameter), a, the lattice spacing, d, of a set of parallel atomic planes, may be written as follows:


3  Annual Book of ASTM Standards, Vol 14.02.
4  American National Standards Institute, New York Office: 25 West 43rd Street, New York, NY 10036, USA.  Telephone: 212-642-4900; Fax:
212-398-0023, Website: www.ansi.org
.
5  Published in Federal Register, Nov. 17, 1960. Available from Superintendent of Documents, U.S. Government Printing Office, Washington,
DC 20402.


SEMI MF26-0305 © SEMI 2003, 2005 3

222
lkh
a
d
++
=
(2)
4. 1.1.2  The  angle,
θ,  may  then  be  found  from  the  following  modified  form  of  Bragg’s  law  for  cubic  lattice
structures:

a
lkhn
2
sin
222
++
=
λ
θ
(3)
4. 1.1.3
In the diamond cubic structure, to which silicon and germanium, the Group IV semiconductors, belong, and
in the zinc blende structure, to which gallium arsenide and the other Group III–Group V semiconductors belong, the
following  general  rule  gives  the  commonly  observed  reflections:  h,  k,  and l  must  be  all  even  or  all  odd,  with  the
further restriction that when h, k, and l are all even, then h + k + l must be divisible by four.  Values of
θ for various
low-order reflections, h, k, l, are given in Table 1 for silicon, germanium, and gallium arsenide.
Table 1  Bragg Angles, θ, for X-ray Diffraction of CuK
α
Radiation in Semiconductive Crystals (λ = 1.54178 Å)
Reflecting Planes h, k, l
Silicon
a = 5.43073 Å (±0.00002 Å)
#1, #2
Germanium
a = 5.6575 Å (±0.00001 Å)
#1, #3
Gallium Arsenide
a = 5.6534 Å (±0.00002 Å)
#1, #4
111
14°14′                                            13°39′                                            13°40′
220
23°40′                                            22°40′                                            22°41′
311
28°05′                                            26°52′                                            26°53′
400
34°36′                                            33°02′                                            33°03′
331
38°13′                                            36°26′                                            36°28′
422
44°04′                                            41°52′                                            41°55′
#1  a = lattice parameter value.
#2  Bond, W. L., and Kaiser, W., J. Phys. Chem. Solids 16, 44 (1960).
#3  Greiner, E. S., J. Metals 4, 1044 (1952).
#4  Giesecke, G., and Pfister, H., Acta Crystallographica 11, 369 (1958).

4. 1.2  The  orientation  of  a  single  crystal  surface  is  the  crystallographic  plane,  described  in  terms  of  its  Miller
indices,  with  which  the  surface  is  ideally  coincident.    In  semiconductive  single  crystals,  where  the  cross-sectional
plane of the crystal or the surface of a wafer cut from the crystal usually corresponds within several degrees to a low
index  crystallographic  plane,  such  as  a  (100)  or  (111)  plane,  the  orientation  is  frequently  described  in  terms  of  the
maximum angular deviation of the low index crystallographic plane from the mechanically prepared surface.  Other
crystallographic  planes  may  be  found  with  respect  to  this  low  index  plane  by  using  a  table  of  angles  between
crystallographic planes of a cubic crystal.  Such a table appears in ASTM Test Method E 82.
4. 1.3
The  angular  deviation  of  a  reflecting  plane  from  a  prepared  reference  surface  is  found  by  determining  two
components  of  the  deviation  in  two  planes  perpendicular  to  each  other  and  to  the  reference  surface.    Each  of  the
deviation  components  represents  a  setting  of  the  crystal  lattice  that  satisfies  Bragg's  law  for  the  particular  X-ray
beam  configuration.    The  reference  surface  itself  must  be  perpendicular  to  the  plane  of  the  incident  and  reflected
beams.    Initially,  an  orientation  determination  is  made  at  any  arbitrary  position  of  the  crystal.    Then  the  crystal  is
rotated  90°  of  arc  about  the  normal  to  the  reference  surface  (the  normal  lying  in  the  plane  of  the  incident  and
reflected beams) and a second orientation determination made.  The crystal is rotated another 90° of arc (in the same
direction) and a third orientation determination is made.  The crystal has now been rotated 180° of arc with respect
to the starting point.  The crystal is then rotated another 90° of arc (that is, 270° of arc from the starting point) and a
fourth orientation determination is made.
4. 1.4
These four measurements are combined to determine both the instrument error and the two components of the
angular deviation,
α and β, between the reference surface under investigation and the desired crystallographic plane.
This  information  facilitates  slicing  of  the  crystal  along  the  desired  plane  or  alternatively  the  determination  of  the
maximum angular deviation.


SEMI MF26-0305 © SEMI 2003, 2005 4
4. 2  Apparatus
4. 2.1
X-Ray Apparatus, commercially available, utilizing a copper-target tube, gives satisfactory results.  The X-ray
beam is collimated by means of a slit system to give parallel rays, and the X rays are passed through a thin nickel
filter to give a beam that is essentially monochromatic.  The specimen is placed in a holder so that the surface under
investigation contains the axis about which the specimen is rotated in satisfying the Bragg law conditions.  Rotations
about this axis are measured on a scale in degrees and minutes of arc.  The holder must also permit rotation of the
specimen about a normal to the surface under investigation.  The Bragg angle corresponding to the particular X-ray
wavelength used, the material under investigation, and the particular family of planes being oriented must be known
from  Table  1  or  be  determined.    A  suitable  detector,  such  as  a  Geiger  counter,  is  positioned  so  that  the  angle
between  the  extension  of  the  incident  X-ray  beam  and  the  line  joining  the  counter  and  the  axis  of  rotation  of  the
specimen  is  twice  the  Bragg  angle.    It  is  essential  that  the  incident  X-ray  beam,  the  diffracted  beam,  the  reference
surface normal, and the detector opening all lie in the same plane.
4. 3
Hazards
4. 3.1
Too  much  emphasis  cannot  be  placed  on  the  necessity  of  avoiding  personal  exposure  to  X  rays.    It  is
especially  important  to  keep  hands  or  fingers  out  of  the  path  of  the  X  rays  and  to  protect  the  eyes  from  scattered
secondary radiation.  The use of commercial film badge or dosimeter service is recommended together with periodic
checks of the radiation level at the hand and body positions with a Geiger-Müller counter calibrated with a standard
nuclear  source.    The  present  maximum  permissible  dose  for  total  body  exposure  of  an  individual  to  external  X
radiation of quantum energy less than 3 MeV over an indefinite period is 1.25 R (3.22 × 10
−4
C/kg)/calendar quarter
(equivalent  to  0.6  mR/h  (1.5  ×  10
−7
C/kg·h))  as  established  in  the  Code  of  Federal  Regulations,  Title  10,  Part  20.
The  present  maximum  permissible  dose  for  hand  and  forearm  exposure  under  the  same  conditions  is  18.75  R
(4.84 × 10
−3
C/kg)/calendar quarter (equivalent to 9.3 mR/h (2.4 × 10
−6
C/kg·h)).
4. 4
Procedure
4. 4.1
Adjust  the  surface  under  investigation  about  the  axis  of  rotation  perpendicular  to  the  incident  and  reflected
beams until the diffracted intensity is at a maximum.
4. 4.2
Record, to the nearest minute, as ψ
1
, the angle indicated on the scale.
4. 4.3
Rotate the specimen through 90° of arc about a normal to the (reference) surface under investigation.  Repeat
the procedure of ¶4.4.1 and record, to the nearest minute, as
ψ
2
, the angle indicated on the scale.
4. 4.4
Rotate the specimen another 90° of arc in the same direction (that is, 180° from the original position).  Repeat
the procedure of ¶4.4.1 and record, to the nearest minute, as
ψ
3
, the angle indicated on the scale.
4. 4.5
Rotate the specimen another 90° of arc in the same direction (that is, 270° of arc from the original position).
Repeat the procedure of ¶4.4.1 and record, to the nearest minute, as
ψ
4
, the angle indicated on the scale.
4. 5
Calculations
4. 5.1
Calculate and record the angular deviation components, α and β , as follows:

)(
2
1
31
ψψα−=                                                                               (4)
and

)(
2
1
42
ψψβ−=                                                                               (5)
4. 5.2
Calculate  and  record  the  total  angular  deviation,  φ,  between  the  surface  under  consideration  and  the  desired
crystallographic plane as follows:

βαφcoscoscos=                                                                               (6)
where
α  and  β  are  the  two  components  of  the  total  angular  deviation,  φ.    For  angles  smaller  than  5°  of  arc,  this
relationship may be simplified to the following:

222
βαφ+=                                                                                 (7)


SEMI MF26-0305 © SEMI 2003, 2005 5
4. 5.3  Calculate the instrument errors, δ
α
and δ
β
, as follows:

θ
ψψ
δ
α
−
−
=
2
)(
31
(8)
and

θ
ψψ
δ
β
−
−
=
2
)(
42
(9)
where
θ is taken from Table 1 for the crystallographic plane and material under consideration.
NOTE 2:  The instrument errors need not be recorded; however, if they remain small and constant, they can be used to correct ψ
1

and
ψ
2
so  that  α  and  β  can  be  determined  from  only  two  measurements  when  the  highest  precision  is  not  required.    Since  the
instrument  error  is  a  constant,  δ
α
and  δ
β
should  be  the  same.    Any  difference  between  δ
α
and  δ
β
is due to inaccuracies in one's
ability to measure
ψ
1
, ψ
2
, ψ
3
, and ψ
4
.  With precise measurements, the difference between δ
α
and δ
β
should be less than ½ min.
5  Test Method B — Optical Orientation
5. 1  Summary of Test Method
5. 1.1
When  a  single  crystal  surface  of  germanium  or  silicon  is  lapped  and  preferentially  etched,  numbers  of
microscopic  pits  appear  on  the  crystal  surface.    These  pits  are  bounded  by  planes  related  to  the  principal
crystallographic directions of the material.  These limiting boundary planes determine the shape of the pits when the
etched  surface  is  near  a  major  crystallographic  direction.    An  optical  examination  of  the  facets  comprising  the  pit
walls  relates  the  crystal  surface  under  examination  to  this  crystallographic  direction,  and  further  permits  a
determination of the degree of misorientation of the surface from the crystallographic plane.
5. 1.2
A light beam that is reflected from such a preferentially etched surface may be focused upon a screen to form
a  definite  geometric  pattern  characteristic  of  the  surface  etch  pit  structure.    Patterns,  such  as  those  reproduced  in
Figure 2, reflected from surfaces approximately parallel to (111)-, (100)-, and (110)-type planes are recognizable.  In
each instance, the central portion of the pattern observed on the screen is the reflection from the bottom of the etch
pit.    These  bottom  facets  represent  planes  parallel  to  the  characteristic  crystallographic  plane  of  the  surface  under
investigation.    Therefore,  when  the  central  reflected  beam  is  aligned  with  the  direction  of  the  light  beam,  this
crystallographic  plane  is  perpendicular  to  the  light  beam  direction.    This  observation  permits  orientation  of  the
crystal   along   a   desired   crystallographic   axis   or,   alternatively,   allows   the   determination   of   the   degree   of
misorientation of a crystal surface from a desired crystallographic plane.
5. 2
Reagents and Materials
5. 2.1
Purity of Water — Reference to water shall be understood to mean Type E-3 or better water as described in
ASTM Guide D 5127.
5. 2.2
Germanium Etchant Solution — Mix 1 part HF, 1 part H
2
O
2
, and 4 parts water, by volume.
5. 2.3
Hydrofluoric Acid (HF), 49%, in accordance with Grade 1 of SEMI C28.
5. 2.4
Hydrogen Peroxide (H
2
O
2
), 30%, in accordance with Grade 1 of SEMI C30.
5. 2.5
Potassium Hydroxide Solution (KOH), 45% by weight in water, in accordance with Grade 1 of SEMI C40.
5. 2.6
Sodium Hydroxide Solution (NaOH), 50% by weight in water, in accordance with Grade 1 of SEMI C43.
5. 3
Apparatus
5. 3.1
Light  Beam  —  originating  preferably  from  a  high-intensity  point  source.    An  image  of  the  source  shall  be
observed on a screen following reflection from a front surface mirror occupying the crystal test position.  This image
establishes the zero reference point.  The angle of incidence at the reflecting surface may be 0° of arc, in which case
a  hole  must  be  provided  at  the  center  of  the  screen  to  permit  passage  of  the  incident  light  beam.    The  angle  of
incidence  may  be  made  large  enough  to  permit  the  screen  to  be  displaced  to  one  side  of  the  light  beam.    In  this
arrangement, it is essential that the screen be placed in the focal plane of the lens system to minimize distortion of
the image.


SEMI MF26-0305 © SEMI 2003, 2005 6
(111) GERMANIUM
(110) GERMANIUM
(100) GERMANIUM
(100) SILICON
(110) SILICON
(111) SILICON

Figure 2
Optical Reflections from Etched Germanium and Silicon Surfaces

5. 3.2
Stage  —  capable  of  rotation  both  vertically  and  horizontally  and  calibrated  to  permit  measurements  of
deviation  from  the  0°  reference  plane.    Means  shall  be  provided  to  securely  position  the  reflecting  surface  of  the
crystal on the stage of the apparatus.
5. 4
Procedure
5. 4.1
Abrade  the  specimen  surface  by  lapping  with  No.  600  silicon  carbide  abrasive.    The  abrasive  grain  size
specified for this purpose shall comply with the appropriate specifications of ANSI B74.10.  Care must be taken to
produce no angular deviation from the original surface during the lapping operation.


SEMI MF26-0305 © SEMI 2003, 2005 7
5. 4.2  Etch the lapped surface as follows:
5. 4.2.1
Etch germanium surfaces with germanium etchant solution (see ¶5.2.2) for 1 min at 25°C.
5. 4.2.2
Etch silicon surfaces with 45% KOH solution (see ¶5.2.5) or 50% NaOH solution (see ¶5.2.6) for 5 min at
65
°C.
5. 4.3
Mount the specimen containing the prepared surface on the goniometer in the path of the incident light beam.
5. 4.4
Adjust  the  position  of  the  specimen  surface  to  bring  the  center  of  the  reflected  light  pattern  to  the  zero
reference point described in ¶5.3.1.  The angular reading on the goniometer required to make this adjustment is the
degree of misorientation on the surface under examination.
5. 4.5
Check this measurement, where possible, by rotating the surface through 180° of arc.  The angular deviation
must remain constant in magnitude but is opposite in sign.
5. 4.6
Rotate  the  specimen  through  90°  of  arc  about  a  normal  to  the  surface  under  investigation,  and  repeat  the
procedure to measure the second component of angular deviation.
5. 5
Calculations
5. 5.1
Calculate and record the total angular deviation, φ, in accordance with ¶4.5.2.
6  Report
6. 1  Report the following information:
6. 1.1
Method used (X-ray or optical),
6. 1.2
Material investigated,
6. 1.3
Crystal reference plane,
6. 1.4
Deviation of prepared surface from this reference plane in two mutually perpendicular directions, and
6. 1.5
Total angular deviation of prepared surface from the reference plane
7  Precision and Bias
7. 1  Test  Method  A,  X-ray  Diffraction  Orientation  —  The  single  instrument  precision  of  the  method  as  defined  in
ASTM Practice E 177 is ±15 min of arc (3S) using commercially available X-ray equipment.
7. 2
Test  Method  B,  Optical  Orientation  —  The  single  instrument  precision  of  the  method  as  defined  in  ASTM
Practice E 177 is ±30 min of arc (3S) using commercially available optical orientation equipment.
8  Keywords
germanium; orientation; preferential etch; semiconductor; silicon; X-ray diffraction


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


SEMI MF43-0705 © SEMI 2003, 2005 1
SEMI MF43-0705
TEST METHODS FOR RESISTIVITY OF SEMICONDUCTOR
MATERIALS
This  test  method  was  technically  approved  by  the  global  Silicon  Wafer  Committee.    This  edition  was
approved for publication by the global Audits and Reviews Subcommittee on April 7, 2005.  It was available
at  www.semi.org  in  June  2005  and  on  CD-ROM  in  July  2005.    Original  edition  published  by  ASTM
International as ASTM F 43-64T.  Last previous edition SEMI MF43-99.
1  Purpose
1. 1    The  resistivity  of  a  semiconductor  material  is  an  important  materials  acceptance  requirement.    Resistivity
determinations made during device fabrication are also widely used for quality control purposes.
1. 2   These test methods cover two procedures which are widely used for making routine measurements.
2  Scope
2. 1   The two test methods in this standard are as follows:
2. 1.1   Method  A,  Two-Probe  —  This  test  method  requires  a  bar  specimen  of  measurable  cross  section  and  with
cross-sectional  dimensions  small  in  comparison  with  the  length  of  the  bar.    For  materials  for  which  no  specific
referee method has been developed, this test method is recommended for materials acceptance purposes.
2. 1.2   Method B, Four-Probe — This test method is rapid and does not require a specimen of regular cross section.
This test method may be used on irregularly shaped specimens, provided a flat region is available for the contacting
probes.  As described in this standard, this test method is applicable only to specimens such that the thickness of the
specimen and the distance from any probe point to the nearest edge are both at least four times the probe spacing.
For the special case of specimens of circular cross section with thickness more than one, but less than four, times the
probe  spacing,  measurements  by  this  test  method  are  possible;  the  required  application  of  approximate  geometric
corrections results in improved accuracy (see ¶10.1.3).
2. 2    In  general,  resistivity  measurements  are  most  reliable  when  made  on  single  crystals,  since  with  such  material
local  variations  in  impurity  which  affect  the  resistivity  are  less  severe.    Localized  impurity  segregation  at  grain
boundaries in polycrystalline material may result in large resistivity variations.  Such effects are common to either of
the  measurement  test  methods  but  are  more  severe  with  the  four-probe  test  method,  and  its  use,  therefore,  is  not
recommended for polycrystalline material.
2. 3    The  values  stated  in  SI  units  are  to  be  regarded  as  the  standard.    The  values  given  in  parentheses  are  for
information only.
NOTE 1:  DIN 50430 is an equivalent method to Method A and DIN 50431 is an equivalent method to Method B.
NOTE 2:  Other  standardized  test  methods  are  preferred  for  use  in  various  special  circumstances.    For  measurements  on  thin
wafers, use SEMI MF84; this method is preferred for referee measurements on silicon wafers.  For measurements on specimens
for which point contacts are unsatisfactory, use a procedure in ASTM Test Methods F 76 based either on Van Der Pauw or bridge
specimens.    For  two-probe  referee  measurements  on  cylindrical  single  crystal  bars,  use  SEMI  MF397.    For  four-probe  referee
measurements  of  sheet  resistance  on  epitaxial  layers  deposited  on  or  diffused  or  implanted  into  opposite  conductivity-type
substrates, use SEMI MF374.
NOTICE:  This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  user  of  this  standard  to  establish  appropriate  safety  and  health  guides  and  determine  the
applicability of regulatory or other limitations prior to use.
3   Limitations
3. 1   In making resistivity measurements, spurious results can arise from a number of sources.  The following must
be guarded against:


SEMI MF43-0705 © SEMI 2003, 2005 2
3. 1.1    Photoconductive  and  photovoltaic  effects  can  seriously  influence  the  observed  resistivity,  particularly  with
nearly intrinsic material.  Therefore make all determinations in a dark chamber unless experience has shown that the
material is insensitive to ambient illumination.
3. 1.2   Spurious currents can be introduced in the testing circuit when the equipment is located near high-frequency
generators.  If equipment is located near such sources, adequate shielding must be provided.
3. 1.3   Minority carrier injection during the measurement can occur due to the electric field in the specimen.  With
material possessing high minority carrier lifetime and high resistivity, such injection can result in a lowering of the
resistivity  for  distance  of  several  centimeters.    Carrier  injection  can  be  detected  by  repeating  the  measurements  at
lower current.  In the absence of injection no increase in resistivity should be observed.  It is recommended that the
current used in a resistivity measurement be as low as possible, consistent with the required precision.
3. 1.4    Semiconductors  have  a  significant  temperature  coefficient  of  resistivity.    Consequently,  the  temperature  of
the  specimen  should  be  known  at  the  time  of  the  measurement  and  the  current  used  should  be  small  to  avoid
resistive heating.  If resistive heating is suspected, it can be detected by a change in readings as a function of time
starting immediately after the current is applied.  Temperature coefficients for extrinsic germanium and silicon near
room temperature are available in the literature.
1
For referee purposes, it is recommended that the test be performed
at 23 ± 0.5°C.
NOTE 3:  Temperature  correction  factors  for  silicon  are  given  in  tabular  form  in  SEMI  MF84  together  with  equations  for
generating the factors.
3. 1.5    Vibration  of  the  probes  sometimes  causes  troublesome  changes  in  the  contact  resistance.    If  difficulty  is
encountered, shock mount the apparatus.
4   Referenced Standards and Documents
4. 1  SEMI Standards
SEMI M1 — Specifications for Polished Monocrystalline Silicon Wafers
SEMI M59 — Terminology for Silicon Technology
SEMI MF84 — Test Method for Measuring Resistivity of Silicon Wafers with an In-line Four-point Probe
SEMI  MF374  —  Test  Method  for  Sheet  Resistance  of  Silicon  Epitaxial,  Diffused,  Polysilicon,  and  Ion-implanted
Layers Using an In-line Four-point Probe
SEMI MF397 — Test Method for Resistivity of Silicon Bars Using a Two-point Probe
SEMI MF533 — Test Method for Thickness and Thickness Variation of Silicon Slices
SEMI MF2074 — Guide for Measuring Diameter of Silicon and Other Semiconductor Wafers
4. 2   ANSI Standard
B74.10 — Specification for Grading of Abrasive Microgrits
2

4. 3   ASTM Standard
F  76  —  Test  Methods  for  Measuring  Resistivity  and  Hall  Coefficient  and  Determining  Hall  Mobility  in  Single-
Crystal Semiconductors
3



1  Bullis, W. M., Brewer, F. H., Kolstad, C. D., and Swaratzendruber, L. I., “Temperature Coefficient of Resistivity of Silicon and Germanium
near Room Temperature,” Solid State Electron. 11, 639−646 (1968).
2  American National Standards Institute, American National Standards Institute, New York Office: 25 West 43rd Street, New York, NY 10036,
USA. Telephone: 212.642.4900, Fax: 212.398.0023, Website: www.ansi.org
.
3  Annual Book of ASTM Standards, Vol 10.04, ASTM International, 100 Barr Harbor Drive, West Conshohocken, PA 19428.  Telephone: 610-
832-9500, Fax: 610-832-9555, Website: www.astm.org
.


SEMI MF43-0705 © SEMI 2003, 2005 3
4. 4   DIN Standards
50430 — Measurement of the Specific Electrical Resistivity of Silicon or Germanium Single Crystals in Bars Using
the Two-probe Direct Current Method
4

50431 — Measurement of the Electrical Resistivity of Silicon or Germanium Single Crystals by Means of the Four-
point-probe Direct Current Method with Collinear Four-probe Array
4

NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.
5   Terminology
5. 1   Definitions
5. 1.1  Terms relating to silicon and other semiconductor technology are defined in SEMI M59.
6   Summary of Test Methods
6. 1   Two-Probe Method  — A direct current, I, is passed through ohmic contacts at the ends of a bar specimen and
the  potential  difference,  V,  is  determined  between  two  probes  placed  along  the  current  direction  (Figure  1).    The
resistivity,
ρ, is calculated from the current and potential values and factors appropriate to the geometry.
6. 2   Four-Probe Method — An in-line four-point probe is placed on a flat surface of a solid specimen which can be
approximated as semi-infinite.  A direct current, I, is passed through the specimen between the outer probes and the
resulting potential difference, V, is measured between the inner probes (Figure 2).  The resistivity,
ρ,  is  calculated
from the current and potential values and factors appropriate to the geometry.





4  Deutches Institut für Normung e.V., standards are available in both English and German editions from Beuth Verlag GmbH, Burggrafenstrasse
6, 10787 Berlin, Germany, Telephone: 49.30.2601-0, Fax: 49.30.2601.1263, Website: www.beuth.de
.
Figure 1
Specimen and Probe Arrangement for Two-Probe
Measurements on a Rectangular Bar
Figure 2
Specimen and Probe Arrangement for Four-Probe
Measurements on a Semi-Infinite Solid Specimen
7   Apparatus
7. 1   Jigs — Suitable for mounting the specimens and contacting them with either two or four probes as required.
7. 1.1   Probes — Shall be individually spring mounted and shall be loaded with a force of 1.5 ± 0.5 N.  The probes
may  be  made  from  hardened  tool  steel,  tungsten  carbide,  or  other  conducting  metal  and  may  be  chisel  shaped  for
measurement  of  curved  surfaces  or  pointed  for  measurement  on  flat  sections.    In  the  case  of  point  probes,  the
nominal radius of the tips shall be initially 25 to 50 μm.  With all probing devices, frequent checking of the probe
spacing  with  a  calibrating  microscope  is  desirable.    Probes  shall  be  replaced  or  resharpened  when  necessary  to
maintain the required spacing tolerance.  Isolation resistance between the probes shall be at least 10
9
Ω.


SEMI MF43-0705 © SEMI 2003, 2005 4
NOTE 4:  Detailed procedures for in situ determination of the spacing between adjacent probes of an in-line four-point probe are
given  in  the  Probe  Assembly  paragraph  of  the  Suitability  of  Test  Equipment  section  of  SEMI  MF84.    These  procedures,  for
which  equipment  described  in  the  Probe  Alignment  and  Separation  paragraph  of  the  Apparatus  section  of  SEMI  MF84  is
required,  can  be  used  to  establish  probe  spacings  and  their  repeatability  for  both  two-  and  four-probe  assemblies.    When  four-
probe measurements are made on semi-infinite solids, the probe spacing correction factor, F
sp
, in Equation 5 of the Suitability of
Test Equipment section, of SEMI MF84 should be replaced by:

⎟
⎠
⎞
⎜
⎝
⎛
−+=
s
s
F
sp
2

# 12511

12511.                                                                                    (1)
where:
s
2
=  spacing between inner pair of probes, cm, and
s  =  average probe spacing, cm.
In general, however, the correction for unequal probe spacing is neglected.
7. 1.2   Probe  Mountings  —  Shall  be  furnished  with  appropriate  guides  to  ensure  that  the  probes  contact  the
specimen reproducibly with a probe spacing tolerance of ±0.5%.
7. 2   Electrical Circuit (see Figure 3)
7. 2.1   Constant  Current  Source  —  Capable  of  supplying  currents  between  10
−1
and  10
−5
A.    The  current  must  be
known and maintained constant to ±0.5% during the measurement.
7. 2.2   Current Reversing Switch
7. 2.3   Standard Resistor — With a resistance within a factor of 100 of that of the specimen.  (See Note 5.)
7. 2.4   Double-Throw, Double-Pole Potential Selector Switch.  (See Note 5.)
7. 2.5   Potentiometer-Galvanometer or Electronic Voltmeter — Capable of measuring potential differences between
10
−4
and 1 V of either polarity to ±0.5%.  The input impedance must exceed 1000 times the total contact plus bulk
resistance of the specimen.
NOTE 5:  The standard resistor and potential selector switch are not required for routine four-probe measurements if a calibrated
current source is used.

NOTE: The standard resistor and potential selector switch are not required for routine
four-probe measurements if a calibrated current source is used.
Figure 3
Recommended Electrical Circuit for Two-Probe and Four-Probe Resistivity Measurements
NOTE 6:  The  electrical  measuring  circuit  may  also  measure  either  resistance  or  current  directly.    Any  electrical  circuit  that
meets  the  requirements  of  the  Electrical  Equipment  part  of  the  Suitability  of  Test  Equipment  section,  of  SEMI  MF84  is
acceptable  for  use  in  this  test  method.    If  the  procedures  of  SEMI  MF84  are  used  to  evaluate  the  adequacy  of  the  electrical
equipment,  an  appropriate  analog  test  circuit  as  described  in  the  Analog  Test  Circuit  paragraph  of  the  Apparatus  section  of
SEMI MF84 is required.


SEMI MF43-0705 © SEMI 2003, 2005 5
7. 3   Lapping or Sandblasting Facilities — to provide a flat, abraded surface on which the measurement is made.
7. 4   Micrometer or Vernier Caliper — to determine the cross-sectional area normal to the current in the two-probe
method to ±0.5% or for measuring the dimensions of circular specimens with thickness more than one, but less than
four, times the probe spacing in the four-probe method.
7. 5   Thermometer — or other temperature measuring instrument to determine the ambient temperature to ±0.5°C.
8   Test Specimen
8. 1   Two-Probe Method — The test specimen for the two-probe test method may be in the form of a strip, rod, or
bar.  The ratio of the length to the larger cross-sectional dimension of the specimen shall be not less than 3 to 1.  The
cross  section  of  the  specimen  must  be  of  measurable  shape  and  should  be  as  uniform  as  possible.    Prior  to
measurement, ohmic contact shall be made to the ends of the specimen (for example, by electroplating with copper
or nickel or by ultrasonic soldering).  Connections to the ends may be made either with soldered leads or pressure
contacts.
NOTE 7:  Alternative methods for forming ohmic contacts to germanium, silicon, and gallium arsenide are given in ASTM Test
Method F 76.
8. 2   Four-Probe Method — One reasonably flat surface for the contacting probes is required on the specimen which
may be of any size or shape which approximates a semi-infinite solid.  The conditions for a semi-infinite solid are
approximated within 2% when the thickness of the specimen and the distance from any probe to the nearest edge are
both at least four times the probe spacing.
8. 2.1    If  the  specimen  is  of  circular  cross  section  and  has  thickness  more  than  one,  but  less  than  four,  times  the
probe spacing, measure the thickness and diameter as follows:
8. 2.1.1   Measure and record five values of thickness, w
i
, at various points near the center of the specimen according
to SEMI MF533 and calculate and record the average thickness, w:

∑
=
=
5
1
5
1
i
i
ww                                                                                  (2)
8. 2.1.2    Measure  and  record  three  values  of  the  specimen  diameter,  D
i
,  at  the  appropriate  locations  defined  in
SEMI MF2074, and calculate and record the average diameter, D:

∑
=
=
3
1
3
1
i
i
DD                                                                                  (3)
8. 3    The  surface  on  which  the  resistivity  is  determined  with  either  the  two-  or  four-probe  test  method  shall  be
abraded by lapping with No. 600 alumina or by sandblasting with No. 280 Carborundum, and the measurement shall
be  made  thereafter  without  unnecessary  delay.    The  specimen  shall  show  no  surface  cracks  or  other  defects
observable  with  normal  vision  and  it  shall  be  free  of  surface  oxide.    The  abrasive  grain  sizes  specified  for  this
purpose shall comply with the appropriate ANSI Specification B74.10.
NOTE 8:  The surface preparation procedure in the Preparation of Test Specimen section of SEMI MF84 is also acceptable.
9   Procedure
9. 1   Measure and record the ambient temperature.  Maintain the specimen at this temperature for a time sufficient
for it to come to equilibrium.
NOTE 9:  The time required for equilibrium of a specimen depends on the mass of the specimen.  For small specimens 30 min to
1 h should suffice.  For large ingots 1 to 2 days may be required.
9. 2   Two-Probe Method
9. 2.1   Measure the cross-sectional area of the specimen in cm
2
and record as A.
9. 2.2   Connect the current leads of the electrical measuring circuit to the ends of the specimen, place the potential
probes on the abraded  surface, and adjust  the  current  so  that  the electric field in the specimen  does not exceed 1
V/cm.


SEMI MF43-0705 © SEMI 2003, 2005 6
9. 2.3   Measure the potential, first across the standard resistance, then across the potential probes, and again across
the  standard  resistance.    During  the  measurement,  the  potential  across  the  standard  resistance  shall  not  change  by
more than 0.5%.
9. 2.4   Reverse the direction of the current and repeat the procedure of ¶9.2.3.
9. 2.5   If desired, move the probes to a new location on the specimen and repeat the measurements.
9. 3   Four-Probe Method
9. 3.1    Lower  the  probes  onto  the  abraded  surface  of  the  specimen  at  a  location  such  that  the  distance  from  each
probe to the nearest edge is at least four times the probe spacing, pass a known current through the outer probes, and
measure the potential drop across the inner probes.
NOTE 10:  The current should be of sufficient magnitude that the potential drop can be measured to the required precision.  If the
current  is  chosen  equal  to  2
π  times  the  probe  spacing,  the  potential  drop  across  the  inner  probes  for  measurements  on  semi-
infinite solids is numerically equal to the resistivity and calculations may be avoided.
9. 3.2   Reverse the direction of the current and repeat the measurement.
10   Calculations
10. 1   Calculate the resistivity for both forward and reverse current directions:
10. 1.1   Two-Probe Test Method

fsfs
f
s
f
VV
V
L
AR
21
2
+
=
ρ
and
rsrs
r
s
r
VV
V
L
AR
21
2
+
=
ρ                                               (4)
where:
ρ
f

=
resistivity for forward current, Ω·cm,
R
s
=
resistance of standard resistor, Ω,
A =   cross-sectional area normal to the current, cm
2
,
L =   distance between the two probes, cm,
V
f
=   potential drop across the two probes for forward current, V,
V
s1f
=   first voltage across standard resistor for forward current, V,
V
s2f
=   second voltage across standard resistor for forward current, V,
ρ
r

=
resistivity for reverse current, Ω·cm,
V
r
=   potential drop across the two probes for reverse current, V,
V
s1r
=   voltage across standard resistor for reverse current, V, and
V
s2r
=   second voltage across standard resistor for reverse current, V.
10. 1.2   Four-Probe Method

f
f
f
I
V
s
πρ2=and
r
r
r
I
V
s
πρ2=                                                                 (5)
where:
ρ
f

=
resistivity for forward current, Ω·cm,
s =   spacing between adjacent probes, cm,
V
f
=   potential drop across the two inner probes for forward current, V,
I
f
=   forward current, A,


SEMI MF43-0705 © SEMI 2003, 2005 7
ρ
r

=
resistivity for reverse current, Ω·cm,
V
r
=   potential drop across the two inner probes for reverse current, V, and
I
r
=   reverse current, A.
10. 1.3    For  specimens  of  circular  cross  section  with  thickness  more  than  one,  but  less  than  four,  times  the  probe
spacing  (that  is,  the  distance  between  adjacent  points  of  the  four-probe  array  being  used),  calculate  the  ratio  of
average  specimen  thickness,  w,  to  average  probe  spacing,
,sand  the  ratio  of  average  probe  spacing,,sto  average
specimen diameter, D, and proceed as follows:
10. 1.3.1   For specimens for which the ratio of thickness to probe spacing is in the range
:5.21<<
s
w


f
f
f
I
V
wF
s
w
F
2
⎟
⎠
⎞
⎜
⎝
⎛
=
ρ
and
r
r
r
I
V
wF
s
w
F
2
⎟
⎠
⎞
⎜
⎝
⎛
=
ρ
(6)
10. 1.3.2   For specimens for which the ratio of thickness to probe spacing is in the range
:45.2<≤
s
w


f
f
f
I
V
w
s
w
F
⎟
⎠
⎞
⎜
⎝
⎛
=532.4
ρ
and
r
r
r
I
V
w
s
w
F
⎟
⎠
⎞
⎜
⎝
⎛
=532.4
ρ
(7)
where
⎟
⎠
⎞
⎜
⎝
⎛
s
w
F
and F
2
are given in Tables 1 and 2, respectively.
NOTE 11:  These geometric correction factors are approximate but are valid within 2% if the specimen diameter is greater than
25. 4 mm (1 in.).  For smaller diameter specimens, the factors are of unknown accuracy.
Table 1  Thickness Correction Factor,)sF(w/, as a
Function of the Ratio of Wafer Thickness, w, to
Average Probe Spacing,
.s

s
w

⎟
⎠
⎞
⎜
⎝
⎛
s
w
F
1. 0                                            0.921
1. 2                                            0.864
1. 4                                            0.803
1. 6                                            0.742
1. 8                                            0.685
2. 0                                            0.634
2. 2                                            0.587
2. 4                                            0.546
2. 6                                            0.510
2. 8                                            0.477
3. 0                                            0.448
3. 2                                            0.422
3. 4                                            0.399
3. 6                                            0.378
3. 8                                            0.359
4. 0                                            0.342

Table 2  Correction Factor, F
2
, as a Function of the
Ratio of Average Probe Spacing,
,s
to Wafer
Diameter, D
D
s

F
2
0                                              4.532
0. 005                                          4.531
0. 010                                          4.528
0. 015                                          4.524
0. 020                                          4.517
0. 025                                          4.508
0. 030                                          4.497
0. 035                                          4.485
0. 040                                          4.470
0. 045                                          4.454
0. 050                                          4.436
0. 055                                          4.417
0. 060                                          4.395
0. 065                                          4.372
0. 070                                          4.348
0. 075                                          4.322
0. 080                                          4.294
0. 085                                          4.265
0. 090                                          4.235
0. 095                                          4.204
0. 100                                          4.171


SEMI MF43-0705 © SEMI 2003, 2005 8

10. 2  Calculate the average resistivity at the temperature of measurement as follows:

2
rf
av
ρρ
ρ
+
=                                                                                (8)
10. 3
If necessary, correct the resistivity to a reference temperature of 23°C as follows:

)(231
23
−+
=
TC
T
av
ρ
ρ                                                                           (9)
where:
ρ
23
= resistivity corrected to 23°C, Ω·cm,
ρ
av
= average resistivity at temperature of measurement, Ω·cm,
C
T
= temperature coefficient appropriate to specimen (see ¶3.1.4 and Note 3), and
T   = temperature of measurement, °C.
NOTE 12:  The temperature coefficients of resistivity cited here for germanium and silicon are valid for measurements taken in
range from 18 to 28°C.
NOTE 13:
If desired, correction may be made for probes with unequal probe spacings by multiplying the average resistivity by
the probe spacing correction factor (F
sp
) (see Note 4) before correcting the resistivity to the reference temperature.
11  Report
11. 1   For referee tests, report the following information:
11. 1.1
Identification of test specimen,
11. 1.2
Ambient temperature of test,
11. 1.3
Probe spacing,
11. 1.4
Method of determining cross-sectional area,
11. 1.5
Method of surface preparation,
11. 1.6
Instrumentation used to measure current and voltage,
11. 1.7
Location of measurement in relation to a reference point on the specimen,
11. 1.8
Magnitude of current,
11. 1.9
Calculated resistivity for both current directions, and
11. 1.10
Average resistivity at measurement temperature, and if computed, at 23°C.
11. 2
For routine tests, report the items in ¶¶11.1.1, 11.1.2, and 11.1.10 together with such other items listed above
as may be deemed significant.
12  Precision
12. 1   Silicon bars and wafers with resistivity in the range from 5 to 20 Ω·cm were tested in a nine-laboratory round
robin  conducted  in  1965.    No  geometrical  or  temperature  correction  factors  were  applied.    The  multilaboratory
precisions, as estimated from three times the mean values of the relative sample standard deviations, were ±6% for
the  two-probe  test  method  (on  bars)  and  ±8%  for  the  four-probe  test  method  (on  wafers).    The  precision  for  other
resistivity ranges and other materials has not been established.
13  Keywords
13. 1   germanium; resistivity; semiconductor; silicon


SEMI MF43-0705 © SEMI 2003, 2005 9
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


SEMI MF154-0305 © SEMI 2003, 2005 1
SEMI MF154-0305
GUIDE FOR IDENTIFICATION OF STRUCTURES AND
CONTAMINANTS SEEN ON SPECULAR SILICON SURFACES
This guide was technically approved by the Global Silicon Wafer Committee and is the direct responsibility
of  the  North  American  Silicon  Wafer  Committee.    Current  edition  approved  for  publication  by  the  North
American  Regional  Standards  Committee  on  December  10,  2004.    Initially  available  at  www.semi.org

January 2005; to be published March 2005.  Original edition published by ASTM International as ASTM F
154-72T.  Last previous edition SEMI MF154-02.
1  Purpose
1. 1  The  purpose  of  this  guide  is  to  list,  illustrate,  and  provide  reference  for  various  characteristic  features  and
contaminants that are seen on highly specular silicon wafers.
1. 2  Ambiguities and uncertainties regarding surface defects may be resolved by reference to this guide.
1. 3  There is close alignment between this guide and common specifications used for the purchase of silicon wafers.
2  Scope
2. 1  This guide contains a compilation of the most commonly observed singularly discernible structures on specular
silicon surfaces.
2. 2  Recommended practices for delineation and observation of these artifacts are referenced. The artifacts described
in this guide are intended to parallel and support the content of the specification form for order entry in SEMI M18.
2. 3  These artifacts and common synonyms are arranged alphabetically in Tables 1 and 2 and illustrated in Figures 1
through 68.
NOTICE:  This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  user  of  this  standard  to  establish  appropriate  safety  and  health  guides  and  determine  the
applicability of regulatory or other limitations prior to use.
3  Limitations
3. 1  Defects, structures, features, or artifacts revealed or enhanced by the referenced methods and exhibited in this
guide  must  be  carefully  interpreted.    Unless  utmost  care  is  exercised,  the  identification  of  the  structure  may  be
ambiguous.
4  Referenced Standards
4. 1  SEMI Standards
SEMI M18 — Format for Silicon Wafer Specification Form for Order Entry
SEMI M59 — Terminology for Silicon Technology
SEMI MF523 — Practice for Unaided Visual Inspection of Polished Silicon Wafer Surfaces
SEMI MF1725 — Guide for Analysis of Crystallographic Perfection of Silicon Ingots
SEMI MF1726 — Guide for Analysis of Crystallographic Perfection of Silicon Wafers
SEMI MF1727 — Practice for Detection of Oxidation Induced Defects in Polished Silicon Wafers
SEMI MF1809 — Guide for Selection and Use of Etching Solutions to Delineate Structural Defects in Silicon
SEMI MF1810 — Test Method for Counting Preferentially Etched or Decorated Surface Defects in Silicon Wafers
NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.


SEMI MF154-0305 © SEMI 2003, 2005 2
Table 1  Wafer Structural Defects
#1, #2, #3

Defect Common Synonyms and Acronyms                Illustrating                Figure(s) Relevant Standard(s)
Dislocation etch pit etch pit, pit 1-5 SEMI MF1725
Epitaxial stacking fault epi stacking fault, (ESF)
Epitaxial growth hillock
6-10                       SEMI                       MF1726
Lineage Grain Boundary 11 SEMI MF1725
Oxidation induced stacking
fault
oxidation stacking fault, (OSF), oxidation induced
stacking fault (OISF)
12-18                      SEMI                      MF1727
SEMI MF1809
Oxide precipitates bulk micro-defect, (BMD), bulk precipitate 19 SEMI MF1727
SEMI MF1809
Shallow pits S-pit, saucer pit 20-21 SEMI MF1727
SEMI MF1809
Slip slip lines 22-25 SEMI MF1725
SEMI MF1727
SEMI MF1809
Swirl                                                                                                                          26-27                                                             SEMI                                                             MF1725
SEMI MF1727
SEMI MF1809
Twin twin lamella, twin line 28-30 SEMI MF1725
#1
Magnifications given in the attached illustrations are for an original frame size of 50 mm × 50 mm, except as noted.
#2
Unless otherwise noted, all attached figures illustrate polished silicon wafer surfaces.
#3
Unless otherwise noted, all attached figures with magnified images were created using interference contrast microscope equipment.
Table 2  Polished Surface Visual Characteristics
Defect Common Synonyms and Acronyms
Illustrating
Figure(s)
Relevant
Standard
Area contamination Contamination, foreign matter, residue 31-32 SEMI MF523
Crack Cleavage, fracture 33-38 SEMI MF523
Crater Slurry ring 39 SEMI MF523
Crow's feet Contact damage 40 SEMI MF523
Dimple                                                           Depression                                                           41-42                                                           SEMI                                                           MF523
Dopant striation ring Striation                                           43                                           SEMI                                           MF523
Edge chip Chip 44-47 SEMI MF523
Edge crack Crack 48 SEMI MF523
Edge crown  49 SEMI MF523
Epitaxial large point defect large light point defect, (LLPD), spike 50 SEMI MF523
Foreign matter Contamination, residue 51-52 SEMI MF523
Groove Polished over scratch, microscratch 53-54 SEMI MF523
Haze                                                                                                                                            55-56                                                                      SEMI                                                                      MF523
Localized light scatterers (particle
contamination)
large light scatterers, (LLS) 57-58 SEMI MF523
Mound                                                                                                                                        59                                                                    SEMI                                                                    MF523
Orange peel Roughness 60 SEMI MF523
Pits Air pocket, hole, crystal originated pit,
(COP) insufficient polish
61-63              SEMI              MF523
Saw mark  64 SEMI MF523
Scratches                                                    Handling                                                    damage                                 65-67                                 SEMI                                 MF523
Stain                                                                                                                                            68                                                                      SEMI                                                                      MF523


SEMI MF154-0305 © SEMI 2003, 2005 3
5  Terminology
5. 1  Terms related to silicon technology, including the features and contaminants discussed in this guide, are defined
in SEMI M59.
6  Procedure
6. 1  Procedures for examining silicon wafers for the features and contaminants discussed in this guide are covered in
SEMI MF523, SEMI MF1725, SEMI MF1726, SEMI MF1727, SEMI MF1809, and SEMI MF1810.
7  Keywords
contaminant;  defects;  dislocation;  epitaxial;  fracture;  preferential  etch;  scratch;  shallow  pit;  silicon;  slip;  stacking
fault


Figure 1
Dislocation Etch Pits on (111)
Silicon, Following 3-Min Sirtl
Etch, Magnification 110×

Figure 2
Dislocation Etch Pits on (110)
Silicon, Following 5-Min Wright
Etch, Magnification 110×

Figure 3
Dislocation Etch Pits on (100)
Silicon Following Schimmel (B)
Preferential Etch, Magnification
320×

Figure 4
Dislocation Etch Pits on (100)
Silicon Following Sirtl Etch,
Magnification 400×

Figure 5
Dislocation Etch Pits on (100)
Silicon Following 5-Min Wright
Etch, Magnification 200×

Figure 6
Epitaxial Stacking Faults on
(111) Following 4.2 m Dash etch,
Size Dependent Upon EPI
Thickness


SEMI MF154-0305 © SEMI 2003, 2005 4

Figure 7
Epitaxial Stacking Faults on
(100), No Preparation Required,
Size Dependent Upon EPI
Thickness

Figure 8
Epitaxial Stacking Faults on
(100), No Preparation Required,
Size Dependent Upon EPI
Thickness

Figure 9
Epitaxial Growth Hillock on
(100), No Preparation Required,
Size Dependent Upon EPI
Thickness

Figure 10
Epitaxial Stacking Faults on
(100), No Preparation Required,
Size Dependent Upon EPI
Thickness

Figure 11
Lineage on (111) Silicon
Following Preferential Etch,
Magnification 140×

Figure 12
Oxidation Induced Stacking
Faults on (100) Silicon Following
Oxidation and 4-min Wright
Etch, Magnification 200×

Figure 13
Oxidation Induced Stacking
Faults from Liquid Hone
Damage on a (100) Silicon
Polished Frontside Surface
Following Oxidation at 1100°C
and 1-min Schimmel Etch,
Magnification 1500×

Figure 14
Oxidation Induced Stacking
Faults from Liquid Hone
Damage on a (100) Etched Back
Surface Following Oxidation at
1100°C and 1-Min Schimmel
Etch, Magnification 1500×

Figure 15
Oxidation Induced Stacking
Faults on (100) Silicon Following
Oxidation and 3-Min Secco Etch,
Magnification 500×


SEMI MF154-0305 © SEMI 2003, 2005 5

Figure 16
Oxidation Induced Stacking
Faults on (100) Silicon Following
Oxidation and 3-min Secco Etch,
Magnification 200×


Figure 17
Oxidation Induced Stacking
Faults on (111) Silicon Following
Oxidation and 4-min Wright
Etch, Magnification 200×

Figure 18
Oxidation Induced Stacking
Faults Caused by a Scratch on
(100) Silicon Following Oxidation
and 2-min Wright Etch,
Magnification 400×

Figure 19
Oxidation Induced Stacking
Faults and Precipitates Found on
the Cleavage Face of a Silicon
Wafer After Thermal Treatment
and 3-min Secco Etch,
Magnification 100×

Figure 20
Relatively Small Shallow Pits on
(111) Following Oxidation and
4-min Wright Etch,
Magnification 200×

Figure 21
Relatively Large Shallow Pits on
(111) Following Oxidation and
4-min Wright Etch,
Magnification 200×

Figure 22
Slip on a (111) Preferentially
Etched Wafer, Magnification 5×

Figure 23
Slip on a (111) Preferentially
Etched Wafer, Magnification
140×

Figure 24
Slip Lines on a (100) Wafer
Visible as a Cross Hatched
Pattern Near the Edge Because
Shallow Pits are Gettered
Following Oxidation and 4-min
Wright Etch


SEMI MF154-0305 © SEMI 2003, 2005 6

Figure 25
Slip on a (111) Wafer Following
10-min Wright Etch, Full Wafer
View

Figure 26
Swirl Pattern Developed by
Preferentially Etching a
Czochralski Grown
10 to 20 Ω·cm
Lapped Silicon Wafer

Figure 27
A-swirl on As-grown Float-zone
Silicon Following Preferential
Etch, Full Wafer View

Figure 28
Twin Lines in a (111) Wafer after
Preferential Etching, Full Wafer
View

Figure 29
Twin Line Following 6.5 μm
Epitaxial Deposition, No Other
Sample Preparation Required,
Magnification 300×

Figure 30
Twin Lamella in a <110> Cleaved
Vertical Cross Section Following
2. 6 μm Removal
in Leo (Modified Sirtl) Etch

Figure 31
Area Contamination,
Magnification 100×

Figure 32
Area Contamination Seen With a
High Intensity Light Source, Full
Wafer View

Figure 33
Crack, Resulting from the
Impact on the Wafer Surface,
Following Preferential Etch,
Magnification 450×


SEMI MF154-0305 © SEMI 2003, 2005 7

Figure 34
Crack on the Wafer Edge Due to
Mechanical Contact, No
Preparation Required,
Magnification 100×

Figure 35
Crack on a Wafer Surface Due to
Mechanical Contact, No
Preparation Required,
Magnification 750×

Figure 36
Crack Near the Edge of a Wafer
Surface Due to Mechanical
Contact, No Preparation
Required, Magnification 750×

Figure 37
Cracks in a Wafer Surface
Viewed with High Intensity Light
Exhibiting a Scratch-Like
Appearance

Figure 38
Cracks in an Etched Wafer
Surface, Magnification 38×

Figure 39
Crater, Usually Caused by
Inadequate Rinse of Polishing
Chemicals, Magnification 50×

Figure 40
“Crows-Foot” Crack Resulting
from the Impact of a Hard
Object with the Wafer
Highlighted by Preferential Etch,
Magnification 300×

Figure 41
Dimples Under Fluorescent
Lighting Conditions Distort the
Reflected Image

Figure 42
Dimple, No Preparation
Required, Magnification 512×


SEMI MF154-0305 © SEMI 2003, 2005 8

Figure 43
Dopant Striation Rings after
Preferentially Etching, Full
Wafer View

Figure 44
Relatively Large Chip Found at
the End of a Major Flat, No
Preparation Required,
Magnification 37×

Figure 45
Relatively Small Chips Found on
an Edge Face, No Preparation
Required, Magnification 100×

Figure 46
Edge Chips, Full Wafer View

Figure 47
Relatively Small Edge Chips on a
Polished Edge Face,
Magnification 200×

Figure 48
Edge Cracks on an Edge Face,
No Preparation Required,
Magnification 200×

Figure 49
Vertical Cross Section of Edge
Crown on a Cleaved Epitaxial
Wafer, Viewed With Low
Magnification, Bright Field
Microscope

Figure 50
Epitaxial Large Point Defect, No
Preparation Required,
Magnification 200×

Figure 51
Foreign Matter,
Magnification 200×


SEMI MF154-0305 © SEMI 2003, 2005 9

Figure 52
Foreign Matter from a Dried
Liquid Spot, Magnification 200×

Figure 53
Groove or Micro-Scratch,
Magnification 220×

Figure 54
Groove or Micro-Scratch,
Magnification 220×

Figure 55
Haze Seen as Distortion or
Blurring of a Reflected Image,
Full Wafer View

Figure 56
Haze (Extreme Case) Seen as a
White Cloudiness Under High
Intensity Light, Full Wafer View

Figure 57
Localized Light Scatterers,
(Particle Contamination) in the
Form of Small Fiber,
Magnification 200×

Figure 58
Localized Light Scatterers Seen
in High Intensity Light, Full
Wafer View

Figure 59
Mound, No Preparation
Required, Magnification 200×

Figure 60
Orange Peel Surface Roughness,
Magnification 200×


SEMI MF154-0305 © SEMI 2003, 2005 10

Figure 61
Atomic Force Microscope (AFM)
Image of a Faceted COP

Figure 62
Pit (Usually Associated With
Insufficient Polishing of Caustic
Etched Wafer),
Magnification 1000×

NOTE: Air Pocket Size Ranges from a
Few Micrometers to a Few Hundred
Micrometers
Figure 63
Pit Associated with a Crystal Air
Pocket on Lapped Wafer

Figure 64
Saw Blade Defect Seen on
Lapped and Etched Wafer,
Magnification 6×

Figure 65
Multiple Scratches Located by
the Arrow under High Intensity
Light, Full Wafer View

Figure 66
A Single Long Arc Scratch
Located by the Arrow
Under High Intensity Light,
Full Wafer View

Figure 67
Scratch Resulting in a Series of
Pits Following Chemical Etching,
Magnification 70×

Figure 68
Stains from Improper Cleaning
or Drying Located by the Arrow
under High Intensity Light,
Full Wafer View



SEMI MF154-0305 © SEMI 2003, 2005 11

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


SEMI MF525-0705 © SEMI 2003, 2005 1
SEMI MF525-0705
TEST METHOD FOR MEASURING RESISTIVITY OF SILICON WAFERS
USING A SPREADING RESISTANCE PROBE
This standard was technically approved by the global Silicon Wafer Committee.  This edition was approved
for  publication  by  the  global  Audits  and  Reviews  Subcommittee  on  April  7,  2005.    It  was  available  at
www.semi.org  in  June  2005  and  on  CD-ROM  in  July  2005.    Original  edition  published  by  ASTM
International as ASTM F 525-77T.  Last previous edition SEMI MF525-00a.
1  Purpose
1. 1   This test method provides means for directly determining the resistivity of a substrate or of an epitaxial layer of
thickness  greater  than  20  times  the  effective  electrical  contact  radius.    Unlike  SEMI  MF84,  SEMI  MF374,  and
SEMI MF1392, it can provide lateral spatial resolution of resistivity on the order of a few micrometers.
1. 2    This  test  method  is  intended  primarily  for  use  in  process  control,  research,  and  development  applications.    In
the absence of between-laboratory precision data, this test method is not recommended for use between supplier and
customer unless correlation experiments have been conducted between the parties.
2   Scope
2. 1   This test method covers the measurement of the resistivity of a silicon substrate of known orientation and type,
or of a uniform silicon epitaxial layer of known orientation and type that is deposited on a substrate of the same or
opposite type.  Resistivity of the epitaxial films can be evaluated without the necessity of thin film correction factors
provided that the ratio of layer thickness to effective probe contact radius is greater than 20.
2. 2   This test method is comparative in that the resistivity of an unknown specimen is determined by comparing its
measured  spreading  resistance  with  that  of  calibration  standards  of  known  resistivity.    These  calibration  standards
must have the same surface finish, conductivity type, and orientation as the unknown specimen.
2. 3   This test method is intended for use on silicon substrates and epitaxial layers.  Within-laboratory precision has
been determined through a multilaboratory experiment on substrates having resistivities from 0.01 to 200 Ω·cm.
2. 3.1    The  principles  of  this  test  method  can  be  extended  to  lower  and  higher  specimen  resistivity  values,  but  the
precision of the test method has not been evaluated for values other than those in the range given in ¶2.3.
2. 4    This  test  method  is  nondestructive  in  the  sense  that  the  specimen  is  not  totally  destroyed  in  making  the
measurements, the specimen need not be cut into a special shape, and no destructive processing need be done on the
specimen.  However, the probe can produce mechanical damage that may be detrimental to a device fabricated in the
probed area.
2. 5    The  volume  of  semiconductor  material  sampled  is  proportional  to  the  third  power  of  the  effective  electrical
contact radius of the probe.  For an effective electrical contact radius of 2 μm, the volume sampled by a single probe
is approximately 10
−11
cm
−3
.
NOTICE:  This  standard  does  not  purport  to  address  safety  issues,  if  any,  associated  with  its  use.    It  is  the
responsibility  of  the  user  of  this  standard  to  establish  appropriate  safety  and  health  guides  and  determine  the
applicability of regulatory or other limitations prior to use.
3   Limitations
3. 1   Temperature  —  Spreading  resistance  measurements  are  sensitive  to  the  temperature  of  the  specimen.
Therefore, it is important that the calibration and actual measurements be made at the same temperature.
3. 2   Light — Photoconductive and photovoltaic effects can seriously influence the resistance determined by this test
method,  especially  on  wafers  with  p-n junctions.    All  determinations  shall  be  made  in  a  dark  chamber,  or  if
experience shows that the material is insensitive to illumination of this type, in diffuse room light.


SEMI MF525-0705 © SEMI 2003, 2005 2
3. 3   Radio-Frequency  Fields  —  Spurious  currents  can  be  introduced  in  the  testing  circuit  when  the  equipment  is
located  near  high-frequency  generators.    If  equipment  is  located  near  such  sources,  adequate  shielding  must  be
provided.
3. 4   Mechanical Vibrations — The apparatus may be sensitive to building or other vibrations.  Therefore, the probe
should be located in an area free from significant vibrations.  It may be desirable to mount the probe assembly on a
vibration-free table.
3. 5   Minority  Carrier  Injection  —  Caution  should  be  taken  to  prevent  minority  carrier  injection  during  the
measurement.    Experience  has  shown  that  if  the  potential  on  the  probe  is  kept  to  20  mV  or  less,  minority  carrier
injection does not occur.
3. 6   Reactive Atmosphere — Exposure of the probe or specimen to reactive atmospheres, such as those produced in
the vicinity of epitaxial reactors or by high humidity, leads to changes in the characteristics of the instrument and to
nonreproducible measurements.  Probes and specimens shall be protected from such exposure.  Relative humidity in
excess of 60% shall be avoided.
3. 7   Semiconductor Surfaces
3. 7.1   Surface  Instability — It has been found that spreading resistance measurements made on surfaces that have
been  exposed  to  an  aqueous  solution  may  be  erratic.    Surfaces  exposed  to  solutions  containing  fluorine  ions  may
also exhibit instability.  The heat treatment included in the procedure (see ¶13.5) may reduce these instabilities.
3. 7.2   Surface  Damage  —  Spreading  resistance  measurements  made  in  areas  of  severe  or  nonuniform  mechanical
damage may give erroneous results.  Such damage may be caused by previous spreading resistance probe marks.
3. 8   Correction Factors — When the ratio of epitaxial layer thickness, t, to the effective electrical contact radius of
the  probe,  a,  is  less  than  20,  it  is  necessary  to  employ  correction  factors  to  determine  the  correct  resistivity  value
from the spreading resistance measurement.
1

4   Referenced Standards and Documents
4. 1  SEMI Standards
SEMI E89 — Guide for Measurement System Analysis (MSA)
SEMI M59 — Terminology for Silicon Technology
SEMI MF26 — Test Methods for Determining the Orientation of a Semiconductive Single Crystal
SEMI MF42 — Test Methods for Conductivity Type of Extrinsic Semiconducting Materials
SEMI MF84 — Test Method for Measuring Resistivity of Silicon Slices with an In-line Four-point Probe
SEMI  MF95  —  Test  Method  for  Thickness  of  Lightly  Doped  Silicon  Epitaxial  Layers  on  Heavily  Doped  Silicon
Substrates Using an Infrared Dispersive Spectrophotometer
SEMI  MF110  —  Test  Method  for  Thickness  of  Epitaxial  or  Diffused  Layers  in  Silicon  by  the  Angle  Lapping  and
Staining Technique
SEMI  MF374  —  Test  Method  for  Sheet  Resistance  of  Silicon  Epitaxial,  Diffused  Polysilicon,  and  Ion-implanted
Layers Using an In-Line Four-Point Probe with the Single-configuration Procedure
SEMI  MF1392  —  Test  Method  for  Determining  Net  Carrier  Density  Profiles  in  Silicon  Wafers  by  Capacitance-
Voltage Measurements With a Mercury Probe
4. 2   ASTM Standard
E 1 — Specification for ASTM Thermometers
2



1  Dickey, J. H., “Two-Point Probe Correction Factors,” in Semiconductor Measurement Technology: Spreading Resistance Symposium, NBS
Special Publication 400-10, December 1974, Ehrstein, J. R., Ed., pp. 45−50. Available from the Superintendent of Documents, U. S. Government
Printing Office, Washington, DC  20402. SD Catalog Number C13.10:400-10.
2  Annual Book of ASTM Standards, Vol 14.03, ASTM International, 100 Barr Harbor Drive, West Conshohocken, PA 19428.  Telephone: 610-
832-9500, Fax: 610-832-9555, Website: www.astm.org
.


SEMI MF525-0705 © SEMI 2003, 2005 3
NOTICE: Unless otherwise indicated, all documents cited shall be the latest published versions.
5   Terminology
5. 1   Definitions
5. 1.1   effective electrical contact radius, a (cm) — of a spreading resistance probe assembly, an empirical quantity
defined by:

s
R
n
a
4
ρ
=
(1)
where:
n =     number of current-carrying probes across which the potential drop is determined,
ρ
=
resistivity of a homogeneous semiconductor specimen, Ω·cm, and
R
s
=
measured spreading resistance, Ω.
5. 1.1.1   Discussion — For a three-probe arrangement, n = 1; for a two-probe arrangement, n = 2
5. 1.2   epitaxial layer (in semiconconductor technology) — a layer of single crystal semiconducting material grown
on a host substrate that determines its orientation.
5. 1.2.1   Discussion  —  A  structure  may  consist  of  several  epitaxial  layers  on  a  substrate:  each  layer  is  separated
from a neighboring layer (or the substrate) by an interface region.
5. 1.3   spreading  resistance, R
s
(Ω)  —  of  a  semiconductor,  the  ratio  of  (1)  the  potential  drop  between  a  small-area
conductive metal probe and a reference point on the semiconductor, to (2) the current through the probe.
5. 1.3.1   Discussion  —  This  ratio,  in  fact,  measures  metal-to-semiconductor  contact  resistance  as  well  as  classical
spreading resistance for a homogeneous specimen without electrical boundaries in the vicinity of the probes.  For a
specimen having resistivity gradients or electrical boundaries, this ratio also includes an effect due to these gradients
or boundaries
5. 1.3.2   In a three-probe arrangement, the experimental conditions approximate those of the definition (based on a
single probe) and the spreading resistance R
s
, in Ω, is given by

I
V
R
s
=                                                                                      (2)
where:
V   =    potential drop between one of the current-carrying probes and the reference (non-current carrying) probe on
the front surface, mV, and
I    =    current through the metal probe, mA.
In a two-probe arrangement, the potential drop, V, is measured between two similar current-carrying probes.  In this
case, the voltage-to-current ratio, and hence the spreading resistance, is approximately twice that associated with a
single probe.
5. 1.4   substrate (in semiconductor technology) — a wafer that is the basis for subsequent processing operations in
the fabrication of semiconductor devices or circuits.
5. 1.4.1   Discussion — The devices or circuits may be fabricated directly in the substrate or in a film of the same or
another material grown or deposited on the substrate..
5. 1.5   Other terms relating to silicon technology are defined in SEMI M59.
5. 1.6   Terms related to measurement precision are defined in SEMI E89.
6   Summary of Test Method
6. 1   The spreading resistance of a reproducibly formed point contact is measured.


SEMI MF525-0705 © SEMI 2003, 2005 4
6. 2   The resistivity of the material in the vicinity of the probe is determined from a calibration curve derived from
spreading resistance measurements made under the same conditions on reference specimens of known resistivity.
6. 3    The  spreading  resistance  may  be  measured  with  the  use  of  one,  two,  or  three  probes  and  (1)  by  applying  a
known  constant  voltage  and  measuring  the  current,  (2)  by  applying  a  known  constant  current  and  measuring  the
voltage, or (3) by a resistance comparator technique.
7   Apparatus
7. 1   Mechanical Apparatus
7. 1.1   Probes  and  Probe  Assembly  —  A  spreading  resistance  probe  assembly  with  provision  for  supporting  and
lowering  either  one,  two,  or  three  replaceable  probe  tips  to  the  wafer  surface  at  a  reproducible  rate  and  with  a
predetermined load.  The supporting mechanism shall provide for spatial displacement of the probes for adjustment
of the point of contact.
7. 1.1.1   Probe  Tip  Material  —  A  hard,  durable,  low-resistance  substance  that  wears  well  without  flaking,  such  as
osmium, tungsten carbide, or tungsten-ruthenium alloys.
7. 1.1.2   Probe Tip Radius — The mechanical radius of curvature of the probe tips in the region that will touch the
specimen shall be less than or equal to 25 μm.  The tip angle of the probe shall be within the range from 30 to 60°,
inclusive.
7. 1.1.3   Probe Loading and Descent Rate — The loading applied to each point shall be less than 50 gf (490 mN).
A 1-mm/s descent rate has been found to be adequate for a 40 gf (390 mN) load (see ¶11.3 and Note 5).
7. 1.1.4   Probe Spacing — as used for calibration (see §15).
NOTE 1:  Typical probe spacings are between 15 and 1000 μm.
7. 1.1.5   Probe Insulation — A d-c isolation resistance of 1 GΩ or greater between any pair of probes and between
each probe and any guard circuit used.
7. 1.2   Sample  Holder  —  An  insulated  vacuum  chuck  or  other  means  for  clamping  the  substrate  tightly  while
measurements are made.
NOTE 2:  The vacuum chuck may be inserted on a high-resolution translatable microscope stage with drum calibrated preferably
in  metric  units.    Gear  boxes  for  stage  movement  should  allow  step-size  movements  in  the  range  from  5  to  500  μm  per  step,
inclusive.  Usual increments are 5.0, 10, 25, and multiples of 10 thereof.
7. 2   Electrical Measuring Apparatus
7. 2.1   Constant-Voltage Method — Suitable for use with the one- or two-probe arrangement.  See Figure 1.
7. 2.1.1   D-C Voltage Source — With a constant output between 1 and 20 mV, inclusive.  The output potential shall
be constant to within ±0.1% into a load that varies from 1 Ω to 10 MΩ, inclusive.
7. 2.1.2  D-C Current Detector — Accurate to within ±0.1% and capable of covering the range from 10 mA to 1 pA,
inclusive.


Figure 1
Electrical Circuits for the Constant-Voltage Method



SEMI MF525-0705 © SEMI 2003, 2005 5

(a) One-Probe Arrangement
(b) Two-Probe Arrangement
(c) Three-Probe Arrangement

Figure 2
Electrical Circuits for the Constant-Current Method

7. 2.2  Constant-Current Method — Suitable for use with the one-, two-, or three-probe arrangement.  See Figure 2.
7. 2.2.1   Variable  D-C  Current  Source  —  Capable  of  providing  currents  from  10  nA  to  10  mA,  inclusive.    The
current  source  shall  be  accurate  to  within  ±0.1%  and  capable  of  providing  a  current  of  10  nA  into  a  10MΩ  load.
Caution: For safety reasons the compliance voltage shall not exceed 40 V.
7. 2.2.2   D-C Voltage Detector — Linear over the range from 1 to 100 mV, inclusive, and accurate to within ±0.1%
of the reading.  The input impedance shall be 10 MΩ or greater.
7. 2.3   Comparator Method — Suitable for use with the one- or two-probe arrangement.  See Figure 3.
7. 2.3.1   D-C Voltage Source,  with  a  constant  output  between  1  and  20  mV,  inclusive,  but  no  special  requirements
on the precision.
7. 2.3.2   Log  Comparator  —  With  an  output  voltage  proportional  to  the  logarithm  of  the  ratio  of  two  currents.
Together with its standard resistor, R
0
, the comparator shall be capable of measuring resistances from 1 Ω to 10 MΩ
inclusive, with a deviation from linearity not greater than ±1%.



(a) One-Probe Arrangement (b) Two-Probe Arrangement
Figure 3
Electrical Circuits for the Log Comparator Method

7. 2.3.3   Standard Resistor — Nominally 10 kΩ, known to an accuracy of ±0.1%.
7. 3   Microscope — Capable of a magnification of at least 400×.
7. 4   Thermometer  —  An  ASTM  Precision  Thermometer  having  a  range  from  −8  to  +32°C,  inclusive,  and
conforming to the requirements for Thermometer 63C as described in ASTM Specification E 1.
8   Reagents and Materials
8. 1   Resistivity Standards for Calibration
8. 1.1    Resistivity  standards  shall  be  chosen  from  substrates  in  the  resistivity  range  of  the  unknowns  in  accordance
with §12.


SEMI MF525-0705 © SEMI 2003, 2005 6
NOTE 3:  It  is  desirable  to  use  at  least  three  resistivity  values  per  decade  of  resistivity.    For  applications  where  spreading
resistance measurements are being used to sort material within a narrow resistivity range (one decade or less) it may be necessary
to have 8 or 10 calibration specimens spanning the decade of interest to compensate for the resistivity averaging effect of a four
probe on nonhomogeneous calibration specimens.  This is particularly important for resistivity ranges where calibration material
is found to have significant fine-scale resistivity variations (striations).
8. 1.2   The standards shall match the conductivity type and orientation of the test specimens.  The surface finish of
the standards shall match the surface finish of the test specimens as closely as possible.  For use in connection with
epitaxial layer test specimens, standards shall have a polished surface.
8. 2   A p-type  silicon  specimen  of  uniform  resistivity  with  a  (111)  orientation,  for  which  the  typical  spreading
resistance  per  probe  tip  is  between  300  and  1000  Ω,  shall  be  used  to  ensure  that  the  probe  tips  are  properly
conditioned (see ¶11.4.1).
NOTE 4:  An epitaxial layer of 0.1 to 1 Ω·cm, 10 μm or thicker is acceptable.
8. 3   A substrate, lapped or ground with 5 μm grit slurry or a tape or cloth coated with an abrasive grit of 8,000 to
12,000 grade, shall be used for conditioning the probe tips (see ¶11.4).
8. 4   Specimen  Preparation  Materials  —  Consisting  of  polishing  materials  and  pads  or  other  backing  plates,  as
follows:
8. 4.1   Silica Powder — Colloidal or non-colloidal in aqueous suspension with pH from 7.0 to 11.5 and either hard
plastic  such  as  methyl  methacrylate  (for  small  area  specimens)  or  a  poromeric  polishing  pad  of  urethane  or
polyurethane foam with a napped or sueded surface and attached to a rigid backing plate (for large area specimens).
8. 4.2   Diamond Suspension — In fluid or paste carrier with diamond in the range from 0.1 to 1 μm, together with
(1) a glass plate lapped with aluminum oxide in the range from 5 to 12 μm (and thoroughly removed subsequent to
lapping),  for  use  with  small  area  specimens,  or  (2)  a  nonwoven  chemotextile  polishing  pad  attached  to  a  rigid
backing plate, for use with large or small area specimens.
8. 4.3   Aluminum  Oxide  —  0.3  μm  particle  size  in  water  together  with  a  non-woven  chemotextile  polishing  pad
bonded to a rigid backing plate.
8. 4.4   Aluminum Oxide — 5 μm particle size, together with a frosted glass or cast iron lapping plate.
9   Safety Precautions
9. 1   Use normal safety precautions in operating the electrical equipment.
10   Sampling
10. 1   Since the most suitable sampling plan depends upon individual conditions, no general sampling procedure is
included here.  For referee purposes a sampling plan shall be agreed upon by the parties to the test before the tests
are started.
11   Preparation of Apparatus
11. 1    Adjust  the  probe  separation  to  the  desired  value  if  a  multiple-probe  arrangement  is  employed.    Record  the
probe separation.
11. 2   Choose a loading in the range from 10 to 100 gf (98 to 980 mN), inclusive, to be applied to the probes.  In a
multiple-probe arrangement, use the same loading for each probe.
11. 3    Once  the  loading  on  the  probes  has  been  chosen,  determine  an  appropriate  descent  rate  of  the  probes  on  the
specimen to minimize damage to the points and avoid fracturing the specimen.
NOTE 5:  The descent rate specified in ¶7.1.1.3 is adequate for a load of 40 gf (390 mN).
11. 4   Condition probe tips by stepping them at least 500 times on a silicon substrate that has been ground with 5 μm
grit slurry (see ¶8.3) or very lightly abrade the individual probe tips using the abrasive cloth or tape.
NOTE 6:  It is permissible to leave the slurry on the substrate during conditioning, but it must be removed from probe tips before
measuring test specimens.


SEMI MF525-0705 © SEMI 2003, 2005 7
11. 4.1    Measure  the  spreading  resistance  of  the  uniform  p-type  silicon  specimen  (see  ¶8.2)  in  accordance  with
¶¶13.4 through 14.2.  Consider the probes to be satisfactory if the measured spreading resistance is within ±10% of
the usual value that has been found to be consistent over a long period of time.
11. 4.2   If the probes are not satisfactory, repeat the conditioning step or use new probe tips.
11. 5   Using the microscope at 400×, examine the probe marks for reproducibility (Note 7).  If the probe marks from
a given probe do not appear similar, recondition (see ¶11.4) or replace the probe.
NOTE 7:  All  the  marks  from  a  specific  probe  should  appear  to  be  similar.    Probe  imprints  from  different  probes  need  not  be
identical.
11. 6    If  the  two-probe  arrangement  is  being  employed,  verify  that  the  spreading  resistances  of  the  two  probes  are
equal to within 10% when measured on the uniform p-type specimen (see ¶8.2) using the one-probe configuration.
If they are not, recheck or adjust the loading (see ¶11.2) and descent rate (see ¶11.3) to be equal on both probes.  If
satisfactory results are not achieved with equal probe loading and descent rate, recondition (see ¶11.4) or replace the
probes.
11. 7    Connect  the  appropriate  electrical  circuit  (see  Figures  1  through  3).    If  a  voltage  source  is  used  (constant-
voltage  or  log  comparator  methods),  adjust  the  potential  to  20  mV  or  less.    If  a  current  source  is  used  (constant-
current method), short circuit the output.
11. 8    Note  and  record  the  voltage  to  be  applied  in  millivolts  as  V  (constant-voltage  method),  the  current  to  be
applied  in  milliamperes  as  I  (constant-current  method),  or  the  value  of  the  standard  resistor  in  ohms  as  R
0
(log
comparator method).
12   Calibration
12. 1    Measure  the  resistivity  of  the  specimens  to  be  used  as  standards  (see  ¶8.1)  at  23  ±  3°C  in  accordance  with
SEMI MF84, if not previously measured.  Record the results or the previously determined value.
12. 2    Prepare  the  surface  of  the  calibration  specimens  using  the  materials  of  ¶¶8.4.1,  8.4.2,  8.4.3,  or  8.4.4  using
manual or machine procedures, the choice of materials and procedure being governed only by the requirement that
the calibration specimens must be prepared in the same manner as the specimens to be tested.  If the specimen to be
tested is epitaxial, the use of a lapped surface is not to be used for the calibration specimens.
12. 2.1    Clean  the  polishing  material  from  the  calibration  specimens  using  water,  or  solvent  in  the  case  of  solvent-
soluble  vehicles  used  for  certain  diamond  polishes.    Place  the  specimen  on  a  hot  plate  at  150  ±  20°C  for  10  to  15
min if calibration specimens were prepared with silica or aluminum oxide polishing or lapping compounds.
NOTE 8:  If  the  chosen  calibration  specimen  preparation  is  anything  other  than  lapping  with  5  μm  aluminum  oxide,  it  is
advisable to remove a minimum of 25 μm of specimen surface the first time the specimens are prepared, subsequent to resistivity
measurement  by  SEMI  MF84  in  order  to  remove  any  subsurface  damage  left  by  the  5  μm  lapping  process  required  in  SEMI
MF84.
NOTE 9:  The  frequency  with  which  calibration  specimen  surfaces  should  be  re-prepared  is  a  function  both  of  the  inherent
stability  of  the  surface  for  the  chosen  preparation  procedure,  and  of  possible  exposure  of  the  calibration  specimens  to
environments such as acid fumes.  The stability of the specimen surfaces for the chosen procedure should be established by each
user of this method.
12. 3    Make  a  minimum  of  20  spreading  resistance  measurements  on  each  of  the  proposed  standards.    Make  the
measurements as closely as possible to the region where the four-probe measurements (see ¶12.1) were made.  Make
these  measurements  over  a  length  approximately  equal  to  the  separation  of  the  outer  probe  tips  of  the  four-probe
array used for the resistivity measurements.  Record the results.
12. 4    Compute  the  mean  of  the  measurements  made  on  each  of  the  proposed  standards  and  calculate  the  standard
deviation  for  each  set  of  measurements.    If  the  standard  deviation  of  the  spreading  resistance  measurements  is
greater than 10% of the mean, do not use the specimen as a calibration standard.
12. 5    Using  the  resistivity  value  and  the  corresponding  spreading  resistance  mean  for  each  suitable  calibration
standard,  fit  an  appropriate  polynomial,  piecewise  linear,  or  spline  curve  to  the  calibration  data  for  the  groups  of
specimens of each conductivity type and orientation.  Plot the data and calibration curve on graph paper.


SEMI MF525-0705 © SEMI 2003, 2005 8
13   Procedure
13. 1   Handle the specimen carefully to avoid contamination or damage to the surface.
13. 2   Make all measurements with an ambient temperature of 23 ± 3°C.  Record the ambient temperature.
13. 3     Determine   the   orientation   of   the   specimen   surface   in   accordance   with   SEMI   MF26,   determine   the
conductivity type of the substrate and, if present, the epitaxial layer in accordance with SEMI MF42.  For epitaxial
layers, determine the thickness in accordance with either SEMI MF95 or SEMI MF110.  Record the results.
13. 4   Prepare all bulk specimens to be tested using the same procedure as was used for the calibration specimens in
¶12.2.    Do  not  prepare  the  surface  of  any  epitaxial  specimens.    Thoroughly  clean  polishing  material  residues  from
the  specimen  using  water  or  solvent  as  necessary.    If  the  materials  of  ¶8.4.1  or  ¶8.4.3  were  used  for  specimen
preparation, proceed to ¶13.5, otherwise proceed to ¶13.6.
13. 5   Place the specimen on a hot plate with the surface to be measured upwards, not in contact with the hot plate.
Heat  the  specimen  in  air  at  140  ±  20°C  for  10  to  15  min.    Remove  the  specimen  from  the  hot  plate.    Allow  the
specimen to return to 23 ± 3°C before continuing with the measurements.
13. 6    Rigidly  mount  specimen  on  stage  under  probes.    Use  of  wax  mounting  to  base  block  used  to  hold  specimen
during surface preparation or use of vacuum clamping is acceptable.  Position the specimen on the specimen holder
so that the probe or probes will be applied at the desired measurement location.
13. 7   Lower the points to make contact with the specimen surface, and adjust to within 0.1% (unless the comparator
method is being used) the voltage or current source to the desired value (see ¶11.8).
13. 8    After  a  stabilization  period  of  1  s  or  longer,  measure  and  record  the  current  in  milliamperes  as  I  (constant-
voltage  method),  the  voltage  in  millivolts  as  V  (constant-current  method),  or  the  output  of  the  log  comparator  as
log(i
1
/i
2
) (log comparator method).
13. 9   Adjust the voltage source to a value of 20 mV or less or short circuit the current source and lift the probes.
13. 10   Move the specimen to the next position, making sure that the step spacing is larger than the diameter of the
specimen area damaged by the probes.
13. 11   Note and record the step spacing.
13. 12   Repeat ¶¶13.6 through 13.11 until the desired number of measurements has been made.
14   Calculations
14. 1   Calculate the spreading resistance, R
s
, in ohms, for each measurement as follows:
14. 1.1   Constant-Voltage Method

I
V
R
s
=                                                                                  (3)
where:
V

=   applied voltage, mV, and
I =   measured current, mA.
14. 1.2   Constant-Current Method

I
V
R
s
=                                                                                  (4)
where:
V

=   measured voltage, mV, and
I =   applied current, mA.
14. 1.3   Comparator Method

)/log(
210
iiRR
s
=                                                                          (5)


SEMI MF525-0705 © SEMI 2003, 2005 9
where:
R
0
=
resistance of the standard resistor, Ω, and
log(i
1
/i
2
)    =   output of the log comparator.
14. 2   Calculate and record the mean value of the spreading resistance of each specimen.
14. 3    Using  the  appropriate  calibration  curve  (see  ¶12.4),  determine  the  resistivity  that  corresponds  to  the  mean
value of spreading resistance.  Record this as the average resistivity of the region measured.
15   Report
15. 1   Report the following information:
15. 1.1   Date of test,
15. 1.2   Location of test,
15. 1.3   Identification of operator,
15. 1.4   Identification of measuring instrument(s),
15. 1.5   Specimen identification,
15. 1.6   Loading on the probe tips,
15. 1.7   Crystallographic orientation of the specimen,
15. 1.8   Conductivity type of epitaxial layer, if present, and substrate,
15. 1.9   Thickness of epitaxial layer, if present, and method of measurement,
15. 1.10   Average resistivity of the region measured,
15. 1.11   Step spacing,
15. 1.12   Probe separation,
15. 1.13   Ambient temperature, and
15. 1.14   Surface preparation.
16   Precision and Bias
16. 1   The precision of this test method is based on an analysis of two components of random error evaluated from a
multilaboratory experiment that used small rectangular chips from 14 bulk silicon specimens and for which 21 sets
of  data  were  reported  by  12  different  laboratories.    The  specimens  tested  were  four  (111)  p-type  chips  from  about
0. 05 to about 1500 Ω·cm, six (111) n-type chips from about 0.01 to about 500 Ω·cm, one (100) n-type chip at about
10 Ω·cm  and  three  (100)  p-type  chips  from  about  0.01  to  about  10  Ω·cm.    Analyses  of  data  to  obtain  estimates  of
random  error  were  done  separately  for  three  categories  of  specimen  preparation  for  which  sufficient  data  were
returned  to  obtain  reliable  estimates.    In  each  category  of  specimen  preparation,  estimates  of  random  error  were
obtained  for  the  resistivity  range  from  0.01  to  200  Ω·cm;  estimates  were  not  obtained  from  the  two  specimens  of
highest resistivity.
16. 2    The  two  components  of  within-laboratory  random  error  that  were  evaluated  for  each  specimen  preparation
category  and  resistivity  range  are  the  repeatability,
σ
r
,  the  relative  standard  deviation  of  a  set  of  measurements
obtained  after  a  single  preparation  of  a  specimen,  and  the  reproducibility,
σ
R
,  the  relative  standard  deviation  of
measurement averages following re-preparations of a specimen.  A summary of the estimates of these components
based on the results of the multilaboratory experiment is given in Table 1, which gives the 90th percentile values for
σ
r
and σ
R
in each category.  The 90th percentile value is the value of σ
r
or σ
R
below which 90% of the contributed
values for that parameter in that category fall.  It is expected to be a conservative estimate of
σ
r
or σ
R
about 90% of
the time for predicting the precision achievable by a well-controlled laboratory.  The use of percentile distributions
of  the  test  data  to  obtain  these  estimates  of
σ
r
and  σ
R
for  the  entire  resistivity  range  results  in  a  high  value  for  the


SEMI MF525-0705 © SEMI 2003, 2005 10
reproducibility  value  of  silica-polished  specimens  which  serves  as  a  clear  warning  of  the  variability  of  results
incurred with the silica process.
16. 3    These  components  of  random  error  and  their  propagation  to  estimate  overall  measurement  precision  are
applicable  only  to  single  laboratory-operator-instrument  circumstances.    No  estimate  of  interlaboratory  precision
was derived from this multilaboratory experiment.
NOTE 10:  These estimates of random  error  were  based  on  data  from  laboratories  that  gave  evidence  of  being  in  control  of  the
specimen  preparation  and  measurement  processes.    They  are  values  that  should  be  obtainable  by  any  laboratory  which  is  in
control  of  the  measurement  process.    However,  they  are  superseded  by  whatever  improved  values  of  precision  an  individual
laboratory can verify it obtains.
Table 1  Estimates of Repeatability,
σ
r
, and Reproducibility, σ
R
, of Spreading Resistance Measurements as a
Function of Specimen Preparation for Wafers with Resistivity in the Range of 0.01 to 200 Ω·cm
Surface Preparation
σ
r
, % σ
R
, %
Diamond-planar polished 3.4    6.4
Diamond-bevel polished 6.3    6.2
Silica-bevel polished 4.9 19

16. 3.1   These estimates are expected to apply directly to measurements made with probe loads in the range from 10
to 45 g.  They are expected to be quite conservative estimates for measurements made at the upper end of this probe
load  range,  and  are  expected  to  be  less  conservative  for  measurements  made  at  the  lower  end  of  the  range.    There
were too few data at 5 g in the multi-laboratory test to apply them with confidence to measurements made at this low
a probe load.
16. 4   Details of the analysis of the multi-laboratory test are given in Related Information 1.  Related Information 2
gives procedures to combine the components of error in order to estimate the total random error, or precision, to be
expected in obtaining spreading resistance data and in converting such data to resistivity values by use of empirical
calibration.  These procedures are applied to the results of the multilaboratory experiment to provide an example of
their  use.    They  may  also  be  used  with  values
σ
r
and  σ
R
derived  from  in-house  experimentation  to  provide  an
estimate  of  the  precision  to  be  expected  in  a  particular  location.    Related  Information  3  lists  some  sources  of
systematic error which may be encountered.
16. 5    The  bias  of  this  test  method  cannot  be  evaluated  because  there  are  no  available  reference  standards  suitable
for evaluating bias.
17   Keywords
17. 1   calibration; epitaxial layer; resistivity; silicon; spreading resistance; spreading resistance probe


SEMI MF525-0705 © SEMI 2003, 2005 11
RELATED INFORMATION 1
ANALYSIS OF DATA FROM THE MULTILABORATORY EXPERIMENT
NOTICE:  This  related  information  is  not  an  official  part  of  SEMI  MF525.    It  was  derived  from  information
developed  during  the  original  preparation  of  the  standard  in  ASTM  Committee  F-1  on  Electronics  in  1977.    This
related information was approved for publication by full letter ballot procedures.
R1-1    In  the  multilaboratory  experiment  each  laboratory  received  its  own  replicate  set  of  specimens.    For  each
specimen  type  used,  the  replicates  were  approximately  3  by  5  mm  chips  cut  from  the  central  region  of  a  single
wafer.  Each laboratory was requested to take and report 4 sets of 25 measurements each, on each of the specimens.
Prior  to  each  set  of  measurements,  each  specimen  surface  was  to  be  reprepared  by  the  participating  laboratory's
choice of one of the following procedures: (1) polishing with diamond—either planar polishing the entire specimen
surface against an appropriate polishing pad or bevel polishing a portion of the specimen against a glass plate having
a  frosted  surface,  (2)  polishing  with  silica  in  an  aqueous  medium—either  the  entire  specimen  surface  against  an
appropriate polishing pad or on a beveled surface against a hard plastic surface, (3) lapping with alumina or garnet
in  water—either  the  entire  specimen  surface  or  on  a  beveled  surface  against  ground  glass  or  cast  iron.    Each
laboratory was to report preparation procedure used, probe material used, probe load, all spreading resistance data
and  any  additional  observations  thought  to  be  pertinent  to  the  analysis  of  the  multilaboratory  test.    Since  the
experiment  was  run  with  parallel  sets  of  specimens,  no  master  calibration  specimen  set  was  included.    To  avoid
possible confusion of analysis due to differing qualities of each laboratory's own calibration specimens, conversion
of data to resistivity values was not required.
R1-2    Table  R1-1  summarizes  the  combinations  of  resistivity  level,  conductivity  type,  and  crystallographic
orientation  for  the  specimens  used  in  this  multilaboratory  test.    Table  R1-2  summarizes  the  probe  material,  probe
load,  and  specific  specimen  preparation  conditions;  entries  in  this  table  are  organized  under  general  categories  of
specimen preparation.
Table R1-1  Description of Silicon Specimens Used in Spreading Resistance Round Robin
Specimen         Designation          C         D         E         F         G         H          J          K         L         M         N         P         R         T
Crystal   Orientation   (111)   (111)   (111)   (111)   (111)   (100)   (100)   (111)   (100)   (111)   (111)   (111)   (100)   (111)
Conductivity Type n         p         p         n         p                  n         p                  n         p         n         n                  p         p         n
Nominal Resistivity (Ω·cm)
0. 5       10      1500500      0.5       10       10      0.010.0110       180      0.05       1         75

R1-3  Two quantities were calculated to characterize each laboratory's data on each specimen.  The two quantities
are σ
r
,  the  average  of  the  relative  standard  deviations  from  each  set  of  25  measurements,  andσ
R
,  the  standard
deviation  of  the  4  measurement  averages  on  a  given  specimen,  each  expressed  as  a  percent  of  the  overall
measurement average for that lab on that specimen.  The first parameter is a measure of the repeatability, or freedom
from scatter, of measurements on a fixed surface, assuming there is no inherent resistivity variation to the specimen
over  the  area  measured;  the  second  parameter  is  a  measure  of  reproducibility  of  measured  value  following
independent  specimen  preparations  and  measurements.    A  summary  of  values  of  these  parameters,  as  well  as  the
grand averages of spreading resistance values are given in Table R1-3.  The entries are organized under the general
categories of specimen preparation used.  Separate analyses of measurement precision were done for each category
except  for  lapping  with  aluminum  oxide;  for  this  category  there  were  insufficient  data  (only  one  laboratory)  for  a
reliable analysis.  Values of average spreading  resistance  are  listed  for  completeness  of  record  only;  they  were  not
used for data screening or for formal analysis.
R1-4  A variety of choices of probe load, probe material, and specific details of specimen preparation are found to
occur  within  each  of  the  general  specimen  preparation  categories.    The  number  of  laboratories  that  used  any  one
specific set of specimen and probe conditions was too small to allow any reliable estimate of precision to be made
for that set of specific conditions.  Several assumptions were made regarding analysis of the data: (1) the data could
be  pooled  within  each  general  specimen  preparation  category  without  further  regard  for  the  specific  details  of
specimen  preparation  or  measurement  condition,  (2)  the  results  of  the  analysis  would  represent  estimates  of  the
precision which could be expected by a laboratory in reasonable control of the spreading resistance instrumentation
and of the chosen type of specimen preparation, and (3) within each specimen preparation category, estimates of σ
r



SEMI MF525-0705 © SEMI 2003, 2005 12
andσ
R
could be calculated that would apply to broad ranges of resistivity values without further respect to specimen
crystallographic orientation or conductivity type.
Table R1-2  Description of Probe and Specimen Preparation Conditions Used in Each Laboratory
Laboratory Number Probe Material Probe Load, g Specimen Preparation
Diamond Planar-Polished
3                                    Tungsten-Osmium                                    10
0. 5 μm diamond
3                                    Tungsten-Osmium                                    20
0. 5 μm diamond
5                                    Tungsten-Osmium                                    45
0. 5 μm diamond
14                                   Tungsten-Osmium                                   45
1 μm diamond
Diamond Bevel-Polished
1                                    Tungsten-Osmium                                    20
0. 1 μm diamond
3                                    Tungsten-Osmium                                    10
0. 1 μm diamond
3                                    Tungsten-Osmium                                    20
0. 1 μm diamond
4                                  Tungsten-Ruthenium                                  5
0. 25 μm diamond
6                                    Tungsten-Osmium                                    10
0. 5 μm diamond
9                                    Tungsten-Osmium                                    22
0. 1 μm diamond
9                                    Tungsten-Osmium                                    5
0. 1 μm diamond
12                                   Tungsten-Osmium                                   20
0. 1 μm diamond
Silica Bevel-Polished
3                                    Tungsten-Osmium                                    10                                    ...
3                                    Tungsten-Osmium                                    10
Bake at 150°C
3                                    Tungsten-Osmium                                    20                                    ...
3                                    Tungsten-Osmium                                    20
Bake at 150°C
7 (Instrument 1) Tungsten-Osmium 20
Bake at 150°C
7 (Instrument 2) Tungsten-Osmium 20
Bake at 150°C
15 Tungsten-Osmium 45 Silica + 5% H
2
O
2

11                                   Tungsten-Osmium                                   20                                   (low penetration) pH = 8
Aluminum Oxide Lapped
10                                   Tungsten-Osmium                                   45
5 μm Lapped Surface

R1-5    No  independent  checks  of  measurement  quality  were  available;  all  inferences  regarding  control  of  the
measurement  process  by  the  participating  laboratories  had  to  be  made  from  the  test  data  supplied.    To  this  end,
within each specimen preparation category, all contributed values of σ
r
and σ
R
were rank ordered.  Any laboratory
which  contributed  significantly  more  than  its  expected  fraction  of  the  large  values  of  either  parameter  was  totally
dropped  from  further  analysis.    (The  only  exception  was  Laboratory  3  in  the  diamond-planar-polished  category.
Although  its  data  were  generally  higher  than  those  from  the  other  two  laboratories,  they  were  generally  of
reasonable absolute value and were likely due to the noticeably lower probe loads used by Laboratory 3.) As a result
of  this  screening,  data  from  the  following  laboratories  were  omitted  from  further  analysis:  diamond  bevel
polishing—Laboratory 6 and Laboratory 9 at 5 g, silica bevel polishing—Laboratory 11.
R1-5.1  Plots of average values of σ
r
and σ
R
as a function of resistivity only are shown in Figure R1-1.  These plots
were  obtained  by  simple  averaging  of  all  values  of  these  parameters,  as  a  function  of  specimen  resistivity,  for  all
laboratories  whose  data  were  not  rejected.    From  these  plots  it  is  seen  that  single  fixed  values  of  σ
r
,  or  σ
R
, do not
apply  to  the  entire  range  of  specimen  resistivities  measured.    Each  category  of  diamond  polish  appears  to  have  a
reasonably  constant  value  of  σ
r
or  σ
R
,  for  the  specimen  range  from  0.05  to  200  Ω·cm.    Silica-beveled  specimens
have a reasonably constant value of σ in this resistivity range; however, it is difficult to establish a single value of
σ
R

over any reasonable resistivity range for silica-polished specimens.
R1-5.2  Re-examination of laboratory data for the two highest resistivity specimens indicated a strong possibility of
resistivity  variations  in  these  two  specimens  as  well  as  a  variety  of  reported  probe  control  problems  that  were  not


SEMI MF525-0705 © SEMI 2003, 2005 13
found  with  the  lower  resistivity  specimens.    It  was  therefore  decided  to  omit  the  two  highest  resistivity  specimens
from further analysis.
R1-6  Tests of the distribution of reported values of σ
r
and σ
R
within each category indicated that they had too much
variability  to  be  consistent  with  single  underlying  values  of  repeatability  and  reproducibility  in  any  of  the
preparation  categories.    It  is  probable  that  some  of  this  excess  variability  resulted  from  the  variety  of  probe
conditions and specimen orientations, conductivity types, and surface preparation details.  Nevertheless, the effect of
this excess variability was that overall estimates of σ
r
and σ
R
could not be obtained from root-mean-square pooling
of the respective variances.  These overall estimates were obtained instead as percentiles of the distributions of the
contributed values in each category from specimens in the resistivity range from 0.01 to 200 Ω·cm.
Table R1-3  Summary of Round Robin Data
Specimen Identification
Lab

# #

#
C            D             E             F            G            H            J            K            L            M            N            P            R            T
Diamond-Planar Polish
#1
3
10 g
4. 16 kΩ
5. 1%
2. 2%
18. 1 kΩ
3. 5%
2. 5%
2. 09 MΩ
26. 0%
9. 7%
9. 19 MΩ
6. 6%
2. 9%
1. 01 kΩ
4. 5%
2. 6%
42. 1 kΩ
2. 2%
1. 4%
19. 2 kΩ
4. 1%
1. 4%
74. 6 Ω
6. 8%
3. 1%
12. 0 Ω
7. 5%
4. 5%
55. 6 kΩ
6. 3%
2. 8%
1. 98 MΩ
6. 8%
3. 0%
36. 1 Ω
0. 9%
2. 2%
1. 17 kΩ
5. 0%
2. 5%
745 kΩ
3. 4%
2. 5%
3
20 g
2. 05 kΩ
2. 2%
1. 7%
10. 6 kΩ
2. 2%
1. 4%
5. 79 MΩ
25. 0%
12. 0%
4. 37 MΩ
4. 6%
2. 9%
587 Ω
2. 8%
1. 7%
25. 2 kΩ
2. 5%
1. 8%
11. 3 kΩ
2. 6%
1. 6%
49. 0 Ω
7. 1%
2. 1%
6. 75 Ω
6. 6%
1. 5%
28. 9 kΩ
2. 4%
2. 0%

# 860

860. kΩ
4. 7%
2. 1%
24. 1 Ω
4. 9%
2. 2%

# 779

779. Ω
6. 0%
2. 2%
358 kΩ
1. 4%
2. 0%
5
B

# 886

886. Ω
1. 2%
...
6. 05 kΩ
0. 9%
...
4. 36 MΩ
20. 0%
...
1. 59 MΩ
6. 5%
...
316 Ω
2. 0%
...
15. 4 kΩ
2. 2%
...
7. 14 kΩ
0. 4%
...
24. 0 Ω
1. 7%
...
3. 88 Ω
0. 8%
...
12. 7 kΩ
4. 5%
...

# 470

470. kΩ
0. 0%
...
12. 2 Ω
0. 7
...

# 411

411. Ω
2. 1%
...
219 kΩ
2. 9%
...
14
1. 69 kΩ
0. 4%
1. 6%
9. 22 kΩ
0. 3%
1. 6%
1. 09 MΩ
1. 6%
1. 2%
4. 16 MΩ
5. 1%
10. 9%
728 Ω
0. 8%
3. 8%
15. 8 kΩ
0. 3%
1. 0%
9. 51 kΩ
0. 3%
1. 3%
35. 1 Ω
0. 5%
0. 9%
5. 34 Ω
0. 5%
2. 3%
21. 3 kΩ
0. 8%
1. 8%

# 487

487. kΩ
0. 2%
1. 1%
17. 6 Ω
1. 3%
1. 1%
1. 01 kΩ
1. 1%
4. 6%
215 kΩ
2. 4%
8. 5%
Diamond-Bevel Polish
#1

1
2. 20 kΩ
5. 6%
4. 6%
10. 4 kΩ
1. 4%
3. 4%
6. 15 MΩ
1. 8%
28. 0%
6. 15 MΩ
11. 8%
14. 4%

# 744

744. Ω
2. 3%
3. 6%
24. 5 kΩ
1. 2%
2. 0%
11. 1 kΩ
1. 9%
2. 0%
54. 8 Ω
8. 1%
4. 0%
9. 51 Ω
20. 0%
6. 0%
27. 2 kΩ
6. 8%
5. 6%
888 kΩ
0. 9%
6. 1%
26. 2 Ω
0. 6%
1. 9%
726 Ω
2. 5%
4. 0%
370 kΩ
2. 5%
5. 8%
3
10 g
3. 36 kΩ
1. 6%
3. 0%
17. 9 kΩ
2. 1%
2. 7%
7. 21 MΩ
3. 5%
3. 5%
15. 8 MΩ
5. 3%
4. 2%
1. 22 kΩ
1. 5%
3. 6%
45. 2 kΩ
4. 2%
1. 7%
21. 3 kΩ
1. 4%
3. 6%
72. 4 Ω
3. 6%
3. 8%
9. 89 Ω
4. 4%
4. 6%
58. 2 kΩ
3. 6%
3. 6%
2. 46 MΩ
4. 0%
4. 0%
42. 2 Ω
6. 2%
3. 0%
1. 36 kΩ
3. 0%
2. 6%
1. 01 MΩ
2. 3%
3. 5%
3
20 g
2. 33 kΩ
2. 5%
2. 5%
10. 5 kΩ
1. 3%
1. 8%
2. 48 MΩ
6. 90%
3. 9%
7. 10 MΩ
5. 5%
3. 7%

# 698

698. Ω
3. 6%
3. 2%
24. 0 kΩ
1. 5%
1. 7%
11. 8 kΩ
2. 4%
2. 4%
49. 4 Ω
4. 6%
3. 3%
6. 35 Ω
4. 9%
1. 7%
11. 3 kΩ
2. 4%
2. 4%
1. 04 MΩ
5. 8%
2. 9%
25. 0 Ω
3. 0%
2. 3%
824 Ω
1. 8%
2. 3%
424 kΩ
2. 3%
2. 2%
4
5. 43 kΩ
1. 8%
2. 9%
22. 5 kΩ
2. 4%
2. 6%
20. 5 MΩ
3. 8%
4. 6%
13. 6 MΩ
18. 0%
9. 8%
1. 54 kΩ
1. 7%
3. 1%
67. 3 kΩ
1. 8%
2. 4%
27. 6 kΩ
1. 8%
2. 4%
105 Ω
1. 4%
1. 9%
14. 2 Ω
4. 5%
1. 8%
70. 0 kΩ
4. 4%
4. 2%
3. 03 MΩ
8. 4%
8. 0%
...
...
...
...
...
...
1. 06 MΩ
1. 6%
3. 4%
6
4. 09 kΩ
2. 2%
5. 9%
17. 9 kΩ
3. 1%
4. 5%
3. 24 MΩ
2. 60%
8. 0%
10. 2 MΩ
17. 9%
12. 6%
1. 52 kΩ
16. 2%
10. 0%
39. 1 kΩ
0. 7%
3. 4%
15. 7 kΩ
0. 8%
2. 0%
108 Ω
11. 0%
8. 1%
20. 4 Ω
12. 6%
19. 4%
54. 4 kΩ
7. 4%
8. 7%
1. 48 MΩ
22. 0%
15. 5%
58. 6 Ω
6. 9%
10. 7%
1. 40 kΩ
2. 0%
8. 8%
647 kΩ
2. 5%
13. 1%
9
22 g
2. 30 kΩ
4. 2%
4. 0%
13. 2 kΩ
4. 4%
7. 6%
33. 9 MΩ
10. 7%
46. 0%
3. 79 MΩ
7. 7%
9. 9%
877 Ω
5. 3%
6. 3%
28. 3 kΩ
2. 4%
1. 3%
15. 1 kΩ
2. 3%
5. 4%
44. 6 Ω
2. 8%
2. 1%
6. 48 Ω
2. 7%
3. 2%
30. 9 kΩ
2. 9%
3. 8%
1. 16 MΩ
5. 2%
3. 4%
27. 5 Ω
2. 2%
2. 3%
1. 05 kΩ
3. 5%
5. 0%
525 kΩ
1. 8%
4. 6%
9
5 g
7. 84 kΩ
5. 6%
9. 7%
62. 6 kΩ
9. 0%
18. 4%
12. 6 MΩ
11. 0%
10. 2%
16. 0 MΩ
6. 2%
5. 1%
3. 96 kΩ
1. 7%
18. 7%
60. 3 kΩ
1. 4%
1. 5%
35. 8 kΩ
3. 7%
5. 3%
122 Ω
21. 0%
5. 3%
15. 9 Ω
9. 0%
8. 0%
92. 8 kΩ
9. 7%
5. 2%
6. 89 MΩ
16. 0%
8. 7%
86. 5 Ω
5. 6%
8. 1%
3. 36 kΩ
9. 9%
20. 0%
1. 67 MΩ
15. 0%
6. 2%
12
4. 91 kΩ
1. 8%
5. 2%
14. 8 kΩ
3. 9%
8. 0%
40. 7 MΩ
6. 5%
35. 0%
28. 8 MΩ
5. 1%
13. 3%
830 Ω
4. 9%
3. 3%
31. 1 kΩ
1. 5%
3. 6%
14. 9 kΩ
2. 8%
5. 6%
47. 9 Ω
5. 4%
3. 5%
8. 45 Ω
5. 1%
4. 4%
41. 3 kΩ
0. 6%
8. 7%
3. 39 MΩ
6. 5%
9. 9%
49. 2 Ω
3. 2%
5. 1%
1. 69 kΩ
8. 5%
7. 3%
1. 48 MΩ
11. 9%
6. 8%
Silica-Bevel Polish
#1

3
10 g
3. 82 kΩ
14. 0%
2. 6%
65. 8 kΩ
30. 0%
4. 7%
888 kΩ
80. 0%
6. 4%
616 kΩ
3. 0%
12. 3%
1. 88 kΩ
11. 3%
3. 7%
38. 2 kΩ
17. 8%
2. 3%
87. 8 kΩ
17. 8%
2. 3%
73. 8 Ω
6. 3%
2. 0%
10. 3 Ω
5. 4%
3. 3%
34. 0 kΩ
21. 6%
3. 1%
468 kΩ
14. 7%
6. 0%
30. 9 Ω
3. 1%
1. 7%
1. 57 kΩ
2. 0%
1. 7%
573 kΩ
33. 0%
6. 3%
3
10 g
baked
2. 95 kΩ
12. 5%
2. 8%
31. 1 kΩ
8. 5%
2. 3%
943 kΩ
25. 0%
7. 8%
723 kΩ
23. 0%
6. 7%
1. 45 kΩ
4. 1%
3. 6%
30. 9 kΩ
14. 6%
2. 7%
35. 4 kΩ
7. 0%
2. 2%
79. 2 Ω
3. 8%
1. 9%
10. 7 Ω
0. 7%
3. 2%
31. 1 kΩ
9. 2%
2. 8%
610 kΩ
49. 0%
6. 1%
30. 7 Ω
1. 5%
1. 3%
1. 27 kΩ
6. 6%
1. 5%
365 kΩ
29. 0%
6. 4%
