/*
Callback là hàm được truyền qua đối số và được gọi lại trong hàm nhận đối số. Hàm trong javascript là một object nên ta có thể truyền hàm này vào hàm khác dưới dạng một tham số. Ta sẽ truyền callback function vào các hàm xử lý sự kiện và hàm xử lý bất đồng bộ.
*/

function myFunction(param, value) {
    if (typeof param === 'function'){  // Check xem có phải là function
    param(value);                  
    }
};

function myCallback(value){
    console.log('Value: ', value)
};

myFunction(myCallback, 'Hello, World!!!');

console.log('-----------------------------------------------------------------------------------------------');


console.log('-----------------------------------------------------------------------------------------------');
let arrays = ['Nguyen', 'Ngoc', 'Son', 'JavaScript'];
// Lặp qua từng phần tử và xử lý trong hàm callback
arrays.forEach(function (eachName, index){
    console.log(`index:  ${index}  |  name:  + ${eachName}`); 
}
);
