var KeyStore = require("../stores/key_store");
var KeyAction = require("../actions/key_action");


var Track = function (attr){
  this.name = attr["name"];
  this.roll = attr["roll"] || [];
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.addNotes = function (notes) {
  var timeSlice = Date.now() - this.startTime;
  this.roll.push({timeSlice: timeSlice, notes: notes});
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.play = function () {
  if(this.interval){
    return;
  } else{
    var playbackStartTime = Date.now();
    var currentNote = 0;
    var self = this;
    this.interval = setInterval(function(){
      if(currentNote < self.roll.length){
        if(Date.now() - playbackStartTime > self.roll[currentNote].timeSlice){
          KeyAction.removeAllKeys();
          KeyAction.addKeys(self.roll[currentNote].notes);
          currentNote += 1;
        }
      } else{
        clearInterval(self.interval);
        self.interval = undefined;
      }
    }, 10);
  }
};

module.exports = Track;
