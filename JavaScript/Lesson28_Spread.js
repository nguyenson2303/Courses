// Spread: Dùng khi gọi đến hàm rồi truyền đối số hoặc dùng để rãi vào trong 1 array hoặc 1 object khác.
let arrays = ['JavaScript', 'Pyton', 'C#'];
let arrays2 = ['React', 'Ruby'];
// Hiểu đơn giản khi rãi dấu 3 chấm (...) trước 1 Array hay Object thì nó sẽ bỏ đi dấu ngoặc [] của Array và {} của Object.
let arrays3 = [...arrays2, ...arrays];
console.log(arrays3);

// Nếu 2 Object trùng key (có key giống nhau) thì sẽ bị ghi đè.key của object đưa vào trước sẽ bị ghi đè bởi object đưa vào sau.
console.log('----------------------------------------------------------------------------------------------------');
let object = {
 name: 'JavaScript',
};
let object2 = {
 price: 1000,
}
let object3 = {
 ...object,
 ...object2
};
console.log(object3);

console.log('----------------------------------------------------------------------------------------------------');
let sneakerArrays = ['Jordan 1', 'Jordan 3', 'Jordan 4'];
function logger(rest) {
 for(let i = 0; i < rest.length; i++) {
  console.log(rest[i]);
 }
}
logger(sneakerArrays);