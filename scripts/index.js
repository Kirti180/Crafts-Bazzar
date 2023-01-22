
// CAROUSEL SECTION 
let cont = document.getElementById("carousel")
let image = document.createElement("img")
let productimage=document.getElementById("pro_image1")
let productimage1=document.getElementById("pro_image2")
let productimage2=document.getElementById("pro_image3")
let productimage3=document.getElementById("pro_image4")
let productimage4=document.getElementById("pro_image5")
let productimage5=document.getElementById("pro_image6")
let productimage6=document.getElementById("pro_image7")
let productimage7=document.getElementById("pro_image8")
let productimage8=document.getElementById("pro_image9")
let arr = ["https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png",
            "https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png",
            "https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png",
        ]
image.src = arr[0]
cont.append(image);
let index = 1
setInterval(function(){
  if(index == 3){index=0}
  image.src = arr[index]
  cont.append(image)
  index++;
},3000)

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

productimage.addEventListener("click",()=>{
  window.location.href="product.html"
})

productimage1.addEventListener("click",()=>{
  window.location.href="product.html"
})

productimage2.addEventListener("click",()=>{
  window.location.href="product.html"
})

productimage3.addEventListener("click",()=>{
  window.location.href="product.html"
})

productimage4.addEventListener("click",()=>{
  window.location.href="product.html"
})
productimage5.addEventListener("click",()=>{
  window.location.href="product.html"
})
productimage6.addEventListener("click",()=>{
  window.location.href="product.html"
})
productimage7.addEventListener("click",()=>{
  window.location.href="product.html"
})
productimage8.addEventListener("click",()=>{
  window.location.href="product.html"
})
productimage9.addEventListener("click",()=>{
  window.location.href="product.html"
})