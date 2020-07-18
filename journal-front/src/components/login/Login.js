import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Login.css';

class signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: undefined,
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:9000/users/login', this.state)
            .then(result => {
                if (result.data.error) {
                    return this.setState(result.data)
                }
                else {
                    this.setState({ user: result.data.name });
                    localStorage.setItem('User', JSON.stringify(this.state.user));
                    return window.location = "/home"
                }

            });
    }

    render() {
        return (
            <div className="LoginPage">
                <div className="row h-100 pt-5 mr-0 loginContainer" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className="col-7 mt-5 pt-5 ">
                        <h1 className="quote ml-5 mt-5">Be Our<br />Guest..</h1>
                    </div>
                    <div className="col-4 mt-5 pt-3">
                        <Form className="LoginForm px-3 py-3 mx-auto mt-3 " noValidate onSubmit={this.onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="FormInput" type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange} />
                                <Form.Text className="text-muted" id="emailshare">We'll never share your email with anyone else.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="FormInput" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                            </Form.Group>
                            <p style={{ color: 'red', textAlign: 'center', fontWeight: 'bolder' }}>{this.state.error}</p>
                            <div id="btn" className="text-center mt-4">
                                <Button className="button" type="submit">Login</Button><br />
                                <span>or</span><br />
                                <Link to="/" ><Button className="button">Sign up</Button></Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default signin;