import React from 'react';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 1, title: 'thietoke' },
            { id: 2, title: 'thietoke3' },
            { id: 3, title: 'thietoke4' }
        ],
        editTodo: {}
    }

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
                <div className='list-content-todo'>
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
                </div>
            </>
            // <div className="ash">
            //     <h1>Chao moi nguoi, minh la {name} </h1>
            //     <h1>Minh nam nay 20 tuoi</h1>
            // </div>
        );
    }
}

export default ListTodo;