 import React, { useState } from 'react';
import axios from "axios";
import './contact.css';

function Contact() {
const [formData, setFormData] = useState({
    'First Name': '', // First Name
    'Phone Number': '', // Phone Number
    'BIRTHDAY': '', // Birthday
    'DATE': '', // Date (Not in Mailchimp, you can add it if needed)
    'Subject': '', // Subject
    'email': '', // Initialize email to an empty string
    'Message': '' // Initialize MESSAGE to an empty string
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/subscribe', formData);

      if (response.status === 200) {
        console.log('Subscribed to Mailchimp!');
        // You can add any success handling here
      } else {
        console.error('Error subscribing to Mailchimp - Server Error:', response.data);
        // Handle server error response here
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Error subscribing to Mailchimp - Server Error:', error.response.data);
        // Handle server error response here
      } else if (error.request) {
        console.error('Error subscribing to Mailchimp - No response received:', error.request);
        // Handle request error (e.g., network issues) here
      } else {
        console.error('Error subscribing to Mailchimp - Request setup error:', error.message);
        // Handle request setup error here
      }
      // Handle other errors here
    }
  };



  

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="tb3"
                type="text"
                name="First Name"
                id="Name"
                placeholder="First Name"
                value={formData['First Name']}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="tb3"
                type="email"
                name="email"
                id="Email"
                placeholder="Email"
                value={formData.email} // Bind to formData.email
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="tb3"
                type="tel"
                name="Phone Number"
                id="Phone"
                placeholder="Phone"
                value={formData['Phone Number']}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="tb3"
                type="text"
                name="Subject"
                id="Subject"
                placeholder="Subject"
                value={formData['Subject']}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                className="tb3"
                rows="6"
                name="Message"
                id="Message"
                placeholder="Write your message"
                value={formData.Message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <button className="Reserve" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
