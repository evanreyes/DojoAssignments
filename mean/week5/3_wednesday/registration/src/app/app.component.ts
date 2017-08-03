import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: User = new User();
  users = [];

  onSubmit(event: Event) {
    console.log('submitting event');
    this.users.push(this.user);
    this.user = new User();
  }
}
