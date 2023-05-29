import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operations';
import { setStatusModal } from 'redux/modalSlice';
import { selectAllContacts } from 'redux/contacts/selectors';

import { Button, Form, Label } from './ContactForm.styled';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleName = e => {
    setName(e.currentTarget.value);
  };
  const handleNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isNameExists = contacts.some(
      contact => contact.name?.toLowerCase() === name.toLowerCase()
    );
    if (isNameExists) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    dispatch(setStatusModal(false));
  };

  return (
    <>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label htmlFor="name">
          <p>Name:</p>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleName}
            required
          />
        </Label>
        <br />
        <Label htmlFor="number">
          <p>Number:</p>
          <input
            type="tel"
            id="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            onChange={handleNumber}
            required
          />
        </Label>
        <br />
        <Button type="submit">Add Contact</Button>
      </Form>
    </>
  );
};
export default ContactForm;
