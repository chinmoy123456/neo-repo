import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { database } from './config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';

const Signup = () => {

    const [login, setLogin] = useState(false);

    const history = useNavigate();


    const handleSubmit = (e, type) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (type === "signup") {
            createUserWithEmailAndPassword(database, email, password)
                .then((data) => {
                    console.log(data, "authData");
                    history("/");
                })
                .catch((err) => {
                    alert(err.code);
                    setLogin(true);
                });
        } else {
            signInWithEmailAndPassword(database, email, password)
                .then((data) => {
                    console.log(data, "authData");
                    history("/");
                })
                .catch((err) => {
                    alert(err.code);
                });
        }
    };

    const handleReset = async (e) => {
        history("/reset")
    }


    return (
        <div className='text-light' style={{ backgroundColor: 'black', padding: '30px', paddingTop: '60px' }}>
            <Container maxWidth="xs">
                <div className='row fs-4 align-items-center justify-content-center text-center mx-3 mb-5'>
                    <div className='col-md-6'>
                        <div className={login === false ? 'activeColor' : 'pointer'} onClick={() => setLogin(false)}>Sign Up</div>
                    </div>
                    <div className='col-md-6'>
                        <div className={login === true ? 'activeColor' : 'pointer'} onClick={() => setLogin(true)}>Sign In</div>
                    </div>
                </div>
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
                        {login ? 'Sign In' : 'Sign Up'}
                    </Typography>
                    <Box component="form" noValidate onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Email Address"
                                    type="email"
                                    name="email"
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
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    type="password"
                                    autoComplete='off'
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
                                backgroundImage: 'linear-gradient(to right, #1446d1, #4d41cb, #6a3cc4, #8037bd, #9132b5);'
                            }}
                        >
                            {login ? 'Sign in' : 'Signup'}
                        </Button>
                        <Grid container justifyContent="center" onClick={handleReset}>
                            <Link to='/forgotpassword'>
                                <Grid item>
                                    <a href='/' style={{ textDecoration: "none" }}>
                                        Forgot password
                                    </a>
                                </Grid>
                            </Link>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Signup 