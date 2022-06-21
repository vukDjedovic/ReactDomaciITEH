import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './page/Pocetna';
import Rezervacija from './page/Rezervacija';


function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/" element={<Pocetna />} />
            <Route path="/rezervacija" element={<Rezervacija />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
