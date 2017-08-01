import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-zones',
  templateUrl: './time-zones.component.html',
  styleUrls: ['./time-zones.component.css']
})
export class TimeZonesComponent implements OnInit {

    current_time = new Date();
    current_zone = null;

    reset() {
      this.current_time = new Date();
      this.current_zone = null;
    }
    change_time(time_zone) {
      this.current_time = new Date();
      if (time_zone === 'pst') {
        this.current_time;
      }
      else if (time_zone === 'mst') {
        this.current_time.setHours(this.current_time.getHours() + 1);
      }
      else if (time_zone === 'cst') {
        this.current_time.setHours(this.current_time.getHours() + 2);
      }
      else if (time_zone === 'est') {
        this.current_time.setHours(this.current_time.getHours() + 3);
      }
      this.current_zone = time_zone;
    }

  constructor() { }

  ngOnInit() {
  }

}