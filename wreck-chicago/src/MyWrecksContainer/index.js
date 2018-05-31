import React, { Component } from 'react';
import MyWreckShow from '../MyWreckShow';


class MyWrecksContainer extends Component {

	constructor () {

		super();

		this.state = {
			myWrecks: [],
			wreckInd: {},
			showWreck: false
		}
	}

	componentDidMount () {

		this.getMyWrecks()
		.then((response) => {
			this.setState({
				myWrecks: response.userWrecks
			})
		})

	}

	getMyWrecks = async () => {
		
		const myWrecksJson = await fetch('http://localhost:9292/userwrecks', {
			credentials: 'include'
		})

		const myWrecks = await myWrecksJson.json();

		return myWrecks;

	}

	showWreck = async (e) => {


		const wreckId = e.target.parentNode.id;

		const wreckJson = await fetch (`http://localhost:9292/wrecks/${wreckId}`, {
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

		const myWrecks = this.state.myWrecks.map((wreck, i) => {

			return <tr id={wreck.id} key={i}>
					<td>{wreck.name}</td>
					<td>{wreck.depth}</td>
					<td> Directions </td>
					<td onClick={this.showWreck}> Show </td>
			</tr>
			
		})

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
					  {myWrecks}
				  </tbody>
				</table>

				<MyWreckShow showWreck={this.state.showWreck} closeWreck={this.closeWreck} wreckInd={this.state.wreckInd}/>

			</div>


			)


	}

}

export default MyWrecksContainer;
