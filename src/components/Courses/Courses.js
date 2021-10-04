import React, { useEffect, useState } from 'react';
import EachCourse from '../EachCourse/EachCourse';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Course.css';
const Courses = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		fetch('./courses.JSON')
			.then((response) => response.json())
			.then((data) => setCourses(data));
	}, []);

	return (
		<div>
			<Header></Header>
			<h1 className='text-center my-5 course-headline'>
				Enroll now to achieve the quality learing experince
			</h1>
			<p className='text-center'>Total course available {courses.length}</p>
			<div className='course-container'>
				{courses.map((course) => (
					<EachCourse key={course.key} course={course}></EachCourse>
				))}
			</div>

			<Footer></Footer>
		</div>
	);
};

export default Courses;
