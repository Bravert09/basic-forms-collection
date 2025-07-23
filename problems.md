1.错误提示，无法实现右对齐
2.

What are you most proud of, and what would you do differently next time?

What challenges did you encounter, and how did you overcome them?
HTML:关于form表单的属性，id、name；

CSS：
对齐的问题

优先级

选择器：#(id)
.(class)
*(全部元素)
input::placeholder 
input:focus

默认样式：body的margin、边框outline
响应式设计：
1.断点：电脑有限，考虑手机和平板的断点
2.设置viewpoint
3.百分百布局：默认：width:100% max-width:640px（注意父子关系）;
4.弹性单位：字体单位 font-size: 2.8rem;
5.弹性布局：flexbox + gap
6.media@在写宽度

注意：box-sizing、html和body设置border测试宽度、max-width：640px全局优先；

JS：表单验证的步骤
1.form.addEventListener("submiit",...)
2.阻止默认提交
3.dom获取的是元素， .value可以取值；可以配合FormData结构取值

What specific areas of your project would you like help with?
优化js验证的函数；
密码部分显示星号


待完成的优化点
1. ✅️Inputs could use some consistent height (e.g. height: 50px) across screen sizes as of now when error message comes it is getting squeezed.
2. ✅️Try adding simple hover/focus effects on buttons and inputs to enhance interactivity.
:hover 是鼠标悬停状态
当用户 把鼠标放在元素上（不点击）时，就会触发 :hover。
常用于按钮变色、链接下划线、显示隐藏菜单等。

:focus 是元素获得焦点状态
当用户 点击元素（如 input）或用键盘 Tab 键 聚焦到元素时，触发 :focus。
常用于输入框高亮、可键盘操作时突出显示等。

3. ✅️Try updating the password input from type="text" to type="password".
4. ✅️For JavaScript optimization, you can refactor error handling into a loop or function to reduce repetitive code.
const showError = (field, message) => {
  document.getElementById(`${field}Error`).textContent = message;
  document.getElementById(field).classList.add("inputerror");
}
step1：定义数组；
step2：定义函数（数组参数），对数组进行遍历，对每个元素进行处理；
step3：在checkValue函数中，调用showerror和removeerror的函数，注意传参；

5.  ✅️Try adding a succe  ss message or visual feedback when all fields are valid and form is submitted.
step1：html添加元素
step2：设置“显示的布尔值”
step：根据条件判断，“显示的布尔值”，去显示或者隐藏html元素

6. 手机优先，移动web适配，再到大屏增强

