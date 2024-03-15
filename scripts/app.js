import cardDatas from '../assets/datas/data.js';  // adatok importálása egy másik .js fájlból

const button = document.querySelector('.menu');
const navList = document.querySelectorAll('.js-navList');
const links = document.querySelectorAll('.navLink');
const pageUpLink = document.querySelector('.pageUp');
/* hamburger menu */

/* a hamburger ikonra kattintva megjelenik - eltűnik a menü*/
button.addEventListener('click', () => {
    navList.forEach((e) => {
        e.classList.toggle('active');

    });
    button.classList.toggle('fa-bars');
    button.classList.toggle('fa-xmark');
});

/*  ha valamelyik linkre kattintunk akkor eltűnik a menü */
links.forEach((link) => {
    link.addEventListener('click', () => {
        navList.forEach((e) => {
            e.classList.toggle('active');
        });
        button.classList.toggle('fa-bars');
        button.classList.toggle('fa-xmark');

    })
});





/*  kártyák renderelése */
let container = document.querySelector('.cardContainer');

cardDatas.forEach(data => {
    container.innerHTML +=
        `
    <div class="card">
        <img class="image" src=${data.imageUrl} alt=${data.alt}>
        <div class="contentWrapper">
            <h2 class="title">${data.title}</h2>
             <p class="text">${data.text}</p>
             <div class="buttonGroup">
                <a href="#" class="btn portfolioBtn"><i class="fa-solid fa-laptop-code"></i>Demo</a>
                <a href="#" class="btn portfolioBtn"><i class="fa-brands fa-github"></i>Code</a>
            </div>
        </div>
    </div>
    `
});



// menu aláhúzás megjelenítése az aktív linknél
document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('load', function () {
        // Az oldal tetejére ugrás
        window.scrollTo(0, 0);
    });
    
    if (pageUpLink) {
        pageUpLink.addEventListener('click', function (event) {
            // oldal tetejére ugrás
            window.scrollTo(0, 0);
            // az active class eltávolítása a többi linkről
            links.forEach(function (navLink) {
                navLink.classList.remove('active');
            });
            // Az "active" osztály változtatása a főoldal linkre
            document.querySelector('.navLink[href="#home"]').classList.add('active');
        });
    }

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {

            // Az összes linkről az "active" osztály eltávolítása
            links.forEach(function (navLink) {
                navLink.classList.remove('active');
            });

            // A kiválasztott linkhez hozzáadása az "active" osztály
            link.classList.add('active');
        });
    });


});
