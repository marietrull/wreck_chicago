import React, { Component } from 'react';
import MyWreckShow from '../MyWreckShow';
import EditMyWreck from '../EditMyWreck';


class MyWrecksContainer extends Component {

	constructor () {

		super();

		this.state = {
			myWrecks: [],
			wreckInd: {},
			showWreck: false,
			showEdit: false
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

	showEdit = async () => {

		this.setState({
			showWreck: false,
			showEdit: true
		})

		console.log(this.state, 'state after edit click')
		
	}

	editWreck = async (name, latitude, longitude, depth, description, image) => {

		const editId = this.state.wreckInd.id

		const editWreck = await fetch(`http://localhost:9292/wrecks/${editId}`, {
			method: 'PUT', 
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

		const response = await editWreck.json();

		const editedWreckIndex = this.state.myWrecks.findIndex((wreck) => {
			
			return wreck.id === response.edited_wreck.id

		})

		this.state.myWrecks[editedWreckIndex] = response.edited_wreck;

		this.setState({
			showEdit: false
		})
		
	}

	closeEdit = async () => {

		this.setState({
			showEdit: false
		})
		
	}

	deleteWreck = async () => {

		const wreckId = this.state.wreckInd.id

		const deleteUserWreck = await fetch (`http://localhost:9292/wrecks/${wreckId}`, {
			method:'DELETE', 
			credentials: 'include'
		});
		
		const response = await deleteUserWreck.json();


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

				<MyWreckShow showWreck={this.state.showWreck} closeWreck={this.closeWreck} wreckInd={this.state.wreckInd} deleteWreck={this.deleteWreck} showEdit={this.showEdit} />
				<EditMyWreck showEdit={this.state.showEdit} closeEdit={this.closeEdit} wreckInd={this.state.wreckInd} editWreck={this.editWreck} />

			</div>


			)


	}

}

export default MyWrecksContainer;
