import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployee() {
    return this.http.get("http://localhost:8080/api/employees")
  }


  createEmployee(data: any) {
    return this.http.post('http://localhost:8080/api/employees', data)

  }

  deleteEmployee(employeeId: any){
   return this.http.delete(`http://localhost:8080/api/employees/${employeeId}`)

  }
}
