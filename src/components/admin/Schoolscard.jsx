import * as React from 'react'

export default function Schoolscard() {
  const[deactivateacc,setdeactivateacc]=React.useState(false);
    return (
    <div className='scmncont1'>
        <div className='scmnchildcont'>
        <p className='sctitle'>
            Name
        </p>
        <p className='scpara'>
            Beacon House
        </p>
        </div>
        <div className='scmnchildcont'>
        <p className='sctitle'>
            Address
        </p>
        <p className='scpara'>
        House # 28-D، Primary Branch S.Town، 7th Road 
        </p>
        </div>
        <button style={{backgroundColor:deactivateacc?"#FB0242":"#4285F4"}} onClick={()=>{
            setdeactivateacc(!deactivateacc)
        }}>
            {
                !deactivateacc?
                "Deactivate"
                :
                "Activate"
            }
        </button>
    </div>
  )
}
