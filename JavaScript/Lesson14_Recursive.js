// Recursive (Đệ quy): là hàm gọi lại chính nó.
// Khi dùng đệ quy phải xác định được điểm dừng và có phần xử lý Logic Handle để tạo ra điểm dừng.

function countDown(num) {
    if(num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}

countDown(3);

console.log('-------------------------------------------------------------------------------------------------------');
let myArray = ['JavaScript', 'C#', 'React', 'Pyton', 'Angular'];
function loop(start, end, callback) {
    if(start < end) {
        callback(start);
        return loop(start + 1, end, callback)
    }
}

loop(0, myArray.length, function(index) {
    console.log(myArray[index]);
});

console.log('-------------------------------------------------------------------------------------------------------');
function giaithua(num) {
   if(num > 0) {
        return num * giaithua(num - 1);
   }
   return 1;
}

console.log(giaithua(5));