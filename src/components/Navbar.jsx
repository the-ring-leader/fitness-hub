import React from 'react';
import {Link} from 'react-router-dom';
import img from '../assets/images/weightlifter.png';

const Navbar = () => {
  return (
    <>
  {/* Hello world */}
  <nav className="navbar" role="navigation" aria-label="main navigation" style={{"backgroundColor" : "#F9F9FA"}}>
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img
          src={img}
        />
      </Link>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Home</Link>
        <a className="navbar-item" href='#exercises'>Exercises</a>
      </div>
    </div>
  </nav>
</>

  )
}

export default Navbar