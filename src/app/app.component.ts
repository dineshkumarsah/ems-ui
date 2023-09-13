import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ems-ui';
  constructor(private employeeService: EmployeeService){

  }

  getEmployeeList(){
    this.employeeService.getAllEmployee().subscribe({
      next: (res)=>{
       console.log(res);
       
      },
      error: (error)=>{
         console.log(error);
         
      }
    })

  }
}
