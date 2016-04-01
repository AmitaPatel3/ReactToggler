

var React = require('react');

var links = ['welcome','cookies', 'fish', 'bears', 'beer'];

var NavBar = React.createClass({
 
  render: function() {
   var self = this;
   var link = links.map(function(item){
    return (
      <li className="nav-item" key={item} >
        <a className="nav-link" onClick={self.props.setActiveComponent.bind(null, item)}>{item}</a>
      </li>
      )
    })

    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="#">Navbar</a>
            <ul className="nav navbar-nav">
              {link}
            </ul>      
          <form className="form-inline pull-xs-right">
            <input className="form-control" type="text" placeholder="Search"/>
            <button className="btn btn-success-outline" type="submit">Search</button>
          </form>
        </nav>
      </div>
      )
    }
});

module.exports = NavBar;
