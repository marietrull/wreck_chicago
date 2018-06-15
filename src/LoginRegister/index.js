import React from 'react';
import './style.css';

const LoginRegister = ({loginAndRegisterBtn, changeRegistering, registering}) => {
	
	return (

		<div id="LogRegField" >

			<div id="TabContain">
				<div id={registering ? "RegTab" : "LogTab"} onClick={changeRegistering}>Login</div> 
				<div id={registering ? "LogTab" : "RegTab"} onClick={changeRegistering}>Register</div>
			</div>	

			<div id="logRegContain" >
					<input id="inpUser" type="text" placeholder={registering ? "Create Username" : "Username"}/>
					<input id="inpPass" type="password" placeholder={registering ? "Create Password" : "Password"}/>
					<br/>
					<button id="logBtn" onClick={loginAndRegisterBtn}>Go</button>
			</div>

		</div>


	)
}

export default LoginRegister;