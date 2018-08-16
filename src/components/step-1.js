import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

class Step1 extends Component {

constructor({ initialName, initialEmail }) {
  super();
  this.state = { 
    name: initialName,
    email: initialEmail
  }
}
  handleNameChange(event) {
    const newName = event.target;
    const inputName = newName.name;
    //update child state
    this.setState({ [inputName]: event.target.value });
    //notify our parent of the change
    this.props.callbackParent(newName.value);
  }

  handleEmailChange(event) {
    const newEmail = event.target;
    const inputName = newEmail.name;
    //update child state
    this.setState({ [inputName]: event.target.value });
    //notify our parent of the change
    this.props.callbackParent(newEmail.value);
  }

  handleSubmit(event) {
    console.log(this)
    this.props.onFormSubmit({
      name: this.state.name, 
      email: this.state.email
    })
    if(this.state.email.substr(this.state.email.length - 4) !== '.com'){
      return false;
    }
    this.props.history.push('/step-2');
    
  }

  render() {
    return (
      <div>
        <h4>Step 1</h4>
        <div className="form-group">
        <label>
          name:
          </label>
          <input
            className="form-control"
            type="text"
            value={this.state.name}
            name="name"
            onChange={(e) => this.handleNameChange(e)}
          />
        </div>

        <div className="form-group">
        <label>
          email:
          </label>
          <input
           className="form-control"
            type="text"
            value={this.state.email}
            name="email"
            onChange={(e) => this.handleEmailChange(e)}
          />
        </div>
        <br />
        <button className="btn btn-primary" onClick={(e)=>this.handleSubmit(e)}>Submit</button>
      </div>
    );
  }
}

export default Step1;
