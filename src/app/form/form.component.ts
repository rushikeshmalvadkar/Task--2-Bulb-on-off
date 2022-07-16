import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/assets/student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  firstName = "";
  surName = "";
  age = "";
  studentId: any;
  canShowAlert = false;
  addBtnStatus = false;


  constructor(private studentService: StudentService, private route: Router, private activeRoute: ActivatedRoute) {
    this.studentId = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.studentId);

    if (this.studentId != null) {
      let student = this.studentService.getStudentById(this.studentId);
      this.setStudentData(student);
    }

  }

  private setStudentData(student: any) {
    this.firstName = student['firstName'];
    this.surName = student['surName'];
    this.age = student['age'];
  }

  ngOnInit(): void {
  }

  reset() {
    this.firstName = "";
    this.surName = "";
    this.age = "";
    this.canShowAlert = false;
  }
  onAdd() {
    if (this.firstName != "" && this.surName != "" && this.age != "") {
      let student = this.prepareStudentData();
      this.reset();
      this.studentService.save(student);
      this.route.navigate(['/dataInformation']); // localhost:4200/dataInformation
    }
    else {
      this.canShowAlert = true;
    }
  }

  private prepareStudentData() {
    return {
      firstName: this.firstName,
      surName: this.surName,
      age: this.age
    };
  }

  onUpdate() {
    let student = this.prepareStudentData();
    this.studentService.update(student);
    this.route.navigate(['dataInformation']);
  }

}



