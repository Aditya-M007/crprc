
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button,Jumbotron,Container} from 'react-bootstrap';
export default function Home() {
    return (
       
  <div className="Home">
  <Container>
  <Jumbotron style={{marginTop:"5rem",marginLeft:"2.5rem",
  background:"rgba(6, 6, 6, 0.59)",
    color:"white",padding:"2rem",width:"85%"}}>

  
  <h2>JOIN THE BIGGEST COMMUNITY OUT THERE WITH CAREERPRO</h2>
  
 
</Jumbotron>
</Container>
<div  style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
    <Button  style={{
      margin:"4rem",width: '10rem',
      height: '4rem',background: '#000000'
    }}>
     Login
    </Button>
    <Button  style={{
      margin:"4rem",width: '10rem',
      height: '4rem',background: '#000000'
    }}>
     Sign up
    </Button>
  </div>
  
       {/* <div className="container text-wrap"  style={{background:"black",
      color:"white",
      display:"flex",
      justifyContent:'center',
      alignContent:"center",
      margin:"10rem"}}>  <h1>JOIN THE BIGGEST COMMUNITY OUT THERE WITH CAREERPRO</h1>
      </div> */}
      
   
  </div>
      
    )
}
