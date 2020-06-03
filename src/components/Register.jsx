import React from 'react';
import axios from 'axios'

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:4000/register', {
            username: this.state.name,
            pass: this.state.password,
            email: this.state.email
        })
        console.log('res.data', res.data);
        this.setState({
            name: '',
            email: '',
            password: ''
        })
    }

    render() {
        console.log('this.state', this.state)
        return (
            <div>
                {/* <div>
                    <img src="/images/background.png" style={{ width: "500px", height: "500px" }} />
                </div> */}
                <div className="login-form">
                    <form method="post">
                        <h2 className="text-center">Create Employee</h2>
                        <div className="form-group">
                            <input value={this.state.name} name="name" onChange={this.handleChange} type="text" className="form-control" placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                            <input value={this.state.email} name="email" onChange={this.handleChange} type="text" className="form-control" placeholder="Email" required="required" />
                        </div>
                        <div className="form-group">
                            <input value={this.state.password} name="password" onChange={this.handleChange} type="password" className="form-control" placeholder="PassWord" required="required" />
                        </div>
                        <div className="form-group">
                            <button onClick={this.handleSubmit} type="submit" className="btn btn-primary btn-block">Register</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default Register;
