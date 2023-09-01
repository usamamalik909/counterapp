import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [count,setCount] = useState(0);
  const  increment =() => {
    setCount(count+1);
  }
  const  decrement =() => {
    setCount(count-1); 
  }
  const  reset =() => {
    setCount( 0);
  }
  return (
    
    <div className="container my5 text-center 
    ">
      <div ><h1>Counter App in React JS</h1>

        <h2>The count is {count}</h2>
        <button className="btn btn-success mx-3" onClick={increment}>
                        Increment
        </button> 
        <button className="btn btn-dark mx-3" onClick={decrement} disabled = {count===0}>Decrement</button>
        <button className="btn btn-warning mx-3" onClick= {reset} disabled = {count ===0}>Reset</button>
      </div>
    </div>
  );
}

export default App;
