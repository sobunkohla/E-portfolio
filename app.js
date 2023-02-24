const menuButton = document.querySelector(".open--menu");
const closeButton = document.querySelector(".close--menu");
function OpenMenu() {
document.body.classList.add("menu__open");
}
function CloseMenu() {
    document.body.classList.remove("menu__open");
    }
closeButton.addEventListener("click", CloseMenu)
menuButton.addEventListener('click', OpenMenu);

