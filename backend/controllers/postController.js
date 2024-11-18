import Post from "../models/postModel.js";



export const getMyPost = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
}

export const getMySinglePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: 'Post not found' });
    res.json(post);
}

export const createMyPost = async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content, author: req.user.id });
    await post.save();
    res.json(post);
}

export const updateMyPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: 'Post not found' });

    post.title = req.body.title;
    post.content = req.body.content;
    await post.save();
    res.json(post);
}

export const deleteMyPost =async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ msg: 'Post not found' });
    res.json({ msg: 'Post removed' });
}