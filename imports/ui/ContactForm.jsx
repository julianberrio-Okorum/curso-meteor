import React, {useState} from 'react';
import {ContactsCollection} from '../api/ContactsCollection.js';
export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [imageURL, setImageURL] = useState('');
    
    const submit =  () => {
        ContactsCollection.insert({
            name,
            email,
            imageURL
        });
        setName('');
        setEmail('');
        setImageURL('');
    }
    return(
    <div>
        <form >
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label htmlFor="imageURL">Image URL</label>
                <input type="text" id="imageURL" name="imageURL" onChange={(e) => setImageURL(e.target.value)} value={imageURL} />
            </div>
            <div>
                <button type="button"onClick={submit}>Save Contact</button>
            </div>
        </form>
    </div>

)}