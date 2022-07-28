import React from 'react'
const Name =({Names})=> {
  return (
    <div>
        {Names.map((Name,id)=>(
            <h3>{Name.Name}</h3>
        ))}
        {console.log(Names)}
    </div>
  )
}
export default Name