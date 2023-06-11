import { Router } from "express";
const router = Router();
import * as postControllers from '../controllers/PostControllers'

router.get('/', async (req, res)=>{
    res.json('If you recive this message, that means I hacked your account')
})

router.get('/posts', async (req, res)=>{
    try {
        const posts = await postControllers.getPosts();
        return res.json({posts: posts});
    } catch (error) {
        console.log(error.message);
    }
})

//get  a post
router.get('/posts/:id ', async (req, res)=>{
    const id = req.params.id;
    try {
        const post = await postControllers.getPost(id);
        return res.json({post: post});
    } catch (error) {
        console.log(error.message);
    }
})

// edit the post;
router.put('/posts/:id', async (req, res)=>{
    const id = req.params.id;
    const Fields = req.body;
    try {
        const result = await postControllers.EditPost(id, Fields);
        res.json(result);
    } catch (error) {
        console.log(error.message);
    }
})

router.delete('/posts/:id', async (req, res)=>{
    const id = req.params.id;
    try {
        const result = await postControllers.deletePost(id);
        return res.json(result);
    } catch (error) {
        console.log(error.message);
    }
})

// create a post
router.post('/posts/:id', async (req, res)=>{
    const id = req.params.id;
    const content = req.body;
    try {
        const result = await postControllers.createPost(content);
        return res.json(result);
    } catch (error) {
        console.log(error.message);
    }
})



export default router;