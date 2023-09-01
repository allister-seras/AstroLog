import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_JOURNALS } from '../utils/queries';

import '../App.css';
import JournalForm from '../components/journalForm';
import Entry from '../components/entry'

const Journal = () => {
    const [entryVisible, setEntryVisible] = useState(false);
    const { loading, data } = useQuery(QUERY_JOURNALS);

    const toggleEntry = () => {
      setEntryVisible(!entryVisible);
    };

    const checkToken = localStorage.getItem("id_token");

    if (!checkToken) {
      return <h1>Please log in to view this page.</h1>
    };

    // will load while awaiting data
    if (loading) {
      return <h1>Loading...</h1>
    }

    return (
    <div>
       {data.journals.map((entry, key)=> {
          return ( <JournalForm
              key={key}
              date={entry.entryDate}
              tarot={entry.tarot}
              horoscope={entry.horoscope}
              journalText={entry.journalText}
            />)
        })}
        <h1>Create a journal entry</h1>
        
        {entryVisible ? <Entry /> : null}
      <button className="btn btn-primary" type="button" onClick={toggleEntry}>
        {entryVisible ? 'Cancel' : 'New Entry'}
      </button>
    </div>
    );
}

export default Journal;