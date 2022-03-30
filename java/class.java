class Employee {
	int employeeId;
	string firstName;
	string lastName;
	Employee(){
		this.employeeId = 0;
		this.firstName="";
		this.lastName="";
	}
	void createEmployee(int id,String fn, String ln){
		this.employeeId =id;
		this.firstName =fn;
		this.lastName=ln;
	}
	void viewEmployee(){
		system.out.printIn(" "+this.employeeId+""+thisName+""+this.lastName);
	}
	void updateEmployee(int employeeId){
		//approx 100 lines of code
	}
	void deleteEmployee(int employeeId){
		//approx 100 lines of code
	}
	public static void main (string arg[]){
		Employee emp1 = new Employee();
		emp1.createEmployee(101,"sai","ambadi");
		emp1.viewEmployee();
	}
}	
