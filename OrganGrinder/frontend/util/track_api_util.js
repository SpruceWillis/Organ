var TrackAction = require("../actions/track_action");
var Track = require("../util/track");

var TrackApiUtil = {
  fetchTracks: function(){
    $.ajax({
      type: "GET",
      url: "/tracks",
      dataType: "json",
      success: function(tracks){
        TrackAction.fetchTracks(tracks);
      },
      failure: function(){
        alert("Unable to load tracks");
      }
    });
  },

  addTrack: function(newTrack){
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: "/tracks",
      data: {track: {name: newTrack.name, roll: JSON.stringify(newTrack.roll)}},
      success: function(track){
        TrackAction.addTrack(track);
      },
      failure: function(){
        alert("Unable to save track");
      }
    });
  },

  removeTrack: function(track){
    $.ajax({
      type: "DELETE",
      url: "/tracks/" + track.id,
      success: function(removedTrack){
        TrackAction.removeTrack(removedTrack);
      },
      failure: function(){
        alert("Unable to remove track");
      }
    });
  }

};

module.exports = TrackApiUtil;
