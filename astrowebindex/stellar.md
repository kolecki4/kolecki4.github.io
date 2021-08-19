# Stellar Astrophysics

## Model Atmosphere Grids

### ATLAS and Kurucz Atmospheres:

[ATLAS-APOGEE](http://research.iac.es/proyecto/ATLAS-APOGEE/): Calculated using the ATLAS9 code originally for use by APOGEE (citation: [Meszaros et al. 2012](https://ui.adsabs.harvard.edu/abs/2012AJ....144..120M/abstract)).
-  3500 < T_{eff} < 30000
-  0.0 < log(g) < 5.0
-  -5.0 < [Fe/H] < +1.5
-  -1.5 < [alpha/M] < +1.0
-  -1.5 < [carbon/M] < +1.0


[Kurucz's Grids](http://kurucz.harvard.edu/grids.html): A variety of archived model atmosphere grids. Castelli (citation: [Castelli & Kurucz 2003](https://ui.adsabs.harvard.edu/abs/2003IAUS..210P.A20C/abstract)) is the newest model group of these.
- 3500 < T_{eff} < 50000
- 0.0 < log(g) < 5.0
- -4.0 < [Fe/H] < +0.5
- +0.0 < [alpha/M] < +0.4


### MARCS Model Atmospheres
[MARCS Homepage](https://marcs.astro.uu.se/index.php) Calculated using the MARCS code (citation: [Gustafsson et al. 2008](https://ui.adsabs.harvard.edu/abs/2008A%26A...486..951G/abstract)).
- 2500 < T_{eff} < 8000
- -1.0 < log(g) < 5.0
- -5.0 < [Fe/H] < +1.0
- +0.0 < [alpha/M] < +0.4
- 0.09 < C/O < 5.0
- Numerous other parameters are also varied


### PHOENIX Grids (More accurate structures for M-dwarfs and brown dwarfs)
[PHOENIX Grids (Goettingen)](https://phoenix.astro.physik.uni-goettingen.de/?page_id=109): Calculated for the Goettingen Spectral Library using the PHOENIX code (citation: [Husser et al. 2013](https://ui.adsabs.harvard.edu/abs/2013A%26A...553A...6H/abstract)).
- 2300 < T_{eff} < 25000
- 0.0 < log(g) < 6.0
- -4.0 < [Fe/H] < +1.0
- -0.2 < [alpha/M] < +1.2


[PHOENIX (France Allard)](https://phoenix.ens-lyon.fr/simulator-jsf22-26/index.faces): Multiple PHOENIX grids with varying underlying physics (citation: [Allard 2016](https://ui.adsabs.harvard.edu/abs/2016sf2a.conf..223A/abstract)). BT-Settl are the most up-to-date models, with the paper detailing the differences between then.
- 1500 < T_{eff} < 70000
- 0.0 < log(g) < 5.5
- -2.5 < [Fe/H] < +0.5
- +0.0 < [alpha/M] < +0.4
- C/O enhancement available

[APOGEE] (need link)

## Spectral Line Databases
[NIST ASD](https://physics.nist.gov/PhysRefData/ASD/lines_form.html): How to cite: https://physics.nist.gov/PhysRefData/ASD/Html/verhist.shtml

## Stellar Structure Code
[Spectroscopy Made Easy (SME)](https://www.stsci.edu/~valenti/sme.html) (IDL, last updated Feb 2020): Synthetic spectrum fitting for deriving abundances and stellar parameters (citation: [Piskunov & Valenti 2016](https://ui.adsabs.harvard.edu/abs/2017A%26A...597A..16P/abstract)).

[MOOG](http://www.as.utexas.edu/~chris/moog.html) (Fortran, last updated Nov 2019): Force-fitting abundances based on equivalent widths, synthetic spectrum fitting, and other routines are available in this LTE analysis program (citation: [Sneden 1973](https://ui.adsabs.harvard.edu/abs/1973ApJ...184..839S/abstract)). Note: Plotting functionality requires the paid Fortran graphics package SM. 

[PyMOOGi](https://github.com/madamow/pymoogi) (Python/Fortran, last updated Aug 2020): Adaptations of the equivalent width, abundance-fitting, and spectrum synthesis functionalities of MOOG for use with Python's matplotlib (citation: https://ui.adsabs.harvard.edu/abs/2017AAS...23021607A/abstract).

## Synthetic Spectra
[PHOENIX Grids (Goettingen)](https://phoenix.astro.physik.uni-goettingen.de/?page_id=10): Calculated for the Goettingen Spectral Library using the PHOENIX code (citation: [Husser et al. 2013](https://ui.adsabs.harvard.edu/abs/2013A%26A...553A...6H/abstract)).
- High- and medium-resolution spectra available
- 500 Angstrom < wavelength < 5.5 microns
- 2300 < T_{eff} < 12000
- 0.0 < log(g) < 6.0
- -4.0 < [Fe/H] < +1.0
- -0.2 < [alpha/M] < +1.2
