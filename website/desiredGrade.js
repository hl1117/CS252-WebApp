//input variables
function finalGrade() {

var currentGrade = document.getElementById("currentGrade").value;
var desiredGrade = document.getElementById("desiredGrade").value;
var finalWorth = document.getElementById("finalWorth").value;

var gradeNeeded = (desiredGrade - ((1 - (finalWorth * 0.01)) * (currentGrade * 0.01)) / (finalWorth * 0.01));

document.getElementById('gradeNeeded').value = gradeNeeded;
console.log(gradeNeeded);
}
