import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
//Using ngIf to toggle text display
showText: boolean = false;

toggleText() {
  this.showText = !this.showText;
}

staff = [ 
  { firstName: 'Joseph', lastName: 'Joestar', email: 'joestar@test.com', role: 'User' },   
  { firstName: 'Tony', lastName: 'Stank', email: 'ironmaanzz@test.com', role: 'Admin' }, 
  { firstName: 'Peter', lastName: 'Parker', email: 'parksogood@test.com', role: 'Admin' }, 
  { firstName: 'Mike', lastName: 'Tyson', email: 'tysonsenz@test.com', role: 'User' }, 
  { firstName: 'Joney', lastName: 'Sinz', email: 'kathrynbernardo@test.com', role: 'User' } 
  ];

}
