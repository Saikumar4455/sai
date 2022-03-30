function loops () {
	//forloop1();
	//forloop2();
	forloop3();
	// forloop4();
	//forloop5();
}
function forloop1() {
	const students=["sai","raghu","srikanth","vinay","sampath"];
	let studentsstring="";
	for (let i=0; i < students.length; i++ ){
		console.log(students[i]);
		studentsstring=studentsstring+students[i];
	}
} 
function forloop2() {
	const color = ["Blue","red","Green","yellow"]
	let text ="";
	console.log(color.length);
	for (let i=0;i< color.length;i++ ) {
		text +=color[i] + "<br>";
	}
	console.log(text);
}
function forloop3() {
	const employe ={employeeId:"201",firstName:"sai",latName:"ambadi"} ;
	let text ="";
	let property;
	for (property in employe){
		text +=employe [property] + "<br>" ;
	}
	console.log(text);
}

