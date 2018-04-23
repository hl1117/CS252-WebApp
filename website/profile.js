


function updateinfo() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var major = document.getElementById('major').value;
  var minor = document.getElementById('minor').value;
  var yearofgrad = document.getElementById('gradyear').value;
  var college = document.getElementById('college').value;

  console.log(name);
  console.log(email);
  console.log(major);
  console.log(minor);
  console.log(yearofgrad);
  console.log(college);
  classes(name, email, major, minor, yearofgrad, college);
  retrieve();
}


function test()
{
  //window.alert("this is a test");

  var currentuser = firebase.auth().currentUser;
  var database = firebase.database();
  var testRef = database.ref(currentuser.uid);
  //var tRef = testRef.ref(currentuser.uid)
  var result = testRef.set({
    email: currentuser.email,
    color: 'pink',
    classes: 'none'
  });

}


function classes(name, email, major, minor, yearofgrad, college) {
  var currentuser = firebase.auth().currentUser;
  var database = firebase.database();
  var testRef = database.ref('/profile/' + currentuser.uid);
  //var tRef = testRef.ref(currentuser.uid)

  var result = testRef.set({
    Name: name,
    Email: email,
    Major: major,
    Minor: minor,
    YearofGraduation: yearofgrad,
    College: college
  });
}

function retrieve() {
  var database = firebase.database();
  var ref = database.ref('profile');
  ref.on('value', gotData, errData);

}

var collegevalue;
var namevalue;
var emailvalue;
var minorvalue;
var majorvalue;
var ygvalue;

function gotData(data) {
  var currentuser = firebase.auth().currentUser;

  var college = data.val();
  var keys = Object.keys(college);
  console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    if (k == currentuser.uid) {
      collegevalue = college[k].College;
      namevalue = college[k].Name;
      emailvalue = college[k].Email;
      minorvalue = college[k].Minor;
      majorvalue = college[k].Major;
      ygvalue = college[k].YearofGraduation;
    }
  }

  // console.log(collegevalue);
   console.log(namevalue);
  // console.log(emailvalue);
  // console.log(majorvalue);
  // console.log(minorvalue);
  // console.log(ygvalue);
}

function errData() {
  console.log('Error!');
  console.log(err);
}

function getstuff() {
  console.log("college value: " + collegevalue);

  if (collegevalue == 'ag')
  {
    window.location.href='https://www.admissions.purdue.edu/majors/agriculture/index.php';
  }
  else if (collegevalue == 'ed') {
    window.location.href='https://www.admissions.purdue.edu/majors/education/index.php';

  } else if (collegevalue == 'eng') {
    window.location.href='https://www.admissions.purdue.edu/majors/engineering/index.php';

  } else if (collegevalue == 'es') {
    window.location.href='https://www.admissions.purdue.edu/majors/exploratory-studies/index.php';

  }
  else if (collegevalue == 'hhs') {
    window.location.href='https://www.admissions.purdue.edu/majors/health-and-human-sciences/index.php';

  }
  else if (collegevalue == 'la') {
    window.location.href='https://www.admissions.purdue.edu/majors/liberal-arts/index.php';

  }
  else if (collegevalue == 'ksm') {
    window.location.href='https://www.admissions.purdue.edu/majors/management/index.php';

  }
  else if (collegevalue == 'pharm') {
    window.location.href='https://www.admissions.purdue.edu/majors/pharmacy/index.php';

  }
  else if (collegevalue == 'poly') {
    window.location.href='https://www.admissions.purdue.edu/majors/polytechnic/index.php';

  }
  else if (collegevalue == 'sci') {
    window.location.href='https://www.admissions.purdue.edu/majors/science/index.php';

  }
  else if (collegevalue == 'cvm') {
    window.location.href='https://www.admissions.purdue.edu/majors/veterinary-medicine/index.php';

  }
  else {
    console.log("nothing selected");
  }
}

function gotocollegewebsite() {
  getstuff();
}

function script() {
  var database = firebase.database();
  var ref = database.ref('profile');
  ref.on('value', gotData2, errData);
  // var n = namevalue + "";
  // document.getElementById('name').value = n;
}

function gotData2(data) {
  var currentuser = firebase.auth().currentUser;

  var college = data.val();
  var keys = Object.keys(college);
  console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    if (k == currentuser.uid) {
      //collegevalue = college[k].College;
      document.getElementById('name').value = college[k].Name;
      document.getElementById('email').value = college[k].Email;
      document.getElementById('minor').value = college[k].Minor;
      document.getElementById('major').value = college[k].Major;
      document.getElementById('gradyear').value = college[k].YearofGraduation;
      document.getElementById('college').value = college[k].College;
      collegevalue = college[k].College;
    }
  }
  }
