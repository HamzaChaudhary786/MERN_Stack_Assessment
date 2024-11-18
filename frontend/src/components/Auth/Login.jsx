import React, { useState } from 'react';
import { login } from '../../services/api';

const Login = ({ setAuth }) => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login(formData);
            localStorage.setItem('token', res.data.token);
            setAuth(true); // update authentication state
            alert('Login successful');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input name="username" type="text" placeholder="Username" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
