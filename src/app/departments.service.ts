import { Injectable } from '@angular/core';
import { Department } from '../app/_model/department';
@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  departments:Department[]=
  [
    new Department(6,"OS","Mansoura"),
    new Department(1,"SD","Mansoura"),
    new Department(3,"java","smart"),
    new Department(4,"Embeded","Alex"),
    
  ]
  showdept(id:number){
  return this.departments
}
addnewdept(deptObject:any){
  this.departments.push(new Department(deptObject.id,deptObject.deptname,deptObject.location))

}

  getDepartmentById(id:number):Department|null{
    for(let i=0;i<this.departments.length;i++){
      if(this.departments[i].id==id){
        return new Department(this.departments[i].id,this.departments[i].deptname,this.departments[i].location);
      }
      
    }
    return null;
  }


  editDepartment(dept:Department){
    for(let i=0 ; i<this.departments.length;i++){
      if(this.departments[i].id==dept.id){
        this.departments[i].deptname=dept.deptname;
        this.departments[i].location=dept.location;
        return;
      }
    }
  }
  deleteDepartment(id:number){
    for(let i=0 ;i<this.departments.length;i++){
      if(this.departments[i].id==id){
        this.departments.splice(i,1);
      }
    }
  }


  constructor() { }
}
