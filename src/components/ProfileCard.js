import React from 'react'
import {useState} from "react"

function ProfileCard({writer}) {
  const[showBio, setShowBio] = useState(false);
   
  const handleClick = (bioData) =>{
      setShowBio(!showBio);
  };

  return (

    <div className='card'>
     <div>
     {showBio ? (
       <div className='biowap'>
        <p className='bio'>{writer.bio}</p>
       </div>  
       ):(

     <img src= {`images/${writer.avatar}.png`}
     height="300px" width="300px" alt={writer.img}/>
       )}
       </div>
    <div className='textGroup'>
    <h3>{writer.name}</h3>
    <p>{writer.email}</p>
    <p>{writer.phone}</p>
    <button className='actionBtn' onClick={()=>handleClick(writer.bio)}>read Bio</button>
    
    </div>
    </div>
  )
}

export default ProfileCard