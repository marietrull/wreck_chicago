import React, { Component } from 'react';


class MyWrecksContainer extends Component {

	constructor () {

		super();

		this.state = {
			myWrecks: []
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

	render () {

		console.log(this.state, 'state in myWrecksContainer')

		const myWrecks = this.state.myWrecks.map((wreck, i) => {

			return <tr id={wreck.id} key={i}>
					<td>{wreck.name}</td>
					<td>{wreck.depth}</td>
					<td> Directions </td>
					<td> Show </td>
			</tr>
			
		})

		console.log(myWrecks, 'myWrecks')

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

			</div>


			)


	}

}

export default MyWrecksContainer;
