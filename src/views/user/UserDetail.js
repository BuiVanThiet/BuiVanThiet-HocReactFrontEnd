import React from "react";
import axios from "axios";
import withRouter from "../WithRouter";
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class UserDetail extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props && this.props.params) {
            let id = this.props.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`)

            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    render() {
        console.log('user ', this.state.user)
        console.log('check props ', this.props)
        return (
            <>
                name : {this.state.user.first_name}
                <br></br>
                <Button type="dashed"><Link to="/user/home">Back</Link></Button>
            </>
        )
    }
}

export default withRouter(UserDetail);