import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  color: string = 'green';

  currentHero = {
    name:"Andrews"
  }

  nullHero =null;

heros = [
 
   {id:1, "name":"Jake", "power":2612},
   {id:2, "name":"Michael", "power":7036},
   {id:3, "name":"Gabreal", "power":3331},
   {id:4, "name":"Trumphet", "power":5158},
   {id:5, "name":"Joshua", "power":8948}
];
differentHerosNames = [
  {id:1, "name":"Rupus", "power":2612},
  {id:2, "name":"James", "power":7036},
  {id:3, "name":"Peter", "power":3331},
  {id:4, "name":"John", "power":5158},
  {id:5, "name":"Kaleb", "power":8948}

];
differentHerosIds =[
  {id:11, "name":"Rupus", power:2612},
  {id:12, "name":"James", power:7036},
  {id:13, "name":"Peter", power:3331},
  {id:14, "name":"John", power:5158},
  {id:15, "name":"Kaleb", power:8948}

];
trackByHeros(index: number, hero): number{
  return hero.id;
}

updateWithDifferentNames() {
  this.heros = this.differentHerosNames;
}

updateWithDifferentIds() {
  this.heros = this.differentHerosIds;
}

condition:false;

}
