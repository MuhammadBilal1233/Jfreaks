burger = document.querySelector(".burger");
navBar = document.querySelector(".nav-bar");
navItems = document.querySelector(".nav-items");


burger.addEventListener("click",()=>{
    navBar.classList.toggle("nav-h");
    navItems.classList.toggle("v-class");
})