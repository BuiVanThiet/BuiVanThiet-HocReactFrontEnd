import React from 'react';
import ChildCompoment from './ChildCompoment';
import AddComponent from './AddComponent';
import withRouter from '../WithRouter'; // Đảm bảo đường dẫn đúng

class MyComponent extends React.Component {
    state = {
        videos: [
            { id: 1, nameVideo: 'video1', view: 12222 },
            { id: 2, nameVideo: 'video2', view: 12221 },
            { id: 3, nameVideo: 'video3', view: 12223 }
        ]
    };

    handleNavigate = () => {
        this.props.navigate('/todo/home'); // Điều hướng tới '/todo/home'
    };

    addNewVideo = (video) => {
        let currentVideos = [...this.state.videos, video];
        this.setState({ videos: currentVideos });
        this.handleNavigate(); // Điều hướng sau khi thêm video
    };

    deleteVideo = (video) => {
        let currentVideos = this.state.videos.filter(item => item.id !== video.id);
        this.setState({ videos: currentVideos });
    };

    render() {
        console.log('check proop ', this.props)
        return (
            <React.Fragment>
                <AddComponent addNewVideo={this.addNewVideo} />
                <ChildCompoment videos={this.state.videos} deleteVideo={this.deleteVideo} />
            </React.Fragment>
        );
    }
}

export default withRouter(MyComponent);
