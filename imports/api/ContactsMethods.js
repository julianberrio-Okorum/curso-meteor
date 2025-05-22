import {Meteor} from 'meteor/meteor';
import {ContactsCollection} from './ContactsCollection.js';
import {check} from 'meteor/check';

Meteor.methods({
    'contacts.insert'(name, email, imageURL){
        if(!name || !email || !imageURL){
            throw new Meteor.Error('Invalid contact', 'All fields are required');
        }
        check(name, String);
        check(email, String);
        check(imageURL, String);
        ContactsCollection.insert({
            name,
            email,
            imageURL
        });
    },
    'contacts.remove'(contactId){
        if(!contactId){
            throw new Meteor.Error('Invalid contact', 'Contact ID is required');
        }
        check(contactId, String);
        ContactsCollection.remove(contactId);
    }
})