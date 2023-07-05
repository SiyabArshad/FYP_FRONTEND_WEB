import { Button } from "@mui/material";


const GradesData = () => {

  const Results=[{
    name:"Ali zahid",
    rollno:"19-cs-11",
    resulttype:"finals",
    resultfile:""
  },{
    name:"Siyab arshad",
    rollno:"19-cs-28",
    resulttype:"Send-Ups",
    resultfile:""
  },{
    name:"Ali zahid",
    rollno:"19-cs-11",
    resulttype:"finals",
    resultfile:""
  },{
    name:"Siyab arshad",
    rollno:"19-cs-28",
    resulttype:"Send-Ups",
    resultfile:""
  },{
    name:"Ali zahid",
    rollno:"19-cs-11",
    resulttype:"finals",
    resultfile:""
  },{
    name:"Siyab arshad",
    rollno:"19-cs-28",
    resulttype:"Send-Ups",
    resultfile:""
  },{
    name:"Ali zahid",
    rollno:"19-cs-11",
    resulttype:"finals",
    resultfile:""
  },{
    name:"Siyab arshad",
    rollno:"19-cs-28",
    resulttype:"Send-Ups",
    resultfile:""
  },{
    name:"Ali zahid",
    rollno:"19-cs-11",
    resulttype:"finals",
    resultfile:""
  },{
    name:"Siyab arshad",
    rollno:"19-cs-28",
    resulttype:"Send-Ups",
    resultfile:""
  },]

  const DeleteResult=()=>{
    console.log("Result deleted")
  }
  

  return (
    <>
    <div style={{height:"400px",textAlign:"center"}}>
      <h1>Results</h1>
      {
        Results.map((result,index)=>{
          return(
            <div key={index} style={{margin:".6rem 0rem",width:"700px",padding:"0.3rem 1rem",borderRadius:".3rem",background:"white",color:"black"}}>
        <h2>{result.name}({result.rollno})</h2>
        <h5>{result.resulttype} Grade</h5>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Button onClick={DeleteResult} className='btn' type="submit" variant="contained" color="warning">
          Delete
        </Button>
        <Button onClick={DeleteResult} className='btn' type="submit" variant="contained" color="primary">
          Download
        </Button> 
        </div>
      </div>

          )
        })
      }
      
    </div>
    </>
  );
};

export default GradesData;
