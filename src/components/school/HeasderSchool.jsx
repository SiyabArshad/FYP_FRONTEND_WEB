import * as React from 'react'
import SchoolNavigation from './SchoolNavigation'
export default function HeasderSchool() {
  const[isOpenmenu,setisOpenmenu]=React.useState(false)
  
  return (
    <div className='haadminparent' >
    <div className='hadmncont1'>
        <p>Digi School</p>
        <i onClick={()=>setisOpenmenu(!isOpenmenu)} className={isOpenmenu?"fa-solid fa-close": "fa-solid fa-bars"}></i>
    </div>
<SchoolNavigation menustate={isOpenmenu}/>
    </div>
  )
}