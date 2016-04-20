var KeyAction = require('../actions/key_action');
var KEYCODES = require('../constants/keycodes');

var setupListeners = function(){
    $(document).on("keydown", function(event){
      //console.log("down");
      event.preventDefault();
      KeyAction.keyPressed(KEYCODES[event.keyCode]);
    });
    $(document).on("keyup", function(event){
      //console.log("up");
      event.preventDefault();
      KeyAction.keyRemoved(KEYCODES[event.keyCode]);
    });
};

module.exports = setupListeners;
