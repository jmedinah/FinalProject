import { StudentService } from './../student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: Student;
  option: string = 'New';

  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.studentService.getStudent(+params.get('id')))
      .subscribe(student => this.student = student);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.studentService.update(this.student)
      .then(() => this.goBack());
  }

  add(): void {
    if (this.option === 'New') {
      this.option = 'Add';
      this.student.id = null;
      this.student.fullName = null;
      this.student.averageGrade = null;
      this.student.deliveredHomeworks = null;
      this.student.missingHomeworks = null;
      this.student.lastUpdate = null;
      this.student.image = '../../assets/images/man.png';
    } else {
      this.studentService.create(this.student)
      .then(() => this.goBack());
      
    }
  }

}