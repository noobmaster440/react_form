import './App.css';
import NameForm from './components/NameForm';
import Name from './components/Name';
import { useState } from 'react';
function App() {
  const [Persons,setPersons]=useState([])

  const addPerson=(Person)=>{
    const id = Math.floor(Math.random()*100)+1
    const newperson ={id,...Person}
    setPersons([...Persons,newperson])
  }

  return (
    <div className="App">
      <NameForm addPerson={addPerson}/>
      <Name Persons={Persons}/>
    </div>
  );
}

export default App;
