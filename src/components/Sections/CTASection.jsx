import React from 'react';
import './ctaSection.css';
import { useNavigate } from 'react-router-dom'; // We will use useLocation later on

const CTASection = () => {
    const navigate = useNavigate ();

    const handleClick = () => {
        navigate('/');

        // a small delay to wait for page render
        setTimeout(() => {
            const contactSection = document.getElementById('contact-us');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

  return (
    <div className="cta-section">
      <h2>Let's Work Together</h2>
      <p>Contact us today to discuss how our services can help your business grow.</p>
      <button className="cta-button" onClick={handleClick}>Contact Us</button>
    </div>
  );
};

export default CTASection;