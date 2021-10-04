import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../Images/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='bg-dark'>
			<div className='container fluid '>
				<div className='row '>
					<div className='col-md-2'>
						<div className='logo-img'>
							<img className='logo' src={logo} alt='' />
						</div>
					</div>
					<div className='col-md-10 '>
						<div className='menu-container mt-4'>
							<ul className='d-flex align-items-end justify-content-end '>
								<Link to='/home' className='items'>
									<li>Home</li>
								</Link>
								<Link to='/courses' className='items'>
									<li>Services</li>
								</Link>
								<Link to='/about' className='items'>
									<li>About us</li>
								</Link>
								<Link to='contact' className='items'>
									<li>Contact us</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
