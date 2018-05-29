import React from 'react';
import './style.css';

const LoginRegister = ({loginAndRegisterBtn, changeRegistering}) => {
	
	return (

		<div id="LogRegField" >

			<div id="TabContain">
				<div className="logRegTab" onClick={changeRegistering}>Login</div> 
				<div className="logRegTab" onClick={changeRegistering}>Register</div>
			</div>	

			<div id="logRegContain" >
					<input id="inpUser" type="text" placeholder='Username'/>
					<input id="inpPass" type="password" placeholder='Password'/>
					<br/>
					<button id="logBtn" onClick={loginAndRegisterBtn}>Go</button>
			</div>

		</div>


	)
}

export default LoginRegister;