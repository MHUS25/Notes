(function(exports) {
  function Note() {
    this.text = 'My favourite language is JavaScript';
  };

  exports.Note = Note;
})(this);

Note.prototype.getText = function() {
  return this.text
};
