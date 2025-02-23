
import { FaLinkedin, FaGithub} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mt-10">
      <h2>Contact</h2>
      <p>Email: yourname@example.com</p>
      <p>
        LinkedIn: <a href="https://linkedin.com/in/yourprofile"><FaLinkedin /> LinkedIn</a>
      </p>
      <p>
        GitHub: <a href="https://github.com/yourgithub"><FaGithub /> GitHub</a>
      </p>
    </div>
  );
};

export default Contact;
