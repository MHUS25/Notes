function testSingleNoteViewHasANote() {
  var note = new Note
  var singleNoteView = new SingleNoteView(note);
  assert.isEqualTo(singleNoteView.note, note);
};

testSingleNoteViewHasANote();

function testCanViewNoteInHTML() {
  var note = new Note('Favourite drink: Fanta')
  var singleNoteView = new SingleNoteView(note);
  assert.isEqualTo(singleNoteView.viewNote(), '<div>Favourite drink: Fanta</div>');
};

testCanViewNoteInHTML();
