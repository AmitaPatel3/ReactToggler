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

var FishForm = require('./FishForm');

var FishFormData = React.createClass({
 
  getInitialState: function() {
    return {
      name: null,
      color: null,
      length: null,
      people_eater: null,
      img: null
    }
  },
  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired
  },

  onNameChange: function(event) {
    this.setState({ name: event.target.value })
  },
  onColorChange: function(event) {
    this.setState({ color: event.target.value })
  },
  onLengthChange: function(event) {
    this.setState({ length: event.target.value })
  },
  onPeopleEaterChange: function(event) {
    this.setState({ people_eater: event.target.value })
  },
  onImageChange: function(event) {
    this.setState({ img: event.target.value })
  },
  
  submitFishToServer: function(event) {
    event.preventDefault();

    var fishData = {
    name: this.state.name.trim(),
    color: this.state.color.trim(),
    length: this.state.length.trim(),
    people_eater: this.state.people_eater,
    img: this.state.img.trim()
    };

    var self = this;
    console.log("fish data in fish app", fishData);
    $.ajax({
        url: '/api/fish',
        method: 'POST',
        data: fishData
        }).done(function(data){
          console.log('inside success', data);
          self.props.toggleActiveComp('fish');
          self.context.sendNotification("Added fish yo!!");
        });

    this.setState({name:'', color:'', length:'', people_eater:'', img:''});
  },
 
 render: function(){
    return(
      <FishForm 
      submitFishToServer={ this.submitFishToServer }
      name={ this.state.name }
      color={ this.state.color }
      length={ this.state.length }
      people_eater={ this.state.people_eater }
      img={ this.state.img }
      onNameChange={ this.onNameChange }
      onColorChange={ this.onColorChange }
      onLengthChange={ this.onLengthChange }
      onPeopleEaterChange={ this.onPeopleEaterChange }
      onImageChange={ this.onImageChange} />
      )
  },

});

module.exports = FishFormData;