import React from 'react';
import './style.css';

const LoginRegister = ({changeRegistering}) => {
	
	return (

		<div id="LogRegField" >

			<div id="TabContain">
				<div class="logRegTab" onClick={changeRegistering}>Login</div> 
				<div class="logRegTab" onClick={changeRegistering}>Register</div>
			</div>	

			<div id="logRegContain" >
					<input id="inpUser" type="text" placeholder='Username'/>
					<input id="inpPass" type="password" placeholder='Password'/>
					<br/>
					<button id="logBtn">Go</button>
			</div>

		</div>


		)
}

export default LoginRegister;