const button = document.querySelector('.menu');
const navList = document.querySelectorAll('.js-navList');
const links = document.querySelectorAll('.navLink');



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



window.addEventListener('load', function (event) {
    event.preventDefault();
});



const datas = [
    {
        imageUrl: "./img/projects/database.svg",
        alt: "database-icon",
        title: "SQL Adatbázis",
        text: "Egy webshop teljes adatbázisa, termékkezeléssel, rendelés kezeléssel és a felhasználók kezelésével.",
    },
    {
        imageUrl: "./img/projects/design.svg",
        alt: "Web design",
        title: "Web design",
        text: "A web design a digitális térben történő vizuális és funkcionális élmény megtervezésének művészete és tudománya.",
    },
    {
        imageUrl: "./img/projects/mobileApp.svg",
        alt: "mobil-App",
        title: "Mobil applikáció",
        text: "Mobil applikációk tervezése és kivitelezése",
    },
    {
        imageUrl: "./img/projects/react.svg",
        alt: "react-logo",
        title: "React website",
        text: "React keretrendszer ismerete és professzionális felhasználása.",
    },
    {
        imageUrl: "./img/projects/static.svg",
        alt: "icon",
        title: "Statikus weboldalak",
        text: "Statikus weboldalak tervezése és kivitelezése.",
    },
    {
        imageUrl: "./img/projects/static2.svg",
        alt: "icon",
        title: "Wordpress oldalak",
        text: "Wordpress weboldalak tervezése és kivitelezése.",
    },
]

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

