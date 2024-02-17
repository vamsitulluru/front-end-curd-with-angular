import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import{Student}from './student';


@Injectable({
  providedIn: 'root'
})
export class StudService {
private baseurl ="http://localhost:8080/api/v1/students";
  constructor(private httpClient:HttpClient) { }

  getStudentsList():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseurl}`);
  }
  createStudent (student: Student): Observable<Object>{
  return this.httpClient.post(`${this.baseurl}`,student);
}
getStudentById(id:any):Observable<Student>{
  return this.httpClient.get<Student>(`${this.baseurl}/{id}`);
}
updateStudent(id:any,student:Student):Observable<Object>{
return this.httpClient.put(`${this.baseurl}/${id}`,student);
}
deleteStudent(id:any):Observable<Object>{
  return this.httpClient.delete(`${this.baseurl}/${id}`);
}
}