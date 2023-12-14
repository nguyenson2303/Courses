// Khai báo và định nghĩa 1 object

// Function của 1 object được gọi là method (phương thức) của object và các key khác được gọi là Property (thuộc tính).

// Thêm Keys và Values vào object thông qua biến

let phoneKey = 'phone';

let myInfo = {
  name: 'NguyenSon',
  age: 31,
  address: 'SaiGon,VN',
  [phoneKey]: '0902800252' // Nếu bỏ ngoặc vuông, chương trình sẽ hiểu nguyên tên là phoneKey khi biên dịch chứ ko phải là phone.
};

// Thêm Keys và Values vào sau khi Object đã được tạo
console.log('------------------------ Thêm Keys và Values vào sau khi Object đã được tạo ---------------------------');
myInfo.email = 'nguyenson@gmail.com'; // hoặc có thể làm:   myInfo['email'] = 'nguyenson@gmail.com';
console.log(myInfo);

// Get address thông qua biến myKey
console.log('-------------------------------- Get address thông qua biến myKey -------------------------------------');
let addressKey = 'address';
console.log('Địa chỉ là: ',myInfo[addressKey]); // Chú ý: ko truyền vào addressKey ở dạng string. Vì khi đó sẽ hiểu là đang tìm key có tên là addressKey của object myInfo

// Xóa Keys và Values của object
console.log('------------------------------------ Xóa Keys và Values của object ------------------------------------');
console.log('Object trước khi xóa: ', myInfo);
delete myInfo.address;
delete myInfo.age;
console.log('Object sau khi xóa Address và Age: ', myInfo);

/*
  Set là một loại object cho phép lưu trữ dữ liệu một cách duy nhất, không trùng lặp.
  ** Thế nào là duy nhất, không trùng lặp?
  Đơn giản là "giá trị" của các phần tử không được giống nhau. Thực chất, Set sử dụng thuật toán === để so sánh giá trị các phần tử.
*/ 
console.log('------------- Từ mảng gốc lấy ra các phần tử ko đc trùng nhau mà ko dc dùng các hàm có sẵn ------------');
let array = [1, 2, 3, 4, 5, 3, 4, 1];
console.log('Mảng gốc: ',array);
console.log('Mảng mới: ',[...(new Set(array))]);

