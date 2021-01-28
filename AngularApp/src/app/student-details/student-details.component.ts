import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student = new Student() ;
  submitted = false;
  message: string;

  constructor(private studentService: StudentService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
        const Sno = +this.route.snapshot.paramMap.get('Sno');
        this.studentService.getStudent(Sno)
        .subscribe(student => this.student = student);
  }
  update() {
    this.submitted = true;
    this.studentService.updateStudent(this.student)
        .subscribe(() => this.message = 'Student Updated Successfully!');
  }
  goBack(): void {
    this.location.back();
  }

}
