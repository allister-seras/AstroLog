import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { formatDate } from '../utils/momentDate';
import { useMutation } from '@apollo/client';
import { CREATE_JOURNAL } from '../utils/mutations';
import Form from 'react-bootstrap/Form';

const Entry = (props) => {
    const { loading, data } = useQuery(QUERY_ME);
    let selectedDate = '';
    const [horoscope, setHoroscope] = useState(data.me.savedHoroscope);
    const [tarot, setTarot] = useState(data.me.savedTarot);
    const [userFormData, setUserFormData] = useState({entryDate: "null", horoscope: "null", tarot: "null", journalText: "null" });
    const [ createJournal, {error} ] = useMutation(CREATE_JOURNAL);

    // sets max date to today
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) {
    dd = '0' + dd;
    }
    if (mm < 10) {
    mm = '0' + mm;
    } 
    today = yyyy + '-' + mm + '-' + dd;

    function dateSelection(event) {
        let dateString = event.target.value;
        selectedDate = formatDate(dateString);
        setUserFormData({...userFormData, entryDate: selectedDate});
    }


    console.log(data);
    // will load while awaiting data
    if (loading) {
        return <h1>Loading...</h1>
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        console.log(userFormData);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
        const { data } = await createJournal({
            variables: { ...userFormData },
        });
        console.log(data);
        } catch (err) {
        console.error(err);
        }
        
        setUserFormData({
        entryDate: '',
        horoscope: '',
        tarot: '',
        journalText: '' 
        });

        window.location.reload();
    };

    return (
    <main>
        <form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="date">Date</Form.Label>
            <input className="form-control" id="date" name="entryDate" type='date' min='1899-01-01' max={today} onChange={dateSelection}></input>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="horoscopeInput">Horoscope</Form.Label>
            <select className="text-wrap" name="horoscope" id="horoscopeInput" defaultValue={'DEFAULT'} onChange={handleInputChange}>
            <option  value="DEFAULT" disabled>Horoscope</option>
            { horoscope?.map((horoscopeIndex, key) => {
                return <option
                key={key}
                value={horoscopeIndex.prediction}>
                    ({horoscopeIndex.createdAt}) {horoscopeIndex.prediction}
                </option>
            })}
            </select>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="tarotInput">Tarot</Form.Label>
            <select className="text-wrap" name="tarot" id="tarotInput" defaultValue={'DEFAULT'} onChange={handleInputChange}>
                <option value="DEFAULT" disabled>Tarot</option>
                {tarot?.map((tarotIndex, key) => {
                    return <option
                    key={key}
                    value={tarotIndex.reading}>
                        ({tarotIndex.createdAt}) {tarotIndex.reading}
                </option>
                })}
            </select>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="journalTexxt">Text</Form.Label>
            <textarea className="form-control" onChange={handleInputChange} name="journalText"></textarea>
        </Form.Group>
        <button className="btn btn-primary" variant="primary" type="submit" disabled={!(userFormData.entryDate && userFormData.journalText)}>
        Save
        </button>
        </form>
    </main>
    );
}

export default Entry;