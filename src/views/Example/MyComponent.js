import React from 'react';
import ChildCompoment from './ChildCompoment';

class MyComponent extends React.Component {
    state = {
        firtName: '1',
        lastName: '2',
        videos: [
            { id: 1, nameVideo: 'video1', view: 12222 },
            { id: 2, nameVideo: 'video2', view: 12221 },
            { id: 3, nameVideo: 'video3', view: 12223 }
        ]
    }

    handleChangeFirtName = (event) => {
        this.setState({
            firtName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = () => {
        const { firtName, lastName } = this.state;
        alert(`du lieu state: ${firtName} + ${lastName}`); // Sử dụng template string
        console.log('du lieu state: ', firtName, '+', lastName);
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <label>First name:</label><br />
                    <input type="text" value={this.state.firtName} onChange={(event) => this.handleChangeFirtName(event)} /><br />
                    <label>Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
                    <input type="button" value="Submit" onClick={() => this.handleSubmit()} />
                </form>
                <ChildCompoment name={this.state.firtName} videos={this.state.videos} />
            </React.Fragment>
            // <div className="ash">
            //     <h1>Chao moi nguoi, minh la {name} </h1>
            //     <h1>Minh nam nay 20 tuoi</h1>
            // </div>
        );
    }
}

export default MyComponent;