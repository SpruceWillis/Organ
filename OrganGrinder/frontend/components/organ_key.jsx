var React = require("react");
var TONES = require("../constants/tones");
var Note = require("../util/note");
var KeyStore = require("../stores/key_store");


var OrganKey = React.createClass({
  getInitialState: function(){
    return {pressed: false};
  },

  componentDidMount: function(){
    this.note = new Note(TONES[this.props.noteName]);
    this.listenerToken = KeyStore.addListener(this._keysChanged);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },

  _keysChanged: function(){
    if(KeyStore.all().indexOf(this.props.noteName) === -1){
      this.note.stop();
      this.setState({pressed:false});
    } else{
      this.note.start();
      this.setState({pressed:true});
    }
  },

  generateClassNames: function(){
    var classNames = "organ-key";
    if(this.props.noteName.indexOf("#") !== -1){
      classNames += " black";
    }else {
      classNames += " white";
    }
    if(this.state.pressed){
      classNames += " pressed";
    }
    return classNames;
  },

  render: function() {
    return (
      <li className={this.generateClassNames()}>{this.props.noteName}</li>
    );
  }
});

module.exports = OrganKey;
