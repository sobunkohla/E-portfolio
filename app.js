const menuButton = document.querySelector(".open--menu");
const closeButton = document.querySelector(".close--menu");
const closeElem = document.querySelector(".menu__link--anchor");
function OpenMenu() {
document.body.classList.add("menu__open");
}
function CloseMenu() {
    document.body.classList.remove("menu__open");
    }
closeButton.addEventListener("click", CloseMenu);
menuButton.addEventListener('click', OpenMenu);
closeElem.addEventListener("click", CloseMenu);





 function contact(event) {
   event.preventDefault();
   const loading = document.querySelector(".modal__overlay--loading");
const success = document.querySelector(".modal__overlay--success");
loading.classList.add("modal__overlay--visible");
    emailjs
     .sendForm(
   'service_u178grg',
   'template_cmxw92s',
   event.target,
   'smA1y_ypshEF1HFrw'
   ).then(()=> {
    loading.classList.remove("modal__overlay--visible");
    success.classList.add("modal__overlay--visible");
   }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
        "the email service is currently unavailable. Please contact me directly at sobunkohla@gmail.com "
    )
   })



}

