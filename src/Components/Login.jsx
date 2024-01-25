import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (!loginData.username || !loginData.password) {
            alert('All fields are required. Please enter all details.');
            return;
        }

        // Log login data to the console
        console.log('Login Data:', loginData);

        // Show success alert (you can customize this based on actual authentication logic)
        alert('Successfully logged in!');

        // Redirect to the home page
        window.location.href = '/';
    };

    return (
        <div className='text-white' style={{ backgroundColor: 'black', padding: '30px' }}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        backgroundColor: '#393646',
                        padding: 5,
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h4" fontWeight='bold' color='orangered' >
                        Log In
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleLoginSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    required
                                    fullWidth
                                    label="Username"
                                    type="text"
                                    name="username"
                                    value={loginData.username}
                                    onChange={handleLoginChange}
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
                                    label="Password"
                                    name="password"
                                    type="password"
                                    value={loginData.password}
                                    onChange={handleLoginChange}
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

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundImage: 'linear-gradient(to right, #1446d1, #4d41cb, #6a3cc4, #8037bd, #9132b5)'
                            }}
                        >
                            Log In
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link to='/signup' href="#" variant="body2">
                                    Don't have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Login 
