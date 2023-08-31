import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import '../App.css';
import JournalForm from '../components/journalForm';
import Entry from '../components/entry'

const Journal = () => {
    const [entryVisible, setEntryVisible] = useState(false);
    
    const toggleEntry = () => {
      setEntryVisible(!entryVisible);
    };

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