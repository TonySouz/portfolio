import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import logo from "./assets/images/logo.svg";
import './index.css';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark text-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <div className="d-flex align-items-center">
            <img src={logo} alt="logo" width="50" className="logo-hover" />
            <Link className="navbar-brand ms-2 fw-bold" to="/">Portfólio</Link>
          </div>

          <ul className="navbar-nav d-flex flex-row gap-2">
            <li className="nav-item">
              <Link className="nav-link text-light nav-hover" to="/"> Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light nav-hover" to="/projects"> Projetos </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light nav-hover" to="/about"> Sobre </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;