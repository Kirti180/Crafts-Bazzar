//let delete_list=JSON.parse(localStorage.getItem("delete")) || []
    let cart=document.getElementById("Cart");
    let empty=document.getElementById("submit")
    let buy=document.getElementById("submit")

    let final_buy=document.getElementById("final_buy")
       final_buy.addEventListener("click",()=>
       {
        // localStorage.setItem("checkout1",JSON.stringify(cartdata));
        localStorage.setItem("price",total_price)
        // window.location.href="./checkout.html";
       })

    empty.addEventListener("click",() =>
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

let total_price;
          function displayproduct(data)
         {
        cart.innerHTML=null;
        let cartItemsfromLS=JSON.parse(localStorage.getItem("cart"));
        console.log(cartItemsfromLS);
    
         let total_price=cartItemsfromLS.reduce(function(acc,el){
            return acc+el.price;
         },0);
        console.log(total_price)
        localStorage.setItem("price1",total_price)
         document.querySelector("h2>span").innerText=total_price
        
    
         document.querySelector("h1>span").innerText=cartItemsfromLS.length;
    
        cartItemsfromLS.forEach(function(el,i){
           let card=document.createElement("div")
    
           let productImg=document.createElement("img")
           productImg.src=el.image;
    
           let title=document.createElement("h3")
           title.innerText=el.title;
    
           let price1=document.createElement("h4");
          price1.innerText="Price";
          let price=document.createElement("h5");
          price.innerText="Rs."+el.price;
           let span = document.createElement("span")
           let plusbtn=document.createElement("button")
           plusbtn.innerText="+";
           plusbtn.addEventListener("click",()=>{
                       el.quanity++
                        span.innerText = el.quanity
                        showtotal()
                    })
    
           let minusbtn=document.createElement("button")
           minusbtn.innerText="-";
           minusbtn.addEventListener("click",()=>{
                        el.quanity--
                        span.innerText = el.quanity
                        showtotal()
                    })
                    // btn.addEventListener("click",()=>{
                    //             data.splice(index,1)
                    //             localStorage.setItem("buy",JSON.stringify(data))
                    //             show()
                    //             showtotal()
                                  
                    //           })
    
           let buy=document.createElement("button")
           buy.innerText="BUY";
            buy.addEventListener("click",() =>
          { 
           alert("Order Placed Successfully");
            window.location.href="./checkout.html";
            localStorage.setItem("checkout",JSON.stringify(cartdata));
            localStorage.setItem("price",total_price)
          })
            
        
    
           card.append(productImg,title,price1,price,plusbtn,buy,minusbtn,span)
          
           document.querySelector("#container").append(card)
    })
           localStorage.setItem("checkout",JSON.stringify(cartdata));
          //   window.location.href="./cart.html";
          // })
        //   card.append(image,title,price1,price,plus,minus,span);
        //   cart.append(card);
        // });

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
      
