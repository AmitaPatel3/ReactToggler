var React = require('react');

function FishDetails(props){
  console.log(props);
  return(
    <div>
      <img className="card-img-top fish-img" src={props.oneFish.img} alt="Card image cap"/>
      <p>{props.oneFish.name}</p>
      <p>Color: {props.oneFish.color}</p>
      <p>{props.oneFish.people_eater}</p>
      <p>Length: {props.oneFish.length}</p>
    </div>
    )
};

module.exports = FishDetails;