import React, { Component } from 'react';
import './style.css';

class FindWreckContainer extends Component{

	constructor () {

		super();

		this.state = {
			wrecks: []
		}
	}

	componentDidMount () {

		this.getItems()
		.then((response) => {
			this.setState({
				wrecks: response.allWrecks
			})
			
		})
	}

	getItems = async () => {

		const wrecksJson = await fetch('http://localhost:9292/wrecks', {
			credentials: 'include'
		})

		const wrecks = await wrecksJson.json();

		return wrecks;
		
	}

	render () {

		console.log(this.state, ' State in FindWreckContainer')

		const wreckList = this.state.wrecks.map((wreck, i) => {
			return <li className="wreckList" id={wreck.id} key={i}>{wreck.name}</li>
			
		})

		return (

			<div id='wreckList'>
				Find Wreck Container
				{wreckList}
			</div>


		)

	}
}

export default FindWreckContainer;
