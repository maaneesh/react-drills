

import { useCallback, useState } from 'react';
import Arrays from './Arrays';

function App() {

  const [counter, setCounter] =useState(0); 
  const handleIncrement = () =>{
    return counter +=1;

  }
  const handleDecrement = () =>{
    return counter -=1;
    
  }
  return (
    <div className="App">
     <h1>React Drills</h1>

     {/* {  <Arrays />} */}
     {/* {<Objects/>} */}

     
    <h1>{counter}</h1>
     <button onClick={() => {setCounter(counter+1)} }>+</button>
     <button onClick={() => { setCounter(counter-1)}}>-</button>
     <button onClick={() => { setCounter(0)}}>Reset</button>

    </div>
  );
}

export default App;
