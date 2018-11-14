(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.addNote('Favourite drink: Fanta');
    this.noteListView = new NoteListView(this.noteList)
  }

  NoteController.prototype.insertHTML = function() {
    var html = this.noteListView.noteListHTML();
    document.getElementById('app').innerHTML = html;
  };

  exports.NoteController = NoteController
})(this)
