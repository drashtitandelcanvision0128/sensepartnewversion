import React from 'react'

import './section.css';

const Section = ({title, children, className}) => {
  return (
   <section className={`section ${className}`}>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

export default Section