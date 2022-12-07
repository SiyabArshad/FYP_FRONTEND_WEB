import * as React from 'react'
import CreateStudent from '../../components/school/CreateStudent'
import Studentscard from '../../components/school/Studentscard'
import UpdateStudent from '../../components/school/UpdateStudent'
export default function Studentspage() {
  const[csbtn,setcsbtn]=React.useState(false)
  const[csupbtn,setcsupbtn]=React.useState(false)
  const closebuttoncs=(state)=>{
    setcsbtn(state)
  }  
  const closeupbuttoncs=(state)=>{
    setcsupbtn(state)
  }  
  return (
    <div className='adhmmain'>
        <div className='adhmsearch'>
            <input type="text" placeholder='SearchStudent'/>
        </div>
        <div className='createschool'>
            <button onClick={()=>setcsbtn(true)}>
                    Create Students
            </button>
        </div>
        <div className='adhmschools'>
            {
                [1,2,3,4,5,5,6,67,8,89,3,5,6,4,7,89,3].map((item,i)=>(
                    <Studentscard closebutton={closeupbuttoncs} key={i} />
                ))
            }
        </div>
        {
            csbtn?
            <div className='adhmcspc'>
            <CreateStudent closebutton={closebuttoncs}/>
            </div>
            :null
        }
        {
            csupbtn?
            <div className='adhmcspc'>
            <UpdateStudent closebutton={closeupbuttoncs}/>
            </div>
            :null
        }
    </div>
  )
}
