var KeyAction = require('../actions/key_action');

var setupListeners = function(){
    $(document).on("keydown", function(event){
      //console.log("down");
      event.preventDefault();
      KeyAction.keyPressed(event.keyCode);
    });
    $(document).on("keyup", function(event){
      //console.log("up");
      event.preventDefault();
      KeyAction.keyRemoved(event.keyCode);
    });
};

module.exports = setupListeners;
