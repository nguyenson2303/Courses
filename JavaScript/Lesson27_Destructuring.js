// Destructuring là phân tách dùng trong object và array.
console.log('--------------------------------------- Destructuring Array ------------------------------------------');
let arrays = ['JavaScript', 'Pyton', 'C#'];
let [a, , c] = arrays;  // // a, c là tên biến tự đặt và vẫn phải code dấu phẩy và để trống vị trí của array[1] là Pyton, nếu ko lúc này biến c sẽ là Pyton chứ ko phải là C#.
console.log(a,c); // => Kết quả là JavcaScript C#.
console.log('----------------------------------------------------------------------------------------------------');

console.log('--------------------------------------- Destructuring Object -----------------------------------------');
let cars = {carName: 'BMW', carPrice: 1000};
let {carName, carPrice} = cars;  // Vì là object nên tên biến phải đúng với tên key của object chứ ko được tự đặt như array.
console.log(carName, carPrice); 

console.log('---------------------------------- Destructuring và Rest Object 2 ------------------------------------');
/**
 * Làm cách bình thường:
function logger(obj) {
console.log(obj.name); 
console.log(obj.price);
}
logger({
    name: 'Toyota',
    price: 500,
    description: 'Description Content'
});
 */
// Cách làm khác: 
function loggerObject({name, price, ...param}) { // Nếu bik trước tham số truyền vào là object rồi thì truyền thẳng object vào lun.
console.log(name); // ko cần phải biến tham số.name như cách bình thường ở trên.
console.log(price); // ko cần phải biến tham số.price như cách bình thường ở trên.
console.log(param); // rest được đặt tên là param này sẽ trả về phần còn lại là => 'Description Content'.
}
loggerObject({
    name: 'Toyota',
    price: 500,
    description: 'Description Content'
});

console.log('------------------------------------------- Rest Array -----------------------------------------------');
// Rest: dùng kết hợp với Destructuring để lấy những phần còn lại trong object và array và dùng để định nghĩa tham số.
let arrays2 = ['Jordan 1', 'Jordan 2', 'Jordan 3'];
let [j1, ...rest] = arrays2;  // j1 là tên biến tự đặt.
console.log(j1); // => Kết quả là Jordan 1.
console.log(rest); // => Kết quả là phần còn lại của mảng arrays2 trừ j1 ra là Jordan 2, Jordan 3.

console.log('------------------------------------------- Rest Object ----------------------------------------------');
let course = {
 name: 'JavaScript',
 price: 1000,
 image: 'image-address',
};

let {price, ...rest2} = course;
console.log(price);
console.log(rest2);
console.log('----------------------------------------------------------------------------------------------------');

console.log('-------------------------------------- Rest Object in Object -----------------------------------------');
let jordan = {
 series: 'Jordan',
 cost: 180,
 photo: 'Image-Address',
 jordan1: { // Jordan1 là object con trong object jordan.
  series: 'Jordan 1'
 }
};

let {series: parentSeries, jordan1: {series: childrentSeries}} = jordan;  // Vì key series của jordan và jordan1 là giống nhau nên sẽ bị trùng nên phải đặt lại tên cho property của object jordan hoặc jordan 1 để ko bị trùng. Khi đổi tên key rồi thì tên biến khi dùng sẽ là tên key mới đổi chứ nếu dùng tên key cũ sẽ ko tồn tại. 
console.log(parentSeries);
console.log(childrentSeries);

console.log('----------------------------- Rest Object lấy ra Value ko được định nghĩa ----------------------------');
let Yeezy = {
 yeezyName: 'Yeezy 700',
 cost: 300,
 photo: 'Image-Address',
 
};

let {yeezyName, description = 'Default Description'} = Yeezy; // Nếu description được định nghĩa thì sẽ hiển thị ra value đó, còn nếu như description ko được định nghĩa thì sẽ hiển thị ra value mặc định.
console.log(yeezyName);
console.log(description);
console.log('------------------------------------------------------------------------------------------------------');

// Sử dụng trong việc định nghĩa tham số.
console.log('----------------------------------------- Rest Parameters --------------------------------------------');
function logger(...params) { 
 console.log(params); // hơi giống Arguments nhưng kết quả trả về ko phải Arguments mà là Array.
}
console.log(logger(1, 2, 3, 4, 5, 6, 7, 8));
