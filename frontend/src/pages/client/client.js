import { Button, Form, Input, Modal, message, Card } from 'antd';
import { useEffect, useState } from 'react';
import { PostService } from '../../services/post/post.service'
import { useNavigate } from "react-router-dom";
import './client.css'

const ClientHomePage = () => {
    const [clientPosts, setClientPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const getAllPosts = async () => {
        const data = await PostService.showPosts();
        setClientPosts(data.data)
    }
    useEffect(() => {
        getAllPosts()
    }, [])
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async (e) => {
        let createPost = await PostService.createPost(e);
        if (createPost.status == 200) {
            message.success('Post Create successfully')
        }
        setIsModalOpen(false);
        navigate("/client_home");
    }
    return (
        <>
            <h1 style={{ marginLeft: "40%" }}>Client Homepage</h1>
            <Button type="primary" style={{ marginLeft: "27%" }} onClick={showModal}>
                Create Post
            </Button>
            <Modal title="Create Post" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: 'Please input your title!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your description!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            {
                clientPosts.map((value) => {
                    return (
                        <Card title={value.title} bordered={true}>
                            {value.description}
                        </Card>
                    )
                })
            }
        </>
    )
}

export default ClientHomePage