/*
FishApp
  Fish Box
    FishList 
      FishCard
    FishForm
*/

var React = require('react');

var FishCard = React.createClass({
  render: function (){
    return(
        <div className="card col-sm-4">
          <img className="card-img-top fish-img" src={this.props.img} alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-title">color: {this.props.color}</p>
            <p className="card-text">{this.props.people_eater}</p>
             <p className="card-text">length: {this.props.length}</p>
             <button type="button" className="btn btn-primary-outline">Go</button>
          </div>
           <br/><br/><br/>
        </div>
      )
  }
});

module.exports = FishCard;