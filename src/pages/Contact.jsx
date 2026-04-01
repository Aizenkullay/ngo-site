import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple client-side handling
    console.log('Contact form submitted:', formData);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setStatus(null);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="card">
          <h2>Get in Touch</h2>
          <div style={{ marginBottom: '2rem' }}>
            <h3>📍 Address</h3>
            <p>123 NGO Street, Community Center<br />
            New Delhi, India - 110001</p>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3>📞 Phone</h3>
            <p>+91 1234567890<br />
            +91 9876543210</p>
          </div>
          
          <div>
            <h3>✉️ Email</h3>
            <p>info@helpinghandngo.org<br />
            volunteer@helpinghandngo.org</p>
          </div>
        </div>
        
        <div className="card">
          <h2>Send us a Message</h2>
          {status === 'success' && (
            <div className="success-message">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;