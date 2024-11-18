import React, { useState } from 'react';
import { createPost } from '../../services/api';

const PostForm = () => {
    const [formData, setFormData] = useState({ title: '', content: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost(formData);
            alert('Post created');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Post</h2>
            <input name="title" type="text" placeholder="Title" onChange={handleChange} required />
            <textarea name="content" placeholder="Content" onChange={handleChange} required></textarea>
            <button type="submit">Create</button>
        </form>
    );
};

export default PostForm;
