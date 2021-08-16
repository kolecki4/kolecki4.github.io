# List of Useful Websites

### Telescope Data Archives 
[CAHA (Calar Alto Observatory Archive)](http://caha.sdc.cab.inta-csic.es/calto/jsp/searchform.jsp): For mostly raw data from Calar Alto. CARMENES does have reduced data products available, which are also available at the CARMENES-specific archive [here](http://carmenes.cab.inta-csic.es/gto/welcome.action).

[ESO Phase 3 Archive](http://archive.eso.org/wdb/wdb/adp/phase3_main/form): For reduced data from the European Southern Observatory.

[ESO Main Data Archive](http://archive.eso.org/eso/eso_archive_main.html): Contains a wider range of instruments, but features only raw, unreduced data.

[Keck Observatory Archive](https://koa.ipac.caltech.edu/cgi-bin/KOA/nph-KOAlogin): For raw, unreduced data from the Keck Telescope.

[SMOKA (Subaru Telescope Archive)](https://smoka.nao.ac.jp/): Contains only raw data, and I am unaware of any Subaru-specific data reduction tools.

### Useful Programs and Other Code

#### Stellar Astrophysics
##### Model Atmosphere Grids
###### ATLAS and Kurucz Atmospheres:

[ATLAS-APOGEE](http://research.iac.es/proyecto/ATLAS-APOGEE/): Calculated using the ATLAS9 code originally for use by APOGEE.
-  3500 < T_{eff} < 30000
-  -5.0 < [Fe/H] < +1.5
-  -1.5 < [alpha/M] < +1.0
-  -1.5 < [carbon/M] < +1.0

[Kurucz Grids](http://kurucz.harvard.edu/grids.html): A variety of archived model atmosphere grids. Castelli and ODFNEW are the most recent options
- (Put in parameter range and such)

###### MARCS Model Atmospheres
...

###### PHOENIX Grids (More accurate structures for M-dwarfs and brown dwarfs)
[PHOENIX (Goettingen)](https://phoenix.astro.physik.uni-goettingen.de/?page_id=109): Calculated for the Goettingen Spectral Library using the PHOENIX code.
- [wider T_{eff} range]
- -4.0 < [Fe/H] < +1.0
- -0.2 < [alpha/M] < +1.2

[PHOENIX (ENS Lyon, France Allard)](https://phoenix.ens-lyon.fr/simulator-jsf22-26/index.faces): Multiple PHOENIX grids with varying underlying physics as described by [Allard 2016](https://ui.adsabs.harvard.edu/abs/2016sf2a.conf..223A/abstract). BT-Settl are the most up-to-date models.
- 1500 < T_{eff} < 15000
- -2.5 < [Fe/H] < +0.5
- +0.0 < [alpha/M] < +0.4
- C/O enhancement available

Kurucz, PHOENIX (Allard and Goettingen)

Synthetic Spectra
APOGEE, PHOENIX, ...

##### Stellar Structure Code
MOOG, ...
WIP
