function disabled(id){
 
         document.getElementById(id).style.opacity = "0.5"
    
}
function abled (){
   const b = document.querySelectorAll(".status-btn");
   b.forEach((elem)=> {
elem.style.opacity = "1"
   })
}

function taskProgress(taskName){
    
    const sidebarElem = document.getElementById("sidebar")
    const containerElem = document.createElement("div")
    containerElem.className = "activity-container"
  
    containerElem.style.backgroundColor = "#f4f7ff"
  
    containerElem.innerHTML = `<p>You have complete the task ${taskName} at  ${timeUpdate()}

    </p>`;
 sidebarElem.appendChild(containerElem)

}


function decrement(id){
 let num =   document.getElementById(id).innerText

 let convertedNum = parseInt(num);

convertedNum --;


if(convertedNum < 0){
   document.getElementById(id).innerHTML = 0
} else {
   document.getElementById(id).innerHTML = convertedNum


}
}

function increment(id){
 let num=  document.getElementById(id).innerText;
 let convertedNum = parseInt(num);

 convertedNum ++;
 document.getElementById(id).innerHTML = convertedNum
}