// gradeGenerator.js
const prompt = require('prompt-sync')() 
let marks = Number(prompt("Enter your marks:"));
function getGrade (marks){
    const marksNum = parseFloat(marks);
if (isNaN (marksNum)||marksNum < 0 || marksNum > 100){
    return("Enter valid marks.")
   }else if (marksNum  >= 79.0){
    return`grade = A!`;
    }else if (marksNum <79 && marksNum >= 60.0){
         return `grade = B!`;
    }else if (marksNum < 60 && marksNum >= 49.0){ 
        return `grade = C!`;
    }
    else {
         return`grade = E!`;
    }
}
console.log(getGrade(marks));

