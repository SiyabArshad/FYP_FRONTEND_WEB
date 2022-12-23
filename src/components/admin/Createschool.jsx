import * as React from 'react'

export default function Createschool({closebutton}) {
    const[close,setclose]=React.useState(false);
  return (
    <div className='csform'>
        <div className='csformclose'>
        <i onClick={()=>closebutton(setclose(!close))} class="fa-solid fa-xmark"></i>
        </div>
        <input type="text" placeholder='Schoolname'/>
        <input type="text" placeholder='Schooladdress'/>
        <input type="email" placeholder='Email'/>
        <input type="password"  placeholder='Password'/>
        <button>Save School</button>
    </div>
  )
}
