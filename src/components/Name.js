import React from 'react'
const Name =({Persons})=> {
  return (
    <div>
        {Persons.map((Person,id)=>(
            <div>
              <h2>{Person.Name}</h2>
              <h3>{Person.Email}</h3>
              <h4>{Person.Phone}</h4>
              <h4>{Person.Gender}</h4>
            </div>
        ))}
        {console.log(Persons)}
    </div>
  )
}
export default Name