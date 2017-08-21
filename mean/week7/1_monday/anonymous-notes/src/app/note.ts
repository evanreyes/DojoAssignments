export class Note {
  _id: number;
  note: string;

  constructor() {
    this._id = Math.floor(Math.random() * 1000);
  }
}
