import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent }   from './app.component';
import { StudentsTableComponent } from './students-table/students-table.component';
import { StudentsFormComponent } from './students-form/students-form.component';
import {StudentService} from "./services/student.service";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
    {
        path: '',
        component: StudentsTableComponent,
    },
    {
        path: 'add',
        component: StudentsFormComponent
    },
    {
        path: 'update/:id',
        component: StudentsFormComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports:      [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),],
    declarations: [
        AppComponent,
        StudentsTableComponent,
        StudentsFormComponent,
    ],
    bootstrap:    [ AppComponent ],
    providers: [StudentService],
})
export class AppModule { }