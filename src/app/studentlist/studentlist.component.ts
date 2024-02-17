import { Component, OnInit  } from '@angular/core'

import {StudService} from '../stud.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Student } from '../student';


@Component({
  selector: 'app-studentlist',

  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']

})
export class StudentlistComponent implements OnInit {
  students:Student[]=[];
  
 
  constructor(private studService:StudService,
    private router: Router){
    
  }
  ngOnInit(): void{
    this.getStudents(); 
  }
  private getStudents(){
    this.studService. getStudentsList().subscribe (data =>{
      this.students=data;
      
      
    });
  

  }
  updateStudent(id:any){
   this.router.navigate(['update-student',id])  }

  
daleteStudent(id:any){
  this.studService.deleteStudent(id).subscribe(data=>{
    console.log(data);
    this.getStudents(); 
  })
}
}