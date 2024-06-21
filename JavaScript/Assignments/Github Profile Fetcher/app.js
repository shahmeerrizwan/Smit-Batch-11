
var getInp = document.querySelector("#inp")

function showCard() {

    fetch(`https://api.github.com/users/${getInp.value}`)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            var getDiv = document.querySelector("#showProfile")
            getDiv.innerHTML += `<div class="card" style="width: 18rem;">
      <img src=${data.avatar_url} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <h5 class="card-title">Followers: ${data.followers}</h5>
        <h5 class="card-title">Followings:  ${data.following}</h5>
        <p class="card-text"><h3>BIO:</h3> ${data.bio}</p>
        <a target='_blank' href=${data.html_url} class="card-link">Go to Profile</a>
      </div>
      
      
    </div>`
        })
        .catch(function (err) {
            console.log(err)
        })

}