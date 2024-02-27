import React, { useEffect } from 'react'
import './New.scss'
import'./Common/Header';
import welcome from './Images/Welcome.jpg';

import Header from './Common/Header';
import Footer from './Common/Footer';

function New() {
    useEffect(()=>{
        document.body.classList.add('new-body');
        return()=>{
            document.body.classList.remove('new-body');

        };
    });
  return (
    <div>
       <Header/> 
        <img className='img1' src= {welcome}/>
        
        
        <Footer/>
        </div>
       
  )
}

export default New