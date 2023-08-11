const nav = document.querySelector(".navlist")
const burger = document.querySelector('.hamburger')

burger.addEventListener('click', ()=>{
    nav.classList.toggle('navlist-active');
});
