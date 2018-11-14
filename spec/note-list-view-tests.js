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
  assert.isEqualTo(noteListView.noteListHTML(), '<ul><li><div><a href="#notes/0">Hello World!</a></div></li><li><div><a href="#notes/1">Coding is so much fu...</a></div></li><li><div><a href="#notes/2">I lo0o0o0o0o0o0o0ove...</a></div></li></ul>')
}
testNoteListViewWithNotesAdded()
