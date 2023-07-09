import { useState } from 'react';
import { TextField, Button, Container, Typography,Grid,CircularProgress } from '@mui/material';
import {useSelector,useDispatch} from "react-redux"
import http from "../utils/http"

const ExpenseForm = () => {
  const {isAuthenticated,currentUser}=useSelector((state)=>state.auth)
  const [bill_paid, setbill_paid] = useState(1000);
  const [salaries_paid, setsalaries_paid] = useState(1000);
  const [stationary_spending, setstationary_spending] = useState(1000);
  const [others, setothers] = useState(1000);
  const [stationary_earning, setstationary_earning] = useState(1000);
  const [fee_received, setfee_received] = useState(1000);
  const [date,setdate]=useState("2023-05-01")
  const [load,setload]=useState(false)
  const handleSubmit = async(event) => {
    setload(true)
    event.preventDefault();
    try{
      await http.post("/createtransaction",{bill_paid,date,salaries_paid,stationary_earning,stationary_spending,others,fee_received},{headers:{
        token:currentUser?.token
      }})
      alert("Added")
    } 
    catch(e){
      console.log(e)
      alert("Failed")
    }
    finally{
      setload(false)
    }
  };

  return (
    <Container className='expenseform' maxWidth="sm" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '16px',height:"70vh",overflowY:"scroll" }}>
      <Typography sx={{color:"#000000"}} variant="h4" align="center" gutterBottom>
        Expense Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Bill Paid"
          fullWidth
          type="number"
          value={bill_paid}
          onChange={(e) => setbill_paid(e.target.value)}
          margin="normal"
          variant="outlined"
          required
          style={{ borderRadius: '8px' }}
        />
      <TextField
          label="Salaries Paid"
          fullWidth
          type="number"
          value={salaries_paid}
          onChange={(e) => setsalaries_paid(e.target.value)}
          margin="normal"
          variant="outlined"
          required
          style={{ borderRadius: '8px' }}
        />
        <TextField
          label="Stationary Spending"
          fullWidth
          type="number"
          value={stationary_spending}
          onChange={(e) => setstationary_spending(e.target.value)}
          margin="normal"
          variant="outlined"
          required
          style={{ borderRadius: '8px' }}
        />
        <TextField
          label="Other Expenses"
          fullWidth
          type="number"
          value={others}
          onChange={(e) => setothers(e.target.value)}
          margin="normal"
          variant="outlined"
          required
          style={{ borderRadius: '8px' }}
        />
        <TextField
          label="Stationary Earning"
          fullWidth
          type="number"
          value={stationary_earning}
          onChange={(e) => setstationary_earning(e.target.value)}
          margin="normal"
          variant="outlined"
          required
          style={{ borderRadius: '8px' }}
        />
        <TextField
          label="Fee Received"
          fullWidth
          type="number"
          value={fee_received}
          onChange={(e) => setfee_received(e.target.value)}
          margin="normal"
          variant="outlined"
          required
          style={{ borderRadius: '8px' }}
        />
           <Grid item xs={12}>
            <input
              style={{
                width: "100%",
                height: "50px",
                borderRadius: ".3rem",
                borderWidth: "0px",
              }}
              type="date"
              value={date}
              onChange={(e)=>setdate(e.target.value)}
              required
            />
            <p>Selected date: {date}</p>
          </Grid>
          {
 !load?
 <Button className='btn' type="submit" variant="contained" color="primary">
          Add Expenses
        </Button>
       :
       <Button disabled={load} className='btn'  variant="contained" color="primary">
          <CircularProgress size={20} sx={{color:"white"}}/>
        </Button>
}
      </form>
    </Container>
  );
};

export default ExpenseForm;
