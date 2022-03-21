import React from 'react'

function profileCards({writer}) {
  return (
    <div className='card'>
     <img src= {`images/${writer.avatar}.png`}
     height="300px" width="300px" alt={writer.img}/>

    <div className='textGroup'>
    <h3>{writer.name}</h3>
    <p>{writer.email}</p>
    <P>{writer.phone}</P>

    <button className='actionBtn'>read Bio</button>
     


    </div>
    </div>
  )
}

export default profileCards