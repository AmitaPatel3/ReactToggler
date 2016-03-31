/*
FishApp
  Fish Box
    Toggler
    Fish List
      Fish Card
    Fish Form
  Jumbotron
  Loader
    


    fish app is in the position to know that is happening in the view
*/


var React = require('react')
var FishBox = require('./FishComps/fishBox')

var Jumbotron = React.createClass({
  render: function(){
    return(
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Welcome to FishWorld</h1>
          <p className="lead">We have all types of fish for your viewing pleasure.</p>
          <hr className="m-y-2"/>
          <p>We are crazy about fish!</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </div>
      )
    }
  });


var Loader = React.createClass({
  render: function(){
    return(
      <div>
         <i className="fa fa-hand-spock-o fa-spin"></i>
      </div>
      )
  }
});


var FishApp = React.createClass({

getInitialState: function(){
  return {
    fishArray: null     
  }
},
loadAllFishFromServer: function() {
  var self = this;
  $.ajax({
    url:'/api/fish',
    method: 'GET'
  }).done(function(data){
      setTimeout(function(){
          self.setState({fishArray: data})
      }, 1000);
    })
  },


submitFishToServer: function(fishData) {
  var self = this;
  console.log("fish data in fish app", fishData);
  $.ajax({
      url: '/api/fish',
      method: 'POST',
      data: fishData
      }).done(function(data){
        console.log('inside success', data);
        self.loadAllFishFromServer();
      })
  },
  
  componentDidMount: function(){
    console.log('component is mounting!')
    this.loadAllFishFromServer();
  },
  render: function(){
    if(this.state.fishArray){
    return (
      <div>
        <Jumbotron />
        <FishBox fishArray={ this.state.fishArray } submitFishToServer={ this.submitFishToServer } />
      </div>    
      )
    } else {
    return <Loader/>
    }
  }
  });

module.exports = FishApp;