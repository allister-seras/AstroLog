import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Entry = (props) => {
    const { loading, error, data } = useQuery(QUERY_ME);

    const [horoscope, setHoroscope] = useState(["a","b","c"]);
    const [tarot, setTarot] = useState(data.me.savedTarot);
    const [newEntry, setNewEntry] = useState({horoscope: "null", tarot: "null", text:"null" });


    useEffect(()=>{
        console.log(newEntry);
    },[newEntry]);


    console.log(data);
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
        console.log(`${name}${value}`);
        setNewEntry({
            ...newEntry,
            [name]: value
        })
        return console.log(newEntry);
    }

    const saveDropdown = async (event) => {
        const { name, value } = event.target;
        console.log(`${name}${value}`);
        // console.log(event.target);
        await setNewEntry(prevNewEntry => ({
            ...prevNewEntry,
            [name]: value
        }));
    }

    return (<div>
        <select onChange={saveDropdown} name="horoscope" value={newEntry.horoscope}>
            <option value="none">None</option>
            { horoscope?.map((horoscopeIndex, key) => {
                return <option 
                key={key}
                value={horoscopeIndex}>
                    {horoscopeIndex}
                    
                </option>
            })}
        </select>
        <select onChange={saveDropdown} name="tarot" value={newEntry.horoscope}>
            <option value="none">None</option>
            {tarot.map((tarotIndex, key) => {
                return <option key={key}>
                    {tarotIndex.reading}
                </option>
            })}
        </select>
        <textarea onChange={saveData} name="text"></textarea>
        <button onClick={save} name="text">Save</button>
    </div>);
}

export default Entry;