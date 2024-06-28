import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [prevValue, setPrevValue] = useState<string>("");
  const [operator, setOperator] = useState<string>("");

  const handleNumberClick = (number: string) => {
    if (displayValue === '0') {
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleOperatorClick = (op: string) => {
    setPrevValue(displayValue);
    setDisplayValue(String(operator));
    setOperator(op);
  };

  const handleEqualClick = () => {
    if (prevValue && operator) {
      const current = parseFloat(displayValue);
      const previous = parseFloat(prevValue);

      let result;
      switch (operator) {
        case '+':
          result = previous + current;
          break;
        case '-':
          result = previous - current;
          break;
        case '*':
          result = previous * current;
          break;
        case '/':
          result = previous / current;
          break;
        default:
          return;
      }
      setDisplayValue(result.toString());
      setPrevValue("");
      setOperator("");
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setPrevValue("");
    setOperator("");
  };

  return (
    <div className="calculator">
      <input type="text" value={displayValue} readOnly className="calculator-display" />
      <div className="calculator-buttons">
        <div className="number-buttons">
          {[...Array(10)].map((_, i) => (
            <button key={i} onClick={() => handleNumberClick(i.toString())}>
              {i}
            </button>
          ))}
        </div>
        <div className="operator-buttons">
          {['+', '-', '*', '/'].map((op) => (
            <button key={op} onClick={() => handleOperatorClick(op)}>
              {op}
            </button>
          ))}
          <button onClick={handleEqualClick}>=</button>
          <button onClick={handleClearClick}>C</button>
        </div>
      </div>
    </div>
  );
};

export default App;
