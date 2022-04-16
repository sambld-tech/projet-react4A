import { Post, PostContent } from './types'
import axios from 'axios'
import { responsiveFontSizes } from '@mui/material'

const base_url = 'http://localhost:3004/posts'


async function getPost(postID: Post['id']): Promise<Post> {
    // get a unique post
    // [TODO] remove this return to use a fetch API
   
    const response = await fetch(`${base_url}/${postID}`)
    const data = await response.json()

    return data
    
}

async function getPosts(): Promise<Array<Post>> {
    // get all posts
    // [TODO] remove this return to use a fetch API
    
    const response = await fetch(base_url)
    const data = await response.json()


    return data

}

async function createPost(post: PostContent): Promise<Post> {
    // create a new post
    // [TODO] remove this return to use a fetch API
    
    const {data} = await axios.post(`$base_url`, post)
    return data

}

async function updatePost(post: Post): Promise<Post> {
    // update a existing post
    // [TODO] remove this return to use a fetch API
    const {data} = await axios.put(`${base_url}/${post.id}`, post)
    return data
}

async function deletePost(postID: Post['id']): Promise<Post['id']> {
    // delete a existing post
    // [TODO] remove this return to use a fetch API
    return 1
}

export { getPost, getPosts, deletePost, updatePost, createPost }
