import React, { Fragment } from 'react';
import Navigation from '../components/Navigation';
import Layout from '../components/layout';
import Typed from 'react-typed';

const LandingPage = () => (
  <Fragment>
    <div className="background-gradient">
    <Navigation />
    <div className="landing">
      <h1>Turn Passion into Profit.</h1>
      <h2>Polytalent is a freelance marketplace for <Typed 
                strings={[
                    'creators',
                  'entrepreneurs',
                  'broke students'
                ]}
                    typeSpeed={50}
                    backSpeed={50}
                    backDelay={2000}
                    cursorChar='_'
                    loop >
                    <b></b>
                </Typed></h2>

      <input className="input-email" type="email" placeholder="Enter your email address" />

      <p>Polytalent is currently under construction, but don’t worry… we will be launching soon! If you’d like be get updates about our launch date, please join our mailing list.</p>              
      <br></br>  
    </div>
    </div>
    <div className="landing-2 grid-container">
      <div className="grid-50">
      <h2>
        Students
      </h2>
      <p>Polytalent provides you with a platform to show off your skills and get paid for them. You will be able to create a profile highlighting what you’re good at and can make some money doing. <span>Join our mailing list to be notified when we launch.</span></p>
      </div>
      <div className="grid-50">
        <h2>Consumers</h2>
        <p>You will be able to browse student profiles and hire students based on their skillset and your needs. <span>Join our mailing list to be notified when we launch.</span></p>
      </div>
    </div>
  </Fragment>
);

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
);
