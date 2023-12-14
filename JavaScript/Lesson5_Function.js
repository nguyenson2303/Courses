/*
*Hàm là 1 khối mã dùng để làm 1 việc vụ thể.
*Hàm sẽ ko được thực thi khi định nghĩa.
*Hàm sẽ thực thi khi được gọi.
*Hàm có thể nhận tham số.
*Hàm có thể trả về 1 giá trị.

  ***Cứu pháp khai báo của hàm:
function functionName(input 1, input 2, ...) {
 ////////CODE
 return functionName;
}
  ***Thực thi hàm:
  functionName(parametert 1, parameter 2, ...)
*/
// Ví dụ: Tính diện tích tam giác : S = a(cạnh đáy) * h(chiều cao) / 2
console.log('-------------------------------------------- Example 1 ------------------------------------------------');
function dientichtamgiac(a, h) {
 return a * h / 2;
}

let result = dientichtamgiac(10,5);
console.log('Dien tich hinh tam giac: ',result);

/*
 * Arguments?
 * Arguments là 1 tập hợp giống với array chứa các đối số đã truyền vào hàm. 
 * Arguments chỉ có thể sử dụng trong function, cũng ko thể sử dụng trong arrow function.
 */
console.log('-------------------------------------------- Arguments ------------------------------------------------');
function writelog1() {   
  console.log(arguments); //arguments lúc này là 1 tập hợp đang chứa các tham số là: 'test1', 'test2', 'test3'.
}; 
writelog1('test3', 'test1', 'test5'); // 3 đối số

// Arguments là 1 object, giống 1 array, khi vòng for chạy sẽ lấy phần tử đầu tiên trong arguments này rồi gán cho biến param và sau đó sẽ chạy vào đoạn code được viết bên trong for. Sau khi chạy xong sẽ tiếp tục quay lại lên trên và tiếp tục lấy phần tử tiếp theo của mảng arguments gán cho biến param, cứ thế đến hết.
console.log('-------------------------------------------- For Of --------------------------------------------------');
function writelog2() {  // ko cần truyền vào tham số, bao nhiêu cũng nhận.
  for (let param of arguments) {  
    console.log(param);
  }
};
writelog2('log1', 'log2', 'log3'); 
// Khi function đặt trùng tên, thì function định nghĩa sau sẽ ghi đè function định nghĩa trước.

/*
* Các loại function:
* 1. Declaration function. Có thể gọi trước khi định nghĩa (Hosting).
* function myFunction() {//CODE}
* 2. Expression function.
* let myFunction = function() {//CODE} 
* setTimeout(function(){//CODE})
* let myObject = {
  myFunction: function(){//CODE}
}
*/

/**
 * Closures: Chỉ xảy ra khi function chứa function, bình thường khi function cha chạy xong sẽ xóa mất biến trong nó, như vậy thì function con ko thể dùng biến của funciton cha nữa => Vì vậy lúc này khái niệm Closures phát huy tác dụng là giúp giữ lại biến của function cha.
 *** Lưu ý: là function con không thể gọi object arguments của function cha.
 */
 
// Khi gán 1 function (hàm) vào 1 object thì sẽ thành method (phương thức) của object
console.log('------------------------------------------------------------------------------------------------')
let Student = {
 name: 'Son',
 age: 31,
 born: 'HCM',
 speak: function(){
  console.log('Hello, how are you?');
 }
};

let stdSpeak = Student.speak();
console.log(stdSpeak);

console.log('------------------------------------------------------------------------------------------------')
let mySelf = {
 name: 'Son',
 weight: 65,
 age: 31,
 born: 'HCM',
 infomation: function(){
  return ['Name: ' + this.name, 'Weight: ' + this.weight + 'kg'];
 },
 
 eat: function(food) {
  return this.weight = this.weight + food.weight + 'kg';
 }
};

let phoga = {weight: 3};

let myInfomation = mySelf.infomation();
mySelf.eat(phoga);
console.log(myInfomation);
console.log('My Weight After Eating Pho: ',mySelf.weight);

