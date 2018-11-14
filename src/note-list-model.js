(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.getNotes = function() {
    return this.notes;
  };

  NoteList.prototype.addNote = function(text) {
    note = new Note(text, this._nextID());
    this.notes.push(note);
  };

  NoteList.prototype._nextID = function() {
    return this.notes.length;
  };

  exports.NoteList = NoteList;
})(this);
