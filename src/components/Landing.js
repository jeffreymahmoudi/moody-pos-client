import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Background from '../styles/landing-page.png';
import '../styles/landing-page.css';

const landingStyle = {
  backgroundImage: `url(${Background})`,
};

const Landing = () => {
  return (
    <section className="landing">
      <div className="hero-image" style={landingStyle}>
        <div className="hero-text">
          <h1>Afraid of commitments?</h1>
          <p>Don't be anymore with this tracking and challenges tool.</p>
          <Link to="/tables">Go To Tables</Link>
        </div>
      </div>
      <div className="description">
        <h2>What is this?</h2>
        <p>This application is a minimal PoS that handles a menu with tables and checks for a restaurant. <br />It was built to learn the skills of async operations using a Redux store.</p>
      </div>
    </section>




    // <div className='landing'>
    //   <h2>Landing</h2>
    // </div>
  )
}

export default Landing
