import React, { useContext } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  // const nodeRef = useRef(null);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  // if (filtered === null && contacts.length !== 0) {
  //   return <h4>No contacts found</h4>;
  // }

  return (
    // <div className='my-1'>
    //   <TransitionGroup>
    //     {filtered !== null
    //       ? filtered.map(contact => (
    //           <CSSTransition
    //             // nodeRef={nodeRef}
    //             key={contact.id}
    //             timeout={750}
    //             classNames='item'
    //           >
    //             <ContactItem contact={contact} />
    //           </CSSTransition>
    //         ))
    //       : contacts.map(contact => (
    //           <CSSTransition
    //             // nodeRef={nodeRef}
    //             key={contact.id}
    //             timeout={750}
    //             classNames='item'
    //           >
    //             <ContactItem contact={contact} />
    //           </CSSTransition>
    //         ))}
    //   </TransitionGroup>
    // </div>

    <div className='my-1'>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </div>
  );
};

export default Contacts;