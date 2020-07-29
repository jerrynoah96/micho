// navigation nav bar

const ham = document.getElementById("ham");
const nav = document.getElementById("nav");

ham.addEventListener("click", () => {
    nav.classList.toggle("show");
})