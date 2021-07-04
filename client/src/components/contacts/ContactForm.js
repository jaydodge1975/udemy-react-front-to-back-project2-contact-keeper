import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='formTitle text-secondary-bright'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
        autoComplete='off'
      />

      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
        autoComplete='off'
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
        autoComplete='off'
      />

      <h5>Contact Type</h5>

      <div className='flex'>
        <div className='inputContainer'>
          <input
            type='checkbox'
            name='type'
            value='personal'
            checked={type === 'personal'}
            onChange={onChange}
            className='inputContainer '
          />
          <span className='checkmark'></span>
          <span className='checkmarkFont'>Personal</span>
        </div>

        <div className='inputContainer'>
          <input
            type='checkbox'
            name='type'
            value='professional'
            checked={type === 'professional'}
            onChange={onChange}
            className='inputContainer '
          />
          <span className='checkmark'></span>
          <span className='checkmarkFont'>Professional</span>
        </div>
      </div>

      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>

      {current && (
        <div>
          <button className='btn btn-primary btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
