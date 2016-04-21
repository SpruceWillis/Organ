var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/dispatcher');
var Track = require('../util/track');
var TrackStore = new Store(dispatcher);

var _tracks = [];

TrackStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "ADD_TRACK":
      _addTrack(payload.track);
      break;
    case "FETCH_TRACKS":
      _fetchTracks(payload.track);
      break;
    case "REMOVE_TRACK":
      _removeTrack(payload.track);
      break;
  }
};

TrackStore.all = function(){
  return _tracks.slice();
};

var _addTrack = function(track){
  _tracks.push(new Track(track));
  TrackStore.__emitChange();
};

var _fetchTracks = function(tracks){
  _tracks = tracks.map(function(track){
    return new Track(track);
  });
  TrackStore.__emitChange();
};

var _removeTrack = function(track){
  _tracks.splice(_tracks.indexOf(track), 1);
  TrackStore.__emitChange();
};

module.exports = TrackStore;
