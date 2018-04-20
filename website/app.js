// function login()
// {
// 	var login = true;
// 	const email = document.getElementById("txtemail").value;
// 	const password = document.getElementById("password").value;
// 	//window.alert(email + " " + password);
// 	
// 	firebase.auth().signInWithEmailAndPassword(email, password)
// 	.catch(function (err) {
// 		window.alert("Error Signing in");
// 		login = false;
// 	});
// 	
// 	if (login == true)
// 	{
// 		window.location = 'home.html';
// 	}
// 	
// 	
// 	
// }
// 
// function registerUser()
// {
// 	var success = true;
// 	const email = document.getElementById("txtemail").value;
// 	const password = document.getElementById("password").value;
// 	//window.alert(email + " " + password);
// 		
// 	firebase.auth().createUserWithEmailAndPassword(email, password)
// 	.catch(function (err){
// 		succcess = false
// 		window.alert(err.message);
// 		
// 	});
// 	
// 	//window.alert("Successful!")
// 	var userId = firebase.auth().currentUser.uid;
// 	firebase.database().ref().child("Users").child(userId);
// 	window.location = 'home.html';
// }




