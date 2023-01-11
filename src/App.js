import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/projects" element={<Projects />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
