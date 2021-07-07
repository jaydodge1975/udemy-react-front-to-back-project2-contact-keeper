import React, { Fragment, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactItem from './ContactItem';
import Circular from '../layout/Circular';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  // if (filtered === null && contacts.length !== 0) {
  //   return <h4>No contacts found</h4>;
  // }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <div className='my-1'>
          {filtered !== null
            ? filtered.map(contact => (
                <motion.div
                  key={contact._id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <ContactItem key={contact.id} contact={contact} />
                </motion.div>
              ))
            : contacts.map(contact => (
                <motion.div
                  key={contact._id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <ContactItem key={contact.id} contact={contact} />
                </motion.div>
              ))}
        </div>
      ) : (
        <Circular />
      )}
    </Fragment>
  );
};

export default Contacts;
