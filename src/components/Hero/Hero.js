import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
const Hero = () => {
	return (
		<div className='hero-conatiner'>
			<div className='row d-flex banner align-items-center justify-content-center'>
				<div className=' container-fluid'>
					<div className='title mx-auto text-center'>
						<h1>
							Matching style and class with luxury and comfort. <br />
						</h1>
						<h4>Find Your Inner Diva.</h4>

						<p className='text-white text-center mt-3 container vision'>
							The question of how designers envision women, what a woman wears
							and the image she projects has become a political hot potato. The
							big takeaway from the season? To value those visions that really
							are attuned to reflecting our truth in some way so that we can do
							us.
							<br />
							<br />
							To innovate, to lead, to enhance, to provide best-value products
							and services to global customers. To make a difference through our
							branding to stay ahead of fashion trends, market changes and the
							latest technology. To enhance the quality of life for our business
							partners,customers and employees.
						</p>
						<button className='mt-3 about-btn text-center mx-auto'>
							About Us
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
