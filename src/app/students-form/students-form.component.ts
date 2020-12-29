import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../services/student.service";
import {ToastrService} from "ngx-toastr";

enum Mode {Add = 1, Update = 2}
@Component({
    selector: 'students-form',
    templateUrl: './students-form.component.html',
    styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {

    studentForm: FormGroup;
    index: number | string;
    mode: Mode = Mode.Add;

    readonly Mode = Mode;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private route: ActivatedRoute,
                private studentService: StudentService,
                private toastr: ToastrService
                ) {
        this.createForm();
        this.route.params.subscribe(params => {
            this.index = params['id'];
            if (this.index) {
                this.mode = Mode.Update;
                this.getStudentDetails(+this.index);
            }
        });
    }

    ngOnInit(): void {
    }

    getStudentDetails(id: number){
        let data = this.studentService.getStudentDetails(id);
        this.studentForm.patchValue(data);
    }

    createForm() {
        this.studentForm = this.formBuilder.group({
            firstname: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
            lastname: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
            age: [null,  [Validators.required, Validators.min(17), Validators.max(69)]],
            score: [null,  [Validators.required, Validators.min(0), Validators.max(10)]]
        });
    }

    onSubmit() {
        this.studentService.doRegisterStudent(this.studentForm.value, this.index);
        this.toastr.success('Student was added', "Success");
        setTimeout(() => {
            this.router.navigate(['/']);
        }, 2000);
    }

    onCancel() {
    }


}
