import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {
  public employeeId: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public hireDate: string;
  public salary: number;
  public jobId: string;
  public commissionPct: string;
  public managerId: number;
  public departmentId: number;
  isDelete = false;
constructor(){
  this.employeeId = 102;
    this.firstName = "Sai kumar";
    this.lastName = "Ambadi";
    this.email = "ambadisaikumar@gmail.com";
    this.phoneNumber = "9949727547";
    this.hireDate = "18-12-2021";
    this.salary = 40000;
    this.jobId = "102";
    this.commissionPct = "No comm.";
    this.managerId = 108;
    this.departmentId = 109;

    setTimeout(() =>{
    },5000);
      this.isDelete = true ;
}
  ngOnInit(): void {
    
      


  }
  viewEmployee() {
    console.log("viewEmployee")

  }
  deleteEmployee() {
    console.log("deleteEmployee")
 
  }

}
