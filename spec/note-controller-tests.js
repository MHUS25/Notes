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
  console.log(document.getElementById('app'));
  assert.isEqualTo(div.innerHTML, '<ul><li><div><a href="#notes/0">Favourite drink: Fan...</a></div></li></ul>');
}
testInnerHTMLPropertyCanBeChanged()
