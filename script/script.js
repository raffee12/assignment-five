// Button One;

document.getElementById("btn-one").addEventListener("click", function(){
    alert("Board Updated Successfully")
    disabled("btn-one");
    const taskName = document.getElementById("task-name-one").innerHTML
    taskProgress(taskName)
    increment("number")
    decrement("assignment-number")
})
// two
document.getElementById("btn-two").addEventListener("click", function(){
    alert("Board Updated Successfully")
    disabled("btn-two")
    const taskName = document.getElementById("task-name-two").innerHTML
    taskProgress(taskName)
    increment("number")
    decrement("assignment-number")
})
//three
document.getElementById("btn-three").addEventListener("click", function(){
    alert("Board Updated Successfully")
    disabled("btn-three")
    const taskName = document.getElementById("task-name-three").innerHTML
    taskProgress(taskName)
    increment("number")
    decrement("assignment-number")
})
// four
document.getElementById("btn-four").addEventListener("click", function(){
    alert("Board Updated Successfully")
    disabled("btn-four")
    const taskName = document.getElementById("task-name-four").innerHTML
    taskProgress(taskName)
    increment("number")
    decrement("assignment-number")
})
// Five
document.getElementById("btn-five").addEventListener("click", function(){
    alert("Board Updated Successfully")
    disabled("btn-five")
    const taskName = document.getElementById("task-name-five").innerHTML
    taskProgress(taskName)
    increment("number")
    decrement("assignment-number")
})
// Six
document.getElementById("btn-six").addEventListener("click", function(){
    alert("Board Updated Successfully")
    disabled("btn-six")
    const taskName = document.getElementById("task-name-six").innerHTML
    taskProgress(taskName)
    increment("number")
    decrement("assignment-number")
    alert("Congrats!!! You have completed all the current task")
})

document.getElementById("clear-btn").addEventListener("click", function(){
  const a=  document.querySelectorAll(".activity-container");
  a.forEach((elem)=> {
 elem.remove();
 abled ()
  })


   
})

// discover

document.getElementById("discover").addEventListener("click", ()=> {
    window.location.href = "../qna.html";
})

git add file.html
git commit -m "qna.html"
git push origin main