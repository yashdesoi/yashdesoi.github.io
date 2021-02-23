// Sharpening the introduction column once the page loads
const introduction = document.querySelector('#overview .description');

setTimeout(() => {
    introduction.style.filter = 'blur(0px)';
}, 2000);

// window.addEventListener('load', () => {
//     introduction.style.filter = 'blur(0px)';
// });

// Fading the background color of nav-bar and toggling arrow-up button upon scrolling certain height
const header = document.querySelector('header');
const overviewSection = document.getElementById('overview');
const arrowUp = document.querySelector('.arrow-up');

window.addEventListener('scroll', () => {

    if (window.pageYOffset > 260) {
        header.style.backgroundColor = 'black';
    } else {
        header.style.backgroundColor = 'transparent';
    }

    if (window.pageYOffset >= overviewSection.offsetHeight) {
        arrowUp.style.right = '40px';
    } else {
        arrowUp.style.right = '-3.5rem';
    }
    
});


// Adding functionality to nav-bar
const navBar = document.querySelector('.main-nav');
const navItems = document.querySelector('.main-nav__items');

navItems.addEventListener('click', event => {
    if (event.target.className === 'main-nav__item') {
        const id = event.target.textContent.toLowerCase().trim();

        const section = document.getElementById(id);
        window.scrollTo({
            top: section.offsetTop - navBar.offsetHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
});


// Directly jump to about section
const arrowDown = document.querySelector('.arrow-down');
const aboutSection = document.getElementById('about');

arrowDown.addEventListener('click', () => {
    window.scrollTo({
        top: aboutSection.offsetTop - navBar.offsetHeight,
        left: 0,
        behavior: 'smooth'
    });
});


// Jump back to top of the document
arrowUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});


// Making nav-bar responsive
const dropdown = document.querySelector('.main-nav__items');
let dropdownTrueHeight = 180; // Hard coded

if (window.innerWidth <= 830) {
    dropdownTrueHeight = dropdown.offsetHeight;
    dropdown.style.height = '0px';
}

const menuButton = document.querySelector('.menu-icon');
let dropdownClicks = 0;

menuButton.addEventListener('click', () => {
    dropdownClicks += 1;
    if (dropdownClicks%2 === 1) {
        dropdown.style.height = `${dropdownTrueHeight}px`;
    } else {
        dropdown.style.height = `0px`;
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 830) {
        dropdown.style.height = '0px';
    } else {
        dropdown.style.height = 'auto';
    }
});


// Requesting project's information
const createTemplate = function(imageURL, projectName, projectDescription, projectLink, githubRepoLink) {
    const templateOne = `
        <article class="project">
            <div class="photo" style="background-image: url(${imageURL})"></div>
            <div class="description">
                <strong>${projectName}: </strong>${projectDescription}.
            </div>
            <div class="links">
                <a href="${projectLink}" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="${githubRepoLink}" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </article>
    `;
    
    const templateTwo = `
        <article class="project">
            <div class="photo" style="background-image: url(${imageURL})"></div>
            <div class="description">
                <strong>${projectName}: </strong>${projectDescription}.
            </div>
            <div class="links">
                <a href="${githubRepoLink}" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </article>
    `;

    if (projectLink === 'nil') {
        return templateTwo;
    } else {
        return templateOne;
    }
};

const projectContainer = document.querySelector('#projects > .container');

const updateUI = function(html) {
    projectContainer.innerHTML += html;
};

// Immediately invoked function expression
(async function() {
    const response = await fetch('data/projects.json');
    const data = await response.json();

    data.forEach(project => {
        updateUI(createTemplate(project.imageURL, project.projectName, project.projectDescription, project.projectLink, project.githubRepoLink));
    }); 
})();
