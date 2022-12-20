import { Form, Input, Button, Radio, message } from "antd";
import "./style.css";
import { useState } from "react";
import { UserService } from "../../services/user/user.service";
import { useNavigate } from "react-router-dom";
// import Header from '../../components/header/Header'
const Signup = () => {
    const navigate = useNavigate();
    const onFinish = async (e) => {
        let register = await UserService.register(e);
        if (register.status == 200) {
            message.success('User register successfully')
        }
        navigate("/login");
    };
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };
    return (
        <>
            {/* <Header /> */}
            <Form
                {...formItemLayout}
                name="sign_up"
                className="sign_up"
                onFinish={onFinish}
            >
                <h1>Registration</h1>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                        },
                    ]}
                >
                    <Input placeholder="name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input placeholder="email" />
                </Form.Item>
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
                        },
                    ]}
                >
                    <Input
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item label="User" name="role" rules={[
                    {
                        required: true,
                        message: "Please select user role!!",
                    },
                ]}>
                    <Radio.Group>
                        <Radio value={'client'}>Client</Radio>
                        <Radio value={'recruiter'}>Recruiter</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="signup-form-button">
                        Sign Up
                    </Button>
                    {/* Or <a href="">Click Here for Login</a> */}
                </Form.Item>
            </Form>
        </>
    )
}

export default Signup