
function timeUpdate(){

    let dateObj = new Date();
    let hr = dateObj.getHours();
    // hr = hr < 10 ? "0" + hr : hr
    let convertedHr = hr.toString();;
    let min = dateObj.getMinutes();
    min = min < 10 ? "0" + min : min
    let convertedMin = min.toString();
    let sec = dateObj.getSeconds();
    sec = sec < 10 ? "0" + sec : sec
    let convertedSec = sec.toString();
    let ampm = "AM"
let time = convertedHr +":" +convertedMin + ":" + convertedSec + " " +  ampm
  if( hr > 12){

  convertedHr = hr - 12
    ampm = "PM";
   return convertedHr +":" +convertedMin + ":" + convertedSec + " " +  ampm
  }  
  
  return time
  
    
}
