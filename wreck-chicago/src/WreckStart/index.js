import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import FindWreckContainer from '../FindWreckContainer';
import LogWreckContainer from'../LogWreckContainer';

const WreckStart = () => {
	
	return (

		<div>

			<div id='wreckStart'>

				<div id='wreckStartText'>
					Let's Get Started!
				</div>


				<div id='wreckOptions'>
					<div className='wreckOp'><Link to='/FindAWreck'>Find a Wreck</Link></div>
					<div className='wreckOp'><Link to='/LogAWreck'>Log a Wreck</Link></div>
				</div>


			</div>
 
			


		</div>

	)
}

export default WreckStart;