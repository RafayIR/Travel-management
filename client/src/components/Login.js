import React from 'react'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GoogleButton from 'react-google-button';


function LogIn() {

    function handleLogin() {
        window.location('http://localhost:3000/dashboard')


    }
    return (
        <div>
            <Container className='google-wrapper' component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <a href='http://localhost:8080/users/auth/google'>
                            <GoogleButton
                                onClick={handleLogin}
                            />
                        </a>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default LogIn