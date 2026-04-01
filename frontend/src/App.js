import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@/App.css';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import WritingPage from './pages/WritingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/writing" element={<WritingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;