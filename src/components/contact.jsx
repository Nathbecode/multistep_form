import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
    const [step, setStep] = useState(1); // Track the current step
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [option, setOption] = useState('');


    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_q756qif';
        const templateId = 'template_wysxnus';
        const publicKey = 'fI5HyMyBbs3K-9ebJ';

        const templateParams = {
            from_name: name,
            from_email: email,
            from_options: option,
            to_name: 'Nath',
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully', response);
                setName('');
                setEmail('');
                setOption('');
                setStep(4); // Move to the "Thank You" step
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const inputform = 'block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500';
    const buttonstyle = 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded';

    // Handle form submission
    const handleNext = (e) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            sendEmail(e); // Send email on the final step
        }
    };

    return (
        <form ref={form} onSubmit={handleNext} className='bg-white p-6 rounded-lg shadow-lg flex flex-col gap-10'>
            {step === 1 && (
                <>
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
                        name="email"
                        value={email}
                        className={inputform}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </>
            )}
            {step === 2 && (
                <>
                    <label htmlFor="options">How happy are you with our services?</label>
                    <select
                        id="options"
                        name="options"
                        value={option}
                        onChange={(e) => setOption(e.target.value)}
                        className="text-2xl"
                    >
                        <option value="&#128529;Happy">😐 Unhappy</option>
                        <option value="&#128533;Couldbebetter">😕 Could be better</option>
                        <option value="&#128523;Satisfied">😃 Satisfied</option>
                        <option value="&#128525;Vsatisfied">😍 Very Satisfied</option>
                    </select>
                </>
            )}
            {step === 3 && (
                <>
                    <label>Confirm Submit</label>
                    <h1>Information:</h1>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>Feedback: {option}</p>
                </>
            )}
            {step < 4 && (
                <button
                    type="submit"
                    className={buttonstyle}
                >
                    {step < 3 ? 'Next' : 'Submit'}
                </button>
            )}
            {step === 4 && (
                <>
                    <h1 className="text-3xl font-bold text-center">THANK YOU!</h1>
                    <p className="text-xl text-center">We have received your feedback.</p>
                </>
            )}
        </form>
    );
};
