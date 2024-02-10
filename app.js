import datas from './data.js';  // adatok importálása egy másik .js fájlból

const button = document.querySelector('.menu');
const navList = document.querySelectorAll('.js-navList');
const links = document.querySelectorAll('.navLink');

/* hamburger menu */

/* a hamburger ikonra kattintva megjelenik - eltűnik a menü*/
button.addEventListener('click', () => {
    navList.forEach((e) => {
        e.classList.toggle('active');
    })
});

/*  ha valamelyik linkre kattintunk akkor eltűnik a menü */
links.forEach((link) => {
    link.addEventListener('click', () => {
        navList.forEach((e) => {
            e.classList.toggle('active');
        })
    })
});


/* görgetésre altűnik a menü */
window.onscroll = () => {
    navList.forEach((e) => {
        e.classList.remove('active');
    })
}



/*  kártyák renderelése */
let container = document.querySelector('.cardContainer');

datas.forEach(data => {
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

