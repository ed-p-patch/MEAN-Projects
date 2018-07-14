import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  users = [
    { email: 'fakeemail1@sdfklaj.com', importance: false, subject: 'New Window', content: 'Windows 10.....etc' },
    { email: 'asflkasdj@fff.com', importance: true, subject: 'Hello!', content: 'asjflkasdfjlasdkfasdjklfasdjklf' },
    { email: 'fasmdifasd@hddddd.com', importance: false, subject: 'A million dollars!', content: 'You have won!' },
    { email: 'student@student.com', importance: true, subject: 'student stuff', content: 'Homework, Homework' },
  ];
}