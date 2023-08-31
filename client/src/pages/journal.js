import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_JOURNALS } from '../utils/queries';

import '../App.css';
import JournalForm from '../components/journalForm';
import Entry from '../components/entry'

const Journal = () => {
    const [entryVisible, setEntryVisible] = useState(false);
    const { loading, data } = useQuery(QUERY_JOURNALS);

    console.log(data);

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
        <h1>Create a journal entry</h1>
        {entryVisible ? <Entry /> : null}
      <button className="btn btn-primary" type="button" onClick={toggleEntry}>
        {entryVisible ? 'Cancel' : 'New Entry'}
      </button>
    </div>
    );
}

export default Journal;