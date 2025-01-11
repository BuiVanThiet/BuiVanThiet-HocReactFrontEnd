import React from 'react';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

import { Table, Space, Button, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface Todo {
    id: number;
    title: string;
}
class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 1, title: 'thietoke' },
            { id: 2, title: 'thietoke3' },
            { id: 3, title: 'thietoke4' },
            { id: 4, title: 'thietoke' },
            { id: 5, title: 'thietoke3' },
            { id: 6, title: 'thietoke4' },
            { id: 7, title: 'thietoke' },
            { id: 8, title: 'thietoke3' },
            { id: 9, title: 'thietoke4' },
            { id: 10, title: 'thietoke' },
            { id: 11, title: 'thietoke3' },
            { id: 12, title: 'thietoke4' },
            { id: 13, title: 'thietoke' },
            { id: 14, title: 'thietoke3' },
            { id: 15, title: 'thietoke4' },
            { id: 16, title: 'thietoke' },
            { id: 17, title: 'thietoke3' },
            { id: 18, title: 'thietoke4' },
            { id: 19, title: 'thietoke' },
            { id: 20, title: 'thietoke3' },
            { id: 21, title: 'thietoke4' },
            { id: 22, title: 'thietoke' },
            { id: 23, title: 'thietoke3' },
            { id: 24, title: 'thietoke4' }

        ],
        editTodo: {}
    }

    // Định nghĩa các cột
    columns: ColumnsType<Todo> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            key: 'title',
            render: (_, todo) =>
                todo.id === this.state.editTodo.id ? (
                    <Input
                        value={this.state.editTodo.title}
                        onChange={this.handleChangeTodo}
                    />
                ) : (
                    <span>{todo.title}</span>
                ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, todo) => (
                <Space size="middle">
                    {todo.id === this.state.editTodo.id ? (
                        <Button type="link" onClick={this.saveTodoEdit}>
                            Save
                        </Button>
                    ) : (
                        <Button type="link" onClick={() => this.editTodo(todo)}>
                            Edit
                        </Button>
                    )}
                    <Button type="link" danger onClick={() => this.deleteTodo(todo)}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];



    addNewTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo.push(todo)

        this.setState({
            listTodos: currentTodo
        })
    }

    deleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo
        })

        toast.success('Xóa todo thành công!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }

    editTodo = (todo) => {
        this.setState({
            editTodo: todo
        })
    }

    handleChangeTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    saveTodoEdit = () => {
        let currentTodo = this.state.listTodos;
        let editTodoCopy = { ...this.state.editTodo };

        if (editTodoCopy.title.trim() === '' || editTodoCopy.title.length < 0) {
            toast.error('Chưa điền todo!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }

        let ObjectTodo = currentTodo.findIndex(item => item.id === editTodoCopy.id)

        currentTodo[ObjectTodo].title = editTodoCopy.title;
        this.setState({
            listTodos: currentTodo,
            editTodo: {}
        })

        toast.success('Đã sửa todo!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }


    render() {
        let { listTodos } = this.state;
        return (
            <>
                <AddTodo addNewTodo={this.addNewTodo} />
                {/* <div className='list-content-todo'>
                    {
                        listTodos && listTodos.length > 0 &&
                        listTodos.map((todo, index) => {
                            return (
                                <div key={todo.id}>
                                    {
                                        todo.id === this.state.editTodo.id ? <input type='text' value={this.state.editTodo.title} onChange={(event) => this.handleChangeTodo(event)} /> : <span>{todo.title}</span>
                                    }
                                    {
                                        todo.id === this.state.editTodo.id ? <button onClick={() => this.saveTodoEdit()}>save</button> : <button onClick={() => this.editTodo(todo)}>Edit </button>
                                    }
                                    <button onClick={() => this.deleteTodo(todo)}>Delete </button>
                                </div>
                            )
                        })
                    }
                </div> */}
                <Table
                    columns={this.columns}
                    dataSource={listTodos.map((todo) => ({ ...todo, key: todo.id }))}
                    pagination={{ pageSize: 5 }}
                />
            </>
            // <div className="ash">
            //     <h1>Chao moi nguoi, minh la {name} </h1>
            //     <h1>Minh nam nay 20 tuoi</h1>
            // </div>
        );
    }
}

export default ListTodo;