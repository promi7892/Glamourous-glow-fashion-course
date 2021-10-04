import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './NotFound.css';
import image from '../../Images/2663517.jpg';

const NotFound = () => {
	return (
		<div>
			<Header></Header>
			<div className=' container fluid'>
				<h1 className='text-dark mt-5 text-center'>Oh No! Page Not Found</h1>
				<img className='not-found mx-auto' src={image} alt='' />
			</div>
			<Footer></Footer>
		</div>
	);
};

export default NotFound;
