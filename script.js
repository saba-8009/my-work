const showPopupBtn = document.querySelector(".login-btn");
const hidePopupBtn = document.querySelector(".form-popup .close-button");

//for show my popup form
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup"); 
});
// for hide my popup form
hidePopupBtn.addEventListener("click",() => showPopupBtn.click());
