import { Component,OnInit } from '@angular/core';
import {Student} from  '../student';
import{StudService} from '../stud.service';
import{Router}from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student:Student=new Student();
  constructor(private studentService:StudService,private router:Router){

  }


ngOnInit():void{

}
saveStudent(){
  this.studentService.createStudent(this.student).subscribe(data=>{
    console.log(data);
    this.gotoStudentlist();  
    

  },
  error =>console.log(error));
}
gotoStudentlist(){
  this.router.navigate(['/student'])

}
onSubmit(){

  console.log(this.student);
  this.saveStudent();
}}
