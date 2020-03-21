import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.css']
})
export class HeroBioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // deleteHeroEvent = new EventEmitter();
  @Input('name') hero;

  @Output('deleteRequest') deleteHeroEvent = new EventEmitter();

  deleteHero(hero) {
    this.deleteHeroEvent.emit(hero);
  }

// Un-comment below if, inputs and outputs are defined in the @component decorator.
  //deleteHeroEvent = new EventEmitter();

  // @Input('name') hero;

  // @Output('deleteRequest') deleteHeroEvent = new EventEmitter();

  // deleteHero(hero) {
  //   this.deleteHeroEvent.emit(hero);
  // }

  
}

