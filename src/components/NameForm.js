import { useState } from "react"
const NameForm =({addPerson})=> {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Phone, setPhone] = useState('')

    const handleSubmit=(event)=>{
      event.preventDefault();
      if(!Name||!Email||!Password||!Phone){
          alert('Enter all the fields');
          return
      }
      addPerson({Name,Email,Password,Phone})
      setName('')
      setEmail('')
      setPassword('')
      setPhone('')
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={Name} onChange={(event)=>setName(event.target.value)} />
        </label>
        <br></br>
        <label>
          Email:
          <input type="email" value={Email} onChange={(event)=>setEmail(event.target.value)} />
        </label>
        <br></br>
        <label>
          Password:
          <input type="password" value={Password} onChange={(event)=>setPassword(event.target.value)} />
        </label>
        <br></br>
        {/* <label>
          Gender:
          <input type="radio" value={Name} onChange={(event)=>setName(event.target.value)} />
        </label> */}
        <br></br>
        <label>
          Phone Number:
          <input type="text" value={Phone} onChange={(event)=>setPhone(event.target.value)} />
        </label>
        <br></br>
        

        <input type="submit" value="Submit" />
      </form>
    );
  }
export default NameForm