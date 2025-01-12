import React from 'react';
import axios from 'axios';
import { Table, Space, Button, Input, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link, useLocation } from 'react-router-dom';

class ListUser extends React.Component {

    state = {
        listUsers: [],  // Dữ liệu người dùng sẽ được lưu trữ ở đây
        per_page: 0,
        total: 0
    }

    async componentDidMount() {
        try {
            let res = await axios.get('https://reqres.in/api/users?page=2');
            if (res && res.data && res.data.data) {
                this.setState({
                    listUsers: res.data.data,
                    per_page: res.data.per_page,
                    total: res.data.total
                });
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            this.setState({
                listUsers: [],
                per_page: 0,
                total: 0  // Đảm bảo trạng thái là mảng trống nếu có lỗi
            });
        }
    }

    columns: ColumnsType<any> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (id) => id || "N/A", // Hiển thị "N/A" nếu không có id
        },
        {
            title: 'name',
            key: 'title',
            render: (_, user) => (
                <span>{user.first_name || "No title"}</span>  // Hiển thị "No title" nếu không có tiêu đề
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, user) => (
                <Space size="middle">
                    <Button type="link"><Link to={`/user/detail/${user.id}`}>Detail</Link></Button>
                    <Button type="link">Edit</Button>
                    <Button type="link" danger>Delete</Button>
                </Space>
            ),
        },
    ];

    render() {
        let { listUsers, total, per_page } = this.state;
        console.log(listUsers);

        // Kiểm tra xem dữ liệu có hợp lệ không
        if (!listUsers || listUsers.length === 0) {
            return <div>No users available</div>;
        }

        return (

            <>
                <Table
                    columns={this.columns}
                    dataSource={listUsers.map((user) => ({ ...user, key: user.id }))}
                    // pagination={{ pageSize: 2 }}
                    pagination={false}
                />

                <Pagination defaultCurrent={1} pageSize={per_page} total={total} />
            </>
        );
    }
}

export default ListUser;
