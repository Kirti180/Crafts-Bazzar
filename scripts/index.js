
// CAROUSEL SECTION 
let cont = document.getElementById("carousel")
let image = document.createElement("img")
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

