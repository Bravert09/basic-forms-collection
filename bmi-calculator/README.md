# introduction

# 1. What are you most proud of?（学到了什么？）

- 关于 form 表单

  - 获取表单的值（FormData）
    const form = document.getElementById("form");
    const data = new FormData(form);
    let unit = data.get("unit"); // 取出 name="unit" 的值
    👉 FormData(form) 会把表单里所有带有 name 属性的元素收集成一个键值对集合。
    👉 .get("xxx") 就是取对应字段的值。
    如果是输入框 <input name="unit" value="cm">，就会取到 "cm"
    如果是单选框/下拉框，就会取当前选中的那个值。

  - 表单事件的触发方式
    form.addEventListener("input", toggleUnits);
    表示：只要表单里任意一个可输入元素的值发生变化（如输入框文字、单选框切换、复选框勾选），就会触发 toggleUnits。
    📌 常见的区别：
    input：用户一输入/修改就触发（实时）。
    change：用户完成修改后才触发（比如输入框失焦，或单选/复选切换）。
    submit：用户点击 <button type="submit"> 或按回车时触发。

- 关于 HTML 和 适配、大屏增强
  - 尽量用 flex 布局
  - 移动端用 rem 适配，平板、电脑可以用 vw 适配，电脑端注意 max-width 限制；

# 2. What challenges did you encounter, and how did you overcome them?（曾 遇到和解决了什么问题？）

- JS 写 innerHTML、style.display，比 css 规则的优先级高，对于元素是否显示和布局，有影响；
- JS 在 function toggleUnits()调用 defaultShow(height, weight)，BMI 不会计算和更新，使用默认的 BMIcard 内容？
  问题主要出在 defaultShow 更新 DOM 后（innerHTML 会完全重建 DOM 节点），原来绑定的元素引用失效。
  chatgpt 重构逻辑：
  - 职责单一化、状态明确、DOM 引用可靠、避免报错
- CSS form 元素，在 Computed 面板 里：灰色值 = 自动计算，但是为什么自动计算的高度，会多余很多？跟父容器的高度有关系

# 3. What would you do differently next time?（下次有什么改进？待解决的问题）

- radio 单选框，css 效果还原；
- BMI 健康的体重范围，span 如何和 p 放在同一行；
- input 输入框，默认数值 0，显示为灰色；
