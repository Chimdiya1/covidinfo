function classToggle() {
    console.log('clicked')
    const navs = document.querySelectorAll('.menu-item')
    navs.forEach(nav => nav.classList.toggle('menu-item-show'));
    const nav = document.querySelectorAll('.menu')
    nav.forEach(nav => nav.classList.toggle('menu-show'));
}

document.querySelector('#burger')
    .addEventListener('click', classToggle);

