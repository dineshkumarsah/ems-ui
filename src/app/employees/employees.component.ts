import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  rowData!:any;
  public columnDefs: ColDef[] = [
    { field: 'id'},
    { field: 'firstName'},
    { field: 'lastName'},
    { field: 'email'}
  ]
  public defaultColDef:ColDef={
    sortable:true,
    filter:true,
    resizable: true
  }
  @ViewChild(AgGridAngular) agGrid!:AgGridAngular;
  constructor(public employeeService: EmployeeService) {
      
  }
  getEmployeeList() {
    this.employeeService.getAllEmployee().subscribe({
      next: (res) => {
        console.log(res);
        this.rowData = res;

      },
      error: (error) => {
        console.log(error);

      }
    })

  }
  onGridReady(params: GridReadyEvent){
   this.getEmployeeList();
   this.sizeToFit()
  }
  onCellClicked( e: CellClickedEvent):void {
    
  }
  sizeToFit() {
    this.agGrid.api.sizeColumnsToFit({
      defaultMinWidth: 100,
      columnLimits: [
       
      ],
    });
  }
}
