import React from 'react';
import './site.scss';
import { fontGrid } from '@mui/material/styles/cssUtils';
import { CiSearch } from "react-icons/ci";
import { GoCheck } from "react-icons/go";
import { width } from '@mui/system';
import { red } from '@mui/material/colors';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
const Home = () => {
    return (
        <div className='Home' >
            <div className='d-flex border border-primary'>
            </div>
            <div className='bg-1'>
                <h6 className='heading'>The Leader in Online Learning</h6>
                <h1 className='h1'>Master the Skills to </h1>
                <h1 className='htag'>Drive your Career</h1>
                <p className='para'>Free online courses from the world's leading experts.</p>
                <p className='par'>Join 17 million lerarners today.</p>    
                <div className='box' color='Red'>
                <input type="search" placeholder='Search for courses' className='searchbox' input/> <CiSearch className='icon'/>
                </div>
                <div className='desc'>
                <h6 ><GoCheck className='r1'/>  Access more than 100k online courses</h6>
                <h6><GoCheck className='r2' /> Learn with experts from world-leading universities</h6>
                <h6><GoCheck className='r3' /> Learn the high-impact skills that top companies want</h6>
                </div>
                
            </div>
        <h4 className='tag'>Browse Categories</h4>
        <h1 className='head1'>Popular Topics to Learn</h1>
        </div>
        
        
    
    );
}
const card =()=>{
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
}

export default Home;