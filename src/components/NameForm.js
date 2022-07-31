import { useState } from "react"
const NameForm =({addPerson})=> {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Phone, setPhone] = useState('')
    const [Gender, setGender] = useState('')


    const handleSubmit=(event)=>{
      event.preventDefault();
      if(!Name||!Email||!Password||!Phone||!Gender){
          alert('Enter all the fields');
          return
      }
      addPerson({Name,Email,Password,Phone,Gender})
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
        <div  onChange={(event)=>setGender(event.target.value)} >
          Gender
          <input type="radio" id="male" name="gender" value="male"></input>
          <label for="male">Male</label><br></br>
          <input type="radio" id="female" name="gender" value="female"></input>
          <label for="female">Female</label><br></br>
          <input type="radio" id="other" name="gender" value="other"></input>
          <label for="other">Other</label><br></br>
        </div>
        <br></br>
        <label>
          Phone Number:
          <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={Phone} onChange={(event)=>setPhone(event.target.value)} />
        </label>
        <br></br>
        

        <input type="submit" value="Submit" />
      </form>
    );
  }
export default NameForm