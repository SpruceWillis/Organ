var Store = require('flux/utils').Store;
var dispatcher = require('../dispatcher/dispatcher');

var TrackStore = new Store(dispatcher);

var _tracks = [];

TrackStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "ADD_TRACK":
      _addTrack(payload.track);
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
  _tracks.push(track);
  TrackStore.__emitChange();
};

var _removeTrack = function(track){
  _tracks.splice(_tracks.indexOf(track), 1);
  TrackStore.__emitChange();
};

module.exports = TrackStore;
