import { Component, OnInit } from '@angular/core';
import {DepartmentsService} from 'src/app/departments.service'
import { Router } from '@angular/router';
import {Department} from '../../_model/department'


@Component({
    templateUrl:'./department.component.html',
    styleUrls:['./department.component.css'],
    selector:'department',
})

export class DepartmentComponent{
    departmentUsers:any[]=[]; 

    constructor(_DepartmentsService :DepartmentsService){
       this.departmentUsers =_DepartmentsService.departments

    }

   
    delete(id:number){
        for (let i = 0; i < this.departmentUsers.length; i++) {
            if(confirm("are you sure to delete this depatment ?")){
                if (this.departmentUsers[i].id==id) {
                this.departmentUsers.splice(i,1);}
 
             break;
            }
             else{
                return;
            }
      
        }

   }

    ngOnInit(): void{

    }
   
}
