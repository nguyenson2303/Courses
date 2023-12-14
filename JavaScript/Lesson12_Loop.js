/** 1. For
 * Dùng để xây dựng các đoạn code lặp đi lặp lại.
 */

console.log('------------------------------------------- For -----------------------------------------------');
/**
 * Khi chương trình thực thi vế đầu tiên của for sẽ khởi tạo ra biến i và gán i = 1 (vế 1 sẽ chỉ thực thi duy nhất 1 lần). Sau đó sẽ tiếp tục thực thi vế thứ 2 của for, lúc này i đang = 1, 1 <= 10 là đúng nên sẽ thực thi đoạn code bên trong vòng lặp for. Sau khi thực thi xong đoạn code bên trong vong lặp for, chương trình sẽ tiếp tục thực thi vế thứ 3 của for nên sẽ tăng i lên 1 đơn vị. Sau đó chương trình tiếp tục quay về vế thứ 2 của for và kiểm tra điều kiện chứ ko phải vế 1 (vế 1 sẽ chỉ thực thi duy nhất 1 lần) và cứ thế tiếp tục theo trình tự cho đến khi ko còn đúng ở vế 2 nữa. 
 */
console.log('------------------------------------------- VD1 -----------------------------------------------');
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log('------------------------------------------- VD2 -----------------------------------------------');
let languages = ['JavaScript', 'C#', 'Pyton', 'React'];
let arrayLength = languages.length; // xác định độ dài mảng bên ngoài giúp tối ưu hơn cho for khi đặt languages.length vào điều kiện thứ 2 (vế thứ 2).
for(let i = 0; i < arrayLength; i++){
console.log(`languages[${i}] = ${languages[i]}`);
}

console.log('------------------------------------------- VD3 -----------------------------------------------');
let mangA = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10];
let max = mangA[0];
let min = mangA[0];
    for (let i = 1; i <= mangA.length; i++) {
        if(mangA[i] > max) {
            max = mangA[i] ;
        }
        if(mangA[i] < min){
            min = mangA[i];
        }
    }
    console.log(`Max: ${max} || Min: ${min}`);

/** 2. For..In
 * Dùng để lặp qua key của đối tượng, đối tượng có thể là array, object, string (lặp qua tất cả properties (thuộc tính) của một object). For in còn duyệt qua cả prototype của Object.
*/

console.log('--------------------------------------- For..In -----------------------------------------------');
console.log('------------------------------------------- VD1-Object -----------------------------------------------');
let myInfo = {
  name: 'Nguyen Son',
  age: 31,
  address: 'SaiGon, VN',
  phone: 0909999888
}

for (let key in myInfo) {
 console.log(`${key}: `, myInfo[key]); // bản thân key đang là string nên có thể truyền vào theo kiểu myInfo[key].
}

console.log('------------------------------------------- VD2-Array -----------------------------------------------');
let movies = ['Action', 'Romantic', 'Horror', 'Comedy'];
for (let key in movies) {
  console.log(`Index ${key} : ${movies[key]} Film`);
}

console.log('------------------------------------------- VD3-String -----------------------------------------------');
let myString = 'JavaScript';
for (let key in myString) {
  console.log(myString[key]);
}


/** 3. For..Of
 * Dùng để lặp qua value của đối tượng, đối tượng có thể là array, string. Ko thể dùng để lặp object (vì object ko phải là iterable objects).
*/

console.log('----------------------------------------- For..Of ---------------------------------------------');
console.log('------------------------------------------- VD1-Array -----------------------------------------------');
let students = [
 {name: 'Son', age: 31},
 {name: 'Ti', age: 20},
 {name: 'NoS', age: 25},
];

for(let value of students){
 console.log(value);
}

console.log('------------------------------------------- VD2-String -----------------------------------------------');
let myName = 'Hunter';
for (let value of myName) {
  console.log(value);
}

console.log('---------------------------------------- While ------------------------------------------------');
let myArray = ['JavaScript', 'C#', 'Pyton', 'React'];
let i = 0;
myArrayLength = myArray.length;
while(i < myArrayLength){
  console.log(`i[${i}] = `, myArray[i]);
  i++;
}

/**
 * Do-While: Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng.
 */
console.log('---------------------------------------- Do-While ---------------------------------------------');
let i2 = 0;
let isSuccess = false;
do{
  i2++;
  console.log('Nạp thẻ lần ' + i2);
  if (false)  // vd này gán cứng cho if là false. vì vậy đoạn code bên trong sẽ ko dc thực thi.
  isSuccess = true;
}
while(!isSuccess && i2 <= 3); // Nếu thỏa điều kiện (điều kiện đúng) thì sẽ tiếp tục quay lên do và tiếp tục thực thi.
 
// Khi thực thi break, chương trình sẽ thoát ra khỏi vòng lặp.
console.log('------------------------------------------ Break ----------------------------------------------');
for (let i=0; i<10; i++) {
  if(i>=5){
    break;
  }
    console.log(i);
}

// Khi thực thi continue, chương trình sẽ dừng lại ngay tại lúc đó và bỏ qua (ko thực thi) những đoạn code bên dưới continue và tiếp tục lặp lại lần tiếp theo.
console.log('---------------------------------------- Continous --------------------------------------------');
console.log('Các số lẻ:');
for (let i=0; i<10; i++) {
  if(i % 2 === 0){  // Nếu chia lấy dư cho 2 khác 0 (là số lẻ) thì sẽ thực thi continue và trở lên lên, tiếp tục xét điều kiện ở vế 2 rồi tiếp tục lặp, còn nếu chia lấy dư cho 2 = 0 (là số chẳn) thì sẽ ko thực thi continue. Vì vậy sẽ thực thi được đoạn code bên dưới và xuất ra i.
    continue;
  }
    console.log(i);
}

// Vòng lặp lồng nhau (Nested Loop)
console.log('---------------------------------------- Nested loop ------------------------------------------');
let myArray2 = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log('Mảng myArray2: ', myArray2);
// Luồng code: Đầu tiên thực thi vòng lặp for đầu tiên, khởi tạo biến i và gán = 0, sau đó kiểm tra điều kiện vế thứ 2 kết quả là đúng, thực thi đoạn code bên trong là vòng lặp for thứ 2, khởi tạo biến j và gán = 0, sau đó kiểm tra điều kiện vế thứ 2 kết quả là đúng, thực thi đoạn code bên trong là xuất ra phần tử của mảng tại vị trí đầu tiên [0],[0] myArray2[0][0] = 1. Sau đó, sẽ tăng j lên 1 và trở lên trên vế thứ 2 của vòng lặp for thứ 2 để kiểm tra điều kiện, lúc này j = 1 nên kết quả vẫn đúng vì vậy tiếp tục thực thi đoạn code bên trong là xuất ra phần tử của mảng tại vị trí kế tiếp [0],[1] myArray2[0][1] = 2. Sau đó, sẽ tăng j lên 1 và trở lên trên vế thứ 2 của vòng lặp for thứ 2 để kiểm tra điều kiện, lúc này j = 2 nên kết quả là sai nên iết thúc vòng lặp for thứ 2 và quay trở lên tiếp tục vòng lặp for đầu tiên là tăng i lên 1 đơn vị và cứ thế tiếp tục vòng lặp.
for (let i = 0; i < myArray2.length; i++){
  for (let j = 0; j < myArray2[i].length; j++){ // phần tử bên trong của mảng cũng là mãng, myArray2[i].length là chiều dài của mảng đầu tiên trong mảng cha (myArray2).
    console.log(myArray2[i][j]);
  }
}
