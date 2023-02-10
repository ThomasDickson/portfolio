import Home from './pages/home/Home'
import Project from './pages/projects/Project'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/:url" element={<Project />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
