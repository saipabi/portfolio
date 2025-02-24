
import { useState } from "react";

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  // Function to handle button click
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center">
        {/* Content Section */}
        <div className="flex-grow-1 p-3">
          <h1 style={{ fontSize: '60px' }}>A Little

About Me</h1>
          <p>👋 Hi, I'm Suriya!

I'm a full-stack developer with a
background in Human Resource
Management. After working as an
HR Recruiter at Everonn Education
(2011-2015), I transitioned into the
world of software development,
driven by my passion for problem-
solving and technology.

I specialize in MERN stack
development, building scalable
web applications.

</p>

          {/* Conditionally show more text */}
          {showMore && (
            <p>
              <h5>Everonn 2011-2015 (HR Recruiter)</h5>
              <b><h6>Talent acquisition:</h6></b> <p>Used job portals, social media, and referrals to attract top candidates.</p>
              <b><h6>Stakeholder collaboration:</h6></b> <p>Worked closely with hiring managers to understand job requirements and deliver the right talent.</p>
              <b><h6>Interview co-ordination: </h6></b><p>Conducted initial HR interviews and scheduled technical rounds with department heads.</p>
              <b><h6>HR Policies:</h6></b> <p>Developed and implemented comprehensive HR policies  and procedures to ensure compliance with laws and regulations.</p>
              <b><h6>Relationship:</h6></b> <p> Managed employee-relations issues, including grievances, disputes, and disciplinary action.</p>
             <h3>Certification & Projects</h3><b><p>Full Stack Developer Program (2024)</p></b>
             
            </p>
            
          )}

          <button className="btn btn-primary" onClick={handleToggle}>
            {showMore ? 'Show Less' : 'Learn More'}
          </button>
        </div>
        
        {/* Image Section */}
        <div className="p-3">
          <img src="/suriya.jpg"alt="Example" className="img-fluid" style={{ maxWidth: '300px' }} />
        </div>
      </div>
    </div>
  );
}
    
   
export default Home;