import React, { useState, useEffect } from 'react';

const JournalForm = (props) => {
    return (
    <div className='border border-dark content p-4'>
        <h3>{props.date}</h3>
        <h3>Horoscope</h3>
        <p>{props.horoscope}</p>
        <h3>Tarot</h3>
        <p>{props.tarot}</p>
        <h3>Entry</h3>
        <p>{props.journalText}</p>
    </div>
    );
}

export default JournalForm;