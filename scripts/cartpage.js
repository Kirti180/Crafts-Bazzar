//let delete_list=JSON.parse(localStorage.getItem("delete")) || []
    let cart=document.getElementById("Cart");
    let empty=document.getElementById("submit")
    let buy=document.getElementById("submit")
  let contain=document.getElementById("contain")
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

          function displayproduct(data){
        document.querySelector("#product").innerHTML="";
        data.forEach((element)=>{
          let card=document.createElement("div");
          let image=document.createElement("img");
          image.setAttribute("src",element.image);
          let name=document.createElement("h2");
          name.innerText=element.title;
          let price=document.createElement("p");
          price.innerText="₹ "+element.price;
          let desc=document.createElement("h3");
          desc.innerText=element.desc;
          //let del=document.createElement("button");
          let quantity=document.createElement("h3");
           localStorage.setItem("checkout",JSON.stringify(cartdata));
          //   window.location.href="./cart.html";
          // })
          card.append(image,name,price,desc);
          cart.append(card);
        });
      }
