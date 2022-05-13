import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
