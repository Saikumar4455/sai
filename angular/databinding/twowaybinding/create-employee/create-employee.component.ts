import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeId:number=102;
  firstName: string= "sai kumar";
  email: string ="ambadisaikumar1996@gmail.com";
  lastName: string ="ambadi";
  phoneNumber: string= "9949727547";
  hireDate: string= "18-12-2021";
  salary: number= 4000;
  job: number= 666;
  commision: string= "No comm.";
  manager: string= "33";
  deptNo:number= 23;


  constructor() { }

  ngOnInit(): void {
  }

}
