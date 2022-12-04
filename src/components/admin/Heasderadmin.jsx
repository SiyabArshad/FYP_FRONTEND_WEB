import * as React from 'react'
import AdminNavigation from './AdminNavigation'
export default function Heasderadmin() {
  const[isOpenmenu,setisOpenmenu]=React.useState(false)
  
  return (
    <div className='haadminparent' >
    <div className='hadmncont1'>
        <p>Digi School</p>
        <i onClick={()=>setisOpenmenu(!isOpenmenu)} className={isOpenmenu?"fa-solid fa-close": "fa-solid fa-bars"}></i>
    </div>
<AdminNavigation menustate={isOpenmenu}/>
    </div>
  )
}
