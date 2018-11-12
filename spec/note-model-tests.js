function testNotesStartWithOneEntry() {
  var notes = new Notes();
  assert.isTrue(notes.text === 'My favourite language is JavaScript');
};

testNotesStartWithOneEntry();
