import { Component, OnInit } from '@angular/core';
import {StudService} from '../stud.service'
import {Student} from  '../student';
import { ActivatedRoute } from '@angular/router';
import{Router}from '@angular/router';
import { subscribeOn } from 'rxjs';



@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
id:any;
student :Student=new Student();
constructor(private studService:StudService,private route:ActivatedRoute,private router:Router ){

}
ngOnInit(): void{

   this.id=this.route.snapshot.params['id'];
  this.studService.getStudentById(this.id).subscribe(data=>{
    this.student=data;
  },error=>console.log(error));


}
onSubmit(){
  this.studService.updateStudent(this.id,this.student).subscribe(data=>
    {
      this.gotoStudentlist();
    },error=>console.log(error));
  }
      gotoStudentlist(){
        this.router.navigate(['/student'])
      }
    


  
}

