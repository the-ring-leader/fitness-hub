import React from 'react'
import flogo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer" style={{backgroundColor: "black",marginTop: "10px"}}>
  <div className="content has-text-centered">
    
    <img src={flogo}/>
    <p style={{color: "white" , marginBottom: "0px"}}>
    Copyright © 2022 FitnessHub, India.
    </p>
  </div>
</footer>

  )
}

export default Footer