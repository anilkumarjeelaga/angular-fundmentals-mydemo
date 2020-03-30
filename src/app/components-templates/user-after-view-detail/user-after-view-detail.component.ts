import { Component, OnInit,ViewChild, AfterViewInit,AfterViewChecked } from '@angular/core';
import { EditUserComponent } from '../edit-user/edit-user.component';
@Component({
  selector: 'app-user-after-view-detail',
  templateUrl: './user-after-view-detail.component.html',
  styleUrls: ['./user-after-view-detail.component.css']
})
export class UserAfterViewDetailComponent implements OnInit,AfterViewInit,AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(EditUserComponent) editUserView: EditUserComponent;


  user = {
    name:'James',
    age:39
  };

  ngAfterViewInit() {
    console.log('ngAfterViewInit called ----!');
    console.log(this.editUserView.user.name);
    console.log(this.editUserView.user.age);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called -----!');
    console.log(this.editUserView.user.name);
    console.log(this.editUserView.user.age);
  }

}
