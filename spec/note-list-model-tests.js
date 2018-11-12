function testNoteListStartWithOneEntry() {
  var noteList = new NoteList();
  assert.isTrue(noteList.entries.length === 1);
  assert.isTrue(noteList.entries[0] === 'My favourite language is JavaScript');
};

testNoteListStartWithOneEntry();
