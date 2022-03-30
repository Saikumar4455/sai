class Employee {
	employeeId: number;
	firstName: string;
	lastName: string;
	readonly organization: string = 'Accenture';
	constructor(id: number,fn: string,ln: string) {
		this.employeeId=0;
		this.firstName='fn';
		this.lastname='ln';
		//readonly organization: string="Accenture";
	};
	
	createEmployee(id:number,fn: sring,ln:string){
		this.employeeId = id;
		this.firstName = fn;
		this .lastName = ln;
	}
	readEmployee(employeeId: number) {
		//approx 100 lines of code
	}
	updateEmployee(employeeId: number) {
		//approx 100 lines of code
	}
	deleteEmployee(employee:number) {
		//approx 100 lines of code
	}
	getFirstName() {
		return this.firstName;
	}
	setFirstname(fn: string) {
		this.firstName=fn;
	}
}
let emp1 = new Employee(102, 'sai','kumar');
let emp2 = new Employee(0,'','');
emp1.createEmployee(102, 'shiva','kumar');
emp2.createEmployee(103,'ambadi','sai');
const emp = document.getElementById('emp');

emp.innerHTML =
	emp1.employeeId +
	' ' +
	emp1.firstName +
	' ' +
	empl.lastName +
	'<br>' +
	emp2.employeeId +
	' ' +
	emp2.firstName +
	' ' +
	emp2.lastname +
	'<br> ' +
	emp1.getFirstName() +
	'<br>' +
	emp2.getFistName();
	
	emp2.setFirstname('sai')
	emp.innerHTML =
		emp1.employeeId +
		' ' +
		emp1.firstName +
		' ' +
		emp1.lastname +
		'<br>' +
		emp2.employeeId +
		' ' +
		emp2.firstName +
		' ' +
		emp2.lastName +
		'<br>' +
		emp1.getFirstName() +
		'<br>' +
		emp2.getFirstName();