//題目一
function hello() {
  return 'Hello world!';
}
hello();

//題目二
function sayHi(name) {
  return `${name}，Hello woeld!`;
}

sayHi('Tom');

//題目三
function add(num) {
  return num + num;
}
add(2);

//題目四
function addTwo(num1, num2) {
  return num1 + num2;
}

addTwo(5, 10);

//題目五
function addNumberAndString(num1, num2, num3) {
  return `第一加第二個參數加總為 ${num1 + num2}，第三個參數為 ${num3}`;
}

addNumberAndString(5, 10, 30);
