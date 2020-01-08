import React, { Component } from "react";

class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: {value: "", touched: false}
    };
  }

  NewFolder(newFolderName) {
    this.setState({
      name: {
        value: newFolderName,
        touched: true        
      }
    })    
  }

  generateErrorMessage = () => {
    let newFolderName = this.state.name.value;
    newFolderName = newFolderName.replace(/[\s-]/g, ''); // Remove whitespace and dashes

    if (this.state.name.value.length < 1 && this.state.name.touched) {
        // Check if it's 9 characters long
        return 'The name of a folder must be at least one character long!';
    } else if (/^[a-zA-Z0-9]*$/gm.test(newFolderName) && this.state.name.touched) {
        // Check if it's just digits
        return 'Folder names must be alphanumeric';
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit')
  }

  render() {

    return (

        <form className="registration" onSubmit={(event) => {this.handleSubmit(event)}}>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="folderName">Folder Name</label>
            <input
              type="text"
              className="registration__control"
              name="name"
              id="name"
              value={this.state.name.value}
              onChange={(event)=> {this.NewFolder(event.target.value)}}
            />
          </div>
          <div className="registration__button__group">
            <button
              type="submit"
              className="registration__button"
              disabled={this.generateErrorMessage()}
            >
              Save
            </button>
            {this.generateErrorMessage() ? <p>{this.generateErrorMessage()}</p> : ''}
          </div>
        </form>
    );
  }
}
export default AddFolder;