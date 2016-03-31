/*
FishApp
  Fish Box
    FishList 
      FishCard
    FishForm
*/

var React = require('react');

var FishForm = React.createClass({
  getInitialState: function() {
    return {
      name: null,
      color: null,
      length: null,
      people_eater: null,
      img: null
    }
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
  
  handleFormSubmit: function(event) {
    event.preventDefault();
    console.log('I am button!', this.state.fishName)

    var fishData = {

    name: this.state.name.trim(),
    color: this.state.color.trim(),
    length: this.state.length.trim(),
    people_eater: this.state.people_eater,
    img: this.state.img.trim()
    };

    console.log("the name of the fish is:", this.state.fishName);

    this.props.submitFishToServer(fishData);

    this.setState({name:'', color:'', length:'', people_eater:'', img:''})
},

  render: function(){
    return(
        <div>
        <form onSubmit={ this.handleFormSubmit }>
          <h3>Enter New Fish</h3>
            <fieldset className="form-group">
              <label>Name</label>
              <input onChange={ this.onNameChange } value={ this.state.name } type="text" className="form-control"/>
            </fieldset>
            <fieldset className="form-group">
              <label>Color</label>
              <input onChange={ this.onColorChange } value={ this.state.color} type="text" className="form-control"/>
            </fieldset>
            <fieldset className="form-group">
              <label>Length</label>
              <input onChange={ this.onLengthChange } value={ this.state.length } type="text" className="form-control"/>
            </fieldset>

            <fieldset className="form-group">
              <label htmlFor="exampleSelect1">People Eater?</label>
              <select onChange={ this.onPeopleEaterChange } className="form-control">
                <option value={ true }>yes</option>
                <option value={ false }>no</option>
              </select>
            </fieldset>

            <fieldset className="form-group">
              <label>Image</label>
              <input onChange={ this.onImageChange } value={ this.state.img } type="text" className="form-control"/>
            </fieldset>
            <button type="submit" className="btn btn-primary-outline">Submit</button>
        </form>
        </div>
      )
  }
});

module.exports = FishForm;