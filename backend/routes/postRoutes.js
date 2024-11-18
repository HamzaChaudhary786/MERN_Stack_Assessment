import express from 'express';
import { registerController } from '../controllers/authController.js';
import { createMyPost, deleteMyPost, getMyPost, getMySinglePost, updateMyPost } from '../controllers/postController.js';
import { auth } from '../middleware/authMiddleWare.js';


const router = express.Router();


router.get('/', getMyPost)

router.get('/:id', getMySinglePost)

router.post('/', auth('admin'), createMyPost)


router.put('/:id', auth('admin'), updateMyPost)

router.delete('/:id', auth('admin'), deleteMyPost)


export default router;