import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import Step1 from "./components/step-1";
import Step2 from "./components/step-2";
import Step3 from "./components/step-3";

class App extends Component {
  state = {
    name: "",
    email: "",
    dob: "",
    ssn: ""
  }
  handleStep1Submit = data => {
    if  (data.email.substr(data.email.length - 4) !== '.com')
    {
      alert('Invalid email address!');
    }
    else
    {
      this.setState({
        name:data.name,
        email:data.email
      })
      
    }
  }
  onChildChangedStep1(newName, newEmail) {
    this.setState({
      name: newName,
      email: newEmail
    })
  }

  handleStep2Submit = data => {
    this.setState({
      dob: data.dob,
      ssn: data.ssn
    })

  }
  onChildChangedStep2(newDob, newSSN) {
    this.setState({
      dob: newDob,
      ssn: newSSN
    })
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <div className="container">
           <h3>Demo - No Redux </h3>
           <br/>
            <form>
            <Route exact path="/" render={
              (props)=><Step1 initialName={this.state.name} initialEmail={this.state.email} 
              callbackParent = {(newName, newEmail) => this.onChildChangedStep1(newName, newEmail)} 
              onFormSubmit={this.handleStep1Submit} history={ props.history }/>} />
            <Route exact path="/step-2" render={
              (props)=><Step2 name={this.state.name} email={this.state.email} 
              initialDob={this.state.dob} initialSSN={this.state.ssn} 
              callbackParent = {(newDob, newSSN) => this.onChildChangedStep2(newDob, newSSN)} 
              onFormSubmit={this.handleStep2Submit} history={ props.history }/>} />
            <Route exact path="/step-3" render={
              ()=><Step3 name={this.state.name} email={this.state.email} dob={this.state.dob} ssn={this.state.ssn}/>
            } />
            </form>
            <br/>
            <br/>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
