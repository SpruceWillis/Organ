var dispatcher = require('../dispatcher/dispatcher');

var TrackAction = {
  addTrack: function(track){
    dispatcher.dispatch({
      actionType: "ADD_TRACK",
      track: track
    });
  },

  removeTrack: function(track){
    dispatcher.dispatch({
      actionType: "REMOVE_TRACK",
      track: track
    });
  }
};

module.exports = TrackAction;
