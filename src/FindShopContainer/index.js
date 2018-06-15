import React, { Component } from 'react';
import './style.css';

class FindShopContainer extends Component{

	constructor () {

		super();

	}


	render () {


		return (

			<section id="scubaShops">

			<div className="shopInfo"> 
				<h1 className="shopName"> Great Lakes Expeditions </h1>
				<p className="diveInfo"> Phone: (219)-742-7088 </p>
				<p className="diveInfo"> Address: 2601 N Cannon Dr, Chicago, IL 60614 </p>
				<a className='diveWeb' href="http://www.greatlakesexpeditions.com/"> Website </a>
			</div>

			<div className="shopInfo"> 
				<h1 className="shopName"> Learn Scuba Chicago </h1>
				<p className="diveInfo"> Phone: (773) 599-3483 </p>
				<p className="diveInfo"> Address: 2338 W Fullerton Ave, Chicago, IL 60647 </p>
				<a className='diveWeb' href="Website: http://www.learnscubachicago.org/"> Website </a>
			</div>

			<div className="shopInfo"> 
				<h1 className="shopName"> Scuba Sensations </h1>
				<p className="diveInfo"> Phone: (312) 404-7785 </p>
				<p className="diveInfo"> Address: 2425 W Pratt Blvd, Chicago, IL 60645 </p>
				<a className='diveWeb' href="http://scubasensations.com/"> Website </a>		
			</div>


			<div className="shopInfo"> 
				<h1 className="shopName"> Underwater Safaris </h1>
				<p className="diveInfo"> Phone: (773) 348-3999 </p>
				<p className="diveInfo"> Address: 2950 N Lincoln Ave, Chicago, IL 60657 </p>
				<a className='diveWeb' href="http://www.uwsafaris.com/"> Website </a>
			</div>

			</section>

			)

	}
}


export default FindShopContainer;