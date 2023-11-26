const getColor = () =>{
     const randomNumber = Math.floor(Math.random() * 16777215);
     const randomCode = "#" + randomNumber.toString(16);
     // console.log(randomCode,randomNumber);
     document.body.style.backgroundColor = randomCode;
     document.getElementById("color_code").innerText = randomCode;

     navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener(
     "click",
     getColor
)

getColor();