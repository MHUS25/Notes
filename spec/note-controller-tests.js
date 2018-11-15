function testNoteControllerCanBeInstantiated() {
  var noteController = new NoteController(new NoteList);
  assert.isInstanceOf(noteController, NoteController);
}
testNoteControllerCanBeInstantiated()

function testInnerHTMLPropertyCanBeChanged() {
  noteList = new NoteList
  var noteController = new NoteController(noteList);
  var div = document.createElement('div');
  div.id = 'app';
  document.body.appendChild(div);
  noteList.addNote('Favourite drink: Fanta');
  noteController.insertHTML();
  assert.isEqualTo(div.innerHTML, '<ul><li><div><a href="#notes/0">Favourite drink: Fan...</a></div></li></ul>');
}
testInnerHTMLPropertyCanBeChanged()
