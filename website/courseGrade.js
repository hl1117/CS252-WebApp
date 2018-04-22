function calculate() {
  var inputs = getInputs();
}


function getInputs() {
	var i1 = document.getElementById("input1").value;
	var i2 = document.getElementById("input2").value;
	var i3 = document.getElementById("input3").value;
	var i4 = document.getElementById("input4").value;
	var i5 = document.getElementById("input5").value;
	var i6 = document.getElementById("input6").value;
	var i7 = document.getElementById("input7").value;
	var i8 = document.getElementById("input8").value;
	var i9 = document.getElementById("input9").value;
	var i10 = document.getElementById("input10").value;

	var w1 = document.getElementById("w1").value;
	var w2 = document.getElementById("w2").value;
	var w3 = document.getElementById("w3").value;
	var w4 = document.getElementById("w4").value;
	var w5 = document.getElementById("w5").value;
	var w6 = document.getElementById("w6").value;
	var w7 = document.getElementById("w7").value;
	var w8 = document.getElementById("w8").value;
	var w9 = document.getElementById("w9").value;
	var w10 = document.getElementById("w10").value;


	var first = (i1 * w1) + (i2 * w2) + (i3 * w3) + (i4 * w4) + (i5 * w5) + (i6 * w6) +
				(i7 * w7) + (i8 * w8) + (i9 * w9) + (i10 * w10);

	var weights = (w1*1) + (w2*1) + (w3*1) + (w4*1) + (w5*1) + (w6*1) + (w7*1) + (w8*1) + (w9*1) + (w10*1);

	console.log("weights: " + weights);
	var fgrade = (first / weights).toFixed(2);
	console.log("fgrade: "+ fgrade);
  var gpaEL = document.getElementById('grade');
  gpaEL.textContent = 'Current Grade ' + fgrade;
  gpaEL.className = ' ';
}
