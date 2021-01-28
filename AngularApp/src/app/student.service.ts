import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = 'http://localhost:8080/api/students';  // URL to web api
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  getStudent(Sno: number): Observable<Student> {
    const url = `${this.studentsUrl}/${Sno}`;
    return this.http.get<Student>(url);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student, httpOptions);
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, httpOptions);
  }
}
