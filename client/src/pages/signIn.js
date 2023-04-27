import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { getUserToken, loginUser } from '../apis/user.api';
import { useNavigate } from 'react-router-dom';
function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const user = {
                "email": email,
                "password": password
            }
            const loggedUser = await loginUser(user)
            console.log(loggedUser.data.token);
            if (loggedUser.data.token) {
                localStorage.setItem('userToken', loggedUser.data.token);
                const token = { ...getUserToken() }
                console.log(token);
                navigate("/product", { token: token });
            } else {
                alert(loggedUser.data.message)
            }

        } catch (error) { }

    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <Button variant="contained" color="primary" type="submit">
                    Login
                </Button>
            </form>
        </Box>
    );
}

export default SignIn;
