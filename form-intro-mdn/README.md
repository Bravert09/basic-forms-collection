This is a basic and systematic form introduction. <br>
These codes and forms are bases on MDN docs [https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms#see_also].

**Content**
- **Your first form 第一个表单**
- **How to structure a web form 如何构建HTML表单**
- **Basic native form controls 原生表单部件**
- The HTML5 input types HTML5的输入input类型
- Other form controls 其他表单控件
- Styling web forms 样式化表单
- **Advanced form styling 表单样式化进阶**
- Cusomizable selects
- **UI pseudo-class UI 伪类**
- Client-side form validation 表单数据校验
- Sending form data 发送表单数据


补充
- 表单事件触发时机
  <img width="1058" height="643" alt="image" src="https://github.com/user-attachments/assets/293ceb14-f21d-41fb-8fe7-38ab3cb06a17" />
- 获取表单的值（FormData） <br>
  const form = document.getElementById("form"); <br>
  const data = new FormData(form); <br>
  let unit = data.get("unit"); // 取出 name="unit" 的值 <br>
  👉 FormData(form) 会把表单里所有带有 name 属性的元素收集成一个键值对集合。 <br>
  👉 .get("xxx") 就是取对应字段的值。 <br>
  如果是输入框 `<input name="unit" value="cm">`，就会取到 "cm" <br>
  如果是单选框/下拉框，就会取当前选中的那个值。 <br>
