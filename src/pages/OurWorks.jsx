import React from 'react';

const OurWorks = () => {
  const projects = [
    {
      title: "Project Education Light",
      description: "We've established 25 learning centers in rural areas, providing education to 5,000+ children who previously had no access to schooling. Our program includes digital literacy, basic education, and vocational training."
    },
    {
      title: "Health for All Initiative",
      description: "Mobile health clinics reaching 100+ villages, providing free check-ups, medicines, and health awareness programs. We've conducted 200+ health camps serving 15,000+ patients."
    },
    {
      title: "Green Earth Campaign",
      description: "Planted 50,000 trees across deforested areas, conducted environmental awareness programs in schools, and established community gardens promoting sustainable agriculture."
    }
  ];

  return (
    <div className="container">
      <h1>Our Projects</h1>
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div style={{ marginTop: '1rem' }}>
              <strong>Impact:</strong> Making a lasting difference
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;