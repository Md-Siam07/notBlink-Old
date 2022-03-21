import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TeacherService } from '../shared/teacher.service'
import { Teacher } from '../shared/teacher.model';

declare var M: any;

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [TeacherService]
})
export class TeacherComponent implements OnInit {

  constructor(public teacherService: TeacherService) { }
  ngOnInit(): void {
    this.resetForm();
    this.refreshTeacherList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.teacherService.selectedTeacher = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: 0
    } 
  }
  onSubmit(form: NgForm) {
    // this.teacherService.postTeacher(form.value).subscribe((res) => {
    //   this.resetForm(form);
    //   M.toast({ html: 'Saved successfully', classes: 'rounded' });
    // });

    if (form.value._id == "") {
      this.teacherService.postTeacher(form.value).subscribe((res:any) => {
        this.resetForm(form);
        this.refreshTeacherList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.teacherService.putTeacher(form.value).subscribe((res:any) => {
        this.resetForm(form);
        this.refreshTeacherList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshTeacherList() {
    this.teacherService.getTeacherList().subscribe((res:any) => {
      this.teacherService.teachers = res as Teacher[];
    });
  }

  onEdit(exam: Teacher){
    this.teacherService.selectedTeacher = exam;
  }

  onDelete(_id: string, form: NgForm){
    if(confirm('Are you sure to delete this exam?') == true){
      this.teacherService.deleteTeacher(_id).subscribe((res) => {
        this.refreshTeacherList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes : 'rounded' });
      })
    }
  }

}
