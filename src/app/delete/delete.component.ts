import { Component, OnInit } from '@angular/core';
import {DepartmentsService} from 'src/app/departments.service'
import { Router } from '@angular/router';
import {Department} from '../_model/department'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
 

  ngOnInit(): void {
  }

}
