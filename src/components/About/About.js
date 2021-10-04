import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';
import img1 from '../../Images/2 2.jpg';
import img2 from '../../Images/3 2.jpg';
import img3 from '../../Images/1 2.jpg';
const About = () => {
	return (
		<div className='about-page'>
			<Header></Header>
			<h1 className='text-center my-5 text-white bolder mt-3 pt-3'>
				About Our Service
			</h1>
			<p className=' text-center about mx-auto'>
				Everyday fashion is our promise to you.If there’s one thing we know
				about our customers––they’re busy living. They’re going to work. They’re
				raising kids. They’re hitting the gym. They’re studying for tests.
				They’re headed out on Friday night. They’re staying in with Sunday
				pancakes.Keeping you effortlessly stylish throughout the day lies at the
				core of what we do. At Clothing Shop Online, we’ve made it our mission
				to provide simple, affordable wardrobe staples to people who love to
				live. We’ve got the looks you want, from the brands you love, in the
				colors and sizes you need.Skip the lines at the mall; we’ve created an
				online shopping experience that fits your schedule just as well as it
				does your budget.Within minutes, you can stock up on the leading brands
				you love to wear every day. Imagine Gildan, Bella + Canvas, and Hanes,
				right at your fingertips. Our intuitive shopping experience was designed
				to help you quickly find your favs, while discovering new ones along the
				way.At Clothing Shop Online, we want you to be comfortable, confident,
				and carefree – in what you wear and how you shop. Let us dress your
				every day.
			</p>
			<div className='d-flex h-50 w-50 mx-auto my-3 g-4'>
				<img src={img2} alt='' />
				<img src={img1} alt='' />
				<img src={img3} alt='' />
			</div>

			<Footer></Footer>
		</div>
	);
};

export default About;
