	function loops() {
		console.log("main method");
		ifTrue();
		//ifFalse();
		//ifElseTrue();
	//ifElseFalse();
	//ifElseCondtion();
	//ElseIfLadder();
	switchCaseBreakCondition
}
function ifTrue () {
	if (true) {
		console.log("true condion");
	}
}
function ifFalse () {
	if (false){
		console.log("false condition");
	}
}
function ifElseTrue	() {
	if (true) {
		console.log("true condtion");
}
else {
		console.log("false condition");
}	}	
function ifElseFalse () {
	if (false) {
			console.log("true condition");
	}
else {
	console.log("false condition")
}
  }
function ifElseCondtion() {
	var age =19;
	if (age>=18) {
		console.log("you are eligible to apply Driving Licence");
	    }
else {
	console.log("you are not eligible to apply for Driving Licence,please apply after"+" "+(18-age)+" "+"years");
    }
}
function ElseIfLadder() {
		const time=new Date().gethours;
		let greeting;
		if (time<10) {
			greeting ="Good Morning";
		}
		else if (time < 20){
			greeting="Good Day";
		}
		else {
			greeting="Good Evening";
		}	
		console.log(greeting);
}		
function switchCaseBreakCondition(){
	let day;
	console.log(new Date().getDay());
	switch (new Date.getDay()) {
		case 0:
			day ="Sunday";
			break;
		case 1:
			day="Monday";
			break;
		case 2:
			day ="Tuesday";
			break;
		case 3:
			day ="wednesday";
			break;
		case 4:
			day ="Thursday";
			break;
		case 5:
			day ="friday";
			break;
		case 6:
			day="Saturday";
	}
	Console.log(day);
}	