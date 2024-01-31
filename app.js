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



  const data = [
    {
        imageUrl: "./img/projects/database.svg",
        title: "SQL Adatbázis",
        text: "Egy webshop teljes adatbázisa, termékkezeléssel, rendelés kezeléssel és a felhasználók kezelésével.",
    },
    {
        imageUrl: "./img/projects/design.svg",
        title: "SQL Adatbázis",
        text: "Egy webshop teljes adatbázisa, termékkezeléssel, rendelés kezeléssel és a felhasználók kezelésével.",
    },
    {
        imageUrl: "./img/projects/mobileApp.svg",
        title: "SQL Adatbázis",
        text: "Egy webshop teljes adatbázisa, termékkezeléssel, rendelés kezeléssel és a felhasználók kezelésével.",
    },
    {
        imageUrl: "./img/projects/react.svg",
        title: "SQL Adatbázis",
        text: "Egy webshop teljes adatbázisa, termékkezeléssel, rendelés kezeléssel és a felhasználók kezelésével.",
    },
    {
        imageUrl: "./img/projects/static.svg",
        title: "SQL Adatbázis",
        text: "Egy webshop teljes adatbázisa, termékkezeléssel, rendelés kezeléssel és a felhasználók kezelésével.",
    },
    {
        imageUrl: "./img/projects/static2.svg",
        title: "SQL Adatbázis",
        text: "Egy webshop teljes adatbázisa, termékkezeléssel, rendelés kezeléssel és a felhasználók kezelésével.",
    },
  ]