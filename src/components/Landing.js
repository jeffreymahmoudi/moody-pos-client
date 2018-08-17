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
          <h1>Moody POS</h1>
          <p>A minimal Point of Sale system </p>
          <Link to="/tables">Go To Tables</Link>
        </div>
      </div>
      <div className="description">
        <h2>What is this?</h2>
        <p>This application is a minimal PoS that handles a menu with tables and checks for a restaurant. <br />It was built to learn the skills of async operations using a Redux store.</p>
      </div>
    </section>
  )
}

export default Landing
