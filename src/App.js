import React, {useState,useEffect} from "react";
import './App.css';

function App() {
  const [result,setResult] = useState("");
  
  const handleClick = (e) =>{
    setResult(result.concat(e.target.name));
  }

  const handleKey = (e) =>{
    console.log(e.key);
    if(e.key==='Enter')
    {
      try
      {
        setResult(eval(result).toString());
      }
      catch(err)
      {
        setResult("Error");
      }  
    }
    else if(e.key==="Backspace")
    {
      setResult(result.slice(0, result.length-1));   
    }
    else if(e.key==="." || e.key==="0" || e.key==="1" || e.key==="2" || e.key==="3" || e.key==="4" ||e.key==="5" || e.key==="6" || e.key==="7" || e.key==="8" || e.key==="9" || e.key==="+" || e.key==="-" || e.key==="*" || e.key==="/")
    {
      setResult(result.concat(e.key));
    }
  }

  const clear = () =>{
    setResult("");
  }

  const backspace = () =>{
    setResult(result.slice(0, result.length-1));
  }

  const calculate = () =>{
    try{
      setResult(eval(result).toString());
    }
    catch(err)
    {
      setResult("Error");
    }
  }

  return (
    <div className="content">
      <h1>Calculator</h1>
      <div className="container">
        <form>
          <input   onKeyDown={handleKey} type="text" value={result}/>
        </form>
        <div className="keypad">
          <button onClick={clear} id="clear">Clear</button>
          <button  onClick={backspace} id="backspace">C</button>
          <button name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button onClick={calculate} className="highlight" id="result">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
