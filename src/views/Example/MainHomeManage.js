import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../styles/MainHomeManage.scss';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import ListTodo from '../todos/ListTodo';
import MyComponent from './MyComponent';
import ListUser from '../user/ListUser';
import UserDetail from '../user/UserDetail';

const { Header, Sider, Content } = Layout;

const MainHomeManage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    // Tìm key phù hợp với URL hiện tại
    const getSelectedKey = () => {
        const path = location.pathname;
        if (path.startsWith('/todo')) return '/todo/home';
        if (path.startsWith('/video')) return '/video/home';
        if (path.startsWith('/user')) return '/user/home';
        return ''; // Nếu không khớp, không chọn item nào
    };

    const selectedKey = getSelectedKey();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">98 Sneaker</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]} // Cập nhật selectedKeys dựa trên URL
                >
                    <Menu.Item key="/todo/home" icon={<UserOutlined />}>
                        <Link to="/todo/home">Todo CRUD</Link>
                    </Menu.Item>
                    <Menu.Item key="/video/home" icon={<VideoCameraOutlined />}>
                        <Link to="/video/home">Video CRUD</Link>
                    </Menu.Item>
                    <Menu.Item key="/user/home" icon={<UploadOutlined />}>
                        <Link to="/user/home">User</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: 'trigger',
                            onClick: toggleCollapsed,
                        }
                    )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 1280,
                    }}
                >
                    <Routes>
                        <Route path="/todo/home" element={<ListTodo />} />
                        <Route path="/video/home" element={<MyComponent />} />
                        <Route path="/user/home" element={<ListUser />} />
                        <Route path="/user/detail/:id" element={<UserDetail />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

const App = () => {
    return (
        <BrowserRouter> {/* Đảm bảo BrowserRouter bao bọc toàn bộ ứng dụng */}
            <MainHomeManage />
        </BrowserRouter>
    );
};

export default App;
