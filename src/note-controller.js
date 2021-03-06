(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList)
  }

  NoteController.prototype.insertHTML = function() {
    var html = this.noteListView.noteListHTML();
    document.getElementById('app').innerHTML = html;
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    var boundShowNoteForCurrentPage = this._showNoteForCurrentPage.bind(this)
    window.addEventListener("hashchange", boundShowNoteForCurrentPage);
  };

  NoteController.prototype._showNoteForCurrentPage = function() {
    var noteId = this._getNoteIdFromUrl(window.location);
    var note = this._findNoteById(noteId)
    this._showNote(note);
  };

  NoteController.prototype._getNoteIdFromUrl = function(location) {
    return location.hash.split("#notes/")[1];
  }

  NoteController.prototype._showNote = function(note) {
    var singleNoteView = new SingleNoteView(note)
    var div = document.getElementById('app');
    div.innerHTML = singleNoteView.viewNote();
  }

  NoteController.prototype._findNoteById = function(id) {
    return this.noteList.getNotes().find(function(note) {
      return String(note.id) === id;
    })
  };

  NoteController.prototype.listenForSubmit = function() {
    document.getElementById("text").addEventListener("submit", (event) => {
      event.preventDefault();
      this.noteList.addNote(event.target[0].value);
      this.insertHTML();
    })
  };

  exports.NoteController = NoteController
})(this)
