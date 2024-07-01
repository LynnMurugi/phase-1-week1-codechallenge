const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin ,
    output: process.stdout
});
function speedlimit (speed){
    const speedNum = parseInt(speed , 10);
    if (isNaN (speedNum) || speedNum < 0){
        console.log = "Enter a speed above 0 km/h.";
        return;
    }


const speedrange = 70;
const kmPerDemeritPoint = 5;

if(speedNum <= speedrange){
     console.log("ok");
}
else {
    const demeritPoints = Math.floor((speedNum - speedrange) / kmPerDemeritPoint);
    if(demeritPoints > 12){
        console.log ("license suspended");
    }
    else{
        console.log(`DemeritPoint is ${demeritPoints}`);
    }
}
}
rl.question('Enter the speed', (answer) => {
    speedlimit(answer);
    rl.close();
} );