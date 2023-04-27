import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { registerUser } from '../apis/user.api';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

    const [username, setUsername] = useState('');
    const [usertype, setUsertype] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleUsertypeChange = (event) => {
        setUsertype(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let newUser = {
                "email": email,
                "password": password,
                "username": username,
                "userType": usertype
            }

            const res = await registerUser(newUser)
            console.log(res);
            alert(res.data.message)
            navigate("/", { data: res.data.data });
        } catch (error) {

        }


    };



    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={handleUsernameChange}
                required
            />
            <TextField
                label="UserType"
                variant="outlined"
                value={usertype}
                onChange={handleUsertypeChange}
                required
            />
            <TextField
                label="Email"
                variant="outlined"
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
                Register
            </Button>
        </form>
    );
};

export default SignUp;
