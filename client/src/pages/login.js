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
    const [ loginUser, { error, data } ] = useMutation(LOGIN_USER);
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
            <form onSubmit={handleLogin} >
                <input onChange={handleChange} type='email' id='email' name='email' value={formState.email}/>
                <input onChange={handleChange} type='password' id='password' name='password' value={formState.password}/>
                <button type='submit' value='login'
                  style={{ cursor: 'pointer' }}> Submit </button>
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