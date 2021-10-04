import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Services.css';
import traning from '../../Images/training.webp';
import online from '../../Images/Cream Online Learning Vibrant Dynamic Schools & Education Business Sell Sheet.png';
import internship from '../../Images/Internship.jpeg';

const Services = () => {
	return (
		<div>
			<h2 className='service-heading text-center my-5'> Our Services</h2>

			<div className='container card-container g-4 my-5'>
				<Card className='h-100' style={{ width: '18rem' }}>
					<Card.Img variant='top' src={traning} className='service-image' />
					<Card.Body>
						<Card.Title>
							<b>One-to-One Workshop</b>
						</Card.Title>
						<Card.Text>
							Learn fundamental Categories, Characteristics, Properties of the
							different types of fabrics for fashion designing.
						</Card.Text>
					</Card.Body>
					<ListGroup className='list-group-flush'>
						<ListGroupItem>
							<b>One Session Every Month</b>
						</ListGroupItem>
						<ListGroupItem>
							<b>Reg Fee: $89</b>
						</ListGroupItem>
						<ListGroupItem>
							<b>First Come, First Serve</b>
						</ListGroupItem>
					</ListGroup>
					<Card.Body>
						<Card.Link href='#'>Register Now</Card.Link>
						<Card.Link href='#'>Know More</Card.Link>
					</Card.Body>
				</Card>

				<Card className='h-100' style={{ width: '18rem' }}>
					<Card.Img variant='top' src={online} className='service-image' />
					<Card.Body>
						<Card.Title>
							<b>Online Course</b>
						</Card.Title>
						<Card.Text>
							Become a fashion designer. Learn the top in-demand creative skills
							and build your own fashion brand from Scratch!
						</Card.Text>
					</Card.Body>
					<ListGroup className='list-group-flush'>
						<ListGroupItem>
							<b>Pre-recorded Class</b>
						</ListGroupItem>
						<ListGroupItem>
							<b>Course start at only $56</b>
						</ListGroupItem>
						<ListGroupItem>
							<b>Learn From anywhere, anytime</b>
						</ListGroupItem>
					</ListGroup>
					<Card.Body>
						<Card.Link href='#'>Enroll Now</Card.Link>
						<Card.Link href='#'>Know More</Card.Link>
					</Card.Body>
				</Card>

				<Card className='h-100' style={{ width: '18rem' }}>
					<Card.Img variant='top' src={internship} className='service-image' />
					<Card.Body>
						<Card.Title>
							<b>Internship Opportunity</b>
						</Card.Title>
						<Card.Text>
							Numerous well-known fashion designers started their careers as
							fashion design interns.
						</Card.Text>
					</Card.Body>
					<ListGroup className='list-group-flush'>
						<ListGroupItem>
							<b> Attend fashion events </b>
						</ListGroupItem>
						<ListGroupItem>
							<b>Free Photo Shoots</b>
						</ListGroupItem>
						<ListGroupItem>
							<b>work for fashion designers and fashion magazines</b>
						</ListGroupItem>
					</ListGroup>
					<Card.Body>
						<Card.Link href='#'>Apply Now</Card.Link>
						<Card.Link href='#'>More Information</Card.Link>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default Services;
