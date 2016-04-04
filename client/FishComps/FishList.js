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
var FishCard = require('./FishCard')

function FishList(props){

    var allFish = props.fishArray.map(item =>{
      return(
        <FishCard 
          deleteFish={ props.deleteFish }
          getId={ props.getId }
          id={ item._id }
          key={ item._id }
          name={ item.name }
          color={ item.color }
          people_eater={ item.people_eater }
          length={ item.length }
          img={ item.img } />
       );
    });

  return(
    <div className ="fish-flex">
      { allFish }
    </div>
    )
};

FishList.propTypes = {
  fishArray: React.PropTypes.array.isRequired
};


module.exports = FishList;
