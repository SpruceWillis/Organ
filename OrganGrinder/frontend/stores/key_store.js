var Store = require('flux/utils').Store;
var TONES = require('../constants/tones');
var Note = require('../util/note');
var dispatcher = require('../dispatcher/dispatcher');

var KeyStore = new Store(dispatcher);

var _keys = [];

KeyStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "ADD_KEY":
      _addKey(payload.key);
      break;
    case "REMOVE_KEY":
      _removeKey(payload.key);
      break;
    case "REMOVE_ALL_KEYS":
      _removeAllKeys();
      break;
    case "ADD_KEYS":
      _addKeys(payload.key);
      break;
  }
};

KeyStore.all = function(){
  return _keys.slice();
};

var _addKey = function(key){
  if (_keys.indexOf(key) === -1){
    _keys.push(key);
    KeyStore.__emitChange();
  }
};

var _removeKey = function(key){
  _keys.splice(_keys.indexOf(key),1);
  KeyStore.__emitChange();
};

var _removeAllKeys = function(){
  _keys = [];
  KeyStore.__emitChange();
};

var _addKeys = function(keys){
  keys.forEach(function(key){
    if (_keys.indexOf(key) === -1){
      _keys.push(key);
    }
  });
  KeyStore.__emitChange();
};

module.exports = KeyStore;
