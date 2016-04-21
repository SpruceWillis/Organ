var TrackApiUtil = require('../util/track_api_util');


var TrackApiAction = {
  fetchTracks: function(){
    TrackApiUtil.fetchTracks();
  },

  addTrack: function(track){
    TrackApiUtil.addTrack(track);
  },

  removeTrack: function(track){
    TrackApiUtil.removeTrack(track);
  }

};

module.exports = TrackApiAction;
