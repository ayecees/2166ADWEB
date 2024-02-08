import { Component } from '@angular/core';
import { Observable,map,interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time$: Observable<Date>;
  title = 'midterm';

//date
  presentDate = new Date();

  constructor(){
    this.time$ = interval(1000).pipe(map(()=>new Date()))
  }

//decimal
  decimalNum1: number = 20.1283465838;
  decimalNum2: number = 0.9;
  decimalNum3: number = 1.23;

//currency
  money : number = 20000; ngOnInit(){}

//percent pipes
num1:number = 0.35;
num2:number = 0.78;

//json pipes
object1: Object = {A: 'Avengers', B: 'Bob', C: {Cake: 1, numbers: [2, 4, 6, 8, 10]}};
object2: Object = {DC: 'Superman', Powers: 'strength', nested: {xyz: 3, numbers: [1, 2, 3, 5, 7]}};
object3: Object = {X: 'xy', Y: 'yee', Z: {Zebra: 3, numbers: [10, 20, 30, 40, 50]}};

//slice pipes
Fruits = ["1","2","3","4","5","6"];
}

