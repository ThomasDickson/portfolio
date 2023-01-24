import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Project from './pages/projects/Project'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/:url" element={<Project />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
