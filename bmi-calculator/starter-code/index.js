const form = document.getElementById("form");
const metricInput = document.querySelector(".metric-input-container ");
const imperialInput = document.querySelector(".imperial-input-container ");
//选择单个元素推荐用 querySelector
const BMICard = document.querySelector(".BMI-card");
const BMINum = document.querySelector(".BMI-num");
const BMITxt = document.querySelector(".BMI-txt");
const idealSpan = document.getElementById("ideal-span");
const data = new FormData(form);
let unit = data.get("unit");

//判断BMI分级
function BMIIndicator(BMI) {
  if (BMI < 18.5) {
    BMITxt.textContent =
      "Your BMI suggests you're underweight. Your ideal weight is bewteen ";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    BMITxt.textContent =
      "Your BMI suggests you're a healthy weight. Your ideal weight is bewteen ";
  } else if (BMI >= 25 && BMI <= 29.9) {
    BMITxt.textContent =
      "Your BMI suggests you're overweight. Your ideal weight is bewteen ";
  } else if (BMI >= 30) {
    BMITxt.textContent =
      "Your BMI suggests you're obese. Your ideal weight is bewteen ";
  }
}

// 转换为 st + lbs
function poundsToStLbs(pounds) {
  const st = Math.floor(pounds / 14).toFixed(0);
  const lbs = (pounds % 14).toFixed(1);
  return `${st}st ${lbs}lbs`;
}

//empty
function defaultShow(height, weight) {
  if (isNaN(height) || isNaN(weight) || height === 0 || weight === 0) {
    BMICard.innerHTML = `
      <div class="welcome-text">
        <h2>Welcome!</h2>
        <p>Enter your height and weight and you'll see your BMI result here</p>
      </div>
    `;
    return false;
  } else {
    BMICard.innerHTML = `
              <div class="BMI-card-container" id="BMI-card-left">
            <p class="BMI-top">Your BMI is...</p>
            <p class="BMI-num">23.4</p>
          </div>
          <div class="BMI-card-container" id="BMI-card-right">
            <p class="BMI-txt">
              Your BMI suggests you're a healthy weight. Your ideal weight is
              between
            </p>
            <span id="ideal-span">63.3kgs - 85.2kgs</span>
          </div>`;
    return true;
  }
}

function toggleUnits() {
  const data = new FormData(form);
  unit = data.get("unit");
  if (unit === "metric") {
    metricInput.style.display = "flex";
    imperialInput.style.display = "none";
    const height = parseFloat(data.get("metric-height") / 100);
    const weight = parseFloat(data.get("metric-weight"));
    //是否为empty页面，渲染 UI，并根据返回值决定是否继续
    const hasBMICard = defaultShow(height, weight);
    // 如果只是欢迎提示，直接退出
    if (!hasBMICard) return;
    // 重新获取 DOM 元素（因为 innerHTML 刷新了）
    const BMINum = document.querySelector(".BMI-num");
    const BMITxt = document.querySelector(".BMI-txt");
    const idealSpan = document.getElementById("ideal-span");
    //这行代码是一个 安全检查
    if (!BMINum || !BMITxt || !idealSpan) return;
    //计算BMI数值
    const BMI = weight / (height * height);
    BMINum.textContent = BMI.toFixed(1);
    //计算BMI健康的体重范围
    const idealLow = (18.5 * height * height).toFixed(1);
    const idealHigh = (24.9 * height * height).toFixed(1);
    idealSpan.textContent = idealLow + "kgs" + " - " + idealHigh + "kgs";
    BMIIndicator(BMI);
  } else if (unit === "imperial") {
    metricInput.style.display = "none";
    imperialInput.style.display = "block";
    const heightFt = parseFloat(data.get("imperial-height-ft"));
    const heightIn = parseFloat(data.get("imperial-height-in"));
    const weightSt = parseFloat(data.get("imperial-weight-st"));
    const weightLbs = parseFloat(data.get("imperial-weight-lbs"));
    const totalInches = heightFt * 12 + heightIn;
    const totalPounds = weightSt * 14 + weightLbs;
    //empty
    const hasBMICard = defaultShow(totalInches, totalPounds);
    if (!hasBMICard) return;
    // 重新获取新的元素
    const BMINum = document.querySelector(".BMI-num");
    const BMITxt = document.querySelector(".BMI-txt");
    const idealSpan = document.getElementById("ideal-span");
    if (!BMINum || !BMITxt || !idealSpan) return;
    //计算BMI数值
    const BMI = (totalPounds * 703) / (totalInches * totalInches);
    BMINum.textContent = BMI.toFixed(1);
    const minPounds = (18.5 * totalInches * totalInches) / 703;
    const maxPounds = (24.9 * totalInches * totalInches) / 703;
    const idealWeight =
      poundsToStLbs(minPounds) + " - " + poundsToStLbs(maxPounds);
    idealSpan.textContent = idealWeight;

    BMIIndicator(BMI);
  }
}
// 页面加载时先调用一次，设置默认显示
toggleUnits();

form.addEventListener("input", toggleUnits);
