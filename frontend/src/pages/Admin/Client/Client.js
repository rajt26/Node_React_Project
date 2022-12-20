import { Space, Table, Tag, message } from 'antd';
import { useEffect, useState } from 'react';
import { UserService } from "../../../services/user/user.service";
import './client.css'


const ClientPage = () => {
    const [clientData, setClientData] = useState([]);
    const getAllUsers = async () => {
        const data = await UserService.getAllUsers();
        const clientData = data?.data?.filter((item) => {
            return item.role == 'client'
        })
        setClientData(clientData);
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
            <h1 style={{ marginLeft: "40%" }}>All Clients</h1>
            <Table dataSource={clientData} columns={columns} />
        </>
    )
}

export default ClientPage
