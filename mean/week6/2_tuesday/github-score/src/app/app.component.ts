import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exists = null;
  score = null;
  username = null;
  promise;

  constructor(private _apiService: ApiService) {}

  calculateScore() {
    this.promise = this._apiService.retrieve_user(this.username)
    if (this.promise) {
      this.promise.then( (user) => {
        if (user.id) {
          this.exists = true;
          this.score = user.public_repos + user.followers;
        }
        else {
          this.exists = false;
          this.score = null;
        }
        this.username = null;
        console.log(this.username)
      })
      .catch( (err) => {
        this.exists = false;
      });
    } else {
      this.exists = false;
    }
  }

}
