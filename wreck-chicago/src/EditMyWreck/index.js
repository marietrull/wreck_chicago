import React, {Component} from 'react';
import './style.css';

class EditMyWreck extends Component {

	constructor (){

		super();

		this.state = {
			name: '',
			latitude: '',
			longitude: '',
			depth: '',
			description: '',
			image: '',
		}

	}

	componentWillReceiveProps(props){

		if (props.wreckInd === ''){
			console.log(props.wreckInd, typeof props.wreckInd + 'wreckInd Type')
		} else {
			this.setState({
				name: props.wreckInd.name,
				latitude: props.wreckInd.latitude,
				longitude: props.wreckInd.longitude,
				depth: props.wreckInd.depth,
				description: props.wreckInd.description,
				image: props.wreckInd.image
			})
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

	handleSubmit = (e) => {

		e.preventDefault();

		this.props.editWreck(this.state.name, this.state.latitude, this.state.longitude, this.state.depth, this.state.description, this.state.image);
		
	}


	render () {

		console.log(this.state, 'state in EditMyWreck')

		return (

			<div id="myModal" className={this.props.showEdit ? 'modal' : 'modalNone'}>

		  			<div className="modal-content">

		  				<span className="close" onClick={this.props.closeEdit}>&times;</span>

		  					<div> Edit Wreck </div>

		  					<form  onSubmit={this.handleSubmit}>

									<div className='wreckInput'>
										Name 
										<input className='wreckVal' type='text' placeholder={this.state.name} onChange={this.updateName}/>
									</div>

									<div className='wreckInput'>
										Latitude 
										<input className='wreckVal' type='text' placeholder={this.state.latitude} onChange={this.updateLat}/>
									</div>

									<div className='wreckInput'>
										Longitude 
										<input className='wreckVal' type='text' placeholder={this.state.longitude} onChange={this.updateLong}/>
									</div>

									<div className='wreckInput'>
										Depth 
										<input className='wreckVal' type='text' placeholder={this.state.depth} onChange={this.updateDepth}/>
									</div>

									<div className='wreckInput'>
										Description 
										<input className='wreckVal' type='text' placeholder={this.state.description} onChange={this.updateDescription}/>
									</div>

									<div className='wreckInput'>
										Link to Image 
										<input className='wreckVal' type='text' placeholder={this.state.image} onChange={this.updateImage}/>
									</div>

								<input id='newSubmit' type='submit'/>

						</form>

		  			</div>

			</div>



			)
	}
}



export default EditMyWreck;