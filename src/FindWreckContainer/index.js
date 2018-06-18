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

		const wrecksJson = await fetch('https://calm-beach-74116.herokuapp.com/wrecks', {
			credentials: 'include'
		})

		const wrecks = await wrecksJson.json();

		return wrecks;
		
	}

	showWreck = async (e) => {


		const wreckId = e.target.parentNode.id;

		const wreckJson = await fetch(`https://calm-beach-74116.herokuapp.com/wrecks/${wreckId}`, {
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

		const wrecks = await fetch ('https://calm-beach-74116.herokuapp.com/wrecks', {
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


		const wreckList = this.state.wrecks.map((wreck, i) => {

		return <tr className='wreckRow'id={wreck.id} key={i}>
					<td onClick={this.showWreck}>{wreck.name}</td>
					<td>{wreck.depth}</td>
		</tr>
			
		})

		return (

		<div>

		<p> Click on the name of a wreck to learn more! </p>

		<table className="wreckTable">
			<tbody>
			  <tr>
			    <th className='tableHead'>Name</th>
			    <th className='tableHead'>Depth</th> 
			  </tr>
			  {wreckList}
		  </tbody>
		</table>

		<FindWreckShow showWreck={this.state.showWreck} closeWreck={this.closeWreck} wreckInd={this.state.wreckInd}/>


		<p id="divewarn"> This information is not exhaustive. Please consult with your local dive shop for up-to-date information and dive at your own risk!</p>

		</div>

		)

	}
}

export default FindWreckContainer;
