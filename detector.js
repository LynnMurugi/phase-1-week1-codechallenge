const prompt = require('prompt-sync')();
let speed = Number(prompt("Enter speed:"));
const base_speed = 70
 function speedlimit (speed){
    
    if (isNaN (speed) || speed <= 0){
        return "Enter a speed above 0 km/h.";
    }else {
        let speedNum = parseFloat(speed );
            let speed_difference = speedNum - base_speed;
            let demeritPoints = speed_difference / 5; 

            if (demeritPoints > 12){
                return `licence suspended`;
            }else if(demeritPoints <=0){
                return `keep license`
            } else {
                return `points earned : ${demeritPoints}!`
        

        }
    }
 }
 console.log(speedlimit(speed));

//const speedrange = 70;
//const kmPerDemeritPoint = 5;

//if(speedNum <= speedrange){
  //   console.log("ok");
//}
//else {
  //  const demeritPoints = Math.floor((speedNum - speedrange) / kmPerDemeritPoint);
    //if(demeritPoints > 12){
      //  console.log ("license suspended");
    //}
    //else{
      //  console.log(`DemeritPoint is ${demeritPoints}`);
    //}
//}
 //}
