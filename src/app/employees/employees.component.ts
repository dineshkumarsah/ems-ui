import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { EmployeeService } from '../services/employee.service';
import {MatDialog,MatDialogRef} from '@angular/material/dialog'
import { AddAndUpdateEmployeeComponent } from './components/add-and-update-employee/add-and-update-employee.component';
import { CellRendererComponent } from './components/cell-renderer/cell-renderer.component';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  rowData!:any;
  public columnDefs: ColDef[] = [
    { field: 'id',checkboxSelection: true, headerCheckboxSelection: true},
    { field: 'firstName'},
    { field: 'lastName'},
    { field: 'email'},
    { field: 'total', cellRenderer: CellRendererComponent }
  ]
  gridApi!: GridApi
  public defaultColDef:ColDef={
    sortable:true,
    filter:true,
    resizable: true,
    
  }
  @ViewChild(AgGridAngular) agGrid!:AgGridAngular;
  constructor(
    public employeeService: EmployeeService,
    public dialog: MatDialog
    ) {
      
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
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.getEmployeeList();
    this.sizeToFit();
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
  openAddEmployeeDialog(){
   this.dialog.open(AddAndUpdateEmployeeComponent,{
    width: '400px',
    height: '400px'
   }).afterClosed().subscribe((data)=>{
     console.log(data);
     this.employeeService.createEmployee(data).subscribe({
      next: (data)=>{
       this.rowData.push(data);
       this.gridApi.setRowData(this.rowData)
       
      },
      error: (error)=>{

      }
     })
     
   })
  }
  getRowId(prams: any){
  console.log(prams);
  
  }
  clickMe(){
    alert("hello")
  }
}
