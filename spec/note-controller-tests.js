function testNoteControllerCanBeInstantiated() {
  var noteController = new NoteController(new NoteList);
  assert.isInstanceOf(noteController, NoteController);
}
testNoteControllerCanBeInstantiated()

function testInnerHTMLPropertyCanBeChanged() {
  var noteController = new NoteController(new NoteList);
  var div = document.createElement('div');
  div.id = 'app';
  document.body.appendChild(div);
  noteController.insertHTML();
  assert.isEqualTo(div.innerHTML, '<ul><li><div>Favourite drink: Fanta</div></li></ul>');
}
testInnerHTMLPropertyCanBeChanged()
