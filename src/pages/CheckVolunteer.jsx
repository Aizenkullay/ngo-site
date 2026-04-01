import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FaSearch, FaIdCard, FaEnvelope, FaPhone } from 'react-icons/fa';

const CheckVolunteer = () => {
  const [volunteerId, setVolunteerId] = useState('');
  const [volunteerData, setVolunteerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mask email function: a******y@gmail.com
  const maskEmail = (email) => {
    if (!email) return '';
    const [name, domain] = email.split('@');
    if (name.length <= 2) {
      return name[0] + '******@' + domain;
    }
    return name[0] + '******' + name.slice(-1) + '@' + domain;
  };

  // Mask phone function: 92******12
  const maskPhone = (phone) => {
    if (!phone) return '';
    const phoneStr = phone.toString();
    if (phoneStr.length <= 4) {
      return phoneStr;
    }
    return phoneStr.slice(0, 2) + '******' + phoneStr.slice(-2);
  };

  const handleSearch = async () => {
    if (!volunteerId.trim()) {
      setError('Please enter a Volunteer ID');
      return;
    }

    setLoading(true);
    setError(null);
    setVolunteerData(null);

    try {
      // Query Firestore for volunteer with matching ID
      const q = query(collection(db, 'volunteers'), where('volunteerId', '==', volunteerId.trim()));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        setError('No volunteer found with this ID. Please check and try again.');
        setLoading(false);
        return;
      }

      // Get the first matching volunteer
      let foundData = null;
      querySnapshot.forEach((doc) => {
        foundData = { id: doc.id, ...doc.data() };
      });
      
      setVolunteerData(foundData);
    } catch (error) {
      console.error('Error fetching volunteer:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
          <FaIdCard style={{ color: '#ff6b35', marginRight: '10px' }} />
          Check Volunteer Details
        </h1>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
          Enter your Volunteer ID to view your registered details
        </p>

        {/* Search Input */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <input
            type="text"
            placeholder="Enter Volunteer ID (e.g., VOL123456)"
            value={volunteerId}
            onChange={(e) => setVolunteerId(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#ff6b35'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            style={{
              padding: '12px 32px',
              backgroundColor: '#ff6b35',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e55a2a'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6b35'}
          >
            <FaSearch /> {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>🔍</div>
            <p>Searching for your details...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div style={{
            backgroundColor: '#fee',
            color: '#e74c3c',
            padding: '15px',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            <strong>⚠️ {error}</strong>
          </div>
        )}

        {/* Volunteer Details Display */}
        {volunteerData && !loading && (
          <div style={{
            backgroundColor: '#f9f9f9',
            borderRadius: '12px',
            padding: '25px',
            border: '1px solid #e0e0e0'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '20px',
              paddingBottom: '15px',
              borderBottom: '2px solid #ff6b35'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>✅</div>
              <h3 style={{ color: '#2c5f2d' }}>Volunteer Found!</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>
                Registered on: {new Date(volunteerData.registeredAt).toLocaleDateString()}
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '15px',
                padding: '12px',
                backgroundColor: 'white',
                borderRadius: '8px'
              }}>
                <FaEnvelope style={{ color: '#ff6b35', fontSize: '20px' }} />
                <div>
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>Email Address</div>
                  <div style={{ fontSize: '16px', fontWeight: '500' }}>{maskEmail(volunteerData.email)}</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                backgroundColor: 'white',
                borderRadius: '8px'
              }}>
                <FaPhone style={{ color: '#ff6b35', fontSize: '20px' }} />
                <div>
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>Phone Number</div>
                  <div style={{ fontSize: '16px', fontWeight: '500' }}>{maskPhone(volunteerData.phone)}</div>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: '#fff3e0',
              padding: '12px',
              borderRadius: '8px',
              textAlign: 'center',
              fontSize: '12px',
              color: '#ff6b35'
            }}>
              🔒 Your personal information is protected and masked for privacy
            </div>
          </div>
        )}

        {/* Help Text */}
        <div style={{
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#f0f7f0',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#2c5f2d',
          textAlign: 'center'
        }}>
          <strong>💡 Don't have a Volunteer ID?</strong>
          <br />
          <a href="/volunteer" style={{ color: '#ff6b35', textDecoration: 'none' }}>
            Register now to get your Volunteer ID
          </a>
        </div>
      </div>
    </div>
  );
};

export default CheckVolunteer;
