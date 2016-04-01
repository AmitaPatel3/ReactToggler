/*
Index
  FishApp
    Fish Box
      Toggler
      Fish Form
      Fish List Data
        Fish List
          Fish Card 
    FishJumbotron
    Loader
  Welcome
  Cookies
  Bears
  Beer
*/


var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar');
var Footer = require('./footer');
var Welcome = require('./welcome');
var Cookies = require('./cookies');
var Bears = require('./bears');
var FishApp = require('./FishApp')
var Beer = require('./beer');

require('./stylesheets/main.scss')

var App = React.createClass({
  getInitialState: function(){
    return {
      activeComponent: 'welcome'
    }
  },
  setActiveComponent: function(componentName){
      console.log("found Comp:", componentName);
      this.setState({
        activeComponent: componentName
      })
  },

  showWhichComponent: function(){
  switch(this.state.activeComponent) {
    case 'welcome':
        return <Welcome/>
        break;
    case 'cookies':
        return <Cookies/>
        break;
    case 'bears':
        return <Bears/>
    case 'fish':
        return <FishApp/>
    case 'beer':
        return <Beer/>
    default:
        return <Welcome/>
  };
},

  render: function() {
    return (
      <div className=''>
        <NavBar setActiveComponent={ this.setActiveComponent } />
        <div>
          {this.showWhichComponent()}
        </div>  
        <Footer/>     
      </div>
      )
    }
  })

ReactDOM.render(
  <App />, document.getElementById('app')
);
