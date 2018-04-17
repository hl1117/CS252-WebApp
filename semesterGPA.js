function getValues()
{
  var class1 = document.getElementById("class1").value;
  var class2 = document.getElementById("gpa1").value;
  var class3 = document.getElementById("ch1").value;
  document.write(class1 + " " + class2 + " " + class3);
}


function getNumbers()
{
  if (document.getElementById("grades").value == "A+")
  {
    var four = 4.0;
    window.alert(four);
  }
}
