import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
  return (
    <>
      <div className='mt-5' style={{ textAlign: 'center' }}>
        <h2><b>Latest Blog</b></h2>
        <p>A tourist stays within their comfort zone and only sticks with seeing the main, popular sights. They don't really make an effort to go out and meet people except <br></br> those who they are traveling with. A traveler makes an effort to meet people from all over. <br /><i className='text-danger'>-By ADMIN</i></p>
      </div>
      <CardGroup className=' container'>
        <Card>
          <Card.Img variant="top" src="https://image.freepik.com/free-photo/sunset-pool_1203-3192.jpg" />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}> <h3>Tips To Reduce Your Travel Costs</h3></Card.Title>
            <Card.Text>
              Making corporate travel savings might sound like a challenge – especially if you have lots of employees flying to different locations at different times. But there are ways to keep your costs down without compromising on traveler safety or services.
            </Card.Text>
          </Card.Body>
          <div className="text-muted mb-3">
            <span className='text-mute'>10 NOV, 2021</span>
            <span><small className='text-mute1' >By Admin</small></span>
          </div>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://image.freepik.com/free-photo/taking-photos-lake_1088-88.jpg" />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}> <h3>Your Card Processing Forms</h3></Card.Title>
            <Card.Text>
              Process payments for goods and services with credit cards or bank checks. Choosing check or offline credit card payment (via invoice or purchase order) displays the order total and all relevant information to the customer while following proper accounting rules for reporting and inventory control.
            </Card.Text>
          </Card.Body>

          <div className="text-muted mb-3">
            <span className='text-mute'>7 NOV, 2021</span>
            <span><small className='text-mute1' >By Admin</small></span>
          </div>
        </Card>
      </CardGroup>
    </>
  );
};

export default Blog;