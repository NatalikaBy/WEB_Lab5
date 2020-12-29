import {Injectable} from "@angular/core";
import {Student} from "../state/student.state";

@Injectable()
export class StudentService {

    constructor() {
    }

    getAllStudents(): Student[] {
        return  JSON.parse(localStorage.getItem('students'));
    }

    doRegisterStudent(data, index){
        let studentList = JSON.parse(localStorage.getItem('students'));
        if (index != null) {
            studentList[index] = data;
        } else {
            data.id = this.generateRandomID();
            studentList.unshift(data);
        }
        localStorage.setItem('students',JSON.stringify(studentList));
        return JSON.parse(localStorage.getItem('students'));
    }

    deleteStudent(index:number){
        let studentList = JSON.parse(localStorage.getItem('students'));
        let newList = studentList.filter(s => s.id !== index);
        localStorage.setItem('students',JSON.stringify(newList));
        return JSON.parse(localStorage.getItem('students'));
    }

    getStudentDetails(id: number){
        let studentList = JSON.parse(localStorage.getItem('students'));
        return studentList[id];
    }
    generateRandomID() {
        return Math.floor((Math.random() * Math.random() * 9999));
    }
}