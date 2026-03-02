import React, { useState} from 'react';
import './contactUs.css';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameRegex = /^[A-Za-z ]{3,}$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!nameRegex.test(formData.name)) {
            alert("Please enter a valid name");
            return;
        }
        if (!phoneRegex.test(formData.phone)) {
            alert("Please enter a valid phone number");
            return;
        }
        console.log("Form Submitted", formData);
        setFormData({name: "", email: "", phone: "", address: ""});
    };

  return (
    <div className="contact-container">
        <h1>Contact Us</h1>

        <form className='contact-form' onSubmit={handleSubmit}>
           <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required/>
           <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required/>
           <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} required/>
           <input type="text" name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} required/>

           <button type="submit">Submit</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
            {/* <h2>Contact Information</h2> */}
            <p>Email: sensepart@gmail.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main St, Anytown, USA</p>
        </div>
    </div>
  );
};

export default ContactUs