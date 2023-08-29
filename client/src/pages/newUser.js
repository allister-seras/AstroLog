import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const NewUser = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', zodiacName: '', timezone: '' });
    const [ addUser, {error} ] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleTimezone = (event) => {
        const { name, value } = event.target;
        const timezoneFloat = parseFloat(value);
        setUserFormData({ ...userFormData, [name]: timezoneFloat})
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
        const {data} = await addUser({
            variables: { ...userFormData },
        });
        console.log(data);
        Auth.login(data.addUser.token);
        } catch (err) {
        console.error(err);
        }
        
        setUserFormData({
        username: '',
        email: '',
        password: '',
        zodiacName: '',
        timezone: '' 
        });
        
    };

    const zodiacArray = [
        {name:"Aries (March 21 - April 19)",
        value: "aries"},

        {name:"Taurus (April 20 - May 20)",
        value: "taurus"},

        {name:"Gemini (May 21 - June 20)",
        value: "gemini"},

        {name:"Cancer (June 21 - July 22)",
        value: "cancer"},

        {name:"Leo (July 23 - August 22)",
        value: "leo"},

        {name:"Virgo(August 23 - September 22)",
        value: "virgo"},

        {name:"Libra (September 23 - October 22)",
        value: "libra"},

        {name:"Scorpio (October 23 - November 21)",
        value: "scorpio"},

        {name:"Sagittarius (November 22 - December 21)",
        value: "sagittarius"},

        {name:"Capricorn (December 22 - January 19)",
        value: "capricorn"},

        {name:"Aquarius (January 20 - February 18)",
        value: "aquarius"},

        {name:"Pisces (February 19 - March 20)",
        value: "pisces"},
    ];

    const timezonesArray = [
        {name:"(UTC-12:00) International Date Line West",
        value: -12.0},

        {name:"(UTC-11:00) Coordinated Universal Time-11",
        value: -11.0},

        {name:"(UTC-10:00) Hawaii",
        value: -10.0},

        {name:"(UTC-09:00) Alaska",
        value: -9.0},

        {name:"(UTC-08:00) Baja California",
        value: -8.0},

        {name:"(UTC-08:00) Pacific Time (US and Canada)",
        value: -8.0},

        {name:"(UTC-07:00) Chihuahua, La Paz, Mazatlan",
        value: -7.0},

        {name:"(UTC-07:00) Arizona",
        value: -7.0},

        {name:"(UTC-07:00) Mountain Time (US and Canada)",
        value: -7.0},

        {name:"(UTC-06:00) Central America",
        value: -6.0},

        {name:"(UTC-06:00) Central Time (US and Canada)",
        value: -6.0},

        {name:"(UTC-06:00) Saskatchewan",
        value: -6.0},

        {name:"(UTC-06:00) Guadalajara, Mexico City, Monterey",
        value: -6.0},

        {name:"(UTC-05:00) Bogota, Lima, Quito",
        value: -5.0},

        {name:"(UTC-05:00) Indiana (East)",
        value: -5.0},

        {name:"(UTC-05:00) Eastern Time (US and Canada)",
        value: -5.0},

        {name:"(UTC-04:30) Caracas",
        value: -4.5},

        {name:"(UTC-04:00) Atlantic Time (Canada)",
        value: -4.0},

        {name:"(UTC-04:00) Asuncion",
        value: -4.0},

        {name:"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
        value: -4.0},

        {name:"(UTC-04:00) Cuiaba",
        value: -4.0},

        {name:"(UTC-04:00) Santiago",
        value: -4.0},

        {name:"(UTC-03:30) Newfoundland",
        value: -3.5},

        {name:"(UTC-03:00) Brasilia",
        value: -3.0},

        {name:"(UTC-03:00) Greenland",
        value: -3.0},

        {name:"(UTC-03:00) Cayenne, Fortaleza",
        value: -3.0},

        {name:"(UTC-03:00) Buenos Aires",
        value: -3.0},

        {name:"(UTC-03:00) Montevideo",
        value: -3.0},

        {name:"(UTC-02:00) Coordinated Universal Time-2",
        value: -2.0},

        {name:"(UTC-01:00) Cape Verde",
        value: -1.0},

        {name:"(UTC-01:00) Azores",
        value: -1.0},

        {name:"(UTC+00:00) Casablanca",
        value: 0.0},

        {name:"(UTC+00:00) Monrovia, Reykjavik",
        value: 0.0},

        {name:"(UTC+00:00) Dublin, Edinburgh, Lisbon, London",
        value: 0.0},

        {name:"(UTC+00:00) Coordinated Universal Time",
        value: 0.0},

        {name:"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
        value: 1.0},

        {name:"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
        value: 1.0},

        {name:"(UTC+01:00) West Central Africa",
        value: 1.0},

        {name:"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
        value: 1.0},

        {name:"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
        value: 1.0},

        {name:"(UTC+01:00) Windhoek",
        value: 1.0},

        {name:"(UTC+02:00) Athens, Bucharest, Istanbul",
        value: 2.0},

        {name:"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
        value: 2.0},

        {name:"(UTC+02:00) Cairo",
        value: 2.0},

        {name:"(UTC+02:00) Damascus",
        value: 2.0},

        {name:"(UTC+02:00) Amman",
        value: 2.0},

        {name:"(UTC+02:00) Harare, Pretoria",
        value: 2.0},

        {name:"(UTC+02:00) Jerusalem",
        value: 2.0},

        {name:"(UTC+02:00) Beirut",
        value: 2.0},

        {name:"(UTC+03:00) Baghdad",
        value: 3.0},

        {name:"(UTC+03:00) Minsk",
        value: 3.0},

        {name:"(UTC+03:00) Kuwait, Riyadh",
        value: 3.0},

        {name:"(UTC+03:00) Nairobi",
        value: 3.0},

        {name:"(UTC+03:30) Tehran",
        value: 3.5},

        {name:"(UTC+04:00) Moscow, St. Petersburg, Volgograd",
        value: 4.0},

        {name:"(UTC+04:00) Tbilisi",
        value: 4.0},

        {name:"(UTC+04:00) Yerevan",
        value: 4.0},

        {name:"(UTC+04:00) Abu Dhabi, Muscat",
        value: 4.0},

        {name:"(UTC+04:00) Baku",
        value: 4.0},

        {name:"(UTC+04:00) Port Louis",
        value: 4.0},

        {name:"(UTC+04:30) Kabul",
        value: 4.5},

        {name:"(UTC+05:00) Tashkent",
        value: 5.0},

        {name:"(UTC+05:00) Islamabad, Karachi",
        value: 5.0},

        {name:"(UTC+05:30) Sri Jayewardenepura Kotte",
        value: 5.5},

        {name:"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        value: 5.5},

        {name:"(UTC+05:45) Kathmandu",
        value: 5.45},

        {name:"(UTC+06:00) Astana",
        value: 6.0},

        {name:"(UTC+06:00) Dhaka",
        value: 6.0},

        {name:"(UTC+06:00) Yekaterinburg",
        value: 6.0},

        {name:"(UTC+06:30) Yangon",
        value: 6.5},

        {name:"(UTC+07:00) Bangkok, Hanoi, Jakarta",
        value: 7.0},

        {name:"(UTC+07:00) Novosibirsk",
        value: 7.0},

        {name:"(UTC+08:00) Krasnoyarsk",
        value: 8.0},

        {name:"(UTC+08:00) Ulaanbaatar",
        value: 8.0},

        {name:"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
        value: 8.0},

        {name:"(UTC+08:00) Perth",
        value: 8.0},

        {name:"(UTC+08:00) Kuala Lumpur, Singapore",
        value: 8.0},

        {name:"(UTC+08:00) Taipei",
        value: 8.0},

        {name:"(UTC+09:00) Irkutsk",
        value: 9.0},

        {name:"(UTC+09:00) Seoul",
        value: 9.0},

        {name:"(UTC+09:00) Osaka, Sapporo, Tokyo",
        value: 9.0},

        {name:"(UTC+09:30) Darwin",
        value: 9.5},

        {name:"(UTC+09:30) Adelaide",
        value: 9.5},

        {name:"(UTC+10:00) Hobart",
        value: 10.0},

        {name:"(UTC+10:00) Yakutsk",
        value: 10.0},

        {name:"(UTC+10:00) Brisbane",
        value: 10.0},

        {name:"(UTC+10:00) Guam, Port Moresby",
        value: 10.0},

        {name:"(UTC+10:00) Canberra, Melbourne, Sydney",
        value: 10.0},

        {name:"(UTC+11:00) Vladivostok",
        value: 11.0},

        {name:"(UTC+11:00) Solomon Islands, New Caledonia",
        value: 11.0},

        {name:"(UTC+12:00) Coordinated Universal Time+12",
        value: 12.0},

        {name:"(UTC+12:00) Fiji, Marshall Islands,",
        value: 12.0},

        {name:"(UTC+12:00) Magadan,",
        value: 12.0},

        {name:"(UTC+12:00) Auckland, Wellington",
        value: 12.0},

        {name:"(UTC+13:00) Nuku'alofa",
        value: 13.0},

        {name:"(UTC+13:00) Samoa",
        value: 13.0},
    ];


    return (
        <main> 
        <form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label htmlFor="userName">Username</Form.Label>
                <Form.Control type='text' id='username' name='username' onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId='formBasicEmail'>
                <Form.Label htmlFor="email">E-mail</Form.Label>
                <Form.Control type='email' id='email' name='email' onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label htmlFor="email">Password</Form.Label>
                <Form.Control type='password' id='password' name='password' placeholder="Password" onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicZodiac">
                <Form.Label htmlFor="zodiacName">Select Your Sun Sign</Form.Label>
                <select defaultValue={'DEFAULT'} id='zodiacName' name='zodiacName' onChange={handleInputChange}>
                    <option value="DEFAULT" disabled>-- select your sun sign --</option>
                    {zodiacArray.map((element, index) => ( 
                    <option key={index} value={element.value}>{element.name}</option>
                    ))}
                </select>
            </Form.Group>    

            <Form.Group className="mb-3" controlId="formBasicTimeZone">
                <Form.Label htmlFor="timezone">Select Your Time Zone</Form.Label>
                <select defaultValue={'DEFAULT'} id='timezone' name='timezone' onChange={handleTimezone}>
                    <option value="DEFAULT" disabled>-- select your timezone --</option>
                    {timezonesArray.map((element, index) => ( 
                    <option key={index} value={element.value}>{element.name}</option>
                    ))}
                </select>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!(userFormData.username && userFormData.email && userFormData.password && userFormData.zodiacName && userFormData.timezone)}>
                Create Your Account
            </Button>
        </form>
        </main>
    );
};

export default NewUser;