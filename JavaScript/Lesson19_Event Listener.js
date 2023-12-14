/**Event Listener
 * Event Listener nhận vào 2 đối số là Event, đối số thứ 2 là callback. 
 * Lưu Ý: Event Listener sử dụng trong các trường hợp khi muốn lắng nghe sự kiện nhưng khối code quá lớn, để Event Listener bóc tách code ra cho dễ nhìn và khi muốn bỏ đi sự kiện trong một trường hợp cụ thể nào đó. 
 * */ 
let btnElement = document.getElementById('btn');
btnElement.addEventListener('click', function(){
 console.log('Event 1');
});
btnElement.addEventListener('click', function(){
 console.log('Event 2');
});

let viec3 = function(){
 console.log('Event 3');
}

btnElement.addEventListener('click', viec3);
setTimeout(function(){
 btnElement.removeEventListener('click', viec3)
},3000);



 