let boxElement = document.querySelector('.box');
let boxElement2 = document.querySelector('.box2');
// Thêm style cho Element (giống như làm css nhưng mà làm bên js). Cách dài dòng.
boxElement.style.width = '100px';
boxElement.style.height = '100px';
boxElement.style.backgroundColor = 'red';
// 
// Object.assign: thêm style cho element cách ngắn gọn. object.assign nhận vào 2 tham số: đầu tiên là object muốn thêm style, tham số thứ 2 là 1 object muốn hợp nhất (gọp vào) object ban đầu ở tham số đầu tiên.
Object.assign(boxElement2.style,{
 width: '200px',
 height: '200px',
 backgroundColor: 'blue'
});
// Get thuộc tính style trong 1 Element Style => trả về giá trị của thuộc tính backgroundColor của boxElement2 thông qua style. Nếu ko thông qua style thì sẽ ko được.
console.log(boxElement2.style.backgroundColor);