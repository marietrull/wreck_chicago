import React, { Component } from 'react';
import './style.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import WreckStart from '../WreckStart';
import FindWreckContainer from '../FindWreckContainer';
import LogWreck from'../LogWreck';
import MyWrecksContainer from '../MyWrecksContainer';

const HomeContainer = () => {
		
		return (

			<div>
			
				<ul id='wreckNav'>
					<li ><Link className='navItem' to="/">Home</Link></li>
		  			<li><Link className='navItem' to="/FindAWreck">Wreck Finder</Link></li>
		  			<li><Link className='navItem' to="/LogAWreck">Log a Wreck</Link></li>
					<li><Link className='navItem' to="/MyWrecks">My Wrecks</Link></li>
					<li><a className='navItem' href="/logout">Logout</a></li>
				</ul>

				<Switch>
					<Route exact path='/' component={WreckStart} />
					<Route exact path='/FindAWreck' component={FindWreckContainer} />
					<Route exact path='/LogAWreck' component={LogWreck} />
					<Route exact path='/MyWrecks' component={MyWrecksContainer} />
				</Switch>

			</div>
		)
}

export default HomeContainer;