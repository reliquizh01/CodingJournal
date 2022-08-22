import React, {useState, useEffect, useRef} from 'react';
import App from '../App';
import UserInput from './UserInput.css';
import UserRecords from './UserRecords';
import DatePicker from 'react-datepicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import "react-datepicker/dist/react-datepicker.css";
import { Container } from '@mui/system';
import { Button, CardActions, CardContent, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const UserInputs = (props) =>{
    
    const [date, setDate] =  useState(new Date());
    const textRef = useRef();
    const titleRef = useRef();

    
    const onFormSubmit = (e) =>{
        e.preventDefault();
        const diaryDetails = {
            date: '',
            title: '',
            text: ''
        }

        diaryDetails.date = new Date(date).toISOString().split('T');
        diaryDetails.text = textRef.current.value;
        diaryDetails.title = titleRef.current.value;

        props.onSubmitChange(diaryDetails);

        textRef.current.value = '';
        titleRef.current.value = '';
    }

    return(
        <form onSubmit={onFormSubmit}>
            <div>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="200px"
            maxWidth="sm"
            >
                    <Card variant="outlined" components="div">
                        <CardContent>
                        <Typography variant="h5" components="div">
                            Your {props.title} For Today
                        </Typography>
                        <Typography style={{justifyContent: 'center'}} components="div">
                            Today is
                        </Typography>
                        <DatePicker selected={date} onChange={(date) => setDate(date)} /> 
                        <br></br>
                        <TextField
                        required
                        id="standard-required"
                        label="Title"
                        defaultValue=""
                        variant="standard"
                        inputRef={titleRef}
                        fullWidth
                        />
                        <br></br>
                        <div className='ui form'>
                        <TextField
                        id="filled-multiline-static"
                        label="Today..."
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="filled"
                        fullWidth
                        inputRef={textRef}
                        />
                        </div>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}} components="div">
                        <Button type="Submit"variant="contained" color="primary">
                            Submit
                        </Button>
                        </CardActions>
                    </Card>

                </Box>
            </div>
        </form>
    )
}

export default UserInputs;