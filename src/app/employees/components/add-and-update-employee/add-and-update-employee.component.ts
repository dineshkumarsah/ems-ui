import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-and-update-employee',
  templateUrl: './add-and-update-employee.component.html',
  styleUrls: ['./add-and-update-employee.component.scss']
})
export class AddAndUpdateEmployeeComponent implements OnInit {
  addEmployeeForm!: FormGroup
  constructor(
    public dialogRef: MatDialogRef<AddAndUpdateEmployeeComponent>,
    public fb: FormBuilder
    ){
    
    }
    ngOnInit(){
      this.addEmployeeForm = this.fb.group({
        firstName: [''],
        lastName:[''],
        email:['']
      })
    }

  closeDialog(){
    this.dialogRef.close();
  }
  addEmployee(){
    console.log(this.addEmployeeForm);
    this.dialogRef.close(this.addEmployeeForm.value)
    
  }
}
