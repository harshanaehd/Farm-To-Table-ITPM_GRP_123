
import React, { useState } from 'react';

function SignUp() {
    const [username, setUsername] = useState('');
    const [usertype, setUsertype] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email} Password: ${password}`);
        // code to authenticate user and redirect to dashboard
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* username, email, userType, password */}
                <div>
                    <label htmlFor="username">UserName:</label>
                    <input
                        type="username"
                        id="username"
                        value={username}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="usertype">UserType:</label>
                    <input
                        type="usertype"
                        id="usertype"
                        value={usertype}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>

    );
};

export default SignUp;
