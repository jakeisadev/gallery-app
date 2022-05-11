//Access Key: _qiFC3j_JuFn4ZjO7ks1Z4h3dUDevonoxangBW2eXZo
//Secret Key: CkYoJ9j7ZtpH2NK3JniD48cpmoVMV6QNOKP5CUxASRU

//Look up how to make HTML/CSS cards to display the data: Disp 3 items in a row (or 4)
//Also how to display from forEach itself
const dispImage = (e) => {
e.preventDefault();
let data = document.getElementById('data').value;
document.getElementById('data').value = '';
//End Point: 
let url = `https://api.unsplash.com/search/photos?page=1&query=${data}&client_id=_qiFC3j_JuFn4ZjO7ks1Z4h3dUDevonoxangBW2eXZo`

fetch(url)
.then(res => res.json())
.then((data) => {
    // console.log(data);
    data.results.forEach((item) => {
        console.log(item)
    }) 
})
}