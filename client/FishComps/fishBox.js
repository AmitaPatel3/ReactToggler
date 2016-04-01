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
var FishListData = require('./FishListData');
var FishFormData = require('./FishFormData');
var FishDetailsData = require('./FishDetailsData');


var Toggler = React.createClass({
  
  render() {
    const {toggleActiveComp} = this.props;
    return(
      <div className="container">
        <div className="btn-group" data-toggle="buttons">
         <button onClick={ () => toggleActiveComp('fish') } className="btn btn-info">Fish Display</button> 
          <button onClick={ () => toggleActiveComp('form') }className="btn btn-success">Modify Fish</button>
        </div>
      </div>
    )
  }
});

var FishBox = React.createClass({
  getInitialState: function(){
    return {
      activeComponent: 'fish',
      activeFishId: null,
      }
  },
  getId: function(id){
    return this.setState({ activeFishId: id, activeComponent: 'oneFish' })
  },
  showComp: function(){
    if(this.state.activeComponent === 'fish'){
      return <FishListData getId={ this.getId }/>

    } else if (this.state.activeComponent === 'form') {
      return <FishFormData toggleActiveComp={this.toggleActiveComp}/>

    } else if (this.state.activeComponent === 'oneFish') {
      console.log("show Comp one fish")
      return <FishDetailsData id={ this.state.activeFishId } />

    } else {
      throw new Error("Invalid activeComponent", this.state.activeComponent)
    }
  },
  toggleActiveComp: function(name){
    this.setState({activeComponent: name})
  },
  render: function() {
    return(
      <div className="container mycontainer">
        <Toggler toggleActiveComp={this.toggleActiveComp}/>
        {this.showComp()}
      </div>
      )
    }
});

module.exports = FishBox;