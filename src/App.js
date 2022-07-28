import './App.css';
import NameForm from './components/NameForm';
import { Names } from './components/Names';
import {Name} from './components/Name'
import { useState } from 'react';
function App() {

  const [Names,setNames]=useState([])

  const addName=(Name)=>{
    const id = Math.floor(Math.random()*100)+1
    const newname ={id,...Name}
    setNames([...Names,newname])
  }

  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <NameForm addName={addName}/>
      <Names Names={Names}/>
    </div>
  );
}

export default App;
