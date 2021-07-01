import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

const Home = () => {
  return (
    <div className='grid-2 my-1'>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
