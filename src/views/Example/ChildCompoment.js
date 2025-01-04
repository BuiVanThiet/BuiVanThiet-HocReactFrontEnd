import React from 'react';

class ChildCompoment extends React.Component {
    state = {
        showJobs: false
    }

    hendleShowHiden = (status) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    hendleOnclickDeleteVideo = (video) => {
        // alert('da xoa thanh cong')
        this.props.deleteVideo(video)
    }

    render() {
        let { videos } = this.props;
        let { showJobs } = this.state;
        return (
            <React.Fragment>
                {showJobs === false ? (
                    <div>
                        <button onClick={() => this.hendleShowHiden()}>show</button>
                    </div>
                ) : (
                    <>
                        <div>
                            {videos.map((item) => (
                                <div key={item.id}>
                                    {item.nameVideo} - {item.view}
                                    <span onClick={() => this.hendleOnclickDeleteVideo(item)}> X</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <button onClick={() => this.hendleShowHiden()}>hide</button>
                        </div>
                    </>
                )}
            </React.Fragment>
            // <div className="ash">
            //     <h1>Chao moi nguoi, minh la {name} </h1>
            //     <h1>Minh nam nay 20 tuoi</h1>
            // </div>
        );
    }
}

// const ChildCompoment = (props) => {
//     let { videos } = props;

//     return (<>
//         <div>ChildCompoment: {props.name}</div>
//         <div>
//             {
//                 videos.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.nameVideo} - {item.view}
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </>)
// }

export default ChildCompoment;