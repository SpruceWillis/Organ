var React = require('react');
var Track = require('../util/track');
var KeyStore = require('../stores/key_store');
var TrackAction = require("../actions/track_action");

var Recorder = React.createClass({
  getInitialState: function(){
    return {isRecording: false, track: new Track({name: "myTrack"})};
  },

  // componentDidMount: function(){
  //   var self = this;
  //   this.listenerToken = KeyStore.addListener(function(){
  //     self.state.track.addNotes(KeyStore.all());
  //   });
  // },

  toggleRecording: function(){
    if (this.state.isRecording){
      this.listenerToken.remove();
      this.state.track.stopRecording();
      TrackAction.addTrack(this.state.track);
      this.setState({isRecording: false, track: new Track({name: "Name"}) });
    } else {
      var self = this;
      this.listenerToken = KeyStore.addListener(function(){
        self.state.track.addNotes(KeyStore.all());
      });
      this.state.track.startRecording();
      this.setState({isRecording: true});
    }
  },

  // playTrack: function(){
  //   if(this.state.isRecording){
  //     return;
  //   } else {
  //     this.state.track.play();
  //   }
  // },


  // <button onClick={this.playTrack}>
  //   Play Track</button>

  //Broken by saving multiple tracks

  render: function() {
    return (

      <div>
        <button onClick={this.toggleRecording}>
          {this.state.isRecording ? "Stop Recording" : "Start Recording"}</button>
      </div>
    );
  }

});

module.exports = Recorder;
