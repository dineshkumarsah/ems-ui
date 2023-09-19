import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employees-list', pathMatch: 'full' },
  {
    path: 'employees-list',
    loadChildren: ()=> import('./employees/employees.module').then(m=>m.EmployeesModule)
  },
  {
    path: 'departments',
    loadChildren: ()=> import('./departments/departments.module').then(m=>m.DepartmentsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
