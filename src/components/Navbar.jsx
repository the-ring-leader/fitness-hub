import React from 'react';
import {Link} from 'react-router-dom';
import img from '../assets/images/weightlifter.png';

const Navbar = () => {
  return (
    <>
  {/* Hello world */}
  <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor : "black" , color: "white"}}>
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img
          src={img}
        />
      </Link>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item has-text-weight-bold" style={{ color: "grey"}} to="/">Home</Link>
        <a className="navbar-item has-text-weight-bold" style={{ color: "grey"}} href='#exercises'>Exercises</a>
      </div>
    </div>
  </nav>
</>

  )
}

export default Navbar