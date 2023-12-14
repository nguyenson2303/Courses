// Object Constructor
// Cách tạo Object Constructor (function constructor):
function User(firstName, lastName, avatar) {   // Object Constructor có thể xem như một khuôn mẫu chung.
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;

        this.getName = function(){
         return `${this.firstName} ${this.lastName} ${this.avatar}`;
        }
}

let author = new User('Son', 'Nguyen', 'Avatar'); // Đối tượng được khởi tạo từ Contructor.
let user = new User('NoS', 'Nguyen', 'Avatar');   // Đối tượng được khởi tạo từ Contructor.
// Các object được tạo ra từ object constructor có cấu trúc như nhau và sẽ đều có các thuộc tính hoặc phương thức của object contructor đó. Sau khi tạo xong ta thêm các thuộc tính riêng cho từng object sẽ ko ảnh hưởng gì.
author.tittle = 'Hi! My name is Son'; // Thêm thuộc tính tittle cho object author.
user.comment = 'I am Nos, nice to meet you'; // Thêm thuộc tính comment cho object user.

console.log(author);
console.log(user);
console.log('-----------------------------------------------------------------------------------------------');
console.log(author.getName());
console.log(user.getName());

console.log('------------------------------------Javascript class trên ES6----------------------------------');
// Cách làm mới = class trên ES6
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;  
    }
 
    // Thêm Method vào class
getInfor() {
        return `${this.firstName} ${this.lastName}`;
    }
}
 
let person1 = new Person('Son', 'Nguyen');
let person2 = new Person('NoS', 'Nguyen');

person1.person1Method = 'Hi! My name is Son';
person2.person2Method = 'I am Nos, nice to meet you';

console.log(person1);
console.log(person2);
console.log('-----------------------------------------------------------------------------------------------');
console.log(person1.getInfor());
console.log(person2.getInfor());
