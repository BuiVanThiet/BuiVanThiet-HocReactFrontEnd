import react from "react";
import { toast } from 'react-toastify';

class AddTodo extends react.Component {
    state = {
        title: ''
    }

    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClickAddTodo = () => {
        if (this.state.title.length < 0 || !this.state.title) {
            toast.error('Chưa điền todo', {
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
        let todo =
        {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        };
        this.props.addNewTodo(todo)
        toast.success('Thêm mới thành công!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <>
                <div className='add-todo'>
                    <input type='text' value={title} onChange={(event) => this.handleOnchangeTitle(event)} />
                    <button onClick={() => this.handleClickAddTodo()}>Add</button>
                </div>
            </>
        )
    }
}

export default AddTodo;