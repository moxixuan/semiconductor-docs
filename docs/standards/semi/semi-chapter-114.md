---
title: "P10-0705 - © SEMI 1990, 2005..."
description: "SEMI标准文档"
sidebar_label: "P10-0705 - © SEMI 1990, 2005..."
sidebar_position: 1140
tags: ['SEMI', 'Standard']
custom_props:
  source_type: 'pdf'
  source_file: 'semi-chapter-114.pdf'
  chapter: 114
  page_count: 50
---

import PdfDownloadCard from '@site/src/components/PdfDownloadCard';

PdfDownloadCard
  pdfLink="/pdfs/semi/114.pdf"
  pdfSize="0.29MB"
  title="P10-0705 - © SEMI 1990, 2005..."
  description="SEMI标准文档，共50页"
/



# 文档标题

SEMI P10-0705 © SEMI 1990, 2005 146
8. 1.696  START_DATA_FUNCTION — (text) name of data_function group.
8. 1.697  START_DATA_MANIPULATION   —   (text)   name   of   group   of   sequential   BOOLEAN   and/or
data_fracture  operations.    The  output  pattern  data  from  the  first  operation  is  the  input  pattern  data  for  the  next
operation  and  so  on.    The  data  field  must  be  a  unique  identifier  within  mask_order  as  the  results  of  one
data_manipulation may be referenced by another.
8. 1.698  START_DEFECT_DEFINITION — (text) name of defect_definition group.
8. 1.699  START_DEFECT_MEASUREMENTS — (text) name of defect_measurements group.
8. 1.700  START_ETCH_DEPTH_MEASUREMENTS  —  Indicates  the  beginning  of  etch  depth  measurements
within phase_shift_measurements.
8. 1.701  START_LITHO_INFORMATION — (text) name of litho_information.
8. 1.702  START_MASK_RESULTS  —  Indicates  the  beginning  of  the  file  from  the  vendor  to  the  customer
containing actual mask results data. Should match the data field of the START_ORDER to which it is responding
AND the data field of END_MASK_RESULTS.
8. 1.703  START_MASK_RESULTS_OPTIONS — (text) name of mask_results_options.
8. 1.704  START_MATERIALS_USED — (text) name of materials_used.
8. 1.705  START_MEASURED_REGISTR_MARK —(text) name of measured_registr_mark.
8. 1.706  START_OPC — (text) name of opc_definition group.
8. 1.707  START_ORDER  —  Indicates  the  beginning  of  order  entry  data  file  from  the  customer  to  the  vendor.
Should indicate the name(s) of the mask sets included.
8. 1.708  START_PATTERN_GROUP_RESULTS — (text) name of pattern_group_results.
8. 1.709  START_PATTERN_OPTIONS — (text) name of pattern_options group.
8. 1.710  START_PHASE_ANGLE_MEASUREMENTS  —  Indicates  the  beginning  of  phase  angle  measurements
within phase_shift_measurements.
8. 1.711  START_PHASE_SHIFT — (text) name of phase_shift group.
8. 1.712  START_PHASE_SHIFT_MEASUREMENTS — (text) name of phase_shift_measurements group.
8. 1.713  START_PLACEMENT — (text) name of placement group.
8. 1.714  START_REGISTR  —  Indicates  beginning  of  registration  collection.  Defines  separation  between
multiple  registrations.  Alphanumeric  data  field  identifies  the  collection  to  establish  which  collections  are
hierarchically superceded by another; also for reference by REGISTR_RELATIVE.
8. 1.715  START_REGISTR_MEASUREMENTS — (text) name of registr_measurements group.
8. 1.716  START_REPAIR_DEFINITION — (text) name of repair_definition group.
8. 1.717  START_SEM_PHOTO — (text) name of sem_photo group.
8. 1.718  START_SHIP_PLOT —  Indicates beginning of ship_plot collection. Alphanumeric data field identifies
the collection to establish which collections are hierarchically affected by another. The appearance of a ship_plot
with the same START_SHIP_PLOT data field at a lower level in the hierarchy (see §6) supersedes the ship_plot
at a higher level in the hierarchy.
8. 1.719  START_SHIP_TO — (text) name of ship_to group.
8. 1.720
START_SHIPPABLE_DATA — (text) name of shippable_data group.
8. 1.721  START_SUBSTRATE — (text) name of substrate group.
8. 1.722  START_SURFACE_DEFINITION — (text) name of
surface_definition group.
8. 1.723  START_SURFACE_INSP_MEASUREMENTS  —  (text)  name  of  surface_insp_measurements  group.
Must match  START_SURFACE_DEFINITION of corresponding
surface_definition group.


SEMI P10-0705 © SEMI 1990, 2005 147
8. 1.724  START_TITLE — (title number) Indicates the beginning keywords for a specific title.
8. 1.725  START_TRANSMISSION_MEASUREMENTS — Indicates the beginning of transmission measurements
within phase_shift_measurements.
8. 1.726  START_VENDOR_INFO — (text) name of vendor_info group.
8. 1.727  STATUS — (NEW, OLD, CHANGE, CANCEL, HOLD, STOP, RESTART, RETURNED, PROTESTED,
QUOTE ONLY) Present status of mask(s); NEW = new mask which has not been ordered before. OLD = previously
ordered  mask  whose  data  is  included  for  reference  only.  CHANGE  =  previously  ordered  mask  whose  data  is
included because the order data has been changed since the last transmission. CANCEL = previously ordered mask
whose  order  is  being  cancelled.  HOLD  =  enter  a  new  mask  but  do  not  release  it  to  production  until  customer
authorization.
STOP  =  previously  ordered  mask  which  is  put  on  hold  until  further  notice.  RESTART  =  changes  a
previous  STATUS  of  STOP  from  being  on  hold  to  being  released  for  production.  RETURNED  =  a  previously
delivered mask which has been rejected by the customer and is being returned to the vendor. A data entry transmittal
which includes a RETURNED mask should also include a NEW mask if replacement is to be initiated. PRICE of the
returned  mask  should  be  the  negative  of  the  original  price  in  order  to  track  credit.  The  NEW  mask  should  also
contain PRICE and a new schedule. PROTESTED = a RETURNED mask whose rejection is protested by the mask
vendor.  If  a  NEW  mask  accompanied  the  RETURNED  mask  to  initiate  replacement,  the  NEW  mask  should  also
have  PROTESTED  status.  QUOTE_ONLY  =  the  order  is  not  to  be  manufactured,  but  is  only  to  be  used  by  the
vendor for quoting price and delivery.
8. 1.728  STD_PATTERN_NAME  —  Name  of  a  standard  pattern,  on  file  at  the  vendor,  previously  supplied  or
authorized by the customer.
8. 1.729  STEPPING_COUNT — (x,y) Count of successive pattern or cell placements.
8. 1.730  STEPPING_DISTANCE — (x,y) Spacing between successive pattern or cell placements.
8. 1.731  STRIPE_HEIGHT — Stripe height in address units of pattern file.
8. 1.732  SUMMARY_FILE_NAME — (text) Name identifying  the  summary  output  file  for  RUNSET_NAME.    If
this  keyword  appears  in  the
mask_order,  it  must  be  explicitly  referenced  in  a  RUNSET_NAME  and/or  a
PARAMETER_FILE_NAME.
8. 1.733  SURF_DEFECT_TYPE — (CONTAM_ON_CLEAR, DIM_CLEAR, ON_EDGE, UNKOWN, PINHOLE,
BRIGHT_CHROME,   CONTAM_ON_CHROME,   DIM_CHROME,   ON_CLEAR,   BRIGHT,   ON_CHROME,
ON_ATT, DIM_ATT, ATT_PINHOLE and others on request) Setup parameter for surface inspection.
8. 1.734  SURF_INSP_AREA  —  (x1,y1,x2,y2)  Unscaled  coordinates  of  window  for  surface  inspection,  lower  left
and  upper  right  corners,  relative  to  the  nominal  center  of  mask,  pattern  or  cell  (chrome  side  up  for  masks,
unmirrored for patterns or cells).
8. 1.735  SURF_INSP_EQUIP_REQD   —   Alphanumeric   identification   of   acceptable   equipment   for   defect
inspection.
8. 1.736  SURF_INSP_EQUIP_USED — Surface inspection equipment used.
8. 1.737  SURF_INSP_GLASS_SIDE — If present, specifies the maximum dimension of the smallest unacceptable
particle on the glass side of the mask. This keyword is generally intended for non-pelliclized masks.
8. 1.738  SURF_INSP_METHOD  —  (LASER,  VISUAL,  PIXEL  or  MICROSCOPE)  Methodology  for  detecting
surface particles.
8. 1.739  SURF_INSP_MODE_REQD — Alphanumeric operating mode required for SURF_INSP_EQUIP_REQD.
8. 1.740  SURF_INSP_MODE_USED — (text) SURF_INSP_EQUIP_USED operating mode.
8. 1.741  SURF_INSP_PATTERN_SIDE — Specifies the maximum dimension of the smallest unacceptable particle
on the patterned side of the mask. This keyword is generally intended for non-pelliclized masks.
8. 1.742  SURF_INSP_PELL_BOTTOM — Specifies the maximum dimension of the smallest unacceptable particle
on the pellicle on the glass side of the mask on either surface of the pellicle membrane or on the glass surface under
the pellicle.


SEMI P10-0705 © SEMI 1990, 2005 148
8. 1.743  SURF_INSP_PELL_TOP  —  If  present,  specifies  the  maximum  dimension  of  the  smallest  unacceptable
particle on the pellicle on the patterned side of the mask on either surface of the pellicle membrane.
8. 1.744  SURF_INSP_PELL_TOP_INSIDE_MEMBRANE  —  Maximum  dimension  of  the  smallest  unacceptable
particle on the patterned side of the mask on the inside surface of the pellicle membrane.
8. 1.745  SURF_INSP_PELL_TOP_INSIDE_ON_FRAME  —  Maximum  dimension  of  the  smallest  unacceptable
particle on the patterned side of the mask on the inside surface of the pellicle frame.
8. 1.746  SURF_INSP_PELL_TOP_ON_CLEAR_PATTERN — Maximum dimension of the smallest unacceptable
particle on the patterned surface of the mask under the pellicle, but on the clear pattern of the mask.
8. 1.747  SURF_INSP_PELL_TOP_ON_OPAQUE_PATTERN    —    Maximum    dimension    of    the    smallest
unacceptable particle on the patterned surface of the mask under the pellicle, but on the opaque pattern of the mask.
8. 1.748  SURF_INSP_PELL_TOP_OUTSIDE_FRAME  —  Maximum  dimension  of  the  smallest  unacceptable
particle on the patterned surface of the mask outside the pellicle frame.
8. 1.749  SURF_INSP_PELL_TOP_OUTSIDE_MEMBRANE — Maximum dimension of the smallest unacceptable
particle on the patterned side of the mask on the outside surface of the pellicle membrane.
8. 1.750  SURF_INSP_PELL_TOP_OUTSIDE_ON_FRAME — Maximum dimension of the smallest unacceptable
particle on the patterned side of the mask on the outside surface of the pellicle frame.
8. 1.751  SURF_INSP_PELL_TOP_OUTSIDE_ON_OPAQUE     —     Maximum     dimension     of     the     smallest
unacceptable particle on the patterned surface of the mask outside the pellicle frame, but on the opaque surface of
the mask.
8. 1.752  SURF_INSP_PIXEL_SIZE_REQD — Pixel size to use for surface inspection.
8. 1.753  SURF_INSP_PIXEL_SIZE_USED — Pixel size used by SURF_INSP_EQUIP_USED.
8. 1.754  SURF_INSP_SENSITIVITY_REQD — Sensitivity to be used by SURF_INSP_EQUIP_REQD.
8. 1.755  SURF_INSP_SENSITIVITY_USED — Sensitivity used by SURF_INSP_EQUIP_USED.
8. 1.756  SURF_INSP_SETUP_FILE_NAME_REQD      —      Alphanumeric      name      of      setup      file      for
SURF_INSP_EQUIP_REQD.
8. 1.757  SURF_INSP_SETUP_FILE_NAME_USED      —      Alphanumeric      name      of      setup      file      for
SURF_INSP_EQUIP_USED.
8. 1.758  SURFACE_INSPECTION — If present, requires surface inspection and specifies the maximum dimension
of the smallest unacceptable surface particles.
8. 1.759  SURFACE_QUALITY_ID  —  (text)  Customer’s  label  for  a  collection  of  surface  quality  specifications,  to
be used only in addition to explicit quality requirement keywords. This may be used in the data structure in addition
to,  but  not  in  place  of,  explicit  quality  requirement  keywords.  This  may  not  be  used  in  combination  with
QUALITY_GROUP_ID. Customer and vendor should document the meaning of this quality grade before using it in
SEMI P10.
8. 1.760  SURROUNDING_HEIGHT — Height of clear or dark border around pattern on mask.
8. 1.761  SURROUNDING_TONE — (CLEAR or DARK) Border surrounding pattern on mask is to be either clear
or dark.
8. 1.762  SURROUNDING_WIDTH — Width of clear or dark border around pattern on mask.
8. 1.763  THROUGH_PELLICLE_DEFECTS  —  Precedes  defect_measurements  when  delivering  defect  data
measured with pellicle applied.
8. 1.764  TITLE_FONT  —  Alphanumeric  name  of  the  font  use  in  writing  TITLE_TEXT,  to  be  previously  agreed
between customer and vendor.
8. 1.765  TITLE_HEIGHT — (height) Height in microns of title characters.


SEMI P10-0705 © SEMI 1990, 2005 149
8. 1.766  TITLE_JUSTIFICATION — (L or R) Left or right justification within the writable field, before mirroring
and before rotation.
8. 1.767  TITLE_LOCATION  —  (x,y)  Location  of  the  lower  left  corner  of  TITLE_TEXT  in  the  associated
title_data (before mirroring or rotation), relative to nominal center of mask (chrome side up).
8. 1.768  TITLE_MAG  —  Numeric  magnification  to  the  standard  font  size  for  the  mask  writer  in  writing
TITLE_TEXT. This item should not be used in conjunction with TITLE_HEIGHT for the same MASK_SET_ID.
8. 1.769  TITLE_TEXT — (text) Alphanumeric contents of human-readable text on the mask.
8. 1.770  TITLE_TYPE   —   (MASK,   DEVICE,   LAYER,   DATE_TIME,   SOFTWARE,   SERIAL_NUMBER,
AUXILIARY)
8. 1.771  TOP_PELLICLE_CENTRALITY_ERROR  —  (x,y,rotation)  Maximum  misplacement  in  micrometers  and
microradians of pellicle mounting, relative to the nominal center of the mask.
8. 1.772  TOP_PELLICLE_TYPE — Alphanumeric brand and model of acceptable pellicle for the patterned side of
the mask. If multiple pellicles are listed, they are prioritized with the most preferred first and least preferred last.
8. 1.773  TOP_PELLICLE_USED — (text) The pellicle vendor’s part number of the pellicle applied to the patterned
surface of the mask.
8. 1.774  TRANSMISSION_DEFECT_CLEAR — Maximum allowable percent transmission of light through a clear
defect.
8. 1.775  TRANSMISSION_DEFECT_DARK  —  Maximum  allowable  percent  blocking  of  light  through  a  dark
defect.
8. 1.776  TRANSMISSION_EQUIP_REQD — (text) Transmission measurement equipment required by customer.
8. 1.777  TRANSMISSION_EQUIP_USED — (text) Transmission measurement equipment used.
8. 1.778  TRANSMISSION_ERROR  —  For  phase  shift  masks,  the  maximum  acceptable  deviation  of  any  percent
transmission measurement from the TRANSMISSION_TARGET.
8. 1.779  TRANSMISSION_MARK_DRAWING  —  The  uniquely  identified  (for  each  customer)  document  which
shows the transmission mark structure itself, and may show the place(s) within the transmission mark which are to
be measured.
8. 1.780  TRANSMISSION_MARK_FEATURE   —   Text   describing   the   feature   to   be   used   for   transmission
measurement.
8. 1.781  TRANSMISSION_MARK_LOCATION  —  (x,y)  Location  of  transmission  mark  location  relative  to  the
nominal center of the mask (chrome side up).
8. 1.782  TRANSMISSION_MARK_LOCATION_DRAWING  —  The  uniquely  identified  (for  each  customer)
document which shows the location(s) of the transmission mark structure.
8. 1.783  TRANSMISSION_MARK_SITE_ID — Unique alphanumeric identifier of each transmission measurement
location  within  MASK_SET_ID  to  identify  individual  locations  when  using  mask_results.    If  the  same
coordinates   apply   to   locations   on   different   masks   within   the   mask   set,   they   may   have   the   same
TRANSMISSION_MARK_SITE_ID, but it is not mandatory.
8. 1.784  TRANSMISSION_MEASUREMENT_DATE — Transmission measurement date.
8. 1.785  TRANSMISSION_MEASUREMENT_FILE_NAME   —   Name   of   data   file   containing   results   of
transmission measurement.
8. 1.786
TRANSMISSION_MODE_REQD     —     (text)     Operating     mode     required     by     customer     for
TRANSMISSION_EQUIP_USED.
8. 1.787  TRANSMISSION_MODE_USED  —  (text)  Operating  mode  used  on  TRANSMISSION_EQUIP_USED
operating mode.


SEMI P10-0705 © SEMI 1990, 2005 150
8. 1.788  TRANSMISSION_RANGE  —  For  phase  shift  masks,  the  maximum  acceptable  variation  of  all  percent
transmission measurements, relative to each other.
8. 1.789  TRANSMISSION_REFERENCE_ONLY  —  (T  or  F)  If  T,  indicates  that  the  transmission  feature  is  to  be
measured and the data transmitted to the customer (if requested by SHIP_PHASE_SHIFT_MEASUREMENTS), but
that deviations in its measured value due to mask processing would NOT be cause for mask rejection.
8. 1.790  TRANSMISSION_TARGET  —  For  phase  shift  masks,  the  required  percent  transmission  of  light  at  the
specified
PSM_WAVELENGTH compared to quartz.
8. 1.791  TRANSMISSION_TOLERANCE  —  For  phase  shift  masks,  the  maximum  acceptable  deviation  of  the
mean of all percent transmission measurements to the TRANSMISSION_TARGET.
8. 1.792  UNSCALED_PATTERN_SIZE — (x,y) Unscaled size of the pattern file. If this is incorrect, the mask will
not be written until it is corrected.
8. 1.793  USER_UNIT  —  To  be  used  for  fracturing  DATABASE_SOURCE  into  inspection  data,  as  required  by
some inspection systems.
8. 1.794  UT1X_UNCUT — (T or F) If T, indicates that the reticle is to be delivered uncut (i.e., 5 inch square) size.
If F, or if the keyword is absent, the reticle is to be delivered in the 3 inch by 5 inch size.
8. 1.795  VENDOR — The name of the company from which the masks are ordered.
8. 1.796  VENDOR_ADDRESS — Address for VENDOR_CONTACT.
8. 1.797  VENDOR_CONTACT — Name of person to contact regarding the mask.
8. 1.798  VENDOR_EMAIL — Internet address for VENDOR.
8. 1.799  VENDOR_FAX — Phone number for facsimile machine of VENDOR.
8. 1.800  VENDOR_ORDER_ID  —  (text)  The  mask  vendor’s  order  identification  used  to  track  the  mask  order  in
manufacturing.
8. 1.801  VENDOR_PHONE — Phone number for VENDOR_CONTACT.
8. 1.802  VIRTUAL_ADDRESS  —  (T  or  F)  Designates  whether  “virtual  addressing”  option  is  to  be  used  to  write
the pattern.  If T, then the pattern will be written with a writing grid twice the nominal size of the pattern but in such
a way that the overall dimensions of the pattern and its internal features are preserved.  This option is used only by
MEBES systems and is usually limited to writing grids no larger than 0.25 micron.
8. 1.803  VISUAL_INSP_CRITERIA — (text) The part of the mask to inspect visually (e.g., “5 mm border”).
8. 1.804  VISUAL_INSPECTION_OK — (T or F) If T, the area of the preceding pattern may be inspected visually
and/or    automatically    at    the    vendor’s    option.    VISUAL_INSPECTION_OK    is    not    allowed    if    either
VISUAL_INSPECTION_REQD or AUTO_INSPECTION_REQD is T (true).
8. 1.805  VISUAL_INSPECTION_REQD  —  (T  or  F)  Visual,  microscopic  inspection  of  the  mask  for  defects  is
required.
8. 1.806  WAFER_EXPOSURE_ILLUMINATION — (STANDARD, ANNULAR, DIPOLE, QUADRAPOLE, and
others on request) Illumination configuration of the scanner, stepper or aligner on which the mask is to be used.  If
ANNULAR,  then  both  WAFER_EXPOSURE_SIGMA_INNER  and  WAFER_EXPOSURE_SIGMA_OUTER  are
required. If not ANNULAR, then only WAFER_EXPOSURE_SIGMA is required.
8. 1.807  WAFER_EXPOSURE_NUMERICAL_APERATURE — Numerical aperture in nanometers of the scanner,
stepper or aligner on which the mask is to be used.
8. 1.808  WAFER_EXPOSURE_SIGMA — Partial coherence of the scanner, stepper or aligner on which the mask
is to be used. (This is a unitless parameter.)
8. 1.809  WAFER_EXPOSURE_SIGMA_INNER  —  Inner  partial  coherence  of  the  scanner,  stepper  or  aligner  on
which the mask is to be used. (This is a unitless parameter.)


SEMI P10-0705 © SEMI 1990, 2005 151
8. 1.810  WAFER_EXPOSURE_SIGMA_OUTER  —  Outer  partial  coherence  of  the  scanner,  stepper  or  aligner  on
which the mask is to be used. (This is a unitless parameter.)
8. 1.811  WAFER_EXPOSURE_TOOL  —  Alphanumeric  brand  and  model  of  the  scanner,  stepper  or  aligner  on
which the mask is to be used.
8. 1.812  WAFER_FAB — (text) Identification of the customer’s wafer fab at which the mask(s) are intended to be
used.
8. 1.813  WAIVER  —  The  uniquely  identified  (for  each  customer)  document  which  describes  specifications  which
may be ignored by the vendor.
8. 1.814  WAIVER_OVERRIDE   —   The   uniquely   identified   (for   each   customer)   document   which   describes
specifications  which  usually    may  be  ignored  by  the  vendor,  but  in  this  case  may  NOT  be  ignored  by  the  vendor.
This keyword cancels the effect of the waiver only within the scope of its application in mask_order.
8. 1.815  WEB_ADDRESS — URL address.
8. 1.816  WRITE_DATE_TIME — Date and time at which mask exposure began on the lithography tool.
9  Computing the Checksum
9. 1  The cyclic checksum is computed as follows:
9. 1.1  Initialize  the  16  bit  checksum  value  to  zero.  Consider  all  the  records  in  the  data  file  from  START_ORDER
through  END_ORDER,  inclusive.  Consider  each  ASCII  character  up  to  and  including  the  “new_line”  character.
Convert each character to its ASCII numeric equivalent (e.g., space is 32 decimal, “A” is 65 decimal, etc.) Use the
value 10 decimal for the new_line function regardless of its internal representation (e.g., CR LF). Use only the 7 bit
ASCII representation for each character (i.e., ignore the high order bit in an 8 bit byte).
9. 1.2  XOR  each  of  the  characters  from  each  of  the  records  in  sequence,  from  the  first  character  in  the
START_ORDER  record  to  the  new_line  character  in  the  END_ORDER  record.  Before  each  character  is  XORed
with the checksum, circularly rotate the previous value of the accumulated 16 bit checksum one bit to the left.
9. 1.3  After all of the above characters have been accumulated into the checksum, convert it as an unsigned 16 bit
integer  into  the  ASCII  representation  of  its  decimal  value.  This  ASCII  string  is  the  data  field  following  the
CHECKSUM keyword, the last record in the mask order structure.



SEMI P10-0705 © SEMI 1990, 2005 152
RELATED INFORMATION 1
CRITICAL DIMENSION KEYWORDS

NOTICE:  This related information is not an official part of SEMI P10 and was derived from the North American
Microlithography  Committee.    This  related  information  was  approved  for  publication  by  full  letter  ballot  on
April 22, 2004.


CD_TOLERANCE — Maximum acceptable deviation of the mean of all measured critical
dimensions to the CD_TARGET
CD_RANGE — Maximum acceptable variation of all measured critical dimensions of same
nominal size, same tone and same orientation, relative to each other.

CD_DEVIATION_FROM_MEAN — Maximum acceptable deviation of any of the customer-
required CD measurements from the mean of those measurements.

Mean                               Target






SEMI P10-0705 © SEMI 1990, 2005 153

CD_DEVIATION_FROM_TARGET — Maximum acceptable deviation of any of
the customer-required CD measurements from the CD_TARGET.

If only one data value (p) appears in the data field, the tolerance is considered +/-
symmetrically about CD_TARGET.

If two data values ( p [,m] ) appear, then the first is the maximum amount by
which deviation is allowed larger than CD_TARGET, and the second is the
maximum amount by which deviation is allowed smaller than CD_TARGET. The
comma and second half of the argument are optional in the syntax (p[,m]) where
p = the plus and m = the minus value for non-symmetric tolerances; if only p is
specified, the plus and minus values are assumed to be symmetric.

pp
pm
CD_THREE_SIGMA — Maximum acceptable 3-sigma deviation of all measured
critical dimensions to the the mean of all measured critical dimensions
CD_XY_DEVIATION — Maximum deviation, on a site-by-site basis, of a
horizontal critical dimension to a vertical critical dimension. The two critical
dimensions at each site must be the same size in the pattern data and the
same tone on the mask.
CD_XY_TOLERANCE — Maximum acceptable deviation of the mean of all
measured horizontal critical dimensions to the mean of all measured vertical
mask critical dimensions. Critical dimensions at all sites must be the same size in
the pattern data.
Distribution of
X vs Y
Horizontal                                           Vertical




SEMI P10-0705 © SEMI 1990, 2005 154
RELATED INFORMATION 2
SEMI PHOTOMASK ORDER DATA FILE EXAMPLE

NOTICE:  The  information  contained  in  this  related  information  is  not  an  official  part  of  SEMI  P10,  and  it  is  not
intended  to  modify  or  supercede  the  official  standard.  Rather,  this  example  is  offered  as  an  aid  to  visualizing
possible output from software which might implement the standard.
EXAMPLE: A pair of 4-die 5Χ reticles with separate scribe, barcode, and rms alignment marks. Critical dimensions
are defined as pattern options.

barcode
rms
mark
mask title 1
mask title 2
rms
mark





SEMI P10-0705 © SEMI 1990, 2005 155
START_ORDER                                                    MS999
SEMI_REVISION                                                  P10-0704                                                  !mask_order
CUSTOMER                                                          COMPANY                                                          NAME
VENDOR ULTIMATE MASK COMPANY
FILE_DATE_TIME                                               13-APR-1992,                                               13:00:00Z
MASK_SET_ID                                                     9999                                                        !mask_set
BILLING_CONTACT Jean Doe, Accounts Payable !mask_set_options
BILLING_ADDRESS                                            Company                                            Name
BILLING_ADDRESS                                            Street                                            Address
BILLING_ADDRESS City, State ZIP
BILLING_PHONE                                                 4085551212
PRICE_UNITS                                                       USD
SHIPPING_CONTACT Joe Doe, Wafer Fab
SHIPPING_ADDRESS                                          Company                                          Name
SHIPPING_ADDRESS                                          Street                                          Address
SHIPPING_ADDRESS City, State ZIP
SHIP_CD_DATA                                                   T
START_SHIP_TO                                                 CD
EMAIL_ADDRESS                                               CD_Engineer@Fab.com
END_SHIP_TO                                                      CD
SHIP_CD_DATA                                                   T
START_SHIP_TO                                                 CD                                                 Data
EMAIL_ADDRESS                                               MaskEngineer@Fab.com
END_SHIP_TO                                                      CD                                                      Data
DATA_MEDIUM                                                  9                                                  TRACK_TAPE
DATA_ID                                                               DEVICE                                                               9999
DATA_FORMAT                                                  MEBES
DATA_DENSITY                                                  1600BPI
DATA_PATTERN_NAME                                   VT9999X-1A-26
PATTERN_FORMAT                                           MEBES_RETICLE
DATA_PATTERN_NAME                                   VT9999X-1A-10
PATTERN_FORMAT                                           MEBES_RETICLE
DATA_PATTERN_NAME                                   SC9999X-1A-26
PATTERN_FORMAT                                           MEBES_RETICLE
DATA_PATTERN_NAME                                   SC9999X-1A-10
PATTERN_FORMAT                                           MEBES_RETICLE
END_DATA_MEDIUM                                        9                                        TRACK_TAPE
STD_PATTERN_NAME                                       GCARMSB-OX-AA
PATTERN_FORMAT                                           MEBES_RETICLE
END_MASK_SET_OPTIONS                              9999
!
MASK_GROUP_ID                                               5X                                                                                              !mask_group
BLANKET_PO_NUMBER                                   101055C
RELEASE_NUMBER                                           42
MILESTONES                                                       T


SEMI P10-0705 © SEMI 1990, 2005 156
PRODUCT_TYPE                                                 RETICLE
PRODUCT_MAGNIFICATION                           5X
PRODUCT_IMAGING_TYPE                              BINARY
TITLE_TYPE                                                         DEVICE
TITLE_LOCATION                                              12500,58500
END_TITLE                                                           1
START_TITLE                                                      2
TITLE_TYPE                                                         MASK
TITLE_LOCATION                                              12500,56500
END_TITLE                                                           2
START_BARCODE                                              A
BARCODE_TYPE                                                 GCA
BARCODE_LOCATION                                      -50000,57500
END_BARCODE                                                   A
MIRROR_MASK                                                   T
START_SUBSTRATE                                          S1
BLANK_SIZE                                                        5/90
BLANK_TYPE                                                      ULTE
BLANK_FLATNESS                                            2
MASK_COATING                                                LOW_REFLECTANCE_CHROME
RESIST_TYPE                                                       POSITIVE
END_SUBSTRATE                                               S1
START_REGISTR   RG1
REGISTR_ERROR                                                0.25
REGISTR_REF_MASK_ID                                  2
END_REGISTR                                                     RG1
START_CD                                                            SPECIFICATION
CD_TOLERANCE                                                 0.25
CD_RANGE                                                           0.3
END_CD                                                                SPECIFICATION
START_DEFECT_DEFINITION                          C
DEFECT_SIZE                                                      2.0
DEFECT_COUNT                                                 0
INSPECTION_AREA                                            -30000,-35000,30000,35000
END_DEFECT                                                       C
PACKAGE                                                             H60-51-63A09
END_MASK_GROUP_OPTIONS                        5X
!
PLACEMENT_TOP_CELL                                  C1
!
MASK_ID                                                              1                                                              !mask_definition
DELIVERABLE_MASK                                       T
LINE_ITEM_NUMBER                                        1
STATUS                                                                 NEW
DUE_DATE_TIME_REQUESTED                      1992-04-20,                      14:00Z


SEMI P10-0705 © SEMI 1990, 2005 157
PRICE                                                                     2000
START_TITLE                                                      2
TITLE_TEXT                                                         DIFFUSION
END_TITLE                                                           2
START_BARCODE                                              A
BARCODE_TEXT                                                 9999-26
END_BARCODE                                                   A
MIN_MASK_FEATURE_SIZE                            10
END_MASK                                                          1
!
MASK_ID                                                              2                                                              !mask_definition
DELIVERABLE_MASK                                       T
LINE_ITEM_NUMBER                                        2
STATUS                                                                 NEW
DUE_DATE_TIME_REQUESTED                      1992-04-21,                      14:00Z
PRICE                                                                     2000
PRICE_UNITS                                                       USD
START_TITLE                                                      2
TITLE_TEXT                                                         POLY
END_TITLE                                                           2
START_BARCODE                                              A
BARCODE_TEXT                                                 9999-10
END_BARCODE                                                   A
MIN_MASK_FEATURE_SIZE                            10
END_MASK                                                          2
!
CELL_ID                                                                C1                                                                                                                                !cell_definition
END_CELL_OPTIONS                                         C1
CELL_INSTANCE C2  !MAIN ARRAY
END_CELL_INSTANCE_OPTIONS                   C2
START_PLACEMENT   P2
LOCATION   0,0
END_PLACEMENT
P2
END_CELL_INSTANCE                                      C2
PATTERN_GROUP_INSTANCE PG3 !RMS ALIGNMENT KEYS
START_PLACEMENT   PG3
LOCATION                                                            0,-57500
LOCATION                                                            -11000,57500
END_PLACEMENT                                              PG3
END_CELL C1  !END TOP CELL DEFINITION
!
CELL_ID C2  !MAIN ARRAY DEFINITION
END_CELL_OPTIONS                                         C2
PATTERN_GROUP_INSTANCE                         PG1                         !PRIMARY                         DIE


SEMI P10-0705 © SEMI 1990, 2005 158
START_PLACEMENT
PG1
LOCATION                                                            -15000,-17500
STEPPING_DISTANCE                                        30000,35000
STEPPING_COUNT                                              2,2
END_PLACEMENT                                              PG1
END_PATTERN_GROUP_INSTANCE              PG1
PATTERN_GROUP_INSTANCE                         PG2                         !SCRIBE                         LINE
START_PLACEMENT   PG2
LOCATION                                                            0,0
END_PLACEMENT                                              PG2
END_PATTERN_GROUP_INSTANCE              PG2
END_CELL                                                            C2
!
PATTERN_GROUP_ID PG1 !PRIMARY PATTERN GROUP
START_PATTERN_OPTIONS   PTN1
PATTERN_ADDRESS_SIZE                               0.5
SCALE_FACTOR  1.0
STRIPE_HEIGHT                                                  1024
UNSCALED_PATTERN_SIZE                            25000,30000
END_PATTERN_OPTIONS                                 PTN1
END_PATTERN_GROUP_OPTIONS                 PG1
LEVEL_ID                                                             1
PATTERN_NAME                                                VT9999X-1A-26
START_PATTERN_OPTIONS   PTN1.26
DIGITIZED_DATA_DARK                                  T
END_PATTERN_OPTIONS                                 PTN1.26
END_PATTERN_DEFINITION                           1
LEVEL_ID                                                             2
PATTERN_NAME                                                VT9999X-1A-10
START_PATTERN_OPTIONS   PTN1.10
DIGITIZED_DATA_DARK                                  F
END_PATTERN_OPTIONS                                 PTN1.10
END_PATTERN_DEFINITION                           2
END_PATTERN_GROUP                                    PG1
!
PATTERN_GROUP_ID PG2 !SCRIBE PATTERN GROUP
START_PATTERN_OPTIONS   PTN2
PATTERN_ADDRESS_SIZE                               0.5
SCALE_FACTOR  1.0
STRIPE_HEIGHT                                                  1024
UNSCALED_PATTERN_SIZE                            65000,75000
START_CD                                                            CD_SITES_1
CD_SITE_ID                                                          CD_1
CD_LOCATION                                                    -40000,0
END_CD                                                                CD_SITE_1


SEMI P10-0705 © SEMI 1990, 2005 159
START_CD   CD_SITE_2
CD_SITE_ID                                                          CD_2
CD_LOCATION                                                    0,-40000
END_CD                                                                CD_SITE_2
START_CD   CD_SITE_3
CD_SITE_ID                                                          CD_3
CD_LOCATION                                                    0,40000
END_CD                                                                CD_SITE_3
START_CD   CD_SITE_4
CD_SITE_ID                                                          CD_4
CD_LOCATION                                                    0,0
END_CD                                                                CD_SITE_4
END_PATTERN_OPTIONS                                 PTN2
END_PATTERN_GROUP_OPTIONS                 PG2
LEVEL_ID                                                             1
PATTERN_NAME                                                SC9999X-1A-26
START_PATTERN_OPTIONS   PO.26
DIGITIZED_DATA_DARK                                  T
START_CD                                                            DIMENSION
CD_DATA                                                             10
CD_DIGITIZED                                                    T
CD_TARGET                                                         10
END_CD                                                                DIMENSION
END_PATTERN_OPTIONS   PO.26
END_PATTERN_DEFINITION                           1
LEVEL_ID                                                             2
PATTERN_NAME                                                SC9999X-1A-10
START_PATTERN_OPTIONS   PO.10
DIGITIZED_DATA_DARK                                  F
START_CD                                                            DIMENSION
CD_DATA                                                             10
CD_DIGITIZED                                                    T
CD_TARGET                                                         10.5
END_CD                                                                DIMENSION
END_PATTERN_OPTIONS                                 PO.10
END_PATTERN_DEFINITION                           2
END_PATTERN_GROUP                                    PG2                                    !END                                    SCRIBE                                    GROUP
!
PATTERN_GROUP_ID PG3 !RMS ALIGNMENT MARK
START_PATTERN_OPTIONS   PTN3
PATTERN_ADDRESS_SIZE                               0.5
SCALE_FACTOR  1.0
STRIPE_HEIGHT                                                  1024
UNSCALED_PATTERN_SIZE                            2000,2000
START_DEFECT_DEFINITION   DD.1


SEMI P10-0705 © SEMI 1990, 2005 160
INSPECTION_AREA                                            -3000,-3000,3000,3000
END_DEFECT_DEFINITION   DD.1
END_PATTERN_OPTIONS   PTN3
END_PATTERN_GROUP_OPTIONS                 PG3
LEVEL_ID                                                             A
PATTERN_NAME                                                GCARMSB-OX-AA
START_PATTERN_OPTIONS   PTN3.AA
DIGITIZED_DATA_DARK                                  F
END_PATTERN_OPTIONS   PTN3.AA
END_PATTERN_DEFINITION                           A
END_PATTERN_GROUP PG3 !END ALIGNMENT MARK
!
END_MASK_GROUP                                           5X
END_MASK_SET                                                 9999
END_ORDER                                                        MS9999
CHECKSUM                                                          computed                                                          checksum



SEMI P10-0705 © SEMI 1990, 2005 161
RELATED INFORMATION 3
SEMI PHOTOMASK ORDER DATA FILE EXAMPLE EMPLOYING
MULTIPLE WRITE AND PROCESS STEPS FOR A SINGLE MASK
NOTICE:  The  information  contained  in  this  related  information  is  not  an  official  part  of  SEMI  P10,  and  it  is  not  intended  to
modify or supercede the official standard. Rather, this example is offered as an aid to visualizing possible output from software
which might implement the standard.

EXAMPLE: One 4-die phase shift reticle requiring two write and process steps.
START_ORDER                                                    MS999
SEMI_REVISION                                                  P10-0704                                                  !mask_order
CUSTOMER                                                          COMPANY                                                          NAME
VENDOR ULTIMATE MASK COMPANY
FILE_DATE_TIME                                               06-JUL-2000,                                               01:06:00
MASK_SET_ID                                                     9999                                                        !mask_set
END_MASK_SET_OPTIONS                              9999
!
MASK_GROUP_ID                                               PSM                                                                                              !mask_group
START_TITLE                                                      1
TITLE_TEXT                                                         DEVICE                                                         9999
TITLE_TYPE                                                         DEVICE
TITLE_LOCATION                                              12500,58500
END_TITLE                                                           1
START_TITLE                                                      2
TITLE_TEXT PHASE SHIFT POLY
TITLE_TYPE                                                         MASK
TITLE_LOCATION                                              12500,56500
END_TITLE                                                           2
MIRROR_MASK                                                   T
PRODUCT_TYPE                                                 RETICLE
PRODUCT_MAGNIFICATION                           5X
PRODUCT_IMAGING_TYPE                              EAPSM
BLANK_SIZE                                                        6/250
BLANK_TYPE                                                      ULTE
BLANK_FLATNESS                                            1
MASK_COATING                                                MOSI
RESIST_TYPE                                                       POSITIVE
START_CD                                                            SPECIFICATION
CD_TOLERANCE                                                 0.05
CD_RANGE                                                           0.06
END_CD                                                                SPECIFICATION
END_MASK_GROUP_OPTIONS                        5X
!
PLACEMENT_TOP_CELL                                  C1
!


SEMI P10-0705 © SEMI 1990, 2005 162
MASK_ID 1 !First write and process step
DELIVERABLE_MASK                                       F
MULTIWRITE  (1,1)
START_PHASE_SHIFT                                        1
PSM_WAVELENGTH
248
TRANSMISSION_TARGET                                 6
TRANSMISSION_TOLERANCE                         0.4
TRANSMISSION_RANGE                                   0.8
PHASE_ANGLE_TARGET                                  180
PHASE_ANGLE_TOLERANCE                          4
PHASE_ANGLE_RANGE                                    8
END_PHASE_SHIFT                                            1
START_REGISTR                                                 1
REGISTR_ERROR                                                0.10
END_REGISTR                                                     1
MIN_MASK_FEATURE_SIZE                            0.8
END_MASK                                                          1
!
MASK_ID 2 !Second write and process step
DELIVERABLE_MASK T
MULTIWRITE                                                       (1,2)
START_PHASE_SHIFT                                        2
PSM_WAVELENGTH                                          248
TRANSMISSION_TARGET                                 6
TRANSMISSION_TOLERANCE                         0.4
TRANSMISSION_RANGE                                   0.8
PHASE_ANGLE_TARGET                                  180
PHASE_ANGLE_TOLERANCE                          4
PHASE_ANGLE_RANGE                                    8
END_PHASE_SHIFT                                            2
TOP_PELLICLE_TYPE                                        CA627P-7043L
MIN_MASK_FEATURE_SIZE                            0.8
START_DEFECT_DEFINITION                          C
DEFECT_SIZE                                                      0.3
DEFECT_COUNT                                                 0
INSPECTION_AREA                                            -30000,-35000,30000,35000
END_DEFECT                                                       C
END_MASK                                                          2
!
CELL_ID                                                                C1                                                                                                                                !cell_definition
END_CELL_OPTIONS                                         C1
CELL_INSTANCE C2  !MAIN ARRAY
END_CELL_INSTANCE                                      C2
LOCATION                                                            0,0
PATTERN_GROUP_INSTANCE PG3 !RMS ALIGNMENT KEYS


SEMI P10-0705 © SEMI 1990, 2005 163
LOCATION                                                            0,-57500
LOCATION                                                            -11000,57500
END_CELL C1  !END TOP CELL DEFINITION
!
CELL_ID C2  !MAIN ARRAY DEFINITION
END_CELL_OPTIONS                                         C2
PATTERN_GROUP_INSTANCE                         PG1                         !PRIMARY                         DIE
LOCATION                                                            -15000,-17500
STEPPING_DISTANCE                                        30000,35000
STEPPING_COUNT                                              2,2
PATTERN_GROUP_INSTANCE                         PG2                         !SCRIBE                         LINE
LOCATION                                                            0,0
END_CELL                                                            C2
!
PATTERN_GROUP_ID PG1 !PRIMARY PATTERN GROUP
PATTERN_ADDRESS_SIZE                               0.05
SCALE_FACTOR  1.0
STRIPE_HEIGHT                                                  1024
UNSCALED_PATTERN_SIZE                            25000,30000
END_PATTERN_GROUP_OPTIONS                 PG1
LEVEL_ID                                                             1
PATTERN_NAME                                                VT9999X-1A-26
DIGITIZED_DATA_DARK                                  T
END_PATTERN_DEFINITION                           1
LEVEL_ID                                                             2
PATTERN_NAME                                                VT9999X-1A-10
DIGITIZED_DATA_DARK                                  F
END_PATTERN_DEFINITION                           2
END_PATTERN_GROUP                                    PG1
!
PATTERN_GROUP_ID PG2 !SCRIBE PATTERN GROUP
PATTERN_ADDRESS_SIZE                               0.05
SCALE_FACTOR  1.0
STRIPE_HEIGHT                                                  1024
UNSCALED_PATTERN_SIZE                            65000,75000
START_CD                                                            CD_SITES
CD_SITE_ID                                                          CD_1
CD_LOCATION                                                    -40000,0
CD_SITE_ID                                                          CD_2
CD_LOCATION                                                    0,-40000
CD_SITE_ID                                                          CD_3
CD_LOCATION                                                    0,40000
CD_SITE_ID                                                          CD_4
CD_LOCATION                                                    0,0
END_CD                                                                CD_SITES


SEMI P10-0705 © SEMI 1990, 2005 164
END_PATTERN_GROUP_OPTIONS                 PG2
LEVEL_ID                                                             1
PATTERN_NAME                                                SC9999X-1A-26
DIGITIZED_DATA_DARK                                  T
START_CD                                                            DIMENSION
CD_DATA                                                             0.8
CD_DIGITIZED                                                    T
CD_TARGET                                                         0.8
END_CD                                                                DIMENSION
END_PATTERN_DEFINITION                           1
LEVEL_ID                                                             2
PATTERN_NAME                                                SC9999X-1A-10
DIGITIZED_DATA_DARK                                  F
START_CD                                                            DIMENSION
CD_DATA                                                             0.8
CD_DIGITIZED                                                    T
CD_TARGET                                                         0.8
END_CD                                                                DIMENSION
END_PATTERN_DEFINITION                           2
END_PATTERN_GROUP                                    PG2                                    !END                                    SCRIBE                                    GROUP
!
PATTERN_GROUP_ID PG3 !RMS ALIGNMENT MARK
PATTERN_ADDRESS_SIZE                               0.5
SCALE_FACTOR  1.0
STRIPE_HEIGHT                                                  1024
UNSCALED_PATTERN_SIZE                            2000,2000
INSPECTION_AREA                                            -3000,-3000,3000,3000
END_PATTERN_GROUP_OPTIONS                 PG3
LEVEL_ID                                                             A
PATTERN_NAME                                                GCARMSB-OX-AA
DIGITIZED_DATA_DARK                                  F
END_PATTERN_DEFINITION                           A
END_PATTERN_GROUP PG3 !END ALIGNMENT MARK
!
END_MASK_GROUP                                           PSM
END_MASK_SET                                                 9999
END_ORDER                                                        MS9999
CHECKSUM                                                          computed                                                          checksum



SEMI P10-0705 © SEMI 1990, 2005 165
RELATED INFORMATION 4
SEMI PHOTOMASK MASK RESULTS DATA FILE EXAMPLE
NOTICE:  The  information  contained  in  this  related  information  is  not  an  official  part  of  SEMI  P10,  and  it  is  not  intended  to
modify or supercede the official standard. Rather, this example is offered as an aid to visualizing possible output from software
which might implement the standard.

EXAMPLE:  The  actual  mask  CD  data  sent  by  the  vendor  to  the  customer  for  a  4-die  5Χ  reticle  with
SHIP_CD_DATA set to TRUE.  (For reference, see Related Information 2, for MASK_ID = 1.)
START_MASK_RESULTS                                  MS999
SEMI_REVISION                                                  P10-0704                                                  !mask_order
CUSTOMER                                                          COMPANY                                                          NAME
VENDOR ULTIMATE MASK COMPANY
FILE_DATE_TIME                                               13-APR-1992,                                               13:00:00
MASK_SET_ID                                                     9999                                                        !mask_set
MASK_GROUP_ID                                               5X
MASK_ID                                                              1
TITLE_TEXT                                                         DEVICE                                                         9999
TITLE_TEXT                                                         DIFFUSION
START_CD_GROUP_MEASUREMENTS          SPECIFICATION
CD_TARGET                                                         10
CD_TOLERANCE                                                 0.25
CD_RANGE                                                           0.3
START_CD_MEASUREMENT                           CD_1
CD_SITE_ID                                                          CD_1
CD_LOCATION                                                    -40000,0
MEASURED_CD_SITE_ID                                  CD_1
MEASURED_CD_LOCATION                            -40000.1,0.08
MEASURED_CD                                                  9.95
END_CD_MEASUREMENT                                CD_1
START_CD_MEASUREMENT
CD_2

CD_SITE_ID
CD_2

CD_LOCATION                                                    0,-40000
MEASURED_CD_SITE_ID                                  CD_2
MEASURED_CD_LOCATION                            -0.07,-40000.11
MEASURED_CD                                                  10.01
END_CD_MEASUREMENT                                CD_2
START_CD_MEASUREMENT                           CD_3
CD_SITE_ID                                                          CD_3
CD_LOCATION                                                    0,40000
MEASURED_CD_LOCATION                            0.03,39999.95
MEASURED_CD                                                  9.98
END_CD_MEASUREMENT                                CD_3
START_CD_MEASUREMENT                           CD_4
CD_SITE_ID                                                          CD_4
CD_LOCATION                                                    0,0


SEMI P10-0705 © SEMI 1990, 2005 166
MEASURED_CD_SITE_ID                                  CD_4
MEASURED_CD_LOCATION                            0.01,-0.04
MEASURED_CD                                                  10.07
END_CD_MEASUREMENT                                CD_4
END_CD_GROUP_MEASUREMENTS              SPECIFICATION
END_MASK                                                          1
END_MASK_GROUP                                           5X
END_MASK_SET                                                 9999
END_ORDER                                                        MS9999
CHECKSUM                                                          computed                                                          checksum



SEMI P10-0705 © SEMI 1990, 2005 167
RELATED INFORMATION 5
SEMI PHOTOMASK ORDER EXAMPLE FOR 5X RETICLES
NOTICE:  The  information  contained  in  this  related  information  is  not  an  official  part  of  SEMI  P10,  and  it  is  not  intended  to
modify or supercede the official standard. Rather, this example is offered as an aid to visualizing possible output from software
which might implement the standard.

! Sample of 5X reticle order corresponding to recent practices
!
START_ORDER                                            O555555
SEMI_REVISION  P10-0704
CUSTOMER                                                          CUSTOMER                                                          NAME
VENDOR  ACME PHOTOMASKS
FILE_DATE_TIME                                               14-Oct-2002,                                               10:39:26
!
MASK_SET_ID                                                     S55555
!
BUSINESS_CONTACT ORDER FROM CONTACT NAME
BUSINESS_ADDRESS                                         ORDER                                         FROM                                         ADDRESS LINE1 !Use as few or as
BUSINESS_ADDRESS ORDER FROM ADDRESS LINE2  !many lines as
BUSINESS_ADDRESS                                         ORDER                                         FROM                                         ADDRESS LINE3  !needed - min=1
BUSINESS_PHONE                                              555-555-5555
BUSINESS_FAX                                                   555-555-5555
BUSINESS_EMAIL BUSINESS EMAIL ADDRESS
!
BILLING_CONTACT BILL CONTACT NAME
BILLING_ADDRESS BILL ADDRESS LINE1  !Use as few or as
BILLING_ADDRESS BILL ADDRESS LINE2  !many lines as
BILLING_ADDRESS BILL ADDRESS LINE3  !needed - min=1
BILLING_PHONE                                                 555-555-5555
BILLING_FAX                                                      555-555-5555
BILLING_EMAIL                                                 BILL                                                 EMAIL                                                 ADDRESS
!
DESIGN_RULE                                                     0.35
PRICE_UNITS                                                       USD
!
ENGINEERING_CONTACT ENGR CONTACT NAME
ENGINEERING_ADDRESS                                 ENGR                                 ADDRESS                                 LINE1 !Use as few or as
ENGINEERING_ADDRESS ENGR ADDRESS LINE2 !many lines as
ENGINEERING_ADDRESS                                 ENGR                                 ADDRESS LINE3  !needed - min=1
ENGINEERING_PHONE                                      555-555-5555
ENGINEERING_FAX                                           555-555-5555
ENGINEERING_EMAIL                                      ENGR                                      EMAIL                                      ADDRESS
!
SHIPPING_CONTACT  SHIP CONTACT NAME
SHIPPING_ADDRESS  SHIP ADDRESS LINE1
SHIPPING_ADDRESS  SHIP ADDRESS LINE2
SHIPPING_PHONE  555-555-5555
SHIPPING_FAX                                                    555-555-5555
SHIPPING_EMAIL  EMAIL ADDRESS
!
!
SHIPPING_METHOD                                           COURIER                                           NAME
SHIPPING_METHOD                                           TERMS
!
REPAIRS_AUTHORIZED  T
!
START_SHIPPABLE_DATA                               S1
SHIP_CD_DATA                                                   T
START_SHIP_TO  S1CD ! different shipto address


SEMI P10-0705 © SEMI 1990, 2005 168
MAILING_ADDRESS 123 SOMEWHERE ELSE ST.
MAILING_ADDRESS                                          A                                          CITY
MAILING_ADDRESS THE STATE, THE ZIP
MAILING_ADDRESS                                          COUNTRY
END_SHIP_TO                                                      S1CD
SHIP_DEFECT_DATA  T
SHIP_THRU_PELLICLE_DATA                         T
SHIP_INSP_DATABASE_DATA                        F
SHIP_REPAIR_DATA  T
SHIP_REGISTR_DATA                                        T
END_SHIPPABLE_DATA  S1
!
!
DATA_MEDIUM                                                  FTP
DATA_FILE_SIZE  12121212
DATA_PATTERN_NAME                                   FILESNAME.01
PATTERN_FORMAT  MEBES_RETICLE
DATA_PATTERN_WINDOW 0.0, 0.0, 34555.500, 10987.500
END_DATA_PATTERN_NAME                         FILESNAME.01
END_DATA_MEDIUM                                        FTP
!
DATA_MEDIUM                                                  FTP
DATA_FILE_SIZE  12171212
DATA_PATTERN_NAME                                   FILESNAME.02
PATTERN_FORMAT  MEBES_RETICLE
DATA_PATTERN_WINDOW 0.0, 0.0, 34555.500, 10987.500
END_DATA_PATTERN_NAME                         FILESNAME.02
END_DATA_MEDIUM                                        FTP
!
DATA_MEDIUM                                                  FTP
DATA_FILE_SIZE  13101056
DATA_PATTERN_NAME                                   FILESNAME.03
PATTERN_FORMAT  MEBES_RETICLE
DATA_PATTERN_WINDOW 0.0, 0.0, 34555.500, 10987.500
END_DATA_PATTERN_NAME                         FILESNAME.03
END_DATA_MEDIUM                                        FTP
!
! MET2ALL
DATA_MEDIUM                                                  FTP
DATA_FILE_SIZE                                                13101058
DATA_PATTERN_NAME                                   FILESNAME.04
PATTERN_FORMAT  MEBES_RETICLE
DATA_PATTERN_WINDOW 0.0, 0.0, 34555.500, 10987.500
END_DATA_PATTERN_NAME                         FILESNAME.04
END_DATA_MEDIUM                                        FTP
!
MASK_SET_NAME                                              DEVICE                                              NAME
ORDER_ID ORDER ID NUMBER
!
END_MASK_SET_OPTIONS                              S55555
!
MASK_GROUP_ID                                               G5555
PO_NUMBER                                                        P.O.                                                        NUMBER
!
PRODUCT_TYPE                                                 RETICLE
PRODUCT_MAGNIFICATION                           5X
PRODUCT_IMAGING_TYPE                              BINARY
!
END_MASK_GROUP_OPTIONS                        G5555
!
PLACEMENT_TOP_CELL  TC
!


SEMI P10-0705 © SEMI 1990, 2005 169
MASK_ID                                                              M111
MASK_NAME                                                       CONTACT                                                       1
DELIVERABLE_MASK  T
STATUS                                                                 NEW
DUE_DATE_TIME_REQUESTED                      24-Oct-2002,                      10:39:26
LAYER_PRIORITY  1
PRICE                                                                     15000
LITHO_EQUIP_REQD                                         EBEAM
JOB_NAME                                                           JOBDECK                                                           NAME
JOB_LEVEL                                                          1
!
START_TITLE                                                      1
TITLE_TEXT                                                         TITLE                                                         TEXT
TITLE_TYPE                                                         MASK
TITLE_JUSTIFICATION                                      L
TITLE_LOCATION  13400, 8650
ROTATE_TITLE  90
END_TITLE                                                           1
!
START_TITLE                                                      2
TITLE_TEXT                                                         DEVICE                                                         NAME
TITLE_TYPE                                                         DEVICE
TITLE_JUSTIFICATION                                      L
TITLE_LOCATION  14400, 8050
ROTATE_TITLE  90
END_TITLE                                                           2
!
START_TITLE                                                      3
TITLE_TEXT                                                         CUSTOMER                                                         PROPRIETARY
TITLE_TYPE                                                         AUXILIARY
TITLE_JUSTIFICATION                                      L
TITLE_LOCATION  14700, 2000
ROTATE_TITLE  90
END_TITLE                                                           3
!
START_BARCODE                                              1
BARCODE_TYPE  ASM
BARCODE_TEXT  BARCODE TEXT
BARCODE_LOCATION                                      63000,55000
BARCODE_ROTATION  0
END_BARCODE                                                   1
!
START_BARCODE                                              2
BARCODE_TYPE  CANON
BARCODE_TEXT  BARCODE TEXT
BARCODE_LOCATION                                      -62222,-22000
BARCODE_ROTATION  0
END_BARCODE                                                   2
!
MIRROR_MASK                                                   T
BLANK_SIZE                                                        6/250
BLANK_TYPE                                                      ULTE
BLANK_FLATNESS                                            2
MASK_COATING  LOW_REFLECTIVE_CHROME
RESIST_TYPE                                                       POSITIVE
!
TOP_PELLICLE_TYPE PELLICLE PART NUMBER1 !First choice
TOP_PELLICLE_TYPE                                        PELLICLE                                        PART NUMBER2 !Second choice
!
START_REGISTR                                                 1
REGISTR_ERROR                                                10
REGISTR_REF_METHOD_REQD                      PTB


SEMI P10-0705 © SEMI 1990, 2005 170
REGISTR_ALGORITHIM                                    MULTI-POINT
MASK_REGISTR_MARK                                    0,0
MEASURE_FILE_NAME                                     MEASURE                                     FILENAME
END_REGISTR                                                     1
!
MIN_MASK_FEATURE_SIZE                            15
!
START_DEFECT_DEFINITION                          1
VISUAL_INSPECTION_REQD                           F
AUTO_INSPECTION_REQD                               T
DEFECT_SIZE                                                      0.75
DEFECT_COUNT  0
!
INSPECTION_AREA -54388, -54388, 53994, 56053
DATABASE_INSPECTION                                 T
END_DEFECT_DEFINITION                              1
!
!
SURF_INSP_METHOD                                        LASER
SURF_INSP_PELL_TOP                                      1.0
SURF_INSP_PELL_BOTTOM                             1.0
SURF_INSP_GLASS_SIDE                                  2.0
SURF_INSP_PATTERN_SIDE                                                        .75
!
!
INSPECT_THROUGH_PELLICLE  T
!
START_DEFECT_DEFINITION                          2
DIE_TO_DIE_INSPECTION                                T
DEFECT_SIZE                                                      1.50
DEFECT_COUNT  0
DATABASE_INSPECTION                                 T
END_DEFECT_DEFINITION                              2
!
QUALITY_GROUP_ID  Q1
PACKAGE COMPACT PART NUMBER
!
END_MASK                                                          M111
!
!
MASK_ID                                                              M222
MASK_NAME                                                       METAL                                                       1
DELIVERABLE_MASK  T
STATUS                                                                 NEW
DUE_DATE_TIME_REQUESTED                      26-Oct-2002,                      10:39:26
LAYER_PRIORITY  1
PRICE                                                                     10000
LITHO_EQUIP_REQD                                         EBEAM
JOB_NAME                                                           JOBDECK                                                           NAME
JOB_LEVEL                                                          1
!
START_TITLE                                                      1
TITLE_TEXT                                                         TITLE                                                         TEXT
TITLE_TYPE                                                         MASK
TITLE_JUSTIFICATION                                      L
TITLE_LOCATION  13400, 86500
ROTATE_TITLE  90
END_TITLE                                                           1
!
START_TITLE                                                      2
TITLE_TEXT                                                         DEVICE                                                         NAME
TITLE_TYPE                                                         DEVICE


SEMI P10-0705 © SEMI 1990, 2005 171
TITLE_JUSTIFICATION                                      L
TITLE_LOCATION  14400, 80500
ROTATE_TITLE  90
END_TITLE                                                           2
!
START_TITLE                                                      3
TITLE_TEXT                                                         CUSTOMER                                                         PROPRIETARY
TITLE_TYPE                                                         AUXILIARY
TITLE_JUSTIFICATION                                      L
TITLE_LOCATION  14700, 20000
ROTATE_TITLE  90
END_TITLE                                                           3
!
START_BARCODE                                              1
BARCODE_TYPE  ASM
BARCODE_TEXT  BARCODE TEXT
BARCODE_LOCATION                                      63000,32000
BARCODE_ROTATION  0
END_BARCODE                                                   1
!
START_BARCODE                                              2
BARCODE_TYPE  CANON
BARCODE_TEXT  BARCODE TEXT
BARCODE_LOCATION                                      -62222,-22000
BARCODE_ROTATION  0
END_BARCODE                                                   2
!
MIRROR_MASK                                                   T
BLANK_SIZE                                                        6/250
BLANK_TYPE                                                      ULTE
BLANK_FLATNESS                                                                                        2.0
MASK_COATING  LOW_REFLECTIVE_CHROME
RESIST_TYPE                                                       POSITIVE
!
TOP_PELLICLE_TYPE PELLICLE PART NUMBER1
TOP_PELLICLE_TYPE PELLICLE PART NUMBER2
!
START_REGISTR                                                 1
REGISTR_ERROR                                                10
REGISTR_REF_METHOD_REQD                      PTB
REGISTR_ALGORITHIM                                    MULTI-POINT
MASK_REGISTR_MARK                                    0,0
MEASURE_FILE_NAME                                     MEASURE                                     FILENAME
END_REGISTR                                                     1
!
MIN_MASK_FEATURE_SIZE                            .25
!
START_DEFECT_DEFINITION                          1
VISUAL_INSPECTION_REQD                           F
AUTO_INSPECTION_REQD                               T
DEFECT_SIZE  0.85
DEFECT_COUNT  0
!
INSPECTION_AREA -59388, -57388, 51994, 53053
DATABASE_INSPECTION                                 T
END_DEFECT_DEFINITION                              1
!
!
SURF_INSP_METHOD                                        LASER
SURF_INSP_PELL_TOP                                      1.0
SURF_INSP_PELL_BOTTOM                             1.0
SURF_INSP_GLASS_SIDE                                  2.0


SEMI P10-0705 © SEMI 1990, 2005 172
SURF_INSP_PATTERN_SIDE                            .75
!
!
INSPECT_THROUGH_PELLICLE  T
!
START_DEFECT_DEFINITION                          2
DIE_TO_DIE_INSPECTION                                T
DEFECT_SIZE                                                      1.50
DEFECT_COUNT  0
DATABASE_INSPECTION                                 T
END_DEFECT_DEFINITION                              2
!
QUALITY_GROUP_ID  Q1
PACKAGE COMPACT PART NUMBER
!
END_MASK                                                          M222
!
!
CELL_ID                                                                TC
END_CELL_OPTIONS  TC
!
PATTERN_GROUP_INSTANCE                         PRIMARY
START_PLACEMENT  1
LOCATION                                                            0.000,                                                            0.000
STEPPING_DISTANCE                                        0,                                        0
STEPPING_COUNT                                              1,                                              1
END_PLACEMENT  1
END_PATTERN_GROUP_INSTANCE              PRIMARY
!
PATTERN_GROUP_INSTANCE                         CLEAR_BOX
START_PLACEMENT  CBP1
LOCATION                                                            33000,                                                            -33000
STEPPING_DISTANCE  0, 0
STEPPING_COUNT                                              1,                                              1
END_PLACEMENT  CBP1
!
START_PLACEMENT  CBP2
LOCATION -33000, 33000
STEPPING_DISTANCE  0, 0
END_PLACEMENT  CBP2
STEPPING_COUNT                                              1,                                              1
END_PATTERN_GROUP_INSTANCE              CLEAR_BOX
!
PATTERN_GROUP_INSTANCE                         FID
START_PLACEMENT  FP1
LOCATION                                                            60000,                                                            60000
STEPPING_DISTANCE  0, 0
STEPPING_COUNT                                              1,                                              1
END_PLACEMENT  FP1
END_PATTERN_GROUP_INSTANCE              FID
!
END_CELL                                                            TC
!
!
PATTERN_GROUP_ID  PRIMARY
END_PATTERN_GROUP_OPTIONS                 PRIMARY
!
LEVEL_ID                                                             M111
PATTERN_NAME                                                FILESNAME.01
START_PATTERN_OPTIONS                            1PPO
PATTERN_ADDRESS_SIZE                               0.25
DIGITIZED_DATA_DARK                                  F


SEMI P10-0705 © SEMI 1990, 2005 173
!
START_CD                                                            1
CD_DATA                                                             1.250
CD_DIGITIZED  T
CD_TONE_CLEAR                                               T
CD_TARGET                                                         1.300
CD_ORIENTATION  HORIZONTAL
CD_REFERENCE_ONLY                                    F
CD_TOLERANCE  .12
CD_RANGE                                                           .12
NUMBER_OF_CDS                                              4
CD_LOCATION                                                    -53448.100,                                                    -43783.375
CD_LOCATION                                                    -53448.100,                                                    55576.625
CD_LOCATION                                                    -49070.125,                                                    -53343.000
CD_LOCATION                                                    -49070.125,                                                    47017.000
CD_FEATURE                                                      TUNING                                                      FORK
END_CD                                                                1
END_PATTERN_OPTIONS                                 1PPO
END_PATTERN_DEFINITION                           M111
!
LEVEL_ID                                                             M222
PATTERN_NAME                                                FILESNAME.02
START_PATTERN_OPTIONS                            2PPO
PATTERN_ADDRESS_SIZE                               0.25
DIGITIZED_DATA_DARK                                  T
!
START_CD                                                            1
CD_DATA                                                             2.25
CD_DIGITIZED  T
CD_TONE_CLEAR                                               T
CD_TARGET                                                         2.30
CD_ORIENTATION  HORIZONTAL
CD_REFERENCE_ONLY                                    F
CD_TOLERANCE  .12
CD_RANGE                                                           .12
NUMBER_OF_CDS                                              4
CD_LOCATION                                                    -33448.100,                                                    -53783.375
CD_LOCATION                                                    -33448.100,                                                    45576.625
CD_LOCATION                                                    -39070.125,                                                    -13343.000
CD_LOCATION                                                    -39070.125,                                                    27017.000
CD_FEATURE                                                      L                                                      BAR
END_CD                                                                1
END_PATTERN_OPTIONS                                 2PPO
END_PATTERN_DEFINITION                           M222
!
END_PATTERN_GROUP                                    PRIMARY
!
!
PATTERN_GROUP_ID  CLEAR_BOX ! Only for Mask M111
END_PATTERN_GROUP_OPTIONS                 CLEAR_BOX
!
LEVEL_ID                                                             M111
PATTERN_NAME                                                FILESNAME.03
START_PATTERN_OPTIONS                            1CPO
PATTERN_ADDRESS_SIZE                               0.25
DIGITIZED_DATA_DARK                                  F
END_PATTERN_OPTIONS                                 1CPO
END_PATTERN_DEFINITION                           M111
!
END_PATTERN_GROUP                                    CLEAR_BOX
!
PATTERN_GROUP_ID  FID


SEMI P10-0705 © SEMI 1990, 2005 174
PATTERN_ADDRESS_SIZE                               0.25
END_PATTERN_GROUP_OPTIONS                 FID
!
LEVEL_ID                                                             M111
PATTERN_NAME                                                FILESNAME.04
START_PATTERN_OPTIONS                            1CPO
DIGITIZED_DATA_DARK                                  F
END_PATTERN_OPTIONS                                 1CPO
END_PATTERN_DEFINITION                           M111
!
LEVEL_ID                                                             M222
PATTERN_NAME                                                FILESNAME.04
START_PATTERN_OPTIONS                            2CPO
DIGITIZED_DATA_DARK                                  T
END_PATTERN_OPTIONS                                 2CPO
END_PATTERN_DEFINITION                           M222
!
END_PATTERN_GROUP                                    FID
!
!
END_MASK_GROUP  G5555
END_MASK_SET                                                 S55555
END_ORDER                                                        O555555
CHECKSUM                                                          118


SEMI P10-0705 © SEMI 1990, 2005 175
RELATED INFORMATION 6
SEMI PHOTOMASK ORDER EXAMPLE FOR UT1X RETICLES
NOTICE:  The  information  contained  in  this  related  information  is  not  an  official  part  of  SEMI  P10,  and  it  is  not  intended  to
modify or supercede the official standard. Rather, this example is offered as an aid to visualizing possible output from software
which might implement the standard.

!NOTE: Indentation is for clarity only and is not required.
!
START_ORDER                              ORDER11111
SEMI_REVISION                            P10-0704
CUSTOMER                                 AAA CUSTOMER
VENDOR                                   ANY VENDOR
FILE_DATE_TIME                           01-Jan-2002, 12:00
OPERATOR_NAME                            AN OPERATOR
!
MASK_SET_ID                              ABC123
BILLING_CONTACT                          CONTACT NAME
BILLING_ADDRESS                          BILLING ADDRESS LINE 1
BILLING_ADDRESS                          BILLING ADDRESS LINE 2
PRICE_UNITS                              USD
SHIPPING_CONTACT                         CONTACT NAME
SHIPPING_ADDRESS                         SHIPPING ADDRESS LINE 1
SHIPPING_ADDRESS                         SHIPPING ADDRESS LINE 2
SHIPPING_ADDRESS                         SHIPPING ADDRESS LINE 3
!
DATA_MEDIUM                              FTP
DATA_PATTERN_NAME                        FILENAME01.1$
PATTERN_FORMAT                          MEBES_RETICLE
END_DATA_PATTERN_NAME                   FILENAME01.1$
DATA_PATTERN_NAME                        FILENAME01.2$
PATTERN_FORMAT                           MEBES_RETICLE
END_DATA_PATTERN_NAME                   FILENAME01.2$
DATA_PATTERN_NAME                        FILENAME02.1$
PATTERN_FORMAT                           MEBES_RETICLE
END_DATA_PATTERN_NAME                   FILENAME02.1$
DATA_PATTERN_NAME                        FILENAME03.50
PATTERN_FORMAT                           MEBES_RETICLE
END_DATA_PATTERN_NAME                   FILENAME03.50
DATA_PATTERN_NAME                        FILENAME04.50
PATTERN_FORMAT                           MEBES_RETICLE
END_DATA_PATTERN_NAME                   FILENAME04.50
DATA_PATTERN_NAME                        FILENAME05.S$
PATTERN_FORMAT                           MEBES_RETICLE
END_DATA_PATTERN_NAME                   FILENAME05.S$
DATA_PATTERN_NAME                        FILENAME06.25
PATTERN_FORMAT                           MEBES_RETICLE
END_DATA_PATTERN_NAME                   FILENAME06.25
END_DATA_MEDIUM                          FTP


SEMI P10-0705 © SEMI 1990, 2005 176
!
MASK_SET_NAME                            ABC123
MASK_SET_VERSION                         ABC123
!
END_MASK_SET_OPTIONS                     ABC123
!
MASK_GROUP_ID                            UT1X_GROUP_1
END_MASK_GROUP_OPTIONS                  UT1X_GROUP_1
!
PLACEMENT_TOP_CELL                       UT_1X_TOP_CELL
!
!-----------MASKS-------------------------
MASK_ID                                  100001
MASK_NAME                                NAME100001
DELIVERABLE_MASK                         T
PO_NUMBER                                123456789
RELEASE_NUMBER                           987654
STATUS                                   NEW
DUE_DATE_TIME_REQUESTED              01-Jan-2002, 10:44
PRICE                                    1111.0
REPAIRS_AUTHORIZED                       T
!
START_SHIPPABLE_DATA                       1
SHIP_CD_PRINTOUT                       T
SHIP_DEFECT_DATA                       T
SHIP_REGISTR_DATA                      T
END_SHIPPABLE_DATA                       1
!
PRODUCT_TYPE                             1X_STD_FIELD_RETICLE
PRODUCT_MAGNIFICATION                  1X
PRODUCT_IMAGING_TYPE                      BINARY
QUANTITY                                 1
WAFER_EXPOSURE_TOOL                       ULTRATECH
JOB_NAME                                 j1000001.jb
JOB_LEVEL                                1
!
START_TITLE                              TITLE_1
TITLE_TEXT                             ABC123
TITLE_TYPE                             DEVICE
TITLE_JUSTIFICATION                    L
TITLE_LOCATION                         -33000.0, -1000.0
MIRROR_TITLE                           F
ROTATE_TITLE                           0
ROTATE_TITLE_CHARACTERS             0
END_TITLE                                TITLE_1
!
START_TITLE                              TITLE_2
TITLE_TEXT                             NAME100001


SEMI P10-0705 © SEMI 1990, 2005 177
TITLE_TYPE                         MASK
TITLE_JUSTIFICATION                    L
TITLE_LOCATION                         -22000.0, 1000.0
MIRROR_TITLE                           F
ROTATE_TITLE                           0
ROTATE_TITLE_CHARACTERS             0
END_TITLE                                TITLE_2
!(
MIRROR_MASK                              T
BLANK_SIZE                               5/90
BLANK_TYPE                               ULTE
BLANK_FLATNESS                                    2
MASK_COATING                             LOW_REFLECTIVE_CHROME
UT1X_UNCUT                               T
TOP_PELLICLE_TYPE                        Pellicle Part Number
GUIDES_REQD                              STANDARD
!
START_DEFECT_DEFINITION                 UT1X_1
GOOD_FIELDS                            (1 AND 2)
END_DEFECT_DEFINITION                      UT1X_1
!
START_DEFECT_DEFINITION                 PREPELL_DIE2DIE_1
AUTO_INSPECTION_REQD                     T
DIE_TO_DIE_INSPECTION                      T
DEFECT_SIZE_CL                         1.0
DEFECT_SIZE_DK                         1.0
DEFECT_COUNT                           0
END_DEFECT_DEFINITION                      PREPELL_DIE2DIE_1
!
QUALITY_GROUP_ID                         ABC123
PACKAGE                                  Package Part Number
END_MASK                                 1000001
!------------------------------------------
!
! The TOP_CELL's role in the P10 Standard is to provide a means to list and locate all of the
! Patterns on the Mask.  Within the TOP_CELL Cell ID section (below) both Patterns and other Cells
! can be listed.  The value for the Top Cell is given by the PLACEMENT_TOP_CELL keyword in the
! MASK_GROUP section above.
!
! This example lays out each component of the Mask using the "CELL_INSTANCE" keyword.
! Each Ultratech Field is represented by a "FLD_x" designation for a Cell Instance, where "x" is
! the field number. The general idea is to designate a cell for each Field separately and to let
! the MASK_PATTERNS cell hold the remaining data.  In this example the FLD_1 cell contains Field 1,
! the FLD_2 cell holds Field 2, and the MASK_PATTERNS cell holds Barcode, BOJ, EOJ, Fiducial,
! and Logo data.  Other types of Patterns could also be included in the MASK_PATTERNS cell.
!
!
!----------CELLS--------------------------


SEMI P10-0705 © SEMI 1990, 2005 178
CELL_ID                                  UT_1X_TOP_CELL    !-- refers to PLACEMENT_TOP_CELL
END_CELL_OPTIONS                         UT_1X_TOP_CELL
!
CELL_INSTANCE                           FLD_1    !--Field 1 cell within TOP_CELL
END_CELL_INSTANCE_OPTIONS           FLD_1
START_PLACEMENT                        F1
LOCATION                             -32000.0, 28000.0
END_PLACEMENT                          F1
END_CELL_INSTANCE                        FLD_1
!
CELL_INSTANCE                            FLD_2    !--Field 2 cell within TOP_CELL
END_CELL_INSTANCE_OPTIONS           FLD_2
START_PLACEMENT                        F2
LOCATION                             25500.0, 28500.0
END_PLACEMENT                         F2
END_CELL_INSTANCE                        FLD_2
!
CELL_INSTANCE                            MASK_PATTERNS    !--Other data cell with TOP_CELL
END_CELL_INSTANCE_OPTIONS            MASK_PATTERNS
END_CELL_INSTANCE                        MASK_PATTERNS
END_CELL                                 UT_1X_TOP_CELL
!
!
! Each CELL_ID below lists the components in that cell, using the PATTERN_GROUP_INSTANCE keyword,
! along with placement data.
!
! Field 1
CELL_ID                                  FLD_1   !--This refers to CELL_INSTANCE FLD_1
END_CELL_OPTIONS                         FLD_1
!
PATTERN_GROUP_INSTANCE                FLD_1_PG
START_PLACEMENT                       FDPN1
LOCATION                             -20000.0, 20000.0
STEPPING_DISTANCE                    10000.0, 0.0
STEPPING_COUNT                       2, 1
END_PLACEMENT                          FDP_1
END_PATTERN_GROUP_INSTANCE      FLD_1_PG
END_CELL                                 FLD_1
!
! Field 2
CELL_ID                                  FLD_2    !--This refers to CELL_INSTANCE FLD_2
END_CELL_OPTIONS                         FLD_2
!
PATTERN_GROUP_INSTANCE                 FLD_2_PG
START_PLACEMENT                        FDP_2
LOCATION                             50000.0, 20000.0
STEPPING_DISTANCE                    0.0, 0.0
STEPPING_COUNT                       1, 1


SEMI P10-0705 © SEMI 1990, 2005 179
END_PLACEMENT                         FDP_2
END_PATTERN_GROUP_INSTANCE      FLD_2_PG
END_CELL                                 FLD_2
!
CELL_ID                           MASK_PATTERNS    !--This refers to CELL_INSTANCE
!MASK_PATTERNS
END_CELL_OPTIONS                MASK_PATTERNS
!
PATTERN_GROUP_INSTANCE BARCODES
START_PLACEMENT                        BC_1
LOCATION                             85500.000, 113350.000
STEPPING_DISTANCE                    0.0, 0.0
STEPPING_COUNT                       1, 1
END_PLACEMENT                          BC_1
END_PATTERN_GROUP_INSTANCE      BARCODES
!
PATTERN_GROUP_INSTANCE BOJ
START_PLACEMENT                        BJ_1
LOCATION                             119000, 88000
STEPPING_DISTANCE                    0.0, 0.0
STEPPING_COUNT                       1, 1
END_PLACEMENT                          BJ_1
START_PLACEMENT                BJ_2
LOCATION                       9700, 37000
STEPPING_DISTANCE              0, 0
STEPPING_COUNT                 1, 1
END_PLACEMENT                  BJ_2
END_PATTERN_GROUP_INSTANCE      BOJ
!
PATTERN_GROUP_INSTANCE EOJ
START_PLACEMENT                        EJ_1
LOCATION                             119000, 88000
STEPPING_DISTANCE                    0.0, 0.0
STEPPING_COUNT                       1, 1
END_PLACEMENT                          EJ_1
START_PLACEMENT                EJ_2
LOCATION                       9800, 3800
STEPPING_DISTANCE              0, 0
STEPPING_COUNT                 1, 1
END_PLACEMENT                  EJ_2
END_PATTERN_GROUP_INSTANCE      EOJ
!
PATTERN_GROUP_INSTANCE FIDUCIAL
START_PLACEMENT                        FD_1
LOCATION                             63500, 63500
STEPPING_DISTANCE                    0.0, 0.0
STEPPING_COUNT                       1, 1
END_PLACEMENT                          FD_1
END_PATTERN_GROUP_INSTANCE      FIDUCIAL


SEMI P10-0705 © SEMI 1990, 2005 180
!
PATTERN_GROUP_INSTANCE LOGO
START_PLACEMENT                        LG_1
LOCATION                             10000, 7500
STEPPING_DISTANCE                    0.0, 0.0
STEPPING_COUNT                       1, 1
END_PLACEMENT                          LG_1
END_PATTERN_GROUP_INSTANCE      LOGO
!
END_CELL                                 MASK_PATTERNS
!------------------------------------------
!
! The PATTERN_GROUP_ID section relates patterns to specific groups of Masks.  The LEVEL_ID
! value MUST agree with a specific MASK_ID value.  When multiple Masks are ordered, there
! will be multiple LEVEL_ID sections within each PATTERN_GROUP_ID section.
!
! The PATTERN_NAME values should agree with those listed in the DATA_MEDIUM section.
!
!----------PATTERN_GROUPS-----------------
! Field 1
PATTERN_GROUP_ID                         FLD_1_PG    !refers to PATTERN_GROUP_INSTANCE  FLD_1_PG
END_PATTERN_GROUP_OPTIONS           FLD_1_PG
!
LEVEL_ID                                 1000001
PATTERN_NAME                             FILENAME01.1$
START_PATTERN_OPTIONS                     FLD_1_1
PATTERN_ADDRESS_SIZE                      0.25
SCALE_FACTOR                           1.0
DIGITIZED_DATA_DARK                        T
UNSCALED_PATTERN_SIZE                  15000.0, 15000.0
MIRROR_PATTERN                         F
END_PATTERN_OPTIONS                         FLD_1_1
END_PATTERN_DEFINITION                  1000001
END_PATTERN_GROUP                        FLD_1_PG
!
! Field 2
PATTERN_GROUP_ID                         FLD_2_PG    !refers to PATTERN_GROUP_INSTANCE  FLD_2_PG
END_PATTERN_GROUP_OPTIONS           FLD_2_PG
!
LEVEL_ID                                100001
PATTERN_NAME                            FILENAME01.2$
START_PATTERN_OPTIONS                    FLD2_2
PATTERN_ADDRESS_SIZE                     0.25
SCALE_FACTOR                          1.0
DIGITIZED_DATA_DARK                   F
UNSCALED_PATTERN_SIZE                  15000.0, 15000.0
MIRROR_PATTERN                        F
END_PATTERN_OPTIONS                         FLD2_2


SEMI P10-0705 © SEMI 1990, 2005 181
END_PATTERN_DEFINITION                   1000001
END_PATTERN_GROUP                        FLD_2_PG
!
! BARCODE Component
PATTERN_GROUP_ID                BARCODES
END_PATTERN_GROUP_OPTIONS       BARCODES
!
LEVEL_ID                        1000001
PATTERN_NAME                    FILENAME02.1$
START_PATTERN_OPTIONS           BC1
PATTERN_ADDRESS_SIZE            0.25
DIGITIZED_DATA_DARK             F
END_PATTERN_OPTIONS             BC1
END_PATTERN_DEFINITION          1000001
!
END_PATTERN_GROUP               BARCODES
!
! BOJ Component
PATTERN_GROUP_ID                BOJ
END_PATTERN_GROUP_OPTIONS       BOJ
!
LEVEL_ID                        1000001
PATTERN_NAME                    FILENAME03.50
START_PATTERN_OPTIONS           BJ1
PATTERN_ADDRESS_SIZE            0.250
DIGITIZED_DATA_DARK             F
END_PATTERN_OPTIONS             BJ1
END_PATTERN_DEFINITION          1000001
!
END_PATTERN_GROUP               BOJ
!
! EOJ Component
PATTERN_GROUP_ID                EOJ
END_PATTERN_GROUP_OPTIONS       EOJ
!
LEVEL_ID                       1000001
PATTERN_NAME                    FILENAME04.50
START_PATTERN_OPTIONS           EJ1
PATTERN_ADDRESS_SIZE            0.250
DIGITIZED_DATA_DARK             F
END_PATTERN_OPTIONS             EJ1
END_PATTERN_DEFINITION         1000001
!
END_PATTERN_GROUP               EOJ
!
! Fiducial Component
PATTERN_GROUP_ID                FID
END_PATTERN_GROUP_OPTIONS       FID


SEMI P10-0705 © SEMI 1990, 2005 182
!
LEVEL_ID                       1000001
PATTERN_NAME                    FILENAME05.S$
START_PATTERN_OPTIONS           FL1
PATTERN_ADDRESS_SIZE            .25
DIGITIZED_DATA_DARK             F
END_PATTERN_OPTIONS             FL1
END_PATTERN_DEFINITION         1000001
!
END_PATTERN_GROUP               FID
!
! LOGO Component
PATTERN_GROUP_ID                LOGO
END_PATTERN_GROUP_OPTIONS       LOGO
!
LEVEL_ID                       1000001
PATTERN_NAME                    FILENAME06.25
START_PATTERN_OPTIONS           LO1
PATTERN_ADDRESS_SIZE            .25
DIGITIZED_DATA_DARK             F
END_PATTERN_OPTIONS             LO1
END_PATTERN_DEFINITION         1000001
!
END_PATTERN_GROUP               LOGO
!------------------------------------------
!
END_MASK_GROUP                           UT1X_GROUP_1
!
END_MASK_SET                             ABC123
!
END_ORDER                                ORDER1111
CHECKSUM                                 0


SEMI P10-0705 © SEMI 1990, 2005 183
RELATED INFORMATION 7
EXAMPLE OF A COMPLEX BOOLEAN FUNCTION
NOTICE:  The  information  contained  in  this  related  information  is  not  an  official  part  of  SEMI  P10,  and  it  is  not  intended  to
modify or supercede the official standard. Rather, this example is offered as an aid to visualizing possible output from software
which might implement the standard.

The following is an excerpt of a P10 file which demonstrates how the
data_manipulation capability may be applied.


DATA_PATTERN_NAME                  METAL-1
PATTERN_FORMAT              MEBES
!----------------------------------------------------------------------------
------------
START_DATA_MANIPULATION           1
BOOLEAN                   MINUS
!
DATA_SOURCE_FILE                source1.gds
DATA_FORMAT                  GDSII
DATA_TOP_CELL                  gds_top_cell
DATA_LAYER_ID                  1;0
DATA_PATTERN_WINDOW            012600,-13000,-12600,13000
START_DATA_FRACTURE            1
PATTERN_ADDRESS_SIZE      .05
END_DATA_FRACTURE           1
END_DATA_SOURCE_FILE            source1.gds
!
DATA_SOURCE_FILE                source1.gds
DATA_FORMAT                  GDSII
DATA_TOP_CELL                  gds_top_cell
DATA_LAYER_ID                  2;0
DATA_PATTERN_WINDOW            012600,-13000,-12600,13000
START_DATA_FRACTURE            1
PATTERN_ADDRESS_SIZE      .05
END_DATA_FRACTURE           1
END_DATA_SOURCE_FILE            source1.gds
!
END_DATA_MANIPULATION             1
!
START_DATA_MANIPULATION           2
BOOLEAN                   MINUS
!
DATA_SOURCE_FILE                source1.gds
DATA_FORMAT                  GDSII
DATA_TOP_CELL                  gds_top_cell
DATA_LAYER_ID                  3;0
DATA_PATTERN_WINDOW            012600,-13000,-12600,13000
START_DATA_FRACTURE            1
PATTERN_ADDRESS_SIZE      .05
END_DATA_FRACTURE           1
END_DATA_SOURCE_FILE            source1.gds
!
DATA_SOURCE_FILE                source1.gds
DATA_FORMAT                  GDSII
DATA_TOP_CELL                  gds_top_cell
DATA_LAYER_ID                  4;0


SEMI P10-0705 © SEMI 1990, 2005 184
DATA_PATTERN_WINDOW            012600,-13000,-12600,13000
START_DATA_FRACTURE            1
PATTERN_ADDRESS_SIZE      .05
END_DATA_FRACTURE           1
END_DATA_SOURCE_FILE            source1.gds
!
END_DATA_MANIPULATION             2
!----------------------------------------------------------------------------
----------------------------------
START_DATA_MANIPULATION           3
BOOLEAN                   AND
!Note:The input to manipulation 3 is the output
from
! manipulations #1 and #2. Discrete names of
temporary files
!are not required, just a reference to a
previous manipulation.
!This represents the output from both 1 and 2
! (1-2) and (3-4) with the logical operation of
anding them
! together ((1-2)*(3-4)).
DATA_SOURCE_FILE                1
DATA_FORMAT                  DATA_MANIPULATION
END_DATA_SOURCE_FILE            1
!
DATA_SOURCE_FILE                2
DATA_FORMAT                  DATA_MANIPULATION
END_DATA_SOURCE_FILE            2
END_DATA_MANIPULATION             3
!----------------------------------------------------------------------------
----------------------------------
START_DATA_MANIPULATION           4
BOOLEAN                   OR
!
DATA_SOURCE_FILE                source1.gds
DATA_FORMAT                  GDSII
DATA_TOP_CELL                  gds_top_cell
DATA_LAYER_ID                  6;0
DATA_PATTERN_WINDOW            012600,-13000,-12600,13000
START_DATA_FRACTURE            1
PATTERN_ADDRESS_SIZE     .05
END_DATA_FRACTURE           1
END_DATA_SOURCE_FILE            source1.gds
!
DATA_SOURCE_FILE                3
DATA_FORMAT                  DATA_MANIPULATION
END_DATA_SOURCE_FILE            3
!
END_DATA_MANIPULATION             4
!----------------------------------------------------------------------------
---------------------------------
START_DATA_MANIPULATION           5
BOOLEAN                   AND
!
DATA_SOURCE_FILE                source1.gds
DATA_FORMAT                  GDSII
DATA_TOP_CELL                  gds_top_cell
DATA_LAYER_ID                  5-7
DATA_PATTERN_WINDOW            012600,-13000,-12600,13000
START_DATA_FRACTURE            1


SEMI P10-0705 © SEMI 1990, 2005 185
PATTERN_ADDRESS_SIZE     .05
END_DATA_FRACTURE           1
END_DATA_SOURCE_FILE            source1.gds
!
DATA_SOURCE_FILE                  source1.gds
DATA_FORMAT                  GDSII
DATA_TOP_CELL                  gds_top_cell
DATA_LAYER_ID                  17-19;8-9
DATA_PATTERN_WINDOW            112600,-13000,-112600,13000
START_DATA_FRACTURE            1
PATTERN_ADDRESS_SIZE     .05
END_DATA_FRACTURE           1
END_DATA_SOURCE_FILE            source1.gds
!
DATA_SOURCE_FILE                4
DATA_FORMAT                  DATA_MANIPULATION
END_DATA_SOURCE_FILE            4
!
!   Note:  The final sizing, output address size, and data scale are shown
below.
!
START_DATA_FRACTURE             2
PATTERN_ADDRESS_SIZE            .05
DATA_SCALE_FACTOR               5
END_DATA_FRACTURE               2
!
START_DATA_FRACTURE                  3
SIZING                      .25
SIZING_RULE                  TWOSIDED
SIZING_BORDER_RULE          PARAGON
END_DATA_FRACTURE                  3
!
END_DATA_MANIPULATION             5
!----------------------------------------------------------------------------
---------------------------------
END_DATA_PATTERN_NAME                        METAL-1


SEMI P10-0705 © SEMI 1990, 2005 186
RELATED INFORMATION 8
EXAMPLE OF A DATA FUNCTION
NOTICE:  The  information  contained  in  this  related  information  is  not  an  official  part  of  SEMI  P10,  and  it  is  not  intended  to
modify or supercede the official standard. Rather, this example is offered as an aid to visualizing possible output from software
which might implement the standard.

The following is an excerpt of a P10 file which demonstrates how the
data_function capability might be applied.


START_DATA_FUNCTION                 CPL
DATA_FUNCTION_PURPOSE             CPL Mask Synthesis for Poly-Gate Layer
SOFTWARE_NAME                     MaskWeaver
SOFTWARE_REVISION               1.2
RUNSET_NAME                   cpl090.mw
RUNSET_REVISION               1.4
DATA_LOCATION                 /n/raidhost/r5/mwlib/
PARAMETER_FILE_NAME         cpl090.par
PARAMETER_FILE_REVISION     2.2
INPUT_FILE_NAME               qtiac90_1.5.gds
INPUT_FILE_FORMAT             gds
TOP_CELL                    MASTER
DATA_LOCATION               /n/raidhost/r8/tapeouts/qtiac90_1.5/
RESULT_FILE_NAME              qtiac90_1.5_cpl.o32
SUMMARY_FILE_NAME             qtiac90_1.5_cpl.sum
LOG_FILE_NAME                 qtiac_90_1.5_cpl.log
END_DATA_FUNCTION                   CPL


SEMI P10-0705 © SEMI 1990, 2005 187
RELATED INFORMATION 9
SEMI PHOTOMASK MASK ORDER STRUCTURE TREE DIAGRAM

NOTICE:  The  information  contained  in  this  related  information  is  not  an  official  part  of  SEMI  P10,  and  it  is  not  intended  to
modify or supercede the official standard. Rather, this example is offered as an aid to visualizing possible output from software
which might implement the mask_order portion of the standard in XML format.

NOTE:    All  portions  of  the  tree  were  scaled  to  fit  within  single  pages.    In  cases  where  a  portion  of  the  tree  is  very  long,  this
causes  the  text  to  be  very  small.    Such  portions  of  the  tree  will  be  more  easily  read  by  viewing  them  with  a  text  editor  or  text
viewer and using an increased magnification.


complexType AerialImageDataType
diagram

complexType BarcodeDataType
diagram



SEMI P10-0705 © SEMI 1990, 2005 188
complexType CdDefinitionType
diagram



SEMI P10-0705 © SEMI 1990, 2005 189
complexType CdGroupType
diagram

complexType CdIsoDenseDefinitionType
diagram



SEMI P10-0705 © SEMI 1990, 2005 190
complexType CdSetType
diagram

complexType CdXyDefinitionType
diagram



SEMI P10-0705 © SEMI 1990, 2005 191
complexType CdXySiteType
diagram

complexType CellDefinitionType
diagram

complexType CellInstanceType
diagram



SEMI P10-0705 © SEMI 1990, 2005 192
complexType DatabaseInspectionType
diagram

complexType DataFileParametersType
diagram


SEMI P10-0705 © SEMI 1990, 2005 193
complexType DataFractureType
diagram


SEMI P10-0705 © SEMI 1990, 2005 194
complexType DataFunctionType
diagram

complexType DataManipulationType
diagram



SEMI P10-0705 © SEMI 1990, 2005 195
complexType DataType
diagram
