import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/nav/Navbar";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Projects from "./pages/projects/Projects";
import ProjectSingle from "./pages/singleproject/ProjectSingle";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/> } />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/projects" element={<Projects /> } />
        <Route path="/portfolio/single-project" element={<ProjectSingle />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
