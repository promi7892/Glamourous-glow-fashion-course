import React from 'react';
import './EachCourse.css';

const EachCourse = (props) => {
	const {
		name,
		description,
		image,
		author,
		level,
		rating,
		enrolled,
		language,
	} = props.course;

	return (
		<div className='course'>
			<div>
				<img src={image} alt='' className='course-img' />
				<h4 className='course-name'>{name}</h4>
				<p>
					<b>Description:</b> {description.slice(0, 20)}..
				</p>
				<p>
					<small>by: {author}</small>
				</p>
				<h5>Level of leaning: {level}</h5>
				<p>
					<b>Ratings:</b> {rating}{' '}
				</p>
				<p className='light-text'>
					{' '}
					<small>Total {enrolled} </small>
				</p>
				<p className='light-text'>
					<small>Available in {language}</small>
				</p>

				<button className='btn-regular'>Start Learning</button>
			</div>
		</div>
	);
};

export default EachCourse;
