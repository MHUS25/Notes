function testNoteHasText() {
  var note = new Note('My favourite language is JavaScript', 0);
  assert.isTrue(note.getText() === 'My favourite language is JavaScript');
};

testNoteHasText();

function testNoteHasId() {
  var note = new Note('My favourite language is JavaScript', 0);
  assert.isTrue(note.getId() === 0);
};

testNoteHasId();
