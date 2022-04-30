import { ActivatedRoute, Router } from '@angular/router';

import {DepartmentsService} from 'src/app/departments.service'
import {Department} from '../_model/department';
import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';


@Component({
    templateUrl:'./show.component.html',
    styleUrls:['./show.component.css'],
    selector:'home',
    providers:[DepartmentsService]
})

export class ShowComponent implements OnInit {
    

    dept:Department|null = new Department(0,'','');


    constructor(public deptServ:DepartmentsService,public ac:ActivatedRoute,public router:Router) { }

    goBack(){
        this.router.navigateByUrl('/department');
    
      }
  

      ngOnInit(): void {
      
      this.dept=this.deptServ.getDepartmentById(this.ac.snapshot.params['id']);
        
      }
      // ngOnInit(): void {
      //   this.ar.params.subscribe(a=>{
      //     console.log(a['id']);
      //    this.dept=this.deptServ.getDepartmentById(a['id']);
      //   })
      // }

    
}
