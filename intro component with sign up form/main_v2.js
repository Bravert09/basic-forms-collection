const fields = [
  { name: "email", er: "Email Address" },
  { name: "firstName", er: "First Name" },
  { name: "lastName", er: "Last Name" },
  { name: "password", er: "Password" },
];

const form = document.getElementById("signup-form");
const emailError = document.getElementById("emailError");
const emailInput = document.getElementById("email");
const successMsg = document.getElementById("success");
//input是获取元素vs而value是获取输入的值，对应 <input> 元素的id属性
const claimBtn = document.getElementById("claim-btn");

const showError = (fields, formData) => {
  let hasError = false;
  fields.forEach(({ name, er }) => {
    if (!formData.get(`${name}`).trim()) {
      document.getElementById(
        `${name}Error`
      ).textContent = `${er} cannot be empty`;
      document.getElementById(`${name}`).classList.add("inputerror");
      hasError = true;
    }
  });
  return hasError;
};
//闭包 = 函数访问自己定义时所在作用域的变量，不是访问“谁调用它”的变量。
//你写的 showError() 是在全局定义的，不是在 checkValue() 里面定义的，所以它不是闭包结构
//也就不能访问 checkValue 里的 hasError。

const removeError = (fields) => {
  fields.forEach(({ name }) => {
    document.getElementById(`${name}Error`).textContent = "";
    document.getElementById(`${name}`).classList.remove("inputerror");
  });
};

//e 是事件对象，必须作为函数参数传进来，否则 e.preventDefault() 会报错。
function checkValue(e, fields) {
  //阻止默认提交，每次刷新清除错误提示
  e.preventDefault();
  removeError(fields);
  const formData = new FormData(form);
  //value是获取到的input值，对应 <input> 元素的 name 属性
  showError(fields, formData);
  let hasError = showError(fields, formData);
  if (!emailInput.checkValidity()) {
    emailError.textContent = "Looks like this is not an email";
    emailInput.classList.add("inputerror");
    hasError = true;
  }

  if (!hasError) {
    successMsg.style.display = "block";
  } else {
    successMsg.style.display = "none"; // 有错误就隐藏成功提示
  }
}
//.trim()是JS中的字符串方法，去掉字符串开头和结尾的空格（包括空白字符，比如换行、制表符）
form.addEventListener("submit", (e) => {
  checkValue(e, fields);
});
//“将 fields 封装进闭包中”，意思是：
//你在写函数的时候，把外部变量 fields 包进另一个函数中，这样它就能在事件发生时依然使用这个值。

//form.addEventListener("submit", checkValue);但 checkValue(e, fields) 需要两个参数，而浏览器只传了 e，所以 fields 是 undefined，代码就会报错。
