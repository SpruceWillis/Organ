var React = require('react');
var TrackStore = require('../stores/track_store');
var TrackPlayer = require("./track_player");

var Jukebox = React.createClass({
  getInitialState: function(){
    return({tracks: TrackStore.all()});
  },

  componentDidMount: function(){
    var self = this;
    this.listenerToken = TrackStore.addListener(function(){
      self.setState({tracks: TrackStore.all()});
    });
  },

  getTrackPlayers: function(){
    return this.state.tracks.map(function(track, idx){
      return <TrackPlayer track={track} key={idx}/>;
    });
  },

  render: function() {
    return (
      <div>
        <ul>
          {this.getTrackPlayers()}
        </ul>
      </div>
    );
  }
});

module.exports = Jukebox;
