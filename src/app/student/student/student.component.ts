import {Component} from '@angular/core';
import { UsersService } from '../../users.service'


@Component({
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css'],
    selector:'home',
})

export class HomeComponent{
    homeUsers:any[]=[]; 

    constructor(_UsersService :UsersService){
       this.homeUsers =_UsersService.users

    }
    // hello(){
    //     alert(`welcome ${this.name}`);
    // }
  

    // welcome(eventInfo:Event)
    // {
    //     console.log(eventInfo.target);

    // }

    // onSale:Boolean=false

 
    ngOnInit(): void{

    }

    
}
