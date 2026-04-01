import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const galleryImages = [
    { 
      id: 1, 
      title: "Nutritional Support", 
      category: "Food Distribution",
      description: "Daily meal programs ensuring no child in our community goes to bed hungry.",
      location: "Mumbai Slums",
      date: "March 2024",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      icon: "🍽️",
      color: "#ff6b35"
    },
    { 
      id: 2, 
      title: "Digital Literacy Drive", 
      category: "Education",
      description: "Equipping rural schools with modern tools and qualified volunteer teachers.",
      location: "Rajasthan",
      date: "Feb 2024",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      icon: "📚",
      color: "#2c5f2d"
    },
    { 
      id: 3, 
      title: "Mobile Medical Unit", 
      category: "Healthcare",
      description: "Bringing specialized doctors and life-saving medicine to isolated hilly regions.",
      location: "Assam",
      date: "Jan 2024",
      imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
      icon: "🏥",
      color: "#3498db"
    },
    { 
      id: 4, 
      title: "Urban Reforestation", 
      category: "Environment",
      description: "Restoring local ecosystems by planting native saplings in industrial zones.",
      location: "Delhi NCR",
      date: "March 2024",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      icon: "🌱",
      color: "#27ae60"
    },
    { 
      id: 5, 
      title: "Livelihood Training", 
      category: "Women Development",
      description: "Empowering women through vocational skills like tailoring and handicraft design.",
      location: "Bangalore",
      date: "Feb 2024",
      imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      icon: "👩",
      color: "#e74c3c"
    },
    { 
      id: 6, 
      title: "Mega Health Checkup", 
      category: "Healthcare",
      description: "A large-scale diagnostic camp serving over 500 residents in a single day.",
      location: "Uttar Pradesh",
      date: "Dec 2023",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      icon: "🩺",
      color: "#2980b9"
    },
    { 
      id: 7, 
      title: "Clean Ocean Project", 
      category: "Environment",
      description: "Volunteers removing plastic waste to protect marine life and local tourism.",
      location: "Goa",
      date: "Feb 2024",
      imageUrl: "https://images.unsplash.com/photo-1618477461853-cf6ed80fafa5?auto=format&fit=crop&q=80&w=800",
      icon: "🏖️",
      color: "#16a085"
    },
    { 
      id: 8, 
      title: "Solar Water Pump Setup", 
      category: "Water & Sanitation",
      description: "Providing sustainable clean water access to drought-prone farming villages.",
      location: "Rajasthan",
      date: "March 2024",
      imageUrl: "https://images.unsplash.com/photo-1545259742-b4fd8fea67e4?auto=format&fit=crop&q=80&w=800",
      icon: "💧",
      color: "#1abc9c"
    }
  ];

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div style={{ 
      padding: "60px 20px", 
      backgroundColor: "#fdfdfd", 
      minHeight: "100vh",
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{ 
            color: "#ff6b35", 
            fontWeight: "bold", 
            textTransform: "uppercase", 
            letterSpacing: "2px",
            fontSize: "14px"
          }}>Our Impact in Pictures</span>
          <h1 style={{ 
            fontSize: "3rem", 
            color: "#1a1a1a", 
            marginTop: "10px", 
            marginBottom: "15px",
            fontWeight: "800" 
          }}>
            Moments of <span style={{ color: "#2c5f2d" }}>Change</span>
          </h1>
          <div style={{ 
            width: "60px", 
            height: "4px", 
            backgroundColor: "#ff6b35", 
            margin: "0 auto 20px",
            borderRadius: "2px"
          }}></div>
          <p style={{ color: "#555", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
            Visual stories of how your support helps us reach the underserved.
          </p>
        </div>

        {/* Improved Filter Tabs */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "50px",
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "50px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          width: "fit-content",
          margin: "0 auto 50px"
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "12px 28px",
                backgroundColor: selectedCategory === category ? "#2c5f2d" : "transparent",
                color: selectedCategory === category ? "white" : "#555",
                border: "none",
                borderRadius: "40px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow: selectedCategory === category ? "0 4px 15px rgba(44, 95, 45, 0.3)" : "none"
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Modern Image Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "35px"
        }}>
          {filteredImages.map((image) => (
            <div
              key={image.id}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.07)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                cursor: "pointer",
                position: "relative"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03) translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) translateY(0)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.07)";
              }}
            >
              {/* Image Container */}
              <div style={{ height: "260px", position: "relative", overflow: "hidden" }}>
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  height: "50%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  zIndex: 1
                }}></div>
                <div style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  backgroundColor: "white",
                  color: "#333",
                  padding: "6px 14px",
                  borderRadius: "50px",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  zIndex: 2,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                }}>
                  {image.category}
                </div>
              </div>

              {/* Content Box */}
              <div style={{ padding: "25px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ fontSize: "20px" }}>{image.icon}</span>
                  <h3 style={{ fontSize: "1.25rem", color: "#1a1a1a", fontWeight: "700", margin: 0 }}>
                    {image.title}
                  </h3>
                </div>
                <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px", height: "45px", overflow: "hidden" }}>
                  {image.description}
                </p>
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  paddingTop: "15px", 
                  borderTop: "1px solid #f0f0f0",
                  color: "#888",
                  fontSize: "0.8rem"
                }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    📍 {image.location}
                  </span>
                  <span>📅 {image.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Empty State */}
        {filteredImages.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "80px 20px",
            background: "rgba(255,255,255,0.5)",
            borderRadius: "30px",
            border: "2px dashed #ddd"
          }}>
            <h2 style={{ color: "#999" }}>Coming Soon!</h2>
            <p style={{ color: "#bbb" }}>We are currently documenting new projects in this category.</p>
          </div>
        )}

        {/* Footer Action */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              backgroundColor: "#1a1a1a",
              color: "white",
              padding: "15px 40px",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "700",
              transition: "all 0.3s",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#ff6b35"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#1a1a1a"}
          >
            Scroll to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;