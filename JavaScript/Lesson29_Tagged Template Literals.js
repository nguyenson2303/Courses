// Tagged Template Literals

function highlight([first, ...strings], ...values) { // [first, ...strings] sẽ là phần tử của tham số 1. first là phần tử 1 của tham số 1 => 'Học lập trình', ...strings là các phần tử còn lại của tham số 1 = > 'tại' và '!'. ...values sẽ là các tham số còn lại của mảng là '${course}' và ${brand} => sẽ là 'JavaScript' và 'W3school'.
    console.log('first: ', first);
    console.log('strings: ', strings);
    console.log('values: ', values);

    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()], // [first] sẽ được gán vào acc, ...acc <=> ...[first] => 'Học lập trình' + values gọi reduce nên curr sẽ là phần tử của values. ở loop đầu tiên sẽ là phần tử đầu tiên => 'Javascript' +  strings.shift() sẽ xóa phần tử đầu tiên trong mảng strings và trả về phần tử đó => 'tại'. Kết thúc loop đầu tiên sẽ được mảng có kết quả là => ['Học lập trình', `<span>JavaScript</span>`, ' tại ']. Sau đó, mảng này sẽ tiếp tục được gán cho acc tại loop tiếp theo => ['Học lập trình', `<span>JavaScript</span>`, ' tại '] + values gọi reduce nên curr sẽ là phần tử của values. ở loop tiếp theo sẽ là phần tử tiếp theo => 'W3school' +  strings.shift() sẽ xóa phần tử đầu tiên trong mảng strings và trả về phần tử đó => '!'. kết quả cuối cùng sẽ là ['Học lập trình', `<span>JavaScript</span>`, ' tại ', 'W3school', '!']. Sau đó dùng join để để chuyển mảng thành string. 
        [first]
       ).join('');
}

let brand = 'W3school';
let course = 'JavaScript';

let html = highlight`Học lập trình ${course} tại ${brand}!`; // highlight chính là gọi hàm highlight() và tham số truyền vào là string 'Học lập trình ${course} tại ${brand}!'.
console.log(html);

// hàm highlight được gọi và lúc này sẽ được truyền vào 3 tham số:
// Tham số 1: Là 1 Array chứa String ko có phần nội suy. Trường hợp hiện tại sẽ có các phần tử 'Học lập trình', 'tại', '!'.
// Tham số 2: 'JavaScript!'.
// Tham số 3: 'W3school'.
// Từ vị trí thứ 2 (Tức index 1) trở đi sẽ tương ứng với biến nội suy trong chuỗi Template.