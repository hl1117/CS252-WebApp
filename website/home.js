function script(){
    // code goes here
    // var currentuser = firebase.auth().currentUser;
// 	var database = firebase.database();
// 	var userRef = database.ref(currentuser.uid);
// 	
// 	var result = userRef.set({
// 		currentUser: currentuser.email,
// 		color: 'purple',
// 		classes: 'none'
// 	});
	
	//test();

};



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

function classes()
{
	var currentuser = firebase.auth().currentUser;
	var database = firebase.database();
	var testRef = database.ref(currentuser.uid + '/classes');
	//var tRef = testRef.ref(currentuser.uid)
	var result = testRef.set({
		cs252: 'currently taking',
		cs307: 'currently taking'
	});
}