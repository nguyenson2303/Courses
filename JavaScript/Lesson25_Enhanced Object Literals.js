/** 
Ba việc mà Enhanced Object Literals có thể làm dc:
  1. Định nghĩa key: value cho object.
  2. Định nghĩa method cho object.
  3. Định nghĩa key cho object dưới dạng biến.
 */

  let courseName = 'JavaScript';
  let price = 1000;

  let course = {
    courseName,        // Định nghĩa key : value cho object
   price,             // Định nghĩa key : value cho object
   getName() {        // Định nghĩa method cho object.
    return courseName;
   }
  };

console.log(course.getName());
console.log('----------------------------------------------------------------------------------------------------');

let fieldName = 'name';
let fieldPrice = 'price';

let courses = {
 [fieldName]: 'JavaScript',      // Định nghĩa key cho object dưới dạng biến.
 [fieldPrice]: '1000'            // Định nghĩa key cho object dưới dạng biến.
};
console.log(courses); // => Khi này bên browser sẽ hiển thị key của object là name và price chứ ko phải là fieldName và fieldPrice.