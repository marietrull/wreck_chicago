import React from 'react';
import './style.css';

const MyWreckShow = ({showWreck, closeWreck, wreckInd, deleteWreck, showEdit}) => {

	return (

		<div id="myModal" className={showWreck ? 'modal' : 'modalNone'}>

	  			<div className="modal-content">

	   		 		<span className="close" onClick={closeWreck}>&times;</span>

					<div id="wreckContent">

					<div className={wreckInd.image == null || wreckInd.image == ""? 'wreckPhotoNone' : 'wreckElement'}>
				 		<h1>Name</h1>
				 		<p>{wreckInd.name}</p>
				 		<h2>Location</h2>
				 		<p>Latitude: {wreckInd.latitude}</p>
				 		<p>Longitude: {wreckInd.longitude}</p>
				 		<h2>About</h2>
				 		<p>Depth: {wreckInd.depth}</p>
				 		<p>Description: {wreckInd.description}</p>
					</div>

					<div className={wreckInd.image == null || wreckInd.image == "" ? 'wreckPhotoNone' : 'wreckElement'}>
						<img id="wreckSource" src={wreckInd.image} />
					</div>

					</div>
					
		  			<button onClick={showEdit}>Edit</button>
		  			<button onClick={deleteWreck}>Delete</button>


	  			</div>



		</div>


	)
}

export default MyWreckShow;