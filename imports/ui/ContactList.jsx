import React from 'react';
import {ContactsCollection} from '../api/ContactsCollection.js';
import {useTracker} from 'meteor/react-meteor-data';
export const ContactList = () => {
    const contacts = useTracker( () => {
        return  ContactsCollection.find({}).fetch();
    });
    return (
        <div className='mt-10'>
            <h2 className='font-bold text-gray-500'>Contact List</h2>
            <ul className=''>
                {contacts.map(contact => (
                        <li className="p-2 text-white bg-black rounded-md flex gap-2 mt-2" key={contact._id}>
                            <img className="w-12 rounded-md" src={contact.imageURL} alt="" /><p>{contact.name} - {contact.email}</p>
                        </li>
                ))}
            </ul>
        </div>
    );
}

