var KEYCODES = require ('../constants/keycodes.js');
var dispatcher = require('../dispatcher/dispatcher');

var KeyActions = {
  keyPressed: function(noteName){
    dispatcher.dispatch({
      actionType: "ADD_KEY",
      key: noteName
    });
  },

  keyRemoved: function(noteName){
    dispatcher.dispatch({
      actionType: "REMOVE_KEY",
      key: noteName
    });
  },

  addKeys: function(noteNames){
    dispatcher.dispatch({
      actionType: "ADD_KEYS",
      key: noteNames
    });
  },

  removeAllKeys: function(){
    dispatcher.dispatch({
      actionType: "REMOVE_ALL_KEYS",
    });
  },
};

module.exports = KeyActions;
