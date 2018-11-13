function testNoteListViewStartsEmpty() {
  var noteList = new NoteList
  var noteListView = new NoteListView(noteList)
  assert.isEqualTo(noteListView.noteListHTML(), '<ul></ul>')
}
testNoteListViewStartsEmpty()

function testNoteListViewWithNotesAdded() {
  var noteList = new NoteList
  var noteListView = new NoteListView(noteList)
  noteList.addNote('Coding is fun')
  noteList.addNote('I love JavaScript')
  assert.isEqualTo(noteListView.noteListHTML(), '<ul><li><div>Coding is fun</div></li><li><div>I love JavaScript</div></li></ul>')
}
testNoteListViewWithNotesAdded()