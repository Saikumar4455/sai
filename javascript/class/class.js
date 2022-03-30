class Employee {
	constructor(id, fn, ln) {
		this.employeeId = id;
		this.firstName = fn;
		this.lastName = ln;
	}
}
function employee() {
	let emp1 = new Employee(101, 'sai', 'ambadi');
	let emp2 = new Employee(102, 'shiva', 'kumar');
	let emps =
		emp1.employeeId +
		' ' +
		emp1.firstName + 
		' ' + 
		emp1.lastName +
		'<br>' +
		emp2.employeeId +
		' ' +
		emp2.firstName +
		' ' +
		emp2.lastName ;
		console.log(emps);
		return emps;
}
function main() {
	let emps = employee();
	document.getElementById('table').innerHTML=emps;
}