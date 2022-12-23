import * as React from 'react'

export default function CreateEmployee({closebutton}) {
    const[close,setclose]=React.useState(false);
    return (
      <div className='csform'>
          <div className='csformclose'>
          <i onClick={()=>closebutton(setclose(!close))} className="fa-solid fa-xmark"></i>
          </div>
         <div className='cadmincenter'>
                  <input style={{display:"none"}} type="file" id='imageupload'/>
                  <label htmlFor='imageupload'>
                  <img className='upprof' alt='profile' src={require("../../assets/images/poster.jpg")}/>
                </label>             
         </div>
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email'/>
          <input type="text" placeholder='Address'/>
          <input type="number" placeholder='Contact no'/>
          <select >
            <option>
                Male
            </option>
            <option>
                Female
            </option>
          </select>
          <select>
            <option>
                Teacher
            </option>
            <option>
                Staff
            </option>
          </select>
          <input type="radio" id='forFiler'/>
          <label htmlFor='forFiler' className='filercheck'>
            
          </label>
          <input type="number" placeholder='Pay'/>
          <input type="password"  placeholder='Password'/>
          <button>Save Employee</button>
      </div>
    )
}
