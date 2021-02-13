// Sharpening the introduction column once the page loads
const introduction = document.querySelector('.overview .description');
introduction.style.filter = 'blur(0px)';


// Fading the background color of nav-bar  upon scrolling certain height
const navBar = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {

    if (window.pageYOffset > 260) {
        navBar.style.backgroundColor = 'black';
    } else {
        navBar.style.backgroundColor = 'transparent';
    }
    
});

const navItems = document.querySelector('.main-nav__items');

navItems.addEventListener('click', event => {
    if (event.target.className === 'main-nav__item') {
        const id = event.target.textContent.toLowerCase().trim();

        const section = document.getElementById(id);
        window.scrollTo({
            top: section.offsetTop - navBar.offsetHeight,
            left: 0,
            behaviour: 'smooth'
        });
    }
});