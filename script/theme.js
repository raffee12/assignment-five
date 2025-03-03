const randomColorGenerator = function(){
    const randomNumber = Math.floor(Math.random() *16777215);
    const randomCode = "#" + randomNumber.toString(16)
    document.body.style.transition = '2s'
    document.body.style.backgroundColor = randomCode
    console.log(randomNumber, randomCode)
}

document.getElementById("btn").addEventListener("click", randomColorGenerator )