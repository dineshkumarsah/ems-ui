import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { MatDialog } from '@angular/material/dialog'
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-cell-renderer',
  template: `
  <div class="d-flex">
    <mat-icon (click)="editEmployeeDetails()">edit</mat-icon>
    <mat-icon></mat-icon>
    <mat-icon (click)="deleteEmployeeDetails()">delete_outline</mat-icon>
  </div>
    
  `,
  styleUrls: ['./cell-renderer.component.scss']
})
export class CellRendererComponent implements ICellRendererAngularComp {
  gridData: any[]=[];
  api: any
  constructor(public dialog: MatDialog,
    private employeeService: EmployeeService
  ) {

  }
  griData: any
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.api = params.api;
    console.log("params29", params);
    this.griData = params.data
    this.gridData = this.GridTableData(params);
  }
  refresh(params: ICellRendererParams<any, any, any>): any {

  }

  editEmployeeDetails() {
    console.log(this.griData);
  }
  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
  deleteEmployeeDetails() {
    debugger
    this.dialog.open(DeletePopUpComponent, {
      width: '400px',
      height: '200px'
    }
    ).afterClosed().subscribe({
      next: (confirm) => {
        if(confirm){
          this.employeeService.deleteEmployee(this.griData.id).subscribe({
            next: (data) => {
            
            let deletedItem =  this.gridData.find((e)=>{
               if(e.id===this.griData.id){
                return e;
               }
             })
             this.gridData.splice(this.gridData.indexOf(deletedItem),1);
            
             this.api.setRowData(this.gridData)
            },
            error: ()=>{
            
              let deletedItem =  this.gridData.find((e)=>{
                 if(e.id===this.griData.id){
                  return e;
                 }
               })
               this.gridData.splice(this.gridData.indexOf(deletedItem),1);
              
               this.api.setRowData(this.gridData)
            }
          })
        }
      
      }
    })
  }

  GridTableData(params: any) {
    let items: Array<any> = [];
    params.api.forEachNode((node: any) => {
      items.push(node.data);
    });
    return items
  }

}
