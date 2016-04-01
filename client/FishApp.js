/*
Index
  FishApp
    FishJumbotron
    Fish Box
      Toggler
      Fish List Data
        Fish List
          Fish Card
      Fish Form Data
        Fish Form
      Fish Details Data
        Fish Details
*/


var React = require('react')
var FishBox = require('./FishComps/FishBox')
var FishJumbotron = require('./FishComps/FishJumbotron')

var FishApp = React.createClass({
 
  render: function(){
      return (
        <div>
          <FishJumbotron />
          <FishBox />
        </div>    
        )
      }
  });
 
module.exports = FishApp;