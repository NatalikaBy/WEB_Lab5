import {Component, OnInit} from '@angular/core';
import {STUDENTS_MOCK} from "./mocks/students.mock";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = "Students Management";

    constructor() {
        localStorage.setItem('students', JSON.stringify(STUDENTS_MOCK));
    }

    ngOnInit(): void {
    }

}