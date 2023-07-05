import { useState } from "react";
import CreateAssignment from "./CreateAssignment";

const AssignmentData = () => {
    const [createAssignment,setCreateAssignment] = useState(false);
    const [updateAssignment,setUpdateAssignment] = useState(false);
    const assigndetails = [
        {
            name:"assignment1",
            date: "05/07/2023",
            filename: ".pdf",
            time: "11:20",
        },
        {
            name:"assignment2",
            date: "05/07/2023",
            filename: ".pdf",
            time: "11:20",
        },{
            name:"assignment3",
            date: "05/07/2023",
            filename: ".pdf",
            time: "11:20",
        },{
            name:"assignment4",
            date: "05/07/2023",
            time: "11:20",
            filename: ".pdf",
        },
    ]
    
  return (
    <>
      <div style={{height: "450px", width: "800px"}}>
        <div style={{display: "flex",justifyContent:"flex-end"}}>
          <button onClick={()=>setCreateAssignment(true)} className="assignbtn" >Create Assignment </button> 
        </div>
        {
            createAssignment && <CreateAssignment name="Create" opening={createAssignment} closing={setCreateAssignment} />
        }
        <div style={{width:"800px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"20px",color:"black"}}>
        {
            assigndetails.map((assign,index)=>{
                return <div key={index} style={{width:"500px",background:"white",marginBottom:"1rem",borderRadius:"1rem",padding:"5px 10px"}}>
            <h2 style={{textAlign:"center",marginBottom:".5rem"}}>{assign.name}</h2>
            <h5>Submission Date & Time: {assign.date}, {assign.time}</h5> 
            <div style={{display:"flex",justifyContent:"flex-end"}}>
            <button onClick={()=>{setUpdateAssignment(true)} } className="assignbtn" >Update</button>
            </div>          
            </div>
            })   
        }
        {
            updateAssignment && <CreateAssignment name="update" opening={updateAssignment} closing={setUpdateAssignment} />
        }
        
            
        </div>
      </div>
    </>
  );
};

export default AssignmentData;
