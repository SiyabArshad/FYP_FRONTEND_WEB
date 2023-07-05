import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const ExpenseForm = () => {
  const [examExpense, setExamExpense] = useState('');
  const [sportsExpense, setSportsExpense] = useState('');
  const [stationaryExpense, setStationaryExpense] = useState('');
  const [othersExpense, setOthersExpense] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your form submission logic here
    // You can access the form data (examExpense, sportsExpense, stationaryExpense, othersExpense)
    // and send it to an API endpoint or process it further

    // Reset the form fields
    setExamExpense('');
    setSportsExpense('');
    setStationaryExpense('');
    setOthersExpense('');
  };

  return (
    <Container className='expenseform' maxWidth="sm" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '16px' }}>
      <Typography sx={{color:"#000000"}} variant="h4" align="center" gutterBottom>
        Expense Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Exam Expense"
          fullWidth
          type="number"
          value={examExpense}
          onChange={(e) => setExamExpense(e.target.value)}
          margin="normal"
          variant="outlined"
          required
          style={{ borderRadius: '8px' }}
        />
        <TextField
          label="Sports Expense"
          fullWidth
          type="number"
          value={sportsExpense}
          onChange={(e) => setSportsExpense(e.target.value)}
          margin="normal"
          variant="outlined"
          required
          style={{ borderRadius: '8px' }}
        />
        <TextField
          label="Stationary Expense"
          fullWidth
          type="number"
          value={stationaryExpense}
          onChange={(e) => setStationaryExpense(e.target.value)}
          margin="normal"
          variant="outlined"
          required
          style={{ borderRadius: '8px' }}
        />
        <TextField
          label="Others Expense"
          fullWidth
          type="number"
          value={othersExpense}
          onChange={(e) => setOthersExpense(e.target.value)}
          margin="normal"
          variant="outlined"
          required
          style={{ borderRadius: '8px' }}
        />
        <Button className='btn' type="submit" variant="contained" color="primary">
          Add Expenses
        </Button>
      </form>
    </Container>
  );
};

export default ExpenseForm;
