const navBoton = document.querySelector(".nav__boton")
const navMenu = document.querySelector(".menu")

navBoton.addEventListener("click", () => {
    navMenu.classList.toggle("menu__nav--visible")
})