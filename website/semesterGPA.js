function creditHourMultiplier(grade, hours){
  var result;
  switch (grade) {
    case 'A+/A':
    result = 4 * hours;
    break;
    case 'A-':
    result = 3.7 * hours;
    break;
    case 'B+':
    result = 3.3 * hours;
    break;
    case 'B':
    result = 3 * hours;
    break;
    case 'B-':
    result = 2.7 * hours;
    break;
    case 'C+':
    result = 2.3 * hours;
    break;
    case 'C':
    result = 2 * hours;
    break;
    case 'C-':
    result = 1.7 * hours;
    break;
    case 'D+':
    result = 1.3 * hours;
    break;
    case 'D':
    result = 1 * hours;
    break;
    case 'D-':
    result = 0.7 * hours;
    break;
    case 'F':
    result = 0 * hours;
    break;
    default:
    result = 0;
    break;
  }

  return result;
}


function subjectTotalCalculator(gradeList){
  var sum = 0;
  for(var i = 0; i < gradeList.length; i++){
    sum += creditHourMultiplier(gradeList[i][0], gradeList[i][1]);
  }
  return sum;
}

function totalCreditHours(gradeList){
  var hours = 0;
  for(var i = 0; i < gradeList.length; i++){
    hours += gradeList[i][1];
  }
  return hours;
}

function calculateGPA(grades){

  return (subjectTotalCalculator(grades) / totalCreditHours(grades)).toFixed(2);
}

var gradesList = [''];

function calculate(){
  list = document.getElementsByTagName('tr').length-1;
  for (var i = 0; i < list; i++){
    var row = "row" + (i+1);
    var selection = row + "Select";
    var option = row + "opt";
    var grade = document.getElementById(selection);
    var hours = 0;
    if(document.getElementById(option + "0").checked) {
      hours = 0;
    } else if(document.getElementById(option + "1").checked) {
      hours = 1;
    } else if(document.getElementById(option + "2").checked) {
      hours = 2;
    } else if(document.getElementById(option + "3").checked) {
      hours = 3;
    } else if(document.getElementById(option + "4").checked) {
      hours = 4;
    } else if(document.getElementById(option + "5").checked) {
      hours = 5;
    }

    gradesList[i] = [grade.options[grade.selectedIndex].value, hours];

  }
  console.log(calculateGPA(gradesList));
  var gpaEL = document.getElementById('gpa');
  gpaEL.textContent = 'GPA: ' + calculateGPA(gradesList);
  gpaEL.className = ' ';

}

function addElement(){
  listSize = document.getElementsByTagName('tr').length;
  if(listSize == 0){
    listSize = 1;
  }
  var newRow = document.createElement('tr');
  var position = document.getElementsByTagName('tbody')[0];
  position.appendChild(newRow);
  newRow.innerHTML = buildListElement(listSize);
}

function buildListElement(i){
  var el = '<td>Class '+ i + '</td><td><div class="mdl-selectfield">';
  el += '<select id=\"row' + i + 'Select\">';
  el += '<option value=\"\" disabled selected>Select</option>';
  el += '<option value=\"A+/A\">A+/A</option>';
  el += '<option value=\"A-\">A-</option>';
  el += '<option value=\"B+\">B+</option>';
  el += '<option value=\"B\">B</option>';
  el += '<option value=\"B-\">B-</option>';
  el += '<option value=\"C+\">C+</option>';
  el += '<option value=\"C\">C</option>';
  el += '<option value=\"C-\">C-</option>';
  el += '<option value=\"D+\">D+</option>';
  el += '<option value=\"D\">D</option>';
  el += '<option value=\"D-\">D-</option>';
  el += '<option value=\"F\">F</option></select></div></td>';
  el += '<td><div class="switch-toggleswitch-custom">';
  el += '<input id=\"row' + i + 'opt0\" name=\"view' + i + '\" type=\"radio\">';
  el += '<label for=\"row' + i + 'opt0\"> 0    </label>';
  el += '<input id=\"row' + i + 'opt1\" name=\"view' + i + '\" type=\"radio\">';
  el += '<label for=\"row' + i + 'opt1\"> 1   </label>';
  el += '<input id=\"row' + i + 'opt2\" name=\"view' + i + '\" type=\"radio\">';
  el += '<label for=\"row' + i + 'opt2\"> 2   </label>';
  el += '<input id=\"row' + i + 'opt3\" name=\"view' + i + '\" type=\"radio\">';
  el += '<label for=\"row' + i + 'opt3\"> 3   </label>';
  el += '<input id=\"row' + i + 'opt4\" name=\"view' + i + '\" type=\"radio\">';
  el += '<label for=\"row' + i + 'opt4\"> 4   </label>';
  el += '<input id=\"row' + i + 'opt5\" name=\"view' + i + '\" type=\"radio\">';
  el += '<label for=\"row' + i + 'opt5\"> 5   </label>';
  el += '<a></a></div></td>';
  return el;
}


function goToNewScreen() {
	window.location.href='cumulativeGPA.html';
}
