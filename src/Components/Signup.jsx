import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Signup = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();

        if (!signupData.username || !signupData.email || !signupData.password) {
            alert('All fields are required. Please enter all details.');
            return;
        }

        console.log('Signup Data:', signupData);

        alert('Successfully signed up!');

        window.location.href = '/';
    };

    return (
        <div className='text-white' style={{ backgroundColor: 'black', padding: '30px' }}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        backgroundColor: '#393646',
                        padding: 3,
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, backgroundImage: 'linear-gradient(to right, #1446d1, #4d41cb, #6a3cc4, #8037bd, #9132b5)' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4" fontWeight='bold' color='orangered' >
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSignupSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    type="text"
                                    name="username"
                                    required
                                    fullWidth
                                    label="Username"
                                    value={signupData.username}
                                    onChange={handleSignupChange}
                                    autoFocus
                                    InputLabelProps={{
                                        sx: {
                                            color: 'white',
                                        }
                                    }}
                                    InputProps={{
                                        sx: { color: 'white' }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    value={signupData.email}
                                    onChange={handleSignupChange}
                                    InputLabelProps={{
                                        sx: {
                                            color: 'white',
                                        }
                                    }}
                                    InputProps={{
                                        sx: { color: 'white' }
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    type="password"
                                    value={signupData.password}
                                    onChange={handleSignupChange}
                                    InputLabelProps={{
                                        sx: {
                                            color: 'white',
                                        }
                                    }}
                                    InputProps={{
                                        sx: { color: 'white' }
                                    }}
                                />
                            </Grid>
                        </Grid>
                        {/* <Link to='/'> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundImage: 'linear-gradient(to right, #1446d1, #4d41cb, #6a3cc4, #8037bd, #9132b5);'
                            }}
                        >
                            Sign Up
                        </Button>
                        {/* </Link> */}
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link to='/login' href="#" variant="body2">
                                    Already have an account? Login
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Signup 