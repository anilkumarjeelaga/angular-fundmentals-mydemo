import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { interval } from 'rxjs';
import { from } from 'rxjs';
import { of } from 'rxjs';
import { observable } from 'rxjs';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.css']
})
export class ObservablesDemoComponent implements OnInit {

fromEventLogs: string[] = [];
ajaxLogs: string[] = [];
intervalLogs:string[] = [];
fromLogs: string[] = [];
ofLogs: string[] = [];
observable: string[] = [];
customObservableLogs: string[] = [];
customObservable2Logs: string[] = [];
customObservable3Logs: string[] = [];
arrayCustomObservableLogs: string[] = []

// customObservableLogs: string[] = [];
// customObservable2Logs: string[] = [];
// customObservable3Logs: string[] = [];
// arrayCustomObservableLogs: string[] = [];
  constructor() { }

  ngOnInit(): void {
  
   /***** fromEvent *****/
   const specialElement = document.getElementById('special-area');
   const mouseEventsObservable = fromEvent(specialElement, 'mousemove');

   const subscription = mouseEventsObservable.subscribe(
     (evt: MouseEvent) => {
       this.fromEventLogs.push(`Coords: ${evt.clientX} X ${evt.clientY}`);

       if (evt.clientX < 250 && evt.clientY < 230) {
         subscription.unsubscribe();
         this.fromEventLogs.push("Unsubscribed from mouse events");
       }
     }
   );

    /***** ajax *****/
 let todosUrl = "https://todos-api-dev.herokuapp.com/todos";
 const todoObservable = ajax(todosUrl);
  todoObservable.subscribe(
    res => {
      console.log(res.status, res.response);
      this.ajaxLogs.push('Response came');
    }
  );

      /***** interval *****/

      const secondsCounterObservable = interval(1000);
      secondsCounterObservable.subscribe(
        n => this.intervalLogs.push(` it's been ${n} seconds since subscribing!`)
      );

      /***** from array *****/
      let numbers = [10, 20, 30, 40, 50];
      const arrayObservable = from(numbers);
      arrayObservable.subscribe(
        n => this.fromLogs.push(`${n}`)
      );
    /***** of *****/
    const ofObservable = of(60, 70, 80, 90, 100);
    ofObservable.subscribe(
    n => this.ofLogs.push(`${n}`)
    );
/***** Custom observable with create method *****/
    let customObservable = Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() =>{
        observer.next(4);
        observer.complete();
      }, 1000);
      observer.next(5);
    });
    customObservable.subscribe({
      next: x => this.customObservableLogs.push('got value ' + x),
      error: err => this.customObservableLogs.push('something wrong occured: ' + err),
      complete: () => this.customObservableLogs.push('done'),
    });//subscribe method next, error, complete methods in an object

    /***** Custom observalble with new keyword *****/
  let customObservable2 = new Observable(function(observer){
    observer.next(11);
    observer.next(22);
    observer.next(33);
    setTimeout(() => {
      observer.next(44);
      observer.complete();
    }, 1000);
  });
  customObservable2.subscribe(
    x => this.customObservable2Logs.push('got value' + x),
    err => this.customObservable2Logs.push('something wrong occured: ' + err),
    () => this.customObservable2Logs.push('done')
  );   // subscribe method with next, error, complete methods

      /***** Custom observalble with error method *****/
    let customObservable3 = new Observable(function(observer){
      try{
        observer.next(111);
        observer.next(222);
        observer.next(333);
        throw new Error('some error');
      } catch(err) {
        observer.error(err);
      }
    });
          
    customObservable3.subscribe(
      y => this.customObservable3Logs.push('got the value' + y), // called on, observer.next()
      err => this.customObservable3Logs.push('something wrong occured' + err), // called on, observer.error()
      () => this.customObservable3Logs.push('done')  // called on, observer.complete()
    ); // subscribe method with next, error, complete methods
 
  /***** Custom observable on array *****/
    /***** Instead of using from method, created array observable with  Observable.create *****/
    let numbersArray = [1,2,3,4,5,6,7,8,9,10];
    let arrayCustomObservable = Observable.create(function(observer) {
        numbersArray.forEach(n => {
          observer.next(n);
        });
        observer.complete();
    });
    arrayCustomObservable.subscribe({
      next: x => this.arrayCustomObservableLogs.push('got the value' + x),
      error: err => this.arrayCustomObservableLogs.push('something went wrong' + err),
      complete: () => this.arrayCustomObservableLogs.push('done')
    });  // subscribe method with next, error, complete methods in an object    


 
}

}
