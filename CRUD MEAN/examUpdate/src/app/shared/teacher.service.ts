import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { } from 'rxjs/operators';

import { Teacher } from './teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  selectedTeacher!: Teacher;
  teachers!: Teacher[];
  readonly baseURL = 'http://localhost:3000/teachers'

  constructor(private http: HttpClient) { }

  postTeacher(tcr: Teacher){
    return this.http.post(this.baseURL, tcr);
  }

  getTeacherList(){
    return this.http.get(this.baseURL);
  }

  putTeacher(tcr: Teacher){
    return this.http.put(this.baseURL + `/${tcr._id}`, tcr);
  }

  deleteTeacher(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
