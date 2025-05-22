import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

export const App = () => (
  <div>
    <div className='max-w-4xl mx-auto p-4'>
      <ContactForm />
      <ContactList />
    </div>
  </div>
);
