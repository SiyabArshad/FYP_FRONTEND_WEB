import { Link } from "react-router-dom"

function Class() {
  const classes= [ {id:"class 1",name:"CLASS 1"},{id:"class 2",name:"CLASS 2"},{id:"class 3",name:"CLASS 3"},{id:"class 4",name:"CLASS 4"},{id:"class 5",name:"CLASS 5"},{id:"class 6",name:"CLASS 6"},{id:"class 7",name:"CLASS 7"},];
  return (
    <>
    <div className="cs-sect" >    
    {
      classes.map((data,index)=>{
        return <Link to={"/classes/"+data.id} key={index} className="classsection" >
      <p>{data.name}</p>
    </Link>
      })
    }
    </div>
   
    </>
  )
}

export default Class
