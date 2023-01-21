
let mainServerURL = "https://63c657d5d307b76967371c02.mockapi.io/products";

// BURGER SECTION

let ham = document.getElementById("hamburger");
ham.addEventListener("click",function(){
  this.classList.toggle("is-active");
  if (this.classList.contains('is-active')){
    openNav();
  } else {
    closeNav();
  }

})
function openNav(){
  console.log("open");
  document.getElementById("burger").style.display = "initial";
  document.getElementById("burger").style.transition = "transform 250ms ease-in-out"
}
function closeNav(){
  console.log("close nav")
  document.getElementById("burger").style.display = "none";
}

let brandName = document.getElementById("brand_name");
brandName.addEventListener("click",function(){
  window.location.href = "adminindex.html";
})


// ADD THE PRODUCT
let addProductBtn = document.getElementById("addProduct");
addProductBtn.addEventListener("click",function(e){
  e.preventDefault()
  let title = document.getElementById("title").value;
  let imageURL = document.getElementById("imageURL").value;
  let price = document.getElementById("price").value;
  let desc = document.getElementById("desc").value;
  let userObj = {
    "title" : title,
    "imageURL" : imageURL,
    "price" : price,
    "desc" : desc
  }
  addNewProd(userObj)

  function addNewProd(userObj){

    fetch(`${mainServerURL}`,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(userObj)
    })
    .then(function(res){return res.json()})
    .then(function(data){console.log(data)})
  }
})

//DELETE THE PRDOUCT

let deleteBtn = document.getElementById("deleteProd")
;
deleteBtn.addEventListener("click",function(e){
  e.preventDefault()
  let del = document.getElementById("deleteId").value;
  addNewProd(del)

  function addNewProd(del){

    fetch(`${mainServerURL}/${del}`,{
      method : 'DELETE'
    })
    .then(function(res){return res.json()})
    .then(function(data){console.log(data)})
  }
})


// EDIT THE PRODUCT
let editProdBtn = document.getElementById("editProd");
editProdBtn.addEventListener("click",function(e){
  e.preventDefault()
  let id = document.getElementById("replaceId").value 
  let title = document.getElementById("editName").value;
  let imageURL = document.getElementById("editImageUrl").value;
  let price = document.getElementById("editPrice").value;
  let desc = document.getElementById("editDesc").value;
  let userObj = {
    "title" : title,
    "imageURL" : imageURL,
    "price" : price,
    "desc" : desc
  }
  id = id+""
  editProd(userObj,id)

  function editProd(userObj,id){

    fetch(`${mainServerURL}/${id}`,{
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(userObj)
    })
    .then(function(res){return res.json()})
    .then(function(data){console.log(data)})
  }
})
