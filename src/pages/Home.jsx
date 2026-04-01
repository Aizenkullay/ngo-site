import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaHandHoldingHeart, FaGraduationCap, FaUsers, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight , FaClock} from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

 const projects = [
  {
    title: "🍽️ Feeding Hands Program",
    description: "Dedicated to providing nutritious meals to underprivileged children and families. We believe no child should go to bed hungry.",
    impact: "500+ Meals Daily | 15 Locations"
  },
  {
    title: "📚 Project Education Light",
    description: "We've established 25 learning centers in rural areas, providing education to 5,000+ children who previously had no access to schooling.",
    impact: "5,000+ children educated"
  },
  {
    title: "🏥 Health for All Initiative",
    description: "Mobile health clinics reaching 100+ villages, providing free check-ups, medicines, and health awareness programs.",
    impact: "15,000+ patients treated"
  }
];

  const galleryImages = [
    { id: 1, title: "Education Program", icon: "📚", color: "#2c5f2d" },
    { id: 2, title: "Health Camp", icon: "🏥", color: "#ff6b35" },
    { id: 3, title: "Tree Plantation", icon: "🌱", color: "#2c5f2d" },
    { id: 4, title: "Women Empowerment", icon: "👩", color: "#ff6b35" }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero">
        <div className="container">
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "60px",
            flexWrap: "wrap"
          }}>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <h1 style={{ fontSize: "3rem", marginBottom: "1rem", lineHeight: "1.2" }}>
                We Are a Non-Profit Organization
              </h1>
              <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.95 }}>
                Helping communities grow and thrive through education, healthcare, and sustainable development.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button onClick={() => navigate("/volunteer")} className="btn btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <FaHeart /> Join Us
                </button>
                <a href="#about" className="btn" style={{ 
                  backgroundColor: "transparent", 
                  border: "2px solid white",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  Learn More
                </a>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: "280px" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px"
              }}>
                <div style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "10px",
                  padding: "40px 20px",
                  textAlign: "center"
                }}>
                  📚
                  <div style={{ fontSize: "12px", marginTop: "8px" }}>Education</div>
                </div>
                <div style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "10px",
                  padding: "40px 20px",
                  textAlign: "center"
                }}>
                  🏥
                  <div style={{ fontSize: "12px", marginTop: "8px" }}>Healthcare</div>
                </div>
                <div style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "10px",
                  padding: "40px 20px",
                  textAlign: "center"
                }}>
                  🌱
                  <div style={{ fontSize: "12px", marginTop: "8px" }}>Environment</div>
                </div>
                <div style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "10px",
                  padding: "40px 20px",
                  textAlign: "center"
                }}>
                  👩
                  <div style={{ fontSize: "12px", marginTop: "8px" }}>Empowerment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* ABOUT SECTION - HAS ID */}
        <section id="about" style={{ scrollMarginTop: "80px", marginBottom: "60px" }}>
          <div className="card" style={{ textAlign: "center" }}>
            <FaHandHoldingHeart style={{ fontSize: "48px", color: "#ff6b35", marginBottom: "20px" }} />
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About Us</h2>
            
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h3 style={{ color: "#2c5f2d", marginTop: "30px" }}>Our Vision</h3>
              <p>A world where every individual has equal opportunities to thrive and contribute to society, free from poverty, discrimination, and injustice.</p>
              
              <h3 style={{ color: "#2c5f2d", marginTop: "30px" }}>Our Mission</h3>
              <p>To create lasting positive change in communities by implementing sustainable development programs, empowering individuals, and fostering partnerships that drive social progress.</p>
              
              <h3 style={{ color: "#2c5f2d", marginTop: "30px" }}>Our Background</h3>
              <p>Founded in 2015, Helping Hand NGO started with a small group of passionate volunteers dedicated to making a difference. Over the past 8 years, we've grown into a recognized organization with projects across 10 states, impacting over 50,000 lives.</p>
            </div>
          </div>
        </section>

        {/* WORKS SECTION - HAS ID */}
        <section id="works" style={{ scrollMarginTop: "80px", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}>Our Works</h2>
          <div className="grid">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "2px solid #f0f0f0" }}>
                  <strong style={{ color: "#ff6b35" }}>Impact: </strong>
                  {project.impact}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VOLUNTEER CTA SECTION */}
        <section id="volunteer-cta" style={{ scrollMarginTop: "80px", marginBottom: "60px", textAlign: "center" }}>
          <div className="card" style={{ background: "linear-gradient(135deg, #2c5f2d 0%, #1e3a1e 100%)", color: "white" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Join Our Mission</h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem auto" }}>
              Be the change you want to see in the world. Register as a volunteer today!
            </p>
            <button onClick={() => navigate("/volunteer")} className="btn" style={{ 
              backgroundColor: "#ff6b35", 
              fontSize: "1.1rem",
              padding: "12px 32px"
            }}>
              Become a Volunteer <FaArrowRight style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </section>

        
    
{/* GALLERY PREVIEW SECTION */}
<section id="gallery-preview" style={{ scrollMarginTop: "80px", marginBottom: "60px" }}>
  <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}>Photo Gallery</h2>
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    marginBottom: "2rem"
  }}>
    <div 
      className="gallery-item" 
      style={{ cursor: "pointer", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
      onClick={() => navigate("/gallery")}
    >
      <img 
        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=250&fit=crop" 
        alt="Feeding Program"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.parentElement.innerHTML = `<div style="height:200px; background:#ff6b35; display:flex; align-items:center; justify-content:center; font-size:48px">🍽️</div><div style="padding:15px"><p style="font-weight:500">Feeding Program</p></div>`;
        }}
      />
      <div style={{ padding: "15px" }}>
        <p style={{ fontWeight: "500", margin: 0 }}>Feeding Program</p>
        <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "5px" }}>500+ meals daily</p>
      </div>
    </div>
    
    <div 
      className="gallery-item" 
      style={{ cursor: "pointer", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
      onClick={() => navigate("/gallery")}
    >
      <img 
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop" 
        alt="Education"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.parentElement.innerHTML = `<div style="height:200px; background:#2c5f2d; display:flex; align-items:center; justify-content:center; font-size:48px">📚</div><div style="padding:15px"><p style="font-weight:500">Education Program</p></div>`;
        }}
      />
      <div style={{ padding: "15px" }}>
        <p style={{ fontWeight: "500", margin: 0 }}>Education Program</p>
        <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "5px" }}>5,000+ children educated</p>
      </div>
    </div>
    
    <div 
      className="gallery-item" 
      style={{ cursor: "pointer", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
      onClick={() => navigate("/gallery")}
    >
      <img 
        src="https://images.unsplash.com/photo-1576765608535-6f04d6e3b6d9?w=400&h=250&fit=crop" 
        alt="Healthcare"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.parentElement.innerHTML = `<div style="height:200px; background:#3498db; display:flex; align-items:center; justify-content:center; font-size:48px">🏥</div><div style="padding:15px"><p style="font-weight:500">Health Camp</p></div>`;
        }}
      />
      <div style={{ padding: "15px" }}>
        <p style={{ fontWeight: "500", margin: 0 }}>Health Camp</p>
        <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "5px" }}>15,000+ patients treated</p>
      </div>
    </div>
    
    <div 
      className="gallery-item" 
      style={{ cursor: "pointer", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
      onClick={() => navigate("/gallery")}
    >
      <img 
        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop" 
        alt="Environment"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.parentElement.innerHTML = `<div style="height:200px; background:#27ae60; display:flex; align-items:center; justify-content:center; font-size:48px">🌱</div><div style="padding:15px"><p style="font-weight:500">Tree Plantation</p></div>`;
        }}
      />
      <div style={{ padding: "15px" }}>
        <p style={{ fontWeight: "500", margin: 0 }}>Tree Plantation</p>
        <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "5px" }}>50,000 trees planted</p>
      </div>
    </div>
  </div>
  <div style={{ textAlign: "center" }}>
    <button onClick={() => navigate("/gallery")} className="btn">
      View Full Gallery <FaArrowRight style={{ marginLeft: "8px" }} />
    </button>
  </div>
</section>
        {/* 6. CONTACT SECTION WITH MAP */}
<section id="contact" style={{ scrollMarginTop: "80px", marginBottom: "40px" }}>
  <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}>Contact Us</h2>
  
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    marginBottom: "2rem"
  }}>
    {/* Left Column - Contact Info */}
    <div className="card">
      <h3 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
        <FaMapMarkerAlt style={{ color: "#ff6b35" }} /> Address
      </h3>
      <p>123 NGO Street, Community Center<br />
      New Delhi, India - 110001</p>
      
      <h3 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", marginTop: "1.5rem" }}>
        <FaPhone style={{ color: "#ff6b35" }} /> Phone
      </h3>
      <p>+91 1234567890<br />
      +91 9876543210</p>
      
      <h3 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", marginTop: "1.5rem" }}>
        <FaEnvelope style={{ color: "#ff6b35" }} /> Email
      </h3>
      <p>info@helpinghandngo.org<br />
      volunteer@helpinghandngo.org</p>
      
      <h3 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", marginTop: "1.5rem" }}>
        <FaClock style={{ color: "#ff6b35" }} /> Working Hours
      </h3>
      <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
      Saturday: 10:00 AM - 4:00 PM<br />
      Sunday: Closed</p>
    </div>
    
    {/* Right Column - Map */}
    <div className="card">
      <h3 style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
        <FaMapMarkerAlt style={{ color: "#ff6b35" }} /> Our Location
      </h3>
      <div style={{
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <iframe
          title="NGO Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.520458763363!2d77.20903131507957!3d28.553319982441655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e2c8b7b8b7%3A0x8b7b8b7b8b7b8b7b!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666", textAlign: "center" }}>
        📍 Conveniently located with easy access to public transportation
      </p>
    </div>
  </div>
</section>
            </div>
          </div>
  );
};

export default Home;