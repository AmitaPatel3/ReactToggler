var React = require('react');
var Loader = require('../loader');
var FishDetails = require('./FishDetails')

var FishDetailsData = React.createClass({
  getInitialState: function(){
    return{
    oneFish: null,
    }
  },
  loadOneFishFromServer: function(){
    var self=this;
    const ajaxProps = {
      url: '/api/fish/oneFish/' + this.props.id,
      method: 'GET',
    };
    console.log(ajaxProps);
    $.ajax(ajaxProps).done(function(data){
        console.log("I am loading one fish from server", data);
      self.setState({oneFish: data})
    })
  },
  
  componentDidMount: function(){
    this.loadOneFishFromServer();

  },
  
  render: function(){
    console.log("fish details data is fired")
    return  this.state.oneFish ? <FishDetails oneFish={this.state.oneFish} /> : <Loader/>;

  }


});

module.exports=FishDetailsData;