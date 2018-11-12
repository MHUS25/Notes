function testNoteListStartWithOneEntry() {
  var noteList = new NoteList();
  assert.isTrue(noteList.entries.length === 1);
  assert.isTrue(noteList.entries[0] === 'My favourite language is JavaScript');
};

testNoteListStartWithOneEntry();


function testAddingNewNotes() {
  var noteList = new NoteList();
  noteList.addNote('Hello');
  assert.isTrue(noteList.text === 'Hello');
  assert.isTrue(noteList.getNotes().slice(-1)[0] === 'Hello');
};

testAddingNewNotes();
