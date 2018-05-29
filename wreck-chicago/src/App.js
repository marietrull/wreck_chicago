import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginRegister from './LoginRegister';
import HomeContainer from './HomeContainer';

class App extends Component {

  constructor () {

    super();

    this.state = {

      logged: false,

      registering: false

    }

  }

  changeRegistering = (e) => {

    const tabText = e.target.innerText;

    tabText === "Register" ? this.setState({registering: true}) : this.setState({registering: false});

  }



  render() {

    console.log(this.state, ' state in app.js')

    return (

      <div className="App">
        <div class='headerContainer'>

          <div class='headerText'>
            Wreck Chicago
          </div>

        </div>
        <LoginRegister changeRegistering={this.changeRegistering}/>
      </div>
    );
  }
}

export default App;
