import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import FindWreckContainer from '../FindWreckContainer';
import LogWreck from'../LogWreck';

const WreckStart = () => {
	
	return (

		<div>

			<div id='wreckStart'>

				<div id='wreckStartText'>
					<h1> Welcome to Wreck Chicago, a place to explore local shipwrecks!</h1>
					<p> Click below to get started.</p>
				</div>


				<div id='wreckOptions'>
					<div><Link className='wreckOp' to='/FindAWreck'>Find a Wreck</Link></div>
					<div><Link className='wreckOp' to='/LogAWreck'>Log a Wreck</Link></div>
				</div>


			</div>
 
			


		</div>

	)
}

export default WreckStart;