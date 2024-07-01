// gradeGenerator.js
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output:process.stdout
});
function getGrade (marks){
    const marksNum = parseFloat(marks,10);
if (isNaN (marksNum)||marksNum < 0 || marksNum > 100){
    console.log("Enter valid marks.")
return;}

let grade;

if (marksNum >= 79.0){
    grade = 'A'
}
else if (marksNum >= 60.0){
    grade = 'B'
}
else if (marksNum >= 49.0){
    grade = 'C'
}
else{
    grade = 'E'
}
 
console.log(`You got ${marksNum} which is ${grade}.`);
}
rl.question('Enter marks between (0 - 100): ', (answer) => {
    getGrade(answer);
    rl.close();
});