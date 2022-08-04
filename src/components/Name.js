import React from 'react'
import '../App.css';

const Name =({Persons})=> {
  return (
    <div>
        {Persons.map((Person,id)=>(
            <div class="message is-success" >
              <h2 class="message-header">Name - {Person.Name}</h2>
              <h3 class="message-body">Email - {Person.Email}</h3>
              <h3 class="message-body">Phone - {Person.Phone}</h3>
              <h3 class="message-body">Gender - {Person.Gender}</h3>
            </div>
        ))}
        {console.log(Persons)}
    </div>
  )
}
export default Name