var React = require('react');

function FishDetails(props){
  console.log(props);
  return(
    <div>
    <p>{props.oneFish.name}</p>
    </div>
    )
};

module.exports = FishDetails;