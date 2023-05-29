import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setStatusModal } from 'redux/modalSlice';
import { getModal } from 'redux/selectors';

import Modal from '../components/Modal';
import ContactForm from '../components/ContactForm';
import {
  Book,
  Button,
  CloseButton,
  ModalBlock,
  ModalItems,
  ContactsHead,
} from './ContactsView.styled';

const ContactsView = () => {
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
      </Book>
    </>
  );
};

export default ContactsView;
