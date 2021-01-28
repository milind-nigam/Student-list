import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    return this.studentService.getStudents()
             .subscribe(
              students => {
                console.log(students);
                this.students = students;
               }
              );
}

}
