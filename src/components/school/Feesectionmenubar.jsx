import * as React from 'react'

export default function Feesectionmenubar() {
    const[currop,setcurrop]=React.useState(-1)
  return (
    <div className='fsmb'>
        <input type="date" className='feefilterdate'/>
        <div onClick={()=>setcurrop(1)} style={{background:currop===1&&"#4285F4"}} className='fsmbch1'>
            <p>Paid</p>
        </div>
        <div onClick={()=>setcurrop(2)} className='fsmbch1' style={{background:currop===2&&"#4285F4"}}>
            <p>unPaid</p>
        </div>
        
    </div>
  )
}
