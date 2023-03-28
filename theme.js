const currentTheme = localStorage.getItem('theme');
document.documentElement.setAttribute('current-theme', currentTheme)
    
const radioButtons = document.getElementsByName('radio');
    
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
        if (radioButton.id === 'theme2') {
          document.documentElement.setAttribute('current-theme', 'theme2');
          localStorage.setItem('theme', 'theme2');
        } else if (radioButton.id === 'theme3') {
          document.documentElement.setAttribute('current-theme', 'theme3');
          localStorage.setItem('theme', 'theme3');
        } else {
          document.documentElement.setAttribute('current-theme', 'theme1');
          localStorage.setItem('theme', 'theme1');
        }
    });
});













