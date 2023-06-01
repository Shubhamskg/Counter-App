import React, { useEffect, useState ,useRef} from "react";
import './App.css';

function App() {
  let t;
  let p="Time's Up"
  const [time, setTime] = useState();
  const [l, setl] = useState();

function onClick() {
  setTime(t);
  setl("");
}
function click2() {
  window.location.reload();
}
let g,x=0;
function r(){
   g=time-1;
  setTime(g);
  if(x==1)
    clearTimeout(myVar);
  console.log(time);
  if(g<0){
    setTime("");
    setl(t);
    x=1;
    return;
  }
}
let myVar=setTimeout(r, 1000);


return (
  <div>
    <h1>Counter App</h1>
    <input
        type="text"
        id="message"
        name="message"
        onChange={(e) => {e.preventDefault(); t=e.target.value}}
        value={l}
    />     
      <button onClick={onClick} >Start</button>
      <h2>Time: {isNaN(time)?"":time}<span>{time>0?"":"Time out"}</span></h2>
      <button onClick={click2} >Reset</button>
 
  </div>
);
  
}

export default App;