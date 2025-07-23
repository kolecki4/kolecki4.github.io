//document.getElementById('switcher-id').href = './css/poster.scss';

function setTheme(theme) {
  if (theme == 'poster') {
    document.getElementById('switcher-id').href = './css/poster.css';
  } else if (theme == 'genealogy') {
    document.getElementById('switcher-id').href = './css/genealogy.css';
  } else if (theme == 'astrowebindex') {
    document.getElementById('switcher-id').href = './css/astrowebindex.css';
  } else if (theme == 'exo') {
    document.getElementById('switcher-id').href = './css/exoplanetarium_mainpage.css';
  }
  //localStorage.setItem('style', theme);
}
