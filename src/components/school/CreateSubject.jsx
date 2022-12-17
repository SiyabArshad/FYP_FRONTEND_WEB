import React from 'react'
import { useState } from 'react'
import "../../stylesheets/admincomps.scss"

const CreateSubject = ({closeCreateComp}) => {
    const [close,setClose] = useState(false);

  return (
    <div  className='csform'>
          <div className='csformclose'>
          <i onClick={()=>closeCreateComp(setClose(!close))} className="fa-solid fa-xmark"></i>
          </div>
         <div className='cadmincenter'>
                  <input style={{display:"none"}} type="file" id='imageupload'/>
                  <label htmlFor='imageupload'>
                  <img className='upprof' alt='profile' src={require("../../assets/images/poster.jpg")}/>
                </label>             
         </div>
          <input type="text" placeholder='Subject Name'/>
          <input type="text" placeholder="Teacher Name" />  
         <div style={{width:"100%" , display:'flex'} } >
         <label style={{paddingTop:"8px"}} >Picture:</label> 
         <input style={{marginLeft:"10px"}} type="file" />
         </div> 
          <button>Create Subject</button>
      </div>
  )
}

export default CreateSubject