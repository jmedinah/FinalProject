import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';
import { Sort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students: Student[] = [];
  align = 'full';
  selectedStudent: Student;

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents()
      .then(studentsData => {
        this.students = studentsData
      });
  }

  sortData(sort: Sort) {
    const data = this.students.slice();

    if (!sort.active || sort.direction == '') {
      this.students = data;
      return;
    }

    this.students = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'fullName': return compare(a.fullName, b.fullName, isAsc);
        case 'averageGrade': return compare(+a.averageGrade, +b.averageGrade, isAsc);
        case 'deliveredHomeworks': return compare(+a.deliveredHomeworks, +b.deliveredHomeworks, isAsc);
        case 'missingHomeworks': return compare(+a.missingHomeworks, +b.missingHomeworks, isAsc);
        case 'lastUpdate': return compare(+a.lastUpdate, +b.lastUpdate, isAsc);
        default: return 0;
      }
    });

    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

  gotoDetail(id): void {
    this.router.navigate(['/detail', id]);
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  delete(student: Student): void {
    this.studentService
      .delete(student.id)
      .then(() => {
        this.students = this.students.filter(h => h !== student);
        if (this.selectedStudent === student) { this.selectedStudent = null; }
      });
  }


}

