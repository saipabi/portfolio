import './Home.css'
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
          <h1 style={{ fontSize: '50px',}}>A Little

About Me</h1>
          <p>👋 Hi, I'm Suriya!

          I'm a full-stack developer with a background in Human Resource Management. After working as an HR Recruiter at Everonn Education, I transitioned into the world of software development, driven by my passion for problem-solving and technology.

I specialize in MERN stack development, building scalable web applications.
</p>

     

          {/* <button className="btn btn-primary" onClick={handleToggle}>
            {showMore ? 'Show Less' : 'Learn More'}
          </button> */}
        </div>
        
        {/* Image Section */}
        <div className="p-3">
          <img src="/suriya.jpg"alt="Example" className="img-fluid" style={{ maxWidth: '200px' }} />
        </div>
      </div>
    </div>
  );
}
    
   
export default Home;