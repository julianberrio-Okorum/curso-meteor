import {Meteor} from 'meteor/meteor';
import {ContactsCollection} from './ContactsCollection.js';

Meteor.methods({
    'contacts.insert'(name, email, imageURL){
        if(!name || !email || !imageURL){
            throw new Meteor.Error('Invalid contact', 'All fields are required');
        }
        ContactsCollection.insert({
            name,
            email,
            imageURL
        });
    }
})