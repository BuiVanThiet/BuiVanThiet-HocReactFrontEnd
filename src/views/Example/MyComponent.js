import React from 'react';
import ChildCompoment from './ChildCompoment';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        videos: [
            { id: 1, nameVideo: 'video1', view: 12222 },
            { id: 2, nameVideo: 'video2', view: 12221 },
            { id: 3, nameVideo: 'video3', view: 12223 }
        ]
    }

    addNewVideo = (video) => {
        let currenVideo = this.state.videos;
        currenVideo.push(video);
        this.setState({
            ///... la toan tu coppy
            // videos: [...this.state.videos, video]
            videos: currenVideo
        })
        console.log(video)
    }

    deleteVideo = (video) => {
        let currenVideo = this.state.videos;
        currenVideo = currenVideo.filter(item => item.id !== video.id)
        this.setState({
            videos: currenVideo
        })
        console.log(currenVideo)

    }


    render() {
        return (
            <React.Fragment>
                <AddComponent
                    addNewVideo={this.addNewVideo}
                />
                <ChildCompoment
                    videos={this.state.videos}
                    deleteVideo={this.deleteVideo}
                />
            </React.Fragment>
            // <div className="ash">
            //     <h1>Chao moi nguoi, minh la {name} </h1>
            //     <h1>Minh nam nay 20 tuoi</h1>
            // </div>
        );
    }
}

export default MyComponent;