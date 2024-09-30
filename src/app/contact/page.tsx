"use client"; // Ensures that this component is a Client Component

import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/pages/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      setResponseMessage(data.message);

      if (res.ok) {
        // Reset form fields if successful
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Get in Touch</h2>

        <div className="row">
          <div className="col-md-6">
            <h4>Contact Information</h4>
            <p><strong>Email:</strong> contact@nextjswebsite.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Address:</strong> 123 Business Street, City, Country</p>
          </div>

          <div className="col-md-6">
            <h4>Send Us a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>

            {responseMessage && (
              <div className="mt-3 alert alert-success">
                {responseMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
