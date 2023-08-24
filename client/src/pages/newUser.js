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
                <input type='text' id='zodiac' name='Zodiac Sign'/>
                <input type='float' id='timeZone' name='Time Zone'/>
                <input type='submit' value='login'/>
            </form>
        </div>
    );
}

export default login;