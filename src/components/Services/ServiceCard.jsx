import React from 'react'
import './serviceCard.css';

const ServiceCard = ({ icon, title, description, offers}) => {

  return (
    <div className="service-Card">
        <div className="icon"></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
            {offers.map((offer, index) => (
                <li key={index}>{offer}</li>
            ))}
        </ul>
    </div>
  );
};

export default ServiceCard