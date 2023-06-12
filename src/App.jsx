import { Route, Router, Routes } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/pages/About';
import Service from './containers/pages/Service';
import Jobs from './containers/pages/Jobs';
import Blog from './containers/pages/Blog';
import Contact from './containers/pages/Contact';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Service />} />
      <Route path='/works' element={<Jobs />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>

  )
}

export default App