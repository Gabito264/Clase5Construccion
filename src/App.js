import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import{BrowserRouter as Router,Routes, Route,Link} from "react-router-dom";
import Solicitud from "./Pages/Solicitud.js";
import About from "./Pages/About.js";
import Cursos from "./Pages/Cursos.js";
import Menu from "./Components/Menu.js";

function App() {
  return (
    <div className="App">
      <Router>
          

            <Menu/>
          {/*
          <nav>
            <Link to="/">Home</Link>
            <Link to="/Cursos">Cursos</Link>
            <Link to="/About">About</Link>
          </nav>
          */}

        <Routes>
          <Route path="/" element={<Solicitud/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </Router>

          

    </div>
  );
}

export default App;
