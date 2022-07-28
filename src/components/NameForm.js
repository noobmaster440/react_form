import { useState } from "react"
const NameForm =({addName})=> {
  
      const [Name, setName] = useState('')
      const [Email, setEmail] = useState('')
      const [Phone, setPhone] = useState('')
      const [Dob, setDob] = useState('')
      const [Adress, setAdress] = useState('')

    const handleSubmit=(event)=>{
      event.preventDefault();

      if(!Name||!Email||!Phone||!Dob||!Adress){
          alert('Enter all the fields');
          return

      }
      addName({Name,Email,Phone,Dob,Adress})

      setAdress('')
      setDob('')
      setEmail('')
      setName('')
      setPhone('')

      console.log("check")
    }
  
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={Name} onChange={(event)=>setName(event.target.value)} />
          </label>
          <label>
            Email:
            <input type="text" value={Email} onChange={(event)=>setEmail(event.target.value)} />
          </label><label>
            DOB:
            <input type="text" value={Dob} onChange={(event)=>setDob(event.target.value)} />
          </label><label>
            Phone:
            <input type="text" value={Phone} onChange={(event)=>setPhone(event.target.value)} />
          </label>
          <label>
            Adress:
            <input type="text" value={Adress} onChange={(event)=>setAdress(event.target.value)} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      );
  }

  export default NameForm