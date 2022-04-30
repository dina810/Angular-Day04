import {Component} from '@angular/core';
import {UsersService} from '../users.service'

@Component({
    templateUrl:'./about.component.html',
    styleUrls:['./about.component.css'],
    selector:'about',
})



export class AboutComponent{

    aboutUsers:any[]=[]
    constructor(_UsersService:UsersService){
       this.aboutUsers= _UsersService.users

    }
    
}
