import './Calculator.css';
import CalApp from './calApp';

const Calculator = () => (
  <div className="Main">
    <h3>Let&apos;s Do Some Math!</h3>
    <CalApp />
  </div>
);
Calculator.defaultProps = {
  num: 0,
};
export default Calculator;
