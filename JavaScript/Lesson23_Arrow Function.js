// Nếu Function chỉ có duy nhất 1 tham số thì có thể bỏ lun ngoặc () của tham số đó đi.
console.log('------------------------------------------------- VD1 ------------------------------------------------');
const logger = log => console.log(log); // (log) là tham số duy nhất nên có thể bỏ dấu () đi nên chỉ còn là log.
logger('Message...');

/********************************************************************************************************************/
// Trường hợp return trực tiếp ra a + b luôn.
console.log('------------------------------------------------- VD2 ------------------------------------------------');
const sum = (a, b) => a + b; // <=> Tương đương với const sum = function (a, b) { return a + b; } do tham số a và b dùng để tính toán và return ra trong 1 dòng nên có thể rút ngắn thành => a + b. Nếu đằng sau dấu => có ngoặc nhọn {} thì sẽ ko return ra dấu ngoặc nhọn và được hiểu đây là 1 scope của Function mà phải dùng từ khóa return. Còn nếu đằng sau dấu => ko có ngoặc nhọn {} sẽ được hiểu là return luôn. 
console.log(sum(1, 2));

/********************************************************************************************************************/
// Trường hợp return trực tiếp ra object luôn.
console.log('------------------------------------------------- VD3 ------------------------------------------------');
const object = (a, b) => ({a: a, b: b}); // Như đã nói ở trên sau dấu => nếu là dấu {} thì nó sẽ hiểu đó là 1 scope của Function nên sẽ ko hiểu dc đó là object. Vì vậy phải gom vào trong ngoặc tròn ().
console.log(object('myObject1', 'myObject2'));

/********************************************************************************************************************/
console.log('------------------------------------------------- VD4 ------------------------------------------------');
const course = {
 name: 'JavaScript',
 getName: function() {
  return this.name; // this ngay lúc này được hiểu là thằng gọi đến phương thức getName() => this là course. Trường hợp này this sẽ được hiểu là 1 context. Nếu như dùng this trong cách viết arrow function thì sẽ sai vì Arrow Function ko có context => ko nên dùng (vẫn có thể viết được) nhưng ko nên dùng vì có thể sai.
 }
};
console.log(course.getName()); 

// ko nên dùng Arrow function để làm Contructor Function vì có thể sai. bản thân function contructor khi chạy sẽ tự động ngầm gọi đến this. Như đã nói trên ko nên dùng this trong arrow function.
console.log('------------------------------------------------- VD5 ------------------------------------------------');
const shoes = function(name, price) {
 this.name = name;
 this.price = price;
};

const jordanShoe = new shoes('Jordan', 180);
console.log(jordanShoe);
