/** HTML DOM:
 * 1. Element: là các thẻ Tag (elementNode) trong DOM. 
 * 2. Attribute: là thuộc tính của element, nằm bên trong element (vd: id, class, title, href,...).
 * 3. Text: là các text (chữ, nội dung) nằm trong elementNode (nằm giữa một cặp thẻ Tag).
 */

// 1.Element.
console.log('------------------------------------------- getElementById --------------------------------------------');
let result1 = document.getElementById('hello'); // => chỉ trả về 1 element đều tiên (số ít) nên là getElement.
console.log(result1);
console.log({
 element: result1
});

console.log('------------------------------------- getElementsByClassName ------------------------------------------');
let result2 = document.getElementsByClassName('how');// => trả về HTMLCollection (hơi giống mảng, chứa nhiều element (số nhiều) => nên là getElements.
console.log(result2);

// document.getElementsByTagName('TagName'). Trả về HTMLCollection.
console.log('---------------------------------------- getElementsByTagName -----------------------------------------');
let result3 = document.getElementsByTagName('h2'); // => trả về HTMLCollection. vd này là trả về toàn bộ các thẻ h2.
console.log(result3);

console.log('--------------------------------------- CSS Selector ------------------------------------------');
console.log('1. querySelector()');
let result4 = document.querySelector('.box .how:nth-child(3)'); // => chỉ trả về 1 element đều tiên.
console.log(result4);

console.log('2. querySelectorAll()');
let result5 = document.querySelectorAll('.how');// => trả về NodeList(hơi giống mảng, chứa nhiều element).
console.log(result5);

// Công việc 1: Sử dụng tới '.box'.
console.log('---------------------------------------- Example 1 --------------------------------------------');
let box = document.querySelector('.box');
console.log(box);

// Công việc 2: Sử dụng tới các li element của '.box'.
console.log('---------------------------------------- Example 2 --------------------------------------------');
console.log(box.getElementsByTagName('h2'));

// 2.Attribute.
// Muốn tương tác với attribute đầu tiên phải get ra được element. Muốn get được element thì phải thông qua document.
console.log('--------------------------------------- DOM attribute ---------------------------------------------');
let headingElement = document.querySelector('h3');

// Cách thêm attribute vào element hợp lệ. Sau khi thêm attribute vào source code HTML sẽ ko thấy có attribute vừa thêm, chỉ đây là cách thêm vào bằng JavaScript, nên nó chỉ có khi đoạn mã JavaScript được thực thi.
console.log('------------------------------- Thêm attribute vào element hợp lệ -------------------------------------');
headingElement.className = 'fine';// biến headingElement chứa element (tag h3), thêm thuộc tính className vào h3. Vì trong JavaScript keyword Class bị trùng bên muốn thêm Class phải dùng keyword className.

// Set attribute ko hợp lệ. Đôi khi có nhưng trường hợp muốn thêm attribute ko hợp lệ với element muốn thêm thì dùng setAttribute.
console.log('------------------------------- Thêm attribute vào element ko hợp lệ ----------------------------------');
headingElement.setAttribute('href','h3-test'); // thẻ h3 ko tồn tại thuộc tính href, vì vậy đây là thuộc tính ko hợp lệ nhưng dùng setAttribute nên vẫn có thể thêm được attribute này, setAttribute nhận vào 2 tham số, tham số đầu tiên là attribute muốn thêm vào (khác với cách thêm hợp lệ, class sẽ vẫn là class chứ ko phải là className), tham số thứ 2 sẽ là giá trị của attribute. Vd: setAttribute('class','test') => element sẽ có class là 'test'. 

// Get value của attribute hợp lệ. Nều ko dùng getAttribute thì các attribute ko hợp lệ khi get sẽ trả về undefined.
console.log('------------------------------------- Get value của Attribute -----------------------------------------');
console.log(`Get Attribute hợp lệ: ${headingElement.getAttribute('class')}`);
console.log(`Get Attribute ko hợp lệ: ${headingElement.getAttribute('href')}`); // trường hợp này href là attribute ko hợp lệ của element (Tag h3). 

// 3.Text.
/*
 * Muốn tương tác với text đầu tiên phải get ra được element. Muốn get được element thì phải thông qua document. innerText và textContent dùng để lấy ra (getter) hoặc chỉnh sửa (setter) nội dung text của textNode nằm trong elementNode.
 * Ko nên dùng innerText và textContent để thêm elementNode, vì các cặp dấu <> của các thẻ tag sẽ được mã hóa nên sẽ được hiểu là text chứ ko phải là tag. (vd: ko nên thêm elementNode như sau: innerText('<h2>My Text</h2>'))
*/
// Getter dạng innerText và textContent.
console.log('-----------------------------------------------------------------------------------------------');
let h2Element = document.querySelector('.h2Element');
console.log('----------------------------------------------- Getter ------------------------------------------------');
console.log(`Get text của Element = innerText: ${h2Element.innerText}`);
console.log(`Get text của Element = textContent: ${h2Element.textContent}`);

// Setter (gán nội dung) dạng innerText và textContent.
console.log('--------------------------------------------- Setter --------------------------------------------------');
console.log(`Set text vào element = innerText: ${h2Element.innerText = 'My name is Eminem.'}`);
console.log(`Set text vào element = textContent: ${h2Element.textContent = 'King of Rap.'}`);

/* Khác biệt giữa innerText và textContent: Cả innerText và textContent đều bỏ qua các thẻ Tag và những gì bên trong các cặp thẻ Tag sẽ được cho là textNode và sẽ có các cách hiển thị textNode khác nhau giữa innerText và textContent.
1. innerText: Nội dung get được (hiển thị) sẽ giống với nội dung nhìn thấy trên Browser.
2. textContent: Nội dung get được (hiển thị) sẽ giống với nội dung thật trong DOM (source code).
*/
console.log('----------------------------- Khác biệt giữa innerText và textContent ---------------------------------');
let h3Element = document.querySelector('#h3Element');
console.log(`Get text của Element = innerText: ${h3Element.innerText}`);// => Trả về: I'm a king (ko xuống dòng). element 'of rap' đã được thêm attribute display là none nên sẽ ko được hiển thị ra.

console.log(`Get text của Element = textContent: ${h3Element.textContent}`);// => Trả về: I'm a king of rap (có xuống dòng), element 'of rap' tuy đã được thêm attribute display là none đáng lẽ sẽ ko được hiển thị nhưng nó vẫn hiển thị ra và cũng hiện thị luôn đoạn code css trong thẻ style mặc dù đoạn code này ko tác đông lên một element nào cả (ko có element có class là 'classnaykotontai'). Vì đoạn code css trong cặp thẻ style cũng được cho là textNode.

console.log('Getter = innerText sẽ tự động hiểu các khoảng trắng và mã hóa thành thẻ Tag');
let h4Element = document.querySelector('.h4Element');
// Những đoạn xuống dòng ở dòng 91 và 93 innerText sẽ tự hiểu và mã hóa thành thẻ <br/>. Vì vậy bên Browser sẽ thấy những khoảng trống xuống dòng của textNode trong elementNode 'h4Element'. 
let viewh4Element = h4Element.innerText = `
                
My new text

`;
console.log(viewh4Element);

// InnerHTML: Thêm (set) Element vào element được truy vấn (Đồng nghĩa với việc có thể thêm (set) AttributeNode và TextNode vào Element được truy vấn). Nếu element được truy vấn có sẵn element bên trong thì element mới được thêm vào sẽ ghi đè luôn element cũ (element có sẵn). Cũng có thể dùng để lấy ra (get) toàn bộ element của element được truy vấn. Trả về nội dung bên trong Element được truy vấn (ko bao gồm Element được truy vấn).
console.log('-------------------------------------------- innerHTML ------------------------------------------------');
let boxElement = document.querySelector('.box1');
console.log(boxElement.innerHTML = '<h4 title="Heading-4">My New InnerHTML</h4>'); // boxElement đã thêm 1 elementNode mới là 'h4' đồng thời cũng thêm vào attributeNode là 'title' và textNode là 'my New InnerHTML'.

// OuterHTML: Giống với innerHTML nhưng thêm (set) Element vào element được truy vấn thì element mới được thêm vào sẽ ghi đè luôn chính element được truy vấn. Cũng có thể dùng để lấy ra (get) toàn bộ element của element được truy vấn. Trả về nội dung bên của Element được truy vấn (bao gồm cả Element được truy vấn).
console.log('-------------------------------------------- outerHTML ------------------------------------------------');
let boxElement2 = document.querySelector('.box2');
console.log(boxElement2.outerHTML);

// bản thân các ElementNode, AttribueNode, TextNode là object vì vậy để xem các phương thức của chúng làm như sau. Vd muốn xem list các phương thức của element ta bỏ element vào mảng rồi console.log ra.
console.log('-------------------------------------------------------------------------------------------------------');
console.log('Cach xem danh sach cac phuong thuc cua 1 element: ',[boxElement2]);