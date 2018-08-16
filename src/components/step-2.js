import React, { Component } from "react";

class Step2 extends Component {
  constructor(initialDob, initialSSN ) {
    super();
    this.state = { 
      dob: initialDob,
      ssn: initialSSN
    };

  }

  handleDobChange(event) {
    const newDob = event.target;
    const inputName = newDob.name;

    this.setState({ [inputName]: event.target.value });

    this.props.callbackParent(newDob.value);
  }

  handleSSNChange(event) {
    const newSSN = event.target;
    const inputName = newSSN.name;

    this.setState({ [inputName]: event.target.value });

    this.props.callbackParent(newSSN.value);
  }

  handleSubmit(event) {
    this.props.onFormSubmit({
      dob: this.state.dob, 
      ssn: this.state.ssn
    })
    this.props.history.push('/step-3');
  }

  render() {
    return (
      <div className="form-group">
      <h4>Step 2</h4>
        <div className="alert alert-primary">
        <div>{this.props.name}</div>
        <div>{this.props.email}</div>
        </div>
        <div>
        <label>
          Date of Birth:</label>
          <input
            className="form-control"
            type="date"
            value={this.state.dob}
            name="dob"
            onChange={(e) => this.handleDobChange(e)}
          />
        </div>
        <div className="form-group">
        <label>
          ssn:</label>
          <input
            className="form-control"
            type="text"
            value={this.state.ssn}
            name="ssn"
            onChange={(e) => this.handleSSNChange(e)}
          />
        </div>
        <br/>
        <button className="btn btn-primary" onClick={(e)=>this.handleSubmit(e)}>Submit</button>
      </div>
    );
  }
}

export default Step2;
