let menuIcon = document.querySelector("menuIcon");
let navbar =document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}