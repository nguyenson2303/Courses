/**
 * Các thuộc tính thường sử dụng của classList:
 * 1. Add: Thêm Class vào Element.
 * 2. Contains: Check xem class có nằm trong Element ko.
 * 3. Remove: Xóa Class khỏi Element.
 * 4. Toggle: Nếu có Class trong Element thì nó sẽ xóa. Còn ko có thì nó sẽ thêm Class vào
 */


let boxElement = document.querySelector('.box');
let boxElement2 = document.querySelector('.red');
let boxElement3 = document.querySelector('.box3');
let boxElement4 = document.querySelector('.blue');
let boxElement5 = document.querySelector('.box5');
console.log('------------------------------------------- Add -----------------------------------------------');
boxElement.classList.add('red');// Có thể thêm nhiều class. VD: boxElement.classList.add('red', 'blue', 'yellow');
console.log('---------------------------------------- Contains ---------------------------------------------');
console.log(boxElement.classList.contains('red'));// Kiểm tra xem element có class là 'red' hay ko.
console.log('------------------------------------------ Remove ---------------------------------------------');
setTimeout(() => { //setTimeout sau 3 giây (3000) sẽ thực thi đoạn code bên trong.
 boxElement2.classList.remove('red'); // Xóa (remove) class là 'red' (nếu như có, còn ko có class là 'red' thì thôi).
}, 3000);
console.log('------------------------------------------ Toggle ---------------------------------------------');
setTimeout(() => { //setTimeout sau 3 giây (3000) sẽ thực thi đoạn code bên trong.
 boxElement3.classList.toggle('blue');// Kiểm tra xem element có class là 'blue' ko. Nếu có thì sẽ xóa (remove) đi. Còn nếu ko có class = 'blue' thì sẽ thêm 'add' vào cho element.
}, 3000);

setTimeout(() => { //setTimeout sau 3 giây (3000) sẽ thực thi đoạn code bên trong.
 boxElement4.classList.toggle('blue');
}, 3000);

setInterval(() => {
 boxElement5.classList.toggle('blue');
}, 1000);




