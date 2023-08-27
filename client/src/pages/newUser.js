import react, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import newUser from './newUser';

const login = () => {
    // const handleLogin = () => {
        
    // }

    return (
        <div>
            <form>
                <input type='username' id='userName' name='username'/>
                <input type='email' id='email' name='email'/>
                <input type='password' id='passWord' name='password'/>
                <input type='zodiacName' id='zodiac' name='zodiacName'/>
                <input type='float' id='timeZone' name='timezone'/>
                <input type='submit' value='login'/>
            </form>
        </div>
    );
}

export default login;