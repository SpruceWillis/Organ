var React = require('react');
var TrackAction = require('../actions/track_action');

var TrackPlayer = React.createClass({

  playTrack:  function () {
    this.props.track.play();
  },
  removeTrack: function(){
    TrackAction.removeTrack(this.props.track);
  },
  render: function() {
    return (
      <li>
        <button onClick={this.playTrack}>Play</button>
        <button onClick={this.removeTrack}>Delete</button>
      </li>
    );
  }

});

module.exports = TrackPlayer;
