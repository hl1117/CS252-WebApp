(function() {

  // // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyBuIpaeijwTQrqOjr3r50m8_PkhNQWoaWE",
  //   authDomain: "example-22160.firebaseapp.com",
  //   databaseURL: "https://example-22160.firebaseio.com",
  //   projectId: "example-22160",
  //   storageBucket: "example-22160.appspot.com",
  //   messagingSenderId: "268241068107"
  // };
  // firebase.initializeApp(config);

//Get elements
const userEmail = document.getElementById('email_field');
const userPass = document.getElementById('password_field');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');
const btnSignUp = document.getElementById('btnSignUp');

btnLogin.addEventListener('click', e => {
  const email = userEmail.value;
  const pass = userPass.value;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

btnSignUp.addEventListener('click', e => {
  const email = userEmail.value;
  const pass = userPass.value;
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  }
  else {
    console.log('not logged in');
    btnLogout.classList.add('hide');
  }

});




}());
