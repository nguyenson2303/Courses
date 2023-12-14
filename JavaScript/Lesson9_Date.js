// Khi muốn truy xuất vào các phương thức của đối tượng Date, ta cần khởi tạo 1 đối tướng date.
// Khởi tạo:
let date = new Date();

let year = date.getFullYear(); // Trả về số năm hiện tại.
let month = date.getMonth() + 1; // Trả về số tháng hiện tại, nhưng số tháng bắt đầu từ 0 vì vậy phải cộng thêm 1.
let day = date.getDate(); // Trả về số ngày hiện tại.
let hour = date.getHours(); // Trả về số giờ hiện tại
let minute = date.getMinutes(); // Trả về số phút hiện tại
let second = date.getSeconds(); // Trả về số giây hiện tại

console.log('Trả về số ngày hiện tại: ', day);
console.log('Trả về số tháng hiện tại: ', month);
console.log('Trả về số năm hiện tại: ', year);
console.log('Trả về số giờ hiện tại: ', hour);
console.log('Trả về số phút hiện tại: ', minute);
console.log('Trả về số giây hiện tại: ', second);

console.log(`Thời gian hiện tại là: ${day}/${month}/${year} và ${hour} giờ ${minute} phút ${second} giây`);