/**
 * Toán tử trong Javascript:
 * 1. Toán tử số học (Arithmetic)
 * Cộng(+), trừ(-), nhân(*), lũy thừa(**), chia(/), chia lấy dư(%), tăng 1 giá trị(++), giảm 1 giá trị(--)
 * Tăng/giảm 1 đơn vị sẽ có 2 kiểu là tiền tố(++a) và hậu tố(a++)
 * Mức đô ưu tiên trong toán tử số học: Tăng/giảm 1 đơn vị => Trong ngoặc() = > Nhân/chia => Cộng/trừ => Trái qua phải.
 * 2. Toán tử gán (Assignment)
 * Bằng(=), Cộng bằng(+=), trừ bằng(-=), nhân bằng(*=), chia bằng(/=), lũy thừa bằng(**=), 
 * example: let fullName = 'Nguyen Son'; hoặc let Maximum = 20;
 * 3. Toán tử so sánh (Comparison)
 *Bằng(==), không bằng(!=), lớn hơn(>), nhỏ hơn(<), lớn hơn hoặc bằng(>=), nhỏ hơn hoặc bằng(<=). Toán tử so sánh trả về giá trị kiểu boolean là True hoặc False. Có 6 giá trị mà convert sang boolean sẽ trả về false: 
 ** 1. số 0
 ** 2. false
 ** 3. chuỗi rỗng '', ""
 ** 4. undefined
 ** 5. NaN      => Not a Number
 ** 6. Null     => nothing
 * example: let a = 5; if (a==0) => run Code hoặc let b = 2; let c = 3; if (b<c) => run Code.
 * 4. Toán tử Logic (Logical)
 * Và(&&): Phải thỏa tất cả các điều kiện.
 * Hoặc(||): Chỉ cần có 1 điều kiện thỏa.
 * Không(!): Phủ định lại điều kiện.
 * example: let a = 23; if(a>0 && a==23) => run Code hoặc let a = 3; if(a==23 || a==3) => run Code hoặc let a = true; if(!a) => false.
 * 
 * Kiểu dữ liệu trong Javascript (Kiểu giá trị)
 * 1. Kiểu dữ liệu nguyên thủy (Primitive Data): Number, string, boolean, undefined, null, symbol 
 * Kiểu number: let a = 2, b = 3.
 * Kiểu string: let name = 'Son Nguyen'.
 * Kiểu boolean: let isSuccess = true.
 * Kiểu undefined: let a; let b;   a và b được khai báo nhưng không gán giá trị nên là undefined.
 * Kiểu null: let isNull = null;   Có thể hiểu null là nothing.
 * 
 * 2. Kiểu dữ liệu phức tạp (Complex Data) (Kiểu tham chiếu): Function, Array, Object.
 * Kiểu function: let myFunction = function() {
 * alert('Hello world.');
 * }
 * myFunction();      // Gọi hàm function để sử dụng.
 * 
 * Kiểu Array: let myArray = ['JavaScript', 'C#', 'PHP'];
 * Kiểu Object: let myObject = {
 * name: 'Son Nguyen',
 * age: 31,
 * city: 'SaiGon'
 * myFunction: function(){}
 * };
 */

// Kiểu giá trị sẽ lưu trực tiếp giá trị vào ô nhớ stack.
 console.log('------------------------------------ Kiểu giá trị/ tham trị ------------------------------------------');
 let kieugiatri1 = 3; 
 let kieugiatri2 = kieugiatri1;
 kieugiatri1 = 23; // => lúc này kieugiatri1 đã đổi thành 23, còn kieugiatri2 vẫn là 3 (Ko bị thay đổi theo kieugiatri1).

// Kiểu tham chiếu sẽ lưu giá trị ở ổ nhớ heap và lưu địa chỉ tham chiếu đến nơi lưu giá trị đó bên heap ở ô nhớ stack.
console.log('---------------------------------------- Kiểu tham chiếu ----------------------------------------------');
const kieuthamchieu1 = {name:'Son'}; 
const kieuthamchieu2 = kieuthamchieu1;
kieuthamchieu1.name = 'NoS'; // => lúc này giá trị thuộc tính name của kieuthamchieu1 đã đổi thành NoS, và kieuthamchieu2 cũng sẽ bị đổi theo do cùng tham chiếu đến  1 ô nhớ.

console.log('------------------------------ Truyền tham số kiểu giá trị/ tham trị ----------------------------------');
let numberValue = 3;
console.log(`Value before increase ${numberValue}`);
increaseValue(numberValue);
console.log(`Value after increase ${numberValue}`); // => lúc này numberValue sau khi gọi hàm increaseValue() để tăng lên 1 đơn vị vẫn sẽ là 3, do khi numberValue được đưa vào hàm để sử dụng, nó đã được copy ra 1 ô nhớ khác và chương trình sẽ lấy giá trị mới được copy ra để sử dụng chứ ko phải sử dụng giá trị được lưu trực tiếp ở ô nhớ gốc ban đầu. Vì vậy, khi hàm kết thúc giá trị đó cũng bị xóa theo.
function increaseValue(myValue) {
    myValue++;
    console.log(myValue); // console.log sẽ ra 4 nhưng khi hàm kết thúc giá trị này cũng bị xóa.
};

console.log('-------------------------------- Truyền tham số kiểu tham chiếu ---------------------------------------');
let keyValue = {name: 'Son'};
console.log('name before change: ', keyValue);
changeName(keyValue);
console.log('name after change: ', keyValue);  // => lúc này thuộc tính name của keyValue gọi hàm changeName() để đổi giá trị của key name, khi keyValue được đưa vào hàm để sử dụng, nó đã được copy ra 1 ô nhớ khác và chương trình sẽ lấy giá trị mới được copy ra để sử dụng, nhưng khác kiểu giá trị, kiểu tham chiếu lưu địa chỉ tham chiếu chứ ko phải lưu giá trị. Vì vậy, có copy ra ô nhớ khác thì cũng đều tham chiếu về 1 ô nhớ gốc ban đầu. Thế nên giá trị của name đã bị đổi từ 'Son' thành 'NoS'.
function changeName(myName) {
    myName.name = 'NoS';
};

// Muốn tạo ra 1 object mới giống với object gốc nhưng ko tham chiếu chung 1 ô nhớ thì ta clone ra 1 object mới
console.log('-------------------------------- Clone object ko còn cùng tham chiếu ----------------------------------');
let cloneValue1 = {name: 'Son'};
let cloneValue2 = {...cloneValue1}; // Biến cloneValue2 tạo ra 1 ô nhớ mới và có tất cả các giá trị của cloneValue1. Ý nghĩa của dấu 3 chấm (...cloneValue1) là bỏ vào ô nhớ mới toàn bộ giá trị của biến cloneValue1.
cloneValue1.name = 'Nos'
console.log('cloneValue2 là: ', cloneValue2.name);

// Tăng/giảm 1 đơn vị tiền tố và hậu tố.
console.log('--------------------------------------- Tiền tố -----------------------------------------------');
let a = 3;
let output1 = ++a; // a sẽ được tăng lên 1 đơn vị sau đó gán vào output1 ngay tại dòng code này.
console.log(`output:`,output1); // => output1 = 4;
console.log('--------------------------------------- Hậu tố -----------------------------------------------');
let b = 3;
let output2 = b++; // b sẽ được gán vào output2 ngay tại dòng code này. Sau đó, mới tăng b lên 1 đơn vị. 
console.log(`output:`,output2); // => output2 = 3;
console.log('--------------------------------------- Example -----------------------------------------------');
let number1 = 3;
let outputnumber1 = number1++ + --number1;
console.log(`outputnumber1:`,outputnumber1);
/*
output = 3 + --4. => lúc này toán tử đầu tiên (++number) đã hoàn thành, nên giá trị lúc này của number là = 4, (--number) lúc này = --4. => kết quả cuối cùng 3 + 3 = 6
*/
console.log('--------------------------------------- Example 2-----------------------------------------------');
let number2 = 6;
let outputnumber2 = ++number2 * 2 - number2-- * 2; 
/*
 * 7 * 2 - 7 * 2
 * 14 - 7 * 2
 * 14 - 14 = 0
*/
console.log(`outputnumber2:`,outputnumber2);

console.log('--------------------------------------- Toán tử gán -----------------------------------------------');
console.log('Cộng chuỗi.')
let myName = 'Son';
 myName += ' Nguyen';
console.log(myName);

console.log('--------------------------------------- Toán tử so sánh -----------------------------------------------');
let num1 = 3, num2 = 2;
if(num1!==num2){
    console.log(num1 > num2 ? 'num1 lớn hơn num2' : 'num1 nhỏ hơn num2'); // Toán tử 3 ngôi
    }else{
    console.log('num1 bằng num2');
}

console.log('--------------------------------------- Toán tử so sánh vd2 -----------------------------------------------');
let A = 2, B = 3, C = 91;  
let result = A && B && C;   // Chương trình sẽ kiểm tra từ trái sang phải, nếu điểu kiện ko thuộc 6 giá trị convert sang false (0, false, "", undefined, NaN, Null) thì sẽ tiếp tục kiểm tra sang điều kiện kế tiếp, cứ như vậy đến kết thúc, giá trị của phần tử cuối cùng sẽ được gán cho vế bên trái. VÌ vậy kết quả trả về là 91.
console.log(result); // => result = 91.

console.log('--------------------------------------- Các phép toán -----------------------------------------');
/*
  Mức độ ưu tiên là : ++, --, nhân chia trước
*/
console.log('++ đặt trước số: ');
let a1 = 5;
let b1 = ++a1 + 3;  // 6 + 3. Do ++ đặt trước a nên ngay lúc này a đã thay đổi thành 6. ++a sẽ tăng ngay và luôn
console.log(b1);  // Kết quả b = 9

console.log('++ đặt sau số: ');
var a2 = 5;
var b2 = a2++ + 3;  // 5 + 3. Do ++ đặt sau b nên ngay lúc này a vẫn là 5. a++ sẽ tăng giá trị của a lên một đơn vị sau khi kết thúc dòng lệnh.
console.log(b2);  // Kết quả b = 8

console.log('độ khó nâng cao: ');
var a3 = 5;
var b3 = a3++ + ++a3; // 5 + ++6 => 5 + 7 = 12;
console.log(b3);    // Kết quả b = 12;

// Số Pi
console.log('--------------------------------------- Math.PI -----------------------------------------------');
console.log(Math.PI);

// Làm tròn số trên hoặc dưới tùy vào số thập phân. 3.49 sẽ = 3 | 3.5 sẽ = 4.
console.log('--------------------------------------- Math.round() ------------------------------------------');
console.log(Math.round(1.5));

// Giá trị tuyệt đối
console.log('--------------------------------------- Math.abs() --------------------------------------------');
console.log(Math.abs(-3)); // => Giá trị tuyệt đối của -3 là 3. 

// Làm tròn lên
console.log('--------------------------------------- Math.ceil() -------------------------------------------');
console.log(Math.ceil(3.1)); // => 3,1 làm tròn lên sẽ = 4. 

// Làm tròn xuống
console.log('--------------------------------------- Math.floor() -------------------------------------------');
console.log(Math.floor(3.8)); // => 3,8 làm tròn xuống sẽ = 3.

// random trả về 1 số ngẫu nhiên giữa 0 (bao gồm) và 1 (ngoại trừ) và sẽ ko bao gồm số 1.
console.log('-------------------------------------- Math.random() ------------------------------------------');
console.log(Math.floor(Math.random() * 10)); // tạo ra 1 số ngẫu nhiên từ 0 đến 9. Muốn từ 0 đến 10 thì kết hợp thêm làm tròn.

console.log('----------------------------------- Example Math.random() -------------------------------------');
let random = Math.floor(Math.random() * 5); // bonus có 5 phần tử nên muốn tạo ra 1 số từ 1 - 4. nhân 5 để tạo ra 1 số thập phân ngẫu nhiên từ 1 - 4. Sau đó làm tròn dưới sẽ ra các số ngẫu nhiên từ 1 - 4
console.log(random);
let bonus = [
 '10 coin',
 '30 coin',
 '50 coin',
 '70 coin',
 '90 coin',
];
console.log(bonus[random]);

// Trả về giá trị nhỏ nhất
console.log('-------------------------------------- Math.min() ------------------------------------------');
console.log(Math.min(-23, 0, 1, 10, 23, 50)); 

// Trả về giá trị lớn nhất
console.log('-------------------------------------- Math.max() ------------------------------------------');
console.log(Math.max(-23, 0, 1, 10, 23, 50)); 

let result1 = 20 / 5;
let numbera = 23;
let PI = 3.14;
console.log('-------------------------------------- isNAN() ------------------------------------------');
console.log(isNaN(result1)); // isNaN() dùng để kiểm tra xem phần tử có phải là kiểu NaN (Not a Nssumber) ko.
console.log('-------------------------------------- toString() ------------------------------------------');
console.log(numbera.toString()); //  toString() dùng để đổi phần tử sang kiểu string.
console.log('-------------------------------------- toFixed() ------------------------------------------');
console.log(PI.toFixed(1)); // toFixed() dùng để làm tròn số giống Math.round() nhưng sẽ trả về kiểu string chứ ko phải number. Giá trị sau dấu thập phân sẽ lấy theo tham số truyền vào. Nếu ko truyền tham số mặc định sẽ là 0. PI.toFix(1) => sẽ trả về 3,1 chứ ko phải 3 hay 3,14.

