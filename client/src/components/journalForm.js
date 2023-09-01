import React, { useState, useEffect } from 'react';

const JournalForm = (props) => {
    return (
    <div>
        <h3>{props.date}</h3>
        <p>{props.horoscope}</p>
        <p>{props.tarot}</p>
        <p>{props.journalText}</p>
    </div>
    );
}

export default JournalForm;