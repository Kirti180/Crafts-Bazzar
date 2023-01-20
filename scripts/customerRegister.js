const userRegisterURL = 'https://63c657d5d307b76967371c02.mockapi.io/users';

let createAccountBtn=document.getElementById("create-account");

let Data=JSON.parse(localStorage.getItem("register"))||[];
let adminBtn=document.getElementById("admin");

adminBtn.addEventListener("click",()=>{
  window.location.href="././adminLogin.html"
})


createAccountBtn.addEventListener("click",()=>{
let firstnameInput=document.getElementById("firstName");
let lastnameInput=document.getElementById("lastName");
let emailInput=document.getElementById("email");
let passwordInput=document.getElementById("password");

        let obj={
            firstame:firstnameInput.value,
            lastname:lastnameInput.value,
            email:emailInput.value,
            password:passwordInput.value
        }

        fetch(userRegisterURL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          })
            .then((res) => res.json())
            .then((data) =>
             alert(JSON.stringify(`Dear ${data.firstame} Your Registration is Successful!`)))
            
            .catch((err) => alert(err));
            
            
        });