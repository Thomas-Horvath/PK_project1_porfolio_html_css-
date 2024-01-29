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