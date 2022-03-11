import React from 'react';
import { useFormInput } from './../customHooks';

export default function Header(props) {
    const name = useFormInput('Name');
    const pronoun = useFormInput('Pronoun');
    const summary = useFormInput('Summary');

    return (
        <div className='header row'>
            <input className="name"{...name} />
            <input className="pronoun"{...pronoun} />
            <textarea rows={5} className="summary"{...summary} />
        </div>
    )
}

