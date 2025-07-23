const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const passwordInput = document.getElementById("password");
//input是获取元素vs而value是获取输入的值，对应 <input> 元素的id属性
const claimBtn = document.getElementById("claim-btn");

const emailError = document.getElementById("emailError");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const passwordError = document.getElementById("passwordError");

//e 是事件对象，必须作为函数参数传进来，否则 e.preventDefault() 会报错。
function checkValue(e) {
  //阻止默认提交，每次刷新清除错误提示
  e.preventDefault();
  emailError.textContent = "";
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  passwordError.textContent = "";
  emailInput.classList.remove("inputerror");
  firstNameInput.classList.remove("inputerror");
  lastNameInput.classList.remove("inputerror");
  passwordInput.classList.remove("inputerror");


  const formData = new FormData(form);
  const emailValue = formData.get("email");
  const firstNameValue = formData.get("firstName");
  const lastNameValue = formData.get("lastName");
  const passwordValue = formData.get("password");
  //value是获取到的input值，对应 <input> 元素的 name 属性

  if (!emailValue.trim()) {
    emailError.textContent = "Email Address cannot be empty";
    emailInput.classList.add("inputerror");
  } else if (!emailInput.checkValidity()) {
    emailError.textContent = "Looks like this is not an email";
    emailInput.classList.add("inputerror");
  }
  if (!firstNameValue.trim()) {
    firstNameError.textContent = "First Name cannot be empty";
    firstNameInput.classList.add("inputerror");

  }
  if (!lastNameValue.trim()) {
    lastNameError.textContent = "Last Name cannot be empty";
    lastNameInput.classList.add("inputerror");

  }
  if (!passwordValue.trim()) {
    passwordError.textContent = "Password cannot be empty";
    passwordInput.classList.add("inputerror");

  }
}
//.trim()是JS中的字符串方法，去掉字符串开头和结尾的空格（包括空白字符，比如换行、制表符）
form.addEventListener("submit", checkValue);
