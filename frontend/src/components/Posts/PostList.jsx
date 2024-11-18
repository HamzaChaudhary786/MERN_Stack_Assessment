import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../../services/api';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetchPosts();
            setPosts(res.data);
        };
        getPosts();
    }, []);

    return (
        <div>
            <h2>All Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
