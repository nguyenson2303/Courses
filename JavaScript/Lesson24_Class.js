/* 
// Cách viết thông thường (Contructor Function).
function Course(name, price){
   this.name = name;
   this.price = price;

   this.getName = function() {
    return this.name;
 }

   this.getPrice = function() {
    return this.price;
 }
}
*/
// Cách viết bằng Class. Có thể hiểu đơn giản Class là cách viết khác của Contructor Function.
class Course {
 constructor(name, price) {
  this.name = name;
  this.price = price;
 }

 getName() {
  return this.name;
 }

 getPrice() {
  return this.price;
 }
}

let javascript = new Course('JavaScript', 1000);
let pyton = new Course('Pyton', 500);

console.log(javascript);
console.log(pyton);