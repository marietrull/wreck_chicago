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
		
		const myWrecksJson = await fetch('http://localhost:9292/userwrecks/mywrecks', {
			credentials: 'include'
		})

		const myWrecks = await myWrecksJson.json();

		return myWrecks;

	}

	showWreck = async (e) => {


		const wreckId = e.target.parentNode.id;

		console.log(wreckId, 'wreckId')

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

	deleteWreck = async () => {

		const wreckId = this.state.wreckInd.id

		const deleteUserWreck = await fetch (`http://localhost:9292/wrecks/${wreckId}`, {
			method:'DELETE', 
			credentials: 'include'
		});
		
		const response = await deleteUserWreck.json();

		console.log(response, 'response deleteWreck')

		console.log(wreckId, 'wreckId after response')

		console.log(this.state.myWrecks, 'state.myWrecks')


		if (response.success){
			this.setState({
				myWrecks: this.state.myWrecks.filter((removeWreck) => removeWreck.id != wreckId)
			})
		}

		this.setState({
			showWreck: false
		})

	}

	render () {

		console.log(this.state, 'state in myWrecksContainer')

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

				<MyWreckShow showWreck={this.state.showWreck} closeWreck={this.closeWreck} wreckInd={this.state.wreckInd} deleteWreck={this.deleteWreck}/>

			</div>


			)


	}

}

export default MyWrecksContainer;
