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

		return <tr id={wreck.id} key={i}>
				<td>{wreck.name}</td>
				<td>{wreck.depth}</td>
				<td> Directions </td>
				<td> Show </td>

				</tr>
			
		})

		return (

		<table id="wreckTable">
			<tbody>
			  <tr>
			    <th>Name</th>
			    <th>Depth</th> 
			    <th>Directions</th>
			    <th>Show</th>
			  </tr>
			  {wreckList}
		  </tbody>
		</table>

		)

	}
}

export default FindWreckContainer;
