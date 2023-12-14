/** DOM Event
 * 1. Attribute events: dùng trực tiếp lên element (thẻ tag) bên html. (ko nên dùng cách này).
 * Sự kiện nổi bọt: Event của element con cũng sẽ ăn ra những element bên ngoài, element chứa nó (element cha).
 * 2. Assign event: Bên javascript tìm ra element bên muốn bắt event rồi gán cho nó các event mà muốn element lắng nghe. Sau đó, gán cho nó 1 function. Đoạn code trong function sẽ chỉ chạy khi bắt được event.
 * Lưu Ý: DOM Event sử dụng trong các trường hợp đơn giản khi muốn lắng nghe sự kiện và ko có nhu cầu gỡ bỏ đi sự kiện.
 */

let h1Element = document.querySelectorAll('h1');

for(let i = 0; i < h1Element.length; i++){
 // onclick: Sự kiện xảy ra khi click chuột vào Element.
 h1Element[i].onclick = function(e){// e là mouseEvent được trả về hay có thể hiểu là chính element lắng nghe event (trường hợp này e chính là h1Element, mà h1Element chính là thẻ 'h1' (ở dòng 7)) => vì vậy e chính là thẻ h1 được click vào. 
 console.log(e.target);}// target trả về chính element mà đang lắng nghe event này.
}

// Input Tag / Select Tag
let inputElement = document.querySelector('input[type="text"]');
let inputElement2 = document.querySelector('input[type="checkbox"]');
let inputElement3 = document.querySelector('select');
let inputValue;
// onchange: Sự kiện xảy ra khi value thay đổi so với value hiện tại và chỉ thực thi sau khi bỏ focus ở thẻ input. 
// oninput: Sự kiện xảy ra khi value thay đổi, thay đổi tới đâu event sẽ xảy ra tới đó (ko phải bỏ focus ở thẻ input).
inputElement.oninput = function (e) { // e là element xảy ra sự kiện oninput nên sẽ gọi CallBack. 
 inputValue = e.target.value;
}

inputElement2.onchange = function(e) {
 console.log(e.target.checked); // checked: kiểm tra tình trạng có đang check (true), ko check (false).
}

inputElement3.onchange = function(e) {
 console.log(e.target.value); // Select Tag trả về value của thẻ Option chứ ko phải textElement.
}

// onkeyup: Sự kiện xảy ra khi phím được nhả ra.
inputElement.onkeyup = function (e) {
  console.log(e.target.value);
}
// onkeydown: Sự kiện xảy ra khi phím được ấn xuống.
inputElement.onkeydown = function (e) {
  console.log(e.target.value);
}

// PreventDefault: Bỏ đi các sự kiện mặc định của Element.
console.log('------------------------------------------- Example 1 ---------------------------------------------');
let aElements = document.links;

 for(let i = 0; i < aElements.length; i++){
   aElements[i].onclick = function(e) {  
// startsWith: Sẽ kiểm tra xem chuỗi có được bắt đầu bằng một chuỗi con được cung cấp hay không.
      if (!e.target.href.startsWith('https://stockx.com')){
      e.preventDefault();     
    }   
  }
}
console.log('------------------------------------------- Example 2 ---------------------------------------------');
let ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e){
  e.preventDefault();
}

ulElement.onclick = function(e){
console.log(e.target);
}

// StopPropagation: Sử dụng để ngăn không cho sự kiện lan toả (nổi bọt) lên các Element cha.
let divElement = document.querySelector('div');
let buttonElement = document.querySelector('button');

divElement.onclick = function(){
  console.log('DIV');
}

buttonElement.onclick = function(e){
  e.stopPropagation();
  console.log('click me');
}





 
