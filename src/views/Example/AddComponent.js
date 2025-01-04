import React from 'react';

class AddComponent extends React.Component {
    state = {
        nameVideo: '1',
        view: 2
    }

    handleChangeNameVideo = (event) => {
        this.setState({
            nameVideo: event.target.value
        })
    }

    handleChangeView = (event) => {
        this.setState({
            view: event.target.value
        })
    }

    handleSubmit = () => {
        // const { nameVideo, view } = this.state;
        // alert(`du lieu state: ${nameVideo} + ${view}`); // Sử dụng template string
        // console.log('du lieu state: ', nameVideo, '+', view);
        if (!this.state.nameVideo || !this.state.view) {
            alert('dien du thong tin')
            return;
        }

        this.props.addNewVideo({
            id: Math.floor(Math.random() * 1000),
            nameVideo: this.state.nameVideo,
            view: this.state.view
        })

        this.setState({
            nameVideo: '',
            view: ''
        })

    }


    render() {
        return (
            <>
                <form>
                    <label>Name video:</label><br />
                    <input type="text" value={this.state.nameVideo} onChange={(event) => this.handleChangeNameVideo(event)} /><br />
                    <label>view:</label><br />
                    <input type="text" value={this.state.view} onChange={(event) => this.handleChangeView(event)} /><br /><br />
                    <input type="button" value="Submit" onClick={() => this.handleSubmit()} />
                </form>
            </>
        )
    }
}

export default AddComponent;