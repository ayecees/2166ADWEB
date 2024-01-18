import { Component } from '@angular/core';
import { combineLatestWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  //String Interpolation

name='Allen Carlo Serrano';
position='Web Developer';
position2='Junior Web Developer';
work_experience=10;
email='allen@gmail.com'; 
website='www.doshermana.com'; 
phone='302-532-9321';

  //image interpolation/binding
imageUrl:string="assets/logo.png";
imageW: number = 110;
imageH: number = 100;
}
