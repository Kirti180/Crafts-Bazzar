
let ans = "";
function clickEvent(first, last) {
  if (first.value.length) {
    let val1 = document.querySelector("#ist").value;
    let val2 = document.querySelector("#sec").value;
    let val3 = document.querySelector("#third").value;
    let val4 = document.querySelector("#fourth").value;
    document.getElementById(last).focus();
    ans = val1 + val2 + val3 + val4;
    console.log(ans);
  }
}

function handleClick() {
    if (ans == "1234") {
      window.location.href="./adminRegister.html"
      
  
    }
}