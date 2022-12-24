import * as React from 'react'

export default function UpdateFee({closebutton}) {
    const[close,setclose]=React.useState(false);
    return (
      <div className='csform'>
          <div className='csformclose'>
          <i onClick={()=>closebutton(setclose(!close))} className="fa-solid fa-xmark"></i>
          </div>
          
          <div className='feesubdate'>
          <input  type="date"  placeholder='Fee Date'/>
          </div>
        <select  style={{ marginLeft: "10px", width: "100%" }}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <option>{item}</option>
          ))}
        </select>
        <select style={{ marginLeft: "10px", width: "100%" }}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <option>{item}</option>
          ))}
        </select>
        <select style={{ marginLeft: "10px", width: "100%" }}>
          {["paid","not paid"].map((item) => (
            <option>{item}</option>
          ))}
        </select>
        <div className='cevi'>
                <input style={{display:"none"}} type="file" id='eventimage'/>
                  <label htmlFor='eventimage'>
                  <img className='eventimages' alt='Eventimage' src={require("../../assets/images/poster.jpg")}/>
                </label>
        </div>
          <button>Update Fee</button>
      </div>
    )
}
