import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_data_binding';
  clientName = "Allen Serrano"; //property
  appliedCSS = "green"; //style
  notAppliedCSS = false;
  myColor = "red";

  clickCount=0
  clickMe() {
    this.clickCount++;
  }

  resetClickCount() {
    this.clickCount = 0;
  }
}
