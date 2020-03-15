import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  images = ['assets/images/image-1.jpg', 'assets/images/image-2.jpg','assets/images/image-3.jpg'];
}
