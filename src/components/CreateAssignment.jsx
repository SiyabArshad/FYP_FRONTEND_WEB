import  { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { Grid } from '@mui/material';


const ModalContainer = styled('div')({
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const ModalTitle = styled('h2')({
  marginBottom: '20px',
});

const InputField = styled(TextField)({
  marginBottom: '16px',
});

const ButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '16px',
});

const CreateAssignment = ({name,opening,closing}) => {
  const [open, setOpen] = useState(opening);
  const [assignmentName, setAssignmentName] = useState('');
  const [file, setFile] = useState(null);
  const [deadlineDate, setDeadlineDate] = useState(null);
  const [deadlineTime, setDeadlineTime] = useState(null);

  

  const handleClose = () => {
    setOpen(false);
    closing(false);
  };

  const handleAssignmentNameChange = (event) => {
    setAssignmentName(event.target.value);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
 
  const handleDeadlineDateChange = (event) => {
    const selectedDate = event.target.value;
    const formattedDate = new Date(selectedDate).toISOString().split('T')[0];
    setDeadlineDate(formattedDate);
  };
  const handleDeadlineTimeChange = (event) => {
    const selectedTime = event.target.value;
    const formattedTime = selectedTime.slice(0, 5); // Extract the first 5 characters (HH:mm)
    setDeadlineTime(formattedTime);
  };

  

  const handleUpdate = () => {
    // Perform update logic here
    console.log('Assignment Name:', assignmentName);
    console.log('File:', file);
    console.log('Deadline Date:', deadlineDate);
    console.log('Deadline Time:', deadlineTime);
    

    handleClose();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ModalTitle>{name} Assignment</ModalTitle>
          <InputField
            label="Assignment Name"
            value={assignmentName}
            onChange={handleAssignmentNameChange}
            variant="outlined"
            fullWidth
          />
          <InputField
            type="file" 
            accept=".pdf"
            onChange={handleFileUpload}
            variant="outlined"
            fullWidth
          />
          <Grid style={{display:"flex",gap:"10px"}} item xs={12}>
            <input
              style={{
                width: "50%",
                height: "50px",
                borderRadius: ".3rem",
                borderWidth: "1px",
                padding:"0px 10px",
              }}
              type="date"
              value={deadlineDate}
              onChange={handleDeadlineDateChange}
              required
            />
            <input
              style={{
                width: "50%",
                height: "50px",
                borderRadius: ".3rem",
                padding:"0px 10px",
                borderWidth: "1px",
              }}
              type="time"
              value={deadlineTime}
              onChange={handleDeadlineTimeChange}
              required
            />
          </Grid>
          
          <ButtonContainer>
            <Button style={{background:"#285E4F"}} variant="contained" onClick={handleUpdate}>
              {name}
            </Button>
            <Button style={{background:"#285E4F"}} variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </ButtonContainer>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default CreateAssignment;
