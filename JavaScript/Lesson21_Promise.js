/*
 * Promise được dùng để giải quyết vấn đề trong bất đồng bộ (Async). Trước khi có Promise thì ta sử dụng callback, nhưng callback gây rối rắm, khó nhìn và khó hiểu (gọi là callback hell).
 * Những phương thức thường là bất đồng bô (Async), viết trước nhưng sẽ ko chạy xong trước: setTimeout, setInterval, fetch, XMLHttpRequest, file reading (Những phương thức đọc file), requestAnimationFrame, ...
 * Để tạo Promise dùng từ khóa new Promise. Trong Contructor của nó sẽ vào 1 Executor Function. Khi Executor Function thực thi sẽ nhận 2 tham số là resolve và reject. Khi thao tác xử lý thành công thì gọi resolve(). Còn khi thất bại thì gọi reject(). Đối tượng promise dc tạo ra sẽ xử dụng qua các phương thức là .then .catch, .then và .catch đều nhận Callback Function và sẽ thực thi trong .then khi Promise dc resolve() và sẽ lọt vào .catch khi Promise reject().
*/

let promise = new Promise( // new trước Promise (1 object contructor) sẽ trả về 1 object và lưu vào biến promise.
 // Executor function (hàm thực thi)
 function(resolve, reject) { // Promise thì sẽ nhận tham số là function, khi function thực thi sẽ nhận được 2 tham số dạng hàm là resolve và reject. luôn luôn phải gọi ít nhất 1 trong 2 hàm resolve hoặc reject nếu ko sẽ bị treo máy.
// Logic
// Giải quyết (Thành công): resolve()
// Từ chối (Thất bại): reject()
  resolve([{
   id: 1,
   name: 'JavaScript'
  },
 {
  id: 2,
  name: 'Pyton'
 },
{
 id: 3,
 name: 'C#'
}]);
 }
);

// Sau khi khởi tạo và nhận được promise thì có thể sử dụng như sau:
promise
//** Cả .then, .catch, .finally đều nhận vào callback (function).
// Khi resolve() thì sẽ lọt vào .then
.then(function(course) {
 console.log(course);
})
// Khi reject() thì sẽ lọt vào .catch
.catch(function() {
 console.log('Fail !!!');
})
// Dù resolve() hay reject() thì cuối cùng cũng lọt vào .finally, .finally ko cần thiết nên ko có cũng được.
.finally(function() {
 console.log('Done !!!');
 
})

/*----------------------------------------------------------------------------------------------------------------- */

let promise2 = new Promise(function(resolve, reject) {
  resolve();
});

/* 
** Lưu ý: Có thể có nhiều .then => thì khi lọt vào resolve sẽ chạy code trong .then đầu tiên. Sau đó, tiếp tục chạy code trong các .then kế tiếp. Callback trong .then đầu return cái gì thì có thể nhận được cái đó (dùng làm tham số đầu vào) ở .then kế tiếp. Một function nếu ko được return thì sẽ kết quả trả về sẽ là undefined (ko được định nghĩa) => .then tiếp theo của nó nếu có tham số đầu vào nhận từ .then trước đó sẽ là undefined.
*/
promise2
.then(function() {
  return 'A'; // .then return trả về 'A'=> .then kế tiếp có thể nhận được 'A'
})
.then(function(data) { // tham số đầu vào sẽ là giá trị trả về của .then trước đó => 'A'.
  console.log(data);  // log ra kết quả sẽ là 'A'.
  return 'B'; // Sau đó tiếp tục return trả về B.
})
.then(function(data) { // tham số đầu vào sẽ là giá trị nhận được từ .then trước đó => 'B'.
  console.log(data); // log ra kết quả sẽ là 'B'.
  return 'C'; // Sau đó tiếp tục return trả về C.
})
.then(function(data) { // tham số đầu vào sẽ là giá trị nhận được từ .then trước đó => 'C'.
  console.log(data);  // log ra kết quả sẽ là 'C'.
})

/*----------------------------------------------------------------------------------------------------------------- */
/*
** Lưu ý: Nếu ko return trả về 1 promise thì sẽ chạy ngay .then tiếp theo. Nhưng trường hợp nếu return trả về 1 promise thì .then đó phải được giải quyết xong thì .then kế tiếp mới có thể chạy và .then tiếp theo vẫn có thể nhận được giá trị return trả về của .then trước đó.
*/
function sleep(ms){
 return new Promise(function(resolve){
  setTimeout(resolve,ms);
 });
}

sleep(1000) // sleep(1000) sẽ truyền 1000 vào function contructor sleep ở trên, và return trả về 1 promise => Nên sleep(1000) chính nó đang là 1 promise nên có thể .then được.
.then(function() { // Do setTimeout là 1000ms nên sau 1 giây thì mới resolve và lọt vào .then được.
 console.log(1);
 return sleep(1000); // return sleep(1000) có nghĩa là lại tiếp tục return trả về 1 promise.
})
.then(function() { // .then này phải đợi promise của .then trên chạy xong mới có thể chạy được.
 console.log(2);
 return sleep(1000);
})
.then(function() {
 console.log(3);
 return sleep(1000);
});

/*----------------------------------------------------------------------------------------------------------------- */

// Tạo nhanh 1 Promise luôn resolve() hoặc luôn reject() ko cần dùng keyword new.
let promise3 = Promise.resolve('Success !!!'); 
// let promise3 = Promise.reject('Error !!!');// Nếu Promise luôn reject() thì là Promise.reject().
promise3
.then(function(result) {
  console.log('result: ', result);
})
.catch(function(error) {
  console.log(error);
})

/*----------------------------------------------------------------------------------------------------------------- */

// Promise.all(): promiseA sẽ chạy sau 1s. Sau khi promiseA chạy xong, promiseB sẽ chạy sau 2s. Để chạy xong cả 2 sẽ là 3s. Nếu 2 Promise ko bị phụ thuộc nhau nên dùng Promise.all() thì cả 2 sẽ cùng chạy 1 lúc nên sẽ chỉ tốn 2s để chạy xong cả 2 Promise. Trong khi chạy nếu tất cả Promise đều thành công (resolve) nhưng chỉ cần 1 thằng thất bại (reject) thì Promise.all() sẽ trả về reject và đi vào .catch
let promise4 = new Promise(function(resolve) {
  setTimeout(function(){
    resolve([10]);
  },1000)
});

let promise5 = new Promise(function(resolve,reject) {
  setTimeout(function(){
    //resolve([11, 12]);
    reject('Bị Lỗi Rồi !!!'); // do promise5 là reject, mà Promise.all() thì chỉ cần 1 thằng reject là Promise.all() sẽ trả về reject => console.log ra 'Bị Lỗi Rồi !!!'.
  },2000)
});

Promise.all([promise4, promise5])
.then(function(result) {
  let result4 = result[0];
  let result5 = result[1];
  console.log(result4.concat(result5));
})
.catch(function(error){
  console.log(error);
})

/*----------------------------------------------------------------------------------------------------------------- */

let users = [
{
  id: 1,
  name: 'Nos'
},
{
  id: 2,
  name: 'Son'
},
{
  id: 3,
  name: 'Ty'
}
];

let comments = [
{
  id: 1,
  user_id: 1,
  content:'Hello!'
},
{
  id: 2,
  user_id: 2,
  content: 'Yo! Wassup'
},
{
  id: 3,
  user_id: 1,
  content: 'How you doin, Bro'
}
]
// 1. Lấy comments.
// 2. Từ comments lấy ra user_id.
// 3. Từ user_id lấy ra user tương ứng.

/**
 * Những kiến thức cần nắm chắc để làm:
 * 1. Array.
 * 2. Function, Callback.
 * 3. Promise.
 * 4. DOM.
 */


//Fake API
function getComments() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(comments); // Resolve giúp cho khi gọi hàm getComments() .then() có thể nhận dc comments.
    }, 1000);
  })
}

function getUsersByIds(userIDs) {
  return new Promise(function(resolve) {
      let result = users.filter(function(user) {
        return userIDs.includes(user.id); // userIDs là 1 mảng nên có thể dùng dc method includes. Những phần tử nào thỏa điều kiện userIDs.includes(user.id) thì sẽ được lọc ra.
      });
      setTimeout(function() {
        resolve(result); 
      }, 1000);  
  }, 1000);
}

getComments()
.then(function(comments) { // hàm getComments() ở trên trả về 1 Promise nên .then() có thể nhận dc Promise đó
  let userIDs = comments.map(function(comments) { // comments là 1 Array các object. Dùng map để nhặt ra các object chỉ có user_id mà ko bao gồm id và content của các object trong Array comments.
    return comments.user_id;
  });

  return getUsersByIds(userIDs)
.then(function(users) {
    return {  // Return về 1 object. Index 1 là Array Users(toàn bộ user), Index 2 là 1 Array Comments(toàn bộ comments)
        users: users,
        comments: comments
      };
});
})

.then(function(data) {
  let commentBlock = document.getElementById('comment_block');
  let html = '';
  data.comments.forEach(function(comment) { // Từ data lấy ra toàn bộ comments mà ko lấy users. rồi lặp qua các comments đó.
    let user = data.users.find(function(user) { // Từ các comments lấy ra những user tương ứng.
      return user.id === comment.user_id; // Trả về các user có id mà = với user_id bên comment.
    });
    html += `<li>${user.name}: ${comment.content}</li>`
  });
  commentBlock.innerHTML = html;
});


