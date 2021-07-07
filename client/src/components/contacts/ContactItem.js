import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelopeOpen,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='flex card bg-primary'>
      <div className='cardLeft'>
        <FontAwesomeIcon icon={faUser} />
      </div>

      <div className='cardRight'>
        <h3
          className={
            'text-right ' +
            'badge ' +
            (type === 'professional' ? 'badge-medium' : 'badge-secondary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h3>
        <h3 className='text-secondary-bright text-left'>{name}</h3>
        <ul className='list'>
          {email && (
            <li>
              <span className='text-light-secondary'>
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </span>{' '}
              {email}
            </li>
          )}
          {phone && (
            <li>
              <span className='text-light-secondary'>
                <FontAwesomeIcon icon={faPhone} />{' '}
              </span>
              {phone}
            </li>
          )}
        </ul>
        <p>
          <button
            className='btn btn-dark btn-sm'
            onClick={() => setCurrent(contact)}
          >
            Edit
          </button>
          <button className='btn btn-danger btn-sm' onClick={onDelete}>
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
