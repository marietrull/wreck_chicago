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

	getWreckInd = async	(e) => {

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

	render () {

		console.log(this.state, ' State in FindWreckContainer')


		const wreckList = this.state.wrecks.map((wreck, i) => {

		return <tr id={wreck.id} key={i}>
				<td onClick={this.getWreckInd}>{wreck.name}</td>
				<td>{wreck.depth}</td>
				<td> Directions </td>
				<td onClick={this.showWreck}> Show </td>

				</tr>
			
		})

		return (

		<div>

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

		<FindWreckShow showWreck={this.state.showWreck} closeWreck={this.closeWreck} wreckInd={this.state.wreckInd}/>

		</div>

		)

	}
}

export default FindWreckContainer;
