import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Student } from './student';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  private studentsUrl = 'api/students';
  constructor(private http: Http) { }

  getStudents(): Promise<Student[]> {
    return this.http.get(this.studentsUrl)
      .toPromise()
      .then(response => response.json().data as Student[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getStudentsSlowly(): Promise<Student[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getStudents()), 2000);
    });
  }

  getStudent(id: number): Promise<Student> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Student)
      .catch(this.handleError);
  }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  update(student: Student): Promise<Student> {
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http
      .put(url, JSON.stringify(student), { headers: this.headers })
      .toPromise()
      .then(() => student)
      .catch(this.handleError);
  }

  create(student: Student): Promise<Student> {
    let students: Student[] = [];
    return this.getStudents().then(studentsData => {
      student.id = studentsData.length + 1;
      return this.http
        .post(this.studentsUrl, JSON.stringify(student), { headers: this.headers })
        .toPromise()
        .then(() => student)
        .catch(this.handleError);
    });
  }

  delete(id: number): Promise<void> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
