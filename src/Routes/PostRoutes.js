import { Router } from "express";
const router = Router();
import * as postControllers from '../controllers/PostControllers'

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
})



export default router;