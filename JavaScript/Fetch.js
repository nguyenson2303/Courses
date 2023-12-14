let postAPI = 'https://jsonplaceholder.typicode.com/posts';
// Stream
fetch(postAPI)
.then(function(response) {
// trả về 1 Promise đã dc JSON Parse(JSON -> JavaScript Types).
  return response.json();
})
.then(function(posts) {
   let htmls = posts.map(function(post) {
   return `<li>
    <h2>${post.title}</h2>
    <p>${post.body}</p>
   </li>`
 });
 let html = htmls.join('');
 document.getElementById('post_block').innerHTML = html;
})
.catch(function(error) {
 alert('Error...!');
})