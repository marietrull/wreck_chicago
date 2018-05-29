import React, { Component } from 'react';
import './style.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import WreckStart from '../WreckStart';
import FindWreckContainer from '../FindWreckContainer';
import LogWreckContainer from'../LogWreckContainer';

const HomeContainer = () => {


		console.log(this.state, 'state in HomeContainer')
		
		return (

			<div>
				<ul id='wreckNav'>
					<li><a href="/home">Home</a></li>
		  			<li><a href="/wreckFinder">Wreck Finder</a></li>
					<li><a href="/wrecks">My Wrecks</a></li>
					<li><a href="/logout">Logout</a></li>
				</ul>

				<Switch>
					<Route exact path='/' component={WreckStart} />
					<Route exact path='/FindAWreck' component={FindWreckContainer} />
					<Route exact path='/LogAWreck' component={LogWreckContainer} />
				</Switch>

			</div>
		)
}

export default HomeContainer;