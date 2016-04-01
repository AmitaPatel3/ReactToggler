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

function FishCard(props){
    return(
        <div className="card col-sm-4">
          <img className="card-img-top fish-img" src={props.img} alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-title">color: {props.color}</p>
            <p className="card-text">{props.people_eater}</p>
             <p className="card-text">length: {props.length}</p>
             <button onClick={props.getId.bind(null, props.id)} className="btn btn-primary-outline">Go</button>
          </div>
           <br/><br/><br/>
        </div>
      )
  };


module.exports = FishCard;