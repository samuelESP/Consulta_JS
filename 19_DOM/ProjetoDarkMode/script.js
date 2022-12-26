function changeMode() {
    changeClasses();
    changeText();

}



function changeClasses() {
    button.classList.toggle(darkModeClass); 
    h1.classList.toggle(darkModeClass); 
    body.classList.toggle(darkModeClass); 
    footer.classList.toggle(darkModeClass); 
}



function changeText() {
    const LightMode = 'Light Mode';
    const DarkMode = 'Dark Mode';

    
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = LightMode;
        h1.innerHTML = DarkMode + ' ON';
        return
    }
    button.innerHTML = DarkMode;
    h1.innerHTML = LightMode + ' ON';
}; 



const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];

const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode';



button.addEventListener('click', changeMode);