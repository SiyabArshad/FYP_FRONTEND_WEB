import * as React from 'react'
import Heasderadmin from '../../components/admin/Heasderadmin'
import CreateAdmin from '../../components/admin/CreateAdmin'
import Adminscard from '../../components/admin/AdminsCard'
export default function AdminUsers() {
  const[csbtn,setcsbtn]=React.useState(false)
  const closebuttoncs=(state)=>{
    setcsbtn(state)
  }  
  return (
    <div className='adhmmain'>
        <div className='adhmsearch'>
            <input type="text" placeholder='Searchuser'/>
        </div>
        <div className='createschool'>
            <button onClick={()=>setcsbtn(true)}>
                    Create Admin
            </button>
        </div>
        <div className='adhmschools'>
            {
                [1,2,3,4,5,5,6,67,8,89,3,5,6,4,7,89,3,1,2,3,4,5,5,6,67,8,89,3,5,6,4,7,89,3].map((item,i)=>(
                    <Adminscard key={i}/>
                ))
            }
        </div>
        {
            csbtn?
            <div className='adhmcspc'>
            <CreateAdmin closebutton={closebuttoncs}/>
            </div>
            :null
        }
    </div>
  )
}
