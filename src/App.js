import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState(0)
  const isOperator = (val) => {
    return val === '+' || val === '-' || val === '*' || val === '/'
  }
  const handleChange = (val) => {
    if (val === '=' && value === '') {
      setResult('Error')
      // console.log('Error')
      return;
    }
    if ((isOperator(val) || val === '=') && (isOperator(value.charAt(value.length - 1)))) {
      return;
    }
    if (val === '=') {
      setResult(eval(value))
      // try {
      // } catch (err) {
      //   setResult('Error')
      //   console.error(err)
      // }
      return
    }
    if (val === 'C') {
      setValue('')
      setResult('')
      return;
    }
    // if (Number(value) === 0) {
    //   setValue(val)
    //   return
    // }
    setValue(prev => prev + val)
  }
  return (
    <div className="App">
      <h2>React Calculator</h2>
      <input type='text' value={value} />

      {result !== 0 && <div className='display'>{result}</div>}
      <div className='table'>

        <div className='row'>
          <button onClick={() => handleChange('7')} id="7">7</button>
          <button onClick={() => handleChange('8')} id="8">8</button>
          <button onClick={() => handleChange('9')} id="9">9</button>
          <button onClick={() => handleChange('+')} id="+">+</button>
        </div>
        <div className='row'>
          <button onClick={() => handleChange('4')} id="4">4</button>
          <button onClick={() => handleChange('5')} id="5">5</button>
          <button onClick={() => handleChange('6')} id="6">6</button>
          <button onClick={() => handleChange('-')} id="-">-</button>
        </div>
        <div className='row'>
          <button onClick={() => handleChange('1')} id="1">1</button>
          <button onClick={() => handleChange('2')} id="2">2</button>
          <button onClick={() => handleChange('3')} id="3">3</button>
          <button onClick={() => handleChange('*')} id="*">*</button>
        </div>
        <div className='row'>
          <button onClick={() => handleChange('C')} id="C">C</button>
          <button onClick={() => handleChange('0')} id="0">0</button>
          <button onClick={() => handleChange('=')} id="submit">=</button>
          <button onClick={() => handleChange('/')} id="/">/</button>
        </div>


      </div>
    </div>
  );
}

export default App;


