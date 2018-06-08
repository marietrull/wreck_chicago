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
      registering: false,
      message: "",
      username: ""
    }

  }

  changeRegistering = (e) => {

    const tabText = e.target.innerText;
    tabText === "Register" ? this.setState({registering: true}) : this.setState({registering: false});

  }

  loginAndRegisterBtn = (e) => {
    
    const buttonText = e.target.innerText;
    const pwInputVal = e.target.parentNode.parentNode.childNodes[1].childNodes[0].value;
    const userInputVal = e.target.parentNode.parentNode.childNodes[1].childNodes[0].value;
    this.logInRegister(userInputVal, pwInputVal, buttonText);

  }

  logInRegister = async (username, password, buttonText) => {

    if(this.state.registering == true){


      const registerJSON = await fetch("http://localhost:9292/user/register",
      {
        method: "POST",
        credentials: 'include',
        body:JSON.stringify({username: username, password: password})
      })

      const registerResponse = await registerJSON.json();

      registerResponse.success  ? this.setState({logged:true, username:registerResponse.username}) : this.setState({message: registerResponse.message})
    }


    else {

      const loginJSON = await fetch("http://localhost:9292/user/login",
      {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({username: username, password: password})
      })

      const loginResponse = await loginJSON.json();

      loginResponse.success ? this.setState({logged:true, username:loginResponse.username}) : this.setState({message: loginResponse.message})
    
    }
  }



  render() {

    return (

      <div className="App">
        <div className='headerContainer'>

          <div className='headerText'>

           Wreck Chicago

          </div>

          

        </div>


        {this.state.logged ? <HomeContainer/> : <LoginRegister loginAndRegisterBtn={this.loginAndRegisterBtn} changeRegistering={this.changeRegistering}/>}

      </div>
    );
  }
}

export default App;
