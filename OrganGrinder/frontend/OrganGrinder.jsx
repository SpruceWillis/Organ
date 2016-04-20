// var Dispatcher = require("./dispatcher/dispatcher");
// var Note = require("./util/note");
var KeyListeners = require("./util/key_listener");
var React = require('react');
var ReactDom = require('react-dom');
var Organ = require('./components/organ');

document.addEventListener("DOMContentLoaded", function(){
  KeyListeners();
  var root = document.getElementById("root");
  ReactDom.render(<Organ  />, root);
});
