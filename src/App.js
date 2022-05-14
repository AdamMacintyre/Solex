import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home'
import Products from './pages/Products'
import Investors from './pages/Investors'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/investors' element={<Investors />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
