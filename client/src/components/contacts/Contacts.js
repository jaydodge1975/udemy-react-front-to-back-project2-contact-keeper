import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  // if (filtered === null && contacts.length !== 0) {
  //   return <h4>No contacts found</h4>;
  // }

  return (
    <div className='my-1'>
      {filtered !== null
        ? filtered.map(contact => (
            <motion.div
              key={contact.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ContactItem key={contact.id} contact={contact} />
            </motion.div>
          ))
        : contacts.map(contact => (
            <motion.div
              key={contact.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ContactItem key={contact.id} contact={contact} />
            </motion.div>
          ))}
    </div>

    // <div className='my-1'>
    //   {filtered !== null
    //     ? filtered.map(contact => (
    //         <ContactItem key={contact.id} contact={contact} />
    //       ))
    //     : contacts.map(contact => (
    //         <ContactItem key={contact.id} contact={contact} />
    //       ))}
    // </div>
  );
};

export default Contacts;
