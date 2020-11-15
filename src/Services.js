import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel ,Card,CardGroup}from 'react-bootstrap';
import c1 from './c1.png';
import c2 from './c2.png';
import c3 from './c3.png';

export default function Services() {
    return (
        <div> 
     <div> 
 <Carousel style={{overflow:'hidden'}}>
  <Carousel.Item interval={1000}  style={{overflow:'hidden' }}>
    <img
      src={c1}
      alt="First slide"
      style={{width:'100%',overflow:'hidden',height:'30rem' }}
    />
    <Carousel.Caption>
      <h3>Boosting your career
      </h3>
      <p>Develop your skills while boosting your career prospects with a project in your field</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000} >
    <img
     
      src={c2}
      alt="Third slide"
      style={{width:'100%',overflow:'hidden' }}
    />

    <Carousel.Caption style={{color:"black"}}>
      <h3>Learn with Career Pro</h3>
      <p >Work towards a cause you care about for your personal and professional development.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      
      src={c3}
      alt="Third slide"
      style={{width:'100%',overflow:'hidden' }}
    />

    <Carousel.Caption>
      <h3>Get Real</h3>
      <p>Get real life project experience with professionals </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>      
<div className="conatiner2">

        </div>
        <CardGroup>
  <Card>
   
    <Card.Body>
      <Card.Title><h1 style={{color:"rgba(33, 115, 211, 1)"}}>10+</h1> <p> courses available</p></Card.Title>
      <Card.Text>
      You can choose from over 10+ Live project from various fields such as HR,Finance,Graphic designing and get real life experince and feedbacks from Industrial expert
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
  
    <Card.Body>
      <Card.Title><h1 style={{color:"rgba(33, 115, 211, 1)"}}>5+</h1> <p> course expetise</p></Card.Title>
      <Card.Text>
      We have over 5+ experts who will be answering all your related queries during your LIve Project
      </Card.Text>
    </Card.Body>
 
  </Card>
  <Card>
   
    <Card.Body>
      <Card.Title><h1 style={{color:"rgba(33, 115, 211, 1)"}}>40+</h1> <p> countries and expanding</p></Card.Title>
      <Card.Text>
      We are present over 40+ countries and we are still expanding to other countries to provide them with real life industrial experince
      </Card.Text>
    </Card.Body>
 
  </Card>
</CardGroup>
        </div>
        
    );
}
