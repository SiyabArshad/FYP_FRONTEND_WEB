import * as React from 'react'

export default function Alert({message,type}) {
    const[closebtn,setclosebtn]=React.useState(false)
    return (
    <div className='alertsec' style={{display:closebtn?"none":"flex",backgroundColor:type?"#0BCF6D":"#FB0242"}}>
        <p>
            {message||"Something went Wrong try again later."}
        </p>
        <i onClick={()=>setclosebtn(true)} className='fas fa-close'></i>
    </div>
  )
}
