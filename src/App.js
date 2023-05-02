import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quote';

const App = () => (
  <>
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <li><Link exact to="/">Home</Link></li>
        <li><Link exact to="/Calculator">Calculator</Link></li>
        <li><Link exact to="/Quotes">Quote</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quotes" element={<Quotes />} />
    </Routes>
  </>
);

export default App;
