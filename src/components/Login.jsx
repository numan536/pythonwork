import React from 'react';
import axios from 'axios';
import '../style.css'


class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:4000/login', {
            email: this.state.email,
            pass: this.state.password

        })
        console.log('res.data', res.data);
        this.setState({
            email: '',
            password: ''
        })
    }


    render() {
        console.log('this.state', this.state)
        return (
            <div>
                <div className="login-form">
                    <form method="post">
                        <h2 className="text-center">Log in</h2>
                        <div className="form-group">
                            <input value={this.state.email} onChange={this.handleChangeEmail} type="text" className="form-control" placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                            <input value={this.state.password} onChange={this.handleChangePassword} type="password" className="form-control" placeholder="Password" required="required" />
                        </div>
                        <div className="form-group">
                            <button onClick={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Log in</button>
                        </div>
                        <div className="clearfix">
                            <label className="pull-left checkbox-inline"><input type="checkbox" />  Remember me </label>
                            {/* <a href="#" className="pull-right">Forgot Password?</a> */}
                        </div>
                    </form>

                </div>
                {/* <Row>
                    <Col>
                        <Register />
                    </Col>
                </Row> */}
            </div>
        )
    }
}

export default Login;
