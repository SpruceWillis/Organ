var dispatcher = require('../dispatcher/dispatcher');

var TrackAction = {
  addTrack: function(track){
    dispatcher.dispatch({
      actionType: "ADD_TRACK",
      track: track
    });
  },

  fetchTracks: function(tracks){
    dispatcher.dispatch({
      actionType: "FETCH_TRACKS",
      track: tracks
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
