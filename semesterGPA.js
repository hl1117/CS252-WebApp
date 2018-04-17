function getValues()
{
  var class1 = document.getElementById("class1").value;
  var class3 = document.getElementById("ch1").value;
  var gpaVal1 = getNumbers();
  var indexPoint = class3 * gpaVal;
  window.alert("index points: " + indexPoint);
}


function getNumbers()
{
  var gpaVal;
  if (document.getElementById("grades").value == "A+")
  {
    gpaVal = 4.0;
    //window.alert(gpaVal);
  } else if (document.getElementById("grades").value == "A")
  {
    gpaVal = 4.0;
    //window.alert(gpaVal);
  } else if (document.getElementById("grades").value == "A-")
  {
    gpaVal = 3.7;
    //window.alert(gpaVal);
  } else if (document.getElementById("grades").value == "B+")
  {
    gpaVal = 3.3;
    //window.alert(gpaVal);
  } else if (document.getElementById("grades").value == "B")
  {
    gpaVal = 3.0;
    //window.alert(gpaVal);
  } else if (document.getElementById("grades").value == "B-")
  {
    gpaVal = 2.7;
    //window.alert(gpaVal);
  } else if (document.getElementById("grades").value == "C+")
  {
    gpaVal = 2.3;
    //window.alert(gpaVal);
  } else if (document.getElementById("grades").value == "C")
  {
    gpaVal = 2.0;
    //window.alert(gpaVal);
  } else if (document.getElementById("grades").value == "C-")
  {
    gpaVal = 1.7;
    //window.alert(gpaVal);
  } else if (document.getElementById("grades").value == "D+")
  {
    gpaVal = 1.3;
    //window.alert(gpaVal);
  } else if (document.getElementById("grades").value == "D")
  {
    gpaVal = 1.0;
    //window.alert(gpaVal);
  } else if (document.getElementById("grades").value == "D-")
  {
    gpaVal = 0.7;
    //window.alert(gpaVal);
  } else if (document.getElementById("grades").value == "F")
  {
    gpaVal = 0.0;
    //window.alert(gpaVal);
  }
  return gpaVal;

}
