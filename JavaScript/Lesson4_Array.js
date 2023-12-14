/*-------------------------------------------------- Array Method ---------------------------------------------------*/
console.log('----------------------------------------Array concat()-----------------------------------------');
/* array.concat(): Hàm concat dùng để nối các mảng lại với nhau thành một mảng mới. Hàm concat sẽ không thay đổi mảng hiện tại, nhưng nó sẽ trả về một mảng mới bao gồm giá trị của các mảng được truyền vào 

   Cú pháp: array1.concat(array2, array3, ..., arrayX)    

** Công dụng của hàm này khá đơn giản, đó là gộp nhiều mảng lại với nhau.
*/

let a = [3, 5, 9];
let b = [2, 4, 6];
let c = a.concat(b);
console.log(c);
console.log(`Mảng ban đầu: ${a}`);

console.log('----------------------------------------Array push()--------------------------------------------');
/* array.push(): Thông thường, muốn thêm một phần tử vào mảng thì phải gán số index cho phần tử cần thêm đó. Trường hợp index đó đã tồn tại trong mảng thì đó sẽ là một thao tác cập nhật chứ không phải là thêm mới. Hơn nữa, rất khó để kiểm soát được những index nào đã tồn tại. Vì vậy, ta thường thêm phần tử vào vị trí cuối cùng bằng cách sử dụng hàm push() trong js.

   Cú pháp: array.push(item1, item2, ..., itemX)

** Một vài lưu ý quan trọng:
_ Hàm push() sẽ thêm mới một hoặc nhiều phần tử vào cuối mảng, hàm trả về chiều dài của mảng mới.
_ Hàm push() sẽ làm thay đổi chiều dài của mảng.
_ Nếu bạn muốn thêm phần tử vào đầu mảng, sử dụng hàm unshift().
*/

let a2 = ['C#', 'Java', 'Pyton'];
console.log(`Mảng ban đầu: ${a2}`);
let c2 = a2.push('JavaScript');
console.log('Mãng lúc sau:', c2); // => Mãng lúc sau: 4. Bởi vì push trả về độ dài của mảng.
console.log(`Phần tử bên trong mãng lúc sau: ${a2}`);

console.log('-----------------------------------------Array pop()-------------------------------------------');
/* array.pop(): đây là hàm dùng để xóa phần tử cuối cùng ra khỏi mảng.

   Cú pháp: array.pop()

** Một vài lưu ý quan trọng:
_ Hàm array.pop() không có tham số truyền vào.
_ Hàm array.pop() có chức năng xóa bỏ phần tử cuối cùng của mảng, hàm sẽ trả về phần tử bị xóa.
_ Hàm array.pop() sẽ thay đổi chiều dài của mảng.
_ Nếu bạn muốn loại bỏ phần tử đầu tiên của mảng, sử dụng hàm shift.
*/

let a3 = ['C#', 'Java', 'Pyton'];
let c3 = a3.pop();
console.log(c3);
console.log('Mảng ban đầu:' + ' C#,' + ' Java,' + ' Pyton' );

console.log('---------------------------------------Array unshift()-----------------------------------------');
/* array.unshift(): Hàm unshift được dùng để thêm một hoặc nhiều phần tử vào vị trí đầu tiên của mảng. Nó sẽ đẩy các phần tử có sẵn lên phía trước và nhường vị trí đầu cho các phần tử được thêm mới.

   Cú pháp: unshift(element0, element1, ... , elementN)

   ** Một vài lưu ý quan trọng:
_ Hàm unshift sẽ trả về chiều dài của mảng sau khi thêm phần tử.
_ Hàm này sẽ làm thay đổi chiều dài ban đầu của mảng.
_ Nếu bạn muốn thêm phần tử vào cuối mảng, sử dụng phương thức push.
*/

let a5 = ['C#', 'Java', 'Pyton', 'Html'];
let c5 = a5.unshift('JavaScript');
console.log(c5);
console.log('Mảng ban đầu:' + ' C#,' + ' Java,' + ' Pyton,' + ' Html');

console.log('-----------------------------------------Array shift()-----------------------------------------');
/* array.shift(): Hàm shift có chức năng loại bỏ phần tử đầu tiên của mảng. Hàm sẽ trả về phần tử đó.

   Cú pháp: array.shift()

** Một vài lưu ý quan trọng:
_ Hàm array.shift() không có tham số truyền vào.
_ Hàm shift sẽ thay đổi chiều dài của mảng.
 */

let a4 = ['C#', 'Java', 'Pyton'];
let c4 = a4.shift();
console.log(c4);
console.log('Mảng ban đầu:' + ' C#,' + ' Java,' + ' Pyton' );

console.log('--------------------------------------Array.isArray--------------------------------------------');
/*
   Hàm array.isArray: Để kiểm tra có phải là Array hay ko thì ko dùng phương thức typeOf. Vì kết quả sẽ trả về object. Nên khi đó ta dùng Array.isArray(). Nếu là Array thì sẽ trả về True và ngược lại
*/

let a6 = ['C#', 'JavaScript', 23, 3, null, undefined, true, NaN, {}]
if (Array.isArray(a6) === true){
   console.log('This is Array');
}else{
   console.log('This is not Array');
}

console.log('-----------------------------------------Lenght-------------------------------------------------');
// Lenght: để tính độ dài của mảng

let a7 = [1,2,3,4,5,6];
console.log(`Độ dài của mảng a7: ${a7.length} phần tử`);

console.log('-------------------------------------Array.toString()------------------------------------------');
/*
   Hàm array.toString: dùng để chuyển mảng thành chuỗi cách nhau bởi dấu phẩy.
*/

let languages = ['JavaScript', ' C#', ' Pyton', ' Html'];
console.log('*Đây là mảng languages:');
console.log(languages);
console.log('*Phương thức toString:');
console.log(languages.toString());

console.log('-------------------------------------Array.join()------------------------------------------');
/*
   Hàm array.join: Giống với toString dùng để chuyển mảng thành chuỗi cách nhau bởi dấu phẩy (nếu như ko truyền vào tham số). Tham số truyền vào là ký tự dùng để ngăn cách các phần tử 
*/

console.log('*Đây là mảng languages:');
console.log(languages);
console.log('*Phương thức join:');
console.log(languages.join(' '));

console.log('--------------------------------------Array.splice()-------------------------------------------');
/*
   Hàm array.splice: dùng để xóa các phần tử trong mảng, hoặc thay thế một phần tử trong mảng thành một hoặc nhiều phần tử khác tại một vị trí nào đó trong mảng

   Cú pháp: splice(start, deleteCount, item, item2, ..., itemN).
   _ start: Vị trí đặt con trỏ, vị trí bắt đầu (index).
   _ deleteCount: Số phần tử sẽ được xóa đi.
   _ item: phần tử sẽ được thêm mới vào mảng.

   ** Lưu ý: Giá trị trả về Là một mảng chứa tất cả những phần tử đã bị xóa. Nếu chỉ xóa một phần tử thì sẽ return về mảng có 1 phần tử. Nếu không có phần tử nào bị xóa thì sẽ return về mảng rỗng.
*/

console.log('*Đây là mảng languages:');
console.log(languages);
console.log('*Phương thức xóa trong splice:');
console.log(languages.splice(1, 1)); // Ko muốn xóa đi bất kì phần tử nào thì truyền vào tham số 2 giá trị = 0. Trả về phần tử đã xóa, ko phải mảng gốc sau khi xóa phần tử.
console.log('*Đây là mảng languages sau khi xóa: ', languages);

console.log('*Phương thức thêm hoặc thay thế trong splice:');
languages.splice(1, 0, 'English'); // Vị trí đặt con trỏ là index = 1, số phần tử xóa đi là 0, phần tử thêm mới vào là English.
console.log('*Đây là mảng languages sau khi thêm: ', languages);

console.log('--------------------------------------Array.slice()-------------------------------------------');
/*
   Hàm array.slice: Cắt mảng, dùnsg để trích xuất một số phần tử trong mảng. Vị trí bắt đầu và kết thúc việc trích xuất sẽ được xác định bởi tham số truyền vào hàm. Hàm sẽ trả về kết quả là một mảng mới bao gồm các phần tử được trích xuất. Hàm sẽ không làm thay đổi mảng gốc.

   Cú pháp: slice(start, end).

   ** Lưu ý: Hàm sẽ trích xuất không bao gồm phần tử end truyền vào. Ví dụ array.slice(1,4) thì các phần tử được trích xuất sẽ là 1, 2 và 3 (không bao gồm phần tử 4). Nếu ko truyền vào tham số End thì sẽ trích xuất từ Start cho đến hết.
*/

console.log('*Đây là mảng languages:');
console.log(languages);
console.log('*Phương thức slice:');
console.log(languages.slice(1,3));  // Có thể trích xuất theo chiều ngược lại bằng cách đọc index theo chiều âm

console.log('-------------------------------------- forEach ---------------------------------------------');
let sneakers = [
   {
      id: 1,
      name: 'Jordan 1',
      price: 170,
      inStock: false,
      realeased: true,
   },
   {
      id: 2,
      name: 'Jordan 3',
      price: 190,
      inStock: false,
      realeased: true,
   },
   {
      id: 3,
      name: 'Jordan 4',
      price: 200,
      inStock: false,
      realeased: false,
   },
   {
      id: 4,
      name: 'Jordan 5',
      price: 200,
      inStock: false,
      realeased: true,
   },
   {
      id: 5,
      name: 'Jordan 6',
      price: 190,
      inStock: true,
      realeased: true,
   }
];

/*
  forEach: Là một phương thức thuộc đối tượng mảng, dùng để lặp qua các phần tử của mảng (chỉ dùng được với mảng), nó có một tham số truyền vào, và tham số này sẽ lưu trữ giá trị của phần tử trong mỗi lần lặp. Hàm forEach sẽ không thực hiện đối với những phần tử không có giá trị.

  ** Cú pháp: array.forEach(function(currentValue, index))
  _ currentValue - giá trị của phần tử hiện tại.
  _ index - chỉ số của phần tử hiện tại.
  _ arr - mảng mà phần tử hiện tại thuộc về.
  _ thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue sẽ được sử dụng làm giá trị this. Nếu không được truyền vào thì giá trị "this" là "undefined".
*/

sneakers.forEach(function (sneaker, index) {
   console.log(index, sneaker);
});

console.log('---------------------------------------- every ---------------------------------------------');
/*
  every: Là một phương thức dành cho đối tượng mảng. Hàm này giúp kiểm tra tất cả các phần tử trong mảng có thõa mãn một điều kiện nào đó hay không. Nếu tất cả phần tử đều thỏa thì sẽ trả về true, ngược lại nếu chỉ cần một phần tử không thỏa thôi là nó sẽ trả về false.

  ** Cú pháp: array.every(function(currentValue, index))
  _ currentValue - giá trị của phần tử hiện tại.
  _ index - chỉ số của phần tử hiện tại.
 */

let priceIs200 = sneakers.every(function (sneaker, index) {
   return sneaker.price === 200;
});
console.log(priceIs200);

console.log('----------------------------------------- some ------------------------------------------------');
/*
  some: Sẽ lặp qua tất cả các phần tử của mảng, mỗi lần lặp nó sẽ truyền giá trị của phần tử đang lặp vào hàm callback. Chỉ cần một phần tử nào đó thỏa với chương trình trong hàm callback thì hàm some sẽ return true. Ngược lại nếu tất cả các phần tử đều không thỏa thì nó sẽ return false.
*/

let priceIs190 = sneakers.some(function (sneaker, index) {
   return sneaker.price === 190;
});
console.log(priceIs190);

console.log('----------------------------------------- find ------------------------------------------------');
/*
  find: Sẽ lần lượt sử dụng các phần tử của mảng để thực hiện hàm kiểm tra cho đến khi có giá trị thỏa mãn được điều kiện kiểm tra và hàm kiểm tra trả về true. Khi đó hàm find sẽ trả về giá trị của phần tử thỏa mãn và bỏ qua không kiểm tra các phần tử còn lại. Chỉ trả về duy nhất 1 phần tử đúng (thỏa điểu kiện) đầu tiên. 
*/

let jordan3 = sneakers.find(function (sneaker, index) {
   return sneaker.name === 'Jordan 3';
});
console.log(jordan3);

console.log('----------------------------------------- filter ----------------------------------------------');
/*
  filter: là một phương thức thuộc đối tượng mảng. Có công dụng để lọc, tức là sẽ lặp qua qua các phần tử, filter sẽ callback 1 function làm điều kiện. Cuối cùng hàm filter sẽ trả về một mảng các phần tử thỏa điều kiện. Filter gần giống với find chỉ khác trả về toàn bộ các phần tử đúng (thỏa điểu kiện).
*/

let listPrice190 = sneakers.filter(function (sneaker, index) {
   return sneaker.price === 190;
});
console.log(listPrice190);

console.log('----------------------------------------- map ----------------------------------------------');
/*
   map: Sẽ lặp qua từng phần tử của mảng, tham số truyền vào là một anonymous function. Hàm anonymous sẽ có một tham số truyền vào và đó chính là phần tử của mỗi vòng lặp, bên trong thân hàm anonymouse sẽ có lệnh return về một giá trị và giá trị này sẽ thay thế cho phần tử đó. Map() được dùng để thay đổi, chỉnh sửa các phần tử của mảng.
*/

let newSneakers = sneakers.map(function (sneaker, index) {
   return {
      id: sneaker.id,
      name: `Air ${sneaker.name}`,
      price: sneaker.price,
      discount50Percent: sneaker.price / 2,
      index: index
   }
});
console.log(newSneakers);

console.log('----------------------------------------- reduce ----------------------------------------------');
/*
   reduce: Sẽ duyệt qua từng phần tử trong mảng, sau đó trả về một giá trị cuối cùng, giá trị này phụ thuộc vào chương trình của hàm mà bạn truyền vào reduce.

   ** Cú pháp: reduce(function(total, currentValue, currentIndex), initialValue)
   _ accumulator: Giá trị trả lại trước đó của function, chính là giá trị của lệnh return cho mỗi lần lặp.
   _ currentValue: Giá trị của phần tử hiện tại.
   _ currentIndex: Chỉ số của phần tử hiện tại.
   _ initialValue: Tham số không bắt buộc. Nếu được truyền vào thì initialValue sẽ được sử dụng làm giá trị ban đầu, còn không thì nó sẽ lấy giá trị của phần tử đầu tiên. Nếu mảng cần reduce rỗng thì phải truyền giá trị này, nếu không sẽ bị báo lỗi. Muốn trả về kiểu dữ liệu nào thì phải khởi tạo initialValue kiểu dữ liệu đó. nếu ko khởi tạo initialValue thì sẽ trả về phần tử đầu tiên. 
*/

let totalPrice = sneakers.reduce(function (accumulator, sneaker) {
   return accumulator + sneaker.price;
}, 0); // tham số thứ thứ 2 (initialValue) sẽ được gán cho tham số accumulator của hàm. Vì vậy accumulator ban đầu = 0.
console.log(totalPrice);

console.log('----------------------------------------- Exercise 1 ------------------------------------------');
let depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
let flatArray = depthArray.reduce(function (flatOutput, depthItem) {
   return flatOutput.concat(depthItem);
}, []); // Vì muốn kết quả trả về thuộc dạng mảng nên InitialValue được khởi tạo và gán giá trị là một mảng rỗng.
console.log(flatArray);

console.log('----------------------------------------- Exercise 2 ------------------------------------------');
let topics = [
   {
      topic: 'Front-end',
      courses: [
         {
            id: 1,
            name: 'HTML, CSS'
         },
         {
            id: 2,
            name: 'JavaScript'
         }
      ]
   },
   {
      topic: 'Back-end',
      courses: [
         {
         id: 1,
         name: 'PHP'
         },
         {
            id: 2,
            name: 'NodeJS'
         }
      ]
   }
];

let newCourses = topics.reduce(function (courses, topic) {
   return courses.concat(topic.courses);
}, []);
console.log(newCourses);

/*
 includes: Là method của Array và String, dùng để kiểm tra xem mảng hoặc chuỗi có chứa 1 phần tử nào đó không. Trả về boolean (True/False)
 */
 console.log('---------------------------------------- Includes (String) -------------------------------------------');
 let myString = 'Nguyen Ngoc Son';
 console.log(myString.includes('Son'));

 console.log('----------------------------------------- Includes (Array) -------------------------------------------');
 let myArray = ['JavaScript', 'C#', 'React', 'Pyton'];
 console.log(myArray.includes('JavaScript'));

 console.log('-------------------------------------------- Tự viết hàm map ------------------------------------------');
Array.prototype.mapHandMade = function(callback) {  // tạo prototype từ object contructor Array nên mọi array đều sẽ gọi được phương thức này.
    let output = [];
    for (let i in this) {
      if(this.hasOwnProperty(i)) {
         let result = callback(this[i].name); 
         output.push(result);
      }
    }
    return output;  
}

let htmls = sneakers.mapHandMade(function(sneaker) {
return `<h2>${sneaker}</h2>`;  
});
console.log(htmls.join(' '));

console.log('------------------------------------------- Tự viết hàm find ------------------------------------------');
Array.prototype.findHandMade = function(callback) {
   for (let i in this) {
      if (this.hasOwnProperty(i)) {
         let result = callback(this[i].name);
         if(result.includes('Jordan 3')) {
            return this[i].name;
         }
      }
   }  
}

let findSneaker = sneakers.findHandMade(function(sneaker) {
    return sneaker;   
});
console.log(`<h2>${findSneaker}</h2>`);

console.log('----------------------------------------- Tự viết hàm filter ------------------------------------------');
Array.prototype.filterHandMade = function(callback) {
   let output = [];
    for (let i in this) {
      if(this.hasOwnProperty(i)) {
            let result = callback(i, this[i], this) // this[i] = chính phần tử đang duyệt qua, i = index, this = chính mảng đang duyệt qua
            if(result) { // Điều kiện là hàm callback (result) trả về phần tử có price = 190. nếu thỏa thì đúng (true).
               output.push(this[i]); // Nếu đúng (true) thì sẽ đẩy phần tử đang duyệt vào output.
            }
        }
    } 
    return output;
}

let filterSneaker = sneakers.filterHandMade(function(index, sneaker, array) {
     return sneaker.price === 190; // hàm callback trả về các phần tử có price bằng 190.
});

console.log(filterSneaker);
    

console.log('----------------------------------------- Tự viết hàm reduce ------------------------------------------');
Array.prototype.reduceHandMade = function(callback) {
   let total = 0,  arrayLength = this.length;
   for (let i = 0; i < arrayLength; i++) {
      total += callback(this[i].price, 0);
   }
   return total;
}

let htmls4 = sneakers.reduceHandMade(function(sneaker, initialValue) {
   let total = sneaker + initialValue;
   return total; 
});
   console.log(`${htmls4}$`);

console.log('---------------------------------------- Tự viết hàm forEach ------------------------------------------');
Array.prototype.forEachHandMade = function(callback) {
   for (let i in this) { // Tuy có 5 phần tử nhưng For-in duyệt hơn 5 lần là vì For-in duyệt luôn cả prototype của Object Array Contructor.
   if(this.hasOwnProperty(i)) { // Kiểm tra key truyền vào (ở đây key truyền vào đang là i) xem có phải là thuộc tính của object hay ko. Nếu phải trả về true <=> và ngược lại. các thuộc tính trong prototype ko phải là thuộc tính của object đang gọi hàm hasOwnProperty(). 
      callback(i, this[i], this);
      }
   }
}

sneakers.forEachHandMade(function(index, sneaker, array) {
   console.log(index, sneaker, array);
});

console.log('---------------------------------------- Tự viết hàm Some ------------------------------------------');
Array.prototype.someHandMade = function(callback) {
   for (let i in this) {
      if(this.hasOwnProperty(i)) {
         if(callback(i, this[i], this)) { // điều kiện if là kết quả trả về của Hàm callback. Do hàm callback return về this[i].inStock (do dòng 428 return sneaker.inStock)
         return true; // return => ngưng và thoát khỏi hàm của return đó.
         }
      }
   }
   return false;
}

let someSneaker = sneakers.someHandMade(function(index, sneaker, array) {
   return sneaker.inStock; // Có nghĩa khi trả về this[i].inStock (ỏ dòng 419) nếu là true, thì If(true) sẽ thực hiện đoạn code bên trong là lặp tức thoát khỏi hàm và trả về true.
});
console.log(someSneaker);

console.log('---------------------------------------- Tự viết hàm Every ------------------------------------------');
Array.prototype.everyHandMade = function(callback) {
let resultBool = true;
for (let i in this) {
   if(this.hasOwnProperty(i)){
      let result = callback(i, this[i], this);
      if(!result) {
         resultBool = false;
         break;
      }
   }
}
return resultBool;
}

let everySneaker = sneakers.everyHandMade(function(index, sneaker, array) {
   return sneaker.realeased; // Bản thân sneaker.realeased đã là true hoặc false rồi nên ko cần phải làm kiểu so sánh dạng return sneaker.realeased === true. Chỉ cần return sneaker.realeased.
   // Nếu muốn làm yêu cầu kiểm tra xem toàn bộ sneaker đều có price trên 150 thì => return sneaker.price > 150;
});
console.log(everySneaker);