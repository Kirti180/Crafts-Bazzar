// Filter
var show = true;

function showCheckboxes() {
    var checkboxes =
        document.getElementById("checkBoxes");

    if (show) {
        checkboxes.style.display = "block";
        show = false;
    }
    else {
        checkboxes.style.display = "none";
        show = true;
    }
}
var show = true;

function showCheckboxes1() {
    var checkboxes =
        document.getElementById("checkBoxes1");

    if (show) {
        checkboxes.style.display = "block";
        show = false;
    }
    else {
        checkboxes.style.display = "none";
        show = true;
    }
}
var show = true;

function showCheckboxes2() {
    var checkboxes =
        document.getElementById("checkBoxes");

    if (show) {
        checkboxes.style.display = "block";
        show = false;
    }
    else {
        checkboxes.style.display = "none";
        show = true;
    }
}

function showPrice() {
    let arr = [];
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].price <= 500) {
            arr.push(data[i]);
            // DisplayTable(arr)
        }
        //  if (data[i].price > 500 && data[i].price <= 1000) {
        //     arr1.push(data[i]);
        // }
        //  if (data[i].price > 1000 && data[i].price <= 2000) {
        //     arr2.push(data[i]);
        // }
        //  if (data[i].price > 2000 && data[i].price <= 5000) {
        //     arr3.push(data[i]);
        // }
        //  if (data[i].price > 5000) {
        //     arr4.push(data[i]);
        // }
    }
    //  console.log(arr) 
    DisplayTable(arr)
   
    // //    console.log(arr2) 
    // DisplayTable(arr2)
    // //    console.log(arr3) 
    // DisplayTable(arr3)
    // //    console.log(arr4) 
    //  DisplayTable(arr4)
}

function showPrice1() {
    let arr1 = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].price > 500 && data[i].price <= 1000) {
            arr1.push(data[i]);
        }    
    }
    //    console.log(arr1) 
    DisplayTable(arr1)
}
function showPrice2() {
    let arr2 = [];
    for (let i = 0; i < data.length; i++) {
         if (data[i].price > 1000 && data[i].price <= 2000) {
            arr2.push(data[i]);
        }
    }
    //    console.log(arr2) 
     DisplayTable(arr2)
    
}
function showPrice3() {
    let arr3 = [];
    for (let i = 0; i < data.length; i++) {
         if (data[i].price > 2000 && data[i].price <= 5000) {
            arr3.push(data[i]);
        }
        
    }
    console.log(arr3) 
     DisplayTable(arr3)
   
}
function showPrice4() {
    let arr4 = [];
    for (let i = 0; i < data.length; i++) {
         if (data[i].price > 5000) {
            arr4.push(data[i]);
        }
   
    console.log(arr4) 
      DisplayTable(arr4)

}

function showCategory() {
    let cat = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].category === "fashion") {
            cat.push(data[i]);
        }
        //  if (data[i].category == "ceramic mugs") {
        //     cat1.push(data[i]);
        // }
        // if (data[i].category == "home decor") {
        //     cat2.push(data[i]);
        // }
        // if (data[i].category > "idols") {
        //     cat3.push(data[i]);
        // }
        // if (data[i].category == "kitchen Ware") {
        //     cat4.push(data[i]);
        // }
    }
    //    console.log(cat) 
     DisplayTable(cat)
    //    console.log(cat1) 
    // DisplayTable(cat1)
    // //   console.log(cat2) 
    // DisplayTable(cat2)
    // //   console.log(cat3) 
    // DisplayTable(cat3)
    // //   console.log(cat4) 
    // DisplayTable(cat4)
}
function showCategory1() {
    let cat1 = [];
    for (let i = 0; i < data.length; i++) {
       if (data[i].category == "ceramic mugs") {
            cat1.push(data[i]);
        }
    }
        console.log(cat1) 
    DisplayTable(cat1)
}
function showCategory2() {
    let cat2 = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].category == "home decor") {
            cat2.push(data[i]);
        }
    }
       console.log(cat2) 
    DisplayTable(cat2)
}
function showCategory3() {
    let cat3 = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].category > "idols") {
            cat3.push(data[i]);
        }
    }
       console.log(cat3) 
    DisplayTable(cat3)
}
function showCategory4() {
    let cat4 = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].category == "kitchen Ware") {
            cat4.push(data[i]);
        }
    }
       console.log(cat4) 
    DisplayTable(cat4)
}


// Fetch and Render
let url = "https://63c657d5d307b76967371c02.mockapi.io/products";

let data = [];

async function getData() {
    try {
        let res = await fetch(url);
        let out = await res.json();
        data = [...out]
        //  console.log(data)
        DisplayTable(data);
    } catch (err) {
        alert(err);
    }
}
getData();

let cartArr = JSON.parse(localStorage.getItem("Cart")) || [];

function DisplayTable(Data) {
    // console.log(Data)
    let mainSection = document.getElementById("product");
    mainSection.textContent = "";

    Data.forEach(function (el, i) {
        let card = document.createElement("div")

        let productImg = document.createElement("img")
        productImg.src = el.image;

        let title = document.createElement("h2")
        title.innerText = el.title;

        let price = document.createElement("p")
        price.innerText = "₹ " + el.price;

        let btn = document.createElement("button")
        btn.innerText = "Add to cart"
        btn.addEventListener("click", function () {
            // addTocart(el);
            alert("Product Successfully added to Cart");
            cartArr.push(el);
            localStorage.setItem("Cart", JSON.stringify(cartArr));
            // window.location.href="cart.html"
        });


        card.append(productImg, title, price, btn)

        document.querySelector("#product").append(card);
    })
}

// function addTocart(el) {
//     //  cartArr.push(el);
//     // localStorage.setItem("cart",JSON.stringify(cartArr));
//     //    console.log(cartArr)
// }

// // SORT
function Sorting() {
    let selected = document.querySelector("#LTH").value;
    const eitherSort = (data = []) => {
        const sorter = (a, b) => {
            return +a.price - +b.price;
        };
        data.sort(sorter);
    };
    eitherSort(data);
    // console.log(data);
    DisplayTable(data)
}

function Sorting2() {
    let HTL = document.querySelector("#HTL").value;
    const eitherSort = (data = []) => {
        const sorter = (a, b) => {
            return +b.price - +a.price;
        };
        data.sort(sorter);
    };
    eitherSort(data);
    // console.log(data);
    DisplayTable(data)
}

