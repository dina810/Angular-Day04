import { Injectable } from '@angular/core';
import { User } from './user'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:User[] =
    [
        {id:1,name:'dinaaaaa' , age:27 , gender:'female',salary:4000},
        {id:2,name:'ahmed' , age:27 , gender:'male',salary:6000},
        {id:3,name:'ghada' , age:22 , gender:'female',salary:3000},
    ]


  constructor() { }
}
