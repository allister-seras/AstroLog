import react, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import newUser from './newUser';

const login = () => {
    // const handleLogin = () => {
        
    // }

    return (
        <div>
            <form>
                <input type='Username' id='userName' name='userName'/>
                <input type='Email' id='email' name='email'/>
                <input type='Password' id='passWord' name='passWord'/>
                <input type='submit' value='login'/>
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

export default login;