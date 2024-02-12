import cardDatas from './data.js';  // adatok importálása egy másik .js fájlból

const button = document.querySelector('.menu');
const navList = document.querySelectorAll('.js-navList');
const links = document.querySelectorAll('.navLink');

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


// TODO: a fenti funkciók miatt az ikonok cseréje nem működöik megfelelően ha a görgetésre eltüntetem a menüt.
/* görgetésre altűnik a menü */
/* window.onscroll = () => {
    navList.forEach((e) => {
        e.classList.remove('active');
    });
} */



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
                <a href="" class="btn">Demo</a>
                <a href="" class="btn">Code</a>
            </div>
        </div>
    </div>
    `
});

