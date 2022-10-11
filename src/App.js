import React from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(60);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <div className='Timer'>{counter}</div>
      <button onClick={()=>{setCounter(60)}}>Сброс</button>
    </div>
  );
}

export default App;
