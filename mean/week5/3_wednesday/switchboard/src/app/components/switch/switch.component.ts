import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  buttons = [true, true, true, true, true, true, true, true, true, true];

  switch(idx) {
    this.buttons[idx] = !this.buttons[idx]
  };
  
  constructor() { }

  ngOnInit() {
  }

}