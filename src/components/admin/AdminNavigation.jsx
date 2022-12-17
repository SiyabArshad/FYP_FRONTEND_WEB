import * as React from 'react'
import {Link} from "react-router-dom"
export default function AdminNavigation({menustate}) {
    
  const[currmenu,setcurrmenu]=React.useState()
    return (
    <div style={{transform:menustate?"translateX(0)":"translateX(100%)"}} className='adminnavdiv1'>
        <ul>
            <Link to="/admin/schools" className='link'>
            <li onClick={()=>setcurrmenu("schools")} style={{backgroundColor:currmenu==="schools"&&"#0BCF6D"}}>
            <i class="fa-solid fa-school"></i>
                <span>Schools</span>
            </li>
            </Link>
            <Link to="/admin/admins" className='link'>
            <li onClick={()=>setcurrmenu("admins")} style={{backgroundColor:currmenu==="admins"&&"#0BCF6D"}}>
            <i class="fa-solid fa-users"></i>
                <span>Admins</span>
            </li>
            </Link>
            <li onClick={()=>setcurrmenu("logout")} style={{backgroundColor:currmenu==="logout"&&"#0BCF6D"}}>
            <i class="fa-solid fa-right-from-bracket"></i>
                <span>Logout</span>
            </li>
        </ul>
    </div>
  )
}
