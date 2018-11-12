  function testNotesStartWithOneEntry() {
    var notes = new Notes();
    assert.isTrue(notes.entries.length === 1);
    assert.isTrue(notes.entries[0] === 'My favourite language is JavaScript');
  };

  testNotesStartWithOneEntry();
