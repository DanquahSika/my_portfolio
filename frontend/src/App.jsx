import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Blog from "./pages/blog/Blog";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
