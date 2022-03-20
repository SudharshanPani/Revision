import React, { useState } from "react";
// import './style.css'

function App() {
  const [num, setNum] = useState(0)

  return (
    <div className="App">
      <h1 className="text-center" >Counter application</h1>
      <div className=" d-flex justify-content-center align-items-center">

        <button className="btn btn-primary" onClick={() => setNum(num + 1)}>+</button>
        <p className="m-1" >{num}</p>
        <button className="btn btn-primary" onClick={() => setNum(num - 1)}>-</button>

      </div>

    </div>
  );
}

export default App;
