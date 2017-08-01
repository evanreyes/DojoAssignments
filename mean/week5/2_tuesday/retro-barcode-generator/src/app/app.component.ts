import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = [
    '#E74C3C',
    '#8E44AD',
    '#5DADE2',
    '#48C9B0',
    '#229954',
    '#F4D03F',
    '#E67E22',
    '#AAB7B8',
    '#F5B7B1',
    '#1B4F72'
  ]

  rand = () => {
    return this.colors[(Math.floor(Math.random() * 10))];
  }
}
