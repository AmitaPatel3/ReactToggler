/*
FishApp
  Fish Box
    Toggler
    Fish Form
    Fish List Data
      Fish List
        Fish Card 
  FishJumbotron
  Loader

*/
var React = require('react')

var Loader = React.createClass({
  render: function(){
    return(
      <div>
         <i className="fa fa-hand-spock-o fa-spin"></i>
      </div>
      )
  }
});

module.exports = Loader;