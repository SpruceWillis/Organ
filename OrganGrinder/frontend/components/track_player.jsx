var React = require('react');
var TrackApiAction = require('../actions/track_api_actions');

var TrackPlayer = React.createClass({

  playTrack:  function(event){
    event.preventDefault();
    this.props.track.play();
  },
  removeTrack: function(event){
    event.preventDefault();
    TrackApiAction.removeTrack(this.props.track);
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
