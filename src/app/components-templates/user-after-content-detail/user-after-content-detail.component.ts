import { Component, OnInit,AfterContentInit, AfterContentChecked, ContentChild } from '@angular/core';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-after-content-detail',
  templateUrl: './user-after-content-detail.component.html',
  styleUrls: ['./user-after-content-detail.component.css']
})
export class UserAfterContentDetailComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild ( EditUserComponent ) editusercontent :EditUserComponent

user = {
  name:"David",
  age:40
}
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log(this.editusercontent.user.name);
    console.log(this.editusercontent.user.age);
  };
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    console.log(this.editusercontent.user.name);
    console.log(this.editusercontent.user.age);
  }

}
