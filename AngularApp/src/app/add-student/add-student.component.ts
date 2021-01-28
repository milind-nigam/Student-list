import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student = new Student();
  submitted = false;

  constructor(  private studentService: StudentService, private location: Location) { }

  ngOnInit() {
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

 addStudent() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.studentService.addStudent(this.student)
        .subscribe();
  }

}
