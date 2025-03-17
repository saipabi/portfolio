
import MyNavbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import Work from "./components/Work";
import Exper from "./components/Exper";
// import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <MyNavbar />
      <div className="moving-text">
suriya r
</div>

<div className="text-center" id ="text" >
Full Stack Developer
</div>
<div> <section id="home"><Home /></section></div>

<div>
<section id="education"><Education /></section></div>
 <section id="experience"> <Skills/> </section>
 <section id="exper"> <Exper/> </section> 



 <section id="work"> <Work/> </section> 




    </div>
  );
}

export default App;

