function testNoteStartWithOneEntry() {
  var note = new Note();
  assert.isTrue(note.getText() === 'My favourite language is JavaScript');
};

testNoteStartWithOneEntry();
