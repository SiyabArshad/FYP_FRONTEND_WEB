import * as React from 'react'

export default function Feecard({closebutton}) {
 return (
    <div className='scmncont1'>
        <div className='empdp'>
        <img alt='emppic' src={require("../../assets/images/poster.jpg")} className='emppic'/>
        </div>
        <div className='scmnchildcont'>
        <p className='sctitle'>
            Name
        </p>
        <p className='scpara'>
            Farhan Ali
        </p>
        </div>
        <div className='scmnchildcont'>
        <p className='sctitle'>
            Email
        </p>
        <p className='scpara'>
        ghulamfarhan22@gmail.com 
        </p>
        </div>
        <div className='scmnchildcont'>
        <p className='sctitle'>
            Class
        </p>
        <p className='scpara'>
        5th Standard
        </p>
        </div>
        
        <div className='scmnchildcont'>
        <p className='sctitle'>
            Status
        </p>
        <p className='scpara'>
        Paid
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
