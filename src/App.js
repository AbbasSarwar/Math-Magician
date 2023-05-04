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
        <li><Link exact to="/Math-Magician">Home</Link></li>
        <li><Link exact to="/Math-Magician/Calculator">Calculator</Link></li>
        <li><Link exact to="/Math-Magician/Quotes">Quote</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route exact path="/Math-Magician" element={<Home />} />
      <Route path="/Math-Magician/Calculator" element={<Calculator />} />
      <Route path="/Math-Magician/Quotes" element={<Quotes />} />
    </Routes>
  </>
);

export default App;
