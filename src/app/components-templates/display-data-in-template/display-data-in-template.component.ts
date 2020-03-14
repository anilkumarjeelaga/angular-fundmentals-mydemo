import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-template',
  template:`<h3>{{title}}</h3>`,
  styleUrls: ['./display-data-in-template.component.css']
})
export class DisplayDataInTemplateComponent implements OnInit {

title="This is new kind of adding template";

  constructor() { }

  ngOnInit(): void {
  }

}
