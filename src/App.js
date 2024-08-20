import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [name,setName] = useState("")
  const [age,setAge] = useState("")

  function collectName(e)
  {
    setName(e.target.value)
  }

  function collectAge(e)
  {
    setAge(e.target.value)
  }
  function validatedetails(e)
  {
    e.preventDefault()
    setAge("")
    setName("")
  }
  return (
    <div className="App" style={{marginTop: "50px"}}>

     <form method="POST" onSubmit={validatedetails}>
      <label>Name:</label>
      <input type="text" onChange={collectName} value={name} /><br/>
      <label>Age:</label>
      <input type="number" onChange={collectAge} value={age}/><br/>
    

     <div>
      {name && age ? <button>Submit</button> : <h4>Please fill the required details</h4>}
     </div>
     </form>
    </div>
  );
}

export default App;
