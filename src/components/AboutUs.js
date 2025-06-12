import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container container mt-5">
      <h1 className="mb-4">About Us</h1>
      <p>
        Welcome to DevSecOps! We are passionate about delivering secure, scalable, and innovative web solutions. Our team is dedicated to integrating security into every phase of the development lifecycle, ensuring robust and reliable applications for our clients.
      </p>
      <h2 className="mt-5">Our Mission</h2>
      <p>
        To empower organizations by providing cutting-edge DevSecOps practices, fostering a culture of collaboration, automation, and continuous improvement.
      </p>
      <h2 className="mt-5">Our Team</h2>
      <ul>
        <li>Jane Doe – DevSecOps Engineer</li>
        <li>John Smith – Cloud Architect</li>
        <li>Emily Johnson – Security Analyst</li>
        <li>Michael Brown – Software Developer</li>
      </ul>
    </div>
  );
};

export default AboutUs;
