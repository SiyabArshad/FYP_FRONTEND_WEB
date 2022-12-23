import * as React from 'react'

export default function CreateEvents({closebutton}) {
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

          <input type="text" placeholder='Event Title'/>
          <input type="text" placeholder='Event Description'/>
          <button>Save Event</button>
      </div>
    )
}
