import react from "react";
import { toast } from 'react-toastify';
import { Button, Input, Select, Space } from 'antd';

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
                <Space.Compact style={{ width: '100%' }}>
                    <Input type='text' value={title} onChange={(event) => this.handleOnchangeTitle(event)} />
                    <Button type="button" onClick={() => this.handleClickAddTodo()}>Submit</Button>
                </Space.Compact>
                {/* <div className='add-todo'>
                    <Input type='text' value={title} onChange={(event) => this.handleOnchangeTitle(event)} />
                    <Button onClick={() => this.handleClickAddTodo()}>Add</Button>
                </div> */}
            </>
        )
    }
}

export default AddTodo;