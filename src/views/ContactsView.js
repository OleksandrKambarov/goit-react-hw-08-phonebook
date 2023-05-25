import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setStatusModal } from 'redux/modalSlice';
import { getModal } from 'redux/selectors';
// import { useFetchContactsQuery } from 'redux/phonebookSlice';
// import ContactList from 'components/ContactList';
// import { Spinner } from 'components/Spinner/Spinner';

import Modal from '../components/Modal';
import  ContactForm from '../components/ContactForm';
import {
  Book,
  Button,
  CloseButton,
  ModalBlock,
  ModalItems,
  ContactsHead,
} from './ContactsView.styled';


const ContactsView = () => {
//   const { data: contacts, isFetching } = useFetchContactsQuery();
  const showModal = useSelector(getModal);
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setStatusModal(!showModal));
  };
return (
  <>
    <Book>
      <h1>Phonebook</h1>
      <ContactsHead>
        <Button type="button" onClick={toggleModal}>
          Add Contact
        </Button>
      </ContactsHead>
      {showModal && (
        <Modal>
          <ModalBlock>
            <ModalItems>
              <CloseButton type="button" onClick={toggleModal}>
                Close
              </CloseButton>
              <ContactForm />
            </ModalItems>
          </ModalBlock>
        </Modal>
      )}
      {/* {!contacts && isFetching && (
        <>
          <br />
          <Spinner />
        </>
      )} */}
      {/* {contacts && <ContactList contacts={contacts} />} */}
    </Book>
  </>

 );
};
export default ContactsView;

