var getSearch = document.querySelector("#get-search")
function searchNews() {

  fetch(`https://newsapi.org/v2/everything?q=${getSearch.value}&from=2024-05-04&sortBy=publishedAt&apiKey=c7e2ae91f23749758991d2692e467bc9`)
    .then(function (data) {
      return data.json()
    })
    .then(function (data) {

      var getDiv = document.querySelector("#news")

      for (var i = 0; i < data.articles.length; i++) {
        getDiv.innerHTML += `<div class="card p-3 m-1 d-flex justify-content-evenly" style="width: 18rem;">
            <img src=${data.articles[i].urlToImage ? data.articles[i].urlToImage : 'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.articles[i].title}</h5>
              <p class="card-text">${data.articles[i].content}</p>
            </div>
            
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>`
      }
    })
    .catch(function (err) {
      console.log(err)
    })

}
