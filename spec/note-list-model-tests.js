function testNoteListStartsWithNoNotes() {
  var noteList = new NoteList();
  assert.isTrue(noteList.getNotes().length === 0);
};

testNoteListStartWithNoNotes();

function testCanAddAndStoreNewNotes() {
  var noteList = new NoteList();
  noteList.addNote('My Favourite drink: Fanta');
  console.log(noteList.getNotes())
  assert.isEqualTo(noteList.getNotes()[0].getText(), 'My Favourite drink: Fanta');
};

testCanAddAndStoreNewNotes();
