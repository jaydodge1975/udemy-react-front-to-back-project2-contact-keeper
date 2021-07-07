import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faUserCircle,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>
        <FontAwesomeIcon icon={faUserCircle} /> {user && user.name}
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
          <span className='hide-sm'>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </span>
        </a>
      </li>
      <li>
        <Link to='/about'>
          <FontAwesomeIcon icon={faQuestionCircle} /> About
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/login'>
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Link>
      </li>
      <li>
        <Link to='/register'>
          <FontAwesomeIcon icon={faUserPlus} /> Register
        </Link>
      </li>
      <li>
        <Link to='/about'>
          <FontAwesomeIcon icon={faQuestionCircle} /> About
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <span className='text-secondary-bright'>
            <FontAwesomeIcon icon={faAddressCard} />
          </span>{' '}
          {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
};

export default Navbar;
