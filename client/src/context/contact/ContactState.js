import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
   ADD_CONTACT,
   DELETE_CONTACT,
   SET_CURRENT,
   CLEAR_CURRENT,
   UPDATE_CONTACTS,
   FILTER_CONTACTS,
   CLEAR_FILTER
} from '../types';

const ContactState = props => {
   const initialState = {
      contacts: [
         {
            id: 1,
            name: 'Sam Smith',
            email: 'ssmith@gmail.com',
            phone: '333-333-3333',
            type: 'personal'
         },
         {
            id: 2,
            name: 'Jenny Joy',
            email: 'jj@gmail.com',
            phone: '322-333-3312',
            type: 'personal'
         },
         {
            id: 3,
            name: 'Henk Hoofd',
            email: 'hoofd@gmail.com',
            phone: '333-434-9923',
            type: 'professional'
         }
      ]
   };

   const [state, dispatch] = useReducer(contactReducer, initialState);

   // Add Contact

   // Delete Contact

   // Set Current Contact

   // Clear Current Contact

   // Update Contact

   // Filter Contact

   // Clear Filter

   return (
      <ContactContext.Provider
         value={{
            contacts: state.contacts
         }}
      >
         {props.children}
      </ContactContext.Provider>
   );
};

export default ContactState;
