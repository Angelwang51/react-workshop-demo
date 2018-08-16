import React, { Component } from "react";

class Step3 extends Component {
  render() {
    return (
      <div className="alert alert-primary">
      <h4>Step 3</h4>
        <div>{this.props.name}</div>
        <div>{this.props.email}</div>
        <div>{this.props.dob}</div>
        <div>{this.props.ssn}</div>
      </div>
    )
  }
  
}

export default Step3;
