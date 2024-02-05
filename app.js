import datas from './data.js';  // import datas of cards from other JavaScript file

const button = document.querySelector('.menu');
const navList = document.querySelectorAll('.js-navList');
const links = document.querySelectorAll('.navLink');

/* hamburger menu */
button.addEventListener('click', () => {
    navList.forEach((e) => {
        e.classList.toggle('active');
    })
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        navList.forEach((e) => {
            e.classList.toggle('active');
        })
    })
});




/*  cards render */
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
                <a href="" class="btn">demo</a>
                <a href="" class="btn">code</a>
            </div>
        </div>
    </div>
    `
});

