import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
    {
      email: "nairo@movistar.com",
      importance: true,
      subject: "Preparing for Vuelta",
      content: "Can't wait to try again in the Vuelta. Tough tour this year but we'll be back and stronger than before."      
    },
    {
      email: "peteosagan@bora-hansgrohe.net",
      importance: true,
      subject: "I'll be back!",
      content: "The UCI can't keep me down!"
    },
    {
      email: "cfroome@teamsky.co.uk",
      importance: false,
      subject: "Another one in the books",
      content: "It's too easy! Might give the Vuelta a shot..."
    },
    {
      email: "michael.matthews@sunweb.au",
      importance: true,
      subject: "Sprinting tips",
      content: "Too many stage wins! Not sure what to do with all this talent..."
    },
    {
      email: "r.bardet@ag2r.fr",
      importance: false,
      subject: "How to climb",
      content: "Bonjour!"
    }
  ]
}
