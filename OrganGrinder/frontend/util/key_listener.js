var KeyAction = require('../actions/key_action');

var setupListeners = function(){
    $(document).on("keydown", function(event){
      event.preventDefault();
      KeyAction.keyPressed(event.keyCode);
    });
    $(document).on("keyup", function(event){
      event.preventDefault();
      KeyAction.keyRemoved(event.keyCode);
    });
};

module.exports = setupListeners;
