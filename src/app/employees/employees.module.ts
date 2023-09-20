import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { AgGridModule } from 'ag-grid-angular';
import {MatCardModule} from '@angular/material/card';
import { AddAndUpdateEmployeeComponent } from './components/add-and-update-employee/add-and-update-employee.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeesComponent,
    AddAndUpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    AgGridModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],  
  
})
export class EmployeesModule { }
