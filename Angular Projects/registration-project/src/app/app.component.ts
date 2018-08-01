import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = new User();
  registered_users = [];
  new_user = null;

  onSubmit(e: Event, form: NgForm){
    e.preventDefault();
    this.registered_users.push(this.user);
    this.new_user = this.user;
    this.user = new User();
    console.log(this.registered_users);
  }
}
