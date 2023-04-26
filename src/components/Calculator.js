import './Calculator.css';
import CalApp from './calApp';

const Calculator = () => (
  <CalApp />
);
Calculator.defaultProps = {
  num: 0,
};
export default Calculator;
