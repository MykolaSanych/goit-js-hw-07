const loginForm = document.querySelector(".login-form");
const userEmail = loginForm.elements[0];
const userPassword = loginForm.elements[1];
const actionslogin = (event) => {
  event.preventDefault();
  if (userEmail.value && userPassword.value) {
    const dataForm = {};
    dataForm.Email = userEmail.value.trim();
    dataForm.Password = userPassword.value.trim();
    console.log(dataForm);
    loginForm.reset();
  } else {
    alert("All form fields must be filled in");
  }
};
loginForm.addEventListener("submit", actionslogin);
