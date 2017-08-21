import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NoteService } from '../services/note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})

export class NoteCreateComponent {
  note: Note = new Note();

  @Output() noteEmitter = new EventEmitter<Note>();

  constructor(private noteService: NoteService) {};

  onSubmit(form: NgForm) {
    this.noteService.createNote(this.note)
    .then(note => {
      this.noteEmitter.emit(note);
      this.note = new Note();
      form.reset();
    })
    .catch(console.log);
  }
}
