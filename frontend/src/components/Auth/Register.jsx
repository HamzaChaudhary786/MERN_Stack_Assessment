import React, { useState } from 'react';
import { register } from '../../services/api';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', password: '', role: 'user' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            alert('Registration successful');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input name="username" type="text" placeholder="Username" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <select name="role" onChange={handleChange} required>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
