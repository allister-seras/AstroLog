import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Entry = (props) => {
    const { loading, error, data } = useQuery(QUERY_ME);
    //console.log(data);

    const [horoscope, setHoroscope] = useState(data.me.savedHoroscope);
    const [tarot, setTarot] = useState(data.me.savedTarot);
    const [newEntry, setNewEntry] = useState({horoscope: "null", tarot: "null", text:"null" });

    // will load while awaiting data
    if (loading) {
        return <h1>Loading...</h1>
    }

    // sends data back into API
    const save = () => {
    }

    // sets state when you click off an element
    const saveData = (event) => {
        const { name, value } = event.target;
        setNewEntry({
            ...newEntry,
            [name]: value
        })
        return console.log(newEntry);
    }

    return (<div>
        <select>
            <option value="none">None</option>
            {horoscope.map((horoscopeIndex, key) => {
                return <option 
                onBlur={saveData}
                key={key} 
                name="horoscope">
                    {horoscopeIndex.createdAt}
                </option>
            })}
        </select>
        <select>
            <option onBlur={saveData} value="none">None</option>
            {tarot.map((tarotIndex, key) => {
                return <option onBlur={saveData} 
                key={key} 
                name="tarot">
                    {tarotIndex.reading}
                </option>
            })}
        </select>
        <textarea onBlur={saveData}></textarea>
        <button onClick={save} name="text">Save</button>
    </div>);
}

export default Entry;