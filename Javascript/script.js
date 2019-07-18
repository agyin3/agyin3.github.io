// JavaScript Document

/*
document.ready(function () {
    document.getElementsByClassName("open--menu").onclick = function () {
        document.getElementsByClassName("overlay").classList.add("open")
    };
    document.getElementsByName("close--menu").onclick = function() {
        document.getElementsByClassName("overlay").classList.remove("open")
    };
});
*/


const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const overlayMenu = document.getElementById("overlay");
const footer = document.getElementById("footer");
const contact = document.getElementById("contact-form");

const openOnClick = () => {
    overlayMenu.classList.add("open");
    footer.classList.add("hidden");
    contact.classList.add("hidden");
}

const closeOnClick = () => {
    overlayMenu.classList.remove("open");
    footer.classList.remove("hidden");
    contact.classList.remove("hidden");
}

openMenu.addEventListener("click", openOnClick);
closeMenu.addEventListener("click", closeOnClick);

/*
const button = document.getElementById("btn");
const menu = document.getElementById("menu");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const home = document.getElementById("homeBtn");

const menuToggle = () => {
    header.classList.toggle("menuBackground");
    button.classList.toggle("is-active");
    menu.classList.toggle("hidden");
    menu.classList.toggle("menu-show");
    footer.classList.toggle("hidden");
    
};

button.addEventListener("click", menuToggle);
*/