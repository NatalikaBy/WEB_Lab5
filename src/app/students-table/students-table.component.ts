import {Component, OnInit} from '@angular/core';
import {Student} from "../state/student.state";
import {StudentService} from "../services/student.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
    selector: 'students-table',
    templateUrl: './students-table.component.html',
    styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

    students: Student[] = [];

    constructor(private studentService: StudentService, private toastr: ToastrService, private router: Router) {
    }

    ngOnInit(): void {
        this.getStudentsList();
    }

    getStudentsList() {
        this.students = this.studentService.getAllStudents();
    }

    onDelete(id: number) {
        let studentDelete = this.studentService.deleteStudent(id);
        if (studentDelete) {
            this.toastr.success("Success", "Student Deleted");
        }
        this.getStudentsList();
    }

    onEdit(id: number) {
        this.router.navigate(['/update', id]);
    }


    onRegister() {
        this.router.navigate(['/add']);
    }
}
