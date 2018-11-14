function testNoteListStartsWithNoNotes() {
  var noteList = new NoteList();
  assert.isTrue(noteList.getNotes().length === 0);
};

testNoteListStartsWithNoNotes();

function testCanAddAndStoreNewNotes() {
  var noteList = new NoteList();
  noteList.addNote('My Favourite drink: Fanta');
  assert.isEqualTo(noteList.getNotes()[0].getText(), 'My Favourite drink: Fanta');
};

testCanAddAndStoreNewNotes();

function testCreatesEachNoteWithUniqueId() {
  var noteList = new NoteList();
  noteList.addNote('My Favourite drink: Fanta');
  noteList.addNote('My Favourite drink: Chocolate Milk');
  assert.isEqualTo(noteList.getNotes()[0].getId(), 0);
  assert.isEqualTo(noteList.getNotes()[1].getId(), 1);
};

testCreatesEachNoteWithUniqueId()
