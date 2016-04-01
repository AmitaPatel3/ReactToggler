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

function FishForm(props){
    return(
        <div>
        <form onSubmit={ props.submitFishToServer }>
          <h3>Enter New Fish</h3>
            <fieldset className="form-group">
              <label>Name</label>
              <input onChange={ props.onNameChange } value={ props.name } type="text" className="form-control"/>
            </fieldset>
            <fieldset className="form-group">
              <label>Color</label>
              <input onChange={ props.onColorChange } value={ props.color} type="text" className="form-control"/>
            </fieldset>
            <fieldset className="form-group">
              <label>Length</label>
              <input onChange={ props.onLengthChange } value={ props.length } type="text" className="form-control"/>
            </fieldset>

            <fieldset className="form-group">
              <label htmlFor="exampleSelect1">People Eater?</label>
              <select onChange={ props.onPeopleEaterChange } className="form-control">
                <option value={ true }>yes</option>
                <option value={ false }>no</option>
              </select>
            </fieldset>

            <fieldset className="form-group">
              <label>Image</label>
              <input onChange={ props.onImageChange } value={ props.img } type="text" className="form-control"/>
            </fieldset>
            <button type="submit" className="btn btn-primary-outline">Submit</button>
        </form>
        </div>
      )
};


module.exports = FishForm;