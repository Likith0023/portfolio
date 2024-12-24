import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Skills } from "./components/Pages/Skills";
import { Projects } from "./components/Pages/Projects";
import { Contact } from "./components/Pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App dark:bg-gray-900 transition-colors duration-200">
          <NavBar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <ThemeToggle />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
