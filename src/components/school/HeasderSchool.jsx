import * as React from 'react'
import SchoolNavigation from './SchoolNavigation'
<<<<<<< HEAD
=======


>>>>>>> c9895e3 (ali work week 4)
export default function HeasderSchool() {
  const[isOpenmenu,setisOpenmenu]=React.useState(false)
  
  return (
    <div className='haadminparent' >
    <div className='hadmncont1'>
        <p>Digi School</p>
        <i onClick={()=>setisOpenmenu(!isOpenmenu)} className={isOpenmenu?"fa-solid fa-close": "fa-solid fa-bars"}></i>
    </div>
<<<<<<< HEAD
<SchoolNavigation menustate={isOpenmenu}/>
=======
    <SchoolNavigation menustate={isOpenmenu}/>
>>>>>>> c9895e3 (ali work week 4)
    </div>
  )
}
