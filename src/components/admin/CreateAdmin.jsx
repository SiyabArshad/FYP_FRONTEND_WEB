import * as React from 'react'

export default function CreateAdmin({closebutton}) {
    const[close,setclose]=React.useState(false);
  return (
    <div className='csform'>
        <div className='csformclose'>
        <i onClick={()=>closebutton(setclose(!close))} className="fa-solid fa-xmark"></i>
        </div>
       <div className='cadmincenter'>
                <i className='fa-solid fa-user'></i>
       </div>
        <input type="text" placeholder='username'/>
        <input type="email" placeholder='Email'/>
        <input type="password"  placeholder='Password'/>
        <button>Save Admin</button>
    </div>
  )
}
