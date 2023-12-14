/**
 * 
 * Prototype giúp thêm thuộc tính và phương thức ngoài object contructor (Sau khi object contructor được tạo ra). Tất cả thuộc tính và phương thức được thêm thông qua prototype sẽ đều được lưu trong key proto.
 */

function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;       
}


User.prototype.address = 'SaiGon, VN'; // Thêm 1 thuộc tính (property) vào object contructor.
User.prototype.getName = function(){  // // Thêm 1 phương thức (method) vào object contructor.
         return `${this.firstName} ${this.lastName}`;
        }

// Vì User là object contructor nên tất cả các object được tạo ra từ User sẽ đều có thuộc tính address và phương thức getName(). Nhưng address và getName này là của prototype chứ ko phải của object. thuộc tính address và phương thức getName() của các object sẽ tham chiếu về prototype.address và prototype.getName() nên sẽ tốn ít bộ nhớ hơn để lưu object. 

// Nếu muốn truyền dữ liệu vào khi khởi tạo bằng tham số thì prototype ko làm được.
let user1 = new User('Son', 'son@gmail.com', 31) 
let user2 = new User('NoS', 'NoS@gmail.com', 23)

console.log('Property address của user1: ', user1.address);
console.log(user2);