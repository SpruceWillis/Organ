var KEYCODES = require ('../constants/keycodes.js');
var dispatcher = require('../dispatcher/dispatcher');

var KeyActions = {
  keyPressed: function(code){
    dispatcher.dispatch({
      actionType: "ADD_KEY",
      key: KEYCODES[code]
    });
  },

  keyRemoved: function(code){
    dispatcher.dispatch({
      actionType: "REMOVE_KEY",
      key: KEYCODES[code]
    });
  }
};

module.exports = KeyActions;
