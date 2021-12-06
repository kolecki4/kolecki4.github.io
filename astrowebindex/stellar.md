# Stellar Astrophysics

## Compiled Precomputed Grids
[Model Atmospheres](stellar/atmospheres.md): Up-to-date ATLAS, MARCS, and Phoenix grids including parameter range info

[Synthetic Spectra](stellar/spectra.md): WIP. Only Phoenix grids at the moment

## Spectral Line Databases
[Linemake](https://github.com/vmplacco/linemake): Fortran program that outputs all lines in a user-selected wavelength range, including user-specified molecular lines (citation: [Placco et al. 2021](https://ui.adsabs.harvard.edu/abs/2021RNAAS...5...92P/abstract))

[NIST ASD](https://physics.nist.gov/PhysRefData/ASD/lines_form.html): A number of formatting options for output data can be selected by clicking on the "Show Advanced Settings" button. How to cite: https://physics.nist.gov/PhysRefData/ASD/Html/verhist.shtml

[VALD](http://vald.astro.uu.se/): Regularly updated spectral line database (requires free account registration)

## Stellar Structure Code
[Spectroscopy Made Easy (SME)](https://www.stsci.edu/~valenti/sme.html) (IDL, last updated Feb 2020): Synthetic spectrum fitting for deriving abundances and stellar parameters, with a grid of nLTE corrections included (citation: [Piskunov & Valenti 2016](https://ui.adsabs.harvard.edu/abs/2017A%26A...597A..16P/abstract)).

[MOOG](http://www.as.utexas.edu/~chris/moog.html) (Fortran, last updated Nov 2019): Force-fitting abundances based on equivalent widths, synthetic spectrum fitting, and other routines are available in this LTE analysis program (citation: [Sneden 1973](https://ui.adsabs.harvard.edu/abs/1973ApJ...184..839S/abstract)). Note: Plotting functionality requires the paid Fortran graphics package SM. 

[PyMOOGi](https://github.com/madamow/pymoogi) (Python/Fortran, last updated Aug 2020): Adaptations of the equivalent width, abundance-fitting, and spectrum synthesis functionalities of MOOG for use with Python's matplotlib (citation: [Adamow 2017](https://ui.adsabs.harvard.edu/abs/2017AAS...23021607A/abstract)).
