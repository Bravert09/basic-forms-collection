const form = document.getElementById("signup-form");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const claimBtn = document.getElementById("claim-btn");

//e 是事件对象，必须作为函数参数传进来，否则 e.preventDefault() 会报错。
function checkValue(e) {
  e.preventDefault();
  emailError.textContent = "";
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  passwordError.textContent = "";
  emailInput.classList.remove("inputerror");
  const formData = new FormData(form);
  const emailValue = formData.get("email");
  const firstNameValue = formData.get("firstName");
  const lastNameValue = formData.get("lastName");
  const passwordValue = formData.get("password");
  if (!emailValue.trim()) {
    emailError.textContent = "Email Address cannot be empty";
    emailInput.classList.add("inputerror");
  } else if (!emailInput.checkValidity()) {
    emailError.textContent = "Looks like this is not an email";
    emailInput.classList.add("inputerror");
  }
  if (!firstNameValue.trim()) {
    firstNameError.textContent = "First Name cannot be empty";
  }
  if (!lastNameValue.trim()) {
    lastNameError.textContent = "Last Name cannot be empty";
  }
  if (!passwordValue.trim()) {
    passwordError.textContent = "Password cannot be empty";
  }
}
//.trim()是JS中的字符串方法，去掉字符串开头和结尾的空格（包括空白字符，比如换行、制表符）
form.addEventListener("submit", checkValue);
