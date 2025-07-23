//document.getElementById('switcher-id').href = './css/poster.scss';

function setTheme(theme) {
  if (theme == 'poster') {
    document.getElementById('switcher-id').href = './css/poster.scss';
  } else if (theme == 'genealogy') {
    document.getElementById('switcher-id').href = './css/genealogy.scss';
  } else if (theme == 'astrowebindex') {
    document.getElementById('switcher-id').href = './css/astrowebindex.scss';
  } else if (theme == 'exo') {
    document.getElementById('switcher-id').href = './css/exoplanetarium_mainpage.scss';
  }
  //localStorage.setItem('style', theme);
}