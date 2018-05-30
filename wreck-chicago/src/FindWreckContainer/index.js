import React, { Component } from 'react';
import './style.css';
import FindWreckShow from '../FindWreckShow';

class FindWreckContainer extends Component{

	constructor () {

		super();

		this.state = {
			wrecks: [],
			wreckInd: {},
			showWreck: false
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

	showWreck = async (e) => {


		const wreckId = e.target.parentNode.id;

		const wreckJson = await fetch(`http://localhost:9292/wrecks/${wreckId}`, {
			credentials: 'include'

		})

		const wreckResponse = await wreckJson.json();

		this.setState ({

			wreckInd: wreckResponse.show_wreck,
			showWreck: true
		})

	}

	closeWreck = async () => {
		
		this.setState({
			showWreck: false
		})

	}

	addWreck = async (name, latitude, longitude, depth, description, image) => {

		const wrecks = await fetch ('http://localhost:9292/wrecks', {
			method: 'POST',
			body: JSON.stringify({
				name: name,
				latitude: latitude,
				longitude: longitude,
				depth: depth,
				description: description,
				image: image
			}),
			credentials: 'include'
		})

		const wrecksParsed = await wrecks.json();

		this.setState({
			wrecks: [...this.state.wrecks, wrecksParsed.newWreck]
		})
		
	}

	render () {

		console.log(this.state, 'state in FindWreckContainer')


		const wreckList = this.state.wrecks.map((wreck, i) => {

		return <tr id={wreck.id} key={i}>
					<td onClick={this.getWreckInd}>{wreck.name}</td>
					<td>{wreck.depth}</td>
					<td> Directions </td>
					<td onClick={this.showWreck}> Show </td>
		</tr>
			
		})

		console.log(wreckList, 'wreckList')

		return (

		<div>

		<table className="wreckTable">
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

		<FindWreckShow showWreck={this.state.showWreck} closeWreck={this.closeWreck} wreckInd={this.state.wreckInd}/>

		</div>

		)

	}
}

export default FindWreckContainer;
