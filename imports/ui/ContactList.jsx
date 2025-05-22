import React from 'react';
import {ContactsCollection} from '../api/ContactsCollection.js';
import { useSubscribe, useFind} from 'meteor/react-meteor-data';

export const ContactList = () => {
   const isLoading = useSubscribe('allContacts');
    const contacts = useFind(() => {
        return ContactsCollection.find({});
    })
    const deleteSubmit = (e, contactId) => {
        e.preventDefault();
        Meteor.call('contacts.remove', contactId, (error) => {
            if (error) {
                console.error('Error deleting contact:', error);
            } else {
                console.log('Contact deleted successfully');
            }
        });
    };
    console.log(isLoading())
    return (
        <div className='mt-10'>
            <h2 className='font-bold text-gray-500'>Contact List</h2>
            {isLoading() && <p className='text-center'>Loading...</p>}
            <ul className=''>
                {contacts.map(contact => (
                        <li className="p-2 text-white bg-black rounded-xl  mt-2 flex justify-between " key={contact._id}>
                            <div className='flex gap-2'><img className="w-12 h-12 rounded-md " src={contact.imageURL} alt="" /><p>{contact.name} - {contact.email}</p></div>
                            <div className='flex items-center '>
                                <button type="button" className='text-white border border-white rounded-xl h-8 px-1 hover:bg-gray-700 ' onClick={(e) => deleteSubmit(e, contact._id)}>delete</button>
                            </div>
                        </li>
                ))}
            </ul>
        </div>
    );
}

