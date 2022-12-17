import * as React from 'react'
import {Link} from "react-router-dom"
export default function SchoolNavigation({menustate}) {
    const menuitems=[
        {
            name:"Home",
            url:"/"
        },
        {
            name:"Employees",
            url:"/employees"
        }
        ,
        {
            name:"Students",
            url:"/students"
        },
        {
            name:"Events",
            url:"/events"
        },
        {
            name:"Classes",
<<<<<<< HEAD
            url:"/"
=======
            url:"/classes"
>>>>>>> c9895e3 (ali work week 4)
        },
        {
            name:"Fees",
            url:"/"
        },
        {
            name:"Results",
            url:"/"
        },
        {
            name:"Expenses",
            url:"/"
        },
        {
            name:"Logout",
            url:"/"
        },
]
  const[currmenu,setcurrmenu]=React.useState()
    return (
    <div style={{transform:menustate?"translateX(0)":"translateX(100%)"}} className='adminnavdiv1'>
        <ul>
            {
                menuitems.map((item,i)=>(
             <Link to={item.url} className='link'>
            <li key={i} onClick={()=>setcurrmenu(i)} style={{backgroundColor:i===currmenu&&"#0BCF6D"}}>
                <span>{item.name}</span>
            </li>
             </Link>
                ))
            }
        </ul>
    </div>
  )
}
