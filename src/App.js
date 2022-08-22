import React ,{useState, useEffect} from 'react'
import ReactDOM from "react-dom/client";
import UserInputs from './Component/UserInputs';
import UserRecords from './Component/UserRecords';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { flexbox } from '@mui/system';
import { zIndex } from '@mui/system';

const App = () => {
  const [recordedThoughts, setRecordedThoughts] = useState([]);
  const [recordedTasks, setRecordedTasks] = useState([]);

  // Value is Added here
  const onThoughtsSubmitChange = (e) =>{
    setRecordedThoughts([...recordedThoughts, e]);
  };

  const onTaskSubmitChange = (e) =>{
    setRecordedTasks([...recordedTasks, e]);
  };

  return (
    <Box
     display="flex"
     alignItems= "baseline"
     justifyContent="space-evenly"
    >
            <Box
            zIndex="modal"
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            minHeight="200px"
            maxWidth="sm"
            >
            <Card variant="outlined" justifyContent="center" alignItems="center">
                <Container components="div" justifyContent="center">
                    <UserInputs  onSubmitChange={onThoughtsSubmitChange} title="Thoughts"/>
                    <UserRecords record={recordedThoughts}/>
                </Container>
            </Card>

            </Box>
            
            <Box
            zIndex="modal"
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            minHeight="200px"
            maxWidth="sm"
            >
            <Card variant="outlined" justifyContent="center" alignItems="center">
                <Container components="div" justifyContent="center">
                    <UserInputs  onSubmitChange={onTaskSubmitChange} title="Tasks"/>
                    <UserRecords record={recordedTasks}/>
                </Container>
            </Card>

            </Box>
    </Box>
  )
}

export default App;