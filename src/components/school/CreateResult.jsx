import * as React from 'react'

export default function CreateResult({closebutton}) {
    const[close,setclose]=React.useState(false);
    return (
      <div className='csform'>
          <div className='csformclose'>
          <i onClick={()=>closebutton(setclose(!close))} className="fa-solid fa-xmark"></i>
          </div>
        <div className='cevi'>
                <input style={{display:"none"}} type="file" id='eventimage'/>
                  <label htmlFor='eventimage'>
                  <img className='eventimages' alt='Eventimage' src={require("../../assets/images/poster.jpg")}/>
                </label>
        </div>
        <input type="date"/>
          <input type="text" placeholder='Class Name'/>
          <input type="text" placeholder='Description'/>
          <button>Save Result</button>
      </div>
    )
}
