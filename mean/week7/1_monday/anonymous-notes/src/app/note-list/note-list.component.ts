import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

    notes: Array<Note> = [];
    constructor(private noteService: NookService) {}

    createNote(note: Note): void {
      console.log('note', note);
      this.notes.push(note);
    }

    ngOnInit() {
      this.getNotes();
    }

    getNotes(): void {
      this.noteService.getNotes()
        .then(notes => this.notes = notes)
        .catch(console.log);
    }

  }
