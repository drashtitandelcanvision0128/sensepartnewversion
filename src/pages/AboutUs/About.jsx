import React from 'react';
import Section from '../../components/Sections/Section';
import './about.css';

const About = () => {
  return (
    <>
    <div className="section-container">
      <Section title="About Our Company" className="about-section">
        <div >
        <p>Delivering Innovation, Technology, and Smart Business Solutions.</p>
        </div>
      </Section>

      <Section title="Who We Are" className="about-section">
        <div className="about-card">
        <p>We are a technology-driven company focused on providing innovative and reliable digital solutions. Our team works with businesses of all sizes to help them grow using modern technology and smart strategies.
We believe in quality, transparency, and long-term partnerships.</p>
</div>
      </Section>

      <Section title="Our Mission" className="about-section">
        <div className="about-card">
        <p>Our mission is to help businesses succeed by delivering powerful software, advanced technology solutions, and professional services that create real impact.</p>
        </div>
      </Section>

      <Section title="Our Vision" className="about-section">
        <div className="about-card">
        <p>Our vision is to become a trusted global technology partner known for innovation, excellence, and customer satisfaction.</p>
        </div>
      </Section>

      <Section title="What We Do" className="about-section">
        <div >
      <ul className="service-card">
  <li>
    <span className="icon">💻</span>
    <p>Software Development</p>
  </li>
  <li>
    <span className="icon">📈</span>
    <p>Sales Solutions</p>
  </li>
  <li>
    <span className="icon">🌐</span>
    <p>IoT (Internet of Things)</p>
  </li>
  <li>
    <span className="icon">🤖</span>
    <p>AI & Machine Learning</p>
  </li>
  <li>
    <span className="icon">👥</span>
    <p>Recruitment Services</p>
  </li>
</ul>
        </div>
      </Section>
      <Section title="Why Choose Us" className="about-section">
        <div>
        <ul className="service-card">
  <li>
    <span className="icon">🎯</span>
    <p>Experienced & Skilled Team</p>
  </li>
  <li>
    <span className="icon">🤝</span>
    <p>Client-Focused Approach</p>
  </li>
  <li>
    <span className="icon">⏱️</span>
    <p>On-Time Project Delivery</p>
  </li>
  <li>
    <span className="icon">💡</span>
    <p>Innovative & Modern Solutions</p>
  </li>
  <li>
    <span className="icon">🛡️</span>
    <p>Long-Term Support</p>
  </li>
</ul>
        </div>
      </Section>
      </div>
    </>
  );
};

export default About;