import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
   return this.http.get<Employee[]>(`${this.apiUrl}`);
  }

  createEmployee(employee: Employee):Observable<Object>{
    alert('employee created successfully!!')
    return this.http.post(`${this.apiUrl}`,employee)
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  updateEmployee(id: number, employee:Employee): Observable<Object>{
    alert('employee Updated successfully!!')
    return this.http.put(`${this.apiUrl}/${id}`,employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    alert('employee deleted successfully!!')
    location.reload();
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
