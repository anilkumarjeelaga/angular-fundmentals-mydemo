import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  birthday = new Date(1992, 12, 19);

  name:string = "jeelaga Anil kumar";

  constructor() { }

  ngOnInit(): void {
  }

  // name: string = 'Keith C John';
  
  heros = [
    {name: 'James', canFly: true},
    {name: 'caleb',  canFly: false},
    {name: 'Joshua',   canFly: false},
    {name: 'Moses',   canFly: true}
  ];

  newHero = {
    name: '',
    canFly: true
  };

  pushHero(name, canFly) {
    let heroObj = {
      name: name,
      canFly: canFly
    };
    // Here heros array reference is not changed. Pushed another element to same array.
    // So, Pure pipe don't detect this change 
    this.heros.push(heroObj);
    this.newHero.name = '';
  }
  
  concatHero(name, canFly) {
    let heroObj = {
      name: name,
      canFly: canFly
    };
    // Here we are changing the reference of the heros array on concat
    // Pure pipe will respond to this change
    this.heros = this.heros.concat(heroObj);
    this.newHero.name = '';
}
}
