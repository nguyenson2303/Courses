// Câu lệnh rẽ nhánh If Else:

// Cách viết này ko nên, vì lúc này sau khi thỏa điều kiện đầu tiên sẽ tiếp tục kiểm tra xuống điều kiện tiếp theo => vì vậy kết quả ra 'Hôm nay là thứ 2.' và 'Hôm nay là thứ 3.'
let date2 = 2;
if (date2 === 2) {
    console.log('Hôm nay là thứ 2.')};
if (date2 > 0) {
    console.log('Hôm nay là thứ 3.')};
if (date2 === 4) {
    console.log('Hôm nay là thứ 4.')};


// Else If khi này nếu điều kiện là đúng thì sẽ thực hiện đoạn code luôn và ko cần kiểm trả các dòng dưới => vì vậy kết quả chi ra 'Hôm nay là thứ 2'.
/**
 * Chương trình sẽ kiểm tra điều kiện đầu tiên, nếu đúng sẽ thực thi code và bỏ qua các điều kiện tiếp theo. Nhưng nếu kiểm tra điều kiện mà ko đúng thì sẽ tiếp tục kiểm tra điều kiện tiếp theo.
 */
let date = 2;
if (date === 2) {
    console.log('Hôm nay là thứ 2.');
} else if (date > 0 ) {
    console.log('Hôm nay là thứ 3.');    
} else if (date === 4) {
    console.log('Hôm nay là thứ 4.');
} else {  // Else cuối cùng để giải quyết các trường hợp ko nằm trong 3 điều kiện trên. 
    console.log('Các trường hợp còn lại ko nằm trong 3 điều kiện trên !!!');
}

/**
 * Switch Case
 * Chương trình sẽ so sánh date3 với điều kiện đầu tiên (case), khi này ko đúng nên tiếp tục so sánh với điều kiện tiếp theo, lúc này date3 được dùng thuật toán so sánh ===, sau khi so sánh thấy date3 cùng kiểu và cùng giá trị với điều kiện nên là đúng, chương trình thực thi code và thoát ra ngoài nhờ break. Nếu ko có break thì khi so sánh ra điều kiện đúng chương trình sẽ thực thi toàn bộ các dòng code ở các điều kiện (case) tiếp theo mà ko cần biết là đúng hay sai. Vi vậy phải có break.
 */

let date3 = 3;
switch(date3){
    case 2: 
        console.log('Hôm nay là thứ 2.'); // Nếu case mà ko có return thì phải dùng break.
        break;
    case 3: 
        console.log('Hôm nay là thứ 3.');
        break;
    case 4: 
        console.log('Hôm nay là thứ 4.');
        break;
    case 5: 
        console.log('Hôm nay là thứ 5.');
        break;
    default: // default để giải quyết các trường hợp ko nằm trong 3 điều kiện trên.
        console.log('Các trường hợp còn lại ko nằm trong 3 điều kiện trên !!!');
}

let date4 = 4;
switch(date4){
    case 2: // so sanh chỉ cần đúng là sẽ thực thi luôn các điều kiện bên dưới (kế tiếp) cho đến khi gặp break mới thoát ra ngoài.
    case 3: 
    case 4: 
        console.log('Hôm nay là thứ 2, 3, 4.');
        break;
    case 5: 
        console.log('Hôm nay là thứ 5.');
        break;
    default:
        console.log('Các trường hợp còn lại ko nằm trong 3 điều kiện trên !!!');
}

/**
 * If Else nên dùng khi nào cần so sánh tính đúng sai.
 * Switch Case nên dùng khi đã biết trước giá trị và khi có số lượng điều kiện (case) nhiều.
 */