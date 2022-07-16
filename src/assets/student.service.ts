import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students = []; // Actual data means one table in database
  currentId = 1;

  constructor() { }

  save(student) {
    student['id'] = this.currentId;
    this.students.push(student);
    this.currentId = this.currentId + 1;
  }

  getAllStudents() {
    return this.students;
  }

  getStudentById(id) {
    let student = this.students.find(student => student.id == parseInt(id));
    return student;
  }


  update(student) {
    this.remove(student);
    this.students.push(student);
  }


  remove(student: any) {
    let oldStudentIndex = this.students.indexOf(student);
    this.students.splice(oldStudentIndex, 1);
  }
}
