import React ,{useEffect, useState} from 'react'
import UserInputs from './UserInputs';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserRecords = (props) => {
    
    const renderItems =  props.record.map(
        (item) =>{
            return(
                
              <React.Fragment key={item.title}>
                <Card variant="outlined">
                    <CardContent style={{backgroundColor: "#9fc5e8"}}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.date}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2">
                        {item.text}
                    </Typography>
                    </CardContent>
                </Card>
                </React.Fragment>
            )
        }
    )

    return (
        <div>
            <Typography variant="h5" components="div" textAlign="center">
                History
            </Typography>
            <div>{renderItems}</div>
        </div>
    )
}

export default UserRecords