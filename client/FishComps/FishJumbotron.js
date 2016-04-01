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

var FishJumbotron = React.createClass({
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

  module.exports = FishJumbotron;