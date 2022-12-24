import * as React from 'react'

export default function CreateExpense({closebutton}) {
    const[close,setclose]=React.useState(false);
    return (
      <div className='csform'>
          <div className='csformclose'>
          <i onClick={()=>closebutton(setclose(!close))} className="fa-solid fa-xmark"></i>
          </div>
          <input value="Hamza Aps" disabled type="text" placeholder='Name'/>
          <input type="number"  placeholder='Expense'/>
          <input type="date" />
          <button>Save Expense</button>
      </div>
    )
}
