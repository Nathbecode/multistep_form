import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_q756qif';
        const templateId = 'template_wysxnus';
        const publicKey = 'fI5HyMyBbs3K-9ebJ';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'form',
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully', response);
                setName('');
                setEmail('');
            })
            .catch((error) =>{
                console.error('error:', error)
            })
    };

    const inputform = 'block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500';
    const buttonstyle= 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded';

    return (
        <form ref={form} onSubmit={sendEmail} className='bg-white p-6 rounded-lg shadow-lg flex flex-col gap-10'>
            <input 
                type="text" 
                placeholder='Your Name'
                name="user_name" 
                value={name}
                className={inputform}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="email" 
                placeholder='Your Email'
                name="user_email" 
                value={email}
                className={inputform}
                onChange={(e) => setEmail(e.target.value)}
            />
            {/* <label>Message</label>
            <textarea 
                name="message" 
            /> */}
            <button
                onClick={next} 
                className={buttonstyle}
            >
                Next
            </button>
        </form>
    );
};