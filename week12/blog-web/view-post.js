// 1. Obtinem id din url
const idPost = window.location.search.substring(4);
console.log("idPost = ", idPost);

// 2. Facem requestul la server dupa post-ul cu id din url
ServerApi.getPostById(idPost).then(function (post) {
  console.log("post =", post)
  // 3. Sa afisam in html continutul unui post
  const postContainer = document.getElementById("postContainer");
  postContainer.innerHTML = `
  <h3>${post.title}</h3>
  <p>${post.text} </p>
  <a href="./edit-post.html?id=${idPost}">Edit post</a>
  `
})

const deletePostButton = document.getElementById('deletePostButton');

deletePostButton.addEventListener('click', function () {
  // // 1. stergem post-ul de pe server
  ServerApi.deletePost(idPost).then(function (response) {
    // 2. sa ne duca inapoi pe home.html
    window.location.href = "./home.html"
  })

})