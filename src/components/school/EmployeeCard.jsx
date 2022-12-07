import * as React from 'react'

export default function EmployeeCard({closebutton}) {
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
            Address
        </p>
        <p className='scpara'>
        House Bf 28E Gulberg Greens Islamabad Pakistan
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
