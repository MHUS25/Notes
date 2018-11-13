(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.noteListHTML = function() {
    list = this.noteList.getNotes().map(
      note => `<li><div>${note.getText()}</div></li>`
    ).join('')
    return `<ul>${list}</ul>`
  }
  exports.NoteListView = NoteListView
})(this)