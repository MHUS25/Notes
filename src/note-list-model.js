(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.getNotes = function() {
    return this.notes;
  };

  NoteList.prototype.addNote = function(text) {
    note = new Note(text);
    this.notes.push(note);
  };

  exports.NoteList = NoteList;
})(this);
