//let delete_list=JSON.parse(localStorage.getItem("delete")) || []
    let cart=document.getElementById("Cart");
    let empty=document.getElementById("submit")
    let buy=document.getElementById("submit")
    empty.addEventListener("click",() =>
          { 
            localStorage.clear();
            window.location.href="./cartpage.html";

          })
          buy.addEventListener("click",() =>
          { 
            localStorage.clear();
            window.location.href="./cartpage.html";
           
          })
     let cartdata=JSON.parse(localStorage.getItem("cart"));
          if(cartdata===null)
          {
            cartdata=[];

          }

          displayproduct(cartdata);

          function displayproduct(data)
      {
        cart.innerHTML=null;
        data.forEach((element)=>
        {
          let card=document.createElement("div");
          let image=document.createElement("img");
          image.setAttribute("src",element.image);
          let title=document.createElement("h2");
          title.innerText=element.title;
          let price1=document.createElement("h3");
          price1.innerText="Price";
          let price=document.createElement("h3");
          price.innerText="Rs."+element.price;
          let desc=document.createElement("h3");
          desc.innerText=element.desc;
          let span = document.createElement("span")
          let plus=document.createElement("button");
           plus.innerText="+";
           plus.addEventListener("click",()=>{
            //console.log(element.quantity);
            element.quantity++;
            //console.log(item.quantity);
            span.innerText = element.quantity
            showtotal()
        })
           let minus=document.createElement("button");
           minus.innerText="-";
           minus.addEventListener("click",()=>{
                        element.quantity--;
                        span.innerText = element.quantity
                        showtotal()
                    })
          //let del=document.createElement("button");
          // let quantity=document.createElement("h3");
          //del.innerText="Delete";
          // del.addEventListener("click",() =>
          // {
          //   let cartdata = JSON.parse(localStorage.getItem("cart"));
          //   if(cartdata===null) cartdata=[]; 
          //   cartdata.splice(element)
           localStorage.setItem("checkout",JSON.stringify(cartdata));
          //   window.location.href="./cart.html";
          // })
          card.append(image,title,price1,price,desc,plus,minus,span);
          cart.append(card);
        });
      }
       let total = document.getElementById("order-total")
      //  let input = document.getElementById("input")
      // let btn = document.getElementById("btn")
      // let body = document.getElementById("order-container")
         let data = JSON.parse(localStorage.getItem("buy"))||[]

// function show(){
//     body.innerHTML = null

//     data.forEach((item,index)=>{
//         let div = document.createElement("div")
//         let img = document.createElement("img")
//         let h3 = document. createElement("h3")
//         let des = document.createElement("p")
//         let rate = document.createElement("p")
//         let btn = document.createElement("button")
//         let add = document.createElement("button")
//         let less = document.createElement("button")
//         let span = document.createElement("span")

//         img.setAttribute("src",item.image)
//         h3.innerText = item.title
//         des.innerText = item.description
//         rate.innerText = item.price
//         btn.innerText = "Cancel"
//         span.innerText = item.quanity
//         add.innerText = "+"
//         less.innerText = "-"

//         plus.addEventListener("click",()=>{
//             item.quanity++
//             span.innerText = item.quanity
//             showtotal()
//         })
//         minus.addEventListener("click",()=>{
//             item.quanity--
//             span.innerText = item.quanity
//             showtotal()
//         })

//         // btn.addEventListener("click",()=>{
//         //   data.splice(index,1)
//         //   localStorage.setItem("buy",JSON.stringify(data))
//         //   show()
//         //   showtotal()
            
//         })

        
//     })
// }
// show()
// console.log(data)
let sum;
function showtotal(){
    sum = 0
    for(let key of data){
        sum += key.price*key.quantity
    }
    total.innerText=sum 
    
}
      showtotal()
// btn.addEventListener("click",()=>{
//     let result = input.value

//     if(result == "Masai30"){
//         temp = sum*0.3
//         total.innerText = sum-temp
//     }
//})
      
