var React = require('react');
var OrganKey = require('./organ_key');
var Recorder = require('./recorder');
var Jukebox = require('./jukebox');
var TONES = require('../constants/tones');

var Organ = React.createClass({
  makeKeys: function(){
    var keys = Object.keys(TONES);
    return keys.map(function(key){
      return <OrganKey noteName={key} key={key} />;
    });
  },
  render: function() {

    return (
      <div className="organ">
        <ul className="clear">
          {this.makeKeys()}
        </ul>
        <div className="recording">
          <Recorder />
          <Jukebox />
        </div>
      </div>
    );
  }

});

module.exports = Organ;
