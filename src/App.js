import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/portfolio" element={<Home />}/>
        <Route exact path="/portfolio/about" element={<About />}/>
        <Route exact path="/portfolio/projects" element={<Projects />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
