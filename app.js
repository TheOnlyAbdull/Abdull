const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
menu.addEventListener('click', function () {
    navList.classList.toggle('active');
    menu.classList.toggle('active');
});


// menu.onclick = function () {
//     navList.classList.toggle('active');
// };