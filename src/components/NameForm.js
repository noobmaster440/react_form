import { useState } from "react"
import '../App.css';

const NameForm =({addPerson})=> {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Phone, setPhone] = useState('')
    const [Gender, setGender] = useState('')
    const [Agree, setAgree] = useState(false)
    const [Reason, setReason] = useState('')

    const handleSubmit=(event)=>{
      event.preventDefault();
      if(!Name||!Email||!Password||!Phone||!Gender){
          alert('Enter all the fields');
          return
      }
      if(Agree==false){
        alert('You have to agree to the terms and conditions')
        return
      }
      addPerson({Name,Email,Password,Phone,Gender})
      console.log(document.getElementById("wer"))
      document.getElementById("wer").checked="false"
      setName('')
      setEmail('')
      setPassword('')
      setPhone('')
      setReason('')
      // setGender('')
      console.log(Agree)
      // setAgree(false)
      console.log(Agree)

    }


    return (
      <div className="">
        <p className="card-header-title title is-4">
          Register here for Carnival
        </p>
        
      <form onSubmit={handleSubmit}>

        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text"  value={Name} onChange={(event)=>setName(event.target.value)} placeholder="Full Name"></input>
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email"  value={Email} onChange={(event)=>setEmail(event.target.value)} placeholder="abc@ymail.ca">
            </input>
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password"  value={Password} onChange={(event)=>setPassword(event.target.value)} placeholder="Your Password" ></input>
          </div>
        </div>
        
        <div class="field">
          <label class="label">Phone</label>
          <div class="control">
            <input class="input" type="tel"  value={Phone} onChange={(event)=>setPhone(event.target.value)} placeholder="000-000-0000"></input>
          </div>
        </div>

        <div class="field">
          <label class="label">Reason to Join</label>
          <div class="control">
            <textarea class="textarea" value={Reason}  placeholder="I want to join because ..." onChange={(event)=>setReason(event.target.value)}></textarea>
          </div>
        </div>


        <div class="field" onChange={(event)=>setGender(event.target.value)}>
        <label class="label">Gender</label>
          <div class="control">
            <label class="radio" id="wer">
              <input type="radio" name="gender" value="male"></input>
              Male
            </label>
            <label class="radio">
              <input type="radio" name="gender"  value="female"></input>
              Female
            </label>
            <label class="radio">
              <input type="radio" name="gender"  value="other"></input>
              Other
            </label>
          </div>
        </div>
{/* 
        <div class="control" onChange={(event)=>setGender(event.target.value)} >
          Gender
          <input type="radio" id="male" name="gender" value="male"></input>
          <label for="male">Male</label><br></br>
          <input type="radio" id="female" name="gender" value="female"></input>
          <label for="female">Female</label><br></br>
          <input type="radio" id="other" name="gender" value="other"></input>
          <label for="other">Other</label><br></br>
        </div>
     */}
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" className="checkbox" value={Agree}  onChange={(event)=>{setAgree(!Agree) }}></input>
                I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <input class="button is-link" type="submit" value="Submit" />
      </form>
      </div>
    );
  }

export default NameForm