import * as React from 'react'

export default function Expensecard({closebutton}) {
 return (
    <div className='scmncont1'>
        
        <div className='scmnchildcont'>
        <p className='sctitle'>
            School
        </p>
        <p className='scpara'>
            Hamza Aps
        </p>
        </div>
        <div className='scmnchildcont'>
        <p className='sctitle'>
            Total
        </p>
        <p className='scpara'>
        10200000
        </p>
        </div>
        <div className='scmnchildcont'>
        <p className='sctitle'>
            Month
        </p>
        <p className='scpara'>
        August
        </p>
        </div>
        <button>
            Delete
        </button>
        <button onClick={()=>closebutton(true)} id='empcardupbtns'>
            Update
        </button>
    </div>
  )
}
