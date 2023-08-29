import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import newUser from './newUser';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// TODO add user api function
const Login = () => {
    // form data
    const [formState, setFormState] = useState({ email: '', password: '' });
    // const [login, { error, data }] = useMutation(LOGIN_USER);
    const [ loginUser, {error} ] = useMutation(LOGIN_USER);
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
        console.log(formState);
    };

    // will use login api call than set token to local storage
    const handleLogin = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
          const { data } = await loginUser({
            variables: { ...formState },
          });
          console.log(data);
          Auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        }
    
        // clear form values
        setFormState({
          email: '',
          password: '',
        });
    }

    // set the page to home if user is logged in
    useEffect(() => {
        if ( Auth.getToken()) {
            window.location.assign('/home');
        }
     });

    return (
        <div>
            <h2>Welcome Back To AstroLog!</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control placeholder="Enter email" onChange={handleChange} type='Email' id='email' name='email'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleChange} type='Password' id='password' name='password' placeholder="Enter Password"/>
            </Form.Group>

            <Button onClick={handleLogin} variant="primary" type="submit value='login">
                Submit
            </Button>

            <Form.Group>
                <Form.Label>
                    Don't Have an Account? Sign Up Below!
                </Form.Label>
                <div>
                    <Button href='/newUser' variant="primary" value='Create new account'>
                        Sign Up
                    </Button>
                </div>
            </Form.Group>

        </div>
    );
}

export default Login;