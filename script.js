//Access Key: _qiFC3j_JuFn4ZjO7ks1Z4h3dUDevonoxangBW2eXZo
//Secret Key: CkYoJ9j7ZtpH2NK3JniD48cpmoVMV6QNOKP5CUxASRU

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
    data.results.forEach((item) => {
      //forEach item within the fetched API, output a card containing the image,
      //description, and amount of likes that it has.

      //We do this by letting JS dynamically enter HTML depending on the data retrieved. 
        output += `
        <img src="${item.urls.regular}" alt="${item.description ?? ''}">`
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
      data.results.forEach((item) => {
        console.log(data);
        //forEach item within the fetched API, output a card containing the image,
        //description, and amount of likes that it has.
  
        //We do this by letting JS dynamically enter HTML depending on the data retrieved. 
          output += `
          <img src="${item.urls.regular}" alt="${item.description ?? ''}">
    `
      })
      //Finalizes the data into the "card-container" div within the index.hmtml
      document.getElementById("card-container").innerHTML = output;
  })
  }