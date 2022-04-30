import { Component, OnInit } from '@angular/core';
import {DepartmentsService} from 'src/app/departments.service'
import { Router } from '@angular/router';
import {Department} from '../_model/department'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],

})
export class AddComponent implements OnInit {

department:Department= new Department(0,'','');

add(){

    this.deptsrc.addnewdept(this.department)
    this.router.navigate(['/department']);
  
}
constructor(public deptsrc:DepartmentsService,public router:Router){}


  // delete(id:number){
  //   if(confirm("Are you sure to delete this row ?")){
  //   this.deptServs.deleteDepartment(id);
  //   }
  //   else{
  //     return;
  //   }
  // }


  ngOnInit(): void {
  }

}
