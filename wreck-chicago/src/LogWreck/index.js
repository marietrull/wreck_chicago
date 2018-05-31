import React, {Component} from 'react';
import './style.css';

class LogWreck extends Component {

	constructor (){
		super();
		this.state = {
			name: '',
			latitude: '',
			longitude: '',
			depth: '', 
			description: '',
			image: ''

		}
	}

	updateName = e => {
		const name = e.currentTarget.value;
		this.setState({name: name})
	}

	updateLat = e => {
		const latitude = e.currentTarget.value;
		this.setState({latitude: latitude})
	}

	updateLong = e => {
		const longitude = e.currentTarget.value;
		this.setState({longitude: longitude})
	}

	updateDepth = e => {
		const depth = e.currentTarget.value;
		this.setState({depth: depth})
	}

	updateDescription = e => {
		const description = e.currentTarget.value;
		this.setState({description: description})
	}

	updateImage = e => {
		const image = e.currentTarget.value;
		this.setState({image: image})
	}

	addWreck = async (name, latitude, longitude, depth, description, image) => {

		// Add wreck to the wrecks table
		const newWreck = await fetch ('http://localhost:9292/wrecks', {
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

		const newWreckParsed = await newWreck.json();

		const newWreckId = await newWreckParsed.added_wreck.id;

		// Add a wreck to the user_wrecks table
		const newUserWreck = await fetch ('http://localhost:9292/userwrecks', {
			method: 'POST',
			body: JSON.stringify({
				wreck_id: newWreckId
			}), 
			credentials: 'include'
		})
		
	}

	handleSubmit = async (e) => {

		e.preventDefault();

		this.addWreck(this.state.name, this.state.latitude, this.state.longitude, this.state.depth, this.state.description, this.state.image);

		this.setState({
			name: '',
			latitude: '',
			longitude: '',
			depth: '', 
			description: '',
			image: ''
		})
		
	}

	render () {

		console.log(this.state, 'state in logWreck component')

		return (

			<form onSubmit={this.handleSubmit}>
				<div> Log a Wreck </div>

				<div id='newWreckInputs'>

					<div className='wreckInput'>
						Name 
						<input className='wreckVal' type='text' value={this.state.name} placeholder='Name' onChange={this.updateName}/>
					</div>

					<div className='wreckInput'>
						Latitude 
						<input className='wreckVal' type='text' value={this.state.latitude} placeholder='Latitude' onChange={this.updateLat}/>
					</div>

					<div className='wreckInput'>
						Longitude 
						<input className='wreckVal' type='text' value={this.state.longitude} placeholder='Longitude' onChange={this.updateLong}/>
					</div>

					<div className='wreckInput'>
						Depth 
						<input className='wreckVal' type='text' value={this.state.depth} placeholder='Depth' onChange={this.updateDepth}/>
					</div>

					<div className='wreckInput'>
						Description 
						<input className='wreckVal' type='text' value={this.state.description} placeholder='Description' onChange={this.updateDescription}/>
					</div>

					<div className='wreckInput'>
						Link to Image 
						<input className='wreckVal' type='text' value={this.state.image} placeholder='Link to Image' onChange={this.updateImage}/>
					</div>

				</div>

				<input id='newSubmit' type='submit'/>

			</form>


		)

	}
}


export default LogWreck;