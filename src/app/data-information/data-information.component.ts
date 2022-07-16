import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/assets/student.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-data-information',
  templateUrl: './data-information.component.html',
  styleUrls: ['./data-information.component.css']
})
export class DataInformationComponent implements OnInit {

  students = [];

  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  private getAllStudents() {
    this.students = this.studentService.getAllStudents();
    console.log(this.students);
  }

  onDelete(student: any) {
    this.studentService.remove(student);
  }

  onEdit(id: any) {
    this.router.navigate(['form/', id])
  }
}






