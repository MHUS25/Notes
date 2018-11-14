(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
    MAX_LENGTH = 20
  }

  NoteListView.prototype._shorten = function(string) {
    if (string.length > MAX_LENGTH) {
      return string.slice(0,MAX_LENGTH).concat('...')
    }
    return string
  }

  NoteListView.prototype.noteListHTML = function() {
    list = this.noteList.getNotes().map(
      note => `<li><div><a href="#notes/${note.getId()}">${this._shorten(note.getText())}</a></div></li>`
    ).join('')
    return `<ul>${list}</ul>`
  }

  exports.NoteListView = NoteListView
})(this)
