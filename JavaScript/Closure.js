/* Closure: Là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó. Closure chỉ dùng khi trong function có function, function cha phải return về function con và function con return về giá trị muốn trả về.
*** Lưu ý: Biến được tham chiếu (refer) trong closure sẽ ko đc xóa khỏi bộ nhớ khi hàm cha thực thi xong.
*/

// Var ko có phạm vi Code Block mà chỉ có 2 phạm vi là Global và Local Scope (Var bên trong Function).
let a =7;
let b = 3;
if (a > 5){ 
   if(b = 3) {
    var c = 6; // Var trong Code Block (Khối mã) của if nhưng bên ngoài vẫn truy cập dc là do Var ko có phạm vi Code Block nên sẽ nhảy sang phạm vi gần nhất của Code Block if lúc này sẽ là Global nên Var sẽ là Global. Let, Const khác Var nên sẽ có Code Block. Ngoài ra còn có Local Scope (Hàm) khi hàm dc định nghĩa thì scope vẫn chưa dc tạo ra. Nhưng khi hàm dc gọi thì các Scope sẽ dc tạo ra. Biến dc khai báo trong Local Scope thì phạm vi truy cập ở bên ngoài hàm đó sẽ ko truy cập dc.
   }  
}
console.log(c); 

console.log('------------------------------------------ Closure -----------------------------------------');

function makeCounter() {
    let counter = 0;    // Biến của Function.

    function increase() {   // Tham chiếu biến counter vào Function con. Bản chất biến counter ko nằm trong increase mà nằm ngoài hàm increase() và trong hàm makeCounter(). Hàm increase() chỉ tham chiếu biến counter thôi. Nên khi gọi hàm increase() thì hàm increase() sẽ tìm biến counter trong phạm vi của nó đầu tiên. Nếu ko thấy nó sẽ nhảy ra phạm vi hàm cha là hàm makeCounter() lúc này sẽ thấy biến counter.
        return ++counter; 
    }

    return increase;  // Return lại Function con. increase chứ ko phải increase(). Nếu increase() thì có nghĩa là gọi lại hàm sẽ trả về kết quả sau khi chạy hàm lúc nãy, tương tự như gán cứng cho hàm makeCounter = 1 (Do counter = 0 sau khi chạy xong dòng 17 thì tăng lên 1). Còn chỉ increase thôi thì sẽ trả về giá trị tham chiếu của hàm increase.
}
// Khi gọi hàm makeCounter thì sẽ tạo ra 1 phạm vi mới. Trong đó, biến counter được tạo ra với giá trị = 0 và được nhớ trong phạm vi này. Sau đó sẽ tạo ra hàm increase(). Hàm increase() return ++counter (tăng counter lên 1 đơn vị). Tiếp theo, sẽ return hàm increase ra bên ngoài. Tại dòng 16. hàm increase() vẫn chưa biết biến counter tại thời điểm này vì hàm increase chưa được gọi. Dòng 23 hàm increase vẫn chưa dc gọi vì biến result = makeCounter(), mà hàm makeCounter() return về chỉ là increase (trả về địa chỉ tham chiếu chứ chưa gọi hàm). Cho đến dòng 25. result() đồng nghĩa với increase() tức là hàm increase đã dc gọi. Lúc này hàm increase kiểm tra trong phạm vi của mình xem có biến count ko. Ko thấy nên nó nhảy ra phạm vi hàm cha là hàm makeCounter() thì lúc này counter = 0 nên sau kết quả của dòng 25 sẽ = 1. Sau đó dòng 26 lại gọi hàm increase. 1 lần nữa biến count ko nằm trong hàm increase nên nó sẽ nhảy ra phạm vi hàm cha là hàm makeCounter() nhưng tại thời điểm này. Hàm makeCounter() chỉ dc gọi 1 lần nên chỉ có 1 phạm vi cho nên lúc này do khi nãy ở dòng dòng 25 ta đã tăng counter lên 1 đơn vị nên tại thời điểm này counter = 1 và kết quả của dòng 26 sẽ = 2 (counter = 1 và tăng lên 1 đơn vị = 2).
const result = makeCounter(); // Gán cho biến result là gọi hàm makeCounter() để biến result nhận kết quả return từ hàm makeCounter(). Trường hợp này là Return về increase. Funciton increase() phạm vi bên ngoài Function makeCounter() ko thể truy cập dc nên hàm makeCounter() return về increase. Dòng này là gán kết quả trả về của hàm makeCounter() lúc này là increase và gán vào biến result.

console.log(result());
console.log(result());
console.log(result());
console.log('----------------------------Phạm Vi Mới Của Hàm makeCounter()-------------------------------');
// Lúc này hàm makeCounter() dc gọi 1 lần nữa nên sẽ sinh ra 1 phạm vi mới do đó sẽ bắt đầu lại từ đầu.
const result2 = makeCounter();

console.log(result2());
console.log(result2());
console.log(result2());

console.log('------------------------------------- Example 2 --------------------------------------------');
function createLogger(namespace) {
    function logger(msg) {
        return console.log(`[${namespace}] ${msg}`);
    }
    return logger;
}

const infoLogger = createLogger('Info');

infoLogger('Bắt đầu gửi mail');
infoLogger('Lỗi gửi mail lần 1, thử gửi lại');
infoLogger('Gửi mail thành công');

console.log('--------------------------------------------------------------------------------------------');

const errorLogger = createLogger('Error');

errorLogger('Bị ngắt kết nối Server');
errorLogger('Đăng nhập thất bại');
errorLogger('Gửi mail thất bại');

console.log('-------------------------------------- Example 3 -------------------------------------------');
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        }
    }
    return storage;
}

const profileSetting = createStorage('profile_setting');

profileSetting.set('name','Son Nguyen');
profileSetting.set('age', 31);
profileSetting.set('address','HCM');

console.log(profileSetting.get('name'));

console.log('------------------------------------- Example 4 --------------------------------------------');
function createApp() {
    const cars = [];

    return {
        add(car) {
            cars.push(car);
        },
        show() {
            console.log(cars);
        }
    }
}

const app = createApp();
app.show();
app.add('BMW');
app.show();
app.add('Ferari')
app.show();


