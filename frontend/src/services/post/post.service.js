import http from '../../common/common'

const createPost = (data) => {
    return http.post('/post/create', data)
}

const showPosts = () => {
    return http.get('/post/getAllPosts')
}


export const PostService = {
    createPost,
    showPosts
}