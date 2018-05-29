import React, { Component } from 'react';
import './style.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import WreckStart from '../WreckStart';
import FindWreckContainer from '../FindWreckContainer';
import LogWreckContainer from'../LogWreckContainer';
import MyWrecksContainer from '../MyWrecksContainer';

const HomeContainer = () => {


		console.log(this.state, 'state in HomeContainer')
		
		return (

			<div>
			
				<ul id='wreckNav'>
					<li><Link to="/">Home</Link></li>
		  			<li><Link to="/FindAWreck">Wreck Finder</Link></li>
					<li><Link to="/MyWrecks">My Wrecks</Link></li>
					<li><a href="/logout">Logout</a></li>
				</ul>

				<Switch>
					<Route exact path='/' component={WreckStart} />
					<Route exact path='/FindAWreck' component={FindWreckContainer} />
					<Route exact path='/LogAWreck' component={LogWreckContainer} />
					<Route exact path='/MyWrecks' component={MyWrecksContainer} />
				</Switch>

			</div>
		)
}

export default HomeContainer;