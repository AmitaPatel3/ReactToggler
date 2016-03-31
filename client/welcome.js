var React = require('react');

var Welcome = React.createClass({
  render: function () {
    return (
      <div>
      <div className="jumbotron">
        <h1 className="display-3">Welcome!</h1>
        <p className="lead">This is a demo for blogging components for React.</p>
        <hr className="m-y-2"/>
        <p></p>
        <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>

      </div>


      )
  }
});

module.exports = Welcome;