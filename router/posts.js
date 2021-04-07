import express from "express"

//use curly braces it shows error
import {getPosts, createPosts, updatePosts, deletePosts, likePosts} from "../controlers/posts.js"

const router = express.Router();

router.get('/', getPosts)
router.post('/', createPosts)

router.patch('/:id', updatePosts)
router.delete('/:id', deletePosts)

router.patch("/:id/likepost", likePosts)
export default router;