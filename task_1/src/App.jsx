import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [warning, setWarning] = useState('');
  
  const plusCounter = () => {
    setCounter(counter + 1);
    setWarning('');
  }

  const minusCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setWarning('');
    } else {
      setWarning('Пожалуйста, измените количество, оно не может быть равно 0');
    }
    
  }
  
  
  return (
    <div className='App'>
      <div>{counter}</div>
      <button onClick={plusCounter}>Прибавить единицу</button>
      <button onClick={minusCounter}>Убавить единицу</button>
      <div>{warning}</div>
    </div>
  )
}

export default App
