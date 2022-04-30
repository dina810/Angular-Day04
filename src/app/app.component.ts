import { Component } from '@angular/core';
import { DepartmentsService } from './departments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DepartmentsService]
})
export class AppComponent {
  title = 'app1';
}
