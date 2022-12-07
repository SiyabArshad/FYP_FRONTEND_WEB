import * as React from 'react'
import Schoolscard from '../../components/admin/Schoolscard'
import Createschool from '../../components/admin/Createschool'
export default function Homeadmin() {
  const[csbtn,setcsbtn]=React.useState(false)
  const closebuttoncs=(state)=>{
    setcsbtn(state)
  }  
  return (
    <div className='adhmmain'>
        <div className='adhmsearch'>
            <input type="text" placeholder='Searchschool'/>
        </div>
        <div className='createschool'>
            <button onClick={()=>setcsbtn(true)}>
                    Create School
            </button>
        </div>
        <div className='adhmschools'>
            {
                [1,2,3,4,5,5,6,67,8,89,3,5,6,4,7,89,3].map((item,i)=>(
                    <Schoolscard key={i}/>
                ))
            }
        </div>
        {
            csbtn?
            <div className='adhmcspc'>
            <Createschool closebutton={closebuttoncs}/>
            </div>
            :null
        }
    </div>
  )
}
