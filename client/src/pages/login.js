import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import newUser from './newUser';

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
            window.location.assign('/');
        }
     });

    return (
        <div>
            <form>
                <input onChange={handleChange} type='Email' id='email' name='email'/>
                <input onChange={handleChange} type='Password' id='password' name='password'/>
                <input onClick={handleLogin} type='submit' value='login'/>
            </form>
            <div>
                <form>
                    <Link to={{ pathname: '/newUser'}}> 
                        <input type='submit' value='Create new account'/>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;