const burger = document.querySelector('.hamburger')
const close = document.querySelector('.close-nav')

burger.addEventListener('click', ()=>{
    document.getElementById("nav-overlay").style.width = "100%";
});

close.addEventListener('click', ()=>{
    document.getElementById("nav-overlay").style.width = "0";
});
