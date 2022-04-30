import { Component, OnInit } from '@angular/core';
import {DepartmentsService} from 'src/app/departments.service'
import { ActivatedRoute, Router } from '@angular/router';
import {Department} from '../_model/department'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  dept:Department|null=null;

  constructor(public deptServ:DepartmentsService,public ar:ActivatedRoute,public router:Router) { }

  get Id(){
    return this.dept?.id
  }
  get Name(){
    return this.dept?.deptname
  }
  get Location(){
    return  this.dept?.location;
  }

  edit(id:string,name:string,location:string){
    this.dept = new Department(parseInt(id),name,location)
    if(confirm("are you sure to updata data ?")){
       this.deptServ.editDepartment(this.dept);}
       else{
         return;
       }
     }

     goBack(){
      this.router.navigateByUrl('/department');
      
    }

  ngOnInit(): void {
    this.ar.params.subscribe(a=>{
      console.log(a['id']);
     this.dept=this.deptServ.getDepartmentById(a['id']);
    });
    
  }


}
