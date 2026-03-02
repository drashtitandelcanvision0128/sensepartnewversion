// ServicesPage.jsx
import React from 'react';
import ServiceCard from "./ServiceCard";
import { servicesData } from '/src/data/serviceData';
import CTASection from '../Sections/CTASection';
import './servicePage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <header className="page-header">
        <h1>Our Services</h1>
        <p>We provide innovative, result-driven solutions to help your business grow in the digital world.</p>
      </header>

      <section className="services-list">
        {servicesData.map(service => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            offers={service.offers}
          />
        ))}
      </section>

      <CTASection />
    </div>
  );
};

export default ServicesPage;