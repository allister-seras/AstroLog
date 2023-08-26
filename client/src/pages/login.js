import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import newUser from './newUser';

// TODO add user api function
const Login = () => {
    // form data
    const [formState, setFormState] = useState({ email: '', password: '' });
    // const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // will use login api call than set token to local storage
    const handleLogin = async (event) => {
        event.preventDefault();
        console.log(formState);
        // try {
        //   const { data } = await login({
        //     variables: { ...formState },
        //   });
    
        //   Auth.login(data.login.token);
        // } catch (e) {
        //   console.error(e);
        // }
    
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