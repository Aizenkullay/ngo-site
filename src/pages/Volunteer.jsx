import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [generatedId, setGeneratedId] = useState(null);

  // Generate unique Volunteer ID
  const generateVolunteerId = async () => {
    let isUnique = false;
    let newId = '';
    
    while (!isUnique) {
      // Format: VOL + 6 digit number (e.g., VOL123456)
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      newId = `VOL${randomNum}`;
      
      // Check if ID already exists
      const q = query(collection(db, 'volunteers'), where('volunteerId', '==', newId));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        isUnique = true;
      }
    }
    
    return newId;
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setGeneratedId(null);
    
    try {
      // Generate unique Volunteer ID
      const volunteerId = await generateVolunteerId();
      
      // Store data in Firebase Firestore
      const docRef = await addDoc(collection(db, 'volunteers'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        volunteerId: volunteerId,
        registeredAt: new Date().toISOString()
      });
      
      console.log('Document written with ID: ', docRef.id);
      console.log('Volunteer ID: ', volunteerId);
      
      setGeneratedId(volunteerId);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '' });
      
    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Register as a Volunteer</h1>
        <p>Join our mission to make a difference. Fill out the form below to get started.</p>
        
        {submitStatus === 'success' && generatedId && (
          <div style={{
            backgroundColor: '#27ae60',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎉</div>
            <h3 style={{ marginBottom: '10px' }}>Registration Successful!</h3>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>
              Your Volunteer ID: <strong style={{ fontSize: '24px', display: 'block', marginTop: '10px' }}>{generatedId}</strong>
            </p>
            <p style={{ fontSize: '14px', marginTop: '10px' }}>
              ⚠️ Please save this ID. You'll need it to check your volunteer details.
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div style={{ 
            backgroundColor: '#e74c3c', 
            color: 'white', 
            padding: '1rem', 
            borderRadius: '5px', 
            marginBottom: '1rem' 
          }}>
            Something went wrong. Please try again.
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
          
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;