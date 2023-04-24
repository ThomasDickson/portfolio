import Home from './pages/home/Home'
import Project from './pages/projects/Project'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/:url" element={<Project />}/>
        </Routes>
        {/*<Footer />*/}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
