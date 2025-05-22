import React, {useState} from 'react';
import {Meteor} from 'meteor/meteor';
import { MessageNotification } from './MessageNotification';
export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [response, setResponse] = useState({});
    
    const submit =  () => {
        Meteor.call('contacts.insert', name, email, imageURL, (error) => {
            if (error) {
                setResponse({type: 'error', message: error.reason});
            } else {
                setName('');
                setEmail('');
                setImageURL('');
                setResponse({type: 'success', message: 'Contact added successfully!'});
                setTimeout(() => {
                    setResponse({});
                }
                , 6000);
            }
        })

    }
    return(
        
    <div className='mt-10  p-4 shadow-md rounded-lg border'>
        {response?.type && <MessageNotification type={response.type} message={response.message} />}
        <form className='flex flex-col w-full gap-4 items-center' >
            <div className='flex w-full gap-4 justify-center'>
                <div className='flex flex-col w-50 font-bold'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className='h-8 rounded-lg border border-solid ' onChange={(e) => setName(e.target.value)} value={name}/>
                </div>
                <div className='flex flex-col font-bold'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className='h-8 rounded-lg border border-solid'  onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className='flex flex-col font-bold'>
                    <label htmlFor="imageURL">Image URL</label>
                    <input type="text" id="imageURL" name="imageURL" className='h-8 rounded-lg border border-solid' onChange={(e) => setImageURL(e.target.value)} value={imageURL} />
                </div>
            </div>
                <div>
                    <button type="button"onClick={submit} className='bg-black text-white p-2 rounded-lg'>Save Contact</button>
                </div>
        </form>
    </div>

)}