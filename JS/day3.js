//題目一
function checkStringLength(string) {
  return string.length;
}

//題目二
function lowerCase(str) {
  return str.toLowerCase();
}

//題目三
function trimString(str) {
  return str.trim();
}

//題目四
function splitString(str) {
  return str.split(',');
}

//題目五
function getArea(str) {
  return str.slice(3, 6);
}

//string.length 取得字串長度

//查找字串
//1. string.indexOf(x) 輸出字串中指定文本首次出現的索引位置
//2. string.lastIndexOf(x) 輸出字串中指定文本最後出現的索引位置
//如果沒找到就輸出 -1
//可以有第二個參數，參數代表的是查找的起始位置
//string.indexOf(x,10) 代表從第10個索引位置開始「向後」查找 x 字串
//string.lastIndexOf(x,10) 代表從第10索引位置「向前」查找 x 字串

//3. search()
//可以輸入正規表達式，但沒有第二個參數

//==================================
//提取部分字串
//1.slice(start,end):提取指定位置的字串，不包含 end
//負值代表從尾巴往前數
//沒有第二個參數代表留下字串的剩餘部分

//2.substring(start,end)：不能接受負值
//3.substr(start,end)：第二個參數代表的是提取部分的長度
//沒有第二個參數代表留下字串的剩餘部分
//首個參數為負值，則從字串結尾開始計算位置

//==================================
//替換字串內容
//1. replace(targetString, replaceString)：僅替換首個相符的字串
//預設對大小寫敏感，可用表達式來執行大小寫不敏感 /xxx/i

//==================================
//轉換大小寫
//string.toLowerCase()
//string.toUpperCase()

//==================================
//連接字串
//string1.concat(string2,string3)

//==================================
//刪除多餘符號
//string.trim():刪除字串兩端的空白符號

//==================================
//提取字串
//1. charAt():指定索引位置，輸出指定字串
//2. charCodeAt():指定索引位置，輸出該字串的 unicode 編碼
//***3. string[n]：只能讀取，不能寫入！***

//==================================
//字串轉為矩陣
//1. string.split("")
