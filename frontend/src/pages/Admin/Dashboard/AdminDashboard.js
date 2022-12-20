import { Tabs } from 'antd';
import { useNavigate } from "react-router-dom";




const AdminDashboard = () => {
    const navigate = useNavigate();
    const onChange = (key) => {
        if (key == '1') {
            navigate("/admin_recruiter");
        } else if (key == '2') {
            navigate("/admin_client");
        }
    };
    return (
        <>
            <h1>Admin Dashboard</h1>
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                items={[
                    {
                        label: `Recruiter`,
                        key: '1',
                    },
                    {
                        label: `client`,
                        key: '2',
                    },
                    {
                        label: `profile`,
                        key: '3',
                    },
                ]}
            />
        </>
    )
}

export default AdminDashboard;