/* Tam thức (toán tử 3 ngôi)
 ** Cú Pháp: condition ? exprIfTrue : exprIfFalse
 _ condition: Một biểu thức có giá trị được sử dụng như một điều kiện.
 _ exprIfTrue: Một biểu thức được thực thi nếu condition trả về true.
 _ exprIfFalse: Một biểu thức được thực thi nếu condition trả về false.
*/

let game = {
 name: 'Pokemon',
 price: 60
}

let result = game.price > 0 ? `${game.price} USD` : 'Free';
console.log(result);

console.log('-----------------------------------------------------------------------------------------------');

let a = 4;
let b = 10;

let max = a > b ? a : b;
console.log(max);