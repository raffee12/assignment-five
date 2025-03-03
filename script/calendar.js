const monthName = document.getElementById("month")
const dayName = document.getElementById("day")
const weekName = document.getElementById("week")
const yearName = document.getElementById("year")

const dateObj = new Date();
// const getMonth = dateObj.getMonth()
monthName.innerText = dateObj.toLocaleString("en", {
    month : "long"
})

weekName.innerText = dateObj.toLocaleString("en", {
    weekday : "long" 
}) + " , "
dayName.innerText = dateObj.getDate();
yearName.innerText = dateObj.getFullYear()
