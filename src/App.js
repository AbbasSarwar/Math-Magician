import Calculator from './components/Calculator';
import Quotes from './components/Quote';

const App = () => (
  <div>
    <Calculator />
    <div className="quot">
      <div className="box1">
        <h3>Quotes:</h3>
      </div>
      <div className="box2">
        <Quotes />
      </div>
    </div>
  </div>
);

export default App;
