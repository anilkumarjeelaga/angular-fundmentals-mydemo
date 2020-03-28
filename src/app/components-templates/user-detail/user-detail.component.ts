import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    name: 'John',
    age: 25
  };

  @ContentChild(EditUserComponent) 
  editUserContent: EditUserComponent;

  ngAfterContentInit() {
    console.log(this.editUserContent.version);
  }

}
