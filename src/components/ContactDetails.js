import React from 'react';
import { useFormInput } from './../customHooks';

export default function Header(props) {
    const addressLineOne = useFormInput('Address Line 1');
    const city = useFormInput('City');
    const county = useFormInput('County');
    const postcode = useFormInput('Postcode');
    const phoneNumber = useFormInput('01234567891');
    const website = useFormInput('www.mywebsite.com');
    const email = useFormInput('myemail@email.com')

    return (
        <div className='contact-details row'>
            <div>
                <h2>Address</h2>
                <input {...addressLineOne} maxLength={29}/>
                <input {...city} maxLength={29}/>
                <input {...county} maxLength={29}/>
                <input {...postcode} maxLength={29}/>
            </div>
            <div>
                <h2>Phone</h2>
                <input {...phoneNumber} maxLength={29}/>
            </div>
            <div>
                <h2>Email</h2>
                <input {...email} maxLength={29}/>
            </div>
            <div>
                <h2>Website</h2>
                <input {...website} maxLength={29}/>
            </div>
        </div>
    )
}