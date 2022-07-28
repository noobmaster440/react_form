import { useState } from "react"
const NameForm =({addName})=> {
    const [Name, setName] = useState('')
    const handleSubmit=(event)=>{
      event.preventDefault();
      if(!Name){
          alert('Enter all the fields');
          return
      }
      addName({Name})
      setName('')
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={Name} onChange={(event)=>setName(event.target.value)} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
export default NameForm