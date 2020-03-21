import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-events',
  templateUrl: './custom-events.component.html',
  styleUrls: ['./custom-events.component.css']
})
export class CustomEventsComponent implements OnInit {

  heros = [{"Id":1, "name":"Jake", "power":1122},
          {"Id":2, "name":"Anil", "power":2233},
          {"Id":3, "name":"kumar", "power":3344},
          {"Id":4, "name":"jeeelaga", "power":4455}
];
 
  constructor() { }

  ngOnInit(): void {
  }
delete (heroObj){
  console.log(heroObj);
}

}
