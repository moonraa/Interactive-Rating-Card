import './App.css';
import { useState } from 'react';
import Active from './components/Active'
import Submitted from './components/Submitted';


function App() {
  const [second, setSecond] = useState(true)
  const [rating, setRating] = useState(0)

  function getRating(event, number){
    setRating(oldNumber => number)
  }

  function getSubmit(){
    if(rating !== 0){
      setSecond(false)
    }
  }
  
  return (
    <div className="App">
      {second ? <Active getRating={getRating} getSubmit={getSubmit}/> : <Submitted rating={rating}/>}
    </div>
  );
}

export default App;
