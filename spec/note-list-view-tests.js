function testNoteListViewStartsEmpty() {
  var noteList = new NoteList
  var noteListView = new NoteListView(noteList)
  assert.isEqualTo(noteListView.noteListHTML(), '<ul></ul>')
}
testNoteListViewStartsEmpty()

function testNoteListViewWithNotesAdded() {
  var noteList = new NoteList
  var noteListView = new NoteListView(noteList)
  noteList.addNote('Hello World!')
  noteList.addNote('Coding is so much fuuuuuuuun')
  noteList.addNote('I lo0o0o0o0o0o0o0ove JavaScript')
  assert.isEqualTo(noteListView.noteListHTML(), '<ul><li><div>Hello World!</div></li><li><div>Coding is so much fu...</div></li><li><div>I lo0o0o0o0o0o0o0ove...</div></li></ul>')
}
testNoteListViewWithNotesAdded()
