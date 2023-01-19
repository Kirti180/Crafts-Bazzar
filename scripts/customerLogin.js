let loginBtn=document.getElementById("login");
let customerBtn=document.getElementById("customer");
let adminBtn=document.getElementById("admin");
let emailInput=document.getElementById("email");
let passwordInput=document.getElementById("password")


    loginBtn.addEventListener("click",()=>{
        fetch("https://63c657d5d307b76967371c02.mockapi.io/users")
        .then((res)=>{return res.json()})
        .then((data)=>{
            console.log(data)
            data.map((element)=>{
                if((element.email==emailInput.value)&&(element.password==passwordInput.value)){
                   alert("Login Successful!")
                   window.location.href="./index.html"
                   
                }
            })
    
        })
        .catch((err)=>{console.log(err)})
    })


adminBtn.addEventListener("click",()=>{
    window.location.href="./adminLogin."
})
