import React from 'react';

class ChildCompoment extends React.Component {

    render() {
        let { videos } = this.props;
        return (
            <React.Fragment>
                <div>ChildCompoment: {this.props.name}</div>
                <div>
                    {
                        videos.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.nameVideo} - {item.view}
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>
            // <div className="ash">
            //     <h1>Chao moi nguoi, minh la {name} </h1>
            //     <h1>Minh nam nay 20 tuoi</h1>
            // </div>
        );
    }
}

export default ChildCompoment;