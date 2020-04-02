import { Component, OnInit } from '@angular/core';
import { of, interval, fromEvent, from} from 'rxjs';
import { map, filter, combineLatest, merge, concat, startWith, withLatestFrom, take, zip, debounceTime, distinct, distinctUntilChanged, takeUntil, bufferTime, tap, catchError, retry } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-different-operators',
  templateUrl: './different-operators.component.html',
  styleUrls: ['./different-operators.component.css']
})
export class DifferentOperatorsComponent implements OnInit {
 
  numbersMappedLogs: Array<number> = [];
  filterLogs: Array<number> = [];
  combineLatestLogs: Array<string> = [];
  mergeLogs:Array<number> =[];
  concatLogs:Array<number> = [];
  startWithLogs:Array<number> = [];
  withLatestLogs:Array<string> = [];
  zipLogs:Array<Array<number>> = [];
  debounceTimeLogs: Array<string> = [];
  distinctLogs:Array<number> = [];
  distinctUntilChanged:Array<number> = [];
  takeLogs:Array<number> = [];
  takeUntilLogs:Array<number> = [];
  bufferTimeLogs:Array<Array<number>> = [];
  




  constructor() { }

  ngOnInit(): void {
    let numbersObservable = of(1, 2, 3, 4, 5);
  

  /***   Map operator   ***/
  let numbersMapped = numbersObservable.pipe(
    map (val => val * 10)
  );
  
  numbersMapped.subscribe(val => this.numbersMappedLogs.push(val));
  

  /*****  Filter  *****/
  let numbersFiltered = numbersObservable.pipe(
   filter(val => val % 2 === 0)
  );
  numbersFiltered.subscribe(val => this.filterLogs.push(val));



/***** Combinelatest operator*****/ 
 let observable1$ = interval(1000);
 let observable2$ = interval(1500);

    let combined$ = observable1$.pipe(
    combineLatest (
      observable2$,
      (val1, val2) => {
        return `${val1} - ${val2}`
      }
    )
 );
 combined$.subscribe(val => this.combineLatestLogs.push(val));

    /***** Merge Operators *****/  
    let merged$ = observable1$.pipe(
    merge(observable2$)
    );
    merged$.subscribe(val => this.mergeLogs.push(val));

    /******* concat operator *********/
    let num1$ = of(1,2,3);
    let num2$ = of(4,5,6);

    let concatinated$ = num1$.pipe(
        concat(num2$)
    );
      concatinated$.subscribe(val => this.concatLogs.push(val));
 
      /******* startWith operator *********/
      let num3$ = of(1,2,3);
      let startedWith$ =num3$.pipe(
        startWith(0)
      );
      startedWith$.subscribe(val => this.startWithLogs.push(val));
    
      /******* withLatestFrom operator *********/    
      //emit every 5s
      const source = interval(5000);
      //emit every 1s
      const secondSource = interval(1000);
      const final = source.pipe(
        withLatestFrom(secondSource),
        map(([first, second]) => {
          return `First Source (5s): ${first} Second Source (1s): ${second}`;
        })
      );
      final.subscribe(val => this.withLatestLogs.push(val));

      /******* zip operator *********/
      //emit every 1s
      const numbers1$ = interval(1000);
      const numbers2$ = numbers1$.pipe(take(2));

      const numb$ = numbers1$.pipe(
        // zip(numbers2$)
        // zip(numbers2$)
        zip(numbers2$)
      );
      //output: [0,0]...[1,1]
      numb$.subscribe(val => this.zipLogs.push(val));


      /******* debounceTime operator *********/
      
      const inputElem: HTMLInputElement = <HTMLInputElement>document.getElementById('name');
      //wait .5s between keyups to emit current value
        //throw away all other values
      const events$ = fromEvent(inputElem, 'keyup').pipe(
        debounceTime(500)
      );
      events$.subscribe(event => this.debounceTimeLogs.push(inputElem.value));

      /******* distinct & distinctUntilChanged operator *********/
      
      const duplicates$ = from([1, 1, 2, 2, 3, 1, 2, 3]);

      duplicates$.pipe(
        distinct()
      ).subscribe(val => this.distinctLogs.push(val));
      duplicates$.pipe(
        distinctUntilChanged()
      ).subscribe(val => this.distinctUntilChanged.push(val));

      /******* take operator *********/
      //emit value every is
      const interval$ = interval(1000);
      //take the first 5 emitted values
      interval$.pipe(take(5)).subscribe(val => this.takeLogs.push(val));

      /******* takeUntil operator *********/
      const source$ =interval(1000);
      //after 5 seconds, emit value
      const timer$ = interval(5000);
      //when timer emits after 5s, complete source$
      source$.pipe(takeUntil(timer$)).subscribe(val => this.takeUntilLogs.push(val));

      /******* bufferTime operator *********/    
      //create an observable that emits a value every 500ms
      const intrvl$ = interval(500);
      // //After 2 seconds have passed, emit buffered values as an array
      intrvl$.pipe(bufferTime(2000)).subscribe(val => this.bufferTimeLogs.push(val));
      
      /******* tap operator *********/    
      const source3$ = of(1, 2, 3, 4, 5);
      //transparently lo values from source
      source3$.pipe(
        tap(val => console.log(`BEFORE MAP: ${val}`)),
        map(val => val + 10),
        tap(val => console.log(`AFTER MAP: ${val}`))
      ).subscribe();
      

      /******* retry & catchError operator *********/
    
      const apiData = ajax ('https://todos-api-dev.herokuapp.com/todoss').pipe(
          retry(3),        
          map(res => {
            if (!res.response) {
              throw new Error ('value Expected');
            }
            return res.response;
          }),
          catchError(err => of([]))
      );

      apiData.subscribe({
        next(data) { console.log('data: ', data); },
        error(err) { console.log('errors already caught... will not run'); }
      });


  }

}
