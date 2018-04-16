const class1 = document.getElementById('class1').value;
const class2 = document.getElementById('class2').value;
const class3 = document.getElementById('class3').value;
const class4 = document.getElementById('class4').value;
const class5 = document.getElementById('class5').value;
const class6 = document.getElementById('class6').value;
const class7 = document.getElementById('class7').value;
const class8 = document.getElementById('class8').value;

var gpa1 = document.getElementById('g1').value;
var gpa2 = document.getElementById('g2').value;
var gpa3 = document.getElementById('g3').value;
var gpa4 = document.getElementById('g4').value;
var gpa5 = document.getElementById('g5').value;
var gpa6 = document.getElementById('g6').value;
var gpa7 = document.getElementById('g7').value;
var gpa8 = document.getElementById('g8').value;

var c1 = document.getElementById('ch1').value;
var c2 = document.getElementById('ch2').value;
var c3 = document.getElementById('ch3').value;
var c4 = document.getElementById('ch4').value;
var c5 = document.getElementById('ch5').value;
var c6 = document.getElementById('ch6').value;
var c7 = document.getElementById('ch7').value;
var c8 = document.getElementById('ch8').value;

var val1;
var val2;
var val3;
var val4;
var val5;
var val6;
var val7;
var val8;

var avgGPA;
var sumofindexpts;
var sumofcredithours;
//indexpts = credithours * lettergradeGPA

function calculate() {
  var IP = indexpoints();
  var CH = totalcredithours();
  avgGPA = IP/CH;
  //window.alert(IP);
}

function indexpoints() {
  val1 = letterToPoints(gpa1);
  val2 = letterToPoints(gpa2);
  val3 = letterToPoints(gpa3);
  val4 = letterToPoints(gpa4);
  val5 = letterToPoints(gpa5);
  val6 = letterToPoints(gpa6);
  val7 = letterToPoints(gpa7);
  val8 = letterToPoints(gpa8);

  sumofindexpts = (val1 * c1) + (val2 * c2) + (val3 * c3) +
  (val4 * c4) + (val5 * c5) + (val6 * c6) + (val7 * c7) + (val8 * c8);
  //return sumofindexpts;
  console.log(sumofindexpts);
}

function totalcredithours() {
  sumofcredithours = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8;
  return sumofcredithours;
}

// function changetopoints() {
//   val1 = letterToPoints(gpa1);
//   val2 = letterToPoints(gpa2);
//   val3 = letterToPoints(gpa3);
//   val4 = letterToPoints(gpa4);
//   val5 = letterToPoints(gpa5);
//   val6 = letterToPoints(gpa6);
//   val7 = letterToPoints(gpa7);
//   val8 = letterToPoints(gpa8);
// }

// function getvalues() {
//   const class1 = document.getElementById('class1');
//   const class2 = document.getElementById('class2');
//   const class3 = document.getElementById('class3');
//   const class4 = document.getElementById('class4');
//   const class5 = document.getElementById('class5');
//   const class6 = document.getElementById('class6');
//   const class7 = document.getElementById('class7');
//   const class8 = document.getElementById('class8');
//
//   var gpa1 = document.getElementById('g1');
//   var gpa2 = document.getElementById('g2');
//   var gpa3 = document.getElementById('g3');
//   var gpa4 = document.getElementById('g4');
//   var gpa5 = document.getElementById('g5');
//   var gpa6 = document.getElementById('g6');
//   var gpa7 = document.getElementById('g7');
//   var gpa8 = document.getElementById('g8');
// }

function letterToPoints(grade) {
  if ("A+" == grade) {
    return 4.0;
  }
  else if ("A" == grade) {
    return 4.0;
  }
  else if ("A-" == grade) {
    return 3.7;
  }
  else if ("B+" == grade) {
    return 3.3;
  }
  else if ("B" == grade) {
    return 3.0;
  }
  else if ("B-" == grade) {
    return 2.7;
  }
  else if ("C+" == grade) {
    return 2.3;
  }
  else if ("C" == grade) {
    return 2.0;
  }
  else if ("C-" == grade) {
    return 1.7;
  }
  else if ("D+" == grade) {
    return 1.3;
  }
  else if ("D" == grade) {
    return 1.0;
  }
  else if ("D-" == grade) {
    return 0.7;
  }
  else if ("F" == grade) {
    return 0.0;
  }
  else {
    window.alert("Invalid Details")
  }
}
