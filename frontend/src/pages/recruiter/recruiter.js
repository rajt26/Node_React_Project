import { useEffect, useState } from 'react';
import { PostService } from '../../services/post/post.service'
import { Card } from 'antd';
import './recruiter.css'

const RecruiterHomePage = () => {
    const [recruiterPosts, setRecruiterPosts] = useState([]);
    const loginUser = JSON.parse(localStorage.getItem('user'))

    const getAllPosts = async () => {
        const data = await PostService.showPosts();
        const assignPosts = data?.data?.filter((item) => {
            return item.assign_user == loginUser._id
        })
        setRecruiterPosts(assignPosts)
    }
    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <>
            <h1 style={{ marginLeft: "40%" }}>All Client Posts</h1>
            {
                recruiterPosts.map((post) => {
                    return (
                        <Card title={post.title} bordered={true}>
                            {post.description}
                        </Card>)
                })
            }</>

    )
}

export default RecruiterHomePage