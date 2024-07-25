import { Button, Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Userpg from './Userpg';
import { BorderColor, BorderColorOutlined, Margin, ScoreOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const styles = {
    root: {
        textAlign: 'center',
        padding: '40px',
        position: 'relative',
        zIndex: 1, 
        width: '130vh',
        borderRadius: '40px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
        marginLeft: '120px',
        padding: '20px',
        backgroundColor: '#01ffc9',
        border: '2px solid #01ffc9',
        borderRadius: '20px',
    },
    table: {
        marginTop: '20px',
        backgroundColor: '#fff',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        zIndex: 2, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userpg: {
        position: 'static',
        top: 0,
        left: 0,
        width: '100%',
        height: '10%',
        zIndex: 1, 
    }
};

const UserProfile = () => {
  
    const location = useLocation();
    // console.log('Location state:', location.state);
    const { email, name, id } = location.state || {email: 'N/A', name: 'N/A', id: 'N/A' };
    // console.log('ID:', id);
    // console.log('ID:', name);
    // console.log('ID:', email);

  
   



    return (
        <div style={{ overflowX: 'hidden', position: 'relative', height: '100vh', width: '100%', paddingLeft: '30px' }}>
            <div style={styles.userpg}>
                <Userpg />
            </div>

            {/* Main Content */}
            <Container sx={{marginLeft: '140vh',color:"",paddingTop: '50px'}}>
                
                <div>
                <Typography variant="h5" color="#00ffc7">Id: {id}</Typography>
                        <Typography variant="h5" color="#00ffc7">Name: {name}</Typography>
                        <br /><br />
                        <Typography variant="h5" color="#00ffc7">Email:{email}</Typography>

                    </div>
              
            </Container>
        </div>
    );
};

export default UserProfile;