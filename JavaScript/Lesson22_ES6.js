/*
1. Var / Let / Const 
_Khác biệt giữa Var với Let và Const: Scope (Tầm vực, nếu ra khỏi scope sẽ không dùng được nữa), chỉ let và const có scope, Hosting (Tự động đưa khai báo của Var lên trên đầu).

* Example 1: if (true) {
     let myString = 'Hello !!!';
}
console.log(myString);  // Trường hợp này sẽ báo lỗi do myString được khai báo với let nên ko thể sử dụng được bên ngoài scope if, tương tự khai báo với const cũng sẽ báo lỗi.

* Example 2: if (true) {
     var myString = 'Hello !!!';
}
console.log(myString);  // Trường hợp này hợp lệ do myString được khai báo bằng var, mà var là global nên có thể sử dụng cả bên ngoài scope.

_Khác biệt giữa Const với Var và Let: Assignment (Việc gán lại giá trị cho biến). Const ko thể gán lại giá trị lần nữa (ko thể sử dụng toán tử gán lần 2) cho chính thằng Const đó.

* Example 1: 
     const a = 5;
     a = 6;  // Trường hợp này sẽ báo lỗi do a đã bị gán lại giá trị lần 2.

* Example 2:
     const b = {name: 'JavaScript'};
     a.name = 'C#'; // Trường hợp này hợp lệ do gán lại thuộc tính name của object b chứ ko phải gán lại b.

* Example 3:
     const c = 'JavaScript';
     {
          {
               const c = 123;
               console.log(c);  // Trường hợp này hợp lệ do const c nằm khác loop và console.log(c) sẽ ưu tiên loop gần nhất nên kết quả là => 123 chứ ko phải Javascript.
          }
     }  
_Chỉ có Var là có Hosting.

* Example 1: 
d = 1;  // Khởi tạo biến d.   
let d; // Khai báo biến d.
console.log(d);     // Trường hợp này sẽ báo lỗi do d chưa được khai báo nên ko thể khởi tạo. Phải khai báo trước khi khởi tạo.  

* Example 2: 
e = 1;     
var e; 
console.log(e);  // Trường hợp này hợp lệ do khai báo bằng var, var có hosting. Nghĩa là khi chạy, biến được khai báo bằng var dù ở vị trì nào thì cũng sẽ được chuyển lên vị trí trên cùng.   
*/     


