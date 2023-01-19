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
          let name=document.createElement("h2");
          name.innerText=element.name;
          let price1=document.createElement("h3");
          price1.innerText="Price";
          let price=document.createElement("h3");
          price.innerText="$"+element.price;
          let desc=document.createElement("h3");
          desc.innerText=element.desc;
          //let del=document.createElement("button");
          let quantity=document.createElement("h3");
          //del.innerText="Delete";
          // del.addEventListener("click",() =>
          // {
          //   let cartdata = JSON.parse(localStorage.getItem("cart"));
          //   if(cartdata===null) cartdata=[]; 
          //   cartdata.splice(element)
           localStorage.setItem("checkout",JSON.stringify(cartdata));
          //   window.location.href="./cart.html";
          // })
          card.append(image,name,price1,price,desc);
          cart.append(card);
        });
      }
