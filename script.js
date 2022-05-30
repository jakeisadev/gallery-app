//Access Key: _qiFC3j_JuFn4ZjO7ks1Z4h3dUDevonoxangBW2eXZo
//Secret Key: CkYoJ9j7ZtpH2NK3JniD48cpmoVMV6QNOKP5CUxASRU
let imageArray = [];

const dispImage = (e) => {
  //Don't let the form refresh the page as its default action once the user presses "Enter".
e.preventDefault();
let data = document.getElementById('data').value;
//Data that will be retrieved is the value returned from the input field.
document.getElementById('data').value = '';
//When data is entered by the user, clear the input field for a new query.
//End Point: 
let url = `https://api.unsplash.com/search/photos?page=1&query=${data}&client_id=_qiFC3j_JuFn4ZjO7ks1Z4h3dUDevonoxangBW2eXZo`
let output = '' //Variable to hold the dynamic HTML content
fetch(url)
.then(res => res.json())
.then((data) => {
    data.results.forEach((item, index) => {
      imageArray.push(item.urls.regular)
      //forEach item within the fetched API, output a card containing the image,
      //description, and amount of likes that it has.

      //We do this by letting JS dynamically enter HTML depending on the data retrieved. 
        output += `
        <div class="card" style="width: 18rem;">
        <img src="${item.urls.regular}" class="card-img-top" alt="${item.description ?? ''}">
        <div class="card-body">
          <h5 class="card-title"><i class='fa fa-heart red-color' style="color: red;"></i>${item.likes}</h5>
          <a class="btn btn-outline-dark modal-open-link" onclick="openImageModal(${index})" id="btn-${index}" data-bs-toggle="modal" data-bs-target="#myModal">Description</a>
        </div>
      </div>`
    })
    //Finalizes the data into the "card-container" div within the index.hmtml
    document.getElementById("card-container").innerHTML = output;
})
}

const onLoadImages = (event) => { 
  event.preventDefault();
let data = document.getElementById('data').value;
//Data that will be retrieved is the value returned from the input field.
document.getElementById('data').value = '';
  let url = `https://api.unsplash.com/search/photos?page=1&query=coffee&client_id=_qiFC3j_JuFn4ZjO7ks1Z4h3dUDevonoxangBW2eXZo`;
  let output = '' //Variable to hold the dynamic HTML content
  fetch(url)
  .then(res => res.json())
  .then((data) => {
      data.results.forEach((item, index) => {
        imageArray.push(item.urls.regular)
        console.log(data);
        //forEach item within the fetched API, output a card containing the image,
        //description, and amount of likes that it has.
  
        //We do this by letting JS dynamically enter HTML depending on the data retrieved. 
          output += `
          <div class="card" style="width: 18rem;">
  <img src="${item.urls.regular}" class="card-img-top" alt="${item.description ?? ''}">
  <div class="card-body">
    <h5 class="card-title"><i class='fa fa-heart red-color' style="color: red;"></i>${item.likes}</h5>
    <a class="btn btn-outline-dark modal-open-link" onclick="openImageModal(${index})" id="btn-${index}" data-bs-toggle="modal" data-bs-target="#myModal">Description</a>
  </div>
</div>
    `
      })
      //Finalizes the data into the "card-container" div within the index.hmtml
      document.getElementById("card-container").innerHTML = output;
  })
  }

    const openImageModal = (index) => {
      console.log(imageArray[index]);
      console.log(index);
      document.getElementById('my-modal-body').innerHTML = `<img src="${imageArray[index]}">`
      //modal.innerhtml = image[index]
    }
  

// Data Attributes.

  // Track which button got clicked,
  // depending on that, show the respective image.
  // document.getElementsByClassName('modal-open-link')
