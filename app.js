// Sharpening the introduction column once the page loads
const introduction = document.querySelector('#overview .description');
introduction.style.filter = 'blur(0px)';


// Fading the background color of nav-bar and toggling arrow-up button upon scrolling certain height
const navBar = document.querySelector('.main-nav');
const overviewSection = document.getElementById('overview');
const arrowUp = document.querySelector('.arrow-up');

window.addEventListener('scroll', () => {

    if (window.pageYOffset > 260) {
        navBar.style.backgroundColor = 'black';
    } else {
        navBar.style.backgroundColor = 'transparent';
    }

    if (window.pageYOffset >= overviewSection.offsetHeight) {
        arrowUp.style.right = '40px';
    } else {
        arrowUp.style.right = '-3.5rem';
    }
    
});

// Adding functionality to nav-bar
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

const arrowDown = document.querySelector('.arrow-down');
const aboutSection = document.getElementById('about');

arrowDown.addEventListener('click', () => {
    window.scrollTo({
        top: aboutSection.offsetTop - navBar.offsetHeight,
        left: 0,
        behavior: 'smooth'
    });
});

arrowUp.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behaviour: 'smooth'
    })
});