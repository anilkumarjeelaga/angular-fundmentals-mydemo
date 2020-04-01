import { Component, OnInit } from '@angular/core';
import { SubjectsDemoService } from '../subjects-demo.service';
// import { async } from '@angular/core/testing';
import { 
  Observable,
  Subject,
  from,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject } from 'rxjs';


@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.css']
})
export class SubjectDemoComponent implements OnInit {

  constructor(public subjectDemoService: SubjectsDemoService) { }
  
  initTime: number;
  observableLogs: string[] = [];
  subjectLogs: string[] = [];
  subjectObservableLogs: string[] = [];
  namesSubjectLogs: string[] = [];
  regularSubjectLogs: string[] = [];
  behaviorSubjectLogs: string[] = [];
  replySubjectLogs: string[] = [];
  asyncSubjectLogs: string[] = [];
 

  ngOnInit(): void {

    this.initTime = Date.now(); //Returns timestamp
  
    /******** Observable subscribers ********/
       this.subjectDemoService.numbersObservable$.subscribe(n => {
         this.observableLogs.push(`At ${this.getTimeDifference()} seconds: Observer1: ${n}`)
       }); //subscriber 1

       setTimeout(() => {
         this.subjectDemoService.numbersObservable$.subscribe(n => {
           this.observableLogs.push(`At ${this.getTimeDifference()} seconds: Observer2: ${n}`);
         })
       }, 1500);
       
    /******** Subject subscribers ********/    
    this.subjectDemoService.numbersSubject.subscribe(n => {
    this.subjectLogs.push(`At ${this.getTimeDifference()} seconds: Observer1: ${n}`)
    }); //subscribe 1
    setTimeout(() => {
      this.subjectDemoService.numbersSubject.subscribe(n => {
        this.subjectLogs.push(`At ${this.getTimeDifference()} seconds: observer2: ${n}`)
      });
    }, 1500); //subscribe 2

    /******** Observable created from subject subscribers ********/        
  
    this.subjectDemoService.numbersSubjectObservable$.subscribe(n => {
      this.subjectObservableLogs.push(`At ${this.getTimeDifference()} seconds:observer1: ${n}`)
    }); //subscribe 1

    setTimeout(() => {
    this.subjectDemoService.numbersSubjectObservable$.subscribe(n => {
    this.subjectObservableLogs.push(`At ${this.getTimeDifference()} seconds:observer2: ${n}`)
    });
    }, 1500); //subscribe 2

    /******** 3. Subject as both observable and observer ********/  
      let names: Array<string> = ['John', "Andrews", 'Benzimen'];

      let namesSubject:Subject<string> = new Subject<string>();

      namesSubject.subscribe(n => {
        this.namesSubjectLogs.push(`Observer1: ${n}`)
      }); //subscribe 1

      namesSubject.subscribe(n => {
        this.namesSubjectLogs.push(`Observer2: ${n}`)
      }); //subscribe 2
      let namesObservable: Observable<string> = from(names);
      namesObservable.subscribe(namesSubject);

    /***************** Subject Types *******************/
    
    // Regular Subject

    let regularSubject = new Subject();
    regularSubject.subscribe({
      next: (v) => this.regularSubjectLogs.push('observer1: ' + v)
    });

    regularSubject.next(1);
    regularSubject.next(2);

    regularSubject.subscribe({
      next: (v) => this.regularSubjectLogs.push('observer2: ' + v)
    });
    regularSubject.next(3);
    regularSubject.next(4);
        
    // Behaviour Subject

    let behaviorSubject = new BehaviorSubject(0); //0 is the initial value
    behaviorSubject.subscribe({
      next: (v) => this.behaviorSubjectLogs.push('observer1: ' + v)
    });
    behaviorSubject.next(1);
    behaviorSubject.next(2);

  behaviorSubject.subscribe({
    next: (v) => this.behaviorSubjectLogs.push('observer2: ' + v)
  });
  behaviorSubject.next(3);

   // Reply Subject
   
    let replaySubject = new ReplaySubject(); //buffer all values fron new subscribers
  //  let replaySubject = new ReplaySubject(3); // buffer last 3 values for new subscribers
    //let replaySubject = new ReplaySubject(100, 1000); // buffer last 100 values emitted in last 1 Sec
   replaySubject.subscribe({
     next: (v) => this.replySubjectLogs.push('observer1: ' + v)
   });
   replaySubject.next(1);
   replaySubject.next(2);
   replaySubject.next(3);
   replaySubject.next(4);

   replaySubject.subscribe({
     next:(v) => this.replySubjectLogs.push('observer2: ' + v)
   });
   replaySubject.next(5);

   // Async Subject

   let asyncSubject = new AsyncSubject();
   asyncSubject.subscribe({
     next: (v) => this.asyncSubjectLogs.push('observer1: ' + v)
   });
   asyncSubject.next(1);
   asyncSubject.next(2);
   asyncSubject.next(3);
   asyncSubject.next(4);
   
   asyncSubject.subscribe({
     next: (v) => this.asyncSubjectLogs.push('observer2: ' + v)
   });
   asyncSubject.next(5);
   asyncSubject.complete();

  
  }
  private getTimeDifference() {
    return ((Date.now() - this.initTime) / 1000).toFixed(1);
  }

}


 