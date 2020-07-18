import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Registeration.css';

class registeration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
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
        axios.post('http://localhost:9000/users/register', this.state)
            .then(result => {
                if (result.data.error) {
                    return this.setState(result.data)
                }
                localStorage.setItem('User', JSON.stringify(this.state.name));
                return window.location = "/home"
            });
    }

    render() {
        return (
            <div className="RegistrationPage ">
                <div className="h-100 pt-5 registerContainer" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <h1>Join Us Now!</h1>
                    <div className="mx-auto mt-3 col-8" id="RegistrationForm ">
                        <Form className="RegistrationForm px-3 py-3 mx-auto w-50" noValidate onSubmit={this.onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control className="FormInput" type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.onChange} />                        </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="FormInput" type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange} />
                                <Form.Text className="text-muted" id="emailshare">We'll never share your email with anyone else.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="FormInput" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                            </Form.Group>
                            <p style={{ color: 'red', textAlign: 'center' }}>{this.state.error}</p>
                            <div id="btn" className="text-center w-50 mx-auto">
                                <Button className="button" type="submit">Sign up</Button><br />
                                <span>or</span><br />
                                <Link to="/login" ><Button className="button">Sign in</Button></Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default registeration;