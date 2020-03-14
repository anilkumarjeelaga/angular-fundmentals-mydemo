import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-url-template',
  templateUrl: './display-data-in-url-template.component.html',
  styleUrls: ['./display-data-in-url-template.component.css']
})
export class DisplayDataInUrlTemplateComponent implements OnInit {
  title:string;
  myHero:string;
  Heros:string[]= ['Joseph','james','jonah','david'];
  
  constructor() { 
    this.title="Anilkumar";
    this.myHero = "JosephPaul";
    let age = 27;

  }
   
  ngOnInit(): void {
  }

}
