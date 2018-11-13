(function(exports) {
  function NoteController() {
    this.noteList = new NoteList
  }

  NoteController.prototype.addsNote = function() {
    this.noteList.addNote('Favourite drink: Fanta');
  }

  NoteController.prototype.insertHTML = function () {
    var noteListView = new NoteListView(this.notelist);
    var html = noteListView.noteListHTML();
    document.getElementById('app').textContent="howdy";
  };

  // document.getElementById('app').textContent="howdy";

  exports.NoteController = NoteController
})(this)
