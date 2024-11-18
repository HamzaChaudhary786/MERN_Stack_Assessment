import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostList from './components/Posts/PostList';
import PostDetail from './components/Posts/PostDetail';
import PostForm from './components/Posts/PostForm';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

const App = () => {
   const [auth, setAuth] = useState(localStorage.getItem('token') ? true : false);

   return (
       <Router>
           <nav>
               <Link to="/">Home</Link>
               <Link to="/register">Register</Link>
               <Link to="/login">Login</Link>
               {auth && <Link to="/create-post">Create Post</Link>}
           </nav>
           <Routes>
               <Route path="/" element={<PostList />} />
               <Route path="/register" element={<Register />} />
               <Route path="/login" element={<Login setAuth={setAuth} />} />
               <Route path="/posts/:id" element={<PostDetail />} />
               {auth && <Route path="/create-post" element={<PostForm />} />}
           </Routes>
       </Router>
   );
};

export default App;
