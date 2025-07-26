const fields = [{ name: "card-name" }, { name: "card-num" }, { name: "cvc" }];
const fieldsAll = [
  { name: "card-name" },
  { name: "card-num" },
  { name: "exp-month" },
  { name: "exp-year" },
  { name: "cvc" },
];
const fieldsNum = [{ name: "card-num" }, { name: "cvc" }];
const fieldsNumAll = [
  { name: "card-num" },
  { name: "exp-month" },
  { name: "exp-year" },
  { name: "cvc" },
];

const confirmBtn = document.getElementById("confirm-btn");
const form = document.getElementById("form");

//完成页面
const complete = (fieldsAll, fieldsNumAll, formData) => {
  fieldsAll.forEach(({ name }) => {
    if (formData.get(`${name}`).trim()) {
      fieldsNumAll.forEach(({ name }) => {
        if (!isNaN(formData.get(`${name}`))) {
          window.location.href = "success.html";
        }
      });
    }
  });
};

function checkValue(e, fields, fieldsNumAll) {
  e.preventDefault();
  const formData = new FormData(form);
  //清除错误
  fieldsAll.forEach(({ name }) => {
    document.getElementById(`${name}Error`).textContent = "";
    document.getElementById(`${name}`).classList.remove("inputerror");
  });

  //检查空格
  const checkBlank = (fields) => {
    fields.forEach(({ name }) => {
      const eachValue = formData.get(`${name}`);
      if (!eachValue.trim()) {
        document.getElementById(`${name}Error`).textContent = "Can't be blank";
        document.getElementById(`${name}`).classList.add("inputerror");
      }
    });
  };
  //检查数字格式正确
  const checkNum = (fieldsNum) => {
    fieldsNum.forEach(({ name }) => {
      if (formData.get(`${name}`)) {
        if (isNaN(formData.get(`${name}`))) {
          document.getElementById(`${name}Error`).textContent =
            "Wrong format, numbers only";
          document.getElementById(`${name}`).classList.add("inputerror");
        }
      }
    });
  };
  checkNum(fieldsNum);
  //检查exp.date部分的空格和数字格式正确
  if (!formData.get("exp-year").trim() || !formData.get("exp-month").trim()) {
    document.getElementById("exp-yearError").textContent = "Can't be blank";
    if (!formData.get("exp-year").trim()) {
      document.getElementById("exp-year").classList.add("inputerror");
    }
    if (!formData.get("exp-month").trim()) {
      document.getElementById("exp-month").classList.add("inputerror");
    }
  } else {
    if (isNaN(formData.get("exp-month"))) {
      document.getElementById("exp-yearError").textContent =
        "Wrong format, numbers only";
      document.getElementById("exp-month").classList.add("inputerror");
    }
    if (isNaN(formData.get("exp-year"))) {
      document.getElementById("exp-yearError").textContent =
        "Wrong format, numbers only";
      document.getElementById("exp-year").classList.add("inputerror");
    }
  }
  checkBlank(fields);

  const isAllFilled = fieldsAll.every(
    ({ name }) => formData.get(name).trim() !== ""
  );
  const isAllNumbers = fieldsNumAll.every(
    ({ name }) => !isNaN(formData.get(name))
  );
  if (isAllFilled && isAllNumbers) {
    window.location.href = "success.html";
  }
}

form.addEventListener("submit", (e) => {
  checkValue(e, fields, fieldsAll, fieldsNumAll);
});

