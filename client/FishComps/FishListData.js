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
var React = require('react');
var Loader = require('../loader');
var FishList = require('./FishList');

var FishListData = React.createClass({ 
getInitialState:  function(){
  return {
    allFish: null     
  }
},
loadAllFishFromServer: function() {
  $.ajax({
    url:'/api/fish',
    method: 'GET'
  }).done(data => this.setState({ allFish: data}) );
},

componentDidMount: function(){
    this.loadAllFishFromServer();
  },

render: function(){
    return this.state.allFish ? <FishList getId={ this.props.getId } fishArray={ this.state.allFish }/> : <Loader/>

  }
});


module.exports = FishListData;