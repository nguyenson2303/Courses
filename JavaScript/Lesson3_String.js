let firstName = 'Son';
let lastName = 'Nguyen';

let fullName = `My name is ${firstName} ${lastName}`; // Template String ES6, các biến đưa vào sẽ được bọc trong cứu pháp ${ }.
console.log(fullName);

let myString = 'This is NguyenSon\'s String. NguyenSon so cool. NguyenSon comeback';

// 1. Lenght: Trả về độ dài của chuỗi. độ dài của 1 chuỗi rỗng sẽ là 0.
console.log('-----------------------------------------Lenght------------------------------------------------');
console.log(myString.length);

/* 2. Find index: 
   _ Phương thức indexOf: Kiểm tra và trả về vị trí xuất hiện đầu tiên trong chuỗi gốc của chuỗi con do người dùng cung cấp. Nếu không tìm thấy chuỗi con trong chuỗi gốc, phương thức sẽ trả về -1. Phương thức indexOf có phân biệt chữ hoa chữ thường.
   _ Nếu có nhiều kết quá giống nhau nhưng ko muốn trả về vị trí index của giá trị đầu tiên tìm dc mà là giá trị thứ 2 thì sau tham số thứ nhất (searchString) của indexOf, truyền thêm tham số thứ 2 (position) để quy định vị trí bắt đầu tìm kiếm trong chuỗi.
   _ Phương thức lastIndexOf: Giống với indexOf chỉ khác là trả về vị trí xuất hiện cuối cùng.
   _ Phương thức seach: Giống với indexOf nhưng ko thể quy định vị trí bắt đầu tìm kiếm trong chuỗi và hỗ trợ tìm kiếm theo biểu thức chính quy.
*/
console.log('-----------------------------------------Find index--------------------------------------------');
console.log(`Phương thức indexOf: ${myString.indexOf('NguyenSon')}`); 
console.log(`Phương thức indexOf có position: ${myString.indexOf('NguyenSon', 9)}`);
console.log(`Phương thức lastIndexOf: ${myString.lastIndexOf('NguyenSon')}`);
console.log(`Phương thức search: ${myString.search('NguyenSon')}`); 

/* 3. Cắt chuỗi
   _ Phương thức slice: Trích xuất một phần của chuỗi. Phương thức sẽ trả về một chuỗi mới chính là phần được trích dẫn từ chuỗi gốc ban đầu. Trích xuất sẽ không bao gồm phần tử end.
   _ Phương thức slice sẽ không làm thay đổi chuỗi gốc ban đầu.
   _ Phương thức slice sẽ cắt chuỗi từ đầu đến cuối (trái sang phải). Nếu muốn cắt ngược lại. Vị trí index cuối cùng là 0. Từ đó đếm ngược lại từ cuối lên đầu (phải sang trái) thì sẽ là số âm.
   _ Phương thức slice nếu chỉ truyền một tham số đầu tiên thì nó sẽ tự hiểu vị trí end (tham số thứ 2) sẽ = vị trí index cuối cùng.
   _ Phương thức substring: sử dụng giống với phương thức slice, tuy nhiên tham số truyền vào phải luôn luôn lớn hơn 0.
   _ Phương thức substr: Có hai tham số là start và length, trong đó start là vị trí bắt đầu và length là số ký tự muốn lấy bắt đầu từ vị trí start. Nếu truyền tham số start là số âm thì nó sẽ tính từ cuối trở lên, còn tham số length nếu không được truyền vào, phương thức sẽ trích xuất từ start đến hết chuỗi và tham số length phải luôn luôn là số dương.
*/
console.log('----------------------------------------Cut string---------------------------------------------');
console.log(`Phương thức slice: ${myString.slice(8,17)}`); // Nếu tham số 2 (phần tử end) là 16. Kết quả sẽ là 'NguyenSo' chứ ko phải 'NguyenSon'. Do index cuối cùng của NguyenSon là chữ n index = 16.
console.log(`Phương thức slice cắt từ phải sang trái: ${myString.slice(-18,-9)}`);
console.log(`Phương thức substring: ${myString.substring(8,17)}`);
console.log(`Phương thức substr: ${myString.substr(8,9)}`);

/* 4. Replace
   _ Phương thức replace: có chức năng tìm kiếm một chuỗi con hoặc một biểu thức chính quy nào đó trong chuỗi sau đó thay thế nó bằng một giá trị được cung cấp bởi người dùng. Phương thức sẽ trả về chuỗi đã được thay thế mà không hề thay đổi chuỗi gốc. Nếu không phải biểu thức chính quy sẽ thay thế chuỗi con được tìm thấy đầu tiên.
   ** Lưu ý rằng nếu tìm kiếm một chuỗi con (không phải một biểu thức chính quy) và chuỗi con đó xuất hiện nhiều lần trong chuỗi gốc, phương thức replace sẽ chỉ thay thế chuỗi con đầu tiên được tìm thấy, để thay thế tất cả các chuỗi con tìm thấy hãy sử dụng modified toàn cục g
 
 */
console.log('------------------------------------------Replace----------------------------------------------');
console.log(`Phương thức replace: ${myString.replace('NguyenSon','Nguyen Ngoc Son')}`);
console.log(`Phương thức replace sử dụng modified toàn cục g: ${myString.replace(/NguyenSon/g,'Nguyen Ngoc Son')}`
// /NguyenSon/g là biểu thức chính quy.
);

/* 5. Convert to upper case & lower case
   _ Phương thức toUpperCase: Sẽ chuyển đổi và trả về chuỗi ký tự in hoa.
   _ Phương thức toLowerCase: Sẽ chuyển đổi và trả về chuỗi ký tự in thường.
*/
console.log('-----------------------------Convert to upper case & lower case--------------------------------');
console.log(`Phương thức toUpperCase: ${myString.toUpperCase()}`);
console.log(`Phương thức toLowerCase: ${myString.toLowerCase()}`);

/* 6. Trim
   _ Phương thức Trim: sẽ loại bỏ các khoảng trắng ở đầu và cuối chuỗi. Phương thức sẽ trả về chuỗi với các khoảng trắng ở đầu và cuối chuỗi đã bị loại bỏ. Phương thức sẽ không làm thay đổi chuỗi gốc ban đầu.
*/

console.log('-------------------------------------------Trim------------------------------------------------');
let myStr = '         Nguyen Ngoc Son      ';
console.log(`myStr = ${myStr}`);
console.log(`Phương thức Trim: ${myStr.trim()}`);

/* 7. Split
   _ Phương thức split sẽ phân tách một chuỗi thành một mảng dữ liệu dựa vào các kí tự phân cách trong chuỗi. Phương thức sẽ trả về một mảng mới và không làm thay đổi chuỗi gốc ban đầu.
   _ Nếu kí tự phân cách là một chuỗi rỗng, mỗi kí tự trong chuỗi sẽ được phân tách thành một phần tử của mảng.
   _ Tham số 1 (separator) là kí tự phân cách trong chuỗi, phương thức sẽ dựa vào kí tự này để phân tách chuỗi. Nếu không truyền vào, mảng trả về sẽ có một phần tử duy nhất có giá trị bằng chuỗi ban đầu. Nếu truyền vào một chuỗi rỗng, mỗi kí tự trong chuỗi sẽ là một phần tử của mảng trả về.
   _ Tham số 2 (limit) là tham số quy định số phần tử tối đa của mảng trả về. Nếu không được truyền vào thì phương thức sẽ lấy tất cả các phần tử có thể.
*/
console.log('-------------------------------------------Split-----------------------------------------------');
let maString1 = 'JavaScript, C#, Pyton, PHP, Java';
let maString2 = "JavaScript";
console.log(`Chuoi maString1 = ${maString1}`);
console.log('Phương thức Split ko tham số: ', maString1.split());
console.log('Phương thức Split có tham số 1 (separator): ', maString1.split(','));
console.log(`Chuoi maString2 = ${maString2}`);
console.log('Phương thức Split: ', maString2.split(''));

/* 8. Get a character by index
   _ Phương thức charAt: có chức năng tìm kiếm kí tự ở một vị trí nào đó trong chuỗi, vị trí tìm kiếm đó sẽ do người dùng xác định. Khi tìm 1 index lớn hơn (nằm ngoài) index của chuỗi gốc thì sẽ trả về chuỗi rỗng.
   _ Ngoài charAt có thể dùng dấu ngoặc đơn. Khi tìm 1 index lớn hơn (nằm ngoài) index của chuỗi gốc thì sẽ trả về undefined.
   ***Lưu Ý: Thật ra có thể truy cập trực tiếp vào index của string để lấy ra giá trị tại vị trí index đó mà ko cần đến charAt.
*/
console.log('-------------------------------------------chartAt---------------------------------------------');
let maString3 = 'Son Nguyen';
console.log(`Chuoi maString3 = ${maString3}`);
console.log(`Phương thức chartAt tại index = 1 là: ${maString3.charAt(1)}`);
console.log(`Sử dụng ngoặc vuông + index (maString3[5]) nghĩa là giá trị tại vị trí thứ 5 trong mảng là: ${maString3[5]}`);   // truy cập trực tiếp vào index của string
