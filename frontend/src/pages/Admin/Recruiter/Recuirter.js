import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { UserService } from "../../../services/user/user.service";
import './recruiter.css'

const RecruiterPage = () => {
    const [recruiterData, setRecruiterData] = useState([]);
    const getAllUsers = async () => {
        const data = await UserService.getAllUsers();
        const recruiterData = data?.data?.filter((item) => {
            return item.role == 'recruiter'
        })
        setRecruiterData(recruiterData)
    }
    const onDelete = (e) => {
    }
    useEffect(() => {
        getAllUsers()
    }, [])


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Action',
            key: 'x',
            render: (_) => (
                <Space size="middle">
                    <a onClick={(e) => onDelete(e)}>Delete</a>
                </Space>
            )
        },
    ];
    return (
        <>
            <h1 style={{ marginLeft: "40%" }}>
                All Recruiter
            </h1>
            <Table dataSource={recruiterData} columns={columns} />
        </>

    )
}

export default RecruiterPage
