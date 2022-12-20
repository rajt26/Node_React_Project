import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { UserService } from "../../services/user/user.service";

const Login = () => {
    const navigate = useNavigate();

    const onFinish = async (e) => {
        const res = await UserService.login(e);
        if (res.data.error) {
            message.error(res.error)
        }
        else if (res.data.user) {
            message.success('User Login Successfully')
        }
        if (res.data.token) {
            localStorage.setItem("token", res.data.token);
        }
        localStorage.setItem("user", JSON.stringify(res && res.data && res.data.user ? res.data.user : {}));
        if (res.data.user.role == 'admin') {
            navigate("/admin_dashboard");
        } else if (res.data.user.role == 'recruiter') {
            navigate("/recruiter_home");
        } else if (res.data.user.role == 'client') {
            navigate("/client_home");
        }
    };

    return (
        <div className="Login">
            {/* <Header /> */}
            <Form name="normal_login" className="login-form" onFinish={onFinish}>
                <h1>Login</h1>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Username!",
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Password!",
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                    Or <a href="/signup">register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;