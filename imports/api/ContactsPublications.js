import {Meteor} from 'meteor/meteor';
import {ContactsCollection} from './ContactsCollection.js';

Meteor.publish('allContacts', function() {
    return ContactsCollection.find();
}
);