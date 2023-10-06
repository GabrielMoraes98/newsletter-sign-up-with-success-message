const button = document.getElementById("button");
const email = document.getElementById("email");
const formControl = document.querySelector(".form-control");
const successMessage = document.querySelector(".success-message");
const container = document.querySelector(".container");
const emailDigitado = document.getElementById("email-digitado");
button.addEventListener("click", (e) => {
  e.preventDefault();
  emailValue = email.value;
  if (emailValue === "") {
    formControl.classList.add("error");
  } else if (!validateEmail(emailValue)) {
    formControl.classList.add("error");
  } else {
    container.style.display = "none";
    successMessage.classList.add("success");
    emailDigitado.innerText = emailValue;
  }
});
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
