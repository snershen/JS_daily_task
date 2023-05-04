//題目一
function square(num) {
  return num ** 2;
}

//題目二
function calculate(num1, num2, num3) {
  return num1 + num2 - num3;
}

//題目三
function rounding(num) {
  return Number(num.toFixed(2));
}

//題目四
function parseNumber(string) {
  return Number(string);
}

//題目五
function divisible(num) {
  return num % 2;
}

//將各型別轉換為數字的方法
//1. Number(x)：輸出數字
//不允許空格，會直接輸出 NaN
//可以把日期轉為數字，輸出的是1970年1月1日至今的毫秒數
//Number(new Date("2019-05-15"));

//2. parseInt(x)：輸出的是整數
//允許空格，輸出首個數字

//3. parseFloat(x)：輸出的是浮點數
//允許空格，輸出首個數字

//=============================
//只用在數字型別
//string.toFixed() 指定小數值，無條件進位
//***輸出的是字串***
