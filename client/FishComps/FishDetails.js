var React = require('react');

function FishDetails(props){
  console.log(props);
  })
  return(
    <div>
    <h1>{props.oneFish.name}</h1>
    </div>
    )
};

module.exports = FishDetails;