import React from 'react';
import './style.css';


const FindWreckShow = ({showWreck, closeWreck, wreckInd})=>{

	
	return(


		<div id="myModal" className={showWreck ? 'modal' : 'modalNone'}>

  			<div className="modal-content">

   		 		<span className="close" onClick={closeWreck}>&times;</span>

   		 		<h1>Name</h1>
   		 		<p>{wreckInd.name}</p>
   		 		<h2>Location</h2>
   		 		<p>Latitude: {wreckInd.latitude}</p>
   		 		<p>Longitude: {wreckInd.longitude}</p>
   		 		<h2>About</h2>
   		 		<p>Depth: {wreckInd.depth}</p>
   		 		<p>Description: {wreckInd.description}</p>

  			</div>

		</div>

	)

}


export default FindWreckShow;